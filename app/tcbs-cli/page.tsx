import Link from "next/link";
import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "TCBS CLI",
  description:
    "TCBS CLI is a developer tooling concept for automating mobile build and release workflows with consistent command-driven operations.",
  alternates: {
    canonical: "/tcbs-cli",
  },
  openGraph: {
    title: "TCBS CLI | Project by Subrata Kumar Das",
    description:
      "Developer tooling concept for automating mobile build and release workflows with consistent command-driven operations.",
    url: "/tcbs-cli",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "TCBS CLI | Project by Subrata Kumar Das",
    description:
      "Developer tooling concept for automating mobile build and release workflows with consistent command-driven operations.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function TcbsCliPage() {
  return (
    <section className="prose mx-auto">
      <h1>TCBS CLI</h1>
      <p>
        TCBS CLI is a command-line tooling concept to automate repetitive mobile
        engineering workflows across build, validation, and release tasks.
      </p>
      <h2>Project Focus</h2>
      <p>
        The goal is to reduce manual release overhead through deterministic commands,
        shared conventions, and fewer workflow errors.
      </p>
      <h2>Current Status</h2>
      <p>
        This page currently serves as a portfolio overview of the tool direction.
      </p>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "TCBS CLI",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "macOS, Linux, Windows",
            description:
              "Developer tooling concept for automating mobile build and release workflows.",
            url: absoluteUrl("/tcbs-cli"),
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
