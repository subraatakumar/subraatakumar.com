import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, absoluteUrl } from "@/lib/seo";
import HomeClient from "./HomeClient";

const IOS_URL =
  process.env.NEXT_PUBLIC_WATERTRACKER_IOS_URL ??
  "https://apps.apple.com/app/id6759248297";
const ANDROID_URL =
  process.env.NEXT_PUBLIC_WATERTRACKER_ANDROID_URL ??
  "https://play.google.com/store/apps/details?id=com.subraatakumar.watertracker";

const faq = [
  {
    q: "What makes Water Tracker N Reminder a good water tracker app?",
    a: "It combines quick logging, reminder schedules, trend insights, and local-first privacy controls without mandatory account setup.",
  },
  {
    q: "Does this water reminder app support both ml and oz?",
    a: "Yes, users can switch between ml and oz and track hydration with their preferred unit.",
  },
  {
    q: "Can I back up my hydration data?",
    a: "Yes. The app supports backup and restore flows to help with device migration and data continuity.",
  },
  {
    q: "Is WaterTracker privacy-first?",
    a: "Core hydration data is designed for local-first storage, and users can enable PIN/biometric protection options.",
  },
];

export const metadata: Metadata = {
  title: "Best Water Tracker App | Water Tracker N Reminder",
  description:
    "Water Tracker N Reminder is a privacy-first water tracker and water reminder app with quick logging, ml/oz support, reminders, trends, backup, and widget tools.",
  keywords: [
    "best water tracker app",
    "best water reminder app",
    "water tracker app",
    "water reminder app",
    "drink water reminder app",
    "hydration reminder app",
    "water intake tracker",
    "Water Tracker N Reminder",
  ],
  alternates: {
    canonical: "/watertracker",
  },
  openGraph: {
    title: "Best Water Tracker App | Water Tracker N Reminder",
    description:
      "Track water intake, set hydration reminders, and protect your logs with a privacy-first water tracker app.",
    url: "/watertracker",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Water Tracker App | Water Tracker N Reminder",
    description:
      "Water tracker + reminder app with custom drinks, trends, backup support, and local-first data model.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function WaterTrackerPage() {
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
                name: "Water Tracker N Reminder",
                applicationCategory: "HealthApplication",
                operatingSystem: "iOS, Android",
                url: absoluteUrl("/watertracker"),
                description:
                  "Water tracker and water reminder app with custom drinks, ml/oz support, hydration trends, backup, and local-first privacy architecture.",
                featureList: [
                  "Quick hydration logging",
                  "Reminder scheduling",
                  "Custom drink management",
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
                name: "Best Water Tracker App | Water Tracker N Reminder",
                url: absoluteUrl("/watertracker"),
                description:
                  "Overview page for Water Tracker N Reminder with feature walkthrough, screenshots, and download links.",
              },
            ],
          }),
        }}
      />
    </>
  );
}
