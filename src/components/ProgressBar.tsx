type ProgressBarProps = {
  label: string;
  value: number;
};

export function ProgressBar({ label, value }: ProgressBarProps) {
  const safeValue = Math.min(Math.max(value, 0), 100);

  return (
    <div className="progress" aria-label={`${label}: ${Math.round(safeValue)}%`}>
      <div className="progress__header">
        <span>{label}</span>
        <strong>{Math.round(safeValue)}%</strong>
      </div>
      <div className="progress__track" aria-hidden="true">
        <span className="progress__bar" style={{ width: `${safeValue}%` }} />
      </div>
    </div>
  );
}
