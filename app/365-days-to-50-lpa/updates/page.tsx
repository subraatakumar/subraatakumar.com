import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Weekly Evidence — Mobile, Full-Stack and Applied AI Journey",
  description: "Reviewed session results and milestone evidence from our 365-day mobile engineering journey. Planned chapters are separate from completed work.",
  alternates: { canonical: "/365-days-to-50-lpa/updates" },
};

export default function UpdatesPage() {
  return (
    <main className="d365-empty-page">
      <div className="d365-empty-card">
        <span className="d365-status">Evidence pending</span>
        <p className="d365-kicker">Weekly field notes</p>
        <h1>Our reviewed weekly evidence will appear here.</h1>
        <p>The first planned checkpoint is 19 September 2026. We will report workspace setup, the starting exercise, our companion’s product brief, and repository work actually completed. Available chapters explain the plan; they do not establish completed sessions or milestones.</p>
        <div className="d365-actions">
          <Link className="d365-button" href="/365-days-to-50-lpa/schedule">View the full schedule</Link>
          <Link className="d365-button d365-button-secondary" href="/365-days-to-50-lpa">Journey home</Link>
        </div>
      </div>
    </main>
  );
}
