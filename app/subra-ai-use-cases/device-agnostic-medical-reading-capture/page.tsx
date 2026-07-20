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
  title: "Device-Agnostic Medical Reading Capture | Subra AI Use Case",
  description:
    "A founder-focused case study for capturing readings from medical devices with private on-device AI, a hybrid inference architecture, and controlled cloud escalation.",
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
    title: "Device-Agnostic Medical Reading Capture",
    description: "A privacy-first on-device AI architecture for healthcare apps.",
    url: canonicalPath,
    type: "article",
    images: [{ url: "/subra-ai/use-cases/device-agnostic-medical-reading-capture/article-hero.png", width: 1672, height: 941, alt: "A person using a smartphone to capture a blood pressure monitor reading with on-device AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Device-Agnostic Medical Reading Capture",
    description: "How on-device AI turns medical-device screens into structured health data without defaulting to cloud processing.",
    images: ["/subra-ai/use-cases/device-agnostic-medical-reading-capture/article-hero.png"],
  },
};

const measurementGates = [
  { metric: "Device classification", target: "Measure per supported device class", reason: "A single average can hide weak performance on less common devices." },
  { metric: "Field-level accuracy", target: "Track value, unit, and timestamp separately", reason: "A correct number with the wrong unit is still an unsafe result." },
  { metric: "Time to structured result", target: "Report p50 and p95 on target hardware", reason: "The slowest supported phones shape the real user experience." },
  { metric: "Review and correction rate", target: "Measure edits before submission", reason: "Human correction is a product signal, not merely an AI failure." },
  { metric: "Cloud data reduction", target: "Compare bytes sent with image-upload baseline", reason: "Privacy architecture should create a visible, auditable reduction." },
  { metric: "Offline completion", target: "Track scans completed without network access", reason: "Offline reliability proves the boundary is architectural, not marketing." },
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
        .uc-kicker { display: flex; align-items: center; gap: 10px; color: var(--sa-cyan); font-size: 12px; font-weight: 800; letter-spacing: .11em; text-transform: uppercase; }
        .uc-hero h1 { max-width: 980px; font-size: clamp(48px, 7vw, 82px); line-height: .99; letter-spacing: -.062em; margin: 20px 0 26px; }
        .uc-deck { max-width: 780px; color: #b2bdc9; font-size: 20px; line-height: 1.65; margin: 0; }
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
        .uc-architecture { margin: 36px 0; padding: 26px; border: 1px solid var(--sa-line); border-radius: 22px; background: #090d13; }
        .uc-architecture-title { display: flex; align-items: center; justify-content: space-between; gap: 18px; margin-bottom: 24px; color: #81909f; font-size: 11px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }
        .uc-flow { display: grid; grid-template-columns: 1fr auto 1.25fr auto 1fr; gap: 12px; align-items: stretch; }
        .uc-node { padding: 20px; border: 1px solid var(--sa-line); border-radius: 14px; background: var(--sa-panel); }
        .uc-node-primary { border-color: rgba(183,243,74,.28); background: rgba(183,243,74,.055); }
        .uc-node svg { color: var(--sa-cyan); margin-bottom: 24px; } .uc-node-primary svg { color: var(--sa-lime); }
        .uc-node b { display: block; color: var(--sa-text); font-size: 13px; margin-bottom: 8px; } .uc-node span { display: block; color: var(--sa-muted); font-size: 11px; line-height: 1.55; }
        .uc-arrow { display: grid; place-items: center; color: #53606e; }
        .uc-boundary { margin-top: 14px; padding: 10px 13px; border: 1px dashed rgba(183,243,74,.28); border-radius: 10px; color: #9ead8c; font-size: 10px; text-align: center; }
        .uc-mobile { display: grid; grid-template-columns: .82fr 1.18fr; gap: 40px; align-items: center; margin-top: 34px; }
        .uc-phone { max-width: 310px; margin: 0 auto; padding: 12px; border: 1px solid rgba(255,255,255,.16); border-radius: 34px; background: linear-gradient(145deg, #202a36, #0e131a); box-shadow: 0 30px 70px rgba(0,0,0,.4); }
        .uc-phone-screen { min-height: 520px; display: flex; flex-direction: column; padding: 20px; border-radius: 24px; background: #0b1016; }
        .uc-phone-top { display: flex; align-items: center; justify-content: space-between; color: #aeb8c4; font-size: 10px; }
        .uc-viewfinder { flex: 1; display: grid; place-items: center; margin: 22px 0; border: 1px solid var(--sa-line); border-radius: 18px; background: radial-gradient(circle, rgba(86,215,223,.13), transparent 55%), #080c11; }
        .uc-monitor { width: 190px; padding: 20px; border-radius: 25px 25px 34px 34px; background: linear-gradient(150deg, #edf1ee, #aeb8b7); color: #1a242b; }
        .uc-monitor-display { padding: 14px; border: 6px solid #34434b; border-radius: 10px; background: #bcd4c2; font: 700 11px ui-monospace, SFMono-Regular, Menlo, monospace; }
        .uc-monitor-row { display: flex; align-items: baseline; justify-content: space-between; } .uc-monitor-row strong { font-size: 34px; letter-spacing: -.08em; }
        .uc-confirm { padding: 15px; border: 1px solid rgba(183,243,74,.25); border-radius: 13px; background: rgba(183,243,74,.07); }
        .uc-confirm b { display: block; color: #e4ecd8; font-size: 12px; margin-bottom: 5px; } .uc-confirm span { color: #93a188; font-size: 10px; }
        .uc-journey { display: grid; gap: 13px; }
        .uc-journey-step { display: grid; grid-template-columns: 36px 1fr; gap: 14px; padding: 18px; border: 1px solid var(--sa-line); border-radius: 14px; background: rgba(255,255,255,.02); }
        .uc-journey-step > span { width: 32px; height: 32px; display: grid; place-items: center; border-radius: 9px; color: #0b0f12; background: var(--sa-lime); font-size: 11px; font-weight: 900; }
        .uc-journey-step b { display: block; color: var(--sa-text); font-size: 14px; margin-bottom: 6px; } .uc-journey-step p { font-size: 12px; line-height: 1.6; margin: 0; }
        .uc-privacy-table { margin-top: 28px; border: 1px solid var(--sa-line); border-radius: 18px; overflow: hidden; }
        .uc-privacy-row { display: grid; grid-template-columns: .85fr 1fr 1.25fr; } .uc-privacy-row + .uc-privacy-row { border-top: 1px solid var(--sa-line); }
        .uc-privacy-row > div { padding: 17px; font-size: 12px; line-height: 1.55; } .uc-privacy-row > div + div { border-left: 1px solid var(--sa-line); }
        .uc-privacy-head { color: #8090a0; background: rgba(255,255,255,.025); font-size: 10px !important; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }
        .uc-privacy-row b { color: var(--sa-text); } .uc-privacy-row span { color: var(--sa-muted); }
        .uc-metrics { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin-top: 30px; }
        .uc-metric { padding: 22px; border: 1px solid var(--sa-line); border-radius: 15px; background: rgba(255,255,255,.02); }
        .uc-metric-top { display: flex; align-items: center; gap: 9px; color: var(--sa-text); font-size: 13px; font-weight: 800; } .uc-metric-top svg { color: var(--sa-lime); }
        .uc-metric-target { color: var(--sa-cyan); font-size: 11px; font-weight: 700; margin: 14px 0 7px; } .uc-metric p { color: var(--sa-muted); font-size: 11px; line-height: 1.55; margin: 0; }
        .uc-leadership { display: grid; gap: 14px; counter-reset: decision; margin-top: 28px; }
        .uc-decision { position: relative; padding: 24px 24px 24px 72px; border: 1px solid var(--sa-line); border-radius: 16px; background: rgba(255,255,255,.02); counter-increment: decision; }
        .uc-decision:before { content: "0" counter(decision); position: absolute; left: 23px; top: 25px; color: var(--sa-lime); font-size: 12px; font-weight: 900; }
        .uc-decision b { color: var(--sa-text); font-size: 15px; } .uc-decision p { font-size: 13px; line-height: 1.65; margin: 8px 0 0; }
        .uc-cta { padding: 82px 0; }
        .uc-cta-card { display: flex; align-items: center; justify-content: space-between; gap: 42px; padding: 42px; border: 1px solid rgba(183,243,74,.22); border-radius: 24px; background: linear-gradient(135deg, rgba(183,243,74,.08), rgba(86,215,223,.04)); }
        .uc-cta h2 { font-size: 34px; line-height: 1.15; letter-spacing: -.04em; margin: 0 0 10px; } .uc-cta p { color: var(--sa-muted); font-size: 14px; margin: 0; }
        .uc-btn { flex-shrink: 0; display: inline-flex; align-items: center; gap: 8px; padding: 13px 17px; border-radius: 11px; color: #090c10; background: var(--sa-lime); text-decoration: none; font-size: 13px; font-weight: 800; }
        @media (max-width: 860px) { .uc-section-grid { grid-template-columns: 1fr; gap: 36px; } .uc-side-label { position: static; } .uc-lead-card, .uc-mobile { grid-template-columns: 1fr; gap: 30px; } .uc-flow { grid-template-columns: 1fr; } .uc-arrow { transform: rotate(90deg); min-height: 25px; } .uc-privacy-row { grid-template-columns: 1fr; } .uc-privacy-row > div + div { border-left: 0; border-top: 1px solid var(--sa-line); } .uc-privacy-row:first-child { display: none; } }
        @media (max-width: 600px) { .uc-wrap { padding-inline: 18px; } .uc-hero { padding-top: 44px; } .uc-back { margin-bottom: 38px; } .uc-deck { font-size: 17px; } .uc-lead-card { padding: 26px 22px; } .uc-section { padding: 70px 0; } .uc-risk-grid, .uc-metrics { grid-template-columns: 1fr; } .uc-architecture { padding: 18px; } .uc-phone-screen { min-height: 470px; } .uc-decision { padding-left: 58px; } .uc-cta-card { align-items: flex-start; flex-direction: column; padding: 30px 24px; } }
      `}</style>
      <article className="uc-article">
        <header className="uc-hero">
          <div className="uc-wrap">
            <Link className="uc-back" href="/subra-ai#use-cases"><ArrowLeft size={15} /> All business use cases</Link>
            <div className="uc-kicker"><HeartPulse size={16} /> Use case 01 · Healthcare</div>
            <h1 className="sa-display">Capture any medical-device reading without making the cloud the default.</h1>
            <p className="uc-deck">A founder&apos;s architecture case study for turning blood pressure monitors, glucose meters, weighing scales, and other device screens into trusted structured data—while keeping sensitive images on the phone.</p>
            <div className="uc-meta"><span><Smartphone size={13} /> Mobile-first</span><span><WifiOff size={13} /> Offline-capable</span><span><ShieldCheck size={13} /> Privacy by architecture</span><span>8 min read</span></div>
            <figure className="uc-figure uc-hero-figure">
              <Image src="/subra-ai/use-cases/device-agnostic-medical-reading-capture/article-hero.png" alt="A person holding a smartphone beside a blood pressure monitor while on-device AI captures a reading of 118 over 76 with a pulse of 68" width={1672} height={941} priority sizes="(max-width: 1120px) 100vw, 1064px" />
              <figcaption>The raw medical-device image can be understood inside the phone before any approved data crosses into a backend workflow.</figcaption>
            </figure>
            <div className="uc-lead-card">
              <blockquote className="sa-display">The product decision is not simply whether AI can read the screen. It is where that screen is allowed to be read.</blockquote>
              <p>For founders building in healthcare, architecture becomes part of the value proposition. The system must make capture easy for patients, integration predictable for engineering teams, and data boundaries clear enough for enterprise buyers to trust.</p>
            </div>
          </div>
        </header>

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
              <p>A patient already owns a working device. They should not need a particular Bluetooth model, a new account, or a manual multi-field form. Pointing a camera at the display should be enough. The business opportunity is to make that input device-agnostic without turning every camera frame into cloud data.</p>
              <div className="uc-risk-grid">
                <div className="uc-risk"><Cloud size={20} /><b>Cloud-first capture</b><span>Easy to centralize, but raw health imagery crosses the device boundary by default.</span></div>
                <div className="uc-risk"><EyeOff size={20} /><b>Manual entry</b><span>Private, but slow and vulnerable to skipped fields, unit errors, and abandonment.</span></div>
                <div className="uc-risk"><HeartPulse size={20} /><b>Vendor integrations</b><span>High fidelity, but coverage depends on device partnerships and patient hardware.</span></div>
                <div className="uc-risk"><ScanLine size={20} /><b>On-device vision</b><span>Broad visual compatibility with a smaller data boundary and a reviewable result.</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="uc-section">
          <div className="uc-wrap uc-section-grid">
            <aside className="uc-side-label"><div className="uc-number">02 · Architectural decision</div><h2 className="sa-display">Use hybrid inference, with the phone as the first trust boundary</h2></aside>
            <div className="uc-copy">
              <p>The architecture assigns work according to sensitivity and capability. <strong>Device-side processing handles capture, device classification, value extraction, unit normalization, timestamp detection, confidence scoring, and optional redaction.</strong> The app presents the structured result for human confirmation before anything is submitted.</p>
              <figure className="uc-figure uc-section-figure uc-architecture-figure">
                <Image src="/subra-ai/use-cases/device-agnostic-medical-reading-capture/hybrid-inference-architecture.png" alt="Hybrid inference architecture showing medical device capture, on-device classification and extraction, user confirmation, minimal structured JSON, controlled backend submission, and optional consent-controlled cloud escalation" width={1693} height={929} sizes="(max-width: 860px) 100vw, 708px" />
                <figcaption>The raw image stops inside the smartphone trust boundary. Only approved structured data proceeds to controlled healthcare infrastructure.</figcaption>
              </figure>
              <h3 className="sa-display">React Native orchestrates the boundary—it does not hide it</h3>
              <p>React Native is the product coordination layer: camera state, wearable ingestion, consent, lifecycle, offline queues, error recovery, and the review UI. Native modules own model execution and platform-specific resources. A typed boundary returns a versioned result to JavaScript, where runtime validation rejects malformed or unsupported payloads before persistence or network submission.</p>
              <div className="uc-pullquote sa-display">Cross-platform should mean one product contract—not pretending native execution, consent, and network boundaries do not exist.</div>
              <p>The cloud remains valuable for longitudinal analysis, clinician collaboration, advanced reasoning, and workflows that require shared state. But it receives only the minimum confirmed fields needed for that job—not the source image simply because uploading is convenient.</p>
            </div>
          </div>
        </section>

        <section className="uc-section">
          <div className="uc-wrap uc-section-grid">
            <aside className="uc-side-label"><div className="uc-number">03 · Working mobile experience</div><h2 className="sa-display">Make privacy feel like speed, not friction</h2></aside>
            <div className="uc-copy">
              <p>The mobile flow is intentionally short. The user scans the display, sees what the model understood, corrects anything uncertain, and approves the submission. On-device processing means the first useful result does not wait for an upload or a stable connection.</p>
              <div className="uc-mobile">
                <figure className="uc-figure uc-mobile-figure">
                  <Image src="/subra-ai/use-cases/device-agnostic-medical-reading-capture/working-mobile-experience.png" alt="Four mobile screens showing capture, on-device scan, reading review, and confirmation before submitting structured blood pressure data" width={864} height={1821} sizes="(max-width: 860px) 90vw, 370px" />
                  <figcaption>The user stays in control from camera capture through final submission.</figcaption>
                </figure>
                <div className="uc-journey">
                  <div className="uc-journey-step"><span>1</span><div><b>Frame the device</b><p>Visual guidance helps the user align glare-prone LCD and LED displays.</p></div></div>
                  <div className="uc-journey-step"><span>2</span><div><b>Understand locally</b><p>The model identifies device category, readings, units, and any visible measurement time.</p></div></div>
                  <div className="uc-journey-step"><span>3</span><div><b>Review uncertainty</b><p>Low-confidence fields are highlighted instead of silently accepted.</p></div></div>
                  <div className="uc-journey-step"><span>4</span><div><b>Submit intentionally</b><p>Only the confirmed structured payload enters the app&apos;s controlled backend workflow.</p></div></div>
                </div>
              </div>
              <p>If a measurement time is visible, the model extracts it and labels the source as <strong>device_display</strong>. Otherwise, the app uses capture time and records <strong>capture_time</strong>. That provenance prevents a convenient fallback from masquerading as an exact clinical timestamp.</p>
            </div>
          </div>
        </section>

        <section className="uc-section">
          <div className="uc-wrap uc-section-grid">
            <aside className="uc-side-label"><div className="uc-number">04 · Security &amp; privacy</div><h2 className="sa-display">Minimize data before trying to protect it</h2></aside>
            <div className="uc-copy">
              <p>Encryption is required, but minimization is the stronger starting point. If raw camera imagery is not necessary outside the device, the safest retention period is zero and the safest third-party permission is none.</p>
              <div className="uc-privacy-table">
                <div className="uc-privacy-row"><div className="uc-privacy-head">Data</div><div className="uc-privacy-head">Default location</div><div className="uc-privacy-head">Control</div></div>
                <div className="uc-privacy-row"><div><b>Camera frame</b></div><div><span>Volatile device memory</span></div><div><span>Process locally; do not persist or upload by default.</span></div></div>
                <div className="uc-privacy-row"><div><b>Extracted reading</b></div><div><span>Local review state</span></div><div><span>Runtime schema validation, confidence threshold, user confirmation.</span></div></div>
                <div className="uc-privacy-row"><div><b>Approved payload</b></div><div><span>Controlled health backend</span></div><div><span>Purpose limitation, authenticated transport, retention and deletion policy.</span></div></div>
                <div className="uc-privacy-row"><div><b>Cloud escalation</b></div><div><span>Only when required</span></div><div><span>Explicit consent, minimal redacted context, vendor-use restrictions.</span></div></div>
              </div>
              <h3 className="sa-display">Threats worth designing for</h3>
              <p>Screen captures in logs, analytics events containing health values, model files replaced at runtime, prompt or schema injection from visible text, replayed submissions, stale consent, debug builds with broader storage, and unbounded offline queues. The architecture needs signed model assets, strict output schemas, least-privilege permissions, log redaction, protected local storage, authenticated requests, replay resistance, and testable deletion behavior.</p>
              <div className="uc-pullquote sa-display">“Your sensitive health information stays on your device” is both a security decision and a commercial position.</div>
              <p>That position can reduce hesitation for patients and improve conversations with hospitals, insurers, and enterprise buyers—provided product telemetry and support tooling honor the same promise.</p>
            </div>
          </div>
        </section>

        <section className="uc-section">
          <div className="uc-wrap uc-section-grid">
            <aside className="uc-side-label"><div className="uc-number">05 · Measurable results</div><h2 className="sa-display">Measure trust and usability together</h2></aside>
            <div className="uc-copy">
              <p>This case study does not invent benchmark numbers. The right founder-level scorecard makes the claims falsifiable across the actual device matrix, lighting conditions, display types, languages, and target phones. These are the acceptance gates I would take into a pilot:</p>
              <div className="uc-metrics">
                {measurementGates.map(({ metric, target, reason }) => <div className="uc-metric" key={metric}><div className="uc-metric-top"><Gauge size={16} />{metric}</div><div className="uc-metric-target">{target}</div><p>{reason}</p></div>)}
              </div>
              <p>Report results by device category and environment, alongside a cloud baseline. A strong pilot should demonstrate not only extraction quality and latency, but also how much raw data never leaves the phone, how often users need to correct a field, and whether the experience still completes offline.</p>
            </div>
          </div>
        </section>

        <section className="uc-section">
          <div className="uc-wrap uc-section-grid">
            <aside className="uc-side-label"><div className="uc-number">06 · Leadership reasoning</div><h2 className="sa-display">Architecture is a sequence of business choices</h2></aside>
            <div className="uc-copy">
              <p>A leader&apos;s job is not to maximize local inference at any cost. It is to place each capability where customer value, privacy risk, reliability, operating cost, and team complexity balance correctly.</p>
              <div className="uc-leadership">
                <div className="uc-decision"><b>Start with the promise</b><p>If privacy is part of positioning, define the allowed data flows before selecting model or vendor.</p></div>
                <div className="uc-decision"><b>Make uncertainty visible</b><p>A review step creates user agency and supplies the correction signal needed to improve the system responsibly.</p></div>
                <div className="uc-decision"><b>Earn cloud escalation</b><p>Use it where shared context or advanced reasoning creates clear value, not as the default route for every frame.</p></div>
                <div className="uc-decision"><b>Version the contract</b><p>Device models can change independently while mobile and backend teams rely on a stable, validated schema.</p></div>
                <div className="uc-decision"><b>Sell the boundary</b><p>Privacy architecture can reduce enterprise risk, shorten security conversations, and differentiate the product.</p></div>
              </div>
            </div>
          </div>
        </section>

        <footer className="uc-cta">
          <div className="uc-wrap"><div className="uc-cta-card"><div><h2 className="sa-display">Private AI should be visible in the product.</h2><p>Explore how Subra AI brings useful intelligence onto the device.</p></div><Link className="uc-btn" href="/subra-ai">Explore Subra AI <ArrowRight size={16} /></Link></div></div>
        </footer>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Capture any medical-device reading without making the cloud the default", description: "A founder-focused architecture case study for private, device-agnostic medical reading capture with on-device AI.", url: absoluteUrl(canonicalPath), image: absoluteUrl("/subra-ai/use-cases/device-agnostic-medical-reading-capture/article-hero.png"), author: { "@type": "Person", name: "Subrata Kumar Das" }, publisher: { "@type": "Person", name: "Subrata Kumar Das" }, about: ["On-device AI", "Healthcare privacy", "React Native architecture", "Medical device reading capture"] }) }} />
    </>
  );
}
