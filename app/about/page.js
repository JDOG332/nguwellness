import AboutPage from "./AboutPage";

export const metadata = {
  title: "About NGU Wellness",
  description: "NGU Wellness is a group therapy practice founded in 2021 in Dayton, Ohio, with a second office in Rocky River and telehealth across Ohio. Meet the founders and our story.",
  alternates: { canonical: "/about" },
};

export default function AboutRoute() {
  return <AboutPage />;
}
