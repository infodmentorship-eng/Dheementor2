import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { home } from "../../lib/content";
import { Button } from "../ui/Button";
import { TopDestinationsOrbit } from "./TopDestinationsOrbit";

const EASE = [0.22, 1, 0.36, 1] as const;

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE },
  },
};

export function HomeHero() {
  const { hero } = home;

  return (
    <section className="relative overflow-hidden pt-[180px] pb-24">
      <div className="ember" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-8">
        <motion.div variants={stagger} initial="hidden" animate="show" className="flex flex-col items-start text-left">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full bg-indigo px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_24px_rgba(76,64,245,0.45)]"
          >
            <Globe size={16} className="text-white" />
            {hero.badge}
          </motion.span>

          <motion.h1
            variants={item}
            className="text-gradient mt-6 font-sans text-[clamp(2.75rem,6vw,5rem)] font-bold leading-[1.05] tracking-[-0.035em]"
          >
            {hero.headingLines[0]} {hero.headingLines[1]}
            <span className="dot">.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-[52ch] text-lg leading-[1.6] text-text-muted">
            {hero.descriptionLines[0]} {hero.descriptionLines[1]}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <Link to="/contact">
              <Button variant="cta">{hero.ctaPrimary}</Button>
            </Link>
            <Link to="/services">
              <Button variant="ghost">{hero.ctaSecondary}</Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
        >
          <TopDestinationsOrbit />
        </motion.div>
      </div>
    </section>
  );
}
