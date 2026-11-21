import { Clock, FileText, MessagesSquare, Send, Users } from "lucide-react";
import { motion } from "framer-motion";
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

      <Reveal delay={0.1} className="relative mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {/* Timeline: faint base line + orange progress line, running through the icon centres (lg+ only). */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-[10%] top-[56px] hidden h-px bg-white/10 lg:block"
        >
          <motion.div
            className="h-full origin-left bg-gradient-to-r from-orange/0 via-orange to-orange/60"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        {process.steps.map((step, i) => {
          const Icon = icons[i];
          return (
            <div
              key={step.title}
              className="group relative z-10 flex h-full flex-col items-center rounded-[20px] border border-white/10 bg-white/[0.04] bg-[radial-gradient(circle_at_50%_0%,rgba(255,92,22,0.10),transparent_60%)] p-6 text-center shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-[15px] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-orange/60 hover:bg-white/[0.07] hover:shadow-[0_16px_48px_-12px_rgba(255,92,22,0.45)]"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-orange backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-orange/50 group-hover:shadow-[0_0_24px_rgba(255,92,22,0.45)]">
                <Icon size={22} strokeWidth={1.8} />
              </span>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-orange-hover">
                Step {i + 1}
              </p>
              <h3 className="mt-1 font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-[1.6] text-text-muted">{step.description}</p>
            </div>
          );
        })}
      </Reveal>
    </section>
  );
}
