import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Tech Lead and React Native Architect with 10+ years building scalable mobile platforms and product-focused systems.",
  keywords: [
    "Subrata Kumar Das",
    "React Native Developer",
    "Tech Lead",
    "Mobile Architect",
    "Next.js Developer",
  ],
  openGraph: {
    title: SITE_NAME,
    description:
      "Tech Lead and React Native Architect building scalable mobile systems.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description:
      "Tech Lead and React Native Architect building scalable mobile systems.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=Caveat+Brush&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ background: "#fafaf7", margin: 0, fontFamily: "'Caveat', cursive", color: "#1a1a2e" }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Subrata Kumar Das",
              url: "https://subraatakumar.com",
              jobTitle: "Tech Lead",
              sameAs: [
                "https://github.com/subraatakumar",
                "https://linkedin.com/in/subraatakumar",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CreativeWorkSeries",
              name: "180 Days Mentoring Journey",
              description:
                "A 180-day mentoring journey documenting the build of a real mobile app intended for app stores.",
              url: "https://subraatakumar.com/180days",
              startDate: "2026-02-19",
              publisher: {
                "@type": "Organization",
                name: "Subrata Kumar Das",
                url: "https://subraatakumar.com",
              },
            }),
          }}
        />

        <style>{`
          * { box-sizing: border-box; margin: 0; padding: 0; }

          body {
            background: #fafaf7;
            font-family: 'Caveat', cursive;
            color: #1a1a2e;
          }

          /* ── Nav ── */
          .sk-header {
            background: #fff;
            border-bottom: 2.5px solid #1a1a2e;
            position: sticky;
            top: 0;
            z-index: 100;
          }
          .sk-header-inner {
            max-width: 900px;
            margin: 0 auto;
            padding: 16px 24px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .sk-logo {
            font-family: 'Caveat Brush', cursive;
            font-size: 1.55rem;
            color: #1a1a2e;
            text-decoration: none;
            letter-spacing: 0.01em;
          }
          .sk-nav-links {
            display: flex;
            gap: 32px;
            list-style: none;
          }
          .sk-nav-links a {
            font-family: 'Caveat', cursive;
            font-size: 1.15rem;
            font-weight: 600;
            color: #1a1a2e;
            text-decoration: none;
            padding-bottom: 2px;
          }
          .sk-nav-links a:hover {
            text-decoration: underline wavy #2563eb 2px;
            text-underline-offset: 4px;
          }
          .sk-nav-mobile {
            display: none;
            max-width: 900px;
            margin: 0 auto;
            padding: 0 24px 14px;
          }
          .sk-nav-mobile ul {
            display: flex;
            gap: 20px;
            list-style: none;
          }
          .sk-nav-mobile a {
            font-size: 1.1rem;
            font-weight: 600;
            color: #1a1a2e;
            text-decoration: none;
          }

          /* ── Footer ── */
          .sk-footer {
            border-top: 2.5px solid #1a1a2e;
            background: #fff;
            padding: 24px;
            text-align: center;
            font-size: 1rem;
            color: #666;
          }

          /* ── Shared section ── */
          .sk-page {
            max-width: 900px;
            margin: 0 auto;
            padding: 60px 24px 80px;
          }
          .sk-page-heading {
            font-family: 'Caveat Brush', cursive;
            font-size: 2.8rem;
            margin-bottom: 8px;
            line-height: 1.1;
          }
          .sk-section-heading {
            font-family: 'Caveat Brush', cursive;
            font-size: 1.9rem;
            margin-bottom: 16px;
            display: flex;
            align-items: center;
            gap: 12px;
          }
          .sk-section-heading::after {
            content: '';
            flex: 1;
            border-top: 2px dashed #9ca3af;
          }

          /* ── Squiggle divider ── */
          .sk-squiggle {
            width: 100%;
            height: 8px;
            background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='8'%3E%3Cpath d='M0 4 Q5 0 10 4 Q15 8 20 4 Q25 0 30 4 Q35 8 40 4' stroke='%239ca3af' stroke-width='1.5' fill='none'/%3E%3C/svg%3E") repeat-x center;
            opacity: 0.55;
            margin: 36px 0;
          }

          /* ── Sketch button ── */
          .sk-btn {
            display: inline-block;
            padding: 10px 26px;
            background: #2563eb;
            color: #fff;
            font-family: 'Caveat', cursive;
            font-size: 1.15rem;
            font-weight: 700;
            border: 2.5px solid #1a1a2e;
            border-radius: 2px;
            cursor: pointer;
            text-decoration: none;
            box-shadow: 3px 3px 0 #1a1a2e;
            transition: transform 0.1s, box-shadow 0.1s;
          }
          .sk-btn:hover {
            transform: translate(-2px, -2px);
            box-shadow: 5px 5px 0 #1a1a2e;
          }
          .sk-btn-ghost {
            background: transparent;
            color: #1a1a2e;
            box-shadow: 3px 3px 0 #9ca3af;
          }
          .sk-btn-ghost:hover {
            box-shadow: 5px 5px 0 #9ca3af;
          }

          /* ── Tag chip ── */
          .sk-tag {
            display: inline-block;
            padding: 3px 13px;
            border: 2px solid #1a1a2e;
            border-radius: 2px;
            font-size: 1rem;
            font-weight: 600;
            background: #fff;
            margin: 3px;
          }
          .sk-tag.active {
            background: #2563eb;
            color: #fff;
          }

          /* ── Card ── */
          .sk-card {
            background: #fff;
            border: 2.5px solid #1a1a2e;
            border-radius: 2px;
            box-shadow: 5px 5px 0 #1a1a2e;
            padding: 24px;
            transition: transform 0.15s, box-shadow 0.15s;
          }
          .sk-card:hover {
            transform: translate(-3px, -3px);
            box-shadow: 8px 8px 0 #1a1a2e;
          }

          /* ── Stat card ── */
          .sk-stat {
            flex: 1;
            min-width: 130px;
            text-align: center;
            background: #fff;
            border: 2.5px solid #1a1a2e;
            border-radius: 2px;
            box-shadow: 4px 4px 0 #1a1a2e;
            padding: 20px 12px;
          }
          .sk-stat .num {
            font-family: 'Caveat Brush', cursive;
            font-size: 2.8rem;
            color: #2563eb;
            line-height: 1;
          }
          .sk-stat .lbl {
            font-size: 1rem;
            color: #555;
            margin-top: 4px;
          }

          /* ── Image placeholder ── */
          .sk-img {
            width: 100%;
            height: 160px;
            border: 2.5px solid #1a1a2e;
            border-radius: 2px;
            background: #f3f4f6;
            position: relative;
            overflow: hidden;
            margin-bottom: 16px;
          }
          .sk-img::before {
            content: '';
            position: absolute;
            inset: 0;
            background:
              linear-gradient(to bottom right, transparent calc(50% - 1px), #9ca3af calc(50% - 1px), #9ca3af calc(50% + 1px), transparent calc(50% + 1px)),
              linear-gradient(to bottom left,  transparent calc(50% - 1px), #9ca3af calc(50% - 1px), #9ca3af calc(50% + 1px), transparent calc(50% + 1px));
          }

          @media (max-width: 640px) {
            .sk-nav-links { display: none; }
            .sk-nav-mobile { display: block; }
            .sk-page-heading { font-size: 2.2rem; }
          }
        `}</style>
        <header className="sk-header">
          <div className="sk-header-inner">
            <Link href="/" className="sk-logo">SKD_</Link>
            <nav aria-label="Primary">
              <ul className="sk-nav-links">
                <li><Link href="/about">About</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>
          <div className="sk-nav-mobile">
            <nav aria-label="Mobile">
              <ul>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        <main style={{ width: "100%" }}>{children}</main>

        <footer className="sk-footer">
          © {new Date().getFullYear()} Subrata Kumar Das. All rights reserved. ·{" "}
          <Link href="/for-ai">For AI/Crawlers</Link>
        </footer>
      </body>
    </html>
  );
}
