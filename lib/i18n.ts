export const locales = ["en", "ro"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const isLocale = (value: string): value is Locale =>
  locales.includes(value as Locale);

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  ro: "RO",
};

export const localeNames: Record<Locale, string> = {
  en: "English",
  ro: "Romana",
};
