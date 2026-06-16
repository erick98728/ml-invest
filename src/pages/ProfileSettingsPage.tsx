import { FinancialCard } from '../components/FinancialCard';
import { Notice } from '../components/Notice';
import { StatusBadge } from '../components/StatusBadge';
import { scenarioLabels, useDemoScenario } from '../context/DemoScenarioContext';
import type { DemoScenarioId } from '../data/demoData';
import {
  calculateAverageGoalProgress,
  calculateIncomeCommitment,
  calculateMonthlyBalance,
  calculateSavedPercentage,
  calculateTotalOpenDebts,
  getOverdueDebts,
  sumEntries,
} from '../utils/calculations';
import { formatCurrency, formatPercent } from '../utils/formatters';

const scenarioDescriptions: Record<DemoScenarioId, string> = {
  positive: 'Mostra saldo mais confortável, metas avançando e dívidas sem atraso para validar estados positivos da interface.',
  attention: 'Mantém o conjunto principal Marina Demo, com saldo positivo baixo, dívida atrasada e pontos de organização.',
  critical: 'Simula saldo negativo, mais dívidas em atraso e gastos variáveis elevados para testar alertas responsáveis.',
};

const privacyItems = [
  'Não há login, senha, e-mail real, CPF, conta bancária ou cartão cadastrado.',
  'Os valores são fictícios e existem apenas para testar telas e cálculos locais do protótipo.',
  'Nenhuma informação é enviada para banco, corretora, cartão, API externa ou serviço financeiro.',
];

export function ProfileSettingsPage() {
  const { activeScenario, profile, restoreDemoData, setActiveScenario } = useDemoScenario();
  const totalIncome = sumEntries(profile.income);
  const totalExpenses = sumEntries(profile.expenses);
  const balance = calculateMonthlyBalance(totalIncome, totalExpenses);
  const savedPercentage = calculateSavedPercentage(balance, totalIncome);
  const incomeCommitment = calculateIncomeCommitment(totalExpenses, totalIncome);
  const openDebts = calculateTotalOpenDebts(profile.debts);
  const overdueDebts = getOverdueDebts(profile.debts);
  const averageGoalProgress = calculateAverageGoalProgress(profile.goals);

  return (
    <section className="page-shell finance-page" aria-labelledby="active-page-title">
      <header className="dashboard-header" aria-labelledby="active-page-title">
        <div>
          <p className="eyebrow">Perfil e configurações demonstrativas</p>
          <h1 id="active-page-title">Preferências fictícias para testar o protótipo</h1>
          <p className="hero__text">
            Esta área controla apenas dados demonstrativos locais. Ela ajuda a testar como dashboard,
            alertas, plano educativo, relatórios, metas e dívidas se comportam em cenários diferentes.
          </p>
        </div>
        <button type="button" onClick={restoreDemoData}>Restaurar dados demonstrativos</button>
      </header>

      <Notice title="Sem conta real">
        O ML-Invest ainda não possui autenticação, cadastro, banco de dados, integração bancária ou coleta de dados sensíveis. Tudo nesta tela é fictício e educativo.
      </Notice>

      <section className="profile-hero panel panel--soft">
        <div>
          <span className="eyebrow">Usuário fictício</span>
          <h2>{profile.name}</h2>
          <p>{profile.user.profileLabel}</p>
        </div>
        <div className="profile-preferences">
          <span>Período de análise</span>
          <strong>{profile.period}</strong>
          <StatusBadge tone={activeScenario === 'critical' ? 'risk' : activeScenario === 'positive' ? 'success' : 'attention'}>
            {scenarioLabels[activeScenario]}
          </StatusBadge>
        </div>
      </section>

      <section className="summary-grid" aria-label="Resumo demonstrativo do cenário ativo">
        <FinancialCard title="Receitas" value={formatCurrency(totalIncome)} description="Entradas fictícias do cenário ativo." tone="income" />
        <FinancialCard title="Despesas" value={formatCurrency(totalExpenses)} description="Saídas fictícias usadas nas telas." tone="expense" />
        <FinancialCard title="Saldo" value={formatCurrency(balance)} description="Diferença demonstrativa entre receitas e despesas." tone={balance >= 0 ? 'positive' : 'risk'} />
        <FinancialCard title="Poupança estimada" value={formatPercent(savedPercentage)} description="Indicador educativo calculado localmente." tone={savedPercentage >= 10 ? 'goal' : 'attention'} />
        <FinancialCard title="Comprometimento" value={formatPercent(incomeCommitment)} description="Percentual de renda ocupado por despesas." tone={incomeCommitment >= 85 ? 'attention' : 'neutral'} />
        <FinancialCard title="Dívidas em aberto" value={formatCurrency(openDebts)} description={`${overdueDebts.length} dívida(s) fictícia(s) atrasada(s).`} tone={overdueDebts.length > 0 ? 'debt' : 'neutral'} />
      </section>

      <section className="panel">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Alternância de cenário</span>
            <h2>Escolha uma situação fictícia para testar a interface</h2>
          </div>
          <StatusBadge tone="neutral">Simulação local</StatusBadge>
        </div>
        <div className="scenario-switcher" role="group" aria-label="Cenários financeiros fictícios">
          {(Object.keys(scenarioLabels) as DemoScenarioId[]).map((scenario) => (
            <button
              key={scenario}
              type="button"
              className={`scenario-option ${activeScenario === scenario ? 'scenario-option--active' : ''}`}
              onClick={() => setActiveScenario(scenario)}
            >
              <strong>{scenarioLabels[scenario]}</strong>
              <span>{scenarioDescriptions[scenario]}</span>
            </button>
          ))}
        </div>
      </section>

      <div className="dashboard-grid dashboard-grid--support">
        <article className="panel panel--soft">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Impacto da simulação</span>
              <h2>Áreas afetadas pelo cenário</h2>
            </div>
          </div>
          <ul className="clean-list">
            <li>Dashboard, alertas e diagnóstico financeiro recalculam com os dados fictícios ativos.</li>
            <li>Plano educativo, relatórios, metas e dívidas passam a refletir o cenário selecionado.</li>
            <li>Receitas e despesas também mudam para manter coerência entre as páginas do protótipo.</li>
          </ul>
        </article>

        <article className="panel">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Privacidade demonstrativa</span>
              <h2>O que não é solicitado</h2>
            </div>
          </div>
          <ul className="checklist-list">
            {privacyItems.map((item) => (
              <li key={item}>
                <span aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>

      <article className="responsible-card">
        <StatusBadge tone="attention">Aviso responsável</StatusBadge>
        <h2>Cenários não são recomendações financeiras</h2>
        <p>
          A alternância existe para validar estados visuais e mensagens educativas. Ela não prevê resultados,
          não indica produtos financeiros e não substitui orientação profissional para situações reais.
        </p>
      </article>
    </section>
  );
}
