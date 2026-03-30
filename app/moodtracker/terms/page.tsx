"use client";

import React, { useState, useEffect } from 'react';
import {
  FileText,
  ShieldCheck,
  AlertTriangle,
  Ban,
  RefreshCw,
  Globe,
  CreditCard,
  UserCheck,
  Scale,
  Mail,
  Clock,
  Droplets,
  ChevronRight,
} from 'lucide-react';

const SECTIONS = [
  { id: 'acceptance',    title: 'Acceptance of Terms',     icon: <FileText className="w-4 h-4" /> },
  { id: 'use-of-app',   title: 'Use of the App',          icon: <ShieldCheck className="w-4 h-4" /> },
  { id: 'prohibited',   title: 'Prohibited Activities',   icon: <Ban className="w-4 h-4" /> },
  { id: 'purchases',    title: 'Subscriptions & Billing', icon: <CreditCard className="w-4 h-4" /> },
  { id: 'ads',          title: 'Rewarded Ads Access',     icon: <Globe className="w-4 h-4" /> },
  { id: 'disclaimer',   title: 'Health Disclaimer',       icon: <AlertTriangle className="w-4 h-4" /> },
  { id: 'ip',           title: 'Intellectual Property',   icon: <Globe className="w-4 h-4" /> },
  { id: 'termination',  title: 'Termination',             icon: <RefreshCw className="w-4 h-4" /> },
  { id: 'liability',    title: 'Limitation of Liability', icon: <Scale className="w-4 h-4" /> },
  { id: 'rights',       title: 'Your Rights',             icon: <UserCheck className="w-4 h-4" /> },
  { id: 'contact',      title: 'Contact Us',              icon: <Mail className="w-4 h-4" /> },
];

const HighlightCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div style={{
    background: 'rgba(255,255,255,0.72)',
    border: '1px solid rgba(16,36,79,0.10)',
    borderRadius: 16,
    padding: '18px 20px',
    display: 'flex',
    alignItems: 'flex-start',
    gap: 14,
  }}>
    <div style={{
      background: 'linear-gradient(140deg, #4f88ff, #3ec1ff)',
      borderRadius: 10,
      padding: 8,
      color: '#fff',
      flexShrink: 0,
      boxShadow: '0 6px 14px rgba(31,79,157,0.18)',
    }}>
      {icon}
    </div>
    <div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  </div>
);

const Divider = () => (
  <div style={{ height: 1, background: 'rgba(16,36,79,0.07)', margin: '0 0 48px' }} />
);

const PolicySection: React.FC<{ id: string; title: string; children: React.ReactNode; icon: React.ReactNode }> = ({ id, title, children, icon }) => (
  <section id={id} style={{ scrollMarginTop: 96, marginBottom: 52 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
      <div style={{
        background: 'rgba(79,136,255,0.10)',
        border: '1px solid rgba(79,136,255,0.2)',
        borderRadius: 10,
        padding: 8,
        color: 'var(--wt-navy-700)',
        flexShrink: 0,
      }}>
        {icon}
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 800, color: 'var(--wt-navy-900)', margin: 0 }}>{title}</h2>
    </div>
    <div style={{ color: 'var(--wt-muted)', lineHeight: 1.7, fontSize: 15 }}>
      {children}
    </div>
  </section>
);

const BulletItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 10 }}>
    <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'linear-gradient(140deg, #4f88ff, #3ec1ff)', flexShrink: 0, marginTop: 7 }} />
    <span style={{ fontSize: 14 }}>{children}</span>
  </div>
);

const InfoCard: React.FC<{ children: React.ReactNode; accent?: boolean }> = ({ children, accent = false }) => (
  <div style={{
    padding: '16px 20px',
    border: `1px solid ${accent ? 'rgba(251,146,60,0.25)' : 'rgba(16,36,79,0.09)'}`,
    borderRadius: 14,
    background: accent ? 'rgba(251,146,60,0.05)' : 'rgba(79,136,255,0.04)',
    fontSize: 14,
    color: 'var(--wt-muted)',
    lineHeight: 1.65,
  }}>
    {children}
  </div>
);

export default function TermsOfUsePage() {
  const [activeSection, setActiveSection] = useState('acceptance');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3, rootMargin: '-10% 0px -65% 0px' }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <style>{`
        @media (max-width: 760px) {
          .wt-terms-sidebar { display: none !important; }
          .wt-terms-body { flex-direction: column !important; }
          .wt-terms-content { padding: 24px 18px !important; }
          .wt-terms-header { padding: 24px 20px !important; }
          .wt-terms-contact-box { padding: 24px 20px !important; }
          .wt-terms-email-btn {
            word-break: break-all;
            white-space: normal !important;
            font-size: 12px !important;
          }
          .wt-terms-h1 { font-size: 30px !important; }
        }
      `}</style>
      {/* Header Card */}
      <div style={{
        background: 'var(--wt-card)',
        border: '1px solid rgba(16,36,79,0.09)',
        borderRadius: 24,
        padding: '36px 40px',
        marginBottom: 28,
        boxShadow: '0 8px 32px rgba(16,36,79,0.07)',
      }} className="wt-terms-header">
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: 20 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--wt-navy-700)', fontWeight: 800, fontSize: 13, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 10 }}>
              <Droplets style={{ width: 16, height: 16 }} />
              <span>Water Tracker N Reminder</span>
            </div>
            <h1 className="wt-font-display wt-terms-h1" style={{ fontSize: 44, fontWeight: 800, color: 'var(--wt-navy-900)', margin: 0, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              Terms of Use
            </h1>
            <p style={{ color: 'var(--wt-muted)', marginTop: 12, display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600 }}>
              <Clock style={{ width: 14, height: 14 }} />
              Last updated: March 15, 2026
            </p>
          </div>
          <div style={{
            background: 'rgba(79,136,255,0.08)',
            border: '1px solid rgba(79,136,255,0.18)',
            borderRadius: 16,
            padding: '18px 22px',
            minWidth: 0,
            flex: '1 1 220px',
          }}>
            <p style={{ fontSize: 12, fontWeight: 800, color: 'var(--wt-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 6px' }}>Questions?</p>
            <a
              href="mailto:subraatakumar+watertracker@gmail.com"
              style={{ color: 'var(--wt-navy-700)', fontWeight: 800, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, wordBreak: 'break-all' }}
            >
              subraatakumar+watertracker@gmail.com
              <ChevronRight style={{ width: 14, height: 14, flexShrink: 0 }} />
            </a>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14, marginTop: 28 }}>
          <HighlightCard icon={<FileText style={{ width: 16, height: 16 }} />} title="Clear Agreement" description="By using the app, you agree to these terms. Please read them carefully." />
          <HighlightCard icon={<ShieldCheck style={{ width: 16, height: 16 }} />} title="Privacy First" description="These terms work alongside our Privacy Policy to protect your data." />
          <HighlightCard icon={<Scale style={{ width: 16, height: 16 }} />} title="Fair Use" description="Use the app for personal hydration tracking only, as intended." />
        </div>
      </div>

      {/* Body */}
      <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }} className="wt-terms-body">

        {/* Sidebar — hidden on mobile via inline media workaround */}
        <aside style={{ width: 220, flexShrink: 0, position: 'sticky', top: 84 }} className="wt-terms-sidebar">
          <p style={{ fontSize: 11, fontWeight: 800, color: 'var(--wt-muted)', textTransform: 'uppercase', letterSpacing: '0.09em', padding: '0 12px', marginBottom: 10 }}>
            Sections
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {SECTIONS.map((s) => {
              const isActive = activeSection === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '9px 14px',
                    borderRadius: 11,
                    fontSize: 13,
                    fontWeight: 700,
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.18s',
                    background: isActive ? 'linear-gradient(140deg, #4f88ff, #3ec1ff)' : 'transparent',
                    color: isActive ? '#fff' : 'var(--wt-muted)',
                    boxShadow: isActive ? '0 4px 12px rgba(31,79,157,0.22)' : 'none',
                  }}
                  onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLButtonElement).style.background = 'rgba(79,136,255,0.1)'; }}
                  onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
                >
                  {s.icon}
                  {s.title}
                </button>
              );
            })}
          </div>
        </aside>

        {/* Main Content */}
        <div style={{
          flex: 1,
          minWidth: 0,
          background: 'var(--wt-card)',
          border: '1px solid rgba(16,36,79,0.09)',
          borderRadius: 24,
          padding: '40px 44px',
          boxShadow: '0 8px 32px rgba(16,36,79,0.06)',
        }} className="wt-terms-content">

          <PolicySection id="acceptance" title="Acceptance of Terms" icon={<FileText style={{ width: 18, height: 18 }} />}>
            <p style={{ margin: '0 0 14px' }}>
              By downloading, installing, or using <strong style={{ color: 'var(--wt-navy-900)' }}>Water Tracker N Reminder</strong> ("the App"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, please do not use the App.
            </p>
            <InfoCard>
              These Terms apply to all versions of the App available on the Apple App Store and Google Play Store. We may update these Terms from time to time — continued use of the App after changes constitutes your acceptance of the revised Terms.
            </InfoCard>
          </PolicySection>

          <Divider />

          <PolicySection id="use-of-app" title="Use of the App" icon={<ShieldCheck style={{ width: 18, height: 18 }} />}>
            <p style={{ margin: '0 0 14px' }}>
              Water Tracker N Reminder is a personal hydration tracking tool intended for individual, non-commercial use. You agree to use the App only for its intended purpose and in compliance with all applicable laws.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <BulletItem>You must be at least 13 years of age to use the App.</BulletItem>
              <BulletItem>You are responsible for maintaining the security of your device.</BulletItem>
              <BulletItem>You agree not to misuse, reverse-engineer, or modify the App.</BulletItem>
              <BulletItem>The App is provided for personal, non-commercial use only.</BulletItem>
            </div>
          </PolicySection>

          <Divider />

          <PolicySection id="prohibited" title="Prohibited Activities" icon={<Ban style={{ width: 18, height: 18 }} />}>
            <p style={{ margin: '0 0 14px' }}>You agree not to engage in any of the following when using the App:</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 10 }}>
              {[
                'Attempting to decompile, disassemble, or reverse-engineer the App',
                'Using the App for any unlawful or fraudulent purpose',
                'Circumventing in-app purchase or subscription verification',
                'Distributing modified or cracked versions of the App',
                'Interfering with the App\'s reminder or notification systems',
                'Attempting to access other users\' device data',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '12px 14px', border: '1px solid rgba(239,68,68,0.12)', borderRadius: 12, background: 'rgba(239,68,68,0.03)' }}>
                  <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#ef4444', flexShrink: 0, marginTop: 6 }} />
                  <span style={{ fontSize: 13, color: 'var(--wt-muted)' }}>{item}</span>
                </div>
              ))}
            </div>
          </PolicySection>

          <Divider />

          <PolicySection id="purchases" title="Subscriptions & Billing" icon={<CreditCard style={{ width: 18, height: 18 }} />}>
            <p style={{ margin: '0 0 16px' }}>
              The App offers optional premium features via in-app purchases and subscriptions managed entirely by Apple or Google.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14, marginBottom: 16 }}>
              {[
                { title: 'Billing', desc: 'All charges are processed by Apple App Store or Google Play. The developer does not handle your payment information.' },
                { title: 'Auto-Renewal', desc: 'Subscriptions auto-renew unless cancelled at least 24 hours before the end of the current billing period.' },
                { title: 'Refunds', desc: 'Refund requests must be directed to Apple or Google in accordance with their respective refund policies.' },
                { title: 'Price Changes', desc: 'We reserve the right to change subscription pricing with reasonable notice provided in the App.' },
              ].map((card, i) => (
                <div key={i} style={{ padding: '14px 16px', border: '1px solid rgba(16,36,79,0.09)', borderRadius: 14, background: 'rgba(79,136,255,0.04)' }}>
                  <h4 style={{ fontWeight: 800, color: 'var(--wt-navy-900)', margin: '0 0 6px', fontSize: 14 }}>{card.title}</h4>
                  <p style={{ fontSize: 13, margin: 0 }}>{card.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <BulletItem><strong style={{ color: 'var(--wt-navy-900)' }}>Water Tracker Pro Yearly</strong>: auto-renewable subscription, 1 year, priced at <strong style={{ color: 'var(--wt-navy-900)' }}>$9.99/year</strong>.</BulletItem>
              <BulletItem><strong style={{ color: 'var(--wt-navy-900)' }}>Water Tracker Pro One Time</strong>: lifetime purchase priced at <strong style={{ color: 'var(--wt-navy-900)' }}>$49.99</strong>.</BulletItem>
            </div>
          </PolicySection>

          <Divider />

          <PolicySection id="ads" title="Rewarded Ads Access" icon={<Globe style={{ width: 18, height: 18 }} />}>
            <p style={{ margin: '0 0 14px' }}>
              The App does <strong style={{ color: 'var(--wt-navy-900)' }}>not</strong> display persistent banner ads. Instead, certain individual Pro features can be temporarily unlocked by watching a rewarded ad.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <BulletItem>Each rewarded ad unlocks the selected feature for <strong style={{ color: 'var(--wt-navy-900)' }}>24 hours</strong>.</BulletItem>
              <BulletItem>Rewarded ads may be served by <strong style={{ color: 'var(--wt-navy-900)' }}>Google AdMob</strong> and may vary by region, device, and platform settings.</BulletItem>
              <BulletItem>Your use of rewarded-ad access is also subject to Google AdMob and Google privacy terms.</BulletItem>
            </div>
          </PolicySection>

          <Divider />

          <PolicySection id="disclaimer" title="Health Disclaimer" icon={<AlertTriangle style={{ width: 18, height: 18 }} />}>
            <InfoCard accent>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <AlertTriangle style={{ width: 18, height: 18, color: '#f97316', flexShrink: 0, marginTop: 2 }} />
                <div>
                  <strong style={{ color: 'var(--wt-navy-900)', display: 'block', marginBottom: 6 }}>Not a Medical Device</strong>
                  Water Tracker N Reminder is a general wellness tool and is <strong style={{ color: 'var(--wt-navy-900)' }}>not</strong> a medical device. It does not provide medical advice, diagnosis, or treatment. Hydration recommendations within the App are general guidelines only.
                </div>
              </div>
            </InfoCard>
            <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <BulletItem>Always consult a qualified healthcare professional for medical concerns.</BulletItem>
              <BulletItem>Individual hydration needs vary — the App's suggestions are not a substitute for professional medical advice.</BulletItem>
              <BulletItem>The developer is not liable for any health outcomes resulting from use of the App.</BulletItem>
            </div>
          </PolicySection>

          <Divider />

          <PolicySection id="ip" title="Intellectual Property" icon={<Globe style={{ width: 18, height: 18 }} />}>
            <p style={{ margin: '0 0 14px' }}>
              All content within the App — including but not limited to the design, graphics, icons, text, and code — is the exclusive property of the developer and is protected by applicable intellectual property laws.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
              <InfoCard>
                <strong style={{ color: 'var(--wt-navy-900)', display: 'block', marginBottom: 4 }}>Your Data</strong>
                All hydration data you enter belongs solely to you. We do not claim ownership of any personal content you create within the App.
              </InfoCard>
              <InfoCard>
                <strong style={{ color: 'var(--wt-navy-900)', display: 'block', marginBottom: 4 }}>App Content</strong>
                You may not copy, reproduce, distribute, or create derivative works from the App or its content without prior written consent.
              </InfoCard>
            </div>
          </PolicySection>

          <Divider />

          <PolicySection id="termination" title="Termination" icon={<RefreshCw style={{ width: 18, height: 18 }} />}>
            <p style={{ margin: '0 0 14px' }}>
              You may stop using the App at any time by uninstalling it from your device. Uninstalling permanently removes all locally stored data.
            </p>
            <InfoCard>
              We reserve the right to discontinue or modify the App at any time without prior notice. In the event the App is discontinued, active subscriptions should be cancelled via the relevant app store to avoid future charges.
            </InfoCard>
          </PolicySection>

          <Divider />

          <PolicySection id="liability" title="Limitation of Liability" icon={<Scale style={{ width: 18, height: 18 }} />}>
            <p style={{ margin: '0 0 14px' }}>
              To the fullest extent permitted by law, the developer shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the App.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <BulletItem>The App is provided "as is" without warranties of any kind, express or implied.</BulletItem>
              <BulletItem>We do not guarantee uninterrupted or error-free operation of the App.</BulletItem>
              <BulletItem>We are not responsible for data loss resulting from device failure or OS updates.</BulletItem>
              <BulletItem>Our total liability shall not exceed the amount you paid for the App in the 12 months prior to the claim.</BulletItem>
            </div>
          </PolicySection>

          <Divider />

          <PolicySection id="rights" title="Your Rights" icon={<UserCheck style={{ width: 18, height: 18 }} />}>
            <p style={{ margin: '0 0 14px' }}>
              Because all data is stored locally on your device, you retain complete control and ownership. Your rights include:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 10 }}>
              {[
                { title: 'Access', desc: 'View all your hydration data directly within the App at any time.' },
                { title: 'Deletion', desc: 'Delete individual logs or all data from within the App settings.' },
                { title: 'Export', desc: 'Export your hydration records via the App\'s export feature.' },
                { title: 'Portability', desc: 'Back up and restore your data using your own iCloud or Google Drive.' },
              ].map((item, i) => (
                <div key={i} style={{ padding: '14px 16px', border: '1px solid rgba(16,36,79,0.09)', borderRadius: 14, background: 'rgba(79,136,255,0.04)' }}>
                  <h4 style={{ fontWeight: 800, color: 'var(--wt-navy-900)', margin: '0 0 5px', fontSize: 14 }}>{item.title}</h4>
                  <p style={{ fontSize: 13, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </PolicySection>

          <Divider />

          <PolicySection id="contact" title="Contact Us" icon={<Mail style={{ width: 18, height: 18 }} />}>
            <div style={{
              background: 'linear-gradient(140deg, var(--wt-navy-900) 0%, var(--wt-navy-700) 100%)',
              borderRadius: 20,
              padding: '32px 36px',
              color: '#fff',
              position: 'relative',
              overflow: 'hidden',
            }} className="wt-terms-contact-box">
              <div style={{ position: 'absolute', top: -40, right: -40, width: 120, height: 120, background: 'rgba(79,136,255,0.35)', borderRadius: '50%', filter: 'blur(40px)' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h4 style={{ fontSize: 18, fontWeight: 800, margin: '0 0 8px', color: '#fff' }}>Developer Contact</h4>
                <p style={{ color: 'var(--wt-sky-300)', marginBottom: 20, fontSize: 14, maxWidth: 400 }}>
                  For questions about these Terms or the App, please reach out to the developer directly:
                </p>
                <a
                  href="mailto:subraatakumar+watertracker@gmail.com"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: '#fff', color: 'var(--wt-navy-900)',
                    padding: '11px 22px', borderRadius: 12,
                    fontWeight: 800, fontSize: 13, textDecoration: 'none',
                    boxShadow: '0 4px 14px rgba(16,36,79,0.18)',
                    whiteSpace: 'nowrap',
                  }}
                  className="wt-terms-email-btn"
                >
                  <Mail style={{ width: 15, height: 15 }} />
                  subraatakumar+watertracker@gmail.com
                </a>
              </div>
            </div>
          </PolicySection>

          <div style={{ marginTop: 52, paddingTop: 24, borderTop: '1px solid rgba(16,36,79,0.08)', textAlign: 'center' }}>
            <p style={{ fontSize: 11, fontWeight: 800, color: 'var(--wt-muted)', textTransform: 'uppercase', letterSpacing: '0.09em', margin: '0 0 4px' }}>
              Water Tracker N Reminder
            </p>
            <p style={{ fontSize: 12, color: 'var(--wt-muted)', margin: 0 }}>
              &copy; {new Date().getFullYear()} subraatakumar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
