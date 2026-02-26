import type { Metadata } from "next";
import Link from "next/link";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Tech Lead and React Native Architect with 10+ years building scalable mobile platforms and delivering 40+ mobile applications.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Subrata Kumar Das | Home",
    description:
      "Tech Lead and React Native Architect with 10+ years building scalable mobile platforms and delivering 40+ mobile applications.",
    url: "/",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subrata Kumar Das | Home",
    description:
      "Tech Lead and React Native Architect with 10+ years building scalable mobile platforms and delivering 40+ mobile applications.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function HomePage() {
  return (
    <div className="sk-page">

      {/* ── Hero ── */}
      <div style={{ marginBottom: 16 }}>
        <span style={{
          display: "inline-block",
          fontFamily: "'Caveat', cursive",
          fontSize: "1rem",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#2563eb",
          border: "2px solid #2563eb",
          padding: "3px 12px",
          borderRadius: 2,
          marginBottom: 16,
        }}>
          Tech Lead · React Native Architect
        </span>

        <h1 className="sk-page-heading">
          Subrata<br />
          <span style={{
            textDecoration: "underline wavy #2563eb 2px",
            textUnderlineOffset: 8,
          }}>
            Kumar Das
          </span>
        </h1>

        <p style={{
          fontSize: "1.3rem",
          color: "#444",
          maxWidth: 520,
          lineHeight: 1.65,
          margin: "20px 0 32px",
        }}>
          10+ years building scalable mobile platforms and product-focused
          systems. Architecture-first mindset, hands-on delivery.
        </p>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Link href="/products" className="sk-btn">See My Work</Link>
          <Link href="/about" className="sk-btn sk-btn-ghost">About Me</Link>
        </div>
      </div>

      <div className="sk-squiggle" />

      {/* ── Stats ── */}
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginBottom: 48 }}>
        {[
          { num: "10+", lbl: "Years Experience" },
          { num: "40+", lbl: "Apps Shipped" },
          { num: "∞",   lbl: "Coffees Consumed" },
        ].map((s) => (
          <div key={s.lbl} className="sk-stat">
            <div className="num">{s.num}</div>
            <div className="lbl">{s.lbl}</div>
          </div>
        ))}
      </div>

      <div className="sk-squiggle" />

      {/* ── Stack ── */}
      <h2 className="sk-section-heading">Stack</h2>
      <div style={{ marginBottom: 10 }}>
        <span style={{ fontSize: "1rem", color: "#666", display: "block", marginBottom: 6 }}>Mobile</span>
        {["React Native", "Expo", "iOS", "Android"].map((t, i) => (
          <span key={t} className={`sk-tag${i === 0 ? " active" : ""}`}>{t}</span>
        ))}
      </div>
      <div style={{ marginBottom: 10 }}>
        <span style={{ fontSize: "1rem", color: "#666", display: "block", marginBottom: 6 }}>Frontend</span>
        {["TypeScript", "Next.js", "React", "TailwindCSS"].map((t) => (
          <span key={t} className="sk-tag">{t}</span>
        ))}
      </div>
      <div>
        <span style={{ fontSize: "1rem", color: "#666", display: "block", marginBottom: 6 }}>Backend & Infra</span>
        {["Node.js", "AWS", "GraphQL", "Firebase"].map((t) => (
          <span key={t} className="sk-tag">{t}</span>
        ))}
      </div>

      <div className="sk-squiggle" />

      {/* ── Quick links ── */}
      <h2 className="sk-section-heading">Explore</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 20 }}>
        {[
          { label: "Products", href: "/products", note: "Apps & tools I've built" },
          { label: "About",    href: "/about",    note: "Background & philosophy" },
          { label: "Contact",  href: "/contact",  note: "Let's connect" },
        ].map((item) => (
          <Link key={item.label} href={item.href} style={{ textDecoration: "none" }}>
            <div className="sk-card" style={{ cursor: "pointer" }}>
              <div style={{ fontFamily: "'Caveat Brush', cursive", fontSize: "1.5rem", marginBottom: 6 }}>
                {item.label} →
              </div>
              <div style={{ fontSize: "1rem", color: "#555" }}>{item.note}</div>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
