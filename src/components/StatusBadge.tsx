type StatusBadgeProps = {
  children: string;
  tone?: 'neutral' | 'success' | 'attention' | 'risk' | 'goal' | 'debt';
};

export function StatusBadge({ children, tone = 'neutral' }: StatusBadgeProps) {
  return <span className={`status-badge status-badge--${tone}`}>{children}</span>;
}
