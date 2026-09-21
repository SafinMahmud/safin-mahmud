import { education, publication } from "@/content/education";

export function EducationList() {
  return (
    <div>
      <ol className="divide-y divide-rule">
        {education.map((item) => (
          <li key={item.credential} className="py-6 first:pt-0">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-serif text-[1.25rem] tracking-[-0.02em] text-fg">
                {item.credential}
              </h3>
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-fg-muted">
                {item.dates}
              </p>
            </div>
            <p className="mt-1 max-w-[40rem] text-[0.9875rem] text-fg-muted">
              {item.school}
            </p>
          </li>
        ))}
      </ol>
      <article className="border-t border-rule py-6">
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-fg-muted">
          Publication
        </p>
        <h3 className="mt-2 max-w-[40rem] font-serif text-[1.25rem] tracking-[-0.02em] text-fg">
          <a
            href={publication.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-rule underline-offset-4 transition-colors duration-150 hover:decoration-fg"
          >
            {publication.title}
          </a>
        </h3>
        <p className="mt-2 font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-fg-muted">
          {publication.venue} · {publication.year}
        </p>
      </article>
    </div>
  );
}
