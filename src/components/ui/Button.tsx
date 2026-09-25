import { useRef, type ComponentPropsWithoutRef, type MouseEvent, type ReactNode } from "react";
import { motion, useMotionTemplate, useMotionValue, type HTMLMotionProps } from "framer-motion";

type ButtonProps = Omit<ComponentPropsWithoutRef<"button">, keyof HTMLMotionProps<"button">> &
  HTMLMotionProps<"button"> & {
    variant?: "primary" | "ghost" | "cta";
  };

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-[18px] text-[0.95rem] font-semibold transition-colors duration-200";

  const styles = {
    primary: "bg-orange text-white shadow-[0_0_48px_rgba(255,92,22,0.45)] hover:bg-orange-hover",
    ghost: "border border-border-strong text-text bg-transparent hover:border-orange/40 hover:bg-white/[0.03]",
    // "Book Free Consultation" everywhere — kept as its own variant name since it's the
    // site's one conversion action, styled orange (not blue) with a cursor-tracking glow.
    // Two shadow layers (tight + wide) give a soft, diffuse halo instead of a hard-edged glow.
    // Note: this used to also move the button toward the cursor ("magnetic"), but that
    // caused a real, reproducible shake on hover, so the effect is glow-only now — a
    // background-only change can't shake since the button itself never moves.
    cta: "bg-orange text-white shadow-[0_0_28px_rgba(255,92,22,0.65),0_0_140px_rgba(255,92,22,0.45)] hover:bg-orange-hover hover:shadow-[0_0_35px_rgba(255,92,22,0.85),0_0_180px_rgba(255,92,22,0.6)]",
  }[variant];

  const isGlowing = variant === "cta";
  const buttonRef = useRef<HTMLButtonElement>(null);

  // a soft spotlight that tracks the cursor position inside the button,
  // in px relative to the button's own box.
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const glowBackground = useMotionTemplate`radial-gradient(300px circle at ${glowX}px ${glowY}px, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.18) 35%, transparent 70%)`;

  function handleMouseMove(e: MouseEvent<HTMLButtonElement>) {
    if (!isGlowing || !buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    glowX.set(e.clientX - rect.left);
    glowY.set(e.clientY - rect.top);
  }

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={`${base} ${styles} ${className}`}
      {...props}
    >
      {isGlowing && (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glowBackground }}
        />
      )}
      <span className="relative z-10 inline-flex items-center gap-2">{children as ReactNode}</span>
    </motion.button>
  );
}
