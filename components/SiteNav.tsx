"use client";

import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#experience", id: "experience", label: "Experience" },
  { href: "#projects", id: "projects", label: "Projects" },
  { href: "#open-source", id: "open-source", label: "Open source" },
  { href: "#education", id: "education", label: "Education" },
  { href: "#contact", id: "contact", label: "Contact" },
] as const;

function navigateWithTransition(
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
  id: string,
): boolean {
  if (
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return false;
  }

  const target = document.getElementById(id);
  const transitionDocument = document as Document & {
    startViewTransition?: (callback: () => void) => unknown;
  };

  if (
    !target ||
    !transitionDocument.startViewTransition ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return true;
  }

  event.preventDefault();
  transitionDocument.startViewTransition(() => {
    window.history.pushState(window.history.state, "", href);
    target.scrollIntoView({ behavior: "instant", block: "start" });
  });
  return true;
}

export function SiteNav() {
  const [current, setCurrent] = useState<string | null>(null);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.3;
      let active: string | null = null;
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= line) active = section.id;
      }
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      setCurrent(atBottom ? sections[sections.length - 1].id : active);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const currentIndex = links.findIndex((link) => link.id === current);

  return (
    <div className="site-nav flex items-center justify-between gap-3 border-b border-rule bg-bg py-3">
      <div className="hidden shrink-0 items-baseline gap-3 sm:flex">
        <a
          href="#top"
          className="font-serif text-[0.9375rem] tracking-[-0.02em] text-fg no-underline"
        >
          Safin Mahmud
        </a>
        {currentIndex >= 0 ? (
          <span
            key={current}
            className="folio font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-fg-muted"
          >
            {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(links.length).padStart(2, "0")}
          </span>
        ) : null}
      </div>
      <nav aria-label="Page sections" className="min-w-0 flex-1 sm:flex-none">
        <ul className="flex flex-wrap items-center justify-start gap-x-3 gap-y-1 sm:justify-end sm:gap-x-4">
          {links.map((link) => {
            const isCurrent = current === link.id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(event) => {
                    if (navigateWithTransition(event, link.href, link.id)) {
                      setCurrent(link.id);
                    }
                  }}
                  aria-current={isCurrent ? "location" : undefined}
                  className={[
                    "nav-link font-mono text-[0.6875rem] uppercase tracking-[0.08em] no-underline",
                    isCurrent
                      ? "is-active text-accent"
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
