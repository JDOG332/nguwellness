"use client";
import Nav from "../Nav";
import Footer from "../Footer";

const privacyStyles = `
  /* ═══════════════════════════════════════════════════
     PRIVACY PAGE — Φ DESIGN SYSTEM STRICT COMPLIANCE
     Zero inline styles.
     ═══════════════════════════════════════════════════ */

  .privacy-wrap {
    max-width: var(--max-w-narrow);
    margin: 0 auto;
    padding: var(--s-2xl) var(--s-lg);
    animation: fadeIn 0.618s var(--ease-phi) both;
  }

  .privacy-title {
    font-size: clamp(var(--t-xl), 4vw + 1rem, var(--t-2xl));
    margin-bottom: var(--s-md);
  }

  .privacy-date {
    font-size: var(--t-sm);
    color: var(--warm-gray);
    margin-bottom: var(--s-xl);
  }

  .privacy-body {
    font-size: var(--t-base);
    font-weight: 300;
    color: var(--earth);
    line-height: 1.618;
  }

  .privacy-h2 {
    font-family: var(--font-display);
    font-size: var(--t-lg);
    font-weight: 900;
    margin-bottom: var(--s-sm);
    margin-top: var(--s-xl);
    letter-spacing: -0.0382em;
    color: var(--ink);
  }

  .privacy-p {
    margin-bottom: var(--s-md);
  }
`;

export default function PrivacyPage() {
  return (
    <div>
      <style>{privacyStyles}</style>
      <Nav />

      <section className="privacy-wrap">
        <p className="eyebrow">Legal</p>
        <h1 className="privacy-title">Privacy Policy</h1>
        <hr className="phi-rule" />
        <p className="privacy-date">Last updated: March 2026</p>

        <div className="privacy-body">
          <h2 className="privacy-h2">Your Privacy Matters</h2>
          <p className="privacy-p">
            NGU Wellness is committed to protecting your privacy. This policy describes how we collect, use, and safeguard your information when you visit our website or use our services.
          </p>

          <h2 className="privacy-h2">Information We Collect</h2>
          <p className="privacy-p">
            We may collect personal information you voluntarily provide when you complete our intake survey, contact us by phone, email, or through the website, or schedule an appointment. This information may include your name, email address, phone number, insurance information, and details related to your health and wellness goals.
          </p>

          <h2 className="privacy-h2">How We Use Your Information</h2>
          <p className="privacy-p">
            We use your information to provide and coordinate therapy services, verify insurance benefits, communicate with you about appointments, improve our website and services, and comply with legal and regulatory obligations.
          </p>

          <h2 className="privacy-h2">HIPAA Compliance</h2>
          <p className="privacy-p">
            NGU Wellness complies with the Health Insurance Portability and Accountability Act (HIPAA). All protected health information (PHI) is handled in accordance with HIPAA Privacy and Security Rules. Your clinical records are maintained securely and are never shared without your written consent except as required by law.
          </p>

          <h2 className="privacy-h2">Third-Party Services</h2>
          <p className="privacy-p">
            Our website may use third-party services for analytics and functionality. These services may collect non-personally identifiable information about your visit. We do not sell or rent your personal information to third parties.
          </p>

          <h2 className="privacy-h2">Contact Us</h2>
          <p className="privacy-p">
            If you have questions about this privacy policy or how your information is handled, please contact us at info@nguwellness.com or call 888-648-9355.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
