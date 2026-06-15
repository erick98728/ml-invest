# Revisão final do planejamento do ML-Invest

## Resumo executivo

A revisão geral indica que o ML-Invest está coerente como plataforma educativa de organização financeira pessoal. A proposta, as páginas, os componentes, o dashboard, os dados demonstrativos e as diretrizes mobile formam uma base suficiente para iniciar a próxima etapa de prototipação visual.

Os principais pontos de atenção encontrados são: excesso de documentação espalhada, repetição entre alguns blocos, necessidade de consolidar um conjunto canônico de dados demonstrativos, risco de sobrecarregar o dashboard e necessidade de manter alertas financeiros sempre cautelosos. A revisão recomenda seguir para wireframes de baixa fidelidade antes de qualquer decisão técnica.

## 1. Verificação da coerência geral do produto

O produto está coerente com a proposta central: educação financeira e organização pessoal, sem consultoria profissional. As áreas planejadas se conectam bem:

- receitas e despesas alimentam saldo e relatórios;
- dívidas alimentam alertas e plano educativo;
- metas alimentam progresso e plano;
- dashboard centraliza a visão do mês;
- relatórios mostram evolução;
- dados demonstrativos permitem testar o protótipo sem backend.

### Ajuste realizado nesta revisão

Foi padronizado o cenário demonstrativo principal para manter consistência entre documentos: receitas de R$ 5.000,00, despesas de R$ 4.800,00, saldo de R$ 200,00, percentual poupado de 4% e comprometimento de 96%.

## 2. Verificação da clareza da proposta

A proposta está clara: ajudar o usuário a entender melhor sua vida financeira com visualização simples, dados organizados e orientações educativas.

### Pontos fortes

- O produto não promete enriquecimento.
- O foco em dados manuais ou demonstrativos está bem definido.
- A linguagem prioriza iniciantes.
- A proposta é útil mesmo sem integração bancária.

### Ponto de melhoria

A página inicial deve comunicar em poucos segundos: “organize receitas, despesas, dívidas e metas para entender seu mês”. Textos longos devem ficar em seções secundárias.

## 3. Verificação da simplicidade da navegação

A navegação planejada é simples, mas possui muitas áreas para um primeiro contato. A estrutura mínima continua adequada:

- Início;
- Meu mês;
- Receitas;
- Despesas;
- Dívidas;
- Metas;
- Plano;
- Relatórios;
- Perfil demo.

### Recomendação

No protótipo, a navegação principal deve destacar apenas cinco itens: Meu mês, Receitas, Despesas, Metas e Plano. Dívidas, Relatórios, Início e Perfil demo podem ficar em menu secundário no mobile.

## 4. Verificação da consistência visual

A identidade visual está consistente: cards, cores funcionais, gráficos simples, botões claros e linguagem visual amigável.

### Pontos que devem ser preservados

- Cards como elemento central.
- Base clara e neutra.
- Cores funcionais por área.
- Ícones simples com rótulo.
- Pouco uso de vermelho.
- Gráficos simples e explicados.

### Risco visual

A combinação de muitos cards, alertas e gráficos pode deixar o dashboard pesado. A solução é priorizar blocos e usar “Ver detalhes” para informações secundárias.

## 5. Verificação da linguagem educativa

A linguagem está alinhada ao propósito educativo. O uso de expressões como “com base nos dados informados”, “pode indicar” e “considere revisar” deve continuar obrigatório em diagnósticos e alertas.

### Recomendação

Criar uma revisão de microcopy antes dos wireframes finais para garantir que nenhum texto soe como ordem, julgamento ou promessa.

## 6. Verificação dos limites éticos e financeiros

Os limites estão explícitos e adequados:

- sem consultoria financeira profissional;
- sem recomendação de produtos específicos;
- sem promessa de rentabilidade;
- sem decisões obrigatórias;
- sem dados sensíveis;
- sem integração bancária na primeira versão.

### Ponto crítico

A área de dívidas exige cuidado contínuo para não parecer cobrança ou prescrição de pagamento. Usar sempre “pode merecer atenção” e “considere buscar apoio especializado” quando necessário.

## 7. Verificação das páginas obrigatórias

Todas as páginas obrigatórias estão contempladas:

- Página inicial;
- Dashboard financeiro;
- Receitas;
- Despesas;
- Dívidas;
- Metas financeiras;
- Plano financeiro educativo;
- Relatórios;
- Configurações ou perfil demonstrativo.

### Recomendação

Para o primeiro protótipo visual, priorizar: Início, Meu mês, Despesas, Dívidas, Metas e Plano. Receitas e Relatórios podem ser mais simples na primeira versão, desde que existam.

## 8. Verificação dos componentes principais

Os componentes principais estão bem definidos e reutilizáveis. A lista é completa, mas pode ser enxugada para a primeira prototipação.

### Componentes essenciais para começar

- Cabeçalho;
- Navegação;
- Área de resumo financeiro;
- Card de indicador;
- Card de alerta;
- Botões;
- Campo de formulário;
- Lista de movimentações;
- Card de dívida;
- Card de meta;
- Barra de progresso;
- Bloco de aviso responsável;
- Estado vazio.

### Pode ficar para depois

- Gráfico de evolução mensal avançado;
- Tabelas detalhadas;
- Variações complexas de filtros;
- Muitas variações de cards educativos.

## 9. Verificação do dashboard

O dashboard está bem planejado e deve permitir compreensão rápida da situação financeira.

### Pontos fortes

- Indicadores principais claros.
- Diagnóstico educativo.
- Alertas financeiros.
- Categorias, dívidas, metas e movimentações conectadas.

### Risco

Há muitos blocos no dashboard. Em mobile, isso pode gerar rolagem excessiva.

### Recomendação

No primeiro protótipo, o dashboard deve mostrar no topo apenas:

1. saldo mensal;
2. receitas;
3. despesas;
4. comprometimento;
5. diagnóstico curto;
6. até três alertas;
7. atalhos para detalhes.

## 10. Verificação das áreas de receitas, despesas, dívidas e metas

As quatro áreas estão claras e funcionais.

### Receitas

Simples e adequada. Deve pedir poucos campos.

### Despesas

Bem estruturada, com categorias úteis e separação entre fixas, variáveis e essenciais.

### Dívidas

Completa e responsável, mas precisa manter tom cuidadoso.

### Metas

Motivadora e visual, com barras de progresso e status claros.

### Recomendação geral

Todas as áreas devem começar com formulários curtos. Detalhes avançados devem ser opcionais ou ficar fora da primeira versão.

## 11. Verificação do plano financeiro educativo

O plano está alinhado ao produto. Ele prioriza organização e educação sem decisões definitivas.

### Pontos fortes

- Prioridades ordenadas.
- Exemplos por perfil.
- Checklist mensal.
- Aviso responsável.
- Conexão com dashboard e metas.

### Recomendação

Mostrar no máximo três prioridades na primeira dobra da página. O restante pode aparecer como etapas secundárias ou checklist.

## 12. Verificação dos relatórios

A área de relatórios está completa e deve ajudar o usuário a perceber padrões.

### Pontos fortes

- Gráficos simples.
- Textos explicativos por gráfico.
- Dados demonstrativos.
- Mobile considerado desde o início.

### Risco

Relatórios podem parecer análise financeira avançada se houver muitos gráficos na mesma tela.

### Recomendação

Usar no primeiro protótipo apenas quatro blocos principais:

1. receitas x despesas;
2. evolução do saldo;
3. gastos por categoria;
4. metas e dívidas em resumo.

## 13. Verificação dos dados demonstrativos

Os dados demonstrativos são realistas e suficientes para testar a interface. A revisão recomenda tratar `Marina Demo — cenário de atenção` como cenário canônico principal.

### Cenário canônico recomendado

- Receitas: R$ 5.000,00;
- Despesas: R$ 4.800,00;
- Saldo: R$ 200,00;
- Porcentagem poupada: 4%;
- Comprometimento: 96%;
- Dívidas em aberto: R$ 7.140,00;
- Dívidas atrasadas: 1;
- Metas: 4.

### Recomendação

Evitar criar novos dados demonstrativos sem atualizar o conjunto canônico para não gerar inconsistência entre telas.

## 14. Verificação da experiência mobile

A experiência mobile está bem planejada. A navegação inferior e a ordem de leitura do dashboard são adequadas.

### Pontos fortes

- Coluna única.
- Tabelas convertidas em cards.
- Gráficos simples.
- Botões grandes.
- Alertas compactos.

### Recomendação

O mobile deve ser desenhado antes ou junto com o desktop, não como adaptação final.

## 15. Telas ou blocos redundantes

### Redundâncias encontradas

- Diagnóstico financeiro aparece no dashboard, plano e relatórios.
- Alertas aparecem no dashboard, plano, dívidas e despesas.
- Resumo financeiro aparece no dashboard e relatórios.
- Aviso responsável aparece em várias áreas.

### Recomendação

Manter a repetição quando ela ajuda o contexto, mas reduzir o tamanho dos blocos repetidos:

- dashboard: diagnóstico curto;
- plano: diagnóstico com prioridades;
- relatórios: diagnóstico interpretativo mensal;
- avisos responsáveis: versão curta por padrão, versão longa apenas em áreas sensíveis.

## 16. Partes confusas

### Pontos que podem confundir

- Diferença entre “Plano educativo” e “Diagnóstico financeiro”.
- Diferença entre “Relatórios” e “Dashboard”.
- Diferença entre “despesa essencial” e “despesa fixa”.
- Cálculo de comprometimento quando parcelas já estão incluídas nas despesas.

### Recomendações

- Diagnóstico responde “como está o mês?”.
- Plano responde “quais próximos passos posso revisar?”.
- Relatórios respondem “como isso evoluiu?”.
- Dashboard responde “o que preciso entender agora?”.
- Explicar que uma despesa pode ser fixa e essencial ao mesmo tempo.
- Deixar claro se parcelas estão ou não incluídas nas despesas do mês.

## 17. Sugestões de melhoria visual

- Reduzir quantidade de cards visíveis no topo.
- Usar um card principal de saldo maior que os demais.
- Limitar alertas a três no dashboard.
- Usar gráficos de barras horizontais para categorias no mobile.
- Manter vermelho apenas para risco real.
- Usar selos textuais junto com cores.
- Criar espaçamento generoso entre seções.
- Evitar listas longas na tela inicial.
- Usar ilustrações apenas na página inicial e estados vazios.

## 18. Sugestões de melhoria de conteúdo

- Criar microcopy padrão para dados demonstrativos.
- Padronizar o termo “saldo estimado”.
- Padronizar “plano educativo” em vez de alternar nomes longos.
- Criar versão curta e longa para avisos responsáveis.
- Reduzir textos dentro de cards.
- Usar exemplos concretos em estados vazios.
- Revisar todos os diagnósticos para evitar tom prescritivo.

## 19. Sugestões de melhoria de usabilidade

- Adicionar ação principal em cada página.
- Oferecer “usar dados demonstrativos” em estados vazios.
- Permitir alternar cenário positivo, atenção e crítico no perfil demo.
- Manter filtros recolhidos no mobile.
- Evitar carrossel para informações essenciais.
- Usar “Ver todos” em listas longas.
- Confirmar exclusão de itens demonstrativos.
- Garantir retorno rápido ao dashboard.

## 20. Lista de ajustes prioritários

1. Definir `Marina Demo — cenário de atenção` como fonte canônica de dados demonstrativos.
2. Criar wireframes de baixa fidelidade para Início, Meu mês, Despesas, Dívidas, Metas e Plano.
3. Reduzir o dashboard a blocos essenciais no primeiro protótipo.
4. Padronizar microcopy de diagnóstico, alerta e aviso responsável.
5. Validar navegação mobile com cinco itens principais.
6. Converter tabelas mobile em cards/listas.
7. Definir estados vazios visuais para receitas, despesas, dívidas, metas e relatórios.
8. Revisar todos os blocos de dívidas para evitar tom de cobrança.
9. Criar uma tela de Perfil demo para alternância de cenários.
10. Validar contraste e legibilidade dos cards financeiros.

## 21. Lista do que pode ficar para depois

- Relatórios com muitos períodos.
- Filtros avançados.
- Gráficos de evolução detalhados.
- Personalização visual.
- Exportação de relatórios.
- Histórico persistente.
- Onboarding longo.
- Conteúdos educativos extensos.
- Comparativos complexos.
- Qualquer decisão técnica de stack.

## 22. Checklist final antes de iniciar prototipação ou desenvolvimento

### Produto

- [ ] Proposta clara em uma frase.
- [ ] Escopo do protótipo confirmado.
- [ ] Páginas obrigatórias definidas.
- [ ] Itens fora de escopo documentados.

### Conteúdo

- [ ] Microcopy educativa revisada.
- [ ] Avisos responsáveis padronizados.
- [ ] Diagnósticos sem promessas ou ordens absolutas.
- [ ] Dados demonstrativos identificados como fictícios.

### UX

- [ ] Navegação desktop definida.
- [ ] Navegação mobile definida.
- [ ] Estados vazios criados.
- [ ] Estados de alerta definidos.
- [ ] Formulários curtos.
- [ ] Tabelas adaptadas para mobile.

### Visual

- [ ] Cards principais definidos.
- [ ] Cores funcionais padronizadas.
- [ ] Gráficos simples escolhidos.
- [ ] Contraste revisado.
- [ ] Vermelho usado com moderação.

### Ética e segurança

- [ ] Nenhum dado sensível solicitado.
- [ ] Nenhuma recomendação de produto financeiro.
- [ ] Nenhuma promessa de ganho.
- [ ] Orientação profissional sugerida em situações complexas.

## 23. Versão resumida do escopo final do protótipo

O protótipo final recomendado deve incluir:

- página inicial com proposta clara;
- dashboard “Meu mês” com indicadores essenciais;
- receitas com cadastro demonstrativo simples;
- despesas com categorias e alertas de gasto;
- dívidas com status e avisos responsáveis;
- metas com barras de progresso;
- plano educativo com três prioridades e checklist;
- relatórios simples com gráficos básicos;
- perfil demo para alternar cenários;
- dados demonstrativos canônicos;
- experiência mobile com navegação inferior;
- estados vazios e alertas;
- avisos de que tudo é educativo e demonstrativo.

## Principais problemas encontrados

- Documentação muito ampla pode dificultar priorização.
- Alguns blocos se repetem entre dashboard, plano e relatórios.
- Dashboard pode ficar carregado se todos os blocos aparecerem de uma vez.
- Relatórios podem parecer avançados demais se muitos gráficos forem exibidos.
- Área de dívidas exige cuidado especial para não parecer cobrança ou consultoria.
- Dados demonstrativos precisavam de uma fonte canônica única.

## Melhorias recomendadas

- Usar o cenário de atenção como base canônica.
- Criar wireframes antes de qualquer implementação.
- Reduzir o dashboard inicial aos indicadores essenciais.
- Padronizar microcopy curta para alertas e diagnósticos.
- Priorizar mobile desde o primeiro desenho.
- Manter relatórios simples e explicados.
- Usar avisos responsáveis em versão curta por padrão.

## Recomendação objetiva para a próxima etapa

A próxima etapa recomendada é criar **wireframes de baixa fidelidade** das telas principais, começando por **Início**, **Meu mês**, **Despesas**, **Dívidas**, **Metas** e **Plano educativo**. Esses wireframes devem usar o cenário canônico de Marina Demo e validar hierarquia, navegação, mobile, estados vazios, alertas e microcopy antes de qualquer decisão técnica.
