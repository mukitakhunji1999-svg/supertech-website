export type Currency = {
  code: "INR" | "AED" | "SAR" | "QAR" | "OMR" | "KWD" | "BHD" | "USD";
  label: string;
  symbol: string;
};

export const currencies: Currency[] = [
  { code: "INR", label: "India (INR)", symbol: "₹" },
  { code: "AED", label: "UAE (AED)", symbol: "د.إ" },
  { code: "SAR", label: "Saudi (SAR)", symbol: "ر.س" },
  { code: "QAR", label: "Qatar (QAR)", symbol: "ر.ق" },
  { code: "OMR", label: "Oman (OMR)", symbol: "ر.ع." },
  { code: "KWD", label: "Kuwait (KWD)", symbol: "د.ك" },
  { code: "BHD", label: "Bahrain (BHD)", symbol: ".د.ب" },
  { code: "USD", label: "Export (USD)", symbol: "$" }
];

export const currencyStorageKey = "stw.currency";

export function isCurrencyCode(x: unknown): x is Currency["code"] {
  return typeof x === "string" && currencies.some((c) => c.code === x);
}

