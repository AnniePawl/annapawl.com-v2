import { CSSProperties, HTMLAttributes, forwardRef } from "react";
import { cx } from "../../lib/cx";
import Shape, { type ShapeVariant } from "./Shape";

type CardVariant = "default" | "soft";

// Matches the brand palette's hue names (foundations/color.css) — each
// maps to that hue's "soft" tone as the card's background.
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
   * Optional decorative accent — one of the Shape variants, peeking out of
   * the bottom-right corner at low opacity. Purely visual (aria-hidden),
   * opt-in per card rather than automatic, since not every card wants the
   * extra texture (a dense grid of them would get noisy fast).
   */
  accent?: ShapeVariant;
  /**
   * Optional colored background — one of the brand palette's soft tones
   * (var(--{tone}-soft)). Overrides the variant's default background, on
   * both "default" and "soft" cards.
   */
  tone?: CardTone;
  /**
   * Documentation/demo use only — forces a visual state (hover/pressed)
   * without real interaction, so the vibe-system docs page can show every
   * state side by side. Never set this in real usage.
   */
  "data-state"?: "hover" | "pressed";
}

const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { variant = "default", interactive = false, accent, tone, className, children, tabIndex, style, ...rest },
  ref
) {
  const toneStyle: CSSProperties | undefined = tone
    ? ({ "--card-bg": `var(--${tone}-soft)` } as CSSProperties)
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
      {accent && <Shape variant={accent} className="card-accent" />}
      <div className="card-content">{children}</div>
    </div>
  );
});

export default Card;

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
