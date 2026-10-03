import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cx } from "../../lib/cx";
import type { PaletteColor } from "./colorTokens";

export type CalloutColors = {
  /** Main content surface; also used for text on the accent rail. */
  surface: PaletteColor;
  /** Accent rail background; also used for the title. */
  accent: PaletteColor;
  /** Main body copy. Defaults to charcoal. */
  bodyText?: PaletteColor;
};

export interface CalloutProps extends HTMLAttributes<HTMLElement> {
  eyebrow: string;
  children: ReactNode;
  colors?: CalloutColors;
  actionLabel?: ReactNode;
  actionHref?: string;
}

const DEFAULT_COLORS: CalloutColors = {
  surface: "moss-soft",
  accent: "cherry-bold",
  bodyText: "charcoal",
};

/** A non-blocking editorial aside that shares the modal's two-tone frame. */
export default function Callout({
  eyebrow,
  children,
  colors = DEFAULT_COLORS,
  actionLabel,
  actionHref,
  className,
  style,
  ...rest
}: CalloutProps) {
  const colorStyle = {
    "--callout-surface": `var(--${colors.surface})`,
    "--callout-accent": `var(--${colors.accent})`,
    "--callout-body-text": `var(--${colors.bodyText ?? "charcoal"})`,
  } as CSSProperties;

  return (
    <aside
      {...rest}
      className={cx("callout", className)}
      style={{ ...colorStyle, ...style }}
    >
      <div className="callout-label-rail">
        <span className="callout-eyebrow type-eyebrow">{eyebrow}</span>
      </div>
      <div className="callout-content">
        <div className="callout-description">{children}</div>
        {actionLabel && actionHref ? (
          <a className="callout-action focus-ring" href={actionHref}>
            {actionLabel}
            <ArrowRight className="callout-action-icon" aria-hidden="true" />
          </a>
        ) : null}
      </div>
    </aside>
  );
}
