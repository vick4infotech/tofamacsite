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
    // We keep the tint API (violet/cyan/amber/emerald) for readability across pages,
    // but map everything to the strict brand palette extracted from the logo:
    // primary = brand blue, supporting = accent green.
    tint === "cyan"
      ? "from-accent-100/85 via-white/50 to-brand-50/70 dark:from-accent-900/25 dark:to-slate-950/55"
      : tint === "amber"
      ? "from-brand-50/80 via-white/55 to-accent-50/70 dark:from-brand-900/28 dark:to-slate-950/55"
      : tint === "emerald"
      ? "from-accent-50/85 via-white/55 to-accent-100/75 dark:from-accent-900/22 dark:to-slate-950/55"
      : "from-brand-100/85 via-white/55 to-brand-50/70 dark:from-brand-900/30 dark:to-slate-950/55";

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
