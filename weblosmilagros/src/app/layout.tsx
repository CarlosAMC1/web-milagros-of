import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-outfit',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.name
      }
    ],
    type: "website",
    locale: "es_PE"
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description
  }
};

import Navbar from "@/components/layouts/NavBar";
import Footer from "@/components/layouts/Footer";
import { Providers } from "./Providers";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${outfit.variable} ${inter.variable}`}>
      <body className="bg-[var(--background)] text-[var(--foreground)] antialiased font-sans selection:bg-[var(--primary)] selection:text-white">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
