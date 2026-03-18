import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, absoluteUrl } from "@/lib/seo";

type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  readingTime: string;
};

const contentDirectory = path.join(process.cwd(), "content/blog");

export const metadata: Metadata = {
  title: "Blog | Subrata Kumar Das",
  description:
    "Modern engineering notes, product thinking, and practical build logs.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Subrata Kumar Das",
    description:
      "Modern engineering notes, product thinking, and practical build logs.",
    url: "/blog",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Subrata Kumar Das",
    description:
      "Modern engineering notes, product thinking, and practical build logs.",
    images: [DEFAULT_OG_IMAGE],
  },
};

function formatDate(rawDate: string) {
  const parsed = new Date(rawDate);
  if (Number.isNaN(parsed.getTime())) return rawDate;

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(parsed);
}

function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(contentDirectory)) return [];

  return fs
    .readdirSync(contentDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(".md", "");
      const filePath = path.join(contentDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);
      const title = typeof data.title === "string" ? data.title : slug.replace(/-/g, " ");
      const date = typeof data.date === "string" ? data.date : "";
      const description = typeof data.description === "string" ? data.description : "Read the full article.";
      const readingTime = typeof data.readingTime === "string" ? data.readingTime : `${Math.max(1, Math.ceil(content.split(/\s+/).filter(Boolean).length / 200))} min read`;
      const tags = Array.isArray(data.tags) ? data.tags.map((tag: unknown) => String(tag)) : [];

      return { slug, title, date, description, tags, readingTime };
    })
    .sort((a, b) => {
      const timeA = new Date(a.date).getTime();
      const timeB = new Date(b.date).getTime();
      return (Number.isNaN(timeB) ? 0 : timeB) - (Number.isNaN(timeA) ? 0 : timeA);
    });
}

export default function BlogPage() {
  const posts = getBlogPosts();
  const featured = posts[0];

  return (
    <main>
      <style>{`
        #blog-root .blog-page {
          width: 100%;
          padding: 36px clamp(16px, 4vw, 48px) 0;
        }
        #blog-root .blog-hero {
          border: 1px solid #d8dee7;
          background: linear-gradient(130deg, #ffffff 0%, #f1f8ff 52%, #fff4f5 100%);
          border-radius: 24px;
          padding: 42px 38px;
          box-shadow: 0 24px 70px rgba(16, 24, 40, 0.08);
        }
        #blog-root .blog-kicker {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #175cd3;
          background: #ffffff;
          border: 1px solid #dbe6f5;
          border-radius: 999px;
          padding: 8px 12px;
        }
        #blog-root .blog-page h1 {
          margin-top: 18px;
          font-family: "Fraunces", "Iowan Old Style", serif;
          font-size: clamp(2.1rem, 5vw, 3.8rem);
          line-height: 1.06;
          letter-spacing: -0.02em;
          color: #0f172a;
        }
        #blog-root .blog-hero p {
          margin-top: 16px;
          font-size: 1.06rem;
          line-height: 1.8;
          max-width: 760px;
          color: #475467;
        }
        #blog-root .blog-featured-link {
          display: inline-flex;
          margin-top: 20px;
          text-decoration: none;
          font-size: 12px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #b42318;
          background: #ffffff;
          border: 1px solid #fecdd6;
          border-radius: 999px;
          padding: 9px 14px;
        }
        #blog-root .blog-list {
          margin-top: 28px;
          display: grid;
          grid-template-columns: repeat(12, minmax(0, 1fr));
          gap: 14px;
        }
        #blog-root .blog-card {
          grid-column: span 4;
          text-decoration: none;
          color: inherit;
          border: 1px solid #d8dee7;
          border-radius: 18px;
          background: var(--blog-card);
          padding: 20px;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }
        #blog-root .blog-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 38px rgba(15, 23, 42, 0.1);
          border-color: #8ecffc;
        }
        #blog-root .blog-card-meta {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          color: #667085;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        #blog-root .blog-card-title {
          margin-top: 12px;
          font-family: "Fraunces", "Iowan Old Style", serif;
          font-size: clamp(1.35rem, 2.1vw, 1.7rem);
          line-height: 1.28;
          color: #101828;
        }
        #blog-root .blog-card-desc {
          margin-top: 10px;
          color: #475467;
          line-height: 1.7;
          font-size: 0.96rem;
        }
        #blog-root .blog-card-tags {
          margin-top: 14px;
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        #blog-root .blog-card-tags span {
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          background: #eef4ff;
          color: #194185;
          border-radius: 999px;
          padding: 6px 10px;
        }
        #blog-root .blog-empty {
          margin-top: 22px;
          border: 1px dashed #cfd8e3;
          border-radius: 16px;
          background: #fff;
          padding: 28px;
          color: #475467;
          font-size: 0.98rem;
          line-height: 1.7;
        }
        @media (max-width: 900px) {
          #blog-root .blog-card {
            grid-column: span 6;
          }
        }
        @media (max-width: 700px) {
          #blog-root .blog-card {
            grid-column: span 12;
          }
          #blog-root .blog-page {
            padding-left: 16px;
            padding-right: 16px;
          }
          #blog-root .blog-hero {
            padding: 28px 20px;
          }
        }
      `}</style>

      <section className="blog-page">
        <div className="blog-hero">
          <span className="blog-kicker">Fresh Notes</span>
          <h1>Build logs, architecture notes, and product decisions.</h1>
          <p>
            Every post is loaded from markdown in <code>content/blog</code>. Keep adding
            your <code>.md</code> files there and this section will render automatically.
          </p>
          {featured && (
            <Link href={`/blog/${featured.slug}`} className="blog-featured-link">
              Read latest: {featured.title}
            </Link>
          )}
        </div>

        {posts.length === 0 ? (
          <div className="blog-empty">
            No blog posts found yet. Add a markdown file to <code>content/blog</code> with
            frontmatter fields like <code>title</code>, <code>date</code>, and
            <code>description</code>.
          </div>
        ) : (
          <div className="blog-list">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                <div className="blog-card-meta">
                  {post.date ? <span>{formatDate(post.date)}</span> : <span>Draft</span>}
                  <span>•</span>
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="blog-card-title">{post.title}</h2>
                <p className="blog-card-desc">{post.description}</p>
                {post.tags.length > 0 && (
                  <div className="blog-card-tags">
                    {post.tags.slice(0, 4).map((tag) => (
                      <span key={`${post.slug}-${tag}`}>{tag}</span>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>
        )}
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Blog | Subrata Kumar Das",
            description: "Modern engineering notes, product thinking, and practical build logs.",
            url: absoluteUrl("/blog"),
            mainEntity: {
              "@type": "ItemList",
              itemListElement: posts.map((post, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: absoluteUrl(`/blog/${post.slug}`),
                name: post.title,
              })),
            },
          }),
        }}
      />
    </main>
  );
}
