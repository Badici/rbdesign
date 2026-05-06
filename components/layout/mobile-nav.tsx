"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { ThemeToggle } from "@/components/theme/theme-toggle";
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
  const portalReady = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

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

  const overlay = (
    <AnimatePresence>
      {open ? (
        <>
          <motion.button
            type="button"
            key="mobile-nav-backdrop"
            aria-label={dictionary.common.menuClose}
            className="fixed inset-0 z-[100] border-0 bg-[rgb(6_4_14_/_0.52)] p-0 backdrop-blur-2xl backdrop-saturate-150"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setOpen(false)}
          />
          <motion.nav
            id="mobile-nav-panel"
            key="mobile-nav-panel"
            className="fixed inset-y-3 right-3 z-[110] flex min-h-0 w-[min(22rem,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-2xl border border-white/[0.14] bg-[rgb(12_10_22_/_0.42)] pl-4 pr-3 text-zinc-50 shadow-[0_24px_64px_rgb(0_0_0_/_0.45)] ring-1 ring-inset ring-white/[0.06] backdrop-blur-2xl backdrop-saturate-150 pt-[max(1rem,env(safe-area-inset-top,0px))] pb-[max(1rem,env(safe-area-inset-bottom,0px))]"
            initial={{ opacity: 0, x: 28, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 24, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
            aria-label="Mobile menu"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="font-[var(--font-display)] text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300/90">
                MENU
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={dictionary.common.menuClose}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.12] bg-white/[0.06] text-zinc-200 transition-colors hover:border-white/20 hover:bg-white/[0.12] hover:text-white"
              >
                <X className="h-5 w-5" strokeWidth={2} aria-hidden />
              </button>
            </div>

            <div className="mt-4 space-y-5 rounded-xl border border-white/[0.1] bg-white/[0.06] p-4 shadow-[inset_0_1px_0_rgb(255_255_255_/_0.05)] backdrop-blur-md">
              <div className="text-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-400">
                  {dictionary.common.switchTheme}
                </p>
                <div className="mt-3 flex justify-center">
                  <ThemeToggle
                    label={dictionary.common.switchTheme}
                    lightLabel={dictionary.common.themeLight}
                    darkLabel={dictionary.common.themeDark}
                    surfaceClassName="border-white/15 bg-white/[0.08] text-zinc-100 hover:bg-white/[0.14]"
                  />
                </div>
              </div>
              <div className="border-t border-white/10 pt-5 text-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-400">
                  {dictionary.common.switchLanguage}
                </p>
                <div className="mt-3 flex justify-center">
                  <LanguageSwitcher
                    currentLocale={locale}
                    label={dictionary.common.switchLanguage}
                    highContrast
                  />
                </div>
              </div>
            </div>

            <ul className="mt-5 min-h-0 flex-1 space-y-1 overflow-y-auto overscroll-contain pr-1">
              {links.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 + i * 0.035, duration: 0.28, ease: "easeOut" }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-4 py-3.5 text-center text-[17px] font-semibold leading-snug tracking-tight transition-colors ${
                      isActive(item.href)
                        ? "bg-white/15 text-white"
                        : "text-zinc-200 hover:bg-white/10 hover:text-white"
                    }`}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        </>
      ) : null}
    </AnimatePresence>
  );

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-haspopup="dialog"
        aria-label={open ? dictionary.common.menuClose : dictionary.common.menuOpen}
        className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-stroke bg-surface text-foreground transition-colors hover:bg-surface-soft"
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
      {portalReady ? createPortal(overlay, document.body) : null}
    </div>
  );
};
