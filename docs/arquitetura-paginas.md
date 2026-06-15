# Arquitetura inicial das páginas do ML-Invest

## 1. Mapa geral do site

A primeira versão do ML-Invest deve ter uma arquitetura simples, compreensível e voltada para protótipo com dados manuais ou demonstrativos.

```text
ML-Invest
├── Página inicial
├── Dashboard financeiro
├── Receitas
├── Despesas
├── Dívidas
├── Metas financeiras
├── Plano financeiro educativo
├── Relatórios
└── Configurações ou perfil demonstrativo
```

A navegação deve manter o dashboard como centro da experiência. As demais páginas detalham áreas específicas e retornam para o resumo geral.

## 2. Páginas recomendadas

| Página | Nome recomendado | Função principal |
| --- | --- | --- |
| Página inicial | Início | Apresentar a proposta do ML-Invest e conduzir o usuário ao protótipo. |
| Dashboard financeiro | Meu mês | Mostrar a visão geral de receitas, despesas, dívidas, metas e saldo mensal. |
| Receitas | Receitas | Organizar entradas de dinheiro informadas manualmente. |
| Despesas | Despesas | Organizar saídas por categoria e identificar padrões de gasto. |
| Dívidas | Dívidas | Visualizar compromissos financeiros e pontos de atenção. |
| Metas financeiras | Metas | Acompanhar objetivos financeiros de forma simples e realista. |
| Plano financeiro educativo | Plano educativo | Reunir orientações educativas baseadas nos dados demonstrativos ou preenchidos. |
| Relatórios | Relatórios | Apresentar leituras visuais simples sobre o mês e categorias. |
| Configurações ou perfil demonstrativo | Perfil demo | Ajustar informações demonstrativas e preferências básicas do protótipo. |

## 3. Página inicial — Início

### Objetivo

Explicar rapidamente o que é o ML-Invest, para quem ele serve e quais informações o usuário poderá organizar.

### Principais seções

- **Apresentação do produto:** frase curta de valor e explicação educativa.
- **O que você pode organizar:** cards para receitas, despesas, dívidas e metas.
- **Como funciona:** passos simples para preencher dados, visualizar o mês e receber orientações.
- **Aviso de responsabilidade:** reforço de que o produto é educativo e não substitui orientação profissional.
- **Chamada para começar:** botão para acessar o dashboard ou iniciar com dados demonstrativos.

### Conteúdo esperado

- Texto direto sobre organização financeira pessoal.
- Cards com ícones simples.
- Benefícios sem prometer ganhos financeiros.
- Explicação sobre uso manual ou demonstrativo.

### Ações principais

- Começar a organizar o mês.
- Entrar no dashboard com dados demonstrativos.

### Ações secundárias

- Ler como o ML-Invest funciona.
- Ver limites educativos do produto.

### Dados exibidos

- Nenhum dado financeiro real obrigatório.
- Exemplos ilustrativos de categorias e cards.

### Mensagens educativas necessárias

- “O ML-Invest ajuda você a visualizar informações financeiras de forma educativa.”
- “As orientações não substituem consultoria financeira profissional.”

### Estado vazio

A página inicial não deve parecer vazia. Mesmo sem dados, deve apresentar proposta, benefícios e caminho claro para começar.

### Estado com dados demonstrativos

Pode mostrar uma prévia de dashboard com valores fictícios claramente identificados como exemplo.

### Alertas ou avisos

- Aviso de uso educativo.
- Aviso de que dados demonstrativos não representam recomendação financeira.

## 4. Dashboard financeiro — Meu mês

### Objetivo

Ser a visão central do produto, mostrando a situação geral do mês em poucos segundos.

### Principais seções

- **Resumo mensal:** receitas, despesas, saldo estimado e situação geral.
- **Cards principais:** receitas, despesas, dívidas e metas.
- **Distribuição de despesas:** gráfico simples por categoria.
- **Progresso de metas:** indicadores de avanço.
- **Pontos de atenção:** mensagens educativas sobre saldo, dívidas ou gastos concentrados.
- **Próximas ações:** atalhos para adicionar ou revisar informações.

### Conteúdo esperado

- Valores resumidos e fáceis de comparar.
- Indicadores visuais simples.
- Textos curtos, cautelosos e educativos.

### Ações principais

- Ver situação geral do mês.
- Acessar receitas, despesas, dívidas ou metas.
- Revisar pontos de atenção.

### Ações secundárias

- Ver relatórios.
- Acessar plano educativo.
- Alternar entre dados vazios e demonstrativos no protótipo.

### Dados exibidos

- Total de receitas.
- Total de despesas.
- Saldo estimado.
- Total de dívidas ou compromissos.
- Progresso das metas.
- Categorias de maior impacto.

### Mensagens educativas necessárias

- “Seu saldo mensal é uma estimativa com base nos dados informados.”
- “Categorias com maior peso podem merecer revisão, sem indicar necessariamente um erro.”
- “Use estes dados como apoio para organização, não como recomendação financeira personalizada.”

### Estado vazio

Mostrar cards sem valores preenchidos, orientando o usuário a adicionar receitas, despesas, dívidas e metas. O estado vazio deve explicar que o dashboard ficará mais útil conforme as informações forem preenchidas.

### Estado com dados demonstrativos

Mostrar um mês fictício com receitas, despesas, saldo, dívidas, metas e gráficos simples. Todos os dados devem ser identificados como demonstração.

### Alertas ou avisos

- Saldo estimado negativo.
- Despesas próximas ou acima das receitas.
- Dívidas com peso relevante no mês.
- Metas sem prazo ou sem valor definido.

## 5. Receitas

### Objetivo

Permitir que o usuário organize entradas de dinheiro de forma simples e entenda a composição das receitas do mês.

### Principais seções

- **Resumo de receitas:** total informado no mês.
- **Lista de receitas:** salário, renda extra, benefícios, reembolsos ou outras entradas.
- **Categorias de receitas:** agrupamento simples por origem.
- **Orientação educativa:** explicação sobre receita fixa, variável e recorrente.

### Conteúdo esperado

- Nome da receita.
- Valor.
- Categoria.
- Recorrência demonstrativa.
- Observação opcional.

### Ações principais

- Adicionar receita.
- Editar receita.
- Remover receita demonstrativa.

### Ações secundárias

- Filtrar por categoria.
- Marcar receita como recorrente.
- Ver impacto no dashboard.

### Dados exibidos

- Total de receitas.
- Quantidade de entradas cadastradas.
- Maiores fontes de receita.
- Receitas fixas e variáveis.

### Mensagens educativas necessárias

- “Receitas variáveis podem mudar de um mês para outro; considere isso ao planejar despesas.”
- “Organizar entradas ajuda a entender o limite real do orçamento mensal.”

### Estado vazio

Exibir convite para adicionar a primeira receita e explicar que ela será usada no resumo mensal.

### Estado com dados demonstrativos

Mostrar exemplos como salário, renda extra e reembolso, deixando claro que são dados fictícios.

### Alertas ou avisos

- Receita variável muito concentrada.
- Ausência de receita informada, impedindo leitura completa do saldo.

## 6. Despesas

### Objetivo

Ajudar o usuário a registrar saídas de dinheiro, visualizar categorias de maior impacto e identificar padrões de gasto.

### Principais seções

- **Resumo de despesas:** total gasto no mês.
- **Lista de despesas:** registros manuais por categoria.
- **Categorias:** moradia, alimentação, transporte, saúde, lazer, educação, contas e outros.
- **Gráfico de distribuição:** visualização simples das maiores categorias.
- **Orientação educativa:** leitura cautelosa sobre concentração de gastos.

### Conteúdo esperado

- Nome da despesa.
- Valor.
- Categoria.
- Data ou mês de referência demonstrativo.
- Recorrência opcional.

### Ações principais

- Adicionar despesa.
- Editar despesa.
- Ver categorias mais relevantes.

### Ações secundárias

- Filtrar por categoria.
- Marcar despesa como fixa ou variável.
- Acessar relatório de despesas.

### Dados exibidos

- Total de despesas.
- Percentual aproximado das despesas em relação às receitas.
- Maiores categorias.
- Despesas fixas e variáveis.

### Mensagens educativas necessárias

- “Despesas fixas ajudam a entender quanto do orçamento já está comprometido.”
- “Gastos concentrados em uma categoria podem merecer uma revisão cuidadosa.”

### Estado vazio

Mostrar orientação para cadastrar a primeira despesa e explicar que o registro ajuda a entender para onde o dinheiro vai.

### Estado com dados demonstrativos

Mostrar exemplos de aluguel, mercado, transporte, internet e lazer com valores fictícios.

### Alertas ou avisos

- Despesas acima das receitas.
- Categoria com peso muito alto no mês.
- Muitas despesas sem categoria.

## 7. Dívidas

### Objetivo

Organizar compromissos financeiros, parcelas e dívidas de forma clara, sem linguagem de culpa ou medo.

### Principais seções

- **Resumo de dívidas:** total demonstrativo e impacto mensal.
- **Lista de dívidas:** nome, valor, parcela, vencimento e status.
- **Prioridades de atenção:** dívidas vencidas, próximas do vencimento ou com parcela alta.
- **Orientação educativa:** explicação sobre acompanhamento e busca de apoio profissional quando necessário.

### Conteúdo esperado

- Nome da dívida ou compromisso.
- Valor total informado.
- Valor da parcela.
- Data de vencimento demonstrativa.
- Status: em dia, próximo vencimento, atrasado ou concluído.

### Ações principais

- Adicionar dívida.
- Registrar parcela demonstrativa.
- Revisar dívidas com maior impacto mensal.

### Ações secundárias

- Filtrar por status.
- Ver impacto no dashboard.
- Ler orientação educativa sobre organização de dívidas.

### Dados exibidos

- Total de dívidas informadas.
- Soma das parcelas do mês.
- Quantidade de compromissos.
- Dívidas próximas do vencimento.

### Mensagens educativas necessárias

- “Organizar dívidas ajuda a enxergar compromissos e evitar decisões por impulso.”
- “Em situações de endividamento grave, considere buscar orientação profissional ou apoio especializado.”

### Estado vazio

Mostrar mensagem acolhedora explicando que o usuário pode registrar compromissos se existirem, mas que não é obrigatório ter dívidas.

### Estado com dados demonstrativos

Mostrar exemplos fictícios de cartão, empréstimo pessoal e parcela de compra, com aviso de demonstração.

### Alertas ou avisos

- Dívida vencida.
- Parcela com impacto relevante no orçamento.
- Soma de dívidas pressionando o saldo mensal.

## 8. Metas financeiras

### Objetivo

Ajudar o usuário a criar metas simples e acompanhar progresso de forma realista, sem promessa de enriquecimento.

### Principais seções

- **Resumo de metas:** quantidade de metas e progresso geral.
- **Lista de metas:** nome, valor desejado, valor acumulado e prazo.
- **Indicadores de progresso:** barras simples e status.
- **Orientação educativa:** incentivo a metas realistas e ajustáveis.

### Conteúdo esperado

- Nome da meta.
- Valor objetivo.
- Valor já reservado ou simulado.
- Prazo desejado.
- Prioridade opcional.

### Ações principais

- Criar meta.
- Atualizar progresso.
- Revisar prazo ou valor.

### Ações secundárias

- Pausar meta.
- Marcar como concluída.
- Ver impacto no plano educativo.

### Dados exibidos

- Total de metas.
- Progresso por meta.
- Valor restante.
- Prazo demonstrativo.

### Mensagens educativas necessárias

- “Metas podem ser ajustadas conforme sua realidade financeira muda.”
- “Uma meta realista considera receitas, despesas e compromissos do mês.”

### Estado vazio

Mostrar convite para criar uma primeira meta simples, como reserva para uma conta futura ou objetivo pessoal.

### Estado com dados demonstrativos

Mostrar metas fictícias como reserva de emergência, curso, viagem ou quitar compromisso, sem sugerir investimento específico.

### Alertas ou avisos

- Meta sem prazo.
- Meta com valor incompatível com saldo demonstrativo.
- Progresso parado por muitos períodos no protótipo demonstrativo.

## 9. Plano financeiro educativo

### Objetivo

Reunir orientações educativas simples baseadas nos dados informados ou demonstrativos, ajudando o usuário a entender próximos passos possíveis.

### Principais seções

- **Resumo educativo:** leitura geral da situação.
- **Sugestões de organização:** ações gerais e não definitivas.
- **Pontos de atenção:** saldo, despesas, dívidas e metas.
- **Conteúdos curtos:** explicações sobre orçamento, categorias, dívidas e metas.
- **Aviso de responsabilidade:** reforço do caráter educativo.

### Conteúdo esperado

- Diagnósticos cautelosos.
- Orientações práticas sem recomendar produtos financeiros.
- Passos simples de revisão e organização.

### Ações principais

- Ler orientação do mês.
- Ir para página relacionada ao ponto de atenção.
- Revisar dados que originaram a orientação.

### Ações secundárias

- Marcar orientação como lida.
- Ver explicação de um termo financeiro.
- Retornar ao dashboard.

### Dados exibidos

- Situação geral do mês.
- Categorias de maior impacto.
- Compromissos financeiros relevantes.
- Metas em andamento.

### Mensagens educativas necessárias

- “Esta leitura é educativa e baseada nos dados informados.”
- “Antes de decisões importantes, avalie seu contexto e, se necessário, busque orientação profissional.”

### Estado vazio

Explicar que o plano educativo será mais útil depois que receitas, despesas, dívidas e metas forem preenchidas.

### Estado com dados demonstrativos

Mostrar diagnóstico fictício com frases como “pode indicar” e “merece atenção”, sem recomendações definitivas.

### Alertas ou avisos

- Dados insuficientes para diagnóstico.
- Situação de saldo negativo recorrente no exemplo.
- Dívidas com possível impacto relevante.

## 10. Relatórios

### Objetivo

Apresentar leituras visuais simples sobre o mês para apoiar a compreensão de padrões financeiros.

### Principais seções

- **Resumo visual:** receitas, despesas e saldo.
- **Relatório por categoria:** despesas agrupadas.
- **Comparativo demonstrativo:** visão entre períodos fictícios, se útil para o protótipo.
- **Metas e dívidas:** evolução simplificada.
- **Notas educativas:** interpretação dos gráficos.

### Conteúdo esperado

- Gráficos simples.
- Listas resumidas.
- Comparações claras e não técnicas.
- Textos explicativos curtos.

### Ações principais

- Ver relatório do mês.
- Filtrar por área: receitas, despesas, dívidas ou metas.
- Entender categorias de maior impacto.

### Ações secundárias

- Alternar período demonstrativo.
- Acessar detalhes da categoria.
- Voltar ao dashboard.

### Dados exibidos

- Total de receitas.
- Total de despesas.
- Saldo estimado.
- Distribuição por categoria.
- Evolução demonstrativa de metas e dívidas.

### Mensagens educativas necessárias

- “Relatórios ajudam a observar padrões, mas não determinam uma decisão única.”
- “Comparações demonstrativas servem para facilitar o entendimento do protótipo.”

### Estado vazio

Mostrar que relatórios dependem de dados preenchidos e oferecer atalhos para cadastrar receitas e despesas.

### Estado com dados demonstrativos

Exibir gráficos fictícios claramente marcados como demonstração.

### Alertas ou avisos

- Relatório incompleto por falta de dados.
- Categorias sem classificação.
- Comparativo demonstrativo sem validade financeira real.

## 11. Configurações ou perfil demonstrativo — Perfil demo

### Objetivo

Permitir ajustes básicos da experiência demonstrativa sem envolver autenticação, dados reais obrigatórios ou integrações externas.

### Principais seções

- **Perfil demonstrativo:** nome fictício ou apelido local do protótipo.
- **Preferências visuais:** modo de visualização conceitual, tamanho de texto ou opção de reduzir animações.
- **Dados do protótipo:** alternar entre estado vazio e dados demonstrativos.
- **Avisos e limites:** texto sobre caráter educativo.

### Conteúdo esperado

- Informações demonstrativas simples.
- Preferências não técnicas.
- Explicação de que não há conta bancária conectada.

### Ações principais

- Alterar nome demonstrativo.
- Ativar ou limpar dados demonstrativos.
- Ajustar preferências de visualização.

### Ações secundárias

- Ler termos educativos do protótipo.
- Voltar ao dashboard.

### Dados exibidos

- Nome demonstrativo.
- Estado atual: vazio ou demonstração.
- Preferências visuais básicas.

### Mensagens educativas necessárias

- “Este protótipo usa dados manuais ou demonstrativos.”
- “Nenhuma conta bancária precisa ser conectada nesta versão.”

### Estado vazio

Mostrar perfil sem dados personalizados, com opção de usar exemplo demonstrativo.

### Estado com dados demonstrativos

Mostrar perfil fictício e dados simulados ativos.

### Alertas ou avisos

- Confirmação antes de limpar dados demonstrativos.
- Aviso de que preferências não representam configuração financeira real.

## 12. Relação entre as páginas

- **Início** apresenta a proposta e leva ao **Dashboard financeiro**.
- **Dashboard financeiro** resume tudo e conecta para **Receitas**, **Despesas**, **Dívidas**, **Metas**, **Plano educativo** e **Relatórios**.
- **Receitas**, **Despesas**, **Dívidas** e **Metas** alimentam visualmente os dados do **Dashboard financeiro**.
- **Plano educativo** interpreta informações vindas do dashboard e direciona o usuário para páginas específicas quando houver pontos de atenção.
- **Relatórios** aprofundam a visualização do dashboard, sem substituir o resumo principal.
- **Perfil demo** controla preferências e dados demonstrativos do protótipo.

## 13. Navegação principal recomendada

A navegação principal deve ser simples e ter poucos itens fixos:

1. Início
2. Meu mês
3. Receitas
4. Despesas
5. Dívidas
6. Metas
7. Plano educativo
8. Relatórios
9. Perfil demo

Se houver necessidade de reduzir a navegação, priorizar: **Meu mês**, **Receitas**, **Despesas**, **Metas** e **Plano educativo**, deixando **Dívidas**, **Relatórios** e **Perfil demo** em menu secundário.

## 14. Navegação mobile recomendada

No mobile, a navegação deve ser mais enxuta:

- **Barra inferior principal:** Meu mês, Receitas, Despesas, Metas e Plano.
- **Menu adicional:** Início, Dívidas, Relatórios e Perfil demo.
- **Atalhos contextuais:** cards do dashboard devem levar diretamente para cada área.
- **Ações rápidas:** botão claro para adicionar receita, despesa, dívida ou meta conforme a página atual.

A navegação mobile deve evitar menus longos, excesso de opções simultâneas e termos técnicos.

## 15. Ordem ideal de construção das páginas para o protótipo

1. **Página inicial:** apresenta a proposta e dá contexto ao usuário.
2. **Dashboard financeiro:** valida a visão central do produto.
3. **Receitas:** permite entrada básica de dados positivos do mês.
4. **Despesas:** permite entender saídas e categorias.
5. **Metas financeiras:** cria motivação e planejamento simples.
6. **Dívidas:** adiciona compromissos e pontos de atenção com cuidado.
7. **Plano financeiro educativo:** transforma dados em orientação cautelosa.
8. **Relatórios:** aprofunda visualizações depois que os dados principais existem.
9. **Perfil demo:** permite alternar dados demonstrativos e ajustar preferências básicas.

## 16. Fluxo principal do usuário

1. O usuário chega na **Página inicial** e entende a proposta educativa do ML-Invest.
2. Ele acessa o **Dashboard financeiro** para ver a estrutura geral do mês.
3. Ele adiciona ou visualiza **Receitas** e **Despesas**.
4. Ele registra **Dívidas** e **Metas financeiras**, se fizer sentido para sua situação.
5. Ele retorna ao **Dashboard financeiro** para observar saldo, categorias e pontos de atenção.
6. Ele consulta o **Plano financeiro educativo** para receber orientações simples e responsáveis.
7. Ele acessa **Relatórios** para entender padrões visuais com mais detalhe.
8. Ele usa o **Perfil demo** apenas quando precisar ajustar preferências ou dados demonstrativos.

## Resumo final

- **Mapa das páginas:** Início, Meu mês, Receitas, Despesas, Dívidas, Metas, Plano educativo, Relatórios e Perfil demo.
- **Descrição curta de cada página:** a página inicial explica o produto; o dashboard resume o mês; receitas, despesas, dívidas e metas organizam dados específicos; o plano educativo interpreta os dados; relatórios visualizam padrões; perfil demo ajusta a experiência demonstrativa.
- **Fluxo principal do usuário:** entender a proposta, acessar o dashboard, preencher dados essenciais, revisar o resumo, ler orientações educativas e consultar relatórios simples.
- **Páginas prioritárias para o protótipo:** Página inicial, Dashboard financeiro, Receitas, Despesas, Metas e Plano educativo. Dívidas, Relatórios e Perfil demo entram em seguida para completar a experiência mínima.
- **Recomendações para a próxima fase:** criar wireframes de baixa fidelidade para as páginas prioritárias, definir componentes comuns de cards e listas, escrever microtextos educativos e preparar dados demonstrativos coerentes para validar o fluxo sem backend ou integrações.
