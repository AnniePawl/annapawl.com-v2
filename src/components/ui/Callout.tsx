import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cx } from "../../lib/cx";
import { markerColor, type PaletteColor, type PaletteHue } from "./colorTokens";

export interface CalloutProps extends HTMLAttributes<HTMLElement> {
  /** Short spaced-caps label, e.g. "Good to know". */
  eyebrow: string;
  children: ReactNode;
  actionLabel?: ReactNode;
  actionHref?: string;
  /** Marker and action-link color. A hue ("green") uses its bold shade;
   *  a full token ("green-soft") is used as is. Defaults to the page accent. */
  tone?: PaletteHue | PaletteColor;
}

/**
 * A quiet editorial aside: cream surface, hairline border, 4px corners.
 * The only color is the label marker, which follows the page accent
 * unless a tone is passed.
 */
export default function Callout({
  eyebrow,
  children,
  actionLabel,
  actionHref,
  tone,
  className,
  style,
  ...rest
}: CalloutProps) {
  const toneStyle = tone
    ? ({ "--callout-marker": markerColor(tone) } as CSSProperties)
    : undefined;

  return (
    <aside {...rest} className={cx("callout", className)} style={{ ...toneStyle, ...style }}>
      <span className="callout-label">{eyebrow}</span>
      <div className="callout-description">{children}</div>
      {actionLabel && actionHref ? (
        <a
          className="callout-action text-link text-link--standalone focus-ring"
          href={actionHref}
        >
          {actionLabel}
          <ArrowRight className="text-link-icon" aria-hidden="true" />
        </a>
      ) : null}
    </aside>
  );
}
