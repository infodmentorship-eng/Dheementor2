import { useEffect, useRef, type PointerEvent as ReactPointerEvent } from "react";
import { animate, useReducedMotion, type AnimationPlaybackControls } from "framer-motion";
import { Globe } from "lucide-react";
import { home } from "../../lib/content";

const RADIUS = 220; // px, from ring center to each flag's center
const FLAG_SIZE = 110; // px

const SPIN_DURATION = 30; // seconds per full revolution
const FAN_OUT_SPRING = { type: "spring" as const, stiffness: 70, damping: 14 };

type Country = { name: string; code: string };

function OrbitFlag({
  country,
  angle,
  reducedMotion,
  registerControls,
}: {
  country: Country;
  angle: number;
  reducedMotion: boolean;
  registerControls: (controls: AnimationPlaybackControls[]) => void;
}) {
  const armRef = useRef<HTMLDivElement>(null);
  const flagRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const armEl = armRef.current;
    const flagEl = flagRef.current;
    if (!armEl || !flagEl) return;

    if (reducedMotion) {
      armEl.style.transform = `rotate(${angle}deg)`;
      flagEl.style.transform = `rotate(${-angle}deg)`;
      return;
    }

    let cancelled = false;

    // fan-out: the arm swings from 0deg (stacked at top) out to its slot,
    // while the flag itself counter-rotates by the same amount so it never
    // visibly tilts — only the arm carrying it swings.
    const armFanOut = animate(armEl, { rotate: angle }, FAN_OUT_SPRING);
    const flagFanOut = animate(flagEl, { rotate: -angle }, FAN_OUT_SPRING);

    Promise.all([armFanOut, flagFanOut]).then(() => {
      if (cancelled) return;
      // once settled, both continue into a matched infinite rotation —
      // the arm spins the ring, the flag cancels that spin so it stays upright.
      const armSpin = animate(
        armEl,
        { rotate: [angle, angle + 360] },
        { duration: SPIN_DURATION, ease: "linear", repeat: Infinity }
      );
      const flagSpin = animate(
        flagEl,
        { rotate: [-angle, -angle - 360] },
        { duration: SPIN_DURATION, ease: "linear", repeat: Infinity }
      );
      registerControls([armSpin, flagSpin]);
    });

    return () => {
      cancelled = true;
      armFanOut.stop();
      flagFanOut.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [angle, reducedMotion]);

  return (
    <div ref={armRef} className="absolute left-1/2 top-1/2 h-0 w-0 origin-top-left">
      <div className="absolute left-0 top-0" style={{ transform: `translateY(-${RADIUS}px)` }}>
        <div className="absolute -translate-x-1/2 -translate-y-1/2">
          <div ref={flagRef} className="flex flex-col items-center gap-2">
            <span
              className="overflow-hidden rounded-full border-2 border-border-strong shadow-lg"
              style={{ width: FLAG_SIZE, height: FLAG_SIZE }}
            >
              <img
                src={`https://flagcdn.com/w160/${country.code}.png`}
                alt={country.name}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </span>
            <span className="whitespace-nowrap rounded-full bg-surface-2 px-3 py-1 text-xs font-semibold text-text">
              {country.name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TopDestinationsOrbit() {
  const { topDestinationsOrbit } = home;
  const reducedMotion = useReducedMotion() ?? false;
  const allControls = useRef<AnimationPlaybackControls[]>([]);

  function registerControls(controls: AnimationPlaybackControls[]) {
    allControls.current.push(...controls);
  }

  // only a real mouse hover should pause the spin — on touch devices a tap
  // fires a pointerenter with no matching "leave" until the user happens to
  // touch elsewhere, so the animation looked permanently stuck after a tap.
  function handlePointerEnter(e: ReactPointerEvent) {
    if (e.pointerType !== "mouse") return;
    allControls.current.forEach((c) => c.pause());
  }

  function handlePointerLeave(e: ReactPointerEvent) {
    if (e.pointerType !== "mouse") return;
    allControls.current.forEach((c) => c.play());
  }

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[520px]"
      onPointerEnter={reducedMotion ? undefined : handlePointerEnter}
      onPointerLeave={reducedMotion ? undefined : handlePointerLeave}
    >
      <div className="absolute left-1/2 top-1/2 flex h-[clamp(130px,20vw,190px)] w-[clamp(130px,20vw,190px)] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 rounded-full border border-border bg-surface-2 text-center">
        <Globe size={28} className="text-orange" />
        <span className="px-4 text-sm font-bold leading-tight text-text">
          {topDestinationsOrbit.centerLabel}
        </span>
      </div>

      {topDestinationsOrbit.countries.map((country, i) => (
        <OrbitFlag
          key={country.name}
          country={country}
          angle={(360 / topDestinationsOrbit.countries.length) * i}
          reducedMotion={reducedMotion}
          registerControls={registerControls}
        />
      ))}
    </div>
  );
}
