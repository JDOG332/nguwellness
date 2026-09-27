// Accepted plans, built from NGU's accepted-plan table (the-brain tables/payers.md).
// Only plans marked "accepted" appear here. Unverified plans stay off the site until ruled on.

export const COMMERCIAL = [
  "Aetna",
  "All Savers",
  "Anthem / Blue Cross Blue Shield (incl. out-of-state PPOs and Federal Employee Program)",
  "Carelon Behavioral Health",
  "CareSource",
  "Centene",
  "Custom Design Benefits",
  "First Health",
  "GEHA",
  "Health Design",
  "Medical Mutual of Ohio",
  "Ohio Health Choice",
  "OhioHealthy",
  "Optum",
  "Oscar Health",
  "Surest",
  "UMR",
  "UnitedHealthcare (Choice Plus and affiliated plans)",
];

export const MARKETPLACE = [
  "Ambetter (Buckeye)",
  "CareSource Marketplace (through December 31, 2026)",
  "Molina Marketplace",
];

export const MEDICAID = [
  "AmeriHealth Caritas Ohio",
  "Anthem Ohio Medicaid",
  "Buckeye Health Plan",
  "CareSource",
  "Humana Healthy Horizons",
  "Molina Healthcare",
  "Ohio Medicaid (fee-for-service)",
  "OhioRISE (Aetna Better Health)",
  "UnitedHealthcare Community Plan",
];

export const MEDICARE_ADVANTAGE = [
  "Aetna Medicare Advantage",
  "Anthem Blue Cross Blue Shield Medicare Advantage",
  "Medical Mutual Medicare Advantage",
  "UnitedHealthcare Medicare Advantage",
  "Humana Medicare Advantage (select therapists)",
];

export const EAP = [
  "Anthem EAP / Carelon EAP",
  "Optum / UnitedHealthcare EAP",
  "Lyra (select therapists)",
];

// What a therapist's own profile shows, by insurance tier.
export function plansFor(t) {
  if (t.insuranceTier === "medicaid-only") {
    return [
      ["Ohio Medicaid plans", MEDICAID],
      ["Self-pay", ["Self-pay rates apply; see Insurance & Fees"]],
    ];
  }
  const eap = [];
  if (t.insuranceTier === "independent") {
    eap.push("Anthem EAP / Carelon EAP", "Optum / UnitedHealthcare EAP");
  }
  if (t.lyra) eap.push("Lyra");
  const groups = [
    ["Commercial", COMMERCIAL],
    ["Marketplace", MARKETPLACE],
    ["Ohio Medicaid", MEDICAID],
    ["Medicare Advantage", MEDICARE_ADVANTAGE.filter((p) => !p.startsWith("Humana"))],
  ];
  if (eap.length) groups.push(["Employee Assistance Programs", eap]);
  return groups;
}

// Self-pay rates (twin: the rates Doc "NGU Wellness Rate Information and CPT Codes").
export const SELF_PAY = [
  { service: "First appointment (intake assessment)", code: "90791", price: 150 },
  { service: "Individual session, about 55 minutes", code: "90837", price: 125 },
  { service: "Individual session, about 45 minutes", code: "90834", price: 100 },
  { service: "Individual session, about 30 minutes", code: "90832", price: 75 },
  { service: "Couples or family session, 50 to 60 minutes", code: "90847", price: 125 },
];
export const LATE_CANCEL_FEE = 30;
