"use client";

import Image from "next/image";
import Link from "next/link";
import { useWaterTrackerScrollSpy } from "../components/useWaterTrackerScrollSpy";

type GuideSection = {
  id: string;
  title: string;
  intro: string;
  steps: string[];
  image?: {
    src: string;
    alt: string;
    caption: string;
  };
};

type GuideFaq = {
  q: string;
  a: string;
};

export default function GuideClient({ sections, faq }: { sections: GuideSection[]; faq: GuideFaq[] }) {
  const { activeSection, jumpTo } = useWaterTrackerScrollSpy(sections.map((section) => section.id), sections[0]?.id);

  return (
    <article>
      <style>{`
        .wtg-header {
          border-radius: 24px;
          border: 1px solid rgba(16, 36, 79, 0.1);
          background: var(--wt-card);
          padding: 30px;
          margin-bottom: 18px;
        }
        .wtg-header h1 {
          margin: 0;
          font-size: clamp(2rem, 4vw, 3.4rem);
          letter-spacing: -0.03em;
          color: var(--wt-navy-900);
        }
        .wtg-header p {
          margin: 12px 0 0;
          color: var(--wt-muted);
          line-height: 1.75;
          max-width: 840px;
          font-size: 1rem;
        }
        .wtg-mobile-jumps {
          display: none;
        }
        .wtg-layout {
          display: flex;
          gap: 24px;
          align-items: flex-start;
        }
        .wtg-sidebar {
          width: 240px;
          flex-shrink: 0;
          position: sticky;
          top: 86px;
        }
        .wtg-sidebar-title {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          color: var(--wt-muted);
          margin: 0 0 10px;
          padding: 0 12px;
        }
        .wtg-nav-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .wtg-nav-btn {
          border: none;
          text-align: left;
          cursor: pointer;
          width: 100%;
          padding: 9px 13px;
          border-radius: 11px;
          font-size: 13px;
          font-weight: 700;
          color: var(--wt-muted);
          background: transparent;
        }
        .wtg-nav-btn:hover {
          background: rgba(79, 136, 255, 0.1);
        }
        .wtg-nav-btn.active {
          color: #fff;
          background: linear-gradient(140deg, #4f88ff, #3ec1ff);
          box-shadow: 0 5px 14px rgba(31, 79, 157, 0.2);
        }
        .wtg-content {
          flex: 1;
          min-width: 0;
          display: grid;
          gap: 14px;
        }
        .wtg-section {
          background: var(--wt-card);
          border: 1px solid rgba(16, 36, 79, 0.09);
          border-radius: 20px;
          padding: 24px;
          scroll-margin-top: 95px;
        }
        .wtg-section h2 {
          margin: 0;
          color: var(--wt-navy-900);
          letter-spacing: -0.02em;
          font-size: clamp(1.25rem, 2.4vw, 1.8rem);
        }
        .wtg-section p {
          margin: 10px 0 0;
          color: var(--wt-muted);
          line-height: 1.7;
          font-size: 15px;
        }
        .wtg-steps {
          margin-top: 15px;
          display: grid;
          gap: 8px;
        }
        .wtg-step {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 9px 10px;
          border-radius: 10px;
          background: rgba(79, 136, 255, 0.06);
          border: 1px solid rgba(79, 136, 255, 0.12);
          color: var(--wt-navy-900);
          font-size: 14px;
          font-weight: 700;
        }
        .wtg-step-n {
          width: 22px;
          height: 22px;
          border-radius: 999px;
          background: linear-gradient(140deg, #4f88ff, #3ec1ff);
          color: #fff;
          font-size: 12px;
          font-weight: 800;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .wtg-shot {
          margin-top: 14px;
          border: 1px solid rgba(16, 36, 79, 0.08);
          border-radius: 14px;
          padding: 10px;
          background: #fff;
        }
        .wtg-shot figure {
          margin: 0;
        }
        .wtg-shot img {
          border-radius: 10px;
          width: 100%;
          height: auto;
        }
        .wtg-shot figcaption {
          margin-top: 8px;
          font-size: 12px;
          color: var(--wt-muted);
          font-weight: 700;
        }
        .wtg-faq-wrap {
          margin-top: 6px;
          background: #fff;
          border: 1px solid rgba(16, 36, 79, 0.1);
          border-radius: 16px;
          padding: 16px;
        }
        .wtg-faq-wrap h2 {
          margin: 0 0 10px;
          color: var(--wt-navy-900);
          font-size: 1.2rem;
        }
        .wtg-faq-item {
          border-radius: 12px;
          border: 1px solid rgba(16, 36, 79, 0.1);
          background: #f8fcff;
          padding: 12px;
        }
        .wtg-faq-item + .wtg-faq-item {
          margin-top: 8px;
        }
        .wtg-faq-item b {
          color: #17386f;
          display: block;
          margin-bottom: 4px;
        }
        .wtg-faq-item p {
          margin: 0;
          color: #4d5f86;
          line-height: 1.6;
          font-size: 0.95rem;
        }
        .wtg-actions {
          margin-top: 16px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .wtg-btn {
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 42px;
          padding: 0 14px;
          border-radius: 10px;
          font-size: 12px;
          text-transform: uppercase;
          font-weight: 800;
          letter-spacing: 0.05em;
          border: 1px solid transparent;
        }
        .wtg-btn-primary {
          background: #3f82ff;
          color: #fff;
        }
        .wtg-btn-ghost {
          border-color: rgba(16, 36, 79, 0.2);
          color: #17386f;
          background: #fff;
        }
        @media (max-width: 860px) {
          .wtg-header { padding: 22px 16px; }
          .wtg-layout { flex-direction: column; }
          .wtg-sidebar { display: none; }
          .wtg-mobile-jumps {
            display: flex;
            flex-wrap: nowrap;
            overflow-x: auto;
            gap: 8px;
            margin-bottom: 8px;
            padding-bottom: 8px;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .wtg-mobile-jumps::-webkit-scrollbar { display: none; }
          .wtg-mobile-jumps button {
            border: 1px solid rgba(16, 36, 79, 0.16);
            background: rgba(255, 255, 255, 0.8);
            color: var(--wt-navy-900);
            border-radius: 999px;
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            padding: 8px 12px;
            white-space: nowrap;
          }
          .wtg-section { padding: 20px 14px; }
        }
      `}</style>

      <div className="wtg-header">
        <h1 className="wt-font-display">WaterTracker Setup and Usage Guide</h1>
        <p>
          This guide mirrors the real WaterTracker app flow: setup goal, configure reminders,
          manage drinks, log intake, monitor trends, and secure/backup your data.
        </p>
      </div>

      <div className="wtg-mobile-jumps" aria-label="Guide section jumps">
        {sections.map((section) => (
          <button key={section.id} type="button" onClick={() => jumpTo(section.id)}>
            {section.title}
          </button>
        ))}
      </div>

      <div className="wtg-layout">
        <aside className="wtg-sidebar" aria-label="Guide sections">
          <p className="wtg-sidebar-title">Guide Sections</p>
          <div className="wtg-nav-list">
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => jumpTo(section.id)}
                className={`wtg-nav-btn ${activeSection === section.id ? "active" : ""}`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </aside>

        <div className="wtg-content">
          {sections.map((section) => (
            <section id={section.id} key={section.id} className="wtg-section">
              <h2 className="wt-font-display">{section.title}</h2>
              <p>{section.intro}</p>
              <div className="wtg-steps" role="list" aria-label={`${section.title} steps`}>
                {section.steps.map((item, idx) => (
                  <div className="wtg-step" key={item} role="listitem">
                    <span className="wtg-step-n">{idx + 1}</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {section.image ? (
                <div className="wtg-shot">
                  <figure>
                    <Image src={section.image.src} alt={section.image.alt} width={1242} height={2688} sizes="(max-width: 860px) 100vw, 720px" />
                    <figcaption>{section.image.caption}</figcaption>
                  </figure>
                </div>
              ) : null}
            </section>
          ))}

          <div className="wtg-faq-wrap">
            <h2 className="wt-font-display">Quick FAQ</h2>
            {faq.map((item) => (
              <div key={item.q} className="wtg-faq-item">
                <b>{item.q}</b>
                <p>{item.a}</p>
              </div>
            ))}
            <div className="wtg-actions">
              <Link href="/watertracker" className="wtg-btn wtg-btn-primary">Back To Overview</Link>
              <Link href="/watertracker/benefits" className="wtg-btn wtg-btn-ghost">Hydration Benefits</Link>
              <Link href="/contact" className="wtg-btn wtg-btn-ghost">Contact Support</Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
