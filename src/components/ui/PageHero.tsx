import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { EyebrowPill } from "./EyebrowPill";
import { Reveal } from "./Reveal";

export function PageHero({
  breadcrumb,
  eyebrow,
  headingLines,
  description,
  children,
}: {
  breadcrumb?: string[];
  eyebrow: string;
  headingLines: [string, string];
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-[180px] pb-20">
      <div className="ember" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        {breadcrumb && (
          <Reveal className="mb-6 flex items-center justify-center gap-1.5 text-sm text-text-dim">
            <Link to="/" className="hover:text-text">
              Home
            </Link>
            {breadcrumb.map((crumb) => (
              <span key={crumb} className="flex items-center gap-1.5">
                <ChevronRight size={14} />
                <span className="text-text-muted">{crumb}</span>
              </span>
            ))}
          </Reveal>
        )}

        <Reveal delay={0.05} className="flex flex-col items-center">
          <EyebrowPill>{eyebrow}</EyebrowPill>

          <h1 className="text-gradient mt-6 text-[clamp(2.5rem,6vw,4.25rem)] font-bold leading-[1.05] tracking-[-0.035em]">
            {headingLines[0]}
            <br />
            {headingLines[1]}
            <span className="dot">.</span>
          </h1>

          <p className="mt-6 max-w-[60ch] text-lg leading-[1.6] text-text-muted">{description}</p>

          {children}
        </Reveal>
      </div>
    </section>
  );
}
