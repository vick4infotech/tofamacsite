import Script from "next/script";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GradientBackground } from "@/components/GradientBackground";
import { Providers } from "@/app/providers";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
 return <div className="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
  <Script id="theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{__html:`(function(){try{var t=localStorage.getItem("tofamac_theme");if(t!=="light"&&t!=="dark")t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";if(t==="dark")document.documentElement.classList.add("dark");}catch(e){}})();`}} />
  <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6913209210002219" crossOrigin="anonymous" />
  <Providers><GradientBackground/><Navbar/>{children}<Footer/></Providers>
 </div>;
}
