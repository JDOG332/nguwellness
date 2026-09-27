import OfficePage from "../components/OfficePage";

export const metadata = {
  title: "Therapy in Rocky River & Cleveland | 20525 Center Ridge Rd",
  description: "Licensed therapists at NGU Wellness, 20525 Center Ridge Rd., Suite 604, Rocky River, OH, serving the west side of Cleveland in person and all of Ohio by telehealth.",
  alternates: { canonical: "/rocky-river" },
};

export default function RockyRiver() {
  return (
    <OfficePage
      slug="rocky-river"
      lead="Our Cleveland-area office on Center Ridge Road, open since October 2024. In-person sessions for children, teens, and adults, plus telehealth anywhere in Ohio."
      nearby="Rocky River, Lakewood, Westlake, Bay Village, Fairview Park, and the west side of Cleveland"
    />
  );
}
