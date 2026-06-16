import { useState } from 'react';
import { MainLayout, type NavItem, type NavPageId } from './layout/MainLayout';
import { DashboardPreview } from './pages/DashboardPreview';
import { DebtsPage } from './pages/DebtsPage';
import { ExpensesPage } from './pages/ExpensesPage';
import { EducationalPlanPage } from './pages/EducationalPlanPage';
import { GoalsPage } from './pages/GoalsPage';
import { HomePage } from './pages/HomePage';
import { IncomePage } from './pages/IncomePage';
import { PlaceholderPage } from './pages/PlaceholderPage';
import { ProfileSettingsPage } from './pages/ProfileSettingsPage';
import { ReportsPage } from './pages/ReportsPage';
import { DemoScenarioProvider } from './context/DemoScenarioContext';

const navItems: NavItem[] = [
  { id: 'home', label: 'Início', description: 'Apresentação do protótipo' },
  { id: 'dashboard', label: 'Dashboard', description: 'Visão geral do mês' },
  { id: 'income', label: 'Receitas', description: 'Entradas demonstrativas' },
  { id: 'expenses', label: 'Despesas', description: 'Gastos por categoria' },
  { id: 'debts', label: 'Dívidas', description: 'Compromissos em aberto' },
  { id: 'goals', label: 'Metas', description: 'Objetivos financeiros' },
  { id: 'plan', label: 'Plano educativo', description: 'Prioridades cautelosas' },
  { id: 'reports', label: 'Relatórios', description: 'Evolução e gráficos' },
  { id: 'profile', label: 'Perfil', description: 'Preferências demonstrativas' },
];

export function App() {
  const [activePage, setActivePage] = useState<NavPageId>('home');

  function renderPage() {
    if (activePage === 'home') {
      return <HomePage onOpenDashboard={() => setActivePage('dashboard')} />;
    }

    if (activePage === 'dashboard') {
      return <DashboardPreview />;
    }

    if (activePage === 'income') {
      return <IncomePage />;
    }

    if (activePage === 'expenses') {
      return <ExpensesPage />;
    }

    if (activePage === 'debts') {
      return <DebtsPage />;
    }

    if (activePage === 'goals') {
      return <GoalsPage />;
    }

    if (activePage === 'plan') {
      return <EducationalPlanPage />;
    }

    if (activePage === 'reports') {
      return <ReportsPage />;
    }

    if (activePage === 'profile') {
      return <ProfileSettingsPage />;
    }

    return (
      <PlaceholderPage
        title="Área demonstrativa"
        eyebrow="Protótipo"
        description="Esta área ainda está em preparação."
        items={["Conteúdo futuro do protótipo."]}
      />
    );
  }

  return (
    <DemoScenarioProvider>
      <MainLayout activePage={activePage} navItems={navItems} onNavigate={setActivePage}>
        {renderPage()}
      </MainLayout>
    </DemoScenarioProvider>
  );
}
