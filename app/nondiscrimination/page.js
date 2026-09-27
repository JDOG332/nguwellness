import ContentPage, { Section } from "../components/ContentPage";
import { SITE } from "../../data/site";

export const metadata = {
  title: "Nondiscrimination & Language Help",
  description: "NGU Wellness does not discriminate, and offers free language assistance and communication aids.",
  alternates: { canonical: "/nondiscrimination" },
};

// PRE-LAUNCH: replace with HHS's sample Section 1557 notices (English + taglines in the top 15
// languages spoken in Ohio), then confirm the final wording with counsel.
const DRAFT = true;

export default function NondiscriminationPage() {
  return (
    <ContentPage eyebrow="Your Rights" title="Nondiscrimination and language help." cta={false}>
      {DRAFT && <div className="cp-draft">Preview only: final wording follows HHS&apos;s sample notices and counsel review before launch.</div>}
      <Section title="Nondiscrimination">
        <p>{SITE.legalName} complies with applicable federal civil rights laws and does not discriminate on the basis of race, color, national origin, age, disability, or sex.</p>
      </Section>
      <Section title="Free language and communication help">
        <p>We provide free help so you can communicate with us, such as qualified interpreters, written information in other languages, and information in other formats like large print. To ask for help, call or text {SITE.phone} or email <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
      </Section>
      <Section title="Concerns">
        <p>If you believe we failed to provide these services or discriminated in another way, contact our Privacy Official, Nicole Walton, at {SITE.email} or {SITE.phone}. You can also file a civil rights complaint with the U.S. Department of Health and Human Services Office for Civil Rights at <a href="https://ocrportal.hhs.gov/ocr/portal/lobby.jsf" target="_blank" rel="noopener noreferrer">ocrportal.hhs.gov</a> or 1-800-368-1019.</p>
      </Section>
    </ContentPage>
  );
}
