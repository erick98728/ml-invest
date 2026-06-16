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
  getTopExpenseCategories,
} from '../utils/calculations';
import { formatCurrency, formatPercent } from '../utils/formatters';

export function ReportsPage() {
  const reports = demoProfile.monthlyReports;
  const latestReport = reports[reports.length - 1] ?? {
    month: 'Sem dados',
    income: 0,
    expenses: 0,
    debtPayments: 0,
    saved: 0,
    goalContribution: 0,
  };
  const latestBalance = calculateMonthlyBalance(latestReport.income, latestReport.expenses);
  const latestSavedPercentage = calculateSavedPercentage(latestReport.saved, latestReport.income);
  const latestCommitment = calculateIncomeCommitment(latestReport.expenses, latestReport.income);
  const topCategories = getTopExpenseCategories(demoProfile.expenses, 5);
  const maxMonthlyValue = Math.max(...reports.flatMap((report) => [report.income, report.expenses]), 1);
  const maxBalance = Math.max(...reports.map((report) => Math.abs(calculateMonthlyBalance(report.income, report.expenses))), 1);
  const openDebts = calculateTotalOpenDebts(demoProfile.debts);
  const averageGoalProgress = calculateAverageGoalProgress(demoProfile.goals);
  const hasReports = reports.length > 0;

  return (
    <section className="page-shell finance-page">
      <header className="dashboard-header">
        <div>
          <span className="eyebrow">Relatórios</span>
          <h1>Evolução financeira em visualizações simples</h1>
          <p>
            Compare receitas, despesas, saldo, metas e dívidas com dados fictícios para entender padrões sem análise técnica avançada.
          </p>
        </div>
        <StatusBadge tone="neutral">Período demonstrativo</StatusBadge>
      </header>

      <Notice title="Dados demonstrativos">
        Os relatórios usam apenas informações fictícias do protótipo. As leituras são educativas, não representam previsão financeira e não substituem orientação profissional.
      </Notice>

      <div className="period-filter" aria-label="Filtro demonstrativo de período">
        <button className="period-filter__option period-filter__option--active" type="button">Últimos 6 meses</button>
        <button className="period-filter__option" type="button">Trimestre</button>
        <button className="period-filter__option" type="button">Mês atual</button>
      </div>

      {hasReports ? (
        <>
          <div className="summary-grid">
            <FinancialCard title="Receitas em junho" value={formatCurrency(latestReport.income)} description="Total demonstrativo do mês selecionado." tone="income" />
            <FinancialCard title="Despesas em junho" value={formatCurrency(latestReport.expenses)} description="Saídas fictícias registradas no período." tone="expense" />
            <FinancialCard title="Saldo em junho" value={formatCurrency(latestBalance)} description="Diferença simples entre entradas e saídas." tone={latestBalance >= 0 ? 'positive' : 'risk'} />
            <FinancialCard title="Percentual poupado" value={formatPercent(latestSavedPercentage)} description="Parcela da renda fictícia separada no mês." tone={latestSavedPercentage < 10 ? 'attention' : 'positive'} />
            <FinancialCard title="Comprometimento" value={formatPercent(latestCommitment)} description="Quanto das receitas foi ocupado por despesas." tone={latestCommitment >= 85 ? 'attention' : 'neutral'} />
            <FinancialCard title="Dívidas em aberto" value={formatCurrency(openDebts)} description="Total restante em compromissos demonstrativos." tone="debt" />
          </div>

          <div className="report-visual-grid">
            <article className="panel simple-chart simple-chart--wide">
              <div className="section-heading">
                <div>
                  <span className="eyebrow">Receitas versus despesas</span>
                  <h2>Comparativo mensal</h2>
                </div>
              </div>
              <p className="chart-helper">As barras mostram apenas comparação visual entre entradas e saídas fictícias.</p>
              {reports.map((report) => (
                <div className="dual-bar-row" key={report.month}>
                  <span className="chart-label">{report.month}</span>
                  <div className="dual-bar-stack">
                    <span className="bar-track"><span className="bar-fill bar-fill--income" style={{ width: `${(report.income / maxMonthlyValue) * 100}%` }} /></span>
                    <span className="bar-track"><span className="bar-fill bar-fill--expense" style={{ width: `${(report.expenses / maxMonthlyValue) * 100}%` }} /></span>
                  </div>
                  <strong>{formatCurrency(calculateMonthlyBalance(report.income, report.expenses))}</strong>
                </div>
              ))}
              <div className="chart-legend"><span className="legend-dot legend-dot--income" />Receitas <span className="legend-dot legend-dot--expense" />Despesas</div>
            </article>

            <article className="panel simple-chart">
              <div className="section-heading">
                <div>
                  <span className="eyebrow">Saldo mensal</span>
                  <h2>Sobra ou falta no mês</h2>
                </div>
              </div>
              {reports.map((report) => {
                const balance = calculateMonthlyBalance(report.income, report.expenses);
                return (
                  <div className="chart-row" key={report.month}>
                    <span className="chart-label">{report.month}</span>
                    <span className="bar-track"><span className={`bar-fill ${balance >= 0 ? 'bar-fill--positive' : 'bar-fill--risk'}`} style={{ width: `${(Math.abs(balance) / maxBalance) * 100}%` }} /></span>
                    <strong>{formatCurrency(balance)}</strong>
                  </div>
                );
              })}
            </article>

            <article className="panel simple-chart">
              <div className="section-heading">
                <div>
                  <span className="eyebrow">Gastos por categoria</span>
                  <h2>Onde as despesas se concentram</h2>
                </div>
              </div>
              {topCategories.map((category) => (
                <div className="chart-row" key={category.category}>
                  <span className="chart-label">{category.category}</span>
                  <span className="bar-track"><span className="bar-fill bar-fill--expense" style={{ width: `${category.percentage}%` }} /></span>
                  <strong>{formatPercent(category.percentage)}</strong>
                </div>
              ))}
            </article>

            <article className="panel simple-chart">
              <div className="section-heading">
                <div>
                  <span className="eyebrow">Metas</span>
                  <h2>Evolução das metas</h2>
                </div>
                <StatusBadge tone="goal">{`Média ${formatPercent(averageGoalProgress)}`}</StatusBadge>
              </div>
              <div className="report-progress-list">
                {demoProfile.goals.map((goal) => (
                  <ProgressBar key={goal.id} label={goal.name} value={calculateGoalProgress(goal)} />
                ))}
              </div>
            </article>

            <article className="panel simple-chart">
              <div className="section-heading">
                <div>
                  <span className="eyebrow">Dívidas</span>
                  <h2>Compromissos demonstrativos</h2>
                </div>
              </div>
              <div className="report-debt-list">
                {demoProfile.debts.map((debt) => (
                  <article className="report-debt-item" key={debt.id}>
                    <div>
                      <strong>{debt.name}</strong>
                      <span>{debt.status}</span>
                    </div>
                    <p>{formatCurrency(debt.openAmount)} em aberto</p>
                  </article>
                ))}
              </div>
            </article>

            <article className="panel simple-chart">
              <div className="section-heading">
                <div>
                  <span className="eyebrow">Poupança e renda</span>
                  <h2>Percentuais por mês</h2>
                </div>
              </div>
              {reports.map((report) => {
                const savedPercentage = calculateSavedPercentage(report.saved, report.income);
                const commitment = calculateIncomeCommitment(report.expenses, report.income);
                return (
                  <div className="report-percent-row" key={report.month}>
                    <strong>{report.month}</strong>
                    <span>Poupado: {formatPercent(savedPercentage)}</span>
                    <span>Comprometido: {formatPercent(commitment)}</span>
                  </div>
                );
              })}
            </article>
          </div>

          <article className="panel panel--soft">
            <div className="section-heading">
              <div>
                <span className="eyebrow">Relatório educativo mensal</span>
                <h2>Leitura de junho demonstrativo</h2>
              </div>
            </div>
            <p>
              Em junho, os dados fictícios mostram receitas de {formatCurrency(latestReport.income)}, despesas de {formatCurrency(latestReport.expenses)} e saldo de {formatCurrency(latestBalance)}. A leitura sugere acompanhar o alto comprometimento da renda e observar dívidas em aberto antes de ampliar gastos variáveis ou assumir novas metas.
            </p>
            <ul className="clean-list">
              <li>Use os gráficos como apoio visual, não como previsão financeira.</li>
              <li>Compare tendências por mês antes de concluir que um padrão é definitivo.</li>
              <li>Se a situação real envolver atraso, juros ou negociação, busque orientação adequada.</li>
            </ul>
          </article>
        </>
      ) : (
        <article className="empty-state">
          <h3>Nenhum relatório demonstrativo disponível</h3>
          <p>Quando houver dados fictícios mensais, esta área mostrará comparativos simples e textos educativos.</p>
        </article>
      )}
    </section>
  );
}
