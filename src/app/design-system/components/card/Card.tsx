import { forwardRef } from "react";

/* simple class merge helper */
function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/* =========================
   Card (root)
   ========================= */

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "soft";
  interactive?: boolean;
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", interactive = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cx(
          "ds-card",
          variant === "soft" && "ds-card--soft",
          interactive && "ds-card--interactive",
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";

/* =========================
   Card subcomponents
   ========================= */

export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cx("mb-[var(--space-4)]", className)}
      {...props}
    />
  );
}

export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cx(
        "text-[var(--text-lg)] font-[var(--font-semibold)] leading-tight",
        className
      )}
      {...props}
    />
  );
}

export function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cx(
        "mt-[var(--space-2)] text-[var(--text-sm)] leading-[var(--leading-relaxed)] text-zinc-600",
        className
      )}
      {...props}
    />
  );
}

export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cx("mt-[var(--space-4)]", className)}
      {...props}
    />
  );
}
