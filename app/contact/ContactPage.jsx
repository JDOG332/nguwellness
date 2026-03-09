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
  .contact-hero {
    max-width: var(--max-w);
    margin: 0 auto;
    padding: var(--s-2xl) var(--s-lg) var(--s-xl);
    animation: fadeIn 0.618s var(--ease-phi) both;
  }

  .contact-hero h1 {
    font-size: clamp(var(--t-xl), 5vw, var(--t-2xl));
    margin-bottom: var(--s-sm);
  }

  .steps-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--s-md);
    margin-top: var(--s-lg);
  }

  .step-card {
    padding: var(--s-lg);
    border: 0.0618rem solid var(--divider);
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

  /* INFO CARDS */
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

  /* FAQ */
  .faq-list {
    margin-top: var(--s-lg);
  }

  .faq-item {
    border-bottom: 0.0618rem solid var(--divider);
  }

  .faq-item:first-child {
    border-top: 0.0618rem solid var(--divider);
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
    max-width: 42.36rem;
  }

  @media (max-width: 61.8rem) {
    .steps-grid { grid-template-columns: 1fr; }
    .info-grid { grid-template-columns: 1fr; }
  }
`;

export default function ContactPage() {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div>
      <style>{contactStyles}</style>
      <Nav />

      <section className="contact-hero">
        <p className="eyebrow">Get Started</p>
        <h1>We are here when you are ready.</h1>
        <p style={{ fontSize: "var(--t-md)", fontWeight: 300, color: "var(--earth)", maxWidth: "var(--max-w-narrow)" }}>
          Taking the first step is the hardest part. We make everything after that as simple as possible.
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section className="phi-section-sm" style={{ background: "var(--mist)" }}>
        <div className="phi-wrap">
          <p className="eyebrow">How It Works</p>
          <h2 style={{ fontSize: "clamp(var(--t-lg), 3vw, var(--t-xl))", marginBottom: "var(--s-sm)" }}>
            Three steps to getting started.
          </h2>
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
          <div style={{ textAlign: "center", marginTop: "var(--s-xl)" }}>
            <button className="btn-rose" onClick={() => window.open("https://therapyportal.com/p/nguwellness", "_blank")}>
              Begin Intake Survey
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="phi-section">
        <div className="phi-wrap">
          <p className="eyebrow">Contact Us</p>
          <h2 style={{ fontSize: "clamp(var(--t-lg), 3vw, var(--t-xl))", marginBottom: "var(--s-sm)" }}>
            Reach us directly.
          </h2>
          <div className="info-grid">
            <a className="info-card" href="tel:8886489355">
              <p className="info-icon">◈</p>
              <p className="info-title">Call or Text</p>
              <p className="info-value">888-648-9355</p>
            </a>
            <a className="info-card" href="mailto:info@nguwellness.com">
              <p className="info-icon">◇</p>
              <p className="info-title">Email</p>
              <p className="info-value">info@nguwellness.com</p>
            </a>
            <a className="info-card" href="https://therapyportal.com/p/nguwellness" target="_blank" rel="noopener noreferrer">
              <p className="info-icon">⟡</p>
              <p className="info-title">Client Portal</p>
              <p className="info-value">therapyportal.com</p>
            </a>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="phi-section-sm" style={{ background: "var(--mist)" }}>
        <div className="phi-wrap">
          <p className="eyebrow">Our Locations</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--s-md)", marginTop: "var(--s-md)" }}>
            <div style={{ padding: "var(--s-lg)", border: "0.0618rem solid var(--divider)", background: "var(--paper)" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--t-xs)", fontWeight: 400, letterSpacing: "0.236em", textTransform: "uppercase", color: "var(--rose)", marginBottom: "var(--s-xs)" }}>Dayton</p>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "var(--t-md)", fontWeight: 900, marginBottom: "var(--s-xs)" }}>Patterson Road</p>
              <p style={{ fontSize: "var(--t-sm)", fontWeight: 300, color: "var(--earth)", lineHeight: 1.618 }}>
                453 Patterson Rd., Suite A<br />Dayton, OH 45419
              </p>
            </div>
            <div style={{ padding: "var(--s-lg)", border: "0.0618rem solid var(--divider)", background: "var(--paper)" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--t-xs)", fontWeight: 400, letterSpacing: "0.236em", textTransform: "uppercase", color: "var(--rose)", marginBottom: "var(--s-xs)" }}>Rocky River</p>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "var(--t-md)", fontWeight: 900, marginBottom: "var(--s-xs)" }}>Center Ridge Road</p>
              <p style={{ fontSize: "var(--t-sm)", fontWeight: 300, color: "var(--earth)", lineHeight: 1.618 }}>
                20525 Center Ridge Rd., Suite 604<br />Rocky River, OH 44116
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="phi-section">
        <div className="phi-wrap">
          <p className="eyebrow">Common Questions</p>
          <h2 style={{ fontSize: "clamp(var(--t-lg), 3vw, var(--t-xl))", marginBottom: "var(--s-sm)" }}>
            What people ask us.
          </h2>
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

      {/* CTA */}
      <section className="dark-strip">
        <p style={{ fontFamily: "var(--font-accent)", fontSize: "var(--t-lg)", fontStyle: "italic", color: "var(--paper)", marginBottom: "var(--s-md)" }}>
          Never give up on yourself.
        </p>
        <button className="btn-rose" onClick={() => window.open("https://therapyportal.com/p/nguwellness", "_blank")} style={{ background: "var(--rose)" }}>
          Begin Intake Survey
        </button>
      </section>

      <Footer />
    </div>
  );
}
