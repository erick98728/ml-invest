export type TransactionKind = 'income' | 'expense';
export type ExpenseType = 'Fixa' | 'Variável' | 'Essencial';
export type DebtStatus = 'Em dia' | 'Próximo vencimento' | 'Atrasada';
export type GoalStatus = 'No prazo' | 'Atenção' | 'Pausada';
export type AlertLevel = 'info' | 'attention' | 'risk' | 'success';

export type DemoUser = {
  id: string;
  name: string;
  firstName: string;
  profileLabel: string;
  period: string;
  city: string;
};

export type FinancialCategory = {
  id: string;
  name: string;
  kind: TransactionKind | 'debt' | 'goal';
  colorToken: string;
};

export type MoneyEntry = {
  id: string;
  name: string;
  category: string;
  amount: number;
  date: string;
  recurring: boolean;
  note?: string;
};

export type ExpenseEntry = MoneyEntry & {
  type: ExpenseType;
  essential: boolean;
};

export type Debt = {
  id: string;
  name: string;
  category: string;
  totalAmount: number;
  openAmount: number;
  installment: number;
  dueDate: string;
  status: DebtStatus;
  priorityHint: string;
};

export type Goal = {
  id: string;
  name: string;
  category: string;
  currentAmount: number;
  targetAmount: number;
  targetDate: string;
  monthlySuggestion: number;
  status: GoalStatus;
};

export type RecentTransaction = {
  id: string;
  description: string;
  category: string;
  amount: number;
  kind: TransactionKind;
  date: string;
};

export type MonthlyReport = {
  month: string;
  income: number;
  expenses: number;
  debtPayments: number;
  saved: number;
  goalContribution: number;
};

export type DemoAlert = {
  id: string;
  level: AlertLevel;
  title: string;
  message: string;
};

export const demoUser: DemoUser = {
  id: 'user-demo-001',
  name: 'Marina Demo',
  firstName: 'Marina',
  profileLabel: 'Perfil demonstrativo educativo',
  period: 'Junho demonstrativo',
  city: 'Cidade fictícia',
};

export const financialCategories: FinancialCategory[] = [
  { id: 'cat-income-salary', name: 'Salário', kind: 'income', colorToken: 'income' },
  { id: 'cat-income-extra', name: 'Renda extra', kind: 'income', colorToken: 'income' },
  { id: 'cat-housing', name: 'Moradia', kind: 'expense', colorToken: 'expense' },
  { id: 'cat-food', name: 'Alimentação', kind: 'expense', colorToken: 'expense' },
  { id: 'cat-transport', name: 'Transporte', kind: 'expense', colorToken: 'expense' },
  { id: 'cat-bills', name: 'Contas', kind: 'expense', colorToken: 'expense' },
  { id: 'cat-leisure', name: 'Lazer', kind: 'expense', colorToken: 'alert' },
  { id: 'cat-shopping', name: 'Compras', kind: 'expense', colorToken: 'alert' },
  { id: 'cat-debt', name: 'Dívidas', kind: 'debt', colorToken: 'debt' },
  { id: 'cat-goal', name: 'Metas', kind: 'goal', colorToken: 'goal' },
];

export const demoIncome: MoneyEntry[] = [
  { id: 'rec-001', name: 'Salário', category: 'Salário', amount: 4200, date: '2026-06-05', recurring: true },
  { id: 'rec-002', name: 'Renda extra', category: 'Renda extra', amount: 650, date: '2026-06-12', recurring: false },
  { id: 'rec-003', name: 'Reembolso', category: 'Reembolso', amount: 150, date: '2026-06-18', recurring: false },
];

export const demoExpenses: ExpenseEntry[] = [
  { id: 'desp-001', name: 'Aluguel', category: 'Moradia', amount: 1500, date: '2026-06-08', recurring: true, type: 'Fixa', essential: true },
  { id: 'desp-002', name: 'Mercado', category: 'Alimentação', amount: 950, date: '2026-06-10', recurring: true, type: 'Essencial', essential: true },
  { id: 'desp-003', name: 'Transporte', category: 'Transporte', amount: 420, date: '2026-06-11', recurring: true, type: 'Essencial', essential: true },
  { id: 'desp-004', name: 'Contas e serviços', category: 'Contas', amount: 400, date: '2026-06-12', recurring: true, type: 'Fixa', essential: true },
  { id: 'desp-005', name: 'Saúde', category: 'Saúde', amount: 280, date: '2026-06-14', recurring: false, type: 'Essencial', essential: true },
  { id: 'desp-006', name: 'Lazer', category: 'Lazer', amount: 350, date: '2026-06-16', recurring: false, type: 'Variável', essential: false },
  { id: 'desp-007', name: 'Assinaturas', category: 'Assinaturas', amount: 90, date: '2026-06-17', recurring: true, type: 'Variável', essential: false },
  { id: 'desp-008', name: 'Compras pessoais', category: 'Compras', amount: 320, date: '2026-06-20', recurring: false, type: 'Variável', essential: false },
  { id: 'desp-009', name: 'Educação', category: 'Educação', amount: 220, date: '2026-06-21', recurring: false, type: 'Variável', essential: false },
  { id: 'desp-010', name: 'Outros', category: 'Outros', amount: 270, date: '2026-06-23', recurring: false, type: 'Variável', essential: false },
];

export const demoDebts: Debt[] = [
  { id: 'div-001', name: 'Cartão de crédito', category: 'Cartão', totalAmount: 2400, openAmount: 1800, installment: 350, dueDate: '2026-06-25', status: 'Próximo vencimento', priorityHint: 'Acompanhar vencimento e evitar atraso.' },
  { id: 'div-002', name: 'Empréstimo pessoal', category: 'Empréstimo', totalAmount: 6200, openAmount: 4200, installment: 420, dueDate: '2026-06-20', status: 'Em dia', priorityHint: 'Manter parcelas dentro do planejamento mensal.' },
  { id: 'div-003', name: 'Compra parcelada', category: 'Parcelamento', totalAmount: 1200, openAmount: 900, installment: 180, dueDate: '2026-06-28', status: 'Em dia', priorityHint: 'Observar impacto das parcelas no orçamento.' },
  { id: 'div-004', name: 'Conta antiga', category: 'Conta atrasada', totalAmount: 240, openAmount: 240, installment: 240, dueDate: '2026-06-03', status: 'Atrasada', priorityHint: 'Pode merecer atenção por estar atrasada.' },
];

export const demoGoals: Goal[] = [
  { id: 'meta-001', name: 'Reserva de segurança', category: 'Reserva', currentAmount: 900, targetAmount: 3000, targetDate: '2026-12-31', monthlySuggestion: 350, status: 'Atenção' },
  { id: 'meta-002', name: 'Curso profissional', category: 'Educação', currentAmount: 480, targetAmount: 1200, targetDate: '2026-10-31', monthlySuggestion: 180, status: 'No prazo' },
  { id: 'meta-003', name: 'Viagem planejada', category: 'Viagem', currentAmount: 250, targetAmount: 2500, targetDate: '2027-01-31', monthlySuggestion: 250, status: 'Atenção' },
  { id: 'meta-004', name: 'Quitar compromisso', category: 'Dívidas', currentAmount: 300, targetAmount: 1500, targetDate: '2026-11-30', monthlySuggestion: 240, status: 'No prazo' },
];

export const recentTransactions: RecentTransaction[] = [
  { id: 'mov-001', description: 'Salário recebido', category: 'Salário', amount: 4200, kind: 'income', date: '2026-06-05' },
  { id: 'mov-002', description: 'Aluguel pago', category: 'Moradia', amount: 1500, kind: 'expense', date: '2026-06-08' },
  { id: 'mov-003', description: 'Compra no mercado', category: 'Alimentação', amount: 420, kind: 'expense', date: '2026-06-10' },
  { id: 'mov-004', description: 'Renda extra demonstrativa', category: 'Renda extra', amount: 650, kind: 'income', date: '2026-06-12' },
  { id: 'mov-005', description: 'Lazer do fim de semana', category: 'Lazer', amount: 180, kind: 'expense', date: '2026-06-16' },
];

export const monthlyReports: MonthlyReport[] = [
  { month: 'Jan', income: 4600, expenses: 4380, debtPayments: 780, saved: 220, goalContribution: 120 },
  { month: 'Fev', income: 4700, expenses: 4520, debtPayments: 760, saved: 180, goalContribution: 120 },
  { month: 'Mar', income: 5000, expenses: 4620, debtPayments: 820, saved: 380, goalContribution: 180 },
  { month: 'Abr', income: 4850, expenses: 4710, debtPayments: 820, saved: 140, goalContribution: 100 },
  { month: 'Mai', income: 4900, expenses: 4670, debtPayments: 830, saved: 230, goalContribution: 150 },
  { month: 'Jun', income: 5000, expenses: 4800, debtPayments: 1190, saved: 200, goalContribution: 180 },
];

export const demoAlerts: DemoAlert[] = [
  { id: 'alert-001', level: 'attention', title: 'Comprometimento alto', message: 'As despesas ocupam grande parte das receitas neste mês demonstrativo.' },
  { id: 'alert-002', level: 'risk', title: 'Dívida atrasada', message: 'Existe uma dívida fictícia marcada como atrasada. Vale revisar com calma as próximas ações.' },
  { id: 'alert-003', level: 'info', title: 'Gastos variáveis', message: 'Lazer, compras e assinaturas podem ser acompanhados para entender padrões.' },
];

export const demoProfile = {
  user: demoUser,
  name: demoUser.name,
  period: demoUser.period,
  categories: financialCategories,
  income: demoIncome,
  expenses: demoExpenses,
  debts: demoDebts,
  goals: demoGoals,
  recentTransactions,
  monthlyReports,
  alerts: demoAlerts,
};
