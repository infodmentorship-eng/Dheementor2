import type { ReactNode } from "react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section";
}) {
  const sharedProps = {
    className,
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 as const },
    transition: { duration: 0.6, delay, ease: EASE },
  };

  if (as === "section") {
    return <motion.section {...sharedProps}>{children}</motion.section>;
  }
  return <motion.div {...sharedProps}>{children}</motion.div>;
}
