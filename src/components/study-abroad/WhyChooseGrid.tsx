import { Clock, Globe, Lightbulb, Target, Wallet, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { studyAbroad } from "../../lib/content";
import { EyebrowPill } from "../ui/EyebrowPill";
import { Reveal } from "../ui/Reveal";

const icons = [Clock, Wallet, Zap, Lightbulb, Target, Globe];

export function WhyChooseGrid() {
  const { whyChoose } = studyAbroad;
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);

  // Cycle the highlighted card; pause while the user hovers one.
  useEffect(() => {
    if (hovered !== null) return;
    const id = setInterval(() => {
      setActive((a) => (a + 1) % whyChoose.tiles.length);
    }, 3000);
    return () => clearInterval(id);
  }, [hovered, whyChoose.tiles.length]);

  const current = hovered ?? active;

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-[clamp(80px,12vh,160px)]">
      <Reveal className="flex flex-col items-center text-center">
        <EyebrowPill>Why Us</EyebrowPill>
        <h2 className="mt-6 text-[clamp(2.25rem,4.5vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.03em]">
          <span className="text-gradient block">{whyChoose.headingLines[0]}</span>
          <span className="block text-orange">
            {whyChoose.headingLines[1]}
            <span className="dot">.</span>
          </span>
        </h2>
        <p className="mt-4 max-w-[55ch] text-text-muted">{whyChoose.intro}</p>
      </Reveal>

      <Reveal delay={0.1} className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {whyChoose.tiles.map((tile, i) => {
          const Icon = icons[i];
          const isActive = current === i;
          return (
            <div
              key={tile.title}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`relative flex h-full min-h-[200px] flex-col rounded-2xl border p-6 transition-all duration-500 ${
                isActive
                  ? "border-orange/60 bg-orange-soft shadow-[0_20px_60px_-20px_rgba(255,92,22,0.55)]"
                  : "border-white/10 bg-surface"
              }`}
            >
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-500 ${
                  isActive
                    ? "-translate-y-1 -rotate-6 border-orange bg-orange text-white shadow-lg shadow-orange/40"
                    : "border-orange/30 bg-orange-soft text-orange"
                }`}
              >
                <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <h3 className="mt-auto pt-8 text-lg font-bold text-text">{tile.title}</h3>
              <p className="mt-2 text-sm leading-[1.6] text-text-muted">{tile.description}</p>
            </div>
          );
        })}
      </Reveal>
    </section>
  );
}
