# Estrutura inicial do protótipo ML-Invest

## Tecnologia escolhida para esta etapa

A estrutura inicial usa **React + TypeScript + Vite**, conforme a decisão técnica mínima documentada para o protótipo frontend/local.

## O que foi criado

- Configuração inicial de aplicação frontend com Vite.
- Página inicial simples do ML-Invest.
- Layout base responsivo.
- Componentes iniciais reutilizáveis.
- Dados demonstrativos locais de Marina Demo.
- Funções iniciais de cálculo financeiro demonstrativo.
- Estilos globais com identidade visual clara, acessível e amigável.

## Estrutura criada

```text
index.html
package.json
tsconfig.json
tsconfig.node.json
vite.config.ts
src/
├── App.tsx
├── main.tsx
├── vite-env.d.ts
├── components/
│   ├── FinancialCard.tsx
│   └── Notice.tsx
├── data/
│   └── demoData.ts
├── pages/
│   └── DashboardPreview.tsx
├── styles/
│   └── global.css
└── utils/
    ├── calculations.ts
    └── formatters.ts
```

## Como executar localmente

```text
npm install
npm run dev
```

Para gerar uma build local:

```text
npm run build
```

## O que já está funcionando

- Tela inicial simples do ML-Invest.
- Resumo financeiro demonstrativo com receitas, despesas, saldo, porcentagem poupada e comprometimento da renda.
- Diagnóstico educativo inicial.
- Aviso explícito de dados demonstrativos.
- Estrutura inicial para componentes, páginas, dados, cálculos e estilos.
- Layout responsivo básico para desktop e mobile.

## Limites mantidos

- Sem backend real.
- Sem banco de dados real.
- Sem autenticação real.
- Sem APIs externas.
- Sem integração bancária, cartão ou corretora.
- Sem gráficos nesta primeira estrutura.
- Sem implementação completa das páginas internas.

## Próxima etapa recomendada

A próxima etapa é implementar a navegação base e transformar o `DashboardPreview` no dashboard “Meu mês”, mantendo os dados demonstrativos locais e evoluindo os componentes de forma incremental.
