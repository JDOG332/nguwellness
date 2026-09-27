import PrivacyPage from "./PrivacyPage";

export const metadata = {
  title: "Website Privacy Policy",
  description: "How the NGU Wellness website handles your information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyRoute() {
  return <PrivacyPage />;
}
