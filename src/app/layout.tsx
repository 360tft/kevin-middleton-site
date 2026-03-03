import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SITE } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: SITE.title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    creator: "@coach_kevin_m",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Kevin Middleton",
      jobTitle: "Football AI Expert",
      description: SITE.description,
      url: SITE.url,
      sameAs: [
        "https://x.com/coach_kevin_m",
        "https://indiepa.ge/kevinmiddleton",
        "https://t.me/kmcoacheducation",
      ],
      knowsAbout: [
        "Football Coaching",
        "Artificial Intelligence",
        "SaaS Development",
        "Player Development",
      ],
    },
    {
      "@type": "WebSite",
      name: SITE.name,
      url: SITE.url,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Nav />
      </body>
    </html>
  );
}
