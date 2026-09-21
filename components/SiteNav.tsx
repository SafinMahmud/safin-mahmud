"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#experience", id: "experience", label: "Experience" },
  { href: "#work", id: "work", label: "Work" },
  { href: "#about", id: "about", label: "About" },
  { href: "#contact", id: "contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [current, setCurrent] = useState<string | null>(null);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setCurrent(visible.target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5] },
    );

    for (const section of sections) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex items-center justify-between gap-3 border-b border-rule bg-bg py-3">
      <a
        href="#top"
        className="hidden shrink-0 font-serif text-[0.9375rem] tracking-[-0.02em] text-fg no-underline sm:inline"
      >
        Safin Mahmud
      </a>
      <nav aria-label="Page sections" className="min-w-0 flex-1 sm:flex-none">
        <ul className="flex flex-wrap items-center justify-start gap-x-3 gap-y-1 sm:justify-end sm:gap-x-4">
          {links.map((link) => {
            const isCurrent = current === link.id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isCurrent ? "location" : undefined}
                  className={[
                    "font-mono text-[0.6875rem] uppercase tracking-[0.08em] no-underline transition-colors duration-150",
                    isCurrent
                      ? "text-accent"
                      : "text-fg-muted hover:text-fg",
                  ].join(" ")}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </div>
  );
}
