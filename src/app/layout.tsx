import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { jsonLdScript, organizationJsonLd, siteUrl } from "../lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "7E Builders Islamabad Real Estate Developers",
    template: "%s",
  },
  description:
    "7E Builders & Developers is an Islamabad construction company and real estate developer serving Islamabad and Lahore.",
  keywords: [
    "7E Builders",
    "7E Developers",
    "7E Builders and Developers",
    "7E Builder and Developer",
    "7E Developer",
    "7EBuilder",
    "7EDeveloper",
    "7EBuildersandDevelopers",
    "7e builders and developers",
    "7e builder and developer",
    "7e developer",
    "Tahseen Satti",
    "Tahseen Asghar",
    "Muhammad Tahseen Asghar",
    "Tahseen Satti CEO",
    "Tahseen Asghar CEO",
    "7E CEO",
    "real estate developers Islamabad",
    "builders and developers Pakistan",
  ],
  applicationName: "7E Builders & Developers",
  authors: [{ name: "7E Builders & Developers" }],
  creator: "7E Builders & Developers",
  publisher: "7E Builders & Developers",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "7E Builders Islamabad Real Estate Developers",
    description:
      "Official website of 7E Builders & Developers, an Islamabad construction company and real estate developer.",
    url: siteUrl,
    siteName: "7E Builders & Developers",
    images: [
      {
        url: "/logo7e-coded.svg",
        width: 180,
        height: 120,
        alt: "7E Builders & Developers logo",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "7E Builders Islamabad Real Estate Developers",
    description:
      "7E Builders & Developers is an Islamabad construction company and real estate developer.",
    images: ["/logo7e-coded.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col justify-between" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(organizationJsonLd)}
        />
        <Header />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

