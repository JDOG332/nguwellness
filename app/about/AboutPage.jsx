"use client";
import { useRouter } from "next/navigation";
import Nav from "../Nav";
import Footer from "../Footer";

const aboutStyles = `
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

  .ngu-box {
    background: var(--ink);
    padding: var(--s-xl) var(--s-xl);
    border-radius: 0.382rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  /* VISION MISSION VALUES */
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
    font-size: clamp(var(--t-lg), 3.82vw, var(--t-xl));
    margin-bottom: var(--s-xs);
  }

  .vmv-top-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--s-lg);
    margin-bottom: var(--s-lg);
  }

  .vmv-values-block {
    width: 100%;
  }

  .vmv-values-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--s-sm) var(--s-lg);
  }

  .vmv-block {
    padding: var(--s-lg);
    background: var(--paper);
    border-radius: 0.382rem;
    border: 0.0618rem solid var(--divider);
  }

  .vmv-heading {
    font-family: var(--font-display);
    font-size: clamp(var(--t-md), 2.618vw, var(--t-lg));
    margin-bottom: var(--s-sm);
    color: var(--ink);
  }

  .vmv-text {
    font-size: var(--t-base);
    font-weight: 300;
    line-height: 1.618;
    color: var(--earth);
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

  /* ORIGIN / JOURNEY */
  .origin-intro {
    text-align: center;
    max-width: 42.36rem;
    margin: 0 auto var(--s-xl);
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
    width: 0.125rem;
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
    letter-spacing: 0.1em;
    padding: var(--s-2xs) var(--s-md);
    border-radius: 6.854rem;
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
    grid-template-columns: 1fr 2.618rem 1fr;
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
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    background: var(--paper);
    border: 0.125rem solid var(--rose);
    flex-shrink: 0;
    margin-top: 0.25rem;
  }

  .tl-entry-dot.major {
    width: 1rem;
    height: 1rem;
    background: var(--rose-deep);
    border-color: var(--rose-deep);
    margin-top: 0.125rem;
  }

  .tl-entry-date {
    font-size: var(--t-xs);
    font-weight: 400;
    letter-spacing: 0.15em;
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
    font-size: var(--t-sm);
    font-weight: 300;
    color: var(--earth);
    line-height: 1.618;
  }

  .tl-entry-person {
    font-size: var(--t-sm);
    font-weight: 400;
    color: var(--ink);
  }

  .tl-entry-role {
    font-size: var(--t-xs);
    font-weight: 300;
    color: var(--warm-gray);
  }

  @media (max-width: 42.36rem) {
    .journey-timeline::before {
      left: 1rem;
    }
    .tl-entry {
      grid-template-columns: 2rem 1fr;
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
  }

  /* PILLARS */
  .pillar-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--s-md);
    margin-top: var(--s-xl);
  }

  .pillar {
    padding: var(--s-lg);
    border: 0.0618rem solid var(--divider);
    border-top: 0.236rem solid var(--divider);
    transition: all var(--duration) var(--ease-phi);
  }

  .pillar:hover {
    border-top-color: var(--rose);
    transform: translateY(-0.236rem);
  }

  .pillar-icon {
    font-size: var(--t-lg);
    margin-bottom: var(--s-sm);
    display: block;
    opacity: var(--alpha-phi);
  }

  .pillar-title {
    font-family: var(--font-display);
    font-size: var(--t-base);
    font-weight: 900;
    margin-bottom: var(--s-2xs);
  }

  .pillar-desc {
    font-size: var(--t-sm);
    font-weight: 300;
    color: var(--earth);
    line-height: 1.618;
  }

  /* FOUNDER BIO */
  .bio-grid {
    display: grid;
    grid-template-columns: 38.2% 1fr;
    gap: var(--s-xl);
    align-items: start;
    margin-bottom: var(--s-2xl);
  }

  .bio-photo-wrap {
    position: relative;
    overflow: hidden;
    background: var(--mist);
  }

  .bio-photo {
    width: 100%;
    aspect-ratio: 1 / 1.618;
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

  .bio-name {
    font-family: var(--font-display);
    font-size: clamp(var(--t-xl), 3.82vw, var(--t-2xl));
    font-weight: 900;
    line-height: 1.0;
    letter-spacing: -0.0382em;
    margin-bottom: var(--s-3xs);
  }

  .bio-creds {
    font-size: var(--t-sm);
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
    max-width: 42.36rem;
  }

  .bio-blockquote {
    font-family: var(--font-accent);
    font-style: italic;
    font-size: var(--t-md);
    color: var(--earth);
    border-left: 0.236rem solid var(--rose);
    padding-left: var(--s-md);
    margin: var(--s-lg) 0;
    line-height: 1.618;
    opacity: var(--alpha-phi);
  }

  .bio-details {
    display: flex;
    flex-direction: column;
    gap: var(--s-xs);
    margin-top: var(--s-lg);
    padding-top: var(--s-lg);
    border-top: 0.0618rem solid var(--divider);
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
    font-size: var(--t-sm);
    color: var(--earth);
  }

  /* FOUNDERS */
  .founders-header {
    display: flex;
    align-items: center;
    gap: var(--s-lg);
    margin-bottom: var(--s-xl);
  }

  .founders-title {
    font-family: var(--font-display);
    font-size: clamp(var(--t-lg), 3.82vw, var(--t-xl));
    font-weight: 900;
    letter-spacing: -0.02em;
    white-space: nowrap;
    color: var(--ink);
    flex-shrink: 0;
  }

  .founders-divider {
    width: 0.236rem;
    align-self: stretch;
    background: var(--rose);
    border-radius: 1rem;
    flex-shrink: 0;
  }

  .founders-quote {
    font-family: var(--font-accent);
    font-style: italic;
    font-size: clamp(var(--t-base), 2vw, var(--t-md));
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

  .founder-card .bio-photo-wrap {
    margin-bottom: var(--s-md);
  }

  .founder-card .bio-photo {
    aspect-ratio: 1 / 1.2;
  }

  .founder-card {
    display: flex;
    flex-direction: column;
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
    font-size: clamp(var(--t-lg), 2.618vw, var(--t-xl));
    font-weight: 900;
    line-height: 1.0;
    letter-spacing: -0.0382em;
    margin-bottom: var(--s-3xs);
  }

  /* COMMUNITY */
  .community-items {
    display: flex;
    flex-direction: column;
    gap: var(--s-md);
    margin-top: var(--s-lg);
  }

  .community-item {
    display: flex;
    align-items: baseline;
    gap: var(--s-sm);
  }

  .community-dot {
    width: 0.618rem;
    height: 0.618rem;
    border-radius: 6.854rem;
    background: var(--gold);
    flex-shrink: 0;
    margin-top: 0.382rem;
  }

  .community-text {
    font-size: var(--t-base);
    font-weight: 300;
    color: var(--paper);
    line-height: 1.618;
    opacity: 0.618;
  }

  .community-text strong {
    font-weight: 400;
    color: var(--paper);
  }

  @media (max-width: 61.8rem) {
    .about-hero { grid-template-columns: 1fr; }
.vmv-top-row { grid-template-columns: 1fr; }
    .founders-header { flex-direction: column; text-align: center; }
    .founders-divider { width: 3rem; height: 0.236rem; align-self: auto; }
    .founders-row { grid-template-columns: 1fr; }
    .vmv-values-grid { grid-template-columns: 1fr; }
    .bio-grid { grid-template-columns: 1fr; }
  }

  @media (max-width: 42.36rem) {
  }
`;

export default function AboutPage() {
  const router = useRouter();

  return (
    <div>
      <style>{aboutStyles}</style>
      <Nav />

      {/* HERO */}
      <section className="about-hero">
        <div>
          <p className="eyebrow">Our Story</p>
          <h1 style={{ fontSize: "clamp(var(--t-xl), 5vw, var(--t-2xl))", marginBottom: "var(--s-md)" }}>
            A practice built on belief.
          </h1>
          <p style={{ fontSize: "var(--t-md)", fontWeight: 300, color: "var(--earth)", maxWidth: "var(--max-w-narrow)", marginBottom: "var(--s-lg)" }}>
            Everyone deserves to be supported and feel accepted. Everyone deserves a second chance. Everyone deserves to have hope for a better life.
          </p>
          <div style={{ display: "flex", gap: "var(--s-sm)", flexWrap: "wrap" }}>
            <button className="btn-primary" onClick={() => router.push("/therapists")}>Meet Our Therapists</button>
            <button className="btn-outline" onClick={() => router.push("/contact")}>Get in Touch</button>
          </div>
        </div>
        {/* NGU PROMISE BOX */}
        <div className="ngu-box">
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(var(--t-xl), 4.236vw, var(--t-2xl))", color: "var(--paper)", marginBottom: "var(--s-md)", textAlign: "center" }}>
            Never Give Up.
          </h2>
          <p style={{ fontFamily: "var(--font-accent)", fontSize: "var(--t-md)", fontStyle: "italic", color: "var(--paper)", opacity: "var(--alpha-phi)", textAlign: "center" }}>
            Never give up hope. Never give up on life. Never Give Up Wellness.
          </p>
        </div>
      </section>

      {/* VISION, MISSION & VALUES */}
      <section className="vmv-section">
        <div className="phi-wrap">
          <div className="vmv-header">
            <p className="eyebrow">What Drives Us</p>
            <h2 className="vmv-title">Our Vision, Mission &amp; Values</h2>
          </div>
          <div className="vmv-top-row">
            <div className="vmv-block">
              <h3 className="vmv-heading">Vision</h3>
              <p className="vmv-text">
                Never Give Up is our guiding message of hope. We envision a world where all people can experience healing and transformation. Our practice strives to inspire long-term holistic wellness for both our staff and the clients we serve because we all help each other on our journey of wellness.
              </p>
            </div>
            <div className="vmv-block">
              <h3 className="vmv-heading">Mission</h3>
              <p className="vmv-text">
                Serving our community by embracing and supporting individuals and families by identifying their needs and working collaboratively and creatively to address challenges, learn new skills and achieve enhanced health and wellness.
              </p>
            </div>
          </div>
          <div className="vmv-block vmv-values-block">
            <h3 className="vmv-heading">Our Values</h3>
            <div className="vmv-values-grid">
                <div className="vmv-value-item">
                  <span className="vmv-value-icon">⟡</span>
                  <div>
                    <strong>Serve</strong> — Our work is guided by an attitude of service. This includes a desire to give back, make a difference in our community and model caring for others.
                  </div>
                </div>
                <div className="vmv-value-item">
                  <span className="vmv-value-icon">○</span>
                  <div>
                    <strong>Community</strong> — Connection and being part of something greater than ourselves contributes to resiliency, achievement, and adds meaning to our lives.
                  </div>
                </div>
                <div className="vmv-value-item">
                  <span className="vmv-value-icon">◈</span>
                  <div>
                    <strong>Embrace</strong> — We believe in welcoming all people. We realize we can be different from other people and still appreciate and respect them, learn from them and work together.
                  </div>
                </div>
                <div className="vmv-value-item">
                  <span className="vmv-value-icon">◇</span>
                  <div>
                    <strong>Support</strong> — We demonstrate support through acceptance, belief in a person's ability to change and by providing encouragement.
                  </div>
                </div>
                <div className="vmv-value-item">
                  <span className="vmv-value-icon">⟡</span>
                  <div>
                    <strong>Collaboration</strong> — Working together and sharing ideas increases the chance of reaching identified goals.
                  </div>
                </div>
                <div className="vmv-value-item">
                  <span className="vmv-value-icon">○</span>
                  <div>
                    <strong>Creativity</strong> — Creativity provides stress relief and enhances our ability to solve problems, change perspectives and express our thoughts and feelings.
                  </div>
                </div>
                <div className="vmv-value-item">
                  <span className="vmv-value-icon">◈</span>
                  <div>
                    <strong>Skill Building</strong> — Learning and implementing new skills is essential to change. We can learn new skills to cope with stress, to manage mental health symptoms, to repair our relationships and to take care of ourselves.
                  </div>
                </div>
                <div className="vmv-value-item">
                  <span className="vmv-value-icon">◇</span>
                  <div>
                    <strong>Wellness</strong> — We believe making daily, healthy choices in all areas of our life allows us to thrive and live our best life.
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE FOUNDERS */}
      <section className="phi-section">
        <div className="phi-wrap">
          <div className="founders-header">
            <h2 className="founders-title">The Founders</h2>
            <div className="founders-divider" />
            <p className="founders-quote">
              "Circumstances and the support we receive in life shape who we become. The right support at the right time changes everything."
            </p>
          </div>
          <div className="founders-row">
            <div className="founder-card">
              <div className="bio-photo-wrap">
                <img className="bio-photo" src="/images/therapists/Nicole_Walton.jpg" alt="Dr. Nicole Walton" onError={e => { e.target.style.background = "var(--mist)"; e.target.style.minHeight = "16rem"; }} />
                <div className="bio-photo-bar" />
              </div>
              <div className="founder-info">
                <p className="eyebrow">Founder, Owner & Clinical Director</p>
                <h2 className="founder-name">Dr. Nicole Walton</h2>
                <p className="bio-creds">PhD · LISW-S · LPC &nbsp;·&nbsp; she / her</p>
                <hr className="phi-rule" />
                <p className="bio-p">
                  Nicole built NGU Wellness on 20 years of clinical experience spanning community mental health crisis work, pediatric medical social work, and outpatient therapy with individuals, couples, and families.
                </p>
                <p className="bio-p">
                  She holds a Master of Social Work from The Ohio State University and a Doctorate in Counselor Education and Supervision from Regent University (2023).
                </p>
                <p className="bio-p">
                  Nicole provides a nonjudgmental, warm, and collaborative environment, specializing in depression, anxiety, and relationship concerns across all life stages.
                </p>
                <div className="bio-details">
                  <div className="bio-detail">
                    <span className="bio-detail-label">License</span>
                    <span className="bio-detail-value">LISW-S, Ohio I.0700277-SUPV · LPC</span>
                  </div>
                  <div className="bio-detail">
                    <span className="bio-detail-label">Education</span>
                    <span className="bio-detail-value">MSW, Ohio State, 2005 · PhD, Regent University, 2023</span>
                  </div>
                  <div className="bio-detail">
                    <span className="bio-detail-label">Experience</span>
                    <span className="bio-detail-value">20+ years clinical practice, teaching, research & supervision</span>
                  </div>
                </div>
                <div className="founder-actions">
                  <button className="btn-rose" onClick={() => router.push("/therapists/nicole-walton")}>View Profile</button>
                </div>
              </div>
            </div>
            <div className="founder-card">
              <div className="bio-photo-wrap" style={{ background: "#d8dfe2" }}>
                <img className="bio-photo" src="/images/therapists/Jeffrey_Sellers.jpeg" alt="Jeffrey Sellers" onError={e => { e.target.style.background = "#d8dfe2"; e.target.style.minHeight = "16rem"; }} />
                <div className="bio-photo-bar" style={{ background: "var(--earth)" }} />
              </div>
              <div className="founder-info">
                <p className="eyebrow" style={{ color: "var(--earth)" }}>Founder & Business Manager</p>
                <h2 className="founder-name">Jeffrey Sellers</h2>
                <p className="bio-creds">&nbsp;</p>
                <hr className="phi-rule" style={{ background: "var(--earth)" }} />
                <p className="bio-p">
                  Jeffrey Sellers brings 17 years of experience in education to his role as Business Manager at NGU Wellness. As a former teacher, he understands firsthand how circumstance, support, and the right environment shape what people are able to become.
                </p>
                <p className="bio-p">
                  Jeffrey manages client intake and provider match, insurance and billing, and the day-to-day administrative coordination that keeps NGU running smoothly across both locations. He also serves as a fierce advocate for clients navigating the insurance process.
                </p>
                <div className="bio-details">
                  <div className="bio-detail">
                    <span className="bio-detail-label">Education</span>
                    <span className="bio-detail-value">BA, Miami University · MA, University of Dayton</span>
                  </div>
                  <div className="bio-detail">
                    <span className="bio-detail-label">Background</span>
                    <span className="bio-detail-value">17 years in education · 5+ years healthcare business management</span>
                  </div>
                  <div className="bio-detail">
                    <span className="bio-detail-label">Leadership</span>
                    <span className="bio-detail-value">Board of Directors, The Gem Project Dayton</span>
                  </div>
                </div>
                <div className="founder-actions">
                  <a className="btn-rose" href="mailto:jeffrey@nguwellness.com">Email Jeffrey</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR JOURNEY — Full-width timeline */}
      <section className="phi-section" style={{ background: "var(--mist)" }}>
        <div className="phi-wrap">
          <div className="origin-intro">
            <p className="eyebrow">Our Journey</p>
            <h2 style={{ fontSize: "clamp(var(--t-lg), 3.82vw, var(--t-xl))", marginBottom: "var(--s-sm)" }}>Where it all began.</h2>
            <hr className="phi-rule" style={{ margin: "var(--s-sm) auto var(--s-md)" }} />
            <p style={{ fontSize: "var(--t-base)", fontWeight: 300, color: "var(--earth)", lineHeight: 1.618 }}>
              What started as one therapist and a vision in Dayton has grown into a team of dedicated clinicians serving families across Ohio.
            </p>
          </div>

          <div className="journey-timeline">

            {/* ── 2021 ── */}
            <div className="tl-year-group">
              <div className="tl-year-marker">
                <span className="tl-year-badge milestone">2021</span>
              </div>
              <div className="tl-entries">
                <div className="tl-entry">
                  <div className="tl-entry-left">
                    <p className="tl-entry-date">March 31, 2021</p>
                    <p className="tl-entry-title">NGU Wellness LLC founded</p>
                    <p className="tl-entry-desc">Articles of Organization filed with the State of Ohio.</p>
                  </div>
                  <div className="tl-entry-dot-col"><div className="tl-entry-dot major" /></div>
                  <div className="tl-entry-right" />
                </div>
                <div className="tl-entry">
                  <div className="tl-entry-left" />
                  <div className="tl-entry-dot-col"><div className="tl-entry-dot" /></div>
                  <div className="tl-entry-right">
                    <p className="tl-entry-date">Summer 2021</p>
                    <p className="tl-entry-title">Building the practice</p>
                    <p className="tl-entry-desc">Insurance paneling, planning, location scouting, space remodeling, and furnishing.</p>
                  </div>
                </div>
                <div className="tl-entry">
                  <div className="tl-entry-left">
                    <p className="tl-entry-date">August 1, 2021</p>
                    <p className="tl-entry-title">Doors open</p>
                    <p className="tl-entry-desc">453 Patterson Rd., Suite A, Dayton, Ohio. A multi-therapist practice built on collaborative, evidence-based care.</p>
                  </div>
                  <div className="tl-entry-dot-col"><div className="tl-entry-dot major" /></div>
                  <div className="tl-entry-right" />
                </div>
                <div className="tl-entry">
                  <div className="tl-entry-left" />
                  <div className="tl-entry-dot-col"><div className="tl-entry-dot" /></div>
                  <div className="tl-entry-right">
                    <p className="tl-entry-date">August 23, 2021</p>
                    <p className="tl-entry-person">Dr. Nicole Walton</p>
                    <p className="tl-entry-role">Founder &amp; Clinical Director sees her first NGU client</p>
                  </div>
                </div>
                <div className="tl-entry">
                  <div className="tl-entry-left">
                    <p className="tl-entry-date">December 3, 2021</p>
                    <p className="tl-entry-person">Charlotte Wells</p>
                    <p className="tl-entry-role">Joins the team — first client at NGU</p>
                  </div>
                  <div className="tl-entry-dot-col"><div className="tl-entry-dot" /></div>
                  <div className="tl-entry-right" />
                </div>
              </div>
            </div>

            {/* ── 2022 ── */}
            <div className="tl-year-group">
              <div className="tl-year-marker">
                <span className="tl-year-badge">2022</span>
              </div>
              <div className="tl-entries">
                <div className="tl-entry">
                  <div className="tl-entry-left" />
                  <div className="tl-entry-dot-col"><div className="tl-entry-dot" /></div>
                  <div className="tl-entry-right">
                    <p className="tl-entry-date">July 14, 2022</p>
                    <p className="tl-entry-person">Danielle Washington</p>
                    <p className="tl-entry-role">Joins the team — first client at NGU</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── 2023 ── */}
            <div className="tl-year-group">
              <div className="tl-year-marker">
                <span className="tl-year-badge milestone">2023</span>
              </div>
              <div className="tl-entries">
                <div className="tl-entry">
                  <div className="tl-entry-left">
                    <p className="tl-entry-date">February 21, 2023</p>
                    <p className="tl-entry-person">Pam Gibson</p>
                    <p className="tl-entry-role">Joins the team — first client at NGU</p>
                  </div>
                  <div className="tl-entry-dot-col"><div className="tl-entry-dot" /></div>
                  <div className="tl-entry-right" />
                </div>
                <div className="tl-entry">
                  <div className="tl-entry-left" />
                  <div className="tl-entry-dot-col"><div className="tl-entry-dot" /></div>
                  <div className="tl-entry-right">
                    <p className="tl-entry-date">March 23, 2023</p>
                    <p className="tl-entry-person">Natalie Woodson-Booska</p>
                    <p className="tl-entry-role">Joins the team — first client at NGU</p>
                  </div>
                </div>
                <div className="tl-entry">
                  <div className="tl-entry-left">
                    <p className="tl-entry-date">Spring 2023</p>
                    <p className="tl-entry-title">Dr. Walton earns her PhD</p>
                    <p className="tl-entry-desc">Doctorate in Counselor Education &amp; Supervision from Regent University.</p>
                  </div>
                  <div className="tl-entry-dot-col"><div className="tl-entry-dot major" /></div>
                  <div className="tl-entry-right" />
                </div>
                <div className="tl-entry">
                  <div className="tl-entry-left" />
                  <div className="tl-entry-dot-col"><div className="tl-entry-dot" /></div>
                  <div className="tl-entry-right">
                    <p className="tl-entry-date">September 27, 2023</p>
                    <p className="tl-entry-person">Kelly Salada</p>
                    <p className="tl-entry-role">Joins the team — first client at NGU</p>
                  </div>
                </div>
                <div className="tl-entry">
                  <div className="tl-entry-left">
                    <p className="tl-entry-date">October 10, 2023</p>
                    <p className="tl-entry-person">Katie Grier</p>
                    <p className="tl-entry-role">Joins the team — first client at NGU</p>
                  </div>
                  <div className="tl-entry-dot-col"><div className="tl-entry-dot" /></div>
                  <div className="tl-entry-right" />
                </div>
                <div className="tl-entry">
                  <div className="tl-entry-left" />
                  <div className="tl-entry-dot-col"><div className="tl-entry-dot major" /></div>
                  <div className="tl-entry-right">
                    <p className="tl-entry-date">2023</p>
                    <p className="tl-entry-title">Rocky River location opens</p>
                    <p className="tl-entry-desc">20525 Center Ridge Rd., Suite 604. NGU expands to serve the greater Cleveland area.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── 2024 ── */}
            <div className="tl-year-group">
              <div className="tl-year-marker">
                <span className="tl-year-badge">2024</span>
              </div>
              <div className="tl-entries">
                <div className="tl-entry">
                  <div className="tl-entry-left">
                    <p className="tl-entry-date">June 12, 2024</p>
                    <p className="tl-entry-person">Lisa Freeman</p>
                    <p className="tl-entry-role">Joins the team — first client at NGU</p>
                  </div>
                  <div className="tl-entry-dot-col"><div className="tl-entry-dot" /></div>
                  <div className="tl-entry-right" />
                </div>
                <div className="tl-entry">
                  <div className="tl-entry-left" />
                  <div className="tl-entry-dot-col"><div className="tl-entry-dot" /></div>
                  <div className="tl-entry-right">
                    <p className="tl-entry-date">June 26, 2024</p>
                    <p className="tl-entry-person">Anna Espy</p>
                    <p className="tl-entry-role">Joins the team — first client at NGU</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── 2025 ── */}
            <div className="tl-year-group">
              <div className="tl-year-marker">
                <span className="tl-year-badge">2025</span>
              </div>
              <div className="tl-entries">
                <div className="tl-entry">
                  <div className="tl-entry-left">
                    <p className="tl-entry-date">January 11, 2025</p>
                    <p className="tl-entry-person">Kelley Boole</p>
                    <p className="tl-entry-role">Joins the team — first client at NGU</p>
                  </div>
                  <div className="tl-entry-dot-col"><div className="tl-entry-dot" /></div>
                  <div className="tl-entry-right" />
                </div>
                <div className="tl-entry">
                  <div className="tl-entry-left" />
                  <div className="tl-entry-dot-col"><div className="tl-entry-dot" /></div>
                  <div className="tl-entry-right">
                    <p className="tl-entry-date">September 19, 2025</p>
                    <p className="tl-entry-person">Jackie Penny</p>
                    <p className="tl-entry-role">Joins the team — first client at NGU</p>
                  </div>
                </div>
                <div className="tl-entry">
                  <div className="tl-entry-left">
                    <p className="tl-entry-date">October 7, 2025</p>
                    <p className="tl-entry-person">Kim Brant</p>
                    <p className="tl-entry-role">Joins the team — first client at NGU</p>
                  </div>
                  <div className="tl-entry-dot-col"><div className="tl-entry-dot" /></div>
                  <div className="tl-entry-right" />
                </div>
              </div>
            </div>

            {/* ── Today ── */}
            <div className="tl-year-group">
              <div className="tl-year-marker">
                <span className="tl-year-badge milestone">Today</span>
              </div>
              <div className="tl-entries">
                <div className="tl-entry">
                  <div className="tl-entry-left">
                    <p className="tl-entry-title">Growing team. Same standard.</p>
                    <p className="tl-entry-desc">Licensed therapists serving adults, teens, children, couples, and families across Dayton and Cleveland.</p>
                  </div>
                  <div className="tl-entry-dot-col"><div className="tl-entry-dot major" /></div>
                  <div className="tl-entry-right" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="dark-strip" style={{ textAlign: "left" }}>
        <div className="phi-wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1.618fr", gap: "var(--s-xl)", alignItems: "start" }}>
          <div>
            <p className="eyebrow" style={{ color: "var(--gold)", opacity: "var(--alpha-phi)" }}>In the Community</p>
            <p style={{ fontFamily: "var(--font-accent)", fontSize: "clamp(var(--t-lg), 2.618vw, var(--t-xl))", fontStyle: "italic", color: "var(--paper)", lineHeight: 1.382 }}>
              "Mental health doesn't stop at the door."
            </p>
          </div>
          <div>
            <p style={{ fontSize: "var(--t-base)", fontWeight: 300, color: "var(--paper)", opacity: 0.618, lineHeight: 1.618, marginBottom: "var(--s-lg)" }}>
              NGU Wellness is proud to be an active part of the communities we serve — not just as a therapy practice, but as neighbors, advocates, and supporters.
            </p>
            <div className="community-items">
              <div className="community-item">
                <div className="community-dot" />
                <p className="community-text"><strong>The Gem Project Dayton</strong> — Jeffrey Sellers serves on the Board of Directors, supporting youth development and community wellness.</p>
              </div>
              <div className="community-item">
                <div className="community-dot" />
                <p className="community-text"><strong>That Day in May</strong> — NGU Wellness is a proud annual sponsor of Oakwood's suicide prevention and awareness Pancake Breakfast.</p>
              </div>
              <div className="community-item">
                <div className="community-dot" />
                <p className="community-text"><strong>Local Youth Sports</strong> — We believe wellness starts young. NGU supports local youth sports programs in our communities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="phi-section" style={{ textAlign: "center" }}>
        <div className="phi-wrap">
          <p className="eyebrow">Take the First Step</p>
          <h2 style={{ fontSize: "clamp(var(--t-lg), 3.82vw, var(--t-xl))", marginBottom: "var(--s-md)" }}>Ready to take the first step?</h2>
          <p style={{ fontSize: "var(--t-md)", fontWeight: 300, color: "var(--earth)", maxWidth: "var(--max-w-narrow)", margin: "0 auto var(--s-lg)" }}>
            Never give up on yourself. We are here to help you figure out the rest.
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
