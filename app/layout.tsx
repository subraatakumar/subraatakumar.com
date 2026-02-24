import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Subrata Kumar Das",
    template: "%s | Subrata Kumar Das",
  },
  description:
    "Official website of Subrata Kumar Das – Tech Lead, React Native Architect, Founder.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black antialiased">
        <header className="border-b">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-lg font-medium">
              Subrata Kumar Das
            </Link>

            <nav aria-label="Primary" className="hidden md:block">
              <ul className="flex gap-6 text-sm">
                <li>
                  <Link href="/about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:underline">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="md:hidden">
            <div className="max-w-4xl mx-auto px-4 pb-4">
              <nav aria-label="Mobile">
                <ul className="flex flex-col gap-2 text-sm">
                  <li>
                    <Link href="/about" className="block py-1">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects" className="block py-1">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="block py-1">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main>
          <div className="max-w-4xl mx-auto px-4 py-8">{children}</div>
        </main>

        <footer className="border-t">
          <div className="max-w-4xl mx-auto px-4 py-6 text-center text-sm text-gray-600">
            © {new Date().getFullYear()} Subrata Kumar Das. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}