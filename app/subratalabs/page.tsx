import Link from "next/link";
import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Subrata Labs",
  description:
    "Subrata Labs is the Execution Studio for practical AI products, systems, and developer ecosystems, starting with the 180Days structured build track.",
  alternates: { canonical: "/subratalabs" },
  openGraph: {
    title: "Subrata Labs | Practical AI Products and Systems",
    description:
      "Execution Studio for practical AI products, systems, and developer ecosystems. Explore 180Days and upcoming structured tracks.",
    url: "/subratalabs",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subrata Labs | Practical AI Products and Systems",
    description:
      "Execution Studio for practical AI products, systems, and developer ecosystems. Explore 180Days and upcoming structured tracks.",
    images: [DEFAULT_OG_IMAGE],
  },
};

const upcomingTracks = [
  "AI Agents",
  "Plugins",
  "Enterprise Tools",
  "Monetization Frameworks",
  "Desktop/Mobile AI Apps",
];

export default function SubrataLabsPage() {
  return (
    <section className="lp">
      <style>{`

        /* ─────────────────────────────────────────
           HERO
        ───────────────────────────────────────── */
        .lp-hero {
          position: relative;
          overflow: hidden;
          min-height: 420px;
          padding: 64px 0 80px;
          /* Teal radial glow on the right — the key visual from the screenshot */
          background:
            radial-gradient(ellipse 55% 75% at 88% 42%, rgba(0,210,180,0.22) 0%, rgba(0,180,160,0.07) 38%, transparent 68%),
            radial-gradient(ellipse 30% 50% at 72% 28%, rgba(0,230,200,0.12) 0%, transparent 55%),
            transparent;
        }

        /* The flowing aurora/wave lines — SVG positioned bottom-right of hero */
        .lp-wave-svg {
          position: absolute;
          right: -40px;
          bottom: -20px;
          width: 52%;
          height: 80%;
          pointer-events: none;
          opacity: 1;
        }

        .lp-hero-content {
          position: relative;
          z-index: 2;
          max-width: 660px;
        }

        .lp-kicker {
          display: block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #7ab8ae;
          margin-bottom: 16px;
        }

        .lp-hero h1 {
          margin: 0 0 18px;
          font-size: clamp(2.6rem, 5vw, 4rem);
          line-height: 1;
          letter-spacing: -0.03em;
          color: #ffffff;
          font-weight: 800;
        }
        .lp-hero h1 em {
          font-style: normal;
          color: #00c9a7;
        }

        .lp-hero p {
          margin: 0 0 32px;
          color: #8fa8a2;
          font-size: 0.97rem;
          line-height: 1.75;
          max-width: 580px;
        }

        .lp-cta {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .lp-btn {
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
          border: 1px solid transparent;
          transition: opacity 0.15s, transform 0.15s;
          white-space: nowrap;
        }
        .lp-btn:hover { opacity: 0.82; transform: translateY(-1px); }

        .lp-btn-solid {
          background: #00c9a7;
          color: #021a12;
          border-color: #00c9a7;
          box-shadow: 0 4px 18px rgba(0,201,167,0.35);
        }

        .lp-btn-ghost {
          background: rgba(255,255,255,0.05);
          color: #c8dbd7;
          border-color: rgba(255,255,255,0.15);
        }
        .lp-btn-ghost:hover {
          border-color: rgba(0,201,167,0.4);
          color: #00c9a7;
          background: rgba(0,201,167,0.07);
        }

        /* ─────────────────────────────────────────
           TWO-COLUMN CARDS
        ───────────────────────────────────────── */
        .lp-grid {
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: 16px;
          margin-top: 20px;
        }

        .lp-card {
          border-radius: 16px;
          background: #111820;
          border: 1px solid rgba(255,255,255,0.07);
          padding: 24px 22px;
        }

        .lp-card h2 {
          margin: 0 0 8px;
          font-size: 1.15rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #dde8e4;
        }

        .lp-card > p {
          margin: 0 0 16px;
          color: #687e78;
          font-size: 0.88rem;
          line-height: 1.7;
        }

        /* Live track box inside left card */
        .lp-live-box {
          border-radius: 10px;
          background: rgba(0,40,30,0.6);
          border: 1px solid rgba(0,201,167,0.3);
          padding: 14px 16px;
        }
        .lp-live-box strong {
          display: block;
          color: #00c9a7;
          font-size: 0.9rem;
          margin-bottom: 6px;
        }
        .lp-live-box p {
          margin: 0 0 12px;
          color: #7eada6;
          font-size: 0.84rem;
          line-height: 1.6;
        }
        .lp-mini-btn {
          display: inline-flex;
          align-items: center;
          height: 32px;
          padding: 0 14px;
          border-radius: 6px;
          background: rgba(0,201,167,0.15);
          border: 1px solid rgba(0,201,167,0.35);
          color: #00c9a7;
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.09em;
          text-decoration: none;
          transition: background 0.15s;
        }
        .lp-mini-btn:hover {
          background: rgba(0,201,167,0.25);
        }

        /* Right card: Coming Next list */
        .lp-track-list {
          display: flex;
          flex-direction: column;
          gap: 7px;
          margin-top: 6px;
        }
        .lp-track-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 12px;
          border-radius: 8px;
          background: #0d1510;
          border: 1px solid rgba(255,255,255,0.06);
        }
        .lp-track-row span {
          color: #c8dbd5;
          font-size: 0.88rem;
          font-weight: 600;
        }
        .lp-track-badge {
          font-size: 9.5px !important;
          font-weight: 700 !important;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #4a7a6e !important;
        }

        @media (max-width: 860px) {
          .lp-grid { grid-template-columns: 1fr; }
          .lp-hero { padding: 44px 0 60px; }
        }
      `}</style>

      {/* ── HERO ── */}
      <div className="lp-hero">

        {/* Flowing wave lines — pure SVG matching the screenshot exactly */}
        <svg
          className="lp-wave-svg"
          viewBox="0 0 600 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <filter id="glow1" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="glow2" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="6" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          {/* Wide soft glow band behind the lines */}
          <path
            d="M 600 320 Q 440 260 280 310 Q 160 345 0 290"
            stroke="rgba(0,210,185,0.08)"
            strokeWidth="60"
            fill="none"
            filter="url(#glow2)"
          />

          {/* Main bright wave line */}
          <path
            d="M 600 320 Q 440 255 280 308 Q 160 344 0 288"
            stroke="rgba(0,220,190,0.75)"
            strokeWidth="1.2"
            fill="none"
            filter="url(#glow1)"
          />

          {/* Second wave — slightly offset, dimmer */}
          <path
            d="M 600 345 Q 430 275 265 330 Q 140 368 0 310"
            stroke="rgba(0,200,175,0.35)"
            strokeWidth="1"
            fill="none"
            filter="url(#glow1)"
          />

          {/* Third wave — even dimmer, wider sweep */}
          <path
            d="M 600 370 Q 420 295 250 352 Q 120 392 0 332"
            stroke="rgba(0,185,165,0.18)"
            strokeWidth="1"
            fill="none"
          />

          {/* Wisp above — shorter, delicate */}
          <path
            d="M 600 295 Q 460 240 330 278 Q 240 302 180 295"
            stroke="rgba(0,230,200,0.28)"
            strokeWidth="0.8"
            fill="none"
            filter="url(#glow1)"
          />

          {/* Bright highlight dot on main line */}
          <circle cx="420" cy="279" r="2.5" fill="rgba(100,255,225,0.7)" filter="url(#glow1)"/>
          <circle cx="420" cy="279" r="5" fill="rgba(0,220,190,0.2)"/>
        </svg>

        <div className="lp-hero-content">
          <span className="lp-kicker">Execution Studio</span>
          <h1 className="labs-font-display">
            Subrata <em>Labs</em>
          </h1>
          <p>
            Building practical AI products, systems, and developer ecosystems. Subrata Labs
            is a long-horizon execution studio where learning tracks evolve into
            production-ready capabilities and reusable frameworks.
          </p>
          <div className="lp-cta">
            <Link href="/180days" className="lp-btn lp-btn-solid">Explore 180Days</Link>
            {/* <Link href="/products" className="lp-btn lp-btn-ghost">View All Products</Link> */}
          </div>
        </div>
      </div>

      {/* ── GRID ── */}
      <div className="lp-grid">

        {/* Left: Structured Learning Tracks */}
        <div className="lp-card">
          <h2 className="labs-font-display">Structured Learning Tracks</h2>
          <p>
            Each track has a distinct theme and delivery style, but all tracks share one
            mission: practical depth that can be converted into real products and systems.
          </p>
          <div className="lp-live-box">
            <strong>Live Track: 180Days</strong>
            <p>
              Daily build-and-document execution track for architecture-first product
              development in the AI era.
            </p>
            <Link href="/180days" className="lp-mini-btn">Open 180Days</Link>
          </div>
          <div className="lp-live-box" style={{ marginTop: "14px" }}>
            <strong>Live Track: 24-Weeks to AI-Native</strong>
            <p>
              Mapping the blueprint for the 2030 stack through 24 weeks of hands-on, autonomous agent and infrastructure builds. Follow along as I open-source the architectural trade-offs, failures, and breakthroughs of engineering in the AI era.
            </p>
            <Link href="/24weeks" className="lp-mini-btn">Open 24Weeks</Link>
          </div>          
        </div>

        {/* Right: Coming Next */}
        <div className="lp-card">
          <h2 className="labs-font-display">Coming Next</h2>
          <div className="lp-track-list">
            {upcomingTracks.map((track) => (
              <div key={track} className="lp-track-row">
                <span>{track}</span>
                <span className="lp-track-badge">Planned</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Brand",
                name: "Subrata Labs",
                url: absoluteUrl("/subratalabs"),
                description: "Execution Studio for practical AI products, systems, and developer ecosystems.",
              },
              {
                "@type": "ItemList",
                name: "Subrata Labs Learning Tracks",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "180Days", url: absoluteUrl("/180days") },
                  ...upcomingTracks.map((track, i) => ({
                    "@type": "ListItem",
                    position: i + 2,
                    name: track,
                  })),
                ],
              },
              {
                "@type": "WebPage",
                name: "Subrata Labs",
                url: absoluteUrl("/subratalabs"),
              },
            ],
          }),
        }}
      />
    </section>
  );
}
