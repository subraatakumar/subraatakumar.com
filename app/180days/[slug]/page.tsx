import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CodeEnhancer from '../../components/CodeEnhancer';

type PageProps = {
  params: Promise<{ slug: string }>;
};

const contentDirectory = path.join(process.cwd(), "content/180days");

function getAllSlugs() {
  if (!fs.existsSync(contentDirectory)) return [];

  return fs
    .readdirSync(contentDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(".md", ""))
    .sort((a, b) => {
      const numA = Number(a.replace("day-", ""));
      const numB = Number(b.replace("day-", ""));
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

  return {
    title: data.title,
    description: data.description,
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

  const processedContent = await remark().use(html).process(content);
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
    "1": "text-3xl lg:text-4xl font-black tracking-tighter text-slate-950 dark:text-white mt-16 mb-6 pb-4 border-b border-slate-200 dark:border-slate-700",
    "2": "text-2xl lg:text-3xl font-black tracking-tight text-slate-900 dark:text-white mt-14 mb-5",
    "3": "text-xl lg:text-2xl font-bold tracking-tight text-slate-900 dark:text-white mt-10 mb-4",
    "4": "text-lg font-semibold tracking-tight text-slate-900 dark:text-white mt-8 mb-3",
    "5": "text-base font-semibold tracking-tight text-slate-900 dark:text-white mt-6 mb-2",
    "6": "text-sm font-semibold tracking-tight text-slate-900 dark:text-white mt-4 mb-2",
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
          ${lang ? `<span class="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded z-50">${lang}</span>` : ""}
          <button data-copy class="copy-btn text-[11px] font-medium px-2.5 py-1 rounded bg-amber-400 text-slate-900 hover:bg-amber-500 z-50 uppercase tracking-wider">Copy</button>
        </div>
        <pre class="overflow-auto rounded-2xl bg-slate-950 text-slate-100 p-4 line-numbers"><code${codeAttrs}>${code}</code></pre>
      </div>
    `;
  });

  // Style unordered lists: clean standard bullets, proper nesting indent
  contentHtml = contentHtml.replace(/<ul(?:\s+[^>]*)?>([\s\S]*?)<\/ul>/gi, (m: string, inner: string) => {
    const newInner = inner.replace(/<li(?:\s+[^>]*)?>([\s\S]*?)<\/li>/gi, (_liMatch: string, liInner: string) => {
      return `<li class="text-[17px] leading-relaxed text-slate-700 dark:text-slate-300 my-1.5">${liInner}</li>`;
    });
    return `<ul class="list-disc pl-6 space-y-1 my-4">${newInner}</ul>`;
  });

  // Ordered lists: proper numbered indent, clean text
  contentHtml = contentHtml.replace(/<ol(?:\s+[^>]*)?>([\s\S]*?)<\/ol>/gi, (m: string, inner: string) => {
    const newInner = inner.replace(/<li(?:\s+[^>]*)?>([\s\S]*?)<\/li>/gi, (_liMatch: string, liInner: string) => {
      return `<li class="text-[17px] leading-relaxed text-slate-700 dark:text-slate-300 my-1.5 pl-1">${liInner}</li>`;
    });
    return `<ol class="list-decimal pl-7 space-y-1 my-4">${newInner}</ol>`;
  });

  // Style paragraphs for better readability
  contentHtml = contentHtml.replace(/<p(?:\s+[^>]*)?>([\s\S]*?)<\/p>/gi, (m: string, inner: string) => {
    // Skip empty or whitespace-only paragraphs
    if (!inner.trim()) return m;
    return `<p class="text-[17px] leading-[1.85] text-slate-700 dark:text-slate-300 my-5">${inner}</p>`;
  });

  // Blockquotes: subtle left border, muted background and italic tone
  contentHtml = contentHtml.replace(/<blockquote(?:\s+[^>]*)?>([\s\S]*?)<\/blockquote>/gi, (m: string, inner: string) => {
    return `<blockquote class="border-l-2 border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/30 p-4 rounded-lg text-slate-700 dark:text-slate-300 italic">${inner}</blockquote>`;
  });

  // Tables: responsive wrapper and simple cell styling
  contentHtml = contentHtml.replace(/<table(?:\s+[^>]*)?>([\s\S]*?)<\/table>/gi, (m: string, inner: string) => {
    const headered = inner.replace(/<th(?:\s+[^>]*)?>([\s\S]*?)<\/th>/gi, (mm: string, thInner: string) => {
      return `<th class="text-left font-medium text-sm text-slate-700 dark:text-slate-300 p-2 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/20">${thInner}</th>`;
    });

    const rows = headered.replace(/<td(?:\s+[^>]*)?>([\s\S]*?)<\/td>/gi, (mm: string, tdInner: string) => {
      return `<td class="p-2 text-sm text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800">${tdInner}</td>`;
    });

    return `<div class="overflow-auto rounded-lg border border-slate-100 dark:border-slate-800">` +
           `<table class="min-w-full border-collapse">${rows}</table></div>`;
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
    const combinedClass = [existingClass, "text-amber-600 dark:text-amber-400 hover:underline font-medium"].filter(Boolean).join(" ");
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
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-6">
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-8 h-8 bg-amber-400 rounded-lg flex items-center justify-center text-slate-900 shadow-lg shadow-amber-400/20">
              <span className="font-black text-sm">SK</span>
            </div>
            <nav className="hidden md:flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-slate-400">
              <Link href="/180days" className="text-xs font-black px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-2 uppercase tracking-tight">
                <span className="hover:text-amber-500 transition-colors cursor-pointer font-bold">180 Days</span>
                <span className="text-slate-300">/</span>
                <span className="text-slate-900 dark:text-white font-bold tracking-tight">Day {dayNumber}</span>
              </Link>
              {/* Inline progress pill */}
              <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg">
                <div className="w-24 bg-slate-300 dark:bg-slate-600 h-2 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full rounded-full" style={{ width: `${progress}%` }} />
                </div>
                <span className="text-[11px] font-black text-amber-600 dark:text-amber-400 tabular-nums">{progress}%</span>
              </div>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/180days" className="text-xs font-black px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-2 uppercase tracking-tight">
              ← All Days
            </Link>
          </div>
        </div>
      </header>


      {/* Hero Section */}
      <div className="w-full border-b border-slate-200 dark:border-slate-800 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/60 dark:to-slate-950">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 py-14">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-slate-950 dark:text-white leading-[1.05] max-w-3xl">{data.title}</h1>
          {data.description && (
            <p className="mt-6 text-xl text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl font-normal">{data.description}</p>
          )}
          <div className="mt-8 flex flex-wrap items-center gap-2 text-sm">
            <span className="font-semibold text-slate-600 dark:text-slate-300">{data.date}</span>
            <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-500 inline-block" />
            <span className="font-semibold text-amber-600 dark:text-amber-400">Subrata Kumar Das</span>
            <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-500 inline-block" />
            <span className="px-2.5 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full font-bold text-xs uppercase tracking-tight">Complete</span>
          </div>
          {/* Quote — visible on md screens and above only */}
          <p className="hidden md:block mt-8 text-[13px] leading-relaxed text-amber-700/80 dark:text-amber-400/70 font-medium italic border-l-2 border-amber-300 dark:border-amber-700 pl-4 max-w-sm">
            "Consistent small steps lead to massive long-term results. Keep pushing."
          </p>
        </div>
      </div>

      <main className="w-full max-w-6xl mx-auto px-4 sm:px-8 py-10">
          {/* Main Article */}
          <div className="flex-1">

            <article className="max-w-3xl prose prose-slate dark:prose-invert prose-headings:font-black prose-headings:tracking-tight prose-h1:text-4xl prose-h1:mt-16 prose-h1:mb-6 prose-h1:pb-4 prose-h1:border-b prose-h1:border-slate-200 dark:prose-h1:border-slate-700 prose-h2:text-3xl prose-h2:mt-14 prose-h2:mb-5 prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-p:text-[17px] prose-p:leading-[1.85] prose-p:my-5 prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-strong:text-slate-900 dark:prose-strong:text-white prose-pre:rounded-2xl prose-pre:bg-slate-950 prose-pre:p-6 prose-hr:my-12 prose-hr:border-slate-200 dark:prose-hr:border-slate-800 prose-ul:list-disc prose-ol:list-decimal">
              <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
              <CodeEnhancer />
            </article>

            <div className="mt-16 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 pb-20">
              {prevSlug ? (
                <Link href={`/180days/${prevSlug}`} className="group flex items-center gap-3 px-5 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-amber-400 transition-all w-full sm:w-auto">
                  <div className="text-left">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Previous</span>
                    <span className="text-sm font-bold capitalize">{prevSlug.replace('-', ' ')}</span>
                  </div>
                </Link>
              ) : <div />}

              {nextSlug ? (
                <Link href={`/180days/${nextSlug}`} className="group flex items-center gap-3 px-5 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-950 rounded-xl hover:scale-[1.02] transition-all w-full sm:w-auto text-right">
                  <div className="text-right">
                    <span className="block text-[10px] font-bold opacity-60 uppercase tracking-widest">Next Up</span>
                    <span className="text-sm font-bold capitalize">{nextSlug.replace('-', ' ')}</span>
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

// Load Prism scripts client-side for syntax highlighting
// These are added as plain script tags so Prism runs in the browser and highlights code blocks.
// If you prefer bundling Prism, we can switch to an npm-based approach.

/*
  Note: Next.js will include these <script> tags in the rendered HTML. They are intentionally
  plain tags (not using next/script) to keep this file self-contained and simple.
*/

// Append script tags to document.head when running in the browser
if (typeof window !== 'undefined') {
  const addScript = (src: string, cb?: () => void) => {
    if (document.querySelector(`script[src="${src}"]`)) { cb && cb(); return; }
    const s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.onload = cb || (() => {});
    document.head.appendChild(s);
  };

  // Core + languages
    addScript('https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js', () => {
      addScript('https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-clike.min.js');
      addScript('https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-javascript.min.js');
      addScript('https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-typescript.min.js');
      addScript('https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-jsx.min.js');
      addScript('https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-tsx.min.js');
      addScript('https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-java.min.js');
      // highlight after languages load (give a short delay)
      setTimeout(() => { try { (window as any).Prism && (window as any).Prism.highlightAll(); } catch (e) {} }, 100);
    });
}