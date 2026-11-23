---
slug: enquadramento-cnae-602-lc116
tipo: conceito
titulo: "Enquadramento fiscal: CNAE × item 6.02 da LC 116 × código de tributação nacional"
resumo: "A NFS-e Nacional exige que cada serviço seja enquadrado no item correto da LC 116 (estética pura = item 6.02) combinado com o novo código de tributação nacional (cClassTrib) da Receita Federal. É esse enquadramento — não o nome do serviço no cardápio — que define a alíquota de ISS/IBS/CBS aplicada."
status: publicado
fonte: "conceitos/nfse-nacional-petropolis.md; casos-de-uso/clinicas-massoterapia.md"
confianca: alta
atualizado_em: 2026-11-23
---

**O enquadramento fiscal correto de um serviço não é o nome dele no cardápio da clínica — é a combinação entre o item da LC 116 e o código de tributação nacional (cClassTrib) usados na emissão da NFS-e.** Desde que Petrópolis passou a emitir exclusivamente pelo Emissor Nacional (jan/2026), essa combinação é obrigatória em toda nota — e é ela que determina a alíquota de ISS e, na Reforma, a de IBS/CBS.

**As duas peças do enquadramento:**

1. **Item da LC 116 (Lei Complementar 116/2003):** lista nacional de serviços tributáveis por ISS. Estética pura ("esteticistas, tratamento de pele, depilação e congêneres") cai no **item 6.02**. Serviços médicos regulamentados (dermatologia, cirurgia) caem em itens diferentes, ligados a saúde.
2. **Código de tributação nacional (cClassTrib):** tabela publicada pela Receita Federal, em correlação com a LC 116 e a NBS (Nomenclatura Brasileira de Serviços), usada na emissão da NFS-e Nacional. É essa correlação — não só o item da LC 116 isoladamente — que o sistema do Emissor Nacional valida nota a nota. A transição completa dessa tabela está prevista até 2032.

**Por que isso importa mais na Reforma do que importava antes:** o mesmo enquadramento que hoje define a alíquota de ISS vai, no regime novo, também ser conferido contra a lista de serviços de saúde com redução de 60% de [[reducao-60-saude|IBS/CBS]] (Anexo III da LC 214/2025); o CNAE ou o nome do serviço, isoladamente, não garantem o benefício. Um enquadramento errado hoje (item ou cClassTrib incorretos) tende a se repetir automaticamente depois de 2027, porque o sistema herda a mesma lógica de classificação.

**Onde isso pega mais forte (clínicas na fronteira saúde×estética):**

- **Massoterapia, drenagem linfática, quiropraxia:** o mesmo prestador pode ter procedimentos com tese terapêutica defensável e procedimentos puramente estéticos — o CNAE e o registro corretos, item a item, é o que separa um enquadramento do outro (ver [[../casos-de-uso/clinicas-massoterapia]]).
- **Dermatologia e harmonização facial:** vivem na fronteira mais literal entre "terapêutico/reparador" e "puramente estético" — segregar a receita por enquadramento evita pagar imposto a mais (ver [[../casos-de-uso/clinicas-dermatologia]] e [[../casos-de-uso/clinicas-harmonizacao-facial]]).

**O ritual que não muda com a Reforma:** validar CNAE × item da LC 116 × código de tributação, serviço por serviço, junto com o contador da clínica, continua sendo pré-requisito para qualquer automação de nota — inclusive para a integração do [[../ferramentas/erpsb|ERPSb]] com a Focus NFe. Automatizar emissão de nota sobre um enquadramento errado só automatiza o erro.

**Fontes:**
1. [[nfse-nacional-petropolis]] — item 6.02 da LC 116, tabela cClassTrib, endpoint `POST api.focusnfe.com.br/v2/nfsen` (publicado, 2026-07-11/12).
2. [[../casos-de-uso/clinicas-massoterapia]] — `cerebro-prospeccao/wiki/nichos/massoterapia.md`.
3. LC 116/2003, item 6.02 (lista nacional de serviços tributáveis por ISS).

**Relacionados:** [[nfse-nacional-petropolis]] · [[reducao-60-saude]] · [[../casos-de-uso/clinicas-massoterapia]] · [[../casos-de-uso/clinicas-dermatologia]] · [[../casos-de-uso/clinicas-harmonizacao-facial]]
