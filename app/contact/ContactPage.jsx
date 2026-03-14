"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Nav from "../Nav";
import Footer from "../Footer";

const FAQ = [
  { q: "How do I get started?", a: "Complete our brief intake survey at therapyportal.com/p/nguwellness. We will review your information and match you with the right therapist. You can also call or text us at 888-648-9355." },
  { q: "Do you accept my insurance?", a: "We accept most major commercial insurance, Medicaid, and several EAP programs. We verify your benefits before your first session at no charge. Visit our Services page for the full list." },
  { q: "Can I do therapy over video?", a: "Yes. We offer secure telehealth sessions to anyone in Ohio. Same therapists, same quality care, from wherever you feel most comfortable." },
  { q: "How long are sessions?", a: "Standard individual sessions are 50 minutes. Intake sessions may run slightly longer to allow time for a thorough assessment." },
  { q: "What if I am not sure which therapist is right for me?", a: "That is what we are here for. Call, text, or email us and our intake team will match you based on your concerns, schedule, location preference, and insurance." },
  { q: "Do you prescribe medication?", a: "NGU Wellness provides therapy only. If medication may be appropriate, your therapist can coordinate with your prescriber or refer you to one." },
  { q: "What ages do you serve?", a: "We see children (5+), tweens, teens, young adults, adults, older adults, couples, and families. Each therapist has specific age ranges listed on their profile." },
];

const contactStyles = `
  /* ═══════════════════════════════════════════════════
     CONTACT PAGE — Φ DESIGN SYSTEM STRICT COMPLIANCE
     Zero inline styles. Every value from the Sacred Scale.
     ═══════════════════════════════════════════════════ */

  /* ── GOOGLE FORM + SIDEBAR LAYOUT ── */
  .form-layout {
    max-width: var(--max-w);
    margin: 0 auto;
    padding: var(--s-2xl) var(--s-lg) var(--s-xl);
    animation: fadeIn 0.618s var(--ease-phi) both;
  }

  .form-layout-header {
    margin-bottom: var(--s-lg);
  }

  .form-layout-header .eyebrow {
    margin-bottom: var(--s-2xs);
  }

  .form-embed-title {
    font-size: clamp(var(--t-xl), 5vw + 1rem, var(--t-2xl));
    margin-bottom: var(--s-sm);
  }

  .form-embed-desc {
    font-size: var(--t-md);
    font-weight: 300;
    color: var(--earth);
    max-width: var(--max-w-narrow);
  }

  .form-grid {
    display: grid;
    grid-template-columns: 1.618fr 1fr;
    gap: var(--s-lg);
    align-items: start;
  }

  .form-embed-frame {
    width: 100%;
    min-height: 80vh;
    border: 1px solid var(--divider);
    border-radius: var(--s-2xs);
    background: var(--paper);
  }

  .contact-sidebar {
    position: sticky;
    top: var(--s-lg);
    display: flex;
    flex-direction: column;
    gap: var(--s-sm);
  }

  .sidebar-heading {
    font-family: var(--font-display);
    font-size: var(--t-md);
    font-weight: 900;
    margin-bottom: var(--s-2xs);
  }

  .sidebar-card {
    padding: var(--s-md);
    background: var(--mist);
    transition: all var(--duration) var(--ease-phi);
    text-decoration: none;
    color: inherit;
    display: block;
  }

  .sidebar-card:hover {
    transform: translateY(-0.146rem);
    background: var(--light);
  }

  .sidebar-icon {
    font-size: var(--t-base);
    margin-bottom: var(--s-2xs);
    opacity: var(--alpha-phi);
  }

  .sidebar-title {
    font-family: var(--font-display);
    font-size: var(--t-base);
    font-weight: 900;
    margin-bottom: var(--s-4xs);
  }

  .sidebar-value {
    font-size: var(--t-sm);
    font-weight: 300;
    color: var(--earth);
  }

  .sidebar-heading-locations {
    margin-top: var(--s-xs);
  }

  /* ── HERO ── */
  .contact-hero {
    max-width: var(--max-w);
    margin: 0 auto;
    padding: var(--s-2xl) var(--s-lg) var(--s-xl);
    animation: fadeIn 0.618s var(--ease-phi) both;
  }

  .contact-hero h1 {
    font-size: clamp(var(--t-xl), 5vw + 1rem, var(--t-2xl));
    margin-bottom: var(--s-sm);
  }

  .contact-hero-desc {
    font-size: var(--t-md);
    font-weight: 300;
    color: var(--earth);
    max-width: var(--max-w-narrow);
  }

  /* ── SECTION HEADINGS ── */
  .contact-section-title {
    font-size: clamp(var(--t-lg), 3vw + 0.5rem, var(--t-xl));
    margin-bottom: var(--s-sm);
  }

  /* ── BG MIST ── */
  .bg-mist {
    background: var(--mist);
  }

  /* ── STEPS ── */
  .steps-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--s-md);
    margin-top: var(--s-lg);
  }

  .step-card {
    padding: var(--s-lg);
    border: 1px solid var(--divider);
    position: relative;
  }

  .step-num {
    font-family: var(--font-display);
    font-size: var(--t-xl);
    font-weight: 900;
    color: var(--divider);
    line-height: 1;
    margin-bottom: var(--s-sm);
  }

  .step-title {
    font-family: var(--font-display);
    font-size: var(--t-md);
    font-weight: 900;
    margin-bottom: var(--s-2xs);
  }

  .step-desc {
    font-size: var(--t-sm);
    font-weight: 300;
    color: var(--earth);
    line-height: 1.618;
  }

  .steps-cta {
    text-align: center;
    margin-top: var(--s-xl);
  }

  /* ── INFO CARDS ── */
  .info-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--s-md);
    margin-top: var(--s-lg);
  }

  .info-card {
    padding: var(--s-lg);
    background: var(--mist);
    transition: all var(--duration) var(--ease-phi);
    text-decoration: none;
    color: inherit;
    display: block;
  }

  .info-card:hover {
    transform: translateY(-0.236rem);
    background: var(--light);
  }

  .info-icon {
    font-size: var(--t-lg);
    margin-bottom: var(--s-sm);
    opacity: var(--alpha-phi);
  }

  .info-title {
    font-family: var(--font-display);
    font-size: var(--t-md);
    font-weight: 900;
    margin-bottom: var(--s-3xs);
  }

  .info-value {
    font-size: var(--t-base);
    font-weight: 300;
    color: var(--earth);
  }

  /* ── LOCATIONS ── */
  .loc-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--s-md);
    margin-top: var(--s-md);
  }

  .loc-card {
    padding: var(--s-lg);
    border: 1px solid var(--divider);
    background: var(--paper);
  }

  .loc-label {
    font-family: var(--font-body);
    font-size: var(--t-xs);
    font-weight: 400;
    letter-spacing: 0.236em;
    text-transform: uppercase;
    color: var(--rose);
    margin-bottom: var(--s-xs);
  }

  .loc-name {
    font-family: var(--font-display);
    font-size: var(--t-md);
    font-weight: 900;
    margin-bottom: var(--s-xs);
  }

  .loc-address {
    font-size: var(--t-sm);
    font-weight: 300;
    color: var(--earth);
    line-height: 1.618;
  }

  /* ── FAQ ── */
  .faq-list {
    margin-top: var(--s-lg);
  }

  .faq-item {
    border-bottom: 1px solid var(--divider);
  }

  .faq-item:first-child {
    border-top: 1px solid var(--divider);
  }

  .faq-q {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--s-md) 0;
    cursor: pointer;
    background: none;
    border: none;
    width: 100%;
    text-align: left;
    font-family: var(--font-display);
    font-size: var(--t-base);
    font-weight: 900;
    color: var(--ink);
    line-height: 1.1;
  }

  .faq-q:hover { color: var(--rose-deep); }

  .faq-toggle {
    font-size: var(--t-md);
    color: var(--rose);
    transition: transform var(--duration) var(--ease-phi);
    flex-shrink: 0;
    margin-left: var(--s-md);
  }

  .faq-toggle.open {
    transform: rotate(45deg);
  }

  .faq-a {
    font-size: var(--t-sm);
    font-weight: 300;
    color: var(--earth);
    line-height: 1.618;
    padding-bottom: var(--s-md);
    max-width: var(--max-w-narrow);
  }

  /* ── CTA ── */
  .contact-cta {
    text-align: center;
    padding: var(--s-xl) var(--s-lg);
    background: var(--mist);
  }

  .contact-cta-title {
    font-size: clamp(var(--t-xl), 3.82vw + 1rem, var(--t-2xl));
    margin-bottom: var(--s-md);
  }

  .contact-cta-desc {
    font-size: var(--t-md);
    font-weight: 300;
    color: var(--earth);
    max-width: var(--max-w-narrow);
    margin: 0 auto var(--s-xl);
  }

  .contact-cta-actions {
    display: flex;
    gap: var(--s-sm);
    justify-content: center;
    flex-wrap: wrap;
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 61.8rem) {
    .steps-grid { grid-template-columns: 1fr; }
    .info-grid { grid-template-columns: 1fr; }
    .loc-grid { grid-template-columns: 1fr; }
    .form-grid {
      grid-template-columns: 1fr;
    }
    .contact-sidebar {
      position: static;
    }
  }
`;

export default function ContactPage() {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div>
      <style>{contactStyles}</style>
      <Nav />

      {/* ── GOOGLE FORM + SIDEBAR ── */}
      <section className="form-layout">
        <div className="form-layout-header">
          <p className="eyebrow">New Client Inquiry</p>
          <h1 className="form-embed-title">Tell us what you need.</h1>
          <p className="form-embed-desc">
            Fill out the form below and our team will reach out to get you started. We always try to respond the same day.
          </p>
        </div>
        <div className="form-grid">
          <iframe
            className="form-embed-frame"
            src="https://docs.google.com/forms/d/e/1FAIpQLScRT05N8MswuXUXtYCaD-m6j4XUWKKDlTYuNSaLS6Pfy_8f6w/viewform?embedded=true"
            title="NGU Wellness Inquiry Form"
            loading="lazy"
          >
            Loading…
          </iframe>
          <div className="contact-sidebar">
            <p className="sidebar-heading">Reach us directly</p>
            <a className="sidebar-card" href="tel:8886489355">
              <p className="sidebar-icon">◈</p>
              <p className="sidebar-title">Call or Text</p>
              <p className="sidebar-value">888-648-9355</p>
            </a>
            <div className="sidebar-card">
              <p className="sidebar-icon">⊞</p>
              <p className="sidebar-title">Fax</p>
              <p className="sidebar-value">888-648-9355</p>
            </div>
            <a className="sidebar-card" href="mailto:info@nguwellness.com">
              <p className="sidebar-icon">◇</p>
              <p className="sidebar-title">Email</p>
              <p className="sidebar-value">info@nguwellness.com</p>
            </a>
            <a className="sidebar-card" href="https://therapyportal.com/p/nguwellness" target="_blank" rel="noopener noreferrer">
              <p className="sidebar-icon">⟡</p>
              <p className="sidebar-title">Client Portal</p>
              <p className="sidebar-value">therapyportal.com</p>
            </a>
            <p className="sidebar-heading sidebar-heading-locations">Our Locations</p>
            <div className="sidebar-card">
              <p className="sidebar-icon">◉</p>
              <p className="sidebar-title">Dayton</p>
              <p className="sidebar-value">453 Patterson Rd., Suite A<br />Dayton, OH 45419</p>
            </div>
            <div className="sidebar-card">
              <p className="sidebar-icon">◉</p>
              <p className="sidebar-title">Rocky River</p>
              <p className="sidebar-value">20525 Center Ridge Rd., Suite 604<br />Rocky River, OH 44116</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HERO ── */}
      <section className="contact-hero">
        <p className="eyebrow">Get Started</p>
        <h1>We are here when you are ready.</h1>
        <p className="contact-hero-desc">
          Taking the first step is the hardest part. We make everything after that as simple as possible.
        </p>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="phi-section-sm bg-mist">
        <div className="phi-wrap">
          <p className="eyebrow">How It Works</p>
          <h2 className="contact-section-title">Three steps to getting started.</h2>
          <div className="steps-grid">
            <div className="step-card">
              <p className="step-num">01</p>
              <p className="step-title">Complete the intake survey</p>
              <p className="step-desc">A brief online questionnaire helps us understand your needs, preferences, and insurance information.</p>
            </div>
            <div className="step-card">
              <p className="step-num">02</p>
              <p className="step-title">We match you</p>
              <p className="step-desc">Our intake team reviews your information and matches you with the therapist best suited for your concerns.</p>
            </div>
            <div className="step-card">
              <p className="step-num">03</p>
              <p className="step-title">Start therapy</p>
              <p className="step-desc">Schedule your first session — in-person at either location or via secure telehealth from anywhere in Ohio.</p>
            </div>
          </div>
          <div className="steps-cta">
            <button className="btn-rose" onClick={() => window.open("https://therapyportal.com/p/nguwellness", "_blank")}>
              Begin Intake Survey
            </button>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="phi-section">
        <div className="phi-wrap">
          <p className="eyebrow">Common Questions</p>
          <h2 className="contact-section-title">What people ask us.</h2>
          <div className="faq-list">
            {FAQ.map((item, i) => (
              <div key={i} className="faq-item">
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{item.q}</span>
                  <span className={`faq-toggle${openFaq === i ? " open" : ""}`}>+</span>
                </button>
                {openFaq === i && <p className="faq-a">{item.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="contact-cta">
        <p className="eyebrow">Take the first step</p>
        <h2 className="contact-cta-title">Ready when you are.</h2>
        <p className="contact-cta-desc">
          Never give up on yourself. We are here to help you figure out the rest.
        </p>
        <div className="contact-cta-actions">
          <button className="btn-rose" onClick={() => window.open("https://therapyportal.com/p/nguwellness", "_blank")}>
            Begin Intake Survey
          </button>
          <button className="btn-outline" onClick={() => router.push("/therapists")}>
            Browse Therapists
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
