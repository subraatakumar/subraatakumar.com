import Link from "next/link";
import Image from "next/image";

// ─── Data ────────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: "🌸",
    title: "Period Tracker",
    desc: "Log cycle start and end dates, record symptoms, moods, and notes. Build a complete cycle history over time.",
    tag: "Free",
    premium: false,
  },
  {
    icon: "💧",
    title: "Incontinence Log",
    desc: "Track leakage episodes, urgency levels, Kegel exercises, and fluid intake. Your personal bladder diary.",
    tag: "Free",
    premium: false,
  },
  {
    icon: "🚰",
    title: "Water Tracker",
    desc: "Monitor daily fluid intake across different drink types. Build better hydration habits with clear history.",
    tag: "Free",
    premium: false,
  },
  {
    icon: "🖼️",
    title: "Secure Gallery",
    desc: "Store sensitive images completely separate from your device gallery. Private, organized, and encrypted.",
    tag: "Free",
    premium: false,
  },
  {
    icon: "👤",
    title: "Secure Contacts",
    desc: "A private contact vault with profession, meeting context, social links, and one-tap calling.",
    tag: "Free",
    premium: false,
  },
  {
    icon: "☁️",
    title: "Cloud Backup",
    desc: "Securely back up all your data to Google Drive or iCloud. Restore instantly when switching devices.",
    tag: "✦ Premium",
    premium: true,
  },
];

const PRIVACY_CARDS = [
  { icon: "🔒", title: "No Login Required", desc: "No email, no account, no credentials collected." },
  { icon: "📱", title: "On-Device Storage Only", desc: "All health data stays in an encrypted local database on your phone." },
  { icon: "🔐", title: "PIN & Biometric Lock", desc: "Protect your app with PIN, fingerprint, or Face ID." },
  { icon: "☁️", title: "Optional Private Backups", desc: "Backups go only to your personal iCloud or Google Drive." },
];

const SCHEMES = [
  {
    name: "Terracotta",
    bg: "linear-gradient(135deg,#f5e8e0,#e8c4b0)",
    dots: ["#c47a5a", "#7b2d42", "#fdf6f0"],
    price: "Free",
    tag: "Default",
    tagStyle: { color: "var(--sh-terra-d)", background: "rgba(196,122,90,0.12)" },
    priceStyle: { color: "var(--sh-terra-d)" },
  },
  {
    name: "Teal Gold",
    bg: "linear-gradient(135deg,#e0f4f2,#c8ece8)",
    dots: ["#2a9d8f", "#c9963a", "#f0faf9"],
    price: "$4.99",
    tag: "Preview only",
    tagStyle: {},
    priceStyle: {},
  },
  {
    name: "Plum Cream",
    bg: "linear-gradient(135deg,#f5f0f8,#e8daf2)",
    dots: ["#6d3a7e", "#3d1a4a", "#fdf8ff"],
    price: "$4.99",
    tag: "30-day trial",
    tagStyle: {},
    priceStyle: {},
  },
  {
    name: "Champagne Midnight",
    bg: "linear-gradient(135deg,#1c1a14,#2e2a1e)",
    dots: ["#d4b896", "#f0e0c8", "#2a2418"],
    price: "$4.99",
    tag: "30-day trial",
    tagStyle: {},
    priceStyle: {},
  },
  {
    name: "Navy Silver",
    bg: "linear-gradient(135deg,#0d1b2e,#1a2f4a)",
    dots: ["#1a3a5c", "#c0cdd8", "#e8eef4"],
    price: "$4.99",
    tag: "30-day trial",
    tagStyle: {},
    priceStyle: {},
  },
];

const WHO = [
  { icon: "🌸", title: "Cycle Trackers", desc: "Women who want simple, private menstrual cycle logging without giving data to third parties." },
  { icon: "💧", title: "Incontinence Management", desc: "Users maintaining a bladder diary to observe patterns and track Kegel exercise progress." },
  { icon: "🚰", title: "Hydration Conscious", desc: "People who want to understand and improve their daily hydration habits with gentle reminders." },
  { icon: "🖼️", title: "Private Image Keepers", desc: "Anyone who needs a secure, separate space for sensitive health-related photos." },
  { icon: "🔒", title: "Privacy Advocates", desc: "Users who refuse to compromise their health data to cloud services or advertising companies." },
  { icon: "👩‍⚕️", title: "Health-Aware Women", desc: "Anyone who values structured health tracking, organized records, and clean data insights." },
];

const SCREENSHOTS = [
  { src: "/shehealth/screenshots/1.png", label: "Home Dashboard" },
  { src: "/shehealth/screenshots/5.png", label: "Period Log Entry" },
  { src: "/shehealth/screenshots/6.png", label: "Incontinence Tracker" },
  { src: "/shehealth/screenshots/7.png", label: "Secure Gallery" },
  { src: "/shehealth/screenshots/3.png", label: "Cloud Backup" },
  { src: "/shehealth/screenshots/4.png", label: "Appearance" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SheHealthPage() {
  return (
    <>
      <style>{`
        /* ── Scroll behaviour ── */
        html { scroll-behavior: smooth; }

        /* ── Re-use layout CSS vars ── */
        .sh-page { overflow-x: hidden; }

        /* ── HERO ── */
        .sh-hero {
          min-height: calc(100vh - 68px);
          display: flex; align-items: center;
          padding: 72px 0 60px;
          position: relative; overflow: hidden;
        }
        .sh-hero-bg {
          position: absolute; inset: 0; z-index: 0;
          background:
            radial-gradient(ellipse at 70% 30%, rgba(196,122,90,0.18) 0%, transparent 55%),
            radial-gradient(ellipse at 10% 80%, rgba(123,45,66,0.10) 0%, transparent 45%),
            radial-gradient(ellipse at 90% 85%, rgba(232,196,176,0.30) 0%, transparent 40%),
            linear-gradient(160deg, #fdf6f0 0%, #f8ede4 50%, #f2e0d4 100%);
        }
        .sh-hero-bg::before {
          content: '';
          position: absolute; width: 600px; height: 600px;
          right: -100px; top: -100px; border-radius: 50%;
          background: radial-gradient(circle, rgba(196,122,90,0.12) 0%, transparent 70%);
        }
        .sh-hero-bg::after {
          content: '';
          position: absolute; width: 400px; height: 400px;
          left: 30%; bottom: -80px; border-radius: 50%;
          border: 1px solid rgba(196,122,90,0.2);
        }
        .sh-hero-inner {
          position: relative; z-index: 1;
          max-width: 1200px; margin: 0 auto; padding: 0 24px;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 60px; align-items: center; width: 100%;
        }
        .sh-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(196,122,90,0.12); border: 1px solid rgba(196,122,90,0.3);
          border-radius: 100px; padding: 6px 14px;
          font-size: 12px; font-weight: 700; color: var(--sh-terra-d);
          letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 22px;
        }
        .sh-h1 {
          font-family: var(--sh-font-display, serif);
          font-size: clamp(46px, 5vw, 70px);
          font-weight: 700; line-height: 1.08;
          color: var(--sh-maroon-d); margin-bottom: 22px;
        }
        .sh-h1 em { font-style: italic; color: var(--sh-terra); }
        .sh-hero-sub {
          font-size: 17px; color: var(--sh-muted); line-height: 1.65;
          max-width: 480px; margin-bottom: 36px;
        }
        .sh-hero-actions { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; }
        .sh-btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--sh-maroon); color: #fff;
          padding: 14px 28px; border-radius: 14px; font-size: 15px; font-weight: 700;
          text-decoration: none; transition: all 0.2s;
          box-shadow: 0 8px 24px rgba(123,45,66,0.28);
        }
        .sh-btn-primary:hover { background: var(--sh-maroon-d); transform: translateY(-1px); }
        .sh-btn-secondary {
          display: inline-flex; align-items: center; gap: 8px;
          border: 1.5px solid rgba(196,122,90,0.5); color: var(--sh-terra-d);
          padding: 13px 24px; border-radius: 14px; font-size: 15px; font-weight: 600;
          text-decoration: none; transition: all 0.2s;
        }
        .sh-btn-secondary:hover { background: rgba(196,122,90,0.08); border-color: var(--sh-terra); }
        .sh-trust { margin-top: 36px; display: flex; align-items: center; gap: 20px; flex-wrap: wrap; }
        .sh-trust-item { display: flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 600; color: var(--sh-muted); }
        .sh-trust-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--sh-rose); flex-shrink: 0; }

        /* phone mockup */
        .sh-hero-visual { position: relative; display: flex; justify-content: center; align-items: center; }
        .sh-phone-wrap { position: relative; animation: sh-float 5s ease-in-out infinite; }
        @keyframes sh-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-14px); } }
        .sh-phone-img { width: 270px; border-radius: 38px; box-shadow: 0 40px 80px rgba(90,31,47,0.22), 0 0 0 1px rgba(196,122,90,0.2); display: block; }
        .sh-badge {
          position: absolute; background: #fff; border-radius: 16px;
          padding: 11px 15px; box-shadow: 0 8px 30px rgba(90,31,47,0.14);
          display: flex; align-items: center; gap: 8px;
        }
        .sh-badge.left  { left: -28px; top: 25%; }
        .sh-badge.right { right: -28px; bottom: 30%; }
        .sh-badge-icon { font-size: 20px; }
        .sh-badge-label { font-size: 11px; font-weight: 700; color: var(--sh-charcoal); }
        .sh-badge-sub   { font-size: 11px; color: var(--sh-muted); }

        /* ── SECTION BASE ── */
        .sh-section { padding: 90px 24px; }
        .sh-section-inner { max-width: 1200px; margin: 0 auto; }
        .sh-label {
          font-size: 11px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--sh-terra);
          margin-bottom: 12px; display: block;
        }
        .sh-h2 {
          font-family: var(--sh-font-display, serif);
          font-size: clamp(32px, 3.5vw, 50px);
          font-weight: 700; line-height: 1.12;
          color: var(--sh-maroon-d); margin-bottom: 16px;
        }
        .sh-h2 em { font-style: italic; color: var(--sh-terra); }
        .sh-sub { font-size: 16px; color: var(--sh-muted); line-height: 1.6; max-width: 520px; margin-bottom: 48px; }

        /* ── FEATURES ── */
        .sh-features-bg { background: #fff; }
        .sh-features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
        .sh-feature-card {
          background: var(--sh-cream); border: 1px solid rgba(196,122,90,0.15);
          border-radius: 20px; padding: 28px;
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .sh-feature-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(90,31,47,0.10); }
        .sh-feature-icon {
          width: 48px; height: 48px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          font-size: 22px; margin-bottom: 16px;
          background: linear-gradient(135deg, rgba(196,122,90,0.15), rgba(123,45,66,0.10));
        }
        .sh-feature-card h3 { font-size: 17px; font-weight: 700; color: var(--sh-maroon); margin-bottom: 8px; }
        .sh-feature-card p  { font-size: 14px; color: var(--sh-muted); line-height: 1.6; }
        .sh-feature-tag {
          display: inline-block; margin-top: 14px;
          font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
          color: var(--sh-terra-d); background: rgba(196,122,90,0.12);
          padding: 4px 10px; border-radius: 6px;
        }
        .sh-feature-tag.premium { color: var(--sh-gold); background: rgba(201,150,58,0.12); }

        /* ── SCREENSHOTS ── */
        .sh-showcase-bg {
          background: linear-gradient(160deg, var(--sh-maroon-d) 0%, #3a1220 100%);
          position: relative; overflow: hidden;
        }
        .sh-showcase-bg::before {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 80% 20%, rgba(196,122,90,0.2), transparent 60%),
                      radial-gradient(ellipse at 10% 80%, rgba(232,196,176,0.08), transparent 50%);
          pointer-events: none;
        }
        .sh-showcase-bg .sh-label { color: var(--sh-rose); }
        .sh-showcase-bg .sh-h2    { color: #fff; }
        .sh-showcase-bg .sh-h2 em { color: var(--sh-rose); }
        .sh-showcase-bg .sh-sub   { color: rgba(255,255,255,0.58); }
        .sh-screenshots-row {
          display: flex; gap: 20px; align-items: flex-end;
          overflow-x: auto; padding-bottom: 12px; scrollbar-width: none;
        }
        .sh-screenshots-row::-webkit-scrollbar { display: none; }
        .sh-screenshot-item { flex-shrink: 0; }
        .sh-screenshot-item:nth-child(odd) { transform: translateY(-20px); }
        .sh-screenshot-item img {
          width: 180px; border-radius: 24px; display: block;
          box-shadow: 0 20px 50px rgba(0,0,0,0.35);
          border: 1px solid rgba(255,255,255,0.08);
        }
        .sh-screenshot-item:nth-child(2) img { width: 200px; }
        .sh-screenshot-item:nth-child(3) img { width: 190px; }
        .sh-screenshot-caption {
          margin-top: 12px; font-size: 12px; font-weight: 600;
          color: rgba(255,255,255,0.45); text-align: center;
        }

        /* ── PRIVACY ── */
        .sh-privacy-bg { background: var(--sh-blush); }
        .sh-privacy-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .sh-privacy-cards { display: flex; flex-direction: column; gap: 14px; }
        .sh-privacy-card {
          background: #fff; border-radius: 16px; padding: 18px 20px;
          border: 1px solid rgba(196,122,90,0.15);
          display: flex; align-items: center; gap: 16px;
          box-shadow: 0 4px 16px rgba(90,31,47,0.06);
        }
        .sh-privacy-card-icon {
          width: 42px; height: 42px; border-radius: 12px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center; font-size: 20px;
          background: linear-gradient(135deg, rgba(196,122,90,0.18), rgba(123,45,66,0.12));
        }
        .sh-privacy-card h4 { font-size: 15px; font-weight: 700; color: var(--sh-maroon); margin-bottom: 3px; }
        .sh-privacy-card p  { font-size: 13px; color: var(--sh-muted); }

        /* ── PRICING ── */
        .sh-pricing-bg { background: #fff; }
        .sh-pricing-top { display: grid; grid-template-columns: 1fr 1fr; gap: 26px; margin-bottom: 32px; }
        .sh-price-card {
          border-radius: 20px; padding: 32px;
          border: 1.5px solid rgba(196,122,90,0.2); background: var(--sh-cream);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .sh-price-card:hover { transform: translateY(-3px); box-shadow: 0 12px 36px rgba(90,31,47,0.10); }
        .sh-price-card.featured {
          background: var(--sh-maroon); border-color: var(--sh-maroon);
          position: relative; overflow: hidden;
        }
        .sh-price-card.featured::before {
          content: '★ SUBSCRIPTION';
          position: absolute; top: 14px; right: -34px;
          background: var(--sh-gold); color: #fff;
          font-size: 9px; font-weight: 800; letter-spacing: 0.06em;
          padding: 4px 48px; transform: rotate(35deg);
        }
        .sh-price-label { font-size: 13px; font-weight: 700; color: var(--sh-terra); margin-bottom: 8px; }
        .sh-price-card.featured .sh-price-label { color: var(--sh-rose); }
        .sh-price-amount {
          font-family: var(--sh-font-display, serif);
          font-size: 46px; font-weight: 700; color: var(--sh-maroon-d); line-height: 1; margin-bottom: 4px;
        }
        .sh-price-card.featured .sh-price-amount { color: #fff; }
        .sh-price-period { font-size: 14px; color: var(--sh-muted); margin-bottom: 22px; }
        .sh-price-card.featured .sh-price-period { color: rgba(255,255,255,0.6); }
        .sh-price-features { list-style: none; display: flex; flex-direction: column; gap: 10px; margin-bottom: 26px; }
        .sh-price-features li { display: flex; align-items: flex-start; gap: 10px; font-size: 14px; color: var(--sh-charcoal); line-height: 1.5; }
        .sh-price-card.featured .sh-price-features li { color: rgba(255,255,255,0.85); }
        .sh-price-check { color: var(--sh-terra); font-weight: 800; flex-shrink: 0; }
        .sh-price-card.featured .sh-price-check { color: var(--sh-rose); }
        .sh-btn-price {
          display: block; text-align: center; text-decoration: none;
          padding: 13px; border-radius: 12px; font-size: 15px; font-weight: 700;
          background: var(--sh-maroon); color: #fff; transition: all 0.2s;
        }
        .sh-btn-price:hover { background: var(--sh-maroon-d); }
        .sh-price-card.featured .sh-btn-price { background: #fff; color: var(--sh-maroon); }
        .sh-price-card.featured .sh-btn-price:hover { background: var(--sh-blush); }

        /* scheme banner */
        .sh-scheme-banner {
          border-radius: 20px; border: 1.5px solid rgba(201,150,58,0.28);
          background: linear-gradient(135deg, rgba(201,150,58,0.06), rgba(196,122,90,0.06));
          padding: 30px 34px;
        }
        .sh-scheme-banner-top {
          display: flex; align-items: flex-start; justify-content: space-between;
          gap: 20px; flex-wrap: wrap; margin-bottom: 24px;
        }
        .sh-scheme-banner h3 {
          font-family: var(--sh-font-display, serif);
          font-size: 26px; font-weight: 700; color: var(--sh-maroon-d); margin-bottom: 6px;
        }
        .sh-scheme-banner p { font-size: 14px; color: var(--sh-muted); line-height: 1.6; max-width: 480px; }
        .sh-scheme-iap-badge {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(201,150,58,0.15); border: 1px solid rgba(201,150,58,0.3);
          border-radius: 100px; padding: 5px 12px;
          font-size: 12px; font-weight: 700; color: #9a6e10; white-space: nowrap;
        }
        .sh-scheme-trial-pill {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(123,45,66,0.08); border: 1px solid rgba(123,45,66,0.15);
          border-radius: 100px; padding: 5px 12px; margin-top: 10px;
          font-size: 12px; font-weight: 700; color: var(--sh-maroon);
        }
        .sh-schemes-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 13px; }
        .sh-scheme-card {
          border-radius: 16px; overflow: hidden;
          border: 1.5px solid rgba(196,122,90,0.18); background: #fff;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .sh-scheme-card:hover { transform: translateY(-3px); box-shadow: 0 10px 28px rgba(90,31,47,0.12); }
        .sh-swatch { height: 68px; display: flex; align-items: center; justify-content: center; gap: 5px; }
        .sh-swatch-dot { width: 21px; height: 21px; border-radius: 50%; border: 2px solid rgba(255,255,255,0.55); }
        .sh-scheme-info { padding: 11px 13px; }
        .sh-scheme-name { font-size: 12px; font-weight: 700; color: var(--sh-maroon); margin-bottom: 5px; }
        .sh-scheme-price-row { display: flex; align-items: center; justify-content: space-between; gap: 4px; }
        .sh-scheme-price { font-size: 13px; font-weight: 700; color: var(--sh-terra-d); }
        .sh-scheme-tag {
          font-size: 9px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase;
          color: var(--sh-gold); background: rgba(201,150,58,0.12);
          padding: 2px 6px; border-radius: 5px; white-space: nowrap;
        }
        .sh-pricing-note { font-size: 12px; color: var(--sh-muted); margin-top: 18px; line-height: 1.6; max-width: 660px; }

        /* ── WHO ── */
        .sh-who-bg { background: var(--sh-blush); }
        .sh-who-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .sh-who-card {
          background: #fff; border-radius: 18px; padding: 24px 20px;
          border: 1px solid rgba(196,122,90,0.15); text-align: center;
        }
        .sh-who-emoji { font-size: 34px; margin-bottom: 12px; display: block; }
        .sh-who-card h3 { font-size: 16px; font-weight: 700; color: var(--sh-maroon); margin-bottom: 8px; }
        .sh-who-card p  { font-size: 13px; color: var(--sh-muted); line-height: 1.55; }

        /* ── CTA BANNER ── */
        .sh-cta-banner {
          background: linear-gradient(140deg, var(--sh-maroon) 0%, var(--sh-terra-d) 100%);
          padding: 80px 24px; text-align: center; position: relative; overflow: hidden;
        }
        .sh-cta-banner::before {
          content: ''; position: absolute;
          width: 500px; height: 500px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.08);
          top: -200px; left: 50%; transform: translateX(-50%);
        }
        .sh-cta-banner .sh-h2 { color: #fff; margin-bottom: 14px; }
        .sh-cta-banner .sh-h2 em { color: var(--sh-rose); }
        .sh-cta-banner p { color: rgba(255,255,255,0.7); font-size: 17px; margin-bottom: 36px; max-width: 460px; margin-left: auto; margin-right: auto; }
        .sh-cta-actions { display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; position: relative; z-index: 1; }
        .sh-btn-white {
          display: inline-flex; align-items: center; gap: 8px;
          background: #fff; color: var(--sh-maroon);
          padding: 14px 28px; border-radius: 14px; font-size: 15px; font-weight: 700;
          text-decoration: none; transition: all 0.2s;
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
        }
        .sh-btn-white:hover { background: var(--sh-cream); transform: translateY(-1px); }

        /* ── RESPONSIVE ── */
        @media (max-width: 960px) {
          .sh-hero-inner     { grid-template-columns: 1fr; }
          .sh-hero-visual    { display: none; }
          .sh-features-grid  { grid-template-columns: 1fr 1fr; }
          .sh-privacy-grid   { grid-template-columns: 1fr; }
          .sh-pricing-top    { grid-template-columns: 1fr; }
          .sh-who-grid       { grid-template-columns: 1fr 1fr; }
          .sh-schemes-grid   { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 600px) {
          .sh-features-grid  { grid-template-columns: 1fr; }
          .sh-who-grid       { grid-template-columns: 1fr; }
          .sh-schemes-grid   { grid-template-columns: repeat(2, 1fr); }
          .sh-section        { padding: 60px 16px; }
        }
      `}</style>

      <div className="sh-page">

        {/* ── HERO ── */}
        <section className="sh-hero">
          <div className="sh-hero-bg" />
          <div className="sh-hero-inner">
            <div>
              <div className="sh-eyebrow"><span>🌸</span> Women's Health Companion</div>
              <h1 className="sh-h1 sh-font-display">
                Track Your<br /><em>Health,</em><br />Own Your Data.
              </h1>
              <p className="sh-hero-sub">
                She Health is a private wellness tracking app for women. Period tracking, incontinence logs,
                hydration, secure gallery — all in one beautifully simple app. No login, no cloud, no compromise.
              </p>
              <div className="sh-hero-actions">
                <Link href="#download" className="sh-btn-primary">⬇ Download Free</Link>
                <Link href="#features" className="sh-btn-secondary">Explore Features →</Link>
              </div>
              <div className="sh-trust">
                <div className="sh-trust-item"><div className="sh-trust-dot" />No Login Required</div>
                <div className="sh-trust-item"><div className="sh-trust-dot" />Data Stays on Device</div>
                <div className="sh-trust-item"><div className="sh-trust-dot" />Biometric Protected</div>
              </div>
            </div>
            <div className="sh-hero-visual">
              <div className="sh-phone-wrap">
                <Image
                  src="/shehealth/screenshots/1.png"
                  alt="She Health App"
                  width={270} height={584}
                  className="sh-phone-img"
                  priority
                />
                <div className="sh-badge left">
                  <span className="sh-badge-icon">🔒</span>
                  <div>
                    <div className="sh-badge-label">Encrypted</div>
                    <div className="sh-badge-sub">On-device only</div>
                  </div>
                </div>
                <div className="sh-badge right">
                  <span className="sh-badge-icon">🌸</span>
                  <div>
                    <div className="sh-badge-label">Period Tracker</div>
                    <div className="sh-badge-sub">Smart insights</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="sh-section sh-features-bg" id="features">
          <div className="sh-section-inner">
            <span className="sh-label">Everything You Need</span>
            <h2 className="sh-h2 sh-font-display">One App for All Your<br /><em>Health Tracking</em> Needs</h2>
            <p className="sh-sub">From cycle tracking to hydration, She Health brings all your private health tools together in a secure, distraction-free space.</p>
            <div className="sh-features-grid">
              {FEATURES.map((f) => (
                <div key={f.title} className="sh-feature-card">
                  <div className="sh-feature-icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                  <span className={`sh-feature-tag${f.premium ? " premium" : ""}`}>{f.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SCREENSHOTS ── */}
        <section className="sh-section sh-showcase-bg" id="screenshots">
          <div className="sh-section-inner">
            <span className="sh-label">App Walkthrough</span>
            <h2 className="sh-h2 sh-font-display">Beautifully <em>Simple,</em><br />Deeply Private</h2>
            <p className="sh-sub" style={{ marginBottom: 40 }}>Clean interfaces designed for quick daily logging. Every screen built around simplicity and privacy.</p>
            <div className="sh-screenshots-row">
              {SCREENSHOTS.map((s, i) => (
                <div key={i} className="sh-screenshot-item">
                  <Image src={s.src} alt={s.label} width={200} height={433} style={{ borderRadius: 24, display: "block" }} />
                  <div className="sh-screenshot-caption">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRIVACY ── */}
        <section className="sh-section sh-privacy-bg" id="privacy">
          <div className="sh-section-inner">
            <div className="sh-privacy-grid">
              <div>
                <span className="sh-label">Privacy First</span>
                <h2 className="sh-h2 sh-font-display">Your Data Belongs<br />to <em>You. Only.</em></h2>
                <p className="sh-sub" style={{ marginBottom: 28 }}>
                  She Health was built from the ground up with privacy as the foundation. No accounts, no servers,
                  no tracking — just your personal health records, safe on your device.
                </p>
                <Link href="/shehealth/privacy-policy" className="sh-btn-secondary" style={{ display: "inline-flex" }}>
                  Read Privacy Policy →
                </Link>
              </div>
              <div className="sh-privacy-cards">
                {PRIVACY_CARDS.map((c) => (
                  <div key={c.title} className="sh-privacy-card">
                    <div className="sh-privacy-card-icon">{c.icon}</div>
                    <div>
                      <h4>{c.title}</h4>
                      <p>{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section className="sh-section sh-pricing-bg" id="pricing">
          <div className="sh-section-inner">
            <span className="sh-label">Premium</span>
            <h2 className="sh-h2 sh-font-display">Two Ways to <em>Go Premium</em></h2>
            <p className="sh-sub">All core tracking features are completely free. Premium adds cloud backup via subscription, and beautiful color schemes as one-time purchases.</p>

            {/* Free + Backup */}
            <div className="sh-pricing-top">
              <div className="sh-price-card">
                <div className="sh-price-label">Free Forever</div>
                <div className="sh-price-amount">$0</div>
                <div className="sh-price-period">All core features included</div>
                <ul className="sh-price-features">
                  {["Period & cycle tracking", "Incontinence & Kegel log", "Water intake tracker", "Secure gallery & contacts", "PIN & biometric lock", "Light, Dark & System theme"].map((f) => (
                    <li key={f}><span className="sh-price-check">✓</span> {f}</li>
                  ))}
                </ul>
                <Link href="#download" className="sh-btn-price" style={{ background: "var(--sh-cream)", color: "var(--sh-maroon)", border: "1.5px solid rgba(196,122,90,0.3)" }}>
                  Download Free
                </Link>
              </div>
              <div className="sh-price-card featured">
                <div className="sh-price-label">Drive Backup — Yearly Subscription</div>
                <div className="sh-price-amount">$4.99</div>
                <div className="sh-price-period">per year · auto-renews · cancel anytime</div>
                <ul className="sh-price-features">
                  <li><span className="sh-price-check">✓</span> Everything in Free</li>
                  <li><span className="sh-price-check">✓</span><span><strong>Google Drive backup</strong> on Android — saved to your private App Data folder</span></li>
                  <li><span className="sh-price-check">✓</span><span><strong>iCloud Drive backup</strong> on iOS — stored in your private iCloud container</span></li>
                  <li><span className="sh-price-check">✓</span> Backup includes health logs & gallery photos</li>
                  <li><span className="sh-price-check">✓</span> Instant restore when switching devices</li>
                </ul>
                <Link href="#download" className="sh-btn-price">Unlock Backup</Link>
              </div>
            </div>

            {/* Color Schemes */}
            <div className="sh-scheme-banner">
              <div className="sh-scheme-banner-top">
                <div>
                  <h3>🎨 Color Schemes</h3>
                  <p>
                    Personalize She Health with a color scheme that matches your style. Each scheme is a{" "}
                    <strong>one-time purchase at $4.99</strong>. Terracotta is free and included by default.
                    Teal Gold can be previewed but has no trial. All other schemes include a{" "}
                    <strong>free 30-day trial</strong> before you commit.
                  </p>
                  <div className="sh-scheme-trial-pill">🕐 3 out of 4 paid schemes include a free 30-day trial</div>
                </div>
                <div className="sh-scheme-iap-badge">✦ In-App Purchase · One-Time</div>
              </div>
              <div className="sh-schemes-grid">
                {SCHEMES.map((s) => (
                  <div key={s.name} className="sh-scheme-card">
                    <div className="sh-swatch" style={{ background: s.bg }}>
                      {s.dots.map((d, i) => (
                        <div key={i} className="sh-swatch-dot" style={{ background: d }} />
                      ))}
                    </div>
                    <div className="sh-scheme-info">
                      <div className="sh-scheme-name">{s.name}</div>
                      <div className="sh-scheme-price-row">
                        <span className="sh-scheme-price" style={s.priceStyle}>{s.price}</span>
                        <span className="sh-scheme-tag" style={s.tagStyle}>{s.tag}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="sh-pricing-note">
              Backup subscription: Payment charged at confirmation. Auto-renews annually unless cancelled 24h before period end.
              Color schemes: one-time purchase of $4.99 each, no recurring charges. Terracotta is free and default.
              Teal Gold: preview only, no trial. Plum Cream, Champagne Midnight, Navy Silver: 30-day free trial included before purchase.
              Prices in USD; local pricing may vary.
            </p>
          </div>
        </section>

        {/* ── WHO IS IT FOR ── */}
        <section className="sh-section sh-who-bg" id="who">
          <div className="sh-section-inner">
            <span className="sh-label">Who It&apos;s For</span>
            <h2 className="sh-h2 sh-font-display">Built for <em>Every Woman</em></h2>
            <p className="sh-sub">Whether you&apos;re tracking your cycle, managing a health condition, or simply staying organized — She Health is for you.</p>
            <div className="sh-who-grid">
              {WHO.map((w) => (
                <div key={w.title} className="sh-who-card">
                  <span className="sh-who-emoji">{w.icon}</span>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="sh-cta-banner" id="download">
          <h2 className="sh-h2 sh-font-display">Start Tracking.<br /><em>Stay Private.</em></h2>
          <p>Download She Health for free today. No sign-up, no cloud, no compromise on your privacy.</p>
          <div className="sh-cta-actions">
            <a href="https://apps.apple.com/app/id6743358136" className="sh-btn-white">🍎 App Store</a>
            <a href="https://play.google.com/store/apps/details?id=com.subrata.shehealth" className="sh-btn-white">▶ Google Play</a>
          </div>
        </section>

      </div>
    </>
  );
}