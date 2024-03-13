import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// smart capitalize phrase
export function capitalize(phrase: string) {
  if (!phrase.match(/^[0-9a-z]+$/)){
    return phrase
  }
  return phrase
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
