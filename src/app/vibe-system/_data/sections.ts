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

export type SectionGroup = "Intro" | "Foundations" | "Components";

export const SECTION_GROUPS: SectionGroup[] = [
  "Intro",
  "Foundations",
  "Components",
];

export type NavSection = {
  id: string;
  title: string;
  subheading?: string;
  description?: string;
  icon: LucideIcon;
  group: SectionGroup;
};

// Order: Intro (the "why" before the specifics), then Foundations (the
// token-level building blocks — color, type, spacing, layout, shape,
// elevation, motion, accessibility), then Components (the whole component
// library, built on top of those foundations). Sidebar/mobile nav and the
// section headings in the main column both read this same grouping —
// keep new sections declared inside the right block rather than appended
// at the end.
export const SECTIONS: NavSection[] = [
  // Intro
  { id: "overview", title: "Overview", icon: LayoutGrid, group: "Intro" },
  { id: "approach", title: "Approach", icon: Brain, group: "Intro" },

  // Foundations
  { id: "colors", title: "Colors", icon: Palette, group: "Foundations" },
  {
    id: "typography",
    title: "Typography",
    icon: CaseSensitive,
    group: "Foundations",
  },
  { id: "spacing", title: "Spacing", icon: Ruler, group: "Foundations" },
  {
    id: "layout",
    title: "Layout",
    icon: LayoutTemplate,
    group: "Foundations",
  },
  { id: "shape", title: "Shape", icon: Radius, group: "Foundations" },
  { id: "elevation", title: "Elevation", icon: Layers, group: "Foundations" },
  { id: "motion", title: "Motion", icon: Zap, group: "Foundations" },
  {
    id: "accessibility",
    title: "Accessibility",
    icon: Accessibility,
    group: "Foundations",
  },

  // Components
  {
    id: "buttons",
    title: "Buttons",
    icon: SquareMousePointer,
    group: "Components",
  },
  { id: "cards", title: "Cards", icon: CreditCard, group: "Components" },
  {
    id: "modals",
    title: "Modals",
    icon: PanelsTopLeft,
    group: "Components",
  },
  { id: "badges", title: "Badges", icon: BadgeCheck, group: "Components" },
  {
    id: "tooltips",
    title: "Tooltips",
    icon: MessageSquareText,
    group: "Components",
  },
  { id: "forms", title: "Forms", icon: FormInput, group: "Components" },
];
