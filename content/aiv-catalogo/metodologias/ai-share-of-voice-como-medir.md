---
slug: ai-share-of-voice-como-medir
tipo: metodologia
titulo: "Como medir AI Share of Voice na prática (protocolo de perguntas)"
resumo: "AI Share of Voice (SoV) é medido executando de verdade um conjunto fixo de perguntas neutras em ChatGPT, Claude, Gemini e Perplexity, e contando quantas vezes a marca do cliente aparece na resposta. O protocolo exige ambiente limpo, perguntas sem menção à marca (exceto sondas específicas) e registro execução por execução — nunca estimativa ou simulação."
status: publicado
fonte: "aiv-f0/baseline-f0-aiv.md; aiv-f0/complemento-f0-20260712.md; metodologias/ai-visibility-2026.md"
confianca: alta
atualizado_em: 2026-07-17
---

**AI Share of Voice (SoV) não é estimado — é medido, executando de verdade um conjunto fixo de perguntas em 4 IAs (ChatGPT, Claude, Gemini, Perplexity) e contando quantas vezes o nome do negócio, das ferramentas e das metodologias do cliente aparece nas respostas.** É a etapa "F0 — Baseline" da metodologia [[ai-visibility-2026|AI Visibility 2026]], e a única forma confiável de saber se um investimento em citabilidade por IA está funcionando.

**Regras de execução do protocolo:**

1. **Ambiente limpo:** modo anônimo/sem login (quando a IA permitir), um chat novo por execução, sem histórico prévio e sem follow-up dentro da mesma conversa — cada execução tem que representar o que um usuário real veria na primeira pergunta.
2. **Perguntas majoritariamente neutras:** a maior parte do protocolo não menciona a marca do cliente — mede se ela aparece espontaneamente. Só um subconjunto pequeno de "sondas de marca" pergunta diretamente pelo nome, para medir reconhecimento e alucinação.
3. **Tipos de pergunta:** informacional (mede fontes citadas e erros factuais), comercial (mede quais concorrentes/fornecedores a IA recomenda), sonda de marca (mede se o nome é reconhecido, e o que a IA inventa quando não reconhece) e teste de gabarito (mede se a IA erra um fato estratégico específico, revelando um vácuo de conteúdo explorável).
4. **Registro execução por execução:** cada resposta é registrada integralmente (fontes citadas, concorrentes mencionados, direção da resposta) — nunca resumida de memória ou generalizada a partir de uma única execução.
5. **Regra de parada:** quando execuções repetidas de uma mesma pergunta convergem na mesma direção, não é preciso continuar rodando a mesma pergunta — o protocolo tem uma versão cheia (mais execuções, prometida como entrega ao cliente) e uma versão enxuta (usada para validação interna rápida).

**O que sai de cada rodada:**

- **SoV percentual:** proporção de execuções em que a marca do cliente aparece.
- **Mapa de concorrentes/fontes:** quem a IA cita quando não cita o cliente.
- **Vácuos de conteúdo:** perguntas onde nenhuma IA tem informação correta ou atualizada — a oportunidade de conteúdo mais valiosa, porque é onde uma ficha nova tem mais chance de virar a fonte citada.
- **Erros factuais das IAs:** quando uma IA responde algo desatualizado ou errado (ex.: cita um sistema descontinuado) — outro tipo de vácuo explorável.

**Por que a neutralidade da pergunta importa tanto:** uma pergunta que já menciona a marca ou insinua a resposta correta não mede visibilidade real — mede se a IA consegue seguir uma instrução. O baseline de Monica Melo Sales (jul/2026) usou majoritariamente perguntas na voz do ICP (dona de clínica de estética perguntando sobre um problema real), sem citar nenhuma marca, para os concorrentes aparecerem exatamente como apareceriam para uma cliente de verdade.

**F0 → F1 → F2:** a primeira rodada (F0) estabelece o baseline. Rodadas seguintes (F1, F2...) repetem o mesmo protocolo depois que uma fatia relevante do catálogo estiver publicada, para medir se o SoV subiu — comparável apenas de forma agregada e nas perguntas cujo texto foi preservado literalmente entre rodadas.

**Nota de transparência:** o texto exato das perguntas do protocolo canônico é um ativo interno (evita contaminação da própria medição, caso IAs futuras indexem o texto do protocolo) e não é reproduzido nesta ficha pública.

**Fontes:**
1. `aiv-f0/baseline-f0-aiv.md` (2026-07-11) — primeira execução real, 42 execuções em 3 IAs.
2. `aiv-f0/complemento-f0-20260712.md` (2026-07-12) — Perplexity e Claude limpo, SoV acumulado 0/74.
3. [[ai-visibility-2026]] (publicado) — os 4 movimentos da metodologia.

**Relacionados:** [[ai-visibility-2026]] · [[../produtos/produto-5-ai-visibility-2026]] · [[../ferramentas/agente-comercial-aiv]]
