import { useState } from 'react';
import { MainLayout, type NavItem, type NavPageId } from './layout/MainLayout';
import { DashboardPreview } from './pages/DashboardPreview';
import { HomePage } from './pages/HomePage';
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

const placeholderContent: Record<Exclude<NavPageId, 'home' | 'dashboard'>, {
  title: string;
  eyebrow: string;
  description: string;
  items: string[];
}> = {
  income: {
    title: 'Receitas',
    eyebrow: 'Área financeira',
    description:
      'Página reservada para listar entradas demonstrativas, categorias de receita e filtros simples por período.',
    items: ['Resumo de receitas do mês.', 'Lista de entradas fictícias.', 'Filtros por categoria e recorrência.'],
  },
  expenses: {
    title: 'Despesas',
    eyebrow: 'Área financeira',
    description:
      'Página reservada para organizar despesas fixas, essenciais e variáveis com linguagem simples e educativa.',
    items: ['Resumo de despesas por tipo.', 'Categorias de maior impacto.', 'Alertas não alarmistas sobre gastos elevados.'],
  },
  debts: {
    title: 'Dívidas',
    eyebrow: 'Organização responsável',
    description:
      'Página reservada para acompanhar dívidas fictícias em aberto sem indicar decisões definitivas ao usuário.',
    items: ['Valor total em aberto.', 'Status de vencimento.', 'Avisos cautelosos para dívidas atrasadas.'],
  },
  goals: {
    title: 'Metas',
    eyebrow: 'Planejamento visual',
    description:
      'Página reservada para acompanhar metas financeiras demonstrativas com barras de progresso e mensagens motivadoras.',
    items: ['Reserva de segurança.', 'Curso ou estudo.', 'Compra planejada ou quitação de compromisso.'],
  },
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

    return <PlaceholderPage {...placeholderContent[activePage]} />;
  }

  return (
    <MainLayout activePage={activePage} navItems={navItems} onNavigate={setActivePage}>
      {renderPage()}
    </MainLayout>
  );
}
