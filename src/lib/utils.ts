import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(word: string): string {
  if (word?.length < 1) {
    return word;
  }

  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function formatDate(date: Date): string {
  const datePart = date.toLocaleDateString();
  const timePart = date.toLocaleTimeString();

  return `${datePart} ${timePart}`;
}

export function separateWords(input: string): string {
  return input.replace(/([A-Z])/g, " $1").trim();
}

export function isValidCssColor(color: string | undefined) {
  if (!color) {
    return false;
  }
  // Regular expression to match CSS color formats
  const colorRegex =
    /^(#([0-9a-fA-F]{3}){1,2}|(rgb|hsl)a?\((\s*\d+%?\s*,){2}\s*\d+%?\s*\)|[a-z]+)$/;

  // Test the color string against the regex
  return colorRegex.test(color);
}

export function formatPricePerHour(amount: number) {
  // Format the amount in UAH currency
  const formatter = new Intl.NumberFormat("en-UA", {
    style: "currency",
    currency: "UAH",
    minimumFractionDigits: 2,
  });

  // Format the amount using the formatter
  return formatter.format(amount) + "/h";
}
