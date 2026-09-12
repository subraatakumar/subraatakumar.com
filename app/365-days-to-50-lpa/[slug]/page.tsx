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

const contentDirectory = path.join(process.cwd(), "content/365-days-to-50-lpa");

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
  const title = note?.data.title || `Day ${day}: ${plan.topic}`;
  const description = note?.data.description || `Day ${day} of the 365 Days to Senior Full-Stack AI Engineer journey, scheduled for ${formatJourneyDate(day)}.`;
  const canonical = `/365-days-to-50-lpa/${slug}`;

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
  const title = note?.data.title || plan.topic;
  const today = new Date();
  const isUpcoming = plan.date.getTime() > Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate());
  const canonical = `/365-days-to-50-lpa/${slug}`;
  const structuredData = note ? {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: note.data.description || `Day ${day} of the 365-day full-stack AI engineering journey.`,
    datePublished: note.data.date || plan.date.toISOString().slice(0, 10),
    dateModified: note.data.updated || note.data.date || plan.date.toISOString().slice(0, 10),
    mainEntityOfPage: absoluteUrl(canonical),
    url: absoluteUrl(canonical),
    author: { "@type": "Person", name: "Subrata Kumar Das", url: absoluteUrl("/") },
    isPartOf: { "@type": "CreativeWorkSeries", name: "365 Days to Senior Full-Stack AI Engineer", url: absoluteUrl("/365-days-to-50-lpa") },
  } : null;

  return (
    <main className="d365-subpage d365-note-page">
      <article className="d365-note-shell">
        <nav className="d365-note-topnav" aria-label="Journey navigation">
          <Link className="d365-back-link" href="/365-days-to-50-lpa/schedule">← Complete schedule</Link>
          <Link className="d365-back-link" href="/365-days-to-50-lpa">Journey home</Link>
        </nav>

        <header className="d365-note-header">
          <div className="d365-note-heading">
            <div>
              <p className="d365-kicker">Day {day} · Week {plan.week}</p>
              <h1>{title}</h1>
              <p className="d365-note-date">{formatJourneyDate(day)}</p>
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

        {note ? (
          <div className="d365-note-content" dangerouslySetInnerHTML={{ __html: note.html }} />
        ) : (
          <section className="d365-note-coming-soon">
            <span className="d365-status"><i className="d365-status-dot" /> {isUpcoming ? "Scheduled" : "Notes pending"}</span>
            <h2>{isUpcoming ? "This note is coming soon." : "The handcrafted notes will be added soon."}</h2>
            <p>{isUpcoming ? `It will be updated on ${formatJourneyDate(day)} after the day’s learning and building session.` : "This day has passed, but the notes have not been published yet."}</p>
            <p className="d365-note-file-hint">Expected file: <code>content/365-days-to-50-lpa/{slug}.md</code></p>
          </section>
        )}

        <nav className="d365-day-pagination" aria-label="Day navigation">
          {day > 1 ? <Link href={`/365-days-to-50-lpa/${daySlug(day - 1)}`}>← Day {day - 1}</Link> : <span />}
          {day < TOTAL_JOURNEY_DAYS ? <Link href={`/365-days-to-50-lpa/${daySlug(day + 1)}`}>Day {day + 1} →</Link> : <span />}
        </nav>
        {structuredData && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />}
      </article>
    </main>
  );
}
