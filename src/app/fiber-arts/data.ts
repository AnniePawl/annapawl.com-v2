export type FiberType = "embroidery" | "needlepoint" | "cross-stitch";

export interface FiberPiece {
  /** Path under /public. */
  src: string;
  title: string;
  type: FiberType;
  year?: number;
  /** Favorites are shown big at the top of the page. */
  favorite?: boolean;
  story?: string;
  materials?: string;
}

export const FIBER_TYPES: Record<FiberType, { label: string }> = {
  embroidery: { label: "Embroidery" },
  needlepoint: { label: "Needlepoint" },
  "cross-stitch": { label: "Cross stitch" },
};

export const FIBER_TYPE_ORDER: FiberType[] = [
  "embroidery",
  "needlepoint",
  "cross-stitch",
];

const embroidery = (n: number, title: string, extra: Partial<FiberPiece> = {}): FiberPiece => ({
  src: `/fiber-arts/embroidery/sew${n}.webp`,
  title,
  type: "embroidery",
  ...extra,
});

export const PIECES: FiberPiece[] = [
  // Favorites 
  embroidery(17, "Beetle"),
  embroidery(13, "Hamsa"),
  embroidery(6, "Rose under glass"),
  embroidery(19, "Poppy"),
  embroidery(3, "Cortez sneaker"),

  // The rest of the pile
  embroidery(1, "Cow in a hoop"),
  embroidery(2, "Christmas pudding",  { favorite: true }),
  embroidery(4, "Stand mixer"),
  embroidery(5, "Cat heart"),
  embroidery(7, "Cactus garden"),
  embroidery(8, "Jellyfish"),
  embroidery(9, "Little red car", { favorite: true }) ,
  embroidery(10, "Bamboo"),
  embroidery(11, "Music note"),
  embroidery(12, "Polar bear", { favorite: true }),
  embroidery(14, "Mermaid", { favorite: true }),
  embroidery(15, "Guitar"),
  embroidery(16, "Cookie tin"),
  embroidery(18, "Mittens"),
  embroidery(20, "Pink convertible", { favorite: true }),
  embroidery(21, "Donut & popsicle"),
  embroidery(22, "Droid"),
  embroidery(23, "Ghost"),
  embroidery(24, "Pumpkin cozy"),
  embroidery(25, "Frog"),
  embroidery(26, "Gingerbread house"),
  embroidery(27, "Mushroom", { favorite: true }),
  embroidery(28, "Otters"),
  embroidery(29, "Eye charm"),
  embroidery(30, "Golden Gate"),
  embroidery(31, "Monster"),
  embroidery(32, "Pino"),
  embroidery(33, "Moth"),
  embroidery(34, "Lavender"),
  embroidery(35, "Fried egg"),
  embroidery(36, "Patchwork"),
];
