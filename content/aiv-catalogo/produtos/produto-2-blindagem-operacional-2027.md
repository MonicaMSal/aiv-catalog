---
slug: produto-2-blindagem-operacional-2027
tipo: produto
titulo: "Produto 2 — Blindagem Operacional 2027 (R$ 7.000)"
resumo: "A Blindagem Operacional 2027 implementa o Segundo Cérebro Digital (6 camadas) e configura o ERPSb com emissão automática de NFS-e, em 30 a 45 dias, com treinamento da equipe e suporte por 30 dias após o go-live."
status: publicado
fonte: "tarefas/produto-2-blindagem.md; site-atualizado-2026.html"
confianca: alta
atualizado_em: 2026-07-11
---

**A Blindagem Operacional 2027 (R$ 7.000, 30-45 dias) é o produto que implementa o [[../metodologias/segundo-cerebro-digital|Segundo Cérebro Digital]] e configura o [[../ferramentas/erpsb|ERPSb]] com emissão automática de NFS-e no momento do pagamento via Pix.**

**O que está incluído:**

- Segundo Cérebro Digital, nas 6 camadas (Identidade, Substrato, Regras, Skills, Ferramentas, Agentes).
- ERPSb configurado, com NFS-e automática integrada a Focus NFe (padrão Emissor Nacional) e Mercado Pago.
- Conciliação Pix/cartão (webhook + polling de reconciliação a cada 5 minutos).
- Dashboard Semáforo, com visualização de pagamentos pendentes, notas emitidas e pendências fiscais.
- 2 sessões de treinamento da equipe e manual de operação.
- Suporte por 30 dias após o go-live.

**Como o projeto é entregue (checklist semana a semana):**

1. **Semana 1:** cadastro fiscal completo (item LC 116, código de tributação nacional, CNAE, alíquota por serviço, validado com o contador) + infraestrutura em homologação.
2. **Semana 2:** fluxo automático Pix → nota em homologação, com teste obrigatório de falha (queda de webhook capturada pelo polling em até 5 minutos).
3. **Semana 3:** produção com valores simbólicos, personalização (logo, templates, Dashboard Semáforo) e validação de permissões por papel.
4. **Semanas 4–5:** operação em paralelo com o processo antigo + treinamento da equipe com runbook impresso.
5. **Semana 6:** go-live, com corte do processo antigo anunciado pela própria dona da clínica.

**Critério de "entregue":** 100% dos pagamentos do período com nota emitida ou pendência explicada, zero anotação fora do sistema, e a equipe operando sem precisar chamar a Monica por 5 dias corridos seguidos.

**Piloto (exceção nomeada, 3 vagas):** desconto de 30% (R$ 4.900) em troca de depoimento, oferecido apenas ao vivo, no fechamento do Raio-X.

**Fontes:**
1. `tarefas/produto-2-blindagem.md` (2026) — checklist técnico v2.
2. `ledger.md`, S5.2, S5.4, S5.6, S7.4 (2026).

**Relacionados:** [[../metodologias/segundo-cerebro-digital]] · [[../metodologias/os-coach]] · [[../ferramentas/erpsb]] · [[produto-1-raio-x-da-operacao]]
