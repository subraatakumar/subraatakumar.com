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
    "1": "text-3xl lg:text-4xl font-black tracking-tighter text-slate-950 dark:text-white",
    "2": "text-2xl lg:text-3xl font-bold tracking-tight text-slate-900 dark:text-white",
    "3": "text-xl lg:text-2xl font-bold tracking-tight text-slate-900 dark:text-white",
    "4": "text-lg font-semibold tracking-tight text-slate-900 dark:text-white",
    "5": "text-base font-semibold tracking-tight text-slate-900 dark:text-white",
    "6": "text-sm font-semibold tracking-tight text-slate-900 dark:text-white",
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
          ${lang ? `<span class="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded z-50">${lang}</span>` : ""}
          <button data-copy class="copy-btn text-[12px] px-2 py-1 rounded bg-indigo-600 text-white hover:bg-indigo-700 z-50">Copy</button>
        </div>
        <pre class="overflow-auto rounded-2xl bg-slate-950 text-slate-100 p-4 line-numbers"><code${codeAttrs}>${code}</code></pre>
      </div>
    `;
  });

  // Style unordered lists: custom bullet + spacing + text colors
  contentHtml = contentHtml.replace(/<ul(?:\s+[^>]*)?>([\s\S]*?)<\/ul>/gi, (m: string, inner: string) => {
    // Transform each <li> to include a custom bullet span and content wrapper
    const newInner = inner.replace(/<li(?:\s+[^>]*)?>([\s\S]*?)<\/li>/gi, (liMatch: string, liInner: string) => {
      return `<li class="flex items-start gap-3"><span class="mt-0.5 w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400 flex-shrink-0"></span><div class="flex-1 text-base leading-relaxed text-slate-700 dark:text-slate-300">${liInner}</div></li>`;
    });

    // Remove default padding and use slightly smaller vertical spacing between items
    return `<ul class="list-none space-y-2 pl-0">${newInner}</ul>`;
  });

  // Ordered lists: modest spacing and readable text
  contentHtml = contentHtml.replace(/<ol(?:\s+[^>]*)?>([\s\S]*?)<\/ol>/gi, (m: string, inner: string) => {
    const newInner = inner.replace(/<li(?:\s+[^>]*)?>([\s\S]*?)<\/li>/gi, (liMatch: string, liInner: string) => {
      return `<li class="text-base leading-relaxed text-slate-700 dark:text-slate-300">${liInner}</li>`;
    });

    return `<ol class="pl-5 list-decimal space-y-2">${newInner}</ol>`;
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
    const combinedClass = [existingClass, "text-indigo-600 hover:underline dark:text-indigo-400"].filter(Boolean).join(" ");
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
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-indigo-100 dark:selection:bg-indigo-900/30">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800">
        <div className="w-full mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-6">
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
              <span className="font-black text-sm">SK</span>
            </div>
            <nav className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
              <Link href="/180days" className="text-xs font-black px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-2 uppercase tracking-tight">
              <span className="hover:text-indigo-600 transition-colors cursor-pointer font-bold">180 Days</span>
              <span className="text-slate-300">/</span>
              <span className="text-slate-900 dark:text-white font-bold tracking-tight">Day {dayNumber}</span>
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/180days" className="text-xs font-black px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-2 uppercase tracking-tight">
              ← All Days
            </Link>
          </div>
        </div>
      </header>


      <main className="w-full mx-auto px-4 sm:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <aside className="lg:w-64 lg:shrink-0 space-y-8 order-2 lg:order-1">
            <div className="space-y-6">
              <div>
                <h4 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-3">Log Metadata</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-slate-500 font-medium">
                      <span>Date</span>
                    </div>
                    <span className="font-bold">{data.date}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-slate-500 font-medium">
                      <span>Author</span>
                    </div>
                    <span className="font-bold text-indigo-600 dark:text-indigo-400">Subrata K.</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-slate-500 font-medium">
                      <span>Status</span>
                    </div>
                    <span className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded font-bold text-[10px] uppercase tracking-tighter">Complete</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                <h4 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-3">Challenge Progress</h4>
                <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 shadow-sm">
                   <div className="flex justify-between items-center mb-2">
                      <span className="text-[10px] font-bold text-slate-500">Day {dayNumber} / 180</span>
                      <span className="text-[10px] font-bold text-indigo-600">{progress}%</span>
                   </div>
                   <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className="bg-indigo-600 h-full transition-all duration-1000" 
                        style={{ width: `${progress}%` }}
                      />
                   </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-100 dark:border-indigo-800">
                  <p className="text-[11px] leading-relaxed text-indigo-700 dark:text-indigo-300 font-medium italic">
                    "Consistent small steps lead to massive long-term results. Keep pushing."
                  </p>
                </div>
              </div>

              <Link href="#" className="flex items-center justify-center gap-2 w-full py-3 bg-slate-950 dark:bg-white text-white dark:text-slate-950 rounded-xl font-black text-[10px] tracking-widest hover:opacity-90 transition-all shadow-xl shadow-indigo-500/10 uppercase">
                Share Entry
              </Link>
            </div>
          </aside>

          {/* Main Article */}
          <div className="flex-1 order-1 lg:order-2">
            <div className="mb-8">
              <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 mb-2 uppercase tracking-widest">
                Technical Entry
              </div>
              <h1 className="text-4xl lg:text-5xl font-black tracking-tighter text-slate-950 dark:text-white leading-[1.1]">{data.title}</h1>
              {data.description && (
                <p className="mt-4 text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">{data.description}</p>
              )}
            </div>

            <div className="w-full h-[1px] bg-slate-100 dark:bg-slate-800 mb-10" />

            <article className="max-w-4xl prose prose-slate dark:prose-invert prose-headings:font-black prose-headings:tracking-tight prose-h1:text-3xl prose-h1:mt-8 prose-h1:mb-4 prose-h1:pb-3 prose-h1:border-b prose-h2:text-xl prose-h2:mt-6 prose-h2:mb-3 prose-p:text-base prose-p:leading-relaxed prose-p:my-2 prose-li:my-1 prose-pre:rounded-2xl prose-pre:bg-slate-950 prose-pre:p-6 prose-hr:my-8 prose-hr:border-slate-200 dark:prose-hr:border-slate-800">
              <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
              <CodeEnhancer />
            </article>

            <div className="mt-16 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 pb-20">
              {prevSlug ? (
                <Link href={`/180days/${prevSlug}`} className="group flex items-center gap-3 px-5 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-indigo-400 transition-all w-full sm:w-auto">
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