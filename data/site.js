// One home for practice-wide facts. Change a fact here and every page follows.
export const SITE = {
  name: "NGU Wellness",
  legalName: "NGU Wellness LLC",
  url: "https://www.nguwellness.com",
  phone: "888-648-9355",
  phoneHref: "tel:+18886489355",
  smsHref: "sms:+18886489355",
  email: "info@nguwellness.com",
  portalUrl: "https://www.therapyportal.com/p/nguwellness",
  licenseVerifyUrl: "https://elicense.ohio.gov/oh_verifylicense",
  replyPromise: "within one business day",
  sessionLength: "about 55 minutes",
  founded: "2021",
  offices: [
    {
      slug: "dayton",
      name: "Dayton",
      street: "453 Patterson Rd., Suite A",
      city: "Dayton",
      state: "OH",
      zip: "45419",
      county: "Montgomery",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=NGU+Wellness+453+Patterson+Rd+Dayton+OH+45419",
    },
    {
      slug: "rocky-river",
      name: "Rocky River",
      street: "20525 Center Ridge Rd., Suite 604",
      city: "Rocky River",
      state: "OH",
      zip: "44116",
      county: "Cuyahoga",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=NGU+Wellness+20525+Center+Ridge+Rd+Rocky+River+OH+44116",
    },
  ],
};

// The Get Started form. `entry` is the form's "preferred therapist" checkbox question,
// used to pre-select a therapist from their profile.
export const INTAKE_FORM = "https://docs.google.com/forms/d/e/1FAIpQLScRT05N8MswuXUXtYCaD-m6j4XUWKKDlTYuNSaLS6Pfy_8f6w/viewform";

export function intakeUrl(therapistName) {
  if (!therapistName || !INTAKE_THERAPIST_ENTRY) return INTAKE_FORM;
  return `${INTAKE_FORM}?usp=pp_url&${INTAKE_THERAPIST_ENTRY}=${encodeURIComponent(therapistName)}`;
}

// The form's "preferred therapist" checkbox question. The option label must match the
// therapist's `formName` exactly, or the form ignores the pre-fill.
export const INTAKE_THERAPIST_ENTRY = "entry.289380617";
