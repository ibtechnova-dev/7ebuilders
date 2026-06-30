import type { Metadata } from "next";
import { ProjectsScreen } from "../../screens/ProjectsScreen";
import { jsonLdScript, pageMetadata, siteUrl } from "../../lib/seo";
import { projects } from "../../lib/projects";

export const metadata: Metadata = pageMetadata({
  title: "Projects by 7E Builders Islamabad",
  description:
    "Explore Islamabad real estate projects by 7E Builders & Developers, including Vista Valley, Prime Enclave, Bahria Enclave, and Royal Homes.",
  path: "/projects",
});

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Projects by 7E Builders & Developers",
  url: `${siteUrl}/projects`,
  hasPart: projects.map((project) => ({
    "@type": "Residence",
    name: project.name,
    url: `${siteUrl}/projects/${project.slug}`,
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
  })),
};

export default function Projects() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(collectionJsonLd)}
      />
      <ProjectsScreen />
    </>
  );
}
