import { Briefcase, GraduationCap } from "lucide-react";
import { studyAbroad } from "../../lib/content";
import { Reveal } from "../ui/Reveal";

const icons = [GraduationCap, Briefcase];

export function FeaturePair() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-[clamp(80px,12vh,160px)]">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {studyAbroad.featurePair.map((feature, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={feature.title} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-card border border-border bg-surface p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-soft text-orange">
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 text-xl font-bold text-text">{feature.title}</h3>
                <p className="mt-3 text-sm leading-[1.65] text-text-muted">{feature.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
