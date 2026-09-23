import { FinalCta } from "../components/FinalCta";
import { FeaturePair } from "../components/study-abroad/FeaturePair";
import { WhyChooseGrid } from "../components/study-abroad/WhyChooseGrid";
import { PageHero } from "../components/ui/PageHero";
import { studyAbroad } from "../lib/content";

export function StudyAbroad() {
  return (
    <>
      <PageHero
        eyebrow={studyAbroad.hero.eyebrow}
        headingLines={studyAbroad.hero.headingLines as [string, string]}
        description={studyAbroad.hero.description}
      />
      <WhyChooseGrid />
      <FeaturePair />
      <FinalCta
        heading={studyAbroad.finalCta.heading}
        subtext={studyAbroad.finalCta.subtext}
        ctaPrimary={studyAbroad.finalCta.ctaPrimary}
      />
    </>
  );
}
