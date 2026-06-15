import { FinancialCard } from '../components/FinancialCard';
import { Notice } from '../components/Notice';
import { demoProfile } from '../data/demoData';
import {
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
          tone="positive"
        />
        <FinancialCard
          title="Despesas"
          value={formatCurrency(totalExpenses)}
          description="Saídas organizadas por categorias simples."
        />
        <FinancialCard
          title="Saldo estimado"
          value={formatCurrency(balance)}
          description="Diferença entre receitas e despesas informadas."
          tone={balance >= 0 ? 'positive' : 'attention'}
        />
        <FinancialCard
          title="Poupança estimada"
          value={formatPercent(savedPercentage)}
          description="Indicador educativo, não uma meta obrigatória."
        />
        <FinancialCard
          title="Comprometimento"
          value={formatPercent(incomeCommitment)}
          description="Parte das receitas associada às despesas."
          tone="attention"
        />
      </section>

      <section className="content-grid">
        <article className="panel">
          <p className="eyebrow">Diagnóstico educativo</p>
          <h2>Mês positivo, mas com atenção ao comprometimento</h2>
          <p>
            Com base nos dados demonstrativos, o mês termina com saldo positivo baixo e despesas
            ocupando grande parte das receitas. Pode ser útil revisar gastos variáveis e dívidas em
            aberto antes de ajustar metas.
          </p>
          <button type="button">Ver plano educativo</button>
        </article>

        <article className="panel panel--soft">
          <p className="eyebrow">Próximas áreas</p>
          <h2>Base pronta para evoluir</h2>
          <ul>
            <li>Componentes reutilizáveis para cards, avisos e listas.</li>
            <li>Dados demonstrativos locais em arquivo dedicado.</li>
            <li>Funções de cálculo separadas para o dashboard.</li>
            <li>Layout responsivo inicial para mobile e desktop.</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
