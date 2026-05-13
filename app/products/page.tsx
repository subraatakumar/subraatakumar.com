import type { Metadata } from "next";
import Link from "next/link";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Products",
  description: "Selected products by Subrata Kumar Das — Tech Lead and React Native Architect",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Products | Subrata Kumar Das",
    description: "Selected products by Subrata Kumar Das — Tech Lead and React Native Architect",
    url: "/products",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Products | Subrata Kumar Das",
    description: "Selected products by Subrata Kumar Das — Tech Lead and React Native Architect",
    images: [DEFAULT_OG_IMAGE],
  },
};

const products = [
  {
    title: "React Native Mastery",
    slug: "https://rnm.subraatakumar.com",
    desc: "Execution Studio to become a React Native Expert, From Fundamentals to System Design, From Code to Storefront, Build, Scale, and Architect Production Apps",
    tags: ["React Native", "Developer Ecosystem", "Learning Tracks", "mobile development"],
    layout: "full",
  },
  {
    title: "TCBS CLI",
    slug: "https://tcbscli.subraatakumar.com/",
    desc: "A developer CLI tool for managing build workflows and automating common mobile release tasks.",
    tags: ["Node.js", "CLI"],
  },
  {
    title: "Water Tracker",
    slug: "watertracker",
    desc: "A hydration app built on offline-first architecture with biometric security, iCloud/Google Drive backup, freemium monetisation, and custom reminder systems.",
    tags: ["React Native", "Health"],
  },
  {
    title: "Mood Tracker",
    slug: "moodtracker",
    desc: "A mood tracking app built on offline-first architecture with biometric security, iCloud/Google Drive backup, freemium monetisation, and custom reminder systems.",
    tags: ["React Native", "Health", "Privacy-First", "Wellbeing"],
  },
  {
    title: "PillTracker",
    slug: "pilltracker",
    desc: "A medicine reminder app built on offline-first architecture with biometric security, iCloud/Google Drive backup, freemium monetisation, and custom reminder systems.",
    tags: ["React Native", "Health", "Offline-First", "Realm"],
  },
  {
    title: "She Health",
    slug: "shehealth",
    desc: "A women-first health platform delivering personalised care journeys and secure health tracking.",
    tags: ["React Native", "Firebase"],
  },
  {
    title: "Learners REST API (Swagger)",
    slug: "https://backend.ecom.subraatakumar.com/api-docs/",
    desc: "Dummy REST API for learners with interactive Swagger docs to explore endpoints, payloads, and responses.",
    tags: ["REST API", "Swagger", "Learning"],
  },
  {
    title: "Learners GraphQL (GraphiQL)",
    slug: "https://backend.ecom.subraatakumar.com/graphiql",
    desc: "Dummy GraphQL endpoint for learners to practice queries and mutations in an interactive GraphiQL playground.",
    tags: ["GraphQL", "GraphiQL", "Learning"],
  },

];

export default function ProjectsPage() {
  return (
    <div className="sk-page">

      <h1 className="sk-page-heading">Products</h1>
      <p style={{ fontSize: "1.2rem", color: "#555", marginTop: 8, marginBottom: 0 }}>
        A selection of apps, tools, and platforms I've built.
      </p>
      <div className="sk-squiggle" style={{ marginTop: 16 }} />

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        gap: 24,
      }}>
        {products.map((p) => (
          <article
            key={p.title}
            className="sk-card"
            style={{
              display: "flex",
              flexDirection: "column",
              gridColumn: p.layout === "full" ? "1 / -1" : undefined,
            }}
          >

            {/* X-placeholder image */}
            <div className="sk-img" />

            <div style={{ fontFamily: "'Caveat Brush', cursive", fontSize: "1.5rem", marginBottom: 8 }}>
              {p.title}
            </div>
            <p style={{ fontSize: "1.05rem", color: "#555", lineHeight: 1.5, flex: 1, marginBottom: 14 }}>
              {p.desc}
            </p>

            <div style={{ marginBottom: 16 }}>
              {p.tags.map((t) => (
                <span key={t} className="sk-tag" style={{ fontSize: "0.9rem", padding: "2px 10px" }}>{t}</span>
              ))}
            </div>

            <Link
              href={p.slug.startsWith("http") ? p.slug : `/${p.slug}`}
              className="sk-btn sk-btn-ghost"
              style={{ alignSelf: "flex-start", fontSize: "1rem", padding: "7px 18px" }}
              target={p.slug.startsWith("http") ? "_blank" : undefined}
              rel={p.slug.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              View Details →
            </Link>
          </article>
        ))}
      </div>

    </div>
  );
}
