import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProject, projects } from "../../../lib/projects";
import { jsonLdScript, pageMetadata, siteUrl } from "../../../lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return pageMetadata({
    title: `${project.name} ${project.location}`,
    description: `${project.name} is ${project.status === "Ongoing" ? "an" : "a"} ${project.status.toLowerCase()} residential project in ${project.location} by 7E Builders & Developers.`,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: project.name,
    url: `${siteUrl}/projects/${project.slug}`,
    image: `${siteUrl}${project.image}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: project.location,
      addressCountry: "PK",
    },
    description: project.description,
    additionalProperty: {
      "@type": "PropertyValue",
      name: "Project status",
      value: project.status,
    },
  };

  return (
    <article className="flex-1 w-full bg-white dark:bg-brand-deep pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(projectJsonLd)}
      />
      <section className="bg-brand-navy text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#b8955a_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold">
            {project.location}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            {project.name}
          </h1>
          <p className="text-zinc-400 text-base max-w-xl mx-auto">
            {project.description}
          </p>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-brand-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div className="flex flex-col gap-6 text-left">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              {project.status} {project.category} Project
            </span>
            <h2 className="text-3xl font-bold text-brand-navy dark:text-white">
              {project.name} in {project.location}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
