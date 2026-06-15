import type { Debt, DemoAlert, ExpenseEntry, Goal, MoneyEntry } from '../data/demoData';

export type CategorySpending = {
  category: string;
  amount: number;
  percentage: number;
};

export type MonthlyDiagnosis = {
  status: 'positive' | 'attention' | 'risk';
  title: string;
  message: string;
  suggestions: string[];
};

export function sumEntries(entries: MoneyEntry[]) {
  return entries.reduce((total, entry) => total + entry.amount, 0);
}

export function calculateMonthlyBalance(totalIncome: number, totalExpenses: number) {
  return totalIncome - totalExpenses;
}

export function calculateSavedPercentage(balance: number, totalIncome: number) {
  if (totalIncome <= 0 || balance <= 0) {
    return 0;
  }

  return (balance / totalIncome) * 100;
}

export function calculateIncomeCommitment(totalExpenses: number, totalIncome: number) {
  if (totalIncome <= 0) {
    return 0;
  }

  return (totalExpenses / totalIncome) * 100;
}

export function calculateTotalOpenDebts(debts: Debt[]) {
  return debts.reduce((total, debt) => total + debt.openAmount, 0);
}

export function getOverdueDebts(debts: Debt[]) {
  return debts.filter((debt) => debt.status === 'Atrasada');
}

export function getTopExpenseCategories(expenses: ExpenseEntry[], limit = 3): CategorySpending[] {
  const totalExpenses = sumEntries(expenses);
  const categoryMap = expenses.reduce<Record<string, number>>((accumulator, expense) => {
    accumulator[expense.category] = (accumulator[expense.category] ?? 0) + expense.amount;
    return accumulator;
  }, {});

  return Object.entries(categoryMap)
    .map(([category, amount]) => ({
      category,
      amount,
      percentage: totalExpenses > 0 ? (amount / totalExpenses) * 100 : 0,
    }))
    .sort((current, next) => next.amount - current.amount)
    .slice(0, limit);
}

export function calculateGoalProgress(goal: Goal) {
  if (goal.targetAmount <= 0) {
    return 0;
  }

  return Math.min((goal.currentAmount / goal.targetAmount) * 100, 100);
}

export function calculateAverageGoalProgress(goals: Goal[]) {
  if (goals.length === 0) {
    return 0;
  }

  const totalProgress = goals.reduce((total, goal) => total + calculateGoalProgress(goal), 0);
  return totalProgress / goals.length;
}

export function createMonthlyDiagnosis(params: {
  totalIncome: number;
  totalExpenses: number;
  balance: number;
  savedPercentage: number;
  incomeCommitment: number;
  overdueDebtsCount: number;
  variableExpensesTotal: number;
}): MonthlyDiagnosis {
  const {
    balance,
    savedPercentage,
    incomeCommitment,
    overdueDebtsCount,
    variableExpensesTotal,
    totalIncome,
  } = params;
  const variableExpensePercentage = totalIncome > 0 ? (variableExpensesTotal / totalIncome) * 100 : 0;

  if (balance < 0) {
    return {
      status: 'risk',
      title: 'Mês com saldo negativo',
      message:
        'Com base nos dados fictícios, as despesas ficaram acima das receitas. Esta é uma leitura educativa para apoiar a revisão do orçamento, não uma recomendação profissional.',
      suggestions: [
        'Revisar despesas variáveis antes de assumir novos compromissos.',
        'Observar vencimentos próximos para evitar novos atrasos.',
        'Priorizar uma visão simples do que é essencial e do que pode ser ajustado.',
      ],
    };
  }

  if (overdueDebtsCount > 0 || incomeCommitment >= 90) {
    return {
      status: 'attention',
      title: 'Mês positivo, mas com pontos de atenção',
      message:
        'Os dados demonstrativos indicam saldo positivo baixo, comprometimento elevado ou dívida atrasada. Pode ser útil revisar prioridades com calma.',
      suggestions: [
        'Acompanhar dívidas atrasadas ou próximas do vencimento.',
        'Evitar tratar o saldo positivo como sobra livre antes de olhar metas e contas.',
        'Separar pequenas ações possíveis para o próximo mês.',
      ],
    };
  }

  if (savedPercentage < 10 || variableExpensePercentage > 25) {
    return {
      status: 'attention',
      title: 'Saldo positivo com oportunidade de organização',
      message:
        'A leitura educativa sugere que existe saldo positivo, mas a poupança ainda é baixa ou os gastos variáveis merecem acompanhamento.',
      suggestions: [
        'Observar categorias variáveis como lazer, compras e assinaturas.',
        'Definir um valor pequeno e realista para metas demonstrativas.',
        'Comparar a evolução mensal antes de fazer mudanças grandes.',
      ],
    };
  }

  return {
    status: 'positive',
    title: 'Mês organizado nos dados demonstrativos',
    message:
      'Os dados fictícios mostram saldo positivo e boa capacidade de acompanhamento. Continue usando a visão mensal como apoio educativo.',
    suggestions: [
      'Manter revisão mensal das categorias.',
      'Acompanhar metas sem transformar o progresso em obrigação rígida.',
      'Registrar mudanças relevantes para entender padrões ao longo do tempo.',
    ],
  };
}

export function createEducationalAlerts(params: {
  incomeCommitment: number;
  savedPercentage: number;
  overdueDebts: Debt[];
  topCategories: CategorySpending[];
}): DemoAlert[] {
  const alerts: DemoAlert[] = [];
  const { incomeCommitment, savedPercentage, overdueDebts, topCategories } = params;
  const highestCategory = topCategories[0];

  if (incomeCommitment >= 85) {
    alerts.push({
      id: 'calc-alert-commitment',
      level: 'attention',
      title: 'Comprometimento elevado',
      message:
        'Grande parte da renda demonstrativa está associada a despesas. Vale observar o orçamento antes de assumir novos gastos.',
    });
  }

  if (savedPercentage < 10) {
    alerts.push({
      id: 'calc-alert-saving',
      level: 'info',
      title: 'Pouca sobra no mês',
      message:
        'A sobra estimada é pequena. Uma revisão simples das categorias pode ajudar a entender onde há margem de ajuste.',
    });
  }

  if (overdueDebts.length > 0) {
    alerts.push({
      id: 'calc-alert-overdue-debt',
      level: 'risk',
      title: 'Dívida atrasada nos dados fictícios',
      message:
        'Há dívida demonstrativa marcada como atrasada. O protótipo apenas sinaliza atenção e não substitui orientação profissional.',
    });
  }

  if (highestCategory && highestCategory.percentage >= 25) {
    alerts.push({
      id: 'calc-alert-category',
      level: 'attention',
      title: `${highestCategory.category} concentra gastos`,
      message:
        'Uma categoria representa parte relevante das despesas. Use essa informação como ponto de partida para análise educativa.',
    });
  }

  return alerts;
}
