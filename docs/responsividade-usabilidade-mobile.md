# Responsividade e usabilidade mobile do ML-Invest

## Visão geral

A experiência mobile do ML-Invest deve permitir que o usuário entenda sua situação financeira pelo celular sem esforço. Como o produto usa cards, gráficos, listas, tabelas, formulários demonstrativos e alertas educativos, a interface em telas pequenas deve priorizar clareza, leitura confortável e ações simples.

A versão mobile não deve ser uma cópia apertada do desktop. Ela deve reorganizar informações por prioridade, reduzir poluição visual e transformar conteúdos largos em cards, listas e blocos empilhados.

## 1. Princípios da experiência mobile

A experiência mobile deve seguir estes princípios:

1. **Resumo primeiro, detalhe depois:** mostrar saldo, receitas, despesas e alertas principais antes de gráficos ou listas longas.
2. **Uma decisão por vez:** evitar muitas ações concorrendo na mesma área.
3. **Leitura em coluna única:** organizar blocos empilhados para rolagem vertical natural.
4. **Cards claros e comparáveis:** manter títulos, valores e contexto sempre visíveis.
5. **Toques confortáveis:** botões, filtros e itens clicáveis devem ser fáceis de tocar.
6. **Pouca densidade visual:** evitar telas lotadas de números, ícones e cores.
7. **Textos curtos e expansíveis:** mostrar o essencial e permitir aprofundamento quando necessário.
8. **Acessibilidade desde o início:** contraste, tamanho de texto e rótulos devem funcionar bem em telas pequenas.

## 2. Como a navegação deve funcionar no celular

### Navegação principal

A navegação mobile deve ser simples e previsível. A recomendação é usar uma navegação inferior com os itens mais usados:

1. **Meu mês**.
2. **Receitas**.
3. **Despesas**.
4. **Metas**.
5. **Plano**.

### Menu adicional

Itens secundários devem ficar em um menu adicional:

- Início.
- Dívidas.
- Relatórios.
- Perfil demo.
- Avisos e limites educativos.

### Regras de navegação

- O item ativo deve ser indicado por texto, ícone e destaque visual.
- O dashboard deve estar sempre a um toque de distância.
- A navegação não deve depender de gestos escondidos.
- Ícones devem ter rótulos curtos.
- Ações de adicionar devem ser contextuais à página atual.

## 3. Como organizar o dashboard em telas pequenas

A ordem mobile do dashboard deve ser:

1. Cabeçalho compacto com “Meu mês” e período.
2. Aviso discreto de dados demonstrativos.
3. Card principal de saldo mensal.
4. Cards compactos de receitas e despesas.
5. Card de comprometimento da renda e porcentagem poupada.
6. Diagnóstico financeiro do mês.
7. Alertas financeiros principais.
8. Maiores categorias de gasto.
9. Dívidas em aberto.
10. Progresso das metas.
11. Últimas movimentações.
12. Plano educativo resumido.

### Regras específicas

- O saldo mensal deve ser o primeiro dado financeiro destacado.
- Alertas críticos ou de atenção devem aparecer antes de gráficos detalhados.
- Gráficos devem ter explicação curta logo abaixo.
- Listas longas devem mostrar poucos itens e link para “Ver todos”.

## 4. Como exibir cards financeiros

Cards financeiros no mobile devem ser empilhados ou exibidos em grade simples de uma coluna. Em telas um pouco maiores, pode haver dois cards por linha se a leitura continuar confortável.

### Conteúdo mínimo do card

- título curto;
- valor principal;
- ícone ou selo textual;
- contexto em uma frase curta;
- ação opcional.

### Regras de exibição

- Evitar cards com muitos números ao mesmo tempo.
- Usar valores grandes o suficiente para leitura rápida.
- Não depender apenas de cor para indicar status.
- Manter espaçamento interno confortável.
- Evitar sombras pesadas ou bordas muito fortes.

### Exemplo de card compacto

```text
Saldo estimado
R$ 200,00
Com base nos dados demonstrativos deste mês.
```

## 5. Como exibir gráficos simples

Gráficos mobile devem ser compactos, legíveis e acompanhados de texto.

### Gráficos recomendados

- barras horizontais para categorias;
- barras verticais simples para receitas x despesas;
- linha simples para saldo mensal;
- barras de progresso para metas;
- rosca apenas quando houver poucas categorias e legenda clara.

### Regras de gráficos

- Mostrar no máximo cinco categorias principais.
- Exibir valores fora ou ao lado do gráfico quando possível.
- Usar legenda próxima do gráfico.
- Evitar gráficos que exigem rolagem horizontal.
- Evitar 3D, excesso de cores e muitos eixos.
- Sempre incluir resumo textual.

### Texto de apoio recomendado

“Este gráfico ajuda a observar padrões com base nos dados informados. Ele não representa uma análise financeira profissional.”

## 6. Como adaptar tabelas para listas

Tabelas largas não devem ser usadas como padrão no mobile. Elas devem virar listas ou cards resumidos.

### Transformação recomendada

Uma linha de tabela deve virar um card com:

- título do item;
- valor em destaque;
- categoria ou status;
- período;
- ação de ver detalhes ou editar.

### Exemplo de despesa em lista

```text
Mercado
R$ 320,00
Alimentação · Variável · Junho demonstrativo
```

### Regras

- Não esconder valores principais.
- Mostrar status textual quando houver alerta.
- Permitir expandir detalhes se necessário.
- Evitar colunas comprimidas.

## 7. Como organizar formulários

Formulários demonstrativos devem ser curtos e em coluna única.

### Ordem recomendada dos campos

1. Nome do item.
2. Valor.
3. Categoria ou tipo.
4. Data ou período demonstrativo.
5. Status ou recorrência, quando necessário.
6. Observação opcional.

### Regras de formulário

- Usar rótulos sempre visíveis.
- Explicar campos com microcopy curta.
- Pedir apenas o essencial.
- Não pedir dados sensíveis.
- Usar mensagens de erro educativas.
- Manter botões de salvar e cancelar próximos ao final.
- Evitar formulários longos em modais pequenos; preferir painel ou tela dedicada quando necessário.

### Mensagem de segurança

“Não insira dados sensíveis. Use informações simples ou fictícias para testar o protótipo.”

## 8. Como exibir alertas sem ocupar espaço demais

Alertas devem ser compactos, claros e não alarmistas.

### Estrutura do alerta mobile

- selo de nível: informação, atenção ou risco;
- título curto;
- frase explicativa;
- ação simples opcional.

### Regras

- Mostrar no dashboard apenas os alertas mais importantes.
- Agrupar alertas secundários em “Ver mais pontos de atenção”.
- Evitar banners grandes que empurrem todo o conteúdo.
- Usar cores com moderação.
- Não usar animações piscantes.

### Exemplo

```text
Atenção
Dívida atrasada cadastrada
Organizar vencimento e valor pode ajudar a entender o impacto no mês.
```

## 9. Como priorizar informações

Em telas pequenas, a hierarquia deve ser rígida:

1. Situação geral do mês.
2. Saldo, receitas e despesas.
3. Alertas que exigem atenção.
4. Diagnóstico educativo.
5. Categorias e dívidas.
6. Metas.
7. Movimentações recentes.
8. Relatórios detalhados.
9. Configurações e dados demonstrativos.

Informações secundárias devem ficar recolhidas, resumidas ou em telas de detalhe.

## 10. Como reduzir poluição visual

- Usar poucos estilos de card.
- Evitar muitos ícones por bloco.
- Limitar cores por função.
- Não colocar vários gráficos seguidos sem texto.
- Mostrar no máximo uma ação principal por seção.
- Usar espaçamento generoso entre blocos.
- Remover textos repetitivos quando um aviso global já estiver visível.
- Evitar listas longas no dashboard.
- Priorizar seções com títulos claros.

## 11. Como lidar com textos longos

Textos longos devem ser divididos e resumidos.

### Regras

- Usar frases curtas.
- Evitar parágrafos grandes dentro de cards.
- Mostrar resumo e opção “Ler mais” quando necessário.
- Usar listas quando houver passos ou prioridades.
- Manter avisos responsáveis visíveis, mas objetivos.
- Evitar tooltips como única forma de explicar informação importante.

### Exemplo

Resumo visível:

“Seu mês está positivo, mas com pouca margem.”

Detalhe expansível:

“Com base nos dados demonstrativos, despesas e parcelas ocupam grande parte da renda informada. Revisar categorias variáveis pode ajudar a entender melhor o mês.”

## 12. Como organizar filtros

Filtros no mobile devem ser simples e contextuais.

### Filtros principais

- período;
- categoria;
- tipo;
- status;
- cenário demonstrativo.

### Padrões recomendados

- Usar botão “Filtrar” que abre painel inferior ou seção expansível.
- Mostrar filtros ativos como chips.
- Incluir ação “Limpar filtros”.
- Evitar muitos filtros visíveis ao mesmo tempo.
- Manter o período ativo visível no topo da página.

### Microcopy

- “Período”.
- “Categoria”.
- “Status”.
- “Limpar filtros”.
- “Aplicar filtros”.

## 13. Como exibir metas com barra de progresso

Metas no mobile devem aparecer como cards com barra de progresso clara.

### Conteúdo do card de meta

- nome da meta;
- tipo;
- valor atual;
- valor objetivo;
- percentual textual;
- barra de progresso;
- prazo;
- status.

### Regras

- Percentual deve aparecer em texto, não apenas na barra.
- Valores devem ser fáceis de comparar.
- Mostrar no dashboard até três metas.
- Na página de metas, permitir lista completa.
- Para metas sem dados, mostrar orientação curta.

### Mensagem educativa

“Metas podem ser ajustadas conforme sua realidade muda. O progresso não precisa ser linear.”

## 14. Como exibir dívidas de forma clara

Dívidas devem ser exibidas com cuidado, sem culpa ou alarmismo.

### Conteúdo do card de dívida

- nome da dívida;
- parcela do mês;
- valor total informado;
- vencimento;
- status textual;
- alerta educativo, se houver.

### Regras

- Status deve ser visível por texto e cor.
- Dívidas atrasadas devem aparecer no topo da lista de dívidas, mas com linguagem responsável.
- Evitar telas com aparência de cobrança.
- Mostrar ação “Revisar dívida”, não “Resolver agora”.
- Incluir aviso para buscar apoio especializado em situações complexas.

### Mensagem educativa

“Organizar dívidas ajuda a visualizar compromissos. O ML-Invest não define qual dívida deve ser paga primeiro.”

## 15. Como exibir relatórios no mobile

Relatórios mobile devem priorizar leitura narrativa e gráficos simples.

### Ordem recomendada

1. Período analisado.
2. Cards de resumo.
3. Relatório educativo mensal.
4. Receitas x despesas.
5. Evolução do saldo.
6. Categorias de gastos.
7. Dívidas.
8. Metas.
9. Tabelas convertidas em listas.
10. Aviso responsável.

### Regras

- Um gráfico por bloco.
- Texto explicativo abaixo de cada gráfico.
- Listas resumidas com opção “Ver detalhes”.
- Tabelas sempre convertidas em cards.
- Evitar comparações com muitos períodos ao mesmo tempo.

## 16. Como garantir botões fáceis de tocar

Botões e áreas clicáveis devem ser confortáveis para uso com dedo.

### Regras

- Botões principais devem ocupar largura suficiente para toque seguro.
- Manter espaçamento entre botões próximos.
- Evitar links pequenos em textos longos.
- Ações importantes devem ter rótulo textual.
- Botões destrutivos ou de exclusão devem pedir confirmação.
- Estados de toque, foco e desabilitado devem ser perceptíveis.

### Textos recomendados

- “Adicionar receita”.
- “Registrar despesa”.
- “Revisar dívidas”.
- “Criar meta”.
- “Ver resumo”.
- “Aplicar filtros”.

## 17. Como garantir leitura confortável

### Regras de leitura

- Usar tamanho de texto confortável para celular.
- Evitar blocos com muitas linhas.
- Manter contraste adequado.
- Evitar texto claro sobre fundo colorido forte.
- Separar seções com títulos e espaçamento.
- Usar números financeiros com destaque e alinhamento consistente.
- Evitar abreviações confusas.

### Valores financeiros

Valores devem seguir formato consistente:

```text
R$ 1.500,00
```

Percentuais devem ter explicação quando necessário:

```text
4% poupado estimado
```

## 18. Como manter acessibilidade

A versão mobile deve atender cuidados básicos de acessibilidade:

- Não depender apenas de cor para status.
- Usar rótulos em ícones importantes.
- Garantir contraste entre texto e fundo.
- Permitir leitura lógica de cima para baixo.
- Usar mensagens de erro claras.
- Evitar animações excessivas.
- Manter foco visível em protótipos interativos.
- Usar linguagem simples e direta.
- Evitar gestos complexos como única forma de ação.
- Garantir que alertas tenham título e descrição textual.

## 19. Erros comuns que devem ser evitados

- Copiar tabelas desktop diretamente para o celular.
- Exibir muitos cards no topo antes do saldo principal.
- Usar gráficos pequenos demais para ler.
- Esconder alertas importantes em menus secundários.
- Colocar filtros longos sempre abertos.
- Usar ícones sem texto.
- Criar botões pequenos ou próximos demais.
- Usar vermelho em excesso.
- Mostrar diagnósticos longos dentro de cards apertados.
- Depender de carrossel para informações essenciais.
- Exigir gestos complexos para navegar.
- Misturar muitos estilos visuais na mesma tela.

## 20. Checklist mobile final

Antes de considerar uma tela mobile pronta, verificar:

- [ ] A informação mais importante aparece no topo.
- [ ] O usuário entende saldo, receitas e despesas sem rolar muito.
- [ ] Cards têm título, valor e contexto claros.
- [ ] Botões são fáceis de tocar.
- [ ] Tabelas foram convertidas em listas ou cards.
- [ ] Gráficos têm legenda e texto explicativo.
- [ ] Alertas são visíveis sem serem alarmistas.
- [ ] Textos longos foram resumidos ou divididos.
- [ ] Filtros não ocupam espaço excessivo.
- [ ] Ícones importantes têm rótulo.
- [ ] Cores não são a única forma de comunicar status.
- [ ] Valores financeiros estão legíveis.
- [ ] Estados vazios têm ação clara.
- [ ] Dados demonstrativos estão identificados.
- [ ] A tela funciona bem em rolagem vertical.
- [ ] O usuário consegue voltar ao dashboard facilmente.

## Resumo final

- **Regras de responsividade:** priorizar coluna única, resumo primeiro, cards claros, gráficos simples, tabelas convertidas em listas e ações fáceis de tocar.
- **Estrutura mobile das principais telas:** dashboard começa por saldo e alertas; áreas operacionais usam cards/listas; relatórios usam narrativa e um gráfico por bloco; formulários são curtos e em coluna única.
- **Adaptações de componentes:** cards compactos, gráficos com legenda textual, filtros em painel, metas com barras de progresso, dívidas em cards cuidadosos e tabelas transformadas em listas.
- **Checklist de usabilidade mobile:** validar hierarquia, legibilidade, toque, acessibilidade, estados vazios, dados demonstrativos e navegação simples antes de avançar para implementação.
