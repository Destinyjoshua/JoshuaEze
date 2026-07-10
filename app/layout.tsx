import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Joshua Eze • Business Strategist | @mrjoshuaeze",
    template: "%s | Joshua Eze",
  },
  description:
    "MBA-qualified business strategist helping Africans think bigger about business, money, and building from nothing. Honest. Direct. Practical.",
  metadataBase: new URL("https://joshuaeze.com"),
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://joshuaeze.com",
  },
  openGraph: {
    title: "Joshua Eze • Business Strategist",
    description:
      "MBA-qualified business strategist helping Africans think bigger about business, money, and building from nothing.",
    url: "https://joshuaeze.com",
    siteName: "Joshua Eze",
    locale: "en_GB",
    type: "website",
    images: [{ url: "/images/JoshuaEze.JPG" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mrjoshuaeze",
    creator: "@mrjoshuaeze",
    images: ["/images/JoshuaEze.JPG"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-[#0a0a0a] text-[#e5e5e5] antialiased">
        <Navbar />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
