"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import {
  COLOR_PAIRS,
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

const TEXT_ROLES = [
  { token: "--text-primary", label: "Primary" },
  { token: "--text-secondary", label: "Secondary" },
  { token: "--text-muted", label: "Muted" },
];

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
      className="focus-ring group relative flex min-h-[var(--space-10)] w-full flex-col justify-end gap-[var(--space-1)] rounded-none border-0 p-[var(--space-3)] text-left [appearance:none] md:min-h-[var(--space-11)] md:min-w-0"
      style={{
        background: `var(${varName}, ${hex})`,
        color: swatchTextColor(hex),
      }}
    >
      <span
        aria-hidden="true"
        className="absolute top-[var(--space-3)] right-[var(--space-3)] transition-transform duration-[var(--motion-hover-duration)] ease-[var(--motion-hover-ease)] group-hover:scale-110"
      >
        {status === "Copied" ? (
          <Check className="icon-sm" />
        ) : (
          <Copy className="icon-sm" />
        )}
      </span>

      <code className="hidden break-all font-mono text-[length:var(--text-xs)] [font-weight:var(--font-medium)] leading-[var(--leading-snug)] sm:block">
        {varName}
      </code>

      <span className="font-mono text-[length:var(--text-xs)] leading-[var(--leading-snug)]">
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
    <div className="space-y-[var(--space-8)]">
      <section aria-label="Brand palette">
        <div className="grid grid-cols-2 gap-[var(--space-4)] lg:grid-cols-3">
          {COLOR_PAIRS.map(({ family, soft, bold }) => (
            <article key={family} className="min-w-0">
              <h3 className="mb-[var(--space-2)] text-[length:var(--text-sm)] [font-weight:var(--font-semibold)] text-[var(--text-primary)]">
                {family}
              </h3>

              <div className="grid grid-cols-2 overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-card)]">
                <ColorTile {...soft} />
                <ColorTile {...bold} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-label="Page background and text colors">
        <h3 className="mb-[var(--space-3)] text-[length:var(--text-sm)] [font-weight:var(--font-semibold)] text-[var(--text-primary)]">
          Background &amp; text
        </h3>

        <div className="grid grid-cols-2 gap-[var(--space-3)]">
          {PAGE_SWATCHES.map((swatch) => (
            <div
              key={swatch.varName}
              className="overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-card)]"
            >
              <ColorTile {...swatch} />
            </div>
          ))}
        </div>

        <div className="mt-[var(--space-6)]">
          <h3 className="mb-[var(--space-3)] text-[length:var(--text-sm)] [font-weight:var(--font-semibold)] text-[var(--text-primary)]">
            Text roles
          </h3>

          <div className="grid gap-[var(--space-3)] md:grid-cols-2">
            <div className="space-y-[var(--space-3)] rounded-[var(--radius-card)] bg-[var(--bg-default)] p-[var(--space-4)] shadow-[var(--shadow-card)]">
              {TEXT_ROLES.map(({ token, label }) => (
                <div
                  className="flex items-baseline justify-between gap-[var(--space-4)]"
                  key={token}
                  style={{ color: `var(${token})` }}
                >
                  <span>{label}</span>
                  <code className="font-mono text-[length:var(--text-xs)]">
                    {token}
                  </code>
                </div>
              ))}
            </div>

            <div className="flex items-baseline justify-between gap-[var(--space-4)] rounded-[var(--radius-card)] bg-[var(--chocolate-bold)] p-[var(--space-4)] text-[var(--text-inverse)] shadow-[var(--shadow-card)]">
              <span>Inverse</span>
              <code className="font-mono text-[length:var(--text-xs)]">
                --text-inverse
              </code>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
