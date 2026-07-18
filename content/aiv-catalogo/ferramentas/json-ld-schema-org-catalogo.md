---
slug: json-ld-schema-org-catalogo
tipo: ferramenta
titulo: "JSON-LD/schema.org aplicado ao catálogo AIV"
resumo: "Cada página do catálogo AIV publica um bloco JSON-LD (schema.org) com Organization, Article e FAQPage, gerado automaticamente por scripts/generate.mjs a partir do frontmatter da ficha — é a camada técnica que ajuda uma IA a extrair autor, data e resposta direta sem precisar interpretar o HTML visual."
status: publicado
fonte: "aiv-catalog-site/scripts/generate.mjs"
confianca: alta
atualizado_em: 2026-07-17
---

**Todo HTML gerado para uma ficha do catálogo AIV carrega um `<script type="application/ld+json">` com dados estruturados schema.org — não é decoração, é o que permite a uma IA extrair "quem escreveu, quando e qual é a resposta direta" sem depender de interpretar texto solto na página.** A geração é automática: `scripts/generate.mjs` monta o JSON-LD a partir do frontmatter de cada ficha (`.md`) no momento do build.

**Os 3 tipos schema.org usados, dentro de um único `@graph`:**

1. **`Organization`:** identifica Monica Melo Sales como autora/publicadora de todo o catálogo — nome, descrição, URL — referenciada por `@id` em todas as outras entidades da página (evita repetir os mesmos dados em cada ficha).
2. **`Article`:** metadados da ficha em si — `headline` (título), `description` (resumo), `articleSection` (categoria: Conceitos, FAQ, Ferramentas etc.), `datePublished`/`dateModified` (do campo `atualizado_em`), autor e publicador apontando para a `Organization`.
3. **`FAQPage`:** com uma `Question` (o título da ficha) e uma `Answer` — o texto é a **resposta direta extraída automaticamente do primeiro parágrafo do corpo da ficha** (`respostaDireta`, via `firstParagraphText`). É por isso que toda ficha do catálogo é escrita com a resposta direta logo na primeira frase: esse parágrafo não é só estilo editorial, ele é literalmente o que vira `acceptedAnswer` no JSON-LD.

**Por que isso conecta direto com o padrão de escrita do catálogo:** o formato "resposta direta no 1º parágrafo, negrito, sem enrolação" que toda ficha segue não é só para leitura humana confortável — é o texto que o schema `FAQPage` expõe estruturadamente para IAs. Uma ficha que enrola no primeiro parágrafo produz um JSON-LD com resposta ruim, mesmo que o conteúdo completo seja bom.

**Onde mais o JSON-LD aparece:** a página inicial (`index.html`) do catálogo também tem seu próprio `@graph`, com `Organization` e um `CollectionPage` descrevendo o catálogo como um todo — sem a parte de `FAQPage`, que é específica de cada ficha individual.

**O que isso NÃO faz:** o JSON-LD não garante que uma IA vá citar a clínica — ele reduz o atrito para que, se a IA decidir usar a página como fonte, a extração dos dados corretos (autor, data, resposta) seja direta em vez de uma tentativa de leitura do HTML visual. É infraestrutura de citabilidade, não citação garantida.

**Fontes:**
1. `aiv-catalog-site/scripts/generate.mjs`, função `buildJsonLd` (linhas ~118-162) e geração da página inicial (~245-262).
2. [[../metodologias/ai-visibility-2026]] (publicado) — item 3 do método, "site otimizado para IA".

**Relacionados:** [[../metodologias/ai-visibility-2026]] · [[../produtos/produto-5-ai-visibility-2026]]
