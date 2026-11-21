import '@fontsource-variable/inter';
import '@fontsource-variable/fraunces';
import '@fontsource/ibm-plex-mono/400.css';
import '@fontsource/ibm-plex-mono/600.css';
import './style.css';
import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_KEY, WEB_URL } from './config.js';
import { Capacitor } from '@capacitor/core';
import { makeCloud } from './cloud.js';
import { setupNative, saveFile } from './native.js';

const configured = /^https:\/\/.+\.supabase\.co\/?$/.test(SUPABASE_URL) && SUPABASE_KEY.length > 20;

function authEls() {
  const $ = id => document.getElementById(id);
  return { box: $('auth'), form: $('authForm'), email: $('authEmail'), pass: $('authPass'), go: $('authGo'), toggle: $('authToggle'),
    forgot: $('authForgot'), err: $('authErr'), info: $('authMsg'), emailBox: $('authEmailBox'), passBox: $('authPassBox'), passLbl: $('authPassLbl') };
}
const MSG_LOGIN = 'Entre com a sua conta para ver suas notas em qualquer aparelho.';

function showLogin(sb, aviso) {
  return new Promise(resolve => {
    const E = authEls(); E.box.hidden = false;
    let mode = 'login'; // login | signup | reset
    const set = m => {
      mode = m; E.err.textContent = '';
      E.passBox.hidden = m === 'reset';
      E.go.textContent = m === 'signup' ? 'Criar conta' : m === 'reset' ? 'Enviar link' : 'Entrar';
      E.toggle.textContent = m === 'login' ? 'Criar conta' : 'Voltar para entrar';
      E.forgot.hidden = m !== 'login';
      E.pass.autocomplete = m === 'signup' ? 'new-password' : 'current-password';
      E.info.textContent = m === 'signup' ? 'Crie sua conta com um e-mail e uma senha de pelo menos 6 caracteres.'
        : m === 'reset' ? 'Digite o e-mail da sua conta. Enviaremos um link para você criar uma nova senha.' : MSG_LOGIN;
    };
    E.toggle.onclick = () => set(mode === 'login' ? 'signup' : 'login');
    E.forgot.onclick = () => { set('reset'); E.email.focus(); };
    E.form.onsubmit = async e => {
      e.preventDefault(); E.err.textContent = '';
      const mail = E.email.value.trim();
      if (!mail) { E.err.textContent = 'Preencha o e-mail.'; return; }
      if (mode !== 'reset' && E.pass.value.length < 6) { E.err.textContent = 'Preencha uma senha com pelo menos 6 caracteres.'; return; }
      const label = E.go.textContent; E.go.disabled = true; E.go.textContent = 'Aguarde…';
      try {
        if (mode === 'reset') {
          const { error } = await sb.auth.resetPasswordForEmail(mail, { redirectTo: WEB_URL });
          if (error) throw error;
          set('login'); E.info.textContent = 'Pronto. Abra o link que enviamos para ' + mail + ' (veja também o spam). Ele abre a versão web, onde você cria a nova senha. Depois entre aqui com ela.';
          return;
        }
        const creds = { email: mail, password: E.pass.value };
        const { data, error } = mode === 'signup' ? await sb.auth.signUp(creds) : await sb.auth.signInWithPassword(creds);
        if (error) throw error;
        if (data.session) { E.box.hidden = true; resolve(data.session); return; }
        set('login'); E.info.textContent = 'Conta criada. Abra o e-mail de confirmação que enviamos e depois entre aqui.';
      } catch (e2) {
        const m = String(e2 && e2.message || '');
        E.err.textContent = /invalid login/i.test(m) ? 'E-mail ou senha incorretos.' : /not confirmed/i.test(m) ? 'Confirme seu e-mail pelo link que enviamos antes de entrar.'
          : /rate limit|security purposes/i.test(m) ? 'Muitas tentativas seguidas. Espere alguns minutos e tente de novo.'
          : /signups? not allowed|disabled/i.test(m) ? 'Novas contas estão desativadas.' : 'Não foi possível concluir: ' + m;
      } finally { E.go.disabled = false; if (E.go.textContent === 'Aguarde…') E.go.textContent = label; }
    };
    set('login'); if (aviso) { E.err.textContent = aviso; }
    E.email.focus();
  });
}

/* chegou pelo link de "Esqueci minha senha": pede a nova senha */
function showNewPassword(sb, session) {
  return new Promise(resolve => {
    const E = authEls(); E.box.hidden = false;
    E.emailBox.hidden = true; E.toggle.hidden = true; E.forgot.hidden = true; E.passBox.hidden = false;
    E.passLbl.textContent = 'Nova senha'; E.pass.autocomplete = 'new-password'; E.go.textContent = 'Salvar nova senha';
    E.info.textContent = 'Crie uma nova senha para ' + (session.user.email || 'sua conta') + '.';
    E.form.onsubmit = async e => {
      e.preventDefault(); E.err.textContent = '';
      if (E.pass.value.length < 6) { E.err.textContent = 'A senha precisa ter pelo menos 6 caracteres.'; return; }
      E.go.disabled = true; E.go.textContent = 'Aguarde…';
      const { error } = await sb.auth.updateUser({ password: E.pass.value });
      E.go.disabled = false; E.go.textContent = 'Salvar nova senha';
      if (error) { E.err.textContent = 'Não foi possível salvar: ' + error.message; return; }
      E.box.hidden = true; resolve();
    };
    E.pass.focus();
  });
}

async function boot() {
  setupNative();
  if (configured) {
    const native = Capacitor.isNativePlatform();
    const hash = native ? '' : location.hash;
    const recovering = /type=recovery/.test(hash);
    const linkErr = /error_code=otp_expired|error=access_denied/.test(hash) ? 'Esse link expirou ou já foi usado. Peça outro em “Esqueci minha senha”.' : '';
    const sb = createClient(SUPABASE_URL, SUPABASE_KEY, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: !native, flowType: 'implicit' } });
    let { data: { session } } = await sb.auth.getSession();
    if (hash) history.replaceState(null, '', location.pathname + location.search);
    if (session && recovering) await showNewPassword(sb, session);
    if (!session) session = await showLogin(sb, linkErr);
    window.claude = makeCloud(sb, session.user, saveFile);
    window.__account = {
      email: session.user.email,
      async changePassword(p) { const { error } = await sb.auth.updateUser({ password: p }); if (error) throw error; },
      async signOut() {
        await sb.auth.signOut();
        Object.keys(localStorage).filter(k => k.startsWith('mn-')).forEach(k => localStorage.removeItem(k));
        location.reload();
      }
    };
  }
  window.__pdfjs = () => import('./pdf.js').then(m => m.default);
  await import('./app.js');
}
boot();
