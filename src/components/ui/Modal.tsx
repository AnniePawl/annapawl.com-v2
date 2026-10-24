"use client";

import { MouseEvent, ReactNode, useEffect, useId, useRef } from "react";
import { cx } from "../../lib/cx";

type ModalSize = "default" | "lg";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  /** Spaced-caps label with the page-accent marker. */
  eyebrow: string;
  title: string;
  /** Short lead copy under the title (also used as the accessible description). */
  description?: ReactNode;
  children?: ReactNode;
  /** Buttons/links shown bottom-right, e.g. a quiet link + a primary Button. */
  actions?: ReactNode;
  size?: ModalSize;
  className?: string;
}

/**
 * "Notecard": a small centered dialog for short moments (a note, a
 * confirmation, a small form). Cream, hairline border, 4px corners, a
 * spaced-caps label with the page-accent marker, a modest title, and a
 * plain × in the corner. For long, browsable content use the Drawer.
 * Native <dialog> provides focus trapping, Escape-to-close and the backdrop.
 */
export default function Modal({
  open,
  onClose,
  eyebrow,
  title,
  description,
  children,
  actions,
  size = "default",
  className,
}: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const descriptionId = useId();

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
      className={cx("modal", size === "lg" && "modal--lg", className)}
      onClose={onClose}
      onCancel={onClose}
      onClick={handleClick}
      aria-labelledby={titleId}
      aria-describedby={description ? descriptionId : undefined}
    >
      <div className="modal-card" data-lenis-prevent>
        <button
          type="button"
          className="modal-close focus-ring"
          onClick={onClose}
          aria-label="Close"
        >
          <svg viewBox="0 0 12 12" aria-hidden="true">
            <path d="M2 2l8 8M10 2l-8 8" />
          </svg>
        </button>

        <span className="modal-eyebrow">{eyebrow}</span>
        <h2 className="modal-title" id={titleId}>
          {title}
        </h2>
        {description ? (
          <div className="modal-description" id={descriptionId}>
            {description}
          </div>
        ) : null}
        {children ? <div className="modal-body">{children}</div> : null}
        {actions ? <div className="modal-actions">{actions}</div> : null}
      </div>
    </dialog>
  );
}
