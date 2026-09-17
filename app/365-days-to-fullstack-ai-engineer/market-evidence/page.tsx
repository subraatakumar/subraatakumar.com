import type { Metadata } from "next";
import Link from "next/link";
import EvidenceGallery from "./EvidenceGallery";

export const metadata: Metadata = {
  title: "AI Job Market Evidence — 365 Days to FullStack AI Engineer",
  description: "A dated archive of AI engineering job-opening screenshots used to calibrate the 365-day roadmap against real market demand.",
  alternates: { canonical: "/365-days-to-fullstack-ai-engineer/market-evidence" },
};

export default function MarketEvidencePage() {
  return (
    <main className="d365-subpage">
      <div className="d365-shell">
        <Link className="d365-back-link" href="/365-days-to-fullstack-ai-engineer">← Journey home</Link>

        <header className="d365-subpage-header">
          <p className="d365-kicker">Market evidence archive</p>
          <h1>Real openings. Preserved as evidence.</h1>
          <p>Job posts can disappear after a role is filled. This page will preserve dated screenshots of relevant openings so the roadmap can be compared with the skills employers are actually requesting.</p>
        </header>

        <section className="d365-evidence-summary" aria-label="How to read this evidence">
          <article><strong>Senior transition</strong><p>The ₹50 LPA goal is aimed at experienced engineers who can demonstrate senior-level scope and impact.</p></article>
          <article><strong>Fresher path</strong><p>Freshers can follow the roadmap too, with ₹10–15 LPA presented as a more realistic initial target.</p></article>
          <article><strong>No salary promise</strong><p>Actual compensation depends on skills, experience, company, location, role fit, and interview performance.</p></article>
        </section>

        <EvidenceGallery />

        <p className="d365-evidence-disclaimer"><strong>Important:</strong> These listings document market demand; they do not guarantee employment or compensation. Outcomes depend on the candidate’s demonstrated skills, experience, interview performance, and the employer’s hiring criteria.</p>

        <div className="d365-actions">
          <Link className="d365-button" href="/365-days-to-fullstack-ai-engineer/schedule">Explore the roadmap</Link>
          <Link className="d365-button d365-button-secondary" href="/365-days-to-fullstack-ai-engineer">Journey home</Link>
        </div>
      </div>
    </main>
  );
}
