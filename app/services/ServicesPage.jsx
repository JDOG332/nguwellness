"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Nav from "../Nav";
import Footer from "../Footer";

const SPECIALTIES = [
  "Anxiety & Worry", "Panic Attacks", "OCD", "Depression", "Mood Disorders",
  "Grief & Loss", "Trauma", "PTSD", "Life Transitions", "Relationship Issues",
  "Work Burnout", "Self-Esteem", "Identity", "Faith & Spirituality",
  "Postpartum", "Young Adults (18–30)", "Older Adults", "Addiction & Recovery",
  "Children (5+)", "Tweens & Preteens", "Teens & Adolescents", "Teen Anxiety",
  "School Stress", "Behavioral Concerns", "Stress Management", "Avoidance Patterns",
  "Major Life Changes", "Parenting", "LGBTQ+ Identity & Support",
];

const MODALITIES = [
  { abbr: "CBT",  name: "Cognitive Behavioral Therapy",    desc: "Restructures thought patterns driving anxiety, depression, and low mood." },
  { abbr: "ACT",  name: "Acceptance & Commitment Therapy",  desc: "Builds psychological flexibility to move toward what matters." },
  { abbr: "DBT",  name: "Dialectical Behavior Therapy",     desc: "Develops skills in emotional regulation and distress tolerance." },
  { abbr: "EMDR", name: "EMDR",                             desc: "Processes traumatic memories through bilateral stimulation." },
  { abbr: "ERP",  name: "Exposure & Response Prevention",   desc: "Gold-standard treatment for OCD and avoidance-driven anxiety." },
  { abbr: "MI",   name: "Motivational Interviewing",        desc: "Clarifies personal values and builds internal motivation for change." },
  { abbr: "SFBT", name: "Solution-Focused Brief Therapy",   desc: "Focuses on strengths and solutions rather than problems." },
  { abbr: "NAR",  name: "Narrative Therapy",                 desc: "Separates the person from the problem. Reauthors personal stories." },
  { abbr: "HUM",  name: "Humanistic Therapy",               desc: "Centers the whole person: values, potential, and the drive toward growth." },
  { abbr: "SOM",  name: "Somatic Approaches",               desc: "Works with the body's role in storing and releasing stress and trauma." },
];

const INSURANCE = [
  "Aetna", "Anthem / BCBS", "Ambetter", "CareSource", "Cigna",
  "ComPsych", "Frontpath", "Humana", "Medical Mutual", "Optum",
  "SummaCare", "UMR", "United Healthcare", "Wellfleet",
];

const MEDICAID = [
  "AmeriHealth", "Anthem Ohio Medicaid", "Buckeye", "CareSource",
  "Humana", "Molina", "Ohio Medicaid FFS", "OhioRISE",
  "UHC Community Plan", "WellCare",
];

const EAPS = ["Lyra Health", "Optum / UHC EAP", "Spring Health", "Carelon"];

const svcStyles = `
  .svc-hero {
    max-width: var(--max-w);
    margin: 0 auto;
    padding: var(--s-2xl) var(--s-lg) var(--s-xl);
    animation: fadeIn 0.618s var(--ease-phi) both;
  }

  .svc-hero h1 {
    font-size: clamp(var(--t-xl), 5vw, var(--t-2xl));
    margin-bottom: var(--s-sm);
  }

  .svc-hero h1 em {
    font-weight: 400;
    font-style: italic;
    color: var(--rose);
  }

  /* SPECIALTIES */
  .spec-grid {
    display: flex;
    flex-wrap: wrap;
    gap: var(--s-2xs);
    margin-top: var(--s-md);
  }

  .spec-pill {
    font-size: var(--t-sm);
    font-weight: 400;
    color: var(--earth);
    padding: var(--s-2xs) var(--s-xs);
    border: 0.0618rem solid var(--divider);
    transition: all var(--duration) var(--ease-phi);
  }

  .spec-pill:hover {
    border-color: var(--rose);
    color: var(--rose-deep);
  }

  /* MODALITIES */
  .mod-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--s-md);
    margin-top: var(--s-lg);
  }

  .mod-card {
    padding: var(--s-md);
    border: 0.0618rem solid var(--divider);
    transition: all var(--duration) var(--ease-phi);
  }

  .mod-card:hover {
    border-color: var(--rose);
    transform: translateY(-0.236rem);
  }

  .mod-abbr {
    font-family: var(--font-display);
    font-size: var(--t-xs);
    font-weight: 900;
    letter-spacing: 0.236em;
    color: var(--rose);
    margin-bottom: var(--s-3xs);
  }

  .mod-name {
    font-family: var(--font-display);
    font-size: var(--t-md);
    font-weight: 900;
    line-height: 1.1;
    margin-bottom: var(--s-2xs);
  }

  .mod-desc {
    font-size: var(--t-sm);
    font-weight: 300;
    color: var(--earth);
    line-height: 1.618;
  }

  /* INSURANCE */
  .ins-tabs {
    display: flex;
    gap: var(--s-xs);
    margin-bottom: var(--s-lg);
  }

  .ins-tab {
    font-family: var(--font-body);
    font-size: var(--t-sm);
    font-weight: 400;
    padding: var(--s-2xs) var(--s-sm);
    border: 0.0618rem solid var(--divider);
    background: transparent;
    cursor: pointer;
    transition: all var(--duration) var(--ease-phi);
    color: var(--earth);
  }

  .ins-tab.active {
    background: var(--ink);
    color: var(--paper);
    border-color: var(--ink);
  }

  .ins-list {
    display: flex;
    flex-wrap: wrap;
    gap: var(--s-2xs);
  }

  .ins-pill {
    font-size: var(--t-sm);
    font-weight: 400;
    padding: var(--s-2xs) var(--s-xs);
    background: var(--mist);
    color: var(--earth);
    transition: all var(--duration) var(--ease-phi);
  }

  .ins-pill:hover {
    background: var(--divider);
  }

  /* FORMATS */
  .format-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--s-md);
    margin-top: var(--s-lg);
  }

  .format-card {
    padding: var(--s-lg);
    border: 0.0618rem solid var(--divider);
    text-align: center;
  }

  .format-icon {
    font-size: var(--t-xl);
    margin-bottom: var(--s-sm);
    opacity: var(--alpha-phi);
  }

  .format-title {
    font-family: var(--font-display);
    font-size: var(--t-md);
    font-weight: 900;
    margin-bottom: var(--s-2xs);
  }

  .format-desc {
    font-size: var(--t-sm);
    font-weight: 300;
    color: var(--earth);
    line-height: 1.618;
  }

  @media (max-width: 61.8rem) {
    .mod-grid { grid-template-columns: 1fr; }
    .format-grid { grid-template-columns: 1fr; }
  }
`;

export default function ServicesPage() {
  const router = useRouter();
  const [insTab, setInsTab] = useState("commercial");

  const insData = insTab === "commercial" ? INSURANCE : insTab === "medicaid" ? MEDICAID : EAPS;

  return (
    <div>
      <style>{svcStyles}</style>
      <Nav />

      <section className="svc-hero">
        <p className="eyebrow">Our Services</p>
        <h1>Real help. <em>Real tools.</em> Real change.</h1>
        <p style={{ fontSize: "var(--t-md)", fontWeight: 300, color: "var(--earth)", maxWidth: "var(--max-w-narrow)" }}>
          Individual therapy for children, teens, and adults ready for real support.
          In-person in Dayton and Rocky River. Telehealth across all of Ohio.
        </p>
      </section>

      {/* PROMISE STRIP */}
      <section className="dark-strip">
        <p style={{ fontFamily: "var(--font-accent)", fontSize: "var(--t-lg)", fontStyle: "italic", color: "var(--paper)", opacity: "var(--alpha-phi)", marginBottom: "var(--s-sm)", maxWidth: "var(--max-w-narrow)", margin: "0 auto var(--s-sm)" }}>
          No matter what happens. No matter how difficult life gets. No matter how alone you feel.
        </p>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(var(--t-lg), 3.82vw, var(--t-xl))", color: "var(--paper)", marginBottom: "var(--s-xs)" }}>
          Never give up.
        </h2>
        <p style={{ fontFamily: "var(--font-accent)", fontSize: "var(--t-md)", fontStyle: "italic", color: "var(--paper)", opacity: "var(--alpha-ghost)" }}>
          Let us help.
        </p>
      </section>

      {/* FORMAT */}
      <section className="phi-section">
        <div className="phi-wrap">
          <p className="eyebrow">How We Work</p>
          <h2 style={{ fontSize: "clamp(var(--t-lg), 3.82vw, var(--t-xl))", marginBottom: "var(--s-sm)" }}>
            Three ways to connect.
          </h2>
          <hr className="phi-rule" />
          <div className="format-grid">
            <div className="format-card">
              <p className="format-icon">◈</p>
              <p className="format-title">In-Person</p>
              <p className="format-desc">Face-to-face sessions at our Dayton or Rocky River offices. Private, comfortable spaces designed for your comfort.</p>
            </div>
            <div className="format-card">
              <p className="format-icon">◇</p>
              <p className="format-title">Telehealth</p>
              <p className="format-desc">Secure video sessions from anywhere in Ohio. Same quality care, from wherever you feel most comfortable.</p>
            </div>
            <div className="format-card">
              <p className="format-icon">⟡</p>
              <p className="format-title">Flexible Scheduling</p>
              <p className="format-desc">Daytime and evening hours available. We work around your life, not the other way around.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALTIES */}
      <section className="phi-section" style={{ background: "var(--mist)" }}>
        <div className="phi-wrap">
          <p className="eyebrow">What We Treat</p>
          <h2 style={{ fontSize: "clamp(var(--t-lg), 3.82vw, var(--t-xl))", marginBottom: "var(--s-sm)" }}>
            Concerns we specialize in.
          </h2>
          <p style={{ fontSize: "var(--t-base)", fontWeight: 300, color: "var(--earth)", maxWidth: "var(--max-w-narrow)" }}>
            Our team covers a broad range of concerns. If you do not see yours listed, reach out — we can likely help or refer you to someone who can.
          </p>
          <div className="spec-grid">
            {SPECIALTIES.map(s => <span key={s} className="spec-pill">{s}</span>)}
          </div>
        </div>
      </section>

      {/* MODALITIES */}
      <section className="phi-section">
        <div className="phi-wrap">
          <p className="eyebrow">Our Approaches</p>
          <h2 style={{ fontSize: "clamp(var(--t-lg), 3.82vw, var(--t-xl))", marginBottom: "var(--s-sm)" }}>
            Evidence-based modalities.
          </h2>
          <p style={{ fontSize: "var(--t-base)", fontWeight: 300, color: "var(--earth)", maxWidth: "var(--max-w-narrow)" }}>
            Every therapist at NGU is trained in proven, research-backed approaches. Your therapist will tailor the approach to fit you.
          </p>
          <div className="mod-grid">
            {MODALITIES.map(m => (
              <div key={m.abbr} className="mod-card">
                <p className="mod-abbr">{m.abbr}</p>
                <p className="mod-name">{m.name}</p>
                <p className="mod-desc">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSURANCE */}
      <section className="phi-section" style={{ background: "var(--mist)" }}>
        <div className="phi-wrap">
          <p className="eyebrow">Insurance & Payment</p>
          <h2 style={{ fontSize: "clamp(var(--t-lg), 3.82vw, var(--t-xl))", marginBottom: "var(--s-sm)" }}>
            We work with your plan.
          </h2>
          <p style={{ fontSize: "var(--t-base)", fontWeight: 300, color: "var(--earth)", maxWidth: "var(--max-w-narrow)", marginBottom: "var(--s-lg)" }}>
            NGU Wellness accepts most major insurance, Medicaid, and EAP plans. Not sure about your coverage? We will verify it for you — free.
          </p>
          <div className="ins-tabs">
            <button className={`ins-tab${insTab === "commercial" ? " active" : ""}`} onClick={() => setInsTab("commercial")}>Commercial</button>
            <button className={`ins-tab${insTab === "medicaid" ? " active" : ""}`} onClick={() => setInsTab("medicaid")}>Medicaid</button>
            <button className={`ins-tab${insTab === "eap" ? " active" : ""}`} onClick={() => setInsTab("eap")}>EAP</button>
          </div>
          <div className="ins-list">
            {insData.map(i => <span key={i} className="ins-pill">{i}</span>)}
          </div>
          <p style={{ marginTop: "var(--s-md)", fontSize: "var(--t-sm)", color: "var(--warm-gray)", fontStyle: "italic" }}>
            Coverage varies by plan. We verify benefits before your first session at no charge.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="phi-section" style={{ textAlign: "center" }}>
        <div className="phi-wrap">
          <p className="eyebrow">Get Started</p>
          <h2 style={{ fontSize: "clamp(var(--t-lg), 3.82vw, var(--t-xl))", marginBottom: "var(--s-md)" }}>
            Your first step is the hardest. We will take it with you.
          </h2>
          <p style={{ fontSize: "var(--t-md)", fontWeight: 300, color: "var(--earth)", maxWidth: "var(--max-w-narrow)", margin: "0 auto var(--s-lg)" }}>
            Complete our brief intake survey and we will match you with the right therapist for your needs.
          </p>
          <div style={{ display: "flex", gap: "var(--s-sm)", justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn-rose" onClick={() => window.open("https://therapyportal.com/p/nguwellness", "_blank")}>Begin Intake Survey</button>
            <button className="btn-outline" onClick={() => router.push("/therapists")}>Browse Therapists</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
