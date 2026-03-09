"use client";
import Nav from "../Nav";
import Footer from "../Footer";

export default function PrivacyPage() {
  return (
    <div>
      <Nav />

      <section style={{ maxWidth: "var(--max-w-narrow)", margin: "0 auto", padding: "var(--s-2xl) var(--s-lg)" }}>
        <p className="eyebrow">Legal</p>
        <h1 style={{ fontSize: "clamp(var(--t-xl), 4vw, var(--t-2xl))", marginBottom: "var(--s-md)" }}>
          Privacy Policy
        </h1>
        <hr className="phi-rule" />
        <p style={{ fontSize: "var(--t-sm)", color: "var(--warm-gray)", marginBottom: "var(--s-xl)" }}>
          Last updated: March 2026
        </p>

        <div style={{ fontSize: "var(--t-base)", fontWeight: 300, color: "var(--earth)", lineHeight: 1.618 }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--t-lg)", fontWeight: 900, marginBottom: "var(--s-sm)", marginTop: "var(--s-xl)", letterSpacing: "-0.0382em" }}>
            Your Privacy Matters
          </h2>
          <p style={{ marginBottom: "var(--s-md)" }}>
            NGU Wellness is committed to protecting your privacy. This policy describes how we collect, use, and safeguard your information when you visit our website or use our services.
          </p>

          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--t-lg)", fontWeight: 900, marginBottom: "var(--s-sm)", marginTop: "var(--s-xl)", letterSpacing: "-0.0382em" }}>
            Information We Collect
          </h2>
          <p style={{ marginBottom: "var(--s-md)" }}>
            We may collect personal information you voluntarily provide when you complete our intake survey, contact us by phone, email, or through the website, or schedule an appointment. This information may include your name, email address, phone number, insurance information, and details related to your health and wellness goals.
          </p>

          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--t-lg)", fontWeight: 900, marginBottom: "var(--s-sm)", marginTop: "var(--s-xl)", letterSpacing: "-0.0382em" }}>
            How We Use Your Information
          </h2>
          <p style={{ marginBottom: "var(--s-md)" }}>
            We use your information to provide and coordinate therapy services, verify insurance benefits, communicate with you about appointments, improve our website and services, and comply with legal and regulatory obligations.
          </p>

          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--t-lg)", fontWeight: 900, marginBottom: "var(--s-sm)", marginTop: "var(--s-xl)", letterSpacing: "-0.0382em" }}>
            HIPAA Compliance
          </h2>
          <p style={{ marginBottom: "var(--s-md)" }}>
            NGU Wellness complies with the Health Insurance Portability and Accountability Act (HIPAA). All protected health information (PHI) is handled in accordance with HIPAA Privacy and Security Rules. Your clinical records are maintained securely and are never shared without your written consent except as required by law.
          </p>

          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--t-lg)", fontWeight: 900, marginBottom: "var(--s-sm)", marginTop: "var(--s-xl)", letterSpacing: "-0.0382em" }}>
            Third-Party Services
          </h2>
          <p style={{ marginBottom: "var(--s-md)" }}>
            Our website may use third-party services for analytics and functionality. These services may collect non-personally identifiable information about your visit. We do not sell or rent your personal information to third parties.
          </p>

          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--t-lg)", fontWeight: 900, marginBottom: "var(--s-sm)", marginTop: "var(--s-xl)", letterSpacing: "-0.0382em" }}>
            Contact Us
          </h2>
          <p style={{ marginBottom: "var(--s-md)" }}>
            If you have questions about this privacy policy or how your information is handled, please contact us at info@nguwellness.com or call 888-648-9355.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
