export type Engagement = {
  title: string;
  bullets: string[];
};

export type Experience = {
  role: string;
  company?: string;
  dates: string;
  bullets?: string[];
  engagements?: Engagement[];
};

export const experience: Experience[] = [
  {
    role: "Freelance",
    dates: "Jan 2024 – Present",
    engagements: [
      {
        title: "Contract work — TechTrioz",
        bullets: [
          "Integrated SOAP and REST APIs so ERP platforms could exchange data with external services.",
          "Customized FrontAccounting ERP with SQL reports and new API endpoints for client-specific financial and inventory reporting.",
        ],
      },
      {
        title: "Contract work — Akindi",
        bullets: [
          "Led the production Vue 2 → Vue 3 migration on the Akindi platform.",
          "Modernized the frontend architecture and shipped it with zero-downtime deployment.",
        ],
      },
    ],
  },
  {
    role: "Software engineer",
    company: "TechTrioz",
    dates: "Jan 2020 – Jul 2022",
    bullets: [
      "Architected a Django, Vue.js, and PostgreSQL rebate management system that replaced Excel workflows for an SAP ERP client.",
      "Designed a rule engine for rebate calculations on monthly sales data, and an ETL pipeline from SAP into PostgreSQL for financial reporting.",
      "Cut report generation time with query optimization, CTEs, and materialized views, then owned production deployment and ongoing support.",
    ],
  },
];
