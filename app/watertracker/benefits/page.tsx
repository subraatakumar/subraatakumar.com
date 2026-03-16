import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, absoluteUrl } from "@/lib/seo";
import BenefitsClient from "./BenefitsClient";

export const metadata: Metadata = {
  title: "Hydration Benefits | Water Tracker N Reminder",
  description:
    "Learn practical hydration benefits: focus, energy, digestion, performance, and how balanced water intake with reminder tracking improves consistency.",
  keywords: [
    "hydration benefits",
    "benefits of drinking water",
    "balanced hydration",
    "water intake benefits",
    "how much water should i drink",
    "hydration reminder benefits",
  ],
  alternates: {
    canonical: "/watertracker/benefits",
  },
  openGraph: {
    title: "Hydration Benefits | Water Tracker N Reminder",
    description:
      "Understand balanced water intake benefits and build sustainable hydration routines.",
    url: "/watertracker/benefits",
    type: "article",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hydration Benefits | Water Tracker N Reminder",
    description:
      "Evidence-aligned hydration guidance for better focus, energy, recovery, and routine quality.",
    images: [DEFAULT_OG_IMAGE],
  },
};

const sections = [
  {
    id: "focus-energy",
    title: "Focus and Energy Stability",
    summary:
      "Mild dehydration can affect focus and perceived energy. Consistent intake through the day supports steadier mental performance.",
    bullets: [
      "Supports day-long concentration",
      "Reduces irregular hydration crashes",
      "Helps maintain stable work rhythm",
    ],
    image: {
      src: "/watertrackerimages/5.png",
      alt: "Hydration dashboard helping daily consistency",
      caption: "Consistency support through daily tracking",
    },
  },
  {
    id: "digestion-recovery",
    title: "Digestion and Recovery Support",
    summary:
      "Balanced hydration supports digestion and helps your body handle daily recovery needs, especially during active routines.",
    bullets: [
      "Supports digestion function",
      "Helps maintain physical comfort",
      "Improves routine adherence for active days",
    ],
  },
  {
    id: "performance-heat",
    title: "Performance and Heat Response",
    summary:
      "During warm weather or training days, hydration planning helps reduce avoidable fatigue and performance drop-offs.",
    bullets: [
      "Timely fluid reminders in long work/exercise blocks",
      "Better awareness during hot conditions",
      "Goal-based progress for high-activity days",
    ],
    image: {
      src: "/watertrackerimages/4.png",
      alt: "Hydration reminder schedule for maintaining intake",
      caption: "Reminder-driven hydration timing",
    },
  },
  {
    id: "habit-formation",
    title: "Habit Formation Through Tracking",
    summary:
      "The strongest benefit of a water tracker app is behavioral: visibility makes habits measurable and easier to maintain.",
    bullets: [
      "Turns hydration into a trackable routine",
      "Shows completion and consistency trends",
      "Improves adherence through simple daily feedback",
    ],
    image: {
      src: "/watertrackerimages/9.png",
      alt: "Hydration trend chart for habit review",
      caption: "Trend insight for long-term habit building",
    },
  },
  {
    id: "personalization",
    title: "Personalized Intake Workflow",
    summary:
      "Different people drink different fluids in different patterns. Custom drink types and units make plans realistic.",
    bullets: [
      "Custom drink list with flexible volume",
      "Track in ml or oz based on preference",
      "Better fit for real-world routines",
    ],
    image: {
      src: "/watertrackerimages/8.png",
      alt: "Custom drink type and volume setup",
      caption: "Personalized drink setup for practical tracking",
    },
  },
  {
    id: "safe-balanced",
    title: "Balanced vs Excessive Intake",
    summary:
      "More water is not always better. The goal is appropriate intake spread through the day, not overdrinking in short windows.",
    bullets: [
      "Use reminders for pacing, not overloading",
      "Adjust target with climate and activity",
      "Follow medical advice for clinical conditions",
    ],
  },
];

const faq = [
  {
    q: "Is more water always better?",
    a: "No. Hydration should be balanced and paced through the day. Excessive intake in short time can be harmful.",
  },
  {
    q: "Does tea or coffee count toward hydration?",
    a: "Yes, they contribute to total fluid intake for most people, though plain water remains a simple base option.",
  },
  {
    q: "What is a practical way to improve hydration?",
    a: "Set a realistic goal, schedule reminders, use custom drinks, and review trends weekly for consistency.",
  },
  {
    q: "Can a water reminder app help habit formation?",
    a: "Yes. Reminders plus visible progress make daily hydration behavior easier to sustain.",
  },
];

export default function WaterTrackerBenefitsPage() {
  return (
    <>
      <BenefitsClient sections={[...sections]} faq={[...faq]} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                headline: "Benefits of Balanced Drinking and Hydration Tracking",
                description:
                  "Practical hydration benefits and safe balanced intake principles for consistent daily routine.",
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
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Water Tracker",
                    item: absoluteUrl("/watertracker"),
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Benefits",
                    item: absoluteUrl("/watertracker/benefits"),
                  },
                ],
              },
              {
                "@type": "WebPage",
                name: "Hydration Benefits | Water Tracker N Reminder",
                url: absoluteUrl("/watertracker/benefits"),
              },
            ],
          }),
        }}
      />
    </>
  );
}
