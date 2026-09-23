import { useLayoutEffect, useRef } from "react";
import {
  motion,
  transform,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import airplaneSrc from "../../assets/airplane.png";
import { home } from "../../lib/content";

// plane finishes its flight by ~85% progress, leaving a settled beat before
// the section releases back into normal scroll.
const PLANE_RANGE: [number, number] = [0, 0.85];
const HEADLINE_1_RANGE: [number, number] = [0.35, 0.5];
const HEADLINE_2_RANGE: [number, number] = [0.45, 0.6];

export function HeroPlane() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  // target = the tall outer wrapper, so progress maps across its whole scroll
  // distance rather than just the height of the sticky inner section.
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  // spring-smoothed so fast/jerky wheel or trackpad scrolling reads as a
  // fluid glide instead of snapping frame-to-frame with raw scroll input.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    mass: 0.4,
  });

  // All animated values are plain motion values updated together from one
  // scroll listener (below), rather than a chain of independent useTransform
  // hooks — that chain can lag a frame behind on a cold jump straight to a
  // deep scroll position (e.g. restored scroll on reload), leaving derived
  // values stuck at their initial state until a second scroll event arrives.
  // Computing everything from the same progress value in one place keeps it
  // correct on the very first paint, no warm-up scroll required.
  const planeX = useMotionValue("-65vw");
  const headline1Opacity = useMotionValue(1);
  const headline1Y = useMotionValue(0);
  const headline2Opacity = useMotionValue(0);
  const headline2Y = useMotionValue(24);

  const applyProgress = (p: number) => {
    planeX.set(`${transform(p, PLANE_RANGE, [-69, 68])}vw`);
    headline1Opacity.set(transform(p, HEADLINE_1_RANGE, [1, 0]));
    headline1Y.set(transform(p, HEADLINE_1_RANGE, [0, -24]));
    headline2Opacity.set(transform(p, HEADLINE_2_RANGE, [0, 1]));
    headline2Y.set(transform(p, HEADLINE_2_RANGE, [24, 0]));
  };

  // keep every value in sync on each scroll event, and once immediately on
  // mount using whatever scroll position we're already at — "change" events
  // only fire on an actual change, so without this a page load that lands
  // mid-section (restored scroll position, deep link, etc.) would leave
  // everything stuck at its initial values until the next scroll.
  useMotionValueEvent(smoothProgress, "change", applyProgress);
  useLayoutEffect(() => {
    applyProgress(smoothProgress.get());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={wrapperRef} className="relative h-[250vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-black via-orange-950 to-orange-600">
        {/* fixed-width wrapper centers the plane and sets its size once —
            width never changes with scroll; the motion child only ever
            adds a horizontal offset on top of that. */}
        <div className="absolute left-1/2 top-1/2 z-20 w-[clamp(280px,35vw,520px)] -translate-x-1/2 -translate-y-1/2">
          <motion.img
            src={airplaneSrc}
            alt=""
            loading="lazy"
            style={{ x: planeX }}
            className="pointer-events-none w-full origin-center will-change-transform drop-shadow-[0_35px_45px_rgba(0,0,0,0.5)]"
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-4xl px-6 text-center">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
            <motion.h1
              style={{ opacity: headline1Opacity, y: headline1Y }}
              className="text-[clamp(1.75rem,5vw,3.25rem)] font-bold leading-[1.2] text-white"
            >
              {home.travelMoment.lineOne}
            </motion.h1>
          </div>
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
            <motion.h1
              style={{ opacity: headline2Opacity, y: headline2Y }}
              className="text-[clamp(1.75rem,5vw,3.25rem)] font-bold leading-[1.2] text-white"
            >
              {home.travelMoment.lineTwo}
            </motion.h1>
          </div>
        </div>
      </div>
    </div>
  );
}
