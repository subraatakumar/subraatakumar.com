import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";

type Post = {
  slug: string;
  title: string;
  date: string;
  description?: string;
  dayNumber: number;
};

const contentDirectory = path.join(process.cwd(), "content/180days");

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

  const totalDays = 180;
  const completedDays = posts.length;
  const progressPercent = Math.round((completedDays / totalDays) * 100);

  return (
    <>
      {/* ── Header ── */}
      <header className="d180-header">
        <div className="d180-header-inner">
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div className="d180-logo-badge">SK</div>
            <span className="d180-logo-label">180 Days</span>
          </div>
          <Link href="/projects" className="d180-back-btn">← Projects</Link>
        </div>
      </header>

      {/* ── Hero ── */}
      <div className="d180-hero">
        <div className="d180-hero-inner">
          <div className="d180-meta">
            <span className="d180-meta-label">Season 1</span>
            <span className="d180-meta-dot" />
            <span className="d180-meta-series">Building Offline Life Archive</span>
          </div>

          <h1>
            180 Days to<br />
            <span>Product thinking.</span>
          </h1>

          <p>
            A 180-day mentorship journey documenting the disciplined process
            of building a production-grade app in the AI era.
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
            <Link key={post.slug} href={`/180days/${post.slug}`} className="d180-entry">
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
    </>
  );
}
