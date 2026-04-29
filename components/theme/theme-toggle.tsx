"use client";

import { useState } from "react";

type Theme = "dark" | "light";

const STORAGE_KEY = "rbdesign-theme";

const Sun = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
    <path d="M12 2.5V5.2M12 18.8V21.5M21.5 12H18.8M5.2 12H2.5M18.7 5.3L16.8 7.2M7.2 16.8L5.3 18.7M18.7 18.7L16.8 16.8M7.2 7.2L5.3 5.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const Moon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
    <path d="M20 14.1A8.2 8.2 0 1 1 9.9 4 6.7 6.7 0 0 0 20 14.1Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

type ThemeToggleProps = {
  label: string;
  lightLabel: string;
  darkLabel: string;
};

export const ThemeToggle = ({ label, lightLabel, darkLabel }: ThemeToggleProps) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document === "undefined") {
      return "dark";
    }

    return (document.documentElement.dataset.theme as Theme | undefined) ?? "dark";
  });

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem(STORAGE_KEY, next);
    setTheme(next);
  };

  const isDark = theme === "dark";
  const nextLabel = isDark ? lightLabel : darkLabel;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`${label}: ${nextLabel}`}
      className="inline-flex items-center gap-2 rounded-xl border border-stroke bg-surface px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-surface-soft"
    >
      {isDark ? <Sun /> : <Moon />}
      <span className="hidden sm:inline">{nextLabel}</span>
    </button>
  );
};
