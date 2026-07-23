import type { MetadataRoute } from "next";

// NOTE: Cloudflare currently injects its own "Managed content" robots.txt in
// front of the origin (it blocks GPTBot, ClaudeBot, Google-Extended, CCBot,
// meta-externalagent and others). This file is the origin's intent; if the
// Cloudflare managed rules stay on, they win and the AI-crawler blocks remain.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://memologs.com/sitemap.xml",
    host: "https://memologs.com",
  };
}
