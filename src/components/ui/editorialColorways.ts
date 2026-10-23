import type { CSSProperties } from "react";

export type EditorialColorway =
  | "pink-emerald"
  | "sky-cherry"
  | "sky-coral"
  | "moss-cherry";

/** Shared two-tone palette for modals and inline callouts. */
export const EDITORIAL_COLORWAYS: Record<EditorialColorway, CSSProperties> = {
  "pink-emerald": {
    "--editorial-surface": "var(--pink-soft)",
    "--editorial-accent": "var(--emerald-bold)",
    "--editorial-heading": "var(--emerald-bold)",
    "--editorial-accent-text": "var(--cream)",
    "--editorial-accent-hover":
      "color-mix(in srgb, var(--emerald-bold) 88%, var(--charcoal))",
  } as CSSProperties,
  "sky-cherry": {
    "--editorial-surface": "var(--periwinkle-soft)",
    "--editorial-accent": "var(--cherry-bold)",
    "--editorial-heading": "var(--cherry-bold)",
    "--editorial-accent-text": "var(--cream)",
    "--editorial-accent-hover":
      "color-mix(in srgb, var(--cherry-bold) 86%, var(--cream))",
  } as CSSProperties,
  "sky-coral": {
    "--editorial-surface": "var(--periwinkle-soft)",
    "--editorial-accent": "var(--coral-bold)",
    "--editorial-heading": "var(--coral-bold)",
    "--editorial-accent-text": "var(--charcoal)",
    "--editorial-accent-hover":
      "color-mix(in srgb, var(--coral-bold) 86%, var(--cream))",
  } as CSSProperties,
  "moss-cherry": {
    "--editorial-surface": "var(--moss-soft)",
    "--editorial-accent": "var(--cherry-bold)",
    "--editorial-heading": "var(--cherry-bold)",
    "--editorial-accent-text": "var(--cream)",
    "--editorial-accent-hover":
      "color-mix(in srgb, var(--cherry-bold) 86%, var(--cream))",
  } as CSSProperties,
};
