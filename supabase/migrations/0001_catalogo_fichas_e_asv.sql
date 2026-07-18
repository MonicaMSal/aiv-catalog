-- Catálogo AIV — tabelas de suporte a:
-- 1) registro de fichas publicadas (via .github/workflows/registrar-ficha.yml)
-- 2) medição periódica de AI Share of Voice (via scripts/measure-asv.ts)
--
-- Nenhum projeto Supabase existia para este repo antes desta migration
-- (confirmado: `gh secret list` vazio, sem .env, sem supabase/ no repo).
-- Rodar manualmente no SQL editor do projeto novo, ou via `supabase db push`
-- depois de `supabase link`.

create table if not exists catalogo_fichas (
  id bigint generated always as identity primary key,
  titulo text not null,
  tipo text not null check (tipo in ('conceito', 'metodologia', 'ferramenta', 'caso-de-uso', 'produto', 'faq')),
  slug text not null unique,
  url text not null,
  data_publicacao timestamptz not null default now()
);

create table if not exists asv_measurements (
  id bigint generated always as identity primary key,
  cliente text not null,
  data_medicao timestamptz not null default now(),
  asv_percentual numeric not null,
  total_mencoes_cliente integer not null,
  total_mencoes_geral integer not null,
  modelos_testados text[] not null,
  prompts_testados integer not null,
  detalhes jsonb not null
);

create index if not exists asv_measurements_data_medicao_idx on asv_measurements (data_medicao desc);

alter table catalogo_fichas enable row level security;
alter table asv_measurements enable row level security;

-- Só o service role (usado pelos workflows de CI) escreve/lê estas tabelas.
-- Sem policy para anon/authenticated: acesso via API pública fica bloqueado por padrão.
create policy "service role only" on catalogo_fichas
  for all using (auth.role() = 'service_role');
create policy "service role only" on asv_measurements
  for all using (auth.role() = 'service_role');
