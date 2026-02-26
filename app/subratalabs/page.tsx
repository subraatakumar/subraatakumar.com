import Link from "next/link";
import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Subrata Labs",
  description:
    "Subrata Labs is the Execution Studio for practical AI products, systems, and developer ecosystems, starting with the 180Days structured build track.",
  alternates: {
    canonical: "/subratalabs",
  },
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
    <section>
      <style>{`
        .labs-hero {
          border-radius: 28px;
          border: 1px solid rgba(237, 237, 237, 0.12);
          padding: 42px 38px;
          background:
            radial-gradient(circle at 0% 0%, rgba(0, 201, 167, 0.24), transparent 32%),
            radial-gradient(circle at 100% 100%, rgba(0, 201, 167, 0.18), transparent 30%),
            linear-gradient(150deg, #111111 0%, #1c1f26 60%, #13151b 100%);
          position: relative;
          overflow: hidden;
        }
        .labs-hero::after {
          content: "";
          position: absolute;
          inset: auto -40px -95px -40px;
          height: 180px;
          background: radial-gradient(circle at 50% 0%, rgba(0, 201, 167, 0.36), transparent 70%);
          pointer-events: none;
        }
        .labs-kicker {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
          color: #78f6dc;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border: 1px solid rgba(120, 246, 220, 0.35);
          border-radius: 999px;
          padding: 7px 12px;
          background: rgba(0, 201, 167, 0.12);
        }
        .labs-hero h1 {
          margin: 0;
          font-size: clamp(2rem, 4.5vw, 4.2rem);
          letter-spacing: -0.03em;
          line-height: 0.98;
        }
        .labs-hero h1 span {
          color: #00c9a7;
        }
        .labs-hero p {
          margin: 18px 0 24px;
          color: #c6c9ce;
          max-width: 760px;
          line-height: 1.8;
          font-size: 1.06rem;
        }
        .labs-cta {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .labs-btn {
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          padding: 0 15px;
          border-radius: 11px;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-weight: 800;
          border: 1px solid transparent;
        }
        .labs-btn-primary {
          color: #042019;
          background: linear-gradient(145deg, #7df5de, #00c9a7);
        }
        .labs-btn-secondary {
          color: #ececec;
          border-color: rgba(236, 236, 236, 0.26);
          background: rgba(255, 255, 255, 0.03);
        }
        .labs-grid {
          margin-top: 22px;
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: 16px;
        }
        .labs-card {
          border-radius: 18px;
          border: 1px solid rgba(237, 237, 237, 0.12);
          background: linear-gradient(180deg, rgba(28,31,38,0.92), rgba(17,17,17,0.94));
          padding: 18px 16px;
        }
        .labs-card h2 {
          margin: 0 0 8px;
          font-size: 1.5rem;
          letter-spacing: -0.02em;
          color: #ededed;
        }
        .labs-card p {
          margin: 0;
          color: #a4aab2;
          line-height: 1.7;
        }
        .labs-track-live {
          margin-top: 12px;
          border-radius: 13px;
          border: 1px solid rgba(0, 201, 167, 0.35);
          background: rgba(0, 201, 167, 0.1);
          padding: 12px;
        }
        .labs-track-live b {
          color: #74f0d6;
          display: block;
          margin-bottom: 4px;
        }
        .labs-track-live p {
          color: #c7ebe3;
          margin-bottom: 10px;
          font-size: 0.95rem;
        }
        .labs-mini-btn {
          text-decoration: none;
          color: #041f19;
          background: #69f2d6;
          border-radius: 8px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 8px 11px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .labs-track-list {
          display: grid;
          gap: 9px;
          margin-top: 10px;
        }
        .labs-track-item {
          border-radius: 11px;
          border: 1px solid rgba(237, 237, 237, 0.14);
          background: rgba(17, 17, 17, 0.52);
          padding: 10px 11px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          color: #e3e4e6;
          font-weight: 700;
        }
        .labs-track-item span {
          color: #7a7f87;
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          font-weight: 800;
        }
        .labs-pill-row {
          margin-top: 14px;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .labs-pill {
          border-radius: 999px;
          border: 1px solid rgba(0, 201, 167, 0.35);
          background: rgba(0, 201, 167, 0.08);
          color: #7df5de;
          font-size: 11px;
          letter-spacing: 0.05em;
          font-weight: 800;
          text-transform: uppercase;
          padding: 7px 10px;
        }
        @media (max-width: 920px) {
          .labs-hero {
            padding: 30px 18px;
          }
          .labs-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="labs-hero">
        <span className="labs-kicker">Execution Studio</span>
        <h1 className="labs-font-display">
          Subrata <span>Labs</span>
        </h1>
        <p>
          Building practical AI products, systems, and developer ecosystems. Subrata Labs
          is a long-horizon execution studio where learning tracks evolve into production-ready
          capabilities and reusable frameworks.
        </p>
        <div className="labs-cta">
          <Link href="/180days" className="labs-btn labs-btn-primary">Explore 180Days</Link>
          <Link href="/products" className="labs-btn labs-btn-secondary">View All Products</Link>
        </div>
      </div>

      <div className="labs-grid">
        <div className="labs-card">
          <h2 className="labs-font-display">Structured Learning Tracks</h2>
          <p>
            Each track has a distinct theme and delivery style, but all tracks share one mission:
            practical depth that can be converted into real products and systems.
          </p>
          <div className="labs-track-live">
            <b>Live Track: 180Days</b>
            <p>
              Daily build-and-document execution track for architecture-first product development
              in the AI era.
            </p>
            <Link href="/180days" className="labs-mini-btn">Open 180Days</Link>
          </div>
        </div>

        <div className="labs-card">
          <h2 className="labs-font-display">Coming Next</h2>
          <div className="labs-track-list">
            {upcomingTracks.map((track) => (
              <div key={track} className="labs-track-item">
                <b>{track}</b>
                <span>Planned</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="labs-pill-row">
        <span className="labs-pill">AI Products</span>
        <span className="labs-pill">Developer Ecosystems</span>
        <span className="labs-pill">Enterprise Systems</span>
        <span className="labs-pill">Monetization Frameworks</span>
        <span className="labs-pill">Desktop/Mobile AI</span>
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
                slogan: "Execution Studio for practical AI products, systems & developer ecosystems.",
                url: absoluteUrl("/subratalabs"),
                description:
                  "Execution Studio for practical AI products, systems, and developer ecosystems.",
              },
              {
                "@type": "ItemList",
                name: "Subrata Labs Learning Tracks",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "180Days",
                    url: absoluteUrl("/180days"),
                  },
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
