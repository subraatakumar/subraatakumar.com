import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Home",
    template: "%s | Subrata Kumar Das",
  },
  description:
    "Tech Lead and React Native Architect with 10+ years building scalable mobile platforms and delivering 40+ mobile applications.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold tracking-tight">
        Subrata Kumar Das
      </h1>

      <p className="mt-6 text-lg text-gray-600 max-w-xl text-center">
        Tech Lead • Mobile Platform Engineer • Building scalable mobile platforms and product-focused systems.
      </p>
    </main>
  );
}