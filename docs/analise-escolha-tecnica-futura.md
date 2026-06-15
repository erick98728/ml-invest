# Análise para escolha técnica futura do ML-Invest

## Resumo executivo

Esta análise prepara a futura escolha técnica do ML-Invest sem definir uma stack agora. O objetivo é registrar critérios, dependências, riscos e perguntas pendentes para que decisões de tecnologia, armazenamento, autenticação, backend e integrações sejam tomadas somente depois da validação do protótipo visual e funcional.

A recomendação central é evoluir de forma progressiva: primeiro validar experiência, telas, dados demonstrativos e fluxos; depois criar um protótipo funcional local; só então avaliar persistência, contas de usuário, backend real e possíveis integrações.

## 1. Necessidades reais do produto

As necessidades reais do ML-Invest devem ser separadas por fase para evitar complexidade precoce.

### Necessidades atuais do protótipo visual

- Navegar entre páginas principais.
- Exibir dashboard, receitas, despesas, dívidas, metas, plano e relatórios.
- Usar dados demonstrativos canônicos.
- Simular estados positivos, de atenção e críticos.
- Validar linguagem educativa e visual.
- Validar experiência mobile.
- Demonstrar cadastro, edição e exclusão de forma simulada.

### Necessidades futuras prováveis

- Permitir que o usuário salve dados pessoais.
- Preservar histórico de meses.
- Criar conta de usuário, se houver dados persistentes entre dispositivos.
- Proteger informações financeiras pessoais.
- Exportar ou consultar relatórios salvos.
- Sincronizar dados entre sessões ou dispositivos.
- Avaliar integrações externas apenas se forem realmente úteis e seguras.

### Necessidades que não existem agora

- Backend real.
- Banco de dados definido.
- Autenticação real.
- Integração bancária.
- APIs externas.
- Processamento financeiro avançado.
- Recomendação de produtos financeiros.

## 2. Funcionalidades que exigirão armazenamento de dados

Algumas funcionalidades só farão sentido com armazenamento quando o produto deixar de ser puramente demonstrativo.

### Exigem armazenamento no futuro

- Receitas cadastradas pelo usuário.
- Despesas cadastradas pelo usuário.
- Dívidas e status de pagamento.
- Metas, valores e progresso.
- Histórico mensal.
- Preferências de visualização.
- Cenários salvos.
- Checklist mensal.
- Relatórios gerados por período.
- Alterações feitas em dados demonstrativos, se precisarem persistir.

### Não exigem armazenamento agora

- Dados demonstrativos fixos.
- Alternância entre cenário positivo, atenção e crítico.
- Simulação de formulários.
- Estados vazios.
- Microcopy e diagnósticos demonstrativos.
- Navegação entre telas.

## 3. Funcionalidades que exigirão autenticação

Autenticação só deve ser considerada quando houver dados pessoais persistentes ou necessidade de acesso entre dispositivos.

### Podem exigir autenticação no futuro

- Salvar dados financeiros pessoais.
- Acessar histórico de meses em mais de um dispositivo.
- Recuperar conta.
- Proteger dados sensíveis.
- Compartilhar relatórios com controle de acesso.
- Sincronizar preferências e informações pessoais.

### Não exigem autenticação agora

- Protótipo visual.
- Dados demonstrativos.
- Simulação local de cadastros.
- Alternância de cenários.
- Testes de usabilidade.
- Wireframes e protótipos navegáveis.

## 4. Funcionalidades que podem continuar locais ou demonstrativas

Mesmo em fases futuras, algumas funcionalidades podem continuar locais enquanto o produto é validado.

- Dados de exemplo.
- Cenários positivo, atenção e crítico.
- Simulação de cadastro.
- Filtros simples.
- Cálculos básicos de indicadores.
- Diagnósticos educativos baseados em regras simples.
- Plano educativo baseado em dados do período.
- Preferências visuais temporárias.
- Estados vazios e alertas demonstrativos.

Manter essas funções locais reduz risco, custo e complexidade durante validação.

## 5. Riscos de adicionar backend cedo demais

Adicionar backend antes de validar o produto pode criar riscos desnecessários:

- aumento de complexidade de implementação;
- atraso na validação de UX;
- decisões técnicas baseadas em suposições;
- necessidade precoce de segurança, privacidade e manutenção;
- risco de coletar dados sensíveis antes de haver maturidade de produto;
- aumento de custo operacional;
- dificuldade para mudar fluxos depois;
- distração em infraestrutura antes de validar valor para o usuário.

### Recomendação

Não adicionar backend enquanto o protótipo ainda estiver validando navegação, clareza, dashboard, diagnóstico, plano educativo e relatórios.

## 6. Critérios para escolher uma tecnologia

A escolha de tecnologia deve considerar critérios de produto, equipe e manutenção, sem partir de preferência pessoal.

### Critérios principais

- Facilidade para criar interfaces responsivas.
- Velocidade para prototipar telas e fluxos.
- Boa experiência em componentes reutilizáveis.
- Acessibilidade e suporte a boas práticas de UI.
- Facilidade de manutenção.
- Curva de aprendizado da equipe.
- Comunidade e documentação.
- Capacidade de evoluir de protótipo para produto real.
- Custo de hospedagem e operação.
- Compatibilidade futura com persistência, autenticação e backend.

### Critérios que não devem dominar a decisão

- Escolher tecnologia apenas por popularidade.
- Escolher tecnologia por preferência pessoal sem relação com o produto.
- Escolher uma solução complexa para resolver um problema simples.
- Definir stack antes de validar fluxos e telas.

## 7. Critérios para escolher armazenamento de dados

O armazenamento deve ser escolhido com base no tipo de dado, sensibilidade e necessidade de acesso.

### Perguntas essenciais

- Os dados precisam persistir entre sessões?
- Os dados precisam aparecer em mais de um dispositivo?
- O usuário precisa criar conta?
- Os dados são sensíveis?
- Há necessidade de backup?
- Há necessidade de histórico por mês?
- O protótipo precisa apenas salvar localmente?

### Critérios de escolha

- Simplicidade para a fase atual.
- Segurança adequada ao tipo de dado.
- Facilidade de exportação ou migração futura.
- Capacidade de armazenar histórico mensal.
- Controle de acesso.
- Custo e manutenção.
- Clareza sobre retenção e exclusão de dados.

### Possíveis níveis de armazenamento em alto nível

1. **Sem armazenamento:** apenas dados demonstrativos fixos.
2. **Armazenamento local temporário:** útil para protótipo funcional local.
3. **Persistência simples:** útil para salvar dados do usuário em uma versão inicial.
4. **Persistência com conta:** útil quando há múltiplos dispositivos ou dados pessoais relevantes.
5. **Backend com banco estruturado:** útil quando houver produto validado e necessidade real de escala, segurança e manutenção.

Nenhum desses níveis deve ser escolhido como definitivo nesta etapa.

## 8. Critérios para escolher autenticação

A autenticação deve existir apenas se resolver uma necessidade real.

### Critérios de necessidade

- Usuário precisa salvar dados financeiros pessoais.
- Usuário precisa acessar dados em mais de um dispositivo.
- Usuário precisa recuperar acesso.
- Dados exigem controle individual.
- Há risco se outra pessoa acessar o dispositivo.

### Critérios de qualidade

- Experiência simples para iniciantes.
- Segurança adequada.
- Recuperação de acesso clara.
- Privacidade explícita.
- Baixo atrito para uso inicial.
- Possibilidade de testar o produto sem conta, se fizer sentido.

### Cuidado importante

Autenticação pode aumentar confiança, mas também aumenta atrito. No protótipo, deve ser evitada até que haja necessidade real de persistência pessoal.

## 9. Critérios para futuras integrações

Integrações financeiras devem ser tratadas como evolução avançada, não como requisito inicial.

### Perguntas antes de integrar

- A integração resolve uma dor validada?
- O usuário entende claramente o que será acessado?
- Há consentimento explícito?
- Quais dados serão coletados?
- Como os dados serão protegidos?
- O produto consegue funcionar sem integração?
- A integração aumenta risco regulatório ou operacional?
- Existe alternativa manual mais simples?

### Critérios mínimos

- Consentimento claro.
- Privacidade e segurança bem definidas.
- Transparência sobre dados acessados.
- Possibilidade de revogar acesso.
- Coleta mínima de dados.
- Benefício claro para o usuário.
- Linguagem sem promessa de resultado financeiro.

## 10. Cuidados de segurança e privacidade

Mesmo sem backend, o produto deve ser planejado com privacidade desde o início.

### Cuidados essenciais

- Não pedir CPF, conta bancária, cartão, endereço completo ou documentos na primeira versão.
- Identificar dados demonstrativos como fictícios.
- Evitar campos que incentivem dados sensíveis.
- Usar mensagens como “não insira dados sensíveis”.
- Minimizar dados coletados em versões futuras.
- Explicar finalidade dos dados.
- Permitir exclusão de dados quando houver persistência.
- Proteger dados financeiros pessoais se houver armazenamento real.
- Tratar integrações como tema sensível.

### Riscos de privacidade

- Usuário inserir dados reais em campo demonstrativo.
- Protótipo parecer conectado a conta bancária sem estar.
- Dados financeiros serem salvos sem clareza.
- Diagnósticos parecerem decisões profissionais.

## 11. Possíveis caminhos técnicos em alto nível

Esta seção compara caminhos sem escolher um como definitivo.

### Caminho A — Protótipo visual estático

Uso:

- validar layout, navegação e comunicação.

Vantagens:

- rápido;
- simples;
- baixo risco;
- não coleta dados.

Limitações:

- pouca interação real;
- cálculos podem ser apenas ilustrativos.

### Caminho B — Protótipo funcional local

Uso:

- simular cadastro, edição, exclusão e cálculos no próprio ambiente do usuário.

Vantagens:

- permite testar fluxos;
- ainda evita backend;
- bom para validação de UX.

Limitações:

- dados podem ser temporários;
- sem conta de usuário;
- sem sincronização.

### Caminho C — Versão com persistência simples

Uso:

- permitir salvar dados entre sessões.

Vantagens:

- experiência mais realista;
- permite histórico básico.

Limitações:

- exige decisões de armazenamento;
- aumenta responsabilidade com dados.

### Caminho D — Versão com conta de usuário

Uso:

- permitir acesso em múltiplos dispositivos e proteção individual.

Vantagens:

- dados pessoais protegidos por conta;
- experiência mais próxima de produto real.

Limitações:

- aumenta atrito;
- exige segurança e privacidade mais robustas.

### Caminho E — Backend real

Uso:

- sustentar produto validado com persistência, regras e sincronização.

Vantagens:

- centraliza dados e regras;
- permite evolução mais robusta.

Limitações:

- maior custo;
- maior complexidade;
- maior responsabilidade de segurança.

### Caminho F — Integrações externas

Uso:

- automatizar dados se houver necessidade validada.

Vantagens:

- reduz entrada manual;
- pode melhorar precisão.

Limitações:

- alto cuidado com privacidade;
- maior risco regulatório e operacional;
- pode afastar usuários iniciantes;
- não deve ser prioridade inicial.

## 12. Perguntas antes da escolha técnica

Antes de escolher stack, armazenamento, autenticação ou integrações, responder:

1. O protótipo visual validou a proposta?
2. Usuários iniciantes entendem o dashboard sem ajuda?
3. O plano educativo é útil sem parecer consultoria?
4. Os usuários precisam salvar dados reais ou só testar cenários?
5. O produto precisa funcionar em mais de um dispositivo?
6. Quais dados seriam realmente necessários?
7. Quais dados não devem ser coletados?
8. A versão local atende a próxima fase?
9. Há necessidade real de conta?
10. Quais riscos de privacidade surgem com persistência?
11. O time consegue manter a tecnologia escolhida?
12. A tecnologia facilita acessibilidade e mobile?
13. O custo de operação é compatível com o estágio do produto?
14. Integrações externas resolvem uma dor validada?
15. O produto continua útil sem integrações?

## 13. Ordem recomendada de evolução

### Fase 1 — Protótipo visual

Objetivo:

- validar telas, hierarquia, linguagem, visual e navegação.

Características:

- dados demonstrativos;
- sem persistência;
- sem autenticação;
- sem backend;
- sem integração.

### Fase 2 — Protótipo funcional local

Objetivo:

- validar interações de cadastro, edição, exclusão e cálculo simples.

Características:

- dados locais ou temporários;
- alternância de cenários;
- cálculos demonstrativos;
- sem conta.

### Fase 3 — Versão com persistência simples

Objetivo:

- testar valor de salvar informações entre sessões.

Características:

- armazenamento simples;
- histórico básico;
- privacidade mais explícita;
- ainda sem integrações.

### Fase 4 — Versão com conta de usuário

Objetivo:

- permitir dados pessoais protegidos e acesso contínuo.

Características:

- autenticação;
- recuperação de acesso;
- maior cuidado de segurança;
- termos claros de uso de dados.

### Fase 5 — Versão com backend real

Objetivo:

- sustentar produto validado com regras, dados e histórico mais robustos.

Características:

- persistência estruturada;
- controle de acesso;
- regras mais consistentes;
- manutenção operacional.

### Fase 6 — Versão com integrações, se fizer sentido

Objetivo:

- reduzir trabalho manual apenas se usuários validarem essa necessidade.

Características:

- consentimento explícito;
- segurança e privacidade reforçadas;
- possibilidade de revogar acesso;
- transparência sobre dados.

## 14. O que não deve ser construído ainda

Nesta etapa, ainda não deve ser construído:

- backend real;
- autenticação real;
- banco de dados definitivo;
- integração bancária;
- importação automática de extratos;
- recomendações de investimentos;
- recomendação de crédito;
- processamento financeiro avançado;
- estrutura técnica complexa;
- múltiplos perfis reais;
- coleta de dados sensíveis;
- dashboards administrativos;
- notificações financeiras reais;
- qualquer fluxo regulatório complexo.

## 15. Como evitar complexidade desnecessária

### Princípios

- Validar valor antes de infraestrutura.
- Começar com dados demonstrativos.
- Usar regras simples de cálculo.
- Evitar conta de usuário até haver necessidade real.
- Evitar backend até haver necessidade de persistência compartilhada.
- Evitar integrações até haver dor validada.
- Manter formulários curtos.
- Priorizar mobile e acessibilidade.
- Documentar decisões antes de implementá-las.

### Sinais de complexidade precoce

- Criar autenticação antes de validar telas.
- Pedir dados sensíveis em protótipo.
- Criar relatórios avançados antes de validar os simples.
- Implementar integrações antes de testar entrada manual.
- Escolher tecnologia por tendência e não por necessidade.
- Criar arquitetura difícil de mudar antes de validar produto.

## Dependências futuras

As principais dependências para uma decisão técnica futura são:

- validação da proposta com usuários iniciantes;
- validação do dashboard em mobile;
- clareza dos dados que realmente precisam ser salvos;
- definição se o produto precisa de conta;
- decisão sobre persistência local ou remota;
- requisitos mínimos de privacidade;
- entendimento do volume e tipo de dados;
- maturidade dos fluxos de cadastro e relatório;
- confirmação de que integrações externas são necessárias.

## Riscos principais

- Escolher stack antes de validar necessidade.
- Criar backend desnecessário.
- Aumentar responsabilidade com dados sem preparo.
- Coletar dados sensíveis cedo demais.
- Tornar o produto complexo para usuários iniciantes.
- Perder foco educativo ao criar funcionalidades avançadas.
- Criar integrações sem clareza de consentimento e privacidade.

## Perguntas pendentes

- O usuário precisa salvar dados reais ou apenas simular organização?
- O uso será individual no mesmo dispositivo ou em múltiplos dispositivos?
- O usuário aceita criar conta para organizar finanças?
- Quais dados são indispensáveis e quais devem ser evitados?
- O produto precisa funcionar offline em algum momento?
- Quais relatórios realmente ajudam o usuário iniciante?
- Integrações seriam úteis ou aumentariam desconfiança?
- Qual nível de privacidade será esperado pelo público-alvo?

## Recomendação de próxima etapa

A próxima etapa recomendada é criar um **protótipo visual navegável** e, em seguida, um **protótipo funcional local** com dados demonstrativos e cálculos simples. A escolha de tecnologia, armazenamento, autenticação e backend deve ficar para depois da validação da experiência, da clareza do dashboard e da utilidade do plano educativo.

## Resumo final

- **Critérios de decisão técnica:** escolher tecnologia somente após validar necessidades reais, considerando simplicidade, acessibilidade, manutenção, privacidade, custo e evolução gradual.
- **Dependências futuras:** validação com usuários, definição de dados que precisam persistir, necessidade ou não de conta, requisitos de privacidade e eventual necessidade de integrações.
- **Riscos:** backend precoce, coleta de dados sensíveis, complexidade excessiva, autenticação desnecessária e integrações sem maturidade.
- **Perguntas pendentes:** quais dados salvar, se haverá múltiplos dispositivos, se conta é necessária, se integrações são úteis e quais limites de privacidade serão exigidos.
- **Recomendação:** avançar primeiro para protótipo visual e protótipo funcional local, sem escolher stack definitiva nesta etapa.
