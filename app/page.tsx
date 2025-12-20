import Image from "next/image";
import { Container } from "@/components/Container";
import { MotionReveal } from "@/components/MotionReveal";
import { MotionStagger, MotionItem } from "@/components/MotionStagger";
import { HoverLift } from "@/components/HoverLift";
import { Surface } from "@/components/Surface";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { TypewriterCycle } from "@/components/TypewriterCycle";
import { site } from "@/lib/site";
import { asset } from "@/lib/assets";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const pillars = [
  {
    title: "Technical clarity",
    headline: "Fix what blocks growth",
    description: "Crawl, indexation, speed, and structure.",
    tint: "cyan" as const,
  },
  {
    title: "Content authority",
    headline: "Own your category",
    description: "Topics mapped to intent and outcomes.",
    tint: "violet" as const,
  },
  {
    title: "Measured impact",
    headline: "Report what matters",
    description: "Progress, risks, and next steps.",
    tint: "amber" as const,
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative pt-14 sm:pt-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <MotionReveal className="lg:col-span-6">
              <Surface className="p-7 sm:p-9" tint="violet">
                <h1 className="text-slate-950 dark:text-white">
                  <span className="block text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                    WE GENERATE MORE
                  </span>
                  <span className="mt-2 block text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
                    <TypewriterCycle
                      words={["REVENUE", "LEADS", "TRAFFIC"]}
                      className="text-red-600 dark:text-red-400"
                    />
                  </span>
                </h1>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button href="/contact">
                    Request a Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button href="/services" variant="secondary">
                    Explore Services
                  </Button>
                </div>

                <div className="mt-6 grid gap-2 text-sm text-slate-700 dark:text-slate-200">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent-600 dark:text-accent-400" />
                    <span>Clear scope, measurable work, accountable delivery.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent-600 dark:text-accent-400" />
                    <span>Built for Africa and competitive global markets.</span>
                  </div>
                </div>
              </Surface>
            </MotionReveal>

            <MotionReveal className="lg:col-span-6" delay={0.08}>
              <Surface className="p-3 sm:p-4" tint="cyan">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src={asset("/images/hero-placeholder.jpg")}
                    alt="Tofamac SEO hero visual"
                    width={1200}
                    height={900}
                    priority
                    className="h-[320px] w-full object-cover sm:h-[380px] lg:h-[460px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <MotionStagger className="contents">
                    {pillars.map((p) => (
                      <MotionItem key={p.title}>
                        <HoverLift>
                          <div className="rounded-2xl border border-black/5 bg-white/70 p-4 shadow-emboss backdrop-blur transition-colors dark:border-white/10 dark:bg-white/10 dark:shadow-emboss-dark">
                            <p className="text-xs font-semibold uppercase tracking-widest text-brand-700/90 dark:text-brand-300/90">
                              {p.title}
                            </p>
                            <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-950 dark:text-white">
                              {p.headline}
                            </p>
                            <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">
                              {p.description}
                            </p>
                          </div>
                        </HoverLift>
                      </MotionItem>
                    ))}
                  </MotionStagger>
                </div>
              </Surface>
            </MotionReveal>
          </div>
        </Container>
      </section>

      <section className="relative mt-14 sm:mt-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <MotionReveal className="lg:col-span-5">
              <SectionHeading
                eyebrow="Approach"
                title="A complete visibility program that keeps teams aligned."
                description="Start with an audit, engage a specific service, or run a full SEO program with clear accountability and clean reporting."
              />
            </MotionReveal>

            <MotionReveal className="lg:col-span-7" delay={0.06}>
              <MotionStagger className="grid gap-4 sm:grid-cols-2">
                {site.services.slice(0, 4).map((s) => (
                  <MotionItem key={s.title}>
                    <HoverLift>
                      <Surface className="p-6" tint="emerald">
                        <p className="text-base font-semibold uppercase tracking-wide text-slate-950 dark:text-white">
                          {s.title}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                          {s.summary}
                        </p>
                      </Surface>
                    </HoverLift>
                  </MotionItem>
                ))}
              </MotionStagger>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="/services">View all Services</Button>
                <Button href="/about" variant="secondary">
                  Learn about Tofamac SEO
                </Button>
              </div>
            </MotionReveal>
          </div>
        </Container>
      </section>

      <section className="relative mt-14 sm:mt-20 pb-16 sm:pb-24">
        <Container>
          <Surface className="p-8 sm:p-10" tint="amber">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-700/90 dark:text-brand-300/90">
                  Built for decision makers
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
                  Clarity first execution that turns visibility into business results.
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-700 dark:text-slate-200">
                  We focus on signals that search engines can trust and customers can act on.
                  Every engagement is guided by priorities, timelines, and measurable outcomes.
                </p>
              </div>
              <div className="lg:col-span-5 lg:flex lg:justify-end">
                <div className="flex flex-col gap-3">
                  <Button href="/contact">
                    Request a Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button href="/services" variant="secondary">
                    Review Services
                  </Button>
                </div>
              </div>
            </div>
          </Surface>
        </Container>
      </section>
    </>
  );
}
