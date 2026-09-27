import Link from "next/link";
import ContentPage, { Section, People } from "../components/ContentPage";
import { visibleClinicians } from "../../data/clinicians";
import { SITE } from "../../data/site";

export const metadata = {
  title: "Online Therapy Anywhere in Ohio",
  description: "Secure telehealth therapy with licensed NGU Wellness therapists for anyone located in Ohio. Most insurance and Ohio Medicaid accepted.",
  alternates: { canonical: "/telehealth" },
};

export default function TelehealthPage() {
  return (
    <ContentPage
      eyebrow="Telehealth"
      title="Therapy from anywhere in Ohio."
      lead="Every NGU Wellness therapist offers secure video sessions to clients located in Ohio: the same therapists and the same care, from home, work, or wherever you feel comfortable."
    >
      <Section title="How it works">
        <ul>
          <li>Sessions happen through our secure client portal and work on a phone, tablet, or computer.</li>
          <li>You need to be located in Ohio during each session. Your therapist will confirm where you are at the start.</li>
          <li>Find a private spot with a steady internet connection.</li>
          <li>Insurance and Ohio Medicaid cover telehealth the same way they cover office visits for most plans. We check your benefits for free.</li>
        </ul>
        <p><a href={SITE.portalUrl} target="_blank" rel="noopener noreferrer">Go to the client portal</a></p>
      </Section>
      <Section title="Our therapists">
        <People people={visibleClinicians} />
      </Section>
      <Section title="Prefer to meet in person?">
        <p>We also see clients at our <Link href="/dayton">Dayton</Link> and <Link href="/rocky-river">Rocky River</Link> offices.</p>
      </Section>
    </ContentPage>
  );
}
