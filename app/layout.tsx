import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AnalyticsProvider from "@/components/AnalyticsProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "MemoLogs — AI Marketing Intelligence Platform | Causal Measurement, Creative & Audience AI",
  description:
    "MemoLogs is an AI marketing intelligence platform that proves causal impact, detects creative fatigue, finds high-LTV audiences, and remembers every decision. Average 37% lower CPI, 80% faster execution, 45% lower agency cost across $300M+ managed spend.",
  keywords:
    "AI marketing platform, causal measurement, incrementality testing, marketing mix modeling alternative, creative fatigue detection, audience intelligence, marketing attribution, GeoTwin, CausalCore, DiffLens, tri-model consensus, media optimization, MemoLogs",
  authors: [{ name: "MemoLogs, Inc." }],
  robots: "index, follow, max-image-preview:large, max-snippet:-1",
  alternates: { canonical: "https://memologs.ai/" },
  openGraph: {
    type: "website",
    siteName: "MemoLogs",
    title: "MemoLogs — AI Marketing Intelligence Platform",
    description:
      "Prove causal impact. Kill creative fatigue early. Find buyers, not lookalikes. One platform, five AI products, backed by a decision memory that compounds.",
    url: "https://memologs.ai/",
    images: [{ url: "https://memologs.ai/assets/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@memologs",
    title: "MemoLogs — AI Marketing Intelligence Platform",
    description:
      "Causal measurement, creative AI, audience AI, and a decision memory that makes every recommendation smarter than the last.",
    images: ["https://memologs.ai/assets/og-image.png"],
  },
  other: { "theme-color": "#0A0F1D" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%230A0F1D'/%3E%3Cg stroke='%2300FFC2' stroke-width='2.4' stroke-linecap='round'%3E%3Cline x1='16' y1='6' x2='16' y2='26'/%3E%3Cline x1='6' y1='16' x2='26' y2='16'/%3E%3Cline x1='9' y1='9' x2='23' y2='23'/%3E%3Cline x1='23' y1='9' x2='9' y2='23'/%3E%3C/g%3E%3Ccircle cx='16' cy='16' r='3' fill='%230A0F1D' stroke='%2300FFC2' stroke-width='2'/%3E%3C/svg%3E"
        />
      </head>
      <body>
        <AnalyticsProvider />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
