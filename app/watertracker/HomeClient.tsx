"use client";

import Image from "next/image";
import Link from "next/link";
import { LineChart, Paintbrush2, Cloud, Smartphone, ChevronRight } from "lucide-react";
import { useWaterTrackerScrollSpy } from "./components/useWaterTrackerScrollSpy";

type HomeSection = {
  id: string;
  title: string;
  summary: string;
  bullets: string[];
  image?: {
    src: string;
    alt: string;
    caption: string;
  };
};

const SECTIONS: HomeSection[] = [
  {
    id: "daily-tracking",
    title: "Track Intake In Seconds",
    summary:
      "Quick-add logging keeps hydration tracking fast. Switch between ml and oz anytime and see progress update instantly.",
    bullets: [
      "One-tap drink entry for daily consistency",
      "Supports ml and oz without resetting your data",
      "Clear progress view to stay on target",
    ],
    image: {
      src: "/watertrackerimages/5.png",
      alt: "Water Tracker home dashboard with hydration progress",
      caption: "Home dashboard with quick logging and unit toggle",
    },
  },
  {
    id: "reminders",
    title: "Reminder Schedule That Fits Your Day",
    summary:
      "Set reminder times, lead-time nudges, and optional follow-up alerts to build a reliable hydration routine.",
    bullets: [
      "Custom reminder time slots",
      "Lead-time and follow-up reminder options",
      "Sound and silent reminder modes",
    ],
    image: {
      src: "/watertrackerimages/4.png",
      alt: "Hydration reminder schedule screen in Water Tracker",
      caption: "Hydration goal and reminders on your schedule",
    },
  },
  {
    id: "drink-management",
    title: "Your Drinks, Your Volumes",
    summary:
      "Create and manage drink types with custom volume, icon, and color so logging matches what you actually drink.",
    bullets: [
      "Manage drink types list",
      "Custom icon and color per drink",
      "Volume controls for realistic tracking",
    ],
    image: {
      src: "/watertrackerimages/7.png",
      alt: "Manage drink types list in Water Tracker",
      caption: "Manage and personalize your drink list",
    },
  },
  {
    id: "insights",
    title: "Trend Insights, Not Guesswork",
    summary:
      "Visual trends help you understand consistency and daily performance so you can improve hydration habits over time.",
    bullets: [
      "Daily consumption vs goal visualization",
      "History for habit review",
      "Actionable progress patterns",
    ],
    image: {
      src: "/watertrackerimages/9.png",
      alt: "Hydration trend chart screen in Water Tracker",
      caption: "Trend charts to measure consistency",
    },
  },
  {
    id: "privacy",
    title: "Privacy-First By Default",
    summary:
      "No mandatory account. Hydration logs stay on-device with optional local protection like PIN and biometric unlock.",
    bullets: [
      "No login required for core tracking",
      "Local-first data model",
      "PIN and biometric protection options",
    ],
    image: {
      src: "/watertrackerimages/1.png",
      alt: "Water Tracker privacy message screen",
      caption: "Built around local data privacy",
    },
  },
  {
    id: "backup-widgets",
    title: "Backup, Widgets, and Personalization",
    summary:
      "Backup and restore support, fluid widgets, and appearance themes make the app practical for long-term daily use.",
    bullets: [
      "Backup and restore tools",
      "Fluid intake widget support",
      "Appearance themes and customization",
    ],
    image: {
      src: "/watertrackerimages/2.png",
      alt: "Backup and restore screen in Water Tracker",
      caption: "Backup and restore support for safer continuity",
    },
  },
];

export default function HomeClient({ iosUrl, androidUrl }: { iosUrl?: string; androidUrl?: string }) {
  const { activeSection, jumpTo } = useWaterTrackerScrollSpy(SECTIONS.map((section) => section.id), SECTIONS[0].id);

  return (
    <section>
      <style>{`
        .wth-hero {
          position: relative;
          overflow: hidden;
          border-radius: 0;
          border: none;
          background:
            linear-gradient(106deg, rgba(3, 18, 48, 0.12) 12%, rgba(4, 24, 66, 0.42) 40%, rgba(8, 39, 92, 0.74) 68%, rgba(10, 51, 114, 0.86) 100%),
            url("/watertrackerimages/home_page_img1.png");
          background-size: cover;
          background-position: center;
          min-height: calc(100vh - 68px);
          padding: clamp(22px, 4vw, 42px);
          margin-left: calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
          margin-top: -26px;
          margin-bottom: 26px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
        .wth-hero-panel {
          width: min(530px, 100%);
          border: 1px solid rgba(228, 242, 255, 0.3);
          border-radius: 20px;
          background: linear-gradient(160deg, rgba(6, 26, 66, 0.72) 0%, rgba(9, 45, 106, 0.84) 100%);
          box-shadow: 0 18px 42px rgba(6, 20, 48, 0.34);
          padding: clamp(18px, 3vw, 30px);
          color: #eff8ff;
          margin-left: clamp(12px, 5vw, 110px);
        }
        .wth-hero-title {
          margin: 0;
          font-size: clamp(1.7rem, 3.8vw, 3rem);
          line-height: 1.06;
          letter-spacing: -0.03em;
          text-wrap: balance;
        }
        .wth-feature-ribbon {
          margin-top: 16px;
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 10px;
        }
        .wth-laurel {
          width: clamp(42px, 6vw, 84px);
          height: auto;
          opacity: 0.9;
          filter: drop-shadow(0 6px 14px rgba(5, 19, 44, 0.45));
        }
        .wth-laurel-right {
          transform: scaleX(-1);
        }
        .wth-feature-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
        }
        .wth-feature-badge {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border: 1px solid rgba(234, 247, 255, 0.36);
          border-radius: 10px;
          background: rgba(223, 244, 255, 0.14);
          padding: 7px 10px;
          color: #e7f5ff;
          text-align: center;
        }
        .wth-store-row {
          margin-top: 18px;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          gap: 10px;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }
        .wth-store-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 calc((100% - 10px) / 2);
          min-width: 0;
          width: calc((100% - 10px) / 2);
          height: 64px;
          border-radius: 12px;
          transition: transform 0.15s ease, filter 0.15s ease;
        }
        .wth-store-link:hover {
          transform: translateY(-1px);
          filter: brightness(1.04);
        }
        .wth-store-button {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .wth-store-button-play {
          transform: scale(1.5);
          transform-origin: center;
        }
        .wth-cta-row {
          margin-top: 20px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .wth-btn {
          text-decoration: none;
          min-height: 44px;
          border-radius: 12px;
          padding: 0 14px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          border: 1px solid transparent;
        }
        .wth-btn-primary {
          background: #b7e8ff;
          color: #0f326b;
          box-shadow: 0 8px 20px rgba(8, 17, 42, 0.32);
        }
        .wth-btn-secondary {
          background: transparent;
          color: #eaf7ff;
          border-color: rgba(234, 247, 255, 0.4);
        }
        .wth-layout {
          display: flex;
          gap: 24px;
          align-items: flex-start;
        }
        .wth-sidebar {
          width: 240px;
          flex-shrink: 0;
          position: sticky;
          top: 86px;
        }
        .wth-sidebar-title {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          color: var(--wt-muted);
          margin: 0 0 10px;
          padding: 0 12px;
        }
        .wth-nav-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .wth-nav-item {
          border: none;
          text-align: left;
          cursor: pointer;
          width: 100%;
          padding: 9px 13px;
          border-radius: 11px;
          font-size: 13px;
          font-weight: 700;
          color: var(--wt-muted);
          background: transparent;
          transition: 0.2s ease;
        }
        .wth-nav-item:hover {
          background: rgba(79, 136, 255, 0.1);
        }
        .wth-nav-item.active {
          color: #fff;
          background: linear-gradient(140deg, #4f88ff, #3ec1ff);
          box-shadow: 0 5px 14px rgba(31, 79, 157, 0.2);
        }
        .wth-content {
          flex: 1;
          min-width: 0;
          display: grid;
          gap: 16px;
        }
        .wth-card {
          background: var(--wt-card);
          border: 1px solid rgba(16, 36, 79, 0.09);
          border-radius: 22px;
          padding: 28px;
          box-shadow: 0 8px 24px rgba(16, 36, 79, 0.05);
          scroll-margin-top: 95px;
        }
        .wth-card h2 {
          margin: 0;
          font-size: clamp(1.35rem, 2.6vw, 2rem);
          color: var(--wt-navy-900);
          letter-spacing: -0.02em;
        }
        .wth-card p {
          margin: 12px 0 0;
          color: var(--wt-muted);
          line-height: 1.7;
          font-size: 15px;
        }
        .wth-feature-list {
          margin: 16px 0 0;
          display: grid;
          gap: 8px;
        }
        .wth-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: var(--wt-navy-900);
          font-size: 14px;
          font-weight: 700;
        }
        .wth-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          margin-top: 6px;
          background: linear-gradient(140deg, #4f88ff, #3ec1ff);
          flex-shrink: 0;
        }
        .wth-shot {
          margin-top: 16px;
          border: 1px solid rgba(16, 36, 79, 0.08);
          border-radius: 16px;
          padding: 10px;
          background: #fff;
        }
        .wth-shot figure {
          margin: 0;
        }
        .wth-shot img {
          border-radius: 12px;
          width: 100%;
          height: auto;
        }
        .wth-shot figcaption {
          margin-top: 8px;
          font-size: 12px;
          color: var(--wt-muted);
          font-weight: 700;
        }
        .wth-faq {
          margin-top: 16px;
          border: 1px solid rgba(16, 36, 79, 0.09);
          border-radius: 14px;
          background: #f8fcff;
          padding: 14px;
        }
        .wth-faq h3 {
          margin: 0 0 8px;
          font-size: 15px;
          color: var(--wt-navy-900);
        }
        .wth-faq p {
          margin: 0;
          font-size: 14px;
        }
        .wth-bottom-cta {
          margin-top: 4px;
          background: linear-gradient(140deg, var(--wt-navy-900) 0%, var(--wt-navy-700) 100%);
          border-radius: 22px;
          padding: 30px;
          color: #fff;
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          align-items: center;
          justify-content: space-between;
        }
        .wth-bottom-cta h2 {
          margin: 0;
          color: #fff;
          font-size: clamp(1.3rem, 2.4vw, 1.9rem);
        }
        .wth-bottom-cta p {
          margin: 7px 0 0;
          color: #d6edff;
          max-width: 620px;
        }
        .wth-mobile-jumps {
          display: none;
        }
        @media (max-width: 860px) {
          .wth-hero {
            justify-content: center;
            min-height: calc(100vh - 56px);
          }
          .wth-hero-panel {
            width: min(96%, 520px);
            margin-left: 0;
          }
          .wth-feature-ribbon {
            grid-template-columns: 1fr;
            gap: 7px;
          }
          .wth-laurel {
            display: none;
          }
          .wth-store-row {
            flex-direction: column;
            align-items: stretch;
          }
          .wth-store-link {
            justify-content: center;
            width: 210px;
            height: 62px;
            flex: 0 0 auto;
          }
          .wth-layout { flex-direction: column; }
          .wth-sidebar { display: none; }
          .wth-mobile-jumps {
            display: flex;
            flex-wrap: nowrap;
            overflow-x: auto;
            gap: 8px;
            padding-bottom: 8px;
            margin-bottom: 4px;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .wth-mobile-jumps::-webkit-scrollbar { display: none; }
          .wth-mobile-jumps button {
            border: 1px solid rgba(16, 36, 79, 0.15);
            background: rgba(255, 255, 255, 0.78);
            color: var(--wt-navy-900);
            border-radius: 999px;
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            padding: 8px 12px;
            white-space: nowrap;
          }
          .wth-card { padding: 22px 16px; }
        }
        @media (max-width: 760px) {
          .wth-hero {
            margin-top: -22px;
          }
          .wth-store-link {
            width: 196px;
            height: 58px;
          }
        }
      `}</style>

      <div className="wth-hero">
        <div className="wth-hero-panel">
          <h1 className="wt-font-display wth-hero-title">Water Tracker N Reminder</h1>
          <div className="wth-feature-ribbon" aria-label="Water Tracker core features">
            <Image src="/images/png-tree-award.png" alt="" aria-hidden width={4961} height={3543} className="wth-laurel" />
            <div className="wth-feature-badges">
              <span className="wth-feature-badge">Offline • No Login • Private</span>
              <span className="wth-feature-badge">Smart Reminders</span>
              <span className="wth-feature-badge">Insightful Trend Charts</span>
            </div>
            <Image src="/images/png-tree-award.png" alt="" aria-hidden width={4961} height={3543} className="wth-laurel wth-laurel-right" />
          </div>
          <div className="wth-store-row">
            {iosUrl ? (
              <a href={iosUrl} target="_blank" rel="noopener noreferrer" className="wth-store-link" aria-label="Download on the App Store">
                <Image
                  src="/images/appstore-button-download.svg"
                  alt="Download on the App Store"
                  width={240}
                  height={80}
                  className="wth-store-button"
                />
              </a>
            ) : null}
            {androidUrl ? (
              <a href={androidUrl} target="_blank" rel="noopener noreferrer" className="wth-store-link" aria-label="Get it on Google Play">
                <Image
                  src="/images/playstore-button-download.png"
                  alt="Get it on Google Play"
                  width={646}
                  height={250}
                  className="wth-store-button wth-store-button-play"
                />
              </a>
            ) : null}
          </div>
        </div>
      </div>

      <div className="wth-mobile-jumps" aria-label="Jump to sections">
        {SECTIONS.map((section) => (
          <button key={section.id} type="button" onClick={() => jumpTo(section.id)}>
            {section.title}
          </button>
        ))}
      </div>

      <div className="wth-layout">
        <aside className="wth-sidebar" aria-label="Water tracker sections">
          <p className="wth-sidebar-title">Explore</p>
          <div className="wth-nav-list">
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => jumpTo(section.id)}
                className={`wth-nav-item ${activeSection === section.id ? "active" : ""}`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </aside>

        <div className="wth-content">
          {SECTIONS.map((section) => (
            <article id={section.id} key={section.id} className="wth-card">
              <h2 className="wt-font-display">{section.title}</h2>
              <p>{section.summary}</p>

              <div className="wth-feature-list" role="list" aria-label={`${section.title} highlights`}>
                {section.bullets.map((item) => (
                  <div className="wth-feature-item" key={item} role="listitem">
                    <span className="wth-dot" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {section.image ? (
                <div className="wth-shot">
                  <figure>
                    <Image src={section.image.src} alt={section.image.alt} width={1242} height={2688} sizes="(max-width: 860px) 100vw, 720px" />
                    <figcaption>{section.image.caption}</figcaption>
                  </figure>
                </div>
              ) : null}
            </article>
          ))}

          <div className="wth-faq">
            <h3>Is this a good water reminder app for daily use?</h3>
            <p>
              Yes. It is built for practical daily tracking with quick drink logging, schedule-based hydration reminders,
              and privacy-first local storage.
            </p>
          </div>

          <div className="wth-bottom-cta">
            <div>
              <h2 className="wt-font-display">Ready To Build Better Hydration Habits?</h2>
              <p>
                Open the full guide for setup steps, then review hydration benefits to make your intake plan sustainable.
              </p>
            </div>
            <div className="wth-cta-row" style={{ marginTop: 0 }}>
              <Link href="/watertracker/guide" className="wth-btn wth-btn-primary">
                Open Guide <ChevronRight size={14} />
              </Link>
              <Link href="/watertracker/benefits" className="wth-btn wth-btn-secondary">Read Benefits</Link>
            </div>
          </div>

          <div className="wth-faq">
            <h3>How is this different from a basic water tracker app?</h3>
            <p>
              Water Tracker N Reminder combines reminders, custom drinks, trend insights, backup support, widgets,
              and on-device privacy controls in one app flow.
            </p>
          </div>

          <div className="wth-faq">
            <h3>Need implementation-level walkthrough?</h3>
            <p>
              See the complete <Link href="/watertracker/guide" style={{ color: "var(--wt-navy-700)", fontWeight: 800 }}>WaterTracker guide</Link> to set goals,
              reminders, drink types, and backup options from start to finish.
            </p>
          </div>

          <div className="wth-faq" style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <Smartphone size={16} />
            <p style={{ margin: 0 }}>
              Looking for balanced hydration science? Read <Link href="/watertracker/benefits" style={{ color: "var(--wt-navy-700)", fontWeight: 800 }}>Benefits of Balanced Drinking</Link>.
            </p>
          </div>

          <div className="wth-faq" style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <Cloud size={16} />
            <p style={{ margin: 0 }}>
              For backup and restore details, open the guide section dedicated to recovery flow and safe device migration.
            </p>
          </div>

          <div className="wth-faq" style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <Paintbrush2 size={16} />
            <p style={{ margin: 0 }}>
              Personalization includes themes and appearance controls to match your routine and preference.
            </p>
          </div>

          <div className="wth-faq" style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <LineChart size={16} />
            <p style={{ margin: 0 }}>
              Trend charts turn logs into insights, helping you see consistency and improve over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
