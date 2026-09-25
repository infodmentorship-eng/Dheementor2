import { useRef, type ComponentPropsWithoutRef, type MouseEvent, type ReactNode } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  type HTMLMotionProps,
} from "framer-motion";

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
    // site's one conversion action, styled orange (not blue) with a magnetic cursor-glow.
    // Two shadow layers (tight + wide) give a soft, diffuse halo instead of a hard-edged glow.
    cta: "bg-orange text-white shadow-[0_0_28px_rgba(255,92,22,0.65),0_0_140px_rgba(255,92,22,0.45)] hover:bg-orange-hover hover:shadow-[0_0_35px_rgba(255,92,22,0.85),0_0_180px_rgba(255,92,22,0.6)]",
  }[variant];

  const isMagnetic = variant === "cta";
  const buttonRef = useRef<HTMLButtonElement>(null);
  // the button's resting (untransformed) box, measured once per hover instead
  // of on every mousemove — repeated getBoundingClientRect() calls force a
  // synchronous layout read on every pixel of mouse movement, which combined
  // with this button's large blurred box-shadow needing to repaint was
  // dropping frames and reading as a "shake" rather than a smooth glide.
  const restRect = useRef<{ left: number; top: number; width: number; height: number } | null>(
    null
  );

  // pulls the whole button a few px toward the cursor, spring-eased so it
  // glides rather than snaps, and returns to rest on mouse leave.
  const pullX = useMotionValue(0);
  const pullY = useMotionValue(0);
  const springPullX = useSpring(pullX, { stiffness: 150, damping: 14, mass: 0.3 });
  const springPullY = useSpring(pullY, { stiffness: 150, damping: 14, mass: 0.3 });

  // a soft spotlight that tracks the cursor position inside the button,
  // in px relative to the button's own box.
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const glowBackground = useMotionTemplate`radial-gradient(300px circle at ${glowX}px ${glowY}px, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.18) 35%, transparent 70%)`;

  function handleMouseEnter() {
    if (!isMagnetic || !buttonRef.current) return;
    // measure once, at the start of the hover, while the button is still at
    // (or very near) rest — this is the one and only layout read per hover.
    const rect = buttonRef.current.getBoundingClientRect();
    restRect.current = {
      left: rect.left - springPullX.get(),
      top: rect.top - springPullY.get(),
      width: rect.width,
      height: rect.height,
    };
  }

  function handleMouseMove(e: MouseEvent<HTMLButtonElement>) {
    if (!isMagnetic || !restRect.current) return;
    const { left, top, width, height } = restRect.current;

    // derive the button's current on-screen box from the cached resting box
    // plus its current offset — no DOM read needed, so this stays cheap even
    // at high mousemove frequency.
    const liveLeft = left + springPullX.get();
    const liveTop = top + springPullY.get();
    glowX.set(e.clientX - liveLeft);
    glowY.set(e.clientY - liveTop);

    // magnetic pull: measured from the RESTING center, so the pull never
    // feeds back on its own transform.
    const restCenterX = left + width / 2;
    const restCenterY = top + height / 2;
    pullX.set((e.clientX - restCenterX) * 0.4);
    pullY.set((e.clientY - restCenterY) * 0.7);
  }

  function handleMouseLeave() {
    pullX.set(0);
    pullY.set(0);
    restRect.current = null;
  }

  return (
    <motion.button
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={isMagnetic ? undefined : { y: -2 }}
      whileTap={{ y: 0 }}
      style={isMagnetic ? { x: springPullX, y: springPullY } : undefined}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={`${base} ${isMagnetic ? "will-change-transform" : ""} ${styles} ${className}`}
      {...props}
    >
      {isMagnetic && (
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
