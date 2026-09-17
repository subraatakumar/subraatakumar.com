import Link from "next/link";
import { ArrowLeft, Mail, ShieldCheck } from "lucide-react";

export type LegalSection = {
  id: string;
  title: string;
  content: React.ReactNode;
};

export default function LegalPage({
  eyebrow,
  title,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <style>{`
        .br-legal { max-width: 1160px; margin: 0 auto; padding: 70px 28px 100px; }
        .br-legal-back { display: inline-flex; align-items: center; gap: 7px; color: var(--sa-muted); text-decoration: none; font-size: 13px; font-weight: 600; margin-bottom: 42px; }
        .br-legal-back:hover { color: var(--sa-text); }
        .br-legal-header { max-width: 820px; margin-bottom: 58px; }
        .br-legal-eyebrow { display: flex; align-items: center; gap: 8px; color: var(--sa-lime); font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .12em; margin-bottom: 18px; }
        .br-legal h1 { font-size: clamp(42px, 6vw, 70px); line-height: 1; letter-spacing: -.055em; margin: 0 0 22px; }
        .br-legal-intro { color: var(--sa-muted); font-size: 18px; line-height: 1.7; margin: 0; }
        .br-legal-date { color: #707c8b; font-size: 12px; margin-top: 20px; }
        .br-legal-grid { display: grid; grid-template-columns: 230px minmax(0, 1fr); gap: 58px; align-items: start; }
        .br-legal-nav { position: sticky; top: 100px; display: grid; gap: 3px; }
        .br-legal-nav-label { color: #687482; font-size: 10px; font-weight: 700; letter-spacing: .13em; text-transform: uppercase; margin: 0 0 10px 12px; }
        .br-legal-nav a { color: #98a4b3; text-decoration: none; font-size: 12px; line-height: 1.35; padding: 9px 12px; border-radius: 9px; }
        .br-legal-nav a:hover { color: var(--sa-text); background: rgba(255,255,255,.05); }
        .br-legal-content { min-width: 0; }
        .br-legal-section { scroll-margin-top: 104px; padding: 0 0 42px; margin-bottom: 42px; border-bottom: 1px solid var(--sa-line); }
        .br-legal-section:last-child { border-bottom: 0; }
        .br-legal-section h2 { font-size: 24px; letter-spacing: -.025em; margin: 0 0 18px; }
        .br-legal-section p, .br-legal-section li { color: var(--sa-muted); font-size: 14px; line-height: 1.78; }
        .br-legal-section p { margin: 0 0 15px; }
        .br-legal-section ul { padding-left: 20px; margin: 12px 0 18px; }
        .br-legal-section li { margin-bottom: 8px; padding-left: 4px; }
        .br-legal-section strong { color: #e5eaf0; }
        .br-legal-section a { color: var(--sa-cyan); }
        .br-legal-note { padding: 18px 20px; border: 1px solid rgba(183,243,74,.19); border-radius: 14px; background: rgba(183,243,74,.055); color: #cdd6df !important; }
        .br-legal-contact { display: flex; align-items: center; justify-content: space-between; gap: 20px; padding: 24px; border: 1px solid var(--sa-line); border-radius: 17px; background: var(--sa-panel); }
        .br-legal-contact a { color: var(--sa-lime); text-decoration: none; font-size: 13px; font-weight: 700; word-break: break-all; }
        @media (max-width: 760px) { .br-legal { padding: 48px 18px 76px; } .br-legal-grid { grid-template-columns: 1fr; gap: 20px; } .br-legal-nav { display: none; } .br-legal-header { margin-bottom: 44px; } .br-legal-contact { align-items: flex-start; flex-direction: column; } }
      `}</style>
      <article className="br-legal">
        <Link href="/background-remover" className="br-legal-back">
          <ArrowLeft size={15} /> Back to Background Remover
        </Link>
        <header className="br-legal-header">
          <div className="br-legal-eyebrow">
            <ShieldCheck size={14} /> {eyebrow}
          </div>
          <h1 className="sa-display">{title}</h1>
          <p className="br-legal-intro">{intro}</p>
          <p className="br-legal-date">
            Effective and last updated: September 17, 2026
          </p>
        </header>
        <div className="br-legal-grid">
          <nav className="br-legal-nav" aria-label={`${title} sections`}>
            <p className="br-legal-nav-label">On this page</p>
            {sections.map((section, index) => (
              <a href={`#${section.id}`} key={section.id}>
                {index + 1}. {section.title}
              </a>
            ))}
          </nav>
          <div className="br-legal-content">
            {sections.map((section) => (
              <section
                id={section.id}
                className="br-legal-section"
                key={section.id}
              >
                <h2 className="sa-display">{section.title}</h2>
                {section.content}
              </section>
            ))}
            <div className="br-legal-contact">
              <div>
                <strong>Questions about this document?</strong>
                <p
                  style={{
                    margin: "5px 0 0",
                    color: "var(--sa-muted)",
                    fontSize: 13,
                  }}
                >
                  Contact the Background Remover developer.
                </p>
              </div>
              <a href="mailto:subraatakumar+backgroundremover@gmail.com">
                <Mail
                  size={14}
                  style={{ verticalAlign: "middle", marginRight: 7 }}
                />
                subraatakumar+backgroundremover@gmail.com
              </a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
