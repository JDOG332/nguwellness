"use client";
import { useRouter } from "next/navigation";
import Nav from "./Nav";
import Footer from "./Footer";

const homeStyles = `
  .hero-logo {
    display: flex;
    justify-content: center;
    padding: var(--s-xl) var(--s-lg) var(--s-md);
    max-width: var(--max-w);
    margin: 0 auto;
  }

  .hero-logo img {
    width: 100%;
    max-width: 42.36rem;
    height: auto;
  }

  .hero-content {
    text-align: center;
    padding: 0 var(--s-lg) var(--s-md);
    max-width: var(--max-w);
    margin: 0 auto;
    animation: fadeIn 0.618s var(--ease-phi) both;
  }

  .hero-eyebrow {
    font-family: var(--font-accent);
    font-size: var(--t-md);
    font-style: italic;
    color: var(--earth);
    margin-top: var(--s-sm);
    opacity: var(--alpha-phi);
  }

  .hero h1 {
    font-size: clamp(2.618rem, 6.18vw, 6.854rem);
    font-weight: 900;
    line-height: 1.0;
    letter-spacing: -0.0382em;
    color: var(--ink);
  }

  .hero h1 em {
    font-style: italic;
    color: var(--rose);
    font-weight: 400;
    font-family: var(--font-display);
  }

  .hero-change {
    background: linear-gradient(90deg, var(--ink) 0%, var(--earth) 10%, var(--rose) 38.2%, var(--pink) 61.8%, var(--gold) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-style: normal;
    font-weight: 900;
  }

  .hero-stats {
    display: flex;
    gap: var(--s-2xl);
    padding-top: var(--s-md);
    border-top: 0.0618rem solid var(--divider);
    max-width: var(--max-w);
    margin: 0 auto;
    padding-left: var(--s-lg);
    padding-right: var(--s-lg);
    padding-bottom: var(--s-md);
  }

  .stat-num {
    font-family: var(--font-display);
    font-size: var(--t-xl);
    font-weight: 400;
    line-height: 1;
    color: var(--ink);
  }

  .stat-label {
    font-size: var(--t-xs);
    font-weight: 400;
    color: var(--warm-gray);
    margin-top: var(--s-3xs);
    letter-spacing: 0.0618em;
  }

  /* ── PROMISE STRIP ── */
  .promise {
    background: var(--ink);
    padding: var(--s-lg) var(--s-lg);
    text-align: center;
    animation: fadeIn 0.618s 0.236s var(--ease-phi) both;
  }

  .promise-accent {
    font-family: var(--font-accent);
    font-size: var(--t-base);
    font-style: italic;
    color: var(--gold);
    opacity: var(--alpha-phi);
    margin-bottom: var(--s-xs);
  }

  .promise h2 {
    font-family: var(--font-display);
    font-size: clamp(var(--t-xl), 4.236vw, var(--t-3xl));
    font-weight: 900;
    background: var(--brand-grad);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -0.0382em;
    margin-bottom: var(--s-md);
  }

  .promise-sub {
    font-family: var(--font-accent);
    font-size: var(--t-lg);
    font-style: italic;
    color: var(--paper);
    opacity: var(--alpha-phi);
    max-width: var(--max-w-narrow);
    margin: 0 auto;
  }

  /* ── WHY SECTION ── */
  .why-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--s-md);
    margin-top: var(--s-xl);
  }

  .why-card {
    padding: var(--s-lg);
    border: 0.0618rem solid var(--divider);
    transition: all var(--duration) var(--ease-phi);
  }

  .why-card:hover {
    border-color: var(--rose);
    transform: translateY(-0.236rem);
  }

  .why-icon {
    font-size: var(--t-xl);
    margin-bottom: var(--s-md);
    display: block;
    opacity: var(--alpha-phi);
  }

  .why-title {
    font-family: var(--font-display);
    font-size: var(--t-md);
    font-weight: 900;
    margin-bottom: var(--s-xs);
  }

  .why-desc {
    font-size: var(--t-sm);
    font-weight: 300;
    color: var(--earth);
    line-height: 1.618;
  }

  /* ── LOCATIONS ── */
  .locations-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--s-md);
  }

  .loc-card {
    padding: var(--s-lg);
    border: 0.0618rem solid var(--divider);
    transition: all var(--duration) var(--ease-phi);
  }

  .loc-card:hover {
    border-color: var(--rose);
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
    font-size: var(--t-lg);
    font-weight: 900;
    margin-bottom: var(--s-xs);
  }

  .loc-addr {
    font-size: var(--t-sm);
    font-weight: 300;
    color: var(--earth);
    line-height: 1.618;
  }

  /* ── CTA BAND ── */
  .cta-band {
    text-align: center;
    padding: var(--s-2xl) var(--s-lg);
  }

  .cta-band h2 {
    font-size: clamp(var(--t-xl), 3.82vw, var(--t-2xl));
    margin-bottom: var(--s-md);
  }

  .cta-band p {
    font-size: var(--t-md);
    font-weight: 300;
    color: var(--earth);
    max-width: var(--max-w-narrow);
    margin: 0 auto var(--s-xl);
  }

  .cta-buttons {
    display: flex;
    gap: var(--s-sm);
    justify-content: center;
    flex-wrap: wrap;
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 61.8rem) {
    .hero-logo img { max-width: 26.18rem; }
    .hero h1 { font-size: clamp(2.618rem, 8vw, 4.236rem); }
    .hero-stats { gap: var(--s-xl); flex-wrap: wrap; }
    .why-grid { grid-template-columns: 1fr; }
    .locations-grid { grid-template-columns: 1fr; }
  }
`;

export default function HomePage() {
  const router = useRouter();

  return (
    <div>
      <style>{homeStyles}</style>
      <Nav hideLogo />

      {/* ── LOGO ── */}
      <div className="hero-logo">
        <img src="/images/NGU Wellness.png" alt="NGU Wellness" />
      </div>

      {/* ── HERO ── */}
      <div className="hero-content">
        <h1>Real help. <span className="hero-change">Real change.</span></h1>
      </div>

      {/* ── PROMISE STRIP ── */}
      <section className="promise">
        <h2>Never Give Up.</h2>
        <p className="promise-sub">
          Never give up hope. Never give up on life. Never Give Up Wellness.
        </p>
      </section>

      {/* ── STATS ── */}
      <div className="hero-stats">
        <div>
          <p className="stat-num">2021</p>
          <p className="stat-label">Founded</p>
        </div>
        <div>
          <p className="stat-num">2</p>
          <p className="stat-label">Ohio Locations</p>
        </div>
        <div>
          <p className="stat-num">595+</p>
          <p className="stat-label">Years of Life Experience</p>
        </div>
        <div>
          <p className="stat-num">14+</p>
          <p className="stat-label">Insurance Plans Accepted</p>
        </div>
      </div>

      {/* ── WHY NGU ── */}
      <section className="phi-section">
        <div className="phi-wrap">
          <p className="eyebrow anim-2">Why NGU Wellness</p>
          <h2 className="anim-2" style={{ fontSize: "clamp(var(--t-lg), 3.82vw, var(--t-2xl))", marginBottom: "var(--s-sm)" }}>
            A practice built differently.
          </h2>
          <hr className="phi-rule anim-2" />
          <p className="anim-3" style={{ fontSize: "var(--t-md)", fontWeight: 300, color: "var(--earth)", maxWidth: "var(--max-w-narrow)" }}>
            We built NGU Wellness with a team-based model so more people get matched with
            the right therapist, the right approach, and the right fit — faster.
          </p>

          <div className="why-grid anim-4">
            <div className="why-card">
              <span className="why-icon">⟡</span>
              <p className="why-title">Evidence-Based Care</p>
              <p className="why-desc">
                Every therapist is licensed, vetted, and trained in proven approaches — CBT, EMDR, DBT, ACT, and more.
              </p>
            </div>
            <div className="why-card">
              <span className="why-icon">◈</span>
              <p className="why-title">Collaborative Approach</p>
              <p className="why-desc">
                We work with you, not at you. Together, we identify goals, build skills, and address challenges creatively.
              </p>
            </div>
            <div className="why-card">
              <span className="why-icon">◇</span>
              <p className="why-title">Flexible Access</p>
              <p className="why-desc">
                Two Ohio locations, statewide telehealth, evenings available. We accept most major insurance and Medicaid.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCATIONS ── */}
      <section className="phi-section">
        <div className="phi-wrap">
          <p className="eyebrow">Our Locations</p>
          <h2 style={{ fontSize: "clamp(var(--t-lg), 3.82vw, var(--t-2xl))", marginBottom: "var(--s-lg)" }}>
            Two offices. One standard.
          </h2>
          <div className="locations-grid">
            <div className="loc-card">
              <p className="loc-label">Dayton</p>
              <p className="loc-name">Patterson Road</p>
              <p className="loc-addr">
                453 Patterson Rd., Suite A<br />
                Dayton, OH 45419
              </p>
            </div>
            <div className="loc-card">
              <p className="loc-label">Rocky River</p>
              <p className="loc-name">Center Ridge Road</p>
              <p className="loc-addr">
                20525 Center Ridge Rd., Suite 604<br />
                Rocky River, OH 44116
              </p>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "var(--s-lg)" }}>
            <p style={{ fontFamily: "var(--font-accent)", fontStyle: "italic", fontSize: "var(--t-md)", color: "var(--warm-gray)" }}>
              Plus statewide telehealth across all of Ohio.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-band" style={{ background: "var(--mist)" }}>
        <p className="eyebrow">Take the first step</p>
        <h2>Ready when you are.</h2>
        <p>
          Never give up on yourself. We are here to help you figure out the rest.
        </p>
        <div className="cta-buttons">
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
