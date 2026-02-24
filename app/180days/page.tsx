import Link from "next/link";

export default function Days180Page() {
  return (
    <section className="prose mx-auto">
      <h1>180 Days</h1>
      <p>
        Placeholder page for 180 Days — an offline life archive for journaling and
        reflection over a 180-day period.
      </p>

      <p className="mt-6">
        <Link href="/projects" className="text-sm text-blue-600">← Back to Projects</Link>
      </p>
    </section>
  );
}
