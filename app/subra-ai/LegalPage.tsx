import Link from "next/link";
import { ArrowLeft, Mail, ShieldCheck } from "lucide-react";

export type LegalSection = { id: string; title: string; content: React.ReactNode };

export default function LegalPage({ eyebrow, title, intro, sections }: { eyebrow: string; title: string; intro: string; sections: LegalSection[] }) {
  return (
    <>
      <style>{`
        .sa-legal { max-width: 1160px; margin: 0 auto; padding: 70px 28px 100px; }
        .sa-legal-back { display: inline-flex; align-items: center; gap: 7px; color: var(--sa-muted); text-decoration: none; font-size: 13px; font-weight: 600; margin-bottom: 42px; }
        .sa-legal-back:hover { color: var(--sa-text); }
        .sa-legal-header { max-width: 820px; margin-bottom: 58px; }
        .sa-legal-eyebrow { display: flex; align-items: center; gap: 8px; color: var(--sa-lime); font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .12em; margin-bottom: 18px; }
        .sa-legal h1 { font-size: clamp(42px, 6vw, 70px); line-height: 1; letter-spacing: -.055em; margin: 0 0 22px; }
        .sa-legal-intro { color: var(--sa-muted); font-size: 18px; line-height: 1.7; margin: 0; }
        .sa-legal-date { color: #707c8b; font-size: 12px; margin-top: 20px; }
        .sa-legal-grid { display: grid; grid-template-columns: 230px minmax(0, 1fr); gap: 58px; align-items: start; }
        .sa-legal-nav { position: sticky; top: 100px; display: grid; gap: 3px; }
        .sa-legal-nav-label { color: #687482; font-size: 10px; font-weight: 700; letter-spacing: .13em; text-transform: uppercase; margin: 0 0 10px 12px; }
        .sa-legal-nav a { color: #98a4b3; text-decoration: none; font-size: 12px; line-height: 1.35; padding: 9px 12px; border-radius: 9px; }
        .sa-legal-nav a:hover { color: var(--sa-text); background: rgba(255,255,255,.05); }
        .sa-legal-content { min-width: 0; }
        .sa-legal-section { scroll-margin-top: 104px; padding: 0 0 42px; margin-bottom: 42px; border-bottom: 1px solid var(--sa-line); }
        .sa-legal-section:last-child { border-bottom: 0; }
        .sa-legal-section h2 { font-size: 24px; letter-spacing: -.025em; margin: 0 0 18px; }
        .sa-legal-section p, .sa-legal-section li { color: var(--sa-muted); font-size: 14px; line-height: 1.78; }
        .sa-legal-section p { margin: 0 0 15px; }
        .sa-legal-section ul { padding-left: 20px; margin: 12px 0 18px; }
        .sa-legal-section li { margin-bottom: 8px; padding-left: 4px; }
        .sa-legal-section strong { color: #e5eaf0; }
        .sa-legal-note { padding: 18px 20px; border: 1px solid rgba(183,243,74,.19); border-radius: 14px; background: rgba(183,243,74,.055); color: #cdd6df !important; }
        .sa-legal-contact { display: flex; align-items: center; justify-content: space-between; gap: 20px; padding: 24px; border: 1px solid var(--sa-line); border-radius: 17px; background: var(--sa-panel); }
        .sa-legal-contact a { color: var(--sa-lime); text-decoration: none; font-size: 13px; font-weight: 700; word-break: break-all; }
        @media (max-width: 760px) { .sa-legal { padding: 48px 18px 76px; } .sa-legal-grid { grid-template-columns: 1fr; gap: 20px; } .sa-legal-nav { display: none; } .sa-legal-header { margin-bottom: 44px; } .sa-legal-contact { align-items: flex-start; flex-direction: column; } }
      `}</style>
      <article className="sa-legal">
        <Link href="/subra-ai" className="sa-legal-back"><ArrowLeft size={15} /> Back to Subra AI</Link>
        <header className="sa-legal-header">
          <div className="sa-legal-eyebrow"><ShieldCheck size={14} /> {eyebrow}</div>
          <h1 className="sa-display">{title}</h1>
          <p className="sa-legal-intro">{intro}</p>
          <p className="sa-legal-date">Effective and last updated: July 15, 2026</p>
        </header>
        <div className="sa-legal-grid">
          <nav className="sa-legal-nav" aria-label={`${title} sections`}><p className="sa-legal-nav-label">On this page</p>{sections.map((section, i) => <a href={`#${section.id}`} key={section.id}>{i + 1}. {section.title}</a>)}</nav>
          <div className="sa-legal-content">{sections.map((section) => <section id={section.id} className="sa-legal-section" key={section.id}><h2 className="sa-display">{section.title}</h2>{section.content}</section>)}
            <div className="sa-legal-contact"><div><strong>Questions about this document?</strong><p style={{ margin: "5px 0 0", color: "var(--sa-muted)", fontSize: 13 }}>Contact the Subra AI developer.</p></div><a href="mailto:subraatakumar+subraai@gmail.com"><Mail size={14} style={{ verticalAlign: "middle", marginRight: 7 }} />subraatakumar+subraai@gmail.com</a></div>
          </div>
        </div>
      </article>
    </>
  );
}
