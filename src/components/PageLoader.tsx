import { useEffect, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "../lib/content";

const LETTER_STAGGER = 0.04;
const LETTER_DURATION = 0.4;
const HOLD_AFTER_REVEAL = 0.5;
const SLIDE_DURATION = 0.8;
const SLIDE_EASE = [0.76, 0, 0.24, 1] as const;

export function PageLoader({ children }: { children: ReactNode }) {
  const prefersReducedMotion = useReducedMotion();
  const [revealed, setRevealed] = useState(prefersReducedMotion ?? false);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const letters = site.name.length;
    const revealMs = (letters * LETTER_STAGGER + LETTER_DURATION + HOLD_AFTER_REVEAL) * 1000;
    const timer = setTimeout(() => setRevealed(true), revealMs);
    return () => clearTimeout(timer);
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <>
      {!revealed && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-[#0a0a0a]">
          <h1 className="flex text-2xl font-bold tracking-tight text-white sm:text-4xl">
            {site.name.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: LETTER_DURATION, delay: i * LETTER_STAGGER }}
              >
                {char === " " ? " " : char}
              </motion.span>
            ))}
          </h1>
        </div>
      )}

      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: revealed ? 0 : "100%" }}
        transition={{ duration: SLIDE_DURATION, ease: SLIDE_EASE }}
        className="relative z-110"
      >
        {children}
      </motion.div>
    </>
  );
}
