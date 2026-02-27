import GuideClient from "./GuideClient";
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
    title: "How to change the unit of measurement?",
    body:
      "On the Home screen, tap the 'Consumed Today' value to toggle units between milliliters (ml) and ounces (oz). The change applies immediately and updates displayed intake values and your daily goal.",
    images: [
      {
        src: "/watertrackerimages/home_screen_ml.png",
        caption: "Home screen — ml",
      },
      {
        src: "/watertrackerimages/home_screen_oz.png",
        caption: "Home screen — oz",
      },
    ],
  },
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
        .wtg-screens {
          display: flex;
          gap: 12px;
          margin-top: 14px;
          flex-wrap: wrap;
        }
        .wtg-screens figure {
          margin: 0;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid rgba(16, 36, 79, 0.08);
          background: #fff;
          display: flex;
          flex-direction: column;
          flex: 1 1 240px;
          min-width: 200px;
          position: relative;
        }
        .wtg-screens img {
          display: block;
          width: 100%;
          height: auto;
        }
        .img-wrap {
          position: relative;
        }
        .wtg-screens .overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: 800;
          font-size: 0.95rem;
          pointer-events: none;
          background: linear-gradient(180deg, rgba(0,0,0,0.0), rgba(0,0,0,0.28));
          opacity: 1;
        }
        .wtg-step-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
        }
        @media (min-width: 821px) {
          .wtg-step.has-images {
            display: grid;
            grid-template-columns: 1fr 340px;
            gap: 18px;
            align-items: start;
          }
          .wtg-step.has-images .wtg-screens {
            flex-direction: column;
            gap: 10px;
            margin-top: 0;
          }
          /* Ensure header and body occupy left column and images the right column */
          .wtg-step.has-images > .wtg-step-header,
          .wtg-step.has-images > p {
            grid-column: 1 / 2;
          }
          .wtg-step.has-images > .wtg-screens {
            grid-column: 2 / 3;
          }
          .wtg-screens figure {
            min-width: auto;
            flex: none;
          }
          .wtg-screens img {
            max-height: 220px;
            object-fit: cover;
          }
        }

        .wtg-modal {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.6);
          z-index: 1200;
        }
        .wtg-modal .inner {
          max-width: 92%;
          max-height: 92%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .wtg-modal img {
          max-width: 100%;
          max-height: 85vh;
          border-radius: 8px;
        }
        .wtg-modal .caption {
          margin-top: 10px;
          color: #fff;
          text-align: center;
        }
        .wtg-modal .close {
          position: absolute;
          top: 18px;
          right: 18px;
          background: transparent;
          border: none;
          color: #fff;
          font-size: 22px;
          cursor: pointer;
        }
        .wtg-screens figcaption {
          padding: 8px 10px;
          font-size: 0.9rem;
          color: #17386f;
          text-align: center;
          background: #f8fcff;
        }
        .wtg-step {
          border-radius: 16px;
          border: 1px solid rgba(16, 36, 79, 0.12);
          background: linear-gradient(180deg, #fff, #eff7ff);
          padding: 16px 14px;
        }
        .wtg-step.has-images {
          grid-column: 1 / -1;
        }
        .wtg-step.has-images .n {
          margin-bottom: 0;
          margin-right: 10px;
          vertical-align: middle;
        }
        .wtg-step.has-images b {
          display: inline-block;
          vertical-align: middle;
          margin-bottom: 0;
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

      <GuideClient steps={steps} faq={faq} />

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
                  ...(step.images ? { image: step.images.map((im) => absoluteUrl(im.src)) } : {}),
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
