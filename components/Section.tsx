type SectionProps = {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
};

export function Section({ id, index, title, children }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="grid scroll-mt-16 grid-cols-1 content-start border-b border-rule py-10 md:grid-cols-[9rem_minmax(0,1fr)] md:gap-10 md:py-14"
    >
      <header className="mb-6 md:mb-0 md:border-r md:border-rule md:pr-6">
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-fg-muted">
          {index}
        </p>
        <h2
          id={headingId}
          className="mt-2 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-fg"
        >
          {title}
        </h2>
      </header>
      <div className="min-w-0">{children}</div>
    </section>
  );
}
