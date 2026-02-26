import Link from "next/link";
import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "WaterTracker Guide",
  description:
    "Step-by-step guide to use WaterTracker: setup goal, add drinks, log intake, configure reminders, protect data, and backup/restore.",
  alternates: {
    canonical: "/watertracker/guide",
  },
  openGraph: {
    title: "WaterTracker How-To Guide",
    description:
      "Learn how to set up and use WaterTracker with reminders, custom drinks, PIN/Biometric lock, and backup flows.",
    url: "/watertracker/guide",
    type: "article",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "WaterTracker How-To Guide",
    description:
      "Learn how to set up and use WaterTracker with reminders, custom drinks, PIN/Biometric lock, and backup flows.",
    images: [DEFAULT_OG_IMAGE],
  },
};

const steps = [
  {
    title: "Set Daily Hydration Goal",
    body:
      "Open goal settings, pick your unit (ml or oz), then set a realistic daily target. Start conservative and increase over time.",
  },
  {
    title: "Create Your Drink List",
    body:
      "Use Manage Drinks to add custom items with icon, color, and volume. Keep common choices at the top for faster logging.",
  },
  {
    title: "Log Intake Quickly",
    body:
      "On the intake screen, tap drink chips for the current day and save. The dashboard ring updates immediately.",
  },
  {
    title: "Schedule Smart Reminders",
    body:
      "Add reminders based on your routine and choose alert style. Enable follow-up reminders if you often miss notifications.",
  },
  {
    title: "Enable PIN and Biometric",
    body:
      "Protect your local data with a 6-digit PIN and optional biometrics for fast unlock.",
  },
  {
    title: "Backup and Restore",
    body:
      "Use cloud backup options (iCloud or Google Drive depending on device) to create restore points before switching phones.",
  },
];

const faq = [
  {
    q: "Do I need an account to use WaterTracker?",
    a: "No. Core hydration tracking works without account signup. Data is stored locally on device.",
  },
  {
    q: "Where is my hydration data stored?",
    a: "Hydration history, drink presets, and app preferences are stored in on-device Realm database.",
  },
  {
    q: "Can I track custom drinks and units?",
    a: "Yes. You can create custom drinks and use either ml or oz units depending on your preference.",
  },
  {
    q: "How do I move data to a new phone?",
    a: "Use Backup & Restore to create a backup, then restore from the same cloud provider on the new device.",
  },
  {
    q: "What if reminders are not firing?",
    a: "Check system notification permissions, battery restrictions, and the reminder schedule inside the app.",
  },
];

export default function WaterTrackerGuidePage() {
  return (
    <article>
      <style>{`
        .wtg-wrap {
          border-radius: 24px;
          border: 1px solid rgba(16, 36, 79, 0.1);
          background: rgba(255,255,255,0.85);
          padding: 30px 26px;
        }
        .wtg-wrap h1 {
          margin: 0;
          font-size: clamp(2rem, 4vw, 3rem);
          letter-spacing: -0.03em;
          color: #0f2458;
        }
        .wtg-intro {
          margin: 14px 0 22px;
          color: #4a5f8c;
          line-height: 1.8;
          max-width: 900px;
        }
        .wtg-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .wtg-step {
          border-radius: 16px;
          border: 1px solid rgba(16, 36, 79, 0.12);
          background: linear-gradient(180deg, #fff, #eff7ff);
          padding: 16px 14px;
        }
        .wtg-step .n {
          width: 28px;
          height: 28px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #3c82ff;
          color: #fff;
          font-weight: 800;
          font-size: 12px;
          margin-bottom: 8px;
        }
        .wtg-step b {
          color: #14336f;
          display: block;
          margin-bottom: 5px;
        }
        .wtg-step p {
          margin: 0;
          color: #4b5f89;
          line-height: 1.6;
          font-size: 0.95rem;
        }
        .wtg-section {
          margin-top: 18px;
          border-radius: 16px;
          border: 1px solid rgba(16, 36, 79, 0.1);
          background: #fff;
          padding: 16px;
        }
        .wtg-section h2 {
          margin: 0 0 8px;
          color: #0f2458;
          font-size: 1.35rem;
        }
        .wtg-faq {
          display: grid;
          gap: 10px;
          margin-top: 10px;
        }
        .wtg-faq-item {
          border-radius: 12px;
          border: 1px solid rgba(16, 36, 79, 0.1);
          background: #f8fcff;
          padding: 12px;
        }
        .wtg-faq-item b {
          color: #17386f;
          display: block;
          margin-bottom: 4px;
          font-size: 0.98rem;
        }
        .wtg-faq-item p {
          margin: 0;
          color: #4d5f86;
          line-height: 1.6;
          font-size: 0.95rem;
        }
        .wtg-actions {
          margin-top: 18px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .wtg-btn {
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 42px;
          padding: 0 14px;
          border-radius: 10px;
          font-size: 13px;
          text-transform: uppercase;
          font-weight: 800;
          letter-spacing: 0.04em;
        }
        .wtg-btn-primary {
          background: #3f82ff;
          color: #fff;
        }
        .wtg-btn-ghost {
          border: 1px solid rgba(16, 36, 79, 0.2);
          color: #17386f;
          background: #fff;
        }
        @media (max-width: 820px) {
          .wtg-wrap {
            padding: 22px 16px;
          }
          .wtg-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="wtg-wrap">
        <h1 className="wt-font-display">How To Use WaterTracker</h1>
        <p className="wtg-intro">
          This guide covers the fastest setup flow and the core features: drink management,
          intake logging, reminders, data protection, and backup/restore.
        </p>

        <div className="wtg-grid">
          {steps.map((step, index) => (
            <div key={step.title} className="wtg-step">
              <span className="n">{index + 1}</span>
              <b>{step.title}</b>
              <p>{step.body}</p>
            </div>
          ))}
        </div>

        <div className="wtg-section">
          <h2 className="wt-font-display">Quick FAQ</h2>
          <div className="wtg-faq">
            {faq.map((item) => (
              <div key={item.q} className="wtg-faq-item">
                <b>{item.q}</b>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="wtg-section">
          <h2 className="wt-font-display">Need More Help?</h2>
          <p style={{ margin: 0, color: "#4b5f89", lineHeight: 1.7 }}>
            If something is unclear or you hit an issue, share the exact device and app behavior
            so support can reproduce and guide you quickly.
          </p>
          <div className="wtg-actions">
            <Link href="/watertracker" className="wtg-btn wtg-btn-primary">Back To Landing Page</Link>
            <Link href="/watertracker/benefits" className="wtg-btn wtg-btn-ghost">Hydration Benefits</Link>
            <Link href="/contact" className="wtg-btn wtg-btn-ghost">Contact Support</Link>
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
                "@type": "HowTo",
                name: "How to use WaterTracker",
                description:
                  "Step-by-step setup and usage guide for WaterTracker hydration app.",
                url: absoluteUrl("/watertracker/guide"),
                step: steps.map((step, i) => ({
                  "@type": "HowToStep",
                  position: i + 1,
                  name: step.title,
                  text: step.body,
                })),
              },
              {
                "@type": "FAQPage",
                mainEntity: faq.map((item) => ({
                  "@type": "Question",
                  name: item.q,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: item.a,
                  },
                })),
              },
              {
                "@type": "WebPage",
                name: "WaterTracker Guide",
                url: absoluteUrl("/watertracker/guide"),
              },
            ],
          }),
        }}
      />
    </article>
  );
}
