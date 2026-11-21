import { ArrowUpRight, Languages, Landmark, Stamp } from "lucide-react";
import type { MouseEvent } from "react";
import { visaAssistance } from "../../lib/content";
import { Reveal } from "../ui/Reveal";

const icons = [Languages, Landmark, Stamp];

// Track the cursor inside the card so the spotlight glow follows it.
function trackPointer(e: MouseEvent<HTMLDivElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  el.style.setProperty("--my", `${e.clientY - rect.top}px`);
}

export function MoreThanVisaFiling() {
  const { moreThan } = visaAssistance;

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-[clamp(80px,12vh,160px)]">
      <Reveal className="flex flex-col items-center text-center">
        <h2 className="text-[clamp(2.25rem,4.5vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.03em]">
          <span className="text-gradient block">{moreThan.headingLines[0]}</span>
          <span className="block text-orange">{moreThan.headingLines[1]}</span>
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {moreThan.items.map((item, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={item.title} delay={i * 0.08}>
              <div
                onMouseMove={trackPointer}
                className="group relative flex h-full min-h-[270px] flex-col overflow-hidden rounded-card border border-border bg-surface p-8 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-orange/60 hover:shadow-[0_25px_60px_-20px_rgba(255,92,22,0.5)]"
              >
                {/* Cursor-following spotlight */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(320px circle at var(--mx, 50%) var(--my, 50%), rgba(255,92,22,0.22), transparent 65%)",
                  }}
                />

                {/* Orange bar that sweeps in along the bottom edge */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-orange to-orange/0 transition-transform duration-700 ease-out group-hover:scale-x-100"
                />

                <div className="relative flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-soft text-orange transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-orange group-hover:text-white group-hover:shadow-lg group-hover:shadow-orange/40">
                    <Icon size={22} />
                  </span>
                  <ArrowUpRight
                    size={20}
                    aria-hidden="true"
                    className="translate-y-2 -translate-x-2 text-orange opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                  />
                </div>

                <h3 className="relative mt-auto pt-8 text-lg font-bold text-text transition-transform duration-500 group-hover:translate-x-1">
                  {item.title}
                </h3>
                <p className="relative mt-2 text-sm leading-[1.65] text-text-muted transition-colors duration-500 group-hover:text-text/80">
                  {item.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
