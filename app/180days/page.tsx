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

  // Sort by day number ascending
  posts.sort((a, b) => a.dayNumber - b.dayNumber);

  const totalDays = 180;
  const completedDays = posts.length;
  const progressPercent = Math.round((completedDays / totalDays) * 100);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans">

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-amber-400 rounded-lg flex items-center justify-center text-slate-900 shadow-lg shadow-amber-400/20">
              <span className="font-black text-sm">SK</span>
            </div>
            <span className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">180 Days</span>
          </div>
          <Link
            href="/projects"
            className="text-xs font-black px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors uppercase tracking-tight"
          >
            ← Projects
          </Link>
        </div>
      </header>

      {/* Hero */}
      <div className="w-full border-b border-slate-200 dark:border-slate-800 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/60 dark:to-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-slate-950 dark:text-white leading-[1.0]">
            180 Days to<br />
            <span className="text-amber-400">Product thinking.</span>
          </h1>
          <div className="flex items-center gap-2 mb-5">
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Season 1</span>
            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600 inline-block" />
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-amber-500 dark:text-amber-400">Building Offline Life Archive</span>
          </div>
          <p className="mt-6 text-xl text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl">
            A 180-day mentorship journey documenting the disciplined process of building a production-grade app in the AI era.
          </p>

          {/* Progress bar */}
          <div className="mt-10 max-w-sm">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-black uppercase tracking-widest text-slate-400">Progress</span>
              <span className="text-xs font-black text-amber-600 dark:text-amber-400 tabular-nums">{completedDays} / {totalDays} days</span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
              <div
                className="bg-amber-400 h-full rounded-full transition-all duration-700"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <p className="mt-2 text-[11px] text-slate-400 font-medium">{progressPercent}% complete</p>
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-12">

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {[
            { label: "Days Logged", value: completedDays },
            { label: "Days Remaining", value: totalDays - completedDays },
            { label: "Completion", value: `${progressPercent}%` },
          ].map((stat) => (
            <div key={stat.label} className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5">
              <p className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white tabular-nums">{stat.value}</p>
              <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Entry list */}
        <div className="space-y-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/180days/${post.slug}`}
              className="group flex items-start gap-5 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-amber-400 dark:hover:border-amber-500 bg-white dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all duration-200"
            >
              {/* Day number badge */}
              <div className="shrink-0 w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:bg-amber-400 transition-colors duration-200 flex items-center justify-center">
                <span className="text-[11px] font-black uppercase tracking-tight text-slate-500 dark:text-slate-400 group-hover:text-slate-900 transition-colors">
                  {post.dayNumber}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h2 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors leading-snug truncate">
                  {post.title}
                </h2>
                {post.description && (
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed line-clamp-1">
                    {post.description}
                  </p>
                )}
              </div>

              {/* Date + arrow */}
              <div className="shrink-0 flex flex-col items-end gap-2 pt-0.5">
                {post.date && (
                  <span className="text-[11px] font-medium text-slate-400 tabular-nums">{post.date}</span>
                )}
                <span className="text-slate-300 dark:text-slate-600 group-hover:text-amber-400 transition-colors text-sm">→</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
