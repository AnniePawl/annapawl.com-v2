"use client";

import { MouseEvent, ReactNode, useEffect, useId, useRef } from "react";
import type { CSSProperties } from "react";
import { cx } from "../../lib/cx";

export interface DrawerProps {
  open: boolean;
  onClose: () => void;
  /** Small label beside the accent mark in the top bar. */
  eyebrow: string;
  title: string;
  children?: ReactNode;
  /** Page accent for the eyebrow mark and title block. */
  accent?: string;
  className?: string;
}

/**
 * "The Margin": a cream panel that slides in from the right edge, like a
 * page margin, so the page stays visible beside it. Native <dialog>
 * provides focus trapping, Escape-to-close and the backdrop layer.
 */
export default function Drawer({
  open,
  onClose,
  eyebrow,
  title,
  children,
  accent = "var(--charcoal)",
  className,
}: DrawerProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  // Clicks on the backdrop land on the <dialog> element itself.
  const handleClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === ref.current) onClose();
  };

  return (
    <dialog
      ref={ref}
      className={cx("drawer", className)}
      style={{ "--drawer-accent": accent } as CSSProperties}
      onClose={onClose}
      onCancel={onClose}
      onClick={handleClick}
      aria-labelledby={titleId}
      data-cursor-native
    >
      <div className="drawer-bar">
        <span className="drawer-eyebrow">
          <span className="drawer-eyebrow-mark" aria-hidden="true" />
          {eyebrow}
        </span>
        <button type="button" className="drawer-close focus-ring" onClick={onClose}>
          Close
          <svg viewBox="0 0 12 12" aria-hidden="true">
            <path d="M2 2l8 8M10 2l-8 8" />
          </svg>
        </button>
      </div>

      <div className="drawer-content" data-lenis-prevent>
        <h2 className="drawer-title" id={titleId}>
          {title}
          <span aria-hidden="true" />
        </h2>
        {children}
      </div>
    </dialog>
  );
}
