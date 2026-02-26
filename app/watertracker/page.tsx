import Link from "next/link";
import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Water Tracker",
  description:
    "Water Tracker is a hydration app concept for daily intake logging, reminders, and trend visibility with a clean mobile-first experience.",
  alternates: {
    canonical: "/watertracker",
  },
  openGraph: {
    title: "Water Tracker | Project by Subrata Kumar Das",
    description:
      "Hydration app concept for daily intake logging, reminders, and trend visibility with a mobile-first UX.",
    url: "/watertracker",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Water Tracker | Project by Subrata Kumar Das",
    description:
      "Hydration app concept for daily intake logging, reminders, and trend visibility with a mobile-first UX.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function WaterTrackerPage() {
  return (
    <section className="prose mx-auto">
      <h1>Water Tracker</h1>
      <p>
        Water Tracker is a mobile app concept to help users log daily intake,
        receive reminders, and review hydration trends over time.
      </p>
      <h2>Project Focus</h2>
      <p>
        The core scope covers low-friction logging, clear progress visuals,
        and reminder workflows that support consistent habits.
      </p>
      <h2>Current Status</h2>
      <p>
        This page currently documents the product scope and portfolio context.
      </p>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Water Tracker",
            applicationCategory: "HealthApplication",
            operatingSystem: "iOS, Android",
            description:
              "Hydration app concept for daily intake logging, reminders, and trend visibility with a mobile-first experience.",
            url: absoluteUrl("/watertracker"),
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
