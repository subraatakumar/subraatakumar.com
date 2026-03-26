"use client";

import Link from "next/link";
import {
  BellRing,
  ChevronRight,
  Cloud,
  CreditCard,
  LineChart,
  Pill,
  ShieldCheck,
} from "lucide-react";
import { usePillTrackerScrollSpy } from "./components/usePillTrackerScrollSpy";

type HomeSection = {
  id: string;
  title: string;
  summary: string;
  bullets: string[];
};

const SECTIONS: HomeSection[] = [
  {
    id: "medication-management",
    title: "Medication Management",
    summary:
      "Create and manage medicine schedules with reminder timing, tone preferences, and optional medicine photos.",
    bullets: [
      "Add, edit, and delete medicines with dose details",
      "Optional medicine image from camera or gallery",
      "Reminder timing and pre-alert options",
    ],
  },
  {
    id: "timeline-adherence",
    title: "Timeline and Adherence",
    summary:
      "Track doses by date with clear status actions so users can review consistency and recover quickly from misses.",
    bullets: [
      "Taken, skipped, and snoozed actions",
      "Undo taken when correction is needed",
      "Date-based timeline with daily visibility",
    ],
  },
  {
    id: "inventory-bills",
    title: "Inventory and Bills",
    summary:
      "Bill-linked stock tracking keeps inventory practical and helps estimate days left based on local dose actions.",
    bullets: [
      "Add inventory by bill with grouped medicines",
      "Attach bill images and review history",
      "Stock updates from dose and bill edits",
    ],
  },
  {
    id: "privacy-security",
    title: "Privacy and Security",
    summary:
      "PillTracker is local-first with optional lock protection and no mandatory account for core medication tracking.",
    bullets: [
      "Offline-first local storage",
      "Optional PIN and biometric lock",
      "No account required for core usage",
    ],
  },
  {
    id: "pro-access",
    title: "Pro Access and Unlock Options",
    summary:
      "Support both paid plans and rewarded unlock mode while preserving a useful free baseline for daily tracking.",
    bullets: [
      "One subscription and one one-time purchase",
      "24-hour advanced unlock via rewarded ads",
      "Flexible monetization for different users",
    ],
  },
];

export default function HomeClient({ iosUrl, androidUrl }: { iosUrl?: string; androidUrl?: string }) {
  const { activeSection, jumpTo } = usePillTrackerScrollSpy(
    SECTIONS.map((section) => section.id),
    SECTIONS[0].id
  );

  return (
    <section>
      <style>{`
        .pth-hero {
          border-radius: 26px;
          border: 1px solid rgba(18, 59, 99, 0.12);
          background:
            radial-gradient(circle at 8% 10%, rgba(143, 221, 255, 0.28), transparent 36%),
            radial-gradient(circle at 88% 82%, rgba(134, 233, 189, 0.23), transparent 34%),
            linear-gradient(145deg, #0f4d85 0%, #1f77b4 52%, #2ea8d7 100%);
          padding: 38px;
          color: #eff9ff;
          margin-bottom: 26px;
        }
        .pth-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 16px;
        }
        .pth-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border: 1px solid rgba(239, 249, 255, 0.44);
          border-radius: 999px;
          background: rgba(239, 249, 255, 0.12);
          padding: 6px 10px;
        }
        .pth-hero h1 {
          margin: 0;
          font-size: clamp(2rem, 4.8vw, 3.8rem);
          letter-spacing: -0.03em;
          line-height: 1.03;
        }
        .pth-hero p {
          margin: 14px 0 0;
          color: #d8effd;
          line-height: 1.7;
          max-width: 780px;
          font-size: 1.03rem;
        }
        .pth-cta-row {
          margin-top: 20px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .pth-btn {
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
          gap: 6px;
        }
        .pth-btn-primary {
          background: linear-gradient(140deg, var(--pt-orange-400), var(--pt-orange-500));
          color: #5e2c00;
          box-shadow: 0 8px 20px rgba(29, 109, 165, 0.32);
        }
        .pth-btn-secondary {
          background: transparent;
          color: #eff9ff;
          border-color: rgba(239, 249, 255, 0.5);
        }
        .pth-layout {
          display: flex;
          gap: 24px;
          align-items: flex-start;
        }
        .pth-sidebar {
          width: 240px;
          flex-shrink: 0;
          position: sticky;
          top: 86px;
        }
        .pth-sidebar-title {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          color: var(--pt-muted);
          margin: 0 0 10px;
          padding: 0 12px;
        }
        .pth-nav-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .pth-nav-item {
          border: none;
          text-align: left;
          cursor: pointer;
          width: 100%;
          padding: 9px 13px;
          border-radius: 11px;
          font-size: 13px;
          font-weight: 700;
          color: var(--pt-muted);
          background: transparent;
          transition: 0.2s ease;
        }
        .pth-nav-item:hover {
          background: rgba(86, 194, 242, 0.16);
        }
        .pth-nav-item.active {
          color: #ffffff;
          background: linear-gradient(140deg, var(--pt-cyan-400), var(--pt-blue-700));
          box-shadow: 0 5px 14px rgba(29, 109, 165, 0.24);
        }
        .pth-content {
          flex: 1;
          min-width: 0;
          display: grid;
          gap: 16px;
        }
        .pth-card {
          background: var(--pt-card);
          border: 1px solid rgba(18, 59, 99, 0.1);
          border-radius: 22px;
          padding: 28px;
          box-shadow: 0 8px 24px rgba(18, 59, 99, 0.06);
          scroll-margin-top: 95px;
        }
        .pth-card h2 {
          margin: 0;
          font-size: clamp(1.35rem, 2.6vw, 2rem);
          color: var(--pt-blue-900);
          letter-spacing: -0.02em;
        }
        .pth-card p {
          margin: 12px 0 0;
          color: var(--pt-muted);
          line-height: 1.7;
          font-size: 15px;
        }
        .pth-feature-list {
          margin: 16px 0 0;
          display: grid;
          gap: 8px;
        }
        .pth-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: var(--pt-blue-900);
          font-size: 14px;
          font-weight: 700;
        }
        .pth-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          margin-top: 6px;
          background: linear-gradient(140deg, var(--pt-cyan-400), var(--pt-orange-500));
          flex-shrink: 0;
        }
        .pth-faq {
          margin-top: 4px;
          border: 1px solid rgba(18, 59, 99, 0.1);
          border-radius: 14px;
          background: #f5fcff;
          padding: 14px;
          color: var(--pt-muted);
          font-size: 14px;
          line-height: 1.65;
        }
        .pth-faq h3 {
          margin: 0 0 8px;
          font-size: 15px;
          color: var(--pt-blue-900);
        }
        .pth-bottom-cta {
          margin-top: 4px;
          background: linear-gradient(140deg, var(--pt-blue-900) 0%, var(--pt-blue-700) 100%);
          border-radius: 22px;
          padding: 30px;
          color: #ffffff;
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          align-items: center;
          justify-content: space-between;
        }
        .pth-bottom-cta h2 {
          margin: 0;
          color: #ffffff;
          font-size: clamp(1.3rem, 2.4vw, 1.9rem);
        }
        .pth-bottom-cta p {
          margin: 7px 0 0;
          color: #cceeff;
          max-width: 620px;
        }
        .pth-mobile-jumps {
          display: none;
        }
        @media (max-width: 860px) {
          .pth-hero { padding: 28px 18px; }
          .pth-layout { flex-direction: column; }
          .pth-sidebar { display: none; }
          .pth-mobile-jumps {
            display: flex;
            flex-wrap: nowrap;
            overflow-x: auto;
            gap: 8px;
            padding-bottom: 8px;
            margin-bottom: 4px;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .pth-mobile-jumps::-webkit-scrollbar { display: none; }
          .pth-mobile-jumps button {
            border: 1px solid rgba(18, 59, 99, 0.16);
            background: rgba(255, 255, 255, 0.78);
            color: var(--pt-blue-900);
            border-radius: 999px;
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            padding: 8px 12px;
            white-space: nowrap;
          }
          .pth-card { padding: 22px 16px; }
        }
      `}</style>

      <div className="pth-hero">
        <div className="pth-badges" aria-label="Pill tracker highlights">
          <span className="pth-badge"><Pill size={12} /> Daily Medication</span>
          <span className="pth-badge"><BellRing size={12} /> Smart Reminders</span>
          <span className="pth-badge"><ShieldCheck size={12} /> Local-First Privacy</span>
        </div>
        <h1 className="pt-font-display">PillTracker For Medication Reminders and Inventory Control</h1>
        <p>
          PillTracker helps users manage medicines, dose logs, timeline actions, and bill-based stock in one
          offline-first workflow with optional lock protection and flexible upgrade paths.
        </p>
        <div className="pth-cta-row">
          {iosUrl ? (
            <a href={iosUrl} target="_blank" rel="noopener noreferrer" className="pth-btn pth-btn-primary">Download on App Store</a>
          ) : (
            <span className="pth-btn pth-btn-secondary">App Store Link Pending</span>
          )}
          {androidUrl ? (
            <a href={androidUrl} target="_blank" rel="noopener noreferrer" className="pth-btn pth-btn-secondary">Get it on Play Store</a>
          ) : (
            <span className="pth-btn pth-btn-secondary">Play Store Under Review</span>
          )}
          <Link href="/pilltracker/privacy-policy" className="pth-btn pth-btn-secondary">Privacy Policy</Link>
          <Link href="/pilltracker/terms" className="pth-btn pth-btn-secondary">Terms of Use</Link>
        </div>
      </div>

      <div className="pth-mobile-jumps" aria-label="Jump to sections">
        {SECTIONS.map((section) => (
          <button key={section.id} type="button" onClick={() => jumpTo(section.id)}>
            {section.title}
          </button>
        ))}
      </div>

      <div className="pth-layout">
        <aside className="pth-sidebar" aria-label="Pill tracker sections">
          <p className="pth-sidebar-title">Explore</p>
          <div className="pth-nav-list">
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => jumpTo(section.id)}
                className={`pth-nav-item ${activeSection === section.id ? "active" : ""}`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </aside>

        <div className="pth-content">
          {SECTIONS.map((section) => (
            <article id={section.id} key={section.id} className="pth-card">
              <h2 className="pt-font-display">{section.title}</h2>
              <p>{section.summary}</p>

              <div className="pth-feature-list" role="list" aria-label={`${section.title} highlights`}>
                {section.bullets.map((item) => (
                  <div className="pth-feature-item" key={item} role="listitem">
                    <span className="pth-dot" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}

          <div className="pth-faq">
            <h3>Does PillTracker require account creation?</h3>
            <p>
              No. PillTracker is designed for local-first use and does not require account setup for core medication tracking.
            </p>
          </div>

          <div className="pth-bottom-cta">
            <div>
              <h2 className="pt-font-display">Review Policies Before Publishing?</h2>
              <p>
                Keep legal and product messaging aligned by reviewing the latest privacy and terms pages used for PillTracker.
              </p>
            </div>
            <div className="pth-cta-row" style={{ marginTop: 0 }}>
              <Link href="/pilltracker/privacy-policy" className="pth-btn pth-btn-primary">
                Open Privacy <ChevronRight size={14} />
              </Link>
              <Link href="/pilltracker/terms" className="pth-btn pth-btn-secondary">Open Terms</Link>
            </div>
          </div>

          <div className="pth-faq" style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <LineChart size={16} />
            <p style={{ margin: 0 }}>
              Timeline logs and dose state updates give a practical adherence history for daily review.
            </p>
          </div>

          <div className="pth-faq" style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <Cloud size={16} />
            <p style={{ margin: 0 }}>
              Backup and restore flows support safe continuity when users migrate devices.
            </p>
          </div>

          <div className="pth-faq" style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <CreditCard size={16} />
            <p style={{ margin: 0 }}>
              Premium plans and rewarded unlock mode support both paid and ad-assisted usage paths.
            </p>
          </div>

          <div className="pth-faq" style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <Pill size={16} />
            <p style={{ margin: 0 }}>
              Bill-linked inventory plus medicine schedule controls keeps reminder and stock flows connected.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
