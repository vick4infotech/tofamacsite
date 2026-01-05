import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GradientBackground } from "@/components/GradientBackground";
import { Providers } from "@/app/providers";
import { site } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem("tofamac_theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";}if(t==="dark"){document.documentElement.classList.add("dark");}}catch(e){}})();` }} />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6913209210002219"
     crossorigin="anonymous"></script>
        <meta name="google-adsense-account" content="ca-pub-6913209210002219">
      </head>
      <body className="min-h-screen bg-white text-slate-900 antialiased transition-colors duration-300 dark:bg-slate-950 dark:text-white">
        <Providers>
          <GradientBackground />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
