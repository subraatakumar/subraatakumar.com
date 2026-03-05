import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CodeEnhancer from '../../components/CodeEnhancer';
import { DEFAULT_OG_IMAGE, absoluteUrl } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const contentDirectory = path.join(process.cwd(), "content/24weeks");

function getAllSlugs() {
  if (!fs.existsSync(contentDirectory)) return [];

  return fs
    .readdirSync(contentDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(".md", ""))
    .sort((a, b) => {
      const numA = Number(a.replace("week-", ""));
      const numB = Number(b.replace("week-", ""));
      return numA - numB;
    });
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const filePath = path.join(contentDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return {};

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);
  const title = data.title ?? `Week ${slug.replace("week-", "")}`;
  const description =
    data.description ??
    "Mapping the blueprint for the 2030 stack through 24 weeks of hands-on, autonomous agent and infrastructure builds. Follow along as I open-source the architectural trade-offs, failures, and breakthroughs of engineering in the AI era.";
  const canonicalPath = `/24weeks/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: `${title} | 24 Weeks`,
      description,
      url: canonicalPath,
      type: "article",
      publishedTime: data.date,
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | 24 Weeks`,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;

  const filePath = path.join(contentDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).use(gfm).process(content);
  let contentHtml = processedContent.toString();

  // Inject id attributes for headings so #, ##, ### render with anchors
  const slugify = (s: string) =>
    s
      .toLowerCase()
      .trim()
      .replace(/<[^>]+>/g, "")
      .replace(/[\s]+/g, "-")
      .replace(/[^a-z0-9\-]/g, "")
      .replace(/-+/g, "-");

  // Match headings including optional attributes and multi-line inner content.
  // Preserve other attributes while removing any existing `id` to replace with our slug.
  // Small map of tailwind classes to apply per heading level coming from markdown content
  const headingClassMap: Record<string, string> = {
    "1": "d180-md-h1",
    "2": "d180-md-h2",
    "3": "d180-md-h3",
    "4": "d180-md-h4",
    "5": "d180-md-h5",
    "6": "d180-md-h6",
  };

  contentHtml = contentHtml.replace(/<h([1-6])(?:\s+[^>]*)?>([\s\S]*?)<\/h\1>/gi, (m: string, lvl: string, inner: string) => {
    const id = slugify(inner);

    // Extract any existing attributes from the opening tag (if present)
    const openTagMatch = m.match(new RegExp(`^<h${lvl}([^>]*)>`));
    const existingAttrs = openTagMatch ? openTagMatch[1] : "";

    // Capture any existing class on the tag so we can merge with our level classes
    const classMatch = existingAttrs.match(/class=(?:"|')([^"']*)(?:"|')/i);
    const existingClass = classMatch ? classMatch[1] : "";

    // Remove any existing id and class attributes to avoid duplication and preserve other attrs
    let cleanedAttrs = existingAttrs.replace(/\s+id=(?:"|')(.*?)(?:"|')/gi, "");
    cleanedAttrs = cleanedAttrs.replace(/\s+class=(?:"|')(.*?)(?:"|')/gi, "").trim();
    const attrsString = cleanedAttrs ? ` ${cleanedAttrs}` : "";

    const levelClass = headingClassMap[lvl] || "";
    const combinedClass = [existingClass, levelClass].filter(Boolean).join(" ");

    return `<h${lvl} id="${id}" class="${combinedClass}"${attrsString}>${inner}</h${lvl}>`;
  });

  // Enhance code blocks: add a language badge and copy button, and style the pre/code
  contentHtml = contentHtml.replace(/<pre><code([^>]*)>([\s\S]*?)<\/code><\/pre>/gi, (m: string, attrs: string, code: string) => {
    // detect language anywhere in the matched block (pre or code)
    const langMatch = m.match(/language-([a-z0-9]+)/i);
    const lang = langMatch ? langMatch[1].toUpperCase() : "";

    // Keep the original attrs on the code tag
    const codeAttrs = attrs || "";

    return `
      <div class="relative my-6 code-block">
        <div class="absolute right-3 top-3 flex items-center gap-2 z-50 pointer-events-auto">
          ${lang ? `<span class="d180-code-lang">${lang}</span>` : ""}
          <button data-copy class="copy-btn d180-copy-btn">Copy</button>
        </div>
        <pre class="d180-code-pre line-numbers"><code${codeAttrs}>${code}</code></pre>
      </div>
    `;
  });

  // Style unordered lists: clean standard bullets, proper nesting indent
  contentHtml = contentHtml.replace(/<ul(?:\s+[^>]*)?>([\s\S]*?)<\/ul>/gi, (m: string, inner: string) => {
    const newInner = inner.replace(/<li(?:\s+[^>]*)?>([\s\S]*?)<\/li>/gi, (_liMatch: string, liInner: string) => {
      return `<li class="d180-md-li">${liInner}</li>`;
    });
    return `<ul class="d180-md-ul">${newInner}</ul>`;
  });

  // Ordered lists: proper numbered indent, clean text
  contentHtml = contentHtml.replace(/<ol(?:\s+[^>]*)?>([\s\S]*?)<\/ol>/gi, (m: string, inner: string) => {
    const newInner = inner.replace(/<li(?:\s+[^>]*)?>([\s\S]*?)<\/li>/gi, (_liMatch: string, liInner: string) => {
      return `<li class="d180-md-li">${liInner}</li>`;
    });
    return `<ol class="d180-md-ol">${newInner}</ol>`;
  });

  // Style paragraphs for better readability
  contentHtml = contentHtml.replace(/<p(?:\s+[^>]*)?>([\s\S]*?)<\/p>/gi, (m: string, inner: string) => {
    // Skip empty or whitespace-only paragraphs
    if (!inner.trim()) return m;
    return `<p class="d180-md-p">${inner}</p>`;
  });

  // Blockquotes: subtle left border, muted background and italic tone
  contentHtml = contentHtml.replace(/<blockquote(?:\s+[^>]*)?>([\s\S]*?)<\/blockquote>/gi, (m: string, inner: string) => {
    return `<blockquote class="d180-md-blockquote">${inner}</blockquote>`;
  });

  // Inline code: apply backtick styling
  contentHtml = contentHtml.replace(/(?<!<pre\b[^>]*>)<code(?:\s+[^>]*)?>([\s\S]*?)<\/code>/gi, (m, inner) => {
    return `<code class="d180-md-inline-code">${inner}</code>`;
  });

  // Horizontal rules: simple, clean line
  contentHtml = contentHtml.replace(/<hr(?:\s+[^>]*)?>/gi, () => {
    return `<hr class="d180-md-hr" />`;
  });

  // Tables: responsive wrapper and simple cell styling
  contentHtml = contentHtml.replace(/<table(?:\s+[^>]*)?>([\s\S]*?)<\/table>/gi, (m: string, inner: string) => {
    const headered = inner.replace(/<th(?:\s+[^>]*)?>([\s\S]*?)<\/th>/gi, (mm: string, thInner: string) => {
      return `<th class="d180-md-th">${thInner}</th>`;
    });

    const rows = headered.replace(/<td(?:\s+[^>]*)?>([\s\S]*?)<\/td>/gi, (mm: string, tdInner: string) => {
      return `<td class="d180-md-td">${tdInner}</td>`;
    });

    return `<div class="d180-md-table-wrap"><table class="d180-md-table">${rows}</table></div>`;
  });

  // Images: centered, rounded, subtle shadow
  contentHtml = contentHtml.replace(/<img\s+([^>]*?)src=(?:"|')([^"']+)(?:"|')([^>]*)>/gi, (m: string, before: string, src: string, after: string) => {
    const allAttrs = `${before} ${after}`.trim();
    const classMatch = allAttrs.match(/class=(?:"|')([^"']*)(?:"|')/i);
    const existingClass = classMatch ? classMatch[1] : "";
    const cleaned = allAttrs.replace(/\s+class=(?:"|')[^"']*(?:"|')/i, "").trim();
    const attrsString = cleaned ? ` ${cleaned}` : "";
    const combinedClass = [existingClass, "rounded-md shadow-sm mx-auto block"].filter(Boolean).join(" ");
    return `<img src="${src}" class="${combinedClass}"${attrsString}>`;
  });

  // Links: calm indigo accent and subtle underline on hover
  contentHtml = contentHtml.replace(/<a\s+([^>]*?)href=(?:"|')([^"']+)(?:"|')([^>]*)>([\s\S]*?)<\/a>/gi, (m: string, before: string, href: string, after: string, text: string) => {
    const allAttrs = `${before} ${after}`.trim();
    const classMatch = allAttrs.match(/class=(?:"|')([^"']*)(?:"|')/i);
    const existingClass = classMatch ? classMatch[1] : "";
    const cleaned = allAttrs.replace(/\s+class=(?:"|')[^"']*(?:"|')/i, "").trim();
    const attrsString = cleaned ? ` ${cleaned}` : "";
    const combinedClass = [existingClass, "d180-md-link"].filter(Boolean).join(" ");
    return `<a href="${href}" class="${combinedClass}"${attrsString}>${text}</a>`;
  });

  const allSlugs = getAllSlugs();
  const currentIndex = allSlugs.indexOf(slug);

  const prevSlug = allSlugs[currentIndex - 1];
  const nextSlug = allSlugs[currentIndex + 1];

  // derive day number and progress for sidebar
  const dayNumber = slug.replace("day-", "");
  const progress = Math.round((Number(dayNumber) / 180) * 100);

  return (
    <div className="d180-article-page">
      <style>{`
        #days180-root .d180-article-page {
          min-height: 100vh;
          background: #fff;
          color: #0f172a;
        }
        #days180-root .d180-article-header {
          position: sticky;
          top: 0;
          z-index: 80;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid #e2e8f0;
        }
        #days180-root .d180-article-header-inner {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 32px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        #days180-root .d180-crumb {
          font-size: 11px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: .08em;
          color: #64748b;
          text-decoration: none;
          background: #f1f5f9;
          border-radius: 10px;
          padding: 10px 14px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        #days180-root .d180-crumb-series {
          transition: color .15s ease;
        }
        #days180-root .d180-crumb:hover .d180-crumb-series {
          color: var(--amber);
        }
        #days180-root .d180-crumb strong { color: #0f172a; }
        #days180-root .d180-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 12px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
        }
        #days180-root .d180-pill-track {
          width: 90px;
          height: 8px;
          background: #cbd5e1;
          border-radius: 999px;
          overflow: hidden;
        }
        #days180-root .d180-pill-fill {
          height: 100%;
          background: var(--amber);
          border-radius: 999px;
        }
        #days180-root .d180-pill b {
          color: var(--amber);
          font-size: 11px;
          letter-spacing: .02em;
        }
        #days180-root .d180-content-wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 32px;
        }
        #days180-root .d180-meta-line {
          margin-top: 8px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
          color: #64748b;
          font-size: 14px;
          font-weight: 600;
        }
        #days180-root .d180-meta-line .dot {
          width: 4px;
          height: 4px;
          border-radius: 999px;
          background: #94a3b8;
          display: inline-block;
        }
        #days180-root .d180-post-content {
          max-width: 780px;
        }
        #days180-root .d180-post-content img {
          max-width: 100%;
          height: auto;
        }
        #days180-root .d180-post-content pre code {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !important;
        }
        #days180-root .d180-md-p {
          font-size: 17px;
          line-height: 1.85;
          color: #334155;
          margin: 20px 0;
        }
        #days180-root .d180-md-h1 {
          font-size: clamp(2rem, 4vw, 2.4rem);
          font-weight: 900;
          margin: 64px 0 24px;
          padding-bottom: 12px;
          border-bottom: 1px solid #e2e8f0;
          line-height: 1.2;
          color: #020617;
        }
        #days180-root .d180-md-h2 {
          font-size: clamp(1.6rem, 3vw, 1.9rem);
          font-weight: 900;
          margin: 56px 0 18px;
          line-height: 1.25;
          color: #0f172a;
        }
        #days180-root .d180-md-h3 {
          font-size: clamp(1.3rem, 2.4vw, 1.5rem);
          font-weight: 800;
          margin: 40px 0 14px;
          line-height: 1.3;
          color: #0f172a;
        }
        #days180-root .d180-md-h4,
        #days180-root .d180-md-h5,
        #days180-root .d180-md-h6 {
          font-size: 1.1rem;
          font-weight: 700;
          margin: 28px 0 10px;
          color: #0f172a;
        }
        #days180-root .d180-md-ul {
          list-style: disc;
          padding-left: 24px;
          margin: 18px 0;
        }
        #days180-root .d180-md-ol {
          list-style: decimal;
          padding-left: 28px;
          margin: 18px 0;
        }
        #days180-root .d180-md-li {
          margin: 8px 0;
          line-height: 1.75;
          color: #334155;
        }
        #days180-root .d180-md-blockquote {
          margin: 26px 0;
          padding: 14px 16px;
          border-left: 2px solid #e2e8f0;
          border-radius: 8px;
          background: #f8fafc;
          font-style: italic;
          color: #334155;
        }
        #days180-root .d180-md-inline-code {
          background: #f1f5f9;
          color: #c2410c;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
          font-size: 0.9em;
          padding: 3px 6px;
          border-radius: 6px;
        }
        #days180-root .d180-md-hr {
          border: 0;
          height: 1px;
          background: #e2e8f0;
          margin: 48px 0;
        }
        #days180-root .d180-md-link {
          color: var(--amber);
          text-decoration: none;
          font-weight: 600;
        }
        #days180-root .d180-md-link:hover {
          text-decoration: underline;
        }
        #days180-root .d180-md-table-wrap {
          overflow: auto;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          margin: 24px 0;
        }
        #days180-root .d180-md-table {
          min-width: 100%;
          border-collapse: collapse;
        }
        #days180-root .d180-md-th {
          text-align: left;
          font-size: 13px;
          font-weight: 700;
          color: #334155;
          background: #f8fafc;
          padding: 10px;
          border-bottom: 1px solid #e2e8f0;
        }
        #days180-root .d180-md-td {
          font-size: 14px;
          color: #334155;
          padding: 10px;
          border-bottom: 1px solid #f1f5f9;
        }
        #days180-root .d180-code-lang {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .06em;
          color: #475569;
          background: #f1f5f9;
          padding: 4px 10px;
          border-radius: 6px;
        }
        #days180-root .d180-copy-btn {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .06em;
          color: #0f172a;
          background: var(--amber);
          border: 0;
          border-radius: 6px;
          padding: 4px 10px;
          cursor: pointer;
        }
        #days180-root .d180-code-pre {
          overflow: auto;
          border-radius: 16px;
          background: #0f172a;
          color: #f8fafc;
          padding: 18px 16px;
        }
        #days180-root .d180-bottom-nav {
          margin-top: 64px;
          padding: 24px 0 60px;
          border-top: 1px solid #e2e8f0;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        #days180-root .d180-nav-link {
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          background: #f8fafc;
          color: #0f172a;
          text-decoration: none;
          padding: 12px 16px;
          min-width: 180px;
        }
        #days180-root .d180-nav-link strong {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: .08em;
          color: #64748b;
          display: block;
          margin-bottom: 4px;
        }
        #days180-root .d180-nav-link.next {
          text-align: right;
          background: #0f172a;
          border-color: #0f172a;
          color: #fff;
        }
        #days180-root .d180-nav-link.next strong {
          color: rgba(255,255,255,0.72);
        }
        #days180-root .d180-edit-link {
          display: inline-block;
          margin-top: 16px;
          padding: 10px 14px;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          background: #f8fafc;
          color: #334155;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
        }
        #days180-root .d180-edit-link:hover {
          border-color: var(--amber);
        }
        @media (max-width: 640px) {
          #days180-root .d180-article-header-inner,
          #days180-root .d180-content-wrap {
            padding-left: 16px;
            padding-right: 16px;
          }
          #days180-root .d180-pill {
            display: none;
          }
        }
      `}</style>
      {/* Sticky Header */}
      <header className="d180-article-header">
        <div className="d180-article-header-inner">
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/"
              aria-label="Go to main home page"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-900 shadow-lg"
              style={{ background: "var(--amber)", boxShadow: "0 8px 20px rgba(22, 208, 236, 0.22)" }}
            >
              <span className="font-black text-sm">SK</span>
            </Link>
            <nav className="hidden md:flex items-center gap-3">
              <Link href="/24weeks" className="d180-crumb">
                <span className="d180-crumb-series">24 Weeks</span> <span>/</span> <strong>Week {dayNumber}</strong>
              </Link>
              <div className="d180-pill">
                <div className="d180-pill-track">
                  <div className="d180-pill-fill" style={{ width: `${progress}%` }} />
                </div>
                <b>{progress}%</b>
              </div>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/24weeks" className="d180-crumb">
              ← All Weeks
            </Link>
          </div>
        </div>
      </header>


      {/* Hero Section */}
      <div className="d180-hero">
        <div className="d180-hero-inner d180-content-wrap" style={{ paddingTop: 56, paddingBottom: 56 }}>
          <h1 style={{ maxWidth: 820 }}>{data.title}</h1>
          {data.description && (
            <p style={{ marginTop: 14, maxWidth: 760 }}>{data.description}</p>
          )}
          <div className="d180-meta-line">
            <span>{data.date}</span>
            <span className="dot" />
            <span style={{ color: "var(--amber)" }}>Subrata Kumar Das</span>
            <span className="dot" />
            <span style={{ color: "#15803d", fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".08em" }}>Complete</span>
          </div>
          <p style={{ marginTop: 16, maxWidth: 500, fontSize: 13, lineHeight: 1.7, color: "var(--slate-700)", borderLeft: "2px solid var(--amber)", paddingLeft: 10, fontStyle: "italic" }}>
            "Consistent small steps lead to massive long-term results. Keep pushing."
          </p>
        </div>
      </div>

      <main className="d180-content-wrap" style={{ paddingTop: 36 }}>
          {/* Main Article */}
          <div className="flex-1">
            <article className="d180-post-content">
              <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
              <CodeEnhancer />
            </article>

            {/* Suggest edit link - opens GitHub edit UI (fork + PR flow for external contributors) */}
            <div className="mt-8 mb-6">
              {(() => {
                const repoBase = process.env.NEXT_PUBLIC_GITHUB_REPO || 'https://github.com/subraatakumar/subraatakumar.com';
                const editUrl = `${repoBase.replace(/\/+$/, '')}/edit/main/content/180days/${slug}.md`;
                return (
                  <a href={editUrl} target="_blank" rel="noopener noreferrer" className="d180-edit-link">
                    Suggest a change to the content of the material
                  </a>
                );
              })()}
            </div>

            <div className="d180-bottom-nav">
              {prevSlug ? (
                <Link href={`/180days/${prevSlug}`} className="d180-nav-link">
                  <div>
                    <strong>Previous</strong>
                    <span style={{ fontSize: 14, fontWeight: 700, textTransform: "capitalize" }}>{prevSlug.replace('-', ' ')}</span>
                  </div>
                </Link>
              ) : <div />}

              {nextSlug ? (
                <Link href={`/180days/${nextSlug}`} className="d180-nav-link next">
                  <div>
                    <strong>Next Up</strong>
                    <span style={{ fontSize: 14, fontWeight: 700, textTransform: "capitalize" }}>{nextSlug.replace('-', ' ')}</span>
                  </div>
                </Link>
              ) : <div />}
            </div>
          </div>
      </main>

      {/* <footer className="py-12 border-t border-slate-100 dark:border-slate-800 text-center">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] opacity-80">
          Subrata Kumar Das • Documentation System v1.0
        </p>
      </footer> */}

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            mainEntityOfPage: absoluteUrl(`/180days/${slug}`),
            headline: data.title,
            datePublished: data.date,
            description: data.description,
            author: {
              "@type": "Person",
              name: "Subrata Kumar Das",
            },
          }),
        }}
      />
    </div>
  );
}
