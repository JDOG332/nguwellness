import Link from "next/link";
import ContentPage, { Section } from "../components/ContentPage";
import { FAQ } from "../../data/faq";

export const metadata = {
  title: "Frequently Asked Questions",
  description: "Answers about getting started, insurance, cost, telehealth, session length, ages served, and cancellations at NGU Wellness.",
  alternates: { canonical: "/faq" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function FaqPage() {
  return (
    <ContentPage eyebrow="FAQ" title="Questions people ask us." lead="Can't find your answer? Call or text us. We're glad to help.">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Section>
        <dl className="cp-faq">
          {FAQ.map((f) => (
            <div key={f.q}>
              <dt>{f.q}</dt>
              <dd>{f.a}</dd>
            </div>
          ))}
        </dl>
        <p className="cp-note" style={{ marginTop: "2rem" }}>
          More detail: <Link href="/insurance">Insurance &amp; Fees</Link> · <Link href="/privacy-notice">Notice of Privacy Practices</Link> · <Link href="/telehealth">Telehealth</Link>
        </p>
      </Section>
    </ContentPage>
  );
}
