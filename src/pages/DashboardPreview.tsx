import { FinancialCard } from '../components/FinancialCard';
import { Notice } from '../components/Notice';
import { ProgressBar } from '../components/ProgressBar';
import { StatusBadge } from '../components/StatusBadge';
import { demoProfile } from '../data/demoData';
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

export function DashboardPreview() {
  const totalIncome = sumEntries(demoProfile.income);
  const totalExpenses = sumEntries(demoProfile.expenses);
  const balance = calculateMonthlyBalance(totalIncome, totalExpenses);
  const savedPercentage = calculateSavedPercentage(balance, totalIncome);
  const incomeCommitment = calculateIncomeCommitment(totalExpenses, totalIncome);
  const openDebtsTotal = calculateTotalOpenDebts(demoProfile.debts);
  const overdueDebts = getOverdueDebts(demoProfile.debts);
  const topCategories = getTopExpenseCategories(demoProfile.expenses);
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
  const featuredGoal = demoProfile.goals[0];

  return (
    <main className="app-shell">
      <section className="hero" aria-labelledby="page-title">
        <div>
          <p className="eyebrow">Protótipo frontend/local</p>
          <h1 id="page-title">ML-Invest</h1>
          <p className="hero__text">
            Organize receitas, despesas, dívidas e metas para entender seu mês com clareza,
            simplicidade e orientação educativa.
          </p>
          <div className="hero__actions" aria-label="Ações iniciais">
            <button type="button">Ver meu mês</button>
            <button className="button button--secondary" type="button">
              Usar dados demonstrativos
            </button>
          </div>
        </div>
        <span className="demo-badge">{demoProfile.name} · {demoProfile.period}</span>
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

      <section className="content-grid">
        <article className="panel panel--featured">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Diagnóstico educativo</p>
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
          <button type="button">Ver plano educativo</button>
        </article>

        <article className="panel panel--soft">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Meta em destaque</p>
              <h2>{featuredGoal.name}</h2>
            </div>
            <StatusBadge tone="goal">Meta</StatusBadge>
          </div>
          <ProgressBar label="Progresso demonstrativo" value={calculateGoalProgress(featuredGoal)} />
          <ProgressBar label="Média das metas" value={averageGoalProgress} />
          <p>
            Metas podem ser ajustadas conforme sua realidade muda. O progresso não precisa ser
            linear.
          </p>
        </article>
      </section>

      <section className="visual-system" aria-labelledby="visual-system-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Sistema visual base</p>
            <h2 id="visual-system-title">Padrões prontos para próximas telas</h2>
          </div>
          <StatusBadge>Base inicial</StatusBadge>
        </div>

        <div className="status-list" aria-label="Exemplos de alertas calculados">
          {calculatedAlerts.map((alert) => (
            <StatusBadge
              key={alert.id}
              tone={
                alert.level === 'risk' ? 'risk' : alert.level === 'success' ? 'success' : 'attention'
              }
            >
              {alert.title}
            </StatusBadge>
          ))}
        </div>

        <ul className="clean-list">
          {topCategories.map((category) => (
            <li key={category.category}>
              <strong>{category.category}</strong>: {formatCurrency(category.amount)} ·{' '}
              {formatPercent(category.percentage)} das despesas.
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
