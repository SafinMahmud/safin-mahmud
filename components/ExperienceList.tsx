import { experience } from "@/content/experience";

export function ExperienceList() {
  return (
    <ol className="divide-y divide-rule">
      {experience.map((item, index) => (
        <li
          key={`${item.role}-${item.company ?? "group"}-${index}`}
          className="py-6 first:pt-0 last:pb-0"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-serif text-[1.25rem] tracking-[-0.02em] text-fg">
              {item.role}
              {item.company ? (
                <span className="text-fg-muted"> — {item.company}</span>
              ) : null}
            </h3>
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-fg-muted">
              {item.dates}
            </p>
          </div>
          {item.engagements ? (
            <ol className="mt-5 space-y-5">
              {item.engagements.map((engagement) => (
                <li key={engagement.title}>
                  <h4 className="font-serif text-[1.0625rem] tracking-[-0.02em] text-fg">
                    {engagement.title}
                  </h4>
                  <ul className="mt-2 max-w-[40rem] list-disc space-y-1.5 pl-5 text-[0.9875rem] text-fg">
                    {engagement.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          ) : null}
          {item.bullets ? (
            <ul className="mt-3 max-w-[40rem] list-disc space-y-1.5 pl-5 text-[0.9875rem] text-fg">
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
