import { FinancialCard } from '../components/FinancialCard';
import { Notice } from '../components/Notice';
import { ProgressBar } from '../components/ProgressBar';
import { StatusBadge } from '../components/StatusBadge';
import { demoProfile } from '../data/demoData';
import {
  calculateGoalProgress,
  calculateIncomeCommitment,
  calculateMonthlyBalance,
  calculateSavedPercentage,
  sumEntries,
} from '../utils/calculations';
import { formatCurrency, formatPercent } from '../utils/formatters';

export function DashboardPreview() {
  const totalIncome = sumEntries(demoProfile.income);
  const totalExpenses = sumEntries(demoProfile.expenses);
  const balance = calculateMonthlyBalance(totalIncome, totalExpenses);
  const savedPercentage = calculateSavedPercentage(balance, totalIncome);
  const incomeCommitment = calculateIncomeCommitment(totalExpenses, totalIncome);
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
      </section>

      <section className="content-grid">
        <article className="panel panel--featured">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Diagnóstico educativo</p>
              <h2>Mês positivo, mas com atenção ao comprometimento</h2>
            </div>
            <StatusBadge tone="attention">Atenção</StatusBadge>
          </div>
          <p>
            Com base nos dados demonstrativos, o mês termina com saldo positivo baixo e despesas
            ocupando grande parte das receitas. Pode ser útil revisar gastos variáveis e dívidas em
            aberto antes de ajustar metas.
          </p>
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

        <div className="status-list" aria-label="Exemplos de selos de status">
          <StatusBadge tone="success">Receita organizada</StatusBadge>
          <StatusBadge tone="attention">Revisar despesa</StatusBadge>
          <StatusBadge tone="debt">Dívida em aberto</StatusBadge>
          <StatusBadge tone="goal">Meta em andamento</StatusBadge>
          <StatusBadge tone="risk">Risco controlado</StatusBadge>
        </div>

        <ul className="clean-list">
          <li>Cards usam cores funcionais para receitas, despesas, dívidas, metas e alertas.</li>
          <li>Botões possuem estados claros e área confortável para toque.</li>
          <li>Alertas e diagnósticos mantêm linguagem educativa e não alarmista.</li>
        </ul>
      </section>
    </main>
  );
}
