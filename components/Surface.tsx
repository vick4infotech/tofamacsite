import { cn } from "@/lib/cn";
import React from "react";

/**
 * Surface creates an embossed, tinted background behind content.
 * It increases contrast on colorful backgrounds while staying premium.
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
      ? "from-cyan-50/75 to-ink-50/35 dark:from-cyan-950/25 dark:to-slate-950/45"
      : tint === "amber"
      ? "from-amber-50/75 to-ink-50/35 dark:from-amber-950/25 dark:to-slate-950/45"
      : tint === "emerald"
      ? "from-emerald-50/75 to-ink-50/35 dark:from-emerald-950/25 dark:to-slate-950/45"
      : "from-brand-50/75 to-ink-50/35 dark:from-brand-950/30 dark:to-slate-950/45";

  return (
    <div
      {...rest}
      className={cn(
        "rounded-2xl border border-black/5 bg-gradient-to-br backdrop-blur",
        "shadow-emboss dark:border-white/10 dark:shadow-emboss-dark",
        "transition-colors duration-300",
        tintClass,
        className
      )}
    >
      {children}
    </div>
  );
}
