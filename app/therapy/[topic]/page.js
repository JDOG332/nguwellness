import { notFound } from "next/navigation";
import Link from "next/link";
import ContentPage, { Section, People } from "../../components/ContentPage";
import { TOPICS } from "../../../data/topics";
import { visibleClinicians } from "../../../data/clinicians";

export function generateStaticParams() {
  return TOPICS.map((t) => ({ topic: t.slug }));
}

export async function generateMetadata({ params }) {
  const { topic } = await params;
  const t = TOPICS.find((x) => x.slug === topic);
  if (!t) return {};
  return {
    title: `${t.name} Therapy in Dayton, Rocky River & Ohio Telehealth`,
    description: t.lead,
    alternates: { canonical: `/therapy/${t.slug}` },
  };
}

export default async function TopicPage({ params }) {
  const { topic } = await params;
  const t = TOPICS.find((x) => x.slug === topic);
  if (!t) notFound();
  const people = visibleClinicians.filter(t.match);
  return (
    <ContentPage eyebrow={t.name} title={t.title} lead={t.lead}>
      <Section title="How therapy helps">
        {t.body.map((p) => <p key={p}>{p}</p>)}
      </Section>
      <Section title="Therapists who work with this">
        <People people={people} />
        {t.slug === "couples" && (() => {
          const familyOnly = visibleClinicians.filter((c) => c.family && !c.couples);
          return familyOnly.length > 0 && (
            <p className="cp-note" style={{ marginTop: "1.5rem" }}>
              Family therapy (not couples) is also available with{" "}
              {familyOnly.map((c, i) => (
                <span key={c.slug}>{i > 0 && (i === familyOnly.length - 1 ? " and " : ", ")}<Link href={`/therapists/${c.slug}`}>{c.name}</Link></span>
              ))}.
            </p>
          );
        })()}
        <p className="cp-note" style={{ marginTop: "1.5rem" }}>Availability changes often. Tell us who you&apos;d like to see, or ask us to match you, and we&apos;ll reply with the soonest option. <Link href="/insurance">Insurance &amp; fees</Link></p>
      </Section>
    </ContentPage>
  );
}
