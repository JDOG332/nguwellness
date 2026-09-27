import ServicesPage from "./ServicesPage";

export const metadata = {
  title: "Therapy Services",
  description: "Individual, child and teen, couples, and family therapy in Dayton and Rocky River, plus telehealth anywhere in Ohio. Anxiety, depression, trauma, grief and more.",
  alternates: { canonical: "/services" },
};

export default function ServicesRoute() {
  return <ServicesPage />;
}
