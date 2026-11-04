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
          description="A log of helpful frontend bits for those moments my brain blanks on syntax mid-keystroke. Organized my way: Quick examples, plus little notes to self from the mistakes that made things stick."
          shortDescription="Wee notes for when my brain blanks on syntax."
          eyebrow="Frontend"
          title="Field Notes"
          accent="var(--pink-bold)"
        />

        <FieldNotes />
      </PageShell>
      <SiteFooter accent="var(--sage-bold)" />
    </>
  );
}
