import Link from "next/link";
import Image from "next/image";
import { Manrope, Space_Grotesk } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function MoodTrackerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`wt-shell ${manrope.className}`}>
      <style>{`
        body:has(.wt-shell) .sk-header,
        body:has(.wt-shell) .sk-footer {
          display: none !important;
        }

        .wt-shell {
          --wt-navy-900: #372356;
          --wt-navy-800: #4e2f7a;
          --wt-navy-700: #6d3fb0;
          --wt-sky-400: #c18bff;
          --wt-sky-300: #e2c8ff;
          --wt-cyan-200: #f4e7ff;
          --wt-card: rgba(255, 255, 255, 0.88);
          --wt-ink: #2e1f48;
          --wt-muted: #624b86;
          min-height: 100vh;
          color: var(--wt-ink);
          background:
            radial-gradient(circle at 8% 10%, rgba(212, 166, 255, 0.25), transparent 42%),
            radial-gradient(circle at 92% 22%, rgba(255, 202, 235, 0.24), transparent 35%),
            linear-gradient(140deg, #f8f0ff 0%, #f4ebff 34%, #f9eefe 100%);
        }
        .wt-shell * {
          box-sizing: border-box;
        }
        .wt-nav {
          position: sticky;
          top: 0;
          z-index: 60;
          border-bottom: 1px solid rgba(16, 36, 79, 0.1);
          background: rgba(239, 249, 255, 0.85);
          backdrop-filter: blur(12px);
        }
        .wt-nav-inner {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 24px;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .wt-logo {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--wt-navy-900);
          text-decoration: none;
        }
        .wt-logo-mark {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: linear-gradient(140deg, #8c58d9, #de6cb6);
          box-shadow: 0 8px 16px rgba(109, 63, 176, 0.22);
        }
        .wt-logo-text {
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .wt-links {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .wt-links a {
          text-decoration: none;
          font-size: 13px;
          font-weight: 800;
          color: var(--wt-navy-900);
          padding: 10px 12px;
          border-radius: 10px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          white-space: nowrap;
        }
        .wt-links a:hover {
          background: rgba(140, 88, 217, 0.14);
          color: var(--wt-navy-700);
        }
        .wt-main {
          max-width: 1120px;
          margin: 0 auto;
          padding: 26px 24px 70px;
        }
        .wt-footer {
          border-top: 1px solid rgba(16, 36, 79, 0.12);
          background: rgba(251, 243, 255, 0.82);
        }
        .wt-footer-inner {
          max-width: 1120px;
          margin: 0 auto;
          padding: 16px 24px 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }
        .wt-footer-copy {
          color: var(--wt-muted);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.03em;
        }
        .wt-footer-links {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .wt-footer-links a {
          text-decoration: none;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--wt-navy-900);
          border: 1px solid rgba(16, 36, 79, 0.15);
          border-radius: 9px;
          padding: 7px 10px;
          background: #fff;
        }
        .wt-footer-links a:hover {
          border-color: rgba(31, 79, 157, 0.45);
          color: var(--wt-navy-700);
        }
        .wt-font-display {
          font-family: ${spaceGrotesk.style.fontFamily};
        }
        .wt-mobile-nav {
          display: none;
        }
        @media (max-width: 760px) {
          .wt-nav-inner {
            padding: 0 14px;
            height: 56px;
          }
          .wt-links {
            display: none;
          }
          .wt-mobile-nav {
            display: flex;
            align-items: center;
            gap: 4px;
            overflow-x: auto;
            padding: 0 14px 10px;
            scrollbar-width: none;
            -ms-overflow-style: none;
            border-bottom: 1px solid rgba(16, 36, 79, 0.1);
          }
          .wt-mobile-nav::-webkit-scrollbar {
            display: none;
          }
          .wt-mobile-nav a {
            text-decoration: none;
            font-size: 11px;
            font-weight: 800;
            color: var(--wt-navy-900);
            padding: 7px 11px;
            border-radius: 20px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            white-space: nowrap;
            border: 1px solid rgba(16, 36, 79, 0.18);
            background: rgba(255,255,255,0.7);
          }
          .wt-mobile-nav a:hover {
            background: rgba(140, 88, 217, 0.14);
            border-color: rgba(109, 63, 176, 0.35);
          }
          .wt-main {
            padding: 22px 14px 54px;
          }
          .wt-footer-inner {
            padding: 14px 14px 18px;
          }
        }
      `}</style>

      <header className="wt-nav">
        <div className="wt-nav-inner">
          <Link href="/moodtracker" className="wt-logo">
            <span className="wt-logo-mark">
              <Image src="/moodtracker/logo.png" alt="Mood Tracker logo" width={34} height={34} priority />
            </span>
            <span className="wt-logo-text wt-font-display">MoodTracker</span>
          </Link>
          <nav className="wt-links" aria-label="Mood Tracker pages">
            <Link href="/moodtracker">Overview</Link>
            <Link href="/moodtracker/guide">How To Use</Link>
            <Link href="/moodtracker/benefits">Benefits</Link>
            <Link href="/products">All Products</Link>
          </nav>
        </div>
        <nav className="wt-mobile-nav" aria-label="Mood Tracker pages mobile">
          <Link href="/moodtracker">Overview</Link>
          <Link href="/moodtracker/guide">How To Use</Link>
          <Link href="/moodtracker/benefits">Benefits</Link>
          <Link href="/products">All Products</Link>
        </nav>
      </header>

      <main className="wt-main">{children}</main>
      <footer className="wt-footer">
        <div className="wt-footer-inner">
          <p className="wt-footer-copy">© {new Date().getFullYear()} MoodTracker</p>
          <div className="wt-footer-links">
            <Link href="/moodtracker">Overview</Link>
            <Link href="/moodtracker/guide">How To Use</Link>
            <Link href="/moodtracker/benefits">Benefits</Link>
            <Link href="/contact">Support</Link>
            <Link href="/moodtracker/privacy-policy">Privacy Policy</Link>
            <Link href="/moodtracker/terms">Terms of Use</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}