import fs from "fs";
import path from "path";
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

const contentDirectory180Days = path.join(process.cwd(), "content/180days");
const contentDirectory24Weeks = path.join(process.cwd(), "content/24weeks");
const contentDirectoryBlog = path.join(process.cwd(), "content/blog");

function get180DayPaths() {
  if (!fs.existsSync(contentDirectory180Days)) return [];

  return fs
    .readdirSync(contentDirectory180Days)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(".md", ""))
    .sort((a, b) => Number(a.replace("day-", "")) - Number(b.replace("day-", "")))
    .map((slug) => `/180days/${slug}`);
}

function get24WeekPaths() {
  if (!fs.existsSync(contentDirectory24Weeks)) return [];

  return fs
    .readdirSync(contentDirectory24Weeks)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(".md", ""))
    .sort((a, b) => Number(a.replace("week-", "")) - Number(b.replace("week-", "")))
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

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = [
    "/",
    "/about",
    "/products",
    "/subratalabs",
    "/contact",
    "/for-ai",
    "/watertracker",
    "/watertracker/guide",
    "/watertracker/benefits",
    "/shehealth",
    "/tcbs-cli",
    "/180days",
    "/24weeks",
    "/blog",
  ];

  const allPaths = [...staticPaths, ...get180DayPaths(), ...get24WeekPaths(), ...getBlogPaths()];

  return allPaths.map((route) => ({
    url: new URL(route, SITE_URL).toString(),
    lastModified: now,
    changeFrequency:
      route.startsWith("/180days/day-")
        ? "daily"
        : route.startsWith("/24weeks/week-")
          ? "weekly"
          : route.startsWith("/blog/")
            ? "weekly"
          : "weekly",
    priority:
      route === "/"
        ? 1
        : route === "/180days" || route === "/24weeks" || route === "/blog"
          ? 0.9
        : route.startsWith("/24weeks/week-")
            ? 0.85
            : route.startsWith("/blog/")
              ? 0.85
            : 0.8,
  }));
}
