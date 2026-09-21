# Safin Mahmud — portfolio

Personal site. Next.js App Router, TypeScript, Tailwind CSS. Content lives in typed files under `content/` so you can edit copy without touching JSX.

## Setup

Requires Node 20+ and [pnpm](https://pnpm.io/).

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
pnpm lint
pnpm build
```

## How to add a project

1. Add a screenshot (or gif) to `public/projects/` — use a real file with known pixel size.
2. Open [`content/projects.ts`](content/projects.ts) and append an object that matches `Project`:

```ts
{
  title: "Name",
  oneLiner: "One sentence.",
  problem: "What was broken or missing.",
  approach: "What you built, and why that shape.",
  stack: ["Python", "FastAPI"],
  outcome: "What changed. A number if you have one.",
  repoUrl: "https://github.com/you/repo",
  liveUrl: "https://example.com", // omit this key if there is no live demo
  mediaUrl: "/projects/your-shot.png",
  year: 2026,
}
```

3. Do not add `liveUrl` unless the URL works. The UI will not render a Live demo link without it.
4. Stack strings become filter chips. Reuse existing labels when the same tool appears (`FastAPI`, not `fastapi`).

Replace any `TODO_*` constants in `content/` before you treat the site as public. Empty, `null`, or `TODO…` hrefs are not rendered.

## Other content files

| File | What it drives |
| --- | --- |
| [`content/site.ts`](content/site.ts) | Name, positioning line, location, email, GitHub, LinkedIn, resume |
| [`content/projects.ts`](content/projects.ts) | Projects |
| [`content/experience.ts`](content/experience.ts) | Roles and nested freelance engagements |
| [`content/opensource.ts`](content/opensource.ts) | Open source pull requests |
| [`content/education.ts`](content/education.ts) | Degrees and publication |
| [`content/about.ts`](content/about.ts) | Three short paragraphs |

Resume: put a PDF at `public/resume.pdf` and set `site.resumeUrl` to `"/resume.pdf"`. Leave it `null` until the file exists.

Optional: set `NEXT_PUBLIC_SITE_URL` (no trailing slash) so Open Graph URLs and the sitemap use your real domain.

## Theme

Dark is the default. The first visit follows `prefers-color-scheme` when nothing is stored. The toggle writes `theme` to `localStorage`. A blocking script in `app/layout.tsx` applies the class before paint so the wrong theme does not flash.

## Deploy to Vercel

From this directory, with the [Vercel CLI](https://vercel.com/docs/cli):

```bash
pnpm i -g vercel
vercel login
vercel        # preview
vercel --prod # production
```

Or: import the GitHub repo at [vercel.com/new](https://vercel.com/new), framework preset **Next.js**, root directory `.`, build command `pnpm build`, output left default. Add `NEXT_PUBLIC_SITE_URL` as `https://<your-domain>` in the project env vars.

No `vercel.json` is required.
