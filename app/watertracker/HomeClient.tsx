"use client";

import Image from "next/image";
import Link from "next/link";
import { Droplets, ShieldCheck, BellRing, LineChart, Paintbrush2, Cloud, Smartphone, ChevronRight } from "lucide-react";
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
          border-radius: 26px;
          border: 1px solid rgba(16, 36, 79, 0.12);
          background:
            radial-gradient(circle at 7% 8%, rgba(111, 192, 255, 0.26), transparent 36%),
            radial-gradient(circle at 92% 84%, rgba(98, 201, 255, 0.24), transparent 34%),
            linear-gradient(145deg, #0e2a66 0%, #1a4a98 46%, #2d73d1 100%);
          padding: 38px;
          color: #eaf7ff;
          margin-bottom: 26px;
        }
        .wth-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 16px;
        }
        .wth-badge {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border: 1px solid rgba(234, 247, 255, 0.36);
          border-radius: 999px;
          background: rgba(234, 247, 255, 0.12);
          padding: 6px 10px;
        }
        .wth-hero h1 {
          margin: 0;
          font-size: clamp(2rem, 4.8vw, 3.9rem);
          letter-spacing: -0.03em;
          line-height: 1.03;
        }
        .wth-hero p {
          margin: 14px 0 0;
          color: #cce9ff;
          line-height: 1.7;
          max-width: 760px;
          font-size: 1.03rem;
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
          .wth-hero { padding: 28px 18px; }
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
      `}</style>

      <div className="wth-hero">
        <div className="wth-badges" aria-label="Water tracker highlights">
          <span className="wth-badge"><Droplets size={12} /> Privacy-First</span>
          <span className="wth-badge"><BellRing size={12} /> Smart Reminders</span>
          <span className="wth-badge"><ShieldCheck size={12} /> Local-First Logs</span>
        </div>
        <h1 className="wt-font-display">Best Water Tracker App For Daily Hydration Consistency</h1>
        <p>
          Water Tracker N Reminder helps you log intake fast, set reminder schedules, and keep control of hydration data.
          No mandatory account, flexible ml/oz units, and practical tools for reminders, trends, backups, and personalization.
        </p>
        <div className="wth-cta-row">
          {iosUrl ? (
            <a href={iosUrl} target="_blank" rel="noopener noreferrer" className="wth-btn wth-btn-primary">Download on App Store</a>
          ) : (
            <span className="wth-btn wth-btn-secondary">App Store Link Pending</span>
          )}
          {androidUrl ? (
            <a href={androidUrl} target="_blank" rel="noopener noreferrer" className="wth-btn wth-btn-secondary">Get it on Play Store</a>
          ) : (
            <span className="wth-btn wth-btn-secondary">Play Store Under Review</span>
          )}
          <Link href="/watertracker/guide" className="wth-btn wth-btn-secondary">How To Use</Link>
          <Link href="/watertracker/benefits" className="wth-btn wth-btn-secondary">Hydration Benefits</Link>
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
