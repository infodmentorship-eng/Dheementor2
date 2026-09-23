import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { faq } from "../lib/content";
import { EyebrowPill } from "./ui/EyebrowPill";
import { Reveal } from "./ui/Reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative mx-auto max-w-3xl px-6 py-[clamp(80px,12vh,160px)]">
      <Reveal className="flex flex-col items-center text-center">
        <EyebrowPill>FAQ</EyebrowPill>
        <h2 className="text-gradient mt-6 text-[clamp(2.25rem,4.5vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.03em]">
          Frequently asked questions
          <span className="dot">.</span>
        </h2>
      </Reveal>

      <div className="mt-12 flex flex-col gap-3">
        {faq.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <Reveal key={item.question} delay={i * 0.05}>
              <div
                className={`rounded-2xl border bg-surface transition-colors duration-200 ${
                  isOpen ? "border-orange/40" : "border-border"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-text">{item.question}</span>
                  <Plus
                    size={18}
                    className={`shrink-0 text-orange transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-[1.6] text-text-muted">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
