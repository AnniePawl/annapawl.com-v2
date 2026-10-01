"use client";

import {
  MouseEvent,
  ReactNode,
  useEffect,
  useId,
  useRef,
} from "react";
import { ArrowRight } from "lucide-react";
import { cx } from "../../lib/cx";
import Button from "./Button";
import {
  EDITORIAL_COLORWAYS,
  type EditorialColorway,
} from "./editorialColorways";

export type ModalColorway = EditorialColorway;
export const MODAL_COLORWAYS = EDITORIAL_COLORWAYS;

type ModalSize = "default" | "lg";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  eyebrow: string;
  title: string;
  description: ReactNode;
  actionLabel: ReactNode;
  children?: ReactNode;
  onAction?: () => void;
  colorway?: ModalColorway;
  className?: string;
  size?: ModalSize;
}

/**
 * A focused, card-like dialog with one clear action. Native <dialog>
 * provides focus trapping, Escape-to-close, and the backdrop layer.
 */
export default function Modal({
  open,
  onClose,
  eyebrow,
  title,
  description,
  actionLabel,
  children,
  onAction,
  colorway = "pink-emerald",
  className,
  size = "default",
}: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const descriptionId = useId();
  const colorwayStyle = MODAL_COLORWAYS[colorway];

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

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

  const handleAction = () => {
    if (onAction) onAction();
    else onClose();
  };

  return (
    <dialog
      ref={ref}
      className={cx("modal", size === "lg" && "modal--lg", className)}
      style={colorwayStyle}
      onClose={onClose}
      onCancel={onClose}
      onClick={handleBackdropClick}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      data-cursor-native
    >
      <header className="modal-label-rail">
        <span className="modal-eyebrow type-eyebrow">{eyebrow}</span>
        <button
          type="button"
          className="modal-close focus-ring"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>
      </header>

      <div className="modal-content" data-lenis-prevent>
        <h3 className="modal-title" id={titleId}>
          {title}
        </h3>
        <div className="modal-description" id={descriptionId}>
          {description}
        </div>
        {children ? <div className="modal-body">{children}</div> : null}
        <Button className="modal-action" onClick={handleAction}>
          {actionLabel}
          <ArrowRight className="modal-action-icon" aria-hidden="true" />
        </Button>
      </div>
    </dialog>
  );
}
