"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import "./shape-code.css";

// A code block with a copy button in the corner. "use client" because the
// button uses state (the copied ✓) and the browser clipboard.
export default function ShapeCode({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const text = code.trim();

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Some browsers/embedded views block the clipboard API; fall back
      // to the older select-and-copy trick with a hidden textarea.
      const area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      const ok = document.execCommand("copy");
      area.remove();
      if (!ok) return; // nothing copied -- leave the button as is
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="shape-code-wrap">
      <button
        type="button"
        className="shape-code-copy focus-ring"
        onClick={copy}
        aria-label={copied ? "Copied" : "Copy code"}
      >
        {copied ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
        <span>{copied ? "Copied" : "Copy"}</span>
      </button>
      <pre className="shape-code">
        <code>{text}</code>
      </pre>
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? "Code copied" : ""}
      </span>
    </div>
  );
}
