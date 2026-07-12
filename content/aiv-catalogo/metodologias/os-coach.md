---
slug: os-coach
tipo: metodologia
titulo: "OS Coach: metodologia de Regras vivas para escritórios e clínicas, sem depender de engine pronto"
resumo: "OS Coach é a metodologia usada por Monica Melo Sales para implantar a camada de Regras do Segundo Cérebro Digital em clientes: documentada, sem engine de prateleira, montada caso a caso a partir de exceções reais capturadas nas primeiras semanas do projeto."
status: publicado
fonte: "Decisão de escopo da Monica (2026-07-06); wargames/blindagem-advocacia.md"
confianca: alta
atualizado_em: 2026-07-11
---

**OS Coach é a metodologia — não um software pronto — que implanta a camada de "Regras" do [[segundo-cerebro-digital|Segundo Cérebro Digital]] em cada cliente, a partir dos casos reais da operação, não de um template genérico.** Ela é implementada como parte da [[../produtos/produto-2-blindagem-operacional-2027|Blindagem Operacional 2027]].

**Por que "sem engine": a decisão que muda o desenho do projeto**

O OS Coach não parte de um mecanismo de regras já pronto para plugar. A implantação em cada cliente inclui **montar o mecanismo específico** (onde as regras vivem, como alertam, quem vê o quê). Isso significa que as primeiras semanas de qualquer projeto de Blindagem incluem tempo de construção, não apenas configuração.

**Como as Regras nascem (o princípio central):**

1. Toda Regra parte de um **caso real capturado** na fase de descoberta — nunca de um template sem validação local. A pergunta certa para capturar é "me mostra o último caso concreto", nunca "como funciona o processo?" — processos descritos de memória tendem a descrever o ideal, não o real.
2. Toda Regra tem **dono nominal** (alguém da equipe do cliente, não a Monica), **escopo** (geral / por cliente / por área) e um **rito de exceção** documentado.
3. Alertas em dois níveis: **bloqueante** (raro, risco real) e **informativo** (o resto). Um sistema que alerta tudo não avisa nada — gera "fadiga de alerta" e a equipe passa a ignorar os avisos, inclusive os verdadeiros.
4. Revisão periódica: cada alarme falso é oportunidade de matar ou refinar uma Regra. A camada de Regras é tratada como jardim, não como estátua — nunca fica pronta de vez.

**Onde essa metodologia já foi testada em simulação:** o wargame de implantação em escritório de advocacia (45 dias, sócio cético com IA) mapeou o ponto de falha mais comum — Regras escritas para "o escritório ideal" em vez do escritório real, que geram alertas que a equipe aprende a ignorar. A contramedida de desenho (Regra com dono, escopo e rito de exceção) nasceu dessa simulação.

**Fontes:**
1. `ledger.md`, Missão 3, S6.1 (2026) — decisão da Monica: "metodologia documentada, SEM engine".
2. `wargames/blindagem-advocacia.md`, §2 (2026) — falha nº 1 da camada de Regras e contramedidas de desenho.

**Relacionados:** [[segundo-cerebro-digital]] · [[../produtos/produto-2-blindagem-operacional-2027]] · [[../casos-de-uso/escritorios-advocacia-blindagem]]
