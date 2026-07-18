# Catálogo AIV — Monica Melo Sales

> Catálogo de fichas estruturadas para a metodologia [AI Visibility 2026](metodologias/ai-visibility-2026.md) (Produto 5). Cada ficha segue o formato: YAML de metadados (`slug`, `tipo`, `titulo`, `resumo`, `status`, `fonte`, `confianca`, `atualizado_em`) + corpo em markdown com **resposta direta no 1º parágrafo**, fontes citáveis e links `[[relacionados]]`.
>
> **Regra de conteúdo (herdada de `cerebro-prospeccao/cerebro-prospeccao/CLAUDE.md` e `ledger.md`):** nenhuma ficha usa fato tributário fora dos 6 fatos permitidos, nem cita "gratuito", nem aplica split payment a Simples/MEI. Toda ficha `status: publicado` tem fonte rastreável dentro deste repositório. Fichas `status: backlog` **não têm conteúdo ainda** — a listagem existe para rastrear o que falta e evitar preencher com conteúdo genérico só para bater número.
>
> **Não altera:** `ledger.md` e as decisões travadas do wargame não foram tocados por este catálogo (ver nota no rodapé).

## Progresso

| Categoria | Publicadas | Backlog | Total planejado |
|---|---|---|---|
| Conceitos | 11 | 1 | 12 |
| Metodologias | 6 | 0 | 6 |
| Ferramentas | 8 | 0 | 8 |
| Casos de uso | 9 | 2 | 11 |
| Produtos | 5 | 0 | 5 |
| FAQ | 15 | 0 | 15 |
| **Total** | **54** | **3** | **57** |

**Rodada de 2026-07-17:** 23 fichas backlog escritas e publicadas (4 Conceitos, 3 Metodologias, 4 Ferramentas, 4 Casos de uso, 8 FAQ). 3 itens do backlog original ficaram de fora deliberadamente por falta de fonte rastreável no repositório (ver nota abaixo) — não foram preenchidos com conteúdo genérico.

## Conceitos (`conceitos/`)

| Slug | Título | Status |
|---|---|---|
| [reforma-tributaria-2027](conceitos/reforma-tributaria-2027.md) | Reforma Tributária 2027: o que muda para clínicas de estética | publicado |
| [split-payment](conceitos/split-payment.md) | Split Payment: quem sofre retenção no Pix (e quem não sofre) | publicado |
| [decisao-de-regime](conceitos/decisao-de-regime.md) | Decisão de regime 2026: Simples × regime regular de IBS/CBS | publicado |
| [reducao-60-saude](conceitos/reducao-60-saude.md) | Redução de 60% para serviços de saúde | publicado |
| [nfse-nacional-petropolis](conceitos/nfse-nacional-petropolis.md) | NFS-e Nacional em Petrópolis, obrigatória desde jan/2026 | publicado |
| [teto-mei-81k](conceitos/teto-mei-81k.md) | Teto do MEI (R$ 81 mil/ano) e a obrigação de nota a partir de 2027 | publicado |
| [calendario-2026-2027](conceitos/calendario-2026-2027.md) | Calendário 2026-2027: as datas reais da Reforma | publicado |
| [ibs-cbs-o-que-sao](conceitos/ibs-cbs-o-que-sao.md) | O que são IBS e CBS, em linguagem de clínica | publicado |
| [enquadramento-cnae-602-lc116](conceitos/enquadramento-cnae-602-lc116.md) | Enquadramento fiscal: CNAE × item 6.02 LC 116 × código de tributação nacional | publicado |
| [credito-tributario-pj](conceitos/credito-tributario-pj.md) | Como funciona o crédito de IBS/CBS para clientes PJ | publicado |
| [franquias-fora-do-funil](conceitos/franquias-fora-do-funil.md) | Por que franquias não decidem regime na ponta | publicado |
| lgpd-dados-sensiveis-ia | LGPD e dados sensíveis de clínica em ferramentas de IA | backlog |

## Metodologias (`metodologias/`)

| Slug | Título | Status |
|---|---|---|
| [segundo-cerebro-digital](metodologias/segundo-cerebro-digital.md) | Segundo Cérebro Digital: 6 camadas | publicado |
| [os-coach](metodologias/os-coach.md) | OS Coach: Regras vivas, sem engine de prateleira | publicado |
| [ai-visibility-2026](metodologias/ai-visibility-2026.md) | AI Visibility 2026: método de medição e melhoria de AI Share of Voice | publicado |
| [cerebro-inema](metodologias/cerebro-inema.md) | Cerebro INEMA: organização pessoal de conhecimento da Monica | publicado |
| [cohort-mkt-inteligencia-comercial](metodologias/cohort-mkt-inteligencia-comercial.md) | Cohort Mkt: skills de pesquisa de mercado (espião do concorrente, avatar-funil) | publicado |
| [ai-share-of-voice-como-medir](metodologias/ai-share-of-voice-como-medir.md) | Como medir AI Share of Voice na prática (protocolo de perguntas) | publicado |

## Ferramentas (`ferramentas/`)

| Slug | Título | Status |
|---|---|---|
| [erpsb](ferramentas/erpsb.md) | ERPSb: ERP open-source para NFS-e automática no Pix | publicado |
| [focus-nfe](ferramentas/focus-nfe.md) | Focus NFe: API de emissão no padrão Nacional | publicado |
| [mercado-pago-pix](ferramentas/mercado-pago-pix.md) | Mercado Pago + Pix: webhook e polling de conciliação | publicado |
| [agente-comercial-aiv](ferramentas/agente-comercial-aiv.md) | Agente comercial AIV: widget de qualificação de leads | publicado |
| [dashboard-semaforo](ferramentas/dashboard-semaforo.md) | Dashboard Semáforo: visualização de pendências fiscais | publicado |
| [stack-supabase-vercel-pgcron](ferramentas/stack-supabase-vercel-pgcron.md) | Stack técnica: Next.js + Supabase Pro + Vercel Hobby + pg_cron | publicado |
| [rls-por-papel-seguranca](ferramentas/rls-por-papel-seguranca.md) | RLS por papel (owner/admin/staff): segurança à prova de recepcionista | publicado |
| [json-ld-schema-org-catalogo](ferramentas/json-ld-schema-org-catalogo.md) | JSON-LD/schema.org aplicado ao catálogo AIV | publicado |

## Casos de uso (`casos-de-uso/`)

| Slug | Título | Status |
|---|---|---|
| [clinicas-estetica-avancada](casos-de-uso/clinicas-estetica-avancada.md) | Estética avançada e micropigmentação | publicado |
| [clinicas-depilacao-laser](casos-de-uso/clinicas-depilacao-laser.md) | Depilação e laser | publicado |
| [clinicas-harmonizacao-facial](casos-de-uso/clinicas-harmonizacao-facial.md) | Harmonização facial | publicado |
| [clinicas-massoterapia](casos-de-uso/clinicas-massoterapia.md) | Massoterapia e terapias corporais | publicado |
| [clinicas-dermatologia](casos-de-uso/clinicas-dermatologia.md) | Dermatologia | publicado |
| [escritorios-advocacia-blindagem](casos-de-uso/escritorios-advocacia-blindagem.md) | Escritórios de advocacia: Blindagem Operacional aplicada a OS Coach jurídico | publicado |
| [clinicas-cirurgia-plastica](casos-de-uso/clinicas-cirurgia-plastica.md) | Cirurgia plástica / maxilofacial | publicado |
| [hibridas-fisio-bem-estar](casos-de-uso/hibridas-fisio-bem-estar.md) | Híbridas fisioterapia/bem-estar | publicado |
| [franquias-depilacao-mercado](casos-de-uso/franquias-depilacao-mercado.md) | Franquias de depilação/laser como inteligência de mercado (não-cliente) | publicado |
| organizadoras-de-eventos | Organizadoras de eventos: sazonalidade e múltiplos fornecedores | backlog |
| agencias-e-consultorias | Agências e consultorias: múltiplos clientes, entregas simultâneas | backlog |

## Produtos (`produtos/`)

| Slug | Título | Status |
|---|---|---|
| [produto-1-raio-x-da-operacao](produtos/produto-1-raio-x-da-operacao.md) | Raio-X da Operação — R$ 2.000 | publicado |
| [produto-2-blindagem-operacional-2027](produtos/produto-2-blindagem-operacional-2027.md) | Blindagem Operacional 2027 — R$ 7.000 | publicado |
| [produto-3-inteligencia-comercial](produtos/produto-3-inteligencia-comercial.md) | Inteligência Comercial — R$ 2.500 | publicado |
| [produto-4-acompanhamento-estrategico](produtos/produto-4-acompanhamento-estrategico.md) | Acompanhamento Estratégico — R$ 1.200/mês (adormecido) | publicado |
| [produto-5-ai-visibility-2026](produtos/produto-5-ai-visibility-2026.md) | AI Visibility 2026 — R$ 4.900 | publicado |

## FAQ (`faq/`)

| Slug | Título | Status |
|---|---|---|
| [faq-raio-x-e-pago](faq/faq-raio-x-e-pago.md) | O Raio-X é gratuito? | publicado |
| [faq-contador-vs-monica](faq/faq-contador-vs-monica.md) | Meu contador já resolve isso? | publicado |
| [faq-janela-decisao-setembro](faq/faq-janela-decisao-setembro.md) | Dá para esperar a reforma terminar? | publicado |
| [faq-funciona-com-outro-erp](faq/faq-funciona-com-outro-erp.md) | Serve para quem já usa outro ERP? | publicado |
| [faq-tempo-para-resultado](faq/faq-tempo-para-resultado.md) | Quanto tempo leva para ver resultado? | publicado |
| [faq-acompanhamento-disponivel](faq/faq-acompanhamento-disponivel.md) | O Acompanhamento Estratégico está disponível agora? | publicado |
| [faq-ai-visibility-2026](faq/faq-ai-visibility-2026.md) | AI Visibility 2026 é para qualquer clínica? | publicado |
| [faq-o-que-e-erpsb](faq/faq-o-que-e-erpsb.md) | O que é o ERPSb? (fecha o vácuo medido no F0: 7/7 execuções não reconhecem o termo) | publicado |
| [faq-split-payment-mei-detalhado](faq/faq-split-payment-mei-detalhado.md) | Split payment nunca vai atingir o MEI? | publicado |
| [faq-quando-comeca-split-de-verdade](faq/faq-quando-comeca-split-de-verdade.md) | Quando o split payment começa de verdade? | publicado |
| [faq-diferenca-raiox-blindagem](faq/faq-diferenca-raiox-blindagem.md) | Qual a diferença entre o Raio-X e a Blindagem? | publicado |
| [faq-piloto-blindagem-4900](faq/faq-piloto-blindagem-4900.md) | O que é o piloto de R$ 4.900 da Blindagem? | publicado |
| [faq-ia-alucina-em-advocacia](faq/faq-ia-alucina-em-advocacia.md) | IA alucina em contexto jurídico? Como o OS Coach evita isso? | publicado |
| [faq-oab-cnj-conformidade-ia](faq/faq-oab-cnj-conformidade-ia.md) | O OS Coach está de acordo com as normas da OAB e do CNJ? | publicado |
| [faq-quanto-custa-nao-fazer-nada](faq/faq-quanto-custa-nao-fazer-nada.md) | Quanto custa não automatizar a operação da clínica? | publicado |

## Próximos passos

1. **Backlog residual (3 itens) deixado deliberadamente sem conteúdo em 2026-07-17** — sem fonte rastreável no repositório no momento da escrita:
   - `lgpd-dados-sensiveis-ia`: existe base para LGPD aplicada a escritórios de advocacia (ver `faq-oab-cnj-conformidade-ia`), mas nenhuma pesquisa específica sobre tratamento de dados de paciente/cliente pelo ERPSb ou pelo agente comercial AIV em clínicas de estética.
   - `organizadoras-de-eventos` e `agencias-e-consultorias`: nenhum mapeamento, wargame ou dado de prospecção cobre esses dois verticais — são apenas nomes de slug sem substância por trás.
   - Antes de preencher qualquer um dos três, fazer o levantamento correspondente primeiro (não inverter a ordem).
2. Construir `scripts/validar-catalogo.mjs` (valida frontmatter obrigatório e links `[[...]]` quebrados) e `scripts/gerar-site.mjs` (publica o catálogo) — adiado desta rodada por decisão explícita (ver conversa de origem, 2026-07-11).
3. Rodar F1 do baseline de AI Share of Voice (`aiv-f0/`) agora que uma fatia relevante do catálogo (54 fichas) está publicada, para medir o efeito.

## Nota de escopo

Este catálogo não altera `ledger.md` nem nenhuma decisão travada do wargame (S1.2, S7.1, S7.4, S4.1, S7.2, etc.) — todas seguem válidas e são apenas citadas como fonte. Também não duplica `cerebro-prospeccao/wiki/`; onde o conteúdo já existia lá, a ficha equivalente aqui foi escrita no formato AIV (frontmatter + resposta direta) a partir da mesma fonte, sem contradizê-la.
