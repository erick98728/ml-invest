import { useState } from 'react';
import { FinancialCard } from '../components/FinancialCard';
import { Notice } from '../components/Notice';
import { ProgressBar } from '../components/ProgressBar';
import { StatusBadge } from '../components/StatusBadge';
import { demoProfile, type Goal } from '../data/demoData';
import { calculateAverageGoalProgress, calculateGoalProgress } from '../utils/calculations';
import { formatCurrency, formatPercent } from '../utils/formatters';

function getGoalStatus(goal: Goal) {
  const progress = calculateGoalProgress(goal);

  if (goal.status === 'Pausada') {
    return 'Pausada';
  }

  if (progress >= 100) {
    return 'Concluída';
  }

  if (progress >= 75) {
    return 'Quase lá';
  }

  if (progress >= 25) {
    return 'Em andamento';
  }

  return 'Começando';
}

function getGoalTone(status: string): 'success' | 'attention' | 'goal' {
  if (status === 'Concluída' || status === 'Quase lá') {
    return 'success';
  }

  if (status === 'Pausada' || status === 'Começando') {
    return 'attention';
  }

  return 'goal';
}

export function GoalsPage() {
  const [showDemoForm, setShowDemoForm] = useState(false);
  const plannedAmount = demoProfile.goals.reduce((total, goal) => total + goal.targetAmount, 0);
  const reservedAmount = demoProfile.goals.reduce((total, goal) => total + goal.currentAmount, 0);
  const averageProgress = calculateAverageGoalProgress(demoProfile.goals);
  const hasGoals = demoProfile.goals.length > 0;

  return (
    <section className="page-shell finance-page" aria-labelledby="active-page-title">
      <section className="dashboard-header" aria-labelledby="active-page-title">
        <div>
          <p className="eyebrow">Metas financeiras</p>
          <h1 id="active-page-title">Objetivos demonstrativos com progresso visual</h1>
          <p className="hero__text">
            Acompanhe metas fictícias de forma motivadora e realista. O progresso é educativo e não
            representa promessa de que uma meta será alcançada.
          </p>
        </div>
        <button type="button" onClick={() => setShowDemoForm(!showDemoForm)}>
          Adicionar meta demonstrativa
        </button>
      </section>

      <Notice title="Metas realistas e flexíveis">
        Metas podem mudar conforme a vida muda. O ML-Invest mostra organização e progresso, sem
        prometer resultado ou indicar produtos financeiros específicos.
      </Notice>

      <section className="summary-grid" aria-label="Resumo de metas">
        <FinancialCard
          title="Total de metas"
          value={`${demoProfile.goals.length}`}
          description="Objetivos fictícios acompanhados."
          tone="goal"
        />
        <FinancialCard
          title="Valor planejado"
          value={formatCurrency(plannedAmount)}
          description="Soma dos objetivos demonstrativos."
          tone="neutral"
        />
        <FinancialCard
          title="Valor reservado"
          value={formatCurrency(reservedAmount)}
          description="Total fictício já separado."
          tone="positive"
        />
        <FinancialCard
          title="Progresso médio"
          value={formatPercent(averageProgress)}
          description="Média simples das metas cadastradas."
          tone="goal"
        />
      </section>

      <section className="finance-grid">
        <article className="panel panel--soft">
          <p className="eyebrow">Mensagem educativa</p>
          <h2>Pequenos avanços também contam</h2>
          <p>
            Acompanhar metas ajuda a transformar objetivos em passos visíveis. Ajustes são normais e
            não significam falha no planejamento.
          </p>
        </article>
        <article className="panel">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Status de metas</p>
              <h2>Legenda visual</h2>
            </div>
            <StatusBadge>Demo</StatusBadge>
          </div>
          <div className="status-list">
            <StatusBadge tone="attention">Começando</StatusBadge>
            <StatusBadge tone="goal">Em andamento</StatusBadge>
            <StatusBadge tone="success">Quase lá</StatusBadge>
            <StatusBadge tone="success">Concluída</StatusBadge>
            <StatusBadge tone="attention">Pausada</StatusBadge>
          </div>
        </article>
      </section>

      {showDemoForm && (
        <section className="demo-form-panel" aria-labelledby="goal-form-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Formulário simulado</p>
              <h2 id="goal-form-title">Nova meta demonstrativa</h2>
            </div>
            <StatusBadge>Não salva dados</StatusBadge>
          </div>
          <div className="form-grid">
            <label>
              Nome da meta
              <input type="text" value="Reserva para estudo" readOnly />
            </label>
            <label>
              Tipo
              <select value="Educação" disabled>
                <option>Educação</option>
              </select>
            </label>
            <label>
              Valor objetivo
              <input type="text" value="R$ 1.500,00" readOnly />
            </label>
            <label>
              Prazo demonstrativo
              <input type="text" value="2026-12-31" readOnly />
            </label>
          </div>
          <p className="form-helper">Exemplo visual apenas. Nenhuma informação é armazenada.</p>
        </section>
      )}

      <section className="panel" aria-labelledby="goal-list-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Cards de metas</p>
            <h2 id="goal-list-title">Progresso por objetivo</h2>
          </div>
          <StatusBadge tone="goal">{`${demoProfile.goals.length} registros`}</StatusBadge>
        </div>

        {hasGoals ? (
          <div className="goal-card-grid">
            {demoProfile.goals.map((goal) => {
              const status = getGoalStatus(goal);
              const progress = calculateGoalProgress(goal);

              return (
                <article className="detail-card detail-card--goal" key={goal.id}>
                  <div className="section-heading">
                    <div>
                      <h3>{goal.name}</h3>
                      <p>{goal.category} · prazo demonstrativo {goal.targetDate}</p>
                    </div>
                    <StatusBadge tone={getGoalTone(status)}>{status}</StatusBadge>
                  </div>
                  <ProgressBar label="Progresso" value={progress} />
                  <dl className="detail-list">
                    <div><dt>Valor objetivo</dt><dd>{formatCurrency(goal.targetAmount)}</dd></div>
                    <div><dt>Valor atual</dt><dd>{formatCurrency(goal.currentAmount)}</dd></div>
                    <div><dt>Sugestão mensal</dt><dd>{formatCurrency(goal.monthlySuggestion)}</dd></div>
                    <div><dt>Progresso</dt><dd>{formatPercent(progress)}</dd></div>
                  </dl>
                  <p className="form-helper">
                    Dica educativa: acompanhe esta meta com valores realistas e revise o prazo quando
                    necessário.
                  </p>
                  <div className="row-actions">
                    <button className="button button--secondary" type="button">Editar</button>
                    <button className="button button--secondary" type="button">Excluir</button>
                    <button className="button button--secondary" type="button">Atualizar progresso</button>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="empty-state">
            <h3>Nenhuma meta demonstrativa</h3>
            <p>Quando houver objetivos fictícios, eles aparecerão aqui com progresso visual.</p>
          </div>
        )}
      </section>
    </section>
  );
}
