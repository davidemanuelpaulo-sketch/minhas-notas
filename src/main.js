import './style.css';
import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_KEY } from './config.js';
import { makeCloud } from './cloud.js';
import { setupNative, saveFile } from './native.js';

const configured = /^https:\/\/.+\.supabase\.co\/?$/.test(SUPABASE_URL) && SUPABASE_KEY.length > 20;

function showLogin(sb) {
  return new Promise(resolve => {
    const box = document.getElementById('auth'); box.hidden = false;
    const form = document.getElementById('authForm');
    const email = document.getElementById('authEmail'), pass = document.getElementById('authPass');
    const go = document.getElementById('authGo'), toggle = document.getElementById('authToggle');
    const err = document.getElementById('authErr'), info = document.getElementById('authMsg');
    let signup = false;
    toggle.onclick = () => {
      signup = !signup; err.textContent = '';
      go.textContent = signup ? 'Criar conta' : 'Entrar';
      toggle.textContent = signup ? 'Já tenho conta' : 'Criar conta';
      pass.autocomplete = signup ? 'new-password' : 'current-password';
      info.textContent = signup ? 'Crie sua conta com um e-mail e uma senha de pelo menos 6 caracteres.' : 'Entre com a sua conta para ver suas notas em qualquer aparelho.';
    };
    form.onsubmit = async e => {
      e.preventDefault(); err.textContent = '';
      if (!email.value.trim() || pass.value.length < 6) { err.textContent = 'Preencha o e-mail e uma senha com pelo menos 6 caracteres.'; return; }
      go.disabled = true; go.textContent = 'Aguarde…';
      try {
        const creds = { email: email.value.trim(), password: pass.value };
        const { data, error } = signup ? await sb.auth.signUp(creds) : await sb.auth.signInWithPassword(creds);
        if (error) throw error;
        if (data.session) { box.hidden = true; resolve(data.session); return; }
        info.textContent = 'Conta criada. Abra o e-mail de confirmação que enviamos e depois entre aqui.';
        if (signup) toggle.click();
      } catch (e2) {
        const m = String(e2 && e2.message || '');
        err.textContent = /invalid login/i.test(m) ? 'E-mail ou senha incorretos.' : /not confirmed/i.test(m) ? 'Confirme seu e-mail pelo link que enviamos antes de entrar.' : /signups? not allowed|disabled/i.test(m) ? 'Novas contas estão desativadas.' : 'Não foi possível entrar: ' + m;
      } finally { go.disabled = false; go.textContent = signup ? 'Criar conta' : 'Entrar'; }
    };
    email.focus();
  });
}

async function boot() {
  setupNative();
  if (configured) {
    const sb = createClient(SUPABASE_URL, SUPABASE_KEY, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: false } });
    let { data: { session } } = await sb.auth.getSession();
    if (!session) session = await showLogin(sb);
    window.claude = makeCloud(sb, session.user, saveFile);
    window.__account = {
      email: session.user.email,
      async signOut() {
        await sb.auth.signOut();
        Object.keys(localStorage).filter(k => k.startsWith('mn-')).forEach(k => localStorage.removeItem(k));
        location.reload();
      }
    };
  }
  await import('./app.js');
}
boot();
