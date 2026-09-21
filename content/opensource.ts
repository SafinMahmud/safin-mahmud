export type OpenSource = {
  project: string;
  org: string;
  oneLiner: string;
  bullets: string[];
  prUrl: string;
  prLabel: string;
};

export const openSource: OpenSource[] = [
  {
    project: "Sentry",
    org: "getsentry/sentry",
    oneLiner:
      "Production monitoring used by millions of developers to track application errors, performance, and uptime.",
    bullets: [
      "Shipped a React and TypeScript fix to Explore, adding a !has filter for drilling down into error data.",
    ],
    prUrl: "https://github.com/getsentry/sentry/pull/110404",
    prLabel: "PR #110404",
  },
  {
    project: "PostHog",
    org: "PostHog/posthog",
    oneLiner: "Product analytics and the rest of the PostHog developer platform.",
    bullets: [
      "Merged a React cohort-criteria fix that wraps flat API responses into the nested group format the UI expects.",
    ],
    prUrl: "https://github.com/PostHog/posthog/pull/51697",
    prLabel: "PR #51697",
  },
];
