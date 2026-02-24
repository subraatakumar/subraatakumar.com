import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Contact",
    template: "%s | Subrata Kumar Das",
  },
  description: "Get in touch with Subrata Kumar Das — Tech Lead and React Native Architect",
};

export default function ContactPage() {
  return (
    <section aria-labelledby="contact-heading" className="max-w-3xl mx-auto px-4 py-12">
      <h1 id="contact-heading" className="text-3xl font-semibold mb-6">Contact</h1>

      <div className="prose text-gray-800">
        <p>
          I’m open to collaboration, consulting, and new challenges. If you have
          a mobile product idea or need help scaling your platform, I'd love to
          hear from you.
        </p>

        <p>
          Email: <a href="mailto:hello@subraatakumar.com" className="text-blue-600">hello@subraatakumar.com</a>
        </p>

        <ul className="mt-4 space-y-2">
          <li>
            <a href="https://www.linkedin.com/in/your-profile" className="text-blue-600">LinkedIn (placeholder)</a>
          </li>
          <li>
            <a href="https://github.com/your-username" className="text-blue-600">GitHub (placeholder)</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
