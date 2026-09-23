import { Building2, FileCog, GraduationCap, Scale, Stethoscope } from "lucide-react";
import { documentTranslation } from "../../lib/content";
import { Reveal } from "../ui/Reveal";

const icons = [Scale, Building2, Stethoscope, FileCog, GraduationCap];

export function CertifiedForEveryNeed() {
  const { certifiedFor } = documentTranslation;

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-[clamp(80px,12vh,160px)]">
      <Reveal className="flex flex-col items-center text-center">
        <h2 className="text-[clamp(2.25rem,4.5vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.03em]">
          <span className="text-gradient block">{certifiedFor.headingLines[0]}</span>
          <span className="block text-orange">{certifiedFor.headingLines[1]}</span>
        </h2>
        <p className="mt-5 max-w-[65ch] text-text-muted">{certifiedFor.description}</p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certifiedFor.categories.map((category, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={category.title} delay={(i % 3) * 0.08}>
              <div className="flex h-full flex-col rounded-card border border-border bg-surface p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-soft text-orange">
                  <Icon size={20} />
                </span>
                <h3 className="mt-4 text-lg font-bold text-text">{category.title}</h3>
                <p className="mt-2 text-sm leading-[1.65] text-text-muted">{category.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
