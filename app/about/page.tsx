import Image from "next/image";
import { Container } from "@/components/Container";
import { MotionReveal } from "@/components/MotionReveal";
import { Surface } from "@/components/Surface";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";
import { asset } from "@/lib/assets";
import { ArrowRight } from "lucide-react";

const reasons = [
  {
    title: "Africa’s leading SEO experts",
    body:
      "We understand the African and global digital ecosystem and deliver solutions that work across markets.",
    tint: "violet" as const,
  },
  {
    title: "Proven track record",
    body:
      "We have helped brands achieve higher rankings, increased traffic, and improved conversions.",
    tint: "cyan" as const,
  },
  {
    title: "Customized strategies",
    body:
      "No two businesses are the same. Our solutions are built around your goals, industry, and audience.",
    tint: "amber" as const,
  },
  {
    title: "Cutting edge technology",
    body:
      "We use advanced tools and analytics to ensure precision, performance, and long term growth.",
    tint: "emerald" as const,
  },
  {
    title: "Client first philosophy",
    body:
      "We work as an extension of your team, committed to your success and growth.",
    tint: "violet" as const,
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-14 sm:pt-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <MotionReveal className="lg:col-span-6">
              <Surface className="p-7 sm:p-9" tint="violet">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-700/90 dark:text-brand-300/90">
                  About Tofamac SEO
                </p>
                <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                  Africa’s leading tech driven SEO and digital visibility company.
                </h1>
                <p className="mt-4 text-base leading-relaxed text-slate-700 dark:text-slate-200">
                  We help businesses grow, stand out, and dominate their markets online
                  by combining deep industry expertise with cutting edge technology.
                </p>
                <p className="mt-4 text-base leading-relaxed text-slate-700 dark:text-slate-200">
                  In today’s fast paced digital landscape, visibility is everything. That is why we
                  empower companies, startups, SMEs, and large enterprises to achieve sustainable growth
                  by maximizing search engine presence and strengthening digital footprint across major platforms.
                </p>
                <p className="mt-4 text-base font-semibold text-slate-950 dark:text-white">
                  At Tofamac SEO, we believe every brand deserves to be seen.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button href="/contact">
                    Talk to our team <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button href="/services" variant="secondary">
                    Explore Services
                  </Button>
                </div>
              </Surface>
            </MotionReveal>

            <MotionReveal className="lg:col-span-6" delay={0.08}>
              <Surface className="p-3 sm:p-4" tint="cyan">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src={asset("/images/team-placeholder.jpg")}
                    alt="Team placeholder"
                    width={1200}
                    height={900}
                    className="h-[320px] w-full object-cover sm:h-[380px] lg:h-[460px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
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
              eyebrow="Why choose us"
              title="Enterprise clarity, disciplined execution, measurable outcomes."
              description="We design strategies that are data driven, result oriented, and tailored to your business goals."
            />
          </MotionReveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, idx) => (
              <MotionReveal key={r.title} delay={idx * 0.03}>
                <Surface className="p-6" tint={r.tint}>
                  <p className="text-base font-semibold text-slate-950 dark:text-white">
                    {r.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                    {r.body}
                  </p>
                </Surface>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative mt-14 sm:mt-20 pb-16 sm:pb-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
            <MotionReveal className="lg:col-span-4">
              <Surface className="h-full p-7" tint="violet">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-700/90 dark:text-brand-300/90">
                  Our Mission
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                  {site.mission}
                </p>
              </Surface>
            </MotionReveal>

            <MotionReveal className="lg:col-span-4" delay={0.05}>
              <Surface className="h-full p-7" tint="cyan">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-700/90 dark:text-brand-300/90">
                  Our Vision
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                  {site.vision}
                </p>
              </Surface>
            </MotionReveal>

            <MotionReveal className="lg:col-span-4" delay={0.1}>
              <Surface className="h-full p-7" tint="amber">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-700/90 dark:text-brand-300/90">
                  Our Promise
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                  {site.promise}
                </p>
              </Surface>
            </MotionReveal>
          </div>

          <div className="mt-8">
            <Surface className="p-8 sm:p-10" tint="emerald">
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-8">
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
                    Ready to strengthen visibility with a clear plan.
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-700 dark:text-slate-200">
                    Tell us what you are trying to achieve and we will recommend the most direct path to results.
                  </p>
                </div>
                <div className="lg:col-span-4 lg:flex lg:justify-end">
                  <Button href="/contact">
                    Talk to our team <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Surface>
          </div>
        </Container>
      </section>
    </>
  );
}
