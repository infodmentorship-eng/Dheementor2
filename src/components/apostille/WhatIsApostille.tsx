import { Clock, Globe, ShieldCheck } from "lucide-react";
import type { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { apostilleAttestation } from "../../lib/content";
import { Button } from "../ui/Button";
import { EyebrowPill } from "../ui/EyebrowPill";
import { Reveal } from "../ui/Reveal";

const icons = [Clock, ShieldCheck, Globe];

// 3D tilt: rotate the card toward the cursor and move the glare with it.
function tilt(e: MouseEvent<HTMLDivElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const x = e.clientX - r.left;
  const y = e.clientY - r.top;
  el.style.setProperty("--mx", `${x}px`);
  el.style.setProperty("--my", `${y}px`);
  el.style.setProperty("--ry", `${(x / r.width - 0.5) * 14}deg`);
  el.style.setProperty("--rx", `${-(y / r.height - 0.5) * 14}deg`);
}

function resetTilt(e: MouseEvent<HTMLDivElement>) {
  e.currentTarget.style.setProperty("--rx", "0deg");
  e.currentTarget.style.setProperty("--ry", "0deg");
}

export function WhatIsApostille() {
  const { whatIsApostille } = apostilleAttestation;

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-[clamp(80px,12vh,160px)]">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <EyebrowPill>{whatIsApostille.eyebrow}</EyebrowPill>
          <h2 className="text-gradient mt-6 text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.2] tracking-[-0.02em]">
            {whatIsApostille.heading}
          </h2>

          <div className="mt-6 flex flex-col gap-4">
            {whatIsApostille.paragraphs.map((p) => (
              <p key={p} className="text-text-muted leading-[1.65]">
                {p}
              </p>
            ))}
          </div>

          <Link to="/contact" className="mt-8 inline-block">
            <Button variant="cta">{whatIsApostille.ctaLabel} →</Button>
          </Link>
        </Reveal>

        <Reveal delay={0.1} className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-1">
          {whatIsApostille.stats.map((stat, i) => {
            const Icon = icons[i];
            return (
              <div key={stat.title} className="[perspective:1000px]">
                <div
                  onMouseMove={tilt}
                  onMouseLeave={resetTilt}
                  className="group relative h-full overflow-hidden rounded-card border border-border bg-surface p-6 transition-[transform,border-color,box-shadow] duration-200 ease-out [transform-style:preserve-3d] hover:border-orange/60 hover:shadow-[0_30px_60px_-20px_rgba(255,92,22,0.45)]"
                  style={{
                    transform:
                      "rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg)) translateZ(0)",
                  }}
                >
                  {/* Glare following the cursor */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(280px circle at var(--mx, 50%) var(--my, 50%), rgba(255,140,80,0.2), transparent 65%)",
                    }}
                  />
                  <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-orange-soft text-orange transition-all duration-300 [transform:translateZ(0)] group-hover:bg-orange group-hover:text-white group-hover:shadow-lg group-hover:shadow-orange/40 group-hover:[transform:translateZ(40px)]">
                    <Icon size={20} />
                  </span>
                  <h3 className="relative mt-4 text-lg font-bold text-text transition-transform duration-300 group-hover:[transform:translateZ(30px)]">
                    {stat.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-[1.6] text-text-muted transition-transform duration-300 group-hover:[transform:translateZ(15px)]">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
