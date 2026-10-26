"use client";

import { useEffect, useRef, useState } from "react";
import { cx } from "../../../lib/cx";
import { Check, Copy } from "lucide-react";
import {
  COLOR_PAIRS,
  PAGE_SWATCHES,
  type ColorSwatch,
} from "../_data/color-swatches";
import "./color-swatches.css";

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

function ColorTile({
  varName,
  hex,
  variant,
}: ColorSwatch & { variant?: "ground" }) {
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
      await navigator.clipboard.writeText(hex);
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
      aria-label={`Copy ${hex} (${varName})`}
      data-copied={status ? "" : undefined}
      className={cx(
        "swatch-tile focus-ring",
        variant === "ground" && "swatch-tile--ground"
      )}
      style={{
        background: `var(${varName}, ${hex})`,
        color: swatchTextColor(hex),
      }}
    >
      <span aria-hidden="true" className="swatch-copy">
        {status === "Copied" ? (
          <Check className="icon-sm" />
        ) : (
          <Copy className="icon-sm" />
        )}
      </span>

      {status ? (
        <span aria-hidden="true" className="swatch-done">
          {status}
        </span>
      ) : null}

      <span className="sr-only" role="status">
        {status}
      </span>
    </button>
  );
}

export default function ColorSwatchesGrid() {
  return (
    <div>
      <h3 className="sedge-subheading">Ground &amp; ink</h3>
      <div className="swatch-grid">
        {PAGE_SWATCHES.map((swatch) => (
          <div key={swatch.varName} className="min-w-0">
            <ColorTile {...swatch} variant="ground" />
            <span className="swatch-name">{swatch.label}</span>
            <span className="swatch-values swatch-values--single">
              <code>
                {swatch.varName} · {swatch.hex}
              </code>
            </span>
          </div>
        ))}
      </div>

      <h3 className="sedge-subheading">Palette · soft / bold</h3>
      <div className="swatch-grid">
        {COLOR_PAIRS.map(({ family, soft, bold }) => (
          <article key={family} className="min-w-0">
            <div className="swatch-pair">
              <ColorTile {...soft} />
              <ColorTile {...bold} />
            </div>
            <h4 className="swatch-name">{family}</h4>
            <div className="swatch-values">
              <span>
                soft
                <br />
                {soft.hex}
              </span>
              <span>
                bold
                <br />
                {bold.hex}
              </span>
            </div>
          </article>
        ))}
      </div>

      <h3 className="sedge-subheading">Text roles</h3>
      <div className="text-role-list">
        <div className="text-role-box">
          {TEXT_ROLES.map(({ token, label }) => (
            <div
              className="text-role-row"
              key={token}
              style={{ color: `var(${token})` }}
            >
              <span>{label}</span>
              <code>{token}</code>
            </div>
          ))}
        </div>

        <div className="text-role-box text-role-box--inverse">
          <div className="text-role-row">
            <span>Inverse</span>
            <code>--text-inverse</code>
          </div>
        </div>
      </div>
    </div>
  );
}
