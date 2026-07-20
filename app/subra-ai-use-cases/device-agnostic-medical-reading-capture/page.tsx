import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Cloud,
  EyeOff,
  Gauge,
  HeartPulse,
  ScanLine,
  ShieldCheck,
  Smartphone,
  WifiOff,
} from "lucide-react";
import { absoluteUrl } from "@/lib/seo";

const canonicalPath = "/subra-ai-use-cases/device-agnostic-medical-reading-capture";

export const metadata: Metadata = {
  title: "Medical-Device Reading Capture Architecture | Subra AI",
  description:
    "A founder-focused architecture case study and pilot plan for capturing patient-owned medical-device readings with local processing where supported and controlled cloud assistance.",
  keywords: [
    "on-device AI healthcare",
    "medical device reading capture",
    "hybrid AI architecture",
    "React Native healthcare app",
    "health data privacy",
    "Subra AI use case",
  ],
  alternates: { canonical: canonicalPath },
  openGraph: {
    title: "Medical-Device Reading Capture Architecture",
    description: "A proposed privacy-conscious architecture for capturing patient-owned medical-device readings with local processing where supported.",
    url: canonicalPath,
    type: "article",
    images: [{ url: "/subra-ai/use-cases/device-agnostic-medical-reading-capture/article-hero.png", width: 1672, height: 941, alt: "Concept illustration of a proposed smartphone workflow for capturing a blood pressure monitor reading" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medical-Device Reading Capture Architecture",
    description: "A founder-focused plan for turning visible medical-device readings into user-confirmed structured data without uploading source images by default.",
    images: ["/subra-ai/use-cases/device-agnostic-medical-reading-capture/article-hero.png"],
  },
};

const pilotEvaluationCategories = [
  { category: "Extraction quality", metrics: ["Field-level accuracy by measurement type", "Device-class success rate", "Unit-recognition accuracy", "Unsupported-device detection rate"] },
  { category: "User experience", metrics: ["Correction rate", "Recapture rate", "Time from camera opening to confirmed reading", "Abandonment rate during capture"] },
  { category: "Device performance", metrics: ["p50 and p95 inference latency", "Peak memory usage", "Battery impact", "Thermal behaviour", "Supported-device coverage"] },
  { category: "Privacy and data minimisation", metrics: ["Percentage of captures completed without transmitting the raw image", "Amount and type of data submitted to the backend", "Cloud-escalation frequency", "Raw-image retention rate, ideally zero by default"] },
  { category: "Operational quality", metrics: ["Crash-free capture sessions", "Model-unavailable fallback success", "Schema-validation failure rate", "Regression rate after model updates"] },
];

export default function MedicalReadingCaptureCaseStudy() {
  return (
    <>
      <style>{`
        .uc-article { overflow: hidden; }
        .uc-wrap { max-width: 1120px; margin: 0 auto; padding-inline: 28px; }
        .uc-hero { padding: 72px 0 68px; border-bottom: 1px solid var(--sa-line); }
        .uc-back { display: inline-flex; align-items: center; gap: 8px; color: var(--sa-muted); text-decoration: none; font-size: 13px; font-weight: 700; margin-bottom: 54px; }
        .uc-back:hover { color: var(--sa-text); }
        .uc-back:focus-visible, .uc-author-link:focus-visible, .uc-btn:focus-visible { outline: 2px solid var(--sa-cyan); outline-offset: 3px; }
        .uc-kicker { display: flex; align-items: center; gap: 10px; color: var(--sa-cyan); font-size: 12px; font-weight: 800; letter-spacing: .11em; text-transform: uppercase; }
        .uc-hero h1 { max-width: 980px; font-size: clamp(48px, 7vw, 82px); line-height: .99; letter-spacing: -.062em; margin: 20px 0 26px; }
        .uc-deck { max-width: 780px; color: #b2bdc9; font-size: 20px; line-height: 1.65; margin: 0; }
        .uc-hero-status { display: inline-flex; max-width: 100%; margin-top: 24px; padding: 9px 12px; border: 1px solid rgba(86,215,223,.22); border-radius: 9px; color: #a9bbc5; background: rgba(86,215,223,.04); font-size: 11px; font-weight: 700; line-height: 1.5; }
        .uc-meta { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 32px; }
        .uc-meta span { display: inline-flex; align-items: center; gap: 7px; padding: 8px 10px; border: 1px solid var(--sa-line); border-radius: 9px; color: #9ca8b6; font-size: 11px; font-weight: 700; }
        .uc-figure { margin: 38px 0 0; }
        .uc-figure img { display: block; width: 100%; height: auto; border: 1px solid var(--sa-line); border-radius: 22px; background: #05070a; }
        .uc-figure figcaption { display: flex; align-items: flex-start; gap: 9px; color: #7f8b99; font-size: 11px; line-height: 1.55; margin-top: 12px; }
        .uc-figure figcaption:before { content: ""; width: 6px; height: 6px; flex: 0 0 auto; margin-top: 5px; border-radius: 50%; background: var(--sa-lime); }
        .uc-hero-figure { margin-top: 42px; }
        .uc-section-figure { margin: 34px 0; }
        .uc-architecture-figure img { border-color: rgba(86,215,223,.22); }
        .uc-mobile-figure { max-width: 430px; margin: 0 auto; }
        .uc-lead-card { display: grid; grid-template-columns: 1.2fr .8fr; gap: 60px; margin-top: 58px; padding: 38px; border: 1px solid rgba(183,243,74,.22); border-radius: 24px; background: linear-gradient(135deg, rgba(183,243,74,.08), rgba(86,215,223,.035)); }
        .uc-lead-card blockquote { font-family: inherit; font-size: clamp(25px, 3vw, 36px); line-height: 1.25; letter-spacing: -.035em; margin: 0; }
        .uc-lead-card p { color: var(--sa-muted); font-size: 14px; line-height: 1.75; margin: 0; }
        .uc-status { padding: 68px 0; border-bottom: 1px solid var(--sa-line); background: linear-gradient(180deg, rgba(86,215,223,.025), transparent); }
        .uc-status-head { max-width: 720px; margin-bottom: 28px; }
        .uc-status-head h2 { font-size: clamp(30px, 4vw, 42px); line-height: 1.08; letter-spacing: -.04em; margin: 0; }
        .uc-status-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
        .uc-status-card { padding: 24px; border: 1px solid var(--sa-line); border-radius: 16px; background: rgba(255,255,255,.022); }
        .uc-status-card b { display: block; color: var(--sa-lime); font-size: 12px; letter-spacing: .04em; margin-bottom: 12px; }
        .uc-status-card p { color: #aeb9c5; font-size: 13px; line-height: 1.65; margin: 0; }
        .uc-status-note { margin: 16px 0 0; padding: 16px 18px; border-left: 2px solid rgba(86,215,223,.65); color: #919dab; background: rgba(86,215,223,.035); font-size: 12px; line-height: 1.65; }
        .uc-status-note strong { color: #c8d1da; }
        .uc-fit { padding: 62px 0; border-bottom: 1px solid var(--sa-line); }
        .uc-fit-grid { display: grid; grid-template-columns: .8fr 1.2fr; gap: 64px; align-items: start; }
        .uc-fit h2 { font-size: clamp(30px, 4vw, 42px); line-height: 1.08; letter-spacing: -.04em; margin: 0 0 18px; }
        .uc-fit-intro { color: #aeb9c5; font-size: 14px; line-height: 1.75; margin: 0; }
        .uc-fit-list { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px 22px; margin: 0; padding: 0; list-style: none; }
        .uc-fit-list li { position: relative; padding: 12px 12px 12px 25px; border-bottom: 1px solid var(--sa-line); color: #c2cbd4; font-size: 12px; line-height: 1.5; }
        .uc-fit-list li:before { content: ""; position: absolute; left: 4px; top: 19px; width: 6px; height: 6px; border-radius: 50%; background: var(--sa-lime); }
        .uc-fit-note { grid-column: 1 / -1; margin: 0; padding: 16px 18px; border-left: 2px solid rgba(86,215,223,.65); color: #919dab; background: rgba(86,215,223,.035); font-size: 12px; line-height: 1.65; }
        .uc-fit-note strong { color: #c8d1da; }
        .uc-section { padding: 92px 0; border-bottom: 1px solid var(--sa-line); }
        .uc-section-grid { display: grid; grid-template-columns: 280px minmax(0, 1fr); gap: 76px; }
        .uc-side-label { position: sticky; top: 104px; align-self: start; }
        .uc-number { color: var(--sa-lime); font-size: 11px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }
        .uc-side-label h2 { font-size: 27px; line-height: 1.15; letter-spacing: -.035em; margin: 12px 0 0; }
        .uc-copy { color: #b4beca; font-size: 16px; line-height: 1.82; }
        .uc-copy > p:first-child { margin-top: 0; }
        .uc-copy h3 { color: var(--sa-text); font-size: 26px; line-height: 1.2; letter-spacing: -.03em; margin: 42px 0 14px; }
        .uc-copy strong { color: #edf1f5; }
        .uc-pullquote { margin: 34px 0; padding: 24px 26px; border-left: 3px solid var(--sa-cyan); color: #e9eef3; background: rgba(86,215,223,.045); font-size: 20px; line-height: 1.5; }
        .uc-risk-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin-top: 28px; }
        .uc-risk { padding: 22px; border: 1px solid var(--sa-line); border-radius: 16px; background: rgba(255,255,255,.022); }
        .uc-risk svg { color: var(--sa-lime); } .uc-risk b { display: block; color: var(--sa-text); font-size: 14px; margin: 18px 0 7px; } .uc-risk span { display: block; color: var(--sa-muted); font-size: 12px; line-height: 1.6; }
        .uc-outcomes { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin-top: 28px; }
        .uc-outcome { padding: 22px; border: 1px solid var(--sa-line); border-radius: 16px; background: rgba(255,255,255,.022); }
        .uc-outcome b { display: block; color: var(--sa-text); font-size: 14px; line-height: 1.35; margin-bottom: 8px; }
        .uc-outcome p { color: var(--sa-muted); font-size: 12px; line-height: 1.65; margin: 0; }
        .uc-mobile { display: grid; grid-template-columns: .82fr 1.18fr; gap: 40px; align-items: center; margin-top: 34px; }
        .uc-journey { display: grid; gap: 13px; }
        .uc-journey-step { display: grid; grid-template-columns: 36px 1fr; gap: 14px; padding: 18px; border: 1px solid var(--sa-line); border-radius: 14px; background: rgba(255,255,255,.02); }
        .uc-journey-step > span { width: 32px; height: 32px; display: grid; place-items: center; border-radius: 9px; color: #0b0f12; background: var(--sa-lime); font-size: 11px; font-weight: 900; }
        .uc-journey-step b { display: block; color: var(--sa-text); font-size: 14px; margin-bottom: 6px; } .uc-journey-step p { font-size: 12px; line-height: 1.6; margin: 0; }
        .uc-failure-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-top: 28px; }
        .uc-failure { padding: 19px; border: 1px solid var(--sa-line); border-radius: 14px; background: rgba(255,255,255,.02); }
        .uc-failure b { display: block; color: var(--sa-text); font-size: 13px; margin-bottom: 7px; }
        .uc-failure p { color: var(--sa-muted); font-size: 11px; line-height: 1.6; margin: 0; }
        .uc-privacy-table { margin-top: 28px; border: 1px solid var(--sa-line); border-radius: 18px; overflow: hidden; }
        .uc-privacy-row { display: grid; grid-template-columns: .85fr 1fr 1.25fr; } .uc-privacy-row + .uc-privacy-row { border-top: 1px solid var(--sa-line); }
        .uc-privacy-row > div { padding: 17px; font-size: 12px; line-height: 1.55; } .uc-privacy-row > div + div { border-left: 1px solid var(--sa-line); }
        .uc-privacy-head { color: #8090a0; background: rgba(255,255,255,.025); font-size: 10px !important; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }
        .uc-privacy-row b { color: var(--sa-text); } .uc-privacy-row span { color: var(--sa-muted); }
        .uc-security-controls, .uc-governance { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-top: 26px; }
        .uc-security-control, .uc-governance-item { padding: 19px; border: 1px solid var(--sa-line); border-radius: 14px; background: rgba(255,255,255,.02); }
        .uc-security-control b, .uc-governance-item b { display: block; color: var(--sa-text); font-size: 13px; margin-bottom: 7px; }
        .uc-security-control p, .uc-governance-item p { color: var(--sa-muted); font-size: 11px; line-height: 1.6; margin: 0; }
        .uc-metrics { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin-top: 30px; }
        .uc-metric { padding: 22px; border: 1px solid var(--sa-line); border-radius: 15px; background: rgba(255,255,255,.02); }
        .uc-metric-top { display: flex; align-items: center; gap: 9px; color: var(--sa-text); font-size: 13px; font-weight: 800; } .uc-metric-top svg { flex: 0 0 auto; color: var(--sa-lime); }
        .uc-metric-list { display: grid; gap: 8px; margin: 16px 0 0; padding: 0; list-style: none; }
        .uc-metric-list li { position: relative; padding-left: 14px; color: var(--sa-muted); font-size: 11px; line-height: 1.55; }
        .uc-metric-list li:before { content: ""; position: absolute; left: 0; top: 7px; width: 4px; height: 4px; border-radius: 50%; background: var(--sa-cyan); }
        .uc-evaluation-note { margin: 18px 0 0; padding: 16px 18px; border-left: 2px solid rgba(86,215,223,.65); color: #919dab; background: rgba(86,215,223,.035); font-size: 12px; line-height: 1.65; }
        .uc-leadership { display: grid; gap: 14px; counter-reset: decision; margin-top: 28px; }
        .uc-decision { position: relative; padding: 24px 24px 24px 72px; border: 1px solid var(--sa-line); border-radius: 16px; background: rgba(255,255,255,.02); counter-increment: decision; }
        .uc-decision:before { content: "0" counter(decision); position: absolute; left: 23px; top: 25px; color: var(--sa-lime); font-size: 12px; font-weight: 900; }
        .uc-decision b { color: var(--sa-text); font-size: 15px; } .uc-decision p { font-size: 13px; line-height: 1.65; margin: 8px 0 0; }
        .uc-author { padding: 72px 0; border-bottom: 1px solid var(--sa-line); }
        .uc-author-card { display: grid; grid-template-columns: .65fr 1.35fr; gap: 58px; padding: 34px; border: 1px solid var(--sa-line); border-radius: 22px; background: rgba(255,255,255,.022); }
        .uc-author h2 { font-size: clamp(30px, 4vw, 42px); line-height: 1.08; letter-spacing: -.04em; margin: 0; }
        .uc-author-copy p { color: #aeb9c5; font-size: 14px; line-height: 1.75; margin: 0; }
        .uc-author-copy p + p { margin-top: 12px; }
        .uc-author-links { display: flex; flex-wrap: wrap; gap: 9px; margin-top: 22px; }
        .uc-author-link { display: inline-flex; align-items: center; gap: 6px; padding: 9px 11px; border: 1px solid var(--sa-line); border-radius: 9px; color: #b9c5d0; text-decoration: none; font-size: 11px; font-weight: 700; }
        .uc-author-link:hover { border-color: rgba(183,243,74,.32); color: var(--sa-lime); }
        .uc-cta { padding: 82px 0; }
        .uc-cta-card { display: flex; align-items: center; justify-content: space-between; gap: 42px; padding: 42px; border: 1px solid rgba(183,243,74,.22); border-radius: 24px; background: linear-gradient(135deg, rgba(183,243,74,.08), rgba(86,215,223,.04)); }
        .uc-cta-copy { max-width: 680px; }
        .uc-cta h2 { font-size: 34px; line-height: 1.15; letter-spacing: -.04em; margin: 0 0 12px; } .uc-cta p { color: var(--sa-muted); font-size: 14px; line-height: 1.7; margin: 0; }
        .uc-cta-actions { flex: 0 0 auto; display: flex; align-items: center; gap: 10px; }
        .uc-btn { flex-shrink: 0; display: inline-flex; align-items: center; gap: 8px; padding: 13px 17px; border-radius: 11px; color: #090c10; background: var(--sa-lime); text-decoration: none; font-size: 13px; font-weight: 800; }
        .uc-btn-secondary { color: #c1ccd6; background: transparent; border: 1px solid var(--sa-line); }
        .uc-btn-secondary:hover { color: var(--sa-cyan); border-color: rgba(86,215,223,.32); }
        @media (max-width: 860px) { .uc-status-grid, .uc-fit-grid, .uc-author-card { grid-template-columns: 1fr; } .uc-fit-grid, .uc-author-card { gap: 28px; } .uc-section-grid { grid-template-columns: 1fr; gap: 36px; } .uc-side-label { position: static; } .uc-lead-card, .uc-mobile { grid-template-columns: 1fr; gap: 30px; } .uc-privacy-row { grid-template-columns: 1fr; } .uc-privacy-row > div + div { border-left: 0; border-top: 1px solid var(--sa-line); } .uc-privacy-row:first-child { display: none; } .uc-cta-card { align-items: flex-start; flex-direction: column; } }
        @media (max-width: 600px) { .uc-wrap { padding-inline: 18px; } .uc-hero { padding-top: 44px; } .uc-back { margin-bottom: 38px; } .uc-deck { font-size: 17px; } .uc-lead-card { padding: 26px 22px; } .uc-status { padding: 54px 0; } .uc-status-card { padding: 21px; } .uc-fit { padding: 50px 0; } .uc-fit-list { grid-template-columns: 1fr; } .uc-section { padding: 70px 0; } .uc-risk-grid, .uc-outcomes, .uc-failure-grid, .uc-security-controls, .uc-governance, .uc-metrics { grid-template-columns: 1fr; } .uc-decision { padding-left: 58px; } .uc-cta-card { padding: 30px 24px; } .uc-cta-actions { width: 100%; align-items: stretch; flex-direction: column; } .uc-cta-actions .uc-btn { justify-content: center; } }
      `}</style>
      <article className="uc-article">
        <header className="uc-hero">
          <div className="uc-wrap">
            <Link className="uc-back" href="/subra-ai#use-cases"><ArrowLeft size={15} /> All business use cases</Link>
            <div className="uc-kicker"><HeartPulse size={16} /> Use case 01 · Healthcare</div>
            <h1 className="sa-display">Capture readings from patient-owned medical devices without uploading the source image by default.</h1>
            <p className="uc-deck">A privacy-conscious mobile architecture for remote-care and healthcare products, designed to turn visible device readings into user-confirmed structured data while reducing hardware-integration dependencies and keeping raw health imagery inside the phone whenever the selected device and model can support local processing.</p>
            <div className="uc-hero-status">Architecture case study · Cloud-assisted POC validated · Dedicated on-device workflow planned</div>
            <div className="uc-meta"><span><Smartphone size={13} /> Mobile-first</span><span><WifiOff size={13} /> Local processing where supported</span><span><ShieldCheck size={13} /> Privacy by architecture</span><span>8 min read</span></div>
            <figure className="uc-figure uc-hero-figure">
              <Image src="/subra-ai/use-cases/device-agnostic-medical-reading-capture/article-hero.png" alt="Concept illustration of a proposed smartphone workflow capturing a blood pressure monitor display" width={1672} height={941} priority sizes="(max-width: 1120px) 100vw, 1064px" />
              <figcaption>The intended architecture would understand the raw medical-device image inside the phone before any approved data crosses into a backend workflow.</figcaption>
            </figure>
            <div className="uc-lead-card">
              <blockquote className="sa-display">The product decision is not simply whether AI can read the screen. It is where that screen is allowed to be read.</blockquote>
              <p>For founders building in healthcare, architecture becomes part of the value proposition. The system must make capture easy for patients, integration predictable for engineering teams, and data boundaries clear enough for enterprise buyers to trust.</p>
            </div>
          </div>
        </header>

        <section className="uc-status" aria-labelledby="implementation-status-title">
          <div className="uc-wrap">
            <div className="uc-status-head"><h2 className="sa-display" id="implementation-status-title">Current implementation status</h2></div>
            <div className="uc-status-grid">
              <div className="uc-status-card"><b>Available today</b><p>Subra AI currently supports private on-device chat and general image inference. Images can be analysed without making a cloud AI service the default processing path.</p></div>
              <div className="uc-status-card"><b>Validated separately</b><p>A cloud-assisted proof of concept has successfully extracted structured readings from medical-device displays using a React Native application, a controlled backend function, managed identity, and an AI agent.</p></div>
              <div className="uc-status-card"><b>Planned next</b><p>The dedicated medical-reading capture workflow—including device-display detection, field extraction, review and correction, structured JSON generation, and device-class benchmarking—is the next implementation task.</p></div>
            </div>
            <p className="uc-status-note"><strong>Important clarification:</strong> This article presents the intended privacy-conscious product architecture and pilot plan. It does not claim that the complete on-device medical-reading workflow is already available in the released application.</p>
            <p className="uc-status-note"><strong>What device-agnostic means:</strong> Device-agnostic describes the camera-based input approach, not guaranteed compatibility with every medical device. Accuracy must be progressively validated by device class, display technology, lighting condition, unit format, and supported mobile hardware.</p>
          </div>
        </section>

        <section className="uc-fit" aria-labelledby="best-suited-title">
          <div className="uc-wrap uc-fit-grid">
            <div>
              <h2 className="sa-display" id="best-suited-title">Best suited for</h2>
              <p className="uc-fit-intro">This architecture is best suited for remote patient monitoring, virtual-care, chronic-care, home-health, and healthcare data-capture products that need to accept readings from heterogeneous patient-owned devices without depending exclusively on Bluetooth integrations or uploading raw health images by default.</p>
            </div>
            <ul className="uc-fit-list">
              <li>Remote patient monitoring platforms</li>
              <li>Virtual clinics and chronic-care programmes</li>
              <li>Home-health and elderly-care applications</li>
              <li>Digital therapeutics and rehabilitation products</li>
              <li>Privacy-focused wellness and personal-health applications</li>
              <li>Healthcare platforms that must support mixed or older device fleets</li>
            </ul>
            <p className="uc-fit-note"><strong>Not intended as:</strong> This is not a replacement for clinically certified device integrations where direct, validated connectivity is required. It is an additional capture path that must be validated for the intended device classes, users, and clinical workflow.</p>
          </div>
        </section>

        <section className="uc-section">
          <div className="uc-wrap uc-section-grid">
            <aside className="uc-side-label"><div className="uc-number">01 · The business problem</div><h2 className="sa-display">Interoperability has a hidden privacy cost</h2></aside>
            <div className="uc-copy">
              <p>Healthcare apps want a complete view of the patient: wearable activity, medical records, home-device readings, notes, and AI-generated guidance. Each new connection can make the experience more seamless. It can also move sensitive data across another vendor, storage layer, retention policy, and regulatory boundary.</p>
              <div className="uc-pullquote sa-display">More integration can mean less protection—even when every individual connection is encrypted.</div>
              <figure className="uc-figure uc-section-figure">
                <Image src="/subra-ai/use-cases/device-agnostic-medical-reading-capture/integration-and-privacy-problem.png" alt="A healthcare app connected to wearables, medical devices, hospitals, AI services, and many external data systems, illustrating an expanding privacy boundary" width={1536} height={1024} sizes="(max-width: 860px) 100vw, 708px" />
                <figcaption>Every integration can improve product continuity while adding another processor, retention policy, and potential regulatory boundary.</figcaption>
              </figure>
              <p><strong>“Encrypted in transit” is a transport control, not a complete privacy strategy.</strong> A founder still needs answers to harder questions: Did the image need to leave the phone? Is the raw image retained? Can a processor use it for model improvement? What happens when consent changes? Which party owns deletion?</p>
              <h3 className="sa-display">The customer problem is simpler</h3>
              <p>A patient already owns a working device. A camera-based input path can reduce dependence on a particular Bluetooth model, a new account, or a manual multi-field form. The business opportunity is to broaden useful coverage progressively—without treating every camera frame as cloud data or assuming every device is already supported.</p>
              <div className="uc-risk-grid">
                <div className="uc-risk"><Cloud size={20} /><b>Cloud-first capture</b><span>Easy to centralize, but raw health imagery crosses the device boundary by default.</span></div>
                <div className="uc-risk"><EyeOff size={20} /><b>Manual entry</b><span>Private, but slow and vulnerable to skipped fields, unit errors, and abandonment.</span></div>
                <div className="uc-risk"><HeartPulse size={20} /><b>Vendor integrations</b><span>High fidelity, but coverage depends on device partnerships and patient hardware.</span></div>
                <div className="uc-risk"><ScanLine size={20} /><b>On-device vision</b><span>Potential coverage beyond direct integrations, subject to validation for each supported device class and mobile target.</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="uc-section">
          <div className="uc-wrap uc-section-grid">
            <aside className="uc-side-label"><div className="uc-number">02 · Business case</div><h2 className="sa-display">What this could change for the business</h2></aside>
            <div className="uc-copy">
              <p>For a founder, healthcare product leader, or CTO, the investment case is broader than model capability. A carefully validated capture workflow could expand product coverage while preserving direct integrations where they remain the better choice.</p>
              <div className="uc-outcomes">
                <div className="uc-outcome"><b>Support existing patient-owned devices</b><p>Patients could capture readings from devices they already own instead of every user needing to purchase newly integrated hardware.</p></div>
                <div className="uc-outcome"><b>Reduce dependence on vendor-specific integrations</b><p>A camera-based workflow can extend coverage to devices without Bluetooth, SDK, or API access, while direct integrations can remain available where they provide better reliability.</p></div>
                <div className="uc-outcome"><b>Reduce manual-entry friction</b><p>Guided capture and user confirmation may reduce typing effort, unit-selection mistakes, and incorrectly transcribed values.</p></div>
                <div className="uc-outcome"><b>Extend remote monitoring</b><p>Healthcare and home-care platforms may support more patients, including people using older or lower-cost devices.</p></div>
                <div className="uc-outcome"><b>Minimise raw-image handling</b><p>Where local processing is supported, the system could submit reviewed structured measurements instead of storing or transmitting the original health-related image.</p></div>
                <div className="uc-outcome"><b>Create privacy-led differentiation</b><p>A visible “processed on device” or “raw image not uploaded” promise may improve user trust and strengthen enterprise conversations when the implementation consistently honours it.</p></div>
                <div className="uc-outcome"><b>Introduce a reusable capture capability</b><p>The pattern could be progressively evaluated for blood-pressure monitors, glucose meters, thermometers, pulse oximeters, weighing scales, and other display-based devices.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="uc-section">
          <div className="uc-wrap uc-section-grid">
            <aside className="uc-side-label"><div className="uc-number">03 · Architectural decision</div><h2 className="sa-display">Use hybrid inference, with the phone as the first trust boundary</h2></aside>
            <div className="uc-copy">
              <p>The intended architecture assigns work according to sensitivity and capability. <strong>Device-side processing would handle capture, device classification, value extraction, unit normalization, timestamp detection, confidence scoring, and optional redaction.</strong> The app would present the structured result for human confirmation before anything is submitted.</p>
              <figure className="uc-figure uc-section-figure uc-architecture-figure">
                <Image src="/subra-ai/use-cases/device-agnostic-medical-reading-capture/hybrid-inference-architecture.png" alt="Hybrid inference architecture showing medical device capture, on-device classification and extraction, user confirmation, minimal structured JSON, controlled backend submission, and optional consent-controlled cloud escalation" width={1693} height={929} sizes="(max-width: 860px) 100vw, 708px" />
                <figcaption>In the intended workflow, the raw image stops inside the smartphone trust boundary. Only approved structured data proceeds to controlled healthcare infrastructure.</figcaption>
              </figure>
              <h3 className="sa-display">React Native orchestrates the boundary—it does not hide it</h3>
              <p>In this design, React Native would coordinate camera state, wearable ingestion, consent, lifecycle, offline queues, error recovery, and the review UI. Native modules would own model execution and platform-specific resources. A typed boundary would return a versioned structured result to JavaScript, where runtime validation could reject malformed or unsupported payloads before persistence or backend submission.</p>
              <div className="uc-pullquote sa-display">Cross-platform should mean one product contract—not pretending native execution, consent, and network boundaries do not exist.</div>
              <p>Cloud-assisted inference and services may remain valuable for longitudinal analysis, clinician collaboration, advanced reasoning, and workflows that require shared state. In the proposed hybrid architecture, the backend should receive only the minimum user-confirmed fields needed for that job—not the source image simply because uploading is convenient.</p>
            </div>
          </div>
        </section>

        <section className="uc-section">
          <div className="uc-wrap uc-section-grid">
            <aside className="uc-side-label"><div className="uc-number">04 · Proposed mobile experience</div><h2 className="sa-display">Make privacy feel like speed, not friction</h2></aside>
            <div className="uc-copy">
              <p>The planned mobile flow is intentionally short. The user would scan the display, see what the model understood, review and correct every extracted field, and approve the submission. On-device processing is intended to produce the first useful result without waiting for an upload or a stable connection.</p>
              <div className="uc-mobile">
                <figure className="uc-figure uc-mobile-figure">
                  <Image src="/subra-ai/use-cases/device-agnostic-medical-reading-capture/working-mobile-experience.png" alt="Four proposed mobile screens showing capture, local extraction, reading review, and confirmation before backend submission" width={864} height={1821} sizes="(max-width: 860px) 90vw, 370px" />
                  <figcaption>The proposed experience keeps the user in control from camera capture through final submission.</figcaption>
                </figure>
                <div className="uc-journey">
                  <div className="uc-journey-step"><span>1</span><div><b>Frame the device</b><p>Visual guidance helps the user align glare-prone LCD and LED displays.</p></div></div>
                  <div className="uc-journey-step"><span>2</span><div><b>Understand locally</b><p>The supported local extraction pipeline would identify device category, readings, units, and any visible measurement time.</p></div></div>
                  <div className="uc-journey-step"><span>3</span><div><b>Review every field</b><p>Low-confidence or inconsistent fields require recapture or explicit confirmation instead of silent acceptance.</p></div></div>
                  <div className="uc-journey-step"><span>4</span><div><b>Submit intentionally</b><p>Only the user-confirmed structured payload would enter the app&apos;s controlled backend workflow.</p></div></div>
                </div>
              </div>
              <p>If a measurement time is visible, the planned workflow would extract it and label the source as <strong>device_display</strong>. Otherwise, it would use capture time and record <strong>capture_time</strong>. That provenance would prevent a convenient fallback from masquerading as an exact clinical timestamp.</p>
            </div>
          </div>
        </section>

        <section className="uc-section">
          <div className="uc-wrap uc-section-grid">
            <aside className="uc-side-label"><div className="uc-number">05 · Extraction safety</div><h2 className="sa-display">Extraction confidence is not clinical validity</h2></aside>
            <div className="uc-copy">
              <p>A confidence score represents how certain the extraction system is that it correctly interpreted the visible display. It does not establish whether the medical device itself is accurate, or whether a measurement is clinically normal, safe, or appropriate. Those are separate questions outside the extraction layer.</p>
              <div className="uc-pullquote sa-display">Validate the format and provenance of the reading. Do not reinterpret a clinically unusual value without explicit user confirmation.</div>
              <p>The system should preserve what it can actually see rather than silently changing a medically unusual value because it appears statistically unlikely. Every extracted field must remain reviewable and correctable before submission. Format validation and clinical interpretation must remain separate concerns.</p>
              <div className="uc-failure-grid">
                <div className="uc-failure"><b>Partially hidden display</b><p>Mark obscured fields as incomplete and require recapture or explicit field-level confirmation.</p></div>
                <div className="uc-failure"><b>Glare or blur</b><p>Do not infer through an unreadable region; ask for a clearer capture before submission.</p></div>
                <div className="uc-failure"><b>Ambiguous units</b><p>Present the possible unit as unresolved and require the user to confirm it or recapture the display.</p></div>
                <div className="uc-failure"><b>Possibly swapped systolic and diastolic fields</b><p>Flag the structural inconsistency for review; never silently swap the extracted values.</p></div>
                <div className="uc-failure"><b>Unsupported device layout</b><p>State that the layout is unsupported and offer recapture, manual entry, or a validated direct-integration path.</p></div>
                <div className="uc-failure"><b>Reading outside an expected range</b><p>Show the extracted value unchanged, label it for explicit confirmation, and do not reject or “correct” it solely for being unusual.</p></div>
                <div className="uc-failure"><b>Missing measurement time</b><p>Record capture time with clear provenance rather than inventing a device-displayed timestamp.</p></div>
                <div className="uc-failure"><b>Labels and values disagree</b><p>Flag the conflict and require recapture or explicit confirmation of the affected fields.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="uc-section">
          <div className="uc-wrap uc-section-grid">
            <aside className="uc-side-label"><div className="uc-number">06 · Security &amp; privacy</div><h2 className="sa-display">Minimize data before trying to protect it</h2></aside>
            <div className="uc-copy">
              <p>Encryption is required, but minimization is the stronger starting point. If raw camera imagery is not necessary outside the device, the safest retention period is zero and the safest third-party permission is none.</p>
              <div className="uc-privacy-table">
                <div className="uc-privacy-row"><div className="uc-privacy-head">Data</div><div className="uc-privacy-head">Default location</div><div className="uc-privacy-head">Control</div></div>
                <div className="uc-privacy-row"><div><b>Camera frame</b></div><div><span>Volatile device memory</span></div><div><span>Process locally; do not persist or upload by default.</span></div></div>
                <div className="uc-privacy-row"><div><b>Extracted reading</b></div><div><span>Local review state</span></div><div><span>Schema and provenance checks, visible confidence flags, user correction and confirmation.</span></div></div>
                <div className="uc-privacy-row"><div><b>Approved payload</b></div><div><span>Controlled health backend</span></div><div><span>Purpose limitation, authenticated transport, retention and deletion policy.</span></div></div>
                <div className="uc-privacy-row"><div><b>Cloud escalation</b></div><div><span>Only when required</span></div><div><span>Explicit consent, minimal redacted context, vendor-use restrictions.</span></div></div>
              </div>
              <h3 className="sa-display">Threats worth designing for</h3>
              <p><strong>Prompt injection does not apply in the same way to every extraction pipeline.</strong> Constrained OCR followed by deterministic parsing does not interpret visible text as instructions, although it still needs robust parsing and input validation. When a multimodal generative model interprets an image, however, every visible word must be treated as untrusted input. Text in the image must never override system instructions, the extraction schema, allowed fields, or permitted backend actions.</p>
              <p>Other risks include screen captures in logs, analytics events containing health values, model files replaced at runtime, replayed submissions, stale consent, debug builds with broader storage, and unbounded offline queues. Schema validation reduces malformed-data risk but is only one control within a broader design that also needs signed model assets, least-privilege permissions, log redaction, protected local storage, authenticated requests, replay resistance, and testable deletion behaviour.</p>
              <div className="uc-security-controls">
                <div className="uc-security-control"><b>Constrain the result contract</b><p>Treat model output as untrusted data. Parse it into a strict, versioned schema and reject unknown fields.</p></div>
                <div className="uc-security-control"><b>Allow-list valid structures</b><p>Validate types, units, required fields, and allowed measurement categories against allow-listed measurement types and units.</p></div>
                <div className="uc-security-control"><b>Never execute image instructions</b><p>Do not execute instructions found in an image or allow extracted text to select tools, network requests, or backend actions.</p></div>
                <div className="uc-security-control"><b>Separate interpretation from action</b><p>Keep image interpretation isolated from backend command execution; a parsed reading is data, not authority to perform an operation.</p></div>
                <div className="uc-security-control"><b>Preserve review and provenance</b><p>Require user review before submission and record the extraction pipeline and schema version with the result.</p></div>
              </div>
              <div className="uc-pullquote sa-display">“Raw capture images are not uploaded by default” can become both a security decision and a commercial position.</div>
              <p>That position may reduce hesitation for patients and strengthen conversations with hospitals, insurers, and enterprise buyers—but only after the implemented extraction, telemetry, fallback, and support paths have been verified to honour it.</p>
            </div>
          </div>
        </section>

        <section className="uc-section">
          <div className="uc-wrap uc-section-grid">
            <aside className="uc-side-label"><div className="uc-number">07 · Model operations</div><h2 className="sa-display">Production governance for on-device models</h2></aside>
            <div className="uc-copy">
              <p>A production implementation may use a bundled model, a securely delivered model, deterministic vision or OCR components, or a constrained hybrid pipeline. The choice should depend on supported devices and measured reliability; remote model delivery is an operational option, not a default requirement.</p>
              <div className="uc-governance">
                <div className="uc-governance-item"><b>Version every result</b><p>Store the model or extraction-pipeline version and the schema version with every result. A model update must not silently change field meaning or units.</p></div>
                <div className="uc-governance-item"><b>Gate activation with evidence</b><p>Validate each candidate against the supported device matrix and defined memory, battery, latency, and thermal limits before activation.</p></div>
                <div className="uc-governance-item"><b>Stage rollout and preserve rollback</b><p>Roll out by app version, device capability, operating system, or user cohort, and retain a tested rollback path for regressions.</p></div>
                <div className="uc-governance-item"><b>Verify model assets</b><p>Use integrity and authenticity checks for downloaded assets before loading them. Delivery controls should match the sensitivity and risk of the workflow.</p></div>
                <div className="uc-governance-item"><b>Design an explicit fallback</b><p>When a local model is missing, incompatible, or unavailable, provide a clear fallback. Any cloud escalation must remain controlled, consent-aware, and visible to the user.</p></div>
                <div className="uc-governance-item"><b>Monitor operational quality</b><p>Track correction rate, recapture rate, unsupported-device rate, and low-confidence frequency by pipeline version and supported device class.</p></div>
                <div className="uc-governance-item"><b>Keep authorization outside the model</b><p>Model execution can propose structured data; it must remain separate from authorization to submit data or perform healthcare-backend actions.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="uc-section">
          <div className="uc-wrap uc-section-grid">
            <aside className="uc-side-label"><div className="uc-number">08 · Pilot evaluation</div><h2 className="sa-display">How I would evaluate the pilot</h2></aside>
            <div className="uc-copy">
              <p>These are proposed acceptance metrics, not measured production results. A founder-level scorecard should evaluate the complete workflow across a documented matrix of device classes, display technologies, lighting conditions, unit formats, operating systems, and target phones.</p>
              <div className="uc-metrics">
                {pilotEvaluationCategories.map(({ category, metrics }) => <div className="uc-metric" key={category}><div className="uc-metric-top"><Gauge size={16} />{category}</div><ul className="uc-metric-list">{metrics.map((metric) => <li key={metric}>{metric}</li>)}</ul></div>)}
              </div>
              <p className="uc-evaluation-note">No accuracy, latency, privacy, or cost result should be presented publicly until it has been measured against a documented device matrix and test protocol.</p>
            </div>
          </div>
        </section>

        <section className="uc-section">
          <div className="uc-wrap uc-section-grid">
            <aside className="uc-side-label"><div className="uc-number">09 · Leadership reasoning</div><h2 className="sa-display">Architecture is a sequence of business choices</h2></aside>
            <div className="uc-copy">
              <p>A leader&apos;s job is not to maximize local inference at any cost. It is to place each capability where customer value, privacy risk, reliability, operating cost, and team complexity balance correctly.</p>
              <div className="uc-leadership">
                <div className="uc-decision"><b>Start with the promise</b><p>If privacy is part of positioning, define the allowed data flows before selecting model or vendor.</p></div>
                <div className="uc-decision"><b>Make uncertainty visible</b><p>A review step creates user agency and supplies the correction signal needed to improve the system responsibly.</p></div>
                <div className="uc-decision"><b>Earn cloud escalation</b><p>Use it where shared context or advanced reasoning creates clear value, not as the default route for every frame.</p></div>
                <div className="uc-decision"><b>Version the contract</b><p>Extraction pipelines can change independently while mobile and backend teams rely on a stable, versioned schema.</p></div>
                <div className="uc-decision"><b>Sell the boundary</b><p>Privacy architecture can reduce enterprise risk, shorten security conversations, and differentiate the product.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="uc-author" aria-labelledby="about-architect-title">
          <div className="uc-wrap">
            <div className="uc-author-card">
              <h2 className="sa-display" id="about-architect-title">About the architect</h2>
              <div className="uc-author-copy">
                <p>Subrata Kumar Das is a mobile solutions architect and React Native engineering leader working across healthcare mobile products, legacy modernisation, native iOS and Android integrations, BLE-connected workflows, secure offline systems, and privacy-conscious AI experiences.</p>
                <p>His work focuses on turning difficult product boundaries—mobile, native code, connected devices, cloud services, and AI—into reliable production architecture.</p>
                <div className="uc-author-links">
                  <a className="uc-author-link" href="https://linkedin.com/in/subraatakumar" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowRight size={13} /></a>
                  <a className="uc-author-link" href="https://github.com/subraatakumar" target="_blank" rel="noopener noreferrer">GitHub <ArrowRight size={13} /></a>
                  <Link className="uc-author-link" href="/subra-ai">Subra AI <ArrowRight size={13} /></Link>
                  <Link className="uc-author-link" href="/">Portfolio <ArrowRight size={13} /></Link>
                  <Link className="uc-author-link" href="/blog/react-native-gemma">On-device AI architecture article <ArrowRight size={13} /></Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="uc-cta">
          <div className="uc-wrap"><div className="uc-cta-card"><div className="uc-cta-copy"><h2 className="sa-display">Building a healthcare, wearable, or privacy-sensitive mobile product?</h2><p>I help product teams decide where AI should run, define secure mobile and backend boundaries, integrate native device capabilities, and turn complex healthcare or connected-device workflows into production-ready React Native architecture.</p></div><div className="uc-cta-actions"><Link className="uc-btn" href="/contact">Discuss a mobile architecture or pilot <ArrowRight size={16} /></Link><Link className="uc-btn uc-btn-secondary" href="/subra-ai">Explore Subra AI <ArrowRight size={16} /></Link></div></div></div>
        </footer>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Capture readings from patient-owned medical devices without uploading the source image by default", description: "A founder-focused architecture case study and pilot plan for medical-device reading capture with local processing where supported and controlled cloud assistance.", url: absoluteUrl(canonicalPath), image: absoluteUrl("/subra-ai/use-cases/device-agnostic-medical-reading-capture/article-hero.png"), author: { "@type": "Person", name: "Subrata Kumar Das" }, publisher: { "@type": "Person", name: "Subrata Kumar Das" }, about: ["On-device AI", "Healthcare privacy", "React Native architecture", "Medical device reading capture"] }) }} />
    </>
  );
}
