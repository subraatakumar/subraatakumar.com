import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { absoluteUrl, DEFAULT_OG_IMAGE } from "@/lib/seo";
import StatsCounter from "./StatsCounter";
import TechStackConstellation from "./TechStackConstellation";
import PerspectiveGrid from "./PerspectiveGrid";
import { journeyProduct, schedulePhases } from "./schedule-data";

export const metadata: Metadata = {
  title: "365 Days — Senior Mobile Engineering with Full-Stack and Applied AI",
  description:
    "A public, AI-assisted transition from React Native engineering to Senior/Staff Mobile Engineer with full-stack, applied-AI, and Azure capabilities.",
  alternates: { canonical: "/365-days-to-50-lpa" },
  openGraph: {
    title: "365 Days to Senior/Staff Mobile + Full-Stack AI Engineering",
    description:
      "52 evidence-driven checkpoints combining React Native, TypeScript, Node.js, Python AI services, Azure, and human-governed coding agents.",
    url: "/365-days-to-50-lpa",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "365 Days to Senior/Staff Mobile + Full-Stack AI Engineering",
    description:
      "Building production mobile and full-stack AI systems in public—with dedicated agents, human approval, and secure Azure delivery.",
    images: [DEFAULT_OG_IMAGE],
  },
};

const principles = [
  {
    mark: "01",
    title: "AI-assisted, human-owned",
    text: "Dedicated agents help us plan, code, review, test, secure, document, and publish. We understand, verify, approve, and remain accountable.",
  },
  {
    mark: "02",
    title: "Evidence over claims",
    text: "Every phase produces working software, tests, architecture decisions, measured results, and an honest record of failures and corrections.",
  },
  {
    mark: "03",
    title: "Build locally, operate on Azure",
    text: "We develop locally with available tools, test local models where practical, and use bounded Azure deployments to learn identity, delivery, and operations.",
  },
  {
    mark: "04",
    title: "Learn visibly from Day 1",
    text: "We publish decisions and evidence throughout the year, compare our work with real openings, and improve how recruiters can evaluate it.",
  },
];

const phaseDescriptions = [
  "Workspace, one assistant, product brief, local-model trial, first mobile screen, and evidence workflow.",
  "Mobile-to-Node delivery, PostgreSQL, ownership, one background job, containers, and consolidation. GraphQL is optional.",
  "A small Python utility, stateless FastAPI service, summary evaluation, and human-reviewed mobile drafts.",
  "Budget, identity, a small deployment, one trace and alert, infrastructure, and recovery.",
  "Model evaluation, searchable entries, citations, access controls, and a measured RAG milestone.",
  "Draft workflows, bounded tools, local MCP, approval state, one preference, and agent evaluation.",
  "Streaming, optional on-device and attachment experiments, architecture review, performance, and recovery.",
  "Milestone review, verified case studies, focused interview mocks, and an application cycle.",
];
const phases = schedulePhases.map(([name, start, end], index) => [
  String(index + 1).padStart(2, "0"), name, `Weeks ${start}–${end} · ${phaseDescriptions[index]}`,
]);

const projects = [
  {
    title: "First mobile screen and evidence workflow",
    text: "A local journal screen, reviewed development loop, and evidence draft. This first milestone is a working foundation, with manual publication available.",
    period: "Weeks 1–4",
    release: "Planned · first proof loop",
    sequence: "Product brief → mobile entry → review → evidence draft",
    scheduleWeek: 4,
  },
  {
    title: "Connected mobile journal and AI drafts",
    text: "Mobile entries persist through Node and PostgreSQL. A bounded Python service prepares a summary that we can inspect, accept, or discard.",
    period: "Weeks 5–17",
    release: "Planned · service foundation",
    sequence: "React Native → Node.js → PostgreSQL → Python/FastAPI → tests",
    scheduleWeek: 17,
  },
  {
    title: "Evaluated RAG product",
    text: "A cited-answer feature with access checks, failure analysis, and measured quality. We try at most one retrieval improvement when justified; Azure deployment remains pending if deferred.",
    period: "Weeks 18–31",
    release: "Planned · measured AI milestone",
    sequence: "Local models → Azure AI → retrieval → evaluation → observability",
    scheduleWeek: 31,
  },
  {
    title: "Reviewed mobile and agent product",
    text: "The same companion gains bounded tools, approval controls, and operational evidence. We state which paths ran locally, were deployed for testing, or were actually operated in production.",
    period: "Weeks 32–48",
    release: "Planned · product case study",
    sequence: "Agents → MCP → mobile product → distributed systems → Azure operations",
    scheduleWeek: 48,
  },
];

const questions = [
  {
    question: "What is the 365 Days to ₹50 LPA journey?",
    answer: "It is our public, evidence-driven transition from React Native engineering toward Senior/Staff Mobile Engineer with full-stack and applied-AI capabilities. The compensation figure is a target, not a guarantee; the concrete outcome is stronger, reviewable engineering evidence.",
  },
  {
    question: "Can freshers follow this roadmap?",
    answer: "Yes, with additional foundation time. The calendar assumes JavaScript/TypeScript and mobile or frontend experience. We repeat prerequisite work when needed; this plan does not establish a salary expectation for freshers.",
  },
  {
    question: "Does the roadmap guarantee a particular salary?",
    answer: "No. Compensation depends on demonstrated skills, prior experience, location, the hiring company, role scope, and interview performance. The opening snapshots are market evidence, not a promise of an offer or salary.",
  },
  {
    question: "What will be learned during the 365 days?",
    answer: "We will combine React Native and TypeScript with Node.js, PostgreSQL, GraphQL, Python/FastAPI AI services, Azure, RAG, agents, MCP, evaluation, security, observability, distributed-system design, and production operations.",
  },
  {
    question: "How much time does the journey require?",
    answer: "We plan eight weekday hours: 90 minutes Monday–Thursday and two hours Friday. Saturday adds 45 minutes for evidence and Sunday adds 30 minutes for reflection: nine hours and 15 minutes total. Reading, agent interaction, checks, and notes are included. Unfinished core work changes future scope rather than expanding weekends.",
  },
  {
    question: "What portfolio projects will be built?",
    answer: "We plan four milestones in one evolving companion: a mobile entry and evidence workflow, a connected journal with AI summary drafts, cited retrieval, and a reviewed mobile agent product. Each milestone needs acceptance evidence before being marked complete.",
  },
  {
    question: "Can most of the AI work run locally?",
    answer: "Much of the development can run locally. Model suitability depends on available hardware and task quality; an existing hosted assistant is a fallback. Azure exercises may incur charges and need a budget. A deferred deployment stays labelled pending, even when its local equivalent works.",
  },
  {
    question: "Where can I follow each day’s work?",
    answer: "Every schedule entry opens a dated day page. We plan to publish each chapter one day before its scheduled session. Session results record actual work, tests, and corrections. Reading or publishing a chapter does not mark the exercise or milestone complete.",
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
              <p className="d365-hero-subtitle">Mobile · Full-Stack · Applied AI</p>
              <p className="d365-lede">
                Our evidence-driven transition from React Native engineering toward Senior/Staff Mobile Engineer with full-stack and applied-AI capabilities—using TypeScript, Node.js, Python, Azure, and human-governed agents.
              </p>
              <p className="d365-audience-note"><strong>Experienced mobile and frontend engineers can follow with us.</strong> Freshers may use the same path, but should expect a longer foundation phase and different initial outcomes.</p>
              <div className="d365-actions">
                <Link href="/365-days-to-50-lpa/schedule" className="d365-button">View the day-by-day schedule <span aria-hidden="true">→</span></Link>
                <a href="#proof" className="d365-button d365-button-secondary">How progress is measured</a>
                <Link href="/365-days-to-50-lpa/market-evidence" className="d365-button d365-button-secondary">View market evidence <span aria-hidden="true">→</span></Link>
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
                    <span className="d365-kicker">Planned journey window</span>
                    <p className="d365-launch-date">14 Sep 2026 – 13 Sep 2027</p>
                  </div>
                  <span className="d365-status">Roadmap</span>
                </div>
                <p className="d365-launch-note">Calendar dates show the plan. Completed work is recorded separately in reviewed session results and milestone reports.</p>
                <p className="d365-launch-note">Salary depends on demonstrated skills, experience, role fit, and interview performance. It is a target—not a guarantee.</p>
              </aside>
            </div>
          </div>
        </section>

        <div className="d365-shell d365-main">
          <section className="d365-stats" aria-label="Journey commitments">
            {[
              [365, "", "Calendar days"],
              [52, "", "Weekly checkpoints"],
              [4, "", "Planned milestones"],
              [8, "h", "Weekdays + 75 min weekends"],
            ].map(([value, suffix, label]) => (
              <div className="d365-stat" key={label}>
                <p className="d365-stat-value"><StatsCounter value={Number(value)} suffix={String(suffix)} /></p>
                <p className="d365-stat-label">{label}</p>
              </div>
            ))}
          </section>

          <section className="d365-section" aria-labelledby="product-brief-title">
            <div className="d365-section-heading">
              <div><p className="d365-kicker">Our working product · reviewed in Week 1</p><h2 id="product-brief-title">{journeyProduct.name}</h2></div>
              <p className="d365-section-intro">{journeyProduct.description}</p>
            </div>
            <div className="d365-schedule-principle"><p><strong>First usable slice:</strong> {journeyProduct.firstSlice}</p><p>{journeyProduct.boundary}</p></div>
          </section>

          <section className="d365-section d365-stack-section" aria-labelledby="stack-title">
            <div className="d365-section-heading">
              <div>
                <p className="d365-kicker">Core technology map</p>
                <h2 id="stack-title">One product. Two backend strengths.</h2>
              </div>
              <p className="d365-section-intro">React Native remains our product advantage. TypeScript and Node.js own the application backend; Python and FastAPI handle specialised AI workloads; Azure provides secure production operations.</p>
            </div>
            <TechStackConstellation />
          </section>

          <section className="d365-section" aria-labelledby="principles-title">
            <div className="d365-section-heading">
              <div>
                <p className="d365-kicker">The operating system</p>
                <h2 id="principles-title">Our transition operating system.</h2>
              </div>
              <p className="d365-section-intro">We use dedicated agents for meaningful work from Day 1, while retaining the understanding, approval, and accountability required of a senior engineer.</p>
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
                <h2 id="roadmap-title">Assist. Understand. Ship. Prove.</h2>
              </div>
              <p className="d365-section-intro">We build on mobile from Week 3 and connect the backend in Week 5. Thursdays include repair and rotating coding, design, review, or career practice. Every fourth week we reassess readiness. Senior roles are the primary target; Staff scope requires demonstrated influence and collaboration beyond a solo project.</p>
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
                <h2 id="projects-title">Four planned milestones.</h2>
              </div>
              <p className="d365-section-intro">Each milestone extends the same user workflow. We verify acceptance checks and label local, test-deployed, and production-operated evidence separately.</p>
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
                <p>From Day 1, weekly notes will separate what agents produced from what we understood and approved. They will show decisions, alternatives, tests, evaluations, failures, corrections, source code, demonstrations, and recruiter-facing case studies.</p>
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
                name: "365 Days to Senior/Staff Mobile Engineer with Full-Stack and Applied-AI Capabilities",
                description: "An AI-assisted, human-owned engineering journey through React Native, TypeScript, Node.js, Python AI services, Azure, RAG, agents, and production operations.",
                url: absoluteUrl("/365-days-to-50-lpa"),
                startDate: "2026-09-14",
                endDate: "2027-09-13",
                timeRequired: "P365D",
                author: { "@type": "Person", "@id": `${absoluteUrl("/")}#subrata-kumar-das`, name: "Subrata Kumar Das", url: absoluteUrl("/") },
                about: ["React Native", "TypeScript", "Node.js", "Python", "FastAPI", "Azure AI", "retrieval-augmented generation", "AI agents", "human-in-the-loop engineering"],
                hasPart: projects.map((project) => ({ "@type": "CreativeWork", name: `Planned milestone: ${project.title}`, description: project.text })),
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
