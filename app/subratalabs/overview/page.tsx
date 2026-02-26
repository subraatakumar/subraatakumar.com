import Link from "next/link";
import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Insights — Subrata Labs",
  description:
    "Hard-won observations on building practical AI products, designing developer ecosystems, and running long-horizon execution tracks.",
  alternates: { canonical: "/subratalabs/insights" },
  openGraph: {
    title: "Insights — Subrata Labs",
    description:
      "Hard-won observations on building practical AI products, designing developer ecosystems, and running long-horizon execution tracks.",
    url: "/subratalabs/insights",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights — Subrata Labs",
    description:
      "Hard-won observations on building practical AI products, designing developer ecosystems, and running long-horizon execution tracks.",
    images: [DEFAULT_OG_IMAGE],
  },
};

const featured = {
  tag: "AI Product Architecture",
  title: "Why Most AI Products Fail at the Architecture Layer",
  excerpt:
    "LLM wrappers are easy to build and hard to scale. The products that survive are the ones that treat the AI layer as one component in a larger system — not the system itself. Here is what that architecture actually looks like in practice.",
  // readTime: "8 min read",
};

const insights = [
  {
    tag: "Execution",
    title: "The 180-Day Rule: Why Short Sprints Kill Deep Products",
    excerpt:
      "Two-week sprints optimize for the appearance of progress. Building production-grade AI systems requires a different cadence — one that allows architecture to breathe.",
  },
  {
    tag: "Developer Ecosystems",
    title: "Designing for Extensibility: Lessons from Building Plugin Systems",
    excerpt:
      "A plugin architecture is not a technical decision. It is a product philosophy. The interface you expose to developers is the product, and it will outlive every feature you ship.",
  },
  {
    tag: "AI Systems",
    title: "Agents Need Boundaries: On Memory, Context, and Control Planes",
    excerpt:
      "Autonomous agents without well-defined boundaries are liabilities. The discipline of agent system design is learning where the agent stops and the deterministic system begins.",
  },
  {
    tag: "Product",
    title: "From Framework to Product: The Productization Gap",
    excerpt:
      "Internal frameworks and developer products look identical at the code level. The gap is entirely in the contract — the promises you make about stability, versioning, and support.",
  },
  {
    tag: "Enterprise AI",
    title: "Why Enterprise AI Tooling Needs a Command Layer",
    excerpt:
      "Enterprise users do not want to prompt an AI. They want to issue commands to a system. The interaction model for enterprise AI is fundamentally different from consumer products.",
  },
  {
    tag: "Architecture",
    title: "Reusable Frameworks as a Long-Term Competitive Moat",
    excerpt:
      "Shipping a product creates users. Shipping a framework creates an ecosystem. The compounding returns of an ecosystem are why the best builders invest in reusability from day one.",
  },
];

const signals = [
  {
    label: "On AI product moats",
    body: "The moat in AI products is not the model. It is the data flywheel, the workflow integration, and the switching cost. Build for those three things first.",
  },
  {
    label: "On daily execution",
    body: "A daily build log does two things: it forces you to ship something concrete every day, and it creates a searchable archive of every decision you made and why.",
  },
  {
    label: "On developer ecosystems",
    body: "The best developer platforms are opinionated. Giving developers infinite flexibility is abdication. Give them a great default path and excellent escape hatches.",
  },
  {
    label: "On production quality",
    body: "Demo quality and production quality are not on the same spectrum. Demo quality is optimized for a single run. Production quality is optimized for the thousandth run under unexpected conditions.",
  },
];

export default function InsightsPage() {
  return (
    <section className="ins">
      <style>{`

        /* ── Shared tokens ── */
        .ins { --teal: #00c9a7; --muted: #687e78; --card: #111820; --border: rgba(255,255,255,0.07); }

        /* ── Hero ── */
        .ins-hero {
          position: relative;
          overflow: hidden;
          padding: 60px 0 72px;
          background:
            radial-gradient(ellipse 50% 70% at 92% 38%, rgba(0,210,180,0.18) 0%, rgba(0,180,160,0.06) 40%, transparent 65%),
            radial-gradient(ellipse 25% 40% at 70% 20%, rgba(0,230,200,0.09) 0%, transparent 55%),
            transparent;
        }
        .ins-wave-svg {
          position: absolute;
          right: -40px;
          bottom: -20px;
          width: 50%;
          height: 80%;
          pointer-events: none;
        }
        .ins-hero-content { position: relative; z-index: 2; max-width: 620px; }
        .ins-kicker {
          display: block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #7ab8ae;
          margin-bottom: 14px;
        }
        .ins-hero h1 {
          margin: 0 0 16px;
          font-size: clamp(2.2rem, 4.5vw, 3.4rem);
          line-height: 1.02;
          letter-spacing: -0.03em;
          color: #ffffff;
          font-weight: 800;
        }
        .ins-hero h1 em { font-style: normal; color: var(--teal); }
        .ins-hero p {
          margin: 0;
          color: #8fa8a2;
          font-size: 0.97rem;
          line-height: 1.75;
          max-width: 540px;
        }

        /* ── Section label ── */
        .ins-label {
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #4a7a6e;
          margin: 0 0 18px;
        }

        /* ── Featured card ── */
        .ins-featured {
          margin-top: 16px;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(0,201,167,0.08) 0%, var(--card) 50%);
          border: 1px solid rgba(0,201,167,0.22);
          padding: 30px 28px;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 24px;
          align-items: end;
        }
        .ins-featured-tag {
          display: inline-block;
          font-size: 9.5px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--teal);
          border: 1px solid rgba(0,201,167,0.35);
          border-radius: 999px;
          padding: 4px 10px;
          margin-bottom: 14px;
        }
        .ins-featured h2 {
          margin: 0 0 12px;
          font-size: clamp(1.15rem, 2.5vw, 1.55rem);
          font-weight: 700;
          letter-spacing: -0.025em;
          color: #e2ecea;
          line-height: 1.25;
        }
        .ins-featured p {
          margin: 0;
          color: var(--muted);
          font-size: 0.9rem;
          line-height: 1.72;
          max-width: 600px;
        }
        .ins-featured-meta {
          font-size: 10px;
          color: #3a6058;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          white-space: nowrap;
          align-self: flex-start;
          padding-top: 4px;
        }

        /* ── Insights grid — 2 col then 3 col ── */
        .ins-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 16px;
        }
        .ins-card {
          border-radius: 14px;
          background: var(--card);
          border: 1px solid var(--border);
          padding: 20px 18px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .ins-card-tag {
          font-size: 9.5px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #2e6058;
        }
        .ins-card h3 {
          margin: 0;
          font-size: 0.92rem;
          font-weight: 700;
          letter-spacing: -0.015em;
          color: #cdddd8;
          line-height: 1.35;
        }
        .ins-card p {
          margin: 0;
          color: var(--muted);
          font-size: 0.82rem;
          line-height: 1.68;
          flex: 1;
        }
        .ins-card-meta {
          font-size: 9.5px;
          color: #2e5048;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-top: auto;
          padding-top: 4px;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        /* ── Signals — short sharp takes ── */
        .ins-signals {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 16px;
        }
        .ins-signal {
          border-radius: 14px;
          background: var(--card);
          border: 1px solid var(--border);
          border-left: 3px solid rgba(0,201,167,0.5);
          padding: 18px 20px;
        }
        .ins-signal-label {
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--teal);
          margin-bottom: 8px;
        }
        .ins-signal p {
          margin: 0;
          color: #8aa09a;
          font-size: 0.87rem;
          line-height: 1.7;
        }

        /* ── CTA strip ── */
        .ins-cta-strip {
          margin-top: 48px;
          border-radius: 16px;
          background: var(--card);
          border: 1px solid var(--border);
          padding: 28px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }
        .ins-cta-strip h3 {
          margin: 0 0 4px;
          font-size: 1.05rem;
          font-weight: 700;
          color: #dde8e4;
        }
        .ins-cta-strip p {
          margin: 0;
          color: var(--muted);
          font-size: 0.86rem;
        }
        .ins-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 40px;
          padding: 0 20px;
          border-radius: 7px;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.09em;
          text-decoration: none;
          background: var(--teal);
          color: #021a12;
          border: 1px solid var(--teal);
          box-shadow: 0 4px 18px rgba(0,201,167,0.28);
          transition: opacity 0.15s, transform 0.15s;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .ins-btn:hover { opacity: 0.82; transform: translateY(-1px); }

        .ins-section { margin-top: 48px; }

        @media (max-width: 900px) {
          .ins-grid { grid-template-columns: 1fr 1fr; }
          .ins-featured { grid-template-columns: 1fr; gap: 12px; }
          .ins-featured-meta { align-self: auto; }
        }
        @media (max-width: 600px) {
          .ins-grid { grid-template-columns: 1fr; }
          .ins-signals { grid-template-columns: 1fr; }
          .ins-hero { padding: 44px 0 56px; }
          .ins-cta-strip { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      {/* ── HERO ── */}
      <div className="ins-hero">
        <svg className="ins-wave-svg" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <filter id="ins-glow1" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="ins-glow2" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="6" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>
          <path d="M 600 320 Q 440 260 280 310 Q 160 345 0 290" stroke="rgba(0,210,185,0.08)" strokeWidth="60" fill="none" filter="url(#ins-glow2)"/>
          <path d="M 600 320 Q 440 255 280 308 Q 160 344 0 288" stroke="rgba(0,220,190,0.75)" strokeWidth="1.2" fill="none" filter="url(#ins-glow1)"/>
          <path d="M 600 345 Q 430 275 265 330 Q 140 368 0 310" stroke="rgba(0,200,175,0.35)" strokeWidth="1" fill="none" filter="url(#ins-glow1)"/>
          <path d="M 600 370 Q 420 295 250 352 Q 120 392 0 332" stroke="rgba(0,185,165,0.18)" strokeWidth="1" fill="none"/>
          <path d="M 600 295 Q 460 240 330 278 Q 240 302 180 295" stroke="rgba(0,230,200,0.28)" strokeWidth="0.8" fill="none" filter="url(#ins-glow1)"/>
          <circle cx="420" cy="279" r="2.5" fill="rgba(100,255,225,0.7)" filter="url(#ins-glow1)"/>
          <circle cx="420" cy="279" r="5" fill="rgba(0,220,190,0.2)"/>
        </svg>

        <div className="ins-hero-content">
          <span className="ins-kicker">Subrata Labs — Insights</span>
          <h1 className="labs-font-display">
            Hard-Won <em>Signals</em><br />from the Build
          </h1>
          <p>
            Observations, frameworks, and sharp takes distilled from building practical AI
            products, running long-horizon execution tracks, and designing developer
            ecosystems that survive contact with production.
          </p>
        </div>
      </div>

      {/* ── FEATURED ── */}
      <div style={{ marginTop: "16px" }}>
        <p className="ins-label">Featured</p>
        <div className="ins-featured">
          <div>
            <span className="ins-featured-tag">{featured.tag}</span>
            <h2 className="labs-font-display">{featured.title}</h2>
            <p>{featured.excerpt}</p>
          </div>
        </div>
      </div>

      {/* ── INSIGHTS GRID ── */}
      <div className="ins-section">
        <p className="ins-label">From the Studio</p>
        <div className="ins-grid">
          {insights.map((ins) => (
            <div key={ins.title} className="ins-card">
              <span className="ins-card-tag">{ins.tag}</span>
              <h3 className="labs-font-display">{ins.title}</h3>
              <p>{ins.excerpt}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── SIGNALS ── */}
      <div className="ins-section">
        <p className="ins-label">Quick Signals</p>
        <div className="ins-signals">
          {signals.map((s) => (
            <div key={s.label} className="ins-signal">
              <div className="ins-signal-label">{s.label}</div>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="ins-cta-strip">
        <div>
          <h3 className="labs-font-display">See the Work, Not Just the Words</h3>
          <p>180Days is where these principles get tested every single day. Follow the live build track.</p>
        </div>
        <Link href="/180days" className="ins-btn">Open 180Days</Link>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Insights — Subrata Labs",
            url: absoluteUrl("/subratalabs/insights"),
            description: "Hard-won observations on building practical AI products, designing developer ecosystems, and running long-horizon execution tracks.",
          }),
        }}
      />
    </section>
  );
}
