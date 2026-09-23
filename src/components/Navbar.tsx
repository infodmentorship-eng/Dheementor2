import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { nav } from "../lib/content";
import { Button } from "./ui/Button";
import { Logo } from "./ui/Logo";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50 flex justify-center px-4">
      <motion.nav
        animate={{
          height: scrolled ? 76 : 96,
          backgroundColor: scrolled ? "rgba(22,22,26,0.95)" : "rgba(22,22,26,0.85)",
        }}
        transition={{ duration: 0.25, ease: EASE }}
        style={{ marginTop: 20 }}
        className="flex w-full max-w-[1600px] items-center justify-between rounded-nav border border-border px-8 backdrop-blur-xl"
        onMouseLeave={() => setOpenDropdown(null)}
      >
        <Logo className="h-16" />

        <div className="hidden items-center gap-1 lg:flex">
          {nav.items.map((navItem) => {
            // Anchor links (containing "#") point to in-page sections, not routes, so they
            // never count as "active" — only an exact route match does (e.g. Home on "/").
            const isActive = navItem.type === "link" && !navItem.href.includes("#") && navItem.href === location.pathname;

            return navItem.type === "link" ? (
              <Link
                key={navItem.label}
                to={navItem.href}
                className={`relative rounded-full px-4 py-2 text-base font-medium transition-colors ${
                  isActive ? "text-text" : "text-text-muted hover:text-text"
                }`}
              >
                {navItem.label}
                {isActive && (
                  <span className="absolute inset-x-4 -bottom-px h-0.5 rounded-full bg-orange" />
                )}
              </Link>
            ) : (
              <div
                key={navItem.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(navItem.label)}
              >
                <button className="flex items-center gap-1 rounded-full px-4 py-2 text-base font-medium text-text-muted transition-colors hover:text-text">
                  {navItem.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      openDropdown === navItem.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openDropdown === navItem.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: EASE }}
                      className="absolute left-0 top-full mt-3 w-64 rounded-2xl border border-border bg-surface-2/95 p-2 shadow-2xl backdrop-blur-xl"
                    >
                      <div className="flex flex-col">
                        {navItem.items.map((item) => (
                          <Link
                            key={item.title}
                            to={item.href}
                            onClick={() => setOpenDropdown(null)}
                            className="rounded-xl px-3 py-2.5 text-base text-text transition-colors hover:bg-white/6"
                          >
                            {item.title}
                          </Link>
                        ))}
                        <Link
                          to={navItem.viewAllHref}
                          onClick={() => setOpenDropdown(null)}
                          className="mt-1 rounded-xl border-t border-border px-3 pt-3 pb-2 text-base font-semibold text-orange-hover transition-colors hover:bg-white/6"
                        >
                          {navItem.viewAllLabel}
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <Link to="/contact">
            <Button variant="cta" className="px-7! py-3.5! text-base">
              {nav.cta}
            </Button>
          </Link>
        </div>

        <button
          className="text-text lg:hidden"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={24} />
        </button>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex flex-col bg-bg p-6 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <Logo className="h-14" />
              <button aria-label="Close menu" onClick={() => setMobileOpen(false)}>
                <X size={24} className="text-text" />
              </button>
            </div>

            <div className="mt-10 flex flex-1 flex-col gap-6 overflow-y-auto">
              {nav.items.map((navItem) =>
                navItem.type === "link" ? (
                  <Link
                    key={navItem.label}
                    to={navItem.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg text-text"
                  >
                    {navItem.label}
                  </Link>
                ) : (
                  <div key={navItem.label}>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-text-dim">
                      {navItem.label}
                    </p>
                    <div className="flex flex-col gap-3">
                      {navItem.items.map((item) => (
                        <Link
                          key={item.title}
                          to={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-lg text-text"
                        >
                          {item.title}
                        </Link>
                      ))}
                      <Link
                        to={navItem.viewAllHref}
                        onClick={() => setMobileOpen(false)}
                        className="text-lg font-semibold text-orange-hover"
                      >
                        {navItem.viewAllLabel}
                      </Link>
                    </div>
                  </div>
                )
              )}
            </div>

            <div className="border-t border-border pt-6">
              <Link to="/contact" onClick={() => setMobileOpen(false)}>
                <Button variant="cta" className="w-full">
                  {nav.cta}
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
