"use client";

import { CSSProperties, MouseEvent, ReactNode, useEffect, useRef } from "react";
import type { LucideIcon } from "lucide-react";
import { cx } from "../../lib/cx";

// The brand palette's hue names (foundations/color.css) plus "neutral" —
// same convention as Card's `tone` prop and Badge's `tone` prop. Each name
// resolves to a matched bold+soft color combo (--{tone}-bold / -soft)
// that drives every accent piece in the modal from one knob: the whole
// modal background, the title divider, the optional icon badge, any
// `.btn--primary` inside the modal (e.g. a "Confirm" button), and the
// close button (icon color + hover background). "neutral" resolves to
// --neutral-bold / --neutral-soft (a soft white-ish background rather
// than a color) — a quiet default for modals that shouldn't read as
// belonging to a specific category.
export type ModalTone =
  | "pink"
  | "red"
  | "orange"
  | "yellow"
  | "lime"
  | "mint"
  | "green"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "neutral";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  /**
   * Optional icon rendered in a colored circular badge to the left of the
   * title. Has no effect without a `title`, since it lives in the title
   * row. Any lucide-react icon component.
   */
  icon?: LucideIcon;
  /**
   * Optional color combo — one of the brand palette's hues, i.e. its
   * paired bold + soft tones (--{tone}-bold / -soft). Sets
   * --modal-accent / --modal-accent-soft inline, which the title divider,
   * icon badge, close button, and any `.btn--primary` inside the modal
   * all read from — change this one prop and all of them match. Falls
   * back to the shared --accent / --accent-soft tokens when not set.
   */
  tone?: ModalTone;
  children: ReactNode;
  className?: string;
}

/**
 * Built on the native <dialog> element, which gives us focus trapping,
 * Escape-to-close, and a ::backdrop for free — no extra JS or portal
 * needed.
 */
export default function Modal({
  open,
  onClose,
  title,
  icon: Icon,
  tone,
  children,
  className,
}: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const toneStyle: CSSProperties | undefined = tone
    ? ({
        "--modal-accent": `var(--${tone}-bold)`,
        "--modal-accent-soft": `var(--${tone}-soft)`,
      } as CSSProperties)
    : undefined;

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  // Clicking the backdrop (outside the dialog's own box) closes it. The
  // <dialog> element's click target is the backdrop when the click lands
  // outside its content box, so we compare against its bounding rect.
  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const inBounds =
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom;
    if (!inBounds) onClose();
  };

  return (
    <dialog
      ref={ref}
      className={cx("modal", className)}
      style={toneStyle}
      onClose={onClose}
      onCancel={onClose}
      onClick={handleBackdropClick}
      aria-labelledby={title ? "modal-title" : undefined}
    >
      {title ? (
        <div className="modal-header">
          <div className="modal-header-content">
            {Icon ? (
              <span className="modal-icon" aria-hidden="true">
                <Icon className="modal-icon-svg" />
              </span>
            ) : null}
            <h3 className="modal-title" id="modal-title">
              {title}
            </h3>
          </div>
          <button
            type="button"
            className="modal-close focus-ring"
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      ) : null}
      <div className="modal-body">{children}</div>
    </dialog>
  );
}
