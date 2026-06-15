type FinancialCardProps = {
  title: string;
  value: string;
  description: string;
  tone?: 'neutral' | 'income' | 'expense' | 'debt' | 'goal' | 'positive' | 'attention' | 'risk';
};

export function FinancialCard({ title, value, description, tone = 'neutral' }: FinancialCardProps) {
  return (
    <article className={`financial-card financial-card--${tone}`}>
      <span className="financial-card__label">{title}</span>
      <strong className="financial-card__value">{value}</strong>
      <p>{description}</p>
    </article>
  );
}
