import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/10">
      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Image
              src="/brand/logo-primary.png"
              alt="Tofamac SEO"
              width={160}
              height={40}
              className="h-10 w-auto"
            />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-700 dark:text-slate-200">
              {site.description}
            </p>

            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.facebook.com/tofamacseo"
                target="_blank"
                rel="noreferrer"
                aria-label="Tofamac SEO on Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white/70 shadow-emboss transition-colors hover:bg-white dark:border-white/12 dark:bg-white/10 dark:shadow-emboss-dark dark:hover:bg-white/15"
              >
                <Facebook className="h-5 w-5 text-brand-700 dark:text-brand-300" />
              </a>
              <a
                href="https://www.instagram.com/tofamacseo"
                target="_blank"
                rel="noreferrer"
                aria-label="Tofamac SEO on Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white/70 shadow-emboss transition-colors hover:bg-white dark:border-white/12 dark:bg-white/10 dark:shadow-emboss-dark dark:hover:bg-white/15"
              >
                <Instagram className="h-5 w-5 text-brand-700 dark:text-brand-300" />
              </a>
              <a
                href="https://www.x.com/tofamacseo"
                target="_blank"
                rel="noreferrer"
                aria-label="Tofamac SEO on X"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white/70 shadow-emboss transition-colors hover:bg-white dark:border-white/12 dark:bg-white/10 dark:shadow-emboss-dark dark:hover:bg-white/15"
              >
                <Twitter className="h-5 w-5 text-brand-700 dark:text-brand-300" />
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-950 dark:text-white">
                Company
              </p>
              <div className="mt-3 grid gap-2 text-sm">
                <Link className="text-slate-700 hover:text-brand-700 dark:text-slate-200 dark:hover:text-brand-300" href="/about">
                  About Us
                </Link>
                <Link className="text-slate-700 hover:text-brand-700 dark:text-slate-200 dark:hover:text-brand-300" href="/services">
                  Services
                </Link>
                <Link className="text-slate-700 hover:text-brand-700 dark:text-slate-200 dark:hover:text-brand-300" href="/contact">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-950 dark:text-white">
                Services
              </p>
              <div className="mt-3 grid gap-2 text-sm text-slate-700 dark:text-slate-200">
                <span>SEO</span>
                <span>Technical SEO Audits</span>
                <span>Content Strategy</span>
                <span>Local SEO</span>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-950 dark:text-white">
                Contact
              </p>
              <div className="mt-3 grid gap-2 text-sm">
                <a className="text-slate-700 hover:text-brand-700 dark:text-slate-200 dark:hover:text-brand-300" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
                <p className="text-slate-700 dark:text-slate-200">
                  Remote first with coverage across Africa and global markets
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-black/5 pt-6 text-xs text-slate-600 dark:border-white/10 dark:text-slate-300 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Visibility built with clarity, accountability, and measurable outcomes.</p>
        </div>
      </Container>
    </footer>
  );
}
