(function(){
"use strict";
/* ---------- ícones ---------- */
const P = {
  texto:'<path d="M4 20h16"/><path d="M14.5 4.5l3 3L8 17H5v-3z"/>',
  imagem:'<rect x="4" y="3" width="16" height="18" rx="2"/><rect x="7" y="6" width="10" height="9" rx="1"/><path d="M8 18h4"/>',
  audio:'<path d="M4 10v4M8 7v10M12 4v16M16 8v8M20 11v2"/>',
  documento:'<path d="M14 3H6.5A2.5 2.5 0 0 0 4 5.5v13A2.5 2.5 0 0 0 6.5 21h11a2.5 2.5 0 0 0 2.5-2.5V9z"/><path d="M14 3v6h6"/><path d="M8 13h8M8 17h5"/>',
  link:'<path d="M9 15l6-6"/><path d="M11 6.5l1.6-1.6a4 4 0 0 1 5.6 5.6L16.6 12"/><path d="M13 17.5l-1.6 1.6a4 4 0 0 1-5.6-5.6L7.4 12"/>',
  agenda:'<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M8 3v4M16 3v4M3.5 10h17"/><circle cx="12" cy="15" r="1.6"/>',
  bell:'<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
  despesa:'<circle cx="12" cy="12" r="8.5"/><path d="M14.5 9.5c-.5-1-1.5-1.5-2.5-1.5-1.4 0-2.5.8-2.5 2s1.1 1.6 2.5 2 2.5.8 2.5 2-1.1 2-2.5 2c-1 0-2-.5-2.5-1.5M12 6.5V8M12 16v1.5"/>',
  apagar:'<path d="M6.5 3h11M6.5 21h11"/><path d="M8 3v2.5a4 4 0 0 0 1.7 3.3L12 10.5l2.3-1.7A4 4 0 0 0 16 5.5V3M8 21v-2.5a4 4 0 0 1 1.7-3.3L12 13.5l2.3 1.7a4 4 0 0 1 1.7 3.3V21"/>',
  pago:'<circle cx="12" cy="12" r="8.5"/><path d="M8.5 12.5l2.3 2.3 4.7-5"/>',
  compra:'<path d="M5 8h14l-1.2 11.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8z"/><path d="M9 10V7a3 3 0 0 1 6 0v3"/>',
  contato:'<rect x="3" y="5" width="18" height="14" rx="2.5"/><circle cx="9" cy="11" r="2.3"/><path d="M5.8 16.2c.6-1.6 1.8-2.4 3.2-2.4s2.6.8 3.2 2.4M14.5 10h3.5M14.5 13.5h3"/>',
  email:'<rect x="3" y="5.5" width="18" height="13" rx="2.5"/><path d="M4 7l8 6 8-6"/>',
  phone:'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
  local:'<path d="M12 21s-6-5.6-6-10.5a6 6 0 0 1 12 0C18 15.4 12 21 12 21z"/><circle cx="12" cy="10.5" r="2.2"/>',
  lista:'<path d="M4 6.5l1.5 1.5L8.5 5M4 12.5l1.5 1.5 3-3M11 6.5h9M11 12.5h9M11 18.5h9M4.5 18.5h3"/>',
  itens:'<path d="M9 6.5h11M9 12h11M9 17.5h11"/><circle cx="5" cy="6.5" r="1.3"/><circle cx="5" cy="12" r="1.3"/><circle cx="5" cy="17.5" r="1.3"/>',
  ul:'<path d="M9 6h12M9 12h12M9 18h12"/><circle cx="4" cy="6" r="1.2" fill="currentColor"/><circle cx="4" cy="12" r="1.2" fill="currentColor"/><circle cx="4" cy="18" r="1.2" fill="currentColor"/>',
  ol:'<path d="M10 6h11M10 12h11M10 18h11M4 4v4M3 8h2M3 12.5c0-1 2-1 2 0s-2 1.5-2 2.5h2M3 17h2v4H3M3 19h2"/>',
  quote:'<path d="M3 21c3 0 7-1 7-8V5H3v8h4M14 21c3 0 7-1 7-8V5h-7v8h4"/>',
  eraser:'<path d="M20 20H7L3 16l10-10 7 7-6 6"/><path d="M6.5 13.5l5 5"/>',
  search:'<circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>',
  views:'<path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/>',
  menu:'<circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  clip:'<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>',
  send:'<path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>',
  check:'<path d="M20 6L9 17l-5-5"/>',
  pin:'<path d="M12 17v5"/><path d="M9 10.76V6h6v4.76a2 2 0 0 0 1.11 1.79l1.78.9A2 2 0 0 1 19 15.24V17H5v-1.76a2 2 0 0 1 1.11-1.79l1.78-.9A2 2 0 0 0 9 10.76z"/><path d="M8 2h8v4H8z"/>',
  trash:'<path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>',
  x:'<path d="M18 6L6 18M6 6l12 12"/>',
  mic:'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M19 10v1a7 7 0 0 1-14 0v-1M12 18v4"/>',
  stop:'<rect x="6" y="6" width="12" height="12" rx="2"/>',
  back:'<path d="M15 18l-6-6 6-6"/>',
  minus:'<path d="M5 12h14"/>',
  copy:'<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
  tag:'<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><path d="M7 7h.01"/>',
  star:'<path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z"/>',
  heart:'<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/>',
  flag:'<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22v-7"/>',
  alert:'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4M12 17h.01"/>',
  home:'<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
  briefcase:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  school:'<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
  book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
  globe:'<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  bulb:'<path d="M9 18h6M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.74V17h8v-2.26A7 7 0 0 0 12 2z"/>',
  plane:'<path d="M2 16l20-7-20-7 4 7z"/><path d="M6 9h8"/>',
  car:'<path d="M5 17h14v-5l-2-5H7l-2 5z"/><circle cx="7.5" cy="17.5" r="1.5"/><circle cx="16.5" cy="17.5" r="1.5"/>',
  gift:'<path d="M20 12v10H4V12"/><path d="M2 7h20v5H2z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>',
  music:'<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  chevron:'<path d="M6 9l6 6 6-6"/>',
  repeat:'<path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>',
  undo:'<path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-15-6.7L3 13"/>',
  download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/>',
  filter:'<path d="M22 3H2l8 9.46V19l4 2v-8.54z"/>',
  edit:'<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>'
};
const TAG_ICONS=['tag','star','heart','flag','alert','home','briefcase','school','book','globe','users','bulb','plane','car','compra','despesa','gift','music'];
const TAG_COLORS=[['#C0392B','Vermelho'],['#C2570C','Laranja'],['#A16207','Âmbar'],['#15803D','Verde'],['#0F766E','Azul-petróleo'],['#1D4ED8','Azul'],['#4338CA','Índigo'],['#7E22CE','Roxo'],['#BE185D','Rosa'],['#4B5563','Cinza']];
function svg(name, size, sw){ size=size||16; return '<svg width="'+size+'" height="'+size+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="'+(sw||2)+'" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(P[name]||P.texto)+'</svg>'; }

/* ---------- tipos ---------- */
const FAM = {
  reg:{label:'Registro', color:'var(--ink2)'}, tempo:{label:'Agenda', color:'var(--tempo)'},
  din:{label:'Despesas', color:'var(--din)'}, pes:{label:'Pessoas e lugares', color:'var(--pes)'}, lis:{label:'Listas', color:'var(--lis)'}
};
const OPT = {
  tamanho:[['p','Pequeno'],['m','Normal'],['g','Grande']],
  estilo:[['normal','Normal'],['destaque','Destaque'],['citacao','Citação']],
  situacao:[['apagar','A pagar'],['pago','Pago']],
  categoria:[['conta','Conta'],['compra','Compra'],['servico','Serviço'],['outro','Outro']],
  forma:[['','—'],['pix','Pix'],['dinheiro','Dinheiro'],['debito','Cartão de débito'],['credito','Cartão de crédito'],['boleto','Boleto'],['transferencia','Transferência'],['automatico','Débito automático']],
  avisoEtapas:[['inicio','Só no início'],['todas','Em todas as etapas'],['escolher','Escolher etapa por etapa']],
  aviso:[['','Sem aviso'],['hora','Na hora'],['1h','1 hora antes'],['1d','1 dia antes']],
  modo:[['tarefas','Tarefas'],['compras','Compras'],['itens','Itens']],
  repetir:[['','Não repete'],['semanal','Toda semana'],['mensal','Todo mês'],['anual','Todo ano']]
};
function optLabel(k,v){ const o=(OPT[k]||[]).find(x=>x[0]===v); return o?o[1]:''; }
const T = {
  texto:{fam:'reg', label:'Texto', rich:true, fields:[['titulo','Título (opcional)','text'],['tamanho','Tamanho da letra','seg'],['estilo','Estilo do card','seg']]},
  imagem:{fam:'reg', label:'Imagem', file:'image/*', fields:[['legenda','Legenda','text']]},
  audio:{fam:'reg', label:'Áudio', file:'audio/*', fields:[['legenda','Descrição','text']]},
  documento:{fam:'reg', label:'Documento', file:'*', fields:[['nome','Nome do arquivo','text'],['legenda','Observação','text']]},
  link:{fam:'reg', label:'Link', fields:[['url','Endereço (URL)','url'],['titulo','Título','text']]},
  agenda:{fam:'tempo', label:'Agenda', fields:[['titulo','O quê','text'],['data','Data','date',d=>!etapasOf(d).length],['hora','Hora (opcional)','time',d=>!etapasOf(d).length],['local','Onde (opcional)','text'],['aviso','Aviso','select'],['repetir','Repetir','select'],['obs','Observação','text']]},
  despesa:{fam:'din', label:'Despesa', fields:[['situacao','Situação','seg'],['descricao','Descrição','text'],['valor','Valor (R$)','money'],['categoria','Categoria','select'],['para','Para quem / onde','text'],['vencimento','Vencimento','date', d=>d.situacao!=='pago' || d.vencimento],['pagoEm','Pago em','date', d=>d.situacao==='pago'],['forma','Forma de pagamento','select'],['repetir','Repetir','select']]},
  contato:{fam:'pes', label:'Contato', fields:[['nome','Nome','text'],['telefone','Telefone','tel'],['email','E-mail','email'],['obs','Observação','text']]},
  local:{fam:'pes', label:'Local', fields:[['nome','Nome do lugar','text'],['endereco','Endereço','text']]},
  lista:{fam:'lis', label:'Lista', list:true, fields:[['modo','Tipo de lista','seg'],['titulo','Título da lista','text']]}
};
const ORDER_BY_FAM = {reg:['texto','imagem','audio','link','documento'], tempo:['agenda'], din:['despesa'], pes:['contato','local'], lis:['lista']};
const TYPE_ORDER = ['texto','lista','agenda','despesa','contato','local','imagem','audio','documento','link'];
const TYPE_DESC = {texto:'Notas formatadas', imagem:'Uma ou várias fotos', audio:'Gravações de voz', documento:'PDF, Word, planilhas', link:'Sites da web', agenda:'Eventos e lembretes', despesa:'Contas, pagamentos e compras', lista:'Tarefas e compras', contato:'Telefone e e-mail', local:'Endereços e lugares'};
function typeIcon(tp){ return tp==='despesa'?'despesa':tp; }
function typeColor(tp){ return FAM[T[tp].fam].color; }
function assetsOf(d){ d=d||{}; if(Array.isArray(d.assets)) return d.assets.filter(Boolean); return d.asset?[d.asset]:[]; }
const DEFAULTS = { texto:{tamanho:'m',estilo:'normal'}, agenda:{aviso:'',repetir:''}, despesa:{situacao:'apagar',categoria:'conta',forma:'',repetir:''}, lista:{modo:'tarefas'} };
function withDefaults(tipo, d){ return Object.assign({}, DEFAULTS[tipo]||{}, d||{}); }
function famKey(it){ if(it.tipo==='despesa') return (it.dados&&it.dados.situacao==='pago')?'din':'pagar'; return T[it.tipo]?T[it.tipo].fam:'reg'; }
function famColor(it){ return it.tipo==='despesa' && famKey(it)==='pagar' ? 'var(--pagar)' : FAM[T[it.tipo].fam].color; }
function iconOf(it){ const d=it.dados||{}; if(it.tipo==='despesa'){ if(d.situacao==='pago') return d.categoria==='compra'?'compra':'pago'; return 'apagar'; } if(it.tipo==='lista') return d.modo==='tarefas'?'lista':'itens'; if(it.tipo==='contato' && !d.telefone && d.email) return 'email'; return it.tipo; }
function typeLabel(it){ const d=it.dados||{}; if(it.tipo==='despesa'){ const s=d.situacao==='pago'?'Pago':'A pagar'; const c=d.categoria&&d.categoria!=='conta'?' · '+optLabel('categoria',d.categoria):''; return s+c; } if(it.tipo==='lista') return optLabel('modo',d.modo)||'Lista'; return T[it.tipo].label; }

/* ---------- migração dos tipos antigos ---------- */
function migrate(it){
  const d=it.dados||{}; let n=null;
  switch(it.tipo){
    case 'pagar': n={tipo:'despesa', dados:{descricao:d.descricao||'', valor:d.valor, para:d.para||'', vencimento:d.vencimento||'', situacao:'apagar', categoria:'conta', forma:''}}; break;
    case 'pago': n={tipo:'despesa', dados:{descricao:d.descricao||'', valor:d.valor, para:d.para||'', vencimento:d.vencimento||'', pagoEm:d.data||'', situacao:'pago', categoria:'conta', forma:''}}; if(it.deApagar) n.pagoNoApp=true; break;
    case 'compra': n={tipo:'despesa', dados:{descricao:d.descricao||'', valor:d.valor, para:d.loja||'', pagoEm:d.data||'', situacao:'pago', categoria:'compra', forma:''}}; break;
    case 'evento': n={tipo:'agenda', dados:{titulo:d.titulo||'', data:d.data||'', hora:d.hora||'', local:d.local||'', aviso:'', obs:''}}; break;
    case 'lembrete': n={tipo:'agenda', dados:{titulo:d.texto||'', data:d.data||'', hora:d.hora||'', local:'', aviso:'hora', obs:''}}; break;
    case 'tarefas': n={tipo:'lista', dados:{titulo:d.titulo||'', itens:d.itens||[], modo:'tarefas'}}; break;
    case 'itens': n={tipo:'lista', dados:{titulo:d.titulo||'', itens:d.itens||[], modo:'compras'}}; break;
    case 'email': n={tipo:'contato', dados:{nome:'', telefone:'', email:d.email||'', obs:d.obs||''}}; break;
    default: return null;
  }
  const out=Object.assign({}, it, {tipo:n.tipo, dados:n.dados}); delete out.deApagar; if(n.pagoNoApp) out.pagoNoApp=true;
  return out;
}

/* ---------- utilidades ---------- */
function esc(s){ return String(s==null?'':s).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function pad(n){ return (n<10?'0':'')+n; }
function isoOf(d){ return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate()); }
function today(){ const d=new Date(); d.setHours(0,0,0,0); return d; }
function parseIso(s){ if(!s||!/^\d{4}-\d{2}-\d{2}$/.test(s)) return null; const p=s.split('-').map(Number); return new Date(p[0],p[1]-1,p[2]); }
const WD=['dom','seg','ter','qua','qui','sex','sáb'];
const MES=['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'];
const MESL=['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
function fmtData(s){ const d=parseIso(s); if(!d) return ''; return WD[d.getDay()]+', '+pad(d.getDate())+'/'+pad(d.getMonth()+1)+(d.getFullYear()!==new Date().getFullYear()?'/'+d.getFullYear():''); }
function fmtHora(ts){ const d=new Date(ts); return pad(d.getHours())+':'+pad(d.getMinutes()); }
function fmtDia(ts){ const d=new Date(ts); d.setHours(0,0,0,0); const t=today(); const diff=Math.round((t-d)/864e5); const base=WD[d.getDay()]+', '+d.getDate()+' '+MES[d.getMonth()]+(d.getFullYear()!==t.getFullYear()?' '+d.getFullYear():''); if(diff===0) return 'Hoje · '+base; if(diff===1) return 'Ontem · '+base; return base; }
function parseMoney(v){ if(v==null||v==='') return null; if(typeof v==='number') return v; let s=String(v).replace(/[^\d.,-]/g,''); if(!s) return null; if(s.indexOf(',')>=0){ s=s.replace(/\./g,'').replace(',','.'); } else if(/\.\d{3}$/.test(s)){ s=s.replace(/\./g,''); } const n=parseFloat(s); return isNaN(n)?null:Math.round(n*100)/100; }
const BRL = new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'});
function fmtMoney(n){ return n==null||n===''?'':BRL.format(n); }
function uid(){ return 'n'+Date.now().toString(36)+Math.random().toString(36).slice(2,7); }
function cap(s){ s=String(s||'').trim(); return s? s.charAt(0).toUpperCase()+s.slice(1) : s; }
function clone(o){ return JSON.parse(JSON.stringify(o||{})); }
function digits(s){ return String(s||'').replace(/\D/g,''); }
function safeUrl(u){ u=String(u||'').trim(); if(!u) return ''; if(/^www\./i.test(u)) u='https://'+u; return /^https?:\/\//i.test(u)?u:''; }
function initials(n){ const p=String(n||'?').trim().split(/\s+/).filter(Boolean); return ((p[0]||'?')[0]+((p.length>1?p[p.length-1][0]:'')||'')).toUpperCase(); }

/* ---------- texto formatado ---------- */
const ALLOWED={B:'b',STRONG:'b',I:'i',EM:'i',U:'u',S:'s',STRIKE:'s',DEL:'s',H1:'h3',H2:'h3',H3:'h3',H4:'h3',H5:'h3',H6:'h3',UL:'ul',OL:'ol',LI:'li',P:'p',DIV:'p',BLOCKQUOTE:'blockquote',BR:'br'};
function sanitize(html){
  const src=new DOMParser().parseFromString('<body>'+String(html||'')+'</body>','text/html').body;
  const doc=document.implementation.createHTMLDocument(''); const out=doc.createElement('div');
  (function walk(from,to){
    from.childNodes.forEach(n=>{
      if(n.nodeType===3){ to.appendChild(doc.createTextNode(n.nodeValue)); return; }
      if(n.nodeType!==1) return;
      const tag=ALLOWED[n.tagName];
      if(/^(SCRIPT|STYLE|IFRAME|OBJECT|EMBED|TEMPLATE|NOSCRIPT|SVG|MATH)$/.test(n.tagName)) return;
      if(!tag){ walk(n,to); return; }
      const el=doc.createElement(tag); to.appendChild(el); if(tag!=='br') walk(n,el);
    });
  })(src,out);
  out.querySelectorAll('p,h3,li,b,i,u,s').forEach(el=>{ if(!el.textContent.trim() && !el.querySelector('br')) el.remove(); });
  return out.innerHTML.trim();
}
function plainOf(html){ const d=new DOMParser().parseFromString('<body>'+String(html||'')+'</body>','text/html').body; d.querySelectorAll('br').forEach(b=>b.replaceWith('\n')); d.querySelectorAll('p,h3,li,blockquote').forEach(b=>b.append('\n')); return d.textContent.replace(/\n{3,}/g,'\n\n').trim(); }
function waInline(x){
  return x.replace(/(^|[\s(\[“"'])\*(\S(?:[^*\n]*?\S)?)\*(?=$|[\s).,!?:;\]”"'])/g,'$1<b>$2</b>')
          .replace(/(^|[\s(\[“"'])_(\S(?:[^_\n]*?\S)?)_(?=$|[\s).,!?:;\]”"'])/g,'$1<i>$2</i>')
          .replace(/(^|[\s(\[“"'])~(\S(?:[^~\n]*?\S)?)~(?=$|[\s).,!?:;\]”"'])/g,'$1<s>$2</s>');
}
function waToHtml(text){
  const lines=String(text||'').split('\n'); let out='', list=null;
  const close=()=>{ if(list){ out+='</'+list+'>'; list=null; } };
  lines.forEach(l=>{
    const e=esc(l); let m;
    if((m=l.match(/^\s*[-•*]\s+(.*)$/))){ if(list!=='ul'){ close(); out+='<ul>'; list='ul'; } out+='<li>'+waInline(esc(m[1]))+'</li>'; return; }
    if((m=l.match(/^\s*\d+[.)]\s+(.*)$/))){ if(list!=='ol'){ close(); out+='<ol>'; list='ol'; } out+='<li>'+waInline(esc(m[1]))+'</li>'; return; }
    close(); out+= l.trim()? '<p>'+waInline(e)+'</p>' : '';
  });
  close(); return sanitize(out);
}
function hasWa(text){ return /(^|\s)[*_~]\S/.test(text) || /^\s*([-•]|\d+[.)])\s+/m.test(text); }
function textToHtml(t){ return String(t||'').split('\n').map(l=>l?esc(l):'<br>').map(l=>'<p>'+l+'</p>').join(''); }

/* ---------- detecção automática ---------- */
function parseData(txt){
  const low=txt.toLowerCase(); const t=today(); let m;
  if((m=low.match(/\bdepois de amanh[ãa](?![a-zà-ÿ])/))){ const d=new Date(t); d.setDate(d.getDate()+2); return {iso:isoOf(d), raw:m[0]}; }
  if((m=low.match(/\bamanh[ãa](?![a-zà-ÿ])/))){ const d=new Date(t); d.setDate(d.getDate()+1); return {iso:isoOf(d), raw:m[0]}; }
  if((m=low.match(/\bhoje\b/))){ return {iso:isoOf(t), raw:m[0]}; }
  if((m=low.match(/\b(?:dia\s+)?(\d{1,2})\/(\d{1,2})(?:\/(\d{2,4}))?\b/))){
    const dd=+m[1], mm=+m[2]; let yy=m[3]?+m[3]:t.getFullYear(); if(yy<100) yy+=2000;
    if(dd>=1&&dd<=31&&mm>=1&&mm<=12){ let d=new Date(yy,mm-1,dd); if(!m[3]&&d<t) d=new Date(yy+1,mm-1,dd); return {iso:isoOf(d), raw:m[0]}; }
  }
  if((m=low.match(/\bdia\s+(\d{1,2})\b/))){
    const dd=+m[1]; if(dd>=1&&dd<=31){ let d=new Date(t.getFullYear(),t.getMonth(),dd); if(d<t) d=new Date(t.getFullYear(),t.getMonth()+1,dd); return {iso:isoOf(d), raw:m[0]}; }
  }
  const wds=[['domingo',0],['segunda',1],['terça',2],['terca',2],['quarta',3],['quinta',4],['sexta',5],['sábado',6],['sabado',6]];
  for(const w of wds){ const re=new RegExp('\\b(?:na |no |nesta |neste |próxima |proxima |próximo |proximo )?'+w[0]+'(?:-feira)?\\b'); if((m=low.match(re))){ const d=new Date(t); let add=(w[1]-d.getDay()+7)%7; if(add===0) add=7; d.setDate(d.getDate()+add); return {iso:isoOf(d), raw:m[0]}; } }
  return null;
}
function parseHora(txt){
  const low=txt.toLowerCase(); let m;
  if((m=low.match(/\b(?:às\s+|as\s+)?(\d{1,2}):(\d{2})\b/))){ const h=+m[1], mi=+m[2]; if(h<24&&mi<60) return {hora:pad(h)+':'+pad(mi), raw:m[0]}; }
  if((m=low.match(/\b(?:às\s+|as\s+)?(\d{1,2})\s?h(?:\s?(\d{2}))?\b/))){ const h=+m[1], mi=m[2]?+m[2]:0; if(h<24&&mi<60) return {hora:pad(h)+':'+pad(mi), raw:m[0]}; }
  if((m=low.match(/(?:^|\s)às\s+(\d{1,2})\b/))){ const h=+m[1]; if(h<24) return {hora:pad(h)+':00', raw:m[0]}; }
  return null;
}
function parsePessoa(txt){
  const re=/(?:^|\s)(?:ao|à|a|para o|para a|para|pro|pra)\s+((?:Seu|Seo|Dona|Sr\.?|Sra\.?|Dr\.?|Dra\.?|Prof\.?|Profa\.?)\s+)?([A-ZÀ-Ý][a-zà-ÿ]+(?:\s+(?:d[aeo]s?\s+)?[A-ZÀ-Ý][a-zà-ÿ]+)?)/;
  const m=txt.match(re); if(!m) return null; return {nome:((m[1]||'')+m[2]).trim(), raw:m[0]};
}
function limpar(txt, raws, extra){
  let s=' '+txt+' ';
  (raws||[]).forEach(r=>{ if(r) s=s.replace(r,' '); });
  if(extra) s=s.replace(extra,' ');
  s=s.replace(/\s+(no|na|em|de|do|da|às|as|para|pra|pro)\s*$/i,' ').replace(/^\s*(no|na|em|de|às|as)\s+/i,' ');
  s=s.replace(/\s{2,}/g,' ').replace(/\s+([,.;:])/g,'$1').trim().replace(/^[,.;:-]+|[,.;:-]+$/g,'').trim();
  return cap(s);
}
/* ---------- cronograma (etapas de um compromisso) ---------- */
function etapasOf(d){ return d && Array.isArray(d.etapas) ? d.etapas : []; }
function etAt(e){ const b=parseIso(e.data); if(!b) return null; if(e.hora){ const q=e.hora.split(':').map(Number); b.setHours(q[0]||0, q[1]||0); } return b; }
function sortEtapas(a){ return a.slice().sort((x,y)=>String(x.data||'').localeCompare(String(y.data||'')) || String(x.hora||'99').localeCompare(String(y.hora||'99'))); }
function addDays(iso, n){ const b=parseIso(iso); if(!b) return iso; b.setDate(b.getDate()+n); return isoOf(b); }
function daysBetween(a, b){ const x=parseIso(a), y=parseIso(b); if(!x||!y) return 0; return Math.round((y-x)/864e5); }
function fimAgenda(d){ const L=sortEtapas(etapasOf(d)); return L.length ? (L[L.length-1].data||d.data) : d.data; }
function etLabelCurta(e){ const dt=parseIso(e.data); const t=today(); const dd=dt&&dt.getTime()===t.getTime()?'hoje':dt?pad(dt.getDate())+'/'+pad(dt.getMonth()+1):''; return [dd, e.hora].filter(Boolean).join(' '); }
/* situação do cronograma agora: etapa em andamento, próxima, quantas já foram */
function cronoState(d){
  const L=sortEtapas(etapasOf(d)); const now=new Date(); const t=today(); let cur=-1, nxt=-1;
  L.forEach((e,i)=>{ const at=etAt(e); if(!at) return; const started = e.hora ? at<=now : at<=t; if(started) cur=i; else if(nxt<0) nxt=i; });
  const last=L[L.length-1]; let over=false;
  if(last){ const at=etAt(last); if(at){ over = last.hora ? (now-at>2*3600e3) : (at<t); } }
  if(over) cur=-1;
  const sameDay=L.length>0 && L.every(e=>e.data===L[0].data);
  const feitas=L.filter((e,i)=>e.feito || (cur>=0 ? i<cur : (over || (nxt>=0 && i<nxt)))).length;
  return {L, cur, nxt, over, sameDay, feitas};
}
function agendaQuando(d){
  const dt=parseIso(d.data); const L=sortEtapas(etapasOf(d));
  if(!L.length) return [dt?WD[dt.getDay()]:'', d.hora||'', d.local||''].filter(Boolean).join(' · ');
  const a=L[0], z=L[L.length-1]; const dm=x=>{ const q=parseIso(x); return q?pad(q.getDate())+'/'+pad(q.getMonth()+1):''; };
  let per; if(a.data===z.data){ const q=parseIso(a.data); per=[q?WD[q.getDay()]:'', a.hora&&z.hora&&a.hora!==z.hora?a.hora+' às '+z.hora:a.hora].filter(Boolean).join(' · '); }
  else per=dm(a.data)+' a '+dm(z.data);
  return [per, d.local||''].filter(Boolean).join(' · ');
}
function cronoResumo(d){
  const c=cronoState(d); if(!c.L.length) return '';
  const nx=c.nxt>=0?c.L[c.nxt]:null, cu=c.cur>=0?c.L[c.cur]:null;
  if(c.over) return c.L.length+' etapas · concluído';
  if(cu && nx && cu.hora && cu.data===isoOf(today())) return 'Agora: '+(cu.titulo||'etapa')+' · depois: '+(nx.titulo||'próxima etapa')+(nx.hora&&nx.data===cu.data?' às '+nx.hora:' ('+etLabelCurta(nx)+')');
  if(cu && !nx) return 'Agora: '+(cu.titulo||'última etapa')+' · '+c.L.length+' etapas';
  if(nx && c.cur<0 && !c.feitas) return c.L.length+' etapas · começa '+etLabelCurta(nx).replace(' ',', ');
  if(nx) return c.feitas+' de '+c.L.length+' · próxima: '+(nx.titulo||'etapa')+' ('+etLabelCurta(nx).replace(' ',', ')+')';
  return c.L.length+' etapas';
}
function cronoTexto(d, whats){
  const L=sortEtapas(etapasOf(d)); const b=whats?'*':''; let out=b+(d.titulo||'Compromisso')+b; let day=null;
  L.forEach(e=>{ if(e.data!==day){ day=e.data; out+='\n\n'+b+(e.data?fmtData(e.data):'Sem data')+b; } out+='\n'+(e.hora?e.hora+' – ':'• ')+(e.titulo||'Etapa'); });
  if(d.local) out+='\n\nLocal: '+d.local; if(d.obs) out+='\n'+d.obs; return out;
}
/* pontos no tempo de um compromisso (ele próprio ou cada etapa) */
function agendaPontos(i){ const d=i.dados||{}; const L=sortEtapas(etapasOf(d));
  if(!L.length) return [{ds:d.data, hr:d.hora||'', titulo:d.titulo||'Compromisso', sub:''}];
  return L.map((e,k)=>({ds:e.data, hr:e.hora||'', titulo:e.titulo||('Etapa '+(k+1)), sub:(d.titulo||'Compromisso')+' · etapa '+(k+1)+' de '+L.length, feito:e.feito})); }
/* mensagem com várias linhas de horário/data vira compromisso com cronograma */
function detectCrono(lines){
  if(lines.length<3) return null;
  const first=lines[0]; const rest=lines.slice(1); const et=[]; let miss=0;
  const fdt=parseData(first); let cur=fdt?fdt.iso:null;
  rest.forEach(l=>{ const ln=l.replace(/^[-*•]\s*/,''); const hr=parseHora(ln); const dt=parseData(ln); if(!hr && !dt){ miss++; return; }
    if(dt) cur=dt.iso; et.push({id:uid(), data:cur||isoOf(today()), hora:hr?hr.hora:'', titulo:limpar(ln,[dt&&dt.raw, hr&&hr.raw]).replace(/^[–—-]\s*/,''), feito:false}); });
  if(et.length<2 || miss>et.length/2) return null;
  const fh=parseHora(first);
  const titulo=limpar(first,[fdt&&fdt.raw, fh&&fh.raw]).replace(/:\s*$/,'') || 'Compromisso';
  const L=sortEtapas(et);
  return {tipo:'agenda', dados:{titulo:cap(titulo), data:L[0].data, hora:L[0].hora, local:'', aviso:'', obs:'', etapas:L, avisoEtapas:'inicio'}, label:'Agenda · Cronograma', pills:[L.length+' etapas', 'Início: '+fmtData(L[0].data)+(L[0].hora?' '+L[0].hora:'')]};
}
function detectar(raw){
  const txt=String(raw||'').trim(); if(!txt) return null;
  const low=txt.toLowerCase();
  const lines=txt.split(/\n/).map(s=>s.trim()).filter(Boolean);
  if(lines.length>=2){
    const cr=detectCrono(lines); if(cr) return cr;
    const first=lines[0]; const fl=first.toLowerCase();
    const isCompra=/compra|feira|mercado|supermercado|levar/.test(fl);
    const hasTitle=!/^[-*•]/.test(first) && (/:$/.test(first) || lines.length>=3);
    const titulo=hasTitle?first.replace(/:\s*$/,''):(isCompra?'Lista de compras':'Tarefas');
    const its=(hasTitle?lines.slice(1):lines).map(s=>({t:s.replace(/^[-*•]\s*|^\[\s?\]\s*/,''),ok:false})).filter(x=>x.t);
    const modo=isCompra?'compras':'tarefas';
    return {tipo:'lista', dados:{titulo:cap(titulo), itens:its, modo}, label:'Lista · '+optLabel('modo',modo), pills:[its.length+' itens', 'Título: '+cap(titulo)]};
  }
  let m;
  if((m=txt.match(/(https?:\/\/[^\s]+|www\.[^\s]+)/i))){ const url=safeUrl(m[1]); const titulo=limpar(txt,[m[1]]); return {tipo:'link', dados:{url, titulo}, label:'Link', pills:[url.replace(/^https?:\/\//,'').slice(0,40)]}; }
  const verbo=low.match(/\b(pagar|pague|devo|devendo|boleto|conta de|fatura|paguei|pago|gastei|comprei|compra de|comprar)\b/);
  const dt=parseData(txt);
  const semData=dt? txt.replace(new RegExp(dt.raw.replace(/[.*+?^${}()|[\]\\/]/g,'\\$&'),'i'),' ') : txt;
  const mm=semData.match(/R\$\s*(\d{1,3}(?:\.\d{3})+(?:,\d{1,2})?|\d+(?:[.,]\d{1,2})?)|(\d{1,3}(?:\.\d{3})+(?:,\d{1,2})?|\d+(?:[.,]\d{1,2})?)\s*(?:reais|real|conto)\b/i)
          || (verbo ? semData.match(/(?:^|\s)(\d{1,3}(?:\.\d{3})+(?:,\d{1,2})?|\d+(?:[.,]\d{1,2})?)(?=\s|$|[,.;])/) : null);
  if(mm && (verbo || /R\$|reais/i.test(mm[0]))){
    const valor=parseMoney(mm[1]||mm[2]||mm[0]);
    const v=verbo?verbo[1]:'pagar';
    const pago=/paguei|^pago$|gastei|comprei/.test(v);
    const categoria=/comprei|compra de|comprar/.test(v)?'compra':'conta';
    const pes=parsePessoa(semData);
    let desc=limpar(semData,[mm[0], pes&&pes.raw], /\b(pagar|pague|devo|devendo|paguei|pago|gastei|comprei|comprar)\b/i);
    desc=limpar(desc,[], /\s(vence|vencimento|at[ée])\s*$/i);
    desc=desc.replace(/^(a|o|de|do|da)\s+/i,'');
    let para=pes?pes.nome:'';
    const lm=semData.match(/(?:^|\s)(?:na|no|em)\s+([A-ZÀ-Ý][a-zà-ÿ]+(?:\s+(?:d[aeo]s?\s+)?[A-ZÀ-Ý][a-zà-ÿ]+)?)/);
    if(lm && !para){ para=lm[1]; desc=limpar(desc,[lm[0].trim()]); }
    if(!desc) desc=categoria==='compra'?'Compra':(para?'Pagamento':'Conta');
    const dados={descricao:cap(desc), valor, para, situacao:pago?'pago':'apagar', categoria, forma:''};
    if(pago) dados.pagoEm=dt?dt.iso:isoOf(today()); else dados.vencimento=dt?dt.iso:'';
    const pills=['Valor: '+fmtMoney(valor)];
    if(para) pills.push((categoria==='compra'?'Onde: ':'Para: ')+para);
    if(!pago && dt) pills.push('Vence: '+fmtData(dt.iso));
    return {tipo:'despesa', dados, label:'Despesa · '+(pago?'Pago':'A pagar')+(categoria==='compra'?' · Compra':''), pills};
  }
  const em=txt.match(/[\p{L}\p{N}._%+-]+@[\p{L}\p{N}-]+(?:\.[\p{L}\p{N}-]+)+/u);
  const ph=txt.match(/(?:\+?55\s?)?(?:\(?\d{2}\)?[\s-]?)?9?\s?\d{4}[\s-]?\d{4}/);
  const hasPh=ph && digits(ph[0]).length>=8;
  if(em || hasPh){
    const nome=limpar(txt,[em&&em[0], hasPh&&ph[0]]);
    const pills=[]; if(hasPh) pills.push('Tel.: '+ph[0].trim()); if(em) pills.push('E-mail: '+em[0]); if(nome) pills.push('Nome: '+nome);
    return {tipo:'contato', dados:{nome:nome||'', telefone:hasPh?ph[0].trim():'', email:em?em[0]:'', obs:''}, label:'Contato', pills};
  }
  const hr=parseHora(dt?semData:txt);
  const kw=/\b(reuni|aula|consulta|anivers|prova|festa|evento|encontro|viagem|m[ée]dico|dentista|entrega|culto|missa|jogo|apresenta|palestra|curso|lembr|exame|formatura|casamento|planejamento)/.test(low);
  if(dt && !hr && !kw && /hoje|amanh/.test(dt.raw)) return null;
  if(dt || hr){
    const lembr=/\blembr(ar|ete|e)\b/.test(low);
    const raws=[dt&&dt.raw, hr&&hr.raw];
    const titulo=limpar(txt, raws, lembr?/\b(me\s+)?lembr(ar|ete|e)(\s+de)?\b/i:null);
    const pills=[]; if(dt) pills.push('Data: '+fmtData(dt.iso)); if(hr) pills.push('Hora: '+hr.hora); if(lembr) pills.push('Aviso: na hora');
    return {tipo:'agenda', dados:{titulo:titulo||(lembr?'Lembrete':'Compromisso'), data:dt?dt.iso:isoOf(today()), hora:hr?hr.hora:'', local:'', aviso:lembr?'hora':'', obs:''}, label:'Agenda', pills};
  }
  return null;
}

/* ---------- armazenamento ---------- */
const S = { tags:[], items:new Map(), mode:'iniciando', col:null, assets:null, downloads:null, q:new Map(), loaded:false, migrating:new Set() };
const LKEY='minhas-notas-v1', TKEY='minhas-notas-marcadores', PKEY='minhas-notas-pref', CFG='cfg-marcadores';
function tagById(id){ return S.tags.find(t=>t.id===id); }
function itemTags(it){ return (it.tags||[]).map(tagById).filter(Boolean); }
function tagPill(t, small){ return '<span class="tpill'+(small?' sm':'')+'"><span style="color:'+esc(t.cor)+';display:flex">'+svg(t.icon, small?12:13, 2.4)+'</span><span>'+esc(t.nome)+'</span></span>'; }
function tagChip(t, on, attr){ return '<button type="button" class="chip tchip" '+attr+' aria-pressed="'+on+'">'+(on?svg('check',14,2.6):'<span style="color:'+esc(t.cor)+';display:flex">'+svg(t.icon,14,2.4)+'</span>')+'<span>'+esc(t.nome)+'</span></button>'; }
function saveTags(){
  if(S.mode==='db'){ const tags=clone(S.tags); return enqueue(CFG, ()=>S.col.doc(CFG).set({kind:'cfg', tags}).catch(writeErr)); }
  try{ localStorage.setItem(TKEY, JSON.stringify(S.tags)); }catch(e){} return Promise.resolve();
}
function loadPref(){ try{ const p=JSON.parse(localStorage.getItem(PKEY)||'{}'); if(p.exib==='expandida') UI.exib='expandida'; if(p.tema==='claro'||p.tema==='escuro') UI.tema=p.tema; if(['caderno','silencio','classico'].indexOf(p.estilo)>=0) UI.estilo=p.estilo; if(p.layout==='linha') UI.layout='linha'; if(/^#[0-9A-Fa-f]{6}$/.test(p.accent||'')) UI.accent=p.accent; }catch(e){} applyTheme(); }
const darkMQ=window.matchMedia?window.matchMedia('(prefers-color-scheme: dark)'):null;
function applyTheme(){ const dark=UI.tema==='escuro' || (UI.tema==='auto' && darkMQ && darkMQ.matches); const de=document.documentElement; de.setAttribute('data-theme', dark?'dark':'light'); de.setAttribute('data-estilo', UI.estilo); if(UI.accent){ de.setAttribute('data-accent','1'); de.style.setProperty('--accent-c', UI.accent); } else { de.removeAttribute('data-accent'); de.style.removeProperty('--accent-c'); } const mt=document.querySelector('meta[name="theme-color"]'); if(mt) mt.setAttribute('content', getComputedStyle(de).getPropertyValue('--ground').trim()||'#F4F3EF'); }
if(darkMQ){ try{ darkMQ.addEventListener('change', ()=>{ if(UI.tema==='auto') applyTheme(); }); }catch(e){ try{ darkMQ.addListener(()=>{ if(UI.tema==='auto') applyTheme(); }); }catch(e2){} } }
function savePref(){ try{ localStorage.setItem(PKEY, JSON.stringify({exib:UI.exib, tema:UI.tema, estilo:UI.estilo, layout:UI.layout, accent:UI.accent})); }catch(e){} }
function loadLocal(){ try{ const raw=localStorage.getItem(LKEY); if(raw){ const arr=JSON.parse(raw); arr.forEach(it=>S.items.set(it.id,it)); } }catch(e){} }
function saveLocal(){ try{ localStorage.setItem(LKEY, JSON.stringify(Array.from(S.items.values()))); }catch(e){ toast('Não foi possível salvar neste navegador.'); } }
function body(it){ const o=clone(it); delete o.id; return o; }
function enqueue(id, fn){ const prev=S.q.get(id)||Promise.resolve(); const next=prev.catch(()=>{}).then(fn); S.q.set(id,next); return next; }
function writeErr(e){ const c=e&&e.code; if(c==='quota_exceeded') toast('O espaço do app está cheio. Apague itens antigos.'); else if(c==='unavailable') toast('Sem conexão agora. Tente de novo.'); else toast('Não foi possível salvar. Tente de novo.'); }
function put(it, silent){
  if(!silent) it.editado=Date.now(); S.items.set(it.id,it); scheduleRender();
  if(S.mode==='db'){ return enqueue(it.id, ()=>S.col.doc(it.id).set(body(it)).catch(writeErr)); }
  saveLocal(); return Promise.resolve();
}
function remove(id){
  S.items.delete(id); scheduleRender();
  if(S.mode==='db'){ return enqueue(id, ()=>S.col.doc(id).delete().catch(writeErr)); }
  saveLocal(); return Promise.resolve();
}
function runMigrations(){
  S.items.forEach(it=>{ if(T[it.tipo] || S.migrating.has(it.id)) return; const n=migrate(it); if(!n) return; S.migrating.add(it.id); n.hist=(n.hist||[]).concat([{em:Date.now(), txt:'Convertido para o novo tipo “'+T[n.tipo].label+'”'}]).slice(-20); put(n, true); });
}
async function initStore(){
  let db=null, user=null;
  try{ if(window.claude && typeof window.claude.use==='function'){ [db,user]=await Promise.all([window.claude.use('db'), window.claude.use('user')]); } }catch(e){}
  let id=null; try{ if(user) id=await user.id(); }catch(e){}
  if(db && id){
    try{
      S.col=db.collection('data/users/'+id); S.mode='db';
      const timer=setTimeout(()=>{ if(!S.loaded) setBanner('Ainda carregando suas notas… a conexão pode estar lenta.'); }, 10000);
      S.col.onSnapshot(snap=>{
        const map=new Map(); snap.docs.forEach(d=>{ const v=d.data(); if(!v) return; if(d.id===CFG){ S.tags=Array.isArray(v.tags)?clone(v.tags):[]; return; } map.set(d.id, Object.assign({id:d.id}, clone(v))); });
        S.items=map; if(!snap.metadata.fromCache){ S.loaded=true; clearTimeout(timer); setBanner(''); runMigrations(); runRecurrence(); purgeTrash(); }
        scheduleRender(true);
      }, ()=>{ clearTimeout(timer); S.loaded=true; setBanner('Não foi possível ler suas notas salvas agora. Recarregue a página mais tarde.'); scheduleRender(); });
    }catch(e){ S.mode='local'; }
    try{ S.assets=await window.claude.use('assets'); }catch(e){}
    try{ S.downloads=await window.claude.use('downloads'); }catch(e){}
  }
  if(S.mode!=='db'){
    S.mode='local'; loadLocal(); try{ S.tags=JSON.parse(localStorage.getItem(TKEY)||'[]'); }catch(e){ S.tags=[]; } S.loaded=true; runMigrations(); runRecurrence(); purgeTrash();
    setBanner('Modo local: as notas ficam só neste aparelho. Configure o Supabase para sincronizar e guardar na nuvem.');
    scheduleRender(true);
  }
}
function setBanner(t){ const b=document.getElementById('banner'); b.textContent=t; b.hidden=!t; }

/* ---------- interface ---------- */
const UI = { filter:'tudo', tag:null, q:'', view:'feed', mes:null, exib:'compacta', tema:'auto', estilo:'caderno', layout:'chat', accent:'', stamp:new Set(), viaComposer:new Set(), origin:null, open:new Set(), pinIdx:0, fresh:new Set(), justOpened:null };
loadPref();
let toastT=null;
let undoFn=null;
function toastUndo(msg, fn){ undoFn=fn; const el=document.getElementById('toastbar'); el.innerHTML='<span>'+esc(msg)+'</span><button type="button" class="tundo" data-undo="1">'+svg('undo',15)+'Desfazer</button>'; el.hidden=false; el.classList.add('withundo'); clearTimeout(toastT); toastT=setTimeout(()=>{ el.hidden=true; el.classList.remove('withundo'); undoFn=null; },6000); }
function toast(msg){ document.getElementById('toastbar').classList.remove('withundo'); undoFn=null; const inSheet=layer.innerHTML && layer.querySelector('.sheet'); let el=inSheet? layer.querySelector('#sheetToast') : document.getElementById('toastbar'); if(!el) el=document.getElementById('toastbar'); el.textContent=msg; el.hidden=false; clearTimeout(toastT); toastT=setTimeout(()=>{ const a=document.getElementById('toastbar'); if(a) a.hidden=true; const b=layer.querySelector('#sheetToast'); if(b) b.hidden=true; },3000); }
let rq=false, wantEnd=false;
function scheduleRender(end){ if(end) wantEnd=true; if(rq) return; rq=true; requestAnimationFrame(()=>{ rq=false; render(); }); }
function sorted(){ return Array.from(S.items.values()).filter(i=>T[i.tipo] && !i.excluido).sort((a,b)=>(a.criado||0)-(b.criado||0)); }
function trashed(){ return Array.from(S.items.values()).filter(i=>T[i.tipo] && i.excluido).sort((a,b)=>b.excluido-a.excluido); }
function searchText(it){ const d=it.dados||{}; let s=JSON.stringify(Object.assign({}, d, {html:undefined}))+' '+(d.html?plainOf(d.html):'')+' '+typeLabel(it)+' '+itemTags(it).map(t=>t.nome).join(' '); if(d.valor!=null) s+=' '+fmtMoney(d.valor)+' '+String(d.valor).replace('.',','); return s.toLowerCase(); }
function semAcento(x){ return String(x||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase(); }
function matches(it){
  if(UI.filter!=='tudo' && it.tipo!==UI.filter) return false;
  if(UI.tag && (it.tags||[]).indexOf(UI.tag)<0) return false;
  if(UI.q && semAcento(searchText(it)).indexOf(semAcento(UI.q))<0) return false;
  return true;
}
function render(){
  const isViews=UI.view!=='feed';
  document.body.dataset.view=UI.view;
  [['tabNotas','feed'],['tabCal','cal'],['tabResumo','views']].forEach(([tid,v])=>{ const b=document.getElementById(tid); if(b){ b.setAttribute('aria-selected', UI.view===v); b.setAttribute('aria-pressed', UI.view===v); } });
  document.getElementById('bFilter').hidden=isViews; document.getElementById('bSearch').hidden=isViews; if(isViews) document.getElementById('searchWrap').hidden=true;
  const feed=document.getElementById('feed'), views=document.getElementById('views');
  const comp=document.getElementById('composer'), sug=document.getElementById('suggest');
  renderActive(); renderPinbar(); renderSide(); renderAside();
  if(isViews){ feed.hidden=true; views.hidden=false; comp.hidden=true; sug.hidden=true; views.classList.toggle('iscal', UI.view==='cal'); if(UI.view==='cal') renderCal(); else renderViews(); return; }
  feed.hidden=false; views.hidden=true; comp.hidden=false; sug.hidden=false;
  const atEnd = feed.scrollHeight - feed.scrollTop - feed.clientHeight < 80;
  const list=sorted().filter(matches);
  if(!S.loaded && S.items.size===0){ feed.innerHTML='<div class="empty">Carregando suas notas…</div>'; return; }
  if(list.length===0){
    feed.classList.remove('linha');
    feed.innerHTML = sorted().length===0
      ? '<div class="empty"><b style="color:var(--ink);font-size:16px">Comece escrevendo abaixo</b><br>Experimente “pagar 180 ao Seu Zé dia 20”, “reunião sexta 19h” ou cole um link.<br><br>Formate como no WhatsApp: *negrito*, _itálico_, ~riscado~ e linhas começando com “-” viram lista.</div>'
      : emptyFor();
    return;
  }
  feed.classList.toggle('linha', UI.layout==='linha');
  if(UI.layout==='linha'){ renderLinha(feed, list, atEnd); }
  else {
    let html='', lastDay='';
    list.forEach(it=>{ const day=fmtDia(it.criado); if(day!==lastDay){ html+='<div class="sep">'+esc(day)+'</div>'; lastDay=day; } html+=card(it); });
    feed.innerHTML=html;
    if(wantEnd || atEnd){ feed.scrollTop=feed.scrollHeight; }
  }
  wantEnd=false; UI.justOpened=null;
  notifyChanged();
}
let lastSig='';
function notifyChanged(){ if(!window.__onItemsChanged || !S.loaded) return; const its=sorted(); const sig=its.map(i=>i.id+':'+(i.editado||0)).join(','); if(sig===lastSig) return; lastSig=sig; try{ window.__onItemsChanged(its); }catch(e){} }
const EXEMPLOS={texto:'Ideia para a aula: *mapa afetivo* do bairro', lista:'Feira:\n- tomate\n- café\n- feijão', agenda:'reunião de pais sexta 19h', despesa:'paguei 50 do gás', contato:'Seu Zé (83) 99999-1234', link:'https://cidades.ibge.gov.br IBGE Cidades'};
function emptyFor(){
  if(UI.filter==='tudo' || UI.q || UI.tag) return '<div class="empty">Nada encontrado com esse filtro ou busca.<br><button type="button" class="btn" data-clearf="1" style="margin-top:12px">Limpar filtros</button></div>';
  const tp=UI.filter; const ex=EXEMPLOS[tp]; const nome=T[tp].label;
  let h='<div class="empty"><span class="emptyic" style="color:'+typeColor(tp)+'">'+svg(typeIcon(tp),28)+'</span><b style="color:var(--ink);font-size:16px">Nenhum item do tipo '+esc(nome)+' ainda</b>';
  if(ex) h+='<span>Experimente escrever na caixa de texto:</span><code class="exemplo">'+esc(ex).replace(/\n/g,'<br>')+'</code><button type="button" class="btn" data-exemplo="'+tp+'">Usar este exemplo</button>';
  else if(T[tp].file) h+='<span>Toque no clipe, ao lado da caixa de texto, para escolher '+(tp==='imagem'?'fotos':tp==='audio'?'um áudio':'um arquivo')+(tp==='audio'?', ou no microfone para gravar.':'.')+'</span>';
  h+='<button type="button" class="btn dark" data-newtype="'+tp+'">Criar '+esc(nome)+'</button><button type="button" class="btn" data-clearf="1">Ver todos os itens</button></div>';
  return h;
}
function dayHead(d){ return '<div class="tdaynum"><b>'+d.getDate()+'</b><span>'+WD[d.getDay()]+'<br>'+MES[d.getMonth()]+(d.getFullYear()!==new Date().getFullYear()?' '+d.getFullYear():'')+'</span></div>'; }
function renderLinha(feed, list, atEnd){
  let html='', cur=null, open=false;
  const close=()=>{ if(open){ html+='</div></section>'; open=false; } };
  list.forEach(it=>{ const d=new Date(it.criado); d.setHours(0,0,0,0); if(!cur || d.getTime()!==cur.getTime()){ close(); cur=d; html+='<section class="tday">'+dayHead(d)+'<div class="titems">'; open=true; } html+='<div class="trow"><span class="ttime">'+fmtHora(it.criado)+'</span>'+card(it)+'</div>'; });
  close();
  // próximos compromissos e vencimentos (por data marcada)
  const showFut=!UI.q && !UI.tag && (UI.filter==='tudo'||UI.filter==='agenda'||UI.filter==='despesa');
  const fut=[]; const now=new Date(); const t=today(); const lim=new Date(t); lim.setDate(lim.getDate()+30);
  const addFut=(i,ds,hr,p)=>{ const dt=parseIso(ds); if(!dt || dt<t || dt>lim) return; if(dt.getTime()===t.getTime() && hr){ const [hh,mm]=hr.split(':').map(Number); const at=new Date(t); at.setHours(hh,mm); if(at<now) return; } fut.push({dt,hr,i,p}); };
  if(showFut) sorted().forEach(i=>{ const d=i.dados||{}; if(i.tipo==='agenda' && UI.filter!=='despesa'){ agendaPontos(i).forEach(p=>{ if(!p.feito) addFut(i,p.ds,p.hr,p.sub?p:null); }); } else if(i.tipo==='despesa' && d.situacao!=='pago' && UI.filter!=='agenda'){ addFut(i,d.vencimento,''); } });
  fut.sort((a,b)=>a.dt-b.dt || String(a.hr).localeCompare(String(b.hr)));
  html+='<div class="agora" id="agora">Agora · '+pad(now.getHours())+':'+pad(now.getMinutes())+'</div>';
  if(fut.length){
    let fd=null, fo=false;
    fut.slice(0,25).forEach(f=>{ if(!fd || f.dt.getTime()!==fd.getTime()){ if(fo) html+='</div></section>'; fd=f.dt; html+='<section class="tday futuro">'+dayHead(f.dt)+'<div class="titems">'; fo=true; }
      const d=f.i.dados; const isD=f.i.tipo==='despesa';
      html+='<div class="trow"><span class="ttime">'+esc(f.hr||(isD?'vence':'—'))+'</span><button type="button" class="ghost" data-goto="'+esc(f.i.id)+'"><span style="color:'+famColor(f.i)+';display:flex">'+svg(iconOf(f.i),18)+'</span><span style="display:flex;flex-direction:column;gap:1px;min-width:0"><b>'+esc(f.p?f.p.titulo:isD?(d.descricao||'Despesa'):(d.titulo||'Compromisso'))+'</b><span class="gsub">'+esc(f.p?f.p.sub:isD?('A pagar · '+fmtMoney(d.valor)+(d.para?' · '+d.para:'')):[d.local, d.repetir?'repete '+repLabel(d.repetir):''].filter(Boolean).join(' · ')||'Agenda')+'</span></span></button></div>';
    });
    if(fo) html+='</div></section>';
  } else if(showFut) html+='<p class="muted" style="text-align:center;margin:0 0 12px">Nada marcado para os próximos 30 dias.</p>';
  feed.innerHTML=html;
  if(wantEnd || atEnd){ const ag=document.getElementById('agora'); feed.scrollTop = ag ? Math.max(0, ag.offsetTop - feed.clientHeight*0.62) : feed.scrollHeight; }
}
function activeCount(){ return (UI.filter!=='tudo'?1:0)+(UI.tag?1:0); }
function renderActive(){
  if(UI.tag && !tagById(UI.tag)) UI.tag=null;
  const n=activeCount(); const bf=document.getElementById('bFilter');
  bf.setAttribute('aria-pressed', n?'true':'false'); bf.setAttribute('aria-label', n?'Filtrar ('+n+' ativo'+(n>1?'s':'')+')':'Filtrar por tipo ou marcador');
  bf.innerHTML=svg('filter',19)+(n?'<span class="badge">'+n+'</span>':'');
  const el=document.getElementById('active');
  if(!n || UI.view!=='feed'){ el.hidden=true; el.innerHTML=''; return; }
  const total=sorted().filter(matches).length;
  let h='<span class="muted" style="flex:0 0 auto">'+total+(total===1?' item':' itens')+'</span>';
  if(UI.filter!=='tudo') h+='<button type="button" class="chip achip" data-rmf="tipo" aria-label="Remover filtro '+esc(T[UI.filter].label)+'"><span style="color:'+typeColor(UI.filter)+';display:flex">'+svg(typeIcon(UI.filter),14)+'</span>'+esc(T[UI.filter].label)+svg('x',13,2.6)+'</button>';
  if(UI.tag){ const t=tagById(UI.tag); h+='<button type="button" class="chip achip" data-rmf="tag" aria-label="Remover filtro '+esc(t.nome)+'"><span style="color:'+esc(t.cor)+';display:flex">'+svg(t.icon,14,2.4)+'</span>'+esc(t.nome)+svg('x',13,2.6)+'</button>'; }
  el.hidden=false; el.innerHTML=h;
}
function renderPinbar(){
  const el=document.getElementById('pinbar'); const pins=sorted().filter(i=>i.fixo);
  if(!pins.length || UI.view!=='feed' || activeCount() || UI.q){ el.hidden=true; el.innerHTML=''; return; }
  if(UI.pinIdx>=pins.length) UI.pinIdx=0; const p=pins[UI.pinIdx];
  el.hidden=false;
  el.innerHTML='<button type="button" class="pinmain" data-pinjump="'+esc(p.id)+'"><span style="color:var(--muted);display:flex">'+svg('pin',15)+'</span><span style="color:'+famColor(p)+';display:flex">'+svg(iconOf(p),15)+'</span><span class="pintxt">'+esc(cardTitle(p))+'</span></button>'+(pins.length>1?'<button type="button" class="pinnext" data-pinnext="1" aria-label="Próximo fixado ('+(UI.pinIdx+1)+' de '+pins.length+')">'+(UI.pinIdx+1)+'/'+pins.length+svg('chevron',14)+'</button>':'');
}
function cardTitle(it){ const d=it.dados||{}; switch(it.tipo){ case 'despesa': return (d.descricao||'Despesa')+(d.valor!=null?' · '+fmtMoney(d.valor):''); case 'contato': return d.nome||d.telefone||d.email||'Contato'; case 'local': return d.nome||d.endereco||'Local'; case 'imagem': case 'audio': return d.legenda||T[it.tipo].label; case 'documento': return d.nome||'Documento'; case 'link': return d.titulo||d.url||'Link'; case 'texto': return d.titulo||(d.html?plainOf(d.html):d.texto||'Texto').split('\n')[0]; default: return d.titulo||T[it.tipo].label; } }
function head(it, label){
  return '<div class="chead"><span class="ic">'+svg(iconOf(it),15)+'</span><span class="tlabel">'+esc(label||typeLabel(it))+'</span>'+(it.fixo?'<span class="pinmark" title="Fixado">'+svg('pin',13)+'</span>':'')+'<span class="time">'+fmtHora(it.criado)+(it.hist&&it.hist.length>1?' · editado':'')+'</span><button type="button" class="cmore" data-menu="'+esc(it.id)+'" aria-label="Mais opções" title="Mais opções">'+svg('menu',16)+'</button></div>';
}
function blobUrl(id){ if(!id) return ''; if(window.__assetUrl) return window.__assetUrl(id); return '/_blob/'+encodeURIComponent(id); }
function isLegacy(a){ return !!(window.__assetUrl && a && String(a).indexOf('/')<0); }
const LEGACY='<div class="legacy">'+'Arquivo da versão anterior: envie de novo'+'</div>';
function gallery(id, as, alt){
  if(as.length && as.every(isLegacy)) return LEGACY;
  const n=as.length; const a=esc(alt||'Imagem');
  const cell=(k,extra)=>'<button type="button" class="gcell" data-view="'+esc(id)+'" data-i="'+k+'" aria-label="Ver imagem '+(k+1)+' de '+n+'"'+(extra||'')+'><img alt="'+a+'" src="'+esc(blobUrl(as[k]))+'" loading="lazy"></button>';
  if(n===1) return '<button type="button" class="gcell single" data-view="'+esc(id)+'" data-i="0" aria-label="Ver imagem"><img alt="'+a+'" src="'+esc(blobUrl(as[0]))+'" loading="lazy"></button>';
  let h='<div class="gal">';
  if(n===3){ h+=cell(0,' style="grid-column:1 / span 2;aspect-ratio:2/1"')+cell(1)+cell(2); }
  else { const show=Math.min(n,4); for(let k=0;k<show;k++){ if(k===3 && n>4) h+='<button type="button" class="gcell" data-view="'+esc(id)+'" data-i="3" aria-label="Ver mais '+(n-3)+' imagens"><img alt="" src="'+esc(blobUrl(as[3]))+'" loading="lazy"><span class="more">+'+(n-3)+'</span></button>'; else h+=cell(k); } }
  return h+'</div>';
}
function fullCard(it){
  const d=it.dados||{}; const fk=famKey(it); let cls='card f-'+fk+(UI.justOpened===it.id?' abrindo':'')+(UI.fresh.has(it.id)?' novo':'')+(UI.viaComposer.has(it.id)?' doenvio':'')+(UI.stamp.has(it.id)?' carimbo':''); const id=esc(it.id);
  let inner='';
  switch(it.tipo){
    case 'texto': {
      if(d.estilo==='destaque') cls+=' st-destaque'; if(d.estilo==='citacao') cls+=' st-citacao';
      const body = d.html ? sanitize(d.html) : textToHtml(d.texto);
      inner=head(it)+(d.titulo?'<div class="ttitle" data-f="titulo">'+esc(d.titulo)+'</div>':'')+(body?'<div data-f="html" class="rich sz-'+esc(d.tamanho||'m')+'">'+body+'</div>':'');
      break; }
    case 'imagem': { const as=assetsOf(d); inner=(as.length?gallery(it.id, as, d.legenda):'<div class="media" style="height:120px;display:flex;align-items:center;justify-content:center;color:var(--muted)">Sem imagem</div>')+head(it, as.length>1?'Imagens · '+as.length:'Imagem')+(d.legenda?'<span class="csub" data-f="legenda">'+esc(d.legenda)+'</span>':''); break; }
    case 'audio': inner=head(it)+(isLegacy(d.asset)?LEGACY:d.asset?'<audio controls preload="none" src="'+esc(blobUrl(d.asset))+'" data-stop="1"></audio>':'<span class="csub">Sem arquivo de áudio</span>')+(d.legenda?'<span class="csub" data-f="legenda">'+esc(d.legenda)+'</span>':''); break;
    case 'documento': inner=head(it)+'<span class="ctitle" data-f="nome">'+esc(d.nome||'Documento')+'</span>'+(d.tamanhoArq?'<span class="csub">'+esc(d.tamanhoArq)+'</span>':'')+(d.legenda?'<span class="csub" data-f="legenda">'+esc(d.legenda)+'</span>':'')+(isLegacy(d.asset)?LEGACY:d.asset?(isPdf(d)&&window.__pdfjs?'<div class="docacts"><button type="button" class="btn dark" data-pdf="'+id+'">'+svg('documento',16)+'Abrir PDF</button><a class="btn" data-stop="1" href="'+esc(blobUrl(d.asset))+'" target="_blank" rel="noopener" aria-label="Abrir em outro app" title="Abrir em outro app">'+svg('download',16)+'</a></div>':'<a class="btn" data-stop="1" href="'+esc(blobUrl(d.asset))+'" target="_blank" rel="noopener">Abrir arquivo</a>'):''); break;
    case 'link': { const u=safeUrl(d.url); inner=head(it)+(u?'<a class="linkbox" data-stop="1" href="'+esc(u)+'" target="_blank" rel="noopener"><span class="ctitle" style="color:var(--ink)">'+esc(d.titulo||u.replace(/^https?:\/\//,''))+'</span><span style="font-size:13px;color:var(--tempo);word-break:break-all">'+esc(u.replace(/^https?:\/\//,'').slice(0,60))+'</span></a>':'<span class="csub" data-f="url">'+esc(d.url||'Sem endereço')+'</span>'); break; }
    case 'agenda': { const dt=parseIso(d.data); const fimD=parseIso(fimAgenda(d)); const past=fimD&&fimD<today(); inner=head(it)+'<div class="row" style="gap:12px">'+(dt?'<div class="cal"><b>'+MES[dt.getMonth()]+'</b><span>'+dt.getDate()+'</span></div>':'')+'<div style="display:flex;flex-direction:column;gap:2px;min-width:0"><span class="ctitle" data-f="titulo">'+esc(d.titulo||'Compromisso')+'</span><span class="csub" data-f="'+(etapasOf(d).length?'etapas':'data')+'">'+esc(agendaQuando(d))+'</span>'+(d.obs?'<span class="csub" data-f="obs">'+esc(d.obs)+'</span>':'')+(past?'<span class="muted">Já passou</span>':'')+'</div></div>'+cronoHtml(it)+(d.aviso?'<span class="bell" data-f="aviso">'+svg('bell',14)+'Aviso: '+esc(optLabel('aviso',d.aviso).toLowerCase())+'</span>':'')+(d.repetir?'<span class="repmark" data-f="repetir">'+svg('repeat',13)+'Repete '+repLabel(d.repetir)+'</span>':''); { const l=d.local?findLinked('local', d.local):null; if(l) inner+='<div class="links">'+linkChip(l, 'Local: '+(l.dados.nome||''))+'</div>'; } break; }
    case 'despesa': {
      const pago=d.situacao==='pago'; const v=parseIso(d.vencimento); const late=!pago&&v&&v<today();
      const sub=[d.para?(d.categoria==='compra'?d.para:'Para: '+d.para):'', !pago&&d.vencimento?'vence '+fmtData(d.vencimento):'', pago&&d.pagoEm?(d.categoria==='compra'?fmtData(d.pagoEm):'pago em '+fmtData(d.pagoEm)):'', d.forma?optLabel('forma',d.forma):''].filter(Boolean).join(' · ');
      inner=head(it)+'<div class="row"><span class="ctitle" data-f="descricao">'+esc(d.descricao||'Despesa')+'</span><span class="money" data-f="valor">'+esc(fmtMoney(d.valor))+'</span></div>'+(sub?'<span class="csub" data-f="'+(pago?'pagoEm':'vencimento')+'">'+esc(sub)+'</span>':'')+(late?'<span class="alert">Vencida</span>':'')+(d.repetir?'<span class="repmark" data-f="repetir">'+svg('repeat',13)+'Repete '+repLabel(d.repetir)+'</span>':'');
      { const c=d.para?findLinked('contato', d.para):null; if(c) inner+='<div class="links">'+linkChip(c, 'Contato: '+(c.dados.nome||''))+'</div>'; }
      if(!pago) inner+='<button type="button" class="btn red" data-act="pay" data-id="'+id+'">'+svg('check',16,2.4)+'Marcar como pago</button>';
      else if(it.pagoNoApp) inner+='<button type="button" class="btn ghost-din" data-act="unpay" data-id="'+id+'">Desfazer pagamento</button>';
      break; }
    case 'contato': { const tel=digits(d.telefone); const wa=tel?(tel.length<=11?'55'+tel:tel):''; const btns=[]; if(tel){ btns.push('<a class="btn ghost-pes" data-stop="1" href="tel:'+esc(tel)+'">Ligar</a>'); btns.push('<a class="btn ghost-pes" data-stop="1" href="https://wa.me/'+esc(wa)+'" target="_blank" rel="noopener">WhatsApp</a>'); } if(d.email) btns.push('<a class="btn ghost-pes" data-stop="1" href="mailto:'+esc(d.email)+'">E-mail</a>');
      inner=head(it)+'<div class="row" style="gap:12px"><span class="avatar">'+esc(initials(d.nome||d.email))+'</span><div style="display:flex;flex-direction:column;gap:2px;min-width:0"><span class="ctitle" data-f="nome">'+esc(d.nome||d.email||'Contato')+'</span>'+(d.telefone?'<span class="csub" data-f="telefone">'+esc(d.telefone)+'</span>':'')+(d.email&&d.nome?'<span class="csub" data-f="email" style="word-break:break-all">'+esc(d.email)+'</span>':'')+(d.obs?'<span class="csub" data-f="obs">'+esc(d.obs)+'</span>':'')+'</div></div>'+(btns.length?'<div style="display:grid;grid-template-columns:repeat('+btns.length+',minmax(0,1fr));gap:8px">'+btns.join('')+'</div>':''); break; }
    case 'local': { const qy=encodeURIComponent([d.nome,d.endereco].filter(Boolean).join(', ')); inner=head(it)+'<span class="ctitle" data-f="nome">'+esc(d.nome||'Local')+'</span>'+(d.endereco?'<span class="csub" data-f="endereco">'+esc(d.endereco)+'</span>':'')+(qy?'<a class="btn ghost-pes" data-stop="1" href="https://www.google.com/maps/search/?api=1&query='+qy+'" target="_blank" rel="noopener">'+svg('local',16)+'Abrir no mapa</a>':''); break; }
    case 'lista': { const its=d.itens||[]; const ok=its.filter(x=>x.ok).length; inner=head(it, typeLabel(it)+' · '+ok+' de '+its.length)+'<span class="ctitle" data-f="titulo">'+esc(d.titulo||'Lista')+'</span><div style="display:flex;flex-direction:column">'+its.map((x,i)=>'<button type="button" class="litem" data-act="tick" data-id="'+id+'" data-i="'+i+'" aria-pressed="'+(x.ok?'true':'false')+'"><span class="box'+(x.ok?' on':'')+'">'+(x.ok?svg('check',14,3):'')+'</span><span class="'+(x.ok?'done':'')+'">'+esc(x.t)+'</span></button>').join('')+'</div>'; break; }
  }
  const tags=itemTags(it); const compactMode=UI.exib==='compacta';
  if(tags.length) inner+='<div class="cfoot"><div class="tpills" data-f="tags">'+tags.map(t=>tagPill(t)).join('')+'</div></div>';
  const og=(UI.origin && UI.origin.id===it.id)?' style="--ox:'+UI.origin.ox+'%;--oy:'+UI.origin.oy+'%"':'';
  return '<div class="'+cls+'"'+og+' data-open="'+id+'" tabindex="0" aria-label="'+esc(typeLabel(it))+': '+esc(cardTitle(it))+(compactMode?' (expandido). Toque numa informação para editar; toque no topo para recolher; segure para mais opções':'. Toque numa informação para editar; segure para mais opções')+'">'+inner+'</div>';
}
function cronoHtml(it){
  const d=it.dados||{}; const c=cronoState(d); if(!c.L.length) return '';
  let h='<ol class="crono" aria-label="Cronograma, '+c.L.length+' etapas">'; let day=null;
  c.L.forEach((e,i)=>{
    if(!c.sameDay && e.data!==day){ day=e.data; const q=parseIso(e.data); h+='<li class="cday">'+esc(q?fmtData(e.data):'Sem data')+'</li>'; }
    const st=e.feito?'feito':(i===c.cur?'cur':(c.over||(c.cur>=0&&i<c.cur)||(c.nxt>=0&&i<c.nxt))?'past':'fut');
    const idx=(it.dados.etapas||[]).findIndex(x=>x.id===e.id);
    h+='<li class="et '+st+'"><button type="button" class="etdot" data-act="etick" data-id="'+esc(it.id)+'" data-i="'+idx+'" aria-pressed="'+(e.feito?'true':'false')+'" aria-label="'+(e.feito?'Desmarcar':'Marcar como feita')+': '+esc(e.titulo||'etapa')+'">'+(e.feito?svg('check',11,3.2):'')+'</button><span class="ethr">'+esc(e.hora||(c.sameDay?'—':''))+'</span><span class="ettx" data-f="etapas">'+esc(e.titulo||'Etapa')+(i===c.cur?'<em>agora</em>':'')+'</span></li>';
  });
  return h+'</ol>';
}
function summary(it){
  const d=it.dados||{}; let t='', sub='', right='', thumb='';
  switch(it.tipo){
    case 'texto': { const pl=d.html?plainOf(d.html):(d.texto||''); const lines=pl.split('\n').map(x=>x.trim()).filter(Boolean); t=d.titulo||lines[0]||'Texto'; sub=(d.titulo?lines[0]:lines[1])||''; break; }
    case 'imagem': { const as=assetsOf(d); t=d.legenda||(as.length>1?as.length+' imagens':'Imagem'); sub=as.length>1&&d.legenda?as.length+' imagens':''; if(as.length && !isLegacy(as[0])) thumb='<span class="cthumb"><img alt="" src="'+esc(blobUrl(as[0]))+'" loading="lazy">'+(as.length>1?'<b>'+as.length+'</b>':'')+'</span>'; break; }
    case 'audio': t=d.legenda||'Áudio'; sub='Toque para ouvir'; break;
    case 'documento': t=d.nome||'Documento'; sub=[d.tamanhoArq,d.legenda].filter(Boolean).join(' · '); break;
    case 'link': { const u=safeUrl(d.url); t=d.titulo||u.replace(/^https?:\/\//,'')||'Link'; sub=u?u.replace(/^https?:\/\//,'').split('/')[0]:''; break; }
    case 'agenda': { t=d.titulo||'Compromisso'; const dt=parseIso(d.data); if(etapasOf(d).length){ sub=cronoResumo(d); } else { sub=[dt?fmtData(d.data):'', d.hora, d.local].filter(Boolean).join(' · '); if(dt&&dt<today()) sub+=' · já passou'; } if(d.repetir) sub='↻ '+sub; break; }
    case 'despesa': { t=d.descricao||'Despesa'; right='<span class="cval">'+esc(fmtMoney(d.valor))+'</span>'; const pago=d.situacao==='pago'; const v=parseIso(d.vencimento); const dm=x=>{ const q=parseIso(x); return q?pad(q.getDate())+'/'+pad(q.getMonth()+1):''; }; sub=pago?('Pago'+(d.pagoEm?' em '+dm(d.pagoEm):'')):(v?(v<today()?'Vencida ':'Vence ')+dm(d.vencimento):'A pagar'); if(d.para) sub+=' · '+d.para; if(d.repetir) sub='↻ '+sub; break; }
    case 'contato': t=d.nome||d.email||d.telefone||'Contato'; sub=[d.nome?d.telefone:'', d.nome||d.telefone?d.email:''].filter(Boolean).join(' · '); break;
    case 'local': t=d.nome||'Local'; sub=d.endereco||''; break;
    case 'lista': { const its=d.itens||[]; const ok=its.filter(x=>x.ok).length; t=d.titulo||'Lista'; sub=optLabel('modo',d.modo)+' · '+ok+' de '+its.length+' concluídos'; right='<span class="cprog" aria-hidden="true"><i style="width:'+(its.length?Math.round(ok/its.length*100):0)+'%"></i></span>'; break; }
  }
  return {t, sub, right, thumb};
}
function norm(x){ return String(x||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/\s+/g,' ').trim(); }
function findLinked(tipo, name){
  const n=norm(name); if(n.length<2) return null;
  const cands=sorted().filter(i=>i.tipo===tipo && i.dados && i.dados.nome);
  return cands.find(i=>norm(i.dados.nome)===n) || cands.find(i=>{ const c=norm(i.dados.nome); return c.startsWith(n+' ') || n.startsWith(c+' ') || c.split(' · ')[0]===n; }) || null;
}
function linkChip(it, label){ return '<button type="button" class="linkchip" data-goto="'+esc(it.id)+'"><span style="color:'+famColor(it)+';display:flex">'+svg(iconOf(it),14)+'</span>'+esc(label)+'</button>'; }
function quickAction(it){
  const d=it.dados||{}; const id=esc(it.id);
  if(it.tipo==='despesa' && d.situacao!=='pago') return '<button type="button" class="qbtn qpay" data-act="pay" data-id="'+id+'" aria-label="Marcar '+esc(d.descricao||'despesa')+' como pago">'+svg('check',15,2.6)+'Pagar</button>';
  if(it.tipo==='lista'){ const its=d.itens||[]; const k=its.findIndex(x=>!x.ok); if(k>=0) return '<button type="button" class="qbtn qtick" data-act="tick" data-id="'+id+'" data-i="'+k+'" aria-label="Marcar “'+esc(its[k].t)+'” como feito"><span class="box"></span></button>'; }
  return '';
}
function card(it){
  if(UI.exib!=='compacta' || UI.open.has(it.id)) return fullCard(it);
  const sm=summary(it); const id=esc(it.id); let cls='card compact f-'+famKey(it)+(UI.fresh.has(it.id)?' novo':'')+(UI.viaComposer.has(it.id)?' doenvio':'')+(UI.stamp.has(it.id)?' carimbo':'');
  if(it.tipo==='texto' && it.dados && it.dados.estilo==='destaque') cls+=' st-destaque';
  const tags=itemTags(it);
  if(it.tipo==='lista'){ const its=it.dados.itens||[]; const k=its.findIndex(x=>!x.ok); if(k>=0) sm.sub='Próximo: '+its[k].t; else if(its.length) sm.sub='Tudo concluído'; }
  return '<div class="'+cls+'"><button type="button" class="cexp" data-open="'+id+'" aria-expanded="false" aria-label="'+esc(typeLabel(it))+': '+esc(sm.t)+(sm.sub?'. '+esc(sm.sub):'')+'. Toque para expandir">'
    +(sm.thumb||'<span class="ic">'+svg(iconOf(it),16)+'</span>')
    +'<span class="cmain"><span class="ctline"><span class="cttl'+(!sm.sub&&!tags.length?' two':'')+'">'+esc(sm.t)+'</span>'+(it.fixo?'<span class="pinmark">'+svg('pin',12)+'</span>':'')+'</span>'
    +(sm.sub||tags.length?'<span class="csline">'+(tags.length?'<span class="tdots">'+tags.map(t=>'<span title="'+esc(t.nome)+'" style="color:'+esc(t.cor)+'">'+svg(t.icon,12,2.4)+'</span>').join('')+'</span>':'')+'<span class="csub2">'+esc(sm.sub)+'</span></span>':'')
    +'</span><span class="cright">'+sm.right+'<span class="time">'+fmtHora(it.criado)+'</span></span></button>'+quickAction(it)+'</div>';
}

/* ---------- visões ---------- */
function renderViews(){
  const el=document.getElementById('views'); const t=today();
  if(!UI.mes) UI.mes={y:t.getFullYear(), m:t.getMonth()};
  const y=UI.mes.y, m=UI.mes.m;
  const inMonth=s=>{ const d=parseIso(s); return d && d.getFullYear()===y && d.getMonth()===m; };
  const isCur=y===t.getFullYear() && m===t.getMonth();
  const all=sorted(); const desp=all.filter(i=>i.tipo==='despesa');
  const apagar=desp.filter(i=>i.dados.situacao!=='pago' && (inMonth(i.dados.vencimento) || (isCur && (!i.dados.vencimento || parseIso(i.dados.vencimento)<t))));
  const pagos=desp.filter(i=>i.dados.situacao==='pago' && inMonth(i.dados.pagoEm||isoOf(new Date(i.criado))));
  const sum=a=>a.reduce((s,i)=>s+(Number(i.dados.valor)||0),0);
  const lim=new Date(t); lim.setDate(lim.getDate()+14);
  const agenda=[];
  all.forEach(i=>{ const d=i.dados||{}; let ds=null, txt='';
    if(i.tipo==='agenda'){ agendaPontos(i).forEach(p=>{ const q=parseIso(p.ds); if(q && q>=t && q<=lim && !p.feito) agenda.push({dt:q, ds:p.ds, txt:(p.hr?p.hr+' · ':'')+p.titulo+(p.sub?' ('+(d.titulo||'')+')':''), i}); }); return; }
    else if(i.tipo==='despesa' && d.situacao!=='pago'){ ds=d.vencimento; txt='Vence: '+(d.descricao||'Despesa')+' · '+fmtMoney(d.valor); }
    const dt=parseIso(ds); if(dt && dt>=t && dt<=lim) agenda.push({dt, ds, txt, i});
  });
  agenda.sort((a,b)=>a.dt-b.dt || String(a.txt).localeCompare(b.txt));
  const pend=[]; all.filter(i=>i.tipo==='lista' && i.dados.modo==='tarefas').forEach(i=>(i.dados.itens||[]).forEach((x,k)=>{ if(!x.ok) pend.push({i,x,k}); }));
  const row=(i,title,sub,right,color)=>{ const fk=famKey(i); return '<button type="button" class="li" data-open="'+esc(i.id)+'"><span class="ic" style="display:flex;align-items:center;justify-content:center;background:var(--'+fk+'-chip);color:'+famColor(i)+'">'+svg(iconOf(i),16)+'</span><span style="display:flex;flex-direction:column;gap:2px;min-width:0"><span style="font-size:14px;font-weight:600">'+esc(title)+'</span><span class="muted">'+esc(sub)+'</span></span>'+(right?'<span style="margin-left:auto;font-size:15px;font-weight:700;color:'+color+';white-space:nowrap">'+esc(right)+'</span>':'')+'</button>'; };
  let h='';
  h+='<div class="row"><button type="button" class="iconbtn" data-mes="-1" aria-label="Mês anterior">'+svg('back',18)+'</button><h2 style="flex:1;text-align:center;font-size:18px">'+MESL[m]+' '+y+'</h2><button type="button" class="iconbtn" data-mes="1" aria-label="Próximo mês" style="transform:scaleX(-1)">'+svg('back',18)+'</button></div>';
  h+='<div class="grid2" style="gap:10px"><div class="stat" style="background:var(--pagar-bg);border-color:var(--pagar-bd)"><b style="color:var(--pagar)">A pagar</b><strong style="color:var(--pagar)">'+fmtMoney(sum(apagar))+'</strong><span class="muted">'+apagar.length+(apagar.length===1?' despesa':' despesas')+'</span></div><div class="stat" style="background:var(--din-bg);border-color:var(--din-bd)"><b style="color:var(--din)">Pago</b><strong style="color:var(--din)">'+fmtMoney(sum(pagos))+'</strong><span class="muted">'+pagos.length+(pagos.length===1?' despesa':' despesas')+'</span></div></div>';
  h+='<section style="display:flex;flex-direction:column;gap:8px"><h2>A pagar</h2>'+(apagar.length?'<div class="list">'+apagar.map(i=>{ const v=parseIso(i.dados.vencimento); return row(i, i.dados.descricao||'Despesa', [i.dados.para, i.dados.vencimento?(v<t?'Vencida · ':'vence ')+fmtData(i.dados.vencimento):'sem vencimento'].filter(Boolean).join(' · '), fmtMoney(i.dados.valor), 'var(--pagar)'); }).join('')+'</div>':'<p class="muted" style="margin:0">Nenhuma despesa a pagar neste mês.</p>')+'</section>';
  h+='<section style="display:flex;flex-direction:column;gap:8px"><h2>Pagas no mês</h2>'+(pagos.length?'<div class="list">'+pagos.map(i=>row(i, i.dados.descricao||'Despesa', [optLabel('categoria',i.dados.categoria), i.dados.para, i.dados.pagoEm?fmtData(i.dados.pagoEm):'', optLabel('forma',i.dados.forma)].filter(x=>x&&x!=='—').join(' · '), fmtMoney(i.dados.valor), 'var(--din)')).join('')+'</div>':'<p class="muted" style="margin:0">Nada pago neste mês.</p>')+'</section>';
  h+='<button type="button" class="btn" data-csv="1">'+svg('download',16)+'Exportar despesas de '+MESL[m].toLowerCase()+' (planilha)</button><div id="csvArea"></div>';
  h+='<section style="display:flex;flex-direction:column;gap:8px"><h2>Tarefas pendentes</h2>'+(pend.length?'<div class="list">'+pend.map(p=>'<button type="button" class="li" data-act="tick" data-id="'+esc(p.i.id)+'" data-i="'+p.k+'"><span class="box"></span><span style="display:flex;flex-direction:column;gap:2px"><span style="font-size:14px">'+esc(p.x.t)+'</span><span class="muted">'+esc(p.i.dados.titulo||'Tarefas')+'</span></span></button>').join('')+'</div>':'<p class="muted" style="margin:0">Nenhuma tarefa pendente.</p>')+'</section>';
  el.innerHTML=h;
}

/* ---------- composição e sugestão ---------- */
let sug=null;
let msg=document.getElementById('msg');
function autosize(){ msg.style.height='auto'; msg.style.height=Math.min(140,msg.scrollHeight)+'px'; }
function updateSuggest(){
  sug=detectar(msg.value); const el=document.getElementById('suggest');
  if(!sug){ el.innerHTML=''; return; }
  const fake={tipo:sug.tipo, dados:sug.dados}; const fk=famKey(fake); const color=famColor(fake);
  el.innerHTML='<div class="suggest"><div class="row"><span class="ic" style="width:26px;height:26px;border-radius:8px;display:flex;align-items:center;justify-content:center;background:var(--'+fk+'-chip);color:'+color+'">'+svg(iconOf(fake),15)+'</span><span style="font-size:14px;font-weight:600;color:'+color+'">Parece: '+esc(sug.label)+'</span></div><div class="pills">'+sug.pills.map(p=>'<span class="pill">'+esc(p)+'</span>').join('')+'</div><div class="grid2"><button type="button" class="btn dark" data-sug="ok">Criar '+esc(T[sug.tipo].label)+'</button><button type="button" class="btn" data-sug="edit">Ajustar antes</button></div><span class="muted">Ou toque em enviar para guardar como texto.</span></div>';
}
function newItem(tipo, dados){ const now=Date.now(); const nid=uid(); UI.fresh.add(nid); setTimeout(()=>UI.fresh.delete(nid), 1500); return {id:nid, tipo, dados:withDefaults(tipo,dados), criado:now, editado:now, fixo:false, hist:[{em:now, txt:'Criado'}]}; }
function resetComposer(){ msg.value=''; autosize(); updateSuggest(); UI.filter='tudo'; UI.q=''; document.getElementById('q').value=''; scheduleRender(true); }
function send(asText){
  const v=msg.value.trim(); if(!v) return;
  let it;
  if(!asText && sug){ it=newItem(sug.tipo, clone(sug.dados)); it.hist[0].txt='Criado a partir do texto “'+v.slice(0,80)+'”'; }
  else it=newItem('texto', hasWa(v)?{html:waToHtml(v), texto:plainOf(waToHtml(v))}:{texto:v});
  UI.viaComposer.add(it.id); setTimeout(()=>UI.viaComposer.delete(it.id), 1200);
  put(it); resetComposer();
}
msg.addEventListener('input', ()=>{ autosize(); updateSuggest(); updateSendBtn(); });
msg.addEventListener('keydown', composerKey);
function isDesk(){ return !!(window.matchMedia && window.matchMedia('(min-width: 1024px) and (pointer: fine)').matches); }
function composerKey(e){ if(e.key!=='Enter' || e.isComposing) return; if(e.ctrlKey||e.metaKey||(isDesk() && !e.shiftKey)){ e.preventDefault(); send(true); } }
document.getElementById('bSend').addEventListener('click', ()=>{ if(!msg.value.trim() && recAvailable()) startRec(); else send(true); });
function recAvailable(){ return !!(window.__recorder && window.__recorder.available); }
function updateSendBtn(){ const b=document.getElementById('bSend'); const mic=!msg.value.trim() && recAvailable(); const want=mic?'mic':'send'; if(b.dataset.mode===want) return; b.dataset.mode=want; b.innerHTML=svg(want, mic?20:19); b.setAttribute('aria-label', mic?'Gravar áudio':'Enviar nota'); }
/* ---------- gravação de áudio ---------- */
let rec=null;
async function startRec(){
  if(rec) return;
  try{ await window.__recorder.start(); }catch(e){ toast(e&&e.message==='permissao'?'Permita o uso do microfone para gravar.':'Não foi possível começar a gravar.'); return; }
  rec={t0:Date.now(), timer:null};
  const c=document.getElementById('composer'); c.dataset.prev='1';
  c.innerHTML='<button class="round" id="recCancel" type="button" aria-label="Cancelar gravação">'+svg('trash',19)+'</button><div class="recbar" role="status"><span class="recdot"></span><span id="recTime">0:00</span><span class="muted" style="margin-left:6px">Gravando…</span></div><button class="round dark" id="recStop" type="button" aria-label="Parar e salvar áudio">'+svg('send',19)+'</button>';
  rec.timer=setInterval(()=>{ const s=Math.floor((Date.now()-rec.t0)/1000); const el=document.getElementById('recTime'); if(el) el.textContent=Math.floor(s/60)+':'+pad(s%60); },500);
  document.getElementById('recCancel').onclick=async()=>{ try{ await window.__recorder.cancel(); }catch(e){} endRec(); toast('Gravação descartada.'); };
  document.getElementById('recStop').onclick=async()=>{ const dur=Math.round((Date.now()-rec.t0)/1000); let file=null; try{ file=await window.__recorder.stop(); }catch(e){} endRec(); if(!file){ toast('Não foi possível salvar a gravação.'); return; } const up=await upload(file); if(!up) return; put(newItem('audio',{asset:up.id, legenda:'Gravação de '+Math.floor(dur/60)+':'+pad(dur%60)})); scheduleRender(true); };
}
function endRec(){ if(!rec) return; clearInterval(rec.timer); rec=null; restoreComposer(); }
const composerHTML=document.getElementById('composer').innerHTML;
function restoreComposer(){ const c=document.getElementById('composer'); c.innerHTML=composerHTML; rebindComposer(); }
document.getElementById('suggest').addEventListener('click', e=>{
  const b=e.target.closest('[data-sug]'); if(!b||!sug) return;
  if(b.dataset.sug==='ok') send(false);
  else openEditor(null, sug.tipo, clone(sug.dados), msg.value.trim());
});

/* ---------- anexos ---------- */
document.getElementById('fAttach').addEventListener('change', async e=>{
  const files=Array.from(e.target.files||[]); e.target.value=''; if(!files.length) return;
  await handleFiles(files, msg.value.trim(), true);
});
async function handleFiles(files, legenda, fromComposer){
  const imgs=files.filter(f=>/^image\//.test(f.type)); const outros=files.filter(f=>!/^image\//.test(f.type));
  let usedLegenda=false;
  if(imgs.length){
    const ids=await uploadMany(imgs); if(ids.length){ put(newItem('imagem',{assets:ids, legenda})); usedLegenda=true; }
  }
  for(const f of outros){
    const up=await upload(f, true); if(!up) continue;
    const tipo=/^audio\//.test(f.type)?'audio':'documento';
    const d={asset:up.id, legenda:usedLegenda?'':legenda}; usedLegenda=true;
    if(tipo==='documento'){ d.nome=f.name; d.tamanhoArq=sizeTxt(f.size); if(f.type) d.mime=f.type; }
    put(newItem(tipo,d));
  }
  if(usedLegenda && fromComposer) resetComposer(); else if(usedLegenda) scheduleRender(true);
  return usedLegenda;
}
function sizeTxt(b){ return b>1048576?(b/1048576).toFixed(1).replace('.',',')+' MB':Math.max(1,Math.round(b/1024))+' KB'; }
async function uploadMany(files){
  const MAX=30; if(files.length>MAX){ toast('No máximo '+MAX+' imagens por vez. Enviando as primeiras '+MAX+'.'); files=files.slice(0,MAX); }
  if(!S.assets){ upload(files[0]); return []; }
  const ids=[]; let fail=0;
  for(let k=0;k<files.length;k++){ toast('Enviando imagem '+(k+1)+' de '+files.length+'…'); const r=await upload(files[k], true); if(r) ids.push(r.id); else fail++; }
  toast(ids.length+(ids.length===1?' imagem salva':' imagens salvas')+(fail?' · '+fail+' com erro':'')+'.');
  return ids;
}
async function reduzir(f){
  try{
    if(!/^image\/(jpeg|png|webp)$/.test(f.type) || f.size<700*1024 || typeof createImageBitmap!=='function') return f;
    const bm=await createImageBitmap(f, {imageOrientation:'from-image'}); const MAX=2048; const k=Math.min(1, MAX/Math.max(bm.width,bm.height));
    const w=Math.round(bm.width*k), h=Math.round(bm.height*k); const cv=document.createElement('canvas'); cv.width=w; cv.height=h; const cx=cv.getContext('2d');
    cx.fillStyle='#fff'; cx.fillRect(0,0,w,h); cx.drawImage(bm,0,0,w,h); if(bm.close) bm.close();
    const blob=await new Promise(r=>cv.toBlob(r,'image/jpeg',0.85)); if(!blob || blob.size>=f.size) return f;
    return new File([blob], (f.name||'imagem').replace(/\.[^.]+$/,'')+'.jpg', {type:'image/jpeg', lastModified:f.lastModified||Date.now()});
  }catch(e){ return f; }
}
async function upload(f, quiet){
  if(!S.assets){ toast(S.mode==='db'?'Envio de arquivos indisponível agora.':'Para guardar arquivos, configure a nuvem (Supabase).'); return null; }
  f=await reduzir(f);
  if(f.size>20*1048576){ toast('“'+f.name+'” tem mais de 20 MB.'); return null; }
  if(!quiet) toast('Enviando arquivo…');
  try{ const r=await S.assets.upload(f); if(!quiet) toast('Arquivo salvo.'); return r; }catch(e){ toast('Não foi possível enviar “'+f.name+'”.'); return null; }
}

/* ---------- folhas ---------- */
const layer=document.getElementById('layer');
let lastFocus=null;
function openSheet(html, label, keepFocus){ if(!layer.innerHTML) lastFocus=document.activeElement; const prevScroll=layer.querySelector('.sheet')?layer.querySelector('.sheet').scrollTop:0; layer.innerHTML='<div class="overlay" data-close="1"><div class="sheet" role="dialog" aria-modal="true" aria-label="'+esc(label)+'">'+html+'</div></div>'; const sh=layer.querySelector('.sheet'); if(keepFocus){ sh.scrollTop=prevScroll; } else { const f=sh.querySelector('input,textarea,select,button'); if(f) f.focus(); } }
function closeSheet(){ layer.innerHTML=''; edit=null; if(lastFocus&&lastFocus.focus) try{lastFocus.focus();}catch(e){} }
layer.addEventListener('click', e=>{ if(e.target.dataset && e.target.dataset.close){ if(savedEdit){ leaveTagManager(); return; } tagForm=null; closeSheet(); } });
document.addEventListener('keydown', e=>{ if(e.key==='Escape' && layer.innerHTML && !viewer){ if(savedEdit){ leaveTagManager(); return; } tagForm=null; closeSheet(); } });
function sheetHead(title){ return '<div class="row"><h2>'+esc(title)+'</h2><button type="button" class="iconbtn" data-x="1" aria-label="Fechar" style="margin-left:auto">'+svg('x',18)+'</button></div>'; }

function openTypes(){
  let h=sheetHead('Escolha o tipo')+'<div class="tgrid">';
  TYPE_ORDER.forEach(tp=>{ const f=T[tp].fam; h+='<button type="button" class="tcard" data-new="'+tp+'" style="background:var(--'+f+'-bg);border-color:var(--'+f+'-bd)"><span class="ic" style="background:var(--'+f+'-chip);color:'+typeColor(tp)+'">'+svg(typeIcon(tp),20)+'</span><span style="display:flex;flex-direction:column;gap:2px;min-width:0"><span style="font-size:15px;font-weight:700;color:'+typeColor(tp)+'">'+esc(T[tp].label)+'</span><span style="font-size:12.5px;color:var(--ink2);line-height:1.3">'+esc(TYPE_DESC[tp])+'</span></span></button>'; });
  h+='</div><p class="muted" style="margin:0;line-height:1.4">Dica: escreva naturalmente na caixa de texto, como “paguei 99,90 da internet” ou “reunião sexta 19h”, e o app sugere o tipo.</p>';
  openSheet(h,'Escolha o tipo');
}

/* editor */
let edit=null, savedEdit=null, tagForm=null;
const ESSENTIAL={texto:['titulo'], despesa:['situacao','descricao','valor','vencimento','pagoEm'], agenda:['titulo','data','hora'], contato:['nome','telefone','email'], lista:['titulo']};
function isEssential(tipo,k){ const e=ESSENTIAL[tipo]; return !e || e.indexOf(k)>=0; }
function openEditor(id, tipo, dados, orig, focusKey){
  if(id){ const it=S.items.get(id); if(!it||!T[it.tipo]) return; edit={id, tipo:it.tipo, dados:withDefaults(it.tipo, clone(it.dados)), orig:null, tags:(it.tags||[]).slice()}; }
  else edit={id:null, tipo, dados:withDefaults(tipo, dados||{}), orig:orig||null, tags:UI.tag?[UI.tag]:[]};
  if(T[edit.tipo].list && !Array.isArray(edit.dados.itens)) edit.dados.itens=[];
  if(edit.tipo==='texto' && edit.dados.html==null) edit.dados.html=textToHtml(edit.dados.texto||'');
  if(focusKey && focusKey!=='html' && focusKey!=='tags' && focusKey!=='etapas' && !isEssential(edit.tipo, focusKey)) edit.moreOpen=true;
  drawEditor();
  if(focusKey) setTimeout(()=>focusField(focusKey), 60);
}
function focusField(k){
  const sh=layer.querySelector('.sheet'); if(!sh) return; let el=null;
  if(k==='html'){ el=document.getElementById('rich'); if(el){ el.focus(); try{ const r=document.createRange(); r.selectNodeContents(el); r.collapse(false); const sel=getSelection(); sel.removeAllRanges(); sel.addRange(r); }catch(e){} } }
  else if(k==='tags'){ el=sh.querySelector('#lb_tags'); }
  else if(k==='etapas'){ el=sh.querySelector('#f_etapas'); const f=sh.querySelector('[data-et]'); if(f) try{ f.focus({preventScroll:true}); }catch(e){} }
  else { el=sh.querySelector('[data-k="'+k+'"]') || sh.querySelector('[data-seg="'+k+'"][aria-pressed="true"]') || sh.querySelector('[data-seg="'+k+'"]'); if(el){ try{ el.focus({preventScroll:true}); }catch(e){} } }
  if(el) try{ el.scrollIntoView({block:'center'}); }catch(e){}
}
function fieldHtml(f, val){
  const k=f[0], label=f[1], kind=f[2]; const idf='f_'+k;
  if(kind==='area') return '<div class="field"><label for="'+idf+'">'+esc(label)+'</label><textarea id="'+idf+'" data-k="'+k+'">'+esc(val||'')+'</textarea></div>';
  if(kind==='seg'){ const o=OPT[k]; return '<div class="field"><span class="flabel" id="lb_'+k+'">'+esc(label)+'</span><div class="seg" role="group" aria-labelledby="lb_'+k+'" style="--n:'+o.length+'">'+o.map(x=>'<button type="button" data-seg="'+k+'" data-v="'+esc(x[0])+'" aria-pressed="'+(val===x[0])+'">'+esc(x[1])+'</button>').join('')+'</div></div>'; }
  if(kind==='select'){ return '<div class="field"><label for="'+idf+'">'+esc(label)+'</label><select id="'+idf+'" data-k="'+k+'">'+OPT[k].map(x=>'<option value="'+esc(x[0])+'"'+(x[0]===(val||'')?' selected':'')+'>'+esc(x[1])+'</option>').join('')+'</select></div>'; }
  let type='text', extra='';
  if(kind==='date') type='date'; else if(kind==='time') type='time'; else if(kind==='url') type='url'; else if(kind==='email') type='email'; else if(kind==='tel') type='tel';
  if(kind==='money'){ extra=' inputmode="decimal" placeholder="0,00"'; val = val==null||val===''?'':Number(val).toFixed(2).replace('.',','); }
  if(k==='para') extra+=' list="dl_contatos" autocomplete="off"'; if(k==='local') extra+=' list="dl_locais" autocomplete="off"';
  return '<div class="field"><label for="'+idf+'">'+esc(label)+'</label><input id="'+idf+'" type="'+type+'" data-k="'+k+'" data-kind="'+kind+'" value="'+esc(val==null?'':val)+'"'+extra+'></div>';
}
function richHtml(html){
  const b=(cmd,label,inner,extra)=>'<button type="button" data-cmd="'+cmd+'" aria-label="'+esc(label)+'" title="'+esc(label)+'" aria-pressed="false"'+(extra||'')+'>'+inner+'</button>';
  return '<div class="field"><span class="flabel" id="lb_rich">Texto</span><div class="rtool" role="toolbar" aria-label="Formatação">'
    + b('bold','Negrito','<b>N</b>') + b('italic','Itálico','<i style="font-family:Georgia,serif">I</i>') + b('underline','Sublinhado','<u>S</u>') + b('strikeThrough','Riscado','<s>R</s>')
    + b('h3','Subtítulo','T<span style="font-size:11px">ítulo</span>') + b('insertUnorderedList','Lista com marcadores',svg('ul',18)) + b('insertOrderedList','Lista numerada',svg('ol',18)) + b('blockquote','Citação',svg('quote',16)) + b('clear','Limpar formatação',svg('eraser',17))
    + '</div><div class="redit rich sz-'+esc(edit.dados.tamanho||'m')+'" id="rich" contenteditable="true" role="textbox" aria-multiline="true" aria-labelledby="lb_rich" data-ph="Escreva aqui…">'+sanitize(html)+'</div></div>';
}
function drawEditor(keep){
  const e=edit; const def=T[e.tipo]; const existing=e.id?S.items.get(e.id):null;
  const fake={tipo:e.tipo, dados:e.dados}; const fk=famKey(fake); const color=famColor(fake);
  let h='<div class="row"><span class="ic" style="width:32px;height:32px;border-radius:9px;display:flex;align-items:center;justify-content:center;background:var(--'+fk+'-chip);color:'+color+'">'+svg(iconOf(fake),17)+'</span><h2>'+(e.id?'Editar · ':'Novo · ')+esc(def.label)+'</h2><button type="button" class="iconbtn" data-x="1" aria-label="Fechar" style="margin-left:auto">'+svg('x',18)+'</button></div>';
  let more='';
  if(e.tipo==='imagem'){
    const as=assetsOf(e.dados);
    h+='<div class="field"><span class="flabel">Imagens ('+as.length+')</span>'+(as.length?'<div class="thumbs">'+as.map((a,k)=>'<div class="thumb"><img alt="Imagem '+(k+1)+'" src="'+esc(blobUrl(a))+'"><button type="button" class="tdel" data-imgdel="'+k+'" aria-label="Remover imagem '+(k+1)+'">'+svg('x',14,2.6)+'</button></div>').join('')+'</div>':'')+'<label class="btn" for="f_file" style="cursor:pointer">'+svg('plus',16)+(as.length?'Adicionar mais imagens':'Escolher imagens')+'</label><input id="f_file" class="sr" type="file" accept="image/*" multiple></div>';
  }
  else if(def.file){
    const a=e.dados.asset;
    if(a && e.tipo==='imagem') h+='<img class="media" alt="" src="'+esc(blobUrl(a))+'">';
    if(a && e.tipo==='audio') h+='<audio controls preload="none" src="'+esc(blobUrl(a))+'"></audio>';
    h+='<div class="field"><label for="f_file">'+(a?'Trocar arquivo':'Arquivo')+'</label><input id="f_file" type="file" accept="'+(def.file==='*'?'':def.file)+'" style="padding-top:11px"></div>';
  }
  def.fields.forEach(f=>{ if(f[3] && !f[3](e.dados)) return; const fh=fieldHtml(f, e.dados[f[0]]); if(isEssential(e.tipo,f[0])) h+=fh; else more+=fh; });
  if(def.rich) h+=richHtml(e.dados.html);
  if(e.tipo==='agenda') h+=cronoEditor(e.dados);
  if(def.list){
    h+='<div style="display:flex;flex-direction:column;gap:6px"><span class="flabel">Itens</span>';
    e.dados.itens.forEach((x,i)=>{ h+='<div class="erow"><input type="checkbox" data-li="'+i+'" aria-label="Concluído: '+esc(x.t)+'"'+(x.ok?' checked':'')+'><label class="sr" for="li_'+i+'">Item '+(i+1)+'</label><input type="text" id="li_'+i+'" data-lt="'+i+'" value="'+esc(x.t)+'"><button type="button" class="iconbtn" data-ldel="'+i+'" aria-label="Remover item">'+svg('x',16)+'</button></div>'; });
    h+='<button type="button" class="btn" data-ladd="1">'+svg('plus',16)+'Adicionar item</button></div>';
  }
  h+='<div class="field"><span class="flabel" id="lb_tags">Marcadores</span><div class="tpick" role="group" aria-labelledby="lb_tags">'+S.tags.map(t=>tagChip(t, (e.tags||[]).indexOf(t.id)>=0, 'data-tagtog="'+esc(t.id)+'"')).join('')+'<button type="button" class="chip" data-tagnew="1" style="display:inline-flex;align-items:center;gap:6px">'+svg('plus',14)+(S.tags.length?'Novo':'Criar marcador')+'</button></div></div>';
  if(e.tipo==='agenda' && e.dados.aviso && !(window.Capacitor && Capacitor.isNativePlatform && Capacitor.isNativePlatform())) more+='<p class="muted" style="margin:-6px 0 0">O aviso chega como notificação no app Android.</p>';
  more+='<div class="field"><label for="f_tipo">Mudar o tipo</label><select id="f_tipo">'+TYPE_ORDER.map(tp=>'<option value="'+tp+'"'+(tp===e.tipo?' selected':'')+'>'+esc(T[tp].label)+'</option>').join('')+'</select></div>';
  if(existing && existing.hist && existing.hist.length){
    more+='<div style="display:flex;flex-direction:column;gap:8px;background:var(--soft);border-radius:12px;padding:12px 14px"><span class="flabel">Histórico</span><div class="hist">'+existing.hist.slice().reverse().slice(0,12).map(x=>'<div><span style="width:8px;height:8px;margin-top:6px;flex:0 0 auto;border-radius:99px;background:var(--muted)"></span><span>'+esc(x.txt)+'<br><small>'+esc(new Date(x.em).toLocaleString('pt-BR',{day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit'}))+'</small></span></div>').join('')+'</div></div>';
  }
  h+='<datalist id="dl_contatos">'+sorted().filter(i=>i.tipo==='contato'&&i.dados.nome).map(i=>'<option value="'+esc(i.dados.nome)+'"></option>').join('')+'</datalist><datalist id="dl_locais">'+sorted().filter(i=>i.tipo==='local'&&i.dados.nome).map(i=>'<option value="'+esc(i.dados.nome)+'"></option>').join('')+'</datalist>';
  h+='<details class="more" id="moreBox"'+(e.moreOpen?' open':'')+'><summary>Mais detalhes</summary><div class="morebody">'+more+'</div></details>';
  h+='<div id="sheetToast" class="toastbar" role="status" hidden></div>';
  h+='<div style="display:grid;grid-template-columns:'+(existing?'52px 52px ':'')+'minmax(0,1fr);gap:8px">';
  if(existing){ h+='<button type="button" class="btn" data-del="1" aria-label="Excluir" style="color:var(--pagar);padding:0">'+svg('trash',20)+'</button><button type="button" class="btn" data-pin="1" aria-label="'+(existing.fixo?'Desafixar':'Fixar no topo')+'" aria-pressed="'+(existing.fixo?'true':'false')+'" style="padding:0;'+(existing.fixo?'background:var(--strong);color:#fff;border-color:var(--strong)':'')+'">'+svg('pin',20)+'</button>'; }
  h+='<button type="button" class="btn dark" data-save="1">'+(existing?'Salvar alterações':'Criar')+'</button></div>';
  h+='<div id="confirmDel"></div>';
  openSheet(h, (e.id?'Editar ':'Novo ')+def.label, keep);
  const r=document.getElementById('rich'); if(r && !keep){ /* foco no texto ao abrir um texto novo */ if(!e.id){ r.focus(); } }
}
function cronoEditor(d){
  const L=etapasOf(d);
  if(!L.length) return '<button type="button" class="btn ghostbtn" data-eadd="1">'+svg('plus',16)+'Adicionar etapas (cronograma)</button>';
  const esc2=esc; const mode=d.avisoEtapas||'inicio';
  let h='<div class="field crono-ed" id="f_etapas"><span class="flabel" id="lb_etapas">Cronograma · '+L.length+(L.length===1?' etapa':' etapas')+'</span><p class="muted" style="margin:-2px 0 2px;font-size:12.5px">A data e a hora do compromisso seguem a primeira etapa.</p>';
  L.forEach((x,i)=>{ h+='<div class="etrow" role="group" aria-label="Etapa '+(i+1)+'"><input type="date" data-ed="'+i+'" aria-label="Data da etapa '+(i+1)+'" value="'+esc2(x.data||'')+'"><input type="time" data-eh="'+i+'" aria-label="Hora da etapa '+(i+1)+'" value="'+esc2(x.hora||'')+'"><input type="text" data-et="'+i+'" aria-label="O que acontece na etapa '+(i+1)+'" placeholder="O que acontece" value="'+esc2(x.titulo||'')+'">'+(mode==='escolher'?'<button type="button" class="iconbtn etbell" data-eav="'+i+'" aria-pressed="'+(x.avisar?'true':'false')+'" aria-label="Avisar nesta etapa">'+svg('bell',16)+'</button>':'')+'<button type="button" class="iconbtn" data-edel="'+i+'" aria-label="Remover etapa '+(i+1)+'">'+svg('x',16)+'</button></div>'; });
  h+='<button type="button" class="btn" data-eadd="1">'+svg('plus',16)+'Adicionar etapa</button>';
  h+='<div class="field" style="margin-top:4px"><label for="f_avisoEtapas">Avisos das etapas</label><select id="f_avisoEtapas" data-k="avisoEtapas">'+OPT.avisoEtapas.map(o=>'<option value="'+o[0]+'"'+(o[0]===mode?' selected':'')+'>'+esc2(o[1])+'</option>').join('')+'</select></div>';
  return h+'</div>';
}
function readForm(){
  if(!edit) return; const sh=layer.querySelector('.sheet'); if(!sh) return;
  sh.querySelectorAll('[data-k]').forEach(inp=>{ const k=inp.dataset.k; let v=inp.value; if(inp.dataset.kind==='money') v=parseMoney(v); else if(typeof v==='string') v=v.replace(/\s+$/,''); if(k==='url') v=String(v||'').trim(); edit.dados[k]=v; });
  sh.querySelectorAll('[data-ed]').forEach(inp=>{ const x=etapasOf(edit.dados)[+inp.dataset.ed]; if(x) x.data=inp.value; });
  sh.querySelectorAll('[data-eh]').forEach(inp=>{ const x=etapasOf(edit.dados)[+inp.dataset.eh]; if(x) x.hora=inp.value; });
  sh.querySelectorAll('[data-et]').forEach(inp=>{ const x=etapasOf(edit.dados)[+inp.dataset.et]; if(x) x.titulo=inp.value.trimEnd(); });
  sh.querySelectorAll('[data-lt]').forEach(inp=>{ const i=+inp.dataset.lt; if(edit.dados.itens[i]) edit.dados.itens[i].t=inp.value; });
  sh.querySelectorAll('[data-li]').forEach(inp=>{ const i=+inp.dataset.li; if(edit.dados.itens[i]) edit.dados.itens[i].ok=inp.checked; });
  const r=document.getElementById('rich'); if(r){ edit.dados.html=sanitize(r.innerHTML); edit.dados.texto=plainOf(edit.dados.html); }
}
const MAINKEYS=['titulo','texto','descricao','nome','legenda'];
function convert(dados, from, to){
  const d=Object.assign({}, dados); if(from==='texto' && d.html && !d.texto) d.texto=plainOf(d.html);
  const out={}; const main=MAINKEYS.map(k=>d[k]).find(v=>v);
  T[to].fields.forEach(f=>{ if(d[f[0]]!=null && d[f[0]]!=='') out[f[0]]=d[f[0]]; });
  const mk=T[to].fields.map(f=>f[0]).find(k=>MAINKEYS.indexOf(k)>=0); if(mk && !out[mk] && main) out[mk]=String(main).split('\n')[0];
  if(to==='texto'){ out.html=d.html||textToHtml(d.texto||main||''); if(out.titulo===String(main).split('\n')[0] && from!=='texto') delete out.titulo; }
  const as=assetsOf(d); if(as.length && to==='imagem') out.assets=as; else if(as.length && T[to].file) out.asset=as[0];
  if(d.tamanhoArq && to==='documento') out.tamanhoArq=d.tamanhoArq;
  if(T[to].list){ out.itens=Array.isArray(d.itens)?d.itens:(d.texto?String(d.texto).split('\n').filter(Boolean).map(t=>({t,ok:false})):[]); }
  return withDefaults(to,out);
}
function showVal(k,v){ if(k==='valor') return fmtMoney(v)||'—'; if(/^(data|vencimento|pagoEm)$/.test(k)) return fmtData(v)||'—'; if(OPT[k]) return optLabel(k,v)||'—'; return v==null||v===''?'—':String(v).slice(0,40); }
function diffTxt(old, neu){
  const parts=[];
  if(old.tipo!==neu.tipo) parts.push('Tipo: '+T[old.tipo].label+' → '+T[neu.tipo].label);
  else {
    T[neu.tipo].fields.forEach(f=>{ const k=f[0]; const a=old.dados[k], b=neu.dados[k]; if(String(a==null?'':a)!==String(b==null?'':b)) parts.push(f[1].replace(/ \(opcional\)/,'')+': '+showVal(k,a)+' → '+showVal(k,b)); });
    if(neu.tipo==='texto' && (old.dados.html||textToHtml(old.dados.texto||''))!==neu.dados.html) parts.push('Texto editado');
    if(T[neu.tipo].list && JSON.stringify(old.dados.itens||[])!==JSON.stringify(neu.dados.itens||[])) parts.push('Itens da lista alterados');
    if(neu.tipo==='agenda' && JSON.stringify(old.dados.etapas||[])!==JSON.stringify(neu.dados.etapas||[])) parts.push(etapasOf(neu.dados).length?'Cronograma: '+etapasOf(neu.dados).length+' etapas':'Cronograma removido');
    if(neu.tipo==='agenda' && (old.dados.avisoEtapas||'')!==(neu.dados.avisoEtapas||'')) parts.push('Avisos das etapas: '+optLabel('avisoEtapas',neu.dados.avisoEtapas||'inicio'));
  }
  if(old.tipo===neu.tipo && neu.tipo==='imagem'){ const a=assetsOf(old.dados), b=assetsOf(neu.dados); if(a.join()!==b.join()) parts.push('Imagens: '+a.length+' → '+b.length); }
  else if(old.dados.asset!==neu.dados.asset && neu.dados.asset) parts.push('Arquivo trocado');
  return parts.join(' · ');
}
function addHist(it, txt){ it.hist=(it.hist||[]).concat([{em:Date.now(), txt}]).slice(-20); }
function buzz(ms){ try{ if(navigator.vibrate) navigator.vibrate(ms||12); }catch(e){} }
function lastDay(y,m){ return new Date(y,m+1,0).getDate(); }
function nextDate(iso, rep, dia){
  const d=parseIso(iso); if(!d) return '';
  if(rep==='semanal'){ d.setDate(d.getDate()+7); return isoOf(d); }
  if(rep==='mensal'){ let y=d.getFullYear(), m=d.getMonth()+1; if(m>11){ m=0; y++; } const dd=Math.min(dia||d.getDate(), lastDay(y,m)); return isoOf(new Date(y,m,dd)); }
  if(rep==='anual'){ const y=d.getFullYear()+1, m=d.getMonth(); return isoOf(new Date(y,m,Math.min(dia||d.getDate(), lastDay(y,m)))); }
  return '';
}
function repLabel(r){ return r==='semanal'?'toda semana':r==='mensal'?'todo mês':r==='anual'?'todo ano':''; }
/* cria a próxima ocorrência de uma despesa paga ou de um compromisso que já passou */
function makeNext(it){
  const d=it.dados||{}; if(!d.repetir) return null;
  if(it.proxId && S.items.get(it.proxId) && !S.items.get(it.proxId).excluido) return null;
  const key=it.tipo==='despesa'?'vencimento':'data'; const base=d[key]; if(!base) return null;
  const dia=d.diaRep || (parseIso(base)||new Date()).getDate();
  let nx=nextDate(base, d.repetir, dia);
  if(it.tipo==='agenda'){ let guard=0; while(nx && parseIso(nx)<today() && guard++<500) nx=nextDate(nx, d.repetir, dia); }
  if(!nx) return null;
  const nd=clone(d); nd[key]=nx; nd.diaRep=dia;
  if(it.tipo==='agenda' && etapasOf(d).length){ const delta=daysBetween(base, nx); nd.etapas=etapasOf(d).map(x=>Object.assign({}, x, {id:uid(), data:addDays(x.data, delta), feito:false})); } if(it.tipo==='despesa'){ nd.situacao='apagar'; delete nd.pagoEm; }
  const n=newItem(it.tipo, nd); n.tags=(it.tags||[]).slice(); n.hist=[{em:Date.now(), txt:'Criado pela repetição ('+repLabel(d.repetir)+')'}];
  return n;
}
function markPaid(id, silent){
  const it=S.items.get(id); if(!it || it.tipo!=='despesa' || it.dados.situacao==='pago') return;
  const prev=clone(it); const n=clone(it);
  n.dados.situacao='pago'; n.dados.pagoEm=isoOf(today()); n.pagoNoApp=true; addHist(n,'Marcado como pago');
  UI.stamp.add(id); setTimeout(()=>{ UI.stamp.delete(id); scheduleRender(); }, 1100);
  const nx=makeNext(n); if(nx){ n.proxId=nx.id; put(nx); }
  put(n); buzz();
  if(!silent) toastUndo(nx?'Pago. Próximo vencimento: '+fmtData(nx.dados.vencimento)+'.':'Marcado como pago.', ()=>{ put(prev); if(nx) remove(nx.id); });
}
function tickItem(id, i){
  const it=S.items.get(id); if(!it) return; const n=clone(it); const x=n.dados.itens&&n.dados.itens[i]; if(!x) return;
  x.ok=!x.ok; addHist(n,(x.ok?'Concluído: ':'Reaberto: ')+x.t); put(n); buzz();
}
function trashItem(id){
  const it=S.items.get(id); if(!it) return; const prev=clone(it); const n=clone(it);
  n.excluido=Date.now(); n.fixo=false; addHist(n,'Movido para a lixeira'); UI.open.delete(id); put(n); buzz();
  toastUndo('Item movido para a lixeira.', ()=>{ put(prev); });
}
function togglePin(id){ const it=S.items.get(id); if(!it) return; const n=clone(it); n.fixo=!n.fixo; addHist(n, n.fixo?'Fixado no topo':'Desafixado'); put(n); buzz(); toast(n.fixo?'Fixado no topo.':'Desafixado.'); }
function runRecurrence(){
  sorted().forEach(it=>{ if(it.tipo!=='agenda' || !it.dados.repetir) return; const dt=parseIso(fimAgenda(it.dados)); if(!dt || dt>=today()) return; if(S.migrating.has('rep:'+it.id)) return; const nx=makeNext(it); if(!nx) return; S.migrating.add('rep:'+it.id); const n=clone(it); n.proxId=nx.id; put(nx, true); put(n, true); });
}
function purgeTrash(){ const lim=Date.now()-30*864e5; trashed().forEach(i=>{ if(i.excluido<lim) remove(i.id); }); }
function saveEditor(){
  readForm(); const e=edit; if(!e) return;
  if(T[e.tipo].list) e.dados.itens=(e.dados.itens||[]).filter(x=>String(x.t||'').trim());
  if(e.tipo==='agenda'){ let prev=e.dados.data||isoOf(today()); const L=etapasOf(e.dados).filter(x=>String(x.titulo||'').trim()||x.hora).map(x=>{ const y=Object.assign({}, x); if(!y.id) y.id=uid(); if(!y.data) y.data=prev; prev=y.data; return y; });
    if(L.length){ e.dados.etapas=sortEtapas(L); e.dados.data=e.dados.etapas[0].data; e.dados.hora=e.dados.etapas[0].hora||''; if(!e.dados.avisoEtapas) e.dados.avisoEtapas='inicio'; } else { delete e.dados.etapas; delete e.dados.avisoEtapas; } }
  else { delete e.dados.etapas; delete e.dados.avisoEtapas; }
  if(e.tipo==='link' && e.dados.url && !safeUrl(e.dados.url)){ toast('O link precisa começar com http://, https:// ou www.'); return; }
  if(e.tipo==='despesa' && e.dados.situacao==='pago' && !e.dados.pagoEm) e.dados.pagoEm=isoOf(today());
  if((e.tipo==='despesa'||e.tipo==='agenda') && e.dados.repetir){ const b=parseIso(e.tipo==='despesa'?e.dados.vencimento:e.dados.data); if(b) e.dados.diaRep=b.getDate(); if(e.tipo==='despesa' && !e.dados.vencimento){ toast('Para repetir, informe o vencimento.'); return; } }
  if(e.tipo==='texto' && !e.dados.texto && !e.dados.titulo){ toast('Escreva algum texto ou título.'); return; }
  if(e.tipo==='imagem'){ e.dados.assets=assetsOf(e.dados); delete e.dados.asset; if(!e.dados.assets.length){ toast('Escolha pelo menos uma imagem.'); return; } }
  if(e.id){
    const old=S.items.get(e.id); if(!old){ closeSheet(); return; }
    const neu=clone(old); neu.tipo=e.tipo; neu.dados=clone(e.dados); neu.tags=(e.tags||[]).filter(tagById);
    let dt=diffTxt(old,neu); const tA=(old.tags||[]).filter(tagById).join(), tB=neu.tags.join(); if(tA!==tB){ const nm=neu.tags.map(x=>tagById(x).nome); dt=(dt?dt+' · ':'')+'Marcadores: '+(nm.length?nm.join(', '):'nenhum'); } if(dt) addHist(neu, dt);
    if(!(neu.tipo==='despesa' && neu.dados.situacao==='pago')) delete neu.pagoNoApp;
    let nx=null; if(neu.tipo==='despesa' && neu.dados.situacao==='pago' && old.dados.situacao!=='pago'){ nx=makeNext(neu); if(nx){ neu.proxId=nx.id; put(nx); } }
    closeSheet(); if(dt) put(neu); if(nx) toast('Próximo vencimento criado: '+fmtData(nx.dados.vencimento)+'.');
    if(neu.tipo==='agenda') runRecurrence();
  } else {
    const it=newItem(e.tipo, clone(e.dados)); it.tags=(e.tags||[]).filter(tagById); if(e.orig) it.hist[0].txt='Criado a partir do texto “'+e.orig.slice(0,80)+'”';
    closeSheet(); put(it); if(e.orig) msg.value=''; resetComposer();
    if(it.tipo==='agenda') runRecurrence();
  }
}
/* barra de formatação: manter a seleção do texto */
layer.addEventListener('mousedown', ev=>{ if(ev.target.closest('[data-cmd]')) ev.preventDefault(); });
layer.addEventListener('pointerdown', ev=>{ if(ev.target.closest('[data-cmd]')) ev.preventDefault(); });
function runCmd(cmd){
  const r=document.getElementById('rich'); if(!r) return; r.focus();
  try{
    if(cmd==='h3'){ const on=blockIs('H3'); document.execCommand('formatBlock', false, on?'<p>':'<h3>'); }
    else if(cmd==='blockquote'){ const on=blockIs('BLOCKQUOTE'); document.execCommand('formatBlock', false, on?'<p>':'<blockquote>'); }
    else if(cmd==='clear'){ document.execCommand('removeFormat'); if(blockIs('H3')||blockIs('BLOCKQUOTE')) document.execCommand('formatBlock', false, '<p>'); if(document.queryCommandState('insertUnorderedList')) document.execCommand('insertUnorderedList'); if(document.queryCommandState('insertOrderedList')) document.execCommand('insertOrderedList'); }
    else document.execCommand(cmd, false, null);
  }catch(e){}
  updateTool();
}
function blockIs(tag){ const s=window.getSelection(); if(!s||!s.rangeCount) return false; let n=s.anchorNode; const r=document.getElementById('rich'); while(n && n!==r){ if(n.nodeType===1 && n.tagName===tag) return true; n=n.parentNode; } return false; }
function updateTool(){
  const r=document.getElementById('rich'); if(!r) return; const s=window.getSelection(); if(!s || !s.anchorNode || !r.contains(s.anchorNode)) return;
  layer.querySelectorAll('[data-cmd]').forEach(b=>{ const c=b.dataset.cmd; let on=false; try{ if(c==='h3') on=blockIs('H3'); else if(c==='blockquote') on=blockIs('BLOCKQUOTE'); else if(c!=='clear') on=document.queryCommandState(c); }catch(e){} b.setAttribute('aria-pressed', on?'true':'false'); });
}
document.addEventListener('selectionchange', updateTool);
layer.addEventListener('keydown', ev=>{
  if(!ev.target.closest || !ev.target.closest('#rich')) return;
  if((ev.ctrlKey||ev.metaKey) && !ev.shiftKey && !ev.altKey){ const k=ev.key.toLowerCase(); if(k==='b'){ev.preventDefault();runCmd('bold');} else if(k==='i'){ev.preventDefault();runCmd('italic');} else if(k==='u'){ev.preventDefault();runCmd('underline');} }
});
layer.addEventListener('paste', ev=>{
  if(!ev.target.closest || !ev.target.closest('#rich')) return;
  const cd=ev.clipboardData; if(!cd) return; ev.preventDefault();
  const html=cd.getData('text/html'); const txt=cd.getData('text/plain');
  const clean=html?sanitize(html):textToHtml(txt);
  try{ document.execCommand('insertHTML', false, clean); }catch(e){}
});

layer.addEventListener('click', ev=>{
  const t=ev.target.closest('button,[data-new]'); if(!t) return;
  if(t.dataset.cmd){ runCmd(t.dataset.cmd); return; }
  if(t.dataset.x){ closeSheet(); return; }
  if(t.dataset.new){ openEditor(null, t.dataset.new, {}, null); return; }
  if(t.dataset.save){ saveEditor(); return; }
  if(t.dataset.seg){ readForm(); edit.dados[t.dataset.seg]=t.dataset.v; if(t.dataset.seg==='situacao' && t.dataset.v==='pago' && !edit.dados.pagoEm) edit.dados.pagoEm=isoOf(today()); drawEditor(true); return; }
  if(t.dataset.eadd){ readForm(); const L=edit.dados.etapas=etapasOf(edit.dados).slice(); const last=L[L.length-1];
    if(!L.length) L.push({id:uid(), data:edit.dados.data||isoOf(today()), hora:edit.dados.hora||'', titulo:'', feito:false});
    else L.push({id:uid(), data:last.data||edit.dados.data||isoOf(today()), hora:'', titulo:'', feito:false});
    drawEditor(true); const ins=layer.querySelectorAll('[data-et]'); if(ins.length){ ins[ins.length-1].focus(); try{ ins[ins.length-1].scrollIntoView({block:'center'}); }catch(e){} } return; }
  if(t.dataset.edel!=null){ readForm(); edit.dados.etapas=etapasOf(edit.dados).filter((x,i)=>i!==+t.dataset.edel); drawEditor(true); return; }
  if(t.dataset.eav!=null){ const x=etapasOf(edit.dados)[+t.dataset.eav]; if(x){ x.avisar=!x.avisar; t.setAttribute('aria-pressed', x.avisar?'true':'false'); } return; }
  if(t.dataset.ladd){ readForm(); edit.dados.itens.push({t:'',ok:false}); drawEditor(true); const ins=layer.querySelectorAll('[data-lt]'); if(ins.length) ins[ins.length-1].focus(); return; }
  if(t.dataset.imgdel!=null){ readForm(); const as=assetsOf(edit.dados); as.splice(+t.dataset.imgdel,1); edit.dados.assets=as; delete edit.dados.asset; drawEditor(true); return; }
  if(t.dataset.ldel!=null){ readForm(); edit.dados.itens.splice(+t.dataset.ldel,1); drawEditor(true); return; }
  if(t.dataset.pin){ const it=S.items.get(edit.id); if(!it) return; const n=clone(it); n.fixo=!n.fixo; addHist(n, n.fixo?'Fixado no topo':'Desafixado'); closeSheet(); put(n); return; }
  if(t.dataset.del){ document.getElementById('confirmDel').innerHTML='<div style="background:var(--pagar-bg);border:1px solid var(--pagar-bd);border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:8px"><span style="font-size:14px;font-weight:600">Mover este item para a lixeira?</span><span class="muted">Ele fica 30 dias na Lixeira (Menu) e pode ser restaurado.</span><div class="grid2"><button type="button" class="btn red" data-delok="1">Excluir</button><button type="button" class="btn" data-delno="1">Cancelar</button></div></div>'; return; }
  if(t.dataset.delno){ document.getElementById('confirmDel').innerHTML=''; return; }
  if(t.dataset.delok){ const id=edit.id; closeSheet(); trashItem(id); return; }
  if(t.dataset.exp){ exportBackup(); return; }
  if(t.dataset.copy){ const ta=document.getElementById('bkText'); navigator.clipboard.writeText(ta.value).then(()=>toast('Backup copiado.'), ()=>{ ta.select(); toast('Selecione e copie o texto.'); }); return; }
});
layer.addEventListener('toggle', ev=>{ if(ev.target.id==='moreBox' && edit) edit.moreOpen=ev.target.open; }, true);
layer.addEventListener('change', async ev=>{
  const t=ev.target;
  if(t.id==='f_avisoEtapas' && edit){ readForm(); drawEditor(true); return; }
  if(t.id==='f_tipo' && edit){ readForm(); const to=t.value; edit.dados=convert(edit.dados, edit.tipo, to); edit.tipo=to; drawEditor(true); return; }
  if(t.id==='f_file' && edit && edit.tipo==='imagem'){ const fs=Array.from(t.files||[]).filter(f=>/^image\//.test(f.type)); if(!fs.length) return; readForm(); const ids=await uploadMany(fs); if(!edit) return; edit.dados.assets=assetsOf(edit.dados).concat(ids); delete edit.dados.asset; drawEditor(true); return; }
  if(t.id==='f_file' && edit){ const f=t.files&&t.files[0]; if(!f) return; readForm(); const up=await upload(f); if(!up||!edit) return; edit.dados.asset=up.id; if(edit.tipo==='documento'){ edit.dados.nome=edit.dados.nome||f.name; edit.dados.tamanhoArq=sizeTxt(f.size); } drawEditor(true); return; }
  if(t.id==='f_aviso' && edit){ readForm(); drawEditor(true); return; }
  if(t.id==='fImport'){ const f=t.files&&t.files[0]; if(f) importBackup(f); return; }
});

/* ---------- filtros ---------- */
function openFilter(keep){
  const counts={}, tcount={}; sorted().forEach(i=>{ counts[i.tipo]=(counts[i.tipo]||0)+1; (i.tags||[]).forEach(t=>{ tcount[t]=(tcount[t]||0)+1; }); });
  let h=sheetHead('Filtrar');
  h+='<div class="field"><span class="flabel" id="lb_ft">Tipo</span><div class="tpick" role="group" aria-labelledby="lb_ft">'
    +'<button type="button" class="chip tchip" data-fset="tudo" aria-pressed="'+(UI.filter==='tudo')+'">Todos</button>'
    +TYPE_ORDER.map(tp=>{ const on=UI.filter===tp; return '<button type="button" class="chip tchip" data-fset="'+tp+'" aria-pressed="'+on+'"><span style="color:'+(on?'#fff':typeColor(tp))+';display:flex">'+svg(typeIcon(tp),14)+'</span>'+esc(T[tp].label)+(counts[tp]?'<span class="cnt">'+counts[tp]+'</span>':'')+'</button>'; }).join('')+'</div></div>';
  h+='<div class="field"><span class="flabel" id="lb_fm">Marcador</span><div class="tpick" role="group" aria-labelledby="lb_fm">'
    +(S.tags.length? S.tags.map(t=>{ const on=UI.tag===t.id; return '<button type="button" class="chip tchip" data-tset="'+esc(t.id)+'" aria-pressed="'+on+'"><span style="color:'+(on?'#fff':esc(t.cor))+';display:flex">'+svg(t.icon,14,2.4)+'</span>'+esc(t.nome)+(tcount[t.id]?'<span class="cnt">'+tcount[t.id]+'</span>':'')+'</button>'; }).join('') : '<span class="muted">Nenhum marcador criado ainda.</span>')
    +'<button type="button" class="chip" data-tagmgr2="1" style="display:inline-flex;align-items:center;gap:6px">'+svg('edit',14)+'Gerenciar</button></div></div>';
  const total=sorted().filter(matches).length;
  h+='<div class="grid2"><button type="button" class="btn" data-fclear="1">Limpar</button><button type="button" class="btn dark" data-x="1">Ver '+total+(total===1?' item':' itens')+'</button></div>';
  openSheet(h,'Filtrar', keep);
}
layer.addEventListener('click', ev=>{
  const b=ev.target.closest('button'); if(!b) return; const ds=b.dataset;
  if(ds.fset){ UI.filter=ds.fset; openFilter(true); scheduleRender(true); return; }
  if(ds.tset){ UI.tag = UI.tag===ds.tset?null:ds.tset; openFilter(true); scheduleRender(true); return; }
  if(ds.fclear){ UI.filter='tudo'; UI.tag=null; openFilter(true); scheduleRender(true); return; }
});

/* ---------- marcadores ---------- */
function openTagManager(fromEditor, startNew){
  if(fromEditor && edit){ readForm(); savedEdit=edit; }
  tagForm = startNew ? {id:null, nome:'', icon:'tag', cor:TAG_COLORS[S.tags.length % TAG_COLORS.length][0]} : null;
  drawTagManager();
}
function drawTagManager(keep){
  let h='<div class="row">'+(savedEdit?'<button type="button" class="iconbtn" data-tagback="1" aria-label="Voltar ao item">'+svg('back',18)+'</button>':'')+'<h2>Marcadores</h2><button type="button" class="iconbtn" data-tagclose="1" aria-label="Fechar" style="margin-left:auto">'+svg('x',18)+'</button></div>';
  if(!tagForm){
    h+=S.tags.length?'<div class="list">'+S.tags.map(t=>{ const n=sorted().filter(i=>(i.tags||[]).indexOf(t.id)>=0).length; return '<button type="button" class="li" data-tagedit="'+esc(t.id)+'"><span class="ic" style="display:flex;align-items:center;justify-content:center;background:'+esc(t.cor)+'1A;color:'+esc(t.cor)+'">'+svg(t.icon,17,2.2)+'</span><span style="display:flex;flex-direction:column;gap:2px;min-width:0"><span style="font-size:15px;font-weight:600">'+esc(t.nome)+'</span><span class="muted">'+n+(n===1?' item':' itens')+'</span></span><span style="margin-left:auto;color:var(--muted)">'+svg('edit',16)+'</span></button>'; }).join('')+'</div>'
      :'<p class="muted" style="margin:0;line-height:1.5">Marcadores agrupam itens de qualquer tipo, como “Escola”, “Casa”, “Urgente” ou “Mestrado”. Cada um tem nome, ícone e cor.</p>';
    h+='<button type="button" class="btn dark" data-tagnew2="1">'+svg('plus',16)+'Novo marcador</button>';
  } else {
    const f=tagForm;
    h+='<div class="field"><label for="tg_nome">Nome</label><input id="tg_nome" type="text" maxlength="24" value="'+esc(f.nome)+'" placeholder="Ex.: Escola"></div>';
    h+='<div class="field"><span class="flabel" id="lb_tgi">Ícone</span><div class="igrid" role="group" aria-labelledby="lb_tgi">'+TAG_ICONS.map(ic=>'<button type="button" data-tgicon="'+ic+'" aria-pressed="'+(f.icon===ic)+'" aria-label="Ícone '+ic+'" style="'+(f.icon===ic?'background:'+f.cor+';border-color:'+f.cor+';color:#fff':'color:'+f.cor)+'">'+svg(ic,20,2.1)+'</button>').join('')+'</div></div>';
    h+='<div class="field"><span class="flabel" id="lb_tgc">Cor</span><div class="cgrid" role="group" aria-labelledby="lb_tgc">'+TAG_COLORS.map(c=>'<button type="button" data-tgcor="'+c[0]+'" aria-pressed="'+(f.cor===c[0])+'" aria-label="'+c[1]+'" style="background:'+c[0]+'">'+(f.cor===c[0]?svg('check',18,3):'')+'</button>').join('')+'</div></div>';
    h+='<div class="field"><span class="flabel">Prévia</span><div id="tgprev">'+tagPill({nome:f.nome||'Marcador', icon:f.icon, cor:f.cor})+'</div></div>';
    h+='<div style="display:grid;grid-template-columns:'+(f.id?'52px ':'')+'minmax(0,1fr) minmax(0,1fr);gap:8px">'+(f.id?'<button type="button" class="btn" data-tgdel="1" aria-label="Excluir marcador" style="color:var(--pagar);padding:0">'+svg('trash',20)+'</button>':'')+'<button type="button" class="btn" data-tgcancel="1">Cancelar</button><button type="button" class="btn dark" data-tgsave="1">'+(f.id?'Salvar':'Criar')+'</button></div><div id="tgconfirm"></div>';
  }
  openSheet(h,'Marcadores', keep);
  if(tagForm && !keep){ const n=document.getElementById('tg_nome'); if(n) n.focus(); }
}
function readTagForm(){ const n=document.getElementById('tg_nome'); if(n && tagForm) tagForm.nome=n.value; }
function leaveTagManager(){ tagForm=null; if(savedEdit){ edit=savedEdit; savedEdit=null; edit.tags=(edit.tags||[]).filter(tagById); drawEditor(true); } else { savedEdit=null; layer.innerHTML=''; edit=null; scheduleRender(); } }
async function saveTagForm(){
  readTagForm(); const f=tagForm; const nome=String(f.nome||'').trim().slice(0,24);
  if(!nome){ toast('Dê um nome ao marcador.'); return; }
  if(S.tags.some(t=>t.id!==f.id && t.nome.toLowerCase()===nome.toLowerCase())){ toast('Já existe um marcador com esse nome.'); return; }
  if(f.id){ const t=tagById(f.id); if(t){ t.nome=nome; t.icon=f.icon; t.cor=f.cor; } }
  else { const t={id:'m'+Date.now().toString(36)+Math.random().toString(36).slice(2,5), nome, icon:f.icon, cor:f.cor}; S.tags.push(t); if(savedEdit){ savedEdit.tags=(savedEdit.tags||[]).concat([t.id]); } }
  saveTags(); toast(f.id?'Marcador atualizado.':'Marcador criado.');
  tagForm=null; if(savedEdit){ leaveTagManager(); } else { drawTagManager(true); scheduleRender(); }
}
async function deleteTag(id){
  const t=tagById(id); if(!t) return;
  S.tags=S.tags.filter(x=>x.id!==id); await saveTags();
  sorted().filter(i=>(i.tags||[]).indexOf(id)>=0).forEach(i=>{ const n=clone(i); n.tags=n.tags.filter(x=>x!==id); addHist(n,'Marcador removido: '+t.nome); put(n, true); });
  if(UI.tag===id) UI.tag=null; if(savedEdit) savedEdit.tags=(savedEdit.tags||[]).filter(x=>x!==id);
  tagForm=null; toast('Marcador excluído.'); drawTagManager(true); scheduleRender();
}
layer.addEventListener('input', ev=>{ if(ev.target.id==='tg_nome' && tagForm){ tagForm.nome=ev.target.value; const p=document.getElementById('tgprev'); if(p) p.innerHTML=tagPill({nome:tagForm.nome||'Marcador', icon:tagForm.icon, cor:tagForm.cor}); } });
layer.addEventListener('click', ev=>{
  const b=ev.target.closest('button'); if(!b) return; const ds=b.dataset;
  if(ds.tagtog && edit){ readForm(); const i=edit.tags.indexOf(ds.tagtog); if(i>=0) edit.tags.splice(i,1); else edit.tags.push(ds.tagtog); drawEditor(true); return; }
  if(ds.tagnew && edit){ openTagManager(true, true); return; }
  if(ds.tagnew2){ tagForm={id:null, nome:'', icon:'tag', cor:TAG_COLORS[S.tags.length % TAG_COLORS.length][0]}; drawTagManager(); return; }
  if(ds.tagedit){ const t=tagById(ds.tagedit); if(t){ tagForm={id:t.id, nome:t.nome, icon:t.icon, cor:t.cor}; drawTagManager(); } return; }
  if(ds.tgicon){ readTagForm(); tagForm.icon=ds.tgicon; drawTagManager(true); return; }
  if(ds.tgcor){ readTagForm(); tagForm.cor=ds.tgcor; drawTagManager(true); return; }
  if(ds.tgsave){ saveTagForm(); return; }
  if(ds.tgcancel){ if(savedEdit && !tagForm.id){ leaveTagManager(); } else { tagForm=null; drawTagManager(true); } return; }
  if(ds.tgdel){ const t=tagById(tagForm.id); const n=sorted().filter(i=>(i.tags||[]).indexOf(tagForm.id)>=0).length; document.getElementById('tgconfirm').innerHTML='<div style="background:var(--pagar-bg);border:1px solid var(--pagar-bd);border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:8px"><span style="font-size:14px;font-weight:600">Excluir “'+esc(t?t.nome:'')+'”?</span><span class="muted">Ele será retirado de '+n+(n===1?' item':' itens')+'. Os itens não são apagados.</span><div class="grid2"><button type="button" class="btn red" data-tgdelok="1">Excluir</button><button type="button" class="btn" data-tgdelno="1">Cancelar</button></div></div>'; return; }
  if(ds.tgdelno){ document.getElementById('tgconfirm').innerHTML=''; return; }
  if(ds.tgdelok){ deleteTag(tagForm.id); return; }
  if(ds.tagback){ leaveTagManager(); return; }
  if(ds.tagclose){ if(savedEdit){ leaveTagManager(); } else { tagForm=null; layer.innerHTML=''; scheduleRender(); } return; }
  if(ds.tagmgr2){ openTagManager(false); return; }
  if(ds.logout && window.__account){ window.__account.signOut(); return; }
  if(ds.lixeira){ openTrash(); return; }
  if(ds.restore){ const it=S.items.get(ds.restore); if(it){ const n=clone(it); delete n.excluido; addHist(n,'Restaurado da lixeira'); put(n); toast('Item restaurado.'); } openTrash(true); return; }
  if(ds.purge){ remove(ds.purge); toast('Excluído de vez.'); openTrash(true); return; }
  if(ds.purgeall){ trashed().forEach(i=>remove(i.id)); toast('Lixeira esvaziada.'); openTrash(true); return; }
  if(ds.aparencia){ openAparencia(); return; }
  if(ds.ajuda){ openAjuda(); return; }
  if(ds.trocasenha){ openTrocaSenha(); return; }
  if(ds.tema){ UI.tema=ds.tema; savePref(); applyTheme(); openAparencia(true); scheduleRender(); return; }
  if(ds.exib){ UI.exib=ds.exib; savePref(); UI.open.clear(); openAparencia(true); scheduleRender(); return; }
  if(ds.estilo){ UI.estilo=ds.estilo; savePref(); applyTheme(); openAparencia(true); scheduleRender(); return; }
  if(ds.layout){ UI.layout=ds.layout; savePref(); wantEnd=true; openAparencia(true); scheduleRender(true); return; }
  if(ds.accent!=null){ UI.accent=ds.accent; savePref(); applyTheme(); openAparencia(true); return; }
});

/* ---------- ações no feed ---------- */
/* ---------- visualizador de imagens ---------- */
let viewer=null;
/* ---------- visualizador: imagens com zoom e PDF ---------- */
function openViewer(id, i){ const it=S.items.get(id); if(!it) return; const as=assetsOf(it.dados); if(!as.length) return; if(!viewer) lastFocus=document.activeElement; viewer={kind:'img', id, as, i:Math.max(0,Math.min(i,as.length-1)), legenda:it.dados.legenda||''}; drawViewer(); }
function drawViewer(){
  const v=viewer; const n=v.as.length; v.z={s:1,x:0,y:0};
  layer.innerHTML='<div class="viewer" role="dialog" aria-modal="true" aria-label="Imagem '+(v.i+1)+' de '+n+'"><div class="vtop"><span>'+(n>1?(v.i+1)+' de '+n:'Imagem')+'</span><span class="vtools"><button type="button" class="vbtn sm" data-vz="-1" aria-label="Diminuir zoom">'+svg('minus',20)+'</button><button type="button" class="vbtn sm" data-vz="1" aria-label="Aumentar zoom">'+svg('plus',20)+'</button><button type="button" class="vbtn" data-vclose="1" aria-label="Fechar">'+svg('x',22)+'</button></span></div><div class="vstage" id="vstage"><img id="vimg" draggable="false" alt="'+esc(v.legenda||'Imagem')+'" src="'+esc(blobUrl(v.as[v.i]))+'"></div>'+(n>1?'<button type="button" class="vbtn vprev" data-vgo="-1" aria-label="Imagem anterior">'+svg('back',26)+'</button><button type="button" class="vbtn vnext" data-vgo="1" aria-label="Próxima imagem" style="transform:scaleX(-1)">'+svg('back',26)+'</button>':'')+(v.legenda?'<div class="vcap">'+esc(v.legenda)+'</div>':'')+'<div class="vhint" aria-hidden="true">Dois toques ou pinça para ampliar</div></div>';
  const c=layer.querySelector('[data-vclose]'); if(c) c.focus();
  bindZoom();
}
function viewerGo(d){ if(!viewer || viewer.kind!=='img') return; const n=viewer.as.length; if(n<2) return; viewer.i=(viewer.i+d+n)%n; drawViewer(); }
function closeViewer(){ if(viewer && viewer.kind==='pdf' && viewer.doc) try{ viewer.doc.destroy(); }catch(e){} viewer=null; layer.innerHTML=''; if(lastFocus&&lastFocus.focus) try{lastFocus.focus();}catch(e){} }
function zApply(anim){ const v=viewer; if(!v||!v.z) return; const img=document.getElementById('vimg'); const st=document.getElementById('vstage'); if(!img||!st) return;
  const z=v.z; const W=st.clientWidth, H=st.clientHeight, w=img.offsetWidth*z.s, h=img.offsetHeight*z.s;
  const mx=Math.max(0,(w-W)/2), my=Math.max(0,(h-H)/2); z.x=Math.max(-mx,Math.min(mx,z.x)); z.y=Math.max(-my,Math.min(my,z.y));
  img.style.transition=anim?'transform .2s ease':'none'; img.style.transform='translate('+z.x+'px,'+z.y+'px) scale('+z.s+')';
  const vw=layer.querySelector('.viewer'); if(vw) vw.classList.toggle('zoomed', z.s>1.01); }
function zTo(s, px, py, anim){ const v=viewer; if(!v||!v.z) return; const z=v.z; const ns=Math.max(1,Math.min(6,s)); const k=ns/z.s; z.x=px-(px-z.x)*k; z.y=py-(py-z.y)*k; z.s=ns; if(ns===1){ z.x=0; z.y=0; } zApply(anim); }
function bindZoom(){
  const st=document.getElementById('vstage'); if(!st) return; const pts=new Map(); let g=null, lastTap=0, lastTapXY=null;
  const rel=(x,y)=>{ const r=st.getBoundingClientRect(); return [x-r.left-r.width/2, y-r.top-r.height/2]; };
  st.addEventListener('pointerdown', ev=>{ if(!viewer) return; try{ st.setPointerCapture(ev.pointerId); }catch(e){} pts.set(ev.pointerId,[ev.clientX,ev.clientY]); const z=viewer.z;
    if(pts.size===2){ const [a,b]=[...pts.values()]; g={pinch:true, d0:Math.hypot(a[0]-b[0],a[1]-b[1])||1, s0:z.s, x0:z.x, y0:z.y, m0:rel((a[0]+b[0])/2,(a[1]+b[1])/2), moved:true}; }
    else if(pts.size===1) g={pinch:false, sx:ev.clientX, sy:ev.clientY, x0:z.x, y0:z.y, moved:false, t:Date.now()}; });
  st.addEventListener('pointermove', ev=>{ if(!viewer||!g||!pts.has(ev.pointerId)) return; pts.set(ev.pointerId,[ev.clientX,ev.clientY]); const z=viewer.z;
    if(g.pinch && pts.size>=2){ const [a,b]=[...pts.values()]; const d=Math.hypot(a[0]-b[0],a[1]-b[1]); const s=Math.max(.8,Math.min(6,g.s0*d/g.d0)); const m=rel((a[0]+b[0])/2,(a[1]+b[1])/2); z.x=m[0]-(g.m0[0]-g.x0)*s/g.s0; z.y=m[1]-(g.m0[1]-g.y0)*s/g.s0; z.s=s; const img=document.getElementById('vimg'); if(img){ img.style.transition='none'; img.style.transform='translate('+z.x+'px,'+z.y+'px) scale('+z.s+')'; } return; }
    const dx=ev.clientX-g.sx, dy=ev.clientY-g.sy; if(Math.hypot(dx,dy)>8) g.moved=true;
    if(z.s>1.01){ z.x=g.x0+dx; z.y=g.y0+dy; zApply(false); }
    else { const img=document.getElementById('vimg'); if(img && g.moved){ img.style.transition='none'; img.style.transform=Math.abs(dy)>Math.abs(dx)&&dy>0?'translateY('+dy+'px)':'translateX('+dx*0.6+'px)'; img.style.opacity=Math.abs(dy)>Math.abs(dx)&&dy>0?String(Math.max(.4,1-dy/400)):'1'; } } });
  const end=ev=>{ if(!viewer||!pts.has(ev.pointerId)) return; pts.delete(ev.pointerId); const z=viewer.z; if(!g) return;
    if(g.pinch){ if(pts.size<2){ if(z.s<1.02) zTo(1,0,0,true); else zApply(true); g=null; if(pts.size===1){ const p=[...pts.values()][0]; g={pinch:false, sx:p[0], sy:p[1], x0:z.x, y0:z.y, moved:true}; } } return; }
    const dx=ev.clientX-g.sx, dy=ev.clientY-g.sy; const img=document.getElementById('vimg');
    if(!g.moved && ev.type==='pointerup'){ const now=Date.now(); const p=rel(ev.clientX,ev.clientY);
      if(now-lastTap<320 && lastTapXY && Math.hypot(lastTapXY[0]-p[0],lastTapXY[1]-p[1])<40){ lastTap=0; if(z.s>1.01) zTo(1,0,0,true); else zTo(2.5,p[0],p[1],true); } else { lastTap=now; lastTapXY=p; } g=null; return; }
    if(z.s<=1.01){ if(img){ img.style.transition='transform .2s ease, opacity .2s'; img.style.transform=''; img.style.opacity='1'; }
      if(dy>110 && Math.abs(dy)>Math.abs(dx)){ closeViewer(); }
      else if(Math.abs(dx)>60 && Math.abs(dx)>Math.abs(dy)){ viewer.swiped=true; viewerGo(dx<0?1:-1); setTimeout(()=>{ if(viewer) viewer.swiped=false; },400); } }
    g=null; };
  st.addEventListener('pointerup', end); st.addEventListener('pointercancel', end);
  st.addEventListener('wheel', ev=>{ if(!viewer) return; ev.preventDefault(); const p=rel(ev.clientX,ev.clientY); zTo(viewer.z.s*Math.exp(-ev.deltaY*0.0022), p[0], p[1], false); }, {passive:false});
  const img=document.getElementById('vimg'); if(img) img.addEventListener('load', ()=>zApply(false));
}
layer.addEventListener('click', ev=>{ if(!viewer) return; if(viewer.swiped){ viewer.swiped=false; return; }
  const g=ev.target.closest('[data-vgo]'); if(g){ viewerGo(+g.dataset.vgo); return; }
  const vz=ev.target.closest('[data-vz]'); if(vz){ if(viewer.kind==='pdf') pdfZoom(viewer.zoom*(+vz.dataset.vz>0?1.25:0.8)); else zTo(viewer.z.s*(+vz.dataset.vz>0?1.5:1/1.5),0,0,true); return; }
  const ex=ev.target.closest('[data-vext]'); if(ex){ return; }
  if(ev.target.closest('[data-vclose]')) closeViewer(); });
document.addEventListener('keydown', ev=>{ if(!viewer) return;
  if(ev.key==='Escape'){ ev.preventDefault(); closeViewer(); return; }
  if(ev.key==='+'||ev.key==='='){ ev.preventDefault(); if(viewer.kind==='pdf') pdfZoom(viewer.zoom*1.25); else zTo(viewer.z.s*1.5,0,0,true); return; }
  if(ev.key==='-'){ ev.preventDefault(); if(viewer.kind==='pdf') pdfZoom(viewer.zoom*0.8); else zTo(viewer.z.s/1.5,0,0,true); return; }
  if(ev.key==='0'){ if(viewer.kind==='pdf') pdfZoom(1); else zTo(1,0,0,true); return; }
  if(viewer.kind==='img' && viewer.z.s<=1.01){ if(ev.key==='ArrowRight') viewerGo(1); else if(ev.key==='ArrowLeft') viewerGo(-1); } });

/* PDF dentro do app (pdf.js) */
function isPdf(d){ return !!d && (d.mime==='application/pdf' || /\.pdf$/i.test(d.nome||'') || /\.pdf$/i.test(String(d.asset||''))); }
async function openPdf(id){
  const it=S.items.get(id); if(!it||!it.dados.asset) return; const d=it.dados; const url=blobUrl(d.asset);
  if(!window.__pdfjs){ window.open(url,'_blank','noopener'); return; }
  if(!viewer) lastFocus=document.activeElement;
  viewer={kind:'pdf', id, url, nome:d.nome||'Documento', zoom:1, pages:[], doc:null, rendered:new Map(), cur:1};
  layer.innerHTML='<div class="viewer pdfv" role="dialog" aria-modal="true" aria-label="'+esc(viewer.nome)+'"><div class="vtop"><span class="vtitle"><b>'+esc(viewer.nome)+'</b><span id="pdfpg">Abrindo…</span></span><span class="vtools"><button type="button" class="vbtn sm" data-vz="-1" aria-label="Diminuir zoom">'+svg('minus',20)+'</button><button type="button" class="vbtn sm" data-vz="1" aria-label="Aumentar zoom">'+svg('plus',20)+'</button><a class="vbtn sm" data-vext="1" href="'+esc(url)+'" target="_blank" rel="noopener" aria-label="Abrir em outro app" title="Abrir em outro app">'+svg('download',19)+'</a><button type="button" class="vbtn" data-vclose="1" aria-label="Fechar">'+svg('x',22)+'</button></span></div><div class="pdfstage" id="pdfstage" tabindex="0"><div class="pdfpages" id="pdfpages"><div class="pdfmsg">Carregando o PDF…</div></div></div></div>';
  const c=layer.querySelector('[data-vclose]'); if(c) c.focus();
  const me=viewer;
  try{
    const lib=await window.__pdfjs();
    const buf=await (await fetch(url)).arrayBuffer(); if(viewer!==me) return;
    const doc=await lib.getDocument({data:new Uint8Array(buf), isEvalSupported:false}).promise; if(viewer!==me){ doc.destroy(); return; }
    me.doc=doc; const n=doc.numPages;
    for(let k=1;k<=n;k++){ const pg=await doc.getPage(k); if(viewer!==me) return; const vp=pg.getViewport({scale:1}); me.pages.push({pg, w:vp.width, h:vp.height}); }
    pdfLayout(); bindPdf();
  }catch(e){ console.error(e); const box=document.getElementById('pdfpages'); if(box && viewer===me) box.innerHTML='<div class="pdfmsg">Não foi possível abrir este PDF aqui.<br><a class="btn" href="'+esc(url)+'" target="_blank" rel="noopener" style="margin-top:12px">Abrir em outro app</a></div>'; }
}
function pdfLayout(keep){
  const v=viewer; if(!v||v.kind!=='pdf') return; const st=document.getElementById('pdfstage'), box=document.getElementById('pdfpages'); if(!st||!box) return;
  const W=Math.min(st.clientWidth-16, 1000)*v.zoom; v.rendered.clear(); if(v.io) v.io.disconnect();
  box.innerHTML=v.pages.map((p,k)=>'<div class="pdfpg" data-pg="'+(k+1)+'" style="width:'+Math.round(W)+'px;height:'+Math.round(W*p.h/p.w)+'px" aria-label="Página '+(k+1)+'"></div>').join('');
  v.io=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting) pdfRender(+e.target.dataset.pg); }), {root:st, rootMargin:'120% 0px'});
  box.querySelectorAll('.pdfpg').forEach(el=>v.io.observe(el)); pdfIndicador();
}
async function pdfRender(k){
  const v=viewer; if(!v||v.kind!=='pdf'||v.rendered.has(k)) return; v.rendered.set(k,true);
  const el=document.querySelector('.pdfpg[data-pg="'+k+'"]'); const p=v.pages[k-1]; if(!el||!p) return;
  const cssW=el.clientWidth; const dpr=Math.min(window.devicePixelRatio||1, 3); let scale=cssW/p.w*dpr; if(p.w*scale>4096) scale=4096/p.w;
  const vp=p.pg.getViewport({scale}); const cv=document.createElement('canvas'); cv.width=Math.floor(vp.width); cv.height=Math.floor(vp.height);
  try{ await p.pg.render({canvasContext:cv.getContext('2d'), viewport:vp}).promise; if(viewer!==v) return; el.innerHTML=''; el.appendChild(cv); }catch(e){ v.rendered.delete(k); }
}
function pdfIndicador(){ const v=viewer; if(!v||v.kind!=='pdf') return; const st=document.getElementById('pdfstage'); const lab=document.getElementById('pdfpg'); if(!st||!lab) return;
  const mid=st.scrollTop+st.clientHeight/3; let cur=1; st.querySelectorAll('.pdfpg').forEach(el=>{ if(el.offsetTop<=mid) cur=+el.dataset.pg; }); v.cur=cur;
  lab.textContent='Página '+cur+' de '+v.pages.length+(Math.abs(v.zoom-1)>.01?' · '+Math.round(v.zoom*100)+'%':''); }
function pdfZoom(z, cx, cy){
  const v=viewer; if(!v||v.kind!=='pdf'||!v.pages.length) return; const st=document.getElementById('pdfstage'); if(!st) return;
  const nz=Math.max(1,Math.min(4,z)); if(Math.abs(nz-v.zoom)<.001) return; const k=nz/v.zoom;
  const ox=cx==null?st.clientWidth/2:cx, oy=cy==null?st.clientHeight/2:cy; const fx=st.scrollLeft+ox, fy=st.scrollTop+oy;
  v.zoom=nz; pdfLayout(); st.scrollLeft=fx*k-ox; st.scrollTop=fy*k-oy; pdfIndicador();
}
function bindPdf(){
  const st=document.getElementById('pdfstage'), box=document.getElementById('pdfpages'); if(!st) return; let t=null;
  st.addEventListener('scroll', ()=>pdfIndicador(), {passive:true});
  const rel=(x,y)=>{ const r=st.getBoundingClientRect(); return [x-r.left, y-r.top]; };
  st.addEventListener('touchstart', ev=>{ if(ev.touches.length===2){ const a=ev.touches[0], b=ev.touches[1]; t={d0:Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY)||1, m:rel((a.clientX+b.clientX)/2,(a.clientY+b.clientY)/2), r:1}; box.style.transformOrigin=(st.scrollLeft+t.m[0])+'px '+(st.scrollTop+t.m[1])+'px'; } }, {passive:true});
  st.addEventListener('touchmove', ev=>{ if(t && ev.touches.length===2){ ev.preventDefault(); const a=ev.touches[0], b=ev.touches[1]; t.r=Math.max(1/viewer.zoom, Math.min(4/viewer.zoom, Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY)/t.d0)); box.style.transform='scale('+t.r+')'; } }, {passive:false});
  const fim=()=>{ if(!t) return; const r=t.r, m=t.m; t=null; box.style.transform=''; if(Math.abs(r-1)>.03) pdfZoom(viewer.zoom*r, m[0], m[1]); };
  st.addEventListener('touchend', ev=>{ if(ev.touches.length<2) fim(); }); st.addEventListener('touchcancel', fim);
  st.addEventListener('wheel', ev=>{ if(!ev.ctrlKey) return; ev.preventDefault(); const p=rel(ev.clientX,ev.clientY); pdfZoom(viewer.zoom*Math.exp(-ev.deltaY*0.01), p[0], p[1]); }, {passive:false});
  let lastTap=0; st.addEventListener('click', ev=>{ const now=Date.now(); if(now-lastTap<320){ lastTap=0; const p=rel(ev.clientX,ev.clientY); pdfZoom(viewer.zoom>1.05?1:2, p[0], p[1]); } else lastTap=now; });
  let rz=null; window.addEventListener('resize', ()=>{ clearTimeout(rz); rz=setTimeout(()=>{ if(viewer&&viewer.kind==='pdf'&&viewer.pages.length) pdfLayout(); },200); });
  try{ st.focus({preventScroll:true}); }catch(e){}
}

/* ---------- Como usar ---------- */
function openAjuda(){
  const mouse=window.matchMedia && matchMedia('(hover:hover) and (pointer:fine)').matches;
  const sec=(t,b)=>'<section class="ajsec"><h3>'+t+'</h3>'+b+'</section>';
  const ex=t=>'<code class="ajex">'+esc(t).replace(/\n/g,'<br>')+'</code>';
  let h=sheetHead('Como usar');
  h+=sec('Anotar','<p>Escreva como numa conversa. O app percebe o tipo e sugere o card certo; se preferir, toque em enviar para guardar como texto.</p>'+ex('pagar 180 ao Seu Zé dia 25')+ex('reunião de pais sexta 19h')+ex('Feira:\n- arroz\n- feijão')+'<p>Use <b>+</b> para escolher o tipo e o clipe para enviar fotos, áudios e arquivos. Com a caixa vazia, o botão de enviar vira microfone: toque para gravar e de novo para parar.</p>');
  h+=sec('Cards',(mouse?'<p><b>Clique</b> num card para abrir. <b>Clique numa informação</b> para editá-la. <b>Botão direito</b> ou <b>⋯</b> abre: fixar, editar tudo, marcadores, copiar, apagar.</p>':'<p><b>Toque</b> num card para abrir. <b>Toque numa informação</b> para editá-la. <b>Segure</b> o card para: fixar, editar tudo, marcadores, copiar, apagar.</p><p>Deslize um card fechado para o lado para a ação rápida (pagar, concluir item).</p>')+'<p>Para recolher, toque no topo do card ou fora dele.</p>');
  h+=sec('Cronograma','<p>Um compromisso pode ter etapas. Escreva o título na primeira linha e uma etapa por linha, com hora ou data:</p>'+ex('Aula de campo sexta\n7h saída da escola\n12h almoço\n15h retorno')+'<p>Toque na bolinha para marcar a etapa como feita. Ao segurar o card, “Duplicar…” reaproveita o cronograma em outra data.</p>');
  h+=sec('Imagens e PDF','<p>Toque numa imagem para ver em tela cheia. Amplie com <b>dois toques</b> ou com a <b>pinça</b>; deslize para o lado para passar e para baixo para fechar. PDFs abrem dentro do app, também com zoom.</p>');
  h+=sec('Encontrar','<p>A lupa busca em tudo, com ou sem acento. O filtro mostra um tipo ou um marcador por vez. <b>Resumo</b> mostra o mês: contas, gastos, próximos compromissos e tarefas.</p>');
  h+=sec('Na caixa de texto','<p>*negrito*, _itálico_, ~riscado~ e linhas com “-” viram lista.</p>');
  h+=sec('Aparência e backup','<p>Em <b>Menu › Aparência</b>: estilo, modo escuro, Conversa ou Linha do tempo e cor de destaque. O backup em arquivo fica no Menu.</p>');
  openSheet(h,'Como usar');
}
function openTrocaSenha(){
  let h=sheetHead('Trocar senha');
  h+='<div class="field"><label for="f_ns">Nova senha</label><input id="f_ns" type="password" autocomplete="new-password" minlength="6"></div><div class="field"><label for="f_ns2">Repita a nova senha</label><input id="f_ns2" type="password" autocomplete="new-password" minlength="6"></div><p class="muted" id="f_nserr" role="alert" style="margin:0"></p><button type="button" class="btn dark" data-nsok="1">Salvar nova senha</button>';
  openSheet(h,'Trocar senha'); setTimeout(()=>{ const f=document.getElementById('f_ns'); if(f) f.focus(); },60);
}
layer.addEventListener('click', async ev=>{ if(!ev.target.closest('[data-nsok]')) return; const a=document.getElementById('f_ns').value, b=document.getElementById('f_ns2').value, er=document.getElementById('f_nserr');
  if(a.length<6){ er.textContent='A senha precisa ter pelo menos 6 caracteres.'; return; } if(a!==b){ er.textContent='As duas senhas não são iguais.'; return; }
  try{ await window.__account.changePassword(a); closeSheet(); toast('Senha alterada.'); }catch(e){ er.textContent='Não foi possível trocar: '+(e&&e.message||e); } });

function onFeedClick(ev){
  const vw=ev.target.closest('[data-view]'); if(vw){ ev.stopPropagation(); openViewer(vw.dataset.view, +vw.dataset.i||0); return; }
  const pf=ev.target.closest('[data-pdf]'); if(pf){ ev.stopPropagation(); openPdf(pf.dataset.pdf); return; }
  if(ev.target.closest('[data-stop]')) return;
  const a=ev.target.closest('[data-act]');
  if(a){ ev.stopPropagation(); const it=S.items.get(a.dataset.id); if(!it) return; const n=clone(it);
    if(a.dataset.act==='tick'){ tickItem(it.id, +a.dataset.i); }
    else if(a.dataset.act==='etick'){ const x=n.dados.etapas&&n.dados.etapas[+a.dataset.i]; if(x){ x.feito=!x.feito; addHist(n,(x.feito?'Etapa feita: ':'Etapa reaberta: ')+(x.titulo||'')); put(n); buzz(); } }
    else if(a.dataset.act==='pay'){ markPaid(it.id); }
    else if(a.dataset.act==='unpay'){ n.dados.situacao='apagar'; delete n.dados.pagoEm; delete n.pagoNoApp; addHist(n,'Pagamento desfeito'); if(n.proxId){ const p=S.items.get(n.proxId); if(p && p.dados.situacao!=='pago') remove(p.id); delete n.proxId; } put(n); }
    return; }
  const gt=ev.target.closest('[data-goto]'); if(gt){ ev.stopPropagation(); UI.view='feed'; expandAndShow(gt.dataset.goto); return; }
  const mn=ev.target.closest('[data-menu]'); if(mn){ ev.stopPropagation(); const r=mn.getBoundingClientRect(); openCtx(mn.dataset.menu, r.right-200, r.bottom+4); return; }
  const o=ev.target.closest('[data-open]');
  if(!o){ if(UI.exib==='compacta' && UI.open.size && !ev.target.closest('button,a,input,[data-goto]')){ UI.open.clear(); render(); } return; }
  const id=o.dataset.open;
  if((o.closest('#views') && !o.closest('.calday')) || o.closest('#aside')){ UI.view='feed'; expandAndShow(id); return; }
  if(!o.classList.contains('cexp')){
    if(ev.target.closest('a,button,input,audio,select,textarea,label,.gal')) return;
    const sel=window.getSelection && getSelection(); if(sel && !sel.isCollapsed && o.contains(sel.anchorNode)) return;
    const f=ev.target.closest('[data-f]');
    if(f){ ev.stopPropagation(); openEditor(id, null, null, null, f.dataset.f); return; }
    if(UI.exib!=='compacta') return;
    UI.open.delete(id); render(); focusCard(id); return;
  }
  if(UI.exib!=='compacta') return;
  if(UI.open.has(id)){ UI.open.delete(id); } else { UI.open.add(id); UI.justOpened=id; const cr=(o.closest('.card')||o).getBoundingClientRect(); UI.origin={id, ox:Math.round((ev.clientX-cr.left)/Math.max(1,cr.width)*100), oy:Math.round((ev.clientY-cr.top)/Math.max(1,cr.height)*100)}; }
  render(); focusCard(id); dicaGestos();
}
const DICA='mn-dica-gestos';
function dicaGestos(){ try{ if(localStorage.getItem(DICA)) return; localStorage.setItem(DICA,'1'); }catch(e){ return; } const mouse=window.matchMedia && matchMedia('(hover:hover) and (pointer:fine)').matches; setTimeout(()=>toast(mouse?'Dica: clique numa informação para editar; botão direito para fixar ou apagar.':'Dica: toque numa informação para editar; segure o card para fixar ou apagar.'), 350); }
function focusCard(id){ const el=document.querySelector('#feed [data-open="'+(window.CSS&&CSS.escape?CSS.escape(id):id)+'"]'); if(el){ try{ el.focus({preventScroll:true}); }catch(e){} const f=document.getElementById('feed'); const r=el.getBoundingClientRect(), fr=f.getBoundingClientRect(); if(r.bottom>fr.bottom) f.scrollTop+=r.bottom-fr.bottom+8; if(r.top<fr.top) f.scrollTop-=fr.top-r.top+8; } }
function expandAndShow(id){ UI.filter='tudo'; UI.tag=null; UI.q=''; document.getElementById('q').value=''; if(UI.exib==='compacta') UI.open.add(id); render(); const el=document.querySelector('#feed [data-open="'+(window.CSS&&CSS.escape?CSS.escape(id):id)+'"]'); if(el){ el.scrollIntoView({block:'center'}); try{ el.focus({preventScroll:true}); }catch(e){} } }
document.getElementById('feed').addEventListener('click', onFeedClick);
document.getElementById('pinbar').addEventListener('click', ev=>{ const j=ev.target.closest('[data-pinjump]'); if(j){ expandAndShow(j.dataset.pinjump); return; } if(ev.target.closest('[data-pinnext]')){ UI.pinIdx++; renderPinbar(); } });
document.getElementById('active').addEventListener('click', ev=>{ const b=ev.target.closest('[data-rmf]'); if(!b) return; if(b.dataset.rmf==='tipo') UI.filter='tudo'; else UI.tag=null; scheduleRender(true); });
document.getElementById('feed').addEventListener('click', ev=>{ const ex=ev.target.closest('[data-exemplo]'); if(ex){ msg.value=EXEMPLOS[ex.dataset.exemplo].replace(/\\n/g,'\n'); autosize(); updateSuggest(); updateSendBtn(); try{ msg.focus(); }catch(e){} return; } const nt=ev.target.closest('[data-newtype]'); if(nt){ openEditor(null, nt.dataset.newtype, {}, null); return; } if(ev.target.closest('[data-clearf]')){ UI.filter='tudo'; UI.tag=null; UI.q=''; document.getElementById('q').value=''; scheduleRender(true); } });
/* deslizar o card compacto: direita = pagar/concluir; esquerda = fixar */
let sw=null, swipedAt=0;
function swipeAction(it){ if(!it) return null; if(it.tipo==='despesa' && it.dados.situacao!=='pago') return {label:'Pagar', run:()=>markPaid(it.id)}; if(it.tipo==='lista'){ const k=(it.dados.itens||[]).findIndex(x=>!x.ok); if(k>=0) return {label:'Concluir', run:()=>tickItem(it.id,k)}; } return null; }
const feedEl=document.getElementById('feed');
feedEl.addEventListener('pointerdown', ev=>{
  if(ev.pointerType==='mouse') return; const c=ev.target.closest('.card.compact'); if(!c || ev.target.closest('.qbtn')) return;
  const o=c.querySelector('[data-open]'); sw={c, id:o&&o.dataset.open, x:ev.clientX, y:ev.clientY, dx:0, on:false, hint:null};
});
feedEl.addEventListener('pointermove', ev=>{
  if(!sw) return; const dx=ev.clientX-sw.x, dy=ev.clientY-sw.y;
  if(!sw.on){ if(Math.abs(dy)>12 && Math.abs(dy)>Math.abs(dx)){ sw=null; return; } if(Math.abs(dx)<12) return; sw.on=true; clearTimeout(lpT); sw.c.classList.add('swiping'); }
  const it=S.items.get(sw.id); const act=swipeAction(it);
  let x=dx; if(x>0 && !act) x=Math.min(x,24); x=Math.max(-110, Math.min(110, x)); sw.dx=x;
  sw.c.style.transform='translateX('+x+'px)';
  if(!sw.hint){ sw.hint=document.createElement('span'); sw.hint.className='swhint'; sw.c.appendChild(sw.hint); }
  const right=x>0; sw.hint.className='swhint '+(right?'r':'l')+(Math.abs(x)>=80?' ok':''); sw.hint.textContent=right?(act?act.label:''):(it&&it.fixo?'Desafixar':'Fixar');
});
function endSwipe(){
  if(!sw) return; const s0=sw; sw=null; if(!s0.on) return; swipedAt=Date.now();
  const it=S.items.get(s0.id); const act=swipeAction(it);
  s0.c.classList.remove('swiping'); s0.c.style.transform=''; if(s0.hint) s0.hint.remove();
  if(s0.dx>=80 && act) act.run(); else if(s0.dx<=-80 && it) togglePin(it.id);
}
feedEl.addEventListener('pointerup', endSwipe); feedEl.addEventListener('pointercancel', endSwipe);
feedEl.addEventListener('click', ev=>{ if(Date.now()-swipedAt<400){ ev.stopImmediatePropagation(); ev.preventDefault(); } }, true);

/* computador: colar (Ctrl+V) ou arrastar imagens e arquivos */
document.addEventListener('paste', ev=>{
  if(layer.innerHTML || UI.view!=='feed') return; const cd=ev.clipboardData; if(!cd) return;
  const files=Array.from(cd.files||[]); if(!files.length) return;
  const t=ev.target; if(t && t!==msg && (t.tagName==='INPUT'||t.tagName==='TEXTAREA'||t.isContentEditable)) return;
  ev.preventDefault(); handleFiles(files, msg.value.trim(), true);
});
const appEl=document.getElementById('app'); let dragN=0;
appEl.addEventListener('dragenter', ev=>{ if(!ev.dataTransfer || Array.from(ev.dataTransfer.types||[]).indexOf('Files')<0) return; dragN++; appEl.classList.add('dropping'); });
appEl.addEventListener('dragover', ev=>{ if(ev.dataTransfer && Array.from(ev.dataTransfer.types||[]).indexOf('Files')>=0){ ev.preventDefault(); ev.dataTransfer.dropEffect='copy'; } });
appEl.addEventListener('dragleave', ()=>{ dragN=Math.max(0,dragN-1); if(!dragN) appEl.classList.remove('dropping'); });
appEl.addEventListener('drop', ev=>{ const files=Array.from((ev.dataTransfer&&ev.dataTransfer.files)||[]); dragN=0; appEl.classList.remove('dropping'); if(!files.length) return; ev.preventDefault(); UI.view='feed'; handleFiles(files, msg.value.trim(), true); });

/* toque longo (dedo) ou botão direito (mouse) abre o menu do card */
let lpT=null, lpFired=false, lpXY=null, ctxId=null;
function lpTarget(ev){ return ev.target.closest('#feed [data-open], #feed .card, .calday [data-open], .calday .card'); }
function cardIdOf(c){ const o=c.closest('[data-open]')||c.querySelector('[data-open]'); return (o&&o.dataset.open)||c.dataset.open||null; }

function bindLP(feedEl){
feedEl.addEventListener('pointerdown', ev=>{ if(ev.pointerType==='mouse') return; const c=lpTarget(ev); if(!c || ev.target.closest('input,audio,textarea,select')) return; lpFired=false; lpXY=[ev.clientX,ev.clientY]; clearTimeout(lpT); lpT=setTimeout(()=>{ const id=cardIdOf(c); if(id && !(Date.now()-swipedAt<400)){ lpFired=true; buzz(15); openCtx(id, lpXY[0], lpXY[1]); } },500); });
['pointerup','pointercancel','pointerleave'].forEach(n=>feedEl.addEventListener(n, ()=>clearTimeout(lpT)));
feedEl.addEventListener('pointermove', ev=>{ if(lpXY && Math.hypot(ev.clientX-lpXY[0], ev.clientY-lpXY[1])>10) clearTimeout(lpT); });
feedEl.addEventListener('scroll', ()=>{ clearTimeout(lpT); closeCtx(true); }, {passive:true});
feedEl.addEventListener('click', ev=>{ if(lpFired){ lpFired=false; ev.stopImmediatePropagation(); ev.preventDefault(); } }, true);
feedEl.addEventListener('contextmenu', ev=>{ const c=lpTarget(ev); if(!c || ev.target.closest('input,textarea')) return; ev.preventDefault(); clearTimeout(lpT); if(lpFired) return; const id=cardIdOf(c); if(!id) return; let x=ev.clientX, y=ev.clientY; if(!x && !y){ const r=c.getBoundingClientRect(); x=r.left+24; y=r.top+24; } openCtx(id, x, y); });
}
bindLP(document.getElementById('feed')); bindLP(document.getElementById('views'));
function closeCtx(noFocus){ const m=document.getElementById('ctxmenu'); if(m){ m.remove(); const back=ctxId; ctxId=null; if(back && !noFocus) focusCard(back); } }
function openCtx(id, x, y){
  const it=S.items.get(id); if(!it) return; closeCtx(true); ctxId=id;
  const m=document.createElement('div'); m.id='ctxmenu'; m.className='ctxmenu'; m.setAttribute('role','menu'); m.setAttribute('aria-label','Opções: '+cardTitle(it));
  const b=(act,ic,label,extra)=>'<button type="button" role="menuitem" data-ctx="'+act+'"'+(extra||'')+'>'+svg(ic,17)+'<span>'+esc(label)+'</span></button>';
  const txt=plainCard(it);
  m.innerHTML=b('pin','pin',it.fixo?'Desafixar':'Fixar no topo')+b('edit','edit','Editar tudo')+b('tags','tag','Marcadores')+(txt?b('copy','copy',it.tipo==='agenda'&&etapasOf(it.dados).length?'Copiar cronograma':'Copiar texto'):'')+(it.tipo==='agenda'?b('dup','repeat','Duplicar…'):'')+'<hr>'+b('del','trash','Apagar',' class="danger"');
  document.body.appendChild(m);
  const W=innerWidth, H=innerHeight, r=m.getBoundingClientRect();
  m.style.left=Math.max(8, Math.min(x, W-r.width-8))+'px'; m.style.top=Math.max(8, Math.min(y, H-r.height-8))+'px';
  const first=m.querySelector('button'); if(first) try{ first.focus({preventScroll:true}); }catch(e){}
}
function openDuplicar(id){
  const it=S.items.get(id); if(!it) return; const d=it.dados||{}; const base=d.data||isoOf(today());
  const n=etapasOf(d).length;
  openSheet('<div class="row"><h2>Duplicar compromisso</h2><button type="button" class="iconbtn" data-close="1" aria-label="Fechar" style="margin-left:auto">'+svg('x',18)+'</button></div><p class="muted" style="margin:0">Cria uma cópia de “'+esc(d.titulo||'Compromisso')+'”'+(n?' com as '+n+' etapas, mantendo os mesmos intervalos entre elas':'')+'.</p><div class="field"><label for="f_dupdata">Nova data de início</label><input type="date" id="f_dupdata" value="'+esc(base)+'"></div><button type="button" class="btn dark" data-dupok="'+esc(id)+'">Duplicar</button>', 'Duplicar compromisso');
  setTimeout(()=>{ const f=document.getElementById('f_dupdata'); if(f) f.focus(); }, 60);
}
layer.addEventListener('click', ev=>{ const b=ev.target.closest('[data-dupok]'); if(!b) return; const it=S.items.get(b.dataset.dupok); const v=(document.getElementById('f_dupdata')||{}).value; if(!it || !v){ toast('Escolha a nova data.'); return; }
  const d=clone(it.dados); const delta=daysBetween(d.data||v, v); d.data=v; delete d.diaRep; if(etapasOf(d).length) d.etapas=etapasOf(d).map(x=>Object.assign({}, x, {id:uid(), data:addDays(x.data||v, delta), feito:false}));
  const n=newItem('agenda', d); n.tags=(it.tags||[]).slice(); n.hist=[{em:Date.now(), txt:'Duplicado de “'+(it.dados.titulo||'Compromisso')+'”'}]; closeSheet(); put(n); toast('Cópia criada para '+fmtData(v)+'.'); setTimeout(()=>expandAndShow(n.id), 80); });
function plainCard(it){ const d=it.dados||{}; if(it.tipo==='texto') return [d.titulo, d.html?plainOf(d.html):d.texto].filter(Boolean).join('\n'); if(it.tipo==='lista') return [d.titulo].concat((d.itens||[]).map(x=>(x.ok?'✓ ':'• ')+x.t)).filter(Boolean).join('\n'); if(it.tipo==='contato') return [d.nome,d.telefone,d.email].filter(Boolean).join('\n'); if(it.tipo==='local') return [d.nome,d.endereco].filter(Boolean).join('\n'); if(it.tipo==='link') return d.url||''; if(it.tipo==='despesa') return [d.descricao, fmtMoney(d.valor)].filter(Boolean).join(' · '); if(it.tipo==='agenda') return etapasOf(d).length ? cronoTexto(d, true) : [d.titulo, d.data?fmtData(d.data):'', d.hora].filter(Boolean).join(' · '); return d.legenda||d.nome||''; }
document.addEventListener('click', ev=>{
  const m=document.getElementById('ctxmenu'); if(!m) return;
  const bt=ev.target.closest('[data-ctx]');
  if(!bt){ if(!m.contains(ev.target)){ ev.stopPropagation(); ev.preventDefault(); closeCtx(true); } return; }
  ev.stopPropagation();
  const id=ctxId, act=bt.dataset.ctx; ctxId=null; m.remove(); const it=S.items.get(id); if(!it) return;
  if(act==='pin') togglePin(id);
  else if(act==='edit') openEditor(id);
  else if(act==='tags') openEditor(id, null, null, null, 'tags');
  else if(act==='del') trashItem(id);
  else if(act==='dup') openDuplicar(id);
  else if(act==='copy'){ const t=plainCard(it); try{ navigator.clipboard.writeText(t).then(()=>toast('Texto copiado.'), ()=>toast('Não foi possível copiar.')); }catch(e){ toast('Não foi possível copiar.'); } }
}, true);
document.addEventListener('keydown', ev=>{
  const m=document.getElementById('ctxmenu');
  if(m){ if(ev.key==='Escape'){ ev.preventDefault(); ev.stopPropagation(); closeCtx(); return; } if(ev.key==='ArrowDown'||ev.key==='ArrowUp'){ ev.preventDefault(); const bs=Array.from(m.querySelectorAll('button')); const k=bs.indexOf(document.activeElement); bs[(k+(ev.key==='ArrowDown'?1:-1)+bs.length)%bs.length].focus(); } return; }
  if(ev.key==='Escape' && !layer.innerHTML && !viewer && UI.exib==='compacta' && UI.open.size){ UI.open.clear(); render(); }
}, true);
window.addEventListener('resize', ()=>closeCtx(true));
/* voltar do Android: fecha o que estiver aberto, um nível por vez */
window.__notasBack=function(){
  if(document.getElementById('ctxmenu')){ closeCtx(); return true; }
  if(viewer){ closeViewer(); return true; }
  if(layer.innerHTML){ if(savedEdit){ leaveTagManager(); return true; } tagForm=null; closeSheet(); return true; }
  if(UI.exib==='compacta' && UI.open.size){ UI.open.clear(); render(); return true; }
  if(UI.view!=='feed'){ UI.view='feed'; render(); return true; }
  return false;
};
/* ---------- computador: barra lateral e resumo à direita ---------- */
function sideBtn(attr, on, icon, color, label, n){ return '<button type="button" class="sbtn" '+attr+' aria-pressed="'+on+'">'+'<span class="sic" style="color:'+color+'">'+(icon||'')+'</span><span class="slab">'+esc(label)+'</span>'+(n?'<span class="scount">'+n+'</span>':'')+'</button>'; }
function renderSide(){
  const el=document.getElementById('sideLists'); if(!el) return;
  const all=sorted(); const counts={}, tcount={}; all.forEach(i=>{ counts[i.tipo]=(counts[i.tipo]||0)+1; (i.tags||[]).forEach(t=>{ tcount[t]=(tcount[t]||0)+1; }); });
  document.querySelectorAll('#side [data-sview]').forEach(b=>b.setAttribute('aria-pressed', b.dataset.sview===UI.view?'true':'false'));
  let h='<div class="ssec"><span class="sh">Tipos</span>'+sideBtn('data-sf="tudo"', UI.filter==='tudo'&&UI.view==='feed', svg('itens',16), 'var(--ink2)', 'Todos', all.length);
  TYPE_ORDER.forEach(tp=>{ h+=sideBtn('data-sf="'+tp+'"', UI.filter===tp&&UI.view==='feed', svg(typeIcon(tp),16), typeColor(tp), T[tp].label, counts[tp]||0); });
  h+='</div><div class="ssec"><span class="sh">Marcadores</span>';
  S.tags.forEach(t=>{ h+=sideBtn('data-st="'+esc(t.id)+'"', UI.tag===t.id&&UI.view==='feed', svg(t.icon,16,2.4), esc(t.cor), t.nome, tcount[t.id]||0); });
  h+=sideBtn('data-tagmgr2="1"', false, svg(S.tags.length?'edit':'plus',16), 'var(--muted)', S.tags.length?'Gerenciar marcadores':'Criar marcador', 0)+'</div>';
  el.innerHTML=h;
  const acc=document.getElementById('sideAcc'); if(acc) acc.textContent=window.__account?window.__account.email:'';
  const q2=document.getElementById('q2'); if(q2 && document.activeElement!==q2 && q2.value!==UI.q) q2.value=UI.q;
}
/* ---------- calendário ---------- */
const WDL=['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado'];
function calEventos(ini, fim){ // ini/fim: Date (inclusive); devolve Map iso -> lista
  const M=new Map(); const add=(iso, ev)=>{ const q=parseIso(iso); if(!q || q<ini || q>fim) return; if(!M.has(iso)) M.set(iso, []); M.get(iso).push(ev); };
  sorted().forEach(i=>{ const d=i.dados||{};
    if(i.tipo==='agenda'){ const ps=agendaPontos(i); const crono=etapasOf(d).length>0;
      ps.forEach((p,k)=>add(p.ds, {k:'agenda', i, hr:p.hr, titulo:p.titulo, etapa:crono?(k+1)+' de '+ps.length:'', feito:!!p.feito}));
      if(d.repetir && d.data){ const dia=d.diaRep||(parseIso(d.data)||new Date()).getDate(); let nx=d.data, g=0; const base=d.data; while(g++<60){ nx=nextDate(nx, d.repetir, dia); const q=parseIso(nx); if(!q || q>fim) break; const delta=daysBetween(base, nx); if(crono) ps.forEach(p=>add(addDays(p.ds, delta), {k:'prev', i, hr:p.hr, titulo:p.titulo})); else add(nx, {k:'prev', i, hr:d.hora||'', titulo:d.titulo||'Compromisso'}); } }
    }
    else if(i.tipo==='despesa'){ const pago=d.situacao==='pago'; const ds=pago?(d.pagoEm||d.vencimento):d.vencimento;
      if(ds) add(ds, {k:pago?'pago':'apagar', i, titulo:(d.descricao||'Despesa'), valor:d.valor});
      if(d.repetir && d.vencimento && !(i.proxId && S.items.get(i.proxId) && !S.items.get(i.proxId).excluido)){ const dia=d.diaRep||(parseIso(d.vencimento)||new Date()).getDate(); let nx=d.vencimento, g=0; while(g++<60){ nx=nextDate(nx, d.repetir, dia); const q=parseIso(nx); if(!q || q>fim) break; add(nx, {k:'prev', i, titulo:(d.descricao||'Despesa'), valor:d.valor}); } }
    }
  });
  return M;
}
function renderCal(){
  const el=document.getElementById('views'); const t=today(); const tIso=isoOf(t);
  if(!UI.calMes) UI.calMes={y:t.getFullYear(), m:t.getMonth()};
  const {y,m}=UI.calMes; const first=new Date(y,m,1); const start=new Date(y,m,1-first.getDay()); const end=new Date(start); end.setDate(end.getDate()+41);
  if(!UI.calSel || !(parseIso(UI.calSel)>=start && parseIso(UI.calSel)<=end)) UI.calSel = (t.getFullYear()===y && t.getMonth()===m) ? tIso : isoOf(first);
  const M=calEventos(start, end);
  const desk=window.matchMedia && matchMedia('(min-width:1024px)').matches;
  let g='<div class="calhead"><button type="button" class="iconbtn" data-calm="-1" aria-label="Mês anterior">'+svg('back',18)+'</button><h2 aria-live="polite">'+MESL[m]+' <span>'+y+'</span></h2><button type="button" class="iconbtn" data-calm="1" aria-label="Próximo mês" style="transform:scaleX(-1)">'+svg('back',18)+'</button>'+((t.getFullYear()!==y||t.getMonth()!==m||UI.calSel!==tIso)?'<button type="button" class="btn calhoje" data-calhoje="1">Hoje</button>':'')+'</div>';
  g+='<div class="calgrid" id="calgrid" role="grid" aria-label="'+MESL[m]+' de '+y+'"><div class="calwd" role="row">'+['D','S','T','Q','Q','S','S'].map((x,k)=>'<span role="columnheader" aria-label="'+WDL[k]+'">'+x+'</span>').join('')+'</div>';
  for(let w=0; w<6; w++){ g+='<div class="calrow" role="row">';
    for(let k=0;k<7;k++){ const d=new Date(start); d.setDate(start.getDate()+w*7+k); const iso=isoOf(d); const evs=M.get(iso)||[];
      const kinds=new Set(evs.map(e=>e.k)); const out=d.getMonth()!==m;
      const dots=['agenda','apagar','pago','prev'].filter(x=>kinds.has(x)).map(x=>'<i class="cd-'+x+'"></i>').join('');
      const lab=d.getDate()+' de '+MESL[d.getMonth()].toLowerCase()+(evs.length?', '+evs.length+(evs.length===1?' item':' itens'):'')+(iso===tIso?', hoje':'');
      let inner='<span class="cnum">'+d.getDate()+'</span>';
      if(desk){ inner+='<span class="cchips">'+evs.slice(0,3).map(e=>'<span class="cchip cc-'+e.k+'">'+esc((e.hr?e.hr+' ':'')+e.titulo)+'</span>').join('')+(evs.length>3?'<span class="cmore2">+'+(evs.length-3)+'</span>':'')+'</span>'; }
      else inner+='<span class="cdots">'+dots+'</span>';
      g+='<button type="button" role="gridcell" class="cday'+(out?' out':'')+(iso===tIso?' hoje':'')+(iso===UI.calSel?' sel':'')+'" data-cald="'+iso+'" aria-selected="'+(iso===UI.calSel)+'" aria-label="'+esc(lab)+'">'+inner+'</button>'; }
    g+='</div>'; }
  g+='</div>';
  g+='<div class="callegend" aria-hidden="true"><span><i class="cd-agenda"></i>Compromisso</span><span><i class="cd-apagar"></i>A pagar</span><span><i class="cd-pago"></i>Pago</span><span><i class="cd-prev"></i>Previsão</span></div>';
  // lista do dia
  const sd=parseIso(UI.calSel); const evs=(M.get(UI.calSel)||[]).slice().sort((a,b)=>String(a.hr||'99').localeCompare(String(b.hr||'99')));
  let L='<div class="calday" aria-live="polite"><div class="caldh"><h3>'+WDL[sd.getDay()]+', '+sd.getDate()+' de '+MESL[sd.getMonth()].toLowerCase()+(UI.calSel===tIso?' <em>hoje</em>':'')+'</h3><button type="button" class="btn" data-calnovo="'+UI.calSel+'">'+svg('plus',16)+'Novo compromisso</button></div>';
  const reais=evs.filter(e=>e.k!=='prev'); const prev=evs.filter(e=>e.k==='prev'); const shown=new Set();
  if(reais.length){ L+='<div class="callist">'; reais.forEach(e=>{ if(e.etapa) L+='<div class="caletapa">'+(e.hr?'<b>'+esc(e.hr)+'</b> ':'')+esc(e.titulo)+' <span class="muted">· etapa '+esc(e.etapa)+'</span></div>'; if(shown.has(e.i.id)) return; shown.add(e.i.id); L+=card(e.i); }); L+='</div>'; }
  if(prev.length){ L+='<h4 class="calsub">Previsão</h4><div class="callist">'+prev.map(e=>'<button type="button" class="ghost calprev" data-goto="'+esc(e.i.id)+'"><span class="gic">'+svg('repeat',15)+'</span><span style="display:flex;flex-direction:column;min-width:0"><b>'+esc((e.hr?e.hr+' · ':'')+e.titulo)+'</b><span class="gsub">'+esc((e.valor!=null?fmtMoney(e.valor)+' · ':'')+'repete '+repLabel(e.i.dados.repetir))+'</span></span></button>').join('')+'</div>'; }
  const anot=sorted().filter(i=>isoOf(new Date(i.criado))===UI.calSel && !shown.has(i.id));
  if(anot.length){ L+='<h4 class="calsub">Anotado neste dia</h4><div class="callist">'+anot.map(i=>card(i)).join('')+'</div>'; }
  if(!reais.length && !prev.length && !anot.length) L+='<p class="muted calvazio">'+(sd<t?'Nada anotado nem marcado neste dia.':'Nada marcado para este dia.')+'</p>';
  L+='</div>';
  el.innerHTML='<div class="calwrap"><div class="calmain">'+g+'</div>'+L+'</div>';
}
function calMove(dm){ let {y,m}=UI.calMes; m+=dm; if(m<0){m=11;y--;} if(m>11){m=0;y++;} UI.calMes={y,m}; const t=today(); UI.calSel=(t.getFullYear()===y&&t.getMonth()===m)?isoOf(t):isoOf(new Date(y,m,1)); render(); const h=document.querySelector('.calhead h2'); if(h) h.focus && 0; }
(function(){ const v=document.getElementById('views'); let sx=null, sy=null;
  v.addEventListener('pointerdown', ev=>{ if(UI.view!=='cal' || !ev.target.closest('#calgrid')) return; sx=ev.clientX; sy=ev.clientY; });
  v.addEventListener('pointerup', ev=>{ if(sx==null) return; const dx=ev.clientX-sx, dy=ev.clientY-sy; sx=null; if(Math.abs(dx)>60 && Math.abs(dx)>Math.abs(dy)*1.5){ UI.calSwiped=Date.now(); calMove(dx<0?1:-1); } });
  v.addEventListener('keydown', ev=>{ if(UI.view!=='cal') return; const c=ev.target.closest('[data-cald]'); if(!c) return; const mv={ArrowLeft:-1,ArrowRight:1,ArrowUp:-7,ArrowDown:7}[ev.key]; if(!mv) return; ev.preventDefault();
    const nd=addDays(c.dataset.cald, mv); const q=parseIso(nd); UI.calSel=nd; if(q.getMonth()!==UI.calMes.m || q.getFullYear()!==UI.calMes.y) UI.calMes={y:q.getFullYear(), m:q.getMonth()}; render(); const b=document.querySelector('[data-cald="'+nd+'"]'); if(b) b.focus(); });
})();
function renderAside(){
  const el=document.getElementById('aside'); if(!el || getComputedStyle(el).display==='none') return;
  const t=today(); const all=sorted(); const desp=all.filter(i=>i.tipo==='despesa');
  const isMes=s=>{ const d=parseIso(s); return d && d.getFullYear()===t.getFullYear() && d.getMonth()===t.getMonth(); };
  const apagar=desp.filter(i=>i.dados.situacao!=='pago' && (isMes(i.dados.vencimento) || !i.dados.vencimento || parseIso(i.dados.vencimento)<t));
  const pagos=desp.filter(i=>i.dados.situacao==='pago' && isMes(i.dados.pagoEm||isoOf(new Date(i.criado))));
  const sum=a=>a.reduce((x,i)=>x+(Number(i.dados.valor)||0),0);
  const lim=new Date(t); lim.setDate(lim.getDate()+14); const ag=[];
  all.forEach(i=>{ const d=i.dados||{}; let ds=null, txt=''; if(i.tipo==='agenda'){ agendaPontos(i).forEach(p=>{ const q=parseIso(p.ds); if(q && q>=t && q<=lim && !p.feito) ag.push({dt:q, ds:p.ds, txt:(p.hr?p.hr+' · ':'')+p.titulo+(p.sub?' ('+(d.titulo||'')+')':''), i}); }); return; } else if(i.tipo==='despesa' && d.situacao!=='pago'){ ds=d.vencimento; txt='Vence: '+(d.descricao||'Despesa'); } const dt=parseIso(ds); if(dt && dt>=t && dt<=lim) ag.push({dt,ds,txt,i}); });
  ag.sort((a,b)=>a.dt-b.dt);
  const pend=[]; all.filter(i=>i.tipo==='lista' && i.dados.modo==='tarefas').forEach(i=>(i.dados.itens||[]).forEach((x,k)=>{ if(!x.ok) pend.push({i,x,k}); }));
  const row=(i,title,sub)=>'<button type="button" class="arow" data-open="'+esc(i.id)+'"><span class="sic" style="color:'+famColor(i)+'">'+svg(iconOf(i),15)+'</span><span class="atx"><span>'+esc(title)+'</span><span class="muted">'+esc(sub)+'</span></span></button>';
  let h='<h2 class="ah">Resumo de '+MESL[t.getMonth()].toLowerCase()+'</h2><div class="grid2"><div class="stat" style="background:var(--pagar-bg);border-color:var(--pagar-bd)"><b style="color:var(--pagar)">A pagar</b><strong style="color:var(--pagar);font-size:17px">'+fmtMoney(sum(apagar))+'</strong></div><div class="stat" style="background:var(--din-bg);border-color:var(--din-bd)"><b style="color:var(--din)">Pago</b><strong style="color:var(--din);font-size:17px">'+fmtMoney(sum(pagos))+'</strong></div></div>';
  h+='<h3 class="ah2">Próximos 14 dias</h3>'+(ag.length?'<div class="alist">'+ag.slice(0,8).map(a=>row(a.i,a.txt,fmtData(a.ds))).join('')+'</div>':'<p class="muted" style="margin:0">Nada marcado.</p>');
  h+='<h3 class="ah2">Tarefas pendentes</h3>'+(pend.length?'<div class="alist">'+pend.slice(0,8).map(p=>'<button type="button" class="arow" data-act="tick" data-id="'+esc(p.i.id)+'" data-i="'+p.k+'"><span class="sic"><span class="box" style="width:18px;height:18px"></span></span><span class="atx"><span>'+esc(p.x.t)+'</span><span class="muted">'+esc(p.i.dados.titulo||'Tarefas')+'</span></span></button>').join('')+'</div>':'<p class="muted" style="margin:0">Nenhuma.</p>');
  h+='<button type="button" class="btn" data-sview="views">Abrir o Resumo completo</button>';
  el.innerHTML=h;
}
function sideClick(ev){
  const b=ev.target.closest('button'); if(!b) return; const ds=b.dataset;
  if(ds.sview){ UI.view=ds.sview; if(UI.view==='feed') wantEnd=true; render(); return; }
  if(ds.sf){ UI.view='feed'; UI.filter=ds.sf; if(ds.sf==='tudo') UI.tag=null; scheduleRender(true); return; }
  if(ds.st){ UI.view='feed'; UI.tag = UI.tag===ds.st?null:ds.st; scheduleRender(true); return; }
  if(ds.tagmgr2){ openTagManager(false); return; }
  if(ds.smenu){ openMenu(); return; }
}
if(document.getElementById('side')){
  document.getElementById('side').addEventListener('click', sideClick);
  document.getElementById('q2').addEventListener('input', e=>{ UI.q=e.target.value.trim(); UI.view='feed'; scheduleRender(true); });
}
if(document.getElementById('aside')){
  document.getElementById('aside').addEventListener('click', ev=>{ if(ev.target.closest('[data-sview]')){ sideClick(ev); return; } onFeedClick(ev); });
}
let deskW=null; window.addEventListener('resize', ()=>{ const w=window.innerWidth>=1360; if(w!==deskW){ deskW=w; scheduleRender(); } });
document.addEventListener('keydown', e=>{ if((e.ctrlKey||e.metaKey) && e.key.toLowerCase()==='k'){ const sd=document.getElementById('side'); const q2=document.getElementById('q2'); if(q2 && sd && getComputedStyle(sd).display!=='none'){ e.preventDefault(); q2.focus(); q2.select(); } } });

function csvMes(y,m){
  const inM=s=>{ const d=parseIso(s); return d && d.getFullYear()===y && d.getMonth()===m; };
  const br=s=>{ const d=parseIso(s); return d?pad(d.getDate())+'/'+pad(d.getMonth()+1)+'/'+d.getFullYear():''; };
  const q=v=>{ v=String(v==null?'':v); return /[;"\n]/.test(v)?'"'+v.replace(/"/g,'""')+'"':v; };
  const rows=sorted().filter(i=>i.tipo==='despesa' && (inM(i.dados.vencimento) || inM(i.dados.pagoEm)));
  const lines=[['Situação','Descrição','Categoria','Para quem / onde','Vencimento','Pago em','Forma de pagamento','Valor (R$)','Repete'].join(';')];
  rows.forEach(i=>{ const d=i.dados; lines.push([d.situacao==='pago'?'Pago':'A pagar', d.descricao||'', optLabel('categoria',d.categoria), d.para||'', br(d.vencimento), br(d.pagoEm), d.forma?optLabel('forma',d.forma):'', d.valor!=null?Number(d.valor).toFixed(2).replace('.',','):'', repLabel(d.repetir)].map(q).join(';')); });
  return {data:'\ufeff'+lines.join('\r\n'), n:rows.length};
}
document.getElementById('views').addEventListener('click', async ev=>{
  const cv=ev.target.closest('[data-csv]'); if(cv){ const {y,m}=UI.mes; const r=csvMes(y,m); if(!r.n){ toast('Nenhuma despesa neste mês.'); return; } const name='despesas-'+y+'-'+pad(m+1)+'.csv';
    if(S.downloads){ try{ await S.downloads.save({filename:name, data:r.data}); toast('Planilha exportada ('+r.n+(r.n===1?' despesa':' despesas')+').'); return; }catch(e){} }
    const a=document.getElementById('csvArea'); if(a) a.innerHTML='<div class="field"><label for="csvText">Copie e cole numa planilha:</label><textarea id="csvText" readonly style="min-height:120px;font-size:12px;font-family:ui-monospace,monospace">'+esc(r.data.replace('\ufeff',''))+'</textarea></div>'; return; }
  if(UI.view==='cal'){
    if(UI.calSwiped && Date.now()-UI.calSwiped<400) return;
    const cm=ev.target.closest('[data-calm]'); if(cm){ calMove(+cm.dataset.calm); return; }
    if(ev.target.closest('[data-calhoje]')){ const t=today(); UI.calMes={y:t.getFullYear(), m:t.getMonth()}; UI.calSel=isoOf(t); render(); return; }
    const cd=ev.target.closest('[data-cald]'); if(cd){ const q=parseIso(cd.dataset.cald); UI.calSel=cd.dataset.cald; if(q.getMonth()!==UI.calMes.m) UI.calMes={y:q.getFullYear(), m:q.getMonth()}; render(); const b=document.querySelector('[data-cald="'+cd.dataset.cald+'"]'); if(b) b.focus({preventScroll:true}); if(!(window.matchMedia&&matchMedia('(min-width:1024px)').matches)){ const l=document.querySelector('.calday'); if(l) try{ l.scrollIntoView({block:'nearest', behavior:'smooth'}); }catch(e){} } return; }
    const nv=ev.target.closest('[data-calnovo]'); if(nv){ openEditor(null, 'agenda', {data:nv.dataset.calnovo}, null, 'titulo'); return; }
    const gt=ev.target.closest('.calprev[data-goto]'); if(gt){ UI.view='feed'; expandAndShow(gt.dataset.goto); return; }
  }
  const mb=ev.target.closest('[data-mes]'); if(mb){ const dd=+mb.dataset.mes; let y=UI.mes.y, m=UI.mes.m+dd; if(m<0){m=11;y--;} if(m>11){m=0;y++;} UI.mes={y,m}; render(); return; }
  onFeedClick(ev);
});
document.getElementById('feed').addEventListener('keydown', ev=>{ if((ev.key==='Enter'||ev.key===' ') && ev.target.matches('.card')){ ev.preventDefault(); ev.target.click(); } });

document.getElementById('bSearch').addEventListener('click', ()=>{ const w=document.getElementById('searchWrap'); const open=w.hidden; w.hidden=!open; document.getElementById('bSearch').setAttribute('aria-pressed',open?'true':'false'); if(open) document.getElementById('q').focus(); else { UI.q=''; document.getElementById('q').value=''; scheduleRender(true); } });
document.getElementById('q').addEventListener('input', e=>{ UI.q=e.target.value.trim(); scheduleRender(true); });
document.getElementById('tabNotas').addEventListener('click', ()=>{ if(UI.view!=='feed'){ UI.view='feed'; wantEnd=true; render(); } });
document.getElementById('tabResumo').addEventListener('click', ()=>{ if(UI.view!=='views'){ UI.view='views'; render(); } });
document.getElementById('tabCal').addEventListener('click', ()=>{ if(UI.view!=='cal'){ UI.view='cal'; render(); } });
document.getElementById('bFilter').addEventListener('click', ()=>openFilter());
document.getElementById('bPlus').addEventListener('click', openTypes);
function rebindComposer(){ msg=document.getElementById('msg'); msg.addEventListener('input', ()=>{ autosize(); updateSuggest(); updateSendBtn(); }); msg.addEventListener('keydown', composerKey); document.getElementById('bSend').addEventListener('click', ()=>{ if(!msg.value.trim() && recAvailable()) startRec(); else send(true); }); document.getElementById('bPlus').addEventListener('click', openTypes); document.getElementById('fAttach').addEventListener('change', async e=>{ const files=Array.from(e.target.files||[]); e.target.value=''; if(!files.length) return; await handleFiles(files, msg.value.trim(), true); }); paintComposerIcons(); }
document.getElementById('bMenu').addEventListener('click', openMenu);
document.getElementById('toastbar').addEventListener('click', ev=>{ if(!ev.target.closest('[data-undo]') || !undoFn) return; const f=undoFn; undoFn=null; const el=document.getElementById('toastbar'); el.hidden=true; el.classList.remove('withundo'); f(); toast('Desfeito.'); });

/* ---------- aparência ---------- */
const ACCENTS=[['','Padrão'],['#0F5E63','Petróleo'],['#3F3D9E','Índigo'],['#7A2846','Vinho'],['#5B3A70','Ameixa'],['#5A5A1E','Oliva']];
function segOpts(key, cur, opts){ return '<div class="seg" role="group" aria-labelledby="lb_'+key+'" style="--n:'+opts.length+'">'+opts.map(o=>'<button type="button" data-'+key+'="'+o[0]+'" aria-pressed="'+(cur===o[0])+'">'+esc(o[1])+'</button>').join('')+'</div>'; }
function openAparencia(keep){
  let h=sheetHead('Aparência');
  const est=[['caderno','Caderno de campo','Papel quadriculado, fichas com abas, serifa e números de livro-caixa.'],['silencio','Silêncio','Quase sem cor: só o que pede atenção aparece. Preto profundo no escuro.'],['classico','Clássico','O visual anterior, com fundos coloridos por tipo.']];
  h+='<div class="field"><span class="flabel" id="lb_estilo">Estilo</span><div class="estilos" role="group" aria-labelledby="lb_estilo">'+est.map(e=>'<button type="button" class="estcard" data-estilo="'+e[0]+'" aria-pressed="'+(UI.estilo===e[0])+'"><span class="estprev est-'+e[0]+'"><i></i><i></i><i></i></span><span class="esttx"><b>'+esc(e[1])+'</b><span>'+esc(e[2])+'</span></span></button>').join('')+'</div></div>';
  h+='<div class="field"><span class="flabel" id="lb_tema">Modo</span>'+segOpts('tema', UI.tema, [['auto','Automático'],['claro','Claro'],['escuro','Escuro']])+'</div>';
  h+='<div class="field"><span class="flabel" id="lb_layout">Layout do feed</span>'+segOpts('layout', UI.layout, [['chat','Conversa'],['linha','Linha do tempo']])+'<span class="muted">'+(UI.layout==='linha'?'Os dias ficam na margem, com a marca de agora e os próximos compromissos e vencimentos abaixo dela.':'Os itens aparecem como mensagens, do mais antigo ao mais novo.')+'</span></div>';
  h+='<div class="field"><span class="flabel" id="lb_exib">Itens</span>'+segOpts('exib', UI.exib, [['compacta','Compactos'],['expandida','Expandidos']])+'</div>';
  h+='<div class="field"><span class="flabel" id="lb_acc">Cor de destaque (botões principais)</span><div class="accgrid" role="group" aria-labelledby="lb_acc">'+ACCENTS.map(a=>'<button type="button" data-accent="'+a[0]+'" aria-pressed="'+(UI.accent===a[0])+'" aria-label="'+esc(a[1])+'" style="background:'+(a[0]||'var(--strong)')+'">'+(UI.accent===a[0]?svg('check',18,3):'')+'</button>').join('')+'</div><span class="muted">As cores que indicam tipo e situação não mudam.</span></div>';
  openSheet(h,'Aparência', keep);
}

/* ---------- lixeira ---------- */
function openTrash(keep){
  const its=trashed();
  let h=sheetHead('Lixeira')+'<p class="muted" style="margin:0;line-height:1.45">Itens excluídos ficam aqui por 30 dias e depois são apagados de vez.</p>';
  if(!its.length) h+='<p class="muted" style="margin:0">A lixeira está vazia.</p>';
  else {
    h+='<div class="list">'+its.map(i=>{ const dias=Math.max(0,30-Math.floor((Date.now()-i.excluido)/864e5)); return '<div class="li" style="cursor:default"><span class="ic" style="display:flex;align-items:center;justify-content:center;background:var(--'+famKey(i)+'-chip);color:'+famColor(i)+'">'+svg(iconOf(i),16)+'</span><span style="display:flex;flex-direction:column;gap:2px;min-width:0;flex:1"><span style="font-size:14px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+esc(cardTitle(i))+'</span><span class="muted">'+esc(typeLabel(i))+' · apaga em '+dias+(dias===1?' dia':' dias')+'</span></span><button type="button" class="mini" data-restore="'+esc(i.id)+'">Restaurar</button><button type="button" class="mini" data-purge="'+esc(i.id)+'" aria-label="Excluir de vez" style="color:var(--pagar)">'+svg('trash',14)+'</button></div>'; }).join('')+'</div>';
    h+='<button type="button" class="btn" data-purgeall="1" style="color:var(--pagar)">Esvaziar a lixeira</button>';
  }
  openSheet(h,'Lixeira', keep);
}

/* ---------- menu e backup ---------- */
function openMenu(){
  const n=sorted().length;
  let h=sheetHead('Menu');
  const acc=window.__account;
  h+='<div style="font-size:14px;line-height:1.5;background:var(--soft);border-radius:12px;padding:12px 14px">'+(S.mode==='db'?'<b>Sincronizado na nuvem.</b> Suas notas aparecem em qualquer aparelho em que você entrar com a sua conta.'+(acc?'<br><b>Conta:</b> '+esc(acc.email):''):'<b>Modo local:</b> as notas ficam só neste aparelho. Faça backups com frequência.')+'<br><b>Itens:</b> '+n+'</div>';
  if(acc) h+='<div class="grid2">'+(acc.changePassword?'<button type="button" class="btn" data-trocasenha="1">Trocar senha</button>':'')+'<button type="button" class="btn" data-logout="1">Sair da conta</button></div>';
  h+='<button type="button" class="btn" data-ajuda="1">'+svg('texto',16)+'Como usar</button>';
  h+='<button type="button" class="btn" data-aparencia="1" style="justify-content:space-between"><span style="display:inline-flex;align-items:center;gap:8px">'+svg('texto',16)+'Aparência</span><span class="muted">'+esc(({caderno:'Caderno de campo',silencio:'Silêncio',classico:'Clássico'})[UI.estilo])+' · '+(UI.layout==='linha'?'Linha do tempo':'Conversa')+'</span></button>';
  h+='<div class="grid2"><button type="button" class="btn" data-tagmgr2="1">'+svg('tag',16)+'Marcadores ('+S.tags.length+')</button><button type="button" class="btn" data-lixeira="1">'+svg('trash',16)+'Lixeira ('+trashed().length+')</button></div>';
  h+='<div style="display:flex;flex-direction:column;gap:8px"><span class="flabel">Backup</span><button type="button" class="btn dark" data-exp="1">Exportar backup (arquivo .json)</button><label class="btn" for="fImport" style="cursor:pointer">Importar backup</label><input type="file" id="fImport" class="sr" accept="application/json,.json"><span class="muted">O backup guarda textos e dados. Imagens, áudios e documentos continuam no armazenamento do app.</span></div>';
  h+='<div id="bkArea"></div>';
  h+='<div class="muted" style="line-height:1.5"><b style="color:var(--ink)">No app Android:</b> avisos de agenda e vencimentos chegam como notificação, e você pode enviar conteúdo de outros apps pelo menu Compartilhar. Na versão web, veja compromissos e vencimentos em <b>Resumo</b>.</div>';
  openSheet(h,'Menu');
}
async function exportBackup(){
  const data=JSON.stringify({app:'minhas-notas', versao:2, exportado:new Date().toISOString(), marcadores:S.tags, itens:sorted()}, null, 1);
  const name='minhas-notas-backup-'+isoOf(today())+'.json';
  if(S.downloads){ try{ await S.downloads.save({filename:name, data}); toast('Backup exportado.'); return; }catch(e){} }
  const area=document.getElementById('bkArea'); if(!area) return;
  area.innerHTML='<div class="field"><label for="bkText">Copie este texto e guarde num arquivo:</label><textarea id="bkText" readonly style="min-height:140px;font-size:12px;font-family:ui-monospace,monospace">'+esc(data)+'</textarea></div><button type="button" class="btn" data-copy="1">Copiar backup</button>';
}
async function importBackup(f){
  let obj; try{ obj=JSON.parse(await f.text()); }catch(e){ toast('Arquivo de backup inválido.'); return; }
  const arr=Array.isArray(obj)?obj:(obj&&Array.isArray(obj.itens)?obj.itens:null);
  if(!arr){ toast('Arquivo de backup inválido.'); return; }
  if(obj && Array.isArray(obj.marcadores)){ let add=0; obj.marcadores.forEach(t=>{ if(!t||!t.id||!t.nome) return; const id=String(t.id).replace(/[^A-Za-z0-9_-]/g,'').slice(0,40); if(!id||tagById(id)) return; S.tags.push({id, nome:String(t.nome).slice(0,24), icon:TAG_ICONS.indexOf(t.icon)>=0?t.icon:'tag', cor:/^#[0-9A-Fa-f]{6}$/.test(t.cor)?t.cor:TAG_COLORS[0][0]}); add++; }); if(add) await saveTags(); }
  let n=0;
  for(const raw of arr){
    if(!raw||!raw.id) continue; const id=String(raw.id).replace(/[^A-Za-z0-9_.~:@+-]/g,'').slice(0,80); if(!id) continue;
    let it={id, tipo:String(raw.tipo||''), dados:raw.dados&&typeof raw.dados==='object'?raw.dados:{}, criado:Number(raw.criado)||Date.now(), editado:Number(raw.editado)||Date.now(), fixo:!!raw.fixo, tags:Array.isArray(raw.tags)?raw.tags.map(String).filter(t=>/^[A-Za-z0-9_-]{1,40}$/.test(t)):[], hist:Array.isArray(raw.hist)?raw.hist.slice(-20):[]};
    if(raw.deApagar) it.deApagar=true; if(raw.pagoNoApp) it.pagoNoApp=true;
    if(!T[it.tipo]){ const m=migrate(it); if(!m) continue; it=m; }
    if(it.tipo==='texto' && it.dados.html) it.dados.html=sanitize(it.dados.html);
    S.items.set(id,it); if(S.mode==='db'){ await enqueue(id,()=>S.col.doc(id).set(body(it)).catch(writeErr)); } n++;
  }
  if(S.mode!=='db') saveLocal();
  closeSheet(); toast(n+' itens importados.'); scheduleRender(true);
}

/* ---------- ícones fixos ---------- */
document.getElementById('bSearch').innerHTML=svg('search',20);

document.getElementById('bMenu').innerHTML=svg('menu',20);
function paintComposerIcons(){ document.getElementById('bPlus').innerHTML=svg('plus',22); document.getElementById('lAttach').innerHTML=svg('clip',20); const b=document.getElementById('bSend'); b.dataset.mode=''; updateSendBtn(); }
paintComposerIcons();

window.__notas={detectar, parseMoney, sanitize, migrate, S, render};
window.__setSync=msg=>{ if(S.mode==='db') setBanner(msg||''); };
window.__notasHooks={
  async ingestShare(p){ const texts=(p.texts||[]).filter(Boolean).join('\n').trim(); const files=p.files||[];
    UI.view='feed'; closeSheet();
    if(files.length){ const ok=await handleFiles(files, texts, false); if(ok) toast('Conteúdo recebido e salvo.'); return; }
    if(texts){ msg.value=texts; autosize(); updateSuggest(); updateSendBtn(); render(); try{ msg.focus(); }catch(e){} toast('Conteúdo recebido. Confira e envie.'); } },
  payItem(id){ markPaid(id, true); },
  hasItem(id){ const it=S.items.get(id); return !!(it && S.loaded); },
  toast(m){ toast(m); },
  openItem(id){ if(!S.items.get(id)) return; closeSheet(); UI.view='feed'; expandAndShow(id); },
  rerender(){ scheduleRender(); }
};
if(window.__onNotasReady) try{ window.__onNotasReady(); }catch(e){}
scheduleRender();
initStore();
})();
