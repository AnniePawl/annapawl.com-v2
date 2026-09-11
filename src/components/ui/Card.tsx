import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  CSSProperties,
  HTMLAttributes,
  forwardRef,
} from "react";
import { ArrowRight } from "lucide-react";
import { cx } from "../../lib/cx";

type CardVariant = "default" | "soft";

// Matches the brand palette's hue names (foundations/color.css). Same 11
// hues as before — this round changes what `tone` drives (see below),
// not the set of values it accepts.
export type CardTone =
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
  | "violet";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  /** Adds hover/press affordances for cards that act as clickable targets. */
  interactive?: boolean;
  /**
   * Optional colored accent — one of the brand palette's hues. Sets
   * --card-accent and --card-accent-soft (both currently the hue's
   * `-soft` token) which the border and CardAction read from. The
   * card's own background is always plain white now, regardless of
   * tone — see card.css's .card rule (Anna: "bg white instead, soft
   * palette as border").
   */
  tone?: CardTone;
  /**
   * Documentation/demo use only — forces a visual state (hover/pressed)
   * without real interaction, so the sedge-design-system docs page can show every
   * state side by side. Never set this in real usage.
   */
  "data-state"?: "hover" | "pressed";
}

const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { variant = "default", interactive = false, tone, className, children, tabIndex, style, ...rest },
  ref
) {
  const toneStyle: CSSProperties | undefined = tone
    ? ({
        "--card-accent": `var(--${tone}-soft)`,
        "--card-accent-soft": `var(--${tone}-soft)`,
      } as CSSProperties)
    : undefined;

  return (
    <div
      ref={ref}
      // Interactive cards need to be keyboard-focusable since they use a
      // <div> rather than a native interactive element.
      tabIndex={interactive ? tabIndex ?? 0 : tabIndex}
      className={cx(
        "card",
        variant === "soft" && "card--soft",
        interactive && "card--interactive",
        interactive && "focus-ring",
        className
      )}
      style={{ ...toneStyle, ...style }}
      {...rest}
    >
      <div className="card-content">{children}</div>
    </div>
  );
});

export default Card;

export function CardEyebrow({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={cx("card-eyebrow", className)} {...rest}>
      {children}
    </span>
  );
}

export function CardHeading({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cx("card-heading", className)} {...rest}>
      {children}
    </h3>
  );
}

export function CardBody({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cx("card-body", className)} {...rest}>
      {children}
    </p>
  );
}

type CardActionCommonProps = {
  /** Set false for cases that want the label without the trailing arrow. */
  showArrow?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export type CardActionProps =
  | (CardActionCommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
  | (CardActionCommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined });

/**
 * The card's action row. Anna: "make all CTAs consistent pill button
 * with soft border" — every CardAction now renders the same outlined
 * pill (there's no more "text"/"pill" variant choice; card.css's
 * .card-action rule is the pill style directly). Renders an <a> when
 * `href` is passed, a <button type="button"> otherwise, so it works
 * equally for "go to this page" and "open a modal" cards without the
 * caller having to pick a different component. Color comes entirely
 * from --card-accent/--card-accent-soft (set by Card's `tone` prop) so
 * this never needs its own tone-specific variants.
 */
export function CardAction({
  showArrow = true,
  className,
  children,
  href,
  ...rest
}: CardActionProps) {
  const classes = cx("card-action", className);
  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight className="card-action-icon" aria-hidden="true" />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}
