import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import gfm from "remark-gfm";
import html from "remark-html";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CodeEnhancer from "@/app/components/CodeEnhancer";
import { DEFAULT_OG_IMAGE, absoluteUrl } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const contentDirectory = path.join(process.cwd(), "content/blog");

function getAllSlugs() {
  if (!fs.existsSync(contentDirectory)) return [];

  return fs
    .readdirSync(contentDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(".md", ""));
}

function estimateReadingTime(markdown: string) {
  const words = markdown.split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}

function formatDate(rawDate: string) {
  const parsed = new Date(rawDate);
  if (Number.isNaN(parsed.getTime())) return rawDate;

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(parsed);
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const filePath = path.join(contentDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return {};

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const title = typeof data.title === "string" ? data.title : slug.replace(/-/g, " ");
  const description = typeof data.description === "string" ? data.description : "Read this post on the Subrata blog.";
  const canonical = `/blog/${slug}`;
  const published = typeof data.date === "string" ? data.date : undefined;
  const modified = typeof data.updated === "string" ? data.updated : published;
  const tags = Array.isArray(data.tags) ? data.tags.map((tag: unknown) => String(tag)) : undefined;
  const image = typeof data.image === "string" ? data.image : DEFAULT_OG_IMAGE;
  const readingTime = typeof data.readingTime === "string" ? data.readingTime : estimateReadingTime(content);

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${title} | Blog`,
      description: `${description} • ${readingTime}`,
      type: "article",
      url: canonical,
      publishedTime: published,
      modifiedTime: modified,
      images: [image],
      tags,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Blog`,
      description: `${description} • ${readingTime}`,
      images: [image],
    },
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const filePath = path.join(contentDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) notFound();

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(gfm).use(html).process(content);
  let contentHtml = processedContent.toString();

  const slugify = (value: string) =>
    value
      .toLowerCase()
      .trim()
      .replace(/<[^>]+>/g, "")
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")
      .replace(/-+/g, "-");

  contentHtml = contentHtml.replace(/<h([1-6])(?:\s+[^>]*)?>([\s\S]*?)<\/h\1>/gi, (_match: string, level: string, inner: string) => {
    const id = slugify(inner);
    return `<h${level} id="${id}" class="blog-md-h${level}">${inner}</h${level}>`;
  });

  contentHtml = contentHtml.replace(/<pre><code([^>]*)>([\s\S]*?)<\/code><\/pre>/gi, (match: string, attrs: string, code: string) => {
    const langMatch = match.match(/language-([a-z0-9]+)/i);
    const lang = langMatch ? langMatch[1].toUpperCase() : "";
    return `
      <div class="blog-code-wrap">
        <div class="blog-code-head">
          ${lang ? `<span class="blog-code-lang">${lang}</span>` : "<span></span>"}
          <button data-copy class="blog-copy-btn">Copy</button>
        </div>
        <pre class="blog-md-pre"><code${attrs}>${code}</code></pre>
      </div>
    `;
  });

  contentHtml = contentHtml.replace(/<ul(?:\s+[^>]*)?>([\s\S]*?)<\/ul>/gi, (_match: string, inner: string) => `<ul class="blog-md-ul">${inner}</ul>`);
  contentHtml = contentHtml.replace(/<ol(?:\s+[^>]*)?>([\s\S]*?)<\/ol>/gi, (_match: string, inner: string) => `<ol class="blog-md-ol">${inner}</ol>`);
  contentHtml = contentHtml.replace(/<li(?:\s+[^>]*)?>([\s\S]*?)<\/li>/gi, (_match: string, inner: string) => `<li class="blog-md-li">${inner}</li>`);
  contentHtml = contentHtml.replace(/<p(?:\s+[^>]*)?>([\s\S]*?)<\/p>/gi, (_match: string, inner: string) => `<p class="blog-md-p">${inner}</p>`);
  contentHtml = contentHtml.replace(/<blockquote(?:\s+[^>]*)?>([\s\S]*?)<\/blockquote>/gi, (_match: string, inner: string) => `<blockquote class="blog-md-quote">${inner}</blockquote>`);
  contentHtml = contentHtml.replace(/<hr(?:\s+[^>]*)?>/gi, () => `<hr class="blog-md-hr" />`);
  contentHtml = contentHtml.replace(/(?<!<pre\b[^>]*>)<code(?:\s+[^>]*)?>([\s\S]*?)<\/code>/gi, (_match: string, inner: string) => `<code class="blog-md-inline-code">${inner}</code>`);
  contentHtml = contentHtml.replace(/<a\s+([^>]*?)href=(?:"|')([^"']+)(?:"|')([^>]*)>([\s\S]*?)<\/a>/gi, (_match: string, before: string, href: string, after: string, text: string) => {
    const attrs = `${before} ${after}`.replace(/\s+class=(?:"|')[^"']*(?:"|')/i, "").trim();
    const safeAttrs = attrs ? ` ${attrs}` : "";
    return `<a href="${href}" class="blog-md-link"${safeAttrs}>${text}</a>`;
  });
  contentHtml = contentHtml.replace(/<table(?:\s+[^>]*)?>([\s\S]*?)<\/table>/gi, (_match: string, inner: string) => `<div class="blog-md-table-wrap"><table class="blog-md-table">${inner}</table></div>`);
  contentHtml = contentHtml.replace(/<th(?:\s+[^>]*)?>([\s\S]*?)<\/th>/gi, (_match: string, inner: string) => `<th class="blog-md-th">${inner}</th>`);
  contentHtml = contentHtml.replace(/<td(?:\s+[^>]*)?>([\s\S]*?)<\/td>/gi, (_match: string, inner: string) => `<td class="blog-md-td">${inner}</td>`);
  contentHtml = contentHtml.replace(/<img\s+([^>]*?)>/gi, (_match: string, inner: string) => `<img ${inner} class="blog-md-image">`);

  const allSlugs = getAllSlugs();
  const currentIndex = allSlugs.indexOf(slug);
  const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : undefined;
  const nextSlug = currentIndex >= 0 && currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : undefined;

  const title = typeof data.title === "string" ? data.title : slug.replace(/-/g, " ");
  const description = typeof data.description === "string" ? data.description : undefined;
  const date = typeof data.date === "string" ? formatDate(data.date) : "Draft";
  const tags = Array.isArray(data.tags) ? data.tags.map((tag: unknown) => String(tag)) : [];
  const readingTime = typeof data.readingTime === "string" ? data.readingTime : estimateReadingTime(content);
  const image = typeof data.image === "string" ? absoluteUrl(data.image) : absoluteUrl(DEFAULT_OG_IMAGE);

  return (
    <main>
      <style>{`
        #blog-root .blog-post-wrap {
          max-width: 880px;
          margin: 0 auto;
          padding: 30px 24px 0;
        }
        #blog-root .blog-post-kicker {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #175cd3;
          border: 1px solid #cfe1fa;
          border-radius: 999px;
          padding: 8px 12px;
          background: #fff;
          text-decoration: none;
        }
        #blog-root .blog-post-wrap h1 {
          margin-top: 18px;
          font-family: "Fraunces", "Iowan Old Style", serif;
          font-size: clamp(2rem, 4.6vw, 3.2rem);
          line-height: 1.08;
          letter-spacing: -0.02em;
        }
        #blog-root .blog-post-meta {
          margin-top: 16px;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          color: #667085;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.07em;
        }
        #blog-root .blog-post-desc {
          margin-top: 14px;
          font-size: 1.04rem;
          line-height: 1.8;
          color: #475467;
        }
        #blog-root .blog-tag-row {
          margin-top: 12px;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        #blog-root .blog-tag-row span {
          background: #f2f4f7;
          color: #344054;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 6px 10px;
          border-radius: 999px;
        }
        #blog-root .blog-article {
          margin-top: 26px;
          border-top: 1px solid #e4e7ec;
          padding-top: 24px;
          padding-bottom: 20px;
        }
        #blog-root .blog-md-p {
          margin: 18px 0;
          font-size: 1.03rem;
          line-height: 1.95;
          color: #1d2939;
        }
        #blog-root .blog-md-h1 {
          margin: 56px 0 16px;
          font-family: "Fraunces", "Iowan Old Style", serif;
          font-size: 2rem;
          line-height: 1.18;
        }
        #blog-root .blog-md-h2 {
          margin: 46px 0 14px;
          font-family: "Fraunces", "Iowan Old Style", serif;
          font-size: 1.7rem;
          line-height: 1.24;
        }
        #blog-root .blog-md-h3 {
          margin: 36px 0 10px;
          font-weight: 800;
          font-size: 1.28rem;
          line-height: 1.34;
        }
        #blog-root .blog-md-h4,
        #blog-root .blog-md-h5,
        #blog-root .blog-md-h6 {
          margin: 28px 0 8px;
          font-size: 1.08rem;
          font-weight: 800;
        }
        #blog-root .blog-md-ul {
          list-style: disc;
          padding-left: 24px;
          margin: 18px 0;
        }
        #blog-root .blog-md-ol {
          list-style: decimal;
          padding-left: 28px;
          margin: 18px 0;
        }
        #blog-root .blog-md-li {
          margin: 8px 0;
          line-height: 1.8;
          color: #344054;
        }
        #blog-root .blog-md-quote {
          margin: 22px 0;
          border-left: 3px solid #7cd4ff;
          background: #f5fbff;
          border-radius: 10px;
          padding: 14px 16px;
          color: #344054;
          font-style: italic;
        }
        #blog-root .blog-md-link {
          color: #0b6ba8;
          text-decoration: none;
          font-weight: 700;
        }
        #blog-root .blog-md-link:hover {
          text-decoration: underline;
        }
        #blog-root .blog-md-inline-code {
          background: #f2f4f7;
          color: #7a271a;
          border-radius: 6px;
          padding: 2px 6px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Courier New", monospace;
          font-size: 0.9em;
        }
        #blog-root .blog-code-wrap {
          margin: 24px 0;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid #d0d5dd;
        }
        #blog-root .blog-code-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #101828;
          padding: 8px 10px;
        }
        #blog-root .blog-code-lang {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #d1e9ff;
        }
        #blog-root .blog-copy-btn {
          border: 0;
          font-size: 11px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          border-radius: 8px;
          padding: 5px 10px;
          background: #d1e9ff;
          color: #0c2d6b;
          cursor: pointer;
        }
        #blog-root .blog-md-pre {
          margin: 0;
          background: #182230;
          color: #f8fafc;
          padding: 14px;
          overflow: auto;
        }
        #blog-root .blog-md-image {
          max-width: 100%;
          height: auto;
          border-radius: 12px;
          margin: 16px 0;
          border: 1px solid #e4e7ec;
        }
        #blog-root .blog-md-hr {
          border: 0;
          height: 1px;
          background: #e4e7ec;
          margin: 44px 0;
        }
        #blog-root .blog-md-table-wrap {
          overflow: auto;
          border: 1px solid #e4e7ec;
          border-radius: 12px;
          margin: 20px 0;
        }
        #blog-root .blog-md-table {
          border-collapse: collapse;
          min-width: 100%;
        }
        #blog-root .blog-md-th {
          background: #f9fafb;
          text-align: left;
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #475467;
          padding: 10px;
          border-bottom: 1px solid #e4e7ec;
        }
        #blog-root .blog-md-td {
          padding: 10px;
          border-bottom: 1px solid #f2f4f7;
          color: #344054;
          font-size: 14px;
        }
        #blog-root .blog-post-nav {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid #e4e7ec;
          display: flex;
          gap: 10px;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        #blog-root .blog-post-nav a {
          text-decoration: none;
          border: 1px solid #d0d5dd;
          background: #fff;
          color: #101828;
          border-radius: 10px;
          padding: 10px 14px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        @media (max-width: 700px) {
          #blog-root .blog-post-wrap {
            padding-left: 16px;
            padding-right: 16px;
          }
        }
      `}</style>

      <section className="blog-post-wrap">
        <Link href="/blog" className="blog-post-kicker">Back to blog</Link>
        <h1>{title}</h1>
        <div className="blog-post-meta">
          <span>{date}</span>
          <span>•</span>
          <span>{readingTime}</span>
          <span>•</span>
          <span>Subrata Kumar Das</span>
        </div>
        {description && <p className="blog-post-desc">{description}</p>}
        {tags.length > 0 && (
          <div className="blog-tag-row">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        )}

        <article className="blog-article">
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
          <CodeEnhancer />
        </article>

        <div className="blog-post-nav">
          {prevSlug ? <Link href={`/blog/${prevSlug}`}>Previous</Link> : <span />}
          {nextSlug ? <Link href={`/blog/${nextSlug}`}>Next</Link> : <span />}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            mainEntityOfPage: absoluteUrl(`/blog/${slug}`),
            headline: title,
            description,
            datePublished: typeof data.date === "string" ? data.date : undefined,
            dateModified: typeof data.updated === "string" ? data.updated : typeof data.date === "string" ? data.date : undefined,
            image,
            keywords: tags,
            author: {
              "@type": "Person",
              name: "Subrata Kumar Das",
              url: absoluteUrl("/"),
            },
            publisher: {
              "@type": "Organization",
              name: "Subrata Kumar Das",
              url: absoluteUrl("/"),
            },
          }),
        }}
      />
    </main>
  );
}
