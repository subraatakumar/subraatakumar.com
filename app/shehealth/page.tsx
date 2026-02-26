import Link from "next/link";
import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "She Health",
  description:
    "She Health is a women-first health platform concept focused on personalized care journeys, secure data handling, and privacy-aware tracking.",
  alternates: {
    canonical: "/shehealth",
  },
  openGraph: {
    title: "She Health | Project by Subrata Kumar Das",
    description:
      "Women-first health platform concept focused on personalized care, secure data handling, and privacy-aware tracking.",
    url: "/shehealth",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "She Health | Project by Subrata Kumar Das",
    description:
      "Women-first health platform concept focused on personalized care, secure data handling, and privacy-aware tracking.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function SheHealthPage() {
  return (
    <section className="prose mx-auto">
      <h1>She Health</h1>
      <p>
        She Health is a women-first health platform concept designed around
        personalized care journeys, secure health records, and practical daily tracking.
      </p>
      <h2>Project Focus</h2>
      <p>
        The product direction prioritizes privacy-first architecture, simple onboarding,
        and clear longitudinal tracking so users can understand trends over time.
      </p>
      <h2>Current Status</h2>
      <p>
        This page is an overview entry in the project portfolio and represents
        the product concept and architecture intent.
      </p>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "She Health",
            applicationCategory: "HealthApplication",
            operatingSystem: "iOS, Android",
            description:
              "Women-first health platform concept focused on personalized care journeys, secure data handling, and privacy-aware tracking.",
            url: absoluteUrl("/shehealth"),
            author: {
              "@type": "Person",
              name: "Subrata Kumar Das",
            },
          }),
        }}
      />

      <p className="mt-6">
        <Link href="/projects" className="text-sm text-blue-600">← Back to Projects</Link>
      </p>
    </section>
  );
}
