-- Corrige catalogo_fichas: a tabela já existia no projeto (schema original do
-- Qwen — vertical, sem slug/constraints) quando 0001 rodou, então o
-- `create table if not exists` daquela migration não fez nada. Tabela está
-- vazia (0 linhas) no momento desta correção — seguro alterar sem migração de dados.

alter table catalogo_fichas rename column vertical to tipo;
alter table catalogo_fichas drop constraint if exists catalogo_fichas_vertical_check;
alter table catalogo_fichas add column if not exists slug text;
alter table catalogo_fichas alter column slug set not null;
alter table catalogo_fichas add constraint catalogo_fichas_slug_key unique (slug);
alter table catalogo_fichas add constraint catalogo_fichas_tipo_check
  check (tipo in ('conceito', 'metodologia', 'ferramenta', 'caso-de-uso', 'produto', 'faq'));

alter table catalogo_fichas enable row level security;
drop policy if exists "service role only" on catalogo_fichas;
create policy "service role only" on catalogo_fichas
  for all using (auth.role() = 'service_role');
