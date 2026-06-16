import { FinancialCard } from '../components/FinancialCard';
import { Notice } from '../components/Notice';
import { ProgressBar } from '../components/ProgressBar';
import { StatusBadge } from '../components/StatusBadge';
import { useDemoScenario } from '../context/DemoScenarioContext';
import {
  calculateAverageGoalProgress,
  calculateGoalProgress,
  calculateIncomeCommitment,
  calculateMonthlyBalance,
  calculateSavedPercentage,
  createMonthlyDiagnosis,
  getOverdueDebts,
  sumEntries,
} from '../utils/calculations';
import { formatCurrency, formatPercent } from '../utils/formatters';

const scenarioMessages = [
  {
    title: 'Saldo negativo',
    tone: 'risk' as const,
    text: 'Quando as despesas passam das receitas, o plano sugere revisar primeiro o que é essencial, o que vence em breve e quais gastos podem ser acompanhados com calma.',
  },
  {
    title: 'Saldo positivo com baixa poupança',
    tone: 'attention' as const,
    text: 'Quando sobra pouco, a orientação é observar categorias variáveis e testar pequenos valores realistas para metas, sem tratar isso como obrigação rígida.',
  },
  {
    title: 'Dívidas atrasadas',
    tone: 'risk' as const,
    text: 'Dívidas atrasadas aparecem como ponto de atenção para organização, mas o ML-Invest não define qual dívida pagar nem substitui orientação profissional.',
  },
  {
    title: 'Gastos variáveis elevados',
    tone: 'attention' as const,
    text: 'Categorias como lazer, compras e assinaturas são apresentadas para reflexão, evitando linguagem de culpa ou cortes absolutos.',
  },
  {
    title: 'Boa evolução nas metas',
    tone: 'success' as const,
    text: 'Quando há avanço nas metas, o plano reforça continuidade e acompanhamento mensal, sem prometer que o objetivo será alcançado.',
  },
];

const monthlyChecklist = [
  'Conferir se receitas e despesas demonstrativas estão atualizadas.',
  'Observar categorias variáveis antes de assumir novos compromissos.',
  'Revisar dívidas atrasadas ou próximas do vencimento com cautela.',
  'Separar um valor pequeno e realista para metas, se houver espaço no mês.',
  'Comparar o mês atual com meses anteriores para identificar padrões.',
];

export function EducationalPlanPage() {
  const { profile: demoProfile } = useDemoScenario();
  const totalIncome = sumEntries(demoProfile.income);
  const totalExpenses = sumEntries(demoProfile.expenses);
  const balance = calculateMonthlyBalance(totalIncome, totalExpenses);
  const savedPercentage = calculateSavedPercentage(balance, totalIncome);
  const incomeCommitment = calculateIncomeCommitment(totalExpenses, totalIncome);
  const overdueDebts = getOverdueDebts(demoProfile.debts);
  const variableExpenses = demoProfile.expenses.filter((expense) => expense.type === 'Variável');
  const variableExpensesTotal = sumEntries(variableExpenses);
  const variableExpensePercentage = totalIncome > 0 ? (variableExpensesTotal / totalIncome) * 100 : 0;
  const emergencyGoal = demoProfile.goals.find((goal) => goal.category === 'Reserva') ?? demoProfile.goals[0];
  const emergencyProgress = emergencyGoal ? calculateGoalProgress(emergencyGoal) : 0;
  const averageGoalProgress = calculateAverageGoalProgress(demoProfile.goals);
  const diagnosis = createMonthlyDiagnosis({
    totalIncome,
    totalExpenses,
    balance,
    savedPercentage,
    incomeCommitment,
    overdueDebtsCount: overdueDebts.length,
    variableExpensesTotal,
  });

  const priorities = [
    {
      title: balance < 0 ? 'Reorganizar o saldo do mês' : 'Proteger o saldo positivo',
      text:
        balance < 0
          ? 'Comece entendendo quais despesas demonstrativas ultrapassaram as receitas, sem tomar decisões apressadas.'
          : 'Use a sobra demonstrativa como sinal para planejar o próximo mês antes de considerar novos gastos.',
      tone: balance < 0 ? ('risk' as const) : ('success' as const),
    },
    {
      title: overdueDebts.length > 0 ? 'Observar dívidas atrasadas' : 'Acompanhar compromissos em aberto',
      text:
        overdueDebts.length > 0
          ? 'Há dívida fictícia atrasada. O plano apenas sugere atenção educativa e não determina uma ordem obrigatória de pagamento.'
          : 'As dívidas podem ser acompanhadas pelo impacto mensal e pelos vencimentos, sempre com linguagem cautelosa.',
      tone: overdueDebts.length > 0 ? ('risk' as const) : ('debt' as const),
    },
    {
      title: 'Revisar despesas variáveis',
      text: `As despesas variáveis representam ${formatPercent(variableExpensePercentage)} das receitas demonstrativas. Vale acompanhar padrões antes de cortar algo de forma definitiva.`,
      tone: variableExpensePercentage >= 20 ? ('attention' as const) : ('neutral' as const),
    },
    {
      title: 'Fortalecer metas possíveis',
      text: 'O plano sugere pequenos passos para metas, respeitando o saldo do mês e sem prometer resultado financeiro.',
      tone: 'goal' as const,
    },
  ];

  const actionCards = [
    {
      title: 'Separar essenciais',
      text: 'Diferencie moradia, alimentação, transporte e saúde das despesas mais flexíveis.',
    },
    {
      title: 'Rever assinaturas e compras',
      text: 'Observe se gastos recorrentes pequenos estão acumulando impacto no mês.',
    },
    {
      title: 'Acompanhar vencimentos',
      text: 'Use a lista de dívidas como lembrete educativo para evitar novos atrasos.',
    },
    {
      title: 'Começar pequeno nas metas',
      text: 'Se houver saldo, teste uma contribuição modesta e revisável para a reserva ou outra meta.',
    },
  ];

  return (
    <section className="page-shell finance-page">
      <header className="dashboard-header">
        <div>
          <span className="eyebrow">Plano financeiro educativo</span>
          <h1>Prioridades simples para organizar o próximo mês</h1>
          <p>
            Este plano usa dados fictícios de {demoProfile.user.firstName} para transformar indicadores em passos educativos,
            cautelosos e fáceis de revisar.
          </p>
        </div>
        <StatusBadge tone="neutral">Dados demonstrativos</StatusBadge>
      </header>

      <Notice title="Aviso responsável">
        O plano é uma leitura educativa baseada em dados demonstrativos. Ele não é consultoria financeira profissional, não promete resultado e não recomenda produtos financeiros.
      </Notice>

      <div className="summary-grid">
        <FinancialCard title="Saldo do mês" value={formatCurrency(balance)} description="Diferença entre receitas e despesas fictícias." tone={balance >= 0 ? 'positive' : 'risk'} />
        <FinancialCard title="Comprometimento" value={formatPercent(incomeCommitment)} description="Parte das receitas ocupada por despesas." tone={incomeCommitment >= 85 ? 'attention' : 'neutral'} />
        <FinancialCard title="Dívidas atrasadas" value={`${overdueDebts.length}`} description="Quantidade de compromissos fictícios em atraso." tone={overdueDebts.length > 0 ? 'risk' : 'debt'} />
        <FinancialCard title="Despesas variáveis" value={formatCurrency(variableExpensesTotal)} description="Lazer, compras, assinaturas e outros gastos flexíveis." tone="attention" />
        <FinancialCard title="Progresso médio das metas" value={formatPercent(averageGoalProgress)} description="Média das metas demonstrativas cadastradas." tone="goal" />
      </div>

      <div className="dashboard-grid dashboard-grid--main">
        <article className="panel panel--soft">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Diagnóstico resumido</span>
              <h2>{diagnosis.title}</h2>
            </div>
            <StatusBadge tone={diagnosis.status === 'risk' ? 'risk' : diagnosis.status === 'attention' ? 'attention' : 'success'}>
              {diagnosis.status === 'risk' ? 'Atenção' : diagnosis.status === 'attention' ? 'Organização' : 'Positivo'}
            </StatusBadge>
          </div>
          <p>{diagnosis.message}</p>
          <ul className="clean-list">
            {diagnosis.suggestions.map((suggestion) => (
              <li key={suggestion}>{suggestion}</li>
            ))}
          </ul>
        </article>

        <article className="panel">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Conexões do plano</span>
              <h2>Indicadores que orientam as prioridades</h2>
            </div>
          </div>
          <div className="plan-metric-list">
            <ProgressBar label="Reserva de segurança" value={emergencyProgress} />
            <ProgressBar label="Receita comprometida" value={incomeCommitment} />
            <ProgressBar label="Gastos variáveis sobre receitas" value={variableExpensePercentage} />
          </div>
        </article>
      </div>

      <section className="panel">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Prioridades sugeridas</span>
            <h2>Ordem educativa para revisar o mês</h2>
          </div>
        </div>
        <div className="plan-priority-list">
          {priorities.map((priority, index) => (
            <article className="priority-card" key={priority.title}>
              <StatusBadge tone={priority.tone}>{`Passo ${index + 1}`}</StatusBadge>
              <h3>{priority.title}</h3>
              <p>{priority.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Ações práticas</span>
            <h2>Pequenas ações para testar sem pressão</h2>
          </div>
        </div>
        <div className="action-card-grid">
          {actionCards.map((action) => (
            <article className="action-card" key={action.title}>
              <h3>{action.title}</h3>
              <p>{action.text}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="dashboard-grid dashboard-grid--support">
        <article className="panel">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Checklist mensal</span>
              <h2>Revisão educativa recorrente</h2>
            </div>
          </div>
          <ul className="checklist-list">
            {monthlyChecklist.map((item) => (
              <li key={item}>
                <span aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="panel panel--soft">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Próximos passos</span>
              <h2>Como usar este plano no protótipo</h2>
            </div>
          </div>
          <ul className="clean-list">
            <li>Voltar ao dashboard para acompanhar saldo, alertas e diagnóstico.</li>
            <li>Abrir metas para ajustar valores demonstrativos de forma realista.</li>
            <li>Consultar relatórios para observar evolução antes de mudar prioridades.</li>
          </ul>
        </article>
      </div>

      <section className="panel">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Cenários educativos</span>
            <h2>Textos preparados para diferentes leituras</h2>
          </div>
        </div>
        <div className="scenario-grid">
          {scenarioMessages.map((scenario) => (
            <article className="scenario-card" key={scenario.title}>
              <StatusBadge tone={scenario.tone}>{scenario.title}</StatusBadge>
              <p>{scenario.text}</p>
            </article>
          ))}
        </div>
      </section>

      <article className="responsible-card">
        <StatusBadge tone="attention">Cuidado importante</StatusBadge>
        <h2>O plano não decide pelo usuário</h2>
        <p>
          As prioridades ajudam a organizar a leitura do mês, mas não substituem análise profissional, negociação com credores ou orientação especializada quando a situação exigir.
        </p>
      </article>
    </section>
  );
}
