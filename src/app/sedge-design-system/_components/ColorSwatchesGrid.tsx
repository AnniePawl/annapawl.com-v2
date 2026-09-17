"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import {
  COLOR_PAIRS,
  NEUTRAL_SWATCHES,
  PAGE_SWATCHES,
  type ColorSwatch,
} from "../_data/color-swatches";

function luminance(hex: string): number {
  const channels = [1, 3, 5].map((start) => {
    const value = parseInt(hex.slice(start, start + 2), 16) / 255;

    return value <= 0.04045
      ? value / 12.92
      : ((value + 0.055) / 1.055) ** 2.4;
  });

  return (
    channels[0] * 0.2126 +
    channels[1] * 0.7152 +
    channels[2] * 0.0722
  );
}

const CHARCOAL_LUMINANCE = luminance("#2A2A2E");

function swatchTextColor(hex: string): string {
  const background = luminance(hex);

  const charcoalContrast =
    (Math.max(background, CHARCOAL_LUMINANCE) + 0.05) /
    (Math.min(background, CHARCOAL_LUMINANCE) + 0.05);

  const whiteContrast = 1.05 / (background + 0.05);

  // Fixed --charcoal/--neutral-0 here on purpose, not the themed
  // --text-primary/--text-inverse aliases: this is answering "what's
  // readable against this swatch's exact hex", which doesn't change
  // just because the design system is in dark mode -- the swatch tiles
  // themselves are rendered straight from each token's own fixed hex
  // (see ColorTile below), so the text on them needs to stay fixed too.
  return whiteContrast > charcoalContrast
    ? "var(--neutral-0)"
    : "var(--charcoal)";
}

function ColorTile({ varName, hex }: ColorSwatch) {
  const [status, setStatus] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current !== null) clearTimeout(timer.current);
    };
  }, []);

  const handleCopy = async () => {
    if (timer.current !== null) clearTimeout(timer.current);

    try {
      await navigator.clipboard.writeText(`var(${varName})`);
      setStatus("Copied");
    } catch {
      setStatus("Couldn't copy");
    }

    timer.current = setTimeout(() => setStatus(""), 1500);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`Copy var(${varName}), ${hex}`}
      className="focus-ring group relative flex min-h-32 w-full min-w-0 flex-col justify-end gap-1 rounded-none border-0 p-3 text-left [appearance:none]"
      style={{
        background: `var(${varName}, ${hex})`,
        color: swatchTextColor(hex),
      }}
    >
      <span
        aria-hidden="true"
        className="absolute top-3 right-3 transition-transform group-hover:scale-110"
      >
        {status === "Copied" ? (
          <Check size={16} />
        ) : (
          <Copy size={16} />
        )}
      </span>

      <code className="break-all font-mono text-xs font-medium leading-snug">
        {varName}
      </code>

      <span className="font-mono text-xs leading-snug">
        {hex}
      </span>

      <span className="sr-only" role="status">
        {status}
      </span>
    </button>
  );
}

export default function ColorSwatchesGrid() {
  return (
    <div className="space-y-8">
      <section aria-label="Brand palette">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COLOR_PAIRS.map(({ family, soft, bold }) => (
            <article key={family} className="min-w-0">
              <h3 className="mb-2 text-sm font-semibold text-[var(--text-primary)]">
                {family}
              </h3>

              <div className="grid grid-cols-2 overflow-hidden rounded-2xl shadow-sm">
                <ColorTile {...soft} />
                <ColorTile {...bold} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-label="Neutral palette">
        <h3 className="mb-3 text-sm font-semibold text-[var(--text-primary)]">
          Neutrals
        </h3>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {NEUTRAL_SWATCHES.map((swatch) => (
            <div
              key={swatch.varName}
              className="overflow-hidden rounded-2xl shadow-sm"
            >
              <ColorTile {...swatch} />
            </div>
          ))}
        </div>
      </section>

      <section aria-label="Page background and text colors">
        <h3 className="mb-3 text-sm font-semibold text-[var(--text-primary)]">
          Page background &amp; text
        </h3>

        <div className="grid grid-cols-2 gap-3">
          {PAGE_SWATCHES.map((swatch) => (
            <div
              key={swatch.varName}
              className="overflow-hidden rounded-2xl shadow-sm"
            >
              <ColorTile {...swatch} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}