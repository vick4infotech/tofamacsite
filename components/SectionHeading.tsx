import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={cn("max-w-3xl", alignCls, className)}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-700/90 dark:text-brand-300/90">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-slate-700 dark:text-slate-200">
          {description}
        </p>
      ) : null}
    </div>
  );
}
