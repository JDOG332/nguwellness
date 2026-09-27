import ContactPage from "./ContactPage";

export const metadata = {
  title: "Contact & Get Started",
  description: "Call or text 888-648-9355, email info@nguwellness.com, or fill out our short form. We reply within one business day.",
  alternates: { canonical: "/contact" },
};

export default function ContactRoute() {
  return <ContactPage />;
}
