"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import { Dictionary } from "@/lib/dictionaries";
import { Locale } from "@/lib/i18n";

type NavLink = { href: string; label: string };

type MobileNavProps = {
  locale: Locale;
  dictionary: Dictionary;
  links: NavLink[];
  isActive: (href: string) => boolean;
};

export const MobileNav = ({ locale, dictionary, links, isActive }: MobileNavProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? dictionary.common.menuClose : dictionary.common.menuOpen}
        className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-stroke bg-surface text-foreground transition-colors hover:bg-surface-soft"
      >
        <span className="sr-only">{open ? dictionary.common.menuClose : dictionary.common.menuOpen}</span>
        <span className="flex h-5 w-6 flex-col justify-center gap-1.5">
          <motion.span
            className="block h-0.5 w-full rounded-full bg-current origin-center"
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
          />
          <motion.span
            className="block h-0.5 w-full rounded-full bg-current"
            animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block h-0.5 w-full rounded-full bg-current origin-center"
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
          />
        </span>
      </button>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label={dictionary.common.menuClose}
              className="fixed inset-0 z-[55] bg-background/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
            />
            <motion.nav
              id="mobile-nav-panel"
              className="fixed inset-y-0 right-0 z-[60] flex w-[min(100vw-3rem,20rem)] flex-col border-l border-stroke bg-background/95 px-6 py-8 shadow-2xl backdrop-blur-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 380, damping: 34 }}
            >
              <div className="mb-8 font-[var(--font-display)] text-xs font-bold tracking-[0.25em] text-muted">
                MENU
              </div>
              <ul className="flex flex-1 flex-col gap-1">
                {links.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, duration: 0.35, ease: "easeOut" }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-xl px-3 py-3 text-base font-medium transition-colors ${
                        isActive(item.href)
                          ? "bg-surface-soft text-foreground"
                          : "text-muted hover:bg-surface-soft/60 hover:text-foreground"
                      }`}
                      aria-current={isActive(item.href) ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
                className="mt-6 border-t border-stroke/70 pt-6"
              >
                <ButtonLink href={`/${locale}/contact`} className="w-full">
                  {dictionary.nav.cta}
                </ButtonLink>
              </motion.div>
            </motion.nav>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
};
