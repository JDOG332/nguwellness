import all from "./clinicians.json";

// Every clinician fact lives in clinicians.json. `hidden: true` keeps a profile off the site
// (for example, someone on leave) without losing their bio.
export const clinicians = all;
export const visibleClinicians = all.filter((t) => !t.hidden);
export function getClinician(slug) {
  return visibleClinicians.find((t) => t.slug === slug) || null;
}
