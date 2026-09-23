import { Languages } from "lucide-react";
import { documentTranslation } from "../../lib/content";
import { Reveal } from "../ui/Reveal";

export function TranslationHero() {
  const { hero } = documentTranslation;

  return (
    <section className="relative overflow-hidden pt-[180px] pb-16">
      <div className="ember" />
      <div className="relative mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="text-sm text-text-dim">{hero.breadcrumb.join(" / ")}</p>
        </Reveal>

        <Reveal delay={0.08} className="mt-6 flex items-start gap-5">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-soft text-orange">
            <Languages size={26} />
          </span>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-hover">
              {hero.eyebrow}
            </p>
            <h1 className="mt-3 text-[clamp(2.5rem,5vw,3.75rem)] font-bold leading-[1.05] tracking-[-0.03em]">
              <span className="text-gradient block">{hero.headingLines[0]}</span>
              <span className="block text-orange">{hero.headingLines[1]}</span>
            </h1>
            <p className="mt-5 max-w-[60ch] text-lg leading-[1.6] text-text-muted">
              {hero.description}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
