import ContentPage, { Section } from "../components/ContentPage";
import { SITE } from "../../data/site";
import { CIVIL_RIGHTS_CONTACT, LANGUAGE_TAGLINES } from "../../data/languageNotice";

export const metadata = {
  title: "Nondiscrimination & Language Help",
  description: "NGU Wellness does not discriminate, and offers free language assistance and communication aids. Language help notices in English and 16 other languages.",
  alternates: { canonical: "/nondiscrimination" },
};

// Wording follows HHS OCR's sample Section 1557 notices (45 CFR 92.10 and 92.11); sources in
// data/languageNotice.js. Confirm the final wording with counsel.

const dayton = SITE.offices.find((o) => o.slug === "dayton");

const styles = `
  .ln-list { list-style: none; padding: 0 !important; margin: var(--s-sm) 0 0; }
  .ln-item { padding: var(--s-sm) 0; border-top: 1px solid var(--divider); max-width: 44rem; }
  .ln-item:first-child { border-top: none; }
  .ln-name { font-weight: 700; font-size: 1rem; margin-bottom: 0.25rem; }
  .ln-name span { font-weight: 400; color: var(--earth); }
  .ln-item p { margin: 0; }
`;

export default function NondiscriminationPage() {
  return (
    <ContentPage eyebrow="Your Rights" title="Nondiscrimination and language help." cta={false}>
      <style>{styles}</style>

      <Section title="Discrimination is against the law">
        <p>{SITE.legalName} complies with applicable Federal civil rights laws and does not discriminate on the basis of race, color, national origin, age, disability, or sex (consistent with the scope of sex discrimination described at 45 CFR § 92.101(a)(2)). {SITE.name} does not exclude people or treat them less favorably because of race, color, national origin, age, disability, or sex.</p>
        <p>{SITE.name}:</p>
        <ul>
          <li>Provides people with disabilities reasonable modifications and free appropriate auxiliary aids and services to communicate effectively with us, such as:
            <ul>
              <li>Qualified sign language interpreters</li>
              <li>Written information in other formats (large print, audio, accessible electronic formats, other formats)</li>
            </ul>
          </li>
          <li>Provides free language assistance services to people whose primary language is not English, which may include:
            <ul>
              <li>Qualified interpreters</li>
              <li>Information written in other languages</li>
            </ul>
          </li>
        </ul>
        <p>If you need reasonable modifications, appropriate auxiliary aids and services, or language assistance services, contact {CIVIL_RIGHTS_CONTACT.name} at <a href={SITE.phoneHref}>{SITE.phone}</a> or <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
      </Section>

      <Section title="How to file a grievance">
        <p>If you believe that {SITE.name} has failed to provide these services or discriminated in another way on the basis of race, color, national origin, age, disability, or sex, you can file a grievance with:</p>
        <p>
          {CIVIL_RIGHTS_CONTACT.name}<br />
          {SITE.legalName}, {dayton.street}, {dayton.city}, {dayton.state} {dayton.zip}<br />
          Phone and fax: <a href={SITE.phoneHref}>{SITE.phone}</a><br />
          Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </p>
        <p>You can file a grievance in person or by mail, fax, or email. If you need help filing a grievance, {CIVIL_RIGHTS_CONTACT.name} is available to help you.</p>
        <p>You can also file a civil rights complaint with the U.S. Department of Health and Human Services, Office for Civil Rights, electronically through the Office for Civil Rights Complaint Portal, available at <a href="https://ocrportal.hhs.gov/ocr/portal/lobby.jsf" target="_blank" rel="noopener noreferrer">ocrportal.hhs.gov/ocr/portal/lobby.jsf</a>, or by mail or phone at:</p>
        <p>
          U.S. Department of Health and Human Services<br />
          200 Independence Avenue, SW<br />
          Room 509F, HHH Building<br />
          Washington, D.C. 20201<br />
          1-800-368-1019, 800-537-7697 (TDD)
        </p>
        <p>Complaint forms are available at <a href="https://www.hhs.gov/ocr/office/file/index.html" target="_blank" rel="noopener noreferrer">hhs.gov/ocr/office/file</a>.</p>
      </Section>

      <Section title="Free language help">
        <p lang="en">ATTENTION: If you speak a language other than English, free language assistance services are available to you. Appropriate auxiliary aids and services to provide information in accessible formats are also available free of charge. Call <a href={SITE.phoneHref}>1-{SITE.phone}</a> or speak to your provider.</p>
        <ul className="ln-list">
          {LANGUAGE_TAGLINES.map((t) => (
            <li key={t.lang} className="ln-item">
              <div className="ln-name">{t.native} <span lang="en">({t.english})</span></div>
              <p lang={t.lang} dir={t.dir || "ltr"}>{t.text}</p>
            </li>
          ))}
        </ul>
      </Section>
    </ContentPage>
  );
}
