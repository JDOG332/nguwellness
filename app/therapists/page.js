import TherapistsDirectory from "./TherapistsDirectory";

export const metadata = {
  title: "Find a Therapist",
  description: "Browse licensed therapists at NGU Wellness in Dayton, Rocky River and by telehealth across Ohio. Search by concern, age, and location.",
  alternates: { canonical: "/therapists" },
};

export default function TherapistsRoute() {
  return <TherapistsDirectory />;
}
