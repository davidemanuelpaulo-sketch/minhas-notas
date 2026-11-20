// Camada de dados na nuvem (Supabase).
// Imita a pequena interface que o app já usava (db, user, assets, downloads),
// para que o restante do código continue igual.
// - Guarda uma cópia local (cache) para abrir rápido e funcionar sem internet.
// - Mudanças feitas sem internet ficam numa fila (outbox) e são enviadas depois.
// - Recebe em tempo real as mudanças feitas em outro aparelho.

const TABLE = 'itens';
const BUCKET = 'anexos';
const BLANK = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';

function load(key, fallback) {
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch (e) { return fallback; }
}
function save(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* armazenamento cheio: segue só na memória */ }
}

export function makeCloud(sb, user, onDownload) {
  const uid = user.id;
  const CACHE = 'mn-cache-' + uid, OUT = 'mn-outbox-' + uid;
  let cache = load(CACHE, {});      // id -> corpo do documento
  const outbox = load(OUT, {});     // id -> {op:'set'|'del', body?}
  const listeners = new Set();
  let flushing = false, retryT = null, loadedOnce = false;

  function emit(fromCache) {
    const docs = Object.keys(cache).map(id => ({ id, exists: true, data: () => cache[id] }));
    const meta = { fromCache, hasPendingWrites: Object.keys(outbox).length > 0 };
    listeners.forEach(l => { try { l.next({ docs, size: docs.length, empty: !docs.length, metadata: meta }); } catch (e) { console.error(e); } });
  }

  function scheduleRetry() { clearTimeout(retryT); retryT = setTimeout(flush, 15000); }
  function status(err) {
    if (!window.__setSync) return;
    if (!err) { window.__setSync(null); return; }
    if (!navigator.onLine) { window.__setSync('Sem internet. Suas mudanças ficam neste aparelho e serão enviadas quando a conexão voltar.'); return; }
    const m = String(err.message || err.code || err);
    window.__setSync('Não foi possível sincronizar com a nuvem (' + m.slice(0, 80) + '). Suas mudanças ficam neste aparelho e serão enviadas depois.');
  }

  async function flush() {
    if (flushing) return; flushing = true;
    try {
      for (const id of Object.keys(outbox)) {
        const o = outbox[id];
        let error;
        if (o.op === 'set') {
          ({ error } = await sb.from(TABLE).upsert({ user_id: uid, id, body: o.body, updated_at: new Date().toISOString() }));
        } else {
          ({ error } = await sb.from(TABLE).delete().eq('user_id', uid).eq('id', id));
        }
        if (error) { status(error); scheduleRetry(); return; }
        if (outbox[id] === o) { delete outbox[id]; save(OUT, outbox); }
      }
    } catch (e) { status(e); scheduleRetry(); }
    finally { flushing = false; }
  }

  async function fetchAll() {
    const fresh = {};
    const PAGE = 1000;
    for (let from = 0; ; from += PAGE) {
      const { data, error } = await sb.from(TABLE).select('id,body').eq('user_id', uid).range(from, from + PAGE - 1);
      if (error) throw error;
      data.forEach(r => { fresh[r.id] = r.body; });
      if (data.length < PAGE) break;
    }
    for (const id in outbox) { if (outbox[id].op === 'set') fresh[id] = outbox[id].body; else delete fresh[id]; }
    cache = fresh; save(CACHE, cache); loadedOnce = true; emit(false); if (!Object.keys(outbox).length) status(null);
  }

  function refresh() { flush().then(() => fetchAll()).catch(e => { status(e); if (!loadedOnce) { loadedOnce = true; emit(false); } }); }

  // tempo real: mudanças vindas de outros aparelhos
  sb.channel('itens-' + uid)
    .on('postgres_changes', { event: '*', schema: 'public', table: TABLE, filter: 'user_id=eq.' + uid }, payload => {
      if (payload.eventType === 'DELETE') { const id = payload.old && payload.old.id; if (id && !outbox[id]) delete cache[id]; }
      else { const r = payload.new; if (r && !outbox[r.id]) cache[r.id] = r.body; }
      save(CACHE, cache); emit(false);
    })
    .subscribe();

  window.addEventListener('online', refresh);
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') refresh(); });

  function docRef(id) {
    return {
      id,
      async set(body) { cache[id] = JSON.parse(JSON.stringify(body)); outbox[id] = { op: 'set', body: cache[id] }; save(CACHE, cache); save(OUT, outbox); emit(!loadedOnce); flush(); },
      async delete() { delete cache[id]; outbox[id] = { op: 'del' }; save(CACHE, cache); save(OUT, outbox); emit(!loadedOnce); flush(); }
    };
  }

  const db = {
    collection() {
      return {
        doc: docRef,
        onSnapshot(next, error) {
          const l = { next, error }; listeners.add(l);
          if (Object.keys(cache).length) setTimeout(() => emit(true), 0);
          refresh();
          return () => listeners.delete(l);
        }
      };
    },
    doc(path) { return docRef(path.split('/').pop()); }
  };

  // arquivos: armazenamento privado, links temporários assinados
  const urls = {}; let pending = new Set(), urlT = null;
  async function sign() {
    const paths = Array.from(pending); pending = new Set();
    if (!paths.length) return;
    const { data, error } = await sb.storage.from(BUCKET).createSignedUrls(paths, 60 * 60 * 6);
    if (error || !data) { paths.forEach(p => { urls[p] = { url: BLANK, exp: Date.now() + 30000 }; }); return; }
    data.forEach(r => { if (r.signedUrl) urls[r.path] = { url: r.signedUrl, exp: Date.now() + 1000 * 60 * 60 * 5 }; });
    if (window.__notasHooks) window.__notasHooks.rerender();
  }
  window.__assetUrl = id => {
    if (!id || id.indexOf('/') < 0) return BLANK; // arquivo da versão anterior (não migrado)
    const c = urls[id];
    if (c && c.exp > Date.now()) return c.url;
    if (!c || c.url !== BLANK) { urls[id] = { url: BLANK, exp: Date.now() + 20000 }; pending.add(id); clearTimeout(urlT); urlT = setTimeout(sign, 60); }
    return BLANK;
  };

  const assets = {
    async upload(file) {
      const ext = (String(file.name || '').match(/\.([a-z0-9]{1,6})$/i) || [, (file.type.split('/')[1] || 'bin')])[1].toLowerCase();
      const rid = (crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).slice(2));
      const path = uid + '/' + rid + '.' + ext;
      const { error } = await sb.storage.from(BUCKET).upload(path, file, { contentType: file.type || 'application/octet-stream', upsert: false });
      if (error) throw error;
      return { id: path, url: '' };
    }
  };

  const userApi = { async id() { return uid; } };

  const shim = {
    async use(name) {
      if (name === 'db') return db;
      if (name === 'user') return userApi;
      if (name === 'assets') return assets;
      if (name === 'downloads') return onDownload ? { save: onDownload } : null;
      return null;
    }
  };
  return shim;
}
