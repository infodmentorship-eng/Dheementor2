import { documentTranslation } from "../../lib/content";
import { Reveal } from "../ui/Reveal";

export function HowItWorks() {
  const { howItWorks } = documentTranslation;

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-[clamp(80px,12vh,160px)]">
      <Reveal className="flex flex-col items-center text-center">
        <h2 className="text-[clamp(2.25rem,4.5vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.03em]">
          <span className="text-gradient block">{howItWorks.headingLines[0]}</span>
          <span className="block text-orange">{howItWorks.headingLines[1]}</span>
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {howItWorks.steps.map((step, i) => (
          <Reveal key={step.title} delay={(i % 5) * 0.06}>
            <div className="flex h-full flex-col rounded-card border border-border bg-surface p-6">
              <span className="text-4xl font-extrabold text-orange/25">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-base font-bold text-text">{step.title}</h3>
              <p className="mt-2 text-sm leading-[1.6] text-text-muted">{step.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
