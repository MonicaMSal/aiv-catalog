---
slug: faq-split-payment-mei-detalhado
tipo: faq
titulo: "Split payment nunca vai atingir o MEI?"
resumo: "Correto: split payment não retém imposto do Pix de MEI nem de Simples Nacional puro, em nenhuma fase prevista da Reforma Tributária — o mecanismo só alcança quem estiver no regime regular de IBS/CBS. Isso vale hoje e continua valendo depois de 2027; não é uma isenção temporária."
status: publicado
fonte: "conceitos/split-payment.md; conceitos/teto-mei-81k.md"
confianca: alta
atualizado_em: 2026-07-17
---

**Correto — split payment não retém imposto do Pix de quem é MEI ou Simples Nacional puro, e isso não é uma isenção temporária que vai mudar depois: é assim que o mecanismo foi desenhado.** O split só segrega o valor de CBS/IBS **destacado no documento fiscal** (Decreto nº 12.955/2026, art. 29, § 4º) — quem recolhe pelo DAS unificado (MEI e Simples puro) não destaca esse valor na nota, então não existe o que reter.

**Por que essa garantia é estrutural, não uma promessa política:** o mecanismo de retenção depende tecnicamente de o valor do imposto aparecer separado no documento da venda. Mudar isso exigiria mudar a própria lógica de apuração do Simples/MEI, não só uma regra do split — é por isso que a resposta se mantém estável mesmo com o cronograma de implantação avançando.

**O que PODE mudar para um MEI ou Simples puro, e não é split payment:**

- **MEI:** passa a emitir nota para toda venda (inclusive consumidor final) a partir de 1º de janeiro de 2027 — mudança operacional, não retenção de imposto (ver [[../conceitos/teto-mei-81k]]).
- **Simples:** tem a opção — não obrigação — de migrar para o regime regular na janela de setembro de 2026; só quem migrar passa a sentir o split (ver [[../conceitos/decisao-de-regime]]).

**Verificação feita:** testamos essa pergunta diretamente em 4 IAs (ChatGPT, Gemini, Claude, Perplexity) em julho/2026 — 12 de 13 execuções responderam corretamente "não". A única resposta problemática veio do Perplexity, que abriu uma execução com "Sim, a tendência é..." antes de se corrigir — sinal de que buscas na web ocasionalmente puxam blogs alarmistas, mesmo quando o texto legal é claro.

**Fontes:**
1. [[../conceitos/split-payment]] (publicado) — Decreto nº 12.955/2026, arts. 28-33.
2. [[../conceitos/teto-mei-81k]] (publicado) — obrigação de nota do MEI a partir de 2027.
3. `aiv-f0/s1_2-respostas-literais.md` (2026-07-11) — teste de acurácia em 4 IAs.

**Relacionados:** [[../conceitos/split-payment]] · [[../conceitos/teto-mei-81k]] · [[faq-quando-comeca-split-de-verdade]]
