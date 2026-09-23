import { ApostilleHero } from "../components/apostille/ApostilleHero";
import { WhatIsApostille } from "../components/apostille/WhatIsApostille";
import { FinalCta } from "../components/FinalCta";
import { apostilleAttestation } from "../lib/content";

export function ApostilleAttestation() {
  return (
    <>
      <ApostilleHero />
      <WhatIsApostille />
      <FinalCta
        heading={apostilleAttestation.finalCta.heading}
        subtext={apostilleAttestation.finalCta.subtext}
        ctaPrimary={apostilleAttestation.finalCta.ctaPrimary}
      />
    </>
  );
}
