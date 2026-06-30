export type Insight = {
  slug: string;
  title: string;
  description: string;
  date: string;
};

export const insights: Insight[] = [
  {
    slug: "construction-cost-per-marla-islamabad-2026",
    title: "Construction Cost Per Marla in Islamabad 2026",
    description:
      "A placeholder guide for future construction cost research, materials, labor, and real estate planning in Islamabad.",
    date: "2026-01-01",
  },
  {
    slug: "how-to-verify-builder-cda-approval",
    title: "How to Verify a Builder's CDA Approval",
    description:
      "A placeholder checklist for verifying builder approvals, documentation, and project credibility in Islamabad.",
    date: "2026-01-01",
  },
];

export function getInsight(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}
