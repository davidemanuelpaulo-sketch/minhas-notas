// Recursos do celular: gravar áudio, receber do menu Compartilhar,
// notificações de agenda e vencimentos, e salvar arquivos (backup).
import { Capacitor } from '@capacitor/core';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { LocalNotifications } from '@capacitor/local-notifications';
import { Share } from '@capacitor/share';
import { CapacitorAudioRecorder } from '@capgo/capacitor-audio-recorder';
import { CapacitorShareTarget } from '@capgo/capacitor-share-target';

const isNative = Capacitor.isNativePlatform();

function b64ToBlob(b64, type) {
  const bin = atob(b64); const len = bin.length; const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) bytes[i] = bin.charCodeAt(i);
  return new Blob([bytes], { type: type || 'application/octet-stream' });
}
async function readUri(uri, type) {
  try {
    const r = await Filesystem.readFile({ path: uri });
    if (r.data instanceof Blob) return r.data;
    return b64ToBlob(r.data, type);
  } catch (e) {
    const res = await fetch(Capacitor.convertFileSrc(uri));
    return await res.blob();
  }
}

/* ---------- gravação de áudio ---------- */
function setupRecorder() {
  const webOk = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
  window.__recorder = {
    available: isNative || webOk,
    async start() {
      const p = await CapacitorAudioRecorder.requestPermissions().catch(() => null);
      const st = p && (p.recordAudio || p.microphone || p.audio);
      if (st && st !== 'granted') throw new Error('permissao');
      await CapacitorAudioRecorder.startRecording({});
    },
    async stop() {
      const r = await CapacitorAudioRecorder.stopRecording();
      const stamp = new Date().toISOString().slice(0, 16).replace(/[:T]/g, '-');
      if (r.blob) { const type = r.blob.type || 'audio/webm'; const ext = type.includes('mp4') ? 'm4a' : (type.includes('ogg') ? 'ogg' : 'webm'); return new File([r.blob], 'gravacao-' + stamp + '.' + ext, { type }); }
      if (r.uri) { const blob = await readUri(r.uri, 'audio/mp4'); const isAac = /\.aac$/i.test(r.uri); return new File([blob], 'gravacao-' + stamp + (isAac ? '.aac' : '.m4a'), { type: isAac ? 'audio/aac' : 'audio/mp4' }); }
      return null;
    },
    async cancel() { try { await CapacitorAudioRecorder.cancelRecording(); } catch (e) { /* nada */ } }
  };
}

/* ---------- receber do menu Compartilhar (Android) ---------- */
let queue = [];
function whenReady(fn) { if (window.__notasHooks) fn(window.__notasHooks); else queue.push(fn); }
window.__onNotasReady = () => { const q = queue; queue = []; q.forEach(fn => { try { fn(window.__notasHooks); } catch (e) { console.error(e); } }); };

function setupShare() {
  if (!isNative) return;
  CapacitorShareTarget.addListener('shareReceived', async ev => {
    const files = [];
    for (const f of (ev.files || [])) {
      try { const blob = await readUri(f.uri, f.mimeType); files.push(new File([blob], f.name || 'arquivo', { type: f.mimeType || blob.type })); } catch (e) { console.error(e); }
    }
    const texts = (ev.texts || []).slice();
    if (ev.title && !texts.length) texts.push(ev.title);
    whenReady(h => h.ingestShare({ texts, files }));
  });
}

/* ---------- notificações de agenda e vencimentos ---------- */
function hashId(s) { let h = 0; for (let i = 0; i < s.length; i++) { h = ((h << 5) - h + s.charCodeAt(i)) | 0; } return Math.abs(h) % 2000000000 + 1; }
function at(dateIso, hora) { const [y, m, d] = dateIso.split('-').map(Number); const [hh, mm] = (hora || '09:00').split(':').map(Number); return new Date(y, m - 1, d, hh || 0, mm || 0, 0); }
const BRL = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
function fmt(dt) { return dt.toLocaleDateString('pt-BR', { weekday: 'short', day: '2-digit', month: '2-digit' }); }

function desired(items) {
  const now = Date.now(); const out = [];
  items.forEach(it => {
    const d = it.dados || {};
    if (it.tipo === 'agenda' && d.aviso && /^\d{4}-\d{2}-\d{2}$/.test(d.data || '')) {
      const ev = at(d.data, d.hora); const off = d.aviso === '1h' ? 3600e3 : d.aviso === '1d' ? 86400e3 : 0;
      const when = new Date(ev.getTime() - off);
      if (when.getTime() > now) out.push({ id: hashId(it.id + ':a'), title: d.titulo || 'Compromisso', body: [fmt(ev), d.hora, d.local].filter(Boolean).join(' · '), at: when, itemId: it.id });
    }
    if (it.tipo === 'despesa' && d.situacao !== 'pago' && /^\d{4}-\d{2}-\d{2}$/.test(d.vencimento || '')) {
      const day = at(d.vencimento, '09:00'); const before = new Date(day.getTime() - 86400e3);
      const valor = d.valor != null ? ' · ' + BRL.format(d.valor) : '';
      if (before.getTime() > now) out.push({ id: hashId(it.id + ':v1'), title: 'Vence amanhã: ' + (d.descricao || 'despesa'), body: (d.para ? 'Para ' + d.para : 'Despesa a pagar') + valor, at: before, itemId: it.id });
      if (day.getTime() > now) out.push({ id: hashId(it.id + ':v0'), title: 'Vence hoje: ' + (d.descricao || 'despesa'), body: (d.para ? 'Para ' + d.para : 'Despesa a pagar') + valor, at: day, itemId: it.id });
    }
  });
  return out.sort((a, b) => a.at - b.at).slice(0, 60);
}

let schedT = null, asked = false;
async function reschedule(items) {
  const want = desired(items);
  const sig = JSON.stringify(want.map(n => [n.id, n.at.getTime(), n.title, n.body]));
  if (sig === localStorage.getItem('mn-notif-sig')) return;
  if (want.length && !asked) {
    asked = true;
    const p = await LocalNotifications.checkPermissions().catch(() => null);
    if (p && p.display !== 'granted') await LocalNotifications.requestPermissions().catch(() => null);
  }
  const pend = await LocalNotifications.getPending().catch(() => ({ notifications: [] }));
  if (pend.notifications && pend.notifications.length) await LocalNotifications.cancel({ notifications: pend.notifications.map(n => ({ id: n.id })) }).catch(() => null);
  if (want.length) {
    await LocalNotifications.schedule({ notifications: want.map(n => ({ id: n.id, title: n.title, body: n.body, schedule: { at: n.at, allowWhileIdle: true }, extra: { itemId: n.itemId } })) }).catch(e => console.error(e));
  }
  try { localStorage.setItem('mn-notif-sig', sig); } catch (e) { /* nada */ }
}
function setupNotifications() {
  if (!isNative) return;
  window.__onItemsChanged = items => { clearTimeout(schedT); schedT = setTimeout(() => reschedule(items), 1500); };
  LocalNotifications.addListener('localNotificationActionPerformed', ev => {
    const id = ev && ev.notification && ev.notification.extra && ev.notification.extra.itemId;
    if (id) whenReady(h => setTimeout(() => h.openItem(id), 300));
  });
}

/* ---------- salvar arquivo (backup) ---------- */
export async function saveFile({ filename, data }) {
  if (isNative) {
    const r = await Filesystem.writeFile({ path: filename, data, directory: Directory.Cache, encoding: Encoding.UTF8 });
    await Share.share({ title: filename, text: 'Backup do Minhas notas', files: [r.uri], dialogTitle: 'Salvar backup' });
    return;
  }
  const blob = new Blob([data], { type: 'application/json' });
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = filename;
  document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 5000);
}

export function setupNative() {
  setupRecorder();
  setupShare();
  setupNotifications();
}
