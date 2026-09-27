import HiringPage from "./HiringPage";

export const metadata = {
  title: "Careers for Therapists",
  description: "Join NGU Wellness: a collaborative group practice in Dayton and Rocky River, Ohio, with intake, billing and credentialing handled for you.",
  alternates: { canonical: "/hiring" },
};

export default function HiringRoute() {
  return <HiringPage />;
}
