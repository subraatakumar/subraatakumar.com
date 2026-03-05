import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";

type Post = {
  slug: string;
  title: string;
  date: string;
  description?: string;
  dayNumber: number;
};

const contentDirectory = path.join(process.cwd(), "content/180days");

export const metadata: Metadata = {
  title: "24-Weeks to AI-Native | Subrata Kumar Das",
  description:
    "Mapping the blueprint for the 2030 stack through 24 weeks of hands-on, autonomous agent and infrastructure builds. Follow along as I open-source the architectural trade-offs, failures, and breakthroughs of engineering in the AI era.",
  alternates: {
    canonical: "/24weeks",
  },
  openGraph: {
    title: "24-Weeks to AI-Native | Subrata Kumar Das",
    description:
      "Mapping the blueprint for the 2030 stack through 24 weeks of hands-on, autonomous agent and infrastructure builds. Follow along as I open-source the architectural trade-offs, failures, and breakthroughs of engineering in the AI era.",
    url: "/24weeks",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "24-Weeks to AI-Native | Subrata Kumar Das",
    description:
      "Mapping the blueprint for the 2030 stack through 24 weeks of hands-on, autonomous agent and infrastructure builds. Follow along as I open-source the architectural trade-offs, failures, and breakthroughs of engineering in the AI era.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function DaysIndex() {
  const filenames = fs
    .readdirSync(contentDirectory)
    .filter((file) => file.endsWith(".md"));

  const posts: Post[] = filenames.map((filename) => {
    const slug = filename.replace(".md", "");
    const filePath = path.join(contentDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    const dayNumber = Number(slug.replace("day-", "")) || 0;

    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? "",
      description: data.description ?? "",
      dayNumber,
    };
  });

  posts.sort((a, b) => a.dayNumber - b.dayNumber);

  const totalDays = 24 * 7; // 24 weeks
  const completedDays = posts.length;
  const progressPercent = Math.round((completedDays / totalDays) * 100);

  return (
    <>
      {/* ── Header ── */}
      <header className="d180-header">
        <div className="d180-header-inner">
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Link href="/" className="d180-logo-badge" aria-label="Go to main home page">SK</Link>
            <span className="d180-logo-label">24 Weeks</span>
          </div>
          <Link href="/products" className="d180-back-btn">← Products</Link>
        </div>
      </header>

      {/* ── Hero ── */}
      <div className="d180-hero">
        <div className="d180-hero-inner">
          <div className="d180-meta">
            <span className="d180-meta-label">Season 1</span>
            <span className="d180-meta-dot" />
            <span className="d180-meta-series">Mapping the blueprint for the 2030 stack</span>
          </div>

          <h1>
            24 Weeks <br />
            <span>to AI-Native</span>
          </h1>

          <p>
            Mapping the blueprint for the 2030 stack through 24 weeks of hands-on, autonomous agent and infrastructure builds. Follow along as I open-source the architectural trade-offs, failures, and breakthroughs of engineering in the AI era.
          </p>

          {/* Progress */}
          <div className="d180-progress-wrap">
            <div className="d180-progress-labels">
              <span>Progress</span>
              <span>{completedDays} / {totalDays} days</span>
            </div>
            <div className="d180-progress-track">
              <div className="d180-progress-fill" style={{ width: `${progressPercent}%` }} />
            </div>
            <p className="d180-progress-pct">{progressPercent}% complete</p>
          </div>
        </div>
      </div>

      {/* ── Main ── */}
      <main className="d180-main">

        {/* Stats */}
        <div className="d180-stats">
          {[
            { label: "Days Logged",     value: completedDays },
            { label: "Days Remaining",  value: totalDays - completedDays },
            { label: "Completion",      value: `${progressPercent}%` },
          ].map((s) => (
            <div key={s.label} className="d180-stat-card">
              <p className="d180-stat-num">{s.value}</p>
              <p className="d180-stat-lbl">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Entry list */}
        <div className="d180-entry-list">
          {posts.map((post) => (
            <Link key={post.slug} href={`/24weeks/${post.slug}`} className="d180-entry">
              <div className="d180-day-badge">{post.dayNumber}</div>

              <div className="d180-entry-body">
                <h2 className="d180-entry-title">{post.title}</h2>
                {post.description && (
                  <p className="d180-entry-desc">{post.description}</p>
                )}
              </div>

              <div className="d180-entry-meta">
                {post.date && <span className="d180-entry-date">{post.date}</span>}
                <span className="d180-entry-arrow">→</span>
              </div>
            </Link>
          ))}
        </div>

      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "24 Weeks to AI-Native | Subrata Kumar Das",
            description:
              "Mapping the blueprint for the 2030 stack through 24 weeks of hands-on, autonomous agent and infrastructure builds. Follow along as I open-source the architectural trade-offs, failures, and breakthroughs of engineering in the AI era.",
            url: "https://subraatakumar.com/24weeks",
            numberOfItems: posts.length,
            mainEntity: {
              "@type": "ItemList",
              itemListElement: posts.map((post, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: `https://subraatakumar.com/24weeks/${post.slug}`,
                name: post.title,
              })),
            },
          }),
        }}
      />
    </>
  );
}
