"use client";
import { useRouter } from "next/navigation";
import Nav from "../Nav";
import Footer from "../Footer";

const aboutStyles = `
  /* ═══════════════════════════════════════════════════
     ABOUT PAGE — Φ DESIGN SYSTEM STRICT COMPLIANCE
     Zero inline styles. Every value from the Sacred Scale.
     ═══════════════════════════════════════════════════ */

  /* ── HERO ── */
  .about-hero {
    display: grid;
    grid-template-columns: 1.618fr 1fr;
    gap: var(--s-xl);
    max-width: var(--max-w);
    margin: 0 auto;
    padding: var(--s-xl) var(--s-lg);
    align-items: start;
    animation: fadeIn 0.618s var(--ease-phi) both;
  }

  .about-hero-title {
    font-size: clamp(var(--t-xl), 5vw + 1rem, var(--t-2xl));
    margin-bottom: var(--s-md);
  }

  .about-hero-desc {
    font-size: var(--t-md);
    font-weight: 300;
    color: var(--earth);
    max-width: var(--max-w-narrow);
    margin-bottom: var(--s-lg);
  }

  .about-hero-actions {
    display: flex;
    gap: var(--s-sm);
    flex-wrap: wrap;
  }

  .hero-stats {
    display: flex;
    gap: var(--s-md);
    margin-top: var(--s-xl);
    padding-top: var(--s-md);
    border-top: 1px solid var(--divider);
    flex-wrap: wrap;
  }

  .hero-stat {
    text-align: center;
  }

  .hero-stat-value {
    font-family: var(--font-display);
    font-size: var(--t-md);
    font-weight: 900;
    line-height: 1.0;
    letter-spacing: -0.0382em;
  }

  .hero-stat-label {
    font-size: var(--t-xs);
    font-weight: 300;
    color: var(--warm-gray);
    margin-top: var(--s-3xs);
    letter-spacing: 0.0618em;
  }

  .ngu-box {
    background: var(--ink);
    padding: var(--s-xl);
    border-radius: var(--s-2xs);
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  .ngu-box-title {
    font-family: var(--font-display);
    font-size: clamp(var(--t-xl), 4.236vw + 1rem, var(--t-2xl));
    color: var(--paper);
    margin-bottom: var(--s-md);
  }

  .ngu-box-sub {
    font-family: var(--font-accent);
    font-size: var(--t-md);
    font-style: italic;
    color: var(--paper);
    opacity: var(--alpha-phi);
  }

  /* ── VISION MISSION VALUES ── */
  .vmv-section {
    background: var(--mist);
    padding: var(--s-xl) var(--s-lg);
  }

  .vmv-header {
    text-align: center;
    margin-bottom: var(--s-xl);
  }

  .vmv-title {
    font-family: var(--font-display);
    font-size: clamp(var(--t-lg), 3.82vw + 1rem, var(--t-xl));
    margin-bottom: var(--s-xs);
  }

  .vmv-top-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--s-lg);
    margin-bottom: var(--s-lg);
  }

  .vmv-block {
    padding: var(--s-lg);
    background: var(--paper);
    border-radius: var(--s-2xs);
    border: 1px solid var(--divider);
  }

  .vmv-values-block {
    width: 100%;
  }

  .vmv-heading {
    font-family: var(--font-display);
    font-size: clamp(var(--t-md), 2.618vw + 0.5rem, var(--t-lg));
    margin-bottom: var(--s-sm);
    color: var(--ink);
  }

  .vmv-text {
    font-size: var(--t-base);
    font-weight: 300;
    line-height: 1.618;
    color: var(--earth);
  }

  .vmv-values-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--s-sm) var(--s-lg);
  }

  .vmv-value-item {
    display: flex;
    gap: var(--s-xs);
    align-items: baseline;
    font-size: var(--t-base);
    font-weight: 300;
    line-height: 1.618;
    color: var(--earth);
  }

  .vmv-value-item strong {
    font-weight: 600;
    color: var(--ink);
  }

  .vmv-value-icon {
    color: var(--gold);
    flex-shrink: 0;
    font-size: var(--t-sm);
  }

  /* ── STATS BAR ── */
  .stats-bar {
    display: flex;
    gap: var(--s-2xl);
    justify-content: center;
    padding: var(--s-xl) var(--s-lg);
    border-top: 1px solid var(--divider);
    border-bottom: 1px solid var(--divider);
  }

  .stat-item {
    text-align: center;
  }

  .stat-value {
    font-family: var(--font-display);
    font-size: var(--t-xl);
    font-weight: 900;
    line-height: 1.0;
  }

  .stat-label {
    font-size: var(--t-xs);
    font-weight: 400;
    color: var(--warm-gray);
    margin-top: var(--s-3xs);
    letter-spacing: 0.0618em;
  }

  /* ── WHY NGU ── */
  .why-ngu-title {
    font-size: clamp(var(--t-lg), 3.82vw + 1rem, var(--t-2xl));
    margin-bottom: var(--s-sm);
  }

  .why-ngu-desc {
    font-size: var(--t-md);
    font-weight: 300;
    color: var(--earth);
    max-width: var(--max-w-narrow);
    margin-bottom: var(--s-xl);
  }

  .pillar-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--s-md);
  }

  .pillar {
    padding: var(--s-xl) var(--s-lg);
    border: 1px solid var(--divider);
    transition: all var(--duration) var(--ease-phi);
  }

  .pillar:hover {
    border-color: var(--rose);
    transform: translateY(-0.236rem);
  }

  .pillar-icon {
    font-size: var(--t-md);
    opacity: var(--alpha-phi);
  }

  .pillar-title {
    font-family: var(--font-display);
    font-size: var(--t-md);
    font-weight: 900;
    margin-bottom: var(--s-xs);
    white-space: nowrap;
  }

  .pillar-title-row {
    display: flex;
    align-items: center;
    gap: var(--s-xs);
    margin-bottom: var(--s-xs);
  }

  .pillar-desc {
    font-size: var(--t-base);
    font-weight: 300;
    color: var(--earth);
    line-height: 1.618;
  }

  /* ── FOUNDERS ── */
  .founders-header {
    display: flex;
    align-items: center;
    gap: var(--s-lg);
    margin-bottom: var(--s-xl);
  }

  .founders-title {
    font-family: var(--font-display);
    font-size: clamp(var(--t-lg), 3.82vw + 1rem, var(--t-xl));
    font-weight: 900;
    letter-spacing: -0.0236em;
    white-space: nowrap;
    color: var(--ink);
    flex-shrink: 0;
  }

  .founders-divider {
    width: var(--s-3xs);
    align-self: stretch;
    background: var(--rose);
    border-radius: var(--s-sm);
    flex-shrink: 0;
  }

  .founders-quote {
    font-family: var(--font-accent);
    font-style: italic;
    font-size: clamp(var(--t-base), 2vw + 0.5rem, var(--t-md));
    color: var(--earth);
    line-height: 1.618;
    opacity: var(--alpha-phi);
  }

  .founders-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--s-xl);
    align-items: stretch;
  }

  .founder-card {
    display: flex;
    flex-direction: column;
  }

  .founder-card .bio-photo-wrap {
    margin-bottom: var(--s-md);
  }

  .founder-info {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .founder-card .bio-details {
    margin-top: auto;
  }

  .founder-actions {
    padding-top: var(--s-md);
  }

  .founder-name {
    font-family: var(--font-display);
    font-size: clamp(var(--t-lg), 2.618vw + 0.5rem, var(--t-xl));
    font-weight: 900;
    line-height: 1.0;
    letter-spacing: -0.0382em;
    margin-bottom: var(--s-3xs);
  }

  .bio-photo-wrap {
    position: relative;
    overflow: hidden;
    background: var(--mist);
  }

  .bio-photo {
    width: 100%;
    aspect-ratio: 1 / 1.236;
    object-fit: cover;
    object-position: top center;
    display: block;
  }

  .bio-photo-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: var(--s-3xs);
    background: var(--rose);
  }

  .bio-photo-bar-earth {
    background: var(--earth);
  }

  .bio-creds {
    font-size: var(--t-base);
    font-weight: 400;
    color: var(--warm-gray);
    margin-bottom: var(--s-md);
  }

  .bio-p {
    font-size: var(--t-base);
    font-weight: 300;
    color: var(--earth);
    line-height: 1.618;
    margin-bottom: var(--s-md);
    max-width: var(--max-w-narrow);
  }

  .bio-details {
    display: flex;
    flex-direction: column;
    gap: var(--s-xs);
    margin-top: var(--s-lg);
    padding-top: var(--s-lg);
    border-top: 1px solid var(--divider);
  }

  .bio-detail {
    display: flex;
    gap: var(--s-md);
    align-items: baseline;
  }

  .bio-detail-label {
    font-size: var(--t-xs);
    font-weight: 400;
    letter-spacing: 0.236em;
    text-transform: uppercase;
    color: var(--warm-gray);
    min-width: 6.18rem;
    flex-shrink: 0;
  }

  .bio-detail-value {
    font-size: var(--t-base);
    color: var(--earth);
  }

  .eyebrow-earth {
    color: var(--earth);
  }

  .phi-rule-earth {
    background: var(--earth);
  }

  /* ── TIMELINE ── */
  .origin-intro {
    text-align: center;
    max-width: var(--max-w-narrow);
    margin: 0 auto var(--s-xl);
  }

  .origin-title {
    font-size: clamp(var(--t-lg), 3.82vw + 1rem, var(--t-xl));
    margin-bottom: var(--s-sm);
  }

  .origin-rule {
    margin: var(--s-sm) auto var(--s-md);
  }

  .origin-desc {
    font-size: var(--t-base);
    font-weight: 300;
    color: var(--earth);
    line-height: 1.618;
  }

  .journey-timeline {
    position: relative;
    padding: var(--s-lg) 0;
  }

  .journey-timeline::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 1px;
    background: var(--divider);
    transform: translateX(-50%);
  }

  .tl-year-group {
    position: relative;
    margin-bottom: var(--s-xl);
  }

  .tl-year-group:last-child {
    margin-bottom: 0;
  }

  .tl-year-marker {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: center;
    margin-bottom: var(--s-md);
  }

  .tl-year-badge {
    background: var(--ink);
    color: var(--paper);
    font-family: var(--font-display);
    font-size: var(--t-base);
    font-weight: 700;
    letter-spacing: 0.0618em;
    padding: var(--s-2xs) var(--s-md);
    border-radius: var(--s-2xl);
  }

  .tl-year-badge.milestone {
    background: var(--rose-deep);
  }

  .tl-entries {
    display: flex;
    flex-direction: column;
    gap: var(--s-sm);
  }

  .tl-entry {
    display: grid;
    grid-template-columns: 1fr var(--s-lg) 1fr;
    gap: 0;
    align-items: start;
    position: relative;
  }

  .tl-entry-left {
    text-align: right;
    padding-right: var(--s-md);
  }

  .tl-entry-right {
    text-align: left;
    padding-left: var(--s-md);
  }

  .tl-entry-dot-col {
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 1;
  }

  .tl-entry-dot {
    width: var(--s-xs);
    height: var(--s-xs);
    border-radius: 50%;
    background: var(--paper);
    border: 1px solid var(--rose);
    flex-shrink: 0;
    margin-top: var(--s-3xs);
  }

  .tl-entry-dot.major {
    width: var(--s-sm);
    height: var(--s-sm);
    background: var(--rose-deep);
    border-color: var(--rose-deep);
  }

  .tl-entry-date {
    font-size: var(--t-xs);
    font-weight: 400;
    letter-spacing: 0.146em;
    text-transform: uppercase;
    color: var(--warm-gray);
    margin-bottom: var(--s-3xs);
  }

  .tl-entry-title {
    font-family: var(--font-display);
    font-size: var(--t-base);
    font-weight: 700;
    color: var(--ink);
    margin-bottom: var(--s-3xs);
  }

  .tl-entry-desc {
    font-size: var(--t-base);
    font-weight: 300;
    color: var(--earth);
    line-height: 1.618;
  }

  .tl-entry-person {
    font-size: var(--t-base);
    font-weight: 400;
    color: var(--ink);
  }

  .tl-entry-role {
    font-size: var(--t-xs);
    font-weight: 300;
    color: var(--warm-gray);
  }

  /* ── COMMUNITY (dark strip) ── */
  .community-grid {
    display: grid;
    grid-template-columns: 1fr 1.618fr;
    gap: var(--s-xl);
    align-items: start;
    text-align: left;
  }

  .community-eyebrow {
    color: var(--gold);
    opacity: var(--alpha-phi);
  }

  .community-headline {
    font-family: var(--font-accent);
    font-size: clamp(var(--t-lg), 2.618vw + 0.5rem, var(--t-xl));
    font-style: italic;
    color: var(--paper);
    line-height: 1.382;
  }

  .community-intro {
    font-size: var(--t-base);
    font-weight: 300;
    color: var(--paper);
    opacity: var(--alpha-phi);
    line-height: 1.618;
    margin-bottom: var(--s-lg);
  }

  .community-items {
    display: flex;
    flex-direction: column;
    gap: var(--s-md);
  }

  .community-item {
    display: flex;
    align-items: baseline;
    gap: var(--s-sm);
  }

  .community-dot {
    width: var(--s-xs);
    height: var(--s-xs);
    border-radius: var(--s-2xl);
    background: var(--gold);
    flex-shrink: 0;
    margin-top: var(--s-2xs);
  }

  .community-text {
    font-size: var(--t-base);
    font-weight: 300;
    color: var(--paper);
    line-height: 1.618;
    opacity: var(--alpha-phi);
  }

  .community-text strong {
    font-weight: 400;
    color: var(--paper);
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

  /* ── RESPONSIVE ── */
  @media (max-width: 61.8rem) {
    .about-hero { grid-template-columns: 1fr; }
    .hero-stats { gap: var(--s-sm); }
    .vmv-top-row { grid-template-columns: 1fr; }
    .vmv-values-grid { grid-template-columns: 1fr; }
    .founders-header { flex-direction: column; text-align: center; }
    .founders-divider { width: var(--s-lg); height: var(--s-3xs); align-self: auto; }
    .founders-row { grid-template-columns: 1fr; }
    .pillar-grid { grid-template-columns: 1fr; }
    .stats-bar { gap: var(--s-lg); flex-wrap: wrap; justify-content: center; }
    .community-grid { grid-template-columns: 1fr; }
    .bio-details { gap: var(--s-2xs); }
    .bio-detail { flex-direction: column; gap: var(--s-3xs); }
    .bio-detail-label { min-width: 0; }
  }

  @media (max-width: 42.36rem) {
    .journey-timeline::before {
      left: var(--s-sm);
    }
    .tl-entry {
      grid-template-columns: var(--s-md) 1fr;
    }
    .tl-entry-left {
      display: none;
    }
    .tl-entry-right {
      text-align: left;
      padding-left: var(--s-sm);
    }
    .tl-entry-dot-col {
      justify-content: center;
    }
    .tl-year-marker {
      justify-content: flex-start;
      padding-left: 0;
    }
    .stats-bar { gap: var(--s-md); }
  }

  .bg-mist {
    background: var(--mist);
  }
`;

export default function AboutPage() {
  const router = useRouter();

  return (
    <div>
      <style>{aboutStyles}</style>
      <Nav />

      {/* ── HERO ── */}
      <section className="about-hero">
        <div>
          <p className="eyebrow">Our Story</p>
          <h1 className="about-hero-title">We believe in you.</h1>
          <p className="about-hero-desc">
            Everyone deserves to feel accepted, supported and hope for a better life.
          </p>
          <div className="about-hero-actions">
            <button className="btn-primary" onClick={() => router.push("/therapists")}>Meet Our Therapists</button>
            <button className="btn-outline" onClick={() => router.push("/contact")}>Get in Touch</button>
          </div>
          <div className="hero-stats">
            <div className="hero-stat"><p className="hero-stat-value">2021</p><p className="hero-stat-label">Founded</p></div>
            <div className="hero-stat"><p className="hero-stat-value">2</p><p className="hero-stat-label">Ohio Locations</p></div>
            <div className="hero-stat"><p className="hero-stat-value">12</p><p className="hero-stat-label">Therapists</p></div>
            <div className="hero-stat"><p className="hero-stat-value">1</p><p className="hero-stat-label">Business Manager</p></div>
            <div className="hero-stat"><p className="hero-stat-value">595+</p><p className="hero-stat-label">Years of Life Experience</p></div>
          </div>
        </div>
        <div className="ngu-box">
          <h2 className="ngu-box-title">Never Give Up.</h2>
          <p className="ngu-box-sub">Never give up hope. Never give up on life. Never Give Up Wellness.</p>
        </div>
      </section>

      {/* ── VISION, MISSION & VALUES ── */}
      <section className="vmv-section">
        <div className="phi-wrap">
          <div className="vmv-header">
            <p className="eyebrow">What Drives Us</p>
            <h2 className="vmv-title">Our Vision, Mission &amp; Values</h2>
          </div>
          <div className="vmv-top-row">
            <div className="vmv-block">
              <h3 className="vmv-heading">Vision</h3>
              <p className="vmv-text">Never Give Up is our guiding message of hope. We envision a world where all people can experience healing and transformation. Our practice strives to inspire long-term holistic wellness for both our staff and the clients we serve because we all help each other on our journey of wellness.</p>
            </div>
            <div className="vmv-block">
              <h3 className="vmv-heading">Mission</h3>
              <p className="vmv-text">Serving our community by embracing and supporting individuals and families: identifying their needs, working collaboratively and creatively to address challenges, learn new skills and achieve enhanced health and wellness.</p>
            </div>
          </div>
          <div className="vmv-block vmv-values-block">
            <h3 className="vmv-heading">Our Values</h3>
            <div className="vmv-values-grid">
              <div className="vmv-value-item"><span className="vmv-value-icon">⟡</span><div><strong>Serve</strong> — Our work is guided by an attitude of service. This includes a desire to give back, make a difference in our community and model caring for others.</div></div>
              <div className="vmv-value-item"><span className="vmv-value-icon">○</span><div><strong>Community</strong> — Connection and being part of something greater than ourselves contributes to resiliency, achievement, and adds meaning to our lives.</div></div>
              <div className="vmv-value-item"><span className="vmv-value-icon">◈</span><div><strong>Embrace</strong> — We believe in welcoming all people. We realize we can be different from other people and still appreciate and respect them, learn from them and work together.</div></div>
              <div className="vmv-value-item"><span className="vmv-value-icon">◇</span><div><strong>Support</strong> — We demonstrate support through acceptance, belief in a person's ability to change and by providing encouragement.</div></div>
              <div className="vmv-value-item"><span className="vmv-value-icon">⟡</span><div><strong>Collaboration</strong> — Working together and sharing ideas increases the chance of reaching identified goals.</div></div>
              <div className="vmv-value-item"><span className="vmv-value-icon">○</span><div><strong>Creativity</strong> — Creativity provides stress relief and enhances our ability to solve problems, change perspectives and express our thoughts and feelings.</div></div>
              <div className="vmv-value-item"><span className="vmv-value-icon">◈</span><div><strong>Skill Building</strong> — Learning and implementing new skills is essential to change. We can learn new skills to cope with stress, to manage mental health symptoms, to repair our relationships and to take care of ourselves.</div></div>
              <div className="vmv-value-item"><span className="vmv-value-icon">◇</span><div><strong>Wellness</strong> — We believe making daily, healthy choices in all areas of our life allows us to thrive and live our best life.</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY NGU ── */}
      <section className="phi-section">
        <div className="phi-wrap">
          <p className="eyebrow">Why NGU Wellness</p>
          <h2 className="why-ngu-title">A practice built differently.</h2>
          <hr className="phi-rule" />
          <p className="why-ngu-desc">We built NGU Wellness so more people get matched with the right therapist, the right approach, and the right fit faster and easier than ever.</p>
          <div className="pillar-grid">
            <div className="pillar">
              <div className="pillar-title-row"><span className="pillar-icon">⟡</span><p className="pillar-title">Evidence-Based</p></div>
              <p className="pillar-desc">Every therapist is licensed, vetted, and trained in proven approaches — CBT, EMDR, DBT, ACT, and more.</p>
            </div>
            <div className="pillar">
              <div className="pillar-title-row"><span className="pillar-icon">◈</span><p className="pillar-title">Collaborative</p></div>
              <p className="pillar-desc">We work with you, not at you. Together, we identify goals, build skills, and address challenges creatively.</p>
            </div>
            <div className="pillar">
              <div className="pillar-title-row"><span className="pillar-icon">◇</span><p className="pillar-title">Flexible</p></div>
              <p className="pillar-desc">Two Ohio locations, statewide telehealth, evenings available. We accept most major insurance and Medicaid.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE FOUNDERS ── */}
      <section className="phi-section">
        <div className="phi-wrap">
          <div className="founders-header">
            <h2 className="founders-title">The Founders</h2>
            <div className="founders-divider" />
            <p className="founders-quote">"Circumstances and the support we receive in life shape who we become. The right support at the right time changes everything."</p>
          </div>
          <div className="founders-row">
            {/* Nicole */}
            <div className="founder-card">
              <div className="bio-photo-wrap">
                <img className="bio-photo" src="/images/therapists/Nicole_Walton.jpg" alt="Dr. Nicole Walton" />
                <div className="bio-photo-bar" />
              </div>
              <div className="founder-info">
                <p className="eyebrow">Founder, Owner &amp; Clinical Director</p>
                <h2 className="founder-name">Dr. Nicole Walton</h2>
                <p className="bio-creds">PhD · LISW-S · LPC &nbsp;·&nbsp; she / her</p>
                <hr className="phi-rule" />
                <p className="bio-p">Nicole built NGU Wellness on 20 years of clinical experience spanning community mental health crisis work, pediatric medical social work, and outpatient therapy with individuals, couples, and families.</p>
                <p className="bio-p">She holds a Master of Social Work from The Ohio State University and a Doctorate in Counselor Education and Supervision from Regent University (2023).</p>
                <p className="bio-p">Nicole provides a nonjudgmental, warm, and collaborative environment, specializing in depression, anxiety, and relationship concerns across all life stages.</p>
                <div className="bio-details">
                  <div className="bio-detail"><span className="bio-detail-label">License</span><span className="bio-detail-value">LISW-S, Ohio I.0700277-SUPV · LPC</span></div>
                  <div className="bio-detail"><span className="bio-detail-label">Education</span><span className="bio-detail-value">MSW, Ohio State, 2005 · PhD, Regent University, 2023</span></div>
                  <div className="bio-detail"><span className="bio-detail-label">Experience</span><span className="bio-detail-value">20+ years clinical practice, teaching, research &amp; supervision</span></div>
                </div>
                <div className="founder-actions">
                  <button className="btn-rose" onClick={() => router.push("/therapists/nicole-walton")}>View Profile</button>
                </div>
              </div>
            </div>
            {/* Jeffrey */}
            <div className="founder-card">
              <div className="bio-photo-wrap">
                <img className="bio-photo" src="/images/therapists/Jeffrey_Sellers.jpeg" alt="Jeffrey Sellers" />
                <div className="bio-photo-bar bio-photo-bar-earth" />
              </div>
              <div className="founder-info">
                <p className="eyebrow eyebrow-earth">Founder &amp; Business Manager</p>
                <h2 className="founder-name">Jeffrey Sellers</h2>
                <p className="bio-creds">&nbsp;</p>
                <hr className="phi-rule phi-rule-earth" />
                <p className="bio-p">Jeffrey Sellers brings 17 years of experience in education to his role as Business Manager at NGU Wellness. As a former teacher, he understands firsthand how circumstance, support, and the right environment shape what people are able to become.</p>
                <p className="bio-p">Jeffrey manages client intake and provider match, insurance and billing, and the day-to-day administrative coordination that keeps NGU running smoothly across both locations. He also serves as a fierce advocate for clients navigating the insurance process.</p>
                <div className="bio-details">
                  <div className="bio-detail"><span className="bio-detail-label">Education</span><span className="bio-detail-value">BA, Miami University · MA, University of Dayton · Post-Graduate Studies, Ohio University</span></div>
                  <div className="bio-detail"><span className="bio-detail-label">Background</span><span className="bio-detail-value">17 years in education · 5+ years healthcare business management</span></div>
                  <div className="bio-detail"><span className="bio-detail-label">Leadership</span><span className="bio-detail-value">Board of Directors, The Gem Project Dayton</span></div>
                </div>
                <div className="founder-actions">
                  <a className="btn-rose" href="mailto:jeffrey@nguwellness.com">Email Jeffrey</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR JOURNEY TIMELINE ── */}
      <section className="phi-section bg-mist">
        <div className="phi-wrap">
          <div className="origin-intro">
            <p className="eyebrow">Our Journey</p>
            <h2 className="origin-title">Where it all began.</h2>
            <hr className="phi-rule origin-rule" />
            <p className="origin-desc">What started as one therapist and a vision in Dayton has grown into a team of dedicated clinicians serving families across Ohio.</p>
          </div>
          <div className="journey-timeline">
            {/* 2021 */}
            <div className="tl-year-group">
              <div className="tl-year-marker"><span className="tl-year-badge milestone">2021</span></div>
              <div className="tl-entries">
                <div className="tl-entry"><div className="tl-entry-left"><p className="tl-entry-date">March 31, 2021</p><p className="tl-entry-title">NGU Wellness LLC founded</p><p className="tl-entry-desc">Articles of Organization filed with the State of Ohio.</p></div><div className="tl-entry-dot-col"><div className="tl-entry-dot major" /></div><div className="tl-entry-right" /></div>
                <div className="tl-entry"><div className="tl-entry-left" /><div className="tl-entry-dot-col"><div className="tl-entry-dot" /></div><div className="tl-entry-right"><p className="tl-entry-date">Summer 2021</p><p className="tl-entry-title">Building the practice</p><p className="tl-entry-desc">Insurance paneling, planning, location scouting, space remodeling, and furnishing.</p></div></div>
                <div className="tl-entry"><div className="tl-entry-left"><p className="tl-entry-date">August 1, 2021</p><p className="tl-entry-title">Doors open</p><p className="tl-entry-desc">453 Patterson Rd., Suite A, Dayton, Ohio. A multi-therapist practice built on collaborative, evidence-based care.</p></div><div className="tl-entry-dot-col"><div className="tl-entry-dot major" /></div><div className="tl-entry-right" /></div>
                <div className="tl-entry"><div className="tl-entry-left" /><div className="tl-entry-dot-col"><div className="tl-entry-dot" /></div><div className="tl-entry-right"><p className="tl-entry-date">August 23, 2021</p><p className="tl-entry-person">Dr. Nicole Walton</p><p className="tl-entry-role">Founder &amp; Clinical Director sees her first NGU client</p></div></div>
                <div className="tl-entry"><div className="tl-entry-left"><p className="tl-entry-date">December 3, 2021</p><p className="tl-entry-person">Charlotte Wells</p><p className="tl-entry-role">Joins the team — first client at NGU</p></div><div className="tl-entry-dot-col"><div className="tl-entry-dot" /></div><div className="tl-entry-right" /></div>
              </div>
            </div>
            {/* 2022 */}
            <div className="tl-year-group">
              <div className="tl-year-marker"><span className="tl-year-badge">2022</span></div>
              <div className="tl-entries">
                <div className="tl-entry"><div className="tl-entry-left"><p className="tl-entry-date">March 31, 2022</p><p className="tl-entry-title">$10,000 Grubhub grant awarded</p><p className="tl-entry-desc">On NGU Wellness' exact one-year anniversary, Business Manager Jeffrey Sellers is personally awarded a $10,000 grant by Grubhub COO Eric Ferguson to fuel the practice's growth and its mission of serving the community.</p></div><div className="tl-entry-dot-col"><div className="tl-entry-dot major" /></div><div className="tl-entry-right" /></div>
                <div className="tl-entry"><div className="tl-entry-left" /><div className="tl-entry-dot-col"><div className="tl-entry-dot" /></div><div className="tl-entry-right"><p className="tl-entry-date">July 14, 2022</p><p className="tl-entry-person">Danielle Washington</p><p className="tl-entry-role">Joins the team — first client at NGU</p></div></div>
              </div>
            </div>
            {/* 2023 */}
            <div className="tl-year-group">
              <div className="tl-year-marker"><span className="tl-year-badge milestone">2023</span></div>
              <div className="tl-entries">
                <div className="tl-entry"><div className="tl-entry-left"><p className="tl-entry-date">February 21, 2023</p><p className="tl-entry-person">Pam Gibson</p><p className="tl-entry-role">Joins the team — first client at NGU</p></div><div className="tl-entry-dot-col"><div className="tl-entry-dot" /></div><div className="tl-entry-right" /></div>
                <div className="tl-entry"><div className="tl-entry-left" /><div className="tl-entry-dot-col"><div className="tl-entry-dot" /></div><div className="tl-entry-right"><p className="tl-entry-date">March 23, 2023</p><p className="tl-entry-person">Natalie Woodson-Booska</p><p className="tl-entry-role">Joins the team — first client at NGU</p></div></div>
                <div className="tl-entry"><div className="tl-entry-left"><p className="tl-entry-date">Spring 2023</p><p className="tl-entry-title">Dr. Walton earns her PhD</p><p className="tl-entry-desc">Doctorate in Counselor Education &amp; Supervision from Regent University.</p></div><div className="tl-entry-dot-col"><div className="tl-entry-dot major" /></div><div className="tl-entry-right" /></div>
                <div className="tl-entry"><div className="tl-entry-left" /><div className="tl-entry-dot-col"><div className="tl-entry-dot" /></div><div className="tl-entry-right"><p className="tl-entry-date">September 27, 2023</p><p className="tl-entry-person">Kelly Salada</p><p className="tl-entry-role">Joins the team — first client at NGU</p></div></div>
                <div className="tl-entry"><div className="tl-entry-left"><p className="tl-entry-date">October 10, 2023</p><p className="tl-entry-person">Katie Grier</p><p className="tl-entry-role">Joins the team — first client at NGU</p></div><div className="tl-entry-dot-col"><div className="tl-entry-dot" /></div><div className="tl-entry-right" /></div>
                <div className="tl-entry"><div className="tl-entry-left" /><div className="tl-entry-dot-col"><div className="tl-entry-dot major" /></div><div className="tl-entry-right"><p className="tl-entry-date">2023</p><p className="tl-entry-title">Rocky River location opens</p><p className="tl-entry-desc">20525 Center Ridge Rd., Suite 604. NGU expands to serve the greater Cleveland area.</p></div></div>
              </div>
            </div>
            {/* 2024 */}
            <div className="tl-year-group">
              <div className="tl-year-marker"><span className="tl-year-badge">2024</span></div>
              <div className="tl-entries">
                <div className="tl-entry"><div className="tl-entry-left"><p className="tl-entry-date">June 12, 2024</p><p className="tl-entry-person">Lisa Freeman</p><p className="tl-entry-role">Joins the team — first client at NGU</p></div><div className="tl-entry-dot-col"><div className="tl-entry-dot" /></div><div className="tl-entry-right" /></div>
                <div className="tl-entry"><div className="tl-entry-left" /><div className="tl-entry-dot-col"><div className="tl-entry-dot" /></div><div className="tl-entry-right"><p className="tl-entry-date">June 26, 2024</p><p className="tl-entry-person">Anna Espy</p><p className="tl-entry-role">Joins the team — first client at NGU</p></div></div>
              </div>
            </div>
            {/* 2025 */}
            <div className="tl-year-group">
              <div className="tl-year-marker"><span className="tl-year-badge">2025</span></div>
              <div className="tl-entries">
                <div className="tl-entry"><div className="tl-entry-left"><p className="tl-entry-date">January 11, 2025</p><p className="tl-entry-person">Kelley Boole</p><p className="tl-entry-role">Joins the team — first client at NGU</p></div><div className="tl-entry-dot-col"><div className="tl-entry-dot" /></div><div className="tl-entry-right" /></div>
                <div className="tl-entry"><div className="tl-entry-left" /><div className="tl-entry-dot-col"><div className="tl-entry-dot" /></div><div className="tl-entry-right"><p className="tl-entry-date">September 19, 2025</p><p className="tl-entry-person">Jackie Penny</p><p className="tl-entry-role">Joins the team — first client at NGU</p></div></div>
                <div className="tl-entry"><div className="tl-entry-left"><p className="tl-entry-date">October 7, 2025</p><p className="tl-entry-person">Kim Brant</p><p className="tl-entry-role">Joins the team — first client at NGU</p></div><div className="tl-entry-dot-col"><div className="tl-entry-dot" /></div><div className="tl-entry-right" /></div>
              </div>
            </div>
            {/* 2026 */}
            <div className="tl-year-group">
              <div className="tl-year-marker"><span className="tl-year-badge milestone">2026</span></div>
              <div className="tl-entries">
                <div className="tl-entry"><div className="tl-entry-left" /><div className="tl-entry-dot-col"><div className="tl-entry-dot" /></div><div className="tl-entry-right"><p className="tl-entry-date">March 2026</p><p className="tl-entry-title">New website launch</p><p className="tl-entry-desc">A redesigned online home to celebrate five years of growth, connection, and care.</p></div></div>
                <div className="tl-entry"><div className="tl-entry-left"><p className="tl-entry-date">March 31, 2026</p><p className="tl-entry-title">5 Year Anniversary</p><p className="tl-entry-desc">Five years since NGU Wellness LLC was founded. From one therapist to a full team across two locations.</p></div><div className="tl-entry-dot-col"><div className="tl-entry-dot major" /></div><div className="tl-entry-right" /></div>
              </div>
            </div>
            {/* Today */}
            <div className="tl-year-group">
              <div className="tl-year-marker"><span className="tl-year-badge milestone">Today</span></div>
              <div className="tl-entries">
                <div className="tl-entry"><div className="tl-entry-left"><p className="tl-entry-title">Growing practice. Same standards.</p><p className="tl-entry-desc">Licensed therapists serving adults, teens, children, couples, and families across Dayton and Cleveland.</p></div><div className="tl-entry-dot-col"><div className="tl-entry-dot major" /></div><div className="tl-entry-right" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMUNITY ── */}
      <section className="dark-strip">
        <div className="phi-wrap community-grid">
          <div>
            <p className="eyebrow community-eyebrow">In the Community</p>
            <p className="community-headline">"Mental health doesn't stop at the door."</p>
          </div>
          <div>
            <p className="community-intro">NGU Wellness is proud to be an active part of the communities we serve — not just as a therapy practice, but as neighbors, advocates, and supporters.</p>
            <div className="community-items">
              <div className="community-item"><div className="community-dot" /><p className="community-text"><strong>The Gem Project Dayton</strong> — Jeffrey Sellers serves on the Board of Directors, supporting youth development and community wellness.</p></div>
              <div className="community-item"><div className="community-dot" /><p className="community-text"><strong>That Day in May</strong> — NGU Wellness is a proud annual sponsor of Oakwood's suicide prevention and awareness Pancake Breakfast.</p></div>
              <div className="community-item"><div className="community-dot" /><p className="community-text"><strong>Local Youth Sports</strong> — We believe wellness starts young. NGU supports local youth sports programs in our communities.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="phi-section cta-center">
        <div className="phi-wrap">
          <p className="eyebrow">Take the First Step</p>
          <h2 className="cta-title">Ready to take the first step?</h2>
          <p className="cta-desc">Never give up on yourself. We are here to help you figure out the rest.</p>
          <div className="cta-actions">
            <button className="btn-rose" onClick={() => window.open("https://therapyportal.com/p/nguwellness", "_blank")}>Begin Intake Survey</button>
            <button className="btn-outline" onClick={() => router.push("/therapists")}>Browse Therapists</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
