import ContentPage, { Section } from "../components/ContentPage";
import { SITE } from "../../data/site";

export const metadata = {
  title: "Notice of Privacy Practices",
  description: "How NGU Wellness may use and share your health information, and your rights under HIPAA.",
  alternates: { canonical: "/privacy-notice" },
};

// PRE-LAUNCH: replace public/docs/notice-of-privacy-practices.pdf with the updated notice from the
// client paperwork (same version, same effective date), then delete the draft banner below.
const DRAFT = true;

export default function PrivacyNoticePage() {
  return (
    <ContentPage eyebrow="HIPAA" title="Notice of Privacy Practices." lead="This notice describes how medical information about you may be used and disclosed and how you can get access to this information. Please review it carefully." cta={false}>
      {DRAFT && <div className="cp-draft">Preview only: this page will post the updated notice from our client paperwork, with its effective date, before the site goes live.</div>}
      <Section title="Read the full notice">
        <p><a href="/docs/notice-of-privacy-practices.pdf" target="_blank" rel="noopener noreferrer">Notice of Privacy Practices (PDF)</a></p>
        <p>You can ask for a paper copy at any time, at either office or by contacting us.</p>
      </Section>
      <Section title="Your rights, in brief">
        <ul>
          <li>Get a copy of your paper or electronic record</li>
          <li>Ask us to correct your record</li>
          <li>Ask us to contact you in a specific way, or to limit what we share</li>
          <li>Get a list of those with whom we&apos;ve shared your information</li>
          <li>Choose someone to act for you</li>
          <li>File a complaint if you believe your privacy rights have been violated. We will not retaliate against you for filing a complaint.</li>
        </ul>
      </Section>
      <Section title="Questions or complaints">
        <p>Contact our Privacy Official, Nicole Walton, at <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or {SITE.phone}. You can also file a complaint with the U.S. Department of Health and Human Services Office for Civil Rights at <a href="https://www.hhs.gov/ocr/complaints" target="_blank" rel="noopener noreferrer">www.hhs.gov/ocr/complaints</a> or 1-877-696-6775.</p>
      </Section>
    </ContentPage>
  );
}
