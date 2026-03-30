import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, absoluteUrl } from "@/lib/seo";
import HomeClient from "./HomeClient";

const IOS_URL =
  process.env.NEXT_PUBLIC_MOODTRACKER_IOS_URL;
const ANDROID_URL =
  process.env.NEXT_PUBLIC_MOODTRACKER_ANDROID_URL;

const faq = [
  {
    q: "What makes MoodTracker useful for daily mental wellness?",
    a: "It combines quick mood logging, reminder schedules, trend insights, and local-first privacy controls without mandatory account setup.",
  },
  {
    q: "Can I log moods quickly during a busy day?",
    a: "Yes. MoodTracker is designed for fast check-ins with optional notes, so entries stay lightweight and consistent.",
  },
  {
    q: "Can I back up my mood history?",
    a: "Yes. The app supports backup and restore flows to help with device migration and data continuity.",
  },
  {
    q: "Is MoodTracker privacy-first?",
    a: "Core mood data is designed for local-first storage, and users can enable PIN/biometric protection options.",
  },
];

export const metadata: Metadata = {
  title: "Mood Tracker App | Daily Mood Journal & Insights",
  description:
    "MoodTracker is a privacy-first mood tracker app with quick check-ins, reminders, trend insights, backup tools, and customizable mood labels.",
  keywords: [
    "mood tracker app",
    "daily mood tracker",
    "mood journal app",
    "emotional wellness tracker",
    "mental health tracking app",
    "mood check in app",
    "mood insights app",
    "MoodTracker",
  ],
  alternates: {
    canonical: "/moodtracker",
  },
  openGraph: {
    title: "Mood Tracker App | Daily Mood Journal & Insights",
    description:
      "Track mood, set gentle reminders, and protect your logs with a privacy-first mood tracker app.",
    url: "/moodtracker",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mood Tracker App | Daily Mood Journal & Insights",
    description:
      "Mood tracker + reminder app with custom labels, trends, backup support, and local-first data model.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function MoodTrackerPage() {
  return (
    <>
      <HomeClient iosUrl={IOS_URL} androidUrl={ANDROID_URL} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "SoftwareApplication",
                name: "MoodTracker",
                applicationCategory: "HealthApplication",
                operatingSystem: "iOS, Android",
                url: absoluteUrl("/moodtracker"),
                description:
                  "Mood tracker app with quick check-ins, reminders, trend insights, backup support, and local-first privacy architecture.",
                featureList: [
                  "Quick mood logging",
                  "Reminder scheduling",
                  "Custom mood labels",
                  "Trend dashboard",
                  "PIN and biometric options",
                  "Backup and restore",
                ],
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "USD",
                },
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
                name: "Mood Tracker App | Daily Mood Journal & Insights",
                url: absoluteUrl("/moodtracker"),
                description:
                  "Overview page for MoodTracker with feature walkthrough, benefits, and download links.",
              },
            ],
          }),
        }}
      />
    </>
  );
}
