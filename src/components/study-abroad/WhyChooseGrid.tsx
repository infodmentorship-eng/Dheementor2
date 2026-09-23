import {
  Clock,
  GraduationCap,
  Globe,
  Lightbulb,
  Target,
  Wallet,
  Zap,
} from "lucide-react";
import type { ComponentType } from "react";
import { studyAbroad } from "../../lib/content";
import { EyebrowPill } from "../ui/EyebrowPill";
import { Reveal } from "../ui/Reveal";

const icons = [Clock, Wallet, Zap, Lightbulb, Target, Globe];

function Tile({
  title,
  description,
  Icon,
}: {
  title: string;
  description: string;
  Icon: ComponentType<{ size?: number }>;
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-white/5 bg-surface p-8 transition-colors duration-200 hover:border-orange/40">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-orange">
        <Icon size={20} />
      </span>
      <h3 className="mt-5 text-lg font-semibold text-text">{title}</h3>
      <p className="mt-2 text-sm leading-[1.6] text-text-muted">{description}</p>
    </div>
  );
}

export function WhyChooseGrid() {
  const { whyChoose } = studyAbroad;
  const [t0, t1, t2, t3, t4, t5] = whyChoose.tiles;
  const [i0, i1, i2, i3, i4, i5] = icons;

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-[clamp(80px,12vh,160px)]">
      <Reveal className="flex flex-col items-center text-center">
        <EyebrowPill>Why Us</EyebrowPill>
        <h2 className="mt-6 text-[clamp(2.25rem,4.5vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.03em]">
          <span className="text-gradient block">{whyChoose.headingLines[0]}</span>
          <span className="block text-orange">
            {whyChoose.headingLines[1]}
            <span className="dot">.</span>
          </span>
        </h2>
        <p className="mt-4 max-w-[55ch] text-text-muted">{whyChoose.intro}</p>
      </Reveal>

      <Reveal delay={0.1} className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
        <Tile {...t0} Icon={i0} />
        <Tile {...t1} Icon={i1} />
        <Tile {...t2} Icon={i2} />

        <Tile {...t3} Icon={i3} />
        <div className="relative flex items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-surface p-8">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(255,92,22,0.6) 0%, rgba(255,92,22,0.25) 55%, transparent 100%)",
            }}
          />
          <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-bg shadow-[0_0_60px_rgba(255,92,22,0.55)]">
            <GraduationCap size={30} />
          </span>
        </div>
        <Tile {...t4} Icon={i4} />

        <div className="md:col-start-2">
          <Tile {...t5} Icon={i5} />
        </div>
      </Reveal>
    </section>
  );
}
