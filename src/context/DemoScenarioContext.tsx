import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import { demoScenarioProfiles, type DemoProfile, type DemoScenarioId } from '../data/demoData';

type DemoScenarioContextValue = {
  activeScenario: DemoScenarioId;
  profile: DemoProfile;
  setActiveScenario: (scenario: DemoScenarioId) => void;
  updateProfile: (updater: (profile: DemoProfile) => DemoProfile) => void;
  restoreDemoData: () => void;
};

const DemoScenarioContext = createContext<DemoScenarioContextValue | undefined>(undefined);

type DemoScenarioProviderProps = {
  children: ReactNode;
};


function refreshLatestReport(profile: DemoProfile): DemoProfile {
  const totalIncome = profile.income.reduce((total, entry) => total + entry.amount, 0);
  const totalExpenses = profile.expenses.reduce((total, entry) => total + entry.amount, 0);
  const debtPayments = profile.debts.reduce((total, debt) => total + debt.installment, 0);
  const goalContribution = profile.goals.reduce((total, goal) => total + goal.monthlySuggestion, 0);
  const saved = Math.max(totalIncome - totalExpenses, 0);
  const latestMonth = profile.monthlyReports[profile.monthlyReports.length - 1]?.month ?? 'Atual';
  const nextReports = profile.monthlyReports.length > 0 ? profile.monthlyReports.slice(0, -1) : [];

  return {
    ...profile,
    monthlyReports: [
      ...nextReports,
      { month: latestMonth, income: totalIncome, expenses: totalExpenses, debtPayments, saved, goalContribution },
    ],
  };
}

function cloneProfile(profile: DemoProfile): DemoProfile {
  return {
    ...profile,
    user: { ...profile.user },
    categories: [...profile.categories],
    income: profile.income.map((entry) => ({ ...entry })),
    expenses: profile.expenses.map((entry) => ({ ...entry })),
    debts: profile.debts.map((debt) => ({ ...debt })),
    goals: profile.goals.map((goal) => ({ ...goal })),
    recentTransactions: profile.recentTransactions.map((transaction) => ({ ...transaction })),
    monthlyReports: profile.monthlyReports.map((report) => ({ ...report })),
    alerts: profile.alerts.map((alert) => ({ ...alert })),
  };
}

export const scenarioLabels: Record<DemoScenarioId, string> = {
  positive: 'Cenário positivo',
  attention: 'Cenário de atenção',
  critical: 'Cenário crítico',
};

export function DemoScenarioProvider({ children }: DemoScenarioProviderProps) {
  const [activeScenario, setScenario] = useState<DemoScenarioId>('attention');
  const [profile, setProfile] = useState<DemoProfile>(() => cloneProfile(demoScenarioProfiles.attention));

  const value = useMemo(
    () => ({
      activeScenario,
      profile,
      setActiveScenario: (scenario: DemoScenarioId) => {
        setScenario(scenario);
        setProfile(cloneProfile(demoScenarioProfiles[scenario]));
      },
      updateProfile: (updater: (currentProfile: DemoProfile) => DemoProfile) => {
        setProfile((currentProfile) => refreshLatestReport(updater(currentProfile)));
      },
      restoreDemoData: () => {
        setScenario('attention');
        setProfile(cloneProfile(demoScenarioProfiles.attention));
      },
    }),
    [activeScenario, profile],
  );

  return <DemoScenarioContext.Provider value={value}>{children}</DemoScenarioContext.Provider>;
}

export function useDemoScenario() {
  const context = useContext(DemoScenarioContext);

  if (!context) {
    throw new Error('useDemoScenario deve ser usado dentro de DemoScenarioProvider');
  }

  return context;
}
