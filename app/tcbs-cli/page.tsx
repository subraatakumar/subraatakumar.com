import Link from "next/link";

export default function TcbsCliPage() {
  return (
    <section className="prose mx-auto">
      <h1>TCBS CLI</h1>
      <p>
        Placeholder page for the TCBS CLI — a developer tool for automating
        build and release workflows for mobile projects.
      </p>

      <p className="mt-6">
        <Link href="/projects" className="text-sm text-blue-600">← Back to Projects</Link>
      </p>
    </section>
  );
}
