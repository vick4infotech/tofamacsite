"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "@/app/providers";
import { cn } from "@/lib/cn";

export function ThemeToggle({ className }: { className?: string }) {
  const ctx = React.useContext(ThemeContext);
  if (!ctx) return null;

  const isDark = ctx.theme === "dark";

  return (
    <button
      type="button"
      onClick={ctx.toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "inline-flex items-center justify-center rounded-xl border shadow-emboss backdrop-blur transition-colors duration-500",
        "border-black/10 bg-gradient-to-br from-brand-100/70 via-white/50 to-accent-100/60 hover:from-brand-100/90 hover:to-accent-100/80",
        "dark:border-white/12 dark:bg-white/8 dark:hover:bg-white/12 dark:shadow-emboss-dark",
        "h-10 w-10",
        className
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={{ opacity: 0, rotate: -30, scale: 0.9 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 30, scale: 0.9 }}
          transition={{ duration: 0.18 }}
        >
          {isDark ? (
            <Moon className="h-5 w-5 text-white" />
          ) : (
            <Sun className="h-5 w-5 text-slate-900" />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
