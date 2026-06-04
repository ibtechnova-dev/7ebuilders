import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const siteUrl = "https://7ebuildersanddevelopers.com";

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
    default: "7E Builders & Developers | CEO Tahseen Satti",
    template: "%s | 7E Builders & Developers",
  },
  description:
    "7E Builders & Developers (Pvt) Ltd is a real estate construction and development company in Islamabad and Lahore, led by Chairman & CEO Muhammad Tahseen Asghar, also known as Tahseen Satti.",
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
    title: "7E Builders & Developers | CEO Tahseen Satti",
    description:
      "Official website of 7E Builders & Developers, led by Chairman & CEO Muhammad Tahseen Asghar, also known as Tahseen Satti.",
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
    title: "7E Builders & Developers | CEO Tahseen Satti",
    description:
      "7E Builders & Developers is led by Chairman & CEO Muhammad Tahseen Asghar, also known as Tahseen Satti.",
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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "7E Builders & Developers",
  alternateName: [
    "7E Developers",
    "7E Builder and Developer",
    "7E Builders and Developers",
    "7EBuildersandDevelopers",
  ],
  url: siteUrl,
  logo: `${siteUrl}/logo7e-coded.svg`,
  email: "ceo@7ebuildersanddevelopers.com",
  telephone: "+92 300 5309701",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Office No.1 Building 7E Lehtrar Road, Thandapani",
    addressLocality: "Islamabad",
    addressCountry: "PK",
  },
  founder: {
    "@type": "Person",
    name: "Muhammad Tahseen Asghar",
    alternateName: ["Tahseen Satti", "Tahseen Asghar"],
    jobTitle: "Chairman & CEO",
  },
  employee: {
    "@type": "Person",
    name: "Muhammad Tahseen Asghar",
    alternateName: ["Tahseen Satti", "Tahseen Asghar"],
    jobTitle: "Chairman & CEO",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

