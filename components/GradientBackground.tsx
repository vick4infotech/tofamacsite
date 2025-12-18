import { cn } from "@/lib/cn";

/**
 * Premium multi color background washes.
 * Light mode is intentionally vibrant (brand-led) while staying professional.
 * Dark mode uses deeper glows with smooth opacity transitions (no abrupt hide/show).
 */
export function GradientBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none fixed inset-0 -z-10 overflow-hidden", className)}
    >
      {/* Base canvas */}
      <div className="absolute inset-0 bg-white transition-colors duration-500 dark:bg-slate-950" />

      {/* Light glows */}
      <div className="absolute -top-24 left-1/2 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full bg-brand-400/40 blur-3xl transition-opacity duration-500 dark:opacity-0" />
      <div className="absolute top-[14rem] -left-32 h-[38rem] w-[38rem] rounded-full bg-cyan-300/30 blur-3xl transition-opacity duration-500 dark:opacity-0" />
      <div className="absolute -bottom-28 right-[-7rem] h-[40rem] w-[40rem] rounded-full bg-fuchsia-400/26 blur-3xl transition-opacity duration-500 dark:opacity-0" />
      <div className="absolute bottom-[10rem] left-[28%] h-[26rem] w-[26rem] rounded-full bg-amber-300/24 blur-3xl transition-opacity duration-500 dark:opacity-0" />
      <div className="absolute top-[28rem] right-[18%] h-[22rem] w-[22rem] rounded-full bg-emerald-300/18 blur-3xl transition-opacity duration-500 dark:opacity-0" />

      {/* Dark glows */}
      <div className="absolute -top-24 left-1/2 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full bg-brand-500/22 blur-3xl opacity-0 transition-opacity duration-500 dark:opacity-100" />
      <div className="absolute top-[14rem] -left-32 h-[38rem] w-[38rem] rounded-full bg-cyan-400/16 blur-3xl opacity-0 transition-opacity duration-500 dark:opacity-100" />
      <div className="absolute -bottom-28 right-[-7rem] h-[40rem] w-[40rem] rounded-full bg-fuchsia-400/14 blur-3xl opacity-0 transition-opacity duration-500 dark:opacity-100" />
      <div className="absolute bottom-[10rem] left-[28%] h-[26rem] w-[26rem] rounded-full bg-amber-300/12 blur-3xl opacity-0 transition-opacity duration-500 dark:opacity-100" />
      <div className="absolute top-[28rem] right-[18%] h-[22rem] w-[22rem] rounded-full bg-emerald-400/10 blur-3xl opacity-0 transition-opacity duration-500 dark:opacity-100" />

      {/* Subtle grain */}
      <div className="absolute inset-0 opacity-[0.09] [background-image:radial-gradient(rgba(0,0,0,0.22)_1px,transparent_0)] [background-size:18px_18px] transition-opacity duration-500 dark:opacity-[0.06]" />
    </div>
  );
}
