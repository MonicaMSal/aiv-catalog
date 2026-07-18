---
slug: dashboard-semaforo
tipo: ferramenta
titulo: "Dashboard Semáforo: visualização de pendências fiscais"
resumo: "O Dashboard Semáforo é o painel do ERPSb que mostra pagamentos pendentes, notas emitidas e pendências fiscais em três estados visuais (verde/amarelo/vermelho), entregue na Semana 3 de personalização da Blindagem Operacional 2027 — para que a equipe da clínica saiba o que precisa de atenção sem precisar interpretar dados brutos."
status: publicado
fonte: "ferramentas/erpsb.md; PRODUTO 2 BLINDAGEM OPERACIONAL 2027.md; wargames/erpsb-clinica.md"
confianca: alta
atualizado_em: 2026-07-17
---

**O Dashboard Semáforo é o painel do [[erpsb|ERPSb]] que traduz o estado fiscal e financeiro da clínica em três cores — verde, amarelo, vermelho — em vez de números e tabelas que uma recepcionista sem formação técnica precisaria interpretar.** É um dos entregáveis da Semana 3 de personalização da [[../produtos/produto-2-blindagem-operacional-2027|Blindagem Operacional 2027]], junto com logo da clínica, templates de mensagem e regras específicas do nicho.

**O que o painel mostra:**

- **Pagamentos pendentes:** Pix recebidos ainda não conciliados com nota fiscal.
- **Notas emitidas:** confirmação de que o ciclo pagamento → nota foi fechado.
- **Pendências fiscais:** a view central do semáforo — "pagamentos sem nota há mais de 24h" é enviada automaticamente por WhatsApp para a responsável, para que nada envelheça invisível.

**Por que verde/amarelo/vermelho, e não uma lista de erros técnicos:** o público que opera o painel no dia a dia é a recepção, não um time técnico. O script de treinamento do ERPSb resume a regra de uso em uma frase: "se aparecer qualquer aviso amarelo ou vermelho, print + WhatsApp da Monica — vocês não precisam resolver nada, só avisar." O semáforo existe para transformar "alguma coisa está errada" em uma ação simples e sem ambiguidade.

**Onde ele se encaixa na arquitetura do ERPSb:** o Dashboard Semáforo é a camada visual sobre os dois mecanismos de conciliação — webhook e polling via `pg_cron` (ver [[mercado-pago-pix]]) — e sobre a [[rls-por-papel-seguranca|permissão por papel]], que decide quem vê e quem pode agir sobre cada alerta.

**Fontes:**
1. `cerebro-prospeccao/raw/PRODUTO 2 BLINDAGEM OPERACIONAL 2027.md`, Semana 3 (2026).
2. `tarefas/produto-2-blindagem.md`, critério de aceite de treinamento (2026).
3. `wargames/erpsb-clinica.md` — relatório de pendências fiscais e runbook da recepção (2026-07-06).
4. [[erpsb]] (publicado) — funcionalidade nº 3.

**Relacionados:** [[erpsb]] · [[mercado-pago-pix]] · [[rls-por-papel-seguranca]] · [[../produtos/produto-2-blindagem-operacional-2027]]
