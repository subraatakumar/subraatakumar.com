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
          --labs-charcoal: #111111;
          --labs-slate: #1c1f26;
          --labs-teal: #00c9a7;
          --labs-offwhite: #ededed;
          --labs-gray: #7a7f87;
          min-height: 100vh;
          background:
            radial-gradient(circle at 10% 0%, rgba(0, 201, 167, 0.13), transparent 34%),
            radial-gradient(circle at 90% 100%, rgba(0, 201, 167, 0.1), transparent 40%),
            linear-gradient(145deg, #0f1014, #111111 38%, #171a21 100%);
          color: var(--labs-offwhite);
        }
        .labs-shell * {
          box-sizing: border-box;
        }
        .labs-nav {
          position: sticky;
          top: 0;
          z-index: 70;
          border-bottom: 1px solid rgba(237, 237, 237, 0.12);
          background: rgba(17, 17, 17, 0.82);
          backdrop-filter: blur(12px);
        }
        .labs-nav-inner {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 24px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
        }
        .labs-brand {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: var(--labs-offwhite);
        }
        .labs-mark {
          width: 38px;
          height: 38px;
          border-radius: 11px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #041814;
          font-weight: 800;
          background: linear-gradient(140deg, #82ffe6 0%, #00c9a7 45%, #08a58b 100%);
          box-shadow: 0 10px 20px rgba(0, 201, 167, 0.35);
        }
        .labs-brand-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
          gap: 4px;
        }
        .labs-brand-text b {
          font-size: 0.96rem;
          letter-spacing: 0.03em;
        }
        .labs-brand-text span {
          font-size: 0.77rem;
          color: var(--labs-teal);
          text-transform: uppercase;
          letter-spacing: 0.09em;
        }
        .labs-links {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .labs-links a {
          text-decoration: none;
          color: var(--labs-offwhite);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-weight: 800;
          border-radius: 10px;
          padding: 9px 12px;
        }
        .labs-links a:hover {
          color: #051b17;
          background: rgba(0, 201, 167, 0.92);
        }
        .labs-main {
          max-width: 1180px;
          margin: 0 auto;
          padding: 30px 24px 70px;
        }
        .labs-font-display {
          font-family: ${exo2.style.fontFamily};
        }
        .labs-footer {
          border-top: 1px solid rgba(237, 237, 237, 0.12);
        }
        .labs-footer-inner {
          max-width: 1180px;
          margin: 0 auto;
          padding: 16px 24px 26px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          flex-wrap: wrap;
        }
        .labs-footer p {
          margin: 0;
          color: var(--labs-gray);
          font-size: 12px;
        }
        .labs-footer a {
          color: var(--labs-teal);
          text-decoration: none;
          font-weight: 700;
          font-size: 12px;
        }
        @media (max-width: 760px) {
          .labs-nav-inner {
            padding: 0 14px;
            height: auto;
            min-height: 66px;
            flex-wrap: wrap;
            padding-top: 10px;
            padding-bottom: 10px;
          }
          .labs-main {
            padding: 20px 14px 56px;
          }
          .labs-footer-inner {
            padding: 14px;
          }
        }
      `}</style>

      <header className="labs-nav">
        <div className="labs-nav-inner">
          <Link href="/subratalabs" className="labs-brand">
            <span className="labs-mark">S</span>
            <span className="labs-brand-text">
              <b className="labs-font-display">Subrata</b>
              <span>Labs</span>
            </span>
          </Link>
          <nav className="labs-links" aria-label="Subrata Labs navigation">
            <Link href="/subratalabs">Overview</Link>
            <Link href="/180days">180Days</Link>
            <Link href="/projects">All Projects</Link>
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
