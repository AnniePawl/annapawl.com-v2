"use client";

// "General nerdery ↓" link scrolls down to menu
// Smooth unless  visitor prefers reduced motion. 
export function NerderyLink() {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    const menu = document.getElementById("landing-index");
    if (!menu) return;
    e.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    menu.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    const heading = menu.querySelector<HTMLElement>("h2");
    heading?.setAttribute("tabindex", "-1");
    heading?.focus({ preventScroll: true });
  }

  return (
    <a href="#landing-index" className="landing-cta focus-ring" onClick={handleClick}>
      <span className="landing-cta-label">
        General nerdery
        <span className="landing-cta-arrow" aria-hidden="true">↓</span>
      </span>
    </a>
  );
}
