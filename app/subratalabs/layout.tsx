import Link from "next/link";
import { Exo_2, Plus_Jakarta_Sans } from "next/font/google";

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export default function SubrataLabsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`labs-shell ${jakarta.className}`}>
      <style>{`
        body:has(.labs-shell) .sk-header,
        body:has(.labs-shell) .sk-footer {
          display: none !important;
        }

        .labs-shell {
          --teal: #00c9a7;
          min-height: 100vh;
          background: #0d1117;
          color: #dde5e3;
        }

        .labs-shell * {
          box-sizing: border-box;
        }

        /* ── Nav ── */
        .labs-nav {
          position: sticky;
          top: 0;
          z-index: 70;
          background: rgba(13, 17, 23, 0.88);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .labs-nav-inner {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 32px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .labs-brand {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }
        .labs-mark {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: linear-gradient(135deg, #5effd8, #00c9a7, #009e84);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #021a12;
          font-weight: 800;
          font-size: 0.9rem;
          box-shadow: 0 4px 14px rgba(0,201,167,0.5);
          flex-shrink: 0;
        }
        .labs-brand-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
          line-height: 1;
        }
        .labs-brand-text b {
          font-size: 0.9rem;
          font-weight: 700;
          color: #e0ecea;
          letter-spacing: 0.01em;
        }
        .labs-brand-text span {
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--teal);
          text-transform: uppercase;
          letter-spacing: 0.13em;
        }
        .labs-nav-links {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .labs-nav-links a {
          text-decoration: none;
          color: #8fa8a0;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 7px 14px;
          border-radius: 6px;
          transition: color 0.15s;
        }
        .labs-nav-links a:hover {
          color: #e0ecea;
        }

        /* ── Main content ── */
        .labs-main {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 32px 72px;
        }

        /* ── Font util ── */
        .labs-font-display {
          font-family: ${exo2.style.fontFamily};
        }

        /* ── Footer ── */
        .labs-footer {
          border-top: 1px solid rgba(255,255,255,0.07);
        }
        .labs-footer-inner {
          max-width: 1180px;
          margin: 0 auto;
          padding: 16px 32px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          flex-wrap: wrap;
        }
        .labs-footer p {
          margin: 0;
          color: #4a5a55;
          font-size: 11px;
        }
        .labs-footer a {
          color: var(--teal);
          text-decoration: none;
          font-weight: 700;
          font-size: 11px;
        }

        @media (max-width: 680px) {
          .labs-nav-inner,
          .labs-main,
          .labs-footer-inner {
            padding-left: 16px;
            padding-right: 16px;
          }
        }
      `}</style>

      <header className="labs-nav">
        <div className="labs-nav-inner">
          <Link href="/subratalabs" className="labs-brand">
            <span className="labs-mark labs-font-display">S</span>
            <span className="labs-brand-text">
              <b className="labs-font-display">Subrata</b>
              <span>Labs</span>
            </span>
          </Link>
          <nav className="labs-nav-links" aria-label="Subrata Labs navigation">
            <Link href="/subratalabs/overview">Overview</Link>
            <Link href="/subratalabs/insights">Insights</Link>
            {/* <Link href="/subratalabs/products">All Products</Link> */}
          </nav>
        </div>
      </header>

      <main className="labs-main">{children}</main>

      <footer className="labs-footer">
        <div className="labs-footer-inner">
          <p>© {new Date().getFullYear()} Subrata Labs</p>
          <Link href="/contact">Collaborate with Subrata Labs</Link>
        </div>
      </footer>
    </div>
  );
}
