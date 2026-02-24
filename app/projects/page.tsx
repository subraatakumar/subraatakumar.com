import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "Projects",
    template: "%s | Subrata Kumar Das",
  },
  description: "Selected projects by Subrata Kumar Das — Tech Lead and React Native Architect",
};

const projects = [
  {
    title: "Water Tracker",
    slug: "watertracker",
    desc: "A mobile app to track daily water intake with reminders and analytics for healthy hydration habits.",
  },
  {
    title: "She Health",
    slug: "shehealth",
    desc: "A women-first health platform delivering personalized care journeys and secure health tracking.",
  },
  {
    title: "TCBS CLI",
    slug: "tcbs-cli",
    desc: "A developer CLI tool for managing build workflows and automating common mobile release tasks.",
  },
  {
    title: "180 Days OfflineLifeArchive",
    slug: "180days",
    desc: "An archival app designed for offline journaling and life-logging across a 180-day challenge.",
  },
];

export default function ProjectsPage() {
  return (
    <section aria-labelledby="projects-heading" className="max-w-4xl mx-auto px-4 py-12">
      <h1 id="projects-heading" className="text-3xl font-semibold mb-8">Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article key={p.title} className="border rounded-lg p-6 bg-white">
            <h2 className="text-lg font-medium">{p.title}</h2>
            <p className="mt-3 text-sm text-gray-700">{p.desc}</p>
            <div className="mt-6">
              <Link href={`/${p.slug}`} className="inline-block px-4 py-2 border rounded text-sm">
                View Details
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
