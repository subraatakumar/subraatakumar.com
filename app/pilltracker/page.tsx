import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, absoluteUrl } from "@/lib/seo";
import HomeClient from "./HomeClient";

const IOS_URL = process.env.NEXT_PUBLIC_PILLTRACKER_IOS_URL;
const ANDROID_URL =
  process.env.NEXT_PUBLIC_PILLTRACKER_ANDROID_URL ??
  "https://play.google.com/store/apps/details?id=com.subraatakumar.pilltracker";

const featureList = [
  "Medication management with reminder scheduling",
  "Timeline actions: Taken, Skipped, Snoozed",
  "Inventory tracking with bill-based grouping",
  "Stock updates from dose and bill actions",
  "Optional PIN and biometric app lock",
  "Subscription, one-time plan, and rewarded unlock support",
];

const faq = [
  {
    q: "Does PillTracker require an account?",
    a: "No. PillTracker is local-first and does not require account creation for core tracking.",
  },
  {
    q: "Can users review previous days in timeline?",
    a: "Yes. The timeline supports date-based review for medication adherence logs.",
  },
  {
    q: "How is inventory updated?",
    a: "Inventory is updated by bill entries and dose actions, including undo support for taken doses.",
  },
];

export const metadata: Metadata = {
  title: "PillTracker | Offline-First Medicine Reminder and Inventory App",
  description:
    "PillTracker is an offline-first medicine reminder app with medication schedules, timeline tracking, bill-based inventory, and privacy-first local storage.",
  alternates: { canonical: "/pilltracker" },
  openGraph: {
    title: "PillTracker | Offline-First Medicine Reminder and Inventory App",
    description:
      "Track medicines, reminders, and inventory bills in an offline-first app with local data architecture.",
    url: "/pilltracker",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "PillTracker | Offline-First Medicine Reminder and Inventory App",
    description:
      "Medication schedules, timeline logging, inventory bills, and local privacy architecture in one app.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function PillTrackerPage() {
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
                name: "PillTracker",
                applicationCategory: "HealthApplication",
                operatingSystem: "iOS, Android",
                url: absoluteUrl("/pilltracker"),
                description:
                  "Offline-first medicine reminder and inventory app with timeline logging, reminder options, and bill-based stock management.",
                featureList,
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "USD",
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
            ],
          }),
        }}
      />
    </>
  );
}
