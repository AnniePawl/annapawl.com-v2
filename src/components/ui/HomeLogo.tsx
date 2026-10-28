import Link from "next/link";
import type { CSSProperties } from "react";
import { cx } from "../../lib/cx";
import { CLOVER_LEAF_PATHS } from "./Shape";

export interface HomeLogoColors {
  base?: string;
  hoverAccent?: string;
  northeast?: string;
  southeast?: string;
  southwest?: string;
  northwest?: string;
}

export const DEFAULT_HOME_LOGO_COLORS: HomeLogoColors = {
  northeast: "light-dark(var(--cherry-bold), var(--cherry-soft))",
  southeast: "var(--sky-bold)",
  southwest: "var(--sky-bold)",
  northwest: "var(--sky-bold)",
  hoverAccent: "var(--sky-bold)",
};

export default function HomeLogo({
  href = "/",
  label = "Return home",
  colors = DEFAULT_HOME_LOGO_COLORS,
  size = "2rem",
  previewState,
  className,
}: {
  href?: string;
  label?: string;
  colors?: HomeLogoColors;
  size?: string;
  previewState?: "hover";
  className?: string;
}) {
  const style = {
    "--home-logo-size": size,
    ...(colors.base ? { "--home-logo-base": colors.base } : {}),
    ...(colors.hoverAccent
      ? { "--home-logo-hover-accent": colors.hoverAccent }
      : {}),
    ...(colors.northeast ? { "--home-logo-ne": colors.northeast } : {}),
    ...(colors.southeast ? { "--home-logo-se": colors.southeast } : {}),
    ...(colors.southwest ? { "--home-logo-sw": colors.southwest } : {}),
    ...(colors.northwest ? { "--home-logo-nw": colors.northwest } : {}),
  } as CSSProperties;

  return (
    <Link
      href={href}
      aria-label={label}
      className={cx("home-logo focus-ring", className)}
      data-state={previewState}
      style={style}
    >
      <svg
        viewBox="0 0 200 200"
        className="home-logo-mark"
        aria-hidden="true"
      >
        {(["NE", "SE", "SW", "NW"] as const).map((leaf) => (
          <path
            key={leaf}
            className={`home-logo-leaf home-logo-leaf--${leaf.toLowerCase()}`}
            d={CLOVER_LEAF_PATHS[leaf]}
          />
        ))}
      </svg>
    </Link>
  );
}
