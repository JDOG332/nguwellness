import Link from "next/link";
import { SITE, INTAKE_FORM } from "../data/site";

const PRACTICE = [
  ["/about", "About"],
  ["/services", "Services"],
  ["/therapists", "Our Therapists"],
  ["/dayton", "Dayton Office"],
  ["/rocky-river", "Rocky River Office"],
  ["/telehealth", "Telehealth in Ohio"],
  ["/hiring", "Careers"],
];

const HELP = [
  ["/insurance", "Insurance & Fees"],
  ["/faq", "FAQ"],
  ["/contact", "Contact"],
];

const LEGAL = [
  ["/privacy-notice", "Notice of Privacy Practices"],
  ["/good-faith-estimate", "Good Faith Estimate"],
  ["/nondiscrimination", "Nondiscrimination & Language Help"],
  ["/privacy", "Website Privacy"],
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-crisis" role="note">
        <strong>In a crisis?</strong> This site and our phone line are not monitored for emergencies. Call <a href="tel:911">911</a>, or call or text <a href="tel:988">988</a> (Suicide &amp; Crisis Lifeline), any time.
      </div>
      <div className="footer-grid">
        <div>
          <div className="footer-brand">
            <img src="/images/lotus-192.png" alt="" width="70" height="40" />
            <span className="footer-brand-name">NGU Wellness</span>
          </div>
          <p className="footer-tagline">
            Never Give Up. Counseling and therapy for children, teens, adults, couples, and families across Ohio.
          </p>
          {SITE.offices.map((o) => (
            <p key={o.slug} className="footer-location">
              {o.name}: {o.street}, {o.city}, {o.state} {o.zip}
            </p>
          ))}
          <p className="footer-location footer-contact">
            <a href={SITE.phoneHref} className="footer-link">{SITE.phone}</a> · <a href={`mailto:${SITE.email}`} className="footer-link">{SITE.email}</a>
          </p>
        </div>
        <nav aria-label="Practice">
          <p className="footer-col-title">Practice</p>
          <div className="footer-links">
            {PRACTICE.map(([href, label]) => <Link key={href} className="footer-link" href={href}>{label}</Link>)}
          </div>
        </nav>
        <nav aria-label="Get help">
          <p className="footer-col-title">Get Help</p>
          <div className="footer-links">
            <a className="footer-link" href={INTAKE_FORM} target="_blank" rel="noopener noreferrer">Get Started</a>
            <a className="footer-link" href={SITE.phoneHref}>Call or Text</a>
            <a className="footer-link" href={SITE.portalUrl} target="_blank" rel="noopener noreferrer">Client Portal</a>
            {HELP.map(([href, label]) => <Link key={href} className="footer-link" href={href}>{label}</Link>)}
          </div>
        </nav>
        <nav aria-label="Legal">
          <p className="footer-col-title">Notices</p>
          <div className="footer-links">
            {LEGAL.map(([href, label]) => <Link key={href} className="footer-link" href={href}>{label}</Link>)}
            <a className="footer-link" href={SITE.licenseVerifyUrl} target="_blank" rel="noopener noreferrer">Verify a License (Ohio)</a>
          </div>
        </nav>
      </div>
      <div className="footer-copy">
        <span>&copy; {year} {SITE.legalName}. All rights reserved.</span>
        <span style={{ fontFamily: "var(--font-accent)", fontStyle: "italic" }}>Never Give Up.</span>
      </div>
    </footer>
  );
}
