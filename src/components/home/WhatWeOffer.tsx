import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Globe, Route, ShieldCheck, Zap } from "lucide-react";
import apostilleImage from "../../assets/apostille_banner.png";
import jobsAbroadImage from "../../assets/job_abroad.png";
import studyAbroadImage from "../../assets/Study _Abroad.png";
import translationImage from "../../assets/Translation.png";
import visaImage from "../../assets/visa.png";
import { home } from "../../lib/content";
import { EyebrowPill } from "../ui/EyebrowPill";
import { Reveal } from "../ui/Reveal";
import { SelectionFrame } from "../ui/SelectionFrame";

const EASE = [0.22, 1, 0.36, 1] as const;

const whyUsIcons = [Route, ShieldCheck, Zap, Globe];

export function WhatWeOffer() {
  const { offer } = home;
  const [activeTab, setActiveTab] = useState(0);
  const [activeCard, setActiveCard] = useState(0);
  const selectedTab = offer.tabs[activeTab];
  const isStudyAbroad = selectedTab.label === "Study Abroad";
  const isVisa = selectedTab.label === "Visa";
  const isApostille = selectedTab.label === "Apostille";
  const isTranslation = selectedTab.label === "Translation";
  const isJobsAbroad = selectedTab.label === "Jobs Abroad";
  const hasBannerImage =
    isStudyAbroad || isVisa || isApostille || isTranslation || isJobsAbroad;

  useEffect(() => {
    const id = setInterval(() => {
      setActiveCard((c) => (c + 1) % offer.whyUs.length);
    }, 3500);
    return () => clearInterval(id);
  }, [offer.whyUs.length]);

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-[clamp(80px,12vh,160px)]">
      <Reveal className="flex flex-col items-center text-center">
        <EyebrowPill>{offer.eyebrow}</EyebrowPill>
        <h2 className="text-gradient mt-6 max-w-[24ch] text-[clamp(2.25rem,4.5vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.03em]">
          {offer.heading}
          <span className="dot">.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="mt-12 flex flex-wrap items-center justify-center gap-2">
        {offer.tabs.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(i)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200 ${
              activeTab === i
                ? "bg-orange text-white"
                : "border border-border-strong text-text-muted hover:text-text"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </Reveal>

      <Reveal delay={0.15} className="mt-8">
        <SelectionFrame className="mx-auto max-w-3xl">
          <div className={`min-h-[180px] rounded-2xl ${hasBannerImage ? "" : "bg-surface p-10 text-center"}`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                {isStudyAbroad ? (
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={studyAbroadImage}
                      alt="Study abroad destinations around the world"
                      className="block h-auto w-full rounded-2xl"
                    />
                    <div className="absolute inset-y-0 left-[5%] flex w-[40%] flex-col justify-center text-left">
                      <h3 className="text-[clamp(0.8rem,2vw,1.75rem)] font-semibold leading-tight text-slate-950/75">
                        Study Abroad Consultancy
                      </h3>
                      <p className="mt-2 max-w-[30ch] text-[clamp(0.58rem,1vw,0.9rem)] leading-snug text-slate-950/75">
                        End-to-end guidance to choose the right country, course, and university for your goals.
                      </p>
                    </div>
                  </div>
                ) : isVisa ? (
                  <img
                    src={visaImage}
                    alt="Visa assistance banner with passport documents and a visa consultation"
                    className="block h-auto w-full rounded-2xl"
                  />
                ) : isApostille ? (
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={apostilleImage}
                      alt="Apostille certificate, gold seal, and certification stamp"
                      className="block h-auto w-full rounded-2xl"
                    />
                    <div className="absolute inset-y-0 left-[5%] flex w-[40%] flex-col justify-center text-left">
                      <h3 className="text-[clamp(0.85rem,1.8vw,1.5rem)] font-bold leading-tight text-white/85">
                        Apostille &amp; Attestation
                      </h3>
                      <p className="mt-2 max-w-[30ch] text-[clamp(0.62rem,0.95vw,0.9rem)] leading-snug text-white/80">
                        Fast, reliable attestation for personal, educational, legal, and commercial documents.
                      </p>
                    </div>
                  </div>
                ) : isTranslation ? (
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={translationImage}
                      alt="Certified translation documents and language services"
                      className="block h-auto w-full rounded-2xl"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-y-0 left-0 w-[58%] bg-gradient-to-r from-slate-950/50 via-slate-950/35 to-transparent"
                    />
                    <div className="absolute inset-y-0 left-[5%] flex w-[36%] flex-col justify-center text-left">
                      <h3 className="text-[clamp(0.85rem,1.8vw,1.5rem)] font-bold leading-tight text-white">
                        Document Translation
                      </h3>
                      <p className="mt-2 max-w-[32ch] text-[clamp(0.62rem,0.95vw,0.9rem)] leading-relaxed text-white">
                        Certified, globally accepted translations for legal, medical, academic, and business documents.
                      </p>
                    </div>
                  </div>
                ) : isJobsAbroad ? (
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={jobsAbroadImage}
                      alt="Jobs abroad opportunities"
                      className="block h-auto w-full rounded-2xl"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-y-0 left-0 w-[58%] bg-gradient-to-r from-slate-950/50 via-slate-950/40 to-transparent"
                    />
                    <div className="absolute inset-y-0 left-[5%] flex w-[38%] flex-col justify-center text-left">
                      <h3 className="text-[clamp(0.85rem,1.8vw,1.5rem)] font-bold leading-tight text-white">
                        Jobs Abroad
                      </h3>
                      <p className="mt-2 max-w-[38ch] text-[clamp(0.62rem,0.95vw,0.9rem)] leading-relaxed text-white">
                        Country-wise job openings we're actively helping candidates apply for, with guidance through the full application process.
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    {"title" in selectedTab && typeof selectedTab.title === "string" && (
                      <h3 className="text-2xl font-bold text-text">{selectedTab.title}</h3>
                    )}
                    {"description" in selectedTab && typeof selectedTab.description === "string" && (
                      <p className="mx-auto mt-4 max-w-[55ch] text-text-muted">
                        {selectedTab.description}
                      </p>
                    )}
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </SelectionFrame>
      </Reveal>

      <Reveal delay={0.2} className="mt-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {offer.whyUs.map((card, i) => {
            const Icon = whyUsIcons[i];
            return (
              <div
                key={card.title}
                className={`flex items-center justify-between gap-4 rounded-2xl border p-6 transition-colors duration-500 ${
                  activeCard === i
                    ? "border-orange/50 bg-orange-soft"
                    : "border-border bg-surface"
                }`}
              >
                <div className="min-w-0">
                  <p className="font-semibold leading-snug text-text">{card.title}</p>
                  <p className="mt-2 text-sm leading-snug text-text-muted">{card.description}</p>
                </div>
                {Icon && (
                  <Icon
                    size={32}
                    strokeWidth={1.8}
                    aria-hidden="true"
                    className="shrink-0 text-[#F97316] transition-colors duration-200"
                  />
                )}
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
