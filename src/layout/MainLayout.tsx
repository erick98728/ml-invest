import type { ChangeEvent, ReactNode } from 'react';
import { scenarioLabels, useDemoScenario } from '../context/DemoScenarioContext';

export type NavPageId =
  | 'home'
  | 'dashboard'
  | 'income'
  | 'expenses'
  | 'debts'
  | 'goals'
  | 'plan'
  | 'reports'
  | 'profile';

export type NavItem = {
  id: NavPageId;
  label: string;
  description: string;
};

type MainLayoutProps = {
  activePage: NavPageId;
  navItems: NavItem[];
  children: ReactNode;
  onNavigate: (pageId: NavPageId) => void;
};

export function MainLayout({ activePage, navItems, children, onNavigate }: MainLayoutProps) {
  const activeItem = navItems.find((item) => item.id === activePage) ?? navItems[0];
  const { activeScenario, profile } = useDemoScenario();

  return (
    <div className="app-layout">
      <header className="app-header">
        <div className="brand-area" aria-label="Identificação do ML-Invest">
          <span className="brand-mark" aria-hidden="true">
            ML
          </span>
          <div>
            <strong>ML-Invest</strong>
            <span>Educação financeira simples</span>
          </div>
        </div>

        <div className="demo-pill" aria-label="Dados demonstrativos ativos">
          {profile.name} · {scenarioLabels[activeScenario]}
        </div>
      </header>

      <div className="app-frame">
        <aside className="sidebar" aria-label="Menu principal">
          <nav className="main-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`nav-item ${item.id === activePage ? 'nav-item--active' : ''}`}
                aria-current={item.id === activePage ? 'page' : undefined}
                onClick={() => onNavigate(item.id)}
              >
                <span>{item.label}</span>
                <small>{item.description}</small>
              </button>
            ))}
          </nav>
        </aside>

        <div className="mobile-nav" aria-label="Navegação mobile">
          <label htmlFor="mobile-page-select">Área do ML-Invest</label>
          <select
            id="mobile-page-select"
            value={activePage}
            onChange={(event: ChangeEvent<HTMLSelectElement>) => onNavigate(event.target.value as NavPageId)}
          >
            {navItems.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
          <p>{activeItem.description}</p>
        </div>

        <main className="app-content" aria-labelledby="active-page-title">
          {children}
        </main>
      </div>
    </div>
  );
}
