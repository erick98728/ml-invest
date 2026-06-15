# Especificação da área de relatórios e gráficos do ML-Invest

## Visão geral

A área de **Relatórios** do ML-Invest deve transformar receitas, despesas, dívidas, metas e diagnósticos em visualizações simples, educativas e fáceis de entender. O objetivo não é criar uma análise financeira profissional avançada, mas ajudar o usuário a perceber padrões e acompanhar sua evolução de forma clara.

Os relatórios devem funcionar com dados demonstrativos ou preenchidos manualmente, sempre usando linguagem cautelosa e explicando que as leituras dependem dos dados informados.

## 1. Objetivo da página de relatórios

A página de relatórios deve ajudar o usuário a responder perguntas simples:

- “Minhas receitas e despesas estão equilibradas?”
- “Meu saldo melhorou ou piorou nos últimos meses demonstrativos?”
- “Quais categorias mais impactam meus gastos?”
- “Minhas dívidas estão diminuindo, aumentando ou estáveis?”
- “Minhas metas estão evoluindo?”
- “Estou conseguindo poupar alguma parte da renda?”
- “Quanto da renda está comprometida com despesas e dívidas?”

A página deve mostrar padrões sem transformar os dados em julgamento, previsão ou recomendação definitiva.

## 2. Tipos de relatórios necessários para o protótipo

Para a primeira versão, os relatórios principais devem ser:

1. **Resumo financeiro mensal:** visão geral de receitas, despesas, saldo, percentual poupado e comprometimento da renda.
2. **Comparativo de receitas e despesas:** comparação visual entre entradas e saídas por período.
3. **Evolução do saldo mensal:** histórico simples do saldo ao longo dos meses demonstrativos.
4. **Distribuição de gastos por categoria:** participação das categorias nas despesas.
5. **Evolução das dívidas:** acompanhamento de dívidas em aberto e parcelas do mês.
6. **Evolução das metas:** progresso das metas financeiras cadastradas.
7. **Relatório educativo mensal:** leitura textual curta com pontos positivos, pontos de atenção e próximos passos educativos.

Relatórios mais complexos devem ficar fora da primeira versão para evitar confusão e aparência de consultoria financeira avançada.

## 3. Gráficos recomendados

### Gráfico de barras

Uso recomendado:

- comparar receitas e despesas;
- mostrar categorias de gasto;
- comparar comprometimento da renda por mês.

Por que usar:

- é fácil de entender;
- funciona bem em desktop e mobile;
- facilita comparação entre valores.

### Gráfico de linha simples

Uso recomendado:

- evolução do saldo mensal;
- evolução das dívidas;
- evolução do percentual poupado.

Por que usar:

- mostra tendência visual sem muitos elementos;
- ajuda a perceber melhora, estabilidade ou atenção.

### Gráfico de rosca simples

Uso recomendado:

- distribuição de gastos por categoria em um único mês.

Cuidados:

- usar poucas categorias;
- sempre acompanhar com legenda e lista textual;
- evitar roscas com muitas fatias pequenas.

### Barra de progresso

Uso recomendado:

- evolução das metas;
- preenchimento de reserva;
- checklist mensal.

Por que usar:

- é visualmente simples;
- mostra avanço sem exigir análise complexa.

## 4. Indicadores de evolução mensal

Indicadores que devem aparecer:

- total de receitas por mês;
- total de despesas por mês;
- saldo mensal estimado;
- percentual poupado por mês;
- comprometimento da renda;
- total de dívidas em aberto;
- parcelas de dívidas do mês;
- progresso médio das metas;
- maior categoria de gasto do mês;
- quantidade de despesas sem categoria, se relevante.

Esses indicadores devem ser apresentados como leituras educativas, não como avaliação definitiva da vida financeira do usuário.

## 5. Comparativo de receitas e despesas

### Objetivo

Mostrar se as receitas foram maiores, menores ou próximas das despesas em cada período.

### Visual recomendado

- gráfico de barras lado a lado;
- receitas em cor positiva moderada;
- despesas em cor funcional diferente;
- legenda clara;
- rótulos com valores.

### Texto explicativo

“Este gráfico compara as entradas e saídas informadas em cada período. Quando as despesas ficam próximas ou acima das receitas, pode ser útil revisar categorias e compromissos do mês.”

### Cuidados

- Não usar a palavra “fracasso” ou “erro”.
- Não indicar que toda despesa alta é necessariamente ruim.
- Explicar que os dados dependem dos registros preenchidos.

## 6. Evolução do saldo mensal

### Objetivo

Mostrar como o saldo estimado muda ao longo dos períodos demonstrativos.

### Visual recomendado

- gráfico de linha simples;
- linha neutra para saldo;
- marcação discreta quando o saldo estiver negativo;
- cards de apoio com maior saldo, menor saldo e saldo médio demonstrativo.

### Texto explicativo

“A evolução do saldo mostra a diferença entre receitas e despesas ao longo dos períodos informados. Ela ajuda a observar padrões, mas não prevê resultados futuros.”

### Estados possíveis

- saldo melhorando;
- saldo estável;
- saldo oscilando;
- saldo negativo recorrente;
- dados insuficientes para comparar.

## 7. Distribuição de gastos por categoria

### Objetivo

Mostrar quais categorias representam maior parte das despesas.

### Visual recomendado

- gráfico de barras horizontais para mobile e desktop;
- rosca simples opcional em desktop;
- lista textual com categoria, valor e percentual aproximado.

### Categorias recomendadas

- Moradia.
- Alimentação.
- Transporte.
- Saúde.
- Contas e serviços.
- Educação.
- Lazer.
- Compras.
- Assinaturas.
- Outros.

### Texto explicativo

“Categorias com maior participação ajudam a entender para onde o dinheiro está indo. Isso não significa que o gasto esteja errado; serve como ponto de observação.”

### Cuidados

- Agrupar categorias pequenas em “Outros”.
- Evitar mais de cinco categorias destacadas no gráfico principal.
- Não usar cores agressivas para categorias de lazer ou compras.

## 8. Evolução das dívidas

### Objetivo

Ajudar o usuário a visualizar dívidas em aberto, parcelas do mês e status ao longo dos períodos demonstrativos.

### Visual recomendado

- gráfico de linha ou barras simples para total de dívidas em aberto;
- cards para parcelas do mês, dívidas atrasadas e próximos vencimentos;
- lista simples com principais compromissos.

### Texto explicativo

“Este relatório mostra compromissos financeiros informados no protótipo. Ele ajuda a visualizar impacto mensal e status, mas não define uma estratégia de pagamento.”

### Estados possíveis

- dívidas reduzindo;
- dívidas estáveis;
- dívidas aumentando;
- dívidas atrasadas;
- dados incompletos.

### Cuidados

- Não dizer qual dívida pagar primeiro de forma definitiva.
- Sugerir apoio profissional em situações recorrentes ou complexas.
- Usar linguagem acolhedora, sem culpa.

## 9. Evolução das metas

### Objetivo

Mostrar o progresso das metas financeiras e ajudar o usuário a acompanhar objetivos de forma realista.

### Visual recomendado

- barras de progresso por meta;
- gráfico simples de evolução do valor acumulado;
- cards com metas concluídas, em andamento e sem progresso.

### Texto explicativo

“Este relatório acompanha o progresso das metas cadastradas. Metas podem ser ajustadas conforme sua realidade muda, e o progresso não precisa ser linear.”

### Estados possíveis

- metas avançando;
- metas sem progresso;
- metas concluídas;
- metas com dados incompletos;
- metas com prazo próximo.

### Cuidados

- Não prometer que a meta será alcançada.
- Não associar metas a produtos financeiros específicos.
- Tratar “investimento inicial educativo” como aprendizado, não como recomendação de investimento.

## 10. Percentual poupado por mês

### Objetivo

Mostrar a proporção estimada da receita que sobrou no período, quando houver saldo positivo.

### Fórmula conceitual

Percentual poupado = saldo positivo dividido pelo total de receitas do período.

Se o saldo for negativo, o relatório deve exibir “sem poupança estimada no período” ou 0%, com explicação educativa.

### Visual recomendado

- gráfico de linha simples;
- card de percentual do mês atual;
- indicação textual de melhor, pior ou insuficiente apenas em linguagem cautelosa.

### Texto explicativo

“O percentual poupado é uma estimativa baseada nas receitas e despesas informadas. Ele não representa uma meta obrigatória e pode variar conforme a realidade de cada pessoa.”

## 11. Comprometimento da renda

### Objetivo

Mostrar quanto da renda informada está associado a despesas e parcelas de dívidas.

### Visual recomendado

- barra horizontal de comprometimento;
- card com percentual atual;
- comparação simples entre meses demonstrativos.

### Texto explicativo

“O comprometimento da renda mostra quanto das receitas informadas está associado a despesas e parcelas. Percentuais altos podem merecer revisão, mas a interpretação depende do contexto de cada pessoa.”

### Cuidados

- Não afirmar um limite universal como regra rígida.
- Não classificar automaticamente o usuário como em situação ruim.
- Usar “pode merecer atenção” em vez de “está errado”.

## 12. Relatório educativo mensal

### Objetivo

Resumir o mês em linguagem simples, conectando dados visuais com interpretação educativa.

### Estrutura recomendada

- **Resumo do mês:** leitura geral.
- **Pontos positivos:** o que parece organizado ou evoluindo.
- **Pontos de atenção:** áreas que podem ser revisadas.
- **Próximos passos educativos:** pequenas ações práticas.
- **Aviso responsável:** reforço dos limites do produto.

### Exemplo de relatório educativo

“Com base nos dados demonstrativos, o mês teve saldo positivo, mas o comprometimento da renda ficou elevado. As maiores despesas estão concentradas em moradia e alimentação. Também há uma dívida marcada como atrasada, que pode merecer atenção. Como próximo passo educativo, pode ser útil revisar despesas variáveis, conferir vencimentos e acompanhar a meta de reserva.”

## 13. Filtros por período

Filtros recomendados:

- mês atual demonstrativo;
- últimos 3 meses demonstrativos;
- últimos 6 meses demonstrativos;
- período personalizado simples, em versão posterior;
- filtro por categoria;
- filtro por tipo: receitas, despesas, dívidas ou metas.

### Comportamento esperado

- O período ativo deve ficar visível no topo da página.
- Mudanças de filtro devem atualizar cards, gráficos, tabelas e textos.
- Quando não houver dados suficientes, o relatório deve explicar a limitação.

### Microcopy

- “Período analisado”.
- “Últimos 3 meses demonstrativos”.
- “Filtrar por categoria”.
- “Limpar filtros”.

## 14. Cards de resumo

Cards recomendados no topo da página:

1. **Receitas do período.**
2. **Despesas do período.**
3. **Saldo estimado.**
4. **Percentual poupado.**
5. **Comprometimento da renda.**
6. **Dívidas em aberto.**
7. **Metas em evolução.**

Cada card deve ter:

- valor principal;
- rótulo claro;
- variação demonstrativa opcional;
- texto curto de contexto;
- indicação se o dado é demonstrativo.

## 15. Tabelas simples

As tabelas devem complementar os gráficos, não substituí-los.

### Tabelas recomendadas

- resumo mensal por período;
- despesas por categoria;
- dívidas por status;
- metas por progresso.

### Colunas recomendadas

#### Resumo mensal

- período;
- receitas;
- despesas;
- saldo;
- percentual poupado;
- comprometimento da renda.

#### Categorias

- categoria;
- valor;
- percentual;
- variação demonstrativa.

#### Dívidas

- nome;
- status;
- parcela;
- vencimento;
- observação educativa.

#### Metas

- meta;
- progresso;
- valor atual;
- valor objetivo;
- status.

Em mobile, tabelas devem virar listas ou cards resumidos.

## 16. Estados vazios

### Sem dados gerais

**Título:** “Ainda não há dados para gerar relatórios”

**Texto:** “Adicione receitas, despesas, dívidas ou metas para visualizar relatórios educativos do período.”

**Ações:**

- “Adicionar receita”.
- “Adicionar despesa”.
- “Usar dados demonstrativos”.

### Sem histórico suficiente

**Título:** “Histórico ainda curto”

**Texto:** “Com mais períodos preenchidos, será possível observar evolução com mais clareza. Por enquanto, você pode visualizar o resumo do mês atual.”

### Sem categoria

**Título:** “Algumas despesas estão sem categoria”

**Texto:** “Classificar despesas ajuda a melhorar os gráficos de distribuição.”

## 17. Estados com dados demonstrativos

A área de relatórios deve funcionar com dados fictícios claramente identificados.

### Dados demonstrativos por mês

| Mês demonstrativo | Receitas | Despesas | Saldo | % poupado | Comprometimento |
| --- | ---: | ---: | ---: | ---: | ---: |
| Abril | R$ 4.700,00 | R$ 4.650,00 | R$ 50,00 | 1% | 99% |
| Maio | R$ 4.850,00 | R$ 4.900,00 | -R$ 50,00 | 0% | 101% |
| Junho | R$ 5.000,00 | R$ 4.800,00 | R$ 200,00 | 4% | 96% |

### Categorias demonstrativas de junho

| Categoria | Valor | Percentual aproximado |
| --- | ---: | ---: |
| Moradia | R$ 1.500,00 | 33% |
| Alimentação | R$ 950,00 | 21% |
| Contas e serviços | R$ 530,00 | 12% |
| Transporte | R$ 420,00 | 9% |
| Lazer, compras e assinaturas | R$ 760,00 | 17% |
| Outros | R$ 340,00 | 8% |

### Dívidas demonstrativas

| Mês | Dívidas em aberto | Parcelas do mês | Dívidas atrasadas |
| --- | ---: | ---: | ---: |
| Abril | R$ 7.300,00 | R$ 1.050,00 | 0 |
| Maio | R$ 7.100,00 | R$ 1.120,00 | 1 |
| Junho | R$ 6.940,00 | R$ 950,00 | 1 |

### Metas demonstrativas

| Meta | Abril | Maio | Junho |
| --- | ---: | ---: | ---: |
| Reserva de segurança | 20% | 25% | 30% |
| Curso profissional | 25% | 35% | 40% |
| Quitar compromisso | 10% | 15% | 20% |

## 18. Textos explicativos para cada gráfico

### Receitas x despesas

“Compara entradas e saídas informadas em cada período. Quando as despesas ficam acima das receitas, pode ser útil revisar categorias e compromissos.”

### Saldo mensal

“Mostra a diferença estimada entre receitas e despesas. A evolução ajuda a observar padrões, mas não prevê o futuro.”

### Categorias de gasto

“Mostra quais categorias tiveram maior participação nas despesas. Use esta visão como ponto de observação, não como julgamento.”

### Dívidas

“Mostra compromissos financeiros informados e seu comportamento no período. O relatório não define estratégia de pagamento.”

### Metas

“Mostra o progresso das metas cadastradas. O avanço pode variar, e metas podem ser ajustadas conforme sua realidade.”

### Percentual poupado

“Indica a parte estimada da receita que sobrou no período. Não é uma meta universal e depende dos dados informados.”

### Comprometimento da renda

“Mostra quanto das receitas está associado a despesas e parcelas. Percentuais altos podem merecer revisão, dependendo do contexto.”

## 19. Como evitar gráficos complexos demais

Regras para manter os relatórios simples:

- Usar no máximo um gráfico principal por bloco.
- Evitar gráficos 3D, mapas de calor, dispersão, radar ou indicadores técnicos avançados.
- Limitar categorias destacadas a cinco ou seis.
- Sempre acompanhar gráficos com texto explicativo.
- Preferir barras e linhas simples.
- Evitar muitas cores parecidas.
- Não usar siglas sem explicação.
- Não exibir projeções de investimento, rentabilidade ou cenários futuros complexos.
- Mostrar dados aproximados de forma clara quando forem demonstrativos.
- Priorizar leitura rápida antes de detalhamento.

## 20. Recomendações de visualização mobile

No mobile, relatórios devem ser empilhados em blocos simples.

### Ordem mobile recomendada

1. Filtro de período.
2. Cards de resumo em carrossel simples ou grade de uma coluna.
3. Relatório educativo mensal.
4. Receitas x despesas.
5. Saldo mensal.
6. Categorias de gasto.
7. Dívidas.
8. Metas.
9. Percentual poupado e comprometimento da renda.
10. Tabelas convertidas em listas.

### Cuidados mobile

- Evitar gráficos largos que exijam rolagem horizontal.
- Usar legendas próximas do gráfico.
- Mostrar valores principais fora do gráfico.
- Transformar tabelas em cards.
- Permitir expandir detalhes apenas quando necessário.
- Manter textos explicativos curtos.
- Usar botões grandes para filtros.

## 21. Ordem ideal dos blocos na tela desktop

1. Cabeçalho com título e filtros.
2. Cards de resumo.
3. Relatório educativo mensal.
4. Comparativo de receitas e despesas.
5. Evolução do saldo mensal.
6. Distribuição de gastos por categoria.
7. Percentual poupado e comprometimento da renda.
8. Evolução das dívidas.
9. Evolução das metas.
10. Tabelas simples de apoio.
11. Aviso responsável.

## 22. Bloco de aviso responsável

### Texto recomendado

“Os relatórios do ML-Invest são educativos e baseados nos dados informados ou demonstrativos. Eles ajudam a visualizar padrões, mas não substituem orientação financeira profissional e não devem ser interpretados como recomendação de investimento, crédito ou produto financeiro.”

### Aviso curto para gráficos

“Leitura educativa baseada nos dados informados.”

## Resumo final

- **Lista dos relatórios principais:** resumo financeiro mensal, receitas x despesas, evolução do saldo, gastos por categoria, evolução das dívidas, evolução das metas e relatório educativo mensal.
- **Gráficos recomendados:** barras, linhas simples, rosca simples com poucos itens e barras de progresso.
- **Indicadores que devem aparecer:** receitas, despesas, saldo, percentual poupado, comprometimento da renda, dívidas, parcelas, metas, maior categoria e dados sem categoria.
- **Textos educativos dos relatórios:** cada gráfico deve explicar o que mostra, lembrar que depende dos dados informados e evitar conclusões absolutas.
- **Ordem ideal dos blocos na tela:** filtros, cards de resumo, relatório educativo, comparativos principais, categorias, poupança/comprometimento, dívidas, metas, tabelas e aviso responsável.
