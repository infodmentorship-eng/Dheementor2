import { FinalCta } from "../components/FinalCta";
import { CertifiedForEveryNeed } from "../components/translation/CertifiedForEveryNeed";
import { DocumentsWeHandle } from "../components/translation/DocumentsWeHandle";
import { HowItWorks } from "../components/translation/HowItWorks";
import { TranslationHero } from "../components/translation/TranslationHero";
import { WhyUsTranslation } from "../components/translation/WhyUsTranslation";
import { documentTranslation } from "../lib/content";

export function DocumentTranslation() {
  return (
    <>
      <TranslationHero />
      <CertifiedForEveryNeed />
      <DocumentsWeHandle />
      <HowItWorks />
      <WhyUsTranslation />
      <FinalCta
        heading={documentTranslation.finalCta.heading}
        subtext={documentTranslation.finalCta.subtext}
        ctaPrimary={documentTranslation.finalCta.ctaPrimary}
      />
    </>
  );
}
