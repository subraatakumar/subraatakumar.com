import type { Metadata } from "next";
import Link from "next/link";
import { journeyProduct, schedule } from "../schedule-data";
import { daySlug, formatJourneyDate } from "../day-utils";
import ScheduleControls from "./ScheduleControls";
import { absoluteUrl, DEFAULT_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Day-by-Day Schedule — 365 Days to Senior/Staff Mobile + AI",
  description: "Our complete 52-week transition plan: agent-assisted delivery, TypeScript and Node.js, bounded Python AI services, Azure, reliable RAG, and a production React Native product.",
  alternates: { canonical: "/365-days-to-50-lpa/schedule" },
  openGraph: {
    title: "365-Day Senior/Staff Mobile + Applied AI Roadmap — Complete Schedule",
    description: "A dated, evidence-led transition plan spanning agent-assisted engineering, full-stack systems, applied AI, Azure, and React Native.",
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
          <p>We are extending experienced mobile engineering with full-stack and applied-AI capabilities. Senior roles are our primary target; Staff roles depend on demonstrated scope, influence, and collaboration. These are planned sessions: we revise future scope at checkpoints when work needs more time.</p>
        </header>

        <div className="d365-schedule-key" aria-label="Weekly rhythm">
          <span><strong>Mon–Wed · 90 min</strong> Read, build, verify, and record</span>
          <span><strong>Thursday · 90 min</strong> Repair, practise, and explain</span>
          <span><strong>Friday · 2 hours</strong> Integrate and ship evidence</span>
          <span><strong>Saturday · 45 min</strong> Curate and share</span>
          <span><strong>Sunday · 30 min</strong> Reflect and plan</span>
        </div>

        <aside className="d365-schedule-principle">
          <strong>Our rule for all 365 days</strong>
          <p>AI agents can plan, code, review, test, secure, document, and prepare evidence. We set the intent, inspect their work, approve consequential actions, and remain accountable for every result.</p>
          <p>Our weekly budget is eight weekday hours plus 75 minutes of weekend review and sharing. Reading, tool interaction, troubleshooting, and notes are included. Monday–Wednesday target 15 minutes of reading, 45 of implementation, 20 of verification, and 10 of decisions. Friday integrates existing work; weekends do not absorb an unfinished build.</p>
          <p>Thursday rotates coding practice, design explanation, review or mentoring, and role/evidence review. Every fourth week we reassess readiness. Peer feedback and targeted applications can begin at any checkpoint when our evidence supports them; Week 52 is a campaign review, not a requirement to wait.</p>
          <p>We start with JavaScript/TypeScript and basic React Native experience. If those foundations are new, we repeat prerequisite sessions and extend the calendar. Optional experiments yield to unresolved core checks.</p>
        </aside>

        <section className="d365-schedule-principle" aria-labelledby="schedule-product">
          <h2 id="schedule-product">Our working product: {journeyProduct.name}</h2>
          <p>{journeyProduct.description}</p>
          <p><strong>First acceptance check:</strong> {journeyProduct.firstSlice}</p>
          <p>{journeyProduct.boundary}</p>
          <p>A chapter explains planned work. A session result records what we actually ran and learned. A milestone is complete only when its linked acceptance evidence supports that status.</p>
        </section>

        <ScheduleControls />

        <div className="d365-schedule-list">
          {schedule.map((item) => {
            const firstDay = (item.week - 1) * 7 + 1;
            return (
            <article className="d365-week" id={`week-${item.week}`} key={item.week}>
              <div className="d365-week-heading">
                <h2>Week {item.week}</h2>
                <small>{item.days}</small>
                <em>{item.phase}</em>
              </div>
              <div className="d365-week-content">
                <div className="d365-week-brief">
                  <div><span>Weekly outcome</span><p>{item.outcome}</p></div>
                  <div><span>Readiness check</span><p>{item.prerequisite}</p></div>
                  <div><span>Agent team</span><p>{item.agents}</p></div>
                  <div><span>Human approval gate</span><p>{item.humanGate}</p></div>
                  <div><span>Decision we record</span><p>{item.decision}</p></div>
                  <div><span>Proof we produce</span><p>{item.evidence}</p></div>
                  <div><span>Thursday practice · 20 min</span><p>{item.practice}</p></div>
                </div>
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
                  <div className="d365-weekend-summary">
                    <strong>Sat · {item.saturday}</strong>
                    <small>Sun · {item.sunday}</small>
                  </div>
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
          <div><h2>Final retrospective</h2><p>We review the complete year: capabilities earned, products shipped, mistakes corrected, market response, and our next professional target. The compensation target remains aspirational and depends on role fit, evidence, interview performance, location, and the market.</p></div>
        </Link>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LearningResource",
            name: "365-Day Senior/Staff Mobile Engineer with Full-Stack and Applied-AI Capabilities Roadmap",
            description: "A dated 52-week, evidence-led professional transition using agent-assisted engineering with human accountability.",
            url: absoluteUrl("/365-days-to-50-lpa/schedule"),
            timeRequired: "P365D",
            educationalUse: "Professional development",
            teaches: ["AI-assisted software delivery", "TypeScript and Node.js", "Python and FastAPI", "PostgreSQL", "Azure", "RAG evaluation", "AI agents", "MCP", "React Native", "on-device AI", "system design", "production operations"],
          }).replace(/</g, "\\u003c"),
        }}
      />
    </main>
  );
}
