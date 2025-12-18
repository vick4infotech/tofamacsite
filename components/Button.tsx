import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-brand-600 via-fuchsia-600 to-cyan-600 text-white shadow-lg shadow-brand-600/25 hover:from-brand-700 hover:via-fuchsia-700 hover:to-cyan-700",
  secondary:
    "bg-gradient-to-r from-white/75 via-white/65 to-cyan-50/70 text-slate-950 hover:from-white/95 hover:to-cyan-50/90 border border-black/10 dark:from-white/10 dark:via-white/8 dark:to-white/10 dark:text-white dark:hover:from-white/14 dark:border-white/12",
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
        "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold",
        "transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-400/60 focus:ring-offset-2 focus:ring-offset-transparent",
        styles[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}
