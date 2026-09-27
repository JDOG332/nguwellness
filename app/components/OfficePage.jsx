import Link from "next/link";
import ContentPage, { Section, People } from "./ContentPage";
import { visibleClinicians } from "../../data/clinicians";
import { SITE } from "../../data/site";
import { officeSchema } from "../../data/schema";

export default function OfficePage({ slug, lead, nearby }) {
  const o = SITE.offices.find((x) => x.slug === slug);
  const here = visibleClinicians.filter((t) => t.office === slug);
  return (
    <ContentPage eyebrow={`${o.name} Office`} title={`Therapy in ${o.name}, Ohio.`} lead={lead}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(officeSchema(slug)) }} />
      <Section title="Visit us">
        <p><strong>{SITE.name}</strong><br />{o.street}<br />{o.city}, {o.state} {o.zip}</p>
        <p><a href={o.mapUrl} target="_blank" rel="noopener noreferrer">Get directions</a> · <a href={SITE.phoneHref}>{SITE.phone}</a> · <a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
        <p className="cp-note">Appointment times vary by therapist. Serving {nearby}, and all of Ohio by <Link href="/telehealth">telehealth</Link>.</p>
      </Section>
      <Section title={`Therapists who see clients in ${o.name}`}>
        <People people={here} />
      </Section>
      <Section title="Insurance">
        <p>We accept most major insurance, every Ohio Medicaid plan, several Medicare Advantage plans, and some EAPs, and we check your benefits for free. See <Link href="/insurance">Insurance &amp; Fees</Link> for the full list and self-pay rates.</p>
      </Section>
    </ContentPage>
  );
}
