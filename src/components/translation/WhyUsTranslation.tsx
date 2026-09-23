import { Clock, Globe, Target } from "lucide-react";
import { documentTranslation } from "../../lib/content";
import { Reveal } from "../ui/Reveal";

const icons = [Target, Globe, Clock];

export function WhyUsTranslation() {
  const { whyUs } = documentTranslation;

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-[clamp(80px,12vh,160px)]">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {whyUs.items.map((item, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="flex h-full flex-col items-center rounded-card border border-border bg-surface p-8 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-orange text-white shadow-[0_0_32px_rgba(255,92,22,0.35)]">
                  <Icon size={24} />
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
