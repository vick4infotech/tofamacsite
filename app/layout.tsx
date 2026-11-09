import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {getSiteSettings} from "@/lib/site-settings";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export async function generateMetadata(): Promise<Metadata> {
 const site=await getSiteSettings();
 return {
  title: {
    default: `${site.name} | Tech driven SEO and digital visibility`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL("https://tofamacseo.com"),
  openGraph: {
    title: site.name,
    description: site.description,
    type: "website",
    url: "https://tofamacseo.com",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
};
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-white text-slate-900 antialiased">{children}</body>
    </html>
  );
}
