import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";

type Post = {
  slug: string;
  title: string;
  date: string;
  description?: string;
};

const contentDirectory = path.join(process.cwd(), "content/180days");

export default function DaysIndex() {
  const filenames = fs
    .readdirSync(contentDirectory)
    .filter((file) => file.endsWith(".md"));

  const posts: Post[] = filenames.map((filename) => {
    const slug = filename.replace(".md", "");
    const filePath = path.join(contentDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? "",
      description: data.description ?? "",
    };
  });

  // Sort by date (newest first)
  posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <section className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">180 Days Archive</h1>

      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug} className="border-b pb-4">
            <Link
              href={`/180days/${post.slug}`}
              className="text-xl font-semibold text-blue-600 hover:underline"
            >
              {post.title}
            </Link>

            {post.date && (
              <p className="text-sm text-gray-500 mt-1">{post.date}</p>
            )}

            {post.description && (
              <p className="text-gray-700 mt-2">{post.description}</p>
            )}
          </li>
        ))}
      </ul>

      <p className="mt-8">
        <Link
          href="/projects"
          className="text-sm text-blue-600 hover:underline"
        >
          ← Back to Projects
        </Link>
      </p>
    </section>
  );
}