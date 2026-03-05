import Link from "next/link";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

export default function SheHealthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`sh-shell ${dmSans.className}`}>
      <style>{`
        body:has(.sh-shell) .sk-header,
        body:has(.sh-shell) .sk-footer {
          display: none !important;
        }

        .sh-shell {
          --sh-cream:    #fdf6f0;
          --sh-blush:    #f5e8e0;
          --sh-rose:     #e8c4b0;
          --sh-terra:    #c47a5a;
          --sh-terra-d:  #a35e40;
          --sh-maroon:   #7b2d42;
          --sh-maroon-d: #5a1f2f;
          --sh-charcoal: #2c2320;
          --sh-muted:    #8a6b5e;
          --sh-gold:     #c9963a;
          --sh-card:     rgba(255, 255, 255, 0.88);

          min-height: 100vh;
          color: var(--sh-charcoal);
          background:
            radial-gradient(circle at 8% 10%, rgba(196, 122, 90, 0.14), transparent 42%),
            radial-gradient(circle at 92% 22%, rgba(232, 196, 176, 0.18), transparent 35%),
            linear-gradient(140deg, #fdf6f0 0%, #f8ede4 40%, #f2e0d4 100%);
        }

        .sh-shell * {
          box-sizing: border-box;
        }

        /* NAV */
        .sh-nav {
          position: sticky;
          top: 0;
          z-index: 60;
          border-bottom: 1px solid rgba(196, 122, 90, 0.15);
          background: rgba(253, 246, 240, 0.88);
          backdrop-filter: blur(14px);
        }
        .sh-nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .sh-logo {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--sh-maroon);
          text-decoration: none;
        }
        .sh-logo-mark {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 13px;
          color: #fff;
          background: linear-gradient(140deg, #c47a5a, #7b2d42);
          box-shadow: 0 8px 16px rgba(123, 45, 66, 0.25);
        }
        .sh-logo-text {
          font-size: 18px;
          font-weight: 700;
          font-family: ${cormorant.style.fontFamily};
          letter-spacing: 0.01em;
        }
        .sh-links {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .sh-links a {
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
          color: var(--sh-charcoal);
          padding: 9px 13px;
          border-radius: 10px;
          letter-spacing: 0.02em;
          transition: background 0.18s, color 0.18s;
        }
        .sh-links a:hover {
          background: rgba(196, 122, 90, 0.12);
          color: var(--sh-terra-d);
        }
        .sh-links a.sh-nav-cta {
          background: var(--sh-maroon);
          color: #fff !important;
          border-radius: 10px;
          padding: 9px 18px;
          font-weight: 700;
          box-shadow: 0 4px 12px rgba(123, 45, 66, 0.22);
        }
        .sh-links a.sh-nav-cta:hover {
          background: var(--sh-maroon-d);
        }

        /* MAIN */
        .sh-main {
          max-width: 1200px;
          margin: 0 auto;
          padding: 26px 24px 70px;
        }

        /* FOOTER */
        .sh-footer {
          border-top: 1px solid rgba(196, 122, 90, 0.15);
          background: rgba(245, 232, 224, 0.6);
        }
        .sh-footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 18px 24px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }
        .sh-footer-copy {
          color: var(--sh-muted);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.03em;
        }
        .sh-footer-links {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .sh-footer-links a {
          text-decoration: none;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--sh-maroon);
          border: 1px solid rgba(123, 45, 66, 0.18);
          border-radius: 9px;
          padding: 7px 10px;
          background: rgba(255, 255, 255, 0.8);
          transition: border-color 0.18s, color 0.18s;
        }
        .sh-footer-links a:hover {
          border-color: rgba(123, 45, 66, 0.45);
          color: var(--sh-maroon-d);
        }

        .sh-font-display {
          font-family: ${cormorant.style.fontFamily};
        }

        @media (max-width: 760px) {
          .sh-nav-inner {
            padding: 0 14px;
          }
          .sh-main {
            padding: 20px 14px 54px;
          }
          .sh-footer-inner {
            padding: 14px 14px 18px;
          }
          .sh-links a {
            font-size: 12px;
            padding: 8px 10px;
          }
          .sh-links a.sh-nav-cta {
            padding: 8px 14px;
          }
        }
      `}</style>

      <header className="sh-nav">
        <div className="sh-nav-inner">
          <Link href="/shehealth" className="sh-logo">
            <span className="sh-logo-mark">SH</span>
            <span className="sh-logo-text">She Health</span>
          </Link>
          <nav className="sh-links" aria-label="She Health pages">
            <Link href="/shehealth">Overview</Link>
            {/* <Link href="/shehealth/guide">How To Use</Link> */}
            <Link href="/shehealth/privacy-policy">Privacy Policy</Link>
            <Link href="/shehealth/terms">Terms of Use</Link>
            <Link href="/products">All Products</Link>
            <Link href="/shehealth#download" className="sh-nav-cta">Download Free</Link>
          </nav>
        </div>
      </header>

      <main className="sh-main">{children}</main>

      <footer className="sh-footer">
        <div className="sh-footer-inner">
          <p className="sh-footer-copy">© {new Date().getFullYear()} She Health</p>
          <div className="sh-footer-links">
            <Link href="/shehealth">Overview</Link>
            {/* <Link href="/shehealth/guide">How To Use</Link> */}
            <Link href="/shehealth/privacy-policy">Privacy Policy</Link>
            <Link href="/shehealth/terms">Terms of Use</Link>
            <Link href="/contact">Support</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}