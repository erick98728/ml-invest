import type { Goal, MoneyEntry } from '../data/demoData';

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

export function calculateGoalProgress(goal: Goal) {
  if (goal.targetAmount <= 0) {
    return 0;
  }

  return (goal.currentAmount / goal.targetAmount) * 100;
}
