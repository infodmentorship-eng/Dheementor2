import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { home } from "../../lib/content";
import { Button } from "../ui/Button";

const EASE = [0.22, 1, 0.36, 1] as const;

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
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
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex max-w-6xl flex-col items-center px-6 text-center"
      >
        <motion.span
          variants={item}
          className="inline-flex items-center gap-2 rounded-full bg-indigo px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_24px_rgba(76,64,245,0.45)]"
        >
          <Globe size={16} className="text-white" />
          {hero.badge}
        </motion.span>

        <h1 className="mt-6 font-sans text-[clamp(3rem,7vw,5.5rem)] font-bold leading-[1.02] tracking-[-0.035em]">
          <motion.span variants={item} className="text-gradient block lg:whitespace-nowrap">
            {hero.headingLines[0]}
          </motion.span>
          <motion.span variants={item} className="text-gradient block">
            {hero.headingLines[1]}
            <span className="dot">.</span>
          </motion.span>
        </h1>

        <motion.p variants={item} className="mt-6 max-w-[62ch] text-lg leading-[1.6] text-text-muted">
          {hero.descriptionLines[0]}
          <br />
          {hero.descriptionLines[1]}
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link to="/contact">
            <Button variant="cta">{hero.ctaPrimary}</Button>
          </Link>
          <Link to="/services">
            <Button variant="ghost">{hero.ctaSecondary}</Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
