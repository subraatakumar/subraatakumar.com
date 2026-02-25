import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const contentDirectory = path.join(process.cwd(), "content/180days");

/**
 * Generate static paths for all markdown files
 */
export async function generateStaticParams() {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const filenames = fs
    .readdirSync(contentDirectory)
    .filter((file) => file.endsWith(".md"));

  return filenames.map((filename) => ({
    slug: filename.replace(".md", ""),
  }));
}

/**
 * Generate dynamic metadata for each article
 */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!slug) {
    return {};
  }

  const filePath = path.join(contentDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return {};
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);

  return {
    title: data.title ?? "180 Days Article",
    description: data.description ?? "",
  };
}

/**
 * Article Page
 */
export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  if (!slug) {
    notFound();
  }

  const filePath = path.join(contentDirectory, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(content);

  const contentHtml = processedContent.toString();

  return (
    <article className="prose max-w-3xl mx-auto">
      <h1>{data.title}</h1>

      {data.date && (
        <p className="text-sm text-gray-500">{data.date}</p>
      )}

      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />

      {/* JSON-LD Structured Data */}
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
              url: "https://subraatakumar.com",
            },
          }),
        }}
      />
    </article>
  );
}