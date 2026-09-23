import { Faq } from "../components/Faq";
import { FinalCta } from "../components/FinalCta";
import { Destinations } from "../components/home/Destinations";
import { HeroPlane } from "../components/home/HeroPlane";
import { HomeHero } from "../components/home/HomeHero";
import { StatsSection } from "../components/home/StatsSection";
import { Testimonials } from "../components/home/Testimonials";
import { WhatWeOffer } from "../components/home/WhatWeOffer";
import { home } from "../lib/content";

export function Home() {
  return (
    <>
      <HomeHero />
      <WhatWeOffer />
      <StatsSection />
      <HeroPlane />
      <Destinations />
      <Testimonials />
      <Faq />
      <FinalCta
        heading={home.finalCta.heading}
        subtext={home.finalCta.subtext}
        ctaPrimary={home.finalCta.ctaPrimary}
        showWhatsApp
      />
    </>
  );
}
