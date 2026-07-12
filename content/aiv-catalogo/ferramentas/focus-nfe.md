---
slug: focus-nfe
tipo: ferramenta
titulo: "Focus NFe: a API que emite NFS-e no padrão Nacional em Petrópolis"
resumo: "Focus NFe é o provedor de API usado pelo ERPSb para emitir NFS-e no padrão Emissor Nacional, obrigatório em Petrópolis desde janeiro de 2026. Custo aproximado de R$ 0,05 por nota emitida."
status: publicado
fonte: "focusnfe.com.br/produtos/nfse-nacional"
confianca: alta
atualizado_em: 2026-07-11
---

**Focus NFe é o provedor de API que o [[erpsb|ERPSb]] usa para emitir NFS-e automaticamente no padrão Emissor Nacional — o único padrão válido em Petrópolis desde janeiro de 2026.**

**Como funciona a integração:**

- Endpoint técnico: `POST api.focusnfe.com.br/v2/nfsen`, com envio de **DPS** (Declaração de Prestação de Serviço) — o formato do padrão nacional, que substituiu o RPS do sistema municipal antigo.
- Emissão em volume via API, com retorno de XML/PDF, envio automático ao tomador (cliente final) e webhooks de status — é o mecanismo que permite ao ERPSb emitir a nota assim que o Pix é confirmado, sem intervenção manual.
- Enquadramento de cada serviço usa o item **6.02 da LC 116** ("esteticistas, tratamento de pele, depilação e congêneres") combinado com o código de tributação nacional (cClassTrib) correspondente.

**Custo:** aproximadamente R$ 0,05 por NFS-e emitida — custo unitário baixo mesmo em alto volume de emissões, típico de clínicas de estética com ticket recorrente.

**Por que o gate de validação importa:** cada serviço vendido pela clínica precisa ter seu enquadramento fiscal (item LC 116, código de tributação, CNAE, alíquota) validado com o contador antes de emitir em produção. Um serviço sem esse enquadramento confirmado não deve emitir nota automaticamente — cai em fila de pendência, evitando nota emitida com erro cadastral.

**Fontes:**
1. [Focus NFe - NFS-e Nacional](https://focusnfe.com.br/produtos/nfse-nacional/).
2. `ledger.md`, S5.4 (2026).
3. `tarefas/produto-2-blindagem.md`, parâmetro técnico 1–2 (2026).

**Relacionados:** [[erpsb]] · [[../conceitos/nfse-nacional-petropolis]] · [[../produtos/produto-2-blindagem-operacional-2027]]
