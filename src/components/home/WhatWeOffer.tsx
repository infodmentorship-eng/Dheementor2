import { useEffect, useState } from "react";
import { Globe, Route, ShieldCheck, Zap } from "lucide-react";
import studyAbroadImage from "../../assets/Study _Abroad.png";
import visaImage from "../../assets/Visa _Assistance.png";
import apostilleImage from "../../assets/Apostille _ Attestation.png";
import translationImage from "../../assets/Document _Translation.png";
import jobsAbroadImage from "../../assets/Jobs _Abroad.png";
import { home } from "../../lib/content";
import { EyebrowPill } from "../ui/EyebrowPill";
import { Reveal } from "../ui/Reveal";
import { SelectionFrame } from "../ui/SelectionFrame";

// Banner image per tab label; tabs without one fall back to plain text.
const tabImages: Record<string, string> = {
  "Study Abroad": studyAbroadImage,
  Visa: visaImage,
  Apostille: apostilleImage,
  Translation: translationImage,
  "Jobs Abroad": jobsAbroadImage,
};

const whyUsIcons =[Route, ShieldCheck, Zap, Globe];

export function WhatWeOffer() {
  const { offer } = home;
  const [activeTab, setActiveTab] = useState(0);
  const [activeCard, setActiveCard] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const selectedTab = offer.tabs[activeTab];
  const bannerImage = tabImages[selectedTab.label];
  const [loaded, setLoaded] = useState<Record<string, boolean>>({});
  const activeLoaded = Boolean(loaded[selectedTab.label]);
  const markLoaded = (label: string) =>
    setLoaded((prev) => (prev[label] ? prev : { ...prev, [label]: true }));

  // Warm the cache and decode every banner up front so switching tabs never waits on the network.
  useEffect(() => {
    Object.entries(tabImages).forEach(([label, src]) => {
      const img = new Image();
      img.src = src;
      img
        .decode()
        .catch(() => undefined)
        .finally(() => markLoaded(label));
    });
  }, []);

  // Auto-cycle the highlighted card; pause while the user hovers one.
  useEffect(() => {
    if (hoveredCard !== null) return;
    const id = setInterval(() => {
      setActiveCard((c) => (c + 1) % offer.whyUs.length);
    }, 3500);
    return () => clearInterval(id);
  }, [hoveredCard, offer.whyUs.length]);

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
          {bannerImage ? (
            // Fixed aspect-ratio frame: every banner is mounted once and stacked, so tab
            // switches only crossfade opacity — no remount, reload or height jump.
            <div className="relative aspect-[3/1] w-full overflow-hidden rounded-2xl bg-surface">
              {!activeLoaded && (
                <div
                  aria-hidden="true"
                  className="absolute inset-0 animate-pulse bg-gradient-to-br from-surface to-surface-2"
                />
              )}
              {offer.tabs.map((tab) => {
                const src = tabImages[tab.label];
                if (!src) return null;
                const isActive = tab.label === selectedTab.label;
                return (
                  <img
                    key={tab.label}
                    src={src}
                    alt={isActive ? `${tab.label} banner` : ""}
                    aria-hidden={!isActive}
                    loading="eager"
                    decoding="async"
                    draggable={false}
                    onLoad={() => markLoaded(tab.label)}
                    className={`absolute inset-0 h-full w-full object-cover object-[center_40%] transition-opacity duration-500 ease-out ${
                      isActive && loaded[tab.label] ? "opacity-100" : "opacity-0"
                    }`}
                  />
                );
              })}
            </div>
          ) : (
            <div className="min-h-[180px] rounded-2xl bg-surface p-10 text-center">
              {"title" in selectedTab && typeof selectedTab.title === "string" && (
                <h3 className="text-2xl font-bold text-text">{selectedTab.title}</h3>
              )}
              {"description" in selectedTab && typeof selectedTab.description === "string" && (
                <p className="mx-auto mt-4 max-w-[55ch] text-text-muted">
                  {selectedTab.description}
                </p>
              )}
            </div>
          )}
        </SelectionFrame>
      </Reveal>

      <Reveal delay={0.2} className="mt-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {offer.whyUs.map((card, i) => {
            const Icon = whyUsIcons[i];
            return (
              <div
                key={card.title}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative flex items-center justify-between gap-4 overflow-hidden rounded-2xl border p-6 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-[0_18px_40px_-16px_rgba(255,92,22,0.5)] ${
                  (hoveredCard ?? activeCard) === i
                    ? "border-orange/50 bg-orange-soft"
                    : "border-border bg-surface"
                }`}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-orange transition-transform duration-500 ease-out group-hover:scale-x-100"
                />
                <div className="min-w-0">
                  <p className="font-semibold leading-snug text-text transition-colors duration-300 group-hover:text-orange-hover">{card.title}</p>
                  <p className="mt-2 text-sm leading-snug text-text-muted">{card.description}</p>
                </div>
                {Icon && (
                  <Icon
                    size={32}
                    strokeWidth={1.8}
                    aria-hidden="true"
                    className="shrink-0 text-[#F97316] transition-transform duration-500 ease-out group-hover:scale-125 group-hover:rotate-12"
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
