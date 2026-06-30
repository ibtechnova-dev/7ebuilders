import type { Metadata } from "next";
import { ContactScreen } from "../../screens/ContactScreen";
import { pageMetadata } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact 7E Builders Islamabad",
  description:
    "Contact 7E Builders & Developers in Islamabad for construction company services, real estate projects, site visits, and investment inquiries.",
  path: "/contact",
});

export default function Contact() {
  return <ContactScreen />;
}
