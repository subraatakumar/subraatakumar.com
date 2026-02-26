import fs from "fs";
import path from "path";
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

const contentDirectory = path.join(process.cwd(), "content/180days");

function get180DayPaths() {
  if (!fs.existsSync(contentDirectory)) return [];

  return fs
    .readdirSync(contentDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(".md", ""))
    .sort((a, b) => Number(a.replace("day-", "")) - Number(b.replace("day-", "")))
    .map((slug) => `/180days/${slug}`);
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
  ];

  const allPaths = [...staticPaths, ...get180DayPaths()];

  return allPaths.map((route) => ({
    url: new URL(route, SITE_URL).toString(),
    lastModified: now,
    changeFrequency: route.startsWith("/180days/day-") ? "daily" : "weekly",
    priority: route === "/" ? 1 : route === "/180days" ? 0.9 : 0.8,
  }));
}
