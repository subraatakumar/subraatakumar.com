import type { Metadata } from "next";
import GuideClient from "./GuideClient";
import { DEFAULT_OG_IMAGE, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mood Tracker Guide | Setup Check-ins, Reminders, and Insights",
  description:
    "Step-by-step MoodTracker guide: create mood labels, log check-ins, configure reminders, review trends, and use backup/restore securely.",
  keywords: [
    "mood tracker guide",
    "how to use mood tracker app",
    "set mood reminders",
    "daily mood check in",
    "mood tracker backup restore",
    "mood app tutorial",
  ],
  alternates: {
    canonical: "/moodtracker/guide",
  },
  openGraph: {
    title: "Mood Tracker Guide | Setup Check-ins, Reminders, and Insights",
    description:
      "Complete how-to guide for MoodTracker with setup flow and best-practice usage tips.",
    url: "/moodtracker/guide",
    type: "article",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mood Tracker Guide | Setup Check-ins, Reminders, and Insights",
    description:
      "Learn MoodTracker setup: labels, reminders, check-ins, trends, and backup/restore.",
    images: [DEFAULT_OG_IMAGE],
  },
};

const sections = [
  {
    id: "start-home",
    title: "Start From Home Screen",
    intro:
      "Open the app and begin with the home screen. It shows your latest mood activity and quick actions.",
    steps: [
      "Open Home and review today's mood timeline.",
      "Tap quick add to log your current mood.",
      "Add a short note if you want more context.",
    ],
  },
  {
    id: "mood-entry",
    title: "Create A Mood Entry",
    intro:
      "Use the mood entry flow to capture how you feel with optional tags and notes.",
    steps: [
      "Choose your mood label from presets or custom labels.",
      "Set date/time if recording a past moment.",
      "Add optional note and save the entry.",
    ],
  },
  {
    id: "set-reminders",
    title: "Set Reminder Schedule",
    intro:
      "Configure check-in reminders so the app supports your daily emotional awareness routine.",
    steps: [
      "Add reminder times aligned with your day.",
      "Set follow-up reminders for missed check-ins.",
      "Choose notification style: silent or sound.",
    ],
  },
  {
    id: "manage-labels",
    title: "Manage Mood Labels",
    intro:
      "Customize your mood labels so logging feels personal and meaningful.",
    steps: [
      "Open Manage Labels from settings.",
      "Add, edit, or reorder mood labels.",
      "Assign colors to improve visual scanning.",
    ],
  },
  {
    id: "review-trends",
    title: "Review Mood Trends",
    intro:
      "Use trend charts to understand emotional patterns over time.",
    steps: [
      "Open the Trends view from Home.",
      "Choose weekly or monthly range.",
      "Look for repeating triggers and recovery patterns.",
    },
  },
  {
    id: "backup-restore",
    title: "Backup and Restore Data",
    intro:
      "Use backup and restore when changing devices so your mood history stays safe.",
    steps: [
      "Open Backup & Restore screen from configuration.",
      "Create backup and confirm latest timestamp.",
      "Restore only from trusted backup points.",
    ],
  },
  {
    id: "appearance",
    title: "Personalize Appearance",
    intro:
      "Choose theme and appearance options to make the app feel natural for long-term use.",
    steps: [
      "Open Appearance settings from Home menu.",
      "Preview available themes and pick one that fits your style.",
      "Apply appearance and continue tracking with same data.",
    ],
  },
  {
    id: "privacy-lock",
    title: "Protect Data with Privacy Controls",
    intro:
      "MoodTracker follows local-first design. Add lock controls for extra protection when sharing your device.",
    steps: [
      "Enable PIN lock from configuration.",
      "Enable biometric unlock after PIN is configured.",
      "Review privacy policy and terms for the complete data model.",
    ],
  },
];

const faq = [
  {
    q: "Do I need an account to use MoodTracker?",
    a: "No. Core tracking flow is designed to work without account signup.",
  },
  {
    q: "Can I customize mood labels?",
    a: "Yes. Manage Labels lets you add your own mood labels with color and ordering controls.",
  },
  {
    q: "Can I add notes to each mood check-in?",
    a: "Yes. Entries support optional notes so you can capture context around how you felt.",
  },
  {
    q: "Where should I start if I am new?",
    a: "Start with reminder setup, then your label list, then daily check-ins. After that, review trends weekly.",
  },
];

export default function Page() {
  return (
    <>
      <GuideClient sections={[...sections]} faq={[...faq]} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "HowTo",
                name: "How to use MoodTracker",
                description:
                  "Step-by-step guide for setting up mood labels, reminders, trends, and backup in MoodTracker.",
                url: absoluteUrl("/moodtracker/guide"),
                step: sections.map((section, idx) => ({
                  "@type": "HowToStep",
                  position: idx + 1,
                  name: section.title,
                  text: section.intro,
                })),
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
                    name: "Guide",
                    item: absoluteUrl("/moodtracker/guide"),
                  },
                ],
              },
              {
                "@type": "WebPage",
                name: "Mood Tracker Guide",
                url: absoluteUrl("/moodtracker/guide"),
              },
            ],
          }),
        }}
      />
    </>
  );
}
