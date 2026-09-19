"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const ACTIVE_MEDIA = "(pointer: fine) and (hover: hover)";

const INTERACTIVE_SELECTOR =
  'a[href], button, [role="button"], [role="link"], summary, label[for]';

const TEXT_SELECTOR =
  "p, span, h1, h2, h3, h4, h5, h6, li, blockquote, figcaption, " +
  "caption, td, th, dt, dd, label, strong, em, b, i, small, code, pre";

const SPECIAL_CURSORS = new Set([
  "text",
  // "vertical-text",
  "wait",
  "progress",
  "help",
  "crosshair",
  "grab",
  "grabbing",
  "not-allowed",
  "context-menu",
  "cell",
  "copy",
  "alias",
  "col-resize",
  "row-resize",
  "n-resize",
  "s-resize",
  "e-resize",
  "w-resize",
  "ne-resize",
  "nw-resize",
  "se-resize",
  "sw-resize",
  "ew-resize",
  "ns-resize",
  "nesw-resize",
  "nwse-resize",
  "all-scroll",
  "zoom-in",
  "zoom-out",
]);

function wantsNativeCursor(target: Element) {
  const editable = target.closest("[contenteditable]");

  return (
    target.closest("[data-cursor-native], input, textarea, select") !== null ||
    (editable instanceof HTMLElement && editable.isContentEditable)
  );
}

function isDisabled(target: Element) {
  return (
    target.matches(":disabled") ||
    target.closest('[aria-disabled="true"]') !== null
  );
}

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isDocumentation =
    pathname === "/sedge-design-system" ||
    pathname?.startsWith("/sedge-design-system/") === true;

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const root = document.documentElement;
    const media = window.matchMedia(ACTIVE_MEDIA);

    let suppressedElement: HTMLElement | SVGElement | null = null;
    let previousCursor = "";
    let previousPriority = "";

    let position: { x: number; y: number } | null = null;
    let frame = 0;

    function restoreNativeCursor() {
      root.classList.remove("cc-suppress-native");

      if (suppressedElement) {
        if (previousCursor) {
          suppressedElement.style.setProperty(
            "cursor",
            previousCursor,
            previousPriority
          );
        } else {
          suppressedElement.style.removeProperty("cursor");
        }

        suppressedElement = null;
      }
    }

    function hide() {
      restoreNativeCursor();
      cursor!.classList.remove("cc-visible", "cc-interactive");
    }

    function suppressNativeCursor(target: Element) {
      root.classList.add("cc-suppress-native");

      // Override explicit pointer cursors on links/buttons as well
      // as the inherited cursor. Restore the original style afterward.
      if (
        target instanceof HTMLElement ||
        target instanceof SVGElement
      ) {
        suppressedElement = target;
        previousCursor = target.style.getPropertyValue("cursor");
        previousPriority = target.style.getPropertyPriority("cursor");
        target.style.setProperty("cursor", "none", "important");
      }
    }

    function update() {
      restoreNativeCursor();

      if (!media.matches || !position) {
        hide();
        return;
      }

      const { x, y } = position;
      const target = document.elementFromPoint(x, y);

      // Original native-cursor fallback, preserved:
      // if (!target || wantsNativeCursor(target)) {
      //   hide();
      //   return;
      // }

      // Documentation keeps the custom cursor over text, fields,
      // and regions that normally opt out. Other pages are unchanged.
      if (!target || (!isDocumentation && wantsNativeCursor(target))) {
        hide();
        return;
      }

      const computedCursor = getComputedStyle(target).cursor;
      const interactive = target.closest(INTERACTIVE_SELECTOR);

      // Original special/disabled-cursor fallback, preserved:
      // if (
      //   SPECIAL_CURSORS.has(computedCursor) ||
      //   isDisabled(target) ||
      //   (interactive && isDisabled(interactive))
      // ) {
      //   hide();
      //   return;
      // }

      if (
        !isDocumentation &&
        (SPECIAL_CURSORS.has(computedCursor) ||
          isDisabled(target) ||
          (interactive && isDisabled(interactive)))
      ) {
        hide();
        return;
      }

      // Link/button labels belong to their interactive parent.
      // Original interactive appearance, preserved:
      // const isInteractive =
      //   interactive !== null || computedCursor === "pointer";

      // On documentation, keep a plain dot even over links/buttons.
      const isInteractive =
        !isDocumentation &&
        (interactive !== null || computedCursor === "pointer");

      // if (!isInteractive && target.closest(TEXT_SELECTOR)) {
      //   hide();
      //   return;
      // }

      // Resolve theme colors from the element under the pointer.
      // The root-mounted cursor does not inherit route-scoped themes.
      const theme = getComputedStyle(target);
      const dotColor =
        theme.getPropertyValue("--text-primary").trim() ||
        theme.color;
      const haloColor =
        theme.getPropertyValue("--cursor-halo-color").trim() ||
        "#ad8dc6";

      cursor!.style.setProperty("--cc-dot-color", dotColor);
      cursor!.style.setProperty("--cc-halo-color", haloColor);

      cursor!.style.transform =
        `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;

      cursor!.classList.toggle("cc-interactive", isInteractive);
      cursor!.classList.add("cc-visible");

      // Hide the native cursor only after positioning/showing ours.
      suppressNativeCursor(target);
    }

    function scheduleUpdate() {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        frame = 0;
        update();
      });
    }

    function handlePointerMove(event: PointerEvent) {
      if (event.pointerType !== "mouse") {
        position = null;
        hide();
        return;
      }

      position = { x: event.clientX, y: event.clientY };
      update();
    }

    function reset() {
      position = null;
      window.cancelAnimationFrame(frame);
      frame = 0;
      hide();
    }

    function handlePointerOut(event: PointerEvent) {
      if (event.relatedTarget === null) reset();
    }

    function handleVisibilityChange() {
      if (document.hidden) reset();
    }

    // Keep classification correct when content moves under a
    // stationary pointer, including scrolling and route changes.
    const observer = new MutationObserver(scheduleUpdate);

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["data-sedge-theme", "open"],
    });

    document.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    document.addEventListener("pointerout", handlePointerOut);
    document.addEventListener("scroll", scheduleUpdate, {
      passive: true,
      capture: true,
    });
    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange
    );
    window.addEventListener("blur", reset);
    window.addEventListener("resize", scheduleUpdate);
    media.addEventListener("change", reset);

    return () => {
      observer.disconnect();
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerout", handlePointerOut);
      document.removeEventListener("scroll", scheduleUpdate, true);
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );
      window.removeEventListener("blur", reset);
      window.removeEventListener("resize", scheduleUpdate);
      media.removeEventListener("change", reset);
      reset();
    };
  }, [isDocumentation]);

  return (
    <div ref={cursorRef} className="cc-cursor" aria-hidden="true"
      style={isDocumentation ? { width: 8, height: 8, border: "none", borderRadius: "50%", background: "var(--cc-dot-color, #34313b)" } : undefined}>
      {/* Original halo markup, preserved:
      <span className="cc-halo" />
      <span className="cc-center" />
      */}
      {!isDocumentation && <span className="cc-halo" />}
      <span className="cc-center" />
    </div>
  );
}