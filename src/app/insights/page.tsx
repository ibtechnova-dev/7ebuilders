import type { Metadata } from "next";
import Link from "next/link";
import { insights } from "../../lib/insights";
import { pageMetadata } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "7E Builders Insights Pakistan",
  description:
    "Future real estate and construction insights from 7E Builders for Islamabad and Pakistan, including costs, approvals, and builder checks.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <div className="flex-1 w-full bg-white dark:bg-brand-deep pt-24">
      <section className="bg-brand-navy text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#b8955a_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold">
            Insights
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Real Estate &amp; Construction Insights
          </h1>
          <p className="text-zinc-400 text-base max-w-xl mx-auto">
            Placeholder article structure for future Islamabad construction and property guides.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-brand-deep">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {insights.map((insight) => (
            <Link
              key={insight.slug}
              href={`/insights/${insight.slug}`}
              className="p-8 rounded-xl bg-zinc-50 dark:bg-brand-dark-navy border border-zinc-100 dark:border-zinc-800 text-left flex flex-col gap-4 transition-all duration-300 hover:shadow-xl"
            >
              <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">
                {new Date(insight.date).getFullYear()}
              </span>
              <h2 className="text-2xl font-bold text-brand-navy dark:text-white">
                {insight.title}
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                {insight.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
