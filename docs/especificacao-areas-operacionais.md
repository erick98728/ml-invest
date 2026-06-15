# Especificação das áreas operacionais do ML-Invest

## Visão geral

As áreas de **Receitas**, **Despesas**, **Dívidas** e **Metas financeiras** são os espaços onde o usuário organiza os dados que alimentam o dashboard do ML-Invest. Elas devem ser simples, visuais e educativas, permitindo que o usuário compreenda melhor sua vida financeira sem conectar contas bancárias, informar dados sensíveis ou receber recomendações financeiras definitivas.

Cada área deve funcionar bem com dados demonstrativos ou preenchimento manual básico. Os formulários devem pedir apenas o essencial para que o protótipo ajude o usuário a entender padrões como gastar mais do que ganha, ter despesas muito concentradas, manter dívidas atrasadas, guardar pouco dinheiro ou não acompanhar metas importantes.

## 1. Área de receitas

### 1.1 Objetivo da página

A página de receitas deve ajudar o usuário a registrar e visualizar entradas de dinheiro do período. O objetivo é mostrar de onde vem a renda informada, diferenciar receitas fixas e variáveis e apoiar o cálculo do saldo mensal no dashboard.

A experiência deve deixar claro que receitas variáveis podem mudar e que o planejamento financeiro fica mais confiável quando o usuário entende quais entradas são recorrentes e quais são pontuais.

### 1.2 Campos necessários para uma receita demonstrativa

O formulário demonstrativo de receita deve pedir apenas informações essenciais:

- **Nome da receita:** exemplo: salário, renda extra, reembolso.
- **Valor:** valor da entrada no período.
- **Categoria:** origem da receita.
- **Tipo de recorrência:** fixa, variável ou pontual.
- **Data ou mês de referência:** período em que a receita entra.
- **Observação opcional:** campo curto para contexto, sem pedir informações sensíveis.

Campos que devem ser evitados na primeira versão:

- dados bancários;
- CPF ou documentos;
- empregador formal;
- comprovantes;
- informações fiscais detalhadas.

### 1.3 Categorias sugeridas

- Salário.
- Renda extra.
- Trabalho autônomo.
- Benefício.
- Reembolso.
- Ajuda familiar.
- Venda eventual.
- Outros.

As categorias devem ser simples e compreensíveis. Caso uma receita seja difícil de classificar, a opção “Outros” deve ser permitida, acompanhada de uma dica para revisar categorias depois.

### 1.4 Cards de resumo

A página de receitas deve conter cards claros no topo:

1. **Total de receitas:** soma das entradas do período.
2. **Receitas fixas:** soma das entradas marcadas como fixas.
3. **Receitas variáveis:** soma das entradas variáveis ou pontuais.
4. **Maior fonte de receita:** categoria ou item com maior participação.
5. **Quantidade de entradas:** total de receitas cadastradas.

### 1.5 Lista ou tabela de receitas

A lista de receitas deve ser simples e escaneável.

Colunas ou informações recomendadas:

- nome;
- categoria;
- valor;
- recorrência;
- data ou mês;
- ação para editar ou remover item demonstrativo.

Em dispositivos móveis, a tabela deve virar uma lista de cards com nome, valor, categoria e recorrência visíveis.

### 1.6 Filtros

Filtros recomendados:

- período;
- categoria;
- recorrência: fixa, variável ou pontual;
- maior ou menor valor;
- dados demonstrativos ou preenchidos manualmente, se essa distinção existir no protótipo.

Os filtros devem ser opcionais e simples. A página deve ser útil mesmo sem filtros aplicados.

### 1.7 Estado vazio

Quando não houver receitas cadastradas, a página deve mostrar uma mensagem acolhedora:

**Título:** “Comece adicionando uma receita”

**Texto:** “Adicionar suas principais entradas ajuda o ML-Invest a estimar o saldo do mês e organizar melhor o dashboard.”

**Ações:**

- “Adicionar receita”.
- “Usar exemplo demonstrativo”.

### 1.8 Estado preenchido com dados demonstrativos

Exemplo de dados demonstrativos:

| Nome | Categoria | Valor | Recorrência | Período |
| --- | --- | ---: | --- | --- |
| Salário | Salário | R$ 4.200,00 | Fixa | Junho demonstrativo |
| Renda extra | Renda extra | R$ 650,00 | Variável | Junho demonstrativo |
| Reembolso | Reembolso | R$ 150,00 | Pontual | Junho demonstrativo |

Resumo demonstrativo:

- Total de receitas: R$ 5.000,00.
- Receitas fixas: R$ 4.200,00.
- Receitas variáveis e pontuais: R$ 800,00.

### 1.9 Mensagens educativas

- “Receitas variáveis podem mudar de um mês para outro. Considere isso ao comparar com despesas fixas.”
- “Entender a origem das entradas ajuda a planejar o mês com mais clareza.”
- “Os valores informados são usados apenas para organizar o protótipo e gerar leituras educativas.”
- “Evite inserir dados sensíveis. Use descrições simples, como ‘salário’ ou ‘renda extra’.”

## 2. Área de despesas

### 2.1 Objetivo da página

A página de despesas deve ajudar o usuário a registrar saídas de dinheiro, separar gastos por categoria e identificar padrões que possam pressionar o orçamento. Ela deve facilitar a visualização de despesas fixas, variáveis e essenciais sem julgar escolhas pessoais.

A página deve apoiar a identificação de problemas como gastar mais do que ganha, comprometer grande parte da renda, gastar demais em categorias variáveis ou manter muitas despesas sem classificação.

### 2.2 Campos necessários para uma despesa demonstrativa

O formulário demonstrativo de despesa deve pedir:

- **Nome da despesa:** exemplo: aluguel, mercado, transporte.
- **Valor:** valor gasto no período.
- **Categoria:** grupo da despesa.
- **Tipo:** fixa, variável ou pontual.
- **Essencialidade:** essencial, importante ou flexível.
- **Data ou mês de referência:** período da despesa.
- **Observação opcional:** contexto curto, sem dados sensíveis.

Campos que devem ser evitados:

- número de cartão;
- estabelecimento detalhado obrigatório;
- comprovantes;
- localização;
- informações pessoais sensíveis.

### 2.3 Categorias sugeridas

- Moradia.
- Alimentação.
- Transporte.
- Saúde.
- Contas e serviços.
- Educação.
- Lazer.
- Compras.
- Assinaturas.
- Família.
- Cuidados pessoais.
- Outros.

As categorias “Lazer”, “Compras” e “Assinaturas” ajudam a identificar gastos variáveis que podem crescer sem percepção do usuário. Elas não devem ser apresentadas como problemas automaticamente.

### 2.4 Separação entre despesas fixas, variáveis e essenciais

A página deve permitir classificar despesas por três dimensões simples:

#### Despesas fixas

Gastos recorrentes e previsíveis, como aluguel, internet, mensalidades e contas frequentes.

#### Despesas variáveis

Gastos que mudam bastante de um mês para outro, como mercado, lazer, transporte por aplicativo e compras.

#### Despesas essenciais

Gastos ligados a necessidades básicas ou compromissos importantes, como moradia, alimentação, saúde e transporte essencial.

A classificação deve ser educativa e flexível. Uma despesa pode ser essencial para uma pessoa e flexível para outra, então o produto deve evitar julgamentos definitivos.

### 2.5 Cards de resumo

Cards recomendados:

1. **Total de despesas:** soma das saídas do período.
2. **Despesas fixas:** total marcado como fixo.
3. **Despesas variáveis:** total marcado como variável ou pontual.
4. **Despesas essenciais:** total marcado como essencial.
5. **Maior categoria:** categoria com maior participação.
6. **Percentual da renda comprometida:** despesas em relação às receitas informadas.

### 2.6 Lista ou tabela de despesas

Informações recomendadas:

- nome;
- categoria;
- valor;
- tipo: fixa, variável ou pontual;
- essencialidade;
- data ou mês;
- status de categorização;
- ações de editar ou remover item demonstrativo.

Em mobile, a tabela deve ser substituída por cards de despesa com categoria, valor, tipo e essencialidade.

### 2.7 Filtros

Filtros recomendados:

- período;
- categoria;
- tipo: fixa, variável ou pontual;
- essencialidade;
- maior valor;
- sem categoria;
- despesas acima de um valor escolhido no protótipo.

### 2.8 Alertas de gastos elevados

Alertas devem ser educativos e cautelosos:

#### Despesas acima das receitas

“Com base nos dados informados, suas despesas superam as receitas neste período. Revisar categorias de maior peso pode ajudar a entender o que está pressionando o mês.”

#### Categoria com peso elevado

“Esta categoria representa uma parte relevante das despesas informadas. Isso não significa que esteja errada, mas pode ser um bom ponto de revisão.”

#### Muitas despesas variáveis

“Uma parte importante das despesas parece variar ao longo do mês. Acompanhar esses registros pode ajudar a evitar surpresas.”

#### Muitas despesas sem categoria

“Algumas despesas estão sem categoria. Classificá-las pode melhorar a leitura do dashboard.”

### 2.9 Mensagens educativas

- “Despesas fixas ajudam a entender quanto do orçamento já está comprometido no começo do mês.”
- “Despesas variáveis podem mudar bastante e merecem acompanhamento frequente.”
- “Categorias servem para dar clareza, não para julgar escolhas.”
- “Se os gastos estiverem maiores que as receitas, comece revisando os maiores grupos com calma.”

### 2.10 Estado preenchido com dados demonstrativos

| Nome | Categoria | Valor | Tipo | Essencialidade |
| --- | --- | ---: | --- | --- |
| Aluguel | Moradia | R$ 1.500,00 | Fixa | Essencial |
| Mercado | Alimentação | R$ 950,00 | Variável | Essencial |
| Transporte | Transporte | R$ 420,00 | Variável | Importante |
| Internet | Contas e serviços | R$ 120,00 | Fixa | Importante |
| Lazer | Lazer | R$ 350,00 | Variável | Flexível |
| Assinaturas | Assinaturas | R$ 90,00 | Fixa | Flexível |

Resumo demonstrativo:

- Total de despesas: R$ 3.430,00.
- Despesas fixas: R$ 1.710,00.
- Despesas variáveis: R$ 1.720,00.
- Maior categoria: Moradia.

## 3. Área de dívidas

### 3.1 Objetivo da página

A página de dívidas deve ajudar o usuário a organizar compromissos financeiros, parcelas, vencimentos e status de pagamento de forma cuidadosa e sem julgamento. O objetivo é dar visibilidade ao impacto das dívidas no mês e apoiar uma leitura educativa sobre atrasos, parcelas relevantes e possíveis pontos de atenção.

A página não deve dizer exatamente qual dívida pagar primeiro como uma ordem definitiva. Ela pode destacar dívidas atrasadas, caras ou com impacto elevado usando linguagem cautelosa, como “pode merecer atenção” ou “considere revisar”.

### 3.2 Campos necessários para uma dívida demonstrativa

O formulário demonstrativo deve pedir:

- **Nome da dívida ou compromisso:** exemplo: cartão de crédito, empréstimo, compra parcelada.
- **Tipo de dívida:** cartão, empréstimo, financiamento, compra parcelada, conta atrasada ou outros.
- **Valor total informado:** valor aproximado da dívida.
- **Valor da parcela do mês:** impacto mensal.
- **Quantidade de parcelas:** opcional para protótipo.
- **Parcelas restantes:** opcional para protótipo.
- **Data de vencimento demonstrativa:** dia ou mês.
- **Status:** em dia, próximo vencimento, atrasada, renegociada, concluída ou dados incompletos.
- **Observação opcional:** campo curto.

Campos que devem ser evitados:

- número de contrato;
- documentos pessoais;
- login de bancos;
- dados de cartão;
- taxas detalhadas obrigatórias;
- credor específico obrigatório.

### 3.3 Status de dívida

Status recomendados:

- **Em dia:** compromisso registrado sem atraso.
- **Próximo vencimento:** vencimento se aproxima no período demonstrativo.
- **Atrasada:** pagamento informado como atrasado.
- **Renegociada:** dívida marcada como em reorganização.
- **Concluída:** compromisso finalizado.
- **Dados incompletos:** faltam informações importantes para leitura.

Cada status deve ter texto, cor e ícone, sem depender apenas da cor.

### 3.4 Priorização educativa de dívidas caras ou atrasadas

A página pode criar uma seção chamada **“Pontos de atenção em dívidas”**.

Critérios educativos para destacar dívidas:

- dívida com status atrasada;
- parcela com alto impacto no saldo mensal;
- vencimento próximo;
- valor total elevado em relação às receitas informadas;
- dados incompletos que dificultam acompanhamento.

Linguagem recomendada:

- “Esta dívida pode merecer atenção por estar atrasada.”
- “Esta parcela parece ter impacto relevante no mês.”
- “Revisar vencimentos pode ajudar a evitar esquecimentos.”
- “Se houver dificuldade para organizar dívidas, considere buscar orientação especializada.”

Linguagem a evitar:

- “Pague esta dívida primeiro.”
- “Esta é a pior dívida.”
- “Você precisa resolver isso agora.”
- “A única decisão correta é...”

### 3.5 Cards de resumo

Cards recomendados:

1. **Total em dívidas informadas:** soma dos valores cadastrados.
2. **Parcelas do mês:** soma do impacto mensal.
3. **Dívidas atrasadas:** quantidade e valor aproximado.
4. **Próximos vencimentos:** compromissos próximos.
5. **Comprometimento com dívidas:** parcelas em relação às receitas informadas.

### 3.6 Lista de dívidas

Cada item da lista deve mostrar:

- nome;
- tipo;
- valor total informado;
- parcela do mês;
- vencimento;
- status;
- alerta educativo, se houver;
- ação para editar ou marcar como concluída no protótipo.

Em mobile, cada dívida deve ser exibida como card, com status textual visível.

### 3.7 Alertas responsáveis

#### Dívida atrasada

“Há uma dívida marcada como atrasada. Organizar valor, vencimento e impacto mensal pode ajudar a entender melhor a situação. Se o atraso for recorrente, considere buscar apoio especializado.”

#### Parcela com alto impacto

“Esta parcela representa uma parte relevante da renda informada. Isso pode merecer revisão para entender o impacto no mês.”

#### Muitas dívidas em aberto

“Há vários compromissos financeiros em aberto. Visualizar todos em uma lista pode ajudar a evitar esquecimentos e decisões por impulso.”

#### Dados incompletos

“Algumas dívidas têm dados incompletos. Completar valor, parcela ou vencimento pode melhorar a leitura do dashboard.”

### 3.8 Mensagens educativas

- “Organizar dívidas é um passo de clareza, não de julgamento.”
- “Dívidas atrasadas podem exigir atenção especial, principalmente quando a situação se repete.”
- “O ML-Invest não define qual dívida deve ser paga primeiro; ele ajuda a visualizar dados para apoiar sua organização.”
- “Em situações complexas, busque orientação profissional ou apoio especializado.”

### 3.9 Limites para não parecer consultoria profissional

A área de dívidas deve seguir estes limites:

- não recomendar renegociação específica;
- não indicar credores, bancos ou produtos;
- não calcular estratégia de pagamento como decisão definitiva;
- não prometer redução de dívida;
- não afirmar que uma dívida é mais importante que outra em todos os casos;
- não usar pressão emocional;
- não substituir orientação jurídica, financeira ou de defesa do consumidor.

O produto pode organizar, sinalizar e educar, mas não decidir pelo usuário.

### 3.10 Estado preenchido com dados demonstrativos

| Nome | Tipo | Valor total | Parcela do mês | Vencimento | Status |
| --- | --- | ---: | ---: | --- | --- |
| Cartão de crédito | Cartão | R$ 1.800,00 | R$ 350,00 | 15/jun | Próximo vencimento |
| Empréstimo pessoal | Empréstimo | R$ 4.200,00 | R$ 420,00 | 20/jun | Em dia |
| Compra parcelada | Compra parcelada | R$ 900,00 | R$ 180,00 | 10/jun | Em dia |
| Conta antiga | Conta atrasada | R$ 240,00 | R$ 240,00 | 05/jun | Atrasada |

## 4. Área de metas financeiras

### 4.1 Objetivo da página

A página de metas financeiras deve ajudar o usuário a criar objetivos simples, acompanhar progresso e ajustar expectativas de forma realista. As metas devem ser motivadoras e visuais, mas sem prometer enriquecimento, rentabilidade ou sucesso garantido.

A página deve mostrar que metas podem mudar conforme a realidade financeira do usuário e que acompanhar pequenos avanços já pode trazer mais clareza.

### 4.2 Campos necessários para uma meta demonstrativa

O formulário demonstrativo de meta deve pedir:

- **Nome da meta:** exemplo: reserva de emergência, curso, viagem.
- **Tipo de meta:** categoria do objetivo.
- **Valor objetivo:** quanto o usuário deseja alcançar.
- **Valor atual ou reservado:** quanto já foi separado ou simulado.
- **Prazo desejado:** mês ou data aproximada.
- **Prioridade:** baixa, média ou alta, opcional.
- **Status:** em andamento, pausada, concluída ou dados incompletos.
- **Observação opcional:** texto curto.

Campos que devem ser evitados:

- recomendação de investimento específico;
- instituição financeira;
- conta bancária;
- rentabilidade esperada obrigatória;
- dados patrimoniais sensíveis.

### 4.3 Tipos de metas

Tipos recomendados:

- Reserva de emergência.
- Curso ou estudo.
- Compra planejada.
- Viagem.
- Quitar dívida.
- Reforma ou casa.
- Saúde.
- Investimento inicial educativo.
- Outros.

A meta “investimento inicial educativo” deve ser tratada como aprendizado e organização, sem indicar produtos, ativos ou rentabilidade.

### 4.4 Cards de metas

Cada card de meta deve mostrar:

- nome da meta;
- tipo;
- valor objetivo;
- valor atual;
- valor restante;
- progresso em porcentagem;
- prazo desejado;
- status;
- ação para atualizar progresso.

O card deve ser visualmente positivo, mas realista. Ele deve evitar frases como “você vai conseguir com certeza”.

### 4.5 Barras de progresso

As barras de progresso devem mostrar:

- percentual textual;
- valor atual;
- valor objetivo;
- status visual;
- mensagem curta de contexto.

Estados possíveis:

- 0%: meta criada, sem valor reservado.
- 1% a 49%: progresso inicial.
- 50% a 99%: progresso avançando.
- 100%: meta concluída.
- Dados incompletos: falta valor objetivo ou valor atual.

### 4.6 Status de evolução

Status recomendados:

- **Em andamento:** meta ativa com algum acompanhamento.
- **Sem progresso ainda:** meta criada, mas sem valor registrado.
- **Avançando:** progresso relevante no período demonstrativo.
- **Pausada:** usuário decidiu não acompanhar agora.
- **Concluída:** valor objetivo alcançado no protótipo.
- **Dados incompletos:** faltam informações essenciais.

### 4.7 Sugestões educativas

- “Uma meta realista considera receitas, despesas, dívidas e prazo.”
- “Se o saldo do mês estiver baixo, talvez faça sentido revisar prazo ou valor da meta.”
- “Metas podem ser ajustadas. Isso faz parte do planejamento.”
- “Acompanhar progresso ajuda a transformar objetivos grandes em etapas menores.”
- “Para decisões de investimento, busque informação adequada e, se necessário, orientação profissional.”

### 4.8 Estado vazio

**Título:** “Crie sua primeira meta”

**Texto:** “Uma meta simples pode ajudar a dar direção ao planejamento. Você pode começar com um objetivo pequeno e ajustar depois.”

**Ações:**

- “Criar meta”.
- “Usar metas demonstrativas”.

### 4.9 Estado preenchido com dados demonstrativos

| Nome | Tipo | Valor objetivo | Valor atual | Progresso | Prazo | Status |
| --- | --- | ---: | ---: | ---: | --- | --- |
| Reserva de segurança | Reserva de emergência | R$ 3.000,00 | R$ 900,00 | 30% | Dezembro demonstrativo | Em andamento |
| Curso profissional | Curso ou estudo | R$ 1.200,00 | R$ 480,00 | 40% | Setembro demonstrativo | Avançando |
| Viagem planejada | Viagem | R$ 2.500,00 | R$ 250,00 | 10% | Janeiro demonstrativo | Em andamento |
| Quitar compromisso | Quitar dívida | R$ 1.500,00 | R$ 300,00 | 20% | Novembro demonstrativo | Em andamento |

### 4.10 Mensagens para metas com atenção

#### Meta sem progresso

“Esta meta ainda não tem progresso registrado. Se fizer sentido para sua realidade, você pode adicionar um valor inicial ou revisar o prazo.”

#### Meta incompatível com saldo demonstrativo

“Com base no saldo informado, esta meta pode exigir mais tempo ou ajustes. Essa é uma leitura educativa, não uma regra definitiva.”

#### Meta concluída

“Meta concluída no protótipo. Você pode revisar o objetivo, criar uma nova meta ou apenas manter o registro como referência.”

## 5. Relação entre as quatro áreas e o dashboard

- **Receitas** alimentam total de entradas, saldo mensal e porcentagem poupada.
- **Despesas** alimentam total de saídas, categorias de gasto, comprometimento da renda e alertas de gastos elevados.
- **Dívidas** alimentam compromissos em aberto, parcelas do mês, alertas e diagnóstico financeiro.
- **Metas** alimentam progresso, plano educativo e leitura sobre poupança ou margem do mês.

O dashboard deve sempre deixar claro que suas leituras dependem dos dados preenchidos nessas áreas.

## 6. Alertas e mensagens educativas consolidadas

### Alertas principais

- Despesas acima das receitas.
- Comprometimento elevado da renda.
- Muitas despesas variáveis.
- Categoria de gasto com peso relevante.
- Dívida atrasada.
- Dívida com parcela relevante.
- Pouca ou nenhuma poupança estimada.
- Ausência de reserva de emergência cadastrada.
- Meta sem progresso.
- Dados insuficientes para diagnóstico.

### Mensagens educativas consolidadas

- “Esta leitura é baseada nos dados informados e tem finalidade educativa.”
- “Organizar informações financeiras ajuda a enxergar padrões, mas não determina uma decisão única.”
- “Se uma situação financeira parecer difícil de administrar, considere buscar orientação profissional ou apoio especializado.”
- “Categorias ajudam a entender hábitos, não a julgar escolhas.”
- “Metas podem ser ajustadas conforme sua realidade muda.”

## Resumo final

- **Estrutura das quatro áreas:** receitas organizam entradas; despesas organizam saídas e categorias; dívidas acompanham compromissos e status; metas mostram objetivos e progresso.
- **Campos principais:** cada formulário demonstrativo pede apenas nome, valor, categoria ou tipo, período/status e observação opcional, evitando dados sensíveis.
- **Categorias sugeridas:** receitas usam origem da entrada; despesas usam grupos de consumo; dívidas usam tipo de compromisso; metas usam objetivos pessoais e educativos.
- **Exemplos de dados demonstrativos:** foram definidos exemplos para receitas, despesas, dívidas e metas com valores fictícios e períodos demonstrativos.
- **Alertas e mensagens educativas:** os alertas indicam pontos de atenção como gastos acima da renda, dívidas atrasadas, baixa poupança e metas sem progresso, sempre com linguagem cautelosa, educativa e sem consultoria profissional.
