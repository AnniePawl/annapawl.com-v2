import type { LucideIcon } from "lucide-react";
import {
  LayoutGrid,
  Palette,
  CaseSensitive,
  Ruler,
  Radius,
  Layers,
  Accessibility,
  SquareMousePointer,
  CreditCard,
  PanelsTopLeft,
  BadgeCheck,
  MessageSquareText,
  Brain,
} from "lucide-react";

export type NavSection = {
  id: string;
  title: string;
  subheading?: string;
  description?: string;
  icon: LucideIcon;
};

export const SECTIONS: NavSection[] = [
  { id: "overview", title: "Overview", icon: LayoutGrid },
  { id: "colors", title: "Colors", icon: Palette },
  { id: "typography", title: "Typography", icon: CaseSensitive },
  { id: "spacing", title: "Spacing", icon: Ruler },
  { id: "radius", title: "Radius", icon: Radius },
  { id: "elevation", title: "Elevation", icon: Layers },
  { id: "accessibility", title: "Accessibility", icon: Accessibility },
  { id: "buttons", title: "Buttons", icon: SquareMousePointer },
  { id: "cards", title: "Cards", icon: CreditCard },
  { id: "modals", title: "Modals", icon: PanelsTopLeft },
  { id: "badges", title: "Badges", icon: BadgeCheck },
  { id: "tooltips", title: "Tooltips", icon: MessageSquareText },
  { id: "approach", title: "Approach", icon: Brain }, // fixed spelling
];
