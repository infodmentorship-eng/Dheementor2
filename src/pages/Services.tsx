import { FinalCta } from "../components/FinalCta";
import { ServiceGrid } from "../components/services/ServiceGrid";
import { PageHero } from "../components/ui/PageHero";
import { services } from "../lib/content";

export function Services() {
  return (
    <>
      <PageHero
        eyebrow={services.hero.eyebrow}
        headingLines={services.hero.headingLines as [string, string]}
        description={services.hero.description}
      />
      <ServiceGrid />
      <FinalCta
        heading={services.finalCta.heading}
        subtext={services.finalCta.subtext}
        ctaPrimary={services.finalCta.ctaPrimary}
      />
    </>
  );
}
