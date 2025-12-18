"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

/**
 * MotionReveal is intentionally a single wrapper that can act as the direct grid child.
 * This prevents desktop grid column collapse when the reveal wrapper becomes the grid item.
 */
export function MotionReveal({
  children,
  className,
  delay = 0,
  y = 14,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={cn(className)}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
