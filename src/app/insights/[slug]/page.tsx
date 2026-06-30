import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInsight, insights } from "../../../lib/insights";
import { pageMetadata } from "../../../lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return insights.map((insight) => ({
    slug: insight.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);

  if (!insight) {
    return {};
  }

  return pageMetadata({
    title: insight.title,
    description: insight.description,
    path: `/insights/${insight.slug}`,
  });
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const insight = getInsight(slug);

  if (!insight) {
    notFound();
  }

  return (
    <article className="flex-1 w-full bg-white dark:bg-brand-deep pt-24">
      <section className="bg-brand-navy text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#b8955a_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold">
            Insight Draft
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            {insight.title}
          </h1>
          <p className="text-zinc-400 text-base max-w-xl mx-auto">
            {insight.description}
          </p>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-brand-deep">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-left flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-brand-navy dark:text-white">
            Article placeholder
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
            Add the final long-form article copy here. This route is ready for SEO metadata,
            canonical output, sitemap inclusion, and future article schema.
          </p>
        </div>
      </section>
    </article>
  );
}
