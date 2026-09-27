// Structured data (schema.org JSON-LD) so search engines and AI tools can read the practice's
// key facts. Built from the same data files as the pages, so it never drifts from them.
import { SITE } from "./site";

const ORG_ID = `${SITE.url}/#organization`;

function clinicSchema(office) {
  return {
    "@type": "MedicalClinic",
    "@id": `${SITE.url}/${office.slug}#clinic`,
    name: `${SITE.name} ${office.name}`,
    url: `${SITE.url}/${office.slug}`,
    telephone: `+1-${SITE.phone}`,
    email: SITE.email,
    parentOrganization: { "@id": ORG_ID },
    address: {
      "@type": "PostalAddress",
      streetAddress: office.street,
      addressLocality: office.city,
      addressRegion: office.state,
      postalCode: office.zip,
      addressCountry: "US",
    },
    hasMap: office.mapUrl,
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalOrganization", "Organization"],
        "@id": ORG_ID,
        name: SITE.name,
        legalName: SITE.legalName,
        url: SITE.url,
        logo: `${SITE.url}/images/NGU Wellness.png`,
        telephone: `+1-${SITE.phone}`,
        email: SITE.email,
        foundingDate: SITE.founded,
        slogan: "Never Give Up.",
        description:
          "Group therapy practice offering individual, couples, and family counseling for children, teens, and adults, in person in Dayton and Rocky River, Ohio, and by telehealth anywhere in Ohio.",
        areaServed: { "@type": "State", name: "Ohio" },
        availableService: [
          { "@type": "MedicalTherapy", name: "Individual therapy" },
          { "@type": "MedicalTherapy", name: "Couples therapy" },
          { "@type": "MedicalTherapy", name: "Family therapy" },
          { "@type": "MedicalTherapy", name: "Child and teen therapy" },
          { "@type": "MedicalTherapy", name: "Telehealth therapy" },
        ],
        paymentAccepted: "Insurance, Medicaid, EAP, self-pay, HSA, FSA",
        knowsAbout: ["Anxiety", "Depression", "Trauma", "Grief", "OCD", "Insomnia (CBT-I)", "Couples therapy", "Child therapy"],
        subOrganization: SITE.offices.map((o) => ({ "@id": `${SITE.url}/${o.slug}#clinic` })),
      },
      ...SITE.offices.map(clinicSchema),
    ],
  };
}

export function officeSchema(slug) {
  const office = SITE.offices.find((o) => o.slug === slug);
  return { "@context": "https://schema.org", ...clinicSchema(office) };
}

export function personSchema(t) {
  const office = SITE.offices.find((o) => o.slug === t.office);
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE.url}/therapists/${t.slug}#person`,
    name: t.name,
    url: `${SITE.url}/therapists/${t.slug}`,
    image: `${SITE.url}${t.photo}`,
    jobTitle: t.licenseTitle,
    honorificSuffix: t.credentials,
    worksFor: { "@id": ORG_ID },
    workLocation: { "@id": `${SITE.url}/${office.slug}#clinic` },
    knowsAbout: t.specialtiesFull,
    hasCredential: (t.credentialDetails || [])
      .filter((c) => c.s.startsWith("License"))
      .map((c) => ({ "@type": "EducationalOccupationalCredential", credentialCategory: "license", name: c.t })),
  };
}
