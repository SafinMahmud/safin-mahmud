export type Project = {
  title: string;
  oneLiner: string;
  problem: string;
  approach: string;
  stack: string[];
  outcome: string;
  repoUrl?: string;
  liveUrl?: string;
  mediaUrl?: string;
  mediaWidth?: number;
  mediaHeight?: number;
  year: number;
};

export const projects: Project[] = [
  {
    title: "SOC Copilot",
    oneLiner:
      "An AI SOC assistant for the Splunk AI Hackathon: natural-language SPL, autonomous investigations, and MITRE-mapped incident reports.",
    problem:
      "SOC analysts spend hours pivoting across logs, writing SPL, and documenting findings. A high-severity alert still means manual search, correlation, timeline, and write-up.",
    approach:
      "A Next.js chat UI talks to a FastAPI backend. Query mode turns English into Splunk SPL and shows the exact search. Investigate mode runs a deterministic multi-query playbook against Splunk, then Foundation-Sec (via Ollama) synthesizes severity, timeline, MITRE ATT&CK mapping, and remediation. Evidence comes from Splunk, not invented attack data. The stack ran on GCP (Cloud Run + Splunk/Ollama VMs).",
    stack: ["Next.js", "FastAPI", "Splunk", "Ollama", "Python", "GCP"],
    outcome:
      "Built for the Splunk AI Hackathon (Security Track). Demo video and source are public; the copilot returns structured incident reports from live Splunk searches.",
    repoUrl: "https://github.com/SafinMahmud/soc-copilot",
    liveUrl: "https://youtu.be/RzBp3Caarh8",
    mediaUrl: "/projects/soc-copilot.jpg",
    mediaWidth: 1280,
    mediaHeight: 720,
    year: 2026,
  },
  {
    title: "Contract work — TechTrioz",
    oneLiner:
      "SOAP/REST interoperability and FrontAccounting ERP customizations for enterprise clients, plus the rebate platform that replaced Excel at an SAP shop.",
    problem:
      "Clients needed ERP systems to talk to outside services, and one SAP customer was still calculating rebates in spreadsheets.",
    approach:
      "On the 2024–2025 contract I integrated third-party SOAP and REST APIs and extended FrontAccounting with custom SQL reports and API endpoints. Earlier, I designed a Django / Vue / PostgreSQL rebate management system with a rule engine and an SAP-to-Postgres ETL pipeline so monthly reporting no longer lived in Excel.",
    stack: ["Django", "Vue.js", "PostgreSQL", "SOAP", "REST", "SAP"],
    outcome:
      "ERP platforms exchanged data with external services through the new APIs, and the rebate system automated monthly calculations and reporting for the SAP client.",
    year: 2025,
  },
  {
    title: "AI Interview Coach",
    oneLiner:
      "An interview prep app that turns a CV and job description into questions, then scores spoken or typed answers.",
    problem:
      "Practice interviews are generic. I wanted questions that actually come from my CV and a real JD, with a way to answer out loud and get structured notes back.",
    approach:
      "FastAPI generates technical, behavioral, and CV-specific questions via a swappable LLM provider (Groq, OpenAI, or Anthropic). The React/Next-style frontend records answers; Whisper (Groq API or local faster-whisper) transcribes voice. A scoring pass looks at relevance, clarity, STAR, and filler words, and sessions persist in SQLite/Supabase.",
    stack: ["FastAPI", "React", "OpenAI", "Whisper", "Supabase", "Vercel"],
    outcome:
      "End-to-end flow: upload CV, paste a JD, sit a session, and compare scores in history. Frontend on Vercel, API on Render when deployed.",
    repoUrl: "https://github.com/SafinMahmud/ai-interview-coach",
    mediaUrl: "/projects/ai-interview-coach.png",
    mediaWidth: 1280,
    mediaHeight: 800,
    year: 2026,
  },
  {
    title: "Ontario Market X-Ray",
    oneLiner:
      "A discovery-only auto-insurance market-access auditor, built for the MyChoice Ontario All-Quote Agent Challenge hackathon.",
    problem:
      "A participant without an Ontario driver's licence still had to map how quotes are actually obtained: which brands, underwriters, and distributors are distinct, and where each public journey stops.",
    approach:
      "Hackathon constraint: discovery_only mode. Playwright opens official public pages, fills allowed fields (postal, vehicle — never licence), records where the journey stops, and writes an evidence-backed Quote Readiness Passport. It does not invent licence information, bypass access controls, or present estimates as firm quotes.",
    stack: ["TypeScript", "Next.js", "Playwright"],
    outcome:
      "Submitted to the MyChoice Ontario All-Quote Agent Challenge. The app maps distinct rate sources and shows, with screenshots, where each public quote journey stops.",
    repoUrl: "https://github.com/SafinMahmud/ontario-market-xray",
    mediaUrl: "/projects/ontario-market-xray.png",
    mediaWidth: 1280,
    mediaHeight: 800,
    year: 2026,
  },
];
