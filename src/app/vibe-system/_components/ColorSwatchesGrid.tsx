"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { COLOR_PAIRS, type ColorSwatch } from "../_data/color-swatches";

function ColorTile({ varName, hex }: ColorSwatch) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`var(${varName})`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard access denied — fail silently, tile just won't confirm
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`Copy var(${varName})`}
      className="focus-ring group relative flex h-28 w-full flex-col justify-end rounded-none border-0 p-3 text-left [appearance:none]"
      style={{ background: `var(${varName})`, color: "var(--text-primary)" }}
    >
      <span className="absolute top-2.5 right-2.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/50 opacity-70 backdrop-blur-sm transition-opacity group-hover:opacity-100">
        {copied ? <Check size={12} /> : <Copy size={12} />}
      </span>
      <code className="font-mono text-[11px] font-medium leading-tight">
        {varName}
      </code>
      <span className="font-mono text-[10px] leading-tight opacity-70">
        {hex}
      </span>
    </button>
  );
}

export default function ColorSwatchesGrid() {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {COLOR_PAIRS.map(({ family, soft, bold }) => (
        <article
          key={family}
          className="grid grid-cols-2 overflow-hidden rounded-2xl shadow-sm"
        >
          <ColorTile varName={soft.varName} hex={soft.hex} />
          <ColorTile varName={bold.varName} hex={bold.hex} />
        </article>
      ))}
    </section>
  );
}
