import ContentPage, { Section } from "../components/ContentPage";
import { SITE } from "../../data/site";

export const metadata = {
  title: "Your Right to a Good Faith Estimate",
  description: "Under the No Surprises Act, clients who don't have insurance or aren't using it can get a Good Faith Estimate of therapy costs from NGU Wellness.",
  alternates: { canonical: "/good-faith-estimate" },
};

export default function GfePage() {
  return (
    <ContentPage eyebrow="No Surprises Act" title="Your right to a Good Faith Estimate." cta={false}>
      <Section title="Right to Receive a Good Faith Estimate of Expected Charges">
        <p><strong>You have the right to receive a &ldquo;Good Faith Estimate&rdquo; explaining how much your health care will cost.</strong></p>
        <p>Under the law, health care providers need to give patients who don&apos;t have certain types of health care coverage, or who are not using certain types of health care coverage, an estimate of their bill for health care items and services before those items or services are provided.</p>
        <ul>
          <li>You have the right to receive a Good Faith Estimate for the total expected cost of any health care items or services upon request or when scheduling such items or services. This includes related costs like medical tests, prescription drugs, equipment, and hospital fees.</li>
          <li>If you schedule a health care item or service at least 3 business days in advance, make sure your health care provider or facility gives you a Good Faith Estimate in writing within 1 business day after scheduling. If you schedule a health care item or service at least 10 business days in advance, make sure your health care provider or facility gives you a Good Faith Estimate in writing within 3 business days after scheduling. You can also ask any health care provider or facility for a Good Faith Estimate before you schedule an item or service. If you do, make sure the health care provider or facility gives you a Good Faith Estimate in writing within 3 business days after you ask.</li>
          <li>If you receive a bill that is at least $400 more for any provider or facility than your Good Faith Estimate from that provider or facility, you can dispute the bill.</li>
          <li>Make sure to save a copy or picture of your Good Faith Estimate and the bill.</li>
        </ul>
        <p>For questions or more information about your right to a Good Faith Estimate, visit <a href="https://www.cms.gov/nosurprises/consumers" target="_blank" rel="noopener noreferrer">www.cms.gov/nosurprises/consumers</a>, email FederalPPDRQuestions@cms.hhs.gov, or call 1-800-985-3059.</p>
      </Section>
      <Section title="Asking NGU Wellness for an estimate">
        <p>Ask for your Good Faith Estimate when you schedule, or any time before. Call or text {SITE.phone} or email <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. Our self-pay rates are listed on the Insurance &amp; Fees page.</p>
      </Section>
    </ContentPage>
  );
}
