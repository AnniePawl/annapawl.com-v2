"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { Check, ChevronDown, X } from "lucide-react";
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
}: {
  sections: NavSection[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  const sheetId = useId();
  const titleId = `${sheetId}-title`;
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

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
    dialog.querySelector<HTMLElement>('[aria-current="location"]')?.focus();
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
      <button
        ref={triggerRef}
        type="button"
        className="section-switcher-trigger focus-ring"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={sheetId}
        onClick={openSheet}
      >
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
          <div className="section-sheet-header">
            <h2 id={titleId} className="section-sheet-title">
              Contents
            </h2>
            <button
              type="button"
              className="section-sheet-close focus-ring"
              onClick={closeSheet}
              aria-label="Close contents"
            >
              <X aria-hidden="true" />
            </button>
          </div>

          <div className="section-sheet-body">
            <ul className="section-sheet-groups">
              {groups.map((group) => {
                const groupId = `${sheetId}-${group.name}`;

                return (
                  <li key={group.name}>
                    <p id={groupId} className="section-sheet-group">
                      {group.name}
                    </p>
                    <ul className="section-sheet-items" aria-labelledby={groupId}>
                      {group.items.map((section) => {
                        const Icon = section.icon;
                        const isActive = section.id === activeId;

                        return (
                          <li key={section.id}>
                            <button
                              type="button"
                              className="section-sheet-item focus-ring"
                              aria-current={isActive ? "location" : undefined}
                              onClick={() => handleSelect(section.id)}
                            >
                              <Icon aria-hidden="true" />
                              <span className="section-sheet-item-label">
                                {section.title}
                              </span>
                              {isActive ? (
                                <Check aria-hidden="true" />
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
