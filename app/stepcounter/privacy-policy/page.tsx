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
  ExternalLink,
  Share2,
  Activity,
  Weight
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

const PolicySection: React.FC<{ id: string; title: string; children?: React.ReactNode; icon?: React.ReactNode }> = ({ id, title, children, icon }) => (
  <section id={id} style={{ scrollMarginTop: 96, marginBottom: 52 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
      <div style={{
        background: 'linear-gradient(140deg, #4f88ff22, #3ec1ff22)',
        border: '1px solid rgba(79,136,255,0.2)',
        borderRadius: 10,
        padding: 8,
        color: 'var(--wt-navy-700)',
      }}>
        {icon}
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 800 }}>{title}</h2>
    </div>
    <div style={{ lineHeight: 1.7, fontSize: 15 }}>
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
      { threshold: 0.3 }
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

      {/* HEADER */}

      <div style={{
        background: 'var(--wt-card)',
        borderRadius: 24,
        padding: '36px 40px',
        marginBottom: 28,
      }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>

          <div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontWeight: 800,
              fontSize: 13,
              textTransform: 'uppercase',
              marginBottom: 10
            }}>
              <Activity size={16} />
              <span>Step Counter N Walking Tracker</span>
            </div>

            <h1 style={{
              fontSize: 42,
              fontWeight: 800,
              margin: 0
            }}>
              Privacy Policy
            </h1>

            <p style={{
              marginTop: 12,
              fontSize: 13,
              display: 'flex',
              alignItems: 'center',
              gap: 6
            }}>
              <Clock size={14} />
              Last updated: March 8, 2026
            </p>

          </div>

          <div style={{
            borderRadius: 16,
            padding: '18px 22px',
            minWidth: 260
          }}>
            <p style={{
              fontSize: 12,
              fontWeight: 800,
              margin: '0 0 6px'
            }}>
              Privacy Questions?
            </p>

            <a href="mailto:subraatakumar@gmail.com"
              style={{
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: 4
              }}>
              subraatakumar@gmail.com
              <ChevronRight size={14} />
            </a>

          </div>

        </div>

        {/* highlight cards */}

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
          gap: 14,
          marginTop: 28
        }}>

          <HighlightCard
            icon={<HardDrive size={16} />}
            title="Offline-First"
            description="Your step counts, water intake logs, and weight entries are stored locally on your device."
          />

          <HighlightCard
            icon={<UserCheck size={16} />}
            title="No Login Required"
            description="The app works without requiring any account or personal identity information."
          />

          <HighlightCard
            icon={<Cloud size={16} />}
            title="Private Backups"
            description="Optional backups can be stored securely in your own iCloud or Google Drive account."
          />

        </div>

      </div>


      {/* CONTENT */}

      <PolicySection id="offline-architecture" title="Offline Architecture" icon={<HardDrive size={18} />}>

        <p>
          <strong>Step Counter N Walking Tracker</strong> is designed with a privacy-first architecture.
          The application works without requiring account creation, login, or personal identification.
        </p>

        <p>
          Your activity data such as step counts, walking statistics, water intake entries,
          and weight logs are stored locally on your device.
        </p>

        <p>
          The app uses a local database (Realm) to store this information securely.
          No central server collects or stores your health or activity data.
        </p>

      </PolicySection>


      <PolicySection id="collection" title="Data We Collect" icon={<Database size={18} />}>

        <p>
          Because the app operates without user accounts, we do not collect personal identity information.
          The following data may be processed locally on your device:
        </p>

        <ul>

          <li>
            <strong>Activity Data</strong> — Step counts, walking distance, and activity timestamps
            generated by your device sensors.
          </li>

          <li>
            <strong>Health Logs</strong> — Optional entries such as water intake logs
            and body weight records entered by the user.
          </li>

          <li>
            <strong>Anonymous Diagnostics</strong> — Non-identifiable crash reports and
            performance metrics used to improve app stability.
          </li>

        </ul>

      </PolicySection>


      <PolicySection id="purchases" title="Subscriptions & In-App Purchases" icon={<CreditCard size={18} />}>

        <p>
          The core features of Step Counter N Walking Tracker are available without requiring purchases.
        </p>

        <p>
          If premium features are introduced in future versions,
          payments will be processed securely through the official billing systems
          of Apple App Store or Google Play.
        </p>

        <p>
          The developer never collects or stores your credit card or payment details.
        </p>

      </PolicySection>


      <PolicySection id="backups" title="Cloud Backups" icon={<Cloud size={18} />}>

        <p>
          The app may provide optional backup functionality to protect your data when changing devices.
        </p>

        <ul>

          <li>
            <strong>iCloud (iOS)</strong> — Backups may be stored in your personal iCloud account.
          </li>

          <li>
            <strong>Google Drive (Android)</strong> — Backups may be stored in your private Google Drive space.
          </li>

        </ul>

        <p>
          These backups remain under your control and are not accessible to the developer.
        </p>

      </PolicySection>


      <PolicySection id="platforms" title="Platform Providers" icon={<Share2 size={18} />}>

        <p>
          The application may rely on platform services provided by Apple and Google.
        </p>

        <ul>

          <li>
            <a href="https://www.apple.com/legal/privacy/" target="_blank">
              Apple Privacy Policy
            </a>
          </li>

          <li>
            <a href="https://policies.google.com/privacy" target="_blank">
              Google Privacy Policy
            </a>
          </li>

        </ul>

      </PolicySection>


      <PolicySection id="usage" title="How Data is Used" icon={<Info size={18} />}>

        <p>Data processed by the app is used only for providing functionality such as:</p>

        <ul>

          <li>Displaying daily step counts and walking statistics</li>

          <li>Tracking water intake and body weight logs</li>

          <li>Generating activity charts and progress summaries</li>

          <li>Scheduling reminder notifications</li>

          <li>Executing user-initiated cloud backups</li>

        </ul>

      </PolicySection>


      <PolicySection id="permissions" title="App Permissions" icon={<Smartphone size={18} />}>

        <p>The app may request the following permissions:</p>

        <ul>

          <li>
            <strong>Physical Activity / Motion Sensors</strong> — Required to detect walking activity and count steps.
          </li>

          <li>
            <strong>Notifications</strong> — Used to send reminders related to activity goals or logging entries.
          </li>

          <li>
            <strong>Cloud Storage</strong> — Required if the user enables optional backup functionality.
          </li>

        </ul>

      </PolicySection>


      <PolicySection id="security" title="Security & Retention" icon={<Lock size={18} />}>

        <p>
          All data stored by the application benefits from the security mechanisms provided
          by your device's operating system.
        </p>

        <p>
          Your data remains on your device unless you explicitly enable cloud backups.
        </p>

        <p>
          Uninstalling the application permanently removes all locally stored activity data.
        </p>

      </PolicySection>


      <PolicySection id="rights" title="User Rights" icon={<UserCheck size={18} />}>

        <p>
          Because the app operates primarily offline,
          you maintain full control over your activity data.
        </p>

        <p>
          You may edit, export, or delete your step history,
          weight logs, and water intake records at any time within the app.
        </p>

        <p>
          This application is intended for general fitness and lifestyle tracking only.
          It is not a medical device and does not provide medical advice, diagnosis, or treatment.
        </p>

      </PolicySection>


      <PolicySection id="contact" title="Contact Us" icon={<Mail size={18} />}>

        <p>
          If you have questions about this Privacy Policy or the application's privacy practices,
          you may contact the developer at:
        </p>

        <p>
          <strong>Email:</strong> subraatakumar@gmail.com
        </p>

      </PolicySection>


      <div style={{
        marginTop: 52,
        paddingTop: 24,
        borderTop: '1px solid rgba(0,0,0,0.1)',
        textAlign: 'center'
      }}>

        <p style={{
          fontSize: 11,
          fontWeight: 800,
          textTransform: 'uppercase',
          marginBottom: 4
        }}>
          Step Counter N Walking Tracker
        </p>

        <p style={{ fontSize: 12 }}>
          © {new Date().getFullYear()} Subrata Kumar Das
        </p>

      </div>

    </div>
  );
}