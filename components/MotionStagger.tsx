"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/cn";

/**
 * MotionStagger + MotionItem
 *
 * A disciplined animation primitive used across pages:
 * - Staggers children in a predictable rhythm
 * - Respects prefers-reduced-motion
 * - Keeps layout stable (no scale jumps by default)
 */

const containerVariants: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      // Stronger and more readable cadence for "premium" motion.
      staggerChildren: 0.14,
      delayChildren: 0.06,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 34, scale: 0.97, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function MotionStagger({
  children,
  className,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-90px" }}
    >
      {children}
    </motion.div>
  );
}

export function MotionItem({
  children,
  className,
  variants,
}: {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={cn(className)} variants={variants ?? itemVariants}>
      {children}
    </motion.div>
  );
}
