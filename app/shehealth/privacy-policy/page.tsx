"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Section = { id: string; icon: string; label: string };

// ─── Data ─────────────────────────────────────────────────────────────────────

const SECTIONS: Section[] = [
  { id: "offline",     icon: "📱", label: "Offline Architecture"  },
  { id: "collection",  icon: "🗂️", label: "Data We Collect"       },
  { id: "purchases",   icon: "💳", label: "Subscriptions"         },
  { id: "backups",     icon: "☁️", label: "Cloud Backups"         },
  { id: "platforms",   icon: "🔗", label: "Platform Links"        },
  { id: "usage",       icon: "ℹ️", label: "How Data Is Used"      },
  { id: "permissions", icon: "🔔", label: "App Permissions"       },
  { id: "security",    icon: "🔒", label: "Security & Retention"  },
  { id: "rights",      icon: "✅", label: "User Rights"           },
  { id: "contact",     icon: "✉️", label: "Contact Us"            },
];

// ─── Small reusable pieces ────────────────────────────────────────────────────

function SectionHead({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="shp-section-head">
      <div className="shp-section-icon">{icon}</div>
      <h2 className="shp-h2 sh-font-display">{title}</h2>
    </div>
  );
}

function Divider() {
  return <div className="shp-divider" />;
}

function Callout({ title, children, gold = false }: { title: string; children: React.ReactNode; gold?: boolean }) {
  return (
    <div className={`shp-callout${gold ? " shp-callout-gold" : ""}`}>
      <div className={`shp-callout-title${gold ? " shp-callout-title-gold" : ""}`}>{title}</div>
      <p>{children}</p>
    </div>
  );
}

function InfoGrid({ children }: { children: React.ReactNode }) {
  return <div className="shp-info-grid">{children}</div>;
}

function InfoBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="shp-info-box">
      <h4>{title}</h4>
      <p>{children}</p>
    </div>
  );
}

function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="shp-bullet-list">
      {items.map((item, i) => (
        <li key={i}>
          <div className="shp-bullet-dot" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SheHealthPrivacyPage() {
  const [active, setActive] = useState("offline");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.3, rootMargin: "-10% 0px -65% 0px" }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        html { scroll-behavior: smooth; }

        /* ── layout ── */
        .shp-wrap {
          max-width: 1120px; margin: 0 auto;
          padding: 36px 0 80px;
          display: flex; gap: 36px; align-items: flex-start;
        }

        /* ── sidebar ── */
        .shp-sidebar {
          width: 210px; flex-shrink: 0;
          position: sticky; top: 84px;
        }
        .shp-sidebar-label {
          font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--sh-muted);
          padding: 0 12px; margin-bottom: 10px; display: block;
        }
        .shp-sidebar-nav { display: flex; flex-direction: column; gap: 2px; }
        .shp-sidebar-btn {
          width: 100%; display: flex; align-items: center; gap: 10px;
          padding: 9px 12px; border-radius: 10px;
          font-size: 13px; font-weight: 600; color: var(--sh-muted);
          background: transparent; border: none; cursor: pointer;
          text-align: left; transition: background 0.18s, color 0.18s;
        }
        .shp-sidebar-btn:hover { background: rgba(196,122,90,0.1); color: var(--sh-terra-d); }
        .shp-sidebar-btn.active {
          background: var(--sh-maroon); color: #fff;
        }
        .shp-sidebar-icon { font-size: 14px; flex-shrink: 0; }

        /* ── main ── */
        .shp-main { flex: 1; min-width: 0; }

        /* ── header card ── */
        .shp-header-card {
          background: #fff; border: 1px solid rgba(196,122,90,0.15);
          border-radius: 22px; padding: 34px 38px; margin-bottom: 22px;
          box-shadow: 0 8px 30px rgba(90,31,47,0.06);
        }
        .shp-eyebrow {
          display: flex; align-items: center; gap: 8px;
          font-size: 13px; font-weight: 700; color: var(--sh-terra);
          text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 14px;
        }
        .shp-h1 {
          font-size: 44px; font-weight: 700; color: var(--sh-maroon-d);
          line-height: 1.1; margin-bottom: 8px;
        }
        .shp-meta {
          color: var(--sh-muted); font-size: 13px; font-weight: 600;
          display: flex; align-items: center; gap: 6px; margin-bottom: 28px;
        }
        .shp-highlights {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 13px;
        }
        .shp-highlight {
          background: var(--sh-cream); border: 1px solid rgba(196,122,90,0.14);
          border-radius: 14px; padding: 15px 17px;
          display: flex; align-items: flex-start; gap: 12px;
        }
        .shp-hl-icon {
          width: 36px; height: 36px; border-radius: 10px; flex-shrink: 0;
          background: linear-gradient(135deg, rgba(196,122,90,0.18), rgba(123,45,66,0.1));
          display: flex; align-items: center; justify-content: center; font-size: 16px;
        }
        .shp-hl-title { font-size: 13px; font-weight: 700; color: var(--sh-maroon); margin-bottom: 3px; }
        .shp-hl-desc  { font-size: 12px; color: var(--sh-muted); line-height: 1.5; }

        /* ── content card ── */
        .shp-content-card {
          background: #fff; border: 1px solid rgba(196,122,90,0.12);
          border-radius: 22px; padding: 38px 42px;
          box-shadow: 0 6px 24px rgba(90,31,47,0.05);
          overflow-x: hidden; /* FIX: contain overflow */
          word-break: break-word; /* FIX: wrap long emails/URLs */
        }

        /* ── policy sections ── */
        .shp-policy-section { scroll-margin-top: 90px; margin-bottom: 48px; }
        .shp-policy-section:last-child { margin-bottom: 0; }
        .shp-divider { height: 1px; background: rgba(196,122,90,0.12); margin-bottom: 48px; }
        .shp-section-head { display: flex; align-items: center; gap: 12px; margin-bottom: 18px; }
        .shp-section-icon {
          width: 36px; height: 36px; border-radius: 10px; flex-shrink: 0;
          background: linear-gradient(135deg, rgba(196,122,90,0.15), rgba(123,45,66,0.10));
          display: flex; align-items: center; justify-content: center; font-size: 16px;
        }
        .shp-h2 { font-size: 24px; font-weight: 700; color: var(--sh-maroon-d); margin: 0; }
        .shp-policy-section p {
          font-size: 15px; color: var(--sh-muted);
          line-height: 1.72; margin-bottom: 14px;
        }
        .shp-policy-section p:last-child { margin-bottom: 0; }
        .shp-policy-section strong { color: var(--sh-charcoal); font-weight: 700; }

        /* callout */
        .shp-callout {
          background: rgba(196,122,90,0.07); border-left: 4px solid var(--sh-terra);
          border-radius: 0 12px 12px 0; padding: 15px 19px; margin: 14px 0;
        }
        .shp-callout p { margin: 0; color: var(--sh-charcoal); font-size: 14px; line-height: 1.65; }
        .shp-callout-title { font-size: 13px; font-weight: 800; color: var(--sh-terra-d); margin-bottom: 6px; }
        .shp-callout-gold { background: rgba(201,150,58,0.07); border-left-color: var(--sh-gold); }
        .shp-callout-title-gold { color: #9a6e10; }

        /* info grid */
        .shp-info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 13px; margin: 14px 0; }
        .shp-info-box {
          background: var(--sh-cream); border: 1px solid rgba(196,122,90,0.14);
          border-radius: 12px; padding: 15px 17px;
        }
        .shp-info-box h4 { font-size: 14px; font-weight: 700; color: var(--sh-maroon); margin-bottom: 6px; }
        .shp-info-box p  { font-size: 13px; color: var(--sh-muted); margin: 0; line-height: 1.6; }

        /* bullet list */
        .shp-bullet-list { list-style: none; margin: 13px 0; display: flex; flex-direction: column; gap: 10px; }
        .shp-bullet-list li { display: flex; align-items: flex-start; gap: 12px; font-size: 14px; color: var(--sh-muted); }
        .shp-bullet-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--sh-terra); flex-shrink: 0; margin-top: 6px; }

        /* platform links */
        .shp-platform-links { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 14px; }
        .shp-platform-link {
          display: flex; align-items: center; justify-content: space-between;
          padding: 13px 16px; background: var(--sh-cream);
          border: 1px solid rgba(196,122,90,0.18); border-radius: 12px;
          text-decoration: none; font-size: 14px; font-weight: 700; color: var(--sh-maroon);
          transition: border-color 0.2s;
        }
        .shp-platform-link:hover { border-color: var(--sh-terra); }

        /* contact card */
        .shp-contact-card {
          background: linear-gradient(140deg, var(--sh-maroon-d), var(--sh-terra-d));
          border-radius: 18px; padding: 28px 32px;
          color: #fff; position: relative; overflow: hidden;
        }
        .shp-contact-card::before {
          content: ''; position: absolute;
          width: 120px; height: 120px; border-radius: 50%;
          background: rgba(255,255,255,0.08); top: -30px; right: -30px;
        }
        .shp-contact-card h4 { font-size: 18px; font-weight: 700; margin-bottom: 6px; color: #fff; }
        .shp-contact-card p  { color: rgba(255,255,255,0.65); font-size: 14px; margin-bottom: 18px; }
        .shp-contact-link {
          display: inline-flex; align-items: center; gap: 8px;
          background: #fff; color: var(--sh-maroon-d);
          padding: 10px 20px; border-radius: 10px;
          font-size: 13px; font-weight: 700; text-decoration: none;
          transition: background 0.2s;
          word-break: break-all; /* FIX: break long email address */
        }
        .shp-contact-link:hover { background: var(--sh-cream); }

        /* footer strip */
        .shp-page-footer {
          margin-top: 48px; padding-top: 24px;
          border-top: 1px solid rgba(196,122,90,0.12);
          text-align: center;
        }
        .shp-page-footer p { font-size: 12px; color: var(--sh-muted); }
        .shp-page-footer p:first-child {
          font-size: 11px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.1em; margin-bottom: 4px;
        }

        /* ── responsive ── */
        @media (max-width: 860px) {
          .shp-wrap { flex-direction: column; padding: 20px 0 60px; gap: 20px; }
          .shp-sidebar { width: 100%; position: static; }
          .shp-sidebar-nav { flex-direction: row; flex-wrap: wrap; }
          .shp-header-card { padding: 20px 18px; }
          .shp-h1 { font-size: 30px; }
          .shp-highlights { grid-template-columns: 1fr; }
          .shp-content-card { padding: 20px 18px; border-radius: 16px; }
          .shp-info-grid { grid-template-columns: 1fr; }
          .shp-platform-links { grid-template-columns: 1fr; }
          .shp-contact-card { padding: 20px 18px; }
        }

        @media (max-width: 480px) {
          .shp-h1 { font-size: 26px; }
          .shp-h2 { font-size: 20px; }
          .shp-content-card { padding: 16px 14px; }
          .shp-header-card { padding: 16px 14px; }
        }
      `}</style>

      <div className="shp-wrap">

        {/* ── SIDEBAR ── */}
        <aside className="shp-sidebar">
          <span className="shp-sidebar-label">Sections</span>
          <nav className="shp-sidebar-nav" aria-label="Privacy policy sections">
            {SECTIONS.map(({ id, icon, label }) => (
              <button
                key={id}
                className={`shp-sidebar-btn${active === id ? " active" : ""}`}
                onClick={() => scrollTo(id)}
              >
                <span className="shp-sidebar-icon">{icon}</span>
                {label}
              </button>
            ))}
          </nav>
        </aside>

        {/* ── MAIN ── */}
        <main className="shp-main">

          {/* Header card */}
          <div className="shp-header-card">
            <div className="shp-eyebrow">🌸 She Health – Health Tracking App</div>
            <h1 className="shp-h1 sh-font-display">Privacy Policy</h1>
            <div className="shp-meta">🕐 Last updated: March 5, 2026</div>
            <div className="shp-highlights">
              {[
                { icon: "📱", title: "Offline-Only",      desc: "All health logs stored locally in an encrypted on-device database." },
                { icon: "👤", title: "No Login Needed",   desc: "We do not collect names, emails, or any credentials." },
                { icon: "☁️", title: "Private Backups",   desc: "Optional backups go only to your personal iCloud or Google Drive." },
              ].map((h) => (
                <div key={h.title} className="shp-highlight">
                  <div className="shp-hl-icon">{h.icon}</div>
                  <div>
                    <div className="shp-hl-title">{h.title}</div>
                    <div className="shp-hl-desc">{h.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content card */}
          <div className="shp-content-card">

            {/* 1 — Offline Architecture */}
            <div className="shp-policy-section" id="offline">
              <SectionHead icon="📱" title="Offline-First Architecture" />
              <p><strong>She Health</strong> is built with a core philosophy of local privacy. Unlike many health apps, we do not require account registration, email submission, or any social media login to function.</p>
              <Callout title="Local Storage Only">
                Your health logs — period data, incontinence records, hydration entries, secure gallery images, and contacts — are stored exclusively on your device. We have no central server that receives or stores your personal health data.
              </Callout>
              <p>Your data is encrypted using hardware-level encryption provided by your iOS or Android operating system. It does not leave your device unless you choose to initiate an optional backup.</p>
            </div>

            <Divider />

            {/* 2 — Data We Collect */}
            <div className="shp-policy-section" id="collection">
              <SectionHead icon="🗂️" title="Data We Collect" />
              <p>Because we do not have user accounts, we do not collect personal identifiers. The data that remains on your device includes:</p>
              <BulletList items={[
                <><strong>Health Logs:</strong> Period entries, incontinence episodes, Kegel exercise sets, hydration records, and symptom notes.</>,
                <><strong>Gallery Images:</strong> Sensitive photos stored in the secure gallery, kept separate from your device photo library.</>,
                <><strong>Contact Vault:</strong> Names, professions, notes, and messaging links you choose to store in the private contact vault.</>,
                <><strong>Anonymous Diagnostics:</strong> We may process non-identifiable crash reports and app version data to improve reliability. These are never linked to your identity.</>,
              ]} />
              <p>We do not collect location data, device identifiers, or any other personal information beyond what you explicitly enter into the app.</p>
            </div>

            <Divider />

            {/* 3 — Subscriptions & IAP */}
            <div className="shp-policy-section" id="purchases">
              <SectionHead icon="💳" title="Subscriptions & In-App Purchases" />
              <p>She Health offers two types of premium purchases, both processed entirely through Apple or Google. We never receive or store your billing information.</p>
              <Callout title="Drive Backup — Yearly Subscription">
                An auto-renewing annual subscription that unlocks cloud backup. On Android, data backs up to your private Google Drive &ldquo;App Data&rdquo; folder. On iOS, data backs up to your private iCloud Drive container. We have no access to these files.
              </Callout>
              <Callout title="Color Schemes — One-Time In-App Purchases ($4.99 each)" gold>
                Individual color schemes are sold as non-consumable one-time purchases at <strong>$4.99</strong> each. <strong>Terracotta</strong> is the default scheme and is completely free. <strong>Teal Gold</strong> can be previewed in-app but has no trial period — purchase required to activate. <strong>Plum Cream, Champagne Midnight, and Navy Silver</strong> each include a <strong>free 30-day trial</strong> before any payment is required. Once purchased, a scheme is yours permanently with no further charges.
              </Callout>
              <InfoGrid>
                <InfoBox title="Secure Payments">All transactions are processed by Apple App Store (iOS) or Google Play (Android). The developer never sees or stores your credit card or billing details.</InfoBox>
                <InfoBox title="Purchase Verification">The app uses anonymous, cryptographically signed store receipts to unlock premium features locally on your device.</InfoBox>
                <InfoBox title="Subscription Renewal">The Drive Backup subscription auto-renews annually unless cancelled at least 24 hours before the end of the current period.</InfoBox>
                <InfoBox title="Refunds">All refund requests for subscriptions and one-time purchases are handled by Apple or Google through their standard refund processes.</InfoBox>
              </InfoGrid>
            </div>

            <Divider />

            {/* 4 — Cloud Backups */}
            <div className="shp-policy-section" id="backups">
              <SectionHead icon="☁️" title="User-Managed Cloud Backups" />
              <p>To protect against data loss, She Health offers an <strong>optional</strong> backup feature managed entirely by you. We do not access, view, or store your backup files.</p>
              <InfoGrid>
                <InfoBox title="🍎 iCloud Drive (iOS)">Backups are encrypted and saved to your private iCloud container. Only you can access these files.</InfoBox>
                <InfoBox title="▶ Google Drive (Android)">Backups are saved to a private &ldquo;App Data&rdquo; folder on your Google Drive, inaccessible to us or other apps.</InfoBox>
              </InfoGrid>
              <p>Backup includes health logs and, optionally, secure gallery photos. The backup feature requires an active premium subscription.</p>
            </div>

            <Divider />

            {/* 5 — Platforms */}
            <div className="shp-policy-section" id="platforms">
              <SectionHead icon="🔗" title="Platform & Privacy Links" />
              <p>She Health relies on the following platform services. For details on how they handle data, please review their privacy policies:</p>
              <div className="shp-platform-links">
                <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noreferrer" className="shp-platform-link">
                  Apple Privacy Policy <span>↗</span>
                </a>
                <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="shp-platform-link">
                  Google Privacy Policy <span>↗</span>
                </a>
              </div>
            </div>

            <Divider />

            {/* 6 — How Data Is Used */}
            <div className="shp-policy-section" id="usage">
              <SectionHead icon="ℹ️" title="How Data Is Used" />
              <p>All data processing occurs locally on your device. Data is used exclusively for:</p>
              <BulletList items={[
                "Calculating cycle predictions and hydration goal completion.",
                "Scheduling local push notification reminders.",
                "Generating health trend charts within the app.",
                "Restoring premium status via store receipts.",
                "Executing user-initiated cloud backups.",
              ]} />
              <p>We do not use your data for advertising, analytics, profiling, or any purpose other than providing app functionality to you.</p>
            </div>

            <Divider />

            {/* 7 — App Permissions */}
            <div className="shp-policy-section" id="permissions">
              <SectionHead icon="🔔" title="App Permissions" />
              <p>She Health may request the following device permissions:</p>
              <InfoGrid>
                <InfoBox title="Notifications">To send local hydration reminders and health check-in prompts according to your configured schedule.</InfoBox>
                <InfoBox title="Cloud Storage">To write backup files to your personal iCloud or Google Drive account (only when you initiate a backup).</InfoBox>
                <InfoBox title="Camera & Photo Library">To add photos to the secure gallery. Images are stored within the app, not synced to your device gallery.</InfoBox>
                <InfoBox title="Biometrics">To authenticate app access using Face ID or fingerprint. Biometric data never leaves your device.</InfoBox>
              </InfoGrid>
            </div>

            <Divider />

            {/* 8 — Security & Retention */}
            <div className="shp-policy-section" id="security">
              <SectionHead icon="🔒" title="Security & Retention" />
              <InfoGrid>
                <InfoBox title="🛡️ Native Encryption">Your data benefits from hardware-level encryption built into your iOS or Android device.</InfoBox>
                <InfoBox title="🗑️ Immediate Deletion">Uninstalling the app immediately and permanently deletes all locally stored data from your device.</InfoBox>
              </InfoGrid>
              <p>We retain no copies of your personal data on any server. Data retention is entirely controlled by you.</p>
            </div>

            <Divider />

            {/* 9 — User Rights */}
            <div className="shp-policy-section" id="rights">
              <SectionHead icon="✅" title="User Rights" />
              <p>As an offline-first app, you retain complete ownership and control of your data at all times.</p>
              <BulletList items={[
                <><strong>Access:</strong> View all your health data within the app at any time.</>,
                <><strong>Modify:</strong> Edit or update any entry directly within the app.</>,
                <><strong>Delete:</strong> Remove individual entries or all data via app settings.</>,
                <><strong>Export:</strong> Back up your data using the optional cloud backup feature.</>,
              ]} />
              <p>We comply with global privacy standards including GDPR and CCPA. Because no personal data is transmitted to our servers, most traditional data request processes are not applicable — your device is the only place your data lives.</p>
            </div>

            <Divider />

            {/* 10 — Contact */}
            <div className="shp-policy-section" id="contact">
              <SectionHead icon="✉️" title="Contact Us" />
              <div className="shp-contact-card">
                <h4>Developer Contact</h4>
                <p>For any questions about this Privacy Policy or She Health&apos;s privacy architecture, please reach out:</p>
                <a href="mailto:subraatakumar+shehealth@gmail.com" className="shp-contact-link">
                  ✉️ subraatakumar+shehealth@gmail.com
                </a>
              </div>
            </div>

            {/* Page footer */}
            <div className="shp-page-footer">
              <p>She Health – Health Tracking App</p>
              <p>© {new Date().getFullYear()} She Health. All rights reserved.</p>
            </div>

          </div>
        </main>
      </div>
    </>
  );
}