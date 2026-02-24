import Link from "next/link";

export default function WaterTrackerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-blue-50 text-sky-900">
      <header className="max-w-4xl mx-auto px-4 py-6">
        <Link href="/" className="text-sm font-medium">← Home</Link>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">{children}</main>
    </div>
  );
}
