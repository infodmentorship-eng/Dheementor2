import { Clock, FileText, MessagesSquare, Send, Users } from "lucide-react";
import { visaAssistance } from "../../lib/content";
import { EyebrowPill } from "../ui/EyebrowPill";
import { Reveal } from "../ui/Reveal";

const icons = [Users, FileText, Send, MessagesSquare, Clock];

export function VisaProcessSteps() {
  const { process } = visaAssistance;

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-[clamp(80px,12vh,160px)]">
      <Reveal className="flex flex-col items-center text-center">
        <EyebrowPill>{process.eyebrow}</EyebrowPill>
        <h2 className="mt-6 text-[clamp(2.25rem,4.5vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.03em]">
          <span className="text-gradient block">{process.headingLines[0]}</span>
          <span className="block text-orange">{process.headingLines[1]}</span>
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-5 sm:gap-4">
        <div className="absolute inset-x-0 top-8 hidden border-t border-border sm:block" />
        {process.steps.map((step, i) => {
          const Icon = icons[i];
          return (
            <div key={step.title} className="relative flex flex-col items-center text-center">
              <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-border bg-surface text-orange">
                <Icon size={22} />
              </span>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-orange-hover">
                Step {i + 1}
              </p>
              <h3 className="mt-1 font-semibold text-text">{step.title}</h3>
              <p className="mt-2 text-sm leading-[1.6] text-text-muted">{step.description}</p>
            </div>
          );
        })}
      </Reveal>
    </section>
  );
}
