import { StatusBadge } from '../components/StatusBadge';

type PlaceholderPageProps = {
  title: string;
  eyebrow: string;
  description: string;
  items: string[];
};

export function PlaceholderPage({ title, eyebrow, description, items }: PlaceholderPageProps) {
  return (
    <section className="page-shell placeholder-page" aria-labelledby="active-page-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1 id="active-page-title">{title}</h1>
        </div>
        <StatusBadge>Em preparação</StatusBadge>
      </div>

      <p className="page-intro">{description}</p>

      <ul className="clean-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
