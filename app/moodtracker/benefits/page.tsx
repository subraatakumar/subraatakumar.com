import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, absoluteUrl } from "@/lib/seo";
import BenefitsClient from "./BenefitsClient";

export const metadata: Metadata = {
  title: "Mood Tracking Benefits | MoodTracker",
  description:
    "Learn practical mood tracking benefits: emotional awareness, stress pattern recognition, communication clarity, and stronger self-care consistency.",
  keywords: [
    "mood tracking benefits",
    "daily mood journal benefits",
    "mental wellness tracking",
    "emotional awareness app",
    "mood trend insights",
    "self reflection app",
  ],
  alternates: {
    canonical: "/moodtracker/benefits",
  },
  openGraph: {
    title: "Mood Tracking Benefits | MoodTracker",
    description:
      "Understand how mood tracking supports daily awareness and better emotional habits.",
    url: "/moodtracker/benefits",
    type: "article",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mood Tracking Benefits | MoodTracker",
    description:
      "Practical guidance on mood tracking for better awareness, communication, and routine quality.",
    images: [DEFAULT_OG_IMAGE],
  },
};

const sections = [
  {
    id: "self-awareness",
    title: "Higher Emotional Awareness",
    summary:
      "Logging mood regularly helps you notice emotional shifts earlier and respond with intention instead of reacting late.",
    bullets: [
      "Recognize changes before they escalate",
      "Build language around your feelings",
      "Improve day-to-day emotional clarity",
    ],
  },
  {
    id: "trigger-patterns",
    title: "Recognize Triggers and Patterns",
    summary:
      "Trend history makes recurring triggers more visible, helping you adjust routines and boundaries with real data.",
    bullets: [
      "Identify patterns tied to sleep, work, or social events",
      "Spot better and worse days over time",
      "Make proactive changes with confidence",
    ],
  },
  {
    id: "stress-management",
    title: "Better Stress Management",
    summary:
      "When stress is tracked consistently, coping actions become easier to evaluate and improve.",
    bullets: [
      "Use reminders to pause and check in",
      "Track what helps during difficult moments",
      "Build repeatable calming routines",
    ],
  },
  {
    id: "habit-formation",
    title: "Habit Formation Through Check-ins",
    summary:
      "The strongest benefit of a mood tracker is behavioral: consistency turns reflection into a lasting habit.",
    bullets: [
      "Turns reflection into a trackable routine",
      "Shows completion and consistency trends",
      "Improves adherence through simple daily feedback",
    ],
  },
  {
    id: "communication",
    title: "Clearer Communication",
    summary:
      "Mood logs make it easier to communicate what you feel to trusted people, including therapists or support circles.",
    bullets: [
      "Use timeline history for better conversations",
      "Share clearer context when needed",
      "Reduce “I don’t know how I felt” moments",
    ],
  },
  {
    id: "privacy",
    title: "Private Reflection Space",
    summary:
      "A local-first design encourages honesty. Private mood notes are easier to maintain when you trust where data lives.",
    bullets: [
      "Local-first storage for personal confidence",
      "Optional lock protection",
      "More consistent journaling with stronger trust",
    ],
  },
];

const faq = [
  {
    q: "Do I need to write long notes each time?",
    a: "No. Even quick one-tap entries are useful. Notes are optional and can be added when needed.",
  },
  {
    q: "How often should I track mood?",
    a: "Most users benefit from 2-4 check-ins per day, plus extra logs during major emotional shifts.",
  },
  {
    q: "Can mood tracking replace therapy?",
    a: "No. Mood tracking is a supportive self-awareness tool, not a replacement for professional mental health care.",
  },
  {
    q: "Can reminders help consistency?",
    a: "Yes. Gentle reminders significantly improve check-in consistency for most users.",
  },
];

export default function MoodTrackerBenefitsPage() {
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
                headline: "Benefits of Daily Mood Tracking",
                description:
                  "Practical mood tracking benefits for emotional awareness, pattern recognition, and healthier routines.",
                url: absoluteUrl("/moodtracker/benefits"),
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
                    name: "Mood Tracker",
                    item: absoluteUrl("/moodtracker"),
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Benefits",
                    item: absoluteUrl("/moodtracker/benefits"),
                  },
                ],
              },
              {
                "@type": "WebPage",
                name: "Mood Tracking Benefits | MoodTracker",
                url: absoluteUrl("/moodtracker/benefits"),
              },
            ],
          }),
        }}
      />
    </>
  );
}
