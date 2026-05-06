"use client";

import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { localeLabels, locales, type Locale } from "@/lib/i18n";

type LanguageSwitcherProps = {
  currentLocale: Locale;
  label: string;
  /** Readable on dark drawer / glass panels */
  highContrast?: boolean;
};

export const LanguageSwitcher = ({ currentLocale, label, highContrast }: LanguageSwitcherProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const pathWithoutLocale = pathname.startsWith(`/${currentLocale}`)
    ? pathname.slice(`/${currentLocale}`.length) || ""
    : "";
  const otherLocale: Locale = currentLocale === "en" ? "ro" : "en";
  const targetHref = `/${otherLocale}${pathWithoutLocale}`;

  const progress = useMotionValue(currentLocale === "en" ? 0 : 1);
  const knobLeft = useTransform(progress, [0, 1], ["5%", "53%"]);
  const [burst, setBurst] = useState(false);

  useEffect(() => {
    progress.set(currentLocale === "en" ? 0 : 1);
  }, [currentLocale, progress]);

  const handleToggle = async () => {
    const next = currentLocale === "en" ? 1 : 0;
    setBurst(true);
    window.setTimeout(() => setBurst(false), 500);
    await animate(progress, next, {
      type: "spring",
      stiffness: 420,
      damping: 30,
      mass: 0.85,
    });
    router.push(targetHref);
  };

  const trackClass = highContrast
    ? "border-white/18 bg-white/[0.1] shadow-[inset_0_1px_0_rgb(255_255_255_/_0.06)]"
    : "border-stroke bg-surface/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]";

  const inactiveLabelClass = highContrast ? "text-zinc-400" : "text-muted/70";
  const activeLabelClass = "text-white/95";

  return (
    <div className="relative" role="group" aria-label={label}>
      <motion.button
        type="button"
        onClick={handleToggle}
        aria-label={`${label}: ${localeLabels[otherLocale]}`}
        className={`relative h-11 w-[5.75rem] overflow-hidden rounded-full border p-1 backdrop-blur-sm ${trackClass}`}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(139,92,246,0.45), transparent 60%)",
              "radial-gradient(circle at 80% 50%, rgba(196,181,253,0.5), transparent 60%)",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        {burst
          ? [0, 1, 2, 3, 4, 5].map((i) => (
              <motion.span
                key={i}
                className="pointer-events-none absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-accent"
                initial={{ x: 0, y: 0, opacity: 0.95, scale: 1 }}
                animate={{
                  x: Math.cos((i / 6) * Math.PI * 2) * 28,
                  y: Math.sin((i / 6) * Math.PI * 2) * 28,
                  opacity: 0,
                  scale: 0.2,
                }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                style={{ marginLeft: -3, marginTop: -3 }}
              />
            ))
          : null}
        <div className="relative z-[1] flex h-9 items-center justify-between px-2 text-[10px] font-bold uppercase tracking-[0.12em]">
          {locales.map((loc) => (
            <span
              key={loc}
              className={loc === currentLocale ? activeLabelClass : inactiveLabelClass}
            >
              {localeLabels[loc]}
            </span>
          ))}
        </div>
        <motion.span
          className="absolute top-1 z-[2] flex h-9 w-[calc(50%-6px)] items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-strong text-[11px] font-bold text-white shadow-[0_8px_24px_rgba(139,92,246,0.45)]"
          style={{ left: knobLeft }}
        >
          <motion.span
            key={currentLocale}
            initial={{ scale: 0.6, rotate: -12, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 26 }}
          >
            {localeLabels[currentLocale]}
          </motion.span>
        </motion.span>
      </motion.button>
    </div>
  );
};
