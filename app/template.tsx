"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 28, scale: 0.985, filter: "blur(12px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -20, scale: 0.995, filter: "blur(10px)" }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
