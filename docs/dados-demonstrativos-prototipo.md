# Dados demonstrativos e comportamento inicial do protótipo do ML-Invest

## Visão geral

A primeira versão do ML-Invest deve funcionar como um protótipo visual e navegável, sem banco de dados, autenticação, backend real ou integrações externas. Todas as telas principais devem conseguir exibir informações usando dados fictícios e realistas, deixando claro que os valores são apenas demonstrativos.

Os dados abaixo servem para validar dashboard, receitas, despesas, dívidas, metas, plano financeiro educativo, relatórios e estados da interface. Nenhum dado real, bancário ou sensível deve ser solicitado.

## 1. Perfil financeiro fictício principal

O perfil principal deve representar uma pessoa com renda mensal estável, algumas despesas fixas, gastos variáveis, dívidas em acompanhamento e metas simples.

### Características do perfil

- Renda principal fixa.
- Uma renda extra variável.
- Despesas essenciais relevantes.
- Gastos variáveis em lazer, compras e assinaturas.
- Dívidas em aberto, incluindo um compromisso atrasado.
- Metas de reserva, estudo e quitação de compromisso.
- Situação geral de atenção moderada: saldo positivo, mas comprometimento elevado da renda.

Esse perfil deve permitir testar alertas, diagnóstico, plano educativo e relatórios sem criar uma situação extrema como padrão.

## 2. Nome demonstrativo do usuário

Nome recomendado:

**Marina Demo**

Variações opcionais para testes:

- João Demo.
- Pessoa Demo.
- Usuário Demonstrativo.

Mensagem de contexto:

“Você está visualizando dados demonstrativos de Marina Demo. Esses dados são fictícios e servem apenas para explorar o protótipo.”

## 3. Receitas demonstrativas

Período base: **Junho demonstrativo**.

| ID | Nome | Categoria | Valor | Recorrência | Período | Observação |
| --- | --- | --- | ---: | --- | --- | --- |
| rec-001 | Salário | Salário | R$ 4.200,00 | Fixa | Junho demonstrativo | Entrada principal fictícia. |
| rec-002 | Renda extra | Renda extra | R$ 650,00 | Variável | Junho demonstrativo | Trabalho pontual fictício. |
| rec-003 | Reembolso | Reembolso | R$ 150,00 | Pontual | Junho demonstrativo | Reembolso demonstrativo. |

### Total demonstrativo de receitas

- Total de receitas: **R$ 5.000,00**.
- Receitas fixas: **R$ 4.200,00**.
- Receitas variáveis e pontuais: **R$ 800,00**.

## 4. Despesas demonstrativas

| ID | Nome | Categoria | Valor | Tipo | Essencialidade | Período | Observação |
| --- | --- | --- | ---: | --- | --- | --- | --- |
| desp-001 | Aluguel | Moradia | R$ 1.500,00 | Fixa | Essencial | Junho demonstrativo | Moradia fictícia. |
| desp-002 | Mercado | Alimentação | R$ 950,00 | Variável | Essencial | Junho demonstrativo | Compras do mês. |
| desp-003 | Transporte | Transporte | R$ 420,00 | Variável | Importante | Junho demonstrativo | Transporte geral. |
| desp-004 | Energia e água | Contas e serviços | R$ 280,00 | Fixa | Essencial | Junho demonstrativo | Contas básicas. |
| desp-005 | Internet | Contas e serviços | R$ 120,00 | Fixa | Importante | Junho demonstrativo | Serviço mensal. |
| desp-006 | Saúde | Saúde | R$ 280,00 | Pontual | Essencial | Junho demonstrativo | Consulta ou medicamento fictício. |
| desp-007 | Lazer | Lazer | R$ 350,00 | Variável | Flexível | Junho demonstrativo | Saídas e entretenimento. |
| desp-008 | Assinaturas | Assinaturas | R$ 90,00 | Fixa | Flexível | Junho demonstrativo | Serviços digitais fictícios. |
| desp-009 | Compras pessoais | Compras | R$ 320,00 | Variável | Flexível | Junho demonstrativo | Compras diversas. |
| desp-010 | Educação | Educação | R$ 220,00 | Fixa | Importante | Junho demonstrativo | Curso fictício. |
| desp-011 | Outros gastos | Outros | R$ 270,00 | Variável | Flexível | Junho demonstrativo | Gastos não classificados em detalhe. |

### Total demonstrativo de despesas

- Total de despesas: **R$ 4.800,00**.
- Despesas fixas: **R$ 2.210,00**.
- Despesas variáveis e pontuais: **R$ 2.590,00**.
- Despesas essenciais: **R$ 3.010,00**.
- Gastos variáveis/flexíveis em lazer, compras e assinaturas: **R$ 760,00**.

## 5. Dívidas demonstrativas

| ID | Nome | Tipo | Valor total | Parcela do mês | Vencimento | Status | Observação |
| --- | --- | --- | ---: | ---: | --- | --- | --- |
| div-001 | Cartão de crédito | Cartão | R$ 1.800,00 | R$ 350,00 | 15/jun | Próximo vencimento | Compromisso fictício. |
| div-002 | Empréstimo pessoal | Empréstimo | R$ 4.200,00 | R$ 420,00 | 20/jun | Em dia | Parcelamento demonstrativo. |
| div-003 | Compra parcelada | Compra parcelada | R$ 900,00 | R$ 180,00 | 10/jun | Em dia | Compra planejada fictícia. |
| div-004 | Conta antiga | Conta atrasada | R$ 240,00 | R$ 240,00 | 05/jun | Atrasada | Exemplo para alerta responsável. |

### Totais demonstrativos de dívidas

- Total de dívidas em aberto: **R$ 7.140,00**.
- Parcelas do mês: **R$ 1.190,00**.
- Dívidas atrasadas: **1**.
- Próximos vencimentos: **1**.

## 6. Metas demonstrativas

| ID | Nome | Tipo | Valor objetivo | Valor atual | Progresso | Prazo | Status | Observação |
| --- | --- | --- | ---: | ---: | ---: | --- | --- | --- |
| meta-001 | Reserva de segurança | Reserva de emergência | R$ 3.000,00 | R$ 900,00 | 30% | Dezembro demonstrativo | Em andamento | Meta de proteção contra imprevistos. |
| meta-002 | Curso profissional | Curso ou estudo | R$ 1.200,00 | R$ 480,00 | 40% | Setembro demonstrativo | Avançando | Meta educativa. |
| meta-003 | Viagem planejada | Viagem | R$ 2.500,00 | R$ 250,00 | 10% | Janeiro demonstrativo | Em andamento | Objetivo pessoal. |
| meta-004 | Quitar compromisso | Quitar dívida | R$ 1.500,00 | R$ 300,00 | 20% | Novembro demonstrativo | Em andamento | Meta relacionada a compromisso financeiro. |

### Totais demonstrativos de metas

- Metas cadastradas: **4**.
- Metas em andamento: **3**.
- Metas avançando: **1**.
- Progresso médio: **25%**.
- Valor total objetivo: **R$ 8.200,00**.
- Valor total atual: **R$ 1.930,00**.

## 7. Movimentações recentes

| ID | Data demonstrativa | Nome | Tipo | Categoria | Valor |
| --- | --- | --- | --- | --- | ---: |
| mov-001 | 01/jun | Salário | Receita | Salário | R$ 4.200,00 |
| mov-002 | 02/jun | Aluguel | Despesa | Moradia | R$ 1.500,00 |
| mov-003 | 04/jun | Mercado | Despesa | Alimentação | R$ 320,00 |
| mov-004 | 06/jun | Renda extra | Receita | Renda extra | R$ 650,00 |
| mov-005 | 08/jun | Transporte por aplicativo | Despesa | Transporte | R$ 85,00 |
| mov-006 | 10/jun | Internet | Despesa | Contas e serviços | R$ 120,00 |
| mov-007 | 12/jun | Assinaturas | Despesa | Assinaturas | R$ 90,00 |
| mov-008 | 15/jun | Reembolso | Receita | Reembolso | R$ 150,00 |

## 8. Categorias de gastos

Categorias demonstrativas recomendadas:

| Categoria | Tipo principal | Cor conceitual | Uso educativo |
| --- | --- | --- | --- |
| Moradia | Essencial | Azul neutro | Ajuda a visualizar gastos fixos importantes. |
| Alimentação | Essencial | Verde suave | Mostra gastos essenciais que podem variar. |
| Transporte | Importante | Azul claro | Representa deslocamentos e mobilidade. |
| Saúde | Essencial | Turquesa | Deve ser tratada sem julgamento. |
| Contas e serviços | Importante | Cinza-azulado | Reúne compromissos recorrentes. |
| Educação | Importante | Lilás | Relacionada a aprendizado e desenvolvimento. |
| Lazer | Flexível | Laranja suave | Ajuda a observar gastos variáveis sem culpa. |
| Compras | Flexível | Âmbar suave | Indica consumo variável. |
| Assinaturas | Flexível | Roxo suave | Ajuda a identificar gastos recorrentes pequenos. |
| Outros | Neutro | Cinza | Agrupa itens não classificados. |

## 9. Alertas financeiros demonstrativos

### Alerta 1 — Comprometimento elevado

- **Nível:** atenção.
- **Título:** “Renda bastante comprometida”.
- **Texto:** “Com base nos dados demonstrativos, grande parte das receitas está associada a despesas e parcelas. Pode ser útil revisar categorias de maior peso e compromissos do mês.”
- **Ação:** “Ver despesas”.

### Alerta 2 — Dívida atrasada

- **Nível:** atenção.
- **Título:** “Dívida atrasada cadastrada”.
- **Texto:** “Há uma dívida demonstrativa marcada como atrasada. Organizar vencimento, valor e impacto mensal pode ajudar a entender melhor a situação.”
- **Ação:** “Revisar dívidas”.

### Alerta 3 — Gastos variáveis relevantes

- **Nível:** informação.
- **Título:** “Gastos variáveis em destaque”.
- **Texto:** “Lazer, compras e assinaturas têm participação relevante nas despesas demonstrativas. Isso não significa erro, mas pode ser um ponto de observação.”
- **Ação:** “Ver categorias”.

### Alerta 4 — Margem baixa para metas

- **Nível:** atenção.
- **Título:** “Pouca margem para metas”.
- **Texto:** “O saldo demonstrativo é positivo, mas pequeno em relação aos compromissos do mês. Revisar prazos e valores das metas pode trazer mais clareza.”
- **Ação:** “Ver metas”.

## 10. Diagnóstico financeiro demonstrativo

### Diagnóstico principal

**Título:** “Mês positivo, mas com atenção ao comprometimento”

**Texto:** “Com base nos dados demonstrativos, Marina Demo encerra o mês com saldo positivo estimado de R$ 200,00. Ao mesmo tempo, as despesas e parcelas ocupam grande parte da renda informada, e há uma dívida marcada como atrasada. Isso pode indicar pouca margem para imprevistos. Revisar gastos variáveis, compromissos e metas pode ajudar a organizar melhor os próximos passos.”

### Pontos observados

- Receitas maiores que despesas.
- Saldo positivo, mas baixo.
- Comprometimento da renda elevado.
- Uma dívida atrasada.
- Metas em andamento com progresso parcial.

### Ação educativa sugerida

“Revisar despesas variáveis e dívidas em aberto.”

## 11. Plano financeiro educativo demonstrativo

### Prioridade 1 — Revisar dívida atrasada

- **Motivo:** existe uma dívida demonstrativa com status atrasada.
- **Ação:** “Ver dívidas”.
- **Texto:** “Esta dívida pode merecer atenção por estar atrasada. Organizar vencimento e impacto mensal pode ajudar a entender melhor a situação.”

### Prioridade 2 — Observar comprometimento da renda

- **Motivo:** despesas e parcelas representam grande parte das receitas.
- **Ação:** “Ver resumo financeiro”.
- **Texto:** “Quando grande parte da renda já está comprometida, pode ser útil revisar despesas fixas, variáveis e parcelas do mês.”

### Prioridade 3 — Revisar gastos variáveis

- **Motivo:** lazer, compras e assinaturas somam valor relevante.
- **Ação:** “Ver despesas variáveis”.
- **Texto:** “Gastos variáveis podem mudar bastante. Acompanhar essas categorias pode ajudar a evitar surpresas.”

### Prioridade 4 — Ajustar metas se necessário

- **Motivo:** há metas em andamento e saldo mensal baixo.
- **Ação:** “Ver metas”.
- **Texto:** “Metas podem ser ajustadas conforme a realidade do mês. Revisar prazo ou valor pode tornar o planejamento mais claro.”

### Checklist demonstrativo

- [x] Conferir receitas do mês.
- [x] Registrar principais despesas.
- [ ] Revisar despesas variáveis.
- [ ] Conferir dívida atrasada.
- [ ] Atualizar progresso das metas.
- [ ] Ler relatório educativo mensal.

## 12. Relatórios mensais demonstrativos

### Resumo por mês

| Mês demonstrativo | Receitas | Despesas | Saldo | % poupado | Comprometimento |
| --- | ---: | ---: | ---: | ---: | ---: |
| Abril | R$ 4.700,00 | R$ 4.650,00 | R$ 50,00 | 1% | 99% |
| Maio | R$ 4.850,00 | R$ 4.900,00 | -R$ 50,00 | 0% | 101% |
| Junho | R$ 5.000,00 | R$ 4.800,00 | R$ 200,00 | 4% | 96% |

### Categorias de junho

| Categoria | Valor | Percentual aproximado |
| --- | ---: | ---: |
| Moradia | R$ 1.500,00 | 31% |
| Alimentação | R$ 950,00 | 20% |
| Contas e serviços | R$ 400,00 | 8% |
| Transporte | R$ 420,00 | 9% |
| Lazer, compras e assinaturas | R$ 760,00 | 16% |
| Outros | R$ 770,00 | 16% |

### Evolução de metas

| Meta | Abril | Maio | Junho |
| --- | ---: | ---: | ---: |
| Reserva de segurança | 20% | 25% | 30% |
| Curso profissional | 25% | 35% | 40% |
| Quitar compromisso | 10% | 15% | 20% |

## 13. Dados para cenário positivo

O cenário positivo deve testar estados visuais de organização e evolução sem parecer promessa de sucesso financeiro.

### Dados principais

- Nome: Marina Demo — cenário positivo.
- Receitas: R$ 5.200,00.
- Despesas: R$ 3.900,00.
- Saldo mensal: R$ 1.300,00.
- Porcentagem poupada: 25%.
- Comprometimento da renda: 75%.
- Dívidas em aberto: R$ 2.000,00.
- Dívidas atrasadas: 0.
- Metas em evolução: 4.

### Diagnóstico positivo

“Com base nos dados demonstrativos, o mês apresenta saldo positivo e metas em evolução. Ainda assim, acompanhar despesas recorrentes e compromissos ajuda a manter clareza sobre o planejamento.”

### Alertas positivos

- “Metas em evolução”.
- “Saldo positivo estimado”.
- “Sem dívidas atrasadas cadastradas”.

## 14. Dados para cenário de atenção

O cenário de atenção deve ser o cenário principal do protótipo.

### Dados principais

- Nome: Marina Demo — cenário de atenção.
- Receitas: R$ 5.000,00.
- Despesas: R$ 4.800,00.
- Saldo mensal: R$ 200,00.
- Porcentagem poupada: 4%.
- Comprometimento da renda: 96%.
- Dívidas em aberto: R$ 7.140,00.
- Dívidas atrasadas: 1.
- Gastos variáveis relevantes: R$ 760,00.

### Diagnóstico de atenção

“Com base nos dados demonstrativos, o mês ainda tem saldo positivo, mas a margem é baixa e há uma dívida atrasada. Pode ser útil revisar compromissos e categorias variáveis.”

### Alertas de atenção

- “Renda bastante comprometida”.
- “Dívida atrasada cadastrada”.
- “Pouca margem para metas”.

## 15. Dados para cenário crítico

O cenário crítico deve testar comunicação cuidadosa para saldo negativo e dívidas atrasadas, sem alarmismo.

### Dados principais

- Nome: Marina Demo — cenário crítico.
- Receitas: R$ 4.600,00.
- Despesas: R$ 5.250,00.
- Saldo mensal: -R$ 650,00.
- Porcentagem poupada: 0% ou “sem poupança estimada no período”.
- Comprometimento da renda: 114%.
- Dívidas em aberto: R$ 8.400,00.
- Dívidas atrasadas: 2.
- Metas em pausa: 2.

### Diagnóstico crítico

“Com base nos dados demonstrativos, as despesas superam as receitas neste período e há dívidas atrasadas. Isso pode indicar um mês pressionado. Revisar despesas, compromissos e prioridades pode ajudar a entender melhor a situação. Se esse cenário se repetir ou for difícil de administrar, considere buscar orientação profissional.”

### Alertas críticos

- “Saldo negativo estimado”.
- “Dívidas atrasadas merecem atenção”.
- “Despesas acima das receitas”.
- “Metas podem precisar de ajuste”.

## 16. Regras simples de cálculo

As regras devem ser simples, transparentes e adequadas ao protótipo.

### Total de receitas

Somar todos os valores de receitas do período selecionado.

```text
total de receitas = soma(receitas do período)
```

### Total de despesas

Somar todos os valores de despesas do período selecionado.

```text
total de despesas = soma(despesas do período)
```

### Saldo mensal

Subtrair despesas de receitas.

```text
saldo mensal = total de receitas - total de despesas
```

### Porcentagem poupada

Calcular apenas quando houver receita informada e saldo positivo.

```text
porcentagem poupada = saldo mensal positivo / total de receitas * 100
```

Se o saldo for zero ou negativo:

```text
porcentagem poupada = 0% ou “sem poupança estimada no período”
```

### Comprometimento da renda

Calcular a proporção entre despesas e receitas. No protótipo, as parcelas podem estar incluídas nas despesas ou exibidas como complemento, desde que a tela deixe isso claro.

```text
comprometimento da renda = total de despesas / total de receitas * 100
```

Se não houver receitas cadastradas, exibir:

“Não há receita suficiente para calcular este indicador.”

### Progresso das metas

Dividir valor atual pelo valor objetivo.

```text
progresso da meta = valor atual / valor objetivo * 100
```

Se o valor objetivo estiver vazio ou for zero, exibir:

“Dados insuficientes para calcular progresso.”

### Total de dívidas em aberto

Somar dívidas com status diferente de concluída.

```text
total de dívidas em aberto = soma(dívidas não concluídas)
```

### Parcelas do mês

Somar parcelas das dívidas em aberto do período.

```text
parcelas do mês = soma(parcelas das dívidas do período)
```

## 17. Comportamentos simulados de cadastro, edição e exclusão

Como não haverá backend real, os comportamentos devem ser simulados de forma simples.

### Cadastro demonstrativo

- O usuário preenche campos essenciais.
- O item aparece imediatamente na lista da página.
- Os cards e indicadores podem ser atualizados visualmente no protótipo.
- Exibir mensagem: “Item adicionado nesta demonstração.”

### Edição demonstrativa

- O usuário altera um item fictício.
- A lista mostra o novo valor ou categoria.
- Indicadores relacionados podem mudar no protótipo.
- Exibir mensagem: “Alteração aplicada apenas nesta demonstração.”

### Exclusão demonstrativa

- O usuário escolhe remover um item.
- Exibir confirmação simples.
- Após confirmação, o item some da lista demonstrativa.
- Exibir mensagem: “Item removido da demonstração.”

### Reset dos dados demonstrativos

- Opção no perfil demo ou configurações.
- Restaura o cenário original.
- Exibir mensagem: “Dados demonstrativos restaurados.”

### Alternância de cenários

O protótipo pode permitir alternar entre:

- cenário positivo;
- cenário de atenção;
- cenário crítico.

Mensagem:

“Cenário alterado para fins de teste da interface.”

## 18. Limites do funcionamento local

A primeira versão deve assumir os seguintes limites:

- Dados são fictícios ou preenchidos manualmente.
- Não há autenticação real.
- Não há conta bancária conectada.
- Não há banco de dados definido.
- Não há backend real.
- Não há integração com APIs externas.
- Alterações podem ser temporárias no protótipo.
- Cálculos são simplificados e educativos.
- Diagnósticos não substituem orientação profissional.
- Não há recomendação de investimentos, crédito, cartões ou produtos financeiros.

## 19. Mensagens deixando claro que os dados são demonstrativos

### Mensagens gerais

- “Você está usando dados demonstrativos.”
- “Os valores exibidos são fictícios e servem apenas para explorar o protótipo.”
- “Nenhuma conta bancária está conectada.”
- “As alterações feitas aqui podem ser apenas temporárias.”
- “Os cálculos são simplificados e têm finalidade educativa.”

### Mensagem para dashboard

“Este dashboard usa dados demonstrativos para mostrar como o ML-Invest pode organizar receitas, despesas, dívidas e metas.”

### Mensagem para formulários

“Não insira dados sensíveis. Use descrições simples e valores fictícios se estiver apenas testando.”

### Mensagem para relatórios

“Relatórios demonstrativos ajudam a visualizar padrões, mas não representam análise financeira profissional.”

### Mensagem para plano educativo

“As sugestões são educativas e baseadas nos dados demonstrativos. Elas não substituem orientação financeira profissional.”

## Resumo final

- **Conjunto completo de dados fictícios:** perfil Marina Demo com receitas, despesas, dívidas, metas, movimentações, categorias, alertas, diagnóstico, plano educativo e relatórios mensais.
- **Regras simples de cálculo:** soma de receitas e despesas, saldo mensal, porcentagem poupada, comprometimento da renda, progresso das metas, total de dívidas em aberto e parcelas do mês.
- **Cenários de teste:** cenário positivo, cenário de atenção e cenário crítico para validar estados visuais, mensagens e alertas.
- **Mensagens demonstrativas:** textos deixam claro que os dados são fictícios, locais, educativos e sem conexão bancária.
- **Limitações assumidas para o protótipo:** sem dados reais, autenticação, backend, banco de dados, APIs externas, integração bancária ou substituição de orientação profissional.
