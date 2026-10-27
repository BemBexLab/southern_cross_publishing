import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { defaultDescription, siteName, siteUrl } from "./seo";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: siteName,
      url: siteUrl,
      logo: new URL("/image (1).png", siteUrl).toString(),
      areaServed: "Australia",
      sameAs: [
        "https://www.facebook.com/CruxPublishingHouse/",
        "https://www.instagram.com/cruxpublishinghouse/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      name: siteName,
      url: siteUrl,
      publisher: { "@id": `${siteUrl}#organization` },
      inLanguage: "en-AU",
    },
  ],
};

// Public pages are static by default. Runtime routes can override this at
// their own segment, such as the blog pages that read live WordPress data.
export const dynamic = "error";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const goneva = localFont({
  src: "../public/fonts/goneva-font/GonevaRegular-ovd1z.ttf",
  variable: "--font-goneva",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  verification: {
    google: "1KJar89U8Bjcq3tJ4C9VoAFIFbcmDiG762qR946QYHQ",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteName,
    description: defaultDescription,
    url: "/",
    siteName,
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: defaultDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${goneva.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
