import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    // Brand-only gradient (blue -> green) for strong CTAs.
    "bg-gradient-to-r from-brand-600 to-accent-500 text-white shadow-lg shadow-brand-600/25 hover:from-brand-700 hover:to-accent-600",
  secondary:
    "bg-gradient-to-r from-white/80 via-white/70 to-brand-50/70 text-slate-950 hover:from-white/95 hover:to-brand-50/90 border border-black/10 dark:from-white/10 dark:via-white/8 dark:to-white/10 dark:text-white dark:hover:from-white/14 dark:border-white/12",
  ghost:
    "bg-transparent text-slate-900 hover:bg-black/5 dark:text-white dark:hover:bg-white/10",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        // Uppercase is applied by request for all buttons.
        "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold uppercase tracking-wide",
        // Stronger but controlled interaction.
        "transition-colors duration-200 transition-transform will-change-transform",
        "hover:-translate-y-1 hover:scale-[1.02] active:translate-y-0 active:scale-[0.985]",
        "focus:outline-none focus:ring-2 focus:ring-brand-400/60 focus:ring-offset-2 focus:ring-offset-transparent",
        styles[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}
