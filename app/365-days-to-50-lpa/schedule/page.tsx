import type { Metadata } from "next";
import Link from "next/link";
import { schedule } from "../schedule-data";
import { daySlug, formatJourneyDate } from "../day-utils";
import ScheduleControls from "./ScheduleControls";
import { absoluteUrl, DEFAULT_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Day-by-Day Schedule — 365 Days to Senior Full-Stack AI Engineer",
  description: "The complete 52-week weekday learning and building schedule covering Python, FastAPI, Azure AI, RAG, agents, React, and production engineering.",
  alternates: { canonical: "/365-days-to-50-lpa/schedule" },
  openGraph: {
    title: "365-Day AI Engineer Roadmap — Complete Schedule",
    description: "A dated 52-week roadmap for Python, FastAPI, Azure AI, RAG, agents, React, and production engineering.",
    url: "/365-days-to-50-lpa/schedule",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function SchedulePage() {
  return (
    <main className="d365-subpage">
      <div className="d365-shell">
        <Link className="d365-back-link" href="/365-days-to-50-lpa">← Journey home</Link>
        <header className="d365-subpage-header">
          <p className="d365-kicker">14 Sep 2026 → 13 Sep 2027</p>
          <h1>The complete schedule.</h1>
          <p>Monday–Thursday are 90-minute learning sessions. Friday is a two-hour build session. Weekends are reserved for review, reflection, and sharing the evidence.</p>
        </header>

        <div className="d365-schedule-key" aria-label="Weekly rhythm">
          <span><strong>Mon–Thu</strong> Learn and practise</span>
          <span><strong>Friday</strong> Build and integrate</span>
          <span><strong>Weekend</strong> Review and publish</span>
        </div>

        <ScheduleControls />

        <div className="d365-schedule-list">
          {schedule.map((item) => {
            const firstDay = (item.week - 1) * 7 + 1;
            return (
            <article className="d365-week" id={`week-${item.week}`} key={item.week}>
              <div className="d365-week-heading">
                <span>Week {item.week}</span>
                <small>{item.days}</small>
              </div>
              <div className="d365-week-content">
                <div className="d365-week-days">
                  {[
                    ["Mon", item.monday], ["Tue", item.tuesday], ["Wed", item.wednesday],
                    ["Thu", item.thursday], ["Fri", item.friday],
                  ].map(([weekday, topic], index) => {
                    const day = firstDay + index;
                    return (
                    <Link aria-label={`Open Day ${day}: ${topic}`} href={`/365-days-to-50-lpa/${daySlug(day)}`} className={weekday === "Fri" ? "d365-day d365-day-build" : "d365-day"} key={weekday}>
                      <span>{weekday} · Day {day}</span><p>{topic}</p><small>{formatJourneyDate(day, true)} →</small>
                    </Link>
                    );
                  })}
                </div>
                <div className="d365-weekend-row">
                  <span>Weekend</span>
                  <strong>Days {firstDay + 5}–{firstDay + 6} · Review and publish</strong>
                  <div>
                    <Link href={`/365-days-to-50-lpa/${daySlug(firstDay + 5)}`}>Open Day {firstDay + 5}</Link>
                    <Link href={`/365-days-to-50-lpa/${daySlug(firstDay + 6)}`}>Open Day {firstDay + 6}</Link>
                  </div>
                </div>
              </div>
            </article>
            );
          })}
        </div>

        <Link href="/365-days-to-50-lpa/day-365" className="d365-final-day">
          <span className="d365-phase-number">365</span>
          <div><h2>Final retrospective</h2><p>Use 60–90 minutes to review the complete year: capabilities gained, products shipped, mistakes corrected, market response, and the next professional target.</p></div>
        </Link>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LearningResource",
            name: "365-Day Senior Full-Stack AI Engineer Roadmap",
            description: "A dated 52-week learning and building roadmap covering Python, FastAPI, Azure AI, RAG, agents, React, and production engineering.",
            url: absoluteUrl("/365-days-to-50-lpa/schedule"),
            timeRequired: "P365D",
            educationalUse: "Professional development",
            teaches: ["Production Python", "FastAPI", "PostgreSQL", "Azure AI", "RAG evaluation", "AI agents", "MCP", "React", "React Native", "on-device AI"],
          }).replace(/</g, "\\u003c"),
        }}
      />
    </main>
  );
}
