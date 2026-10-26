import type { PaletteColor } from "../../components/ui/colorTokens";
import type { ShapeVariant } from "./_components/GeometricShape";

/**
 * Individual shape section
 *   steps   -- how the shape gets built, one property at a time
 *   anatomy -- (trickier shapes only) the finished shape with each part
 *              in its own color, plus a key
 *   code    -- the finished CSS, simplified for readers
 */
export type LessonStep = { demo: string; caption: string; property: string };
/** "fill" = the shape's own color from shapes.ts */
export type AnatomyKey = { color: PaletteColor | "fill"; label: string };
export type Lesson = {
  steps: LessonStep[];
  anatomy?: { demo: string; key: AnatomyKey[] };
  code: string;
};

export const LESSONS: Record<ShapeVariant, Lesson> = {
  circle: {
    steps: [
      { demo: "circle-1", caption: "A square", property: "width = height" },
      { demo: "circle-2", caption: "Round the corners", property: "border-radius: 25%" },
      { demo: "circle-3", caption: "All the way", property: "border-radius: 50%" },
    ],
    code: `
.circle {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #F472B6;
}`,
  },

  square: {
    steps: [
      { demo: "square-1", caption: "An empty div", property: "no size yet" },
      { demo: "square-2", caption: "Give it a size", property: "width + height" },
      { demo: "square-3", caption: "Fill it in", property: "background" },
    ],
    code: `
.square {
  width: 100px;
  height: 100px;
  background: #57BC92;
}`,
  },

  triangle: {
    steps: [
      { demo: "triangle-1", caption: "Four thick borders", property: "width: 0; height: 0" },
      { demo: "triangle-2", caption: "Drop the top", property: "no border-top" },
      { demo: "triangle-3", caption: "Hide the sides", property: "transparent" },
    ],
    anatomy: {
      demo: "triangle-1",
      key: [
        { color: "marigold-bold", label: "border-top" },
        { color: "coral-bold", label: "border-right" },
        { color: "fill", label: "border-bottom (the triangle)" },
        { color: "teal-bold", label: "border-left" },
      ],
    },
    code: `
.triangle {
  width: 0;
  height: 0;
  border-left: 60px solid transparent;
  border-right: 60px solid transparent;
  border-bottom: 100px solid #7F9BE6;
}`,
  },

  pentagon: {
    steps: [
      { demo: "pentagon-1", caption: "A trapezoid body", property: "border-top + clear sides" },
      { demo: "pentagon-2", caption: "A triangle roof", property: "::before" },
      { demo: "pentagon-3", caption: "Stack them", property: "position: absolute" },
    ],
    anatomy: {
      demo: "pentagon-anatomy",
      key: [
        { color: "fill", label: "the div: a trapezoid" },
        { color: "lilac-bold", label: "::before: a triangle on top" },
      ],
    },
    code: `
.pentagon {
  position: relative;
  width: 54px;
  border-style: solid;
  border-width: 50px 18px 0;
  border-color: #F5BF46 transparent;
}

.pentagon::before {
  content: "";
  position: absolute;
  top: -85px;
  left: -18px;
  border-style: solid;
  border-width: 0 45px 35px;
  border-color: transparent transparent #F5BF46;
}`,
  },

  oval: {
    steps: [
      { demo: "oval-1", caption: "A tall rectangle", property: "width < height" },
      { demo: "oval-2", caption: "Round the corners", property: "border-radius: 25%" },
      { demo: "oval-3", caption: "All the way", property: "border-radius: 50%" },
    ],
    code: `
.oval {
  width: 70px;
  height: 120px;
  border-radius: 50%;
  background: #FE7043;
}`,
  },

  trapezoid: {
    steps: [
      { demo: "trapezoid-1", caption: "Three borders", property: "height: 0" },
      { demo: "trapezoid-2", caption: "Hide the sides", property: "transparent" },
    ],
    anatomy: {
      demo: "trapezoid-1",
      key: [
        { color: "fill", label: "border-bottom (the trapezoid)" },
        { color: "coral-bold", label: "border-left" },
        { color: "marigold-bold", label: "border-right" },
      ],
    },
    code: `
.trapezoid {
  width: 80px;
  height: 0;
  border-bottom: 70px solid #2BA3A0;
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
}`,
  },

  octagon: {
    steps: [
      { demo: "octagon-1", caption: "A square", property: "the div" },
      { demo: "octagon-2", caption: "Paint the corners", property: "::before + ::after" },
      { demo: "octagon-3", caption: "Match the background", property: "corners disappear" },
    ],
    anatomy: {
      demo: "octagon-2",
      key: [
        { color: "fill", label: "the div: a square" },
        { color: "coral-bold", label: "corner wedges, painted the background color" },
      ],
    },
    code: `
.octagon {
  position: relative;
  width: 100px;
  height: 100px;
  background: #B985EB;
}

.octagon::before,
.octagon::after {
  content: "";
  position: absolute;
  left: 0;
  width: 42px;  /* 100px minus the two 29px borders */
  border-left: 29px solid #C4EBD7;  /* background color */
  border-right: 29px solid #C4EBD7;
}

.octagon::before {
  top: 0;
  border-bottom: 29px solid #B985EB;
}

.octagon::after {
  bottom: 0;
  border-top: 29px solid #B985EB;
}`,
  },

  parallelogram: {
    steps: [
      { demo: "parallelogram-1", caption: "A rectangle", property: "the div" },
      { demo: "parallelogram-2", caption: "Lean it over", property: "transform: skew(20deg)" },
    ],
    code: `
.parallelogram {
  width: 120px;
  height: 70px;
  background: #5088EA;
  transform: skew(20deg);
}`,
  },

  rectangle: {
    steps: [
      { demo: "rectangle-1", caption: "A square", property: "width = height" },
      { demo: "rectangle-2", caption: "Stretch one side", property: "width ≠ height" },
    ],
    code: `
.rectangle {
  width: 70px;
  height: 120px;
  background: #2D6144;
}`,
  },

  hexagon: {
    steps: [
      { demo: "hexagon-1", caption: "A wide rectangle", property: "the div" },
      { demo: "hexagon-2", caption: "A triangle on top", property: "::before" },
      { demo: "hexagon-3", caption: "And one below", property: "::after" },
    ],
    anatomy: {
      demo: "hexagon-anatomy",
      key: [
        { color: "fill", label: "the div: a rectangle" },
        { color: "coral-bold", label: "::before: triangle on top" },
        { color: "marigold-bold", label: "::after: triangle below" },
      ],
    },
    code: `
.hexagon {
  position: relative;
  width: 104px;
  height: 60px;
  background: #D91F1F;
}

.hexagon::before,
.hexagon::after {
  content: "";
  position: absolute;
  left: 0;
  border-left: 52px solid transparent;
  border-right: 52px solid transparent;
}

.hexagon::before {
  bottom: 100%;
  border-bottom: 30px solid #D91F1F;
}

.hexagon::after {
  top: 100%;
  border-top: 30px solid #D91F1F;
}`,
  },

  star: {
    steps: [
      { demo: "star-1", caption: "One wide triangle", property: "rotate(35deg)" },
      { demo: "star-2", caption: "A mirror twin", property: "::after" },
      { demo: "star-3", caption: "A point on top", property: "::before" },
    ],
    anatomy: {
      demo: "star-anatomy",
      key: [
        { color: "fill", label: "the div: a wide triangle" },
        { color: "coral-bold", label: "::after: its mirror" },
        { color: "marigold-bold", label: "::before: the top point" },
      ],
    },
    code: `
.star {
  position: relative;
  width: 0;
  height: 0;
  margin: 50px 0;
  border-left: 100px solid transparent;
  border-right: 100px solid transparent;
  border-bottom: 70px solid #8B87F5;
  transform: rotate(35deg);
}

.star::before {
  content: "";
  position: absolute;
  top: -45px;
  left: -65px;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-bottom: 80px solid #8B87F5;
  transform: rotate(-35deg);
}

.star::after {
  content: "";
  position: absolute;
  top: 3px;
  left: -105px;
  border-left: 100px solid transparent;
  border-right: 100px solid transparent;
  border-bottom: 70px solid #8B87F5;
  transform: rotate(-70deg);
}`,
  },

  heart: {
    steps: [
      { demo: "heart-1", caption: "A tilted square", property: "rotate(-45deg)" },
      { demo: "heart-2", caption: "Add a circle", property: "::before" },
      { demo: "heart-3", caption: "Add another", property: "::after" },
    ],
    anatomy: {
      demo: "heart-anatomy",
      key: [
        { color: "fill", label: "the div: a tilted square" },
        { color: "pink-bold", label: "::before: a circle" },
        { color: "coral-bold", label: "::after: a circle" },
      ],
    },
    code: `
.heart {
  position: relative;
  width: 60px;
  height: 60px;
  background: #6F1B31;
  transform: rotate(-45deg);
}

.heart::before,
.heart::after {
  content: "";
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #6F1B31;
}

.heart::before {
  top: -30px;
  left: 0;
}

.heart::after {
  top: 0;
  left: 30px;
}`,
  },
};
