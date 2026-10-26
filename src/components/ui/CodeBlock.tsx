"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Check, Copy } from "lucide-react";
import { cx } from "../../lib/cx";
import type { PaletteColor } from "./colorTokens";

export interface CodeBlockProps {
  code: string;
  /** Code text color. Defaults to the soft version of the post section
   *  it sits in, or iris soft outside a section. */
  tone?: PaletteColor;
  /** Show the copy button (default true). */
  copyable?: boolean;
  className?: string;
}

/** Charcoal code block whose text takes its section's soft color. */
export default function CodeBlock({
  code,
  tone,
  copyable = true,
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const text = code.trim();

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Some browsers and embedded views block the clipboard API.
      const area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      const ok = document.execCommand("copy");
      area.remove();
      if (!ok) return;
    }
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1500);
  }

  const style = tone
    ? ({ "--code-tone": `var(--${tone})` } as CSSProperties)
    : undefined;

  return (
    <div
      className={cx("code-block", copyable && "code-block--copyable", className)}
      style={style}
    >
      {copyable ? (
        <>
          <button
            type="button"
            className="code-block-copy focus-ring"
            onClick={copy}
            aria-label={copied ? "Copied" : "Copy code"}
          >
            {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
            <span>{copied ? "Copied" : "Copy"}</span>
          </button>
          <span className="sr-only" role="status" aria-live="polite">
            {copied ? "Code copied" : ""}
          </span>
        </>
      ) : null}
      {/* data-lenis-prevent: on Sedge, sideways code scrolling stays
          independent of the smooth-scrolled page. */}
      <pre data-lenis-prevent>
        <code>{text}</code>
      </pre>
    </div>
  );
}
