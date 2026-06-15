export type MoneyEntry = {
  id: string;
  name: string;
  category: string;
  amount: number;
};

export type Goal = {
  id: string;
  name: string;
  currentAmount: number;
  targetAmount: number;
};

export const demoProfile = {
  name: 'Marina Demo',
  period: 'Junho demonstrativo',
  income: [
    { id: 'rec-001', name: 'Salário', category: 'Salário', amount: 4200 },
    { id: 'rec-002', name: 'Renda extra', category: 'Renda extra', amount: 650 },
    { id: 'rec-003', name: 'Reembolso', category: 'Reembolso', amount: 150 },
  ] satisfies MoneyEntry[],
  expenses: [
    { id: 'desp-001', name: 'Aluguel', category: 'Moradia', amount: 1500 },
    { id: 'desp-002', name: 'Mercado', category: 'Alimentação', amount: 950 },
    { id: 'desp-003', name: 'Transporte', category: 'Transporte', amount: 420 },
    { id: 'desp-004', name: 'Contas e serviços', category: 'Contas', amount: 400 },
    { id: 'desp-005', name: 'Saúde', category: 'Saúde', amount: 280 },
    { id: 'desp-006', name: 'Lazer', category: 'Lazer', amount: 350 },
    { id: 'desp-007', name: 'Assinaturas', category: 'Assinaturas', amount: 90 },
    { id: 'desp-008', name: 'Compras pessoais', category: 'Compras', amount: 320 },
    { id: 'desp-009', name: 'Educação', category: 'Educação', amount: 220 },
    { id: 'desp-010', name: 'Outros', category: 'Outros', amount: 270 },
  ] satisfies MoneyEntry[],
  debts: [
    { id: 'div-001', name: 'Cartão de crédito', amount: 1800, installment: 350, status: 'Próximo vencimento' },
    { id: 'div-002', name: 'Empréstimo pessoal', amount: 4200, installment: 420, status: 'Em dia' },
    { id: 'div-003', name: 'Compra parcelada', amount: 900, installment: 180, status: 'Em dia' },
    { id: 'div-004', name: 'Conta antiga', amount: 240, installment: 240, status: 'Atrasada' },
  ],
  goals: [
    { id: 'meta-001', name: 'Reserva de segurança', currentAmount: 900, targetAmount: 3000 },
    { id: 'meta-002', name: 'Curso profissional', currentAmount: 480, targetAmount: 1200 },
    { id: 'meta-003', name: 'Viagem planejada', currentAmount: 250, targetAmount: 2500 },
    { id: 'meta-004', name: 'Quitar compromisso', currentAmount: 300, targetAmount: 1500 },
  ] satisfies Goal[],
};
