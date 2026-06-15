import { demoProfile } from '../data/demoData';

type HomePageProps = {
  onOpenDashboard: () => void;
};

export function HomePage({ onOpenDashboard }: HomePageProps) {
  return (
    <section className="page-shell">
      <div className="hero" aria-labelledby="active-page-title">
        <div>
          <p className="eyebrow">Protótipo frontend/local</p>
          <h1 id="active-page-title">ML-Invest</h1>
          <p className="hero__text">
            Organize receitas, despesas, dívidas e metas para entender seu mês com clareza,
            simplicidade e orientação educativa.
          </p>
          <div className="hero__actions" aria-label="Ações iniciais">
            <button type="button" onClick={onOpenDashboard}>
              Ver dashboard
            </button>
            <button className="button button--secondary" type="button">
              Usar dados demonstrativos
            </button>
          </div>
        </div>
        <span className="demo-badge">{demoProfile.user.profileLabel}</span>
      </div>

      <section className="placeholder-grid" aria-label="Resumo das áreas do protótipo">
        <article className="panel panel--soft">
          <p className="eyebrow">Base pronta</p>
          <h2>Dados locais e navegação simples</h2>
          <p>
            Esta primeira versão usa dados fictícios para validar a experiência sem login, backend,
            banco de dados ou integrações externas.
          </p>
        </article>
        <article className="panel">
          <p className="eyebrow">Próximo foco</p>
          <h2>Construir páginas financeiras</h2>
          <p>
            Receitas, despesas, dívidas e metas já possuem entrada no menu e receberão conteúdo
            detalhado nas próximas etapas.
          </p>
        </article>
      </section>
    </section>
  );
}
