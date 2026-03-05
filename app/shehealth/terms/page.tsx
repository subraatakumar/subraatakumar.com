"use client";

import { useState, useEffect } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Section = { id: string; icon: string; label: string };

// ─── Data ─────────────────────────────────────────────────────────────────────

const SECTIONS: Section[] = [
  { id: "acceptance",  icon: "📄", label: "Acceptance"          },
  { id: "use",         icon: "✅", label: "Use of App"          },
  { id: "prohibited",  icon: "🚫", label: "Prohibited"          },
  { id: "purchases",   icon: "💳", label: "Billing"             },
  { id: "disclaimer",  icon: "⚠️", label: "Health Disclaimer"   },
  { id: "ip",          icon: "🌐", label: "Intellectual Property"},
  { id: "termination", icon: "🔄", label: "Termination"         },
  { id: "liability",   icon: "⚖️", label: "Liability"           },
  { id: "rights",      icon: "👤", label: "Your Rights"         },
  { id: "contact",     icon: "✉️", label: "Contact Us"          },
];

const PROHIBITED = [
  "Attempting to decompile, disassemble, or reverse-engineer the App",
  "Using the App for any unlawful or fraudulent purpose",
  "Circumventing in-app purchase or subscription verification systems",
  "Distributing modified or cracked versions of the App",
  "Interfering with the App's reminder or notification systems",
  "Attempting to access other users' device data or backups",
  "Removing or altering copyright or trademark notices",
  "Using the App in any way that could damage its operation or reputation",
];

// ─── Small reusable pieces ────────────────────────────────────────────────────

function SectionHead({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="sht-section-head">
      <div className="sht-section-icon">{icon}</div>
      <h2 className="sht-h2 sh-font-display">{title}</h2>
    </div>
  );
}

function Divider() {
  return <div className="sht-divider" />;
}

function Callout({
  title,
  warn = false,
  children,
}: {
  title: string;
  warn?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={`sht-callout${warn ? " sht-callout-warn" : ""}`}>
      <div className={`sht-callout-title${warn ? " sht-callout-title-warn" : ""}`}>{title}</div>
      <p>{children}</p>
    </div>
  );
}

function InfoGrid({ children }: { children: React.ReactNode }) {
  return <div className="sht-info-grid">{children}</div>;
}

function InfoBox({
  title,
  children,
  accentColor,
}: {
  title: string;
  children: React.ReactNode;
  accentColor?: string;
}) {
  return (
    <div
      className="sht-info-box"
      style={accentColor ? { borderColor: accentColor } : undefined}
    >
      <h4>{title}</h4>
      <p>{children}</p>
    </div>
  );
}

function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="sht-bullet-list">
      {items.map((item, i) => (
        <li key={i}>
          <div className="sht-bullet-dot" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ProhibitedGrid({ items }: { items: string[] }) {
  return (
    <div className="sht-prohibited-grid">
      {items.map((item, i) => (
        <div key={i} className="sht-prohibited-item">
          <div className="sht-prohibited-dot" />
          {item}
        </div>
      ))}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SheHealthTermsPage() {
  const [active, setActive] = useState("acceptance");

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
        .sht-wrap {
          max-width: 1120px; margin: 0 auto;
          padding: 36px 24px 80px;
          display: flex; gap: 36px; align-items: flex-start;
        }

        /* ── sidebar ── */
        .sht-sidebar {
          width: 210px; flex-shrink: 0;
          position: sticky; top: 84px;
        }
        .sht-sidebar-label {
          font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--sh-muted);
          padding: 0 12px; margin-bottom: 10px; display: block;
        }
        .sht-sidebar-nav { display: flex; flex-direction: column; gap: 2px; }
        .sht-sidebar-btn {
          width: 100%; display: flex; align-items: center; gap: 10px;
          padding: 9px 12px; border-radius: 10px;
          font-size: 13px; font-weight: 600; color: var(--sh-muted);
          background: transparent; border: none; cursor: pointer;
          text-align: left; transition: background 0.18s, color 0.18s;
        }
        .sht-sidebar-btn:hover { background: rgba(196,122,90,0.1); color: var(--sh-terra-d); }
        .sht-sidebar-btn.active { background: var(--sh-maroon); color: #fff; }
        .sht-sidebar-icon { font-size: 14px; flex-shrink: 0; }

        /* ── main ── */
        .sht-main { flex: 1; min-width: 0; }

        /* ── header card ── */
        .sht-header-card {
          background: #fff; border: 1px solid rgba(196,122,90,0.15);
          border-radius: 22px; padding: 34px 38px; margin-bottom: 22px;
          box-shadow: 0 8px 30px rgba(90,31,47,0.06);
        }
        .sht-eyebrow {
          display: flex; align-items: center; gap: 8px;
          font-size: 13px; font-weight: 700; color: var(--sh-terra);
          text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 14px;
        }
        .sht-h1 {
          font-size: 44px; font-weight: 700; color: var(--sh-maroon-d);
          line-height: 1.1; margin-bottom: 8px;
        }
        .sht-meta {
          color: var(--sh-muted); font-size: 13px; font-weight: 600;
          display: flex; align-items: center; gap: 6px; margin-bottom: 28px;
        }
        .sht-highlights {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 13px;
        }
        .sht-highlight {
          background: var(--sh-cream); border: 1px solid rgba(196,122,90,0.14);
          border-radius: 14px; padding: 15px 17px;
          display: flex; align-items: flex-start; gap: 12px;
        }
        .sht-hl-icon {
          width: 36px; height: 36px; border-radius: 10px; flex-shrink: 0;
          background: linear-gradient(135deg, rgba(196,122,90,0.18), rgba(123,45,66,0.1));
          display: flex; align-items: center; justify-content: center; font-size: 16px;
        }
        .sht-hl-title { font-size: 13px; font-weight: 700; color: var(--sh-maroon); margin-bottom: 3px; }
        .sht-hl-desc  { font-size: 12px; color: var(--sh-muted); line-height: 1.5; }

        /* ── content card ── */
        .sht-content-card {
          background: #fff; border: 1px solid rgba(196,122,90,0.12);
          border-radius: 22px; padding: 38px 42px;
          box-shadow: 0 6px 24px rgba(90,31,47,0.05);
        }

        /* ── policy sections ── */
        .sht-policy-section { scroll-margin-top: 90px; margin-bottom: 48px; }
        .sht-policy-section:last-child { margin-bottom: 0; }
        .sht-divider { height: 1px; background: rgba(196,122,90,0.12); margin-bottom: 48px; }
        .sht-section-head { display: flex; align-items: center; gap: 12px; margin-bottom: 18px; }
        .sht-section-icon {
          width: 36px; height: 36px; border-radius: 10px; flex-shrink: 0;
          background: linear-gradient(135deg, rgba(196,122,90,0.15), rgba(123,45,66,0.10));
          display: flex; align-items: center; justify-content: center; font-size: 16px;
        }
        .sht-h2 { font-size: 24px; font-weight: 700; color: var(--sh-maroon-d); margin: 0; }
        .sht-policy-section p {
          font-size: 15px; color: var(--sh-muted);
          line-height: 1.72; margin-bottom: 14px;
        }
        .sht-policy-section p:last-child { margin-bottom: 0; }
        .sht-policy-section strong { color: var(--sh-charcoal); font-weight: 700; }

        /* callout */
        .sht-callout {
          background: rgba(196,122,90,0.07); border-left: 4px solid var(--sh-terra);
          border-radius: 0 12px 12px 0; padding: 15px 19px; margin: 14px 0;
        }
        .sht-callout p { margin: 0; color: var(--sh-charcoal); font-size: 14px; line-height: 1.65; }
        .sht-callout-title { font-size: 13px; font-weight: 800; color: var(--sh-terra-d); margin-bottom: 6px; }
        .sht-callout-warn { background: rgba(201,150,58,0.08); border-left-color: var(--sh-gold); }
        .sht-callout-title-warn { color: #9a6e10; }

        /* info grid */
        .sht-info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 13px; margin: 14px 0; }
        .sht-info-box {
          background: var(--sh-cream); border: 1px solid rgba(196,122,90,0.14);
          border-radius: 12px; padding: 15px 17px;
        }
        .sht-info-box h4 { font-size: 14px; font-weight: 700; color: var(--sh-maroon); margin-bottom: 6px; }
        .sht-info-box p  { font-size: 13px; color: var(--sh-muted); margin: 0; line-height: 1.6; }

        /* bullet list */
        .sht-bullet-list { list-style: none; margin: 13px 0; display: flex; flex-direction: column; gap: 10px; }
        .sht-bullet-list li { display: flex; align-items: flex-start; gap: 12px; font-size: 14px; color: var(--sh-muted); }
        .sht-bullet-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--sh-terra); flex-shrink: 0; margin-top: 6px; }

        /* prohibited grid */
        .sht-prohibited-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 14px 0; }
        .sht-prohibited-item {
          display: flex; align-items: flex-start; gap: 10px;
          padding: 12px 14px;
          border: 1px solid rgba(163,94,64,0.15); border-radius: 10px;
          background: rgba(163,94,64,0.04);
          font-size: 13px; color: var(--sh-muted); line-height: 1.5;
        }
        .sht-prohibited-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #c0392b; flex-shrink: 0; margin-top: 5px;
        }

        /* contact card */
        .sht-contact-card {
          background: linear-gradient(140deg, var(--sh-maroon-d), var(--sh-terra-d));
          border-radius: 18px; padding: 28px 32px;
          color: #fff; position: relative; overflow: hidden;
        }
        .sht-contact-card::before {
          content: ''; position: absolute;
          width: 120px; height: 120px; border-radius: 50%;
          background: rgba(255,255,255,0.08); top: -30px; right: -30px;
        }
        .sht-contact-card h4 { font-size: 18px; font-weight: 700; margin-bottom: 6px; color: #fff; }
        .sht-contact-card p  { color: rgba(255,255,255,0.65); font-size: 14px; margin-bottom: 18px; }
        .sht-contact-link {
          display: inline-flex; align-items: center; gap: 8px;
          background: #fff; color: var(--sh-maroon-d);
          padding: 10px 20px; border-radius: 10px;
          font-size: 13px; font-weight: 700; text-decoration: none;
          transition: background 0.2s;
        }
        .sht-contact-link:hover { background: var(--sh-cream); }

        /* page footer */
        .sht-page-footer {
          margin-top: 48px; padding-top: 24px;
          border-top: 1px solid rgba(196,122,90,0.12);
          text-align: center;
        }
        .sht-page-footer p { font-size: 12px; color: var(--sh-muted); }
        .sht-page-footer p:first-child {
          font-size: 11px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.1em; margin-bottom: 4px;
        }

        /* ── responsive ── */
        @media (max-width: 860px) {
          .sht-wrap { flex-direction: column; padding: 20px 16px 60px; gap: 20px; }
          .sht-sidebar { width: 100%; position: static; }
          .sht-sidebar-nav { flex-direction: row; flex-wrap: wrap; }
          .sht-header-card { padding: 22px; }
          .sht-h1 { font-size: 34px; }
          .sht-highlights { grid-template-columns: 1fr; }
          .sht-content-card { padding: 22px; }
          .sht-info-grid { grid-template-columns: 1fr; }
          .sht-prohibited-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="sht-wrap">

        {/* ── SIDEBAR ── */}
        <aside className="sht-sidebar">
          <span className="sht-sidebar-label">Sections</span>
          <nav className="sht-sidebar-nav" aria-label="Terms of use sections">
            {SECTIONS.map(({ id, icon, label }) => (
              <button
                key={id}
                className={`sht-sidebar-btn${active === id ? " active" : ""}`}
                onClick={() => scrollTo(id)}
              >
                <span className="sht-sidebar-icon">{icon}</span>
                {label}
              </button>
            ))}
          </nav>
        </aside>

        {/* ── MAIN ── */}
        <main className="sht-main">

          {/* Header card */}
          <div className="sht-header-card">
            <div className="sht-eyebrow">🌸 She Health – Health Tracking App</div>
            <h1 className="sht-h1 sh-font-display">Terms of Use</h1>
            <div className="sht-meta">🕐 Last updated: March 5, 2026</div>
            <div className="sht-highlights">
              {[
                { icon: "📄", title: "Clear Agreement",  desc: "By using the app you agree to these terms. Please read them carefully." },
                { icon: "🔒", title: "Privacy First",    desc: "These terms complement our Privacy Policy to protect your data." },
                { icon: "⚖️", title: "Fair Personal Use", desc: "Use the app for personal health tracking only, as intended." },
              ].map((h) => (
                <div key={h.title} className="sht-highlight">
                  <div className="sht-hl-icon">{h.icon}</div>
                  <div>
                    <div className="sht-hl-title">{h.title}</div>
                    <div className="sht-hl-desc">{h.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content card */}
          <div className="sht-content-card">

            {/* 1 — Acceptance */}
            <div className="sht-policy-section" id="acceptance">
              <SectionHead icon="📄" title="Acceptance of Terms" />
              <p>
                By downloading, installing, or using <strong>She Health</strong> (&ldquo;the App&rdquo;), you agree
                to be bound by these Terms of Use (&ldquo;Terms&rdquo;). If you do not agree to all of these Terms,
                please do not use the App.
              </p>
              <Callout title="Important Notice">
                These Terms apply to all versions of She Health on the Apple App Store and Google Play Store.
                We may update these Terms from time to time. Continued use of the App after changes are posted
                constitutes your acceptance of the revised Terms.
              </Callout>
              <p>
                She Health is intended for personal, non-commercial wellness tracking. It is{" "}
                <strong>not a medical device</strong> and does not provide medical advice, diagnosis, or treatment.
              </p>
            </div>

            <Divider />

            {/* 2 — Use of App */}
            <div className="sht-policy-section" id="use">
              <SectionHead icon="✅" title="Use of the App" />
              <p>
                She Health is a personal health tracking tool designed for individual, non-commercial use.
                You agree to use the App only for its intended purpose and in compliance with all applicable laws.
              </p>
              <BulletList items={[
                "You must be at least 13 years of age to use the App.",
                "You are responsible for maintaining the physical security of your device and the PIN or biometric lock on the App.",
                "You agree not to misuse, reverse-engineer, or modify the App in any way.",
                "The App is provided for personal, non-commercial use only.",
                "You are solely responsible for the accuracy and completeness of health records you enter.",
              ]} />
            </div>

            <Divider />

            {/* 3 — Prohibited */}
            <div className="sht-policy-section" id="prohibited">
              <SectionHead icon="🚫" title="Prohibited Activities" />
              <p>You agree not to engage in any of the following activities when using She Health:</p>
              <ProhibitedGrid items={PROHIBITED} />
            </div>

            <Divider />

            {/* 4 — Billing */}
            <div className="sht-policy-section" id="purchases">
              <SectionHead icon="💳" title="Subscriptions & Billing" />
              <p>
                She Health offers two types of premium purchases processed through Apple or Google&apos;s
                native commerce systems.
              </p>
              <InfoGrid>
                <InfoBox title="☁️ Drive Backup — Yearly Subscription" accentColor="rgba(123,45,66,0.2)">
                  An annual auto-renewing subscription. Backs up your data to{" "}
                  <strong>Google Drive</strong> (Android) or <strong>iCloud Drive</strong> (iOS) — your
                  private storage only. Renews each year unless cancelled at least 24 hours before the
                  end of the current period.
                </InfoBox>
                <InfoBox title="🎨 Color Schemes — One-Time Purchase ($4.99 each)" accentColor="rgba(201,150,58,0.25)">
                  Non-consumable one-time in-app purchases at <strong>$4.99</strong> each.{" "}
                  <strong>Terracotta</strong> is free and the default. <strong>Teal Gold</strong> offers
                  in-app preview only — no trial. <strong>Plum Cream, Champagne Midnight, and Navy Silver</strong>{" "}
                  each include a <strong>free 30-day trial</strong> with no payment required until you choose to buy.
                  Once purchased, the scheme is yours permanently.
                </InfoBox>
              </InfoGrid>
              <InfoGrid>
                <InfoBox title="Billing">
                  All charges are processed by Apple App Store or Google Play. The developer does not
                  handle your payment information directly.
                </InfoBox>
                <InfoBox title="Trials">
                  Plum Cream, Champagne Midnight, and Navy Silver each include a free 30-day trial — no
                  payment required during the trial. Teal Gold has no trial; it requires purchase to
                  activate. Terracotta is always free.
                </InfoBox>
                <InfoBox title="Cancellation">
                  Cancel the backup subscription at any time via your App Store or Google Play account
                  settings. Cancellation stops future renewals but does not delete your data.
                </InfoBox>
                <InfoBox title="Refunds">
                  Refund requests must be directed to Apple or Google in accordance with their respective
                  refund policies.
                </InfoBox>
              </InfoGrid>
              <p>
                Purchasing a color scheme or subscribing to Drive Backup does not affect the privacy of
                your health data — all data remains on-device.
              </p>
            </div>

            <Divider />

            {/* 5 — Health Disclaimer */}
            <div className="sht-policy-section" id="disclaimer">
              <SectionHead icon="⚠️" title="Health Disclaimer" />
              <Callout title="⚠️ Not a Medical Device" warn>
                She Health is a general wellness tracking tool and is <strong>not</strong> a medical device.
                It does not provide medical advice, diagnosis, or treatment. All health suggestions and
                tracking features are for personal awareness and record-keeping only.
              </Callout>
              <BulletList items={[
                "Always consult a qualified healthcare professional for medical concerns, diagnosis, or treatment decisions.",
                "Cycle predictions and health insights within the App are general estimates, not medical determinations.",
                "Incontinence tracking is a personal diary tool — it is not a diagnostic or treatment service.",
                "The developer is not liable for any health outcomes resulting from use of or reliance on the App.",
              ]} />
            </div>

            <Divider />

            {/* 6 — Intellectual Property */}
            <div className="sht-policy-section" id="ip">
              <SectionHead icon="🌐" title="Intellectual Property" />
              <p>
                All content within She Health — including design, graphics, icons, text, animations, and
                code — is the exclusive property of the developer and is protected by applicable
                intellectual property laws.
              </p>
              <InfoGrid>
                <InfoBox title="Your Health Data">
                  All health records, images, and contacts you enter into the App belong entirely to you.
                  We make no claim to ownership of your personal data.
                </InfoBox>
                <InfoBox title="App Content">
                  You may not copy, reproduce, distribute, or create derivative works from the App or its
                  content without prior written consent from the developer.
                </InfoBox>
              </InfoGrid>
            </div>

            <Divider />

            {/* 7 — Termination */}
            <div className="sht-policy-section" id="termination">
              <SectionHead icon="🔄" title="Termination" />
              <p>
                You may stop using the App at any time by uninstalling it from your device.{" "}
                <strong>Uninstalling permanently deletes all locally stored data</strong> — this action
                cannot be undone unless you have a current backup.
              </p>
              <Callout title="App Discontinuation">
                We reserve the right to discontinue or modify the App at any time without prior notice.
                If the App is discontinued, cancel active subscriptions via your app store to avoid future
                charges. We recommend exporting your data via the backup feature before any planned transitions.
              </Callout>
            </div>

            <Divider />

            {/* 8 — Liability */}
            <div className="sht-policy-section" id="liability">
              <SectionHead icon="⚖️" title="Limitation of Liability" />
              <p>
                To the fullest extent permitted by applicable law, the developer of She Health shall not
                be liable for any indirect, incidental, special, consequential, or punitive damages
                arising from your use of the App.
              </p>
              <BulletList items={[
                <>The App is provided &ldquo;as is&rdquo; without warranties of any kind, express or implied.</>,
                "We do not guarantee uninterrupted or error-free operation of the App.",
                "We are not responsible for data loss resulting from device failure, OS updates, or accidental deletion.",
                "Our total liability shall not exceed the amount you paid for the App in the twelve months prior to the claim.",
              ]} />
              <p>
                Some jurisdictions do not allow the exclusion of implied warranties or limitation of
                liability for incidental damages, so the above limitations may not apply to you.
              </p>
            </div>

            <Divider />

            {/* 9 — Your Rights */}
            <div className="sht-policy-section" id="rights">
              <SectionHead icon="👤" title="Your Rights" />
              <p>
                Because all data is stored exclusively on your device, you retain complete control and
                ownership at all times. Your rights include:
              </p>
              <InfoGrid>
                <InfoBox title="Access">
                  View all your health data directly within the App at any time, with no restrictions.
                </InfoBox>
                <InfoBox title="Deletion">
                  Delete individual log entries or all of your data at any time from within the App settings.
                </InfoBox>
                <InfoBox title="Portability">
                  Back up and restore your data using your own iCloud or Google Drive account via the
                  premium backup feature.
                </InfoBox>
                <InfoBox title="Withdrawal">
                  Stop using the App at any time by simply uninstalling it. No cancellation process is
                  required for the free tier.
                </InfoBox>
              </InfoGrid>
            </div>

            <Divider />

            {/* 10 — Contact */}
            <div className="sht-policy-section" id="contact">
              <SectionHead icon="✉️" title="Contact Us" />
              <p>If you have questions about these Terms or the App, please reach out to the developer:</p>
              <div className="sht-contact-card">
                <h4>Developer Contact</h4>
                <p>
                  We&apos;re happy to clarify any aspect of these Terms or assist with any issues you
                  may have with the App.
                </p>
                <a href="mailto:support@shehealth.app" className="sht-contact-link">
                  ✉️ support@shehealth.app
                </a>
              </div>
            </div>

            {/* Page footer */}
            <div className="sht-page-footer">
              <p>She Health – Health Tracking App</p>
              <p>© {new Date().getFullYear()} She Health. All rights reserved.</p>
            </div>

          </div>
        </main>
      </div>
    </>
  );
}