import { useState } from 'react';
import { FinancialCard } from '../components/FinancialCard';
import { Notice } from '../components/Notice';
import { StatusBadge } from '../components/StatusBadge';
import { demoProfile, type DebtStatus } from '../data/demoData';
import { calculateTotalOpenDebts, getOverdueDebts } from '../utils/calculations';
import { formatCurrency } from '../utils/formatters';

function getDebtTone(status: DebtStatus): 'success' | 'attention' | 'risk' | 'debt' {
  if (status === 'Atrasada') {
    return 'risk';
  }

  if (status === 'Próximo vencimento') {
    return 'attention';
  }

  return 'success';
}

export function DebtsPage() {
  const [showDemoForm, setShowDemoForm] = useState(false);
  const totalOpenDebts = calculateTotalOpenDebts(demoProfile.debts);
  const overdueDebts = getOverdueDebts(demoProfile.debts);
  const monthlyInstallments = demoProfile.debts.reduce((total, debt) => total + debt.installment, 0);
  const hasDebts = demoProfile.debts.length > 0;

  return (
    <section className="page-shell finance-page" aria-labelledby="active-page-title">
      <section className="dashboard-header" aria-labelledby="active-page-title">
        <div>
          <p className="eyebrow">Dívidas</p>
          <h1 id="active-page-title">Compromissos em aberto com leitura responsável</h1>
          <p className="hero__text">
            Acompanhe dívidas fictícias, status e vencimentos sem receber recomendações definitivas
            ou cobranças. A proposta é organizar informações para análise educativa.
          </p>
        </div>
        <button type="button" onClick={() => setShowDemoForm(!showDemoForm)}>
          Adicionar dívida demonstrativa
        </button>
      </section>

      <Notice title="Aviso responsável sobre dívidas">
        O ML-Invest não indica qual dívida deve ser paga primeiro e não recomenda empréstimos,
        bancos, cartões ou produtos financeiros. As mensagens são gerais e educativas.
      </Notice>

      <section className="summary-grid" aria-label="Resumo de dívidas">
        <FinancialCard
          title="Total em aberto"
          value={formatCurrency(totalOpenDebts)}
          description="Soma fictícia dos valores restantes."
          tone="debt"
        />
        <FinancialCard
          title="Quantidade de dívidas"
          value={`${demoProfile.debts.length}`}
          description="Compromissos demonstrativos cadastrados."
          tone="neutral"
        />
        <FinancialCard
          title="Dívidas atrasadas"
          value={`${overdueDebts.length}`}
          description="Sinal de atenção, sem tom de cobrança."
          tone={overdueDebts.length > 0 ? 'risk' : 'positive'}
        />
        <FinancialCard
          title="Parcelas do mês"
          value={formatCurrency(monthlyInstallments)}
          description="Valor demonstrativo de parcelas mensais."
          tone="attention"
        />
      </section>

      <section className="finance-grid">
        <article className="panel panel--soft">
          <p className="eyebrow">Priorização cautelosa</p>
          <h2>Observe atrasos e vencimentos com calma</h2>
          <p>
            Dívidas atrasadas ou próximas do vencimento podem merecer atenção, mas qualquer decisão
            deve considerar o contexto completo do usuário. Esta tela não substitui orientação
            profissional.
          </p>
        </article>
        <article className="panel">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Status visual</p>
              <h2>Legenda simples</h2>
            </div>
            <StatusBadge>Demo</StatusBadge>
          </div>
          <div className="status-list">
            <StatusBadge tone="success">Em dia</StatusBadge>
            <StatusBadge tone="attention">Atenção</StatusBadge>
            <StatusBadge tone="risk">Atrasada</StatusBadge>
            <StatusBadge tone="debt">Quitada</StatusBadge>
          </div>
        </article>
      </section>

      {overdueDebts.length > 0 && (
        <section className="responsible-card" aria-label="Alerta responsável de dívida atrasada">
          <StatusBadge tone="risk">Alerta responsável</StatusBadge>
          <p>
            Há {overdueDebts.length} dívida(s) fictícia(s) marcada(s) como atrasada(s). Use esse
            sinal apenas para revisar o planejamento com calma, sem decisões impulsivas.
          </p>
        </section>
      )}

      {showDemoForm && (
        <section className="demo-form-panel" aria-labelledby="debt-form-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Formulário simulado</p>
              <h2 id="debt-form-title">Nova dívida demonstrativa</h2>
            </div>
            <StatusBadge>Não salva dados</StatusBadge>
          </div>
          <div className="form-grid">
            <label>
              Nome da dívida
              <input type="text" value="Compromisso demonstrativo" readOnly />
            </label>
            <label>
              Valor restante
              <input type="text" value="R$ 800,00" readOnly />
            </label>
            <label>
              Parcela mensal
              <input type="text" value="R$ 160,00" readOnly />
            </label>
            <label>
              Status
              <select value="Próximo vencimento" disabled>
                <option>Próximo vencimento</option>
              </select>
            </label>
          </div>
          <p className="form-helper">Exemplo visual apenas. Nenhuma informação é armazenada.</p>
        </section>
      )}

      <section className="panel" aria-labelledby="debt-list-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Lista de dívidas</p>
            <h2 id="debt-list-title">Compromissos demonstrativos</h2>
          </div>
          <StatusBadge tone="debt">{`${demoProfile.debts.length} registros`}</StatusBadge>
        </div>

        {hasDebts ? (
          <div className="debt-card-list">
            {demoProfile.debts.map((debt) => (
              <article className="detail-card" key={debt.id}>
                <div className="section-heading">
                  <div>
                    <h3>{debt.name}</h3>
                    <p>{debt.priorityHint}</p>
                  </div>
                  <StatusBadge tone={getDebtTone(debt.status)}>{debt.status}</StatusBadge>
                </div>
                <dl className="detail-list">
                  <div><dt>Valor total</dt><dd>{formatCurrency(debt.totalAmount)}</dd></div>
                  <div><dt>Valor restante</dt><dd>{formatCurrency(debt.openAmount)}</dd></div>
                  <div><dt>Parcela</dt><dd>{formatCurrency(debt.installment)}</dd></div>
                  <div><dt>Vencimento</dt><dd>{debt.dueDate}</dd></div>
                </dl>
                <div className="row-actions">
                  <button className="button button--secondary" type="button">Editar</button>
                  <button className="button button--secondary" type="button">Excluir</button>
                  <button className="button button--secondary" type="button">Marcar como quitada</button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>Nenhuma dívida demonstrativa</h3>
            <p>Quando houver compromissos fictícios, eles aparecerão aqui com status e vencimento.</p>
          </div>
        )}
      </section>
    </section>
  );
}
