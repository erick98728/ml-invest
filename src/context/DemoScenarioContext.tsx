import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import { demoScenarioProfiles, type DemoProfile, type DemoScenarioId } from '../data/demoData';

type DemoScenarioContextValue = {
  activeScenario: DemoScenarioId;
  profile: DemoProfile;
  setActiveScenario: (scenario: DemoScenarioId) => void;
  restoreDemoData: () => void;
};

const DemoScenarioContext = createContext<DemoScenarioContextValue | undefined>(undefined);

type DemoScenarioProviderProps = {
  children: ReactNode;
};

export const scenarioLabels: Record<DemoScenarioId, string> = {
  positive: 'Cenário positivo',
  attention: 'Cenário de atenção',
  critical: 'Cenário crítico',
};

export function DemoScenarioProvider({ children }: DemoScenarioProviderProps) {
  const [activeScenario, setActiveScenario] = useState<DemoScenarioId>('attention');

  const value = useMemo(
    () => ({
      activeScenario,
      profile: demoScenarioProfiles[activeScenario],
      setActiveScenario,
      restoreDemoData: () => setActiveScenario('attention'),
    }),
    [activeScenario],
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
