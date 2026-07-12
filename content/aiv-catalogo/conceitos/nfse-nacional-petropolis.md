---
slug: nfse-nacional-petropolis
tipo: conceito
titulo: "NFS-e Nacional em Petrópolis: emissão obrigatória pelo Emissor Nacional desde janeiro de 2026"
resumo: "Desde janeiro de 2026, Petrópolis emite NFS-e exclusivamente pelo Emissor Nacional — o sistema municipal 'Nota Imperial' foi descontinuado. Quem ainda não emite nota nesse padrão já está em desconformidade hoje, não em risco futuro."
status: publicado
fonte: "Decreto Municipal nº 334/2025 (DO de Petrópolis nº 7310, 23/12/2025 — PDF verificado 2026-07-12); Lei Municipal nº 6.307/2005; Guia de migração — Prefeitura de Petrópolis (2026)"
confianca: alta
atualizado_em: 2026-07-12
---

**Desde a competência de janeiro de 2026, a emissão de NFS-e em Petrópolis é feita exclusivamente pelo Emissor Nacional — o sistema municipal "Nota Imperial" foi descontinuado.** Isso não é uma mudança futura ligada à Reforma Tributária de 2027: é um fato já em vigor. Clínicas que ainda emitem nota pelo sistema antigo, ou que não emitem nota, estão em desconformidade hoje.

**Base legal (verificada no Diário Oficial):** o **Decreto Municipal nº 334, de 23 de dezembro de 2025** "institui a obrigatoriedade e regulamenta o uso exclusivo da NFS-e no Padrão Nacional (Emissor Nacional) [...] no âmbito do Município de Petrópolis/RJ", com fundamento no art. 1º, parágrafo único, da **Lei Municipal nº 6.307/2005**. Detalhe que muda o público da conversa: segundo o guia oficial da prefeitura, **os MEI já usam o Emissor Nacional desde 2023** — quem migrou agora em jan/2026 foram as demais empresas (ME/Simples não-MEI e regime normal).

**O que muda na prática:**

- Emissão via padrão nacional, endpoint técnico `POST api.focusnfe.com.br/v2/nfsen` (para quem integra por API, como o [[../ferramentas/erpsb|ERPSb]]), com envio de **DPS** (Declaração de Prestação de Serviço) — não mais RPS, do padrão municipal antigo.
- Enquadramento do serviço prestado usa o item da **LC 116** (estética = item 6.02, "esteticistas, tratamento de pele, depilação e congêneres") combinado com a tabela de **códigos de tributação nacional (cClassTrib)**, publicada pela Receita Federal em correlação com a LC 116 e a NBS — transição prevista até 2032.
- O ritual de validar CNAE × código de tributação × alíquota de ISS por serviço, junto com o contador da clínica, continua obrigatório e não muda com a Reforma — é pré-requisito para qualquer automação.

**Por que isso importa mais do que parece (medido no F0, jul/2026):** o ChatGPT ainda responde sobre emissão de nota em Petrópolis ensinando o sistema antigo ("Nota Fiscal Imperial") e o Claude responde com procedimento municipal genérico, sem citar o Emissor Nacional — erros/lacunas factuais hoje. Só o Perplexity acerta em cheio (cita o Decreto 334/2025, com fonte na própria prefeitura). O vácuo de conteúdo correto e citável existe em 3 das 4 grandes IAs.

**Consequência para quem ainda não emite:** o "cerco da formalização" já fechou — não é um problema que a Reforma vai criar em 2027, é uma desconformidade presente. Isso torna a conversa sobre automação de nota (ver [[../produtos/produto-2-blindagem-operacional-2027|Blindagem Operacional 2027]]) mais urgente do que a decisão de regime em si.

**Fontes:**
1. **Decreto Municipal nº 334, de 23/12/2025** — Diário Oficial de Petrópolis, ano XXXIV, nº 7310 (23/12/2025). [PDF oficial da prefeitura](https://www.petropolis.rj.gov.br/pmp/phocadownload/destaques/2026/decreto_nota_nacional.pdf); cópia verificada em `../../aiv-f0/fontes/decreto-334-2025-petropolis.pdf` (2026-07-12).
2. [Guia de migração para a NFS-e Nacional — Prefeitura de Petrópolis](https://www.petropolis.rj.gov.br/pmp/index.php/guia-de-migracao-para-a-nfs-e-nacional-em-petropolis) (2026) — inclui o fato "MEI usa o Emissor Nacional desde 2023".
3. `ledger.md`, S5.4 (2026) e `cerebro-prospeccao/wiki/prazos/calendario-2026-2027.md` (2026).
4. [Focus NFe — NFS-e Nacional](https://focusnfe.com.br/produtos/nfse-nacional/).
5. `aiv-f0/baseline-f0-aiv.md`, oportunidade nº 3 (2026-07-11) + `aiv-f0/complemento-sov-20260712.csv` (B4, 4 IAs).

**Relacionados:** [[calendario-2026-2027]] · [[../ferramentas/erpsb]] · [[../ferramentas/focus-nfe]]
