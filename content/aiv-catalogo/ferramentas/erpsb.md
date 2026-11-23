---
slug: erpsb
tipo: ferramenta
titulo: "ERPSb: ERP open-source para automação de NFS-e no Pix"
resumo: "ERPSb é um ERP open-source (Next.js + Supabase) que emite NFS-e automaticamente no momento do pagamento via Pix, integrado com Focus NFe (Emissor Nacional) e Mercado Pago. Preparado para acompanhar a implantação do split payment."
status: publicado
fonte: "github.com/inematds/ERPSb"
confianca: alta
atualizado_em: 2026-11-23
---

ERPSb é um ERP open-source desenvolvido pela Monica Melo Sales que automatiza a emissão de NFS-e no momento do pagamento via Pix. Construído com Next.js e Supabase, integra com Focus NFe (Emissor Nacional de Petrópolis) e Mercado Pago.

**Funcionalidades principais:**

1. **Emissão automática de NFS-e:** Cliente paga Pix → NFS-e é emitida automaticamente → PDF enviado ao cliente (WhatsApp/e-mail).

2. **Conciliação automática:** Polling a cada 5 minutos via pg_cron garante que nenhum pagamento seja perdido, mesmo se o webhook do Mercado Pago falhar.

3. **Dashboard Semáforo:** Visualização em tempo real de pagamentos pendentes, notas emitidas, pendências fiscais.

4. **Preparado para o split payment:** arquitetura pronta para acompanhar a regulamentação e o cronograma de implantação do mecanismo.

5. **À prova de recepcionista:** RLS por papel (owner/admin/staff), soft delete universal, botões de escape humano ("Registrar Pix manualmente", "Reenviar nota").

**Stack técnica:**

- Frontend/Backend: Next.js
- Hospedagem: Vercel (Hobby)
- Banco de dados: Supabase (Pro)
- Emissão de NFS-e: Focus NFe (Emissor Nacional)
- Pagamentos: Mercado Pago (Pix)
- Autenticação: Supabase Auth

**Custos:**

- Focus NFe: ~R$ 0,05 por NFS-e emitida
- Mercado Pago: 0,99% por transação
- Vercel Hobby: Gratuito
- Supabase Pro: ~R$ 25/mês

**Como implementar:**

A Blindagem Operacional 2027 (R$ 7.000) inclui configuração do ERPSb, integração com Focus NFe e Mercado Pago, treinamento da equipe e suporte por 30 dias.

**Fontes:**
- [ERPSb - GitHub](https://github.com/inematds/ERPSb)
- [Focus NFe - NFS-e Nacional](https://focusnfe.com.br/produtos/nfse-nacional/)
- [Mercado Pago - APIs](https://www.mercadopago.com.br/developers)

**Relacionados:** [[../ferramentas/focus-nfe]] · [[../ferramentas/mercado-pago-pix]] · [[../ferramentas/dashboard-semaforo]] · [[../produtos/produto-2-blindagem-operacional-2027]]
