"use client";

import Image from "next/image";
import Link from "next/link";
import { useWaterTrackerScrollSpy } from "../components/useWaterTrackerScrollSpy";

type BenefitSection = {
  id: string;
  title: string;
  summary: string;
  bullets: string[];
  image?: {
    src: string;
    alt: string;
    caption: string;
  };
};

type BenefitFaq = {
  q: string;
  a: string;
};

export default function BenefitsClient({ sections, faq }: { sections: BenefitSection[]; faq: BenefitFaq[] }) {
  const { activeSection, jumpTo } = useWaterTrackerScrollSpy(sections.map((section) => section.id), sections[0]?.id);

  return (
    <article>
      <style>{`
        .wtb-hero {
          border-radius: 24px;
          border: 1px solid rgba(16, 36, 79, 0.1);
          background: var(--wt-card);
          padding: 30px;
          margin-bottom: 18px;
        }
        .wtb-hero h1 {
          margin: 0;
          font-size: clamp(2rem, 4vw, 3.3rem);
          letter-spacing: -0.03em;
          color: var(--wt-navy-900);
        }
        .wtb-hero p {
          margin: 12px 0 0;
          color: var(--wt-muted);
          line-height: 1.75;
          max-width: 860px;
        }
        .wtb-mobile-jumps {
          display: none;
        }
        .wtb-layout {
          display: flex;
          gap: 24px;
          align-items: flex-start;
        }
        .wtb-sidebar {
          width: 230px;
          flex-shrink: 0;
          position: sticky;
          top: 86px;
        }
        .wtb-sidebar-title {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          color: var(--wt-muted);
          margin: 0 0 10px;
          padding: 0 12px;
        }
        .wtb-nav-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .wtb-nav-btn {
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
        .wtb-nav-btn:hover {
          background: rgba(79, 136, 255, 0.1);
        }
        .wtb-nav-btn.active {
          color: #fff;
          background: linear-gradient(140deg, #4f88ff, #3ec1ff);
          box-shadow: 0 5px 14px rgba(31, 79, 157, 0.2);
        }
        .wtb-content {
          flex: 1;
          min-width: 0;
          display: grid;
          gap: 14px;
        }
        .wtb-card {
          background: var(--wt-card);
          border: 1px solid rgba(16, 36, 79, 0.09);
          border-radius: 20px;
          padding: 24px;
          scroll-margin-top: 95px;
        }
        .wtb-card h2 {
          margin: 0;
          color: var(--wt-navy-900);
          letter-spacing: -0.02em;
          font-size: clamp(1.24rem, 2.3vw, 1.7rem);
        }
        .wtb-card p {
          margin: 10px 0 0;
          color: var(--wt-muted);
          line-height: 1.7;
          font-size: 15px;
        }
        .wtb-points {
          margin: 14px 0 0;
          display: grid;
          gap: 8px;
        }
        .wtb-point {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: var(--wt-navy-900);
          font-size: 14px;
          font-weight: 700;
        }
        .wtb-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          margin-top: 6px;
          background: linear-gradient(140deg, #4f88ff, #3ec1ff);
          flex-shrink: 0;
        }
        .wtb-shot {
          margin-top: 14px;
          border: 1px solid rgba(16, 36, 79, 0.08);
          border-radius: 14px;
          background: #fff;
          padding: 10px;
        }
        .wtb-shot figure {
          margin: 0;
        }
        .wtb-shot img {
          border-radius: 10px;
          width: 100%;
          height: auto;
        }
        .wtb-shot figcaption {
          margin-top: 8px;
          font-size: 12px;
          color: var(--wt-muted);
          font-weight: 700;
        }
        .wtb-faq {
          background: #fff;
          border: 1px solid rgba(16, 36, 79, 0.1);
          border-radius: 16px;
          padding: 16px;
        }
        .wtb-faq h2 {
          margin: 0 0 10px;
          color: var(--wt-navy-900);
          font-size: 1.2rem;
        }
        .wtb-faq-item {
          border-radius: 12px;
          border: 1px solid rgba(16, 36, 79, 0.1);
          background: #f8fcff;
          padding: 12px;
        }
        .wtb-faq-item + .wtb-faq-item {
          margin-top: 8px;
        }
        .wtb-faq-item b {
          color: #17386f;
          display: block;
          margin-bottom: 4px;
        }
        .wtb-faq-item p {
          margin: 0;
          color: #4d5f86;
          line-height: 1.6;
          font-size: 0.95rem;
        }
        .wtb-note {
          margin-top: 10px;
          border-radius: 12px;
          border: 1px solid rgba(245, 158, 11, 0.35);
          background: #fff8eb;
          color: #7c4a04;
          padding: 10px 12px;
          font-size: 0.92rem;
          line-height: 1.6;
        }
        .wtb-actions {
          margin-top: 14px;
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .wtb-btn {
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
        .wtb-btn-primary {
          background: #3f82ff;
          color: #fff;
        }
        .wtb-btn-ghost {
          border: 1px solid rgba(16, 36, 79, 0.2);
          color: #17386f;
          background: #fff;
        }
        @media (max-width: 860px) {
          .wtb-hero { padding: 22px 16px; }
          .wtb-layout { flex-direction: column; }
          .wtb-sidebar { display: none; }
          .wtb-mobile-jumps {
            display: flex;
            flex-wrap: nowrap;
            overflow-x: auto;
            gap: 8px;
            margin-bottom: 8px;
            padding-bottom: 8px;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .wtb-mobile-jumps::-webkit-scrollbar { display: none; }
          .wtb-mobile-jumps button {
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
          .wtb-card { padding: 20px 14px; }
        }
      `}</style>

      <div className="wtb-hero">
        <h1 className="wt-font-display">Benefits of Balanced Drinking and Hydration Tracking</h1>
        <p>
          Better hydration is not about drinking endlessly. It is about consistency, timing, and awareness.
          This page explains practical hydration benefits and how a water tracker app helps build sustainable habits.
        </p>
      </div>

      <div className="wtb-mobile-jumps" aria-label="Benefits section jumps">
        {sections.map((section) => (
          <button key={section.id} type="button" onClick={() => jumpTo(section.id)}>
            {section.title}
          </button>
        ))}
      </div>

      <div className="wtb-layout">
        <aside className="wtb-sidebar" aria-label="Benefits sections">
          <p className="wtb-sidebar-title">Benefit Topics</p>
          <div className="wtb-nav-list">
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => jumpTo(section.id)}
                className={`wtb-nav-btn ${activeSection === section.id ? "active" : ""}`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </aside>

        <div className="wtb-content">
          {sections.map((section) => (
            <section id={section.id} key={section.id} className="wtb-card">
              <h2 className="wt-font-display">{section.title}</h2>
              <p>{section.summary}</p>
              <div className="wtb-points" role="list" aria-label={`${section.title} details`}>
                {section.bullets.map((item) => (
                  <div className="wtb-point" role="listitem" key={item}>
                    <span className="wtb-dot" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {section.image ? (
                <div className="wtb-shot">
                  <figure>
                    <Image src={section.image.src} alt={section.image.alt} width={1242} height={2688} sizes="(max-width: 860px) 100vw, 720px" />
                    <figcaption>{section.image.caption}</figcaption>
                  </figure>
                </div>
              ) : null}
            </section>
          ))}

          <div className="wtb-faq">
            <h2 className="wt-font-display">Common Questions</h2>
            {faq.map((item) => (
              <div key={item.q} className="wtb-faq-item">
                <b>{item.q}</b>
                <p>{item.a}</p>
              </div>
            ))}
            <div className="wtb-note">
              General wellness information only. If you have kidney, heart, endocrine, or medically restricted fluid needs,
              follow your clinician guidance for hydration targets.
            </div>
            <div className="wtb-actions">
              <Link href="/watertracker" className="wtb-btn wtb-btn-primary">Back To Overview</Link>
              <Link href="/watertracker/guide" className="wtb-btn wtb-btn-ghost">Open How-To Guide</Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
