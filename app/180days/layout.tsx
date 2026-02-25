import Link from "next/link";

export default function Days180Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-amber-50 text-amber-900">
      {children}
    </main>
  );
}
