import { experience } from "@/content/experience";

export function ExperienceList() {
  return (
    <ol className="divide-y divide-rule">
      {experience.map((item, index) => (
        <li key={`${item.company}-${item.role}-${index}`} className="py-6 first:pt-0 last:pb-0">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-serif text-[1.25rem] tracking-[-0.02em] text-fg">
              {item.role}
              <span className="text-fg-muted"> — {item.company}</span>
            </h3>
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-fg-muted">
              {item.dates}
            </p>
          </div>
          <ul className="mt-3 max-w-[40rem] list-disc space-y-1.5 pl-5 text-[0.9875rem] text-fg">
            {item.bullets.map((bullet, bulletIndex) => (
              <li key={`${bullet}-${bulletIndex}`}>{bullet}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
