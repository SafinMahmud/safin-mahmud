import Image from "next/image";
import { site } from "@/content/site";
import { isRenderableHref } from "@/lib/links";

export function SiteHeader() {
  const links = [
    isRenderableHref(site.githubUrl)
      ? { href: site.githubUrl, label: "GitHub", external: true }
      : null,
    isRenderableHref(site.linkedinUrl)
      ? { href: site.linkedinUrl, label: "LinkedIn", external: true }
      : null,
    isRenderableHref(site.email)
      ? { href: `mailto:${site.email}`, label: "Email", external: false }
      : null,
    isRenderableHref(site.resumeUrl)
      ? { href: site.resumeUrl, label: "Resume", external: true }
      : null,
  ].filter((link) => link !== null);

  return (
    <header className="border-b border-rule pb-10 pt-8 md:pb-14 md:pt-12">
      <div
        className={[
          "grid items-start gap-8",
          site.profileImage ? "sm:grid-cols-[minmax(0,1fr)_11rem]" : "",
        ].join(" ")}
      >
        <div>
          <p className="intro-reveal font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-fg-muted">
            {site.location}
          </p>
          <h1 className="intro-reveal intro-delay-1 mt-4 font-serif text-[2.5rem] font-normal leading-[1.05] tracking-[-0.03em] text-fg md:text-[4rem]">
            {site.name}
          </h1>
          <p className="intro-reveal intro-delay-2 mt-5 max-w-[40rem] text-[1.0625rem] leading-relaxed text-fg md:text-[1.125rem]">
            {site.positioning}
          </p>
        </div>
        {site.profileImage ? (
          <div className="intro-reveal intro-delay-2 relative aspect-[2/3] w-40 overflow-hidden border border-rule bg-bg-elev sm:w-full">
            <Image
              src={site.profileImage}
              alt={site.profileImageAlt}
              fill
              priority
              sizes="(max-width: 640px) 160px, 176px"
              className="object-cover"
            />
          </div>
        ) : null}
      </div>
      {links.length > 0 ? (
        <ul className="intro-reveal intro-delay-3 mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-rule pt-5">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-fg underline decoration-rule underline-offset-4 transition-colors duration-150 hover:decoration-fg"
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}
