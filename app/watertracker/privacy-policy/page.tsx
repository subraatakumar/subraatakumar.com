"use client";

import React, { useState, useEffect } from 'react';
import { 
  Database, 
  Lock, 
  UserCheck, 
  Mail, 
  ChevronRight,
  Info,
  Clock,
  Smartphone,
  Trash2,
  Cloud,
  HardDrive,
  CreditCard,
  Droplets,
  ExternalLink,
  Share2
} from 'lucide-react';

const SECTIONS = [
  { id: 'offline-architecture', title: 'Offline Architecture', icon: <HardDrive className="w-4 h-4" /> },
  { id: 'collection', title: 'Data We Collect', icon: <Database className="w-4 h-4" /> },
  { id: 'purchases', title: 'Subscriptions & IAP', icon: <CreditCard className="w-4 h-4" /> },
  { id: 'backups', title: 'Cloud Backups', icon: <Cloud className="w-4 h-4" /> },
  { id: 'platforms', title: 'Platform Providers', icon: <Share2 className="w-4 h-4" /> },
  { id: 'usage', title: 'How Data is Used', icon: <Info className="w-4 h-4" /> },
  { id: 'permissions', title: 'App Permissions', icon: <Smartphone className="w-4 h-4" /> },
  { id: 'security', title: 'Security & Retention', icon: <Lock className="w-4 h-4" /> },
  { id: 'rights', title: 'User Rights', icon: <UserCheck className="w-4 h-4" /> },
  { id: 'contact', title: 'Contact Us', icon: <Mail className="w-4 h-4" /> },
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
    }}>
      {icon}
    </div>
    <div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  </div>
);

const PolicySection: React.FC<{ id: string; title: string; children: React.ReactNode; icon: React.ReactNode }> = ({ id, title, children, icon }) => (
  <section id={id} style={{ scrollMarginTop: 96, marginBottom: 52 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
      <div style={{
        background: 'linear-gradient(140deg, #4f88ff22, #3ec1ff22)',
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

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState('offline-architecture');

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
          .wt-pp-sidebar   { display: none !important; }
          .wt-pp-body      { flex-direction: column !important; }
          .wt-pp-content   { padding: 24px 18px !important; }
          .wt-pp-header    { padding: 24px 20px !important; }
          .wt-pp-h1        { font-size: 30px !important; }
          .wt-pp-email-box { min-width: 0 !important; flex: 1 1 220px !important; }
          .wt-pp-email-btn {
            white-space: normal !important;
            word-break: break-all;
            font-size: 12px !important;
          }
          .wt-pp-contact-box { padding: 24px 20px !important; }
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
      }} className="wt-pp-header">
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: 20 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--wt-navy-700)', fontWeight: 800, fontSize: 13, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 10 }}>
              <Droplets style={{ width: 16, height: 16 }} />
              <span>Water Tracker N Reminder</span>
            </div>
            <h1 className="wt-font-display wt-pp-h1" style={{ fontSize: 44, fontWeight: 800, color: 'var(--wt-navy-900)', margin: 0, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              Privacy Policy
            </h1>
            <p style={{ color: 'var(--wt-muted)', marginTop: 12, display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600 }}>
              <Clock style={{ width: 14, height: 14 }} />
              Last updated: March 5, 2026
            </p>
          </div>
          <div style={{
            background: 'rgba(79,136,255,0.08)',
            border: '1px solid rgba(79,136,255,0.18)',
            borderRadius: 16,
            padding: '18px 22px',
            minWidth: 260,
          }} className="wt-pp-email-box">
            <p style={{ fontSize: 12, fontWeight: 800, color: 'var(--wt-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 6px' }}>Privacy Questions?</p>
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
          <HighlightCard icon={<HardDrive style={{ width: 16, height: 16 }} />} title="Offline-Only" description="Your logs are stored in a local Realm database on your device." />
          <HighlightCard icon={<UserCheck style={{ width: 16, height: 16 }} />} title="No Login Needed" description="We do not collect names, emails, or credentials." />
          <HighlightCard icon={<Cloud style={{ width: 16, height: 16 }} />} title="Private Backups" description="Optional backups stay in your own iCloud or Google Drive." />
        </div>
      </div>

      {/* Body: sidebar + content */}
      <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }} className="wt-pp-body">

        {/* Sidebar */}
        <aside style={{ width: 220, flexShrink: 0, position: 'sticky', top: 84 }} className="wt-pp-sidebar">
          <p style={{ fontSize: 11, fontWeight: 800, color: 'var(--wt-muted)', textTransform: 'uppercase', letterSpacing: '0.09em', padding: '0 12px', marginBottom: 10 }}>
            Policy Sections
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

        {/* Main content */}
        <div style={{
          flex: 1,
          minWidth: 0,
          background: 'var(--wt-card)',
          border: '1px solid rgba(16,36,79,0.09)',
          borderRadius: 24,
          padding: '40px 44px',
          boxShadow: '0 8px 32px rgba(16,36,79,0.06)',
        }} className="wt-pp-content">

          <PolicySection id="offline-architecture" title="Offline-First Architecture" icon={<HardDrive style={{ width: 18, height: 18 }} />}>
            <p style={{ margin: '0 0 16px' }}>
              <strong style={{ color: 'var(--wt-navy-900)' }}>Water Tracker N Reminder</strong> is built with a core philosophy of local privacy. Unlike traditional tracking apps, we do not require any account registration, email submission, or social media login to function.
            </p>
            <div style={{
              background: 'rgba(79,136,255,0.07)',
              borderLeft: '4px solid var(--wt-navy-700)',
              borderRadius: '0 14px 14px 0',
              padding: '16px 20px',
              margin: '0',
            }}>
              <p style={{ fontWeight: 800, color: 'var(--wt-navy-900)', margin: '0 0 6px', fontSize: 14 }}>Local Storage (Realm Database)</p>
              <p style={{ margin: 0, color: 'var(--wt-muted)', fontSize: 14 }}>
                Your fluid intake logs, hydration reminder schedules, custom beverage lists, and personal goals are stored exclusively on your device using a local Realm database. We do not have a central server that collects or stores your hydration records.
              </p>
            </div>
          </PolicySection>

          <div style={{ height: 1, background: 'rgba(16,36,79,0.07)', margin: '0 0 48px' }} />

          <PolicySection id="collection" title="Data We Collect" icon={<Database style={{ width: 18, height: 18 }} />}>
            <p style={{ margin: '0 0 16px' }}>In the absence of user accounts, we do not collect personal identifiers. The data processed remains on-device:</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { icon: <Droplets style={{ width: 15, height: 15 }} />, label: 'Hydration Logs', desc: 'Beverage types, volume amounts, and entry timestamps.' },
                { icon: <Smartphone style={{ width: 15, height: 15 }} />, label: 'Anonymous Diagnostics', desc: 'We may process non-identifiable crash reports and app version data to ensure the reliability of reminders.' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{ background: 'rgba(79,136,255,0.13)', color: 'var(--wt-navy-700)', padding: '5px', borderRadius: '50%', flexShrink: 0, marginTop: 2 }}>
                    {item.icon}
                  </div>
                  <span style={{ fontSize: 14 }}><strong style={{ color: 'var(--wt-navy-900)' }}>{item.label}:</strong> {item.desc}</span>
                </div>
              ))}
            </div>
          </PolicySection>

          <div style={{ height: 1, background: 'rgba(16,36,79,0.07)', margin: '0 0 48px' }} />

          <PolicySection id="purchases" title="Subscriptions & In-App Purchases" icon={<CreditCard style={{ width: 18, height: 18 }} />}>
            <p style={{ margin: '0 0 16px' }}><strong style={{ color: 'var(--wt-navy-900)' }}>Water Tracker N Reminder</strong> provides premium features through the platform's native commerce systems.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
              {[
                { title: 'Secure Payments', desc: 'All transactions are processed by Apple (iOS) or Google (Android). The developer never sees or stores your credit card or billing details.' },
                { title: 'Purchase Verification', desc: 'The app uses anonymous, cryptographically signed store receipts to unlock premium features locally on your device.' },
              ].map((card, i) => (
                <div key={i} style={{ padding: '16px 18px', border: '1px solid rgba(16,36,79,0.10)', borderRadius: 14, background: 'rgba(79,136,255,0.04)' }}>
                  <h4 style={{ fontWeight: 800, color: 'var(--wt-navy-900)', margin: '0 0 6px', fontSize: 14 }}>{card.title}</h4>
                  <p style={{ fontSize: 13, margin: 0 }}>{card.desc}</p>
                </div>
              ))}
            </div>
          </PolicySection>

          <div style={{ height: 1, background: 'rgba(16,36,79,0.07)', margin: '0 0 48px' }} />

          <PolicySection id="backups" title="User-Managed Cloud Backups" icon={<Cloud style={{ width: 18, height: 18 }} />}>
            <p style={{ margin: '0 0 16px' }}>To prevent data loss during device upgrades or failures, the app offers an <strong style={{ color: 'var(--wt-navy-900)' }}>optional</strong> backup feature managed entirely by the user:</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { badge: 'iOS', badgeColor: '#4f88ff', badgeBg: 'rgba(79,136,255,0.12)', title: 'iCloud Drive', desc: 'Backups are encrypted and stored in your private iCloud container. We cannot access these files.' },
                { badge: 'AND', badgeColor: '#22c55e', badgeBg: 'rgba(34,197,94,0.12)', title: 'Google Drive', desc: 'Backups are saved to a private "App Data" folder on your Google Drive, inaccessible to us or other apps.' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <div style={{ width: 36, height: 22, borderRadius: 6, background: item.badgeBg, color: item.badgeColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 800, flexShrink: 0, marginTop: 2, letterSpacing: '0.03em' }}>
                    {item.badge}
                  </div>
                  <p style={{ fontSize: 14, margin: 0 }}><strong style={{ color: 'var(--wt-navy-900)' }}>{item.title}:</strong> {item.desc}</p>
                </div>
              ))}
            </div>
          </PolicySection>

          <div style={{ height: 1, background: 'rgba(16,36,79,0.07)', margin: '0 0 48px' }} />

          <PolicySection id="platforms" title="Platform & Privacy Links" icon={<Share2 style={{ width: 18, height: 18 }} />}>
            <p style={{ margin: '0 0 16px' }}>We rely on the following trusted platform services. For more information on how they handle data, please refer to their policies:</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
              {[
                { label: 'Apple Privacy Policy', href: 'https://www.apple.com/legal/privacy/' },
                { label: 'Google Privacy Policy', href: 'https://policies.google.com/privacy' },
              ].map((link, i) => (
                <a key={i} href={link.href} target="_blank" rel="noreferrer" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '14px 18px', background: 'rgba(79,136,255,0.04)',
                  border: '1px solid rgba(16,36,79,0.10)', borderRadius: 14,
                  textDecoration: 'none', color: 'var(--wt-navy-900)', fontWeight: 800, fontSize: 14,
                  transition: 'border-color 0.15s',
                }}>
                  {link.label}
                  <ExternalLink style={{ width: 14, height: 14, color: 'var(--wt-muted)', flexShrink: 0 }} />
                </a>
              ))}
            </div>
          </PolicySection>

          <div style={{ height: 1, background: 'rgba(16,36,79,0.07)', margin: '0 0 48px' }} />

          <PolicySection id="usage" title="How Data is Used" icon={<Info style={{ width: 18, height: 18 }} />}>
            <p style={{ margin: '0 0 16px' }}>Data processing is restricted to local app functionality:</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 10 }}>
              {[
                'Calculating hydration goal completion',
                'Scheduling local push notification reminders',
                'Generating hydration trend charts',
                'Restoring premium status via store receipts',
                'Executing user-initiated cloud backups',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', border: '1px solid rgba(16,36,79,0.09)', borderRadius: 12, background: 'rgba(79,136,255,0.04)' }}>
                  <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'linear-gradient(140deg, #4f88ff, #3ec1ff)', flexShrink: 0 }} />
                  <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--wt-navy-900)' }}>{item}</span>
                </div>
              ))}
            </div>
          </PolicySection>

          <div style={{ height: 1, background: 'rgba(16,36,79,0.07)', margin: '0 0 48px' }} />

          <PolicySection id="permissions" title="App Permissions" icon={<Smartphone style={{ width: 18, height: 18 }} />}>
            <p style={{ margin: '0 0 16px' }}>To provide a full experience, the app may request:</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: 'Notifications', desc: 'Allows the app to send hydration reminders according to your schedule.' },
                { label: 'Cloud Storage', desc: 'Allows the app to write backup files to your own iCloud or Google Drive account.' },
              ].map((p, i) => (
                <div key={i} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 12, padding: '14px 18px', borderRadius: 14, background: 'rgba(79,136,255,0.05)', border: '1px solid rgba(16,36,79,0.09)' }}>
                  <span style={{ fontWeight: 800, color: 'var(--wt-navy-900)', fontSize: 14 }}>{p.label}</span>
                  <span style={{ fontSize: 13, color: 'var(--wt-muted)', maxWidth: 380 }}>{p.desc}</span>
                </div>
              ))}
            </div>
          </PolicySection>

          <div style={{ height: 1, background: 'rgba(16,36,79,0.07)', margin: '0 0 48px' }} />

          <PolicySection id="security" title="Security and Retention" icon={<Lock style={{ width: 18, height: 18 }} />}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
              <div style={{ padding: '18px 20px', border: '1px solid rgba(16,36,79,0.09)', borderRadius: 14, background: 'rgba(79,136,255,0.04)' }}>
                <h4 style={{ fontWeight: 800, color: 'var(--wt-navy-900)', margin: '0 0 8px', fontSize: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Lock style={{ width: 14, height: 14, color: '#22c55e' }} /> Native Encryption
                </h4>
                <p style={{ fontSize: 13, margin: 0 }}>Your data inherits the hardware-level encryption provided by your iOS or Android device.</p>
              </div>
              <div style={{ padding: '18px 20px', border: '1px solid rgba(16,36,79,0.09)', borderRadius: 14, background: 'rgba(239,68,68,0.04)' }}>
                <h4 style={{ fontWeight: 800, color: 'var(--wt-navy-900)', margin: '0 0 8px', fontSize: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Trash2 style={{ width: 14, height: 14, color: '#ef4444' }} /> Immediate Deletion
                </h4>
                <p style={{ fontSize: 13, margin: 0 }}>Uninstalling the app immediately and permanently deletes the local Realm database from your device memory.</p>
              </div>
            </div>
          </PolicySection>

          <div style={{ height: 1, background: 'rgba(16,36,79,0.07)', margin: '0 0 48px' }} />

          <PolicySection id="rights" title="User Rights" icon={<UserCheck style={{ width: 18, height: 18 }} />}>
            <p style={{ margin: 0, fontSize: 14 }}>
              As an offline app, you retain 100% ownership of your data. You may modify, delete, or export your hydration logs at any time within the app settings. We comply with global privacy standards (GDPR/CCPA) by ensuring no personal data is harvested to a central server.
            </p>
          </PolicySection>

          <div style={{ height: 1, background: 'rgba(16,36,79,0.07)', margin: '0 0 48px' }} />

          <PolicySection id="contact" title="Contact Us" icon={<Mail style={{ width: 18, height: 18 }} />}>
            <div style={{
              background: 'linear-gradient(140deg, var(--wt-navy-900) 0%, var(--wt-navy-700) 100%)',
              borderRadius: 20,
              padding: '32px 36px',
              color: '#fff',
              position: 'relative',
              overflow: 'hidden',
            }} className="wt-pp-contact-box">
              <div style={{ position: 'absolute', top: -40, right: -40, width: 120, height: 120, background: 'rgba(79,136,255,0.35)', borderRadius: '50%', filter: 'blur(40px)' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h4 style={{ fontSize: 18, fontWeight: 800, margin: '0 0 8px', color: '#fff' }}>Developer Contact</h4>
                <p style={{ color: 'var(--wt-sky-300)', marginBottom: 20, fontSize: 14, maxWidth: 400 }}>
                  For any inquiries regarding this policy or the app's privacy architecture, please contact the developer:
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
                  className="wt-pp-email-btn"
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