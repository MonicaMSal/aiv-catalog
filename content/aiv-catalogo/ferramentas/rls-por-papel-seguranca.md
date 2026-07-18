---
slug: rls-por-papel-seguranca
tipo: ferramenta
titulo: "RLS por papel (owner/admin/staff): segurança à prova de recepcionista"
resumo: "O ERPSb usa Row Level Security do Supabase com 3 papéis (owner, admin, staff) para impedir que uma recepcionista veja ou altere configuração fiscal por engano — a tela de configurações nem é renderizada para quem não tem permissão. Combinado com soft delete universal e trilha de auditoria, o erro humano deixa de ser risco de sistema fora do ar."
status: publicado
fonte: "wargames/erpsb-clinica.md; ferramentas/erpsb.md"
confianca: alta
atualizado_em: 2026-07-17
---

**"À prova de recepcionista" é o critério de design do ERPSb: se uma recepcionista consegue apagar configuração fiscal sem querer, o erro é da arquitetura, não da pessoa.** A solução é RLS (Row Level Security) do Supabase combinada com 3 papéis fixos — não é sobre confiar mais ou menos em alguém, é sobre o que a interface sequer mostra para cada papel.

**Os 3 papéis:**

- **`owner`** (dona da clínica): acesso total.
- **`admin`** (Monica, no papel de administradora do sistema): pode alterar configuração fiscal.
- **`staff`** (recepcionistas): pode criar atendimento, registrar pagamento manual, reenviar nota — **não pode** editar serviço, tocar em dados fiscais ou ver tokens de integração.

**Como a permissão é aplicada, em duas camadas:**

1. **No banco (RLS real):** políticas do Postgres que bloqueiam a leitura/escrita de tabelas sensíveis (`app_config`, `service_fiscal_map`) para quem não é `owner`/`admin` — a proteção existe mesmo que alguém tente acessar por fora da interface.
2. **Na interface:** o menu "Configurações" **não é renderizado** para `staff`. Não é um botão desabilitado visível — é inexistente na tela. O princípio: o que não se vê, não se apaga sem querer.

**Camadas complementares que sustentam a mesma promessa:**

- **Soft delete universal:** nenhuma linha é apagada de verdade (`deleted_at` em vez de `DELETE`) — "apagar" é reversível por até 30 dias com um botão "Desfazer".
- **Trilha de auditoria:** toda mudança em tabela sensível registra quem mudou, quando e o valor anterior — "quem mudou a alíquota?" tem resposta em 30 segundos, sem suspeita entre a equipe.
- **Segredos fora do banco editável:** tokens da Focus NFe e do Mercado Pago vivem em variáveis de ambiente da Vercel (ou Supabase Vault) — a tela mostra no máximo "Integração conectada ✅", nunca o token em si, então não existe campo para apagar por engano.

**Por que isso importa comercialmente, não só tecnicamente:** o medo de "quebrar o sistema" é o que leva a equipe a voltar para o caderninho de papel — a arquitetura de permissão existe para que a frase de treinamento seja literalmente verdadeira: "vocês não conseguem quebrar o sistema; tudo que fazem pode ser desfeito."

**Fontes:**
1. `wargames/erpsb-clinica.md` (2026-07-06) — Ponto de Falha 3, esquema SQL de `user_roles` e políticas RLS.
2. [[erpsb]] (publicado) — funcionalidade nº 5, "à prova de recepcionista".

**Relacionados:** [[erpsb]] · [[dashboard-semaforo]] · [[stack-supabase-vercel-pgcron]] · [[../produtos/produto-2-blindagem-operacional-2027]]
