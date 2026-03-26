"use client";

import React, { useEffect, useState } from "react";
import {
  AlertTriangle,
  Ban,
  ChevronRight,
  Clock,
  CreditCard,
  FileText,
  Globe,
  Mail,
  Pill,
  Scale,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

const SECTIONS = [
  { id: "acceptance", title: "Acceptance of Terms", icon: <FileText className="w-4 h-4" /> },
  { id: "intended-use", title: "Intended Use", icon: <ShieldCheck className="w-4 h-4" /> },
  { id: "purchases", title: "Purchases and Unlocks", icon: <CreditCard className="w-4 h-4" /> },
  { id: "restrictions", title: "Restrictions", icon: <Ban className="w-4 h-4" /> },
  { id: "disclaimer", title: "Disclaimer", icon: <AlertTriangle className="w-4 h-4" /> },
  { id: "rights", title: "User Rights", icon: <UserCheck className="w-4 h-4" /> },
  { id: "liability", title: "Liability", icon: <Scale className="w-4 h-4" /> },
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
        boxShadow: "0 6px 14px rgba(16,84,129,0.18)",
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

const Divider = () => <div style={{ height: 1, background: "rgba(18,59,99,0.07)", margin: "0 0 48px" }} />;

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

const BulletItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 10 }}>
    <div
      style={{
        width: 7,
        height: 7,
        borderRadius: "50%",
        background: "linear-gradient(140deg, var(--pt-cyan-400), var(--pt-orange-500))",
        flexShrink: 0,
        marginTop: 7,
      }}
    />
    <span style={{ fontSize: 14 }}>{children}</span>
  </div>
);

const InfoCard: React.FC<{ children: React.ReactNode; accent?: boolean }> = ({ children, accent = false }) => (
  <div
    style={{
      padding: "16px 20px",
      border: `1px solid ${accent ? "rgba(255,157,74,0.28)" : "rgba(18,59,99,0.09)"}`,
      borderRadius: 14,
      background: accent ? "rgba(255,157,74,0.08)" : "rgba(86,194,242,0.06)",
      fontSize: 14,
      color: "var(--pt-muted)",
      lineHeight: 1.65,
    }}
  >
    {children}
  </div>
);

export default function PillTrackerTermsPage() {
  const [activeSection, setActiveSection] = useState("acceptance");

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
          .pt-terms-sidebar { display: none !important; }
          .pt-terms-body { flex-direction: column !important; }
          .pt-terms-content { padding: 24px 18px !important; }
          .pt-terms-header { padding: 24px 20px !important; }
          .pt-terms-h1 { font-size: 30px !important; }
          .pt-terms-email-btn {
            word-break: break-all;
            white-space: normal !important;
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
        className="pt-terms-header"
      >
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: 20 }}>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                color: "var(--pt-blue-800)",
                fontWeight: 800,
                fontSize: 13,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                marginBottom: 10,
              }}
            >
              <Pill style={{ width: 16, height: 16 }} />
              <span>PillTracker</span>
            </div>
            <h1 className="pt-font-display pt-terms-h1" style={{ fontSize: 44, fontWeight: 800, color: "var(--pt-blue-900)", margin: 0, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              Terms of Use
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
              minWidth: 0,
              flex: "1 1 220px",
            }}
          >
            <p style={{ fontSize: 12, fontWeight: 800, color: "var(--pt-muted)", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 6px" }}>Questions?</p>
            <a
              href="mailto:subraatakumar+pilltracker@gmail.com"
              className="pt-terms-email-btn"
              style={{ color: "var(--pt-blue-800)", fontWeight: 800, textDecoration: "none", display: "flex", alignItems: "center", gap: 4, fontSize: 13, wordBreak: "break-all" }}
            >
              subraatakumar+pilltracker@gmail.com
              <ChevronRight style={{ width: 14, height: 14, flexShrink: 0 }} />
            </a>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14, marginTop: 28 }}>
          <HighlightCard icon={<FileText style={{ width: 16, height: 16 }} />} title="Clear Agreement" description="Using the app means you agree to these terms and periodic updates." />
          <HighlightCard icon={<ShieldCheck style={{ width: 16, height: 16 }} />} title="Intended Usage" description="PillTracker supports medication planning but does not replace clinical advice." />
          <HighlightCard icon={<Scale style={{ width: 16, height: 16 }} />} title="Fair Use" description="Use the app lawfully and avoid interfering with entitlement flows." />
        </div>
      </div>

      <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }} className="pt-terms-body">
        <aside style={{ width: 220, flexShrink: 0, position: "sticky", top: 84 }} className="pt-terms-sidebar">
          <p style={{ fontSize: 11, fontWeight: 800, color: "var(--pt-muted)", textTransform: "uppercase", letterSpacing: "0.09em", padding: "0 12px", marginBottom: 10 }}>
            Sections
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
          className="pt-terms-content"
        >
          <PolicySection id="acceptance" title="Acceptance of Terms" icon={<FileText style={{ width: 18, height: 18 }} />}>
            <p style={{ margin: "0 0 14px" }}>
              By downloading, installing, or using <strong style={{ color: "var(--pt-blue-900)" }}>PillTracker</strong> (the App), you agree to these Terms of Use.
            </p>
            <InfoCard>
              These terms apply to releases distributed through app stores. Continued usage after updates means acceptance of revised terms.
            </InfoCard>
          </PolicySection>

          <Divider />

          <PolicySection id="intended-use" title="Intended Use" icon={<ShieldCheck style={{ width: 18, height: 18 }} />}>
            <BulletItem>PillTracker is designed for medication reminders, schedule support, and intake tracking.</BulletItem>
            <BulletItem>The app is not a replacement for medical advice, diagnosis, or treatment.</BulletItem>
            <BulletItem>Users are responsible for confirming medicine plans with qualified healthcare providers.</BulletItem>
          </PolicySection>

          <Divider />

          <PolicySection id="purchases" title="Purchases and Unlocks" icon={<CreditCard style={{ width: 18, height: 18 }} />}>
            <BulletItem>Premium access includes one subscription plan and one one-time purchase plan.</BulletItem>
            <BulletItem>Advanced features can also be unlocked temporarily through rewarded ads.</BulletItem>
            <BulletItem>Billing and refunds are handled by Apple App Store or Google Play policies.</BulletItem>
            <InfoCard accent>
              Purchase flow outcomes, renewal behavior, and cancellation timing are determined by your selected app store account.
            </InfoCard>
          </PolicySection>

          <Divider />

          <PolicySection id="restrictions" title="Restrictions" icon={<Ban style={{ width: 18, height: 18 }} />}>
            <BulletItem>No reverse engineering or redistribution except where law allows.</BulletItem>
            <BulletItem>No unlawful use of reminder, timeline, or inventory features.</BulletItem>
            <BulletItem>No interference with purchase, ad unlock, or entitlement behavior.</BulletItem>
          </PolicySection>

          <Divider />

          <PolicySection id="disclaimer" title="Disclaimer" icon={<AlertTriangle style={{ width: 18, height: 18 }} />}>
            <p style={{ margin: "0 0 14px" }}>
              PillTracker is provided as-is without warranty of uninterrupted operation or absolute reminder delivery in all device conditions.
            </p>
            <InfoCard accent>
              Users should not rely on a single digital system for critical medication safety where clinical risk exists.
            </InfoCard>
          </PolicySection>

          <Divider />

          <PolicySection id="rights" title="User Rights" icon={<UserCheck style={{ width: 18, height: 18 }} />}>
            <BulletItem>You may stop using the app at any time.</BulletItem>
            <BulletItem>You may delete local records using app or device controls.</BulletItem>
            <BulletItem>You may review updated terms anytime from the website policy page.</BulletItem>
          </PolicySection>

          <Divider />

          <PolicySection id="liability" title="Liability" icon={<Scale style={{ width: 18, height: 18 }} />}>
            <p style={{ margin: "0 0 14px" }}>
              To the extent permitted by law, the developer is not liable for indirect or consequential loss related to app usage.
            </p>
            <InfoCard>
              Liability limits do not override protections that cannot be excluded under applicable consumer law.
            </InfoCard>
          </PolicySection>

          <Divider />

          <PolicySection id="contact" title="Contact" icon={<Mail style={{ width: 18, height: 18 }} />}>
            <div
              style={{
                background: "linear-gradient(140deg, rgba(86,194,242,0.12), rgba(255,157,74,0.12))",
                border: "1px solid rgba(18,59,99,0.12)",
                borderRadius: 16,
                padding: "18px 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Globe style={{ width: 16, height: 16, color: "var(--pt-blue-800)" }} />
                <span style={{ fontSize: 14, color: "var(--pt-muted)", fontWeight: 700 }}>Terms inquiries</span>
              </div>
              <a
                href="mailto:subraatakumar+pilltracker@gmail.com"
                style={{ textDecoration: "none", color: "var(--pt-blue-800)", fontWeight: 800, fontSize: 14, display: "flex", alignItems: "center", gap: 4, wordBreak: "break-all" }}
              >
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
