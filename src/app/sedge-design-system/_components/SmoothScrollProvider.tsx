"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Lenis from "lenis";

const LenisContext = createContext<Lenis | null>(null);

/**
 * Fluid wheel scrolling, scoped to the design system only.
 *
 * Mounted from sedge-design-system/layout.tsx (alongside ThemeProvider),
 * not the root app layout -- so this effect's cleanup runs the moment
 * someone leaves the route, and every other page on the site keeps its
 * ordinary native scrolling untouched. See smooth-scroll.css for the one
 * small companion rule this pairs with.
 *
 * A few deliberate choices, since it's easy to get a smooth-scroll lib
 * subtly wrong:
 *
 * - `autoRaf: true` hands Lenis its own requestAnimationFrame loop
 *   (started in its constructor, cancelled inside `destroy()`) instead
 *   of us hand-rolling one. One animation loop, not two, and nothing to
 *   leak if a future edit here forgets to cancel a frame.
 * - `syncTouch` is left at its default `false`: Lenis only ever smooths
 *   `wheel` input, never touch, so mobile keeps its native momentum
 *   scrolling exactly as it already did.
 * - `duration`/`easing`/`wheelMultiplier` are tuned short with an
 *   ease-out curve (fast start, quick settle, no overshoot) rather than
 *   Lenis's stock ~1.2s feel, which reads as floaty at this UI's scale --
 *   "restrained inertia", not a slow drift.
 * - prefers-reduced-motion isn't handled via Lenis's own
 *   `respectReducedMotion` option (which keeps intercepting wheel input
 *   and programmatic scrollTo calls, just with easing forced to 1:1).
 *   Instead this simply never constructs a Lenis instance at all while
 *   the preference is set, so scrolling falls all the way back to the
 *   browser's native path with no JS layer in between -- a `change`
 *   listener re-evaluates this live if the OS setting flips mid-session.
 *   This is a separate, orthogonal switch from the site's own manually-
 *   controlled light/dark theme toggle.
 * - Nothing here touches keyboard scrolling, URL-hash/anchor jumps, or
 *   browser back/forward scroll restoration -- those all move the
 *   native `scrollY` directly, and Lenis listens for that (it doesn't
 *   drive it), so it just resyncs to wherever the page already is.
 * - Elements that need their own independent scrolling (the sidebar's
 *   overflow-y-auto column, code blocks, the mobile chip strip, modal
 *   bodies) are marked `data-lenis-prevent` at the call site, which
 *   Lenis reads natively -- see those components.
 */
export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let instance: Lenis | null = null;

    function start() {
      if (media.matches) {
        // Reduced motion: stay fully native, no Lenis instance at all.
        return;
      }

      instance = new Lenis({
        autoRaf: true,
        syncTouch: false,
        duration: 0.8,
        // easeOutCubic -- quick to settle, no bounce/overshoot.
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
        wheelMultiplier: 1,
      });
      setLenis(instance);
    }

    function stop() {
      instance?.destroy();
      instance = null;
      setLenis(null);
    }

    start();

    const handleChange = () => {
      stop();
      start();
    };
    media.addEventListener("change", handleChange);

    return () => {
      media.removeEventListener("change", handleChange);
      stop();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
}

/**
 * Returns the active Lenis instance, or `null` when smooth scrolling
 * isn't running (prefers-reduced-motion, or briefly during mount).
 * Callers should fall back to native scrolling (e.g. `scrollIntoView`)
 * when this is `null` rather than no-op.
 */
export function useLenis() {
  return useContext(LenisContext);
}
