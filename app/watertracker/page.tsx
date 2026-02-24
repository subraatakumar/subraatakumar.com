import Link from "next/link";

export default function WaterTrackerPage() {
  return (
    <section className="prose mx-auto">
      <h1>Water Tracker</h1>
      <p>
        Placeholder page for the Water Tracker product — a simple app to help
        users monitor daily water intake, reminders and hydration analytics.
      </p>

      <p className="mt-6">
        <Link href="/projects" className="text-sm text-blue-600">← Back to Projects</Link>
      </p>
    </section>
  );
}
