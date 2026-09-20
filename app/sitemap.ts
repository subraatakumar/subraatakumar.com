import fs from "fs";
import path from "path";
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

const contentDirectory180Days = path.join(process.cwd(), "content/180days");
const contentDirectory24Weeks = path.join(process.cwd(), "content/24weeks");
const contentDirectoryBlog = path.join(process.cwd(), "content/blog");
const contentDirectory365Days = path.join(
  process.cwd(),
  "content/365-days-to-fullstack-ai-engineer",
);
const notesDirectory = path.join(process.cwd(), "public/notes");

function getHtmlFiles(directory: string): string[] {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return getHtmlFiles(entryPath);
    return entry.isFile() && entry.name.endsWith(".html") ? [entryPath] : [];
  });
}

function getNotePaths() {
  if (!fs.existsSync(notesDirectory)) return [];

  return getHtmlFiles(notesDirectory)
    .map(
      (file) =>
        `/notes/${path.relative(notesDirectory, file).split(path.sep).join("/")}`,
    )
    .sort();
}

function get180DayPaths() {
  if (!fs.existsSync(contentDirectory180Days)) return [];

  return fs
    .readdirSync(contentDirectory180Days)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(".md", ""))
    .sort(
      (a, b) => Number(a.replace("day-", "")) - Number(b.replace("day-", "")),
    )
    .map((slug) => `/180days/${slug}`);
}

function get24WeekPaths() {
  if (!fs.existsSync(contentDirectory24Weeks)) return [];

  return fs
    .readdirSync(contentDirectory24Weeks)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(".md", ""))
    .sort(
      (a, b) => Number(a.replace("week-", "")) - Number(b.replace("week-", "")),
    )
    .map((slug) => `/24weeks/${slug}`);
}

function getBlogPaths() {
  if (!fs.existsSync(contentDirectoryBlog)) return [];

  return fs
    .readdirSync(contentDirectoryBlog)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(".md", ""))
    .map((slug) => `/blog/${slug}`);
}

function get365DayPaths() {
  if (!fs.existsSync(contentDirectory365Days)) return [];
  return fs
    .readdirSync(contentDirectory365Days)
    .filter((file) => /^day-\d{3}\.md$/.test(file))
    .map((file) => `/365-days-to-fullstack-ai-engineer/${file.replace(/\.md$/, "")}`)
    .sort();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = [
    "/",
    "/about",
    "/work-with-me",
    "/career-timeline",
    "/products",
    "/subratalabs",
    "/contact",
    "/for-ai",
    "/subra-ai",
    "/subra-ai/early-access",
    "/subra-ai-use-cases/device-agnostic-medical-reading-capture",
    "/subra-ai-use-cases/how-to-remove-image-background-for-free",
    "/subra-ai-use-cases/how-to-change-ai-speaking-voice",
    "/subra-ai/privacy-policy",
    "/subra-ai/terms",
    "/background-remover",
    "/background-remover/privacy-policy",
    "/background-remover/terms",
    "/watertracker",
    "/watertracker/guide",
    "/watertracker/benefits",
    "/pilltracker",
    "/pilltracker/privacy-policy",
    "/pilltracker/terms",
    "/shehealth",
    "/tcbs-cli",
    "/180days",
    "/365-days-to-fullstack-ai-engineer",
    "/365-days-to-fullstack-ai-engineer/schedule",
    "/365-days-to-fullstack-ai-engineer/updates",
    "/24weeks",
    "/blog",
  ];

  const allPaths = [
    ...staticPaths,
    ...get365DayPaths(),
    ...get180DayPaths(),
    ...get24WeekPaths(),
    ...getBlogPaths(),
    ...getNotePaths(),
  ];

  return allPaths.map((route) => ({
    url: new URL(route, SITE_URL).toString(),
    lastModified: now,
    changeFrequency:
      route.startsWith("/180days/day-") ||
      route.startsWith("/365-days-to-fullstack-ai-engineer/day-")
        ? "daily"
        : route.startsWith("/24weeks/week-")
          ? "weekly"
          : route.startsWith("/blog/") || route.startsWith("/notes/")
            ? "weekly"
            : "weekly",
    priority:
      route === "/"
        ? 1
        : route === "/180days" ||
            route === "/365-days-to-fullstack-ai-engineer" ||
            route === "/24weeks" ||
            route === "/blog"
          ? 0.9
          : route.startsWith("/24weeks/week-")
            ? 0.85
            : route.startsWith("/blog/") || route.startsWith("/notes/")
              ? 0.85
              : 0.8,
  }));
}
