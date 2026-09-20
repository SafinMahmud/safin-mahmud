import type { Metadata, Viewport } from "next";
import { site } from "@/content/site";
import { newsreader, plexMono, sourceSans } from "@/lib/fonts";
import { getSiteUrl } from "@/lib/site-url";
import { THEME_SCRIPT } from "@/lib/theme-script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${site.name} — backend and AI systems`,
    template: `%s — ${site.name}`,
  },
  description: site.positioning,
  authors: [{ name: site.name }],
  openGraph: {
    title: site.name,
    description: site.positioning,
    type: "website",
    locale: "en_CA",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.positioning,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0E0E0C" },
    { media: "(prefers-color-scheme: light)", color: "#F4F1EA" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${sourceSans.variable} ${plexMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className="min-h-full bg-bg font-sans text-fg">{children}</body>
    </html>
  );
}
