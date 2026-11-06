import studyAbroadImage from "../assets/Study _Abroad.png";
import { FinalCta } from "../components/FinalCta";
import { FeaturePair } from "../components/study-abroad/FeaturePair";
import { WhyChooseGrid } from "../components/study-abroad/WhyChooseGrid";
import { PageHero } from "../components/ui/PageHero";
import { Reveal } from "../components/ui/Reveal";
import { studyAbroad } from "../lib/content";

export function StudyAbroad() {
  return (
    <>
      <PageHero
        eyebrow={studyAbroad.hero.eyebrow}
        headingLines={studyAbroad.hero.headingLines as [string, string]}
        description={studyAbroad.hero.description}
      >
        <Reveal delay={0.1} className="mt-10 w-full max-w-3xl">
          <img
            src={studyAbroadImage}
            alt="Study abroad destinations around the world"
            className="block h-auto w-full rounded-2xl shadow-lg"
          />
        </Reveal>
      </PageHero>
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
