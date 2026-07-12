# aiv-catalog-site

Gerador estático do Catálogo AIV (Monica Melo Sales) — HTML + JSON-LD + sitemap otimizados para indexação e citação por IAs (ChatGPT, Claude, Gemini, Perplexity).

## Estrutura

- `content/aiv-catalogo/` — cópia das fichas-fonte (`.md`, front-matter YAML + corpo). Fonte de verdade original: `wargames-fable5/aiv-catalogo/`. Ao publicar novas fichas lá, sincronize aqui antes de dar push.
- `scripts/generate.mjs` — lê as fichas `status: publicado`, gera `dist/`.
- `dist/` — output gerado (não versionado; buildado no CI).

## Build local

```
npm install
npm run build
```

Gera `dist/index.html`, `dist/conceitos/[slug].html`, `dist/api/[slug].json`, `dist/sitemap.xml`, `dist/robots.txt`.

## Deploy

Push em `main` dispara `.github/workflows/deploy.yml`, que builda e publica em GitHub Pages via Actions.

`SITE_URL` (default `https://monicamsal.github.io/aiv-catalog`) pode ser sobrescrito por variável de ambiente no workflow quando o domínio próprio (`monicamelosales.com.br`) for configurado.
