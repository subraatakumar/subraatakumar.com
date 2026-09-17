import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import matter from "gray-matter";
import { remark } from "remark";
import gfm from "remark-gfm";
import html from "remark-html";
import { absoluteUrl, DEFAULT_OG_IMAGE } from "@/lib/seo";
import { dayNumberFromSlug, daySlug, formatJourneyDate, getDayPlan, TOTAL_JOURNEY_DAYS } from "../day-utils";

type PageProps = { params: Promise<{ slug: string }> };
type Note = { data: Record<string, string>; html: string };

const contentDirectory = path.join(process.cwd(), "content/365-days-to-fullstack-ai-engineer");

async function readNote(slug: string): Promise<Note | null> {
  const filePath = path.join(contentDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const parsed = matter(fs.readFileSync(filePath, "utf8"));
  const rendered = await remark().use(gfm).use(html).process(parsed.content);
  return { data: parsed.data as Record<string, string>, html: rendered.toString() };
}

export function generateStaticParams() {
  return Array.from({ length: TOTAL_JOURNEY_DAYS }, (_, index) => ({ slug: daySlug(index + 1) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const day = dayNumberFromSlug(slug);
  if (!day) return {};
  const plan = getDayPlan(day)!;
  const note = await readNote(slug);
  const title = note?.data.title || `Day ${day}: ${plan.title}`;
  const description = note?.data.description || `Day ${day} of our transition toward Senior/Staff Mobile Engineering with full-stack and applied-AI capabilities, scheduled for ${formatJourneyDate(day)}.`;
  const canonical = `/365-days-to-fullstack-ai-engineer/${slug}`;

  return {
    title,
    description,
    robots: note ? { index: true, follow: true } : { index: false, follow: true },
    alternates: { canonical },
    openGraph: { title, description, url: canonical, type: "article", publishedTime: note?.data.date, images: [DEFAULT_OG_IMAGE] },
    twitter: { card: "summary_large_image", title, description, images: [DEFAULT_OG_IMAGE] },
  };
}

export default async function JourneyDayPage({ params }: PageProps) {
  const { slug } = await params;
  const day = dayNumberFromSlug(slug);
  if (!day) notFound();
  const plan = getDayPlan(day)!;
  const note = await readNote(slug);
  const title = note?.data.title || plan.title;
  const canonical = `/365-days-to-fullstack-ai-engineer/${slug}`;
  const structuredData = note ? {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: note.data.description || `Day ${day} of our 365-day mobile, full-stack, and applied-AI engineering journey.`,
    datePublished: note.data.date || undefined,
    dateModified: note.data.updated || note.data.date || undefined,
    mainEntityOfPage: absoluteUrl(canonical),
    url: absoluteUrl(canonical),
    author: { "@type": "Person", name: "Subrata Kumar Das", url: absoluteUrl("/") },
    isPartOf: { "@type": "CreativeWorkSeries", name: "365 Days to FullStack AI Engineer", url: absoluteUrl("/365-days-to-fullstack-ai-engineer") },
  } : null;

  return (
    <main className="d365-subpage d365-note-page">
      <article className="d365-note-shell">
        <nav className="d365-note-topnav" aria-label="Journey navigation">
          <Link className="d365-back-link" href="/365-days-to-fullstack-ai-engineer/schedule">← Complete schedule</Link>
          <Link className="d365-back-link" href="/365-days-to-fullstack-ai-engineer">Journey home</Link>
        </nav>

        <header className="d365-note-header">
          <div className="d365-note-heading">
            <div>
              <p className="d365-kicker">Day {day} · Week {plan.week}</p>
              <h1>{title}</h1>
              <p className="d365-note-date">Scheduled session · {formatJourneyDate(day)}</p>
              {note && <p className="d365-note-date">{note.data.kind === "session-result" ? "Session result — see recorded checks and limitations below." : "Chapter · Planned exercise. Publication does not indicate completed work."}</p>}
            </div>
            <Image
              className="d365-note-portrait"
              src="/images/instructor_image_pencil_transparent.png"
              alt="Subrata Kumar Das"
              width={1092}
              height={1379}
            />
          </div>
        </header>

        <section className="d365-note-content" aria-labelledby="session-plan-heading">
          <h2 id="session-plan-heading">Our planned session</h2>
          <p>{plan.topic}</p>
          {plan.scheduledWeek && <>
            <h3>Weekly outcome</h3>
            <p>{plan.scheduledWeek.outcome}</p>
            <h3>Readiness check</h3>
            <p>{plan.scheduledWeek.prerequisite}</p>
            {plan.weekdayIndex === 3 && <>
              <h3>Our 20-minute practice</h3>
              <p>{plan.scheduledWeek.practice}</p>
            </>}
            <h3>Human approval gate</h3>
            <p>{plan.scheduledWeek.humanGate}</p>
            <p><Link href={`/365-days-to-fullstack-ai-engineer/schedule#week-${plan.week}`}>View Week {plan.week}: agent roles, decisions, and evidence →</Link></p>
          </>}
        </section>

        {note ? (
          <div className="d365-note-content" dangerouslySetInnerHTML={{ __html: note.html }} />
        ) : (
          <section className="d365-note-coming-soon">
            <span className="d365-status"><i className="d365-status-dot" /> Chapter pending</span>
            <h2>This chapter has not been published yet.</h2>
            <p>We plan to publish each chapter one day before its scheduled session. Session results record work we actually performed and reviewed. Neither the calendar date nor publication alone marks this activity complete.</p>
            <p className="d365-note-file-hint">Expected file: <code>content/365-days-to-fullstack-ai-engineer/{slug}.md</code></p>
          </section>
        )}

        <nav className="d365-day-pagination" aria-label="Day navigation">
          {day > 1 ? <Link href={`/365-days-to-fullstack-ai-engineer/${daySlug(day - 1)}`}>← Day {day - 1}</Link> : <span />}
          {day < TOTAL_JOURNEY_DAYS ? <Link href={`/365-days-to-fullstack-ai-engineer/${daySlug(day + 1)}`}>Day {day + 1} →</Link> : <span />}
        </nav>
        {structuredData && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />}
      </article>
    </main>
  );
}
