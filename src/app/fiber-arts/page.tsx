import PageShell from "../../components/layout/PageShell";
import PageHeader from "../../components/layout/PageHeader";
import HomeLogo from "../../components/ui/HomeLogo";
import FavoritesFeature from "./FavoritesFeature";
import SwatchBrowser from "./SwatchBrowser";
import { FIBER_TYPES, FIBER_TYPE_ORDER, PIECES } from "./data";
import "./fiber-arts.css";

export const metadata = {
  title: "Fiber arts — Anna Pawl",
  description: "Embroidery, needlepoint, and cross stitch, made by hand.",
};

export default function FiberArtsPage() {
  const favorites = PIECES.filter((piece) => piece.favorite);
  const rest = PIECES.filter((piece) => !piece.favorite);

  const counts = FIBER_TYPE_ORDER.map((type) => ({
    label: FIBER_TYPES[type].label.toLowerCase(),
    count: PIECES.filter((piece) => piece.type === type).length,
  })).filter(({ count }) => count > 0);

  return (
    <PageShell className="fiber-page" accent="var(--plum-bold)">
      <PageHeader
        utilityStart={
          <HomeLogo
            colors={{
              northeast: "var(--marigold-bold)",
              southeast: "var(--plum-bold)",
              southwest: "var(--plum-bold)",
              northwest: "var(--plum-bold)",
              hoverAccent: "var(--plum-bold)",
            }}
            size="1.75rem"
          />
        }
        descriptionTitle="Made by hand"
        description="Ornaments, hoops, and small gifts."
        eyebrow="Digital garden"
        title="Fiber arts"
        accent="var(--page-accent)"
        lede={
          <>
            Embroidery, needlepoint, and cross stitch: ornaments, hoops, and
            small gifts made by hand.{" "}
            <span className="post-header-lede-muted">
              A few favorites up top, and the rest of the pile below.
            </span>
          </>
        }
        detailsStart="Ongoing collection"
        postTags={
          <span>
            {PIECES.length} pieces
            {counts.length > 1
              ? counts.map(({ label, count }) => ` · ${count} ${label}`).join("")
              : null}
          </span>
        }
      />

      <div className="fiber-body">
        <FavoritesFeature pieces={favorites} />
        <SwatchBrowser pieces={rest} />
      </div>
    </PageShell>
  );
}
