---
slug: stack-supabase-vercel-pgcron
tipo: ferramenta
titulo: "Stack técnica: Next.js + Supabase Pro + Vercel Hobby + pg_cron"
resumo: "O ERPSb roda em Next.js hospedado na Vercel (plano Hobby, gratuito) com banco Supabase (plano Pro, ~R$ 25/mês). A reconciliação de pagamentos roda via pg_cron dentro do Supabase, não como cron job da Vercel — o plano Hobby limita cron a 1 execução por dia, incompatível com reconciliação a cada 5 minutos."
status: publicado
fonte: "ferramentas/erpsb.md; ferramentas/mercado-pago-pix.md"
confianca: alta
atualizado_em: 2026-07-17
---

**A stack técnica do [[erpsb|ERPSb]] combina Next.js na Vercel (Hobby, gratuito) com Supabase (Pro, ~R$ 25/mês) — e a decisão de onde roda cada peça não é arbitrária: o plano gratuito da Vercel simplesmente não suporta a frequência de reconciliação que o produto exige.**

**Componentes da stack:**

| Camada | Tecnologia | Plano |
|---|---|---|
| Frontend/Backend | Next.js | — |
| Hospedagem | Vercel | Hobby (gratuito) |
| Banco de dados + Auth | Supabase | Pro (~R$ 25/mês) |
| Emissão de NFS-e | Focus NFe | ~R$ 0,05/nota |
| Pagamentos | Mercado Pago (Pix) | 0,99%/transação |

**Por que a reconciliação roda no Supabase, não na Vercel:** o mecanismo de garantia do ERPSb (ver [[mercado-pago-pix]]) precisa consultar a API do Mercado Pago a cada 5 minutos, para pegar qualquer pagamento que o webhook não tenha capturado. O plano Vercel Hobby limita cron jobs a **1 execução por dia** — incompatível com essa cadência. A solução é rodar o polling inteiramente dentro do banco, via `pg_cron` (agendador) + `pg_net` (chamadas HTTP de dentro do Postgres), disponíveis no plano Supabase Pro.

**Por que essa divisão de responsabilidade, e não tudo num só provedor:**

- **Vercel Hobby é suficiente para o app em si:** tráfego de uma clínica não justifica um plano pago só para hospedagem.
- **Supabase Pro é necessário pela extensão `pg_cron`/`pg_net` e pelo RLS** (ver [[rls-por-papel-seguranca]]) — funcionalidades que o plano gratuito não cobre com a confiabilidade exigida por dados fiscais.
- **O upgrade de plano é pontual e previsível:** ~R$ 25/mês do Supabase é o único custo fixo de infraestrutura da stack; os demais custos (Focus NFe, Mercado Pago) são variáveis, por transação.

**Fontes:**
1. [[erpsb]] (publicado) — seções "Stack técnica" e "Custos".
2. [[mercado-pago-pix]] (publicado) — mecanismo de webhook + polling e a justificativa de não usar Vercel Cron.
3. `ledger.md`, decisão de stack (Supabase Pro + Vercel Hobby).

**Relacionados:** [[erpsb]] · [[mercado-pago-pix]] · [[rls-por-papel-seguranca]] · [[focus-nfe]]
