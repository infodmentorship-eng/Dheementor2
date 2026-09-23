import { Clock, Globe, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { apostilleAttestation } from "../../lib/content";
import { Button } from "../ui/Button";
import { EyebrowPill } from "../ui/EyebrowPill";
import { Reveal } from "../ui/Reveal";

const icons = [Clock, ShieldCheck, Globe];

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
              <div key={stat.title} className="rounded-card border border-border bg-surface p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-soft text-orange">
                  <Icon size={20} />
                </span>
                <h3 className="mt-4 text-lg font-bold text-text">{stat.title}</h3>
                <p className="mt-2 text-sm leading-[1.6] text-text-muted">{stat.description}</p>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
