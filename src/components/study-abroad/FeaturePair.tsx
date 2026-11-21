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
              <div className="group flex h-full flex-col rounded-card border border-border bg-surface p-8 transition-all duration-500 hover:border-orange/60 hover:bg-orange-soft hover:shadow-[0_20px_60px_-20px_rgba(255,92,22,0.55)]">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-orange/30 bg-orange-soft text-orange transition-all duration-500 group-hover:-translate-y-1 group-hover:-rotate-6 group-hover:border-orange group-hover:bg-orange group-hover:text-white group-hover:shadow-lg group-hover:shadow-orange/40">
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
