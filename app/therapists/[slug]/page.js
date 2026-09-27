import { notFound } from "next/navigation";
import TherapistProfile from "../TherapistProfile";
import { visibleClinicians, getClinician } from "../../../data/clinicians";
import { SITE } from "../../../data/site";
import { personSchema } from "../../../data/schema";

export function generateStaticParams() {
  return visibleClinicians.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const t = getClinician(slug);
  if (!t) return {};
  const where = t.office === "rocky-river" ? "Rocky River" : "Dayton";
  const title = `${t.name}, ${t.credentials} | Therapist in ${where}, Ohio`;
  const description = `${t.name} (${t.licenseTitle}) sees ${t.ages.split("·")[0].trim().toLowerCase()} in person in ${where} and by telehealth across Ohio. Focus areas: ${t.specialties.join(", ")}.`;
  return {
    title,
    description,
    alternates: { canonical: `/therapists/${t.slug}` },
    openGraph: { title, description, url: `${SITE.url}/therapists/${t.slug}`, images: [t.photo] },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const t = getClinician(slug);
  if (!t) notFound();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema(t)) }} />
      <TherapistProfile data={t} />
    </>
  );
}
