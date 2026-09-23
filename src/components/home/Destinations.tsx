import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { home } from "../../lib/content";
import { EyebrowPill } from "../ui/EyebrowPill";
import { Reveal } from "../ui/Reveal";

export function Destinations() {
  const { destinations } = home;

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-[clamp(80px,12vh,160px)]">
      <Reveal className="flex flex-col items-center text-center">
        <EyebrowPill>{destinations.eyebrow}</EyebrowPill>
        <h2 className="text-gradient mt-6 max-w-[20ch] text-[clamp(2.25rem,4.5vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.03em]">
          {destinations.heading}
          <span className="dot">.</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {destinations.items.map((dest, i) => (
          <Reveal key={dest.name} delay={i * 0.1}>
            <Link
              to={destinations.viewAllHref}
              className="group flex h-full flex-col rounded-card border border-border bg-surface p-5 transition-all duration-200 hover:-translate-y-1 hover:border-orange/40"
            >
              <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-xl bg-linear-to-br from-surface-2 to-black">
                <div className="grid-texture absolute inset-0" />
                <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-orange/40 bg-orange-soft text-lg font-extrabold tracking-wide text-orange-hover">
                  {dest.code}
                </span>
                <span className="absolute right-3 top-3 rounded-full bg-orange px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-white shadow-md">
                  {dest.tag}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-bold text-text">{dest.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-[1.6] text-text-muted">{dest.description}</p>

              <div className="mt-6 flex justify-end border-t border-border pt-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border-strong text-text transition-all duration-200 group-hover:rotate-45 group-hover:border-orange group-hover:bg-orange group-hover:text-white">
                  <ArrowUpRight size={16} />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3} className="mt-10 flex justify-center">
        <Link
          to={destinations.viewAllHref}
          className="flex items-center gap-2 text-sm font-semibold text-orange-hover hover:text-orange"
        >
          {destinations.viewAllLabel}
          <ArrowUpRight size={16} />
        </Link>
      </Reveal>
    </section>
  );
}
