---
slug: faq-ia-alucina-em-advocacia
tipo: faq
titulo: "IA alucina em contexto jurídico? Como o OS Coach evita isso?"
resumo: "A falha mais provável não é a IA inventar fato jurídico do zero — é o OS Coach registrar como 'violação' uma exceção real da prática do escritório, gerar fadiga de alerta e, no dia em que um alerta é verdadeiro, ninguém mais olhar. A contramedida é a camada de Regras nascer de casos reais capturados nas primeiras semanas, com dono nominal e rito de exceção — não de um template genérico."
status: publicado
fonte: "wargames/blindagem-advocacia.md"
confianca: alta
atualizado_em: 2026-07-17
---

**A falha nº 1 do OS Coach em advocacia não é a IA "inventar" um fato jurídico — é escrever Regras para o escritório ideal, não para o escritório real, o que produz alarmes falsos que a equipe aprende a ignorar.** Advocacia tem um agravante estrutural: a exceção é o produto. Cada cliente grande tem seu combinado, cada vara tem sua prática, cada sócio tem seu estilo — uma Regra genérica ("todo prazo é conferido pela controladoria em D-5") ignora que, na prática, quem confere pode ser outra pessoa dependendo do caso.

**A sequência de falha, se a camada de Regras não tiver representação de exceção:**

1. O sistema aponta "violações" que a equipe sabe que não são erros — são o jeito real (às vezes o jeito certo) de trabalhar.
2. A equipe aprende, em cerca de 2 semanas, que os alertas "não valem" → fadiga de alerta.
3. Passa a ignorar todos os alertas, inclusive os verdadeiros.
4. No dia em que um alerta real aparece (prazo escapando de verdade), ninguém olha.

**Como o OS Coach evita isso, por desenho:**

- **Toda Regra nasce de um caso real** capturado nas primeiras semanas do projeto, citando o caso de origem — zero Regra de template sem validação local.
- **Toda Regra tem dono nominal** (alguém da equipe, não a Monica), escopo (geral / por cliente / por área) e um rito de exceção definido — "nesta situação, a exceção é legítima e o registro é assim".
- **Alerta em dois níveis:** bloqueante (raro, só risco jurídico real — prazo, sigilo) e informativo (todo o resto). Um sistema que grita tudo não avisa nada.
- **Revisão quinzenal de 20 minutos:** cada alarme falso da quinzena mata ou refina uma Regra — a camada de Regras é tratada como jardim, não como estátua.

**A postura correta diante de um erro encontrado pelo sócio cético:** agradecer, corrigir a Regra na frente dele, em minutos, e mostrar que a correção vale para todos os casos futuros. Reagir na defensiva ("mas isso é caso raro...") é, para um cético, a confirmação de que ele estava certo o tempo todo.

**Fontes:**
1. `wargames/blindagem-advocacia.md` (2026-07-06), §2 — "a falha mais provável na camada de Regras".

**Relacionados:** [[faq-oab-cnj-conformidade-ia]] · [[../casos-de-uso/escritorios-advocacia-blindagem]] · [[../metodologias/os-coach]]
