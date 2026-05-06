"use client";

import { motion } from "framer-motion";
import { useCallback, useSyncExternalStore } from "react";

type Theme = "dark" | "light";

const STORAGE_KEY = "rbdesign-theme";

type ThemeToggleProps = {
  label: string;
  lightLabel: string;
  darkLabel: string;
};

const getDomTheme = (): Theme =>
  (typeof document !== "undefined"
    ? (document.documentElement.dataset.theme as Theme | undefined)
    : undefined) ?? "dark";

const subscribeTheme = (onStoreChange: () => void) => {
  if (typeof document === "undefined") {
    return () => {};
  }
  const el = document.documentElement;
  const obs = new MutationObserver(() => onStoreChange());
  obs.observe(el, { attributes: true, attributeFilter: ["data-theme"] });
  return () => obs.disconnect();
};

const SunGlyph = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
    <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
    <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M12 2.2v2.8M12 18.9v2.9M21.8 12h-2.9M5.1 12H2.2M18.4 5.6l-2 2M7.6 16.4l-2 2M18.4 18.4l-2-2M7.6 7.6l-2-2" />
    </g>
  </svg>
);

const MoonGlyph = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
    <path
      d="M20.5 15.2A8.2 8.2 0 1 1 8.8 3.5 6.6 6.6 0 0 0 20.5 15.2Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ThemeToggle = ({ label, lightLabel, darkLabel }: ThemeToggleProps) => {
  const theme = useSyncExternalStore(subscribeTheme, getDomTheme, () => "dark" as Theme);

  const toggleTheme = useCallback(() => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem(STORAGE_KEY, next);
  }, [theme]);

  const isDark = theme === "dark";
  const nextLabel = isDark ? lightLabel : darkLabel;
  const mounted = typeof document !== "undefined";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`${label}: ${nextLabel}`}
      aria-pressed={!isDark}
      className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-stroke bg-surface transition-colors hover:bg-surface-soft"
    >
      <span className="sr-only">{nextLabel}</span>
      {mounted ? (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-xl opacity-40"
          aria-hidden
          animate={{ rotate: isDark ? 0 : 180 }}
          transition={{ type: "spring", stiffness: 90, damping: 12 }}
        >
          <motion.div
            className="absolute inset-[-40%] rounded-full bg-[conic-gradient(from_0deg,transparent,rgba(139,92,246,0.35),transparent,rgba(251,191,36,0.25),transparent)]"
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      ) : null}
      <motion.div
        className="relative z-[1] flex h-full w-full items-center justify-center"
        initial={false}
        animate={{
          rotate: isDark ? 0 : 180,
        }}
        transition={{ type: "spring", stiffness: 220, damping: 18 }}
      >
        <motion.div
          className="absolute flex items-center justify-center text-amber-400"
          animate={{
            y: isDark ? 0 : -40,
            opacity: isDark ? 1 : 0,
            scale: isDark ? 1 : 0.45,
            rotate: isDark ? 0 : -45,
          }}
          transition={{ type: "spring", stiffness: 280, damping: 22 }}
        >
          <motion.div
            animate={{ rotate: isDark ? 360 : 0 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <SunGlyph className="h-6 w-6" />
          </motion.div>
        </motion.div>
        <motion.div
          className="absolute flex items-center justify-center text-indigo-200"
          animate={{
            y: isDark ? 40 : 0,
            opacity: isDark ? 0 : 1,
            scale: isDark ? 0.45 : 1,
            rotate: isDark ? 45 : 0,
          }}
          transition={{ type: "spring", stiffness: 280, damping: 22 }}
        >
          <motion.div
            animate={{ rotate: isDark ? -18 : 0 }}
            transition={{ type: "spring", stiffness: 160, damping: 16 }}
          >
            <MoonGlyph className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2] rounded-xl ring-0"
        initial={false}
        animate={{
          boxShadow: isDark
            ? "inset 0 0 0 0 rgba(251,191,36,0)"
            : "inset 0 0 20px 2px rgba(251,191,36,0.15)",
        }}
        transition={{ duration: 0.5 }}
      />
    </button>
  );
};
