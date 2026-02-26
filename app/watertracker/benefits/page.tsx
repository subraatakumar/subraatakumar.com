import Link from "next/link";
import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Balanced Drinking Benefits",
  description:
    "Learn the practical health benefits of balanced hydration, how water intake affects focus, energy, digestion, and how to avoid over- or under-drinking.",
  alternates: {
    canonical: "/watertracker/benefits",
  },
  openGraph: {
    title: "Balanced Hydration Benefits | WaterTracker",
    description:
      "Practical guide to balanced hydration and how consistent water intake supports daily health.",
    url: "/watertracker/benefits",
    type: "article",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Balanced Hydration Benefits | WaterTracker",
    description:
      "Practical guide to balanced hydration and how consistent water intake supports daily health.",
    images: [DEFAULT_OG_IMAGE],
  },
};

const benefits = [
  {
    title: "Better Focus and Mental Clarity",
    body:
      "Mild dehydration can reduce concentration. Balanced fluid intake helps maintain attention, memory, and decision-making through the day.",
  },
  {
    title: "Steadier Energy",
    body:
      "When hydration is consistent, fatigue tends to reduce and daily activity feels more sustainable, especially in long work sessions.",
  },
  {
    title: "Support for Digestion and Metabolism",
    body:
      "Adequate water supports digestion and regular bowel function, and helps your body process nutrients effectively.",
  },
  {
    title: "Temperature and Physical Performance",
    body:
      "Hydration helps regulate body temperature and supports exercise performance, especially in warm conditions.",
  },
  {
    title: "Kidney and Urinary Health Support",
    body:
      "Consistent hydration supports healthy urine flow and can reduce risk associated with concentrated urine patterns.",
  },
  {
    title: "Healthier Habit Formation",
    body:
      "Tracking water intake creates awareness and consistency, helping people build sustainable long-term routines.",
  },
];

const faq = [
  {
    q: "What is balanced drinking?",
    a: "Balanced drinking means meeting your body’s hydration needs consistently without going too low or too high.",
  },
  {
    q: "Is more water always better?",
    a: "No. Excessive intake in short time can be harmful. Hydration should be paced across the day and aligned with your body and activity.",
  },
  {
    q: "Does tea or coffee count as fluid intake?",
    a: "Yes. They contribute to total fluid intake, though plain water is still the simplest base for daily hydration.",
  },
  {
    q: "How do I find my ideal daily goal?",
    a: "Start with a moderate goal, monitor thirst and urine color trends, then adjust for climate, activity, and health conditions.",
  },
];

export default function WaterTrackerBenefitsPage() {
  return (
    <article>
      <style>{`
        .wtb-wrap {
          border-radius: 24px;
          border: 1px solid rgba(16, 36, 79, 0.1);
          background: rgba(255,255,255,0.86);
          padding: 30px 26px;
        }
        .wtb-wrap h1 {
          margin: 0;
          font-size: clamp(2rem, 4vw, 3rem);
          letter-spacing: -0.03em;
          color: #0f2458;
        }
        .wtb-intro {
          margin: 12px 0 20px;
          color: #4a5f8c;
          line-height: 1.8;
          max-width: 900px;
        }
        .wtb-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }
        .wtb-card {
          border-radius: 16px;
          border: 1px solid rgba(16, 36, 79, 0.1);
          background: #fff;
          padding: 14px;
        }
        .wtb-card b {
          color: #14336f;
          display: block;
          margin-bottom: 5px;
          font-size: 1rem;
        }
        .wtb-card p {
          margin: 0;
          color: #4b5f89;
          line-height: 1.6;
          font-size: 0.95rem;
        }
        .wtb-sec {
          margin-top: 16px;
          border-radius: 16px;
          border: 1px solid rgba(16, 36, 79, 0.1);
          background: #fff;
          padding: 16px;
        }
        .wtb-sec h2 {
          margin: 0 0 8px;
          color: #0f2458;
          font-size: 1.35rem;
        }
        .wtb-faq {
          display: grid;
          gap: 10px;
        }
        .wtb-faq-item {
          border-radius: 12px;
          border: 1px solid rgba(16, 36, 79, 0.1);
          background: #f8fcff;
          padding: 12px;
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
          font-size: 13px;
          text-transform: uppercase;
          font-weight: 800;
          letter-spacing: 0.04em;
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
        @media (max-width: 820px) {
          .wtb-wrap {
            padding: 22px 16px;
          }
          .wtb-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="wtb-wrap">
        <h1 className="wt-font-display">Benefits of Balanced Drinking</h1>
        <p className="wtb-intro">
          Balanced hydration is not about drinking as much as possible. It means
          giving your body the right amount of fluid consistently so daily functions
          like focus, energy, digestion, and recovery stay stable.
        </p>

        <div className="wtb-grid">
          {benefits.map((item) => (
            <div key={item.title} className="wtb-card">
              <b>{item.title}</b>
              <p>{item.body}</p>
            </div>
          ))}
        </div>

        <div className="wtb-sec">
          <h2 className="wt-font-display">Common Questions</h2>
          <div className="wtb-faq">
            {faq.map((item) => (
              <div key={item.q} className="wtb-faq-item">
                <b>{item.q}</b>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
          <div className="wtb-note">
            General guidance only. If you have kidney, heart, endocrine, or other medical
            conditions affecting fluid intake, follow your clinician’s advice.
          </div>
        </div>

        <div className="wtb-actions">
          <Link href="/watertracker" className="wtb-btn wtb-btn-primary">Back To Overview</Link>
          <Link href="/watertracker/guide" className="wtb-btn wtb-btn-ghost">Open How-To Guide</Link>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                headline: "Benefits of Balanced Drinking",
                description:
                  "Practical health benefits of balanced hydration and safe intake habits.",
                url: absoluteUrl("/watertracker/benefits"),
                author: {
                  "@type": "Person",
                  name: "Subrata Kumar Das",
                },
              },
              {
                "@type": "FAQPage",
                mainEntity: faq.map((item) => ({
                  "@type": "Question",
                  name: item.q,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: item.a,
                  },
                })),
              },
              {
                "@type": "WebPage",
                name: "Balanced Drinking Benefits",
                url: absoluteUrl("/watertracker/benefits"),
              },
            ],
          }),
        }}
      />
    </article>
  );
}
