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
