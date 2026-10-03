import {
  CSSProperties,
  HTMLAttributes,
  forwardRef,
} from "react";
import { cx } from "../../lib/cx";
import type { PaletteColor } from "./colorTokens";

type CardVariant = "outline" | "filled";

export type CardTone = {
  background?: PaletteColor;
  foreground?: PaletteColor;
  border?: PaletteColor;
};

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  tone?: CardTone;
}

const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { variant = "outline", tone, className, children, style, ...rest },
  ref
) {
  const toneStyle = tone
    ? ({
        ...(tone.background && {
          "--card-background": `var(--${tone.background})`,
        }),
        ...(tone.foreground && {
          "--card-foreground": `var(--${tone.foreground})`,
        }),
        ...(tone.border && {
          "--card-border": `var(--${tone.border})`,
        }),
      } as CSSProperties)
    : undefined;

  return (
    <div
      ref={ref}
      className={cx("card", `card--${variant}`, className)}
      style={{ ...toneStyle, ...style }}
      {...rest}
    >
      <div className="card-content">{children}</div>
    </div>
  );
});

export default Card;

export function CardTitle({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cx("card-title", className)} {...rest}>
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
