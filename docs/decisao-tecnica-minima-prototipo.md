# Decisão técnica mínima para o protótipo do ML-Invest

## Resumo executivo

A base técnica recomendada para o primeiro protótipo visual e funcional do ML-Invest é **React com TypeScript e Vite**, usando apenas dados demonstrativos locais, componentes próprios, estilos do próprio projeto e gráficos simples implementados no frontend.

Essa escolha é intermediária: mais organizada e evolutiva do que HTML, CSS e JavaScript puros, mas muito menos complexa do que uma estrutura com backend, banco de dados, autenticação ou integrações. Ela permite criar páginas navegáveis, componentes reutilizáveis, dados locais, cálculos simples, cards, listas, formulários demonstrativos, gráficos básicos e boa experiência mobile sem aumentar o escopo além do necessário.

## 1. Premissas da decisão

A decisão considera que o ML-Invest começa como:

- protótipo frontend/local;
- sem backend real;
- sem banco de dados real;
- sem autenticação real;
- sem integrações externas;
- sem contas bancárias, cartões, corretoras ou APIs financeiras;
- com dados demonstrativos canônicos;
- com simulação de cadastro, edição e exclusão;
- com foco em interface, fluxo, responsividade e linguagem educativa.

## 2. Necessidades técnicas do protótipo

A base técnica precisa permitir:

1. criar uma interface visual moderna;
2. montar páginas navegáveis;
3. reutilizar componentes como cards, botões, listas, alertas e barras de progresso;
4. trabalhar com dados demonstrativos locais;
5. calcular indicadores simples;
6. simular formulários;
7. criar gráficos simples;
8. manter boa experiência mobile;
9. evoluir futuramente sem recomeçar do zero;
10. evitar backend e autenticação nesta fase.

## 3. Opção técnica mais simples

### Opção

**HTML, CSS e JavaScript puros.**

### O que permitiria fazer

- Criar páginas estáticas.
- Exibir dados demonstrativos.
- Criar cards e listas simples.
- Fazer cálculos básicos com JavaScript.
- Criar navegação simples entre páginas.
- Evitar ferramentas complexas.

### Vantagens

- Menor barreira inicial.
- Sem dependência de framework.
- Fácil de entender para protótipos muito pequenos.
- Baixa complexidade de configuração.
- Bom para validar layout estático rapidamente.

### Desvantagens

- Reutilização de componentes fica mais difícil conforme o projeto cresce.
- Estado da interface pode ficar desorganizado.
- Simulação de cadastro, edição e exclusão exige mais cuidado manual.
- Páginas, cards e listas podem gerar repetição de código.
- Evolução futura para um app mais interativo pode exigir reestruturação.

### Quando faria sentido

Faria sentido se o objetivo fosse apenas criar uma maquete navegável muito simples, com pouca interação e quase nenhum comportamento dinâmico.

## 4. Opção técnica mais escalável

### Opção

**Framework de aplicação completo com frontend estruturado, rotas, renderização avançada e preparação para backend futuro.**

### O que permitiria fazer

- Criar uma estrutura mais robusta de aplicação.
- Preparar caminhos para backend, autenticação e persistência futura.
- Organizar páginas e rotas de forma mais completa.
- Evoluir para produto real com menos mudanças estruturais.

### Vantagens

- Mais preparado para crescimento.
- Pode facilitar recursos futuros como rotas avançadas, renderização otimizada e integrações.
- Melhor para produto real com autenticação, backend e dados persistentes.
- Pode organizar bem aplicações maiores.

### Desvantagens

- Complexidade maior do que o protótipo precisa agora.
- Pode induzir decisões prematuras de arquitetura.
- Pode trazer conceitos que ainda não foram validados pelo produto.
- Pode aumentar tempo de configuração e manutenção inicial.
- Pode aproximar o projeto de backend/autenticação cedo demais.

### Quando faria sentido

Faria sentido depois da validação do protótipo, quando houver certeza sobre necessidade de conta, persistência, histórico real, segurança, backend e evolução para produto em produção.

## 5. Opção intermediária

### Opção

**React com TypeScript e Vite, sem backend, sem banco de dados, sem autenticação e sem integrações.**

### O que permitiria fazer

- Criar uma aplicação frontend local.
- Construir páginas navegáveis.
- Organizar componentes reutilizáveis.
- Trabalhar com dados demonstrativos em arquivos locais.
- Simular cadastro, edição e exclusão em memória/local temporário.
- Calcular indicadores do dashboard.
- Criar cards, listas, filtros e formulários demonstrativos.
- Implementar gráficos simples ou componentes visuais próprios.
- Criar uma experiência responsiva e mobile.
- Evoluir futuramente para persistência ou backend sem recomeçar toda a interface.

### Vantagens

- Boa relação entre simplicidade e organização.
- Facilita criar componentes reutilizáveis.
- TypeScript ajuda a organizar dados demonstrativos e cálculos.
- Vite oferece configuração leve para frontend moderno.
- React é adequado para telas com estado, listas, filtros e componentes.
- Não exige backend.
- Não exige autenticação.
- Não exige banco de dados.
- Permite evoluir depois de forma gradual.

### Desvantagens

- Mais complexo do que HTML, CSS e JavaScript puros.
- Exige organização mínima de componentes e dados.
- Pode ser usado de forma excessivamente complexa se o escopo não for controlado.
- Ainda exigirá decisão posterior para persistência, autenticação e backend, se o produto evoluir.

### Quando faz sentido

Faz sentido para o ML-Invest porque o protótipo terá várias páginas, muitos componentes reutilizáveis, cálculos locais, formulários simulados, listas, gráficos simples, estados de alerta e responsividade mobile.

## 6. Comparação das opções

| Critério | HTML/CSS/JS puro | React + TypeScript + Vite | Framework completo de aplicação |
| --- | --- | --- | --- |
| Complexidade inicial | Baixa | Moderada e controlável | Alta para o momento |
| Interface moderna | Possível | Forte | Forte |
| Componentes reutilizáveis | Manual e limitado | Forte | Forte |
| Dados demonstrativos locais | Possível | Forte | Forte |
| Páginas navegáveis | Simples | Boa | Muito boa |
| Formulários simulados | Possível, mas manual | Boa | Boa |
| Gráficos simples | Possível | Boa | Boa |
| Mobile/responsivo | Possível | Boa | Boa |
| Evolução futura | Limitada | Boa | Muito boa |
| Risco de complexidade | Baixo no começo, alto ao crescer | Controlável | Alto agora |
| Adequação ao ML-Invest | Boa apenas para maquete | Melhor opção para protótipo funcional | Melhor para fase futura |

## 7. Recomendação principal

A recomendação para o protótipo funcional do ML-Invest é:

**React + TypeScript + Vite, com dados demonstrativos locais e sem backend.**

Essa escolha permite construir uma interface bonita, organizada e funcional, respeitando o escopo atual. Ela não prende o projeto a uma arquitetura complexa e permite evoluir depois para persistência, autenticação ou backend apenas se a validação do produto indicar necessidade.

## 8. Justificativa da recomendação

A recomendação considera que o ML-Invest terá:

- várias páginas;
- muitos cards reutilizáveis;
- listas de receitas, despesas, dívidas e metas;
- formulários demonstrativos;
- cálculos de indicadores;
- estados de alerta;
- dados locais canônicos;
- experiência mobile;
- necessidade de manter consistência visual.

React facilita a construção baseada em componentes. TypeScript ajuda a reduzir confusão nos formatos de dados demonstrativos. Vite oferece uma base leve para desenvolvimento frontend moderno. Essa combinação atende ao protótipo sem exigir backend, banco de dados ou autenticação.

## 9. O que essa escolha permitirá fazer agora

Com essa escolha, a primeira implementação poderá incluir:

- página inicial;
- dashboard financeiro;
- páginas de receitas, despesas, dívidas e metas;
- plano educativo;
- relatórios simples;
- perfil demo;
- navegação desktop e mobile;
- componentes reutilizáveis;
- dados demonstrativos locais;
- cálculo de receitas, despesas, saldo, porcentagem poupada, comprometimento, metas e dívidas;
- simulação de adicionar, editar, excluir e restaurar dados;
- alternância de cenários, se couber no escopo;
- estados vazios;
- alertas educativos;
- gráficos simples;
- layout responsivo.

## 10. O que ainda ficará para uma fase futura

Mesmo com React, TypeScript e Vite, devem ficar para depois:

- backend real;
- banco de dados real;
- autenticação real;
- login e cadastro de conta;
- recuperação de senha;
- integração bancária;
- integração com cartão;
- integração com corretora;
- APIs externas;
- persistência entre dispositivos;
- importação automática de extratos;
- exportação de relatórios;
- notificações reais;
- análise financeira profissional;
- recomendação de produtos financeiros.

## 11. Limitações da escolha

A escolha recomendada tem limitações assumidas:

- dados podem ser locais ou temporários;
- não haverá conta de usuário;
- alterações podem não persistir após reiniciar o protótipo, dependendo da decisão de implementação local;
- não haverá sincronização entre dispositivos;
- cálculos serão simplificados;
- gráficos devem continuar simples;
- segurança de dados reais ainda não será tratada como produto final porque dados reais não devem ser coletados;
- decisões de backend e armazenamento continuarão pendentes.

## 12. Cuidados para não aumentar complexidade

Mesmo usando React, TypeScript e Vite, o projeto deve evitar:

- adicionar gerenciamento de estado complexo cedo demais;
- criar arquitetura de backend falsa;
- instalar bibliotecas desnecessárias;
- criar autenticação simulada complexa;
- criar gráficos avançados;
- criar camada de API sem API real;
- pedir dados sensíveis;
- criar abstrações antes de existir necessidade;
- transformar o protótipo em produto final antes da validação.

## 13. Próxima etapa para iniciar o código

A próxima etapa recomendada é criar a base frontend do protótipo com a opção escolhida e implementar em ordem:

1. base visual e navegação;
2. dados demonstrativos locais de Marina Demo;
3. funções simples de cálculo;
4. componentes principais de cards, botões, listas, alertas e barras de progresso;
5. dashboard “Meu mês”;
6. páginas de receitas, despesas, dívidas e metas;
7. plano educativo;
8. relatórios simples;
9. perfil demo;
10. revisão mobile e acessibilidade.

Antes de criar código, deve ficar explícito que a implementação será **frontend/local**, sem backend, banco de dados, autenticação ou integrações.

## Resumo final

- **Comparação das opções:** HTML/CSS/JS puro é simples, mas limitado; framework completo é escalável, mas complexo demais agora; React + TypeScript + Vite oferece equilíbrio entre simplicidade, organização e evolução.
- **Recomendação principal:** usar React + TypeScript + Vite para o protótipo funcional frontend/local.
- **Justificativa:** a combinação facilita componentes, páginas navegáveis, dados demonstrativos, cálculos simples, estados de interface e responsividade sem exigir backend.
- **Limitações da escolha:** sem persistência real, sem conta, sem integração, sem sincronização e com cálculos simplificados.
- **Próxima etapa:** iniciar a base frontend/local e implementar primeiro navegação, dados demonstrativos, cálculos e dashboard.

## Referências oficiais consultadas

- Documentação oficial do Vite: https://vite.dev/guide/
- Página oficial do Vite: https://vite.dev/
- Documentação oficial do React sobre criação de aplicação com ferramenta de build: https://react.dev/learn/build-a-react-app-from-scratch
- MDN Web Docs para tecnologias abertas da web: https://developer.mozilla.org/
