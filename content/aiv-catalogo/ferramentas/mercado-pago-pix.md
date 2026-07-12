---
slug: mercado-pago-pix
tipo: ferramenta
titulo: "Mercado Pago + Pix no ERPSb: webhook rápido, polling como garantia"
resumo: "O ERPSb recebe Pix em conta Mercado Pago e concilia pagamentos com nota fiscal usando dois mecanismos: webhook (rápido, mas pode falhar) e polling de reconciliação a cada 5 minutos via pg_cron (garantia de que nenhum pagamento fica sem nota)."
status: publicado
fonte: "mercadopago.com.br/developers; ledger.md S5.2-S5.6"
confianca: alta
atualizado_em: 2026-07-11
---

**No ERPSb, o Pix cai em conta Mercado Pago, e o pagamento é conciliado com a nota fiscal por dois mecanismos combinados: webhook (otimização) e polling (garantia).**

**Como os dois mecanismos se complementam:**

1. **Webhook:** o Mercado Pago chama a URL pública do app (Vercel) em até 1 segundo após o pagamento, gravando o evento — é o caminho rápido, que dispara a emissão de nota quase em tempo real.
2. **Polling de reconciliação:** a cada 5 minutos, uma rotina consulta a API do Mercado Pago via `pg_cron` + `pg_net` no Supabase Pro, garantindo que nenhum pagamento fique sem nota mesmo se o webhook falhar (configuração incorreta, instabilidade momentânea, etc.).
3. **Idempotência:** cada pagamento tem `mp_payment_id` único, com upsert que ignora duplicatas — o mesmo pagamento nunca gera duas notas.

**Por que não usar Vercel Cron para o polling:** o plano Vercel Hobby limita cron jobs a 1 execução por dia — incompatível com uma reconciliação que precisa rodar a cada 5 minutos. Por isso o polling roda inteiramente dentro do Supabase (plano Pro), via `pg_cron`/`pg_net`, e não como cron job da aplicação.

**Custo:** Mercado Pago cobra 0,99% por transação processada via Pix.

**Botão de escape humano:** quando o pagamento cai fora do fluxo automático (Pix registrado por engano em outro canal, por exemplo), a recepção tem o botão "Registrar Pix manualmente" — o registro manual entra no mesmo fluxo de reconciliação do polling.

**Fontes:**
1. `ledger.md`, S5.2, S5.3 e S5.6 (2026).
2. `tarefas/produto-2-blindagem.md`, parâmetro técnico 3 (2026).
3. [Mercado Pago - APIs](https://www.mercadopago.com.br/developers).

**Relacionados:** [[erpsb]] · [[focus-nfe]] · [[../produtos/produto-2-blindagem-operacional-2027]]
