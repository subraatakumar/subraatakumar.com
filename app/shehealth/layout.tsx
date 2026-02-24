import Link from "next/link";

export default function SheHealthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-emerald-50 text-emerald-900">
      <header className="max-w-4xl mx-auto px-4 py-6">
        <Link href="/" className="text-sm font-medium">← Home</Link>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">{children}</main>
    </div>
  );
}
