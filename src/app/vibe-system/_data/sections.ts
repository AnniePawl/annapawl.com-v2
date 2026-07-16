import type { LucideIcon } from "lucide-react";
import {
  LayoutGrid,
  Palette,
  CaseSensitive,
  Ruler,
  LayoutTemplate,
  Radius,
  Layers,
  Zap,
  Accessibility,
  SquareMousePointer,
  CreditCard,
  PanelsTopLeft,
  BadgeCheck,
  MessageSquareText,
  FormInput,
  Brain,
} from "lucide-react";

export type NavSection = {
  id: string;
  title: string;
  subheading?: string;
  description?: string;
  icon: LucideIcon;
};

// Order: intro, then philosophy (so the "why" lands before the specifics),
// then the two flashy foundations + the whole component library while
// attention is freshest, then the quieter token-level foundations for
// anyone who wants to go deeper.
export const SECTIONS: NavSection[] = [
  { id: "overview", title: "Overview", icon: LayoutGrid },
  { id: "approach", title: "Approach", icon: Brain },
  { id: "colors", title: "Colors", icon: Palette },
  { id: "typography", title: "Typography", icon: CaseSensitive },
  { id: "buttons", title: "Buttons", icon: SquareMousePointer },
  { id: "cards", title: "Cards", icon: CreditCard },
  { id: "modals", title: "Modals", icon: PanelsTopLeft },
  { id: "badges", title: "Badges", icon: BadgeCheck },
  { id: "tooltips", title: "Tooltips", icon: MessageSquareText },
  { id: "forms", title: "Forms", icon: FormInput },
  { id: "spacing", title: "Spacing", icon: Ruler },
  { id: "layout", title: "Layout", icon: LayoutTemplate },
  { id: "shape", title: "Shape", icon: Radius },
  { id: "elevation", title: "Elevation", icon: Layers },
  { id: "motion", title: "Motion", icon: Zap },
  { id: "accessibility", title: "Accessibility", icon: Accessibility },
];
