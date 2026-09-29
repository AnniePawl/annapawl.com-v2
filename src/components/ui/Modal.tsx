"use client";

import {
  CSSProperties,
  MouseEvent,
  ReactNode,
  useEffect,
  useId,
  useRef,
} from "react";
import { cx } from "../../lib/cx";
import Button from "./Button";

export type ModalTone = "lemon" | "coral" | "mint";

const MODAL_TONES: Record<ModalTone, string> = {
  lemon: "var(--lemon-bold)",
  coral: "var(--coral-bold)",
  mint: "var(--mint-soft)",
};

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  eyebrow: string;
  title: string;
  description: ReactNode;
  actionLabel: ReactNode;
  onAction?: () => void;
  tone?: ModalTone;
  className?: string;
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
  onAction,
  tone = "lemon",
  className,
}: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const descriptionId = useId();
  const toneStyle = {
    "--modal-tone": MODAL_TONES[tone],
  } as CSSProperties;

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
      className={cx("modal", className)}
      style={toneStyle}
      onClose={onClose}
      onCancel={onClose}
      onClick={handleBackdropClick}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      data-cursor-native
    >
      <button
        type="button"
        className="modal-close focus-ring"
        onClick={onClose}
        aria-label="Close"
      >
        ✕
      </button>

      <div className="modal-content" data-lenis-prevent>
        <span className="modal-eyebrow type-eyebrow">{eyebrow}</span>
        <h3 className="modal-title" id={titleId}>
          {title}
        </h3>
        <p className="modal-description" id={descriptionId}>
          {description}
        </p>
        <Button className="modal-action" onClick={handleAction}>
          {actionLabel}
        </Button>
      </div>
    </dialog>
  );
}
