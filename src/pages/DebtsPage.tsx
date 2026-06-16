import { useState, type FormEvent } from 'react';
import { FinancialCard } from '../components/FinancialCard';
import { Notice } from '../components/Notice';
import { StatusBadge } from '../components/StatusBadge';
import type { Debt, DebtStatus } from '../data/demoData';
import { useDemoScenario } from '../context/DemoScenarioContext';
import { calculateTotalOpenDebts, getOverdueDebts } from '../utils/calculations';
import { formatCurrency } from '../utils/formatters';

type DebtFormState = Pick<Debt, 'name' | 'category' | 'totalAmount' | 'openAmount' | 'installment' | 'dueDate' | 'status' | 'priorityHint'>;

const initialDebtForm: DebtFormState = {
  name: 'Compromisso demonstrativo',
  category: 'Parcelamento',
  totalAmount: 800,
  openAmount: 800,
  installment: 160,
  dueDate: '2026-06-28',
  status: 'Próximo vencimento',
  priorityHint: 'Acompanhar vencimento sem tomar decisões impulsivas.',
};

function getDebtTone(status: DebtStatus): 'success' | 'attention' | 'risk' | 'debt' {
  if (status === 'Quitada') {
    return 'debt';
  }

  if (status === 'Atrasada') {
    return 'risk';
  }

  if (status === 'Próximo vencimento') {
    return 'attention';
  }

  return 'success';
}

export function DebtsPage() {
  const { profile: demoProfile, updateProfile } = useDemoScenario();
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<DebtFormState>(initialDebtForm);
  const [feedback, setFeedback] = useState('');
  const totalOpenDebts = calculateTotalOpenDebts(demoProfile.debts);
  const overdueDebts = getOverdueDebts(demoProfile.debts);
  const monthlyInstallments = demoProfile.debts.reduce((total, debt) => total + debt.installment, 0);
  const hasDebts = demoProfile.debts.length > 0;

  function resetForm() {
    setEditingId(null);
    setForm(initialDebtForm);
    setShowDemoForm(true);
  }

  function submitDebt(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextDebt: Debt = { id: editingId ?? `div-sim-${Date.now()}`, ...form };
    updateProfile((profile) => ({
      ...profile,
      debts: editingId ? profile.debts.map((debt) => (debt.id === editingId ? nextDebt : debt)) : [...profile.debts, nextDebt],
    }));
    setFeedback(editingId ? 'Dívida demonstrativa atualizada localmente.' : 'Dívida demonstrativa adicionada localmente.');
    resetForm();
  }

  function editDebt(debt: Debt) {
    setEditingId(debt.id);
    setForm({ name: debt.name, category: debt.category, totalAmount: debt.totalAmount, openAmount: debt.openAmount, installment: debt.installment, dueDate: debt.dueDate, status: debt.status, priorityHint: debt.priorityHint });
    setShowDemoForm(true);
    setFeedback('Editando uma dívida fictícia. Nenhuma informação real será salva.');
  }

  function deleteDebt(debtId: string) {
    updateProfile((profile) => ({ ...profile, debts: profile.debts.filter((debt) => debt.id !== debtId) }));
    setFeedback('Dívida demonstrativa excluída apenas da simulação local.');
  }

  function markDebtAsPaid(debtId: string) {
    updateProfile((profile) => ({
      ...profile,
      debts: profile.debts.map((debt) => debt.id === debtId ? { ...debt, openAmount: 0, installment: 0, status: 'Quitada' } : debt),
    }));
    setFeedback('Dívida marcada como quitada somente nesta simulação.');
  }

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
        <button type="button" onClick={resetForm}>
          Adicionar dívida demonstrativa
        </button>
      </section>

      <Notice title="Aviso responsável sobre dívidas">
        O ML-Invest não indica qual dívida deve ser paga primeiro e não recomenda empréstimos,
        bancos, cartões ou produtos financeiros. As mensagens são gerais e educativas.
      </Notice>
      {feedback && <div className="inline-feedback" role="status">{feedback}</div>}

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
          <div className="section-heading"><div><p className="eyebrow">Formulário simulado</p><h2 id="debt-form-title">{editingId ? 'Editar dívida demonstrativa' : 'Nova dívida demonstrativa'}</h2></div><StatusBadge>Estado local</StatusBadge></div>
          <form className="form-grid" onSubmit={submitDebt}>
            <label>Nome da dívida<input type="text" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} /></label>
            <label>Categoria<input type="text" value={form.category} onChange={(event) => setForm({ ...form, category: event.target.value })} /></label>
            <label>Valor total<input type="number" min="0" step="10" value={form.totalAmount} onChange={(event) => setForm({ ...form, totalAmount: Number(event.target.value) })} /></label>
            <label>Valor restante<input type="number" min="0" step="10" value={form.openAmount} onChange={(event) => setForm({ ...form, openAmount: Number(event.target.value) })} /></label>
            <label>Parcela mensal<input type="number" min="0" step="10" value={form.installment} onChange={(event) => setForm({ ...form, installment: Number(event.target.value) })} /></label>
            <label>Vencimento<input type="date" value={form.dueDate} onChange={(event) => setForm({ ...form, dueDate: event.target.value })} /></label>
            <label>Status<select value={form.status} onChange={(event) => setForm({ ...form, status: event.target.value as DebtStatus })}><option>Em dia</option><option>Próximo vencimento</option><option>Atrasada</option><option>Quitada</option></select></label>
            <div className="form-actions"><button type="submit">{editingId ? 'Salvar edição simulada' : 'Adicionar simulação'}</button><button className="button button--secondary" type="button" onClick={() => setShowDemoForm(false)}>Cancelar</button></div>
          </form>
          <p className="form-helper">Simulação temporária. O ML-Invest não recomenda empréstimos, renegociações ou produtos financeiros.</p>
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
                  <button className="button button--secondary" type="button" onClick={() => editDebt(debt)}>Editar</button>
                  <button className="button button--secondary" type="button" onClick={() => deleteDebt(debt.id)}>Excluir</button>
                  <button className="button button--secondary" type="button" onClick={() => markDebtAsPaid(debt.id)}>Marcar como quitada</button>
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
