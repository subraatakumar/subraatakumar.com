import type { Metadata } from "next";
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
        {children}
      </body>
    </html>
  );
}