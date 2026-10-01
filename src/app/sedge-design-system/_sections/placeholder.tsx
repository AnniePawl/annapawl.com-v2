import type { LucideIcon } from "lucide-react";
import Section from "../_components/Section";

export default function PlaceholderSection({
  id,
  heading,
  icon,
  children,
}: {
  id: string;
  heading: string;
  icon: LucideIcon;
  children?: React.ReactNode;
}) {
  return (
    <Section id={id} heading={heading} icon={icon}>
      {children ?? (
        <p className="text-[var(--text-secondary)]">
          Coming soon — I’ll document this once the pattern is solid in the UI.
        </p>
      )}
    </Section>
  );
}
