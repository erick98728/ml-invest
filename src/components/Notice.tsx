type NoticeProps = {
  title: string;
  children: string;
};

export function Notice({ title, children }: NoticeProps) {
  return (
    <aside className="notice" aria-label={title}>
      <strong>{title}</strong>
      <p>{children}</p>
    </aside>
  );
}
