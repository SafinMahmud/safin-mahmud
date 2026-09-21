import { openSource } from "@/content/opensource";

export function OpenSourceList() {
  return (
    <ol className="divide-y divide-rule">
      {openSource.map((item) => (
        <li key={item.prUrl} className="py-6 first:pt-0 last:pb-0">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-serif text-[1.25rem] tracking-[-0.02em] text-fg">
              {item.project}
              <span className="text-fg-muted"> — {item.org}</span>
            </h3>
            <a
              href={item.prUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-fg underline decoration-rule underline-offset-4 transition-colors duration-150 hover:decoration-fg"
            >
              {item.prLabel}
            </a>
          </div>
          <p className="mt-1 max-w-[40rem] text-[0.9875rem] text-fg-muted">
            {item.oneLiner}
          </p>
          <ul className="mt-3 max-w-[40rem] list-disc space-y-1.5 pl-5 text-[0.9875rem] text-fg">
            {item.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
