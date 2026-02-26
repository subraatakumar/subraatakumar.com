import Link from "next/link";
import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, absoluteUrl } from "@/lib/seo";

const IOS_URL = process.env.NEXT_PUBLIC_WATERTRACKER_IOS_URL;
const ANDROID_URL = process.env.NEXT_PUBLIC_WATERTRACKER_ANDROID_URL;

export const metadata: Metadata = {
  title: "WaterTracker App",
  description:
    "WaterTracker helps you log fluids, set reminders, and protect hydration history with PIN/Biometric lock and local-first Realm storage.",
  alternates: {
    canonical: "/watertracker",
  },
  openGraph: {
    title: "WaterTracker | Stay Hydrated. Stay in Control.",
    description:
      "Local-first hydration app with custom drinks, reminders, backup/restore, and privacy-first storage.",
    url: "/watertracker",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "WaterTracker | Stay Hydrated. Stay in Control.",
    description:
      "Local-first hydration app with custom drinks, reminders, backup/restore, and privacy-first storage.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function WaterTrackerPage() {
  return (
    <section>
      <style>{`
        .wt-hero {
          border-radius: 28px;
          overflow: hidden;
          position: relative;
          border: 1px solid rgba(20, 51, 111, 0.1);
          background:
            radial-gradient(circle at 14% 0%, rgba(127, 195, 255, 0.36), transparent 35%),
            radial-gradient(circle at 92% 90%, rgba(94, 173, 255, 0.3), transparent 32%),
            linear-gradient(145deg, #0f2458 0%, #163b7e 45%, #2f6bc2 100%);
          color: #e9f6ff;
          padding: 48px 38px;
          min-height: 420px;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 26px;
        }
        .wt-badge-row {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 18px;
        }
        .wt-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 10px;
          border-radius: 999px;
          background: rgba(217, 245, 255, 0.15);
          border: 1px solid rgba(217, 245, 255, 0.3);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.03em;
          text-transform: uppercase;
        }
        .wt-hero h1 {
          margin: 0;
          line-height: 1.02;
          letter-spacing: -0.03em;
          font-size: clamp(2.1rem, 5vw, 4rem);
        }
        .wt-hero p {
          color: #c5e7ff;
          font-size: 1.08rem;
          line-height: 1.7;
          max-width: 580px;
          margin: 18px 0 24px;
        }
        .wt-cta {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          align-items: center;
        }
        .wt-btn {
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          letter-spacing: 0.03em;
          font-size: 13px;
          text-transform: uppercase;
          border-radius: 12px;
          min-height: 46px;
          padding: 0 16px;
          border: 1px solid transparent;
        }
        .wt-btn-primary {
          background: #8fd5ff;
          color: #103068;
          box-shadow: 0 10px 22px rgba(9, 19, 48, 0.35);
        }
        .wt-btn-secondary {
          background: transparent;
          color: #def3ff;
          border-color: rgba(222, 243, 255, 0.4);
        }
        .wt-btn-disabled {
          background: rgba(255,255,255,0.12);
          color: #c2d8f3;
          border-color: rgba(255,255,255,0.2);
          cursor: default;
        }
        .wt-phone {
          align-self: center;
          justify-self: center;
          width: min(100%, 330px);
          border-radius: 30px;
          background: linear-gradient(180deg, rgba(193, 234, 255, 0.97), rgba(220, 244, 255, 0.9));
          border: 2px solid rgba(224, 244, 255, 0.45);
          box-shadow: 0 28px 50px rgba(8, 17, 42, 0.45);
          padding: 16px 16px 14px;
          transform: rotate(-7deg);
        }
        .wt-phone-notch {
          width: 96px;
          height: 22px;
          background: #091631;
          border-radius: 999px;
          margin: 0 auto 12px;
        }
        .wt-phone-card {
          background: rgba(255,255,255,0.9);
          border-radius: 14px;
          border: 1px solid rgba(16, 36, 79, 0.1);
          padding: 14px 12px;
        }
        .wt-ring {
          margin: 14px 0 10px;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          background:
            conic-gradient(#4fc6ff 0 60%, #f59e0b 60% 75%, #95d5ff 75% 100%);
          position: relative;
        }
        .wt-ring::after {
          content: "";
          position: absolute;
          inset: 18px;
          border-radius: 50%;
          background: #fff;
        }
        .wt-ring-value {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          font-size: 20px;
          font-weight: 800;
          color: #17386f;
        }
        .wt-section {
          margin-top: 24px;
          padding: 28px;
          border-radius: 24px;
          background: rgba(255,255,255,0.82);
          border: 1px solid rgba(20, 51, 111, 0.08);
        }
        .wt-section h2 {
          margin: 0 0 10px;
          font-size: clamp(1.4rem, 2.4vw, 2rem);
          letter-spacing: -0.02em;
          color: #0f2458;
        }
        .wt-sub {
          color: #4a5f8c;
          line-height: 1.7;
          margin: 0 0 18px;
          max-width: 900px;
        }
        .wt-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }
        .wt-feature {
          border-radius: 16px;
          border: 1px solid rgba(16, 36, 79, 0.1);
          background: #fff;
          padding: 16px 14px;
        }
        .wt-feature b {
          display: block;
          font-size: 1rem;
          color: #123272;
          margin-bottom: 8px;
        }
        .wt-feature p {
          margin: 0;
          color: #516692;
          line-height: 1.6;
          font-size: 0.95rem;
        }
        .wt-steps {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 12px;
        }
        .wt-step {
          background: linear-gradient(180deg, #ffffff, #edf6ff);
          border-radius: 15px;
          border: 1px solid rgba(16, 36, 79, 0.08);
          padding: 14px;
        }
        .wt-step .n {
          width: 26px;
          height: 26px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          color: #fff;
          background: #3f82ff;
          font-size: 12px;
          margin-bottom: 8px;
        }
        .wt-step b {
          display: block;
          color: #13306a;
          margin-bottom: 5px;
        }
        .wt-step p {
          margin: 0;
          color: #50648d;
          font-size: 0.92rem;
          line-height: 1.5;
        }
        .wt-note {
          margin-top: 14px;
          border-radius: 14px;
          padding: 12px 13px;
          background: #ecf7ff;
          color: #31507f;
          border: 1px solid rgba(49, 80, 127, 0.15);
          font-size: 0.9rem;
        }
        @media (max-width: 980px) {
          .wt-hero {
            grid-template-columns: 1fr;
          }
          .wt-phone {
            transform: none;
          }
          .wt-grid {
            grid-template-columns: 1fr 1fr;
          }
          .wt-steps {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 640px) {
          .wt-hero {
            padding: 30px 18px;
          }
          .wt-section {
            padding: 20px 16px;
          }
          .wt-grid,
          .wt-steps {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="wt-hero">
        <div>
          <div className="wt-badge-row">
            <span className="wt-badge">App Store: Live</span>
            <span className="wt-badge">Play Store: Under Review</span>
            <span className="wt-badge">Offline-First</span>
          </div>
          <h1 className="wt-font-display">Stay Hydrated. Stay In Control.</h1>
          <p>
            WaterTracker is a privacy-first hydration companion for people who want consistent
            habits without account setup. Track any drink, set your schedule, and keep all data
            local on-device with encrypted Realm storage.
          </p>
          <div className="wt-cta">
            {IOS_URL ? (
              <a href={IOS_URL} target="_blank" rel="noopener noreferrer" className="wt-btn wt-btn-primary">
                Download on App Store
              </a>
            ) : (
              <span className="wt-btn wt-btn-disabled">App Store Link Pending</span>
            )}

            {ANDROID_URL ? (
              <a href={ANDROID_URL} target="_blank" rel="noopener noreferrer" className="wt-btn wt-btn-secondary">
                Get it on Play Store
              </a>
            ) : (
              <span className="wt-btn wt-btn-disabled">Play Store Under Review</span>
            )}

            <Link href="/watertracker/guide" className="wt-btn wt-btn-secondary">How To Use</Link>
            <Link href="/watertracker/benefits" className="wt-btn wt-btn-secondary">Health Benefits</Link>
          </div>
        </div>

        <div className="wt-phone" aria-hidden="true">
          <div className="wt-phone-notch" />
          <div className="wt-phone-card">
            <strong style={{ color: "#1a3a72" }}>Fluid Intake</strong>
            <div className="wt-ring">
              <div className="wt-ring-value">2240 ml</div>
            </div>
            <div style={{ display: "grid", gap: 8 }}>
              {["Water (Bottle) · 1500 ml", "Orange Juice · 240 ml", "Milk · 200 ml"].map((text) => (
                <div key={text} style={{
                  borderRadius: 10,
                  border: "1px solid rgba(16, 36, 79, 0.12)",
                  background: "#fff",
                  padding: "8px 10px",
                  color: "#4a5f8c",
                  fontSize: 12,
                  fontWeight: 700,
                }}>
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="wt-section">
        <h2 className="wt-font-display">Built For Real-World Hydration</h2>
        <p className="wt-sub">
          The app focuses on utility, not complexity. Every feature is designed to help users
          log quickly, maintain rhythm, and protect personal data.
        </p>
        <div className="wt-grid">
          <div className="wt-feature">
            <b>Custom Drinks & Volumes</b>
            <p>Create your own drink presets, set exact ml/oz values, and manage your list anytime.</p>
          </div>
          <div className="wt-feature">
            <b>Hydration Reminders</b>
            <p>Schedule reminders that fit your day with follow-up and sound options.</p>
          </div>
          <div className="wt-feature">
            <b>Quick Intake Logging</b>
            <p>Tap to add drinks fast and keep your daily progress visible at a glance.</p>
          </div>
          <div className="wt-feature">
            <b>PIN + Biometric Lock</b>
            <p>Protect your hydration history with local security controls from the first launch.</p>
          </div>
          <div className="wt-feature">
            <b>Backup & Restore</b>
            <p>Use iCloud (iOS) or Google Drive (Android) backup flows for peace of mind.</p>
          </div>
          <div className="wt-feature">
            <b>No Account Required</b>
            <p>No backend profile and no mandatory login. Your data remains on your device by default.</p>
          </div>
        </div>
      </div>

      <div className="wt-section">
        <h2 className="wt-font-display">How It Works</h2>
        <p className="wt-sub">
          First-time setup takes less than two minutes. The guide page includes complete step-by-step flows.
        </p>
        <div className="wt-steps">
          <div className="wt-step">
            <span className="n">1</span>
            <b>Set Goal</b>
            <p>Choose your daily ml/oz target and preferred units.</p>
          </div>
          <div className="wt-step">
            <span className="n">2</span>
            <b>Add Drinks</b>
            <p>Create drink presets with icon, color, and volume.</p>
          </div>
          <div className="wt-step">
            <span className="n">3</span>
            <b>Track Intake</b>
            <p>Log each drink and watch progress ring updates live.</p>
          </div>
          <div className="wt-step">
            <span className="n">4</span>
            <b>Protect & Backup</b>
            <p>Enable PIN/Biometric and run cloud backup when needed.</p>
          </div>
        </div>
        <div className="wt-note">
          Want detailed walkthroughs for reminders, backups, and PIN setup? Open{" "}
          <Link href="/watertracker/guide" style={{ color: "#1f4f9d", fontWeight: 800 }}>
            WaterTracker How-To Guide
          </Link>.
          {" "}For hydration education, read{" "}
          <Link href="/watertracker/benefits" style={{ color: "#1f4f9d", fontWeight: 800 }}>
            Balanced Drinking Benefits
          </Link>.
        </div>
      </div>

      <div className="wt-section">
        <h2 className="wt-font-display">Privacy Model</h2>
        <p className="wt-sub">
          WaterTracker is designed as a public utility app that keeps core user data local.
          The hydration history, presets, and preferences are stored in on-device Realm database.
          No mandatory account is required to use core tracking features.
        </p>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "SoftwareApplication",
                name: "WaterTracker",
                applicationCategory: "HealthApplication",
                operatingSystem: "iOS, Android",
                url: absoluteUrl("/watertracker"),
                description:
                  "WaterTracker helps users log fluid intake, set reminders, and protect hydration history with local-first storage.",
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "USD",
                },
                featureList: [
                  "Custom drink presets and volumes",
                  "Hydration reminders",
                  "Daily progress tracking",
                  "PIN and biometric protection",
                  "Backup and restore",
                ],
                author: {
                  "@type": "Person",
                  name: "Subrata Kumar Das",
                },
              },
              {
                "@type": "WebPage",
                name: "WaterTracker Landing Page",
                url: absoluteUrl("/watertracker"),
                description:
                  "Official landing page for WaterTracker with feature overview, availability, and usage links.",
              },
            ],
          }),
        }}
      />
    </section>
  );
}
