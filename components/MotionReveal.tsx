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
  /**
   * Stronger default reveal distance for a more premium, noticeable motion.
   * Keep it consistent site-wide so animations feel organized.
   */
  y = 34,
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
      initial={
        reduce
          ? false
          : {
              opacity: 0,
              y,
              scale: 0.965,
              filter: "blur(10px)",
            }
      }
      whileInView={
        reduce
          ? undefined
          : {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }
      }
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
