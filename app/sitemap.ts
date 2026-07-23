import type { MetadataRoute } from "next";

const BASE = "https://memologs.com";

// Product and money pages first — priority is a weak signal, but the set of URLs
// here is the authoritative crawl list, so every indexable route must appear.
const routes: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/creative-iq", priority: 0.9, changeFrequency: "weekly" },
  { path: "/incrementality-iq", priority: 0.9, changeFrequency: "weekly" },
  { path: "/audience-iq", priority: 0.9, changeFrequency: "weekly" },
  { path: "/memory-iq", priority: 0.9, changeFrequency: "weekly" },
  { path: "/copilot", priority: 0.9, changeFrequency: "weekly" },
  { path: "/pricing", priority: 0.8, changeFrequency: "monthly" },
  { path: "/how-it-works", priority: 0.8, changeFrequency: "monthly" },
  { path: "/case-studies", priority: 0.8, changeFrequency: "monthly" },
  { path: "/case-studies/fintech", priority: 0.6, changeFrequency: "monthly" },
  { path: "/case-studies/retail", priority: 0.6, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
