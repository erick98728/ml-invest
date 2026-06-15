# Componentes reutilizáveis do ML-Invest

## Visão geral

Os componentes do **ML-Invest** devem manter consistência visual, linguagem educativa e leitura rápida dos dados financeiros. A primeira versão deve priorizar componentes simples, reutilizáveis e fáceis de entender, evitando padrões visuais complexos ou aparência de sistema bancário técnico.

Cada componente deve apoiar três objetivos:

1. organizar informações financeiras;
2. orientar o usuário com clareza;
3. manter a experiência acessível, calma e responsável.

## 1. Cabeçalho principal

### Finalidade

Apresentar a identidade do ML-Invest, indicar a área atual e oferecer acesso rápido a ações essenciais.

### Onde será usado

- Página inicial.
- Dashboard financeiro.
- Todas as páginas internas.
- Versões desktop e mobile, com adaptações de espaço.

### Conteúdo interno

- Nome ou marca ML-Invest.
- Título da página atual.
- Texto curto de apoio opcional.
- Ação principal contextual, como “Adicionar despesa” ou “Ver dashboard”.
- Acesso ao perfil demonstrativo ou menu.

### Variações possíveis

- Cabeçalho institucional para a página inicial.
- Cabeçalho compacto para páginas internas.
- Cabeçalho mobile com menu reduzido.

### Comportamento esperado

- Deve informar onde o usuário está.
- Deve manter a ação principal visível sem competir com o conteúdo.
- Em telas pequenas, deve priorizar título, menu e uma ação essencial.

### Cuidados de linguagem

- Usar títulos diretos, como “Meu mês”, “Despesas” e “Metas”.
- Evitar chamadas promocionais ou promessas financeiras.

### Cuidados de acessibilidade

- Garantir contraste entre texto e fundo.
- Manter área de toque confortável para menu e ações.
- Não usar apenas ícones sem rótulo em ações importantes.

## 2. Menu de navegação lateral ou superior

### Finalidade

Permitir acesso claro às principais áreas do produto.

### Onde será usado

- Dashboard financeiro.
- Páginas de receitas, despesas, dívidas, metas, plano educativo, relatórios e perfil demo.

### Conteúdo interno

- Links para Início, Meu mês, Receitas, Despesas, Dívidas, Metas, Plano educativo, Relatórios e Perfil demo.
- Ícone simples para cada item.
- Estado visual da página ativa.

### Variações possíveis

- Menu lateral em telas maiores.
- Menu superior compacto em páginas mais simples.
- Menu recolhido quando houver pouco espaço.

### Comportamento esperado

- Deve manter poucos itens visíveis por vez.
- Deve destacar claramente a página atual.
- Deve permitir retorno rápido ao dashboard.

### Cuidados de linguagem

- Usar nomes curtos e familiares.
- Evitar termos técnicos como “analytics”, “ledger” ou “portfolio”.

### Cuidados de acessibilidade

- Indicar item ativo por texto, contraste e marca visual, não apenas cor.
- Garantir navegação por teclado em protótipos interativos.
- Usar rótulos claros para ícones.

## 3. Navegação mobile

### Finalidade

Oferecer navegação simples em telas pequenas sem sobrecarregar o usuário.

### Onde será usado

- Todas as páginas em dispositivos móveis.

### Conteúdo interno

- Barra inferior com atalhos principais: Meu mês, Receitas, Despesas, Metas e Plano.
- Menu adicional para Início, Dívidas, Relatórios e Perfil demo.
- Ícones com rótulos curtos.

### Variações possíveis

- Barra inferior fixa.
- Menu expansível para itens secundários.
- Botão contextual para adicionar novo item.

### Comportamento esperado

- Deve manter as áreas principais a um toque de distância.
- Deve evitar excesso de opções simultâneas.
- Deve preservar espaço para leitura dos cards.

### Cuidados de linguagem

- Usar termos curtos e objetivos.
- Evitar abreviações confusas.

### Cuidados de acessibilidade

- Áreas de toque amplas.
- Rótulos visíveis junto dos ícones.
- Estado ativo identificável sem depender apenas da cor.

## 4. Card de indicador financeiro

### Finalidade

Mostrar um número financeiro importante de forma clara e comparável.

### Onde será usado

- Dashboard financeiro.
- Relatórios.
- Páginas de receitas, despesas, dívidas e metas.

### Conteúdo interno

- Título do indicador.
- Valor principal.
- Ícone ou marcador de categoria.
- Texto curto de contexto.
- Variação ou status opcional.

### Variações possíveis

- Receita total.
- Despesa total.
- Saldo estimado.
- Dívidas do mês.
- Progresso de metas.
- Indicador neutro, positivo, atenção ou risco.

### Comportamento esperado

- Deve permitir leitura rápida.
- Deve ser comparável com outros cards do mesmo grupo.
- Deve direcionar para a página relacionada quando clicável.

### Cuidados de linguagem

- Usar “estimado” quando o valor depender de dados informados manualmente.
- Evitar frases como “lucro garantido” ou “resultado ideal”.

### Cuidados de acessibilidade

- Valor e rótulo devem ter contraste alto.
- Cor deve ser acompanhada por texto ou ícone.
- O card clicável deve ter foco visual claro.

## 5. Card de alerta financeiro

### Finalidade

Destacar pontos que merecem atenção sem assustar ou culpar o usuário.

### Onde será usado

- Dashboard financeiro.
- Dívidas.
- Despesas.
- Plano educativo.

### Conteúdo interno

- Título curto do alerta.
- Descrição educativa.
- Nível de atenção.
- Ação sugerida, como “Revisar despesas”.

### Variações possíveis

- Atenção leve.
- Atenção moderada.
- Risco relevante.
- Dados insuficientes.

### Comportamento esperado

- Deve aparecer apenas quando houver contexto útil.
- Deve explicar por que o alerta existe.
- Deve oferecer caminho para revisão, não uma ordem definitiva.

### Cuidados de linguagem

- Usar “pode indicar”, “merece atenção” e “considere revisar”.
- Evitar “urgente”, “grave” ou “você está errado” como padrão.

### Cuidados de acessibilidade

- Não depender apenas de vermelho ou amarelo.
- Usar ícone, título e texto explicativo.
- Garantir que leitores de tela recebam o nível do alerta.

## 6. Card de diagnóstico mensal

### Finalidade

Apresentar uma leitura resumida e educativa sobre a situação do mês.

### Onde será usado

- Dashboard financeiro.
- Plano financeiro educativo.
- Relatórios.

### Conteúdo interno

- Situação geral, como “mês equilibrado”, “mês pressionado” ou “ponto de atenção”.
- Explicação breve.
- Dados que motivaram a leitura.
- Ação sugerida para aprofundar.

### Variações possíveis

- Diagnóstico positivo.
- Diagnóstico neutro.
- Diagnóstico de atenção.
- Diagnóstico com dados insuficientes.

### Comportamento esperado

- Deve resumir sem esconder detalhes importantes.
- Deve levar o usuário para páginas relacionadas.
- Deve atualizar conforme dados demonstrativos ou manuais mudem no protótipo.

### Cuidados de linguagem

- Reforçar que a leitura é educativa.
- Não afirmar que o usuário deve tomar uma decisão específica.

### Cuidados de acessibilidade

- Título e explicação devem ser lidos em sequência lógica.
- O status deve ser textual, não apenas visual.

## 7. Card de meta financeira

### Finalidade

Mostrar o progresso de uma meta financeira de forma simples e realista.

### Onde será usado

- Página de metas.
- Dashboard financeiro.
- Relatórios.
- Plano educativo.

### Conteúdo interno

- Nome da meta.
- Valor objetivo.
- Valor acumulado ou simulado.
- Valor restante.
- Barra de progresso.
- Prazo opcional.
- Status.

### Variações possíveis

- Meta em andamento.
- Meta concluída.
- Meta pausada.
- Meta sem prazo.

### Comportamento esperado

- Deve permitir atualizar progresso no protótipo.
- Deve mostrar se faltam dados essenciais.
- Deve ser visualmente motivador sem prometer resultado.

### Cuidados de linguagem

- Usar “progresso” e “planejamento”, não “garantia”.
- Evitar metas apresentadas como obrigação.

### Cuidados de acessibilidade

- Barra de progresso deve ter percentual textual.
- Status deve ser indicado por texto e selo.

## 8. Card de dívida

### Finalidade

Organizar uma dívida ou compromisso financeiro com clareza e sem julgamento.

### Onde será usado

- Página de dívidas.
- Dashboard financeiro.
- Plano educativo.

### Conteúdo interno

- Nome da dívida.
- Valor total informado.
- Parcela do mês.
- Vencimento demonstrativo.
- Status.
- Mensagem curta de atenção, se necessário.

### Variações possíveis

- Em dia.
- Próximo vencimento.
- Atrasada.
- Concluída.
- Dados incompletos.

### Comportamento esperado

- Deve indicar impacto mensal.
- Deve permitir revisar ou editar informações demonstrativas.
- Deve sinalizar vencimentos sem linguagem alarmista.

### Cuidados de linguagem

- Evitar culpa, vergonha ou pressão.
- Sugerir busca de apoio profissional em situações graves.

### Cuidados de acessibilidade

- Status deve ter rótulo textual.
- Datas e valores devem ser legíveis.
- Alertas devem ser compreensíveis sem depender da cor.

## 9. Card de movimentação recente

### Finalidade

Exibir uma receita, despesa ou ajuste recente em formato resumido.

### Onde será usado

- Dashboard financeiro.
- Receitas.
- Despesas.
- Relatórios.

### Conteúdo interno

- Nome da movimentação.
- Tipo: receita ou despesa.
- Valor.
- Categoria.
- Data ou período demonstrativo.
- Ícone de categoria.

### Variações possíveis

- Receita.
- Despesa.
- Transferência demonstrativa entre categorias, se usada apenas para organização visual.
- Item sem categoria.

### Comportamento esperado

- Deve abrir detalhes ou edição quando selecionado.
- Deve ser fácil de escanear em lista.
- Deve manter diferença visual clara entre entrada e saída.

### Cuidados de linguagem

- Usar nomes simples de categorias.
- Evitar classificar gastos como “bons” ou “ruins”.

### Cuidados de acessibilidade

- Sinal de entrada ou saída deve ser textual e visual.
- Valores devem manter formato consistente.

## 10. Card educativo

### Finalidade

Ensinar um conceito financeiro simples ou explicar uma orientação do produto.

### Onde será usado

- Plano educativo.
- Dashboard financeiro.
- Estados vazios.
- Relatórios.

### Conteúdo interno

- Título educativo.
- Explicação curta.
- Exemplo simples, se necessário.
- Link ou ação para saber mais dentro do protótipo.

### Variações possíveis

- Conceito básico.
- Dica prática.
- Aviso responsável.
- Explicação de termo.

### Comportamento esperado

- Deve complementar a experiência sem interromper a tarefa principal.
- Deve ser curto e contextual.

### Cuidados de linguagem

- Usar tom acolhedor e cauteloso.
- Não transformar dicas em recomendações definitivas.

### Cuidados de acessibilidade

- Texto dividido em frases curtas.
- Ícone decorativo não deve ser indispensável para entendimento.

## 11. Botão primário

### Finalidade

Representar a ação principal de uma página ou seção.

### Onde será usado

- Página inicial.
- Formulários.
- Estados vazios.
- Modais ou painéis de cadastro.

### Conteúdo interno

- Texto curto de ação.
- Ícone opcional apenas quando ajudar na compreensão.

### Variações possíveis

- Ação de começar.
- Ação de adicionar.
- Ação de salvar dados demonstrativos.
- Ação de ver resumo.

### Comportamento esperado

- Deve ser visualmente mais forte que ações secundárias.
- Deve ter estado normal, foco, pressionado, desabilitado e carregamento demonstrativo.

### Cuidados de linguagem

- Usar verbos claros, como “Adicionar”, “Salvar”, “Ver resumo” e “Começar”.
- Evitar urgência artificial.

### Cuidados de acessibilidade

- Contraste alto.
- Área de toque confortável.
- Estado de foco visível.

## 12. Botão secundário

### Finalidade

Oferecer ações alternativas sem competir com a ação principal.

### Onde será usado

- Cards.
- Formulários.
- Modais.
- Cabeçalhos de seção.

### Conteúdo interno

- Texto curto de ação.
- Ícone opcional.

### Variações possíveis

- Cancelar.
- Ver detalhes.
- Limpar filtros.
- Voltar ao dashboard.

### Comportamento esperado

- Deve ser menos chamativo que o botão primário.
- Deve permitir navegação e revisão sem pressão.

### Cuidados de linguagem

- Evitar termos ambíguos como “ok” quando a ação for importante.
- Confirmar ações destrutivas separadamente.

### Cuidados de acessibilidade

- Contraste suficiente mesmo com estilo discreto.
- Rótulo claro para leitores de tela.

## 13. Botão de ação rápida

### Finalidade

Dar acesso imediato a uma criação ou registro frequente.

### Onde será usado

- Dashboard financeiro.
- Navegação mobile.
- Páginas de receitas, despesas, dívidas e metas.

### Conteúdo interno

- Ícone de adição ou ação.
- Rótulo curto ou tooltip textual.

### Variações possíveis

- Adicionar receita.
- Adicionar despesa.
- Criar meta.
- Registrar dívida.

### Comportamento esperado

- Deve abrir painel ou modal de cadastro demonstrativo.
- Deve ser contextual à página atual.
- Não deve esconder ações importantes atrás de ícone sem texto em fluxos críticos.

### Cuidados de linguagem

- Usar rótulos objetivos.
- Evitar linguagem de pressa.

### Cuidados de acessibilidade

- Se houver apenas ícone visual, deve haver rótulo acessível.
- Área de toque ampla e foco visível.

## 14. Campo de formulário

### Finalidade

Permitir entrada manual de dados no protótipo.

### Onde será usado

- Cadastro demonstrativo de receitas, despesas, dívidas e metas.
- Perfil demo.
- Filtros simples.

### Conteúdo interno

- Rótulo visível.
- Campo de entrada.
- Texto de ajuda opcional.
- Mensagem de erro ou orientação.

### Variações possíveis

- Texto.
- Valor financeiro.
- Data ou mês demonstrativo.
- Seleção simples.
- Observação curta.

### Comportamento esperado

- Deve indicar claramente dados obrigatórios e opcionais.
- Deve validar formato de forma educativa.
- Deve preservar os dados preenchidos em casos de erro no protótipo.

### Cuidados de linguagem

- Mensagens de erro devem explicar como corrigir.
- Evitar “inválido” sem contexto.

### Cuidados de acessibilidade

- Rótulo sempre visível.
- Erro associado ao campo.
- Ordem de navegação lógica.

## 15. Seletor de categoria

### Finalidade

Classificar receitas, despesas, dívidas ou metas em categorias simples.

### Onde será usado

- Formulários.
- Filtros.
- Listas e relatórios.

### Conteúdo interno

- Rótulo.
- Lista de categorias.
- Ícones ou cores de apoio.
- Opção “Outros” quando necessário.

### Variações possíveis

- Categoria de receita.
- Categoria de despesa.
- Categoria de dívida.
- Categoria de meta.

### Comportamento esperado

- Deve facilitar escolha rápida.
- Deve evitar listas longas na primeira versão.
- Deve permitir item sem categoria apenas com aviso educativo.

### Cuidados de linguagem

- Usar categorias familiares, como moradia, alimentação, transporte, saúde e lazer.
- Evitar termos técnicos.

### Cuidados de acessibilidade

- Não depender apenas de cor para identificar categoria.
- Permitir leitura textual de cada opção.

## 16. Filtro por período

### Finalidade

Permitir que o usuário veja dados por mês ou período demonstrativo.

### Onde será usado

- Dashboard financeiro.
- Relatórios.
- Receitas.
- Despesas.

### Conteúdo interno

- Período atual.
- Opções de mês ou intervalo simples.
- Ação para aplicar ou limpar filtro, se necessário.

### Variações possíveis

- Mês atual.
- Mês anterior demonstrativo.
- Período personalizado simples.

### Comportamento esperado

- Deve deixar claro qual período está sendo visualizado.
- Deve evitar comparação complexa na primeira versão.

### Cuidados de linguagem

- Usar “período demonstrativo” quando os dados forem fictícios.
- Evitar termos avançados como “competência” sem explicação.

### Cuidados de acessibilidade

- Seleção atual deve ser textual.
- Controles devem ser acessíveis por teclado em protótipos interativos.

## 17. Tabela simples de movimentações

### Finalidade

Exibir dados financeiros em formato organizado para comparação e revisão.

### Onde será usado

- Receitas.
- Despesas.
- Relatórios.

### Conteúdo interno

- Colunas de nome, categoria, valor, data/período e status opcional.
- Ações de ver, editar ou remover item demonstrativo.

### Variações possíveis

- Tabela de receitas.
- Tabela de despesas.
- Tabela resumida de relatório.

### Comportamento esperado

- Deve ser simples e com poucas colunas.
- Em mobile, deve virar lista ou cards.
- Deve permitir ordenação simples apenas se necessário.

### Cuidados de linguagem

- Cabeçalhos devem ser claros.
- Evitar abreviações que dificultem entendimento.

### Cuidados de acessibilidade

- Cabeçalhos associados aos dados.
- Alternativa em lista para telas pequenas.
- Ações com rótulos claros.

## 18. Lista de transações

### Finalidade

Mostrar movimentações em formato mais amigável que tabela, especialmente em mobile.

### Onde será usado

- Dashboard financeiro.
- Receitas.
- Despesas.
- Relatórios mobile.

### Conteúdo interno

- Itens de movimentação recente.
- Valor.
- Categoria.
- Data ou período.
- Ícone de entrada ou saída.

### Variações possíveis

- Lista compacta.
- Lista detalhada.
- Lista filtrada por categoria.

### Comportamento esperado

- Deve permitir leitura rápida.
- Deve abrir detalhe ou edição quando o usuário selecionar um item.
- Deve indicar claramente receitas e despesas.

### Cuidados de linguagem

- Categorias devem ser simples.
- Evitar tom de julgamento sobre gastos.

### Cuidados de acessibilidade

- Itens selecionáveis devem ter foco e rótulo claro.
- Entrada/saída deve ser textual e visual.

## 19. Gráfico de categorias

### Finalidade

Mostrar distribuição de despesas, receitas ou compromissos por categoria.

### Onde será usado

- Dashboard financeiro.
- Despesas.
- Relatórios.

### Conteúdo interno

- Gráfico simples de barras ou rosca.
- Legenda curta.
- Categorias principais.
- Texto interpretativo curto.

### Variações possíveis

- Despesas por categoria.
- Receitas por origem.
- Dívidas por tipo.

### Comportamento esperado

- Deve exibir poucas categorias principais.
- Deve agrupar itens menores em “Outros” quando necessário.
- Deve sempre ter legenda e valores visíveis.

### Cuidados de linguagem

- Usar “maior peso” ou “maior participação”, sem culpar o usuário.
- Explicar que a visualização depende dos dados informados.

### Cuidados de acessibilidade

- Não depender apenas de cores na legenda.
- Oferecer resumo textual do gráfico.

## 20. Gráfico de evolução mensal

### Finalidade

Mostrar mudanças simples ao longo de meses demonstrativos.

### Onde será usado

- Relatórios.
- Dashboard, se houver espaço.
- Plano educativo, como apoio visual.

### Conteúdo interno

- Linha ou barras simples.
- Eixo de meses.
- Valores principais.
- Nota educativa.

### Variações possíveis

- Evolução de saldo.
- Evolução de despesas.
- Evolução de metas.
- Evolução de dívidas.

### Comportamento esperado

- Deve comparar poucos períodos.
- Deve evitar visual técnico ou excesso de métricas.
- Deve deixar claro quando os dados forem demonstrativos.

### Cuidados de linguagem

- Evitar prever futuro ou prometer tendência.
- Usar “histórico demonstrativo” em dados fictícios.

### Cuidados de acessibilidade

- Incluir descrição textual da tendência visual.
- Cores e linhas devem ter contraste adequado.

## 21. Barra de progresso

### Finalidade

Indicar avanço de metas, preenchimento de dados ou conclusão de etapas.

### Onde será usado

- Metas financeiras.
- Dashboard financeiro.
- Plano educativo.
- Estados de onboarding do protótipo.

### Conteúdo interno

- Percentual.
- Rótulo.
- Valor atual e valor objetivo quando aplicável.

### Variações possíveis

- Progresso de meta.
- Progresso de preenchimento do mês.
- Progresso de leitura do plano educativo.

### Comportamento esperado

- Deve ser fácil de interpretar.
- Deve atualizar conforme valores mudem no protótipo.
- Deve ter estados para zero, parcial, completo e dados insuficientes.

### Cuidados de linguagem

- Evitar sugerir que progresso financeiro é obrigatório ou linear.
- Usar “estimado” quando necessário.

### Cuidados de acessibilidade

- Percentual deve ser textual.
- Não depender apenas do preenchimento visual.

## 22. Selo de status

### Finalidade

Comunicar estado de uma informação de forma rápida e consistente.

### Onde será usado

- Cards de dívida.
- Cards de meta.
- Alertas.
- Tabelas e listas.

### Conteúdo interno

- Texto curto.
- Cor funcional.
- Ícone opcional.

### Variações possíveis

- Em dia.
- Atenção.
- Atrasado.
- Concluído.
- Demonstrativo.
- Dados incompletos.

### Comportamento esperado

- Deve ser compacto.
- Deve complementar, não substituir, explicações importantes.

### Cuidados de linguagem

- Preferir “atenção” a “problema” quando a situação não for crítica.
- Usar “dados incompletos” em vez de culpar o usuário.

### Cuidados de acessibilidade

- Texto sempre visível.
- Contraste adequado.
- Não depender apenas da cor.

## 23. Modal ou painel de cadastro demonstrativo

### Finalidade

Permitir adicionar ou editar informações financeiras no protótipo sem criar fluxo complexo.

### Onde será usado

- Receitas.
- Despesas.
- Dívidas.
- Metas.
- Ações rápidas do dashboard.

### Conteúdo interno

- Título do cadastro.
- Campos principais.
- Texto de ajuda.
- Botão primário para salvar.
- Botão secundário para cancelar.
- Aviso se os dados forem demonstrativos.

### Variações possíveis

- Cadastro de receita.
- Cadastro de despesa.
- Cadastro de dívida.
- Cadastro de meta.

### Comportamento esperado

- Deve focar em poucos campos essenciais.
- Deve permitir cancelar sem perda inesperada.
- Deve mostrar validações simples e educativas.

### Cuidados de linguagem

- Usar “salvar no protótipo” ou “adicionar exemplo” quando apropriado.
- Evitar pedir dados sensíveis na primeira versão.

### Cuidados de acessibilidade

- Foco deve ir para o painel ao abrir.
- Deve haver forma clara de fechar.
- Mensagens de erro devem ser associadas aos campos.

## 24. Mensagem de estado vazio

### Finalidade

Orientar o usuário quando ainda não há dados preenchidos.

### Onde será usado

- Dashboard financeiro.
- Receitas.
- Despesas.
- Dívidas.
- Metas.
- Relatórios.
- Plano educativo.

### Conteúdo interno

- Título acolhedor.
- Explicação curta.
- Ação principal.
- Ação secundária para usar dados demonstrativos, se houver.

### Variações possíveis

- Sem receitas.
- Sem despesas.
- Sem dívidas.
- Sem metas.
- Sem dados suficientes para relatório.

### Comportamento esperado

- Deve transformar ausência de dados em próximo passo claro.
- Deve evitar sensação de erro.

### Cuidados de linguagem

- Usar tom acolhedor, como “Comece adicionando uma informação simples”.
- Não sugerir que a falta de dados é falha do usuário.

### Cuidados de acessibilidade

- Texto curto e legível.
- Botão principal claro.
- Ícone ilustrativo não deve ser obrigatório para entendimento.

## 25. Bloco de aviso responsável

### Finalidade

Reforçar limites éticos e educativos do produto.

### Onde será usado

- Página inicial.
- Plano educativo.
- Dashboard financeiro.
- Relatórios.
- Perfil demo.

### Conteúdo interno

- Título curto.
- Texto de responsabilidade.
- Link ou ação para entender limites do produto.

### Variações possíveis

- Aviso educativo geral.
- Aviso sobre dados demonstrativos.
- Aviso para buscar orientação profissional em casos complexos.

### Comportamento esperado

- Deve aparecer em áreas em que o usuário possa interpretar orientações como recomendação.
- Deve ser visível, mas não alarmista.

### Cuidados de linguagem

- Usar “orientação educativa” e “não substitui orientação profissional”.
- Evitar termos jurídicos longos ou assustadores.

### Cuidados de acessibilidade

- Contraste confortável.
- Ícone de informação com texto explícito.
- Não esconder conteúdo crítico em tooltip apenas.

## 26. Bloco de dica educativa

### Finalidade

Oferecer orientação prática e curta no contexto da página.

### Onde será usado

- Receitas.
- Despesas.
- Dívidas.
- Metas.
- Plano educativo.
- Relatórios.

### Conteúdo interno

- Título da dica.
- Texto curto.
- Exemplo opcional.
- Ação para revisar dados, quando fizer sentido.

### Variações possíveis

- Dica de organização.
- Explicação de conceito.
- Sugestão de revisão.
- Orientação sobre dados insuficientes.

### Comportamento esperado

- Deve ser contextual.
- Deve aparecer sem interromper o fluxo principal.
- Deve ser fácil de dispensar ou ignorar no protótipo, se necessário.

### Cuidados de linguagem

- Usar tom educativo e não prescritivo.
- Evitar “faça isso” como ordem definitiva.

### Cuidados de acessibilidade

- Texto com leitura simples.
- Destaque visual suficiente sem depender só de cor.

## 27. Área de resumo financeiro

### Finalidade

Reunir os principais números do mês em uma área de leitura rápida.

### Onde será usado

- Dashboard financeiro.
- Relatórios.
- Possivelmente página inicial em versão demonstrativa.

### Conteúdo interno

- Receitas totais.
- Despesas totais.
- Saldo estimado.
- Dívidas ou compromissos do mês.
- Progresso de metas.
- Diagnóstico curto.

### Variações possíveis

- Resumo completo.
- Resumo compacto.
- Resumo com dados vazios.
- Resumo com dados demonstrativos.

### Comportamento esperado

- Deve aparecer no topo das páginas centrais.
- Deve conduzir para detalhes por meio dos cards.
- Deve atualizar visualmente conforme dados mudem no protótipo.

### Cuidados de linguagem

- Usar “saldo estimado” e “com base nos dados informados”.
- Evitar conclusões definitivas sobre a vida financeira do usuário.

### Cuidados de acessibilidade

- Ordem de leitura clara.
- Cards com rótulos explícitos.
- Cores acompanhadas por texto e ícones.

## Componentes prioritários para o protótipo

Para a primeira versão navegável, os componentes essenciais devem ser construídos nesta ordem:

1. Cabeçalho principal.
2. Navegação principal e navegação mobile.
3. Área de resumo financeiro.
4. Card de indicador financeiro.
5. Botão primário, botão secundário e botão de ação rápida.
6. Campo de formulário e seletor de categoria.
7. Lista de transações ou tabela simples de movimentações.
8. Card de alerta financeiro.
9. Card de meta financeira.
10. Card de dívida.
11. Barra de progresso e selo de status.
12. Mensagem de estado vazio.
13. Bloco de aviso responsável e bloco de dica educativa.
14. Gráfico de categorias.
15. Card de diagnóstico mensal.
16. Modal ou painel de cadastro demonstrativo.
17. Gráfico de evolução mensal.

## Padrões de comportamento

- Componentes clicáveis devem indicar claramente que são interativos.
- A ação principal de cada tela deve ser fácil de encontrar.
- Estados vazio, demonstrativo, carregamento, atenção e erro devem ter linguagem própria.
- Alertas devem orientar revisão, não criar medo.
- Dados demonstrativos devem ser identificados como fictícios.
- Cards devem ter estrutura previsível: título, valor ou conteúdo principal, contexto e ação opcional.
- Formulários devem pedir apenas informações essenciais na primeira versão.
- Gráficos devem sempre vir acompanhados de legenda ou explicação textual.
- Em mobile, tabelas devem virar listas ou cards.
- Nenhum componente deve depender apenas de cor para comunicar significado.

## Recomendações para manter consistência visual

- Usar a mesma estrutura para cards de indicadores em todas as páginas.
- Manter nomes de categorias consistentes entre formulários, listas e gráficos.
- Reutilizar selos de status com os mesmos textos e significados.
- Padronizar botões: uma ação primária por área e ações secundárias discretas.
- Usar espaçamento confortável entre blocos para evitar sensação de painel lotado.
- Manter textos curtos e educativos em todos os componentes.
- Evitar ícones decorativos que não ajudem na compreensão.
- Garantir que alertas, dicas e avisos responsáveis tenham estilos diferentes entre si.
- Validar cada componente em contexto mobile antes de adicionar novas variações.
- Priorizar clareza sobre sofisticação visual.

## Resumo final

- **Lista de componentes essenciais:** cabeçalho, navegações, cards financeiros e educativos, botões, campos, seletores, filtros, tabelas/listas, gráficos, barra de progresso, selo de status, painel de cadastro, estados vazios, avisos responsáveis, dicas educativas e área de resumo financeiro.
- **Componentes prioritários para o protótipo:** navegação, resumo financeiro, cards de indicador, botões, formulários, listas, alertas, metas, dívidas, estados vazios e avisos responsáveis.
- **Padrões de comportamento:** interação clara, linguagem educativa, estados bem definidos, dados demonstrativos identificados, gráficos explicados e adaptação mobile simples.
- **Recomendações de consistência visual:** reutilizar estruturas, nomes, selos, espaçamentos e estilos de ação, mantendo acessibilidade e simplicidade antes de criar novas variações.
