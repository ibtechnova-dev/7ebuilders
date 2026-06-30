import type { Metadata } from "next";

export const siteUrl = "https://7ebuildersanddevelopers.com";

export const company = {
  name: "7E Builders & Developers",
  legalName: "7E Builders & Developers (Pvt) Ltd",
  url: siteUrl,
  logo: `${siteUrl}/logo7e-coded.svg`,
  email: "ceo@7ebuildersanddevelopers.com",
  phone: "+92 300 5309701",
  foundingDate: "2011",
  address: {
    streetAddress: "Office No.1 Building 7E Lehtrar Road, Thandapani",
    addressLocality: "Islamabad",
    addressCountry: "PK",
    full: "Office No.1 Building 7E Lehtrar Road, Thandapani, Islamabad",
  },
  leaders: {
    ceo: {
      name: "Muhammad Tahseen Asghar",
      alternateName: "Tahseen Satti",
      jobTitle: "Chairman & CEO",
    },
    md: {
      name: "Bilal Satti",
      jobTitle: "Managing Director",
    },
  },
};

export const ceoSocialProfiles = [
  "https://www.facebook.com/share/14wTQyQyPKq/",
  "https://www.instagram.com/tahseensatti/",
  "https://www.tiktok.com/@tahseen_satti",
];

export const ceoPersonJsonLd = {
  "@type": "Person",
  "@id": `${siteUrl}/#tahseen-satti`,
  name: company.leaders.ceo.name,
  alternateName: company.leaders.ceo.alternateName,
  jobTitle: company.leaders.ceo.jobTitle,
  sameAs: ceoSocialProfiles,
};

export function jsonLdScript(data: unknown) {
  return {
    __html: JSON.stringify(data).replace(/</g, "\\u003c"),
  };
}

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const canonical = path === "/" ? "/" : path;
  const url = `${siteUrl}${path === "/" ? "" : path}`;

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: company.name,
      locale: "en_PK",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: company.name,
      legalName: company.legalName,
      alternateName: [
        "7E Developers",
        "7E Builders and Developers",
        "7E Builder and Developer",
        "7EBuildersandDevelopers",
      ],
      url: company.url,
      logo: company.logo,
      foundingDate: company.foundingDate,
      sameAs: [],
      founder: [
        ceoPersonJsonLd,
        {
          "@type": "Person",
          name: company.leaders.md.name,
          jobTitle: company.leaders.md.jobTitle,
        },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: company.phone,
        email: company.email,
        contactType: "customer service",
        areaServed: ["Islamabad", "Lahore", "Pakistan"],
        availableLanguage: ["en", "ur"],
      },
    },
    {
      "@type": ["LocalBusiness", "GeneralContractor"],
      "@id": `${siteUrl}/#localbusiness`,
      name: company.name,
      url: company.url,
      image: company.logo,
      logo: company.logo,
      telephone: company.phone,
      email: company.email,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: company.address.streetAddress,
        addressLocality: company.address.addressLocality,
        addressCountry: company.address.addressCountry,
      },
      areaServed: [
        {
          "@type": "City",
          name: "Islamabad",
        },
        {
          "@type": "City",
          name: "Lahore",
        },
      ],
      parentOrganization: {
        "@id": `${siteUrl}/#organization`,
      },
      founder: {
        "@id": `${siteUrl}/#tahseen-satti`,
      },
      // TODO: Add verified latitude/longitude when available.
      // geo: { "@type": "GeoCoordinates", latitude: "", longitude: "" },
    },
  ],
};
