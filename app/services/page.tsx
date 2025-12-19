import Image from "next/image";
import { Container } from "@/components/Container";
import { MotionReveal } from "@/components/MotionReveal";
import { Surface } from "@/components/Surface";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";
import { asset } from "@/lib/assets";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Search,
  Wrench,
  Sparkles,
  PenLine,
  MapPin,
  Radar,
  Globe,
  Gauge,
} from "lucide-react";

const serviceIcons: Record<string, LucideIcon> = {
  "Search Engine Optimization": Search,
  "Technical SEO Audits": Wrench,
  "AI Prompt Engineering": Sparkles,
  "Content Strategy and Optimization": PenLine,
  "Local SEO": MapPin,
  "Competitor and Market Visibility Analysis": Radar,
  "Digital Presence Enhancement": Globe,
  "Website Performance Improvement": Gauge,
};

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-14 sm:pt-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <MotionReveal className="lg:col-span-7">
              <Surface className="p-7 sm:p-9" tint="violet">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-700/90 dark:text-brand-300/90">
                  Services
                </p>
                <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                  A complete visibility program from technical foundations to market dominance.
                </h1>
                <p className="mt-4 text-base leading-relaxed text-slate-700 dark:text-slate-200">
                  Our work is modular. Start with an audit, engage a specific service, or run an end to end SEO program with clear accountability.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button href="/contact">
                    Request a Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button href="/about" variant="secondary">
                    Learn about Tofamac SEO
                  </Button>
                </div>
              </Surface>
            </MotionReveal>

            <MotionReveal className="lg:col-span-5" delay={0.08}>
              <Surface className="p-3 sm:p-4" tint="cyan">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src={asset("/images/services-placeholder.jpg")}
                    alt="Services placeholder"
                    width={1200}
                    height={900}
                    className="h-[300px] w-full object-cover sm:h-[340px] lg:h-[420px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-black/5 bg-white/70 p-4 shadow-emboss backdrop-blur dark:border-white/10 dark:bg-white/10 dark:shadow-emboss-dark">
                    <p className="text-sm font-semibold uppercase tracking-wide text-slate-950 dark:text-white">
                      Modular engagement
                    </p>
                    <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">
                      Start where you need the most leverage.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-black/5 bg-white/70 p-4 shadow-emboss backdrop-blur dark:border-white/10 dark:bg-white/10 dark:shadow-emboss-dark">
                    <p className="text-sm font-semibold uppercase tracking-wide text-slate-950 dark:text-white">
                      Clear accountability
                    </p>
                    <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">
                      Priorities, owners, reporting, and outcomes.
                    </p>
                  </div>
                </div>
              </Surface>
            </MotionReveal>
          </div>
        </Container>
      </section>

      <section className="relative mt-14 sm:mt-20">
        <Container>
          <MotionReveal>
            <SectionHeading
              eyebrow="Capabilities"
              title="Services that improve crawlability, relevance, authority, and performance."
              description="Choose a focused service or combine modules for a full visibility program."
            />
          </MotionReveal>

          <div className="mt-8">
            <Surface className="p-5 sm:p-6" tint="amber">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {site.services.map((s) => {
                  const Icon = serviceIcons[s.title] ?? Search;
                  return (
                    <a
                      key={s.title}
                      href={`#${slugify(s.title)}`}
                      className="flex items-center gap-2 rounded-xl border border-black/5 bg-white/70 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-slate-900 shadow-emboss transition-colors hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-white dark:shadow-emboss-dark dark:hover:bg-white/15"
                    >
                      <Icon className="h-4 w-4 text-brand-700 dark:text-brand-300" />
                      <span>{s.title}</span>
                    </a>
                  );
                })}
              </div>
            </Surface>
          </div>

          <div className="mt-8 grid gap-4">
            {site.services.map((s, idx) => {
              const Icon = serviceIcons[s.title] ?? Search;
              return (
                <MotionReveal key={s.title} delay={idx * 0.03}>
                  <Surface id={slugify(s.title)} className="p-7 sm:p-9 scroll-mt-24" tint={idx % 2 === 0 ? "violet" : "cyan"}>
                    <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                      <div className="lg:col-span-5">
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 rounded-xl border border-black/5 bg-white/70 p-2 shadow-emboss backdrop-blur dark:border-white/10 dark:bg-white/10 dark:shadow-emboss-dark">
                            <Icon className="h-5 w-5 text-brand-700 dark:text-brand-300" />
                          </div>
                          <div>
                            <p className="text-xl font-semibold uppercase tracking-wide text-slate-950 dark:text-white">
                              {s.title}
                            </p>
                            <p className="mt-3 text-base leading-relaxed text-slate-700 dark:text-slate-200">
                              {s.summary}
                            </p>
                          </div>
                        </div>
                      </div>
                    <div className="lg:col-span-7">
                      <div className="grid gap-3 sm:grid-cols-2">
                        {s.bullets.map((b) => (
                          <div
                            key={b}
                            className="rounded-2xl border border-black/5 bg-white/70 p-4 shadow-emboss backdrop-blur dark:border-white/10 dark:bg-white/10 dark:shadow-emboss-dark"
                          >
                            <p className="text-sm font-semibold uppercase tracking-wide text-slate-950 dark:text-white">
                              {b}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                        <Button href="/contact">
                          Request a Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button href="/contact" variant="secondary">
                          Ask a question
                        </Button>
                      </div>
                    </div>
                  </div>
                  </Surface>
                </MotionReveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="relative mt-14 sm:mt-20 pb-16 sm:pb-24">
        <Container>
          <Surface className="p-8 sm:p-10" tint="emerald">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <h3 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
                  Not sure where to start.
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-700 dark:text-slate-200">
                  Tell us what you are seeing today and what you want to improve. We will recommend the fastest path to results.
                </p>
              </div>
              <div className="lg:col-span-4 lg:flex lg:justify-end">
                <Button href="/contact">
                  Request a Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Surface>
        </Container>
      </section>
    </>
  );
}
