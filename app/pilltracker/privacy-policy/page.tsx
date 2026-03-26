"use client";

import React, { useEffect, useState } from "react";
import {
  ChevronRight,
  Clock,
  Cloud,
  CreditCard,
  Database,
  HardDrive,
  Info,
  Lock,
  Mail,
  Pill,
  Share2,
  Smartphone,
  UserCheck,
} from "lucide-react";

const SECTIONS = [
  { id: "offline-architecture", title: "Offline Architecture", icon: <HardDrive className="w-4 h-4" /> },
  { id: "collection", title: "Data We Process", icon: <Database className="w-4 h-4" /> },
  { id: "ads", title: "Rewarded Ads", icon: <Share2 className="w-4 h-4" /> },
  { id: "purchases", title: "Purchases", icon: <CreditCard className="w-4 h-4" /> },
  { id: "backup", title: "Backup and Restore", icon: <Cloud className="w-4 h-4" /> },
  { id: "usage", title: "How Data Is Used", icon: <Info className="w-4 h-4" /> },
  { id: "permissions", title: "App Permissions", icon: <Smartphone className="w-4 h-4" /> },
  { id: "security", title: "Security and Retention", icon: <Lock className="w-4 h-4" /> },
  { id: "rights", title: "User Rights", icon: <UserCheck className="w-4 h-4" /> },
  { id: "contact", title: "Contact", icon: <Mail className="w-4 h-4" /> },
];

const HighlightCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div
    style={{
      background: "rgba(255,255,255,0.72)",
      border: "1px solid rgba(18,59,99,0.1)",
      borderRadius: 16,
      padding: "18px 20px",
      display: "flex",
      alignItems: "flex-start",
      gap: 14,
    }}
  >
    <div
      style={{
        background: "linear-gradient(140deg, var(--pt-cyan-400), var(--pt-orange-500))",
        borderRadius: 10,
        padding: 8,
        color: "#fff",
        flexShrink: 0,
      }}
    >
      {icon}
    </div>
    <div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  </div>
);

const PolicySection: React.FC<{ id: string; title: string; children: React.ReactNode; icon: React.ReactNode }> = ({
  id,
  title,
  children,
  icon,
}) => (
  <section id={id} style={{ scrollMarginTop: 96, marginBottom: 52 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
      <div
        style={{
          background: "rgba(86,194,242,0.12)",
          border: "1px solid rgba(86,194,242,0.25)",
          borderRadius: 10,
          padding: 8,
          color: "var(--pt-blue-900)",
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--pt-blue-900)", margin: 0 }}>{title}</h2>
    </div>
    <div style={{ color: "var(--pt-muted)", lineHeight: 1.7, fontSize: 15 }}>{children}</div>
  </section>
);

export default function PillTrackerPrivacyPage() {
  const [activeSection, setActiveSection] = useState("offline-architecture");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3, rootMargin: "-10% 0px -65% 0px" }
    );

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <style>{`
        @media (max-width: 760px) {
          .pt-pp-sidebar { display: none !important; }
          .pt-pp-body { flex-direction: column !important; }
          .pt-pp-content { padding: 24px 18px !important; }
          .pt-pp-header { padding: 24px 20px !important; }
          .pt-pp-h1 { font-size: 30px !important; }
          .pt-pp-email-box { min-width: 0 !important; flex: 1 1 220px !important; }
          .pt-pp-email-btn {
            white-space: normal !important;
            word-break: break-all;
            font-size: 12px !important;
          }
        }
      `}</style>

      <div
        style={{
          background: "var(--pt-card)",
          border: "1px solid rgba(18,59,99,0.09)",
          borderRadius: 24,
          padding: "36px 40px",
          marginBottom: 28,
          boxShadow: "0 8px 32px rgba(18,59,99,0.07)",
        }}
        className="pt-pp-header"
      >
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: 20 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--pt-blue-800)", fontWeight: 800, fontSize: 13, letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 10 }}>
              <Pill style={{ width: 16, height: 16 }} />
              <span>PillTracker</span>
            </div>
            <h1 className="pt-font-display pt-pp-h1" style={{ fontSize: 44, fontWeight: 800, color: "var(--pt-blue-900)", margin: 0, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              Privacy Policy
            </h1>
            <p style={{ color: "var(--pt-muted)", marginTop: 12, display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600 }}>
              <Clock style={{ width: 14, height: 14 }} />
              Last updated: March 26, 2026
            </p>
          </div>
          <div
            style={{
              background: "rgba(86,194,242,0.1)",
              border: "1px solid rgba(86,194,242,0.22)",
              borderRadius: 16,
              padding: "18px 22px",
              minWidth: 260,
            }}
            className="pt-pp-email-box"
          >
            <p style={{ fontSize: 12, fontWeight: 800, color: "var(--pt-muted)", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 6px" }}>Privacy Questions?</p>
            <a
              href="mailto:subraatakumar+pilltracker@gmail.com"
              className="pt-pp-email-btn"
              style={{ color: "var(--pt-blue-800)", fontWeight: 800, textDecoration: "none", display: "flex", alignItems: "center", gap: 4, fontSize: 13, wordBreak: "break-all" }}
            >
              subraatakumar+pilltracker@gmail.com
              <ChevronRight style={{ width: 14, height: 14, flexShrink: 0 }} />
            </a>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14, marginTop: 28 }}>
          <HighlightCard icon={<HardDrive style={{ width: 16, height: 16 }} />} title="Local-First Logs" description="Core medicine data is stored on-device in a local data layer." />
          <HighlightCard icon={<UserCheck style={{ width: 16, height: 16 }} />} title="No Login Needed" description="Core reminder and inventory workflows do not require account creation." />
          <HighlightCard icon={<Cloud style={{ width: 16, height: 16 }} />} title="Backup Controls" description="Backup and restore options support continuity across device changes." />
        </div>
      </div>

      <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }} className="pt-pp-body">
        <aside style={{ width: 220, flexShrink: 0, position: "sticky", top: 84 }} className="pt-pp-sidebar">
          <p style={{ fontSize: 11, fontWeight: 800, color: "var(--pt-muted)", textTransform: "uppercase", letterSpacing: "0.09em", padding: "0 12px", marginBottom: 10 }}>
            Policy Sections
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {SECTIONS.map((s) => {
              const isActive = activeSection === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "9px 14px",
                    borderRadius: 11,
                    fontSize: 13,
                    fontWeight: 700,
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.18s",
                    background: isActive ? "linear-gradient(140deg, var(--pt-cyan-400), var(--pt-blue-700))" : "transparent",
                    color: isActive ? "#fff" : "var(--pt-muted)",
                    boxShadow: isActive ? "0 4px 12px rgba(16,84,129,0.22)" : "none",
                  }}
                  onMouseEnter={(e) => {
                    if (isActive === false) (e.currentTarget as HTMLButtonElement).style.background = "rgba(86,194,242,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    if (isActive === false) (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  }}
                >
                  {s.icon}
                  {s.title}
                </button>
              );
            })}
          </div>
        </aside>

        <div
          style={{
            flex: 1,
            minWidth: 0,
            background: "var(--pt-card)",
            border: "1px solid rgba(18,59,99,0.09)",
            borderRadius: 24,
            padding: "40px 44px",
            boxShadow: "0 8px 32px rgba(18,59,99,0.06)",
          }}
          className="pt-pp-content"
        >
          <PolicySection id="offline-architecture" title="Offline-First Architecture" icon={<HardDrive style={{ width: 18, height: 18 }} />}>
            <p style={{ margin: "0 0 16px" }}>
              <strong style={{ color: "var(--pt-blue-900)" }}>PillTracker</strong> is built for local-first operation. Core medication schedules, dose logs, and inventory records are maintained on-device.
            </p>
            <div style={{ background: "rgba(86,194,242,0.08)", borderLeft: "4px solid var(--pt-blue-700)", borderRadius: "0 14px 14px 0", padding: "16px 20px", margin: "0" }}>
              <p style={{ fontWeight: 800, color: "var(--pt-blue-900)", margin: "0 0 6px", fontSize: 14 }}>Local Storage</p>
              <p style={{ margin: 0, color: "var(--pt-muted)", fontSize: 14 }}>
                The app stores medicine details, reminder schedules, and timeline logs locally and does not require central account infrastructure for core behavior.
              </p>
            </div>
          </PolicySection>

          <div style={{ height: 1, background: "rgba(18,59,99,0.07)", margin: "0 0 48px" }} />

          <PolicySection id="collection" title="Data We Process" icon={<Database style={{ width: 18, height: 18 }} />}>
            <p style={{ margin: "0 0 16px" }}>PillTracker processes only the data required for app functionality:</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ fontSize: 14 }}><strong style={{ color: "var(--pt-blue-900)" }}>Medication and dose logs:</strong> medicine names, timings, schedule rules, taken/skipped/snoozed states.</div>
              <div style={{ fontSize: 14 }}><strong style={{ color: "var(--pt-blue-900)" }}>Inventory records:</strong> bill-group entries, stock quantities, and optional medicine or bill images.</div>
              <div style={{ fontSize: 14 }}><strong style={{ color: "var(--pt-blue-900)" }}>Preferences:</strong> appearance, language, reminder, lock, and personalization options.</div>
            </div>
          </PolicySection>

          <div style={{ height: 1, background: "rgba(18,59,99,0.07)", margin: "0 0 48px" }} />

          <PolicySection id="ads" title="Rewarded Ads" icon={<Share2 style={{ width: 18, height: 18 }} />}>
            <p style={{ margin: 0 }}>
              Rewarded ad interactions can unlock selected advanced features for a limited duration. Ad delivery and ad-related identifiers are handled by ad providers under their policies.
            </p>
          </PolicySection>

          <div style={{ height: 1, background: "rgba(18,59,99,0.07)", margin: "0 0 48px" }} />

          <PolicySection id="purchases" title="Purchases" icon={<CreditCard style={{ width: 18, height: 18 }} />}>
            <p style={{ margin: 0 }}>
              In-app purchases are processed through Apple App Store or Google Play billing systems. PillTracker does not directly store card details.
            </p>
          </PolicySection>

          <div style={{ height: 1, background: "rgba(18,59,99,0.07)", margin: "0 0 48px" }} />

          <PolicySection id="backup" title="Backup and Restore" icon={<Cloud style={{ width: 18, height: 18 }} />}>
            <p style={{ margin: 0 }}>
              Backup and restore tools are available through app settings. Where cloud storage is used, processing follows the selected platform provider account model.
            </p>
          </PolicySection>

          <div style={{ height: 1, background: "rgba(18,59,99,0.07)", margin: "0 0 48px" }} />

          <PolicySection id="usage" title="How Data Is Used" icon={<Info style={{ width: 18, height: 18 }} />}>
            <p style={{ margin: 0 }}>
              Data is used to drive reminders, timeline status updates, inventory calculations, and optional personalization settings inside the app.
            </p>
          </PolicySection>

          <div style={{ height: 1, background: "rgba(18,59,99,0.07)", margin: "0 0 48px" }} />

          <PolicySection id="permissions" title="App Permissions" icon={<Smartphone style={{ width: 18, height: 18 }} />}>
            <ul style={{ margin: 0, paddingLeft: 18, color: "var(--pt-muted)", lineHeight: 1.7 }}>
              <li>Camera and gallery access for optional medicine, bill, and profile images.</li>
              <li>Notification access for medicine reminders.</li>
              <li>Biometric permission only when biometric lock is enabled by the user.</li>
            </ul>
          </PolicySection>

          <div style={{ height: 1, background: "rgba(18,59,99,0.07)", margin: "0 0 48px" }} />

          <PolicySection id="security" title="Security and Retention" icon={<Lock style={{ width: 18, height: 18 }} />}>
            <p style={{ margin: 0 }}>
              Users can enable PIN or biometric lock. Local records remain until removed by user action, app data reset, or uninstall.
            </p>
          </PolicySection>

          <div style={{ height: 1, background: "rgba(18,59,99,0.07)", margin: "0 0 48px" }} />

          <PolicySection id="rights" title="User Rights" icon={<UserCheck style={{ width: 18, height: 18 }} />}>
            <p style={{ margin: 0 }}>
              You can edit or delete records in-app and can remove local app data using app or device controls.
            </p>
          </PolicySection>

          <div style={{ height: 1, background: "rgba(18,59,99,0.07)", margin: "0 0 48px" }} />

          <PolicySection id="contact" title="Contact" icon={<Mail style={{ width: 18, height: 18 }} />}>
            <div style={{ background: "linear-gradient(140deg, rgba(86,194,242,0.12), rgba(255,157,74,0.12))", border: "1px solid rgba(18,59,99,0.12)", borderRadius: 16, padding: "18px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
              <span style={{ fontSize: 14, color: "var(--pt-muted)", fontWeight: 700 }}>For privacy questions:</span>
              <a href="mailto:subraatakumar+pilltracker@gmail.com" style={{ textDecoration: "none", color: "var(--pt-blue-800)", fontWeight: 800, fontSize: 14, display: "flex", alignItems: "center", gap: 4, wordBreak: "break-all" }}>
                subraatakumar+pilltracker@gmail.com
                <ChevronRight style={{ width: 14, height: 14 }} />
              </a>
            </div>
          </PolicySection>
        </div>
      </div>
    </div>
  );
}
