"use client";
import { useRouter } from "next/navigation";
import Nav from "../Nav";
import Footer from "../Footer";

const hiringStyles = `
  .hire-hero {
    max-width: var(--max-w);
    margin: 0 auto;
    padding: var(--s-2xl) var(--s-lg) var(--s-xl);
    animation: fadeIn 0.618s var(--ease-phi) both;
  }

  .hire-hero h1 {
    font-size: clamp(var(--t-xl), 5vw, var(--t-2xl));
    margin-bottom: var(--s-sm);
  }

  .hire-values {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--s-md);
    margin-top: var(--s-lg);
  }

  .hire-value {
    padding: var(--s-lg);
    border: 0.0618rem solid var(--divider);
  }

  .hire-value-title {
    font-family: var(--font-display);
    font-size: var(--t-md);
    font-weight: 900;
    margin-bottom: var(--s-2xs);
  }

  .hire-value-desc {
    font-size: var(--t-sm);
    font-weight: 300;
    color: var(--earth);
    line-height: 1.618;
  }

  .hire-reqs {
    margin-top: var(--s-lg);
  }

  .hire-req {
    padding: var(--s-md) 0;
    border-bottom: 0.0618rem solid var(--divider);
    display: flex;
    align-items: baseline;
    gap: var(--s-sm);
  }

  .hire-req:first-child {
    border-top: 0.0618rem solid var(--divider);
  }

  .hire-check {
    color: var(--rose);
    font-size: var(--t-base);
    flex-shrink: 0;
  }

  .hire-req-text {
    font-size: var(--t-base);
    font-weight: 300;
    color: var(--earth);
    line-height: 1.618;
  }

  @media (max-width: 61.8rem) {
    .hire-values { grid-template-columns: 1fr; }
  }
`;

export default function HiringPage() {
  const router = useRouter();

  return (
    <div>
      <style>{hiringStyles}</style>
      <Nav />

      <section className="hire-hero">
        <p className="eyebrow">Careers</p>
        <h1>Join us.</h1>
        <p style={{ fontSize: "var(--t-md)", fontWeight: 300, color: "var(--earth)", maxWidth: "var(--max-w-narrow)" }}>
          NGU Wellness is always interested in connecting with skilled, compassionate therapists who share our commitment to quality care.
        </p>
      </section>

      {/* VALUES */}
      <section className="phi-section" style={{ background: "var(--mist)" }}>
        <div className="phi-wrap">
          <p className="eyebrow">What We Value</p>
          <h2 style={{ fontSize: "clamp(var(--t-lg), 3vw, var(--t-xl))", marginBottom: "var(--s-sm)" }}>
            What makes NGU different for clinicians.
          </h2>
          <div className="hire-values">
            <div className="hire-value">
              <p className="hire-value-title">Collaborative Culture</p>
              <p className="hire-value-desc">A team-based practice where clinicians consult, learn, and grow together. You are never practicing alone.</p>
            </div>
            <div className="hire-value">
              <p className="hire-value-title">Administrative Support</p>
              <p className="hire-value-desc">We handle intake, insurance verification, scheduling, and billing so you can focus on what you do best — therapy.</p>
            </div>
            <div className="hire-value">
              <p className="hire-value-title">Flexibility</p>
              <p className="hire-value-desc">Set your own schedule. Work in-person, via telehealth, or a hybrid. We build around your life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE LOOK FOR */}
      <section className="phi-section">
        <div className="phi-wrap">
          <p className="eyebrow">Who We Look For</p>
          <h2 style={{ fontSize: "clamp(var(--t-lg), 3vw, var(--t-xl))", marginBottom: "var(--s-sm)" }}>
            Requirements.
          </h2>
          <p style={{ fontSize: "var(--t-base)", fontWeight: 300, color: "var(--earth)", maxWidth: "var(--max-w-narrow)" }}>
            We are always looking for licensed therapists who are passionate about their work and committed to evidence-based care.
          </p>
          <div className="hire-reqs">
            {[
              "Active Ohio licensure (LISW, LPCC, LSW, LPC, or equivalent)",
              "Experience with evidence-based modalities (CBT, EMDR, DBT, ACT, etc.)",
              "Commitment to collaborative, client-centered care",
              "Comfortable with both in-person and telehealth formats",
              "Strong clinical skills and professional boundaries",
              "Willingness to accept insurance and Medicaid panels",
            ].map(r => (
              <div key={r} className="hire-req">
                <span className="hire-check">⟡</span>
                <p className="hire-req-text">{r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLY CTA */}
      <section className="dark-strip">
        <p style={{ fontFamily: "var(--font-accent)", fontSize: "var(--t-lg)", fontStyle: "italic", color: "var(--paper)", marginBottom: "var(--s-sm)", opacity: "var(--alpha-phi)" }}>
          Interested in joining NGU Wellness?
        </p>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(var(--t-lg), 3vw, var(--t-xl))", color: "var(--paper)", marginBottom: "var(--s-md)" }}>
          Send us your CV.
        </h2>
        <p style={{ fontSize: "var(--t-md)", fontWeight: 300, color: "var(--paper)", opacity: "var(--alpha-phi)", marginBottom: "var(--s-lg)", maxWidth: "var(--max-w-narrow)", margin: "0 auto var(--s-lg)" }}>
          Email your resume and a brief introduction to info@nguwellness.com. We review every application personally.
        </p>
        <button className="btn-rose" onClick={() => window.open("mailto:info@nguwellness.com?subject=Therapist%20Application%20-%20NGU%20Wellness")}>
          Email Your Application
        </button>
      </section>

      <Footer />
    </div>
  );
}
