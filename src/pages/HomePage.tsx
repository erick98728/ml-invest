import { StatusBadge } from '../components/StatusBadge';
import { useDemoScenario } from '../context/DemoScenarioContext';

const benefitCards = [
  {
    title: 'Veja o mês em poucos segundos',
    description: 'Receitas, despesas, saldo e comprometimento aparecem em uma visão simples.',
  },
  {
    title: 'Entenda para onde o dinheiro vai',
    description: 'Categorias ajudam a identificar padrões sem transformar a experiência em algo técnico.',
  },
  {
    title: 'Organize metas com clareza',
    description: 'Barras de progresso e mensagens educativas mostram avanços de forma visual.',
  },
];

const financeAreas = [
  'Receitas para acompanhar entradas recorrentes e extras.',
  'Despesas separadas por categorias e tipos de gasto.',
  'Dívidas com status demonstrativo e avisos cautelosos.',
  'Metas financeiras com progresso simples e realista.',
];

type HomePageProps = {
  onOpenDashboard: () => void;
};

export function HomePage({ onOpenDashboard }: HomePageProps) {
  const { profile: demoProfile } = useDemoScenario();
  return (
    <section className="page-shell home-page">
      <section className="home-hero" aria-labelledby="active-page-title">
        <div className="home-hero__content">
          <div className="status-list" aria-label="Características do protótipo">
            <StatusBadge tone="success">Educativo</StatusBadge>
            <StatusBadge>Dados demonstrativos</StatusBadge>
            <StatusBadge tone="goal">Organização pessoal</StatusBadge>
          </div>
          <p className="eyebrow">Educação financeira acessível</p>
          <h1 id="active-page-title">Organize sua vida financeira com mais clareza.</h1>
          <p className="hero__text">
            O ML-Invest ajuda você a visualizar receitas, despesas, dívidas e metas em um protótipo
            simples, amigável e educativo, usando dados fictícios para demonstrar a experiência.
          </p>
          <div className="hero__actions" aria-label="Ações iniciais">
            <button type="button" onClick={onOpenDashboard}>
              Acessar dashboard
            </button>
            <button className="button button--secondary" type="button">
              Explorar demonstração
            </button>
          </div>
          <p className="home-hero__note">
            Sem cadastro real, sem conexão bancária e sem recomendação definitiva de produtos
            financeiros.
          </p>
        </div>

        <aside className="home-hero__preview" aria-label="Resumo demonstrativo do ML-Invest">
          <span className="demo-badge">{demoProfile.user.profileLabel}</span>
          <div className="preview-card preview-card--income">
            <span>Receitas demonstrativas</span>
            <strong>R$ 5.000</strong>
          </div>
          <div className="preview-card preview-card--expense">
            <span>Despesas organizadas</span>
            <strong>R$ 4.800</strong>
          </div>
          <div className="preview-card preview-card--goal">
            <span>Metas em acompanhamento</span>
            <strong>4 metas</strong>
          </div>
        </aside>
      </section>

      <section className="home-section" aria-labelledby="how-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Como o ML-Invest ajuda</p>
            <h2 id="how-title">Uma visão organizada para decisões mais conscientes</h2>
          </div>
          <StatusBadge tone="attention">Sem promessas de ganho</StatusBadge>
        </div>
        <p className="page-intro">
          A proposta é apoiar a organização mensal e a educação financeira prática. O produto não
          promete enriquecimento, não substitui consultoria profissional e não recomenda produtos
          financeiros específicos.
        </p>
      </section>

      <section className="benefit-grid" aria-label="Benefícios do ML-Invest">
        {benefitCards.map((benefit) => (
          <article className="benefit-card" key={benefit.title}>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </article>
        ))}
      </section>

      <section className="home-split" aria-labelledby="areas-title">
        <div>
          <p className="eyebrow">Receitas, despesas, dívidas e metas</p>
          <h2 id="areas-title">Tudo separado por áreas fáceis de entender</h2>
          <p>
            Cada área terá uma função clara para ajudar o usuário iniciante a se localizar sem
            excesso de informação ou linguagem técnica.
          </p>
        </div>
        <ul className="clean-list">
          {financeAreas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </section>

      <section className="home-split home-split--soft" aria-labelledby="plan-title">
        <div>
          <p className="eyebrow">Plano financeiro educativo</p>
          <h2 id="plan-title">Prioridades simples, cautelosas e práticas</h2>
          <p>
            O plano educativo poderá sugerir atenção a gastos variáveis, dívidas atrasadas, reserva
            de segurança e acompanhamento mensal, sempre como orientação geral baseada nos dados
            informados ou demonstrativos.
          </p>
        </div>
        <div className="responsible-card">
          <StatusBadge tone="risk">Aviso responsável</StatusBadge>
          <p>
            As leituras do ML-Invest são educativas e não devem ser interpretadas como consultoria
            financeira profissional, promessa de resultado ou recomendação definitiva.
          </p>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="final-cta-title">
        <p className="eyebrow">Demonstração pronta para explorar</p>
        <h2 id="final-cta-title">Comece pelo dashboard e veja a organização do mês.</h2>
        <p>
          Use os dados fictícios de {demoProfile.name} para conhecer a experiência antes de qualquer
          etapa com dados reais.
        </p>
        <button type="button" onClick={onOpenDashboard}>
          Ir para o dashboard
        </button>
      </section>
    </section>
  );
}
