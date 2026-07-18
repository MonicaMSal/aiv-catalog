import { createClient } from "@supabase/supabase-js";
import OpenAI from "openai";
import "dotenv/config";

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
const openrouter = new OpenAI({ baseURL: "https://openrouter.ai/api/v1", apiKey: process.env.OPENROUTER_API_KEY });

// Marcas/termos monitorados (mesmo conjunto do baseline F0 em aiv-f0/baseline-f0-aiv.md)
const MARCAS_PARA_MONITORAR = [
  "Monica Melo Sales",
  "Monica Melo",
  "ERPSb",
  "Segundo Cérebro Digital",
];

// Prompts NEUTROS, na voz do ICP (dona de clínica de estética em Petrópolis/RJ) —
// nenhum menciona a marca, para não viciar a medição de Share of Voice.
// Cobrem os mesmos temas do catálogo público (Reforma Tributária, NFS-e, governança
// operacional, automação de nota), mas com redação própria: as 20 perguntas do
// questionário canônico F0 (aiv-f0/questionario-canonico-f0.md) são marcadas
// "NÃO publicar" e este repositório é público — não reproduzi-las aqui.
const PROMPTS_DE_TESTE = [
  "Minha clínica de harmonização facial em Petrópolis está no Simples Nacional. Preciso decidir alguma coisa por causa da Reforma Tributária este ano?",
  "Como separar a receita de procedimento estético da receita médica para não perder a redução de imposto de serviços de saúde?",
  "Existe algum sistema que emite nota fiscal automaticamente quando o cliente paga por Pix, para clínica de estética?",
  "Quem em Petrópolis ajuda clínica de estética a organizar processos e reduzir dependência da dona do negócio?",
  "Massoterapia e drenagem linfática têm direito a alguma redução de imposto na Reforma Tributária?",
  "Existe um diagnóstico pago para identificar onde uma clínica de estética está perdendo dinheiro na operação?",
];

const MODELOS = [
  { id: "openai/gpt-4o", nome: "ChatGPT" },
  { id: "anthropic/claude-3.5-sonnet", nome: "Claude" },
  { id: "google/gemini-2.0-flash-exp:free", nome: "Gemini" },
  { id: "perplexity/sonar", nome: "Perplexity" },
];

function normalizarTexto(texto: string): string {
  return texto.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

function contarMencoes(resposta: string) {
  const respostaNorm = normalizarTexto(resposta);
  return MARCAS_PARA_MONITORAR.map((marca) => ({
    marca,
    count: (respostaNorm.match(new RegExp(normalizarTexto(marca), "g")) || []).length,
  }));
}

async function chamarIA(modeloId: string, prompt: string): Promise<string> {
  try {
    const response = await openrouter.chat.completions.create({
      model: modeloId,
      // Sem instrução de sistema além de "responda normalmente": qualquer texto que
      // empurre a IA a citar a marca invalida a medição de Share of Voice.
      messages: [{ role: "user", content: prompt }],
      temperature: 0.2,
    });
    return response.choices[0]?.message?.content || "";
  } catch (error) {
    console.error(`[ASV] Erro ao chamar ${modeloId}:`, error);
    return "";
  }
}

async function medirASV() {
  console.log(`[ASV] Iniciando medição em ${new Date().toISOString()}`);
  const resultados: any[] = [];
  let totalMencoesCliente = 0;
  let totalMencoesGeral = 0;

  for (const modelo of MODELOS) {
    for (const prompt of PROMPTS_DE_TESTE) {
      const resposta = await chamarIA(modelo.id, prompt);
      if (!resposta) continue;

      const mencoes = contarMencoes(resposta);
      const mencoesCliente = mencoes.reduce((acc, m) => acc + m.count, 0);

      totalMencoesCliente += mencoesCliente;
      totalMencoesGeral += 1; // conta 1 por resposta avaliada

      resultados.push({
        modelo: modelo.nome,
        prompt,
        resposta: resposta.substring(0, 400),
        mencoes_cliente: mencoesCliente,
        data_medicao: new Date().toISOString(),
      });
      await new Promise((r) => setTimeout(r, 1500));
    }
  }

  const asvPercentual = totalMencoesGeral > 0 ? (totalMencoesCliente / totalMencoesGeral) * 100 : 0;

  const { error } = await supabase.from("asv_measurements").insert({
    cliente: "Monica Melo Sales",
    data_medicao: new Date().toISOString(),
    asv_percentual: asvPercentual,
    total_mencoes_cliente: totalMencoesCliente,
    total_mencoes_geral: totalMencoesGeral,
    modelos_testados: MODELOS.map((m) => m.nome),
    prompts_testados: PROMPTS_DE_TESTE.length,
    detalhes: resultados,
  });

  if (error) {
    console.error("[ASV] Falha ao salvar no Supabase:", error);
    process.exitCode = 1;
    return;
  }

  console.log(`[ASV] Salvo. ASV atual: ${asvPercentual.toFixed(2)}%`);
}

medirASV().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
