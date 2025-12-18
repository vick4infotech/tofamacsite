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
        "relative inline-flex h-10 w-10 items-center justify-center rounded-xl",
        "border border-black/10 bg-white/60 shadow-emboss backdrop-blur hover:bg-white/80",
        "transition-colors duration-200 dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/15",
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
