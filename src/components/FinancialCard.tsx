type FinancialCardProps = {
  title: string;
  value: string;
  description: string;
  tone?: 'neutral' | 'positive' | 'attention';
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
