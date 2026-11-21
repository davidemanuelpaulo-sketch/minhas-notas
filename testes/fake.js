// Supabase falso, em memória, para testar a camada de nuvem
export function fakeSb(){
  const rows=new Map(); const files=new Map(); const chans=[];
  window.__fake={rows,files,chans, remote(id,body){ rows.set(id,{id,body}); chans.forEach(c=>c.cb({eventType:'INSERT',new:{id,body,user_id:'u1'}})); }, offline:false};
  const q=(table)=>{
    let filt={}; let rng=[0,999];
    const api={
      select(){ return api; }, eq(k,v){ filt[k]=v; return api; }, range(a,b){ rng=[a,b]; return api.then?api:api; },
      async upsert(r){ if(window.__fake.offline) return {error:{message:'offline'}}; rows.set(r.id,{id:r.id,body:r.body}); return {error:null}; },
      delete(){ return { eq:(k,v)=>({ eq:async (k2,v2)=>{ if(window.__fake.offline) return {error:{message:'offline'}}; rows.delete(v2); return {error:null}; } }) }; },
      then(res,rej){ if(window.__fake.offline) return Promise.resolve({data:null,error:{message:'offline'}}).then(res,rej); const data=Array.from(rows.values()).slice(rng[0],rng[1]+1); return Promise.resolve({data,error:null}).then(res,rej); }
    };
    return api;
  };
  return {
    from:q,
    channel(){ const c={ on(_e,_f,cb){ c.cb=cb; return c; }, subscribe(){ chans.push(c); return c; } }; return c; },
    storage:{ from(){ return { async upload(path,file){ files.set(path,file); return {error:null}; }, async createSignedUrls(paths){ return {data:paths.map(p=>({path:p, signedUrl: files.get(p)?URL.createObjectURL(files.get(p)):''})), error:null}; } }; } }
  };
}
