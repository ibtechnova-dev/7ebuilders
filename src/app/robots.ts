import type { MetadataRoute } from "next";

const siteUrl = "https://7ebuildersanddevelopers.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
