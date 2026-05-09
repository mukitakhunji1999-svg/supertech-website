export type Locale = "en" | "ar";

export const locales: Locale[] = ["en", "ar"];
export const defaultLocale: Locale = "en";

export function isLocale(x: unknown): x is Locale {
  return typeof x === "string" && locales.includes(x as Locale);
}

export function localeDir(locale: Locale) {
  return locale === "ar" ? "rtl" : "ltr";
}

