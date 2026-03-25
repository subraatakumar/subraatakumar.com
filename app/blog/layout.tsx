import Link from "next/link";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ all: "revert" }}>
      <style>{`
        body:has(#blog-root) .sk-header,
        body:has(#blog-root) .sk-footer {
          display: none !important;
        }

        #blog-root,
        #blog-root * {
          box-sizing: border-box;
        }

        #blog-root {
          --blog-ink: #101828;
          --blog-muted: #667085;
          --blog-line: #e4e7ec;
          --blog-card: #ffffff;
          --blog-accent: #0ea5e9;
          --blog-accent-warm: #fb7185;
          --blog-bg: radial-gradient(circle at 10% 0%, #dff6ff 0%, transparent 40%),
            radial-gradient(circle at 100% 10%, #ffe8ec 0%, transparent 35%),
            #f8fafc;
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background: var(--blog-bg);
          color: var(--blog-ink);
          font-family: "Manrope", "Avenir Next", "Segoe UI", sans-serif;
        }

        #blog-root .blog-shell-header {
          position: sticky;
          top: 0;
          z-index: 100;
          backdrop-filter: blur(10px);
          background: rgba(248, 250, 252, 0.78);
          border-bottom: 1px solid var(--blog-line);
        }
        #blog-root .blog-shell-header-inner {
          width: 100%;
          height: 66px;
          padding: 0 clamp(16px, 4vw, 48px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        #blog-root .blog-shell-main {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        #blog-root .blog-brand {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: var(--blog-ink);
        }
        #blog-root .blog-brand-mark {
          width: 32px;
          height: 32px;
          border-radius: 10px;
          background: linear-gradient(135deg, var(--blog-accent), var(--blog-accent-warm));
          color: #fff;
          display: grid;
          place-items: center;
          font-weight: 900;
          font-size: 12px;
          letter-spacing: 0.03em;
          box-shadow: 0 10px 24px rgba(14, 165, 233, 0.28);
        }
        #blog-root .blog-brand-text {
          font-family: "Fraunces", "Iowan Old Style", serif;
          font-weight: 700;
          font-size: 1.1rem;
          letter-spacing: 0.01em;
        }
        #blog-root .blog-shell-nav {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        #blog-root .blog-shell-nav a {
          text-decoration: none;
          color: var(--blog-ink);
          font-size: 0.8rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 10px 12px;
          border-radius: 10px;
          transition: background 0.2s ease;
        }
        #blog-root .blog-shell-nav a:hover {
          background: #eef2f6;
        }

        #blog-root .blog-shell-footer {
          margin-top: auto;
          border-top: 1px solid var(--blog-line);
          background: rgba(255, 255, 255, 0.64);
        }
        #blog-root .blog-shell-footer-inner {
          width: 100%;
          padding: 20px clamp(16px, 4vw, 48px) 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }
        #blog-root .blog-shell-copy {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--blog-muted);
          font-weight: 700;
        }
        #blog-root .blog-shell-footer a {
          text-decoration: none;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.05em;
          color: #0b6ba8;
        }

        @media (max-width: 700px) {
          #blog-root .blog-shell-header-inner,
          #blog-root .blog-shell-footer-inner {
            padding-left: 16px;
            padding-right: 16px;
          }
          #blog-root .blog-shell-nav a {
            padding: 8px 10px;
            font-size: 0.72rem;
          }
        }
      `}</style>

      <div id="blog-root">
        <header className="blog-shell-header">
          <div className="blog-shell-header-inner">
            <Link href="/blog" className="blog-brand">
              <span className="blog-brand-mark"><Link href="/" aria-label="Go to main home page">SK</Link></span>
              <span className="blog-brand-text">TechCraft Blog</span>
            </Link>
            <nav className="blog-shell-nav">
              <Link href="/products">Products</Link>
              <Link href="/">Home</Link>
            </nav>
          </div>
        </header>

        <main className="blog-shell-main">{children}</main>
        <footer className="blog-shell-footer">
          <div className="blog-shell-footer-inner">
            <p className="blog-shell-copy">Subrata Kumar Das • Blog</p>
            <Link href="/blog">All Posts</Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
