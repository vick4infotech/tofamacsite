import Image from "next/image";
import { Container } from "@/components/Container";
import { MotionReveal } from "@/components/MotionReveal";
import { Surface } from "@/components/Surface";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-14 sm:pt-20">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-12">
            <MotionReveal className="lg:col-span-5">
              <Surface className="p-7 sm:p-9" tint="cyan">
                <SectionHeading
                  eyebrow="Contact"
                  title="Tell us what you want to improve."
                  description="Share your goals and current challenges. We will reply with a clear next step."
                />
                <div className="mt-6 grid gap-2 text-sm text-slate-700 dark:text-slate-200">
                  <p className="font-semibold text-slate-950 dark:text-white">Email</p>
                  <a className="hover:text-brand-700 dark:hover:text-brand-300" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </div>
              </Surface>

              <div className="mt-6">
                <Surface className="p-3 sm:p-4" tint="amber">
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src="/images/office-placeholder.jpg"
                      alt="Office placeholder"
                      width={1200}
                      height={900}
                      className="h-[260px] w-full object-cover sm:h-[300px] lg:h-[340px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                  </div>
                </Surface>
              </div>
            </MotionReveal>

            <MotionReveal className="lg:col-span-7" delay={0.08}>
              <ContactForm />
            </MotionReveal>
          </div>
        </Container>
      </section>

      <section className="relative mt-14 sm:mt-20 pb-16 sm:pb-24">
        <Container>
          <Surface className="p-8 sm:p-10" tint="violet">
            <SectionHeading
              eyebrow="What happens next"
              title="Fast response, clear scope, measurable plan."
              description="We review your message, ask the right questions, then propose a path that fits your goals and timeline."
            />
          </Surface>
        </Container>
      </section>
    </>
  );
}
