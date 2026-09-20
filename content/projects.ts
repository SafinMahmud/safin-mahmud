export const TODO_METRIC = "TODO_METRIC";
export const TODO_MEDIA = "/projects/todo-media.png";

export type Project = {
  title: string;
  oneLiner: string;
  problem: string;
  approach: string;
  stack: string[];
  outcome: string;
  repoUrl: string;
  liveUrl?: string;
  mediaUrl: string;
  year: number;
};

export const projects: Project[] = [
  {
    title: "OTel Config Copilot",
    oneLiner:
      "An agent that searches OpenTelemetry Collector docs and validates processor order in pipeline YAML.",
    problem:
      "Collector configs are error-prone because processor order is semantically meaningful and YAML will not enforce it. memory_limiter must come first; a Collector will happily start with that reversed.",
    approach:
      "Three Python modules share one implementation: an in-process knowledge base with hybrid retrieval (TF-IDF plus exact component routing), the same functions exposed as MCP tools, and a Gemini tool-use loop. A FastAPI + React skin wraps the agent for a browser demo. Exact-match routing exists because TF-IDF length-normalization ranked a 5-token cheat sheet above the limiter guide for single-word queries.",
    stack: ["Python", "FastAPI", "React", "Gemini", "MCP", "RAG"],
    outcome: TODO_METRIC,
    repoUrl: "https://github.com/SafinMahmud/otel-config-copilot",
    mediaUrl: TODO_MEDIA,
    year: 2026,
  },
  {
    title: "Ontario Job Finder",
    oneLiner:
      "A personal tracker for Ontario and remote-Canada software roles sourced from company ATS boards, not job aggregators.",
    problem:
      "Aggregator listings mix geographies and seniority, and they hide that the apply URL is a third-party page. I needed a list I could trust: company career boards only, Ontario or remote-Canada, software-engineer titles.",
    approach:
      "A Python scraper polls public Greenhouse, Lever, Ashby, and Workday boards from a maintained company list, then keeps postings that pass role, location, and posted-date filters. FastAPI serves the data; a React dashboard is the reading surface. Apply URLs stay on the company's ATS.",
    stack: ["Python", "FastAPI", "React", "PostgreSQL", "Supabase"],
    outcome: TODO_METRIC,
    repoUrl: "https://github.com/SafinMahmud/job-tracker",
    mediaUrl: TODO_MEDIA,
    year: 2026,
  },
  {
    title: "Ontario Market X-Ray",
    oneLiner:
      "A discovery-only auto-insurance market-access auditor built for the MyChoice Ontario All-Quote Agent Challenge.",
    problem:
      "A participant without an Ontario driver's licence still had to map how quotes are actually obtained: which brands, underwriters, and distributors are distinct, and where each public journey stops.",
    approach:
      "The agent runs in discovery_only mode. Playwright opens official public pages, fills allowed fields (postal, vehicle — never licence), records where the journey stops, and writes an evidence-backed Quote Readiness Passport. It does not invent licence information, bypass access controls, or present estimates as firm quotes.",
    stack: ["TypeScript", "Node.js", "Playwright"],
    outcome: TODO_METRIC,
    repoUrl: "https://github.com/SafinMahmud/ontario-market-xray",
    mediaUrl: TODO_MEDIA,
    year: 2026,
  },
  {
    title: "Product SaaS Dashboard",
    oneLiner:
      "A take-home product management dashboard with role-based access and AI-assisted descriptions and filters.",
    problem:
      "The brief asked for an authenticated mini-SaaS where admins and viewers manage products, see analytics, and stay inside their role — plus optional AI for descriptions, categories, and natural-language dashboard filtering.",
    approach:
      "Next.js App Router with Firebase Auth and Firestore for users, products, and roles. Vercel AI SDK (optional Groq key) generates descriptions and category suggestions and parses natural-language filter queries. Access is enforced by role, not by hiding buttons.",
    stack: ["Next.js", "TypeScript", "Firebase", "React"],
    outcome: TODO_METRIC,
    repoUrl: "https://github.com/SafinMahmud/product-saas-dashboard",
    mediaUrl: TODO_MEDIA,
    year: 2026,
  },
];
