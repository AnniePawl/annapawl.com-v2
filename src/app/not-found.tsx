import Link from "next/link";
import PageShell from "../components/layout/PageShell";
import PageHeader from "../components/layout/PageHeader";
import SiteFooter from "../components/layout/SiteFooter/SiteFooter";
import HomeLogo from "../components/ui/HomeLogo";
import "./not-found.css";

export const metadata = {
  title: "Nothing growing here — Anna Pawl",
};

export default function NotFound() {
  return (
    <div className="not-found">
      <PageShell className="not-found-page" accent="var(--red-bold)">
        <PageHeader
          utilityStart={
            <HomeLogo
              colors={{
                northeast: "transparent",
                southeast: "transparent",
                southwest: "transparent",
                northwest: "transparent",
                hoverAccent: "transparent",
              }}
              size="1.75rem"
            />
          }
          descriptionTitle="Lost in the garden"
          description="Even the best gardens have some unmarked paths."
          eyebrow="404"
          title="Nothing growing here"
          accent="var(--red-bold)"
          lede="This corner of the garden is still just dirt—or you’ve wandered off the path."
          detailsStart="Page not found"
          postTags={
            <Link href="/" className="post-end-link focus-ring">
              <span className="post-end-label">
                Back to the garden
                <span className="post-end-arrow" aria-hidden="true">→</span>
              </span>
            </Link>
          }
        />
      </PageShell>
      <SiteFooter accent="var(--red-bold)" />
    </div>
  );
}
