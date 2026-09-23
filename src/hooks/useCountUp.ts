import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/** Counts from 0 to `value` over `duration` seconds once the element scrolls into view. */
export function useCountUp(value: number, duration = 1.4) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let frame: number;
    const start = performance.now();
    const isFloat = !Number.isInteger(value);

    const tick = (now: number) => {
      const elapsed = (now - start) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = value * eased;
      setDisplay(isFloat ? Math.round(current * 10) / 10 : Math.round(current));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration]);

  return { ref, display };
}
