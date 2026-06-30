import type { Metadata } from "next";
import { faqs } from "../../lib/faq";
import { jsonLdScript, pageMetadata } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "7E Builders FAQ Islamabad",
  description:
    "Answers about 7E Builders & Developers, CEO Tahseen Satti, Islamabad and Lahore service areas, experience, and construction projects.",
  path: "/faq",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <div className="flex-1 w-full bg-white dark:bg-brand-deep pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(faqJsonLd)}
      />
      <section className="bg-brand-navy text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#b8955a_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold">
            Frequently Asked Questions
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            7E Builders FAQ
          </h1>
          <p className="text-zinc-400 text-base max-w-xl mx-auto">
            Direct answers about 7E Builders &amp; Developers in Islamabad and Lahore.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-brand-deep">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="p-8 rounded-xl bg-zinc-50 dark:bg-brand-dark-navy border border-zinc-100 dark:border-zinc-800 text-left flex flex-col gap-3"
            >
              <h2 className="text-xl font-bold text-brand-navy dark:text-white">
                {faq.question}
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
