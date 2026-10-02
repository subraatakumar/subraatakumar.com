import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  icons: {
    icon: [{ url: "/subra-ai/icon.png", type: "image/png" }],
    apple: [{ url: "/subra-ai/icon.png", type: "image/png" }],
  },
};


export default function SubraAiLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="sa-shell">
      <style>{`
        body:has(.sa-shell) .sk-header,
        body:has(.sa-shell) .sk-footer { display: none !important; }
        body:has(.sa-shell) { background: #080b10 !important; }
        .sa-shell {
          --sa-bg: #080b10;
          --sa-panel: #10151d;
          --sa-panel-2: #151c26;
          --sa-line: rgba(255,255,255,.10);
          --sa-text: #f5f7fa;
          --sa-muted: #a2adbb;
          --sa-lime: #b7f34a;
          --sa-cyan: #56d7df;
          min-height: 100vh;
          font-family: "Avenir Next", Avenir, "Segoe UI", Arial, sans-serif;
          color: var(--sa-text);
          background:
            radial-gradient(circle at 83% 8%, rgba(86,215,223,.12), transparent 26rem),
            radial-gradient(circle at 12% 28%, rgba(183,243,74,.08), transparent 24rem),
            var(--sa-bg);
        }
        .sa-shell * { box-sizing: border-box; }
        .sa-display { font-family: "Avenir Next", Avenir, "Segoe UI", Arial, sans-serif; }
        .sa-nav {
          position: sticky; top: 0; z-index: 50;
          background: rgba(8,11,16,.82); backdrop-filter: blur(18px);
          border-bottom: 1px solid var(--sa-line);
        }
        .sa-nav-inner, .sa-footer-inner {
          max-width: 1180px; margin: 0 auto; padding: 0 28px;
          display: flex; align-items: center; justify-content: space-between; gap: 20px;
        }
        .sa-nav-inner { min-height: 72px; }
        .sa-brand { display: inline-flex; align-items: center; gap: 11px; color: var(--sa-text); text-decoration: none; }
        .sa-mark {
          width: 38px; height: 38px; display: grid; place-items: center; border-radius: 12px;
          color: #0a0d10; background: linear-gradient(135deg, var(--sa-lime), var(--sa-cyan));
          box-shadow: 0 0 30px rgba(183,243,74,.18);
        }
        .sa-brand-name { font-weight: 800; letter-spacing: -.025em; font-size: 18px; }
        .sa-nav-links, .sa-footer-links { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
        .sa-nav-links a, .sa-footer-links a {
          color: var(--sa-muted); text-decoration: none; font-size: 13px; font-weight: 600;
          padding: 9px 12px; border-radius: 9px;
        }
        .sa-nav-links a:hover, .sa-footer-links a:hover { color: var(--sa-text); background: rgba(255,255,255,.06); }
        .sa-main { min-height: calc(100vh - 150px); }
        .sa-footer { border-top: 1px solid var(--sa-line); background: rgba(7,10,14,.84); }
        .sa-footer-inner { min-height: 78px; }
        .sa-footer-copy { color: #778291; font-size: 12px; }
        @media (max-width: 720px) {
          .sa-nav-inner { min-height: 62px; padding: 0 18px; }
          .sa-nav-links a:not(:last-child) { display: none; }
          .sa-footer-inner { padding: 22px 18px; align-items: flex-start; flex-direction: column; }
          .sa-footer-links { gap: 2px; }
          .sa-footer-links a { padding-left: 0; padding-right: 14px; }
        }
      `}</style>
      <header className="sa-nav">
        <div className="sa-nav-inner">
          <Link href="/subra-ai" className="sa-brand" aria-label="Subra AI home">
            <img src="/subra-ai/icon.png" alt="Subra AI Logo" style={{ width: 38, height: 38, borderRadius: 12 }} />
            <span className="sa-brand-name sa-display">Subra AI</span>
          </Link>
          <nav className="sa-nav-links" aria-label="Subra AI pages">
            <Link href="/subra-ai">Overview</Link>
            <Link href="/subra-ai#use-cases">Use cases</Link>
            <Link href="/subra-ai/privacy-policy">Privacy</Link>
            <Link href="/subra-ai/terms">Terms</Link>
            <Link href="/products">All products</Link>
          </nav>
        </div>
      </header>
      <main className="sa-main">{children}</main>
      <footer className="sa-footer">
        <div className="sa-footer-inner">
          <p className="sa-footer-copy">© {new Date().getFullYear()} Subra AI · Private intelligence, on your device.</p>
          <nav className="sa-footer-links" aria-label="Subra AI footer links">
            <Link href="/subra-ai/privacy-policy">Privacy Policy</Link>
            <Link href="/subra-ai/terms">Terms</Link>
            <Link href="/contact">Support</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
