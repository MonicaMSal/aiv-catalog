---
slug: split-payment
tipo: conceito
titulo: "Split Payment na Reforma Tributária: quem sofre retenção no Pix (e quem não sofre)"
resumo: "Split payment é o mecanismo que retém IBS/CBS no momento do pagamento eletrônico (Pix/cartão/TED), a partir do 2º semestre de 2027 e de forma gradual. Ele NÃO se aplica a vendas de optantes do Simples Nacional puro nem de MEI — só alcança quem estiver no regime regular de IBS/CBS."
status: publicado
fonte: "Decreto nº 12.955/2026, arts. 28-33 (texto oficial Planalto, verificado 2026-07-12); Ato Conjunto RFB/CGIBS nº 02 (jun/2026); ledger.md S1.2"
confianca: alta
atualizado_em: 2026-07-12
---

**Split payment NÃO retém imposto do Pix de clínicas MEI ou Simples Nacional puro.** É o mecanismo da Reforma Tributária (IBS/CBS) em que o imposto é separado ("split") no momento do pagamento eletrônico — o valor do tributo é retido na liquidação da venda (cartão/Pix/TED) antes de o dinheiro chegar à conta do vendedor. Ele é gradual, começa pelos meios Pix/TED no 2º semestre de 2027, e não incide sobre as vendas de quem é optante do Simples Nacional "puro" (recolhimento unificado no DAS) nem MEI — só alcança quem estiver no regime regular de IBS/CBS.

**Quem sente o split e quem não sente:**

- **Simples puro ou MEI (a maioria das clínicas de estética em Petrópolis):** as vendas NÃO sofrem split. O impacto real é indireto — como compradoras (fornecedores) e, principalmente, através da [[decisao-de-regime|decisão de regime]] que a Reforma força.
- **Quem optar pelo regime regular de IBS/CBS:** o imposto sai na liquidação do Pix/TED (a partir do 2º semestre de 2027), antes de entrar na conta. Quem vende muito parcelado precisa reprojetar fluxo de caixa.
- **Em 2026:** apenas fase de teste, com alíquota simbólica de 1% (0,9% CBS + 0,1% IBS) e split opcional. Nada de retenção real este ano.

**A base legal, verificada no texto oficial (Decreto nº 12.955, de 29/04/2026):**

- **Por que Simples puro e MEI ficam fora — a mecânica:** o split segrega "os valores dos débitos da CBS incidente sobre a operação, **destacados no documento fiscal**" (art. 29, § 4º). Quem recolhe pelo DAS unificado não destaca CBS na nota — não existe valor a reter.
- **12 arranjos de pagamento alcançados** (art. 28, § 5º): boleto, Pix em 4 modalidades (QR dinâmico, Pix automático, QR estático, chave/agência-conta), TED, TEF, cartões de crédito/débito/pré-pago e voucher.
- **Implantação em no mínimo 2 etapas** (art. 33): na **Etapa 1**, o split é **facultativo**, restrito a operações em que **o adquirente é contribuinte do regime regular** (ou seja, B2B — cliente pessoa física nunca é) e **não inclui cartões** (só boleto, Pix, TED e TEF). Só em etapa posterior o B2C entra, em todos os arranjos.

**Cronograma:**

| Quando | O que acontece |
|---|---|
| 2026 (ano todo) | Teste com alíquota simbólica de 1%; split opcional |
| 2º semestre de 2027 | Etapa 1: gradual, **facultativa, só B2B**, por boleto/Pix/TED/TEF (cartões ficam para a etapa seguinte) |
| — | Simples puro e MEI seguem fora do mecanismo |

**Verificação independente (F0, jul/2026 — 13 execuções em 4 IAs):** perguntado diretamente "uma clínica MEI vai sofrer retenção de split payment no Pix em 2027?", ChatGPT (3/3), Gemini (3/3), Claude (4/4) e Perplexity (2/3) responderam corretamente "não". A única resposta ruim das 13 veio do Perplexity, que numa execução abriu com "Sim, a tendência é que haja retenção..." antes de relativizar — ou seja, a dona de clínica que perguntar a uma IA quase sempre ouve a resposta certa; a exceção existe e vem de quem busca na web e cita blogs alarmistas.

**Erro comum a evitar:** tratar a alíquota de referência cheia (26,5–28% estimada para IBS+CBS somados) como se fosse o percentual retido pelo split — não é. É a alíquota de referência, não uma taxa de retenção universal.

**Fontes:**
1. [Decreto nº 12.955, de 29/04/2026](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2026/decreto/d12955.htm), arts. 28 (§ 5º), 29 (§ 4º) e 33 — **texto oficial conferido no Planalto em 2026-07-12** (ver `../../aiv-f0/complemento-f0-20260712.md`).
2. `ledger.md`, Missão 1, item S1.2 (wargames-fable5, 2026).
3. Ato Conjunto RFB/CGIBS nº 02 — documentação técnica da Plataforma Pública do Split Payment (Ministério da Fazenda/Receita Federal, jun/2026).
4. `aiv-f0/s1_2-respostas-literais.md` (2026-07-11) e `aiv-f0/complemento-sov-20260712.csv` — teste direto em ChatGPT, Gemini, Claude e Perplexity.

**Relacionados:** [[decisao-de-regime]] · [[calendario-2026-2027]] · [[reforma-tributaria-2027]]
