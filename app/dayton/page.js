import OfficePage from "../components/OfficePage";

export const metadata = {
  title: "Therapy in Dayton, Ohio | 453 Patterson Rd",
  description: "Licensed therapists for children, teens, adults, and couples at NGU Wellness, 453 Patterson Rd., Suite A, Dayton, OH. Most insurance and Ohio Medicaid accepted.",
  alternates: { canonical: "/dayton" },
};

export default function Dayton() {
  return (
    <OfficePage
      slug="dayton"
      lead="Our home office on Patterson Road, where NGU Wellness opened in 2021. In-person sessions for children, teens, adults, and couples, plus telehealth anywhere in Ohio."
      nearby="Dayton, Kettering, Oakwood, Centerville, Beavercreek, and the Miami Valley"
    />
  );
}
