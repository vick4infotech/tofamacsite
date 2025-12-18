import { cn } from "@/lib/cn";
import React from "react";

/**
 * Surface creates an embossed, tinted background behind content.
 * Light mode: brighter, more colorful tints for a premium "pop".
 * Dark mode: higher contrast surfaces so the theme feels intentional.
 */
export function Surface({
  children,
  className,
  tint = "violet",
  ...rest
}: React.HTMLAttributes<HTMLDivElement> & {
  tint?: "violet" | "cyan" | "amber" | "emerald";
}) {
  const tintClass =
    tint === "cyan"
      ? "from-cyan-100/90 via-white/40 to-brand-50/60 dark:from-cyan-950/35 dark:to-slate-950/55"
      : tint === "amber"
      ? "from-amber-100/85 via-white/40 to-fuchsia-50/55 dark:from-amber-950/35 dark:to-slate-950/55"
      : tint === "emerald"
      ? "from-emerald-100/80 via-white/45 to-cyan-50/55 dark:from-emerald-950/30 dark:to-slate-950/55"
      : "from-brand-100/90 via-fuchsia-50/45 to-cyan-50/45 dark:from-brand-950/40 dark:to-slate-950/55";

  return (
    <div
      {...rest}
      className={cn(
        "rounded-2xl border border-black/10 bg-gradient-to-br backdrop-blur",
        "shadow-emboss dark:border-white/12 dark:shadow-emboss-dark",
        "transition-colors duration-500",
        tintClass,
        className
      )}
    >
      {children}
    </div>
  );
}
