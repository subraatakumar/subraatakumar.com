import type { Metadata } from "next";
import Link from "next/link";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects by Subrata Kumar Das — Tech Lead and React Native Architect",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Subrata Kumar Das",
    description: "Selected projects by Subrata Kumar Das — Tech Lead and React Native Architect",
    url: "/projects",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Subrata Kumar Das",
    description: "Selected projects by Subrata Kumar Das — Tech Lead and React Native Architect",
    images: [DEFAULT_OG_IMAGE],
  },
};

const projects = [
  {
    title: "Subrata Labs",
    slug: "subratalabs",
    desc: "Umbrella brand for practical AI products, systems, and developer ecosystems. Current live track: 180Days.",
    tags: ["AI Products", "Developer Ecosystem", "Learning Tracks", "180Days"],
    layout: "full",
  },  
  {
    title: "Offline Life Archive",
    slug: "offline-life-archive",
    desc: "A personal project to document and reflect on life experiences, learnings, and growth through a private digital journal app.",
    tags: ["React Native", "Realm", "Personal", "Journal", "Privacy", "Self-Reflection", "Offline-First"],
  },   
  {
    title: "Water Tracker",
    slug: "watertracker",
    desc: "A mobile app to track daily water intake with reminders and analytics for healthy hydration habits.",
    tags: ["React Native", "Health"],
  },
  {
    title: "She Health",
    slug: "shehealth",
    desc: "A women-first health platform delivering personalised care journeys and secure health tracking.",
    tags: ["React Native", "Firebase"],
  },
  {
    title: "TCBS CLI",
    slug: "tcbs-cli",
    desc: "A developer CLI tool for managing build workflows and automating common mobile release tasks.",
    tags: ["Node.js", "CLI"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="sk-page">

      <h1 className="sk-page-heading">Projects</h1>
      <p style={{ fontSize: "1.2rem", color: "#555", marginTop: 8, marginBottom: 0 }}>
        A selection of apps, tools, and platforms I've built.
      </p>
      <div className="sk-squiggle" style={{ marginTop: 16 }} />

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        gap: 24,
      }}>
        {projects.map((p) => (
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

            <Link href={`/${p.slug}`} className="sk-btn sk-btn-ghost" style={{ alignSelf: "flex-start", fontSize: "1rem", padding: "7px 18px" }}>
              View Details →
            </Link>
          </article>
        ))}
      </div>

    </div>
  );
}
