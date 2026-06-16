import { useState, type FormEvent } from 'react';
import { FinancialCard } from '../components/FinancialCard';
import { Notice } from '../components/Notice';
import { StatusBadge } from '../components/StatusBadge';
import { useDemoScenario } from '../context/DemoScenarioContext';
import type { MoneyEntry } from '../data/demoData';
import { sumEntries } from '../utils/calculations';
import { formatCurrency } from '../utils/formatters';

type IncomeFormState = Pick<MoneyEntry, 'name' | 'category' | 'amount' | 'date' | 'recurring'>;

const initialIncomeForm: IncomeFormState = {
  name: 'Freelance demonstrativo',
  category: 'Renda extra',
  amount: 300,
  date: '2026-06-24',
  recurring: false,
};

export function IncomePage() {
  const { profile: demoProfile, updateProfile } = useDemoScenario();
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<IncomeFormState>(initialIncomeForm);
  const [feedback, setFeedback] = useState('');
  const incomeCategories = Array.from(new Set([...demoProfile.income.map((income) => income.category), 'Renda extra', 'Reembolso']));
  const totalIncome = sumEntries(demoProfile.income);
  const largestIncome = [...demoProfile.income].sort((current, next) => next.amount - current.amount)[0];
  const hasIncome = demoProfile.income.length > 0;

  function resetForm() {
    setEditingId(null);
    setForm(initialIncomeForm);
    setShowDemoForm(true);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextEntry: MoneyEntry = {
      id: editingId ?? `rec-sim-${Date.now()}`,
      ...form,
      amount: Number(form.amount),
    };

    updateProfile((profile) => ({
      ...profile,
      income: editingId
        ? profile.income.map((income) => (income.id === editingId ? nextEntry : income))
        : [...profile.income, nextEntry],
    }));
    setFeedback(editingId ? 'Receita demonstrativa atualizada. O dashboard foi recalculado localmente.' : 'Receita demonstrativa adicionada. O dashboard foi recalculado localmente.');
    resetForm();
  }

  function handleEdit(income: MoneyEntry) {
    setEditingId(income.id);
    setForm({ name: income.name, category: income.category, amount: income.amount, date: income.date, recurring: income.recurring });
    setShowDemoForm(true);
    setFeedback('Editando uma receita fictícia. Nenhum dado real será salvo.');
  }

  function handleDelete(incomeId: string) {
    updateProfile((profile) => ({ ...profile, income: profile.income.filter((income) => income.id !== incomeId) }));
    setFeedback('Receita demonstrativa excluída apenas desta simulação local.');
  }

  return (
    <section className="page-shell finance-page" aria-labelledby="active-page-title">
      <section className="dashboard-header" aria-labelledby="active-page-title">
        <div>
          <p className="eyebrow">Receitas</p>
          <h1 id="active-page-title">Entradas demonstrativas do mês</h1>
          <p className="hero__text">Veja as fontes de receita fictícias, categorias e recorrências usadas para alimentar o dashboard do ML-Invest.</p>
        </div>
        <button type="button" onClick={resetForm}>Adicionar receita demonstrativa</button>
      </section>

      <Notice title="Dado local e fictício">Esta área simula o cadastro de receitas sem salvar informações reais e sem solicitar dados sensíveis.</Notice>
      {feedback && <div className="inline-feedback" role="status">{feedback}</div>}

      <section className="summary-grid" aria-label="Resumo de receitas">
        <FinancialCard title="Total de receitas" value={formatCurrency(totalIncome)} description="Soma das entradas demonstrativas." tone="income" />
        <FinancialCard title="Maior fonte" value={largestIncome ? largestIncome.name : 'Sem entrada'} description={largestIncome ? formatCurrency(largestIncome.amount) : 'Nenhuma receita cadastrada.'} tone="positive" />
        <FinancialCard title="Quantidade de entradas" value={`${demoProfile.income.length}`} description="Registros fictícios no período selecionado." tone="neutral" />
      </section>

      <section className="finance-grid">
        <article className="panel">
          <div className="section-heading"><div><p className="eyebrow">Filtros</p><h2>Visualização demonstrativa</h2></div><StatusBadge>Junho</StatusBadge></div>
          <div className="filter-row" aria-label="Filtros demonstrativos de receitas">
            <button className="period-filter__option period-filter__option--active" type="button">Todas</button>
            {incomeCategories.map((category) => <button className="period-filter__option" type="button" key={category}>{category}</button>)}
          </div>
        </article>
        <article className="panel panel--soft"><p className="eyebrow">Mensagem educativa</p><h2>Receitas ajudam a entender sua base mensal</h2><p>Separar entradas recorrentes e extras ajuda a visualizar a previsibilidade do mês. Esta leitura é educativa e não representa orientação financeira profissional.</p></article>
      </section>

      {showDemoForm && (
        <section className="demo-form-panel" aria-labelledby="income-form-title">
          <div className="section-heading"><div><p className="eyebrow">Formulário simulado</p><h2 id="income-form-title">{editingId ? 'Editar receita demonstrativa' : 'Nova receita demonstrativa'}</h2></div><StatusBadge>Estado local</StatusBadge></div>
          <form className="form-grid" onSubmit={handleSubmit}>
            <label>Nome da receita<input type="text" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} /></label>
            <label>Categoria<select value={form.category} onChange={(event) => setForm({ ...form, category: event.target.value })}>{incomeCategories.map((category) => <option key={category}>{category}</option>)}</select></label>
            <label>Valor<input type="number" min="0" step="10" value={form.amount} onChange={(event) => setForm({ ...form, amount: Number(event.target.value) })} /></label>
            <label>Data<input type="date" value={form.date} onChange={(event) => setForm({ ...form, date: event.target.value })} /></label>
            <label>Recorrência<select value={form.recurring ? 'Sim' : 'Não'} onChange={(event) => setForm({ ...form, recurring: event.target.value === 'Sim' })}><option>Não</option><option>Sim</option></select></label>
            <div className="form-actions"><button type="submit">{editingId ? 'Salvar edição simulada' : 'Adicionar simulação'}</button><button className="button button--secondary" type="button" onClick={() => setShowDemoForm(false)}>Cancelar</button></div>
          </form>
          <p className="form-helper">Simulação temporária: os valores recalculam a interface, mas não são persistidos em banco.</p>
        </section>
      )}

      <section className="panel" aria-labelledby="income-list-title">
        <div className="section-heading"><div><p className="eyebrow">Lista de receitas</p><h2 id="income-list-title">Entradas registradas</h2></div><StatusBadge tone="success">{`${demoProfile.income.length} registros`}</StatusBadge></div>
        {hasIncome ? (
          <div className="data-table" role="table" aria-label="Receitas demonstrativas">
            {demoProfile.income.map((income) => (
              <article className="data-row" role="row" key={income.id}>
                <div><strong>{income.name}</strong><span>{income.category} · {income.recurring ? 'Recorrente' : 'Não recorrente'}</span></div>
                <div><strong>{formatCurrency(income.amount)}</strong><span>{income.date}</span></div>
                <div className="row-actions" aria-label={`Ações simuladas para ${income.name}`}><button className="button button--secondary" type="button" onClick={() => handleEdit(income)}>Editar</button><button className="button button--secondary" type="button" onClick={() => handleDelete(income.id)}>Excluir</button></div>
              </article>
            ))}
          </div>
        ) : <div className="empty-state"><h3>Nenhuma receita demonstrativa</h3><p>Quando houver entradas fictícias, elas aparecerão aqui para compor o dashboard.</p></div>}
      </section>
    </section>
  );
}
