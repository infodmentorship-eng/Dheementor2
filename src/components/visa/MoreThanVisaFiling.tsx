import { Languages, Landmark, Stamp } from "lucide-react";
import { visaAssistance } from "../../lib/content";
import { Reveal } from "../ui/Reveal";

const icons = [Languages, Landmark, Stamp];

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
              <div className="flex h-full flex-col rounded-card border border-border bg-surface p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-soft text-orange">
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-text">{item.title}</h3>
                <p className="mt-2 text-sm leading-[1.65] text-text-muted">{item.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
