"use client";

import { cn } from "@/lib/cn";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Premium multi color background washes.
 * Light mode is intentionally vibrant (brand-led) while staying professional.
 * Dark mode uses deeper glows with smooth opacity transitions (no abrupt hide/show).
 */
export function GradientBackground({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none fixed inset-0 -z-10 overflow-hidden", className)}
    >
      {/* Base canvas */}
      <div className="absolute inset-0 bg-white transition-colors duration-500 dark:bg-slate-950" />

      {/* Light glows (strictly brand palette: blue + green) */}
      <motion.div
        className="absolute -top-24 left-1/2 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full bg-brand-400/45 blur-3xl transition-opacity duration-500 dark:opacity-0"
        animate={
          reduce
            ? undefined
            : {
                y: [0, -36, 0],
                x: ["-50%", "-48.5%", "-50%"],
              }
        }
        transition={reduce ? undefined : { duration: 12, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className="absolute top-[14rem] -left-32 h-[38rem] w-[38rem] rounded-full bg-accent-300/28 blur-3xl transition-opacity duration-500 dark:opacity-0"
        animate={reduce ? undefined : { y: [0, 40, 0], x: [0, 28, 0] }}
        transition={reduce ? undefined : { duration: 15, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-28 right-[-7rem] h-[40rem] w-[40rem] rounded-full bg-brand-300/26 blur-3xl transition-opacity duration-500 dark:opacity-0"
        animate={reduce ? undefined : { y: [0, -44, 0], x: [0, -24, 0] }}
        transition={reduce ? undefined : { duration: 17, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[10rem] left-[28%] h-[26rem] w-[26rem] rounded-full bg-accent-200/22 blur-3xl transition-opacity duration-500 dark:opacity-0"
        animate={reduce ? undefined : { y: [0, 24, 0], x: [0, -18, 0] }}
        transition={reduce ? undefined : { duration: 14, ease: "easeInOut", repeat: Infinity }}
      />

      {/* Dark glows (same palette, deeper) */}
      <motion.div
        className="absolute -top-24 left-1/2 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full bg-brand-500/22 blur-3xl opacity-0 transition-opacity duration-500 dark:opacity-100"
        animate={reduce ? undefined : { y: [0, -28, 0], x: ["-50%", "-49%", "-50%"] }}
        transition={reduce ? undefined : { duration: 14, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className="absolute top-[14rem] -left-32 h-[38rem] w-[38rem] rounded-full bg-accent-500/14 blur-3xl opacity-0 transition-opacity duration-500 dark:opacity-100"
        animate={reduce ? undefined : { y: [0, 30, 0], x: [0, 20, 0] }}
        transition={reduce ? undefined : { duration: 16, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-28 right-[-7rem] h-[40rem] w-[40rem] rounded-full bg-brand-600/12 blur-3xl opacity-0 transition-opacity duration-500 dark:opacity-100"
        animate={reduce ? undefined : { y: [0, -32, 0], x: [0, -18, 0] }}
        transition={reduce ? undefined : { duration: 18, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[10rem] left-[28%] h-[26rem] w-[26rem] rounded-full bg-accent-600/10 blur-3xl opacity-0 transition-opacity duration-500 dark:opacity-100"
        animate={reduce ? undefined : { y: [0, 18, 0], x: [0, -14, 0] }}
        transition={reduce ? undefined : { duration: 15, ease: "easeInOut", repeat: Infinity }}
      />

      {/* Subtle grain */}
      <div className="absolute inset-0 opacity-[0.09] [background-image:radial-gradient(rgba(0,0,0,0.22)_1px,transparent_0)] [background-size:18px_18px] transition-opacity duration-500 dark:opacity-[0.06]" />
    </div>
  );
}
