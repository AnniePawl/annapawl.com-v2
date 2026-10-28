import Link from "next/link";
import type { AnchorHTMLAttributes, CSSProperties } from "react";
import { cx } from "../../lib/cx";
import { markerColor, type PaletteColor } from "./colorTokens";

export interface TextLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  /** Underline color. Any palette token; defaults to the page accent. */
  tone?: PaletteColor;
  /** default: solid accent underline. quiet: dotted, for meta and captions. */
  variant?: "default" | "quiet";
}

/**
 * The .text-link pattern as a component. Internal hrefs use next/link;
 * http(s) links open in a new tab and say so to screen readers.
 */
export default function TextLink({
  href,
  tone,
  variant = "default",
  className,
  style,
  children,
  ...rest
}: TextLinkProps) {
  const classes = cx(
    "text-link focus-ring",
    variant === "quiet" && "text-link--quiet",
    className
  );
  const toneStyle = tone
    ? ({ "--link-accent": markerColor(tone) } as CSSProperties)
    : undefined;
  const mergedStyle = { ...toneStyle, ...style };

  if (/^https?:\/\//.test(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        style={mergedStyle}
        {...rest}
      >
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }

  return (
    <Link href={href} className={classes} style={mergedStyle} {...rest}>
      {children}
    </Link>
  );
}
