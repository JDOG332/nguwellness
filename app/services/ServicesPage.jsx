"use client";
import { useState } from "react";
import Link from "next/link";
import { COMMERCIAL, MARKETPLACE, MEDICAID, MEDICARE_ADVANTAGE, EAP } from "../../data/insurance";
import { INTAKE_FORM } from "../../data/site";
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
  { abbr: "ERP",  name: "Exposure & Response Prevention",   desc: "Gold-standard treatment for OCD and avoidance-driven anxiety." },
  { abbr: "MI",   name: "Motivational Interviewing",        desc: "Clarifies personal values and builds internal motivation for change." },
  { abbr: "SFBT", name: "Solution-Focused Brief Therapy",   desc: "Focuses on strengths and solutions rather than problems." },
  { abbr: "NAR",  name: "Narrative Therapy",                 desc: "Separates the person from the problem. Reauthors personal stories." },
  { abbr: "HUM",  name: "Humanistic Therapy",               desc: "Centers the whole person: values, potential, and the drive toward growth." },
  { abbr: "SOM",  name: "Somatic Approaches",               desc: "Works with the body's role in storing and releasing stress and trauma." },
];

const INS_TABS = [
  ["commercial", "Commercial", COMMERCIAL],
  ["marketplace", "Marketplace", MARKETPLACE],
  ["medicaid", "Ohio Medicaid", MEDICAID],
  ["medicare", "Medicare Advantage", MEDICARE_ADVANTAGE],
  ["eap", "EAP", EAP],
];

const KINDS = [
  { title: "Individual therapy", desc: "One-on-one sessions for adults, teens, and children, built around your goals.", href: "/therapists" },
  { title: "Child & teen therapy", desc: "Therapists who work with children from age 5 and with preteens and teens.", href: "/therapy/children-and-teens" },
  { title: "Couples & family therapy", desc: "Help with communication, conflict, and change. Couples and family sessions are self-pay.", href: "/therapy/couples" },
  { title: "Telehealth", desc: "Secure video sessions from anywhere in Ohio.", href: "/telehealth" },
];

const svcStyles = `
  /* ═══════════════════════════════════════════════════
     SERVICES PAGE — Φ DESIGN SYSTEM STRICT COMPLIANCE
     Zero inline styles. Every value from the Sacred Scale.
     ═══════════════════════════════════════════════════ */

  /* ── HERO ── */
  .svc-hero {
    max-width: var(--max-w);
    margin: 0 auto;
    padding: var(--s-xl) var(--s-lg) var(--s-lg);
    animation: fadeIn 0.618s var(--ease-phi) both;
  }

  .svc-hero h1 {
    font-size: clamp(var(--t-xl), 5vw + 1rem, var(--t-2xl));
    margin-bottom: var(--s-sm);
  }

  .svc-hero h1 em {
    font-weight: 400;
    font-style: italic;
    color: var(--rose);
  }

  .svc-hero-desc {
    font-size: var(--t-md);
    font-weight: 300;
    color: var(--earth);
    max-width: var(--max-w-narrow);
  }

  /* ── PROMISE STRIP ── */
  .promise-accent {
    font-family: var(--font-accent);
    font-size: var(--t-lg);
    font-style: italic;
    color: var(--paper);
    opacity: var(--alpha-phi);
    max-width: var(--max-w-narrow);
    margin: 0 auto var(--s-sm);
  }

  .promise-title {
    font-family: var(--font-display);
    font-size: clamp(var(--t-lg), 3.82vw + 1rem, var(--t-xl));
    color: var(--paper);
    margin-bottom: var(--s-xs);
  }

  .promise-sub {
    font-family: var(--font-accent);
    font-size: var(--t-md);
    font-style: italic;
    color: var(--paper);
    opacity: 0.85;
  }

  /* ── SECTION HEADINGS (reusable pattern) ── */
  .svc-section-title {
    font-size: clamp(var(--t-lg), 3.82vw + 1rem, var(--t-xl));
    margin-bottom: var(--s-sm);
  }

  .svc-section-desc {
    font-size: var(--t-base);
    font-weight: 300;
    color: var(--earth);
    max-width: var(--max-w-narrow);
  }

  .svc-section-desc-spaced {
    font-size: var(--t-base);
    font-weight: 300;
    color: var(--earth);
    max-width: var(--max-w-narrow);
    margin-bottom: var(--s-lg);
  }

  /* ── FORMATS ── */
  .format-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--s-md);
    margin-top: var(--s-lg);
  }

  .format-card {
    padding: var(--s-lg);
    border: 1px solid var(--divider);
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

  /* ── SPECIALTIES ── */
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
    border: 1px solid var(--divider);
    transition: all var(--duration) var(--ease-phi);
  }

  .spec-pill:hover {
    border-color: var(--rose);
    color: var(--rose-deep);
  }

  /* ── MODALITIES ── */
  .mod-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--s-md);
    margin-top: var(--s-lg);
  }

  .mod-card {
    padding: var(--s-md);
    border: 1px solid var(--divider);
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
    color: #A6520F;
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

  /* ── INSURANCE ── */
  .ins-tabs {
    display: flex;
    flex-wrap: wrap;
    gap: var(--s-xs);
    margin-bottom: var(--s-lg);
  }

  .ins-tab {
    font-family: var(--font-body);
    font-size: var(--t-sm);
    font-weight: 400;
    padding: var(--s-2xs) var(--s-sm);
    border: 1px solid var(--divider);
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

  .ins-disclaimer {
    margin-top: var(--s-md);
    font-size: var(--t-sm);
    color: var(--warm-gray);
    font-style: italic;
  }

  /* ── BG MIST (shared utility) ── */
  .bg-mist {
    background: var(--mist);
  }

  /* ── CTA ── */
  .cta-center {
    text-align: center;
  }

  .cta-title {
    font-size: clamp(var(--t-lg), 3.82vw + 1rem, var(--t-xl));
    margin-bottom: var(--s-md);
  }

  .cta-desc {
    font-size: var(--t-md);
    font-weight: 300;
    color: var(--earth);
    max-width: var(--max-w-narrow);
    margin: 0 auto var(--s-lg);
  }

  .cta-actions {
    display: flex;
    gap: var(--s-sm);
    justify-content: center;
    flex-wrap: wrap;
  }

  .kinds-grid { grid-template-columns: repeat(4, 1fr); }
  .kind-card { text-decoration: none; color: inherit; display: block; transition: border-color var(--duration) var(--ease-phi); }
  .kind-card:hover { border-color: var(--rose); }
  .kind-more { margin-top: var(--s-xs); font-size: 0.875rem; font-weight: 700; color: var(--rose-deep); }

  /* ── RESPONSIVE ── */
  @media (max-width: 61.8rem) {
    .kinds-grid { grid-template-columns: 1fr 1fr; }
    .mod-grid { grid-template-columns: 1fr; }
    .format-grid { grid-template-columns: 1fr; }
  }
`;

export default function ServicesPage() {
  const [insTab, setInsTab] = useState("commercial");

  const insData = INS_TABS.find(([k]) => k === insTab)[2];

  return (
    <div>
      <style>{svcStyles}</style>
      <Nav />
      <main>

      {/* ── HERO ── */}
      <section className="svc-hero">
        <p className="eyebrow">Our Services</p>
        <h1>Real help. <em>Real tools.</em> Real change.</h1>
        <p className="svc-hero-desc">
          Therapy for children, teens, adults, couples, and families.
          In-person in Dayton and Rocky River. Telehealth across all of Ohio.
        </p>
      </section>

      {/* ── PROMISE STRIP ── */}
      <section className="dark-strip">
        <p className="promise-accent">
          No matter what happens. No matter how difficult life gets. No matter how alone you feel.
        </p>
        <h2 className="promise-title">Never give up.</h2>
        <p className="promise-sub">Let us help.</p>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="phi-section">
        <div className="phi-wrap">
          <p className="eyebrow">How We Work</p>
          <h2 className="svc-section-title">Three ways to connect.</h2>
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

      {/* ── KINDS OF THERAPY ── */}
      <section className="phi-section bg-mist">
        <div className="phi-wrap">
          <p className="eyebrow">What We Offer</p>
          <h2 className="svc-section-title">Kinds of therapy.</h2>
          <hr className="phi-rule" />
          <div className="format-grid kinds-grid">
            {KINDS.map(k => (
              <Link key={k.title} href={k.href} className="format-card kind-card">
                <p className="format-title">{k.title}</p>
                <p className="format-desc">{k.desc}</p>
                <p className="kind-more">Learn more →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECIALTIES ── */}
      <section className="phi-section">
        <div className="phi-wrap">
          <p className="eyebrow">What We Treat</p>
          <h2 className="svc-section-title">Concerns we specialize in.</h2>
          <p className="svc-section-desc">
            Our team covers a broad range of concerns. If you do not see yours listed, reach out. We can likely help or refer you to someone who can.
          </p>
          <div className="spec-grid">
            {SPECIALTIES.map(s => <span key={s} className="spec-pill">{s}</span>)}
          </div>
        </div>
      </section>

      {/* ── MODALITIES ── */}
      <section className="phi-section bg-mist">
        <div className="phi-wrap">
          <p className="eyebrow">Our Approaches</p>
          <h2 className="svc-section-title">Evidence-based modalities.</h2>
          <p className="svc-section-desc">
            Our therapists use proven, research-backed approaches. Each therapist's profile lists the ones they use, and your therapist will tailor the approach to fit you.
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

      {/* ── INSURANCE ── */}
      <section className="phi-section">
        <div className="phi-wrap">
          <p className="eyebrow">Insurance &amp; Payment</p>
          <h2 className="svc-section-title">We work with your plan.</h2>
          <p className="svc-section-desc-spaced">
            NGU Wellness accepts most major insurance, Ohio Medicaid plans, and several EAPs. Not sure about your coverage? We will check it for you, free.
          </p>
          <div className="ins-tabs" role="tablist">
            {INS_TABS.map(([k, label]) => (
              <button key={k} role="tab" aria-selected={insTab === k} className={`ins-tab${insTab === k ? " active" : ""}`} onClick={() => setInsTab(k)}>{label}</button>
            ))}
          </div>
          <div className="ins-list">
            {insData.map(i => <span key={i} className="ins-pill">{i}</span>)}
          </div>
          <p className="ins-disclaimer">
            Coverage varies by plan. We verify benefits before your first session at no charge. Self-pay rates and out-of-network options are on <Link href="/insurance">Insurance &amp; Fees</Link>.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="phi-section cta-center">
        <div className="phi-wrap">
          <p className="eyebrow">Get Started</p>
          <h2 className="cta-title">Your first step is the hardest. We will take it with you.</h2>
          <p className="cta-desc">
            Fill out our quick contact form and we will match you with the right therapist for your needs.
          </p>
          <div className="cta-actions">
            <a className="btn-rose" href={INTAKE_FORM} target="_blank" rel="noopener noreferrer">Get Started</a>
            <Link className="btn-outline" href="/therapists">Browse Therapists</Link>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
}
