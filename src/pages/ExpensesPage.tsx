import { useState, type FormEvent } from 'react';
import { FinancialCard } from '../components/FinancialCard';
import { Notice } from '../components/Notice';
import { StatusBadge } from '../components/StatusBadge';
import { useDemoScenario } from '../context/DemoScenarioContext';
import type { ExpenseEntry, ExpenseType } from '../data/demoData';
import { getTopExpenseCategories, sumEntries } from '../utils/calculations';
import { formatCurrency, formatPercent } from '../utils/formatters';

type ExpenseFormState = Pick<ExpenseEntry, 'name' | 'category' | 'amount' | 'date' | 'recurring' | 'type' | 'essential'>;
const initialExpenseForm: ExpenseFormState = { name: 'Compra demonstrativa', category: 'Compras', amount: 120, date: '2026-06-24', recurring: false, type: 'Variável', essential: false };
const defaultExpenseTypes: ExpenseType[] = ['Fixa', 'Variável', 'Essencial'];

export function ExpensesPage() {
  const { profile: demoProfile, updateProfile } = useDemoScenario();
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<ExpenseFormState>(initialExpenseForm);
  const [feedback, setFeedback] = useState('');
  const expenseCategories = Array.from(new Set([...demoProfile.expenses.map((expense) => expense.category), 'Compras', 'Lazer', 'Outros']));
  const expenseTypes = Array.from(new Set([...demoProfile.expenses.map((expense) => expense.type), ...defaultExpenseTypes]));
  const totalExpenses = sumEntries(demoProfile.expenses);
  const fixedExpenses = sumEntries(demoProfile.expenses.filter((expense) => expense.type === 'Fixa'));
  const variableExpenses = sumEntries(demoProfile.expenses.filter((expense) => expense.type === 'Variável'));
  const topCategory = getTopExpenseCategories(demoProfile.expenses, 1)[0];
  const hasExpenses = demoProfile.expenses.length > 0;

  function resetForm() { setEditingId(null); setForm(initialExpenseForm); setShowDemoForm(true); }
  function submitExpense(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextExpense: ExpenseEntry = { id: editingId ?? `desp-sim-${Date.now()}`, ...form, amount: Number(form.amount) };
    updateProfile((profile) => ({ ...profile, expenses: editingId ? profile.expenses.map((expense) => (expense.id === editingId ? nextExpense : expense)) : [...profile.expenses, nextExpense] }));
    setFeedback(editingId ? 'Despesa demonstrativa atualizada. Indicadores recalculados localmente.' : 'Despesa demonstrativa adicionada. Indicadores recalculados localmente.');
    resetForm();
  }
  function editExpense(expense: ExpenseEntry) { setEditingId(expense.id); setForm({ name: expense.name, category: expense.category, amount: expense.amount, date: expense.date, recurring: expense.recurring, type: expense.type, essential: expense.essential }); setShowDemoForm(true); setFeedback('Editando uma despesa fictícia. Nenhum dado real será salvo.'); }
  function deleteExpense(expenseId: string) { updateProfile((profile) => ({ ...profile, expenses: profile.expenses.filter((expense) => expense.id !== expenseId) })); setFeedback('Despesa demonstrativa excluída apenas da simulação local.'); }

  return (
    <section className="page-shell finance-page" aria-labelledby="active-page-title">
      <section className="dashboard-header" aria-labelledby="active-page-title"><div><p className="eyebrow">Despesas</p><h1 id="active-page-title">Saídas organizadas por categoria</h1><p className="hero__text">Entenda para onde o dinheiro demonstrativo está indo com tipos de despesa, categorias e alertas educativos sem tom culpabilizador.</p></div><button type="button" onClick={resetForm}>Adicionar despesa demonstrativa</button></section>
      <Notice title="Organização sem julgamento">As mensagens desta página são educativas. Elas ajudam a observar padrões, sem recomendar cortes absolutos ou decisões financeiras definitivas.</Notice>
      {feedback && <div className="inline-feedback" role="status">{feedback}</div>}
      <section className="summary-grid" aria-label="Resumo de despesas"><FinancialCard title="Total de despesas" value={formatCurrency(totalExpenses)} description="Soma das saídas demonstrativas." tone="expense" /><FinancialCard title="Maior categoria" value={topCategory ? topCategory.category : 'Sem categoria'} description={topCategory ? `${formatPercent(topCategory.percentage)} das despesas` : 'Nenhuma despesa cadastrada.'} tone="attention" /><FinancialCard title="Despesas fixas" value={formatCurrency(fixedExpenses)} description="Compromissos recorrentes do mês." tone="neutral" /><FinancialCard title="Despesas variáveis" value={formatCurrency(variableExpenses)} description="Gastos que podem oscilar entre meses." tone="goal" /></section>
      <section className="finance-grid"><article className="panel"><div className="section-heading"><div><p className="eyebrow">Filtros</p><h2>Categoria, tipo e período</h2></div><StatusBadge>Junho</StatusBadge></div><div className="filter-row" aria-label="Filtros demonstrativos de despesas"><button className="period-filter__option period-filter__option--active" type="button">Todas</button>{expenseTypes.map((type) => <button className="period-filter__option" type="button" key={type}>{type}</button>)}{expenseCategories.slice(0, 5).map((category) => <button className="period-filter__option" type="button" key={category}>{category}</button>)}</div></article><article className="panel panel--soft"><p className="eyebrow">Alerta educativo</p><h2>Observe categorias com maior peso</h2><p>{topCategory ? `${topCategory.category} concentra ${formatPercent(topCategory.percentage)} das despesas fictícias. Use isso apenas como ponto de partida para análise.` : 'Quando houver despesas demonstrativas, o maior grupo aparecerá aqui.'}</p></article></section>
      {showDemoForm && <section className="demo-form-panel" aria-labelledby="expense-form-title"><div className="section-heading"><div><p className="eyebrow">Formulário simulado</p><h2 id="expense-form-title">{editingId ? 'Editar despesa demonstrativa' : 'Nova despesa demonstrativa'}</h2></div><StatusBadge>Estado local</StatusBadge></div><form className="form-grid" onSubmit={submitExpense}><label>Nome da despesa<input type="text" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} /></label><label>Categoria<select value={form.category} onChange={(event) => setForm({ ...form, category: event.target.value })}>{expenseCategories.map((category) => <option key={category}>{category}</option>)}</select></label><label>Tipo<select value={form.type} onChange={(event) => setForm({ ...form, type: event.target.value as ExpenseType })}>{expenseTypes.map((type) => <option key={type}>{type}</option>)}</select></label><label>Valor<input type="number" min="0" step="10" value={form.amount} onChange={(event) => setForm({ ...form, amount: Number(event.target.value) })} /></label><label>Data<input type="date" value={form.date} onChange={(event) => setForm({ ...form, date: event.target.value })} /></label><label>Essencial<select value={form.essential ? 'Sim' : 'Não'} onChange={(event) => setForm({ ...form, essential: event.target.value === 'Sim' })}><option>Não</option><option>Sim</option></select></label><div className="form-actions"><button type="submit">{editingId ? 'Salvar edição simulada' : 'Adicionar simulação'}</button><button className="button button--secondary" type="button" onClick={() => setShowDemoForm(false)}>Cancelar</button></div></form><p className="form-helper">Simulação temporária: os valores recalculam a interface, mas não são persistidos em banco.</p></section>}
      <section className="panel" aria-labelledby="expense-list-title"><div className="section-heading"><div><p className="eyebrow">Lista de despesas</p><h2 id="expense-list-title">Saídas registradas</h2></div><StatusBadge tone="attention">{`${demoProfile.expenses.length} registros`}</StatusBadge></div>{hasExpenses ? <div className="data-table" role="table" aria-label="Despesas demonstrativas">{demoProfile.expenses.map((expense) => <article className="data-row" role="row" key={expense.id}><div><strong>{expense.name}</strong><span>{expense.category} · {expense.recurring ? 'Recorrente' : 'Não recorrente'}</span></div><div className="badge-group"><StatusBadge tone={expense.type === 'Variável' ? 'attention' : 'goal'}>{expense.type}</StatusBadge><StatusBadge tone={expense.essential ? 'success' : 'attention'}>{expense.essential ? 'Essencial' : 'Não essencial'}</StatusBadge></div><div><strong>{formatCurrency(expense.amount)}</strong><span>{expense.date}</span></div><div className="row-actions" aria-label={`Ações simuladas para ${expense.name}`}><button className="button button--secondary" type="button" onClick={() => editExpense(expense)}>Editar</button><button className="button button--secondary" type="button" onClick={() => deleteExpense(expense.id)}>Excluir</button></div></article>)}</div> : <div className="empty-state"><h3>Nenhuma despesa demonstrativa</h3><p>Quando houver saídas fictícias, elas aparecerão aqui por categoria e tipo.</p></div>}</section>
    </section>
  );
}
