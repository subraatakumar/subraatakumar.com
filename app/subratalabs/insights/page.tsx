import Link from "next/link";
import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Overview — Subrata Labs",
  description:
    "What Subrata Labs is, why it exists, and how long-horizon execution tracks turn learning into production-ready AI products and frameworks.",
  alternates: { canonical: "/subratalabs/overview" },
  openGraph: {
    title: "Overview — Subrata Labs",
    description:
      "What Subrata Labs is, why it exists, and how long-horizon execution tracks turn learning into production-ready AI products and frameworks.",
    url: "/subratalabs/overview",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Overview — Subrata Labs",
    description:
      "What Subrata Labs is, why it exists, and how long-horizon execution tracks turn learning into production-ready AI products and frameworks.",
    images: [DEFAULT_OG_IMAGE],
  },
};

const principles = [
  {
    label: "Build First",
    body: "Every track starts with a real deliverable, not a slide deck. Code, systems, and shipped artifacts are the primary output.",
  },
  {
    label: "Long Horizon",
    body: "Months-long tracks over shallow sprints. Depth compounds. Each day of execution adds to a growing, reusable body of work.",
  },
  {
    label: "Architecture-Led",
    body: "We design systems before we write code. Structure, interfaces, and decision records are first-class citizens in every track.",
  },
  {
    label: "Production-Ready",
    body: "The bar is not 'demo quality'. Every capability built inside a track must be deployable, composable, and extensible.",
  },
];

const phases = [
  { num: "01", title: "Foundation", body: "Define the problem space, architect the system, and establish the execution cadence for the full track." },
  { num: "02", title: "Build Cycles", body: "Daily, weekly, and milestone-based build loops. Each cycle ships a discrete, documented capability." },
  { num: "03", title: "Integration", body: "Capabilities are stitched into a cohesive system. APIs, interfaces, and data flows are hardened." },
  { num: "04", title: "Productization", body: "The system is packaged as a reusable framework, open track, or deployable product available to the ecosystem." },
];

const tracks = [
  { name: "180Days", status: "Live", desc: "Architecture-first AI product development. Daily build-and-document execution over 180 days." },
  { name: "Agent Systems Lab", status: "Planned", desc: "Autonomous agent orchestration, memory, and multi-agent coordination patterns." },
  { name: "Plugin Craft Studio", status: "Planned", desc: "Designing, building, and shipping AI plugin and integration systems at production quality." },
  { name: "Enterprise AI Stack", status: "Planned", desc: "Workflow automation, command interfaces, and AI tooling for enterprise environments." },
  { name: "Desktop Intelligence", status: "Planned", desc: "Local-first AI application engineering for desktop platforms." },
  { name: "Mobile AI Accelerator", status: "Planned", desc: "End-to-end AI-native mobile product design and launch track." },
];

export default function OverviewPage() {
  return (
    <section className="ov">
      <style>{`

        /* ── Shared tokens (mirror home page) ── */
        .ov { --teal: #00c9a7; --muted: #687e78; --card: #111820; --border: rgba(255,255,255,0.07); }

        /* ── Page hero ── */
        .ov-hero {
          position: relative;
          overflow: hidden;
          padding: 60px 0 72px;
          background:
            radial-gradient(ellipse 50% 70% at 92% 38%, rgba(0,210,180,0.18) 0%, rgba(0,180,160,0.06) 40%, transparent 65%),
            radial-gradient(ellipse 25% 40% at 70% 20%, rgba(0,230,200,0.09) 0%, transparent 55%),
            transparent;
        }
        .ov-wave-svg {
          position: absolute;
          right: -40px;
          bottom: -20px;
          width: 50%;
          height: 80%;
          pointer-events: none;
        }
        .ov-hero-content { position: relative; z-index: 2; max-width: 620px; }

        .ov-kicker {
          display: block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #7ab8ae;
          margin-bottom: 14px;
        }
        .ov-hero h1 {
          margin: 0 0 16px;
          font-size: clamp(2.2rem, 4.5vw, 3.4rem);
          line-height: 1.02;
          letter-spacing: -0.03em;
          color: #ffffff;
          font-weight: 800;
        }
        .ov-hero h1 em { font-style: normal; color: var(--teal); }
        .ov-hero p {
          margin: 0 0 28px;
          color: #8fa8a2;
          font-size: 0.97rem;
          line-height: 1.75;
          max-width: 560px;
        }
        .ov-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 40px;
          padding: 0 18px;
          border-radius: 7px;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.09em;
          text-decoration: none;
          background: var(--teal);
          color: #021a12;
          border: 1px solid var(--teal);
          box-shadow: 0 4px 18px rgba(0,201,167,0.32);
          transition: opacity 0.15s, transform 0.15s;
        }
        .ov-btn:hover { opacity: 0.82; transform: translateY(-1px); }

        /* ── Section label ── */
        .ov-section-label {
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #4a7a6e;
          margin: 0 0 20px;
        }

        /* ── What is Subrata Labs — two col ── */
        .ov-what {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 16px;
        }
        .ov-card {
          border-radius: 16px;
          background: var(--card);
          border: 1px solid var(--border);
          padding: 26px 24px;
        }
        .ov-card h2 {
          margin: 0 0 10px;
          font-size: 1.12rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #dde8e4;
        }
        .ov-card p {
          margin: 0;
          color: var(--muted);
          font-size: 0.88rem;
          line-height: 1.75;
        }
        .ov-card p + p { margin-top: 10px; }

        /* Teal accent left border variant */
        .ov-card-accent {
          border-left: 3px solid var(--teal);
          background: linear-gradient(135deg, rgba(0,201,167,0.06), rgba(17,24,32,0.95));
        }

        /* ── Principles — 2×2 grid ── */
        .ov-principles {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 16px;
        }
        .ov-principle {
          border-radius: 14px;
          background: var(--card);
          border: 1px solid var(--border);
          padding: 20px 20px;
        }
        .ov-principle-label {
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--teal);
          margin-bottom: 8px;
        }
        .ov-principle p {
          margin: 0;
          color: var(--muted);
          font-size: 0.86rem;
          line-height: 1.7;
        }

        /* ── How it works — horizontal phases ── */
        .ov-phases {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-top: 16px;
        }
        .ov-phase {
          border-radius: 14px;
          background: var(--card);
          border: 1px solid var(--border);
          padding: 20px 18px;
          position: relative;
        }
        .ov-phase-num {
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: #2a4a42;
          margin-bottom: 10px;
        }
        .ov-phase h3 {
          margin: 0 0 8px;
          font-size: 0.92rem;
          font-weight: 700;
          color: #ccddd8;
          letter-spacing: -0.01em;
        }
        .ov-phase p {
          margin: 0;
          color: var(--muted);
          font-size: 0.82rem;
          line-height: 1.65;
        }
        /* Connector line between phases */
        .ov-phase:not(:last-child)::after {
          content: "";
          position: absolute;
          top: 28px;
          right: -7px;
          width: 14px;
          height: 1px;
          background: linear-gradient(90deg, rgba(0,201,167,0.4), transparent);
          z-index: 1;
        }

        /* ── Tracks table ── */
        .ov-tracks {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 16px;
        }
        .ov-track-row {
          border-radius: 12px;
          background: var(--card);
          border: 1px solid var(--border);
          padding: 14px 18px;
          display: grid;
          grid-template-columns: 180px 1fr 80px;
          align-items: center;
          gap: 16px;
        }
        .ov-track-name {
          font-size: 0.9rem;
          font-weight: 700;
          color: #cdddd8;
        }
        .ov-track-desc {
          font-size: 0.84rem;
          color: var(--muted);
          line-height: 1.5;
        }
        .ov-track-status {
          font-size: 9.5px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          text-align: right;
        }
        .ov-track-status.live { color: var(--teal); }
        .ov-track-status.planned { color: #2e5a50; }

        /* ── Spacer between sections ── */
        .ov-section { margin-top: 48px; }

        @media (max-width: 860px) {
          .ov-what, .ov-principles { grid-template-columns: 1fr; }
          .ov-phases { grid-template-columns: 1fr 1fr; }
          .ov-track-row { grid-template-columns: 1fr 80px; }
          .ov-track-desc { display: none; }
          .ov-hero { padding: 44px 0 56px; }
          .ov-phase:not(:last-child)::after { display: none; }
        }
        @media (max-width: 520px) {
          .ov-phases { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ── HERO ── */}
      <div className="ov-hero">
        <svg className="ov-wave-svg" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <filter id="ov-glow1" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="ov-glow2" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="6" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>
          <path d="M 600 320 Q 440 260 280 310 Q 160 345 0 290" stroke="rgba(0,210,185,0.08)" strokeWidth="60" fill="none" filter="url(#ov-glow2)"/>
          <path d="M 600 320 Q 440 255 280 308 Q 160 344 0 288" stroke="rgba(0,220,190,0.75)" strokeWidth="1.2" fill="none" filter="url(#ov-glow1)"/>
          <path d="M 600 345 Q 430 275 265 330 Q 140 368 0 310" stroke="rgba(0,200,175,0.35)" strokeWidth="1" fill="none" filter="url(#ov-glow1)"/>
          <path d="M 600 370 Q 420 295 250 352 Q 120 392 0 332" stroke="rgba(0,185,165,0.18)" strokeWidth="1" fill="none"/>
          <path d="M 600 295 Q 460 240 330 278 Q 240 302 180 295" stroke="rgba(0,230,200,0.28)" strokeWidth="0.8" fill="none" filter="url(#ov-glow1)"/>
          <circle cx="420" cy="279" r="2.5" fill="rgba(100,255,225,0.7)" filter="url(#ov-glow1)"/>
          <circle cx="420" cy="279" r="5" fill="rgba(0,220,190,0.2)"/>
        </svg>

        <div className="ov-hero-content">
          <span className="ov-kicker">Subrata Labs — Overview</span>
          <h1 className="labs-font-display">
            What We <em>Build</em><br />and Why
          </h1>
          <p>
            Subrata Labs is not a content channel or a course platform. It is an execution
            studio — a long-horizon environment where structured tracks turn disciplined
            daily work into production-grade AI systems and developer-facing products.
          </p>
          <Link href="/180days" className="ov-btn">Start with 180Days</Link>
        </div>
      </div>

      {/* ── WHAT IS SUBRATA LABS ── */}
      <div className="ov-section">
        <p className="ov-section-label">What it is</p>
        <div className="ov-what">
          <div className="ov-card ov-card-accent">
            <h2 className="labs-font-display">An Execution Studio</h2>
            <p>
              Subrata Labs is organized around tracks — each track is a multi-month,
              theme-specific build program with a daily execution cadence, architecture
              documentation, and a production-ready deliverable at the end.
            </p>
            <p>
              The studio model means the output is not just knowledge. It is code,
              systems, frameworks, and documentation that others can use, fork, and
              deploy. Every track leaves a permanent artifact in the ecosystem.
            </p>
          </div>
          <div className="ov-card">
            <h2 className="labs-font-display">Why Long-Horizon?</h2>
            <p>
              Shallow sprints produce shallow results. AI product development requires
              iterative architecture decisions, real feedback loops, and time to discover
              what actually works in production — not just in theory.
            </p>
            <p>
              A 180-day track is not slow. It is the minimum viable depth to go from
              concept to a system that survives contact with real-world constraints.
              Speed comes from having the right structure, not from cutting corners.
            </p>
          </div>
        </div>
      </div>

      {/* ── PRINCIPLES ── */}
      <div className="ov-section">
        <p className="ov-section-label">Core principles</p>
        <div className="ov-principles">
          {principles.map((p) => (
            <div key={p.label} className="ov-principle">
              <div className="ov-principle-label">{p.label}</div>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── HOW IT WORKS ── */}
      <div className="ov-section">
        <p className="ov-section-label">How a track works</p>
        <div className="ov-phases">
          {phases.map((ph) => (
            <div key={ph.num} className="ov-phase">
              <div className="ov-phase-num">{ph.num}</div>
              <h3 className="labs-font-display">{ph.title}</h3>
              <p>{ph.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── ALL TRACKS ── */}
      <div className="ov-section">
        <p className="ov-section-label">All tracks</p>
        <div className="ov-tracks">
          {tracks.map((t) => (
            <div key={t.name} className="ov-track-row">
              <span className="ov-track-name labs-font-display">{t.name}</span>
              <span className="ov-track-desc">{t.desc}</span>
              <span className={`ov-track-status ${t.status.toLowerCase()}`}>{t.status}</span>
            </div>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Overview — Subrata Labs",
            url: absoluteUrl("/subratalabs/overview"),
            description: "What Subrata Labs is, why it exists, and how long-horizon execution tracks produce production-ready AI systems.",
          }),
        }}
      />
    </section>
  );
}
