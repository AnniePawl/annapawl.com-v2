"use client";

// The footer on every page: a woven color strip, then the colophon.
// Its markers and link hovers use the page accent.
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Heart } from "lucide-react";
import "./site-footer.css";

const EMAIL = "annampawl@gmail.com";

const TONES = [
  "pink-bold", "mint-bold", "sky-bold", "marigold-bold", "lilac-bold",
  "coral-bold", "cherry-bold", "lime-bold", "lemon-green", "plum-soft",
  "orange-soft", "emerald-soft", "iris-soft", "red-bold", "lemon-bold",
  "sage-soft", "mauve-soft", "blue-bold", "teal-soft", 
];
const STRIP_LENGTH = 56;

// Woven Edge
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
      <button type="button" className="site-footer-link focus-ring" onClick={copy}>
        {copied ? "Email copied!" : "Copy my email"}
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? "Email copied" : ""}
      </span>
    </>
  );
}

/** `accent` sets the marker color when the footer sits outside the
 *  page's shell (which normally provides the page accent). */
export default function SiteFooter({ accent }: { accent?: string }) {
  return (
    <footer
      className="site-footer"
      style={
        accent
          ? ({ "--site-footer-accent": accent } as React.CSSProperties)
          : undefined
      }
    >
      <div className="site-footer-weave" aria-hidden="true">
        {STRIP.map((tone, i) => (
          <i key={i} style={tone ? { background: `var(--${tone})` } : undefined} />
        ))}
      </div>

      <div className="site-footer-colophon">
        <div className="site-footer-col">
          <h2 className="site-footer-label">Elsewhere</h2>
          <a
            href="https://github.com/AnniePawl"
            target="_blank"
            rel="noopener noreferrer"
            className="site-footer-link focus-ring"
          >
            GitHub ↗
          </a>
          <a
            href="https://codepen.io/annampawl"
            target="_blank"
            rel="noopener noreferrer"
            className="site-footer-link focus-ring"
          >
            CodePen ↗
          </a>
        </div>

        <div className="site-footer-col">
          <h2 className="site-footer-label">Get in touch</h2>
          <CopyEmail />
          <span className="site-footer-muted">Seattle · New York</span>
        </div>

        <div className="site-footer-col">
          <h2 className="site-footer-label">Built with</h2>
          <span className="site-footer-muted">Next.js</span>
          <Link href="/sedge-design-system" className="site-footer-link focus-ring">
            My design system
          </Link>
        </div>

        <div className="site-footer-bottom">
          <span className="site-footer-love">
            Made with <Heart className="icon-sm text-pink-400" aria-hidden="true" />
            <span className="sr-only">love</span>
          </span>
          <span>© {new Date().getFullYear()} Anna Pawl</span>
        </div>
      </div>
    </footer>
  );
}
