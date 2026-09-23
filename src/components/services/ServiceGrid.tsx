import { ArrowUpRight, FileCheck2, GraduationCap, Languages, ShieldCheck, Stamp } from "lucide-react";
import { Link } from "react-router-dom";
import { serviceDetailHref, services } from "../../lib/content";
import { Reveal } from "../ui/Reveal";

const icons = {
  "study-abroad-consultancy": GraduationCap,
  "visa-assistance": Stamp,
  "apostille-attestation": FileCheck2,
  "pcc-assistance": ShieldCheck,
  "document-translation": Languages,
};

export function ServiceGrid() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-[clamp(80px,12vh,160px)]">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.grid.map((service, i) => {
          const Icon = icons[service.slug as keyof typeof icons];
          const href = serviceDetailHref[service.slug];

          const cardBody = (
            <>
              <div className="flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-soft text-orange">
                  <Icon size={22} />
                </span>
                {href && (
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border-strong text-text transition-all duration-200 group-hover:rotate-45 group-hover:border-orange group-hover:bg-orange group-hover:text-white">
                    <ArrowUpRight size={16} />
                  </span>
                )}
              </div>
              <h3 className="mt-5 text-xl font-bold text-text">{service.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-[1.65] text-text-muted">
                {service.description}
              </p>
            </>
          );

          const cardClass =
            "group flex h-full scroll-mt-32 flex-col rounded-card border border-border bg-surface p-8 transition-all duration-200 hover:-translate-y-1 hover:border-orange/40";

          return (
            <Reveal key={service.slug} delay={(i % 3) * 0.08}>
              {href ? (
                <Link to={href} id={service.slug} className={cardClass}>
                  {cardBody}
                </Link>
              ) : (
                <div id={service.slug} className={cardClass}>
                  {cardBody}
                </div>
              )}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
