import { HTMLAttributes, forwardRef } from "react";
import { cx } from "../../lib/cx";

export type CardProps = HTMLAttributes<HTMLDivElement>;

/**
 * A plain, self-contained surface: cream, hairline border, 4px corners.
 * Matches the callout; the only color is the title marker (page accent).
 */
const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { className, children, ...rest },
  ref
) {
  return (
    <div ref={ref} className={cx("card", className)} {...rest}>
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
