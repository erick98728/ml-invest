import { useState } from 'react';
import { MainLayout, type NavItem, type NavPageId } from './layout/MainLayout';
import { DashboardPreview } from './pages/DashboardPreview';
import { DebtsPage } from './pages/DebtsPage';
import { ExpensesPage } from './pages/ExpensesPage';
import { GoalsPage } from './pages/GoalsPage';
import { HomePage } from './pages/HomePage';
import { IncomePage } from './pages/IncomePage';
import { PlaceholderPage } from './pages/PlaceholderPage';

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

const placeholderContent: Record<Exclude<NavPageId, 'home' | 'dashboard' | 'income' | 'expenses' | 'debts' | 'goals'>, {
  title: string;
  eyebrow: string;
  description: string;
  items: string[];
}> = {
  plan: {
    title: 'Plano educativo',
    eyebrow: 'Orientação cautelosa',
    description:
      'Página reservada para sugerir prioridades educativas sem consultoria profissional ou promessa de resultado.',
    items: ['Organizar despesas essenciais.', 'Observar dívidas atrasadas.', 'Separar pequenas ações para o próximo mês.'],
  },
  reports: {
    title: 'Relatórios',
    eyebrow: 'Evolução financeira',
    description:
      'Página reservada para relatórios simples com dados mensais fictícios e explicações fáceis de entender.',
    items: ['Comparativo de receitas e despesas.', 'Evolução do saldo mensal.', 'Distribuição de gastos por categoria.'],
  },
  profile: {
    title: 'Perfil e configurações',
    eyebrow: 'Demonstração local',
    description:
      'Página reservada para preferências demonstrativas do protótipo, sem conta real, senha ou autenticação.',
    items: ['Identificação fictícia do usuário.', 'Preferências visuais futuras.', 'Aviso de dados demonstrativos.'],
  },
};

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

    const placeholderPage = activePage as keyof typeof placeholderContent;
    return <PlaceholderPage {...placeholderContent[placeholderPage]} />;
  }

  return (
    <MainLayout activePage={activePage} navItems={navItems} onNavigate={setActivePage}>
      {renderPage()}
    </MainLayout>
  );
}
