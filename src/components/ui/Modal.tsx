"use client";

import { MouseEvent, ReactNode, useEffect, useRef } from "react";
import { cx } from "../../lib/cx";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
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
  children,
  className,
}: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null);

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
      onClose={onClose}
      onCancel={onClose}
      onClick={handleBackdropClick}
      aria-labelledby={title ? "modal-title" : undefined}
    >
      {title ? (
        <div className="modal-header">
          <h3 className="modal-title" id="modal-title">
            {title}
          </h3>
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
