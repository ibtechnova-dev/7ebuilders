import type { Metadata } from "next";
import { AboutScreen } from "../../screens/AboutScreen";
import { pageMetadata } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About 7E Builders Islamabad & Lahore",
  description:
    "Learn about 7E Builders & Developers, an Islamabad and Lahore real estate development and construction company led by Tahseen Satti.",
  path: "/about",
});

export default function About() {
  return <AboutScreen />;
}
