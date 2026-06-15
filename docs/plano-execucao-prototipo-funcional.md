# Plano de execução do protótipo funcional do ML-Invest

## Decisões técnicas pendentes

Antes de qualquer implementação, permanecem pendentes as decisões de tecnologia. Este plano **não escolhe stack**, framework, biblioteca visual, banco de dados, backend, autenticação ou integrações externas.

Para a primeira versão codada, a premissa é manter o ML-Invest como **protótipo visual e funcional com dados demonstrativos locais**, sem persistência real e sem conexão com serviços financeiros.

## 1. Resumo do produto

O **ML-Invest** é uma plataforma educativa de organização financeira pessoal. O protótipo deve ajudar o usuário a visualizar receitas, despesas, dívidas, metas, saldo mensal, alertas, diagnóstico financeiro educativo, plano de organização e relatórios simples.

A experiência deve ser moderna, clara, acessível e amigável, com estética inspirada em marketplace financeiro: cards organizados, botões claros, gráficos simples, linguagem objetiva e boa experiência mobile.

O produto deve permanecer dentro de limites responsáveis:

- não é consultoria financeira profissional;
- não recomenda produtos financeiros específicos;
- não promete enriquecimento, rentabilidade ou resultado garantido;
- não usa dados reais obrigatórios;
- não conecta contas bancárias, cartões, corretoras ou APIs externas.

## 2. Escopo exato da primeira versão codada

A primeira versão codada deve ser um protótipo navegável e funcional localmente, usando dados demonstrativos.

### Deve incluir

- Página inicial com proposta clara.
- Dashboard financeiro “Meu mês”.
- Página de receitas.
- Página de despesas.
- Página de dívidas.
- Página de metas financeiras.
- Página de plano financeiro educativo.
- Página de relatórios simples.
- Página de perfil/configurações demonstrativas.
- Dados demonstrativos canônicos de Marina Demo.
- Alternância entre cenário positivo, atenção e crítico, se couber sem complexidade excessiva.
- Cálculos simples de indicadores.
- Simulação de cadastro, edição e exclusão em memória/local temporário.
- Estados vazios e estados preenchidos.
- Alertas financeiros educativos.
- Layout responsivo/mobile.
- Avisos claros de que os dados são demonstrativos e educativos.

### Deve evitar

- Backend real.
- Banco de dados real.
- Autenticação real.
- Integração bancária.
- Integração com cartão, corretora ou API externa.
- Coleta de CPF, conta bancária, cartão, endereço completo ou documentos.
- Recomendações financeiras definitivas.
- Relatórios avançados ou projeções financeiras.

## 3. Páginas que serão implementadas

### 3.1 Início

Objetivo: apresentar o ML-Invest, explicar seu caráter educativo e permitir começar com dados demonstrativos.

Conteúdo mínimo:

- título e proposta de valor;
- cards explicando receitas, despesas, dívidas e metas;
- aviso responsável curto;
- botão para acessar o dashboard;
- botão ou opção para usar dados demonstrativos.

### 3.2 Meu mês — Dashboard financeiro

Objetivo: permitir que o usuário entenda a situação geral em poucos segundos.

Conteúdo mínimo:

- total de receitas;
- total de despesas;
- saldo mensal estimado;
- porcentagem poupada;
- comprometimento da renda;
- diagnóstico financeiro educativo;
- até três alertas principais;
- maiores categorias de gasto;
- resumo de dívidas;
- resumo de metas;
- últimas movimentações;
- atalho para plano educativo.

### 3.3 Receitas

Objetivo: listar e simular entradas de dinheiro.

Conteúdo mínimo:

- cards de resumo;
- lista de receitas;
- formulário demonstrativo simples;
- filtros básicos por período, categoria e recorrência;
- estado vazio.

### 3.4 Despesas

Objetivo: listar e simular saídas de dinheiro por categoria.

Conteúdo mínimo:

- cards de resumo;
- lista de despesas;
- separação entre fixa, variável e essencial;
- categorias de gasto;
- alertas de gastos elevados;
- formulário demonstrativo simples;
- filtros básicos;
- estado vazio.

### 3.5 Dívidas

Objetivo: organizar compromissos financeiros demonstrativos com responsabilidade.

Conteúdo mínimo:

- cards de resumo;
- lista de dívidas;
- status textual;
- destaque para dívida atrasada;
- formulário demonstrativo simples;
- avisos responsáveis;
- estado vazio acolhedor.

### 3.6 Metas

Objetivo: acompanhar metas financeiras demonstrativas com barras de progresso.

Conteúdo mínimo:

- cards de metas;
- barras de progresso;
- status de evolução;
- formulário demonstrativo simples;
- mensagens educativas;
- estado vazio.

### 3.7 Plano educativo

Objetivo: transformar dados em prioridades educativas simples.

Conteúdo mínimo:

- resumo educativo do mês;
- três prioridades principais;
- ações sugeridas cautelosas;
- checklist mensal;
- conexão com dashboard, dívidas, despesas e metas;
- aviso responsável.

### 3.8 Relatórios

Objetivo: mostrar evolução e padrões com gráficos simples.

Conteúdo mínimo:

- cards de resumo;
- receitas x despesas;
- evolução do saldo;
- gastos por categoria;
- resumo de dívidas e metas;
- relatório educativo mensal;
- filtros básicos por período;
- estado sem histórico.

### 3.9 Perfil demo

Objetivo: deixar claro que o protótipo é demonstrativo e permitir ações de teste.

Conteúdo mínimo:

- nome demonstrativo do usuário;
- cenário atual;
- opção para restaurar dados demonstrativos;
- opção para alternar cenário, se implementada;
- avisos de funcionamento local;
- limites do protótipo.

## 4. Componentes necessários

### Componentes estruturais

- Cabeçalho principal.
- Navegação desktop.
- Navegação mobile inferior.
- Layout de página com seções.
- Bloco de aviso demonstrativo.

### Componentes financeiros

- Card de indicador financeiro.
- Área de resumo financeiro.
- Card de alerta financeiro.
- Card de diagnóstico mensal.
- Card de meta financeira.
- Card de dívida.
- Card de movimentação recente.
- Selo de status.
- Barra de progresso.

### Componentes de entrada e controle

- Botão primário.
- Botão secundário.
- Botão de ação rápida.
- Campo de formulário.
- Seletor de categoria.
- Filtro por período.
- Filtro por status ou tipo.
- Modal ou painel de cadastro demonstrativo.
- Confirmação simples de exclusão.

### Componentes de visualização

- Lista de transações.
- Lista de receitas.
- Lista de despesas.
- Lista de dívidas.
- Lista de metas.
- Tabela simples apenas em desktop, convertida em cards no mobile.
- Gráfico de barras simples.
- Gráfico de linha simples.
- Gráfico de categorias.

### Componentes educativos

- Card educativo.
- Bloco de dica educativa.
- Bloco de aviso responsável.
- Mensagem de estado vazio.
- Checklist mensal.

## 5. Dados demonstrativos que serão usados

A fonte canônica para o protótipo deve ser **Marina Demo — cenário de atenção**.

### Perfil

- Nome: Marina Demo.
- Período principal: Junho demonstrativo.
- Situação: saldo positivo baixo, comprometimento elevado e uma dívida atrasada.

### Indicadores principais

- Receitas: R$ 5.000,00.
- Despesas: R$ 4.800,00.
- Saldo mensal: R$ 200,00.
- Porcentagem poupada: 4%.
- Comprometimento da renda: 96%.
- Dívidas em aberto: R$ 7.140,00.
- Dívidas atrasadas: 1.
- Metas cadastradas: 4.

### Receitas

- Salário: R$ 4.200,00.
- Renda extra: R$ 650,00.
- Reembolso: R$ 150,00.

### Despesas principais

- Aluguel: R$ 1.500,00.
- Mercado: R$ 950,00.
- Transporte: R$ 420,00.
- Contas e serviços: R$ 400,00.
- Saúde: R$ 280,00.
- Lazer: R$ 350,00.
- Assinaturas: R$ 90,00.
- Compras pessoais: R$ 320,00.
- Educação: R$ 220,00.
- Outros: R$ 270,00.

### Dívidas

- Cartão de crédito: R$ 1.800,00, parcela R$ 350,00, próximo vencimento.
- Empréstimo pessoal: R$ 4.200,00, parcela R$ 420,00, em dia.
- Compra parcelada: R$ 900,00, parcela R$ 180,00, em dia.
- Conta antiga: R$ 240,00, parcela R$ 240,00, atrasada.

### Metas

- Reserva de segurança: 30%.
- Curso profissional: 40%.
- Viagem planejada: 10%.
- Quitar compromisso: 20%.

### Cenários opcionais de teste

- Cenário positivo.
- Cenário de atenção.
- Cenário crítico.

A implementação inicial pode começar apenas com o cenário de atenção e adicionar alternância de cenário depois.

## 6. Regras de cálculo que precisam existir

As regras devem ser simples, transparentes e compatíveis com dados demonstrativos.

### Total de receitas

```text
totalReceitas = soma das receitas do período
```

### Total de despesas

```text
totalDespesas = soma das despesas do período
```

### Saldo mensal

```text
saldoMensal = totalReceitas - totalDespesas
```

### Porcentagem poupada

```text
se saldoMensal > 0:
  porcentagemPoupada = saldoMensal / totalReceitas * 100
senão:
  porcentagemPoupada = 0
```

Texto alternativo quando saldo for zero ou negativo:

“Sem poupança estimada no período.”

### Comprometimento da renda

```text
comprometimentoRenda = totalDespesas / totalReceitas * 100
```

Se não houver receita:

“Não há receita suficiente para calcular este indicador.”

### Progresso das metas

```text
progressoMeta = valorAtual / valorObjetivo * 100
```

Se não houver valor objetivo:

“Dados insuficientes para calcular progresso.”

### Total de dívidas em aberto

```text
totalDividasEmAberto = soma das dívidas com status diferente de concluída
```

### Parcelas do mês

```text
parcelasDoMes = soma das parcelas das dívidas em aberto
```

## 7. Funcionalidades simuladas

A primeira versão pode simular comportamento sem backend.

### Cadastro demonstrativo

- adicionar receita;
- adicionar despesa;
- adicionar dívida;
- adicionar meta.

Comportamento esperado:

- item aparece na lista local da tela;
- indicadores podem atualizar visualmente;
- mensagem: “Item adicionado nesta demonstração.”

### Edição demonstrativa

- editar item existente;
- atualizar valor, categoria, status ou prazo;
- recalcular indicadores simples quando aplicável.

Mensagem:

“Alteração aplicada apenas nesta demonstração.”

### Exclusão demonstrativa

- remover item fictício;
- pedir confirmação simples;
- atualizar lista e indicadores.

Mensagem:

“Item removido da demonstração.”

### Reset demonstrativo

- restaurar Marina Demo ao estado original;
- limpar alterações simuladas.

Mensagem:

“Dados demonstrativos restaurados.”

### Alternância de cenário

Pode ser implementada depois do fluxo principal:

- positivo;
- atenção;
- crítico.

Mensagem:

“Cenário alterado para fins de teste da interface.”

## 8. Funcionalidades fora do escopo

Ficam fora da primeira versão codada:

- backend real;
- banco de dados real;
- autenticação real;
- cadastro de conta real;
- recuperação de senha;
- integração bancária;
- integração com cartão;
- integração com corretora;
- APIs externas;
- importação automática de extratos;
- exportação de relatórios;
- notificações reais;
- dados sensíveis;
- cálculo tributário;
- recomendação de investimentos;
- recomendação de crédito;
- consultoria financeira personalizada;
- relatórios avançados;
- múltiplos usuários reais;
- sincronização entre dispositivos.

## 9. Ordem ideal de implementação

### Etapa 1 — Base visual e navegação

- criar estrutura visual geral;
- criar navegação desktop e mobile;
- criar página inicial simples;
- criar layout base das páginas;
- criar aviso de dados demonstrativos.

### Etapa 2 — Dados demonstrativos e cálculos

- definir dados canônicos de Marina Demo;
- implementar cálculos simples;
- criar utilitários conceituais de formatação de valores;
- validar indicadores principais.

### Etapa 3 — Dashboard “Meu mês”

- implementar cards principais;
- implementar diagnóstico educativo;
- implementar alertas principais;
- implementar categorias, dívidas, metas e movimentações resumidas.

### Etapa 4 — Áreas operacionais

- implementar receitas;
- implementar despesas;
- implementar dívidas;
- implementar metas;
- incluir formulários demonstrativos simples;
- incluir estados vazios e listas.

### Etapa 5 — Plano educativo

- implementar resumo educativo;
- implementar três prioridades;
- implementar checklist;
- conectar ações às áreas relacionadas.

### Etapa 6 — Relatórios simples

- implementar receitas x despesas;
- implementar evolução do saldo;
- implementar categorias;
- implementar resumo de dívidas e metas;
- incluir textos explicativos.

### Etapa 7 — Perfil demo e cenários

- implementar perfil demonstrativo;
- implementar reset dos dados;
- implementar alternância de cenários, se ainda couber no escopo.

### Etapa 8 — Revisão mobile, acessibilidade e polimento

- validar navegação mobile;
- converter tabelas em listas/cards;
- revisar contraste;
- revisar microcopy;
- testar estados positivos, atenção, críticos e vazios.

## 10. Principais riscos do projeto

- Escopo crescer além do protótipo.
- Dashboard ficar carregado demais.
- Relatórios parecerem análise financeira profissional.
- Dívidas parecerem cobrança ou recomendação de pagamento.
- Usuário confundir dados demonstrativos com dados reais.
- Formulários pedirem informações demais.
- Mobile ficar difícil de navegar.
- Alertas causarem ansiedade.
- Decisões técnicas serem tomadas antes da validação.

## 11. Pontos que precisam ser mantidos simples

- Formulários com poucos campos.
- Dashboard com indicadores essenciais.
- Relatórios com poucos gráficos.
- Diagnóstico curto e educativo.
- Plano educativo com no máximo três prioridades principais.
- Navegação mobile com poucos itens.
- Alertas compactos.
- Dados demonstrativos claros.
- Cálculos transparentes.
- Linguagem sem termos técnicos desnecessários.

## 12. Critérios para considerar o protótipo pronto

O protótipo pode ser considerado pronto quando:

- todas as páginas principais existirem;
- o usuário conseguir navegar sem bloqueios;
- dashboard exibir indicadores corretos com dados demonstrativos;
- receitas, despesas, dívidas e metas exibirem listas e formulários simulados;
- plano educativo mostrar prioridades responsáveis;
- relatórios exibirem gráficos simples e textos explicativos;
- perfil demo deixar claro que os dados são fictícios;
- mobile estiver utilizável;
- estados vazios estiverem implementados;
- alertas não forem alarmistas;
- nenhuma tela pedir dado sensível;
- não houver backend, autenticação ou integração real;
- textos financeiros estiverem cautelosos;
- o protótipo permitir testar cenário de atenção de ponta a ponta.

## Escopo final do protótipo

A primeira versão codada do ML-Invest deve ser um protótipo funcional local, com navegação completa, dados demonstrativos, cálculos simples, simulação de cadastros e experiência mobile. O foco é validar clareza, usabilidade, visual, conteúdo educativo e fluxo entre páginas.

## Lista de páginas

1. Início.
2. Meu mês.
3. Receitas.
4. Despesas.
5. Dívidas.
6. Metas.
7. Plano educativo.
8. Relatórios.
9. Perfil demo.

## Lista de componentes prioritários

1. Cabeçalho.
2. Navegação desktop/mobile.
3. Card de indicador financeiro.
4. Área de resumo financeiro.
5. Card de alerta.
6. Card de diagnóstico.
7. Card de dívida.
8. Card de meta.
9. Lista de movimentações.
10. Botões.
11. Campos de formulário.
12. Seletores e filtros simples.
13. Barra de progresso.
14. Gráficos simples.
15. Estado vazio.
16. Aviso responsável.
17. Checklist educativo.

## Ordem de desenvolvimento resumida

1. Base visual e navegação.
2. Dados demonstrativos e cálculos.
3. Dashboard.
4. Receitas, despesas, dívidas e metas.
5. Plano educativo.
6. Relatórios.
7. Perfil demo e cenários.
8. Revisão mobile, acessibilidade e microcopy.

## Itens fora do escopo

- Stack definida.
- Backend.
- Banco de dados.
- Autenticação.
- Integrações financeiras.
- Dados reais obrigatórios.
- Consultoria financeira profissional.
- Recomendações de produtos financeiros.
- Relatórios avançados.
- Sincronização entre dispositivos.
