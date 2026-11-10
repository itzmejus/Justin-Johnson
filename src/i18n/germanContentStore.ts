import type { GermanContent } from "./germanContent";

/**
 * Holds the lazily loaded German content. main.tsx registers it before importing the app,
 * so data modules that read it at module-evaluation time on /de pages always find it.
 */
let content: GermanContent | null = null;

export function setGermanContent(value: GermanContent) {
  content = value;
}

export function getGermanContent(): GermanContent {
  if (!content) {
    throw new Error("German content was not loaded before the app modules were evaluated");
  }
  return content;
}
