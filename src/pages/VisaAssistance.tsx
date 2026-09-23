import { FinalCta } from "../components/FinalCta";
import { MoreThanVisaFiling } from "../components/visa/MoreThanVisaFiling";
import { VisaHero } from "../components/visa/VisaHero";
import { VisaProcessSteps } from "../components/visa/VisaProcessSteps";
import { visaAssistance } from "../lib/content";

export function VisaAssistance() {
  return (
    <>
      <VisaHero />
      <VisaProcessSteps />
      <MoreThanVisaFiling />
      <FinalCta
        heading={visaAssistance.finalCta.heading}
        subtext={visaAssistance.finalCta.subtext}
        ctaPrimary={visaAssistance.finalCta.ctaPrimary}
      />
    </>
  );
}
