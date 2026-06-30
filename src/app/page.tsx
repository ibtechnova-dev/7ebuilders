import type { Metadata } from "next";
import { HomeScreen } from "../screens/HomeScreen";
import { pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "7E Builders Islamabad Real Estate Developers",
  description:
    "Islamabad construction company and real estate developers building residential projects, villas, and communities across Islamabad and Lahore.",
  path: "/",
});

export default function Home() {
  return <HomeScreen />;
}

