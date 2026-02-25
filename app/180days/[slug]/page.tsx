import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const contentDirectory = path.join(process.cwd(), "content/180days");

function getAllSlugs() {
  if (!fs.existsSync(contentDirectory)) return [];

  return fs
    .readdirSync(contentDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(".md", ""))
    .sort((a, b) => {
      const numA = Number(a.replace("day-", ""));
      const numB = Number(b.replace("day-", ""));
      return numA - numB;
    });
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const filePath = path.join(contentDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return {};

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);

  return {
    title: data.title,
    description: data.description,
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;

  const filePath = path.join(contentDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  const allSlugs = getAllSlugs();
  const currentIndex = allSlugs.indexOf(slug);

  const prevSlug = allSlugs[currentIndex - 1];
  const nextSlug = allSlugs[currentIndex + 1];

  return (
    <article className="prose max-w-3xl mx-auto">
      
      {/* Top breadcrumb */}
      <p>
        <Link href="/180days" className="text-sm text-blue-600 hover:underline">
          ← Back to 180 Days
        </Link>
      </p>

      <h1>{data.title}</h1>
      <p className="text-sm text-gray-500">{data.date}</p>

      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />

      {/* Navigation */}
      <hr className="my-10" />

      <div className="flex justify-between text-sm">
        {prevSlug ? (
          <Link
            href={`/180days/${prevSlug}`}
            className="text-blue-600 hover:underline"
          >
            ← Previous Day
          </Link>
        ) : <div />}

        {nextSlug ? (
          <Link
            href={`/180days/${nextSlug}`}
            className="text-blue-600 hover:underline"
          >
            Next Day →
          </Link>
        ) : <div />}
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: data.title,
            datePublished: data.date,
            description: data.description,
            author: {
              "@type": "Person",
              name: "Subrata Kumar Das",
            },
          }),
        }}
      />
    </article>
  );
}