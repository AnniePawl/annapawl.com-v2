"use client";

// Ported from src/components/about-me/Contact.js. Cleanup done here per
// the port brief: target="blank" typo on the CodePen link fixed to
// "_blank" (plus rel="noopener noreferrer", missing on both external
// links in the source); the clickable envelope <div> is now a real
// <button> with an accessible name; the stray console.log(clicked) is
// gone; and the fade-in/timeout pairing is one setTimeout in the click
// handler instead of a useEffect keyed on `clicked` that re-fired (and
// re-armed a new timer) on both the true -> false and the false -> true
// transition -- same visible result, one timer instead of two.
import { useEffect, useRef, useState } from "react";
import { GitHubIcon, CodepenIcon } from "./icons";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("annampawl@gmail.com").catch(() => {});
    setCopied(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div className="landing-contact">
      <div className="landing-contact-icons">
        <a
          href="https://github.com/AnniePawl"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://codepen.io/annampawl"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="CodePen"
        >
          <CodepenIcon />
        </a>
      </div>
      <button
        type="button"
        className="landing-envelope focus-ring"
        onClick={handleCopy}
        aria-label="Copy email address"
      >
        <span className="landing-envelope-flap2" aria-hidden="true" />
      </button>
      <p className="landing-copied-msg" data-visible={copied} aria-live="polite">
        {copied ? "Email copied!" : ""}
      </p>
    </div>
  );
}
