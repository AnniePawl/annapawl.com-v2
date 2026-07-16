import { HTMLAttributes, forwardRef } from "react";
import { cx } from "../../lib/cx";

type CardVariant = "default" | "soft";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  /** Adds hover/press affordances for cards that act as clickable targets. */
  interactive?: boolean;
  /**
   * Documentation/demo use only — forces a visual state (hover/pressed)
   * without real interaction, so the vibe-system docs page can show every
   * state side by side. Never set this in real usage.
   */
  "data-state"?: "hover" | "pressed";
}

const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { variant = "default", interactive = false, className, children, tabIndex, ...rest },
  ref
) {
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
      {...rest}
    >
      {children}
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
