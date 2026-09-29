import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  HTMLAttributes,
  forwardRef,
} from "react";
import { ArrowRight } from "lucide-react";
import { cx } from "../../lib/cx";

type CardVariant = "outline" | "soft";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
}

const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { variant = "outline", className, children, ...rest },
  ref
) {
  return (
    <div
      ref={ref}
      className={cx("card", `card--${variant}`, className)}
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
    <span className={cx("card-eyebrow", "type-eyebrow", className)} {...rest}>
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

/** Renders an anchor when `href` is passed and a button otherwise. */
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
