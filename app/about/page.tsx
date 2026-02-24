import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "About",
    template: "%s | Subrata Kumar Das",
  },
  description: "About Subrata Kumar Das — Tech Lead and React Native Architect",
};

export default function AboutPage() {
  return (
    <section aria-labelledby="about-heading" className="max-w-3xl mx-auto px-4 py-12">
      <h1 id="about-heading" className="text-3xl font-semibold mb-6">About</h1>

      <div className="prose prose-lg text-gray-800">
        <p>
          I am a Tech Lead and React Native Architect with over 10 years of
          experience building mobile products. I have led cross-functional
          teams through the entire product lifecycle, delivering robust,
          maintainable apps that scale with growing user needs.
        </p>

        <p>
          Throughout my career I have shipped 40+ mobile applications across
          consumer and enterprise domains. My focus is on designing scalable
          mobile platforms, establishing strong engineering practices, and
          driving performance and reliability at scale.
        </p>

        <p>
          I bring an architecture-first mindset to leadership — mentoring teams,
          defining clear technical roadmaps, and making pragmatic trade-offs to
          balance speed and long-term quality.
        </p>
      </div>
    </section>
  );
}
