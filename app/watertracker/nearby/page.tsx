import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const IMAGE_SRC = "/watertrackerimages/near_by.png";

const QUADRANT_ORIGIN: Record<string, string> = {
  "right bottom": "right bottom",
  "left top": "left top",
  "right top": "right top",
  "left bottom": "left bottom",
};

const sections = [
  {
    id: "control",
    eyebrow: "Zero Latency",
    title: "Pure Control",
    description:
      "No central server. No backend dependency. Water logs stay on-device in Realm, with optional backup to each user&apos;s own Google Drive or iCloud.",
    imagePosition: "right bottom",
    dark: false,
  },
  {
    id: "park",
    eyebrow: "Community Energy",
    title: "Morning Park Group",
    description:
      "Share hydration progress with your morning circle nearby. Social accountability works without forcing accounts or cloud-first data flow.",
    imagePosition: "left top",
    dark: false,
  },
  {
    id: "gym",
    eyebrow: "Performance Sync",
    title: "Gym Squad Synergy",
    description:
      "Gym partners can compare intake quickly between sets. Sync stays fast and private while each person keeps full ownership of their records.",
    imagePosition: "right top",
    dark: true,
  },
  {
    id: "family",
    eyebrow: "Family Insights",
    title: "Dinner Table Visibility",
    description:
      "Families can exchange daily hydration summaries at home while source data remains local on each device, not in a shared centralized store.",
    imagePosition: "left bottom",
    dark: false,
  },
];

export const metadata: Metadata = {
  title: "WaterTracker Nearby | Private Group Sharing",
  description:
    "Nearby sharing for WaterTracker: local-first hydration sync for family, gym partners, and park groups.",
  alternates: { canonical: "/watertracker/nearby" },
};

function FeatureCards({ dark }: { dark: boolean }) {
  return (
    <div className="nb-mini-grid" aria-label="Nearby highlights">
      <article className="nb-mini-card">
        <h4>Zero Servers</h4>
        <p>Data stays in your hand.</p>
      </article>
      <article className="nb-mini-card">
        <h4>End-to-End</h4>
        <p>Local P2P encryption.</p>
      </article>
      <style>{`
        .nb-mini-grid {
          margin-top: 18px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }
        .nb-mini-card {
          border-radius: 18px;
          padding: 16px;
          border: 1px solid ${dark ? "rgba(147, 193, 255, 0.2)" : "rgba(15, 36, 88, 0.08)"};
          background: ${dark ? "rgba(13, 36, 87, 0.48)" : "rgba(255, 255, 255, 0.56)"};
        }
        .nb-mini-card h4 {
          margin: 0;
          font-size: 1.02rem;
          color: ${dark ? "#f0f7ff" : "#111f49"};
        }
        .nb-mini-card p {
          margin: 6px 0 0;
          font-size: 0.9rem;
          color: ${dark ? "#bdd7ff" : "#4d628e"};
          line-height: 1.45;
        }
        @media (max-width: 760px) {
          .nb-mini-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}

export default function WaterTrackerNearbyPage() {
  return (
    <section className="nb-wrap">
      <style>{`
        .nb-wrap {
          margin-left: calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
          margin-top: -26px;
        }

        .nb-hero {
          min-height: clamp(540px, 82vh, 820px);
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          padding: clamp(24px, 5vw, 72px);
          background: linear-gradient(130deg, #f7fbff 0%, #eef5ff 48%, #dde9f8 100%);
        }
        .nb-hero-copy { max-width: 620px; }
        .nb-kicker {
          margin: 0;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 800;
          color: #2d66cb;
        }
        .nb-hero h1 {
          margin: 12px 0 0;
          font-size: clamp(2.3rem, 7vw, 6rem);
          line-height: 0.9;
          letter-spacing: -0.04em;
          color: #0e1d46;
        }
        .nb-hero h1 .accent { color: #2f67d4; }
        .nb-hero p {
          margin: 16px 0 0;
          color: #5b6f92;
          font-size: clamp(1rem, 1.8vw, 1.25rem);
          line-height: 1.7;
          max-width: 530px;
        }
        .nb-hero-cta {
          margin-top: 22px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          padding: 0 22px;
          border-radius: 14px;
          background: #0e1d46;
          color: #fff;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 800;
          letter-spacing: 0.02em;
          box-shadow: 0 14px 26px rgba(14, 29, 70, 0.22);
        }
        .nb-hero-cta:hover {
          filter: brightness(1.06);
        }
        .nb-hero-media {
          position: relative;
          overflow: visible;
          min-height: clamp(330px, 52vh, 600px);
          max-width: 760px;
          width: 100%;
          justify-self: end;
          filter: drop-shadow(0 28px 52px rgba(9, 28, 66, 0.22));
        }
        .nb-hero-frame {
          position: absolute;
          inset: 0;
          border-radius: 32px;
          overflow: hidden;
          border: 12px solid rgba(255, 255, 255, 0.72);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.35),
            0 20px 40px rgba(15, 36, 88, 0.16);
          background: linear-gradient(180deg, #0e1730 0%, #1a263f 100%);
        }
        .nb-live-card {
          position: absolute;
          right: clamp(-44px, -3.4vw, -20px);
          bottom: clamp(-42px, -3.8vw, -24px);
          z-index: 3;
          width: min(306px, calc(100% - 22px));
          border-radius: 22px;
          border: 1px solid rgba(16, 36, 79, 0.08);
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          box-shadow: 0 18px 32px rgba(16, 36, 79, 0.14);
          padding: 15px 15px 13px;
        }
        .nb-live-head {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .nb-live-icon {
          width: 40px;
          height: 40px;
          border-radius: 999px;
          background: linear-gradient(140deg, #4f88ff, #2f67d4);
          color: #fff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 900;
          box-shadow: 0 8px 18px rgba(47, 103, 212, 0.3);
        }
        .nb-live-title {
          margin: 0;
          color: #0f2458;
          font-size: 1.02rem;
          font-weight: 900;
          letter-spacing: -0.01em;
        }
        .nb-live-text {
          margin: 10px 0 0;
          color: #5a6f93;
          font-size: 0.96rem;
          line-height: 1.6;
        }

        .nb-bar {
          min-height: clamp(520px, 72vh, 760px);
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: clamp(16px, 2.8vw, 40px);
          padding: clamp(24px, 5vw, 72px);
        }
        .nb-bar.light { background: linear-gradient(125deg, #f7fbff 0%, #edf4ff 100%); }
        .nb-bar.dark { background: linear-gradient(125deg, #020f31 0%, #001440 100%); }
        .nb-copy { max-width: 620px; }
        .nb-copy h2 {
          margin: 8px 0 0;
          font-size: clamp(2rem, 5.2vw, 4.1rem);
          line-height: 0.96;
          letter-spacing: -0.035em;
        }
        .nb-copy p {
          margin: 14px 0 0;
          font-size: clamp(1rem, 1.7vw, 1.23rem);
          line-height: 1.7;
        }
        .nb-bar.light .nb-copy h2 { color: #0f1f4a; }
        .nb-bar.light .nb-copy p { color: #4d628e; }
        .nb-bar.light .nb-kicker { color: #2b66cd; }

        .nb-bar.dark .nb-copy h2 { color: #f3f8ff; }
        .nb-bar.dark .nb-copy p { color: #bfd8ff; }
        .nb-bar.dark .nb-kicker { color: #68b4ff; }

        .nb-figure {
          position: relative;
          border-radius: 36px;
          overflow: hidden;
          min-height: clamp(320px, 54vh, 620px);
          box-shadow: 0 26px 46px rgba(9, 22, 54, 0.22);
        }
        .nb-figure::after {
          content: "";
          position: absolute;
          inset: auto 0 0;
          height: 38%;
          background: linear-gradient(to top, rgba(8, 17, 39, 0.58) 0%, rgba(8, 17, 39, 0) 100%);
          pointer-events: none;
        }

        .nb-bottom {
          min-height: 56vh;
          background: linear-gradient(130deg, #f7fbff 0%, #eef4ff 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: clamp(28px, 6vw, 72px);
        }
        .nb-bottom-inner { max-width: 840px; }
        .nb-bottom h3 {
          margin: 0;
          font-size: clamp(2.1rem, 6vw, 5.2rem);
          line-height: 0.92;
          letter-spacing: -0.04em;
          color: #0e1d46;
        }
        .nb-bottom p {
          margin: 16px auto 0;
          color: #5b6f92;
          font-size: clamp(1rem, 1.8vw, 1.25rem);
          line-height: 1.7;
          max-width: 680px;
        }
        .nb-actions {
          margin-top: 18px;
          display: flex;
          gap: 10px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .nb-btn {
          min-height: 46px;
          border-radius: 12px;
          text-decoration: none;
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 0 16px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .nb-btn.primary { background: #0e1d46; color: #fff; }
        .nb-btn.secondary { color: #0e1d46; border: 1px solid rgba(14, 29, 70, 0.16); }

        @media (max-width: 980px) {
          .nb-wrap { margin-top: -22px; }
          .nb-hero,
          .nb-bar {
            grid-template-columns: 1fr;
            min-height: unset;
          }
          .nb-hero-media,
          .nb-figure {
            min-height: 360px;
          }
          .nb-hero-media {
            justify-self: stretch;
            max-width: none;
          }
          .nb-hero-frame {
            border-width: 8px;
            border-radius: 24px;
          }
          .nb-live-card {
            right: 10px;
            bottom: 10px;
            width: min(280px, calc(100% - 22px));
            border-radius: 18px;
            padding: 12px 12px 11px;
          }
          .nb-live-icon {
            width: 34px;
            height: 34px;
            font-size: 16px;
          }
          .nb-live-title { font-size: 0.96rem; }
          .nb-live-text { font-size: 0.88rem; line-height: 1.5; margin-top: 8px; }
          .nb-bar .nb-figure { order: 1; }
          .nb-bar .nb-copy { order: 2; }
          .nb-bar[data-reverse="true"] .nb-figure { order: 1; }
          .nb-bar[data-reverse="true"] .nb-copy { order: 2; }
        }
      `}</style>

      <header className="nb-hero">
        <div className="nb-hero-copy">
          <p className="nb-kicker">Introducing Nearby Ripple Sync</p>
          <h1 className="wt-font-display">
            The Data <span className="accent">Ripple</span> Effect.
          </h1>
          <p>
            Share your hydration journey with people right next to you. No server, no mandatory account, and full control over your data.
          </p>
          <Link href="#park" className="nb-hero-cta">Explore the Ripple</Link>
        </div>
        <div className="nb-hero-media">
          <div className="nb-hero-frame">
            <Image
              src={IMAGE_SRC}
              alt="WaterTracker Nearby control scenario"
              fill
              sizes="(max-width: 980px) 100vw, 50vw"
              style={{ objectFit: "cover", transform: "scale(2.2)", transformOrigin: "right bottom", top:20 }}
              priority
            />
          </div>
          <aside className="nb-live-card" aria-label="Live syncing highlight">
            <div className="nb-live-head">
              <span className="nb-live-icon" aria-hidden="true">⚡</span>
              <p className="nb-live-title">Live Syncing</p>
            </div>
            <p className="nb-live-text">
              24 hours of hydration data shared in under 2 seconds via proximity sync.
            </p>
          </aside>
        </div>
      </header>

      {sections.slice(1).map((item, index) => (
        <article key={item.id} className={`nb-bar ${item.dark ? "dark" : "light"}`} data-reverse={index % 2 === 0 ? "true" : "false"}>
          {index % 2 === 0 ? (
            <>
              <div className="nb-copy">
                <p className="nb-kicker">{item.eyebrow}</p>
                <h2 className="wt-font-display">{item.title}</h2>
                <p>{item.description}</p>
                <FeatureCards dark={item.dark} />
              </div>
              <div className="nb-figure">
                <Image
                  src={IMAGE_SRC}
                  alt={item.title}
                  fill
                  sizes="(max-width: 980px) 100vw, 50vw"
                  style={{
                    objectFit: "cover",
                    transform: "scale(2)",
                    transformOrigin: QUADRANT_ORIGIN[item.imagePosition] ?? "center",
                  }}
                />
              </div>
            </>
          ) : (
            <>
              <div className="nb-figure">
                <Image
                  src={IMAGE_SRC}
                  alt={item.title}
                  fill
                  sizes="(max-width: 980px) 100vw, 50vw"
                  style={{
                    objectFit: "cover",
                    transform: "scale(2)",
                    transformOrigin: QUADRANT_ORIGIN[item.imagePosition] ?? "center",
                  }}
                />
              </div>
              <div className="nb-copy">
                <p className="nb-kicker">{item.eyebrow}</p>
                <h2 className="wt-font-display">{item.title}</h2>
                <p>{item.description}</p>
                <FeatureCards dark={item.dark} />
              </div>
            </>
          )}
        </article>
      ))}

      <footer className="nb-bottom">
        <div className="nb-bottom-inner">
          <h3 className="wt-font-display">Stay Hydrated. Stay Private.</h3>
          <p>
            Nearby keeps social motivation while preserving ownership. Your hydration data stays with you, and backup remains your choice.
          </p>
          <div className="nb-actions">
            <Link href="/watertracker" className="nb-btn primary">Back To Overview</Link>
            <Link href="/watertracker/privacy-policy" className="nb-btn secondary">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </section>
  );
}
