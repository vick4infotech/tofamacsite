import { cn } from "@/lib/cn";

/**
 * Soft multi color washes. No loud gradients.
 * Uses opacity and blur for a premium, enterprise look.
 */
export function GradientBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none fixed inset-0 -z-10 overflow-hidden", className)}
    >
      <div className="absolute inset-0 bg-white dark:bg-slate-950 transition-colors duration-300" />

      {/* Light mode color washes */}
      <div className="absolute -top-24 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-brand-400/22 blur-3xl dark:hidden" />
      <div className="absolute top-[18rem] -left-28 h-[34rem] w-[34rem] rounded-full bg-cyan-400/18 blur-3xl dark:hidden" />
      <div className="absolute -bottom-24 right-[-6rem] h-[38rem] w-[38rem] rounded-full bg-fuchsia-400/16 blur-3xl dark:hidden" />
      <div className="absolute bottom-[10rem] left-[30%] h-[22rem] w-[22rem] rounded-full bg-amber-300/14 blur-3xl dark:hidden" />

      {/* Dark mode color washes */}
      <div className="absolute -top-24 left-1/2 hidden h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-brand-500/16 blur-3xl dark:block" />
      <div className="absolute top-[18rem] -left-28 hidden h-[34rem] w-[34rem] rounded-full bg-cyan-400/10 blur-3xl dark:block" />
      <div className="absolute -bottom-24 right-[-6rem] hidden h-[38rem] w-[38rem] rounded-full bg-fuchsia-400/10 blur-3xl dark:block" />
      <div className="absolute bottom-[10rem] left-[30%] hidden h-[22rem] w-[22rem] rounded-full bg-amber-300/10 blur-3xl dark:block" />

      {/* Subtle grain for depth */}
      <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.6)_1px,transparent_0)] [background-size:18px_18px] dark:opacity-[0.06]" />
    </div>
  );
}
