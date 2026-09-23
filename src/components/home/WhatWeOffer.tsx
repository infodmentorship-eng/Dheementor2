import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { home } from "../../lib/content";
import { EyebrowPill } from "../ui/EyebrowPill";
import { Reveal } from "../ui/Reveal";
import { SelectionFrame } from "../ui/SelectionFrame";

const EASE = [0.22, 1, 0.36, 1] as const;

export function WhatWeOffer() {
  const { offer } = home;
  const [activeTab, setActiveTab] = useState(0);
  const [activeCard, setActiveCard] = useState(0);

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
          <div className="min-h-[180px] rounded-2xl bg-surface p-10 text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                <h3 className="text-2xl font-bold text-text">{offer.tabs[activeTab].title}</h3>
                <p className="mx-auto mt-4 max-w-[55ch] text-text-muted">
                  {offer.tabs[activeTab].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </SelectionFrame>
      </Reveal>

      <Reveal delay={0.2} className="mt-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {offer.whyUs.map((card, i) => (
            <div
              key={card.title}
              className={`rounded-2xl border p-6 transition-colors duration-500 ${
                activeCard === i
                  ? "border-orange/50 bg-orange-soft"
                  : "border-border bg-surface"
              }`}
            >
              <p className="font-semibold text-text">{card.title}</p>
              <p className="mt-2 text-sm text-text-muted">{card.description}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
