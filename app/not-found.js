import Link from "next/link";
import ContentPage, { Section } from "./components/ContentPage";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <ContentPage eyebrow="404" title="We couldn't find that page." lead="The page may have moved when we updated our website. These should help:">
      <Section>
        <ul>
          <li><Link href="/therapists">Our therapists</Link></li>
          <li><Link href="/insurance">Insurance &amp; fees</Link></li>
          <li><Link href="/faq">Frequently asked questions</Link></li>
          <li><Link href="/contact">Contact us</Link></li>
        </ul>
      </Section>
    </ContentPage>
  );
}
