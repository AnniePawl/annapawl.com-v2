"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cx } from "../../../lib/cx";

/**
 * Docs-only usage snippet display, not part of the reusable design system —
 * styled mostly with Tailwind utilities (one-off layout/page furniture, no
 * reuse benefit to custom classes) plus a couple of neutral tokens so the
 * code surface still sits on-palette rather than an arbitrary gray.
 */
export default function CodeBlock({
  code,
  className,
}: {
  code: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard access denied — fail silently, button just won't confirm
    }
  };

  return (
    <div
      className={cx("relative rounded-lg overflow-hidden bg-zinc-800", className)}
     
    >
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy code"
        className="focus-ring absolute top-3 right-3 inline-flex h-7 w-7 items-center justify-center rounded-md text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
      </button>
      <pre className="overflow-x-auto p-4 pr-12 text-xs leading-relaxed">
        <code className="font-mono text-zinc-100"
        style={{ color: "var(--blue-soft)" }}>{code.trim()}</code>
      </pre>
    </div>
  );
}
