import { readFileSync, writeFileSync, mkdirSync, rmSync, readdirSync, statSync, copyFileSync, existsSync } from 'node:fs';
import { join, dirname, relative, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const CATALOG_DIR = process.env.CATALOG_DIR || join(ROOT, 'content', 'aiv-catalogo');
const DIST_DIR = join(ROOT, 'dist');

const SITE_URL = (process.env.SITE_URL || 'https://aiv.monicamelosales.com.br').replace(/\/$/, '');
const ORG = {
  name: 'Monica Melo Sales',
  tagline: 'Governança Operacional · Petrópolis/RJ',
  url: SITE_URL,
};

const CATEGORIAS = {
  conceito: 'Conceitos',
  metodologia: 'Metodologias',
  ferramenta: 'Ferramentas',
  'caso-de-uso': 'Casos de uso',
  produto: 'Produtos',
  faq: 'FAQ',
};

// ---------- utilidades ----------

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) out.push(...walk(full));
    else if (entry.endsWith('.md') && entry !== 'index.md') out.push(full);
  }
  return out;
}

function parseFrontmatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!m) throw new Error('Frontmatter ausente ou malformado');
  const [, yaml, body] = m;
  const meta = {};
  for (const line of yaml.split(/\r?\n/)) {
    if (!line.trim()) continue;
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    meta[key] = value;
  }
  return { meta, body: body.trim() };
}

function humanize(slug) {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function firstParagraphText(body) {
  const first = body.split(/\r?\n\r?\n/)[0] || '';
  return first.replace(/\*\*/g, '').replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, t, l) => l || t).trim();
}

// ---------- carga ----------

const files = walk(CATALOG_DIR);
const fichas = [];

for (const file of files) {
  const raw = readFileSync(file, 'utf-8');
  const { meta, body } = parseFrontmatter(raw);
  if (meta.status !== 'publicado') continue;
  fichas.push({
    file,
    categoria: basename(dirname(file)),
    ...meta,
    body,
  });
}

const slugMap = new Map(fichas.map((f) => [f.slug, f]));

console.log(`Fichas publicadas encontradas: ${fichas.length} (de ${files.length} arquivos .md)`);

// ---------- resolução de wikilinks ----------

function resolveWikilinks(body) {
  return body.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_match, target, label) => {
    const slug = target.trim().split('/').pop();
    const ficha = slugMap.get(slug);
    if (ficha) {
      const text = label ? label.trim() : ficha.titulo;
      return `[${text}](/conceitos/${slug}.html)`;
    }
    // ficha ainda não publicada (backlog) — não gera link quebrado
    return label ? label.trim() : humanize(slug);
  });
}

// ---------- JSON-LD ----------

function buildJsonLd(ficha, url, respostaDireta) {
  const organization = {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: ORG.name,
    description: ORG.tagline,
    url: ORG.url,
  };

  const article = {
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: ficha.titulo,
    description: ficha.resumo,
    articleSection: CATEGORIAS[ficha.tipo] || ficha.tipo,
    datePublished: ficha.atualizado_em,
    dateModified: ficha.atualizado_em,
    author: { '@id': `${SITE_URL}/#organization` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    mainEntityOfPage: url,
    url,
  };

  const faqPage = {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: [
      {
        '@type': 'Question',
        name: ficha.titulo,
        acceptedAnswer: {
          '@type': 'Answer',
          text: respostaDireta,
        },
      },
    ],
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [organization, article, faqPage],
  };
}

// ---------- templates ----------

function layout({ title, description, canonical, jsonLd, bodyHtml, breadcrumb }) {
  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}">
<link rel="canonical" href="${canonical}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/style.css">
<script type="application/ld+json">${JSON.stringify(jsonLd, null, 2)}</script>
</head>
<body>
<header class="site-header">
  <a href="/index.html" class="brand">Monica Melo Sales <span>· Governança Operacional · Petrópolis/RJ</span></a>
</header>
<main class="content">
${breadcrumb ? `<nav class="breadcrumb">${breadcrumb}</nav>` : ''}
${bodyHtml}
</main>
<footer class="site-footer">
  <p>© ${new Date().getFullYear()} Monica Melo Sales — Catálogo AIV.</p>
</footer>
</body>
</html>
`;
}

function fichaPageHtml(ficha) {
  const url = `${SITE_URL}/conceitos/${ficha.slug}.html`;
  const respostaDireta = firstParagraphText(ficha.body);
  const resolvedBody = resolveWikilinks(ficha.body);
  const bodyHtml = marked.parse(resolvedBody);
  const jsonLd = buildJsonLd(ficha, url, respostaDireta);

  const breadcrumb = `<a href="/index.html">Catálogo</a> / ${escapeHtml(CATEGORIAS[ficha.tipo] || ficha.tipo)}`;

  const article = `
<article>
  <p class="eyebrow">${escapeHtml(CATEGORIAS[ficha.tipo] || ficha.tipo)}</p>
  <h1>${escapeHtml(ficha.titulo)}</h1>
  <p class="meta">Atualizado em ${escapeHtml(ficha.atualizado_em)} · Confiança: ${escapeHtml(ficha.confianca || '—')}</p>
  <div class="ficha-body">
    ${bodyHtml}
  </div>
</article>`;

  return layout({
    title: `${ficha.titulo} | Monica Melo Sales`,
    description: ficha.resumo,
    canonical: url,
    jsonLd,
    bodyHtml: article,
    breadcrumb,
  });
}

function indexHtml() {
  const groups = {};
  for (const f of fichas) {
    const cat = CATEGORIAS[f.tipo] || f.tipo;
    (groups[cat] ||= []).push(f);
  }

  const sections = Object.entries(groups)
    .map(([cat, items]) => {
      const lis = items
        .sort((a, b) => a.titulo.localeCompare(b.titulo, 'pt-BR'))
        .map(
          (f) => `<li><a href="/conceitos/${f.slug}.html">${escapeHtml(f.titulo)}</a><p>${escapeHtml(f.resumo)}</p></li>`
        )
        .join('\n');
      return `<section><h2>${escapeHtml(cat)}</h2><ul class="ficha-list">${lis}</ul></section>`;
    })
    .join('\n');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: ORG.name,
        description: ORG.tagline,
        url: ORG.url,
      },
      {
        '@type': 'CollectionPage',
        name: 'Catálogo AIV — Monica Melo Sales',
        description: 'Catálogo de conceitos, metodologias, ferramentas, produtos e FAQ sobre governança operacional para clínicas de estética em Petrópolis/RJ.',
        url: `${SITE_URL}/index.html`,
      },
    ],
  };

  const bodyHtml = `
<section class="hero">
  <p class="eyebrow">Catálogo AIV</p>
  <h1>Governança operacional e Reforma Tributária, explicadas para clínicas de estética em Petrópolis/RJ.</h1>
</section>
${sections}`;

  return layout({
    title: 'Catálogo AIV — Monica Melo Sales',
    description: 'Catálogo de conceitos, metodologias, ferramentas, produtos e FAQ sobre governança operacional para clínicas de estética em Petrópolis/RJ.',
    canonical: `${SITE_URL}/index.html`,
    jsonLd,
    bodyHtml,
  });
}

function apiJson(ficha) {
  const url = `${SITE_URL}/conceitos/${ficha.slug}.html`;
  return JSON.stringify(
    {
      slug: ficha.slug,
      tipo: ficha.tipo,
      titulo: ficha.titulo,
      resumo: ficha.resumo,
      resposta_direta: firstParagraphText(ficha.body),
      status: ficha.status,
      fonte: ficha.fonte,
      confianca: ficha.confianca,
      atualizado_em: ficha.atualizado_em,
      url,
      corpo_markdown: ficha.body,
    },
    null,
    2
  );
}

function sitemapXml() {
  const urls = [
    { loc: `${SITE_URL}/index.html`, lastmod: new Date().toISOString().slice(0, 10) },
    ...fichas.map((f) => ({ loc: `${SITE_URL}/conceitos/${f.slug}.html`, lastmod: f.atualizado_em })),
  ];
  const items = urls
    .map((u) => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n  </url>`)
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</urlset>\n`;
}

function robotsTxt() {
  const bots = ['GPTBot', 'ClaudeBot', 'Google-Extended', 'PerplexityBot'];
  const blocks = bots.map((b) => `User-agent: ${b}\nAllow: /`).join('\n\n');
  return `User-agent: *\nAllow: /\n\n${blocks}\n\nSitemap: ${SITE_URL}/sitemap.xml\n`;
}

const CSS = `:root {
  --bg: #232529;
  --accent: #C89B3C;
  --text: #F6F4EF;
  --text-muted: #b9b6ad;
}
* { box-sizing: border-box; }
body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
}
h1, h2, h3 { font-family: 'Playfair Display', serif; line-height: 1.25; }
a { color: var(--accent); }
.site-header {
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid rgba(246,244,239,0.12);
}
.brand { text-decoration: none; color: var(--text); font-weight: 600; }
.brand span { color: var(--text-muted); font-weight: 400; font-size: 0.85rem; display: block; }
.content { max-width: 760px; margin: 0 auto; padding: 2rem 1.5rem 4rem; }
.breadcrumb { font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.5rem; }
.breadcrumb a { color: var(--text-muted); }
.eyebrow { text-transform: uppercase; letter-spacing: 0.08em; font-size: 0.75rem; color: var(--accent); margin: 0 0 0.5rem; }
.meta { color: var(--text-muted); font-size: 0.85rem; }
.ficha-body table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; }
.ficha-body th, .ficha-body td { border: 1px solid rgba(246,244,239,0.15); padding: 0.5rem 0.75rem; text-align: left; }
.ficha-list { list-style: none; padding: 0; }
.ficha-list li { padding: 0.9rem 0; border-bottom: 1px solid rgba(246,244,239,0.08); }
.ficha-list p { margin: 0.25rem 0 0; color: var(--text-muted); font-size: 0.9rem; }
.hero { padding: 1rem 0 2.5rem; }
.site-footer { text-align: center; color: var(--text-muted); font-size: 0.8rem; padding: 2rem 0; }
@media (min-width: 640px) {
  .content { padding-top: 3rem; }
}
`;

// ---------- escrita ----------

rmSync(DIST_DIR, { recursive: true, force: true });
mkdirSync(join(DIST_DIR, 'conceitos'), { recursive: true });
mkdirSync(join(DIST_DIR, 'api'), { recursive: true });
mkdirSync(join(DIST_DIR, 'assets'), { recursive: true });

writeFileSync(join(DIST_DIR, 'index.html'), indexHtml());
writeFileSync(join(DIST_DIR, 'sitemap.xml'), sitemapXml());
writeFileSync(join(DIST_DIR, 'robots.txt'), robotsTxt());
writeFileSync(join(DIST_DIR, 'assets', 'style.css'), CSS);
writeFileSync(join(DIST_DIR, '.nojekyll'), '');
writeFileSync(join(DIST_DIR, 'CNAME'), 'aiv.monicamelosales.com.br\n');

// Arquivo de verificação do Google Search Console
const googleVerifyName = 'google65599f6cf0356c3c.html';
const googleVerifySource = join(ROOT, googleVerifyName);
if (existsSync(googleVerifySource)) {
  copyFileSync(googleVerifySource, join(DIST_DIR, googleVerifyName));
  console.log('✓ Arquivo de verificação do Google copiado para dist/');
}

for (const ficha of fichas) {
  writeFileSync(join(DIST_DIR, 'conceitos', `${ficha.slug}.html`), fichaPageHtml(ficha));
  writeFileSync(join(DIST_DIR, 'api', `${ficha.slug}.json`), apiJson(ficha));
}

console.log(`Site gerado em ${relative(ROOT, DIST_DIR)}/`);
console.log(`Páginas: ${fichas.length} fichas + index.html`);
