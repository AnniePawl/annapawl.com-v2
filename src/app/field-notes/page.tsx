import TextLink from "../../components/ui/TextLink";
import PageShell from "../../components/layout/PageShell";
import PageHeader from "../../components/layout/PageHeader";
import SiteFooter from "../../components/layout/SiteFooter/SiteFooter";
import HomeLogo from "../../components/ui/HomeLogo";
import FieldNotes from "./_components/FieldNotes";
import "./field-notes.css";

export const metadata = {
  title: "Field Notes — Anna Pawl",
  description:
    "Quick notes on the frontend things I keep looking up: DOM, JavaScript, accessibility, React and CSS.",
};

export default function FieldNotesPage() {
  return (
    <>
      <PageShell className="field-notes-page">
        <PageHeader
          utilityStart={
            <HomeLogo
              colors={{
                northeast: "var(--iris-bold)",
                southeast: "var(--pink-bold)",
                southwest: "var(--pink-bold)",
                northwest: "var(--pink-bold)",
                hoverAccent: "var(--pink-bold)",
              }}
              size="1.75rem"
            />
          }
          descriptionTitle="My Tiny Web Reference"
          description="A personal reference for when I know what I’m trying to do but the syntax has other plans. With the occasional cheese reference."
          shortDescription="For when I know what I’m trying to do but the syntax has other plans."
          eyebrow="Frontend"
          title="Field Notes"
          accent="var(--pink-bold)"
          detailsStart={
            <>
              <span className="fn-details-collection">Ongoing collection · </span>
              Updated Nov 2026
            </>
          }
          postTags={
            <TextLink href="#where-i-learn" tone="pink-bold">
              Where I learn ↓
            </TextLink>
          }
          lede={
            <>
              Wee notes to self from the frontend trenches.{" "}
              <br />
              <span className="post-header-lede-muted">
                Useful patterns, quick examples, and lessons from trial and error.
              </span>
            </>
          }
        />

        <FieldNotes />
      </PageShell>
      <SiteFooter accent="var(--pink-bold)" />
    </>
  );
}
