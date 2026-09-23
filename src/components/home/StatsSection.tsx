import { home } from "../../lib/content";
import { Reveal } from "../ui/Reveal";
import { StatGrid } from "../ui/StatGrid";

export function StatsSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-[clamp(80px,12vh,160px)]">
      <Reveal>
        <StatGrid stats={home.stats} />
      </Reveal>
    </section>
  );
}
