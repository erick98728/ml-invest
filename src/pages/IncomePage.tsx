import { useState } from 'react';
import { FinancialCard } from '../components/FinancialCard';
import { Notice } from '../components/Notice';
import { StatusBadge } from '../components/StatusBadge';
import { useDemoScenario } from '../context/DemoScenarioContext';
import { sumEntries } from '../utils/calculations';
import { formatCurrency } from '../utils/formatters';

export function IncomePage() {
  const { profile: demoProfile } = useDemoScenario();
  const incomeCategories = Array.from(new Set(demoProfile.income.map((income) => income.category)));
  const [showDemoForm, setShowDemoForm] = useState(false);
  const totalIncome = sumEntries(demoProfile.income);
  const largestIncome = [...demoProfile.income].sort((current, next) => next.amount - current.amount)[0];
  const hasIncome = demoProfile.income.length > 0;

  return (
    <section className="page-shell finance-page" aria-labelledby="active-page-title">
      <section className="dashboard-header" aria-labelledby="active-page-title">
        <div>
          <p className="eyebrow">Receitas</p>
          <h1 id="active-page-title">Entradas demonstrativas do mês</h1>
          <p className="hero__text">
            Veja as fontes de receita fictícias, categorias e recorrências usadas para alimentar o
            dashboard do ML-Invest.
          </p>
        </div>
        <button type="button" onClick={() => setShowDemoForm(!showDemoForm)}>
          Adicionar receita demonstrativa
        </button>
      </section>

      <Notice title="Dado local e fictício">
        Esta área simula o cadastro de receitas sem salvar informações reais e sem solicitar dados
        sensíveis.
      </Notice>

      <section className="summary-grid" aria-label="Resumo de receitas">
        <FinancialCard
          title="Total de receitas"
          value={formatCurrency(totalIncome)}
          description="Soma das entradas demonstrativas."
          tone="income"
        />
        <FinancialCard
          title="Maior fonte"
          value={largestIncome ? largestIncome.name : 'Sem entrada'}
          description={largestIncome ? formatCurrency(largestIncome.amount) : 'Nenhuma receita cadastrada.'}
          tone="positive"
        />
        <FinancialCard
          title="Quantidade de entradas"
          value={`${demoProfile.income.length}`}
          description="Registros fictícios no período selecionado."
          tone="neutral"
        />
      </section>

      <section className="finance-grid">
        <article className="panel">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Filtros</p>
              <h2>Visualização demonstrativa</h2>
            </div>
            <StatusBadge>Junho</StatusBadge>
          </div>
          <div className="filter-row" aria-label="Filtros demonstrativos de receitas">
            <button className="period-filter__option period-filter__option--active" type="button">
              Todas
            </button>
            {incomeCategories.map((category) => (
              <button className="period-filter__option" type="button" key={category}>
                {category}
              </button>
            ))}
          </div>
        </article>

        <article className="panel panel--soft">
          <p className="eyebrow">Mensagem educativa</p>
          <h2>Receitas ajudam a entender sua base mensal</h2>
          <p>
            Separar entradas recorrentes e extras ajuda a visualizar a previsibilidade do mês. Esta
            leitura é educativa e não representa orientação financeira profissional.
          </p>
        </article>
      </section>

      {showDemoForm && (
        <section className="demo-form-panel" aria-labelledby="income-form-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Formulário simulado</p>
              <h2 id="income-form-title">Nova receita demonstrativa</h2>
            </div>
            <StatusBadge>Não salva dados</StatusBadge>
          </div>
          <div className="form-grid">
            <label>
              Nome da receita
              <input type="text" value="Freelance demonstrativo" readOnly />
            </label>
            <label>
              Categoria
              <select value="Renda extra" disabled>
                <option>Renda extra</option>
              </select>
            </label>
            <label>
              Valor
              <input type="text" value="R$ 300,00" readOnly />
            </label>
            <label>
              Recorrência
              <select value="Não recorrente" disabled>
                <option>Não recorrente</option>
              </select>
            </label>
          </div>
          <p className="form-helper">Exemplo visual apenas. Nenhuma informação é armazenada.</p>
        </section>
      )}

      <section className="panel" aria-labelledby="income-list-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Lista de receitas</p>
            <h2 id="income-list-title">Entradas registradas</h2>
          </div>
          <StatusBadge tone="success">{`${demoProfile.income.length} registros`}</StatusBadge>
        </div>

        {hasIncome ? (
          <div className="data-table" role="table" aria-label="Receitas demonstrativas">
            {demoProfile.income.map((income) => (
              <article className="data-row" role="row" key={income.id}>
                <div>
                  <strong>{income.name}</strong>
                  <span>{income.category} · {income.recurring ? 'Recorrente' : 'Não recorrente'}</span>
                </div>
                <div>
                  <strong>{formatCurrency(income.amount)}</strong>
                  <span>{income.date}</span>
                </div>
                <div className="row-actions" aria-label={`Ações simuladas para ${income.name}`}>
                  <button className="button button--secondary" type="button">Editar</button>
                  <button className="button button--secondary" type="button">Excluir</button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>Nenhuma receita demonstrativa</h3>
            <p>Quando houver entradas fictícias, elas aparecerão aqui para compor o dashboard.</p>
          </div>
        )}
      </section>
    </section>
  );
}
