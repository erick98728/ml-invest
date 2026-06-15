import { FinancialCard } from '../components/FinancialCard';
import { Notice } from '../components/Notice';
import { ProgressBar } from '../components/ProgressBar';
import { StatusBadge } from '../components/StatusBadge';
import { demoProfile, type AlertLevel, type TransactionKind } from '../data/demoData';
import {
  calculateAverageGoalProgress,
  calculateGoalProgress,
  calculateIncomeCommitment,
  calculateMonthlyBalance,
  calculateSavedPercentage,
  calculateTotalOpenDebts,
  createEducationalAlerts,
  createMonthlyDiagnosis,
  getOverdueDebts,
  getTopExpenseCategories,
  sumEntries,
} from '../utils/calculations';
import { formatCurrency, formatPercent } from '../utils/formatters';

function getAlertTone(level: AlertLevel): 'success' | 'attention' | 'risk' {
  if (level === 'risk') {
    return 'risk';
  }

  if (level === 'success') {
    return 'success';
  }

  return 'attention';
}

function getTransactionTone(kind: TransactionKind): 'success' | 'attention' {
  return kind === 'income' ? 'success' : 'attention';
}

export function DashboardPreview() {
  const totalIncome = sumEntries(demoProfile.income);
  const totalExpenses = sumEntries(demoProfile.expenses);
  const balance = calculateMonthlyBalance(totalIncome, totalExpenses);
  const savedPercentage = calculateSavedPercentage(balance, totalIncome);
  const incomeCommitment = calculateIncomeCommitment(totalExpenses, totalIncome);
  const openDebtsTotal = calculateTotalOpenDebts(demoProfile.debts);
  const overdueDebts = getOverdueDebts(demoProfile.debts);
  const topCategories = getTopExpenseCategories(demoProfile.expenses, 4);
  const variableExpensesTotal = sumEntries(
    demoProfile.expenses.filter((expense) => expense.type === 'Variável'),
  );
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
  const calculatedAlerts = createEducationalAlerts({
    incomeCommitment,
    savedPercentage,
    overdueDebts,
    topCategories,
  });

  return (
    <section className="page-shell dashboard-page" aria-labelledby="active-page-title">
      <section className="dashboard-header" aria-labelledby="active-page-title">
        <div>
          <p className="eyebrow">Dashboard financeiro</p>
          <h1 id="active-page-title">Visão geral de {demoProfile.period}</h1>
          <p className="hero__text">
            Acompanhe os principais indicadores do mês com dados fictícios e leituras educativas,
            sem transformar o diagnóstico em uma recomendação profissional.
          </p>
        </div>

        <div className="period-filter" aria-label="Filtro demonstrativo de período">
          <span>Período</span>
          <button className="period-filter__option" type="button">
            Mês anterior
          </button>
          <button className="period-filter__option period-filter__option--active" type="button">
            Junho
          </button>
          <button className="period-filter__option" type="button">
            6 meses
          </button>
        </div>
      </section>

      <Notice title="Dados demonstrativos">
        Esta tela usa valores fictícios para validar a experiência do protótipo. O ML-Invest não
        substitui orientação financeira profissional.
      </Notice>

      <section className="summary-grid" aria-label="Resumo financeiro demonstrativo">
        <FinancialCard
          title="Receitas"
          value={formatCurrency(totalIncome)}
          description="Entradas demonstrativas do período."
          tone="income"
        />
        <FinancialCard
          title="Despesas"
          value={formatCurrency(totalExpenses)}
          description="Saídas organizadas por categorias simples."
          tone="expense"
        />
        <FinancialCard
          title="Saldo estimado"
          value={formatCurrency(balance)}
          description="Diferença entre receitas e despesas informadas."
          tone={balance >= 0 ? 'positive' : 'risk'}
        />
        <FinancialCard
          title="Poupança estimada"
          value={formatPercent(savedPercentage)}
          description="Indicador educativo, não uma meta obrigatória."
          tone="goal"
        />
        <FinancialCard
          title="Comprometimento"
          value={formatPercent(incomeCommitment)}
          description="Parte das receitas associada às despesas."
          tone="attention"
        />
        <FinancialCard
          title="Dívidas em aberto"
          value={formatCurrency(openDebtsTotal)}
          description={`${overdueDebts.length} dívida(s) demonstrativa(s) atrasada(s).`}
          tone={overdueDebts.length > 0 ? 'debt' : 'neutral'}
        />
      </section>

      <section className="dashboard-grid dashboard-grid--main">
        <article className="panel panel--featured">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Diagnóstico financeiro do mês</p>
              <h2>{diagnosis.title}</h2>
            </div>
            <StatusBadge
              tone={
                diagnosis.status === 'risk'
                  ? 'risk'
                  : diagnosis.status === 'positive'
                    ? 'success'
                    : 'attention'
              }
            >
              {diagnosis.status === 'positive' ? 'Organizado' : 'Atenção'}
            </StatusBadge>
          </div>
          <p>{diagnosis.message}</p>
          <ul>
            {diagnosis.suggestions.map((suggestion) => (
              <li key={suggestion}>{suggestion}</li>
            ))}
          </ul>
        </article>

        <article className="panel panel--soft">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Plano educativo resumido</p>
              <h2>Próximas prioridades sugeridas</h2>
            </div>
            <StatusBadge tone="goal">Educativo</StatusBadge>
          </div>
          <ul className="clean-list">
            <li>Revisar categorias variáveis antes de assumir novos gastos.</li>
            <li>Acompanhar dívidas com atraso ou vencimento próximo.</li>
            <li>Separar metas pequenas e realistas para o próximo mês.</li>
          </ul>
        </article>
      </section>

      <section className="dashboard-grid dashboard-grid--support">
        <article className="panel">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Alertas financeiros</p>
              <h2>Leituras educativas</h2>
            </div>
            <StatusBadge tone="attention">{`${calculatedAlerts.length} alerta(s)`}</StatusBadge>
          </div>
          <div className="alert-list">
            {calculatedAlerts.map((alert) => (
              <article className={`alert-item alert-item--${alert.level}`} key={alert.id}>
                <StatusBadge tone={getAlertTone(alert.level)}>{alert.title}</StatusBadge>
                <p>{alert.message}</p>
              </article>
            ))}
          </div>
        </article>

        <article className="panel">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Maiores categorias</p>
              <h2>Onde os gastos se concentram</h2>
            </div>
            <StatusBadge>{`Top ${topCategories.length}`}</StatusBadge>
          </div>
          <div className="category-list">
            {topCategories.map((category) => (
              <div className="category-row" key={category.category}>
                <div>
                  <strong>{category.category}</strong>
                  <span>{formatPercent(category.percentage)} das despesas</span>
                </div>
                <strong>{formatCurrency(category.amount)}</strong>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="dashboard-grid dashboard-grid--support">
        <article className="panel">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Dívidas em aberto</p>
              <h2>Acompanhamento cauteloso</h2>
            </div>
            <StatusBadge tone={overdueDebts.length > 0 ? 'risk' : 'success'}>
              {overdueDebts.length > 0 ? 'Há atraso' : 'Em dia'}
            </StatusBadge>
          </div>
          <div className="debt-list">
            {demoProfile.debts.map((debt) => (
              <article className="debt-row" key={debt.id}>
                <div>
                  <strong>{debt.name}</strong>
                  <span>{debt.priorityHint}</span>
                </div>
                <div>
                  <strong>{formatCurrency(debt.openAmount)}</strong>
                  <StatusBadge tone={debt.status === 'Atrasada' ? 'risk' : 'debt'}>
                    {debt.status}
                  </StatusBadge>
                </div>
              </article>
            ))}
          </div>
        </article>

        <article className="panel">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Metas financeiras</p>
              <h2>Progresso visual</h2>
            </div>
            <StatusBadge tone="goal">{`Média ${formatPercent(averageGoalProgress)}`}</StatusBadge>
          </div>
          <div className="goal-list">
            {demoProfile.goals.map((goal) => (
              <article className="goal-row" key={goal.id}>
                <div className="goal-row__header">
                  <strong>{goal.name}</strong>
                  <span>{formatCurrency(goal.currentAmount)} de {formatCurrency(goal.targetAmount)}</span>
                </div>
                <ProgressBar label={goal.status} value={calculateGoalProgress(goal)} />
              </article>
            ))}
          </div>
        </article>
      </section>

      <section className="dashboard-grid dashboard-grid--support">
        <article className="panel">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Últimas movimentações</p>
              <h2>Registros recentes</h2>
            </div>
            <StatusBadge>Fictícias</StatusBadge>
          </div>
          <div className="transaction-list">
            {demoProfile.recentTransactions.map((transaction) => (
              <article className="transaction-row" key={transaction.id}>
                <div>
                  <strong>{transaction.description}</strong>
                  <span>{transaction.category} · {transaction.date}</span>
                </div>
                <div>
                  <StatusBadge tone={getTransactionTone(transaction.kind)}>
                    {transaction.kind === 'income' ? 'Receita' : 'Despesa'}
                  </StatusBadge>
                  <strong>{formatCurrency(transaction.amount)}</strong>
                </div>
              </article>
            ))}
          </div>
        </article>

        <article className="panel panel--soft">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Resumo mensal</p>
              <h2>Evolução demonstrativa</h2>
            </div>
            <StatusBadge>6 meses</StatusBadge>
          </div>
          <ul className="clean-list">
            {demoProfile.monthlyReports.slice(-3).map((report) => (
              <li key={report.month}>
                <strong>{report.month}</strong>: saldo de{' '}
                {formatCurrency(calculateMonthlyBalance(report.income, report.expenses))} e{' '}
                {formatCurrency(report.goalContribution)} destinados a metas demonstrativas.
              </li>
            ))}
          </ul>
        </article>
      </section>
    </section>
  );
}
