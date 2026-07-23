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
  metadataBase: new URL("https://memologs.com"),
  title: {
    default: "MemoLogs — AI Marketing Intelligence Platform",
    template: "%s | MemoLogs",
  },
  description:
    "Prove causal impact, catch creative fatigue before your CPA does, and find high-LTV buyers. Five AI products on one decision memory that compounds.",
  keywords:
    "AI marketing platform, causal measurement, incrementality testing, marketing mix modeling alternative, creative fatigue detection, audience intelligence, marketing attribution, GeoTwin, CausalCore, DiffLens, tri-model consensus, media optimization, MemoLogs",
  applicationName: "MemoLogs",
  authors: [{ name: "MEMO AI, Inc." }],
  creator: "MEMO AI, Inc.",
  publisher: "MEMO AI, Inc.",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "MemoLogs",
    title: "MemoLogs — AI Marketing Intelligence Platform",
    description:
      "Prove causal impact. Kill creative fatigue early. Find buyers, not lookalikes. One platform, five AI products, backed by a decision memory that compounds.",
    url: "/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "MemoLogs — AI Marketing Intelligence Platform" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MemoLogs — AI Marketing Intelligence Platform",
    description:
      "Causal measurement, creative AI, audience AI, and a decision memory that makes every recommendation smarter than the last.",
    images: ["/og-image.png"],
  },
  other: { "theme-color": "#0A0F1D" },
};

// Organization + WebSite schema. Google uses `logo` to pick the search-result
// icon, and AI answer engines lean on this block to attribute claims to a named
// entity — so it carries both SEO and GEO weight.
const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://memologs.com/#organization",
      name: "MemoLogs",
      legalName: "MEMO AI, Inc.",
      url: "https://memologs.com",
      logo: {
        "@type": "ImageObject",
        url: "https://memologs.com/icon.svg",
        width: 128,
        height: 128,
      },
      description:
        "MemoLogs is an AI marketing intelligence platform for causal measurement, creative fatigue detection, and audience intelligence.",
      email: "hello@memologs.com",
    },
    {
      "@type": "WebSite",
      "@id": "https://memologs.com/#website",
      url: "https://memologs.com",
      name: "MemoLogs",
      publisher: { "@id": "https://memologs.com/#organization" },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
