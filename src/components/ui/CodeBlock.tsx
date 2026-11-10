"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { Check, Copy } from "lucide-react";
import { cx } from "../../lib/cx";
import type { PaletteHue } from "./colorTokens";

export interface CodeBlockProps {
  code: string;
  /** Code text color, as a hue ("pink", "green"). Always uses its soft
   *  version. Defaults to the soft version of the post section it sits
   *  in, or iris soft outside a section. */
  tone?: PaletteHue;
  /** Show the copy button (default true). */
  copyable?: boolean;
  /** Exact pieces of the code to highlight, like `aria-expanded="true"`.
   *  Every match is marked, so a reader's eye goes straight to them. */
  highlight?: string[];
  className?: string;
}

// Block comments (/* */, {/* */}), HTML comments, and // line comments.
// The lookbehind skips the // inside URLs like https://.
const COMMENT = /\/\*[\s\S]*?\*\/|<!--[\s\S]*?-->|(?<![:"'\w/])\/\/[^\n]*/g;

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Wraps each highlighted piece of a plain (non-comment) run in <mark>. */
function markHighlights(text: string, highlight: string[], keyPrefix: number): ReactNode[] {
  const pieces = highlight.filter(Boolean);
  if (pieces.length === 0) return [text];
  // Longest first, so `aria-labelledby="x"` wins over a shorter overlap.
  const pattern = new RegExp(
    pieces.sort((a, b) => b.length - a.length).map(escapeRegExp).join("|"),
    "g"
  );
  const parts: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(pattern)) {
    const start = match.index ?? 0;
    if (start > last) parts.push(text.slice(last, start));
    parts.push(
      <mark className="code-highlight" key={`${keyPrefix}-${start}`}>
        {match[0]}
      </mark>
    );
    last = start + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

/** Wraps comments in a span so they read apart from the code, and marks
 *  any highlighted pieces in the code around them. */
function markComments(text: string, highlight: string[] = []): ReactNode[] {
  const parts: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(COMMENT)) {
    const start = match.index ?? 0;
    if (start > last) parts.push(...markHighlights(text.slice(last, start), highlight, last));
    parts.push(
      <span className="code-comment" key={start}>
        {match[0]}
      </span>
    );
    last = start + match[0].length;
  }
  if (last < text.length) parts.push(...markHighlights(text.slice(last), highlight, last));
  return parts;
}

/** Charcoal code block whose text takes its section's soft color. */
export default function CodeBlock({
  code,
  tone,
  copyable = true,
  highlight,
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
    ? ({ "--code-tone": `var(--${tone}-soft)` } as CSSProperties)
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
        <code>{markComments(text, highlight)}</code>
      </pre>
    </div>
  );
}
