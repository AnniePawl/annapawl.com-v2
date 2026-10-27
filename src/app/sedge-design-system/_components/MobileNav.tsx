"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { CSSProperties, MouseEvent } from "react";
import { ArrowUp, ChevronDown } from "lucide-react";
import type { NavSection } from "../_data/sections";
import "./section-switcher.css";

// The real sidebar is `hidden lg:block` — below that breakpoint there's
// currently no other way to jump between sections. This is the mobile
// equivalent: a compact bar, sticky under the site header, that names the
// current section and opens a bottom sheet listing all of them (grouped
// like the sidebar). All of the styling lives in section-switcher.css.
//
// The sheet is a native <dialog> opened with showModal(), the same
// approach as ui/Modal.tsx: focus is trapped inside it, Escape closes it
// (the `close` event below is the single place both paths end up), and
// everything behind it is inert while it's open.
export default function MobileNav({
  sections,
  activeId,
  onSelect,
  onBackToTop,
}: {
  sections: NavSection[];
  activeId: string;
  onSelect: (id: string) => void;
  onBackToTop: () => void;
}) {
  const sheetId = useId();
  const titleId = `${sheetId}-title`;
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  // Strip segments: one per section, sized by its height, filled as you read.
  const [segments, setSegments] = useState(
    sections.map((section) => ({ id: section.id, weight: 1, progress: 0 })),
  );

  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      const line = window.scrollY + window.innerHeight * 0.3;
      setSegments(
        sections.map((section) => {
          const el = document.getElementById(section.id);
          if (!el) return { id: section.id, weight: 1, progress: 0 };
          const top = el.getBoundingClientRect().top + window.scrollY;
          const height = el.offsetHeight || 1;
          const progress = Math.min(1, Math.max(0, (line - top) / height));
          return { id: section.id, weight: height, progress };
        }),
      );
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [sections]);

  const active = sections.find((s) => s.id === activeId) ?? sections[0];

  // SECTIONS is already declared in Intro/Foundations/Components order
  // (see _data/sections.ts) — group consecutive items by their `group`,
  // same as SidebarNav, rather than re-sorting.
  const groups: { name: string; items: NavSection[] }[] = [];
  for (const section of sections) {
    const current = groups[groups.length - 1];
    if (current && current.name === section.group) {
      current.items.push(section);
    } else {
      groups.push({ name: section.group, items: [section] });
    }
  }

  const openSheet = () => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    dialog.showModal();
    setOpen(true);
    // showModal() focuses the first control (the close button). Start on
    // the current section instead, so keyboard and screen-reader users
    // land where they already are in the list.
    // preventScroll keeps the list open at the top, where Back to top sits.
    dialog
      .querySelector<HTMLElement>('[aria-current="location"]')
      ?.focus({ preventScroll: true });
  };

  const closeSheet = () => dialogRef.current?.close();

  // Fires for every way the sheet closes -- Escape, the close button,
  // the dim area, choosing a section, or the breakpoint effect below.
  const handleClose = () => {
    setOpen(false);
    // Native <dialog> already tries to restore focus, but not in every
    // browser; be explicit. preventScroll: the bar is sticky and already
    // in view, and a jump here would fight the section scroll a selection
    // has just started.
    triggerRef.current?.focus({ preventScroll: true });
  };

  const handleSelect = (id: string) => {
    closeSheet();
    onSelect(id);
  };

  const handleBackToTop = () => {
    closeSheet();
    onBackToTop();
  };

  // The dialog is a transparent full-viewport layer with the panel inside
  // it, so a click whose target is the dialog itself landed outside the
  // panel.
  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) closeSheet();
  };

  // If the window grows past the point where this nav is replaced by the
  // sidebar (Tailwind `lg`, 64rem) while the sheet is open, close it
  // rather than leave a modal layer over a layout that no longer has this
  // control.
  useEffect(() => {
    const media = window.matchMedia("(min-width: 64rem)");
    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) dialogRef.current?.close();
    };
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  // While the sheet is open, a mouse wheel over anything but the list
  // shouldn't scroll the page behind it. `overscroll-behavior` alone can't
  // do that (it only applies to elements that can actually scroll), and
  // the list already contains its own overscroll -- see
  // section-switcher.css. Needs a non-passive listener, which React's
  // onWheel isn't.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const holdPage = (event: WheelEvent) => {
      if (!(event.target as Element).closest(".section-sheet-body")) {
        event.preventDefault();
      }
    };
    dialog.addEventListener("wheel", holdPage, { passive: false });
    return () => dialog.removeEventListener("wheel", holdPage);
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="section-switcher lg:hidden"
      data-section-switcher
    >
      <div className="section-switcher-strip" aria-hidden="true">
        {segments.map((seg, i) => (
          <span
            key={seg.id}
            data-group={sections[i].group}
            style={
              {
                flexGrow: seg.weight,
                "--seg-fill": `${seg.progress * 100}%`,
              } as CSSProperties
            }
          />
        ))}
      </div>

      <button
        ref={triggerRef}
        type="button"
        className="section-switcher-trigger focus-ring"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={sheetId}
        onClick={openSheet}
      >
        <span
          className="section-switcher-mark"
          data-group={active.group}
          aria-hidden="true"
        />
        <span className="section-switcher-label">
          <span className="sr-only">Contents: </span>
          {active.title}
        </span>
        <ChevronDown className="section-switcher-chevron" aria-hidden="true" />
      </button>

      {/* data-lenis-prevent: keeps Lenis from scrolling the page behind the
          open sheet (see section-switcher.css). data-cursor-native: same
          opt-out as Modal, so the real cursor shows over the sheet. */}
      <dialog
        ref={dialogRef}
        id={sheetId}
        className="section-sheet"
        aria-labelledby={titleId}
        onClose={handleClose}
        onClick={handleBackdropClick}
        data-lenis-prevent
        data-cursor-native
      >
        <div className="section-sheet-panel">
          {/* The bar again, inside the sheet: the modal layer covers the
              real one, so this copy keeps the strip and current section in
              view and closes the list when tapped. */}
          <div className="section-sheet-header">
            <h2 id={titleId} className="sr-only">
              Contents
            </h2>
            <div className="section-switcher-strip" aria-hidden="true">
              {segments.map((seg, i) => (
                <span
                  key={seg.id}
                  data-group={sections[i].group}
                  style={
                    {
                      flexGrow: seg.weight,
                      "--seg-fill": `${seg.progress * 100}%`,
                    } as CSSProperties
                  }
                />
              ))}
            </div>
            <button
              type="button"
              className="section-switcher-trigger section-sheet-close focus-ring"
              onClick={closeSheet}
              aria-label="Close contents"
            >
              <span
                className="section-switcher-mark"
                data-group={active.group}
                aria-hidden="true"
              />
              <span className="section-switcher-label">{active.title}</span>
              <ChevronDown
                className="section-switcher-chevron section-sheet-chevron"
                aria-hidden="true"
              />
            </button>
          </div>

          <div className="section-sheet-body">
            <button
              type="button"
              className="section-sheet-top focus-ring"
              onClick={handleBackToTop}
            >
              Back to top
              <ArrowUp className="section-sheet-top-icon" aria-hidden="true" />
            </button>
            <ul className="section-sheet-groups">
              {groups.map((group) => {
                const groupId = `${sheetId}-${group.name}`;

                return (
                  <li key={group.name}>
                    <p id={groupId} className="section-sheet-group" data-group={group.name}>
                      {group.name}
                    </p>
                    <ul className="section-sheet-items" aria-labelledby={groupId}>
                      {group.items.map((section) => {
                        const isActive = section.id === activeId;

                        return (
                          <li key={section.id}>
                            <button
                              type="button"
                              className="section-sheet-item focus-ring"
                              aria-current={isActive ? "location" : undefined}
                              onClick={() => handleSelect(section.id)}
                            >
                              <span
                                className="section-sheet-item-mark"
                                data-group={section.group}
                                aria-hidden="true"
                              />
                              <span className="section-sheet-item-label">
                                {section.title}
                              </span>
                              {isActive ? (
                                <em className="section-sheet-here">
                                  You&rsquo;re here
                                </em>
                              ) : null}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </dialog>
    </nav>
  );
}
