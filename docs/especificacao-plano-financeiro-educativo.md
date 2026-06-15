# Especificação do plano financeiro educativo do ML-Invest

## Visão geral

A área de **Plano financeiro educativo** do ML-Invest deve transformar os dados demonstrativos ou informados pelo usuário em prioridades simples de organização financeira. A página deve funcionar como um guia educativo, cauteloso e prático, sem oferecer consultoria financeira profissional, sem prometer resultados e sem recomendar produtos específicos.

O plano deve ajudar o usuário a entender possíveis próximos passos, como organizar despesas essenciais, revisar gastos variáveis, observar dívidas atrasadas, começar uma reserva de emergência, separar pequenas quantias para metas e acompanhar a evolução mensal.

## 1. Objetivo da página

A página de plano financeiro educativo tem como objetivo orientar o usuário sobre prioridades de organização financeira com base em leituras simples dos dados cadastrados no protótipo.

Ela deve responder perguntas como:

- “Qual ponto merece mais atenção neste mês?”
- “O que posso revisar primeiro?”
- “Quais pequenas ações podem melhorar minha organização?”
- “Como minhas receitas, despesas, dívidas e metas se conectam?”
- “Como acompanhar minha evolução de forma simples?”

A página não deve decidir pelo usuário. Ela deve explicar possíveis caminhos e reforçar que cada pessoa tem uma realidade financeira própria.

## 2. Estrutura visual da página

A estrutura visual recomendada deve seguir uma leitura em blocos organizados:

1. **Cabeçalho da página:** título “Plano educativo” e período analisado.
2. **Resumo da situação:** leitura curta baseada no dashboard.
3. **Prioridades do mês:** lista ordenada de pontos de atenção.
4. **Plano em etapas:** cards com ações educativas simples.
5. **Checklist mensal:** tarefas de acompanhamento.
6. **Evolução mensal:** indicadores simples de progresso.
7. **Conexão com metas:** metas afetadas pelo plano.
8. **Aviso responsável:** limites do produto e recomendação de apoio profissional quando necessário.

A página deve usar cards, selos de status, blocos de dica educativa e avisos responsáveis. O visual deve ser calmo e organizado, sem aparência de cobrança ou alerta extremo.

## 3. Como o plano deve ser apresentado ao usuário

O plano deve ser apresentado como uma **orientação educativa baseada nos dados informados**, não como uma ordem ou recomendação personalizada definitiva.

### Recomendações de apresentação

- Usar frases como “pode ser útil”, “considere revisar”, “um possível próximo passo”.
- Mostrar de três a cinco prioridades por vez.
- Explicar por que cada prioridade aparece.
- Conectar cada prioridade a uma área do produto: despesas, dívidas, metas ou dashboard.
- Permitir que o usuário marque ações como lidas ou acompanhadas no protótipo.
- Evitar ranking agressivo ou linguagem de urgência artificial.

### Exemplo de introdução

“Com base nos dados informados, organizamos alguns pontos que podem ajudar você a revisar o mês com mais clareza. Essas sugestões são educativas e não substituem orientação financeira profissional.”

## 4. Seções principais do plano

### 4.1 Resumo educativo do mês

Mostra uma leitura curta da situação geral.

Conteúdo esperado:

- status do mês: positivo, equilibrado, atenção ou pressionado;
- saldo estimado;
- principal ponto de atenção;
- frase educativa cautelosa.

### 4.2 Prioridades do mês

Lista as prioridades recomendadas para organização.

Conteúdo esperado:

- título da prioridade;
- motivo educativo;
- área relacionada;
- ação sugerida;
- nível de atenção.

### 4.3 Plano em etapas

Transforma prioridades em pequenas ações práticas.

Conteúdo esperado:

- etapa 1: organizar dados essenciais;
- etapa 2: revisar despesas ou dívidas;
- etapa 3: ajustar metas;
- etapa 4: acompanhar evolução.

### 4.4 Checklist mensal educativo

Ajuda o usuário a acompanhar hábitos simples de organização.

### 4.5 Evolução mensal

Mostra se houve melhora, estabilidade ou piora demonstrativa em indicadores como saldo, gastos variáveis, dívidas e metas.

### 4.6 Aviso responsável

Reforça limites éticos e financeiros do produto.

## 5. Ordem recomendada das prioridades

A ordem deve seguir uma lógica de segurança, clareza e organização básica:

1. **Dados essenciais faltando:** antes de diagnosticar, verificar se receitas e despesas principais foram informadas.
2. **Saldo negativo:** quando despesas superam receitas.
3. **Dívidas atrasadas ou com alto impacto:** compromissos que pressionam o mês.
4. **Despesas essenciais:** moradia, alimentação, saúde, transporte e contas básicas.
5. **Gastos variáveis elevados:** lazer, compras, assinaturas e outras categorias flexíveis.
6. **Reserva de emergência:** quando há saldo positivo, mas nenhuma reserva cadastrada.
7. **Metas financeiras:** ajustar valores, prazos ou prioridades.
8. **Acompanhamento mensal:** revisar evolução e manter registros atualizados.

Essa ordem não deve ser apresentada como regra universal. Ela serve como uma estrutura educativa para organizar a leitura do mês.

## 6. Critérios educativos para gerar prioridades

### Dados insuficientes

Gerar prioridade quando:

- não há receitas cadastradas;
- não há despesas cadastradas;
- muitas movimentações estão sem categoria;
- dívidas ou metas estão com dados incompletos.

Mensagem base:

“Completar informações principais pode tornar a leitura do plano mais útil.”

### Saldo negativo

Gerar prioridade quando:

- despesas totais são maiores que receitas;
- saldo estimado do mês está abaixo de zero.

Mensagem base:

“As despesas informadas superam as receitas neste período. Revisar maiores categorias e compromissos pode ajudar a entender o que está pressionando o mês.”

### Dívidas atrasadas ou relevantes

Gerar prioridade quando:

- existe dívida com status atrasada;
- parcelas representam parte relevante da renda;
- há muitos compromissos em aberto;
- vencimentos próximos estão acumulados.

Mensagem base:

“Dívidas atrasadas ou parcelas relevantes podem merecer atenção. O ML-Invest ajuda a visualizar esses compromissos, mas não define uma estratégia de pagamento.”

### Gastos variáveis elevados

Gerar prioridade quando:

- lazer, compras, assinaturas ou outros gastos variáveis têm grande participação;
- despesas variáveis crescem em relação ao mês anterior demonstrativo;
- muitas despesas variáveis estão sem categoria.

Mensagem base:

“Gastos variáveis podem mudar bastante ao longo do mês. Acompanhar essas categorias pode ajudar a evitar surpresas.”

### Ausência de reserva de emergência

Gerar prioridade quando:

- usuário tem saldo positivo;
- não há meta de reserva cadastrada;
- há metas menos essenciais, mas nenhuma reserva.

Mensagem base:

“Uma reserva pode ajudar a lidar com imprevistos. Se fizer sentido para sua realidade, você pode criar uma meta simples e ajustar o valor ao longo do tempo.”

### Metas sem progresso

Gerar prioridade quando:

- meta está sem valor atual;
- meta tem prazo próximo e baixo progresso;
- meta parece incompatível com saldo demonstrativo.

Mensagem base:

“Metas podem ser ajustadas conforme sua realidade financeira muda. Revisar prazo ou valor pode tornar o planejamento mais claro.”

## 7. Exemplos de planos para diferentes perfis

### Perfil 1 — Usuário com saldo negativo

**Resumo:** “Seu mês parece pressionado.”

**Prioridades sugeridas:**

1. Revisar despesas essenciais e compromissos fixos.
2. Identificar categorias com maior peso no mês.
3. Conferir dívidas ou parcelas em aberto.
4. Adiar ou ajustar metas que dependem de saldo positivo.
5. Acompanhar movimentações recentes.

**Texto educativo:**

“Com base nos dados informados, as despesas superam as receitas neste período. Um possível primeiro passo é revisar os maiores grupos de gastos e compromissos do mês. Se essa situação for recorrente ou difícil de organizar, considere buscar apoio profissional.”

### Perfil 2 — Usuário com saldo positivo, mas sem reserva

**Resumo:** “Seu mês tem saldo positivo, mas ainda não há reserva cadastrada.”

**Prioridades sugeridas:**

1. Criar uma meta simples de reserva de emergência.
2. Separar uma pequena quantia demonstrativa para a meta.
3. Continuar acompanhando despesas recorrentes.
4. Revisar metas com prazos muito curtos.

**Texto educativo:**

“Os dados informados mostram saldo positivo no período. Se fizer sentido para sua realidade, começar uma reserva com um valor pequeno pode ajudar a criar mais organização para imprevistos.”

### Perfil 3 — Usuário com dívidas atrasadas

**Resumo:** “Compromissos atrasados merecem atenção.”

**Prioridades sugeridas:**

1. Conferir quais dívidas estão atrasadas.
2. Visualizar valor total, parcela e vencimento.
3. Avaliar impacto das parcelas no mês.
4. Revisar despesas variáveis para entender margem.
5. Buscar orientação especializada se a situação for recorrente.

**Texto educativo:**

“Há dívidas marcadas como atrasadas. Organizar informações como valores, vencimentos e impacto mensal pode ajudar a entender a situação. O ML-Invest não substitui orientação profissional para renegociação ou decisões complexas.”

### Perfil 4 — Usuário com muitos gastos variáveis

**Resumo:** “Gastos variáveis estão em destaque.”

**Prioridades sugeridas:**

1. Revisar categorias como lazer, compras e assinaturas.
2. Identificar pequenos gastos recorrentes.
3. Separar despesas essenciais das flexíveis.
4. Acompanhar a evolução no próximo mês.

**Texto educativo:**

“Uma parte relevante dos gastos informados está em categorias variáveis. Isso não significa que esses gastos estejam errados, mas acompanhá-los pode ajudar a entender padrões e evitar surpresas.”

### Perfil 5 — Usuário que já consegue poupar

**Resumo:** “Seu mês mostra margem positiva.”

**Prioridades sugeridas:**

1. Acompanhar se a poupança estimada se mantém nos próximos períodos.
2. Revisar metas em andamento.
3. Avaliar se existe reserva cadastrada.
4. Manter categorias atualizadas.

**Texto educativo:**

“Com base nos dados informados, há saldo positivo no período. Acompanhar metas, reserva e despesas recorrentes pode ajudar a manter clareza sobre o planejamento.”

## 8. Textos cautelosos para evitar promessa de resultado

### Frases recomendadas

- “Esta sugestão é educativa e baseada nos dados informados.”
- “Pode ser útil revisar este ponto.”
- “Considere avaliar se esta ação faz sentido para sua realidade.”
- “Este plano não garante resultado financeiro.”
- “As metas podem ser ajustadas ao longo do tempo.”
- “Em situações complexas, busque orientação profissional.”

### Frases que devem ser evitadas

- “Siga este plano e resolva sua vida financeira.”
- “Você ficará rico se fizer isso.”
- “Esta é a decisão correta.”
- “Pague esta dívida antes de todas as outras.”
- “Invista neste produto.”
- “Garantimos que você vai economizar.”

## 9. Mensagens para usuários com saldo negativo

- “Seu saldo estimado está negativo neste período. Isso pode indicar que as despesas informadas superaram as receitas.”
- “Um possível primeiro passo é revisar as maiores categorias de despesa e compromissos fixos.”
- “Se o saldo negativo se repetir por vários períodos, pode ser importante buscar orientação especializada.”
- “Evite tomar decisões financeiras importantes apenas com base neste diagnóstico educativo.”

## 10. Mensagens para usuários com saldo positivo, mas sem reserva

- “Seu mês apresenta saldo positivo, mas não há uma meta de reserva cadastrada.”
- “Se fizer sentido para sua realidade, você pode começar com uma reserva pequena e ajustável.”
- “Uma reserva pode ajudar em imprevistos, mas o valor ideal depende do contexto de cada pessoa.”
- “Criar uma meta de reserva no protótipo pode ajudar a visualizar esse planejamento.”

## 11. Mensagens para usuários com dívidas atrasadas

- “Há dívidas marcadas como atrasadas. Organizar vencimentos e valores pode ajudar a entender melhor a situação.”
- “O ML-Invest pode destacar compromissos que merecem atenção, mas não define qual decisão tomar.”
- “Se houver dificuldade para lidar com atrasos, considere buscar orientação profissional ou apoio especializado.”
- “Revisar despesas e parcelas pode ajudar a visualizar o impacto dos compromissos no mês.”

## 12. Mensagens para usuários com muitos gastos variáveis

- “Gastos variáveis aparecem com peso relevante neste período.”
- “Categorias como lazer, compras e assinaturas podem mudar bastante de um mês para outro.”
- “Acompanhar esses registros pode ajudar a entender padrões sem julgar suas escolhas.”
- “Pequenas revisões em gastos recorrentes podem melhorar a clareza do orçamento ao longo do tempo.”

## 13. Mensagens para usuários que já conseguem poupar

- “Os dados informados indicam saldo positivo no período.”
- “Acompanhar se essa margem se repete pode ajudar a entender a evolução mensal.”
- “Se você já possui metas, revisar progresso e prazos pode manter o planejamento mais claro.”
- “Mesmo com saldo positivo, acompanhar despesas recorrentes ajuda a evitar surpresas.”

## 14. Sugestões de pequenas ações práticas

As ações devem ser simples, realistas e não prescritivas:

- Adicionar as receitas principais do mês.
- Classificar despesas sem categoria.
- Revisar as três maiores categorias de gasto.
- Conferir dívidas próximas do vencimento.
- Verificar se há dívidas atrasadas.
- Criar uma meta simples de reserva.
- Separar uma pequena quantia demonstrativa para uma meta.
- Ajustar o prazo de uma meta que parece apertada.
- Comparar despesas variáveis com o mês anterior demonstrativo.
- Ler o diagnóstico mensal antes de tomar decisões importantes.

## 15. Checklist mensal educativo

O checklist mensal deve ajudar o usuário a manter uma rotina simples de organização.

### Itens recomendados

- [ ] Conferir receitas do mês.
- [ ] Registrar principais despesas.
- [ ] Classificar despesas sem categoria.
- [ ] Revisar despesas essenciais.
- [ ] Revisar gastos variáveis.
- [ ] Conferir dívidas em aberto.
- [ ] Verificar vencimentos próximos.
- [ ] Atualizar progresso das metas.
- [ ] Avaliar se há margem para reserva.
- [ ] Ler o diagnóstico educativo do mês.

### Mensagem do checklist

“Este checklist é um apoio educativo para revisar o mês com calma. Você não precisa completar tudo de uma vez.”

## 16. Bloco de aviso responsável

O bloco de aviso responsável deve aparecer no topo ou no final da página, e também próximo a diagnósticos sensíveis.

### Texto recomendado

“Este plano é educativo e baseado nos dados informados ou demonstrativos. Ele não substitui consultoria financeira, jurídica, tributária ou de investimentos. Antes de decisões importantes, avalie seu contexto e, se necessário, busque orientação profissional.”

### Variações

#### Aviso curto

“Orientação educativa baseada nos dados informados.”

#### Aviso para dívidas

“Em situações de atraso, superendividamento ou negociação complexa, considere buscar apoio especializado.”

#### Aviso para metas e investimentos

“O ML-Invest não recomenda produtos financeiros específicos. Metas de investimento devem ser tratadas como aprendizado e planejamento, não como promessa de rentabilidade.”

## 17. Como conectar o plano ao dashboard

O plano deve receber sinais do dashboard e devolver próximos passos educativos.

### Dados vindos do dashboard

- saldo do mês;
- total de receitas;
- total de despesas;
- porcentagem poupada;
- comprometimento da renda;
- maiores categorias de gasto;
- dívidas em aberto;
- alertas financeiros;
- progresso de metas.

### Conexões visuais

- Card no dashboard chamado “Plano educativo do mês”.
- Botão “Abrir plano educativo”.
- Alertas do dashboard apontando para seções específicas do plano.
- Diagnóstico do mês compartilhando o mesmo tom e status do plano.

### Microcopy de conexão

“Quer transformar este resumo em próximos passos? Veja o plano educativo do mês.”

## 18. Como conectar o plano às metas financeiras

O plano deve ajudar o usuário a revisar metas sem impor decisões.

### Conexões recomendadas

- Sugerir criação de meta de reserva quando houver saldo positivo e nenhuma reserva cadastrada.
- Sugerir revisão de prazo quando uma meta parecer apertada em relação ao saldo.
- Sugerir pausa ou ajuste apenas como possibilidade educativa.
- Mostrar metas impactadas por saldo negativo ou dívidas em aberto.
- Permitir abrir a página de metas a partir de cada sugestão.

### Microcopy

- “Revisar meta”.
- “Criar meta de reserva”.
- “Ajustar prazo da meta”.
- “Ver metas em andamento”.

## 19. Como exibir evolução mensal

A evolução mensal deve mostrar tendências simples, sem prever futuro.

### Indicadores de evolução

- saldo estimado ao longo de períodos demonstrativos;
- despesas variáveis por mês;
- dívidas em aberto;
- progresso das metas;
- quantidade de despesas sem categoria;
- checklist mensal concluído.

### Estados de evolução

- **Melhorando:** indicador demonstra avanço em relação ao período anterior.
- **Estável:** pouca mudança entre períodos.
- **Merece atenção:** indicador piorou ou ficou incompleto.
- **Sem dados suficientes:** não há histórico para comparar.

### Texto educativo

“A evolução mensal ajuda a observar padrões, mas não prevê resultados futuros. Use essa visão como apoio para acompanhar sua organização.”

## 20. Dados demonstrativos para esta área

### Cenário demonstrativo principal

- Período: Junho demonstrativo.
- Total de receitas: R$ 5.000,00.
- Total de despesas: R$ 4.800,00.
- Saldo estimado: R$ 200,00.
- Porcentagem poupada estimada: 4%.
- Comprometimento da renda: 96%.
- Dívidas em aberto: 3.
- Dívida atrasada: 1.
- Meta de reserva: não cadastrada no cenário inicial.
- Gastos variáveis com lazer, compras e assinaturas: R$ 760,00.

### Plano demonstrativo gerado

1. **Revisar dívida atrasada**
   - Motivo: existe compromisso com status atrasado.
   - Ação: “Ver dívidas”.
   - Texto: “Esta dívida pode merecer atenção. Organizar vencimento e impacto mensal pode ajudar a entender a situação.”

2. **Criar uma meta de reserva**
   - Motivo: há saldo positivo, mas nenhuma reserva cadastrada.
   - Ação: “Criar meta de reserva”.
   - Texto: “Se fizer sentido para sua realidade, começar com uma meta pequena pode ajudar a planejar imprevistos.”

3. **Revisar gastos variáveis**
   - Motivo: lazer, compras e assinaturas representam parte relevante das despesas.
   - Ação: “Ver despesas variáveis”.
   - Texto: “Esses gastos podem variar bastante. Acompanhar categorias flexíveis pode melhorar a clareza do mês.”

4. **Acompanhar evolução no próximo mês**
   - Motivo: há margem positiva, mas comprometimento elevado da renda.
   - Ação: “Ver evolução mensal”.
   - Texto: “Acompanhar a evolução ajuda a entender se a margem positiva se mantém.”

### Checklist demonstrativo

- [x] Conferir receitas do mês.
- [x] Registrar principais despesas.
- [ ] Classificar despesas sem categoria.
- [ ] Conferir dívidas em aberto.
- [ ] Criar ou revisar meta de reserva.
- [ ] Ler diagnóstico educativo do mês.

## Resumo final

- **Estrutura da página de plano financeiro:** cabeçalho, resumo educativo, prioridades do mês, plano em etapas, checklist mensal, evolução, conexão com metas e aviso responsável.
- **Regras educativas de priorização:** priorizar dados faltantes, saldo negativo, dívidas atrasadas, despesas essenciais, gastos variáveis, reserva de emergência, metas e acompanhamento mensal.
- **Exemplos de planos:** foram definidos planos para saldo negativo, saldo positivo sem reserva, dívidas atrasadas, muitos gastos variáveis e usuário que já consegue poupar.
- **Textos de aviso responsável:** o plano reforça que é educativo, baseado nos dados informados e não substitui orientação profissional.
- **Checklist mensal:** inclui conferência de receitas, despesas, categorias, dívidas, metas, reserva e diagnóstico educativo.
