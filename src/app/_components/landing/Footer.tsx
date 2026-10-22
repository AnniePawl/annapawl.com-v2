"use client";

import { useEffect, useRef, useState } from "react";
import { Heart } from "lucide-react";

// Site footer: a woven edge (a strip of colored markers, like the Sedge
// hero weave) above a three-column colophon. Holds the social links that
// used to sit in the landing's left column.
const EMAIL = "annampawl@gmail.com";

const TONES = [
  "pink-bold", "mint-bold", "sky-bold", "amber-bold", "lilac-bold",
  "coral-bold", "cherry-bold", "lime-bold", "blue-soft", "plum-soft",
  "orange-soft", "emerald-soft", "indigo-soft", "red-bold", "lemon-bold",
  "sage-soft", "mauve-soft", "steel-soft",
];
const STRIP_LENGTH = 56;

// Fixed seed so server and client render the same strip.
function seeded(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const STRIP: (string | null)[] = (() => {
  const random = seeded(7);
  return Array.from({ length: STRIP_LENGTH }, () => {
    const filled = random() < 0.75;
    const tone = TONES[Math.floor(random() * TONES.length)];
    return filled ? tone : null;
  });
})();

function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timeout.current) clearTimeout(timeout.current);
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      if (timeout.current) clearTimeout(timeout.current);
      timeout.current = setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <>
      <button type="button" className="landing-footer-link focus-ring" onClick={copy}>
        {copied ? "Email copied!" : "Copy my email"}
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? "Email copied" : ""}
      </span>
    </>
  );
}

export function Footer() {
  return (
    <footer className="landing-footer">
      <div className="landing-footer-weave" aria-hidden="true">
        {STRIP.map((tone, i) => (
          <i key={i} style={tone ? { background: `var(--${tone})` } : undefined} />
        ))}
      </div>

      <div className="landing-footer-colophon">
        <div className="landing-footer-col">
          <h2 className="landing-footer-label">Elsewhere</h2>
          <a
            href="https://github.com/AnniePawl"
            target="_blank"
            rel="noopener noreferrer"
            className="landing-footer-link focus-ring"
          >
            GitHub ↗
          </a>
          <a
            href="https://codepen.io/annampawl"
            target="_blank"
            rel="noopener noreferrer"
            className="landing-footer-link focus-ring"
          >
            CodePen ↗
          </a>
        </div>

        <div className="landing-footer-col">
          <h2 className="landing-footer-label">Get in touch</h2>
          <CopyEmail />
          <span className="landing-footer-muted">Seattle · New York</span>
        </div>

        <div className="landing-footer-col landing-footer-col--wide">
          <h2 className="landing-footer-label">Colophon</h2>
          <p className="landing-footer-muted">
            Built with Next.js and a design system called Sedge.
          </p>
        </div>

        <p className="landing-footer-end">
         
          <span className='flex'>Made with <Heart className="icon-sm text-pink-400 ml-2" aria-hidden="true"/></span>
          <span className="sr-only">love</span>
           © {new Date().getFullYear()} Anna Pawl
        </p>
      </div>
    </footer>
  );
}
