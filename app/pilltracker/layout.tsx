import Link from "next/link";
import { Manrope, Space_Grotesk } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function PillTrackerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`pt-shell ${manrope.className}`}>
      <style>{`
        body:has(.pt-shell) .sk-header,
        body:has(.pt-shell) .sk-footer {
          display: none !important;
        }

        .pt-shell {
          --pt-blue-900: #0f4d85;
          --pt-blue-800: #1d6da5;
          --pt-blue-700: #2f8ec0;
          --pt-cyan-400: #56c2f2;
          --pt-cyan-300: #8fddff;
          --pt-mint-300: #86e9bd;
          --pt-orange-500: #ff9d4a;
          --pt-orange-400: #ffb76e;
          --pt-card: rgba(255, 255, 255, 0.88);
          --pt-ink: #123b63;
          --pt-muted: #4b6e92;
          min-height: 100vh;
          color: var(--pt-ink);
          background:
            radial-gradient(circle at 8% 10%, rgba(143, 221, 255, 0.27), transparent 42%),
            radial-gradient(circle at 92% 22%, rgba(134, 233, 189, 0.24), transparent 35%),
            linear-gradient(140deg, #e9f8ff 0%, #ddf4ff 30%, #c6efff 100%);
        }
        .pt-shell * {
          box-sizing: border-box;
        }
        .pt-nav {
          position: sticky;
          top: 0;
          z-index: 60;
          border-bottom: 1px solid rgba(18, 59, 99, 0.1);
          background: rgba(234, 249, 255, 0.86);
          backdrop-filter: blur(12px);
        }
        .pt-nav-inner {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 24px;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .pt-logo {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--pt-blue-900);
          text-decoration: none;
        }
        .pt-logo-mark {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          color: #fff;
          background: linear-gradient(140deg, var(--pt-cyan-400), var(--pt-orange-500));
          box-shadow: 0 8px 16px rgba(16, 84, 129, 0.24);
        }
        .pt-logo-text {
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .pt-links {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .pt-links a {
          text-decoration: none;
          font-size: 13px;
          font-weight: 800;
          color: var(--pt-blue-900);
          padding: 10px 12px;
          border-radius: 10px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          white-space: nowrap;
        }
        .pt-links a:hover {
          background: rgba(86, 194, 242, 0.2);
          color: var(--pt-blue-700);
        }
        .pt-main {
          max-width: 1120px;
          margin: 0 auto;
          padding: 26px 24px 70px;
        }
        .pt-footer {
          border-top: 1px solid rgba(18, 59, 99, 0.12);
          background: rgba(225, 247, 255, 0.78);
        }
        .pt-footer-inner {
          max-width: 1120px;
          margin: 0 auto;
          padding: 16px 24px 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }
        .pt-footer-copy {
          color: var(--pt-muted);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.03em;
        }
        .pt-footer-links {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .pt-footer-links a {
          text-decoration: none;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--pt-blue-900);
          border: 1px solid rgba(18, 59, 99, 0.15);
          border-radius: 9px;
          padding: 7px 10px;
          background: #fff;
        }
        .pt-footer-links a:hover {
          border-color: rgba(47, 142, 192, 0.45);
          color: var(--pt-blue-700);
        }
        .pt-font-display {
          font-family: ${spaceGrotesk.style.fontFamily};
        }
        .pt-mobile-nav {
          display: none;
        }
        @media (max-width: 760px) {
          .pt-nav-inner {
            padding: 0 14px;
            height: 56px;
          }
          .pt-links {
            display: none;
          }
          .pt-mobile-nav {
            display: flex;
            align-items: center;
            gap: 4px;
            overflow-x: auto;
            padding: 0 14px 10px;
            scrollbar-width: none;
            -ms-overflow-style: none;
            border-bottom: 1px solid rgba(18, 59, 99, 0.1);
          }
          .pt-mobile-nav::-webkit-scrollbar {
            display: none;
          }
          .pt-mobile-nav a {
            text-decoration: none;
            font-size: 11px;
            font-weight: 800;
            color: var(--pt-blue-900);
            padding: 7px 11px;
            border-radius: 20px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            white-space: nowrap;
            border: 1px solid rgba(18, 59, 99, 0.18);
            background: rgba(255, 255, 255, 0.72);
          }
          .pt-mobile-nav a:hover {
            background: rgba(86, 194, 242, 0.2);
            border-color: rgba(29, 109, 165, 0.35);
          }
          .pt-main {
            padding: 22px 14px 54px;
          }
          .pt-footer-inner {
            padding: 14px 14px 18px;
          }
        }
      `}</style>

      <header className="pt-nav">
        <div className="pt-nav-inner">
          <Link href="/pilltracker" className="pt-logo">
            <span className="pt-logo-mark">PT</span>
            <span className="pt-logo-text pt-font-display">PillTracker</span>
          </Link>
          <nav className="pt-links" aria-label="PillTracker pages">
            <Link href="/pilltracker">Overview</Link>
            <Link href="/pilltracker/privacy-policy">Privacy Policy</Link>
            <Link href="/pilltracker/terms">Terms of Use</Link>
            <Link href="/products">All Products</Link>
          </nav>
        </div>
        <nav className="pt-mobile-nav" aria-label="PillTracker pages mobile">
          <Link href="/pilltracker">Overview</Link>
          <Link href="/pilltracker/privacy-policy">Privacy Policy</Link>
          <Link href="/pilltracker/terms">Terms of Use</Link>
          <Link href="/products">All Products</Link>
        </nav>
      </header>

      <main className="pt-main">{children}</main>
      <footer className="pt-footer">
        <div className="pt-footer-inner">
          <p className="pt-footer-copy">© {new Date().getFullYear()} PillTracker</p>
          <div className="pt-footer-links">
            <Link href="/pilltracker">Overview</Link>
            <Link href="/pilltracker/privacy-policy">Privacy Policy</Link>
            <Link href="/pilltracker/terms">Terms of Use</Link>
            <Link href="/contact">Support</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
