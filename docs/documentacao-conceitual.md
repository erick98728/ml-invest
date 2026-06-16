# Documentação conceitual do ML-Invest

## Resumo executivo

O **ML-Invest** é uma plataforma educativa de organização financeira pessoal. Seu objetivo é ajudar pessoas a entenderem receitas, despesas, dívidas, metas e saldo mensal por meio de uma experiência visual, simples, acessível e responsável.

O produto deve funcionar inicialmente como um protótipo visual e navegável com dados demonstrativos ou preenchimento manual básico. Ele não deve depender de banco de dados, autenticação, backend real, APIs externas ou integração bancária. A proposta central é validar produto, experiência, conteúdo, hierarquia visual, diagnósticos educativos e fluxos principais antes de qualquer decisão técnica.

O ML-Invest não é consultoria financeira profissional, não promete enriquecimento, não recomenda produtos financeiros específicos e não substitui apoio especializado em situações complexas.

## 1. Visão geral do projeto

O ML-Invest será um protótipo de plataforma de educação financeira e organização pessoal. Ele deve reunir informações financeiras simples em telas organizadas para que o usuário consiga entender sua situação mensal com mais clareza.

A experiência deve combinar:

- dashboard financeiro;
- registro manual ou demonstrativo de receitas;
- organização de despesas por categoria;
- acompanhamento de dívidas;
- metas financeiras;
- plano financeiro educativo;
- relatórios e gráficos simples;
- dados demonstrativos para testar cenários;
- experiência responsiva e mobile.

O foco é criar uma base conceitual sólida para orientar futuras etapas de design e implementação.

## 2. Objetivo do ML-Invest

O objetivo do ML-Invest é ajudar usuários a organizar sua vida financeira de forma simples, educativa e visual.

A plataforma deve permitir que o usuário:

- veja quanto entra e quanto sai no mês;
- entenda o saldo mensal estimado;
- identifique categorias que pesam mais no orçamento;
- acompanhe dívidas e compromissos;
- crie metas realistas;
- receba orientações educativas e cautelosas;
- acompanhe evolução mensal com gráficos simples.

O produto deve reduzir confusão e aumentar clareza, sem criar pressão, culpa ou promessa de resultado financeiro.

## 3. Público-alvo

### Público principal

Pessoas iniciantes em organização financeira pessoal, especialmente quem:

- não usa planilhas ou acha planilhas difíceis;
- tem dificuldade para acompanhar receitas e despesas;
- quer entender melhor o saldo mensal;
- precisa organizar dívidas e metas;
- prefere uma experiência visual, amigável e sem linguagem técnica.

### Público secundário

Pessoas que já possuem algum hábito de controle financeiro, mas desejam:

- uma visão mais visual do mês;
- relatórios simples;
- diagnóstico educativo;
- organização de metas;
- uma forma mais amigável de revisar padrões de gasto.

## 4. Problemas que o produto resolve

O ML-Invest ajuda a resolver problemas comuns de organização financeira:

- falta de clareza sobre entradas e saídas;
- dificuldade para saber para onde o dinheiro vai;
- gastos variáveis que crescem sem percepção;
- dívidas esquecidas ou atrasadas;
- metas sem acompanhamento;
- sensação de desorganização;
- dificuldade de interpretar dados financeiros;
- medo ou culpa ao lidar com dinheiro;
- confusão entre educação financeira e promessa de ganho rápido.

## 5. Limites éticos e financeiros

O ML-Invest deve respeitar limites claros:

- não oferecer consultoria financeira profissional;
- não recomendar investimentos, bancos, corretoras, cartões, empréstimos ou produtos específicos;
- não prometer enriquecimento, rentabilidade ou independência financeira rápida;
- não afirmar que uma ação trará resultado garantido;
- não decidir pelo usuário qual dívida pagar;
- não incentivar risco financeiro;
- não pedir dados sensíveis;
- não substituir orientação profissional em situações complexas;
- não usar linguagem de urgência artificial ou medo.

Toda leitura financeira deve ser apresentada como educativa e baseada nos dados informados ou demonstrativos.

## 6. Tom de comunicação

O tom de comunicação deve ser:

- claro;
- calmo;
- educativo;
- acolhedor;
- objetivo;
- responsável;
- não julgador;
- acessível para iniciantes.

### Linguagem recomendada

- “Com base nos dados informados...”
- “Este ponto pode merecer atenção.”
- “Considere revisar se fizer sentido para sua realidade.”
- “Esta orientação é educativa.”
- “Se a situação for complexa, busque orientação profissional.”

### Linguagem a evitar

- “Você está fazendo errado.”
- “Resolva isso agora.”
- “Fique rico rapidamente.”
- “Esta é a melhor decisão.”
- “Pague esta dívida primeiro sem dúvidas.”
- “Rentabilidade garantida.”

## 7. Identidade visual

A identidade visual do ML-Invest deve ser moderna, limpa, acessível e amigável. A estética deve lembrar uma plataforma de marketplace financeiro, com cards organizados, indicadores visuais simples e seções bem separadas.

### Sensações desejadas

- confiança;
- organização;
- simplicidade;
- acolhimento;
- clareza;
- controle gradual;
- segurança emocional.

### Direção visual

- base clara com fundos neutros;
- cor principal em tons de azul, verde-azulado ou azul-petróleo claro;
- receitas em verde equilibrado;
- despesas em azul, cinza-azulado ou laranja suave;
- dívidas em roxo, vinho suave ou marrom quente;
- metas em turquesa, azul claro ou lilás;
- alertas em amarelo ou âmbar;
- risco em vermelho controlado, usado com moderação.

A interface não deve parecer um sistema bancário complexo, frio ou burocrático.

## 8. Estrutura de páginas

As páginas principais planejadas são:

1. **Início:** apresenta a proposta e guia o usuário para começar.
2. **Meu mês:** dashboard financeiro com visão geral.
3. **Receitas:** organização de entradas de dinheiro.
4. **Despesas:** organização de gastos por categoria.
5. **Dívidas:** acompanhamento de compromissos financeiros.
6. **Metas:** acompanhamento de objetivos financeiros.
7. **Plano educativo:** prioridades de organização financeira.
8. **Relatórios:** gráficos e evolução mensal.
9. **Perfil demo:** preferências simples e alternância de dados demonstrativos.

O dashboard deve ser o centro da experiência, conectando todas as áreas.

## 9. Componentes principais

Os componentes essenciais do ML-Invest são:

- cabeçalho principal;
- navegação desktop e mobile;
- card de indicador financeiro;
- card de alerta financeiro;
- card de diagnóstico mensal;
- card de meta;
- card de dívida;
- card de movimentação recente;
- card educativo;
- botões primário, secundário e de ação rápida;
- campos de formulário;
- seletor de categoria;
- filtro por período;
- lista de transações;
- tabela simples adaptável;
- gráfico de categorias;
- gráfico de evolução mensal;
- barra de progresso;
- selo de status;
- painel de cadastro demonstrativo;
- mensagem de estado vazio;
- bloco de aviso responsável;
- bloco de dica educativa;
- área de resumo financeiro.

Os componentes devem ser reutilizáveis, acessíveis e consistentes entre páginas.

## 10. Funcionalidades por página

### Início

- explicar a proposta do produto;
- apresentar áreas principais;
- destacar caráter educativo;
- permitir iniciar com dados demonstrativos.

### Meu mês

- mostrar receitas, despesas, saldo, porcentagem poupada e comprometimento;
- exibir diagnóstico mensal;
- listar alertas financeiros;
- mostrar categorias, dívidas, metas e movimentações recentes.

### Receitas

- adicionar receita demonstrativa;
- classificar por categoria;
- separar fixa, variável ou pontual;
- listar entradas do período.

### Despesas

- adicionar despesa demonstrativa;
- classificar por categoria;
- separar fixa, variável e essencial;
- mostrar alertas de gastos elevados.

### Dívidas

- cadastrar dívida demonstrativa;
- mostrar valor total, parcela, vencimento e status;
- destacar dívidas atrasadas ou relevantes;
- reforçar limites de consultoria.

### Metas

- criar metas demonstrativas;
- acompanhar progresso;
- exibir barra de progresso;
- sugerir revisão cautelosa de prazo ou valor.

### Plano educativo

- sugerir prioridades de organização;
- mostrar pequenas ações práticas;
- exibir checklist mensal;
- conectar dashboard, dívidas, despesas e metas.

### Relatórios

- mostrar evolução mensal;
- comparar receitas e despesas;
- exibir categorias de gasto;
- acompanhar dívidas, metas, percentual poupado e comprometimento.

### Perfil demo

- exibir nome demonstrativo;
- alternar cenários de dados;
- restaurar dados demonstrativos;
- reforçar funcionamento local e fictício.

## 11. Regras de cálculo demonstrativas

As regras de cálculo devem ser simples e transparentes.

### Total de receitas

```text
total de receitas = soma das receitas do período
```

### Total de despesas

```text
total de despesas = soma das despesas do período
```

### Saldo mensal

```text
saldo mensal = total de receitas - total de despesas
```

### Porcentagem poupada

```text
porcentagem poupada = saldo positivo / total de receitas * 100
```

Se o saldo for zero ou negativo, exibir 0% ou “sem poupança estimada no período”.

### Comprometimento da renda

```text
comprometimento = total de despesas / total de receitas * 100
```

### Progresso das metas

```text
progresso = valor atual / valor objetivo * 100
```

### Total de dívidas em aberto

```text
total de dívidas em aberto = soma das dívidas com status diferente de concluída
```

Esses cálculos são simplificados e servem apenas para o protótipo educativo.

## 12. Dados demonstrativos

O perfil principal demonstrativo deve usar o nome **Marina Demo**.

### Cenário principal de atenção

- receitas: R$ 5.000,00;
- despesas: R$ 4.800,00;
- saldo: R$ 200,00;
- porcentagem poupada: 4%;
- comprometimento da renda: 96%;
- dívidas em aberto: R$ 7.140,00;
- dívidas atrasadas: 1;
- metas cadastradas: 4.

### Cenário positivo

- receitas maiores que despesas;
- saldo positivo relevante;
- sem dívidas atrasadas;
- metas em evolução;
- alertas informativos.

### Cenário crítico

- despesas acima das receitas;
- saldo negativo;
- dívidas atrasadas;
- metas possivelmente pausadas;
- alertas com tom sério e acolhedor.

Todos os dados devem ser identificados como fictícios e demonstrativos.

## 13. Regras de diagnóstico financeiro educativo

O diagnóstico financeiro deve interpretar dados de forma cautelosa.

### Possíveis estados

- **positivo:** saldo positivo e metas evoluindo;
- **neutro:** situação equilibrada, sem pressão evidente;
- **atenção:** margem baixa, gastos variáveis relevantes ou dados incompletos;
- **crítico:** saldo negativo, despesas acima das receitas ou dívidas atrasadas relevantes.

### Regras de linguagem

- sempre usar “com base nos dados informados”;
- evitar conclusões absolutas;
- explicar o motivo do diagnóstico;
- sugerir revisão, não impor decisão;
- recomendar apoio profissional em situações complexas.

## 14. Regras do plano financeiro educativo

O plano educativo deve sugerir prioridades simples.

### Ordem sugerida de prioridade

1. Completar dados essenciais.
2. Revisar saldo negativo.
3. Observar dívidas atrasadas ou relevantes.
4. Organizar despesas essenciais.
5. Revisar gastos variáveis.
6. Criar ou revisar reserva de emergência.
7. Ajustar metas.
8. Acompanhar evolução mensal.

### Tipos de ações sugeridas

- classificar despesas sem categoria;
- revisar maiores categorias de gasto;
- conferir dívidas próximas do vencimento;
- criar meta de reserva;
- ajustar prazo de uma meta;
- acompanhar relatório mensal.

O plano nunca deve prometer resultado nem definir uma decisão obrigatória.

## 15. Relatórios e gráficos

Os relatórios devem ajudar o usuário a perceber padrões.

### Relatórios principais

- resumo financeiro mensal;
- receitas x despesas;
- evolução do saldo;
- distribuição de gastos por categoria;
- evolução das dívidas;
- evolução das metas;
- percentual poupado;
- comprometimento da renda;
- relatório educativo mensal.

### Gráficos recomendados

- barras simples;
- linhas simples;
- rosca simples com poucas categorias;
- barras de progresso.

Todo gráfico deve ter texto explicativo e não deve prever futuro, rentabilidade ou comportamento financeiro garantido.

## 16. Diretrizes mobile

A experiência mobile deve priorizar:

- coluna única;
- resumo primeiro;
- cards empilhados;
- navegação inferior simples;
- filtros em painel;
- gráficos compactos;
- tabelas convertidas em listas;
- botões fáceis de tocar;
- textos curtos;
- alertas compactos;
- acessibilidade visual.

### Ordem mobile do dashboard

1. Cabeçalho e período.
2. Aviso demonstrativo.
3. Saldo mensal.
4. Receitas e despesas.
5. Diagnóstico.
6. Alertas.
7. Categorias.
8. Dívidas.
9. Metas.
10. Movimentações.
11. Plano educativo.

## 17. Estados vazios

Estados vazios devem orientar o próximo passo sem parecer erro.

### Exemplos

- “Comece adicionando uma receita.”
- “Adicione uma despesa para entender melhor seus gastos.”
- “Você ainda não cadastrou dívidas. Se não houver dívidas, tudo bem.”
- “Crie sua primeira meta.”
- “Ainda não há dados suficientes para gerar relatórios.”

Cada estado vazio deve ter:

- título claro;
- explicação curta;
- ação principal;
- opção de usar dados demonstrativos quando fizer sentido.

## 18. Estados de alerta

Alertas devem ser úteis, responsáveis e não alarmistas.

### Tipos de alerta

- informação;
- atenção;
- risco controlado;
- dados insuficientes.

### Exemplos

- “Despesas acima das receitas.”
- “Dívida atrasada cadastrada.”
- “Gastos variáveis em destaque.”
- “Pouca margem para metas.”
- “Dados insuficientes para diagnóstico.”

Alertas devem explicar o motivo e indicar uma ação simples de revisão.

## 19. Critérios de qualidade da interface

A interface deve ser considerada adequada quando:

- o usuário entende a situação do mês em poucos segundos;
- os valores principais são fáceis de encontrar;
- os cards têm hierarquia clara;
- os alertas não assustam;
- os gráficos são legíveis;
- os textos são curtos e educativos;
- a navegação é simples;
- o mobile funciona bem;
- os dados demonstrativos estão identificados;
- não há promessa de resultado financeiro;
- não há recomendação de produto financeiro específico;
- estados vazios orientam com clareza;
- acessibilidade visual foi considerada.

## 20. Roadmap sugerido em fases futuras

### Fase 1 — Protótipo conceitual navegável

- telas principais com dados demonstrativos;
- dashboard visual;
- áreas de receitas, despesas, dívidas e metas;
- plano educativo;
- relatórios simples;
- experiência mobile;
- microcopy responsável.

### Fase 2 — Protótipo interativo com dados manuais temporários

- cadastro, edição e exclusão simulados;
- alternância de cenários;
- filtros funcionais no protótipo;
- atualização visual dos indicadores;
- validação de estados vazios e alertas.

### Fase 3 — Validação com usuários

- testar clareza da proposta;
- observar entendimento dos diagnósticos;
- validar hierarquia do dashboard;
- ajustar linguagem;
- revisar acessibilidade e mobile.

### Fase 4 — Planejamento técnico futuro

- apenas depois da validação conceitual, avaliar tecnologia, persistência de dados, autenticação e possíveis integrações.

### Fase 5 — Evoluções futuras

- personalização mais avançada;
- histórico real de períodos;
- exportações simples;
- conteúdos educativos adicionais;
- melhorias de acessibilidade;
- novos relatórios, sempre sem transformar o produto em consultoria profissional.

## 21. O que ficará fora da primeira versão

A primeira versão não deve incluir:

- autenticação real;
- banco de dados real;
- backend;
- integração bancária;
- APIs externas;
- recomendação de investimentos;
- recomendação de crédito, cartões ou empréstimos;
- consultoria financeira personalizada;
- importação automática de extratos;
- cálculo tributário;
- projeções de rentabilidade;
- alertas de cobrança;
- dados sensíveis do usuário;
- relatórios financeiros avançados.

## 22. Riscos e cuidados do produto

### Riscos

- usuário interpretar diagnóstico como consultoria profissional;
- alertas causarem ansiedade;
- linguagem parecer culpabilizadora;
- gráficos parecerem técnicos demais;
- metas sugerirem promessa de enriquecimento;
- dívidas serem tratadas como cobrança;
- dados demonstrativos serem confundidos com dados reais.

### Cuidados

- reforçar aviso educativo;
- usar linguagem cautelosa;
- evitar recomendações definitivas;
- explicar dados demonstrativos;
- manter textos curtos;
- limitar complexidade visual;
- sugerir apoio profissional quando necessário;
- revisar microcopy de alertas e diagnósticos.

## 23. Glossário simples

### Receita

Dinheiro que entra no período, como salário, renda extra ou reembolso.

### Despesa

Dinheiro que sai no período, como aluguel, mercado, transporte ou lazer.

### Saldo mensal

Diferença entre receitas e despesas do período.

### Porcentagem poupada

Parte estimada da receita que sobrou no mês, quando o saldo é positivo.

### Comprometimento da renda

Proporção da renda associada a despesas e parcelas no período.

### Dívida em aberto

Compromisso financeiro ainda não concluído.

### Dívida atrasada

Compromisso marcado como não pago dentro do prazo demonstrativo.

### Meta financeira

Objetivo que o usuário deseja acompanhar, como reserva, curso, viagem ou quitar compromisso.

### Reserva de emergência

Valor separado para ajudar em imprevistos. No ML-Invest, deve ser tratada como meta educativa, sem recomendação de produto financeiro.

### Gasto variável

Despesa que muda de valor ou frequência, como lazer, compras ou transporte por aplicativo.

### Diagnóstico educativo

Leitura simples baseada nos dados informados, sem substituir orientação profissional.

### Dados demonstrativos

Informações fictícias usadas para testar e visualizar o protótipo.

## Escopo da primeira versão

A primeira versão deve entregar um protótipo visual e navegável com:

- página inicial;
- dashboard financeiro;
- receitas;
- despesas;
- dívidas;
- metas;
- plano financeiro educativo;
- relatórios simples;
- perfil demo;
- dados demonstrativos;
- estados positivos, de atenção e críticos;
- experiência mobile;
- textos educativos e responsáveis.

## Itens fora de escopo

Ficam fora do escopo inicial:

- tecnologia definida;
- autenticação;
- backend;
- banco de dados;
- integração bancária;
- APIs externas;
- dados reais obrigatórios;
- recomendações financeiras profissionais;
- produtos financeiros específicos;
- projeções de investimento;
- relatórios avançados.

## Próximos passos recomendados

1. Transformar a documentação em wireframes de baixa fidelidade.
2. Validar ordem de leitura do dashboard em desktop e mobile.
3. Criar exemplos de telas com dados demonstrativos.
4. Revisar microcopy de diagnósticos, alertas e plano educativo.
5. Validar acessibilidade visual e legibilidade mobile.
6. Testar a compreensão do produto com usuários iniciantes.
7. Ajustar escopo antes de qualquer decisão técnica.
