import type { Metadata } from "next";
import Link from "next/link";
import { Apple, ArrowRight, BrainCircuit, Check, CloudOff, Cpu, Database, HeartPulse, LockKeyhole, MessageSquareText, Play, ShieldCheck, Sparkles, WifiOff } from "lucide-react";
import { absoluteUrl } from "@/lib/seo";
import storeLinks from "@/config/store-links.json";

const subraAiStoreLinks = storeLinks["subra-ai"];

export const metadata: Metadata = {
  title: "Subra AI | Private Offline AI Chat",
  description: "Subra AI brings private, on-device intelligence to chat and business workflows, including device-agnostic medical reading capture for healthcare apps.",
  keywords: ["offline AI chat", "on-device AI", "private AI assistant", "medical device reading capture", "healthcare app AI", "Google ML Kit", "Gemma 4", "Subra AI"],
  alternates: { canonical: "/subra-ai" },
  openGraph: { title: "Subra AI | Private On-Device AI", description: "Private on-device AI for chat and business workflows, including medical reading capture.", url: "/subra-ai", type: "website" },
  twitter: { card: "summary_large_image", title: "Subra AI | Private On-Device AI", description: "Private on-device AI for chat and business workflows." },
};

const features = [
  { icon: WifiOff, title: "Works offline", copy: "Once the model is available on your device, you can chat without an internet connection." },
  { icon: LockKeyhole, title: "Conversations stay local", copy: "Your prompts and generated responses are processed on-device—not sent to a Subra AI server." },
  { icon: BrainCircuit, title: "Gemma 4 intelligence", copy: "A capable language model runs locally through Google ML Kit for fast, private inference.", href: "/blog/why-i-chose-gemma-4-e2b-for-subra-ai" },
];

export default function SubraAiPage() {
  return (
    <>
      <style>{`
        .sa-home { overflow: hidden; }
        .sa-hero { max-width: 1180px; margin: 0 auto; padding: 92px 28px 74px; display: grid; grid-template-columns: 1.05fr .95fr; align-items: center; gap: 78px; }
        .sa-eyebrow { display: inline-flex; align-items: center; gap: 8px; color: var(--sa-lime); font-size: 12px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; margin-bottom: 24px; }
        .sa-hero h1 { font-size: clamp(48px, 7vw, 86px); line-height: .98; letter-spacing: -.065em; max-width: 780px; margin: 0; }
        .sa-gradient { color: transparent; background: linear-gradient(110deg, var(--sa-lime), var(--sa-cyan)); background-clip: text; }
        .sa-lead { color: var(--sa-muted); font-size: 18px; line-height: 1.7; max-width: 610px; margin: 28px 0 34px; }
        .sa-actions { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
        .sa-btn { display: inline-flex; align-items: center; gap: 9px; text-decoration: none; padding: 13px 18px; border-radius: 12px; font-size: 14px; font-weight: 700; }
        .sa-btn-primary { color: #090c10; background: var(--sa-lime); box-shadow: 0 8px 34px rgba(183,243,74,.17); }
        .sa-btn-secondary { color: var(--sa-text); border: 1px solid var(--sa-line); background: rgba(255,255,255,.03); }
        .sa-btn-tertiary { color: var(--sa-muted); padding-inline: 8px; }
        .sa-btn-tertiary:hover { color: var(--sa-text); }
        .sa-store-note { color: #6f7c8b; font-size: 11px; line-height: 1.5; margin: 13px 0 0; }
        .sa-trust-line { display: flex; flex-wrap: wrap; gap: 18px; margin-top: 30px; color: #8995a5; font-size: 12px; }
        .sa-trust-line span { display: inline-flex; align-items: center; gap: 7px; }
        .sa-phone { position: relative; max-width: 430px; margin: 0 auto; padding: 14px; border-radius: 35px; border: 1px solid rgba(255,255,255,.17); background: linear-gradient(150deg, #1b2330, #0d1219); box-shadow: 0 36px 100px rgba(0,0,0,.55); transform: rotate(1.5deg); }
        .sa-phone:before { content: ""; position: absolute; inset: -25%; z-index: -1; background: radial-gradient(circle, rgba(86,215,223,.15), transparent 60%); }
        .sa-screen { min-height: 500px; border-radius: 25px; padding: 22px; background: #0b0f15; overflow: hidden; }
        .sa-screen-top { display: flex; justify-content: space-between; align-items: center; padding-bottom: 24px; border-bottom: 1px solid var(--sa-line); }
        .sa-screen-title { display: flex; align-items: center; gap: 9px; font-size: 14px; font-weight: 700; }
        .sa-status { display: inline-flex; align-items: center; gap: 6px; color: var(--sa-lime); font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; }
        .sa-status-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--sa-lime); box-shadow: 0 0 10px var(--sa-lime); }
        .sa-chat { display: flex; flex-direction: column; gap: 16px; padding-top: 28px; }
        .sa-bubble { max-width: 88%; padding: 15px 16px; border-radius: 17px; font-size: 13px; line-height: 1.6; }
        .sa-bubble-user { align-self: flex-end; color: #0a0e12; background: var(--sa-lime); border-bottom-right-radius: 5px; }
        .sa-bubble-ai { background: var(--sa-panel-2); color: #dbe1e9; border: 1px solid var(--sa-line); border-bottom-left-radius: 5px; }
        .sa-typing { display: flex; gap: 4px; padding: 6px 2px 2px; } .sa-typing i { width: 5px; height: 5px; border-radius: 50%; background: #8793a3; }
        .sa-input { margin-top: 28px; padding: 14px 14px 14px 16px; border: 1px solid var(--sa-line); border-radius: 14px; display: flex; justify-content: space-between; align-items: center; color: #677383; font-size: 12px; background: #10151d; }
        .sa-input button { border: 0; border-radius: 9px; width: 32px; height: 32px; display: grid; place-items: center; color: #091013; background: var(--sa-cyan); }
        .sa-strip { border-block: 1px solid var(--sa-line); background: rgba(255,255,255,.018); }
        .sa-strip-inner { max-width: 1180px; margin: 0 auto; padding: 26px 28px; display: flex; align-items: center; justify-content: space-between; gap: 24px; color: #84909f; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: .08em; }
        .sa-tech { display: flex; align-items: center; gap: 26px; flex-wrap: wrap; } .sa-tech span { display: inline-flex; align-items: center; gap: 8px; color: #c8d0da; }
        .sa-video-section { max-width: 1180px; margin: 0 auto; padding: 100px 28px 24px; text-align: center; scroll-margin-top: 90px; }
        .sa-video-section .sa-eyebrow { margin-bottom: 18px; }
        .sa-video-section h2 { font-size: clamp(36px, 5vw, 58px); line-height: 1.06; letter-spacing: -.05em; margin: 0; }
        .sa-video-intro { max-width: 620px; margin: 18px auto 38px; color: var(--sa-muted); font-size: 16px; line-height: 1.7; }
        .sa-video-frame { position: relative; overflow: hidden; padding: 8px; border: 1px solid rgba(255,255,255,.16); border-radius: 26px; background: linear-gradient(145deg, rgba(255,255,255,.07), rgba(255,255,255,.02)); box-shadow: 0 34px 100px rgba(0,0,0,.42); }
        .sa-video-frame:before { content: ""; position: absolute; inset: -30% 15% 45%; z-index: -1; background: radial-gradient(circle, rgba(86,215,223,.16), transparent 65%); }
        .sa-video-frame video { display: block; width: 100%; aspect-ratio: 16 / 9; border-radius: 18px; background: #070a0e; object-fit: cover; }
        .sa-section { max-width: 1180px; margin: 0 auto; padding: 100px 28px; }
        .sa-section-head { max-width: 680px; margin-bottom: 44px; }
        .sa-section h2 { font-size: clamp(34px, 5vw, 54px); line-height: 1.08; letter-spacing: -.045em; margin: 0 0 16px; }
        .sa-section-head p { color: var(--sa-muted); font-size: 17px; line-height: 1.7; }
        .sa-feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .sa-feature { padding: 28px; border-radius: 20px; border: 1px solid var(--sa-line); background: linear-gradient(145deg, rgba(255,255,255,.045), rgba(255,255,255,.015)); }
        .sa-feature-icon { width: 45px; height: 45px; display: grid; place-items: center; border-radius: 13px; color: var(--sa-lime); background: rgba(183,243,74,.09); border: 1px solid rgba(183,243,74,.18); margin-bottom: 42px; }
        .sa-feature h3 { font-size: 18px; margin: 0 0 10px; } .sa-feature p { color: var(--sa-muted); line-height: 1.65; font-size: 14px; margin: 0; }
        .sa-feature-link { display: inline-flex; align-items: center; gap: 7px; margin-top: 18px; color: var(--sa-lime); font-size: 13px; font-weight: 700; text-decoration: none; } .sa-feature-link:hover { text-decoration: underline; }
        .sa-use-case { max-width: none; padding: 0; border-block: 1px solid var(--sa-line); background: linear-gradient(180deg, rgba(86,215,223,.035), rgba(255,255,255,.008)); }
        .sa-use-case-inner { max-width: 1180px; margin: 0 auto; padding: 100px 28px; }
        .sa-use-case-head { display: flex; align-items: end; justify-content: space-between; gap: 50px; margin-bottom: 38px; }
        .sa-issue { color: var(--sa-cyan); font-size: 12px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }
        .sa-use-case h2 { font-size: clamp(38px, 5.5vw, 62px); line-height: 1.02; letter-spacing: -.05em; margin: 12px 0 0; }
        .sa-use-case-intro { color: var(--sa-muted); font-size: 15px; line-height: 1.7; margin: 0; max-width: 430px; }
        .sa-case-list { display: flex; gap: 20px; overflow-x: auto; padding: 4px 2px 22px; scroll-snap-type: x mandatory; scrollbar-color: rgba(183,243,74,.45) transparent; scrollbar-width: thin; }
        .sa-case-list::-webkit-scrollbar { height: 6px; } .sa-case-list::-webkit-scrollbar-thumb { background: rgba(183,243,74,.45); border-radius: 999px; }
        .sa-case-card { flex: 0 0 min(780px, calc(100vw - 72px)); min-height: 390px; display: grid; grid-template-columns: .9fr 1.1fr; overflow: hidden; scroll-snap-align: start; border: 1px solid var(--sa-line); border-radius: 26px; background: #0b1017; }
        .sa-case-visual { position: relative; display: grid; place-items: center; min-height: 390px; background: radial-gradient(circle, rgba(86,215,223,.16), transparent 48%), linear-gradient(145deg, #111923, #090d13); }
        .sa-case-visual:before, .sa-case-visual:after { content: ""; position: absolute; width: 58px; height: 58px; border-color: var(--sa-lime); border-style: solid; opacity: .8; }
        .sa-case-visual:before { top: 35px; left: 35px; border-width: 2px 0 0 2px; border-radius: 12px 0 0; } .sa-case-visual:after { right: 35px; bottom: 35px; border-width: 0 2px 2px 0; border-radius: 0 0 12px; }
        .sa-case-device { width: 220px; padding: 24px; border-radius: 28px 28px 40px 40px; color: #17202a; background: linear-gradient(155deg, #eef2ef, #aeb8b7); box-shadow: 0 25px 60px rgba(0,0,0,.45); }
        .sa-case-screen { padding: 16px; border: 7px solid #34434b; border-radius: 12px; background: #bcd4c2; font: 700 12px ui-monospace, SFMono-Regular, Menlo, monospace; }
        .sa-case-reading { display: flex; align-items: baseline; justify-content: space-between; } .sa-case-reading strong { font-size: 38px; letter-spacing: -.08em; } .sa-case-reading + .sa-case-reading { margin-top: 6px; }
        .sa-case-copy { padding: 36px; display: flex; flex-direction: column; align-items: flex-start; }
        .sa-case-number { color: var(--sa-cyan); font-size: 11px; font-weight: 700; letter-spacing: .11em; text-transform: uppercase; }
        .sa-case-copy h3 { font-size: 30px; line-height: 1.12; letter-spacing: -.04em; margin: 18px 0 14px; } .sa-case-copy p { color: var(--sa-muted); font-size: 14px; line-height: 1.7; margin: 0; }
        .sa-case-tags { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 22px; } .sa-case-tags span { padding: 7px 9px; border: 1px solid var(--sa-line); border-radius: 8px; color: #aeb8c5; font-size: 10px; font-weight: 700; }
        .sa-case-link { margin-top: auto; display: inline-flex; align-items: center; gap: 8px; color: #090c10; background: var(--sa-lime); text-decoration: none; font-size: 13px; font-weight: 800; padding: 12px 15px; border-radius: 11px; }
        .sa-list-hint { display: flex; align-items: center; justify-content: space-between; gap: 18px; margin-top: 10px; color: #748090; font-size: 11px; }
        .sa-privacy { padding-top: 30px; }
        .sa-privacy-card { display: grid; grid-template-columns: .8fr 1.2fr; gap: 60px; padding: 54px; border-radius: 28px; border: 1px solid rgba(183,243,74,.2); background: linear-gradient(135deg, rgba(183,243,74,.075), rgba(86,215,223,.035)); }
        .sa-privacy-card h2 { font-size: 42px; }
        .sa-privacy-list { display: grid; gap: 14px; }
        .sa-privacy-list div { display: flex; gap: 12px; color: #cbd3dc; font-size: 14px; line-height: 1.55; }
        .sa-privacy-list svg { color: var(--sa-lime); flex-shrink: 0; margin-top: 2px; }
        .sa-download { padding-top: 28px; }
        .sa-download-card { position: relative; overflow: hidden; display: flex; align-items: center; justify-content: space-between; gap: 52px; padding: 48px 52px; border: 1px solid var(--sa-line); border-radius: 28px; background: linear-gradient(120deg, rgba(86,215,223,.09), rgba(183,243,74,.065)); }
        .sa-download-card:after { content: ""; position: absolute; width: 260px; height: 260px; right: -110px; top: -110px; border-radius: 50%; background: rgba(183,243,74,.10); filter: blur(10px); }
        .sa-download-copy { position: relative; z-index: 1; max-width: 580px; }
        .sa-download-copy h2 { font-size: clamp(34px, 4.5vw, 50px); margin-bottom: 13px; }
        .sa-download-copy p { color: var(--sa-muted); font-size: 15px; line-height: 1.65; margin: 0; }
        .sa-download-actions { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: stretch; gap: 10px; min-width: 220px; }
        .sa-download-actions .sa-btn { justify-content: center; }
        @media (max-width: 860px) { .sa-hero { grid-template-columns: 1fr; padding-top: 66px; gap: 60px; } .sa-feature-grid { grid-template-columns: 1fr; } .sa-feature-icon { margin-bottom: 26px; } .sa-use-case-head { align-items: flex-start; flex-direction: column; gap: 18px; } .sa-case-card { grid-template-columns: 1fr; } .sa-case-visual { min-height: 310px; } .sa-privacy-card { grid-template-columns: 1fr; gap: 20px; padding: 34px; } .sa-download-card { align-items: flex-start; flex-direction: column; gap: 30px; padding: 38px; } .sa-download-actions { width: 100%; min-width: 0; flex-direction: row; } }
        @media (max-width: 520px) { .sa-hero, .sa-video-section, .sa-section, .sa-use-case-inner { padding-left: 18px; padding-right: 18px; } .sa-hero h1 { font-size: 49px; } .sa-lead { font-size: 16px; } .sa-actions { align-items: stretch; flex-direction: column; } .sa-actions .sa-btn { justify-content: center; } .sa-btn-tertiary { align-self: center; } .sa-phone { padding: 9px; border-radius: 27px; } .sa-screen { min-height: 450px; padding: 17px; } .sa-strip-inner { align-items: flex-start; flex-direction: column; padding-left: 18px; } .sa-video-section { padding-top: 76px; } .sa-video-frame { padding: 5px; border-radius: 18px; } .sa-video-frame video { border-radius: 13px; } .sa-section, .sa-use-case-inner { padding-top: 76px; padding-bottom: 76px; } .sa-case-card { flex-basis: calc(100vw - 38px); } .sa-case-copy { padding: 26px 22px; min-height: 330px; } .sa-case-visual { min-height: 280px; } .sa-privacy-card { padding: 26px 22px; } .sa-download-card { padding: 30px 22px; } .sa-download-actions { flex-direction: column; } }
      `}</style>
      <div className="sa-home">
        <section className="sa-hero">
          <div>
            <div className="sa-eyebrow"><Sparkles size={15} /> Private AI, without the cloud</div>
            <h1 className="sa-display">Think freely.<br /><span className="sa-gradient">Stay offline.</span></h1>
            <p className="sa-lead">Subra AI is a ChatGPT-like assistant that runs on your device. Ask, explore, write, and reason with Gemma 4—without sending your conversations to our servers.</p>
            <div className="sa-actions">
              <a className="sa-btn sa-btn-primary" href={subraAiStoreLinks.ios} target="_blank" rel="noopener noreferrer" aria-label="Download Subra AI on the Apple App Store"><Apple size={17} /> Download for iPhone &amp; iPad</a>
              <a className="sa-btn sa-btn-secondary" href={subraAiStoreLinks.android} target="_blank" rel="noopener noreferrer" aria-label="Get Subra AI on Google Play"><Play size={16} fill="currentColor" /> Get it on Google Play</a>
              <Link className="sa-btn sa-btn-tertiary" href="#intro"><Play size={15} /> Watch 54-sec introduction</Link>
              <Link className="sa-btn sa-btn-tertiary" href="#privacy">How privacy works <ArrowRight size={15} /></Link>
            </div>
            <p className="sa-store-note">Store availability may vary by device and region.</p>
            <div className="sa-trust-line"><span><ShieldCheck size={14} /> No account required</span><span><CloudOff size={14} /> No chat cloud</span><span><Database size={14} /> Local conversation history</span></div>
          </div>
          <div className="sa-phone" aria-label="Illustration of Subra AI chat running offline">
            <div className="sa-screen">
              <div className="sa-screen-top"><div className="sa-screen-title"><MessageSquareText size={17} color="var(--sa-cyan)" /> New chat</div><span className="sa-status"><i className="sa-status-dot" /> Offline</span></div>
              <div className="sa-chat">
                <div className="sa-bubble sa-bubble-user">Help me outline a focused learning plan for this week.</div>
                <div className="sa-bubble sa-bubble-ai">Let’s make it realistic. Pick one main outcome, then split it into three short sessions: learn, practise, and review.</div>
                <div className="sa-bubble sa-bubble-user">Keep each session under 30 minutes.</div>
                <div className="sa-bubble sa-bubble-ai">Absolutely. I’ll build a compact plan with a clear finish line for each day.<div className="sa-typing"><i /><i /><i /></div></div>
              </div>
              <div className="sa-input"><span>Message Subra AI…</span><button aria-label="Send message"><ArrowRight size={15} /></button></div>
            </div>
          </div>
        </section>
        <div className="sa-strip"><div className="sa-strip-inner"><span>Runs locally with</span><div className="sa-tech"><span><Cpu size={18} /> Google ML Kit</span><span><BrainCircuit size={18} /> Gemma 4</span></div></div></div>
        <section className="sa-video-section" id="intro" aria-labelledby="sa-video-title">
          <div className="sa-eyebrow"><Play size={14} fill="currentColor" /> Meet Subra AI</div>
          <h2 className="sa-display" id="sa-video-title">Private AI, explained in under a minute.</h2>
          <p className="sa-video-intro">See how Subra AI brings useful, private intelligence directly to your phone—without sending your conversations to our servers.</p>
          <div className="sa-video-frame">
            <video controls playsInline preload="metadata" poster="/subra-ai/subra-ai-intro-poster.jpg" aria-label="Introduction to Subra AI">
              <source src="/subra-ai/subra-ai-intro.mp4" type="video/mp4" />
              Your browser does not support embedded video.
            </video>
          </div>
        </section>
        <section className="sa-section">
          <div className="sa-section-head"><div className="sa-eyebrow">Designed for your device</div><h2 className="sa-display">Useful AI. A much smaller privacy surface.</h2><p>Subra AI keeps the core chat experience where it belongs: in your hands, on your hardware.</p></div>
          <div className="sa-feature-grid">{features.map(({ icon: Icon, title, copy, href }) => <article className="sa-feature" key={title}><div className="sa-feature-icon"><Icon size={21} /></div><h3 className="sa-display">{title}</h3><p>{copy}</p>{href && <Link className="sa-feature-link" href={href}>Read the technical deep dive <ArrowRight size={14} /></Link>}</article>)}</div>
        </section>
        <section className="sa-use-case" id="use-cases">
          <div className="sa-use-case-inner">
            <div className="sa-use-case-head">
              <div><div className="sa-issue">On-device AI in practice</div><h2 className="sa-display">Business use cases</h2></div>
              <p className="sa-use-case-intro">A growing collection of practical ways businesses can use private, on-device intelligence. A new use case will be added regularly.</p>
            </div>
            <div className="sa-case-list" aria-label="Subra AI business use cases">
              <article className="sa-case-card">
                <div className="sa-case-visual" aria-hidden="true">
                  <div className="sa-case-device"><div className="sa-case-screen"><div className="sa-case-reading"><span>SYS</span><strong>118</strong><span>mmHg</span></div><div className="sa-case-reading"><span>DIA</span><strong>76</strong><span>mmHg</span></div><div className="sa-case-reading"><span>PUL</span><strong>68</strong><span>/min</span></div></div></div>
                </div>
                <div className="sa-case-copy">
                  <div className="sa-case-number">Use case 01 · Healthcare</div>
                  <h3 className="sa-display">Device-agnostic medical reading capture</h3>
                  <p>Scan a blood pressure monitor, glucose meter, weighing scale, or another medical device. Subra AI recognizes the device and reading on-device, then returns normalized data for the healthcare app.</p>
                  <div className="sa-case-tags"><span><HeartPulse size={11} /> Healthcare</span><span>On-device vision</span><span>Structured JSON</span></div>
                  <Link className="sa-case-link" href="/subra-ai-use-cases/device-agnostic-medical-reading-capture">See more <ArrowRight size={15} /></Link>
                </div>
              </article>
            </div>
            <div className="sa-list-hint"><span>Scroll to explore use cases</span><span>01 / 01</span></div>
          </div>
        </section>
        <section className="sa-section sa-privacy" id="privacy">
          <div className="sa-privacy-card"><div><div className="sa-eyebrow"><LockKeyhole size={15} /> Privacy by architecture</div><h2 className="sa-display">Your chats are not our data.</h2></div><div className="sa-privacy-list"><div><Check size={18} /><span>Prompts and responses are processed locally by the model on your device.</span></div><div><Check size={18} /><span>Subra AI does not require an account or upload conversation history to a Subra AI server.</span></div><div><Check size={18} /><span>You control local chat history and can delete it from within the app or by removing the app.</span></div><div><Check size={18} /><span>An internet connection may be needed to download the app, updates, or model files before offline use.</span></div><Link className="sa-btn sa-btn-secondary" href="/subra-ai/privacy-policy" style={{ width: "fit-content", marginTop: 8 }}>Full privacy details <ArrowRight size={16} /></Link></div></div>
        </section>
        <section className="sa-section sa-download" id="download">
          <div className="sa-download-card">
            <div className="sa-download-copy"><div className="sa-eyebrow"><Sparkles size={15} /> Ready on your device</div><h2 className="sa-display">Take private AI with you.</h2><p>Download Subra AI and use on-device chat and vision without making your private conversations a cloud dataset.</p></div>
            <div className="sa-download-actions">
              <a className="sa-btn sa-btn-primary" href={subraAiStoreLinks.ios} target="_blank" rel="noopener noreferrer"><Apple size={17} /> App Store</a>
              <a className="sa-btn sa-btn-secondary" href={subraAiStoreLinks.android} target="_blank" rel="noopener noreferrer"><Play size={15} fill="currentColor" /> Google Play</a>
            </div>
          </div>
        </section>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Subra AI", applicationCategory: "UtilitiesApplication", operatingSystem: "Android, iOS", url: absoluteUrl("/subra-ai"), installUrl: [subraAiStoreLinks.ios, subraAiStoreLinks.android], description: "Private on-device AI for chat and business workflows, including structured medical device reading capture.", featureList: ["Offline AI chat", "On-device inference", "Medical device reading capture", "Structured JSON output", "Local conversation history", "No account required"], offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }, author: { "@type": "Person", name: "Subrata Kumar Das" } }) }} />
    </>
  );
}
