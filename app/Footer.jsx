"use client";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">
            <img src="/images/NGU Wellness -lotus only.png" alt="NGU Wellness" />
            <span className="footer-brand-name">NGU Wellness</span>
          </div>
          <p className="footer-tagline">
            Never Give Up. Counseling and therapy for individuals, couples, families, teens, and children across Ohio.
          </p>
          <p className="footer-location">Dayton: 453 Patterson Rd., Suite A, Dayton, OH 45419</p>
          <p className="footer-location">Rocky River: 20525 Center Ridge Rd., Suite 604, Rocky River, OH 44116</p>
          <p className="footer-location" style={{ marginTop: "var(--s-xs)" }}>
            <a href="tel:8886489355" className="footer-link">888-648-9355</a> · <a href="mailto:info@nguwellness.com" className="footer-link">info@nguwellness.com</a>
          </p>
        </div>
        <div>
          <p className="footer-col-title">Practice</p>
          <div className="footer-links">
            <button className="footer-link" onClick={() => router.push("/about")}>About</button>
            <button className="footer-link" onClick={() => router.push("/services")}>Services</button>
            <button className="footer-link" onClick={() => router.push("/therapists")}>Our Therapists</button>
            <button className="footer-link" onClick={() => router.push("/contact")}>Contact</button>
            <button className="footer-link" onClick={() => router.push("/hiring")}>Careers</button>
          </div>
        </div>
        <div>
          <p className="footer-col-title">Get Help</p>
          <div className="footer-links">
            <button className="footer-link" onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLScRT05N8MswuXUXtYCaD-m6j4XUWKKDlTYuNSaLS6Pfy_8f6w/viewform?usp=header", "_blank")}>Get Started</button>
            <button className="footer-link" onClick={() => window.open("tel:8886489355")}>Call or Text</button>
            <button className="footer-link" onClick={() => window.open("mailto:info@nguwellness.com")}>Email Us</button>
            <button className="footer-link" onClick={() => router.push("/privacy")}>Privacy Policy</button>
          </div>
        </div>
      </div>
      <div className="footer-copy">
        <span>&copy; {year} NGU Wellness. All rights reserved.</span>
        <span style={{ fontFamily: "var(--font-accent)", fontStyle: "italic" }}>Never Give Up.</span>
      </div>
    </footer>
  );
}
