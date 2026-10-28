import { CSSProperties, HTMLAttributes, forwardRef } from "react";
import { cx } from "../../lib/cx";
import { markerColor, type PaletteColor, type PaletteHue } from "./colorTokens";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Title marker color. A hue ("green") uses its bold shade; a full
   *  token ("green-soft") is used as is. Defaults to the page accent. */
  tone?: PaletteHue | PaletteColor;
}

/**
 * A plain, self-contained surface: cream, hairline border, 4px corners.
 * Matches the callout; the only color is the title marker, which follows
 * the page accent unless a tone is passed.
 */
const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { tone, className, style, children, ...rest },
  ref
) {
  const toneStyle = tone
    ? ({ "--card-marker": markerColor(tone) } as CSSProperties)
    : undefined;

  return (
    <div
      ref={ref}
      className={cx("card", className)}
      style={{ ...toneStyle, ...style }}
      {...rest}
    >
      {children}
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
