import { site } from "@/content/site";
import { isRenderableHref } from "@/lib/links";
import { CopyEmail } from "./CopyEmail";

export function Contact() {
  if (!isRenderableHref(site.email)) {
    return <p className="text-fg-muted">TODO_EMAIL</p>;
  }

  return (
    <div>
      <a
        href={`mailto:${site.email}`}
        className="font-serif text-[1.5rem] tracking-[-0.02em] text-fg underline decoration-rule underline-offset-4 transition-colors duration-150 hover:decoration-fg md:text-[1.75rem]"
      >
        {site.email}
      </a>
      <div className="mt-4">
        <CopyEmail email={site.email} />
      </div>
    </div>
  );
}
