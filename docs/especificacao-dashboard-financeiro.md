# Especificação do dashboard financeiro do ML-Invest

## 1. Objetivo do dashboard

O dashboard financeiro é a principal área de visão geral do ML-Invest. Ele deve ajudar o usuário a entender, em poucos segundos, como está o mês financeiro com base nos dados informados ou demonstrativos.

O dashboard deve mostrar receitas, despesas, saldo mensal, porcentagem poupada, comprometimento da renda, maiores categorias de gasto, dívidas em aberto, alertas financeiros, progresso das metas, últimas movimentações e um diagnóstico educativo do mês.

A leitura deve ser clara, visual, acolhedora e não alarmista. O dashboard não deve dizer ao usuário o que ele “deve” fazer de forma definitiva; ele deve explicar o que os dados podem indicar e sugerir revisões simples e responsáveis.

## 2. Layout recomendado em ordem de leitura

A ordem ideal de leitura deve seguir a lógica de resumo primeiro, detalhe depois:

1. **Cabeçalho do dashboard:** título “Meu mês”, filtro de período e ação rápida para adicionar movimentação.
2. **Área de resumo financeiro:** principais indicadores do topo.
3. **Diagnóstico financeiro do mês:** leitura educativa curta baseada nos indicadores.
4. **Alertas financeiros:** pontos que merecem atenção.
5. **Maiores categorias de gasto:** visualização simples das despesas por categoria.
6. **Dívidas em aberto:** compromissos relevantes e status.
7. **Progresso das metas:** metas em andamento e evolução.
8. **Últimas movimentações:** registros recentes de receitas e despesas.
9. **Plano financeiro resumido:** próximos passos educativos e não definitivos.

Essa ordem ajuda o usuário iniciante a primeiro entender a situação geral e depois investigar detalhes específicos.

## 3. Indicadores principais do topo

Os indicadores do topo devem ser exibidos em cards comparáveis, com valor principal, rótulo claro, ícone e texto curto de contexto.

### Indicadores obrigatórios

1. **Total de receitas:** soma das entradas informadas no período.
2. **Total de despesas:** soma das saídas informadas no período.
3. **Saldo do mês:** receitas menos despesas.
4. **Porcentagem poupada:** saldo positivo dividido pelas receitas, quando aplicável.
5. **Comprometimento da renda:** despesas e parcelas de dívidas em relação às receitas.

### Cuidados de exibição

- Usar “estimado” quando os dados forem manuais ou demonstrativos.
- Mostrar valores em formato simples e consistente.
- Diferenciar receitas, despesas e saldo por cor, ícone e texto, não apenas por cor.
- Evitar transformar porcentagem poupada em julgamento de sucesso ou fracasso.

## 4. Cards financeiros essenciais

### Card de receitas

- **Conteúdo:** total de receitas, número de entradas e principal origem.
- **Ação:** “Ver receitas”.
- **Mensagem curta:** “Entradas informadas para este período.”

### Card de despesas

- **Conteúdo:** total de despesas, número de registros e maior categoria.
- **Ação:** “Ver despesas”.
- **Mensagem curta:** “Saídas registradas no mês.”

### Card de saldo mensal

- **Conteúdo:** saldo estimado, status e comparação com despesas.
- **Ação:** “Entender saldo”.
- **Mensagem curta:** “Diferença entre entradas e saídas informadas.”

### Card de poupança estimada

- **Conteúdo:** percentual poupado, valor poupado e status educativo.
- **Ação:** “Ver metas”.
- **Mensagem curta:** “Parte do mês que ficou positiva, quando houver saldo.”

### Card de comprometimento da renda

- **Conteúdo:** percentual comprometido, despesas fixas e dívidas do mês.
- **Ação:** “Revisar compromissos”.
- **Mensagem curta:** “Mostra quanto da renda já está associado a despesas e parcelas.”

## 5. Bloco de diagnóstico financeiro do mês

### Finalidade

Oferecer uma leitura educativa e resumida sobre a situação financeira do período.

### Conteúdo interno

- Título do diagnóstico.
- Status textual: positivo, neutro, atenção ou crítico.
- Explicação curta baseada nos dados.
- Dois ou três pontos principais observados.
- Uma ação educativa sugerida.
- Aviso de que a leitura é baseada nos dados informados.

### Comportamento esperado

- Deve aparecer logo após os indicadores principais.
- Deve ser curto o suficiente para leitura rápida.
- Deve direcionar para páginas relacionadas, como despesas, dívidas ou metas.

### Exemplo de estrutura

```text
Seu mês parece pressionado
Com base nos dados informados, suas despesas estão acima das receitas neste período. Isso pode indicar necessidade de revisar gastos, compromissos ou dados cadastrados.

Pontos observados:
- Despesas maiores que receitas.
- Dívidas com peso relevante no mês.
- Pouca margem para metas.

Ação sugerida: revisar despesas e compromissos do mês.
```

## 6. Bloco de alertas financeiros

### Finalidade

Destacar situações que merecem atenção sem causar medo, culpa ou sensação de urgência artificial.

### Tipos de alerta

- Saldo negativo.
- Despesas próximas ou acima das receitas.
- Comprometimento de renda elevado.
- Dívidas atrasadas ou próximas do vencimento.
- Categoria de gasto muito concentrada.
- Metas sem progresso ou com dados incompletos.
- Dados insuficientes para diagnóstico confiável.

### Conteúdo interno

- Título curto.
- Nível: informação, atenção ou risco.
- Explicação educativa.
- Ação simples para revisar dados.

### Exemplo de alerta

**Despesas acima das receitas**
“Com base nos dados informados, suas despesas superam as receitas neste período. Revisar categorias e compromissos pode ajudar a entender melhor o que está pressionando o mês.”

## 7. Bloco de maiores categorias de gasto

### Finalidade

Mostrar quais categorias mais impactam as despesas do período.

### Conteúdo interno

- Gráfico simples de barras ou rosca.
- Lista das maiores categorias.
- Valor por categoria.
- Percentual aproximado sobre o total de despesas.
- Texto educativo curto.

### Categorias demonstrativas recomendadas

- Moradia.
- Alimentação.
- Transporte.
- Saúde.
- Contas.
- Educação.
- Lazer.
- Outros.

### Comportamento esperado

- Exibir de três a cinco categorias principais.
- Agrupar categorias menores em “Outros”.
- Permitir acesso à página de despesas.

### Texto educativo

“Categorias com maior participação ajudam a entender para onde o dinheiro está indo. Isso não significa que o gasto esteja errado, mas pode indicar um bom ponto para revisão.”

## 8. Bloco de dívidas em aberto

### Finalidade

Mostrar compromissos financeiros relevantes do mês com clareza e cuidado emocional.

### Conteúdo interno

- Total de dívidas ou compromissos em aberto.
- Soma das parcelas do mês.
- Lista de dívidas principais.
- Status: em dia, próximo vencimento, atrasada ou concluída.
- Ação para revisar dívidas.

### Comportamento esperado

- Priorizar dívidas atrasadas ou próximas do vencimento.
- Evitar linguagem de culpa.
- Sugerir busca de apoio profissional em situação grave.

### Texto educativo

“Organizar dívidas pode ajudar a visualizar compromissos e reduzir decisões por impulso. Em situações mais complexas, considere buscar orientação especializada.”

## 9. Bloco de progresso das metas

### Finalidade

Acompanhar metas financeiras de forma visual, realista e motivadora.

### Conteúdo interno

- Lista de metas em andamento.
- Barra de progresso por meta.
- Valor objetivo.
- Valor acumulado ou simulado.
- Valor restante.
- Prazo opcional.
- Status: em andamento, concluída, pausada ou sem dados suficientes.

### Comportamento esperado

- Mostrar até três metas no dashboard.
- Permitir acesso à página completa de metas.
- Evitar prometer que a meta será atingida.

### Texto educativo

“Metas podem ser ajustadas conforme sua realidade muda. Acompanhar o progresso ajuda a planejar com mais clareza.”

## 10. Bloco de últimas movimentações

### Finalidade

Mostrar os registros mais recentes para que o usuário confira rapidamente entradas e saídas.

### Conteúdo interno

- Nome da movimentação.
- Tipo: receita ou despesa.
- Categoria.
- Valor.
- Data ou período demonstrativo.
- Ícone e cor funcional.

### Comportamento esperado

- Mostrar de cinco a sete movimentações recentes.
- Permitir edição ou visualização de detalhes no protótipo.
- Indicar quando uma movimentação não tiver categoria.

### Texto educativo

“Revisar movimentações recentes ajuda a manter o resumo do mês mais próximo da sua realidade.”

## 11. Bloco de plano financeiro resumido

### Finalidade

Apresentar próximos passos educativos e simples com base no diagnóstico do mês.

### Conteúdo interno

- Título: “Plano educativo do mês”.
- Três sugestões gerais e não definitivas.
- Ação para abrir o plano completo.
- Aviso de responsabilidade.

### Exemplos de sugestões

- “Revisar categorias com maior peso.”
- “Conferir compromissos próximos do vencimento.”
- “Ajustar metas conforme o saldo estimado.”

### Texto responsável

“Estas sugestões são educativas e baseadas nos dados informados. Elas não substituem orientação financeira profissional.”

## 12. Filtros por período

### Finalidade

Permitir que o usuário veja o dashboard por mês ou período demonstrativo.

### Opções recomendadas

- Mês atual.
- Mês anterior demonstrativo.
- Próximo mês planejado, se usado apenas como simulação.
- Período personalizado simples, em versão posterior.

### Comportamento esperado

- O período ativo deve ficar claro no cabeçalho.
- A mudança de período deve atualizar indicadores, gráficos, alertas e diagnóstico.
- Dados fictícios devem ser marcados como demonstrativos.

### Microcopy

- “Período: Junho demonstrativo”.
- “Alterar mês”.
- “Dados de exemplo”.

## 13. Estados positivos, neutros e críticos

### Estado positivo

Indica que o mês tem saldo estimado positivo, despesas dentro das receitas e metas com progresso.

- Tom visual: calmo e positivo.
- Cor: verde ou azul positivo, sem exagero.
- Texto: reconhecer organização sem prometer resultados futuros.

### Estado neutro

Indica que os dados não apontam pressão forte, mas ainda há pontos para acompanhar.

- Tom visual: informativo.
- Cor: azul, cinza ou verde-azulado.
- Texto: explicar que a situação parece equilibrada, mas depende dos dados informados.

### Estado de atenção

Indica que uma área pode merecer revisão, como gastos concentrados, baixa poupança ou metas sem progresso.

- Tom visual: atenção moderada.
- Cor: amarelo ou âmbar.
- Texto: sugerir revisão sem afirmar problema definitivo.

### Estado crítico

Indica saldo negativo, despesas acima das receitas ou dívidas atrasadas relevantes.

- Tom visual: sério, mas acolhedor.
- Cor: vermelho controlado ou coral escuro, com uso moderado.
- Texto: orientar próximos passos simples e considerar apoio profissional se necessário.

## 14. Textos educativos para cada situação

### Situação positiva

“Com base nos dados informados, seu mês apresenta saldo positivo e metas em evolução. Continue acompanhando as categorias principais para manter clareza sobre o orçamento.”

### Situação neutra

“Seu mês parece equilibrado pelos dados informados. Ainda assim, acompanhar despesas recorrentes e compromissos ajuda a evitar surpresas.”

### Situação de atenção

“Alguns pontos merecem atenção neste período. Isso não significa que exista um erro, mas pode ser útil revisar categorias com maior peso e compromissos próximos.”

### Situação crítica

“Os dados informados indicam pressão no mês, como saldo negativo ou compromissos relevantes. Revisar despesas, dívidas e prioridades pode ajudar a entender os próximos passos. Se a situação for recorrente ou difícil de organizar, considere buscar apoio especializado.”

### Dados insuficientes

“Ainda não há dados suficientes para uma leitura completa. Adicionar receitas e despesas principais pode tornar o diagnóstico mais útil.”

## 15. Regras de interpretação dos dados

As regras abaixo devem orientar os diagnósticos do dashboard sem transformar a leitura em recomendação profissional.

### Saldo do mês

- **Saldo positivo:** receitas maiores que despesas.
- **Saldo próximo de zero:** receitas e despesas muito próximas.
- **Saldo negativo:** despesas maiores que receitas.

### Porcentagem poupada

- Calcular apenas quando houver receita informada.
- Se o saldo for negativo, exibir como 0% ou “sem poupança estimada no período”.
- Tratar porcentagem como indicador educativo, não como meta universal.

### Comprometimento da renda

- Considerar despesas totais e parcelas de dívidas em relação às receitas.
- Exibir como leitura aproximada.
- Evitar afirmar que um percentual é certo ou errado para todos os usuários.

### Categorias de gasto

- Identificar categorias com maior participação no total de despesas.
- Alertar concentração apenas como ponto de revisão.
- Não julgar a categoria como boa ou ruim.

### Dívidas

- Sinalizar dívidas atrasadas, próximas do vencimento ou com parcela relevante.
- Recomendar organização e possível apoio especializado, sem sugerir solução financeira específica.

### Metas

- Avaliar progresso, prazo e valor restante.
- Sugerir ajuste quando dados parecerem incompatíveis com o saldo, sem afirmar impossibilidade.

## 16. Como exibir problemas financeiros sem assustar o usuário

- Usar títulos claros, mas não alarmistas.
- Evitar palavras como “fracasso”, “perigo”, “desastre” ou “urgente” como padrão.
- Explicar o motivo do alerta com base nos dados informados.
- Oferecer uma ação simples de revisão.
- Usar cores de risco com moderação.
- Mostrar que o usuário pode começar por um passo pequeno.
- Reforçar que o diagnóstico é educativo.
- Sugerir apoio profissional em situações complexas, sem assustar ou pressionar.

### Exemplo adequado

“Seu saldo está negativo neste período. Isso pode indicar que as despesas informadas superaram as receitas. Começar revisando as maiores categorias pode ajudar a entender a situação.”

### Exemplo a evitar

“Você está em uma situação financeira perigosa. Resolva isso agora.”

## 17. Sugestões de microcopy

### Títulos

- “Meu mês financeiro”.
- “Resumo do mês”.
- “Diagnóstico educativo”.
- “Pontos de atenção”.
- “Maiores categorias de gasto”.
- “Dívidas em aberto”.
- “Progresso das metas”.
- “Últimas movimentações”.
- “Plano educativo do mês”.

### Botões

- “Adicionar receita”.
- “Adicionar despesa”.
- “Registrar dívida”.
- “Criar meta”.
- “Ver detalhes”.
- “Revisar despesas”.
- “Abrir plano educativo”.
- “Usar dados demonstrativos”.

### Mensagens curtas

- “Com base nos dados informados.”
- “Este valor é uma estimativa do período.”
- “Revise os dados para melhorar a leitura.”
- “Dados demonstrativos para fins de protótipo.”
- “Esta orientação é educativa.”

## 18. Versão desktop do dashboard

### Estrutura recomendada

- Cabeçalho no topo com título, período e ação rápida.
- Linha superior com cinco indicadores principais.
- Coluna principal com diagnóstico, categorias de gasto e últimas movimentações.
- Coluna lateral com alertas, dívidas, metas e plano resumido.
- Espaçamento confortável entre blocos.

### Comportamento visual

- Cards com altura consistente.
- Gráficos simples e bem legendados.
- Blocos críticos visíveis, mas não dominantes.
- Ações principais próximas dos blocos relacionados.

### Ordem desktop sugerida

1. Cabeçalho e filtro.
2. Indicadores principais.
3. Diagnóstico mensal.
4. Alertas financeiros.
5. Categorias de gasto e dívidas.
6. Metas e últimas movimentações.
7. Plano financeiro resumido.

## 19. Versão mobile do dashboard

### Estrutura recomendada

No mobile, a experiência deve ser empilhada em coluna única:

1. Cabeçalho compacto com “Meu mês” e período.
2. Card principal de saldo do mês.
3. Indicadores principais em cards horizontais ou carrossel simples, se necessário.
4. Diagnóstico educativo.
5. Alertas financeiros.
6. Categorias de gasto.
7. Dívidas em aberto.
8. Metas.
9. Últimas movimentações.
10. Plano financeiro resumido.

### Comportamento visual

- Priorizar saldo, receitas, despesas e alertas.
- Usar cards empilhados com títulos curtos.
- Evitar tabelas no dashboard mobile.
- Usar gráficos compactos com legenda textual.
- Manter botões com área de toque confortável.

### Ações rápidas mobile

- Botão contextual para adicionar movimentação.
- Atalhos para “Receita”, “Despesa”, “Dívida” e “Meta”.
- Navegação inferior para Meu mês, Receitas, Despesas, Metas e Plano.

## 20. Dados demonstrativos para preencher o dashboard

Os dados abaixo devem ser usados apenas como exemplo de protótipo e devem ser identificados como fictícios.

### Período demonstrativo

- Período: Junho demonstrativo.

### Receitas

- Salário: R$ 4.200,00.
- Renda extra: R$ 650,00.
- Reembolso: R$ 150,00.
- **Total de receitas:** R$ 5.000,00.

### Despesas

- Moradia: R$ 1.500,00.
- Alimentação: R$ 950,00.
- Transporte: R$ 420,00.
- Contas: R$ 530,00.
- Saúde: R$ 280,00.
- Lazer: R$ 350,00.
- Educação: R$ 220,00.
- Outros: R$ 250,00.
- **Total de despesas:** R$ 4.800,00.

### Saldo e indicadores

- **Saldo estimado:** R$ 200,00.
- **Porcentagem poupada estimada:** 4%.
- **Comprometimento da renda:** 96% considerando despesas totais do mês.

### Dívidas em aberto

- Cartão de crédito: parcela de R$ 350,00, status próximo vencimento.
- Empréstimo pessoal: parcela de R$ 420,00, status em dia.
- Compra parcelada: parcela de R$ 180,00, status em dia.

### Metas

- Reserva de segurança: objetivo R$ 3.000,00, acumulado R$ 900,00, progresso 30%.
- Curso profissional: objetivo R$ 1.200,00, acumulado R$ 480,00, progresso 40%.
- Quitar compromisso: objetivo R$ 1.500,00, acumulado R$ 300,00, progresso 20%.

### Últimas movimentações

- Salário — receita — R$ 4.200,00 — categoria salário.
- Mercado — despesa — R$ 320,00 — categoria alimentação.
- Aluguel — despesa — R$ 1.500,00 — categoria moradia.
- Renda extra — receita — R$ 650,00 — categoria renda extra.
- Transporte por aplicativo — despesa — R$ 85,00 — categoria transporte.
- Internet — despesa — R$ 120,00 — categoria contas.

### Diagnóstico demonstrativo

“Com base nos dados demonstrativos, o mês apresenta saldo positivo, mas com comprometimento elevado da renda. Isso pode indicar pouca margem para imprevistos. Revisar categorias de maior peso e acompanhar dívidas em aberto pode ajudar a manter a organização.”

## 21. Exemplos de diagnóstico financeiro

### Usuário gastando mais do que ganha

**Título:** “Seu mês parece pressionado”

**Texto:** “Com base nos dados informados, suas despesas estão acima das receitas neste período. Isso pode indicar necessidade de revisar categorias de gasto, compromissos e dados cadastrados. Começar pelas maiores despesas pode ajudar a entender o que mais impacta o mês.”

**Ação sugerida:** “Revisar despesas”.

### Usuário com saldo positivo, mas baixa poupança

**Título:** “Saldo positivo com pouca margem”

**Texto:** “Os dados informados mostram saldo positivo, mas a parte que sobra no período parece pequena em relação às receitas. Isso não significa que exista um problema, mas pode ser útil acompanhar despesas recorrentes e metas para entender se há espaço para ajustes.”

**Ação sugerida:** “Ver resumo de categorias”.

### Usuário com muitas despesas variáveis

**Título:** “Despesas variáveis em destaque”

**Texto:** “Uma parte relevante das despesas informadas parece estar em categorias variáveis. Esses gastos podem mudar bastante de um mês para outro, por isso acompanhar os registros recentes pode ajudar a manter uma visão mais clara do orçamento.”

**Ação sugerida:** “Ver últimas movimentações”.

### Usuário com dívidas atrasadas

**Título:** “Compromissos atrasados merecem atenção”

**Texto:** “Há dívidas informadas com status de atraso. Organizar valores, vencimentos e impacto mensal pode ajudar a entender a situação. Se o atraso for recorrente ou difícil de administrar, considere buscar orientação profissional ou apoio especializado.”

**Ação sugerida:** “Revisar dívidas”.

### Usuário evoluindo bem nas metas

**Título:** “Metas em evolução”

**Texto:** “Com base nos dados informados, suas metas apresentam progresso no período. Acompanhar valores, prazos e saldo mensal pode ajudar a manter um planejamento mais claro, lembrando que metas podem ser ajustadas conforme sua realidade muda.”

**Ação sugerida:** “Ver metas”.

## Resumo final

- **Estrutura final do dashboard:** cabeçalho com período, indicadores principais, diagnóstico mensal, alertas, categorias de gasto, dívidas, metas, últimas movimentações e plano financeiro resumido.
- **Lista de indicadores:** total de receitas, total de despesas, saldo do mês, porcentagem poupada e comprometimento da renda.
- **Regras educativas de diagnóstico:** interpretar saldo, poupança, comprometimento, categorias, dívidas e metas como leituras baseadas nos dados informados, sem recomendações definitivas.
- **Exemplos de textos para alertas:** alertas devem usar linguagem cautelosa, explicar o motivo da atenção e sugerir revisão simples, sem culpa ou sensacionalismo.
- **Recomendações para a próxima fase:** transformar esta especificação em wireframes desktop e mobile, validando a ordem de leitura, estados demonstrativos, microcopy e hierarquia visual antes de criar qualquer implementação técnica.
