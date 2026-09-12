import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Weekly Updates — 365 Days to Senior Full-Stack AI Engineer",
  description: "Weekly build notes and evidence from the 365-day senior full-stack AI engineering journey, beginning September 14, 2026.",
  alternates: { canonical: "/365-days-to-50-lpa/updates" },
};

export default function UpdatesPage() {
  return (
    <main className="d365-empty-page">
      <div className="d365-empty-card">
        <span className="d365-status"><span className="d365-status-dot" />Starts soon</span>
        <p className="d365-kicker">Weekly field notes</p>
        <h1>The first update arrives on 19 September 2026.</h1>
        <p>The journey begins on Monday, 14 September 2026. The first weekly note will cover Python syntax, typing, collections, control flow, functions, and the CLI build.</p>
        <div className="d365-actions">
          <Link className="d365-button" href="/365-days-to-50-lpa/schedule">View the full schedule</Link>
          <Link className="d365-button d365-button-secondary" href="/365-days-to-50-lpa">Journey home</Link>
        </div>
      </div>
    </main>
  );
}
