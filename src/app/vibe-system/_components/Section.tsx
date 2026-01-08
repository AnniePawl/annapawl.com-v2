import type { LucideIcon } from "lucide-react";
import { cx } from "./cx";

export default function Section({
  id,
  heading,
  subheading,
  icon: Icon,
  description,
  children,
}: {
  id: string;
  heading: string;
  subheading?: string;
  icon: LucideIcon;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex flex-col">
        <h1 className="flex items-center gap-3">
          <Icon className="h-8 w-8 text-zinc-900" aria-hidden="true" />
          {heading}
        </h1>
        {subheading ? <h2 className="mb-5">{subheading}</h2> : null}
      </div>

      <div
        className={cx(
          "ml-3 border-l border-zinc-200 pl-6",
          "[&_p]:max-w-3xl",
          "[&_p]:text-base",
          "[&_p]:leading-relaxed",
          "[&_p]:text-zinc-600",
          "[&_p]:mb-6",
          "[&_p:last-child]:mb-0"
        )}
      >
        {description && <p>{description}</p>}
        {children}
      </div>
    </section>
  );
}
