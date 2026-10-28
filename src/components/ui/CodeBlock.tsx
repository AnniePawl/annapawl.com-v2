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
  className?: string;
}

// Block comments (/* */, {/* */}), HTML comments, and // line comments.
// The lookbehind skips the // inside URLs like https://.
const COMMENT = /\/\*[\s\S]*?\*\/|<!--[\s\S]*?-->|(?<![:"'\w/])\/\/[^\n]*/g;

/** Wraps comments in a span so they read apart from the code. */
function markComments(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(COMMENT)) {
    const start = match.index ?? 0;
    if (start > last) parts.push(text.slice(last, start));
    parts.push(
      <span className="code-comment" key={start}>
        {match[0]}
      </span>
    );
    last = start + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
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
        <code>{markComments(text)}</code>
      </pre>
    </div>
  );
}
