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
  title: "Joshua Eze • Business Strategist | @mrjoshuaeze",
  description: "MBA-qualified business strategist helping Africans think bigger about business, money, and building from nothing. Honest. Direct. Practical.",
  metadataBase: new URL("https://joshuaeze.com"),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Joshua Eze • Business Strategist",
    description: "MBA-qualified business strategist helping Africans think bigger about business, money, and building from nothing.",
    images: [{ url: "/images/JoshuaEze.JPG" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/JoshuaEze.JPG"],
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
