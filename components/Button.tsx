import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white shadow-lg shadow-brand-600/20 hover:bg-brand-700",
  secondary:
    "bg-white/70 text-slate-900 hover:bg-white border border-black/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15 dark:border-white/10",
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
