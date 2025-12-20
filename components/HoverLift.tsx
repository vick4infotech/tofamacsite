"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

/**
 * HoverLift
 *
 * Consistent, understated hover affordance used across cards and icon buttons.
 * Keeps the motion subtle (enterprise feel) while improving perceived depth.
 */
export function HoverLift({
  children,
  className,
  // Stronger default affordance. Still controlled and consistent.
  y = -6,
  scale = 1.03,
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
  scale?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={cn("will-change-transform", className)}
      whileHover={{ y, scale }}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
