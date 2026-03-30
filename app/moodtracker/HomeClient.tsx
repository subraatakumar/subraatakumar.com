"use client";

import Image from "next/image";
import Link from "next/link";
import { Smile, ShieldCheck, BellRing, LineChart, Palette, Cloud, Smartphone, ChevronRight, Brain, MoonStar } from "lucide-react";
import { useMoodTrackerScrollSpy } from "./components/useWaterTrackerScrollSpy";

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
    id: "daily-checkins",
    title: "Log Mood In Seconds",
    summary:
      "Quick check-ins keep reflection easy. Add mood, note the moment, and build a clear emotional timeline over time.",
    bullets: [
      "One-tap mood entry for daily consistency",
      "Add short notes for context behind each mood",
      "Simple timeline view to spot emotional patterns",
    ],
  },
  {
    id: "reminders",
    title: "Gentle Reminder Schedule",
    summary:
      "Set reminder windows and optional follow-up nudges so you remember to check in, even on busy days.",
    bullets: [
      "Custom reminder slots",
      "Flexible reminder frequency",
      "Silent and sound notification modes",
    ],
  },
  {
    id: "mood-management",
    title: "Your Mood Labels, Your Style",
    summary:
      "Create custom mood labels, colors, and tags so tracking reflects your real life and emotional vocabulary.",
    bullets: [
      "Manage custom mood tags",
      "Color-coded mood categories",
      "Personalized logging experience",
    ],
  },
  {
    id: "insights",
    title: "Trends You Can Understand",
    summary:
      "Trend charts help you identify what improves your mood and what patterns need attention across days and weeks.",
    bullets: [
      "Daily and weekly mood trend visuals",
      "Streak and consistency history",
      "Pattern signals for better self-awareness",
    ],
  },
  {
    id: "privacy",
    title: "Privacy-First By Default",
    summary:
      "No mandatory account. Mood logs stay on-device with optional protection such as PIN and biometric unlock.",
    bullets: [
      "No login needed for core usage",
      "Local-first data model",
      "PIN and biometric protection options",
    ],
  },
  {
    id: "backup-personalization",
    title: "Backup and Personalization",
    summary:
      "Backup and restore support plus appearance themes make MoodTracker practical for long-term use.",
    bullets: [
      "Backup and restore tools",
      "Optional widget support",
      "Appearance themes and customization",
    ],
  },
];

export default function HomeClient({ iosUrl, androidUrl }: { iosUrl?: string; androidUrl?: string }) {
  const { activeSection, jumpTo } = useMoodTrackerScrollSpy(SECTIONS.map((section) => section.id), SECTIONS[0].id);

  return (
    <section>
      <style>{`
        .wth-hero {
          border-radius: 26px;
          border: 1px solid rgba(78, 47, 122, 0.18);
          background:
            radial-gradient(circle at 7% 8%, rgba(221, 177, 255, 0.28), transparent 36%),
            radial-gradient(circle at 92% 84%, rgba(255, 182, 220, 0.24), transparent 34%),
            linear-gradient(145deg, #3c245e 0%, #5f33a0 46%, #9541b5 100%);
          padding: 34px;
          color: #fff2ff;
          margin-bottom: 26px;
        }
        .wth-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }
        .wth-brand img {
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(44, 21, 74, 0.35);
        }
        .wth-brand span {
          font-size: 13px;
          text-transform: uppercase;
          font-weight: 800;
          letter-spacing: 0.06em;
          color: #fbe8ff;
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
          border: 1px solid rgba(255, 239, 255, 0.38);
          border-radius: 999px;
          background: rgba(255, 239, 255, 0.14);
          padding: 6px 10px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .wth-hero h1 {
          margin: 0;
          font-size: clamp(2rem, 4.8vw, 3.9rem);
          letter-spacing: -0.03em;
          line-height: 1.03;
        }
        .wth-hero p {
          margin: 14px 0 0;
          color: #f4d8ff;
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
          background: #ffd8f5;
          color: #4e2f7a;
          box-shadow: 0 8px 20px rgba(35, 16, 56, 0.32);
        }
        .wth-btn-secondary {
          background: transparent;
          color: #fff2ff;
          border-color: rgba(255, 239, 255, 0.4);
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
          background: rgba(140, 88, 217, 0.1);
        }
        .wth-nav-item.active {
          color: #fff;
          background: linear-gradient(140deg, #8c58d9, #de6cb6);
          box-shadow: 0 5px 14px rgba(95, 51, 160, 0.2);
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
          background: linear-gradient(140deg, #8c58d9, #de6cb6);
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
          border: 1px solid rgba(78, 47, 122, 0.13);
          border-radius: 14px;
          background: #fff8ff;
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
          color: #f5deff;
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
        <div className="wth-brand">
          <Image src="/moodtracker/logo.png" alt="Mood Tracker" width={48} height={48} priority />
          <span>Mood Tracker</span>
        </div>
        <div className="wth-badges" aria-label="Mood tracker highlights">
          <span className="wth-badge"><Smile size={12} /> Daily Check-ins</span>
          <span className="wth-badge"><BellRing size={12} /> Gentle Reminders</span>
          <span className="wth-badge"><ShieldCheck size={12} /> Local-First Logs</span>
        </div>
        <h1 className="wt-font-display">Mood Tracker App For Daily Emotional Awareness</h1>
        <p>
          MoodTracker helps you log mood quickly, schedule check-in reminders, and understand emotional trends.
          No mandatory account, local-first privacy, and practical tools for reflection, patterns, and consistency.
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
          <Link href="/moodtracker/guide" className="wth-btn wth-btn-secondary">How To Use</Link>
          <Link href="/moodtracker/benefits" className="wth-btn wth-btn-secondary">Mental Wellness Benefits</Link>
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
        <aside className="wth-sidebar" aria-label="Mood tracker sections">
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
            <h3>Is this a good mood tracker for daily use?</h3>
            <p>
              Yes. It is built for practical daily tracking with quick mood logging, schedule-based reminders,
              and privacy-first local storage.
            </p>
          </div>

          <div className="wth-bottom-cta">
            <div>
              <h2 className="wt-font-display">Ready To Build Better Emotional Habits?</h2>
              <p>
                Open the full guide for setup steps, then review benefits to make mood tracking simple and sustainable.
              </p>
            </div>
            <div className="wth-cta-row" style={{ marginTop: 0 }}>
              <Link href="/moodtracker/guide" className="wth-btn wth-btn-primary">
                Open Guide <ChevronRight size={14} />
              </Link>
              <Link href="/moodtracker/benefits" className="wth-btn wth-btn-secondary">Read Benefits</Link>
            </div>
          </div>

          <div className="wth-faq">
            <h3>How is this different from a basic mood app?</h3>
            <p>
              MoodTracker combines reminders, custom labels, trend insights, backup support, widgets,
              and on-device privacy controls in one flow.
            </p>
          </div>

          <div className="wth-faq">
            <h3>Need implementation-level walkthrough?</h3>
            <p>
              See the complete <Link href="/moodtracker/guide" style={{ color: "var(--wt-navy-700)", fontWeight: 800 }}>MoodTracker guide</Link> to set reminders,
              customize mood labels, and configure backup options from start to finish.
            </p>
          </div>

          <div className="wth-faq" style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <Smartphone size={16} />
            <p style={{ margin: 0 }}>
              Want practical mental wellness guidance? Read <Link href="/moodtracker/benefits" style={{ color: "var(--wt-navy-700)", fontWeight: 800 }}>Benefits of Daily Mood Tracking</Link>.
            </p>
          </div>

          <div className="wth-faq" style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <Cloud size={16} />
            <p style={{ margin: 0 }}>
              For backup and restore details, open the guide section dedicated to recovery flow and safe device migration.
            </p>
          </div>

          <div className="wth-faq" style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <Palette size={16} />
            <p style={{ margin: 0 }}>
              Personalization includes themes and appearance controls to match your mood tracking style.
            </p>
          </div>

          <div className="wth-faq" style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <LineChart size={16} />
            <p style={{ margin: 0 }}>
              Trend charts turn entries into insights, helping you improve self-awareness over time.
            </p>
          </div>

          <div className="wth-faq" style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <Brain size={16} />
            <p style={{ margin: 0 }}>
              Reflective notes help connect moods with triggers, activities, and routines.
            </p>
          </div>

          <div className="wth-faq" style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <MoonStar size={16} />
            <p style={{ margin: 0 }}>
              Track day vs night mood shifts to better understand sleep and routine impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
