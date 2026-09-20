"use client";

type StackFilterProps = {
  tags: string[];
  active: string | null;
  onChange: (tag: string | null) => void;
};

export function StackFilter({ tags, active, onChange }: StackFilterProps) {
  return (
    <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter by stack">
      <button
        type="button"
        onClick={() => onChange(null)}
        aria-pressed={!active}
        className={chipClass(!active)}
      >
        All
      </button>
      {tags.map((tag) => {
        const isActive = active === tag;
        return (
          <button
            key={tag}
            type="button"
            onClick={() => onChange(isActive ? null : tag)}
            aria-pressed={isActive}
            className={chipClass(isActive)}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
}

export function chipClass(active: boolean) {
  return [
    "font-mono text-[0.6875rem] uppercase tracking-[0.08em] border px-2 py-1 transition-colors duration-150",
    active
      ? "border-accent bg-accent text-bg"
      : "border-rule bg-chip text-fg-muted hover:border-fg-muted hover:text-fg",
  ].join(" ");
}
