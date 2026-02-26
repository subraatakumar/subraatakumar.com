import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About",
  description: "About Subrata Kumar Das — Tech Lead and React Native Architect",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Subrata Kumar Das",
    description: "About Subrata Kumar Das — Tech Lead and React Native Architect",
    url: "/about",
    type: "profile",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Subrata Kumar Das",
    description: "About Subrata Kumar Das — Tech Lead and React Native Architect",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function AboutPage() {
  return (
    <div className="sk-page">

      <h1 className="sk-page-heading">About</h1>
      <div className="sk-squiggle" style={{ marginTop: 16 }} />

      {/* ── Bio paragraphs ── */}
      <div style={{ maxWidth: 620 }}>
        {[
          "I am a Tech Lead and React Native Architect with over 10 years of experience building mobile products. I have led cross-functional teams through the entire product lifecycle, delivering robust, maintainable apps that scale with growing user needs.",
          "Throughout my career I have shipped 40+ mobile applications across consumer and enterprise domains. My focus is on designing scalable mobile platforms, establishing strong engineering practices, and driving performance and reliability at scale.",
          "I bring an architecture-first mindset to leadership — mentoring teams, defining clear technical roadmaps, and making pragmatic trade-offs to balance speed and long-term quality.",
        ].map((para, i) => (
          <p key={i} style={{
            fontSize: "1.25rem",
            color: "#333",
            lineHeight: 1.7,
            marginBottom: 24,
          }}>
            {para}
          </p>
        ))}
      </div>

      <div className="sk-squiggle" />

      {/* ── Highlights ── */}
      <h2 className="sk-section-heading">Highlights</h2>
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginBottom: 48 }}>
        {[
          { num: "10+", lbl: "Years Experience" },
          { num: "40+", lbl: "Apps Shipped" },
          { num: "3",   lbl: "Domains: Consumer, Enterprise, Health" },
        ].map((s) => (
          <div key={s.lbl} className="sk-stat" style={{ minWidth: 160 }}>
            <div className="num">{s.num}</div>
            <div className="lbl">{s.lbl}</div>
          </div>
        ))}
      </div>

      <div className="sk-squiggle" />

      {/* ── Core strengths ── */}
      <h2 className="sk-section-heading">Core Strengths</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 20 }}>
        {[
          { title: "Mobile Architecture", body: "Designing scalable, maintainable React Native platforms from the ground up." },
          { title: "Team Leadership",     body: "Mentoring engineers, setting technical direction, and driving delivery." },
          { title: "Performance at Scale",body: "Profiling, optimising, and hardening apps for millions of users." },
          { title: "Engineering Culture", body: "Building practices that balance speed, quality, and long-term sustainability." },
        ].map((item) => (
          <div key={item.title} className="sk-card">
            <div style={{ fontFamily: "'Caveat Brush', cursive", fontSize: "1.35rem", marginBottom: 8 }}>
              {item.title}
            </div>
            <p style={{ fontSize: "1.05rem", color: "#555", lineHeight: 1.5 }}>{item.body}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
