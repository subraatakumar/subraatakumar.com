import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BrainCircuit, Check, CloudOff, Cpu, Database, LockKeyhole, MessageSquareText, ShieldCheck, Sparkles, WifiOff } from "lucide-react";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Subra AI | Private Offline AI Chat",
  description: "Subra AI is a private, offline AI chat app powered by Google ML Kit and the Gemma 4 model, with inference performed on your device.",
  keywords: ["offline AI chat", "on-device AI", "private AI assistant", "Google ML Kit", "Gemma 4", "Subra AI"],
  alternates: { canonical: "/subra-ai" },
  openGraph: { title: "Subra AI | Private Offline AI Chat", description: "Chat with AI locally. Your conversations stay on your device.", url: "/subra-ai", type: "website" },
  twitter: { card: "summary_large_image", title: "Subra AI | Private Offline AI Chat", description: "Private, on-device AI chat powered by ML Kit and Gemma 4." },
};

const features = [
  { icon: WifiOff, title: "Works offline", copy: "Once the model is available on your device, you can chat without an internet connection." },
  { icon: LockKeyhole, title: "Conversations stay local", copy: "Your prompts and generated responses are processed on-device—not sent to a Subra AI server." },
  { icon: BrainCircuit, title: "Gemma 4 intelligence", copy: "A capable language model runs locally through Google ML Kit for fast, private inference." },
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
        .sa-section { max-width: 1180px; margin: 0 auto; padding: 100px 28px; }
        .sa-section-head { max-width: 680px; margin-bottom: 44px; }
        .sa-section h2 { font-size: clamp(34px, 5vw, 54px); line-height: 1.08; letter-spacing: -.045em; margin: 0 0 16px; }
        .sa-section-head p { color: var(--sa-muted); font-size: 17px; line-height: 1.7; }
        .sa-feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .sa-feature { padding: 28px; border-radius: 20px; border: 1px solid var(--sa-line); background: linear-gradient(145deg, rgba(255,255,255,.045), rgba(255,255,255,.015)); }
        .sa-feature-icon { width: 45px; height: 45px; display: grid; place-items: center; border-radius: 13px; color: var(--sa-lime); background: rgba(183,243,74,.09); border: 1px solid rgba(183,243,74,.18); margin-bottom: 42px; }
        .sa-feature h3 { font-size: 18px; margin: 0 0 10px; } .sa-feature p { color: var(--sa-muted); line-height: 1.65; font-size: 14px; margin: 0; }
        .sa-privacy { padding-top: 30px; }
        .sa-privacy-card { display: grid; grid-template-columns: .8fr 1.2fr; gap: 60px; padding: 54px; border-radius: 28px; border: 1px solid rgba(183,243,74,.2); background: linear-gradient(135deg, rgba(183,243,74,.075), rgba(86,215,223,.035)); }
        .sa-privacy-card h2 { font-size: 42px; }
        .sa-privacy-list { display: grid; gap: 14px; }
        .sa-privacy-list div { display: flex; gap: 12px; color: #cbd3dc; font-size: 14px; line-height: 1.55; }
        .sa-privacy-list svg { color: var(--sa-lime); flex-shrink: 0; margin-top: 2px; }
        @media (max-width: 860px) { .sa-hero { grid-template-columns: 1fr; padding-top: 66px; gap: 60px; } .sa-feature-grid { grid-template-columns: 1fr; } .sa-feature-icon { margin-bottom: 26px; } .sa-privacy-card { grid-template-columns: 1fr; gap: 20px; padding: 34px; } }
        @media (max-width: 520px) { .sa-hero, .sa-section { padding-left: 18px; padding-right: 18px; } .sa-hero h1 { font-size: 49px; } .sa-lead { font-size: 16px; } .sa-phone { padding: 9px; border-radius: 27px; } .sa-screen { min-height: 450px; padding: 17px; } .sa-strip-inner { align-items: flex-start; flex-direction: column; padding-left: 18px; } .sa-section { padding-top: 76px; padding-bottom: 76px; } .sa-privacy-card { padding: 26px 22px; } }
      `}</style>
      <div className="sa-home">
        <section className="sa-hero">
          <div>
            <div className="sa-eyebrow"><Sparkles size={15} /> Private AI, without the cloud</div>
            <h1 className="sa-display">Think freely.<br /><span className="sa-gradient">Stay offline.</span></h1>
            <p className="sa-lead">Subra AI is a ChatGPT-like assistant that runs on your device. Ask, explore, write, and reason with Gemma 4—without sending your conversations to our servers.</p>
            <div className="sa-actions">
              <Link className="sa-btn sa-btn-primary" href="#privacy">See how privacy works <ArrowRight size={16} /></Link>
              <Link className="sa-btn sa-btn-secondary" href="/subra-ai/privacy-policy">Read privacy policy</Link>
            </div>
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
        <section className="sa-section">
          <div className="sa-section-head"><div className="sa-eyebrow">Designed for your device</div><h2 className="sa-display">Useful AI. A much smaller privacy surface.</h2><p>Subra AI keeps the core chat experience where it belongs: in your hands, on your hardware.</p></div>
          <div className="sa-feature-grid">{features.map(({ icon: Icon, title, copy }) => <article className="sa-feature" key={title}><div className="sa-feature-icon"><Icon size={21} /></div><h3 className="sa-display">{title}</h3><p>{copy}</p></article>)}</div>
        </section>
        <section className="sa-section sa-privacy" id="privacy">
          <div className="sa-privacy-card"><div><div className="sa-eyebrow"><LockKeyhole size={15} /> Privacy by architecture</div><h2 className="sa-display">Your chats are not our data.</h2></div><div className="sa-privacy-list"><div><Check size={18} /><span>Prompts and responses are processed locally by the model on your device.</span></div><div><Check size={18} /><span>Subra AI does not require an account or upload conversation history to a Subra AI server.</span></div><div><Check size={18} /><span>You control local chat history and can delete it from within the app or by removing the app.</span></div><div><Check size={18} /><span>An internet connection may be needed to download the app, updates, or model files before offline use.</span></div><Link className="sa-btn sa-btn-secondary" href="/subra-ai/privacy-policy" style={{ width: "fit-content", marginTop: 8 }}>Full privacy details <ArrowRight size={16} /></Link></div></div>
        </section>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Subra AI", applicationCategory: "UtilitiesApplication", operatingSystem: "Android", url: absoluteUrl("/subra-ai"), description: "Private offline AI chat app using Google ML Kit and the Gemma 4 model for on-device inference.", featureList: ["Offline AI chat", "On-device inference", "Local conversation history", "No account required"], author: { "@type": "Person", name: "Subrata Kumar Das" } }) }} />
    </>
  );
}
