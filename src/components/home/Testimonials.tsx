import { home } from "../../lib/content";
import { EyebrowPill } from "../ui/EyebrowPill";
import { QuoteCard } from "../ui/QuoteCard";
import { Reveal } from "../ui/Reveal";

export function Testimonials() {
  const { testimonials } = home;

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-[clamp(80px,12vh,160px)]">
      <Reveal className="flex flex-col items-center text-center">
        <EyebrowPill>{testimonials.eyebrow}</EyebrowPill>
        <h2 className="text-gradient mt-6 max-w-[20ch] text-[clamp(2.25rem,4.5vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.03em]">
          {testimonials.heading}
          <span className="dot">.</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.items.map((q, i) => (
          <Reveal key={q.name} delay={i * 0.1}>
            <QuoteCard {...q} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
