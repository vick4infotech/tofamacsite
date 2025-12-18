"use client";

import * as React from "react";

/**
 * TypewriterCycle
 * A lightweight type/delete loop for the home hero headline.
 * We keep it dependency free (no external libs) and deterministic to avoid hydration issues.
 */
export function TypewriterCycle({
  words,
  className,
  holdMs = 1200,
  typeMs = 90,
  deleteMs = 55,
}: {
  words: string[];
  className?: string;
  holdMs?: number;
  typeMs?: number;
  deleteMs?: number;
}) {
  const safeWords = React.useMemo(
    () => words.map((w) => (w ?? "").toUpperCase()).filter(Boolean),
    [words]
  );

  const [wordIndex, setWordIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(
    safeWords[0]?.length ?? 0
  );
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    if (safeWords.length === 0) return;
    const current = safeWords[wordIndex] ?? "";

    // Pause on full word before deleting.
    if (!isDeleting && subIndex === current.length) {
      const t = window.setTimeout(() => setIsDeleting(true), holdMs);
      return () => window.clearTimeout(t);
    }

    // When fully deleted, move to next word and start typing.
    if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % safeWords.length);
      return;
    }

    const stepMs = isDeleting ? deleteMs : typeMs;
    const t = window.setTimeout(() => {
      setSubIndex((i) => i + (isDeleting ? -1 : 1));
    }, stepMs);

    return () => window.clearTimeout(t);
  }, [deleteMs, holdMs, isDeleting, subIndex, typeMs, wordIndex, safeWords]);

  const current = safeWords[wordIndex] ?? "";
  const visible = current.slice(0, Math.max(0, Math.min(subIndex, current.length)));

  return (
    <span className={className} aria-label={current}>
      {visible}
      <span
        className="ml-0.5 inline-block h-[1em] w-[0.08em] translate-y-[0.1em] animate-pulse rounded bg-current opacity-70"
        aria-hidden="true"
      />
    </span>
  );
}
