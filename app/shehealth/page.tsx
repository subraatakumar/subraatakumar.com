import Link from "next/link";

export default function SheHealthPage() {
  return (
    <section className="prose mx-auto">
      <h1>She Health</h1>
      <p>
        Placeholder page for She Health — a women-first health platform focused
        on personalized care journeys and secure tracking.
      </p>

      <p className="mt-6">
        <Link href="/projects" className="text-sm text-blue-600">← Back to Projects</Link>
      </p>
    </section>
  );
}
