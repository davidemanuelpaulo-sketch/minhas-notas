-- Minhas notas — configuração do Supabase
-- Cole tudo no SQL Editor do seu projeto e clique em "Run".
-- Pode rodar mais de uma vez sem problema.

-- 1. Tabela das notas: cada linha é um item (ou a lista de marcadores)
create table if not exists public.itens (
  user_id    uuid        not null default auth.uid() references auth.users(id) on delete cascade,
  id         text        not null,
  body       jsonb       not null,
  updated_at timestamptz not null default now(),
  primary key (user_id, id)
);

-- 2. Segurança: cada pessoa só lê e altera as próprias notas
alter table public.itens enable row level security;

drop policy if exists "itens: dono lê"     on public.itens;
drop policy if exists "itens: dono cria"   on public.itens;
drop policy if exists "itens: dono altera" on public.itens;
drop policy if exists "itens: dono apaga"  on public.itens;

create policy "itens: dono lê"     on public.itens for select to authenticated using (auth.uid() = user_id);
create policy "itens: dono cria"   on public.itens for insert to authenticated with check (auth.uid() = user_id);
create policy "itens: dono altera" on public.itens for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "itens: dono apaga"  on public.itens for delete to authenticated using (auth.uid() = user_id);

-- 3. Tempo real: mudanças aparecem nos outros aparelhos na hora
do $$ begin
  alter publication supabase_realtime add table public.itens;
exception when duplicate_object then null; end $$;

-- 4. Arquivos (imagens, áudios, documentos): pasta privada por pessoa
insert into storage.buckets (id, name, public, file_size_limit)
values ('anexos', 'anexos', false, 20971520)
on conflict (id) do nothing;

drop policy if exists "anexos: dono lê"    on storage.objects;
drop policy if exists "anexos: dono envia" on storage.objects;
drop policy if exists "anexos: dono apaga" on storage.objects;

create policy "anexos: dono lê"    on storage.objects for select to authenticated using (bucket_id = 'anexos' and (storage.foldername(name))[1] = auth.uid()::text);
create policy "anexos: dono envia" on storage.objects for insert to authenticated with check (bucket_id = 'anexos' and (storage.foldername(name))[1] = auth.uid()::text);
create policy "anexos: dono apaga" on storage.objects for delete to authenticated using (bucket_id = 'anexos' and (storage.foldername(name))[1] = auth.uid()::text);
