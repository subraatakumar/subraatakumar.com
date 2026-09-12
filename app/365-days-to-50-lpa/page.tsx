import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { absoluteUrl, DEFAULT_OG_IMAGE } from "@/lib/seo";
import StatsCounter from "./StatsCounter";
import TechStackConstellation from "./TechStackConstellation";
import PerspectiveGrid from "./PerspectiveGrid";

export const metadata: Metadata = {
  title: "365-Day AI Engineer Roadmap: Python, FastAPI, RAG & Agents",
  description:
    "A public, evidence-driven journey from mobile tech lead to senior full-stack AI engineer through Python, FastAPI, Azure AI, RAG, agents, and local AI.",
  alternates: { canonical: "/365-days-to-50-lpa" },
  openGraph: {
    title: "365 Days to Senior Full-Stack AI Engineer | Subrata Kumar Das",
    description:
      "52 weekly checkpoints, four production releases, and one transparent goal: build the evidence required for senior full-stack AI roles.",
    url: "/365-days-to-50-lpa",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "365 Days to Senior Full-Stack AI Engineer",
    description:
      "Building production AI systems in public—locally first, on Azure where the architecture needs it.",
    images: [DEFAULT_OG_IMAGE],
  },
};

const principles = [
  {
    mark: "01",
    title: "Evidence over certificates",
    text: "Every learning phase ends in working software, tests, architecture decisions, or measurable evaluation results.",
  },
  {
    mark: "02",
    title: "Local first, cloud when needed",
    text: "Use on-device and local models for privacy, speed, and cost—then Azure for scale, managed identity, search, and operations.",
  },
  {
    mark: "03",
    title: "Market-calibrated learning",
    text: "Review real openings throughout the year and adjust the plan when employers consistently ask for different evidence.",
  },
];

const phases = [
  ["01", "Python engineering", "Weeks 1–8 · Typed, tested, asynchronous and production-oriented Python."],
  ["02", "Backend systems", "Weeks 9–15 · FastAPI, PostgreSQL, auth, Redis, Docker and testing."],
  ["03", "Azure foundations", "Weeks 16–20 · Identity, deployment, observability and CI/CD."],
  ["04", "LLM applications", "Weeks 21–28 · Model APIs, embeddings, search, RAG and evaluation."],
  ["05", "Agents and MCP", "Weeks 29–35 · Tools, workflows, persistence and multi-agent patterns."],
  ["06", "Full-stack AI", "Weeks 36–44 · React, React Native, multimodal AI, safety and reliability."],
  ["07", "Production release", "Weeks 45–48 · Architecture, integration, evaluation and deployment."],
  ["08", "Market readiness", "Weeks 49–52 · System design, interviews, case studies and applications."],
];

const projects = [
  {
    title: "Production Python system",
    text: "A maintainable, typed and fully tested Python application that establishes backend engineering depth.",
    period: "Weeks 1–8",
    release: "Ships Day 54",
    sequence: "Python → typing → testing → async → architecture",
    scheduleWeek: 8,
  },
  {
    title: "Secure FastAPI service",
    text: "Database-backed APIs with authentication, async processing, containers, CI/CD and operational telemetry.",
    period: "Weeks 9–20",
    release: "Core ships Day 103",
    sequence: "FastAPI → PostgreSQL → auth → Docker → Azure",
    scheduleWeek: 15,
  },
  {
    title: "Evaluated RAG product",
    text: "Hybrid retrieval, citations, reranking, groundedness tests, failure analysis and observable quality metrics.",
    period: "Weeks 21–28",
    release: "Ships Day 194",
    sequence: "LLMs → embeddings → search → RAG → evaluation",
    scheduleWeek: 28,
  },
  {
    title: "Local-first agentic product",
    text: "A polished React or React Native experience combining on-device intelligence with secure Azure-backed capabilities.",
    period: "Weeks 29–48",
    release: "Ships Day 334",
    sequence: "Agents → MCP → mobile UI → safety → production",
    scheduleWeek: 48,
  },
];

const questions = [
  {
    question: "What is the 365 Days to ₹50 LPA journey?",
    answer: "It is a public, evidence-driven transition from mobile technical leadership to senior full-stack AI engineering. The compensation figure is a target, not a guarantee; the concrete outcome is stronger, reviewable engineering evidence.",
  },
  {
    question: "What will be learned during the 365 days?",
    answer: "The roadmap covers production Python, FastAPI, PostgreSQL, authentication, Docker, Azure, LLM APIs, embeddings, search, RAG evaluation, agents, MCP, React, React Native, on-device AI, observability, security, and system design.",
  },
  {
    question: "How much time does the journey require?",
    answer: "The plan uses 90-minute learning sessions from Monday to Thursday, a two-hour build session on Friday, and weekend review and publishing—for roughly eight to nine focused hours each week.",
  },
  {
    question: "What portfolio projects will be built?",
    answer: "Four increasingly deep releases are planned: a production Python system, a secure FastAPI service, an evaluated RAG product, and a local-first agentic product with a React or React Native experience.",
  },
  {
    question: "Can most of the AI work run locally?",
    answer: "Yes. The approach is local-first for privacy, speed, and cost. Azure is introduced where managed identity, search, deployment, scale, or production operations provide clear value.",
  },
  {
    question: "Where can I follow each day’s work?",
    answer: "Every schedule entry opens a dated day page. After a session, that page is populated from a handcrafted Markdown note containing what was learned, built, tested, and corrected.",
  },
];

export default function Days365Home() {
  return (
    <>
      <header className="d365-header">
        <div className="d365-header-inner">
          <Link href="/" className="d365-brand" aria-label="Go to Subrata Kumar Das home page">
            <span className="d365-logo-badge">SK</span>
            <span className="d365-logo-label">365 Days · Build in public</span>
          </Link>
          <nav className="d365-nav" aria-label="Journey navigation">
            <a href="#roadmap" className="d365-nav-link">Roadmap</a>
            <a href="#projects" className="d365-nav-link">Projects</a>
            <Link href="/365-days-to-50-lpa/schedule" className="d365-nav-link">Schedule</Link>
            <Link href="/365-days-to-50-lpa/updates" className="d365-nav-link">Updates ↗</Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="d365-hero">
          <PerspectiveGrid />
          <div className="d365-shell d365-hero-grid">
            <div>
              <p className="d365-eyebrow">14 Sep 2026 → 13 Sep 2027</p>
              <h1>
                365 days to<br />
                <span>₹50 LPA.</span>
              </h1>
              <p className="d365-lede">
                An evidence-driven transition from mobile tech lead to senior full-stack AI engineer—through Python, FastAPI, Azure AI, RAG, agents, React, and on-device AI.
              </p>
              <div className="d365-actions">
                <Link href="/365-days-to-50-lpa/schedule" className="d365-button">View the day-by-day schedule <span aria-hidden="true">→</span></Link>
                <a href="#proof" className="d365-button d365-button-secondary">How progress is measured</a>
              </div>
            </div>

            <div className="d365-hero-author">
              <figure className="d365-hero-portrait">
                <Image
                  src="/images/instructor_image_pencil_transparent.png"
                  alt="Subrata Kumar Das, creator of the 365-day engineering journey"
                  width={1092}
                  height={1379}
                  priority
                />
                <figcaption>Learning, building, and documenting in public.</figcaption>
              </figure>
              <aside className="d365-launch-card" aria-label="Journey status">
                <div className="d365-launch-row">
                  <div>
                    <span className="d365-kicker">Journey status</span>
                    <p className="d365-launch-date">Starts 14 Sep 2026</p>
                  </div>
                  <span className="d365-status"><span className="d365-status-dot" />Ready</span>
                </div>
                <div className="d365-progress-labels"><span>Day 0</span><span>365 days</span></div>
                <div className="d365-progress-track" aria-label="0 percent complete"><div className="d365-progress-fill" /></div>
                <p className="d365-launch-note">The compensation is a target, not a guarantee. The controllable outcome is stronger engineering evidence.</p>
              </aside>
            </div>
          </div>
        </section>

        <div className="d365-shell d365-main">
          <section className="d365-stats" aria-label="Journey commitments">
            {[
              [365, "", "Calendar days"],
              [52, "", "Weekly checkpoints"],
              [4, "", "Production releases"],
              [8, "–9h", "Focused each week"],
            ].map(([value, suffix, label]) => (
              <div className="d365-stat" key={label}>
                <p className="d365-stat-value"><StatsCounter value={Number(value)} suffix={String(suffix)} /></p>
                <p className="d365-stat-label">{label}</p>
              </div>
            ))}
          </section>

          <section className="d365-section d365-stack-section" aria-labelledby="stack-title">
            <div className="d365-section-heading">
              <div>
                <p className="d365-kicker">Core technology map</p>
                <h2 id="stack-title">One stack. End-to-end ownership.</h2>
              </div>
              <p className="d365-section-intro">The journey connects production Python and FastAPI services with PostgreSQL, Azure operations, containerized delivery, and React experiences.</p>
            </div>
            <TechStackConstellation />
          </section>

          <section className="d365-section" aria-labelledby="principles-title">
            <div className="d365-section-heading">
              <div>
                <p className="d365-kicker">The operating system</p>
                <h2 id="principles-title">Not another course checklist.</h2>
              </div>
              <p className="d365-section-intro">The goal is to become credible at designing, shipping, evaluating, and operating AI products—not simply to collect tool names.</p>
            </div>
            <div className="d365-principles">
              {principles.map((principle) => (
                <article className="d365-principle" key={principle.title}>
                  <span className="d365-principle-mark">{principle.mark}</span>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="d365-section" id="roadmap" aria-labelledby="roadmap-title">
            <div className="d365-section-heading">
              <div>
                <p className="d365-kicker">52-week roadmap</p>
                <h2 id="roadmap-title">Refresh. Build. Ship. Prove.</h2>
              </div>
              <p className="d365-section-intro">Each phase starts with targeted refreshers and quickly moves into production-oriented implementation.</p>
            </div>
            <div className="d365-phases">
              {phases.map(([number, title, text]) => (
                <article className="d365-phase" key={number}>
                  <span className="d365-phase-number">{number}</span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </section>

          <section className="d365-section" id="projects" aria-labelledby="projects-title">
            <div className="d365-section-heading">
              <div>
                <p className="d365-kicker">Portfolio evidence</p>
                <h2 id="projects-title">Four releases, increasing depth.</h2>
              </div>
              <p className="d365-section-intro">Every release must be usable, documented, tested, and explainable in an architecture or interview conversation.</p>
            </div>
            <div className="d365-projects">
              {projects.map((project, index) => (
                <article className="d365-project" key={project.title}>
                  <span className="d365-project-surface" aria-hidden="true" />
                  <div className="d365-project-meta">
                    <span>{project.period}</span>
                    <span>{project.release}</span>
                  </div>
                  <span className="d365-project-index" aria-hidden="true">0{index + 1}</span>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                  <p className="d365-project-sequence">{project.sequence}</p>
                  <Link className="d365-project-link" href={`/365-days-to-50-lpa/schedule#week-${project.scheduleWeek}`}>
                    View build plan <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <section className="d365-section" id="proof" aria-labelledby="proof-title">
            <div className="d365-proof">
              <div>
                <p className="d365-kicker">Definition of progress</p>
                <h2 id="proof-title">The proof will be public.</h2>
                <p>Weekly notes will show what was built, the decisions behind it, evaluation results, failures, corrections, source code, and working demonstrations. Market feedback will shape the roadmap throughout the year.</p>
              </div>
              <Link href="/365-days-to-50-lpa/updates" className="d365-button">Read weekly updates <span aria-hidden="true">→</span></Link>
            </div>
          </section>

          <section className="d365-section d365-faq" id="questions" aria-labelledby="questions-title">
            <div className="d365-section-heading">
              <div>
                <p className="d365-kicker">Common questions</p>
                <h2 id="questions-title">Direct answers about the journey.</h2>
              </div>
              <p className="d365-section-intro">The essential facts for anyone deciding whether to follow or attempt the roadmap.</p>
            </div>
            <div className="d365-faq-list">
              {questions.map((item, index) => (
                <details className="d365-faq-item" key={item.question} open={index === 0}>
                  <summary>{item.question}<span aria-hidden="true">+</span></summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "CreativeWorkSeries",
                "@id": `${absoluteUrl("/365-days-to-50-lpa")}#journey`,
                name: "365 Days to Senior Full-Stack AI Engineer",
                description: "An evidence-driven engineering journey through Python, FastAPI, Azure AI, RAG, agents, React, and on-device AI.",
                url: absoluteUrl("/365-days-to-50-lpa"),
                startDate: "2026-09-14",
                endDate: "2027-09-13",
                timeRequired: "P365D",
                author: { "@type": "Person", "@id": `${absoluteUrl("/")}#subrata-kumar-das`, name: "Subrata Kumar Das", url: absoluteUrl("/") },
                about: ["Python", "FastAPI", "Azure AI", "retrieval-augmented generation", "AI agents", "React", "on-device AI"],
                hasPart: projects.map((project) => ({ "@type": "SoftwareApplication", name: project.title, description: project.text })),
              },
              {
                "@type": "FAQPage",
                "@id": `${absoluteUrl("/365-days-to-50-lpa")}#questions`,
                mainEntity: questions.map((item) => ({
                  "@type": "Question",
                  name: item.question,
                  acceptedAnswer: { "@type": "Answer", text: item.answer },
                })),
              },
            ],
          }).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
