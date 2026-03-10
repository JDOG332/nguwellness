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
    padding: var(--s-md) var(--s-lg) var(--s-xl);
    align-items: stretch;
    animation: fadeIn 0.618s var(--ease-phi) both;
  }

  .about-aside {
    border-left: 0.0618rem solid var(--divider);
    padding-left: var(--s-xl);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .about-aside-label {
    font-size: var(--t-xs);
    font-weight: 400;
    letter-spacing: 0.236em;
    text-transform: uppercase;
    color: var(--warm-gray);
    margin-bottom: var(--s-md);
  }

  .about-quote {
    font-family: var(--font-accent);
    font-size: var(--t-lg);
    font-style: italic;
    line-height: 1.618;
    color: var(--ink);
    margin-bottom: var(--s-md);
  }

  .about-attr {
    font-size: var(--t-xs);
    font-weight: 400;
    color: var(--warm-gray);
    letter-spacing: 0.0618em;
  }

  .about-stats {
    display: flex;
    gap: var(--s-xl);
    padding-top: var(--s-lg);
    border-top: 0.0618rem solid var(--divider);
  }

  .about-stat-num {
    font-family: var(--font-display);
    font-size: var(--t-xl);
    font-weight: 900;
    line-height: 1;
    margin-bottom: var(--s-3xs);
  }

  .about-stat-label {
    font-size: var(--t-xs);
    font-weight: 400;
    color: var(--warm-gray);
    letter-spacing: 0.0618em;
  }

  /* ORIGIN */
  .origin-grid {
    display: grid;
    grid-template-columns: 38.2% 1fr;
    gap: var(--s-xl);
    align-items: start;
  }

  .timeline {
    display: flex;
    flex-direction: column;
    gap: 0;
    position: relative;
  }

  .timeline::before {
    content: '';
    position: absolute;
    left: 1.618rem;
    top: 0.618rem;
    bottom: 0.618rem;
    width: 0.0618rem;
    background: var(--divider);
  }

  .tl-item {
    display: grid;
    grid-template-columns: 2.618rem 1fr;
    gap: var(--s-md);
    padding-bottom: var(--s-lg);
    position: relative;
  }

  .tl-item:last-child { padding-bottom: 0; }

  .tl-dot {
    width: 2.618rem;
    height: 2.618rem;
    border-radius: 6.854rem;
    background: var(--paper);
    border: 0.0618rem solid var(--divider);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--t-xs);
    font-weight: 400;
    color: var(--warm-gray);
    position: relative;
    z-index: 1;
    flex-shrink: 0;
  }

  .tl-dot.active {
    background: var(--rose-deep);
    border-color: var(--rose-deep);
    color: var(--paper);
  }

  .tl-year {
    font-size: var(--t-xs);
    font-weight: 400;
    letter-spacing: 0.236em;
    text-transform: uppercase;
    color: var(--warm-gray);
    margin-bottom: var(--s-3xs);
    padding-top: var(--s-2xs);
  }

  .tl-title {
    font-family: var(--font-display);
    font-size: var(--t-base);
    font-weight: 900;
    margin-bottom: var(--s-3xs);
  }

  .tl-desc {
    font-size: var(--t-sm);
    font-weight: 300;
    color: var(--earth);
    line-height: 1.618;
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
    .about-aside { border-left: none; padding-left: 0; border-top: 0.0618rem solid var(--divider); padding-top: var(--s-lg); }
    .origin-grid { grid-template-columns: 1fr; }
    .pillar-grid { grid-template-columns: 1fr 1fr; }
    .bio-grid { grid-template-columns: 1fr; }
  }

  @media (max-width: 42.36rem) {
    .pillar-grid { grid-template-columns: 1fr; }
    .about-stats { flex-wrap: wrap; gap: var(--s-lg); }
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
            A practice built on one belief.
          </h1>
          <p style={{ fontSize: "var(--t-md)", fontWeight: 300, color: "var(--earth)", maxWidth: "var(--max-w-narrow)", marginBottom: "var(--s-lg)" }}>
            NGU Wellness was founded with a simple conviction: everyone deserves access to exceptional, compassionate mental health care. No matter where they've been or what they're facing.
          </p>
          <div style={{ display: "flex", gap: "var(--s-sm)", flexWrap: "wrap" }}>
            <button className="btn-primary" onClick={() => router.push("/therapists")}>Meet Our Therapists</button>
            <button className="btn-outline" onClick={() => router.push("/contact")}>Get in Touch</button>
          </div>
        </div>
        <div className="about-aside">
          <div>
            <p className="about-aside-label">Founded on a vision</p>
            <p className="about-quote">
              "We started NGU Wellness because we envision a world where all people can experience healing and transformation with the right help and support."
            </p>
            <p className="about-attr">Dr. Nicole Walton, Founder & Owner</p>
          </div>
          <div className="about-stats">
            <div>
              <p className="about-stat-num">2021</p>
              <p className="about-stat-label">Founded</p>
            </div>
            <div>
              <p className="about-stat-num">595+</p>
              <p className="about-stat-label">Years of life experience</p>
            </div>
            <div>
              <p className="about-stat-num">2</p>
              <p className="about-stat-label">Locations</p>
            </div>
          </div>
        </div>
      </section>

      {/* NGU PROMISE */}
      <section className="dark-strip" style={{ padding: "var(--s-lg) var(--s-lg)" }}>
        <p style={{ fontFamily: "var(--font-accent)", fontSize: "var(--t-base)", fontStyle: "italic", color: "var(--paper)", opacity: "var(--alpha-ghost)", marginBottom: "var(--s-3xs)" }}>
          3 letters. one big message.
        </p>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(var(--t-xl), 4.236vw, var(--t-2xl))", color: "var(--paper)", marginBottom: "var(--s-3xs)" }}>
          Never Give Up.
        </h2>
        <p style={{ fontFamily: "var(--font-accent)", fontSize: "var(--t-base)", fontStyle: "italic", color: "var(--paper)", opacity: "var(--alpha-phi)" }}>
          Never give up on hope. Never give up on life. Never Give Up Wellness.
        </p>
      </section>

      {/* ORIGIN STORY */}
      <section className="phi-section">
        <div className="phi-wrap">
          <div className="origin-grid">
            <div>
              <p className="eyebrow">The Origin</p>
              <h2 style={{ fontSize: "clamp(var(--t-lg), 3.82vw, var(--t-xl))", marginBottom: "var(--s-sm)" }}>Where it began.</h2>
              <hr className="phi-rule" />
              <p style={{ fontSize: "var(--t-base)", fontWeight: 300, color: "var(--earth)", lineHeight: 1.618, marginBottom: "var(--s-md)" }}>
                Dr. Nicole Walton spent 20 years working in community mental health, pediatric social work, outpatient therapy, research, and clinical supervision before founding NGU Wellness. She had seen, firsthand, how difficult it can be for people to find quality care.
              </p>
              <p style={{ fontSize: "var(--t-base)", fontWeight: 300, color: "var(--earth)", lineHeight: 1.618, marginBottom: "var(--s-md)" }}>
                She opened NGU Wellness in 2021 in Dayton, Ohio with a team-based approach: a group of skilled, vetted therapists committed to high-quality, collaborative, evidence-based care.
              </p>
              <p style={{ fontSize: "var(--t-base)", fontWeight: 300, color: "var(--earth)", lineHeight: 1.618 }}>
                In 2023, that vision expanded. NGU Wellness opened a second location in Rocky River, Ohio, bringing the same standard of care to the greater Cleveland area.
              </p>
            </div>
            <div>
              <p className="eyebrow">Our Journey</p>
              <div className="timeline">
                <div className="tl-item">
                  <div className="tl-dot">PhD</div>
                  <div>
                    <p className="tl-year">Background</p>
                    <p className="tl-title">20 years of clinical experience</p>
                    <p className="tl-desc">Community mental health, pediatric social work, outpatient therapy, teaching, research, and clinical supervision.</p>
                  </div>
                </div>
                <div className="tl-item">
                  <div className="tl-dot active">21</div>
                  <div>
                    <p className="tl-year">Founded</p>
                    <p className="tl-title">NGU Wellness opens in Dayton</p>
                    <p className="tl-desc">453 Patterson Rd., Suite A. A multi-therapist practice built on collaborative, evidence-based care.</p>
                  </div>
                </div>
                <div className="tl-item">
                  <div className="tl-dot active">23</div>
                  <div>
                    <p className="tl-year">Expanded</p>
                    <p className="tl-title">Rocky River location opens</p>
                    <p className="tl-desc">20525 Center Ridge Rd., Suite 604. Quality therapy now accessible across Ohio.</p>
                  </div>
                </div>
                <div className="tl-item">
                  <div className="tl-dot active">→</div>
                  <div>
                    <p className="tl-year">Today</p>
                    <p className="tl-title">Growing team. Same standard.</p>
                    <p className="tl-desc">Licensed therapists serving adults, teens, children, couples, and families across Dayton and Cleveland.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="phi-section" style={{ background: "var(--mist)" }}>
        <div className="phi-wrap" style={{ textAlign: "center" }}>
          <p className="eyebrow">What Drives Us</p>
          <h2 style={{ fontSize: "clamp(var(--t-lg), 3.82vw, var(--t-xl))", marginBottom: "var(--s-sm)" }}>Our mission and values.</h2>
          <p style={{ fontSize: "var(--t-md)", fontWeight: 300, color: "var(--earth)", maxWidth: "var(--max-w-narrow)", margin: "0 auto" }}>
            Everyone deserves access to exceptional, compassionate mental health care. No matter what they are facing.
          </p>
        </div>
        <div className="phi-wrap">
          <div className="pillar-grid">
            <div className="pillar">
              <span className="pillar-icon">⟡</span>
              <p className="pillar-title">Service</p>
              <p className="pillar-desc">Guided by service. We want to give back, make a difference, and model caring for others.</p>
            </div>
            <div className="pillar">
              <span className="pillar-icon">◈</span>
              <p className="pillar-title">Collaboration</p>
              <p className="pillar-desc">We work with clients, not at them. Together we identify goals, learn skills, and address challenges.</p>
            </div>
            <div className="pillar">
              <span className="pillar-icon">◇</span>
              <p className="pillar-title">Excellence</p>
              <p className="pillar-desc">Every therapist is licensed, vetted, and trained in evidence-based approaches. Quality is non-negotiable.</p>
            </div>
            <div className="pillar">
              <span className="pillar-icon">○</span>
              <p className="pillar-title">Connection</p>
              <p className="pillar-desc">Being part of something greater contributes to resiliency, achievement, and adds meaning to life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER - NICOLE */}
      <section className="phi-section">
        <div className="phi-wrap">
          <p className="eyebrow" style={{ marginBottom: "var(--s-lg)" }}>The Founder</p>
          <div className="bio-grid">
            <div className="bio-photo-wrap">
              <img className="bio-photo" src="/images/therapists/Nicole_Walton.jpg" alt="Dr. Nicole Walton" onError={e => { e.target.style.background = "var(--mist)"; e.target.style.minHeight = "23.54rem"; }} />
              <div className="bio-photo-bar" />
            </div>
            <div>
              <p className="eyebrow">Founder & Owner</p>
              <h2 className="bio-name">Dr. Nicole Walton</h2>
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
                  <span className="bio-detail-value">LISW-S, Ohio I.0700277-SUPV</span>
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
              <div style={{ marginTop: "var(--s-lg)", display: "flex", gap: "var(--s-sm)" }}>
                <button className="btn-rose" onClick={() => router.push("/therapists/nicole-walton")}>Full Profile</button>
                <button className="btn-outline" onClick={() => router.push("/contact")}>Request Appointment</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JEFF BIO */}
      <section className="phi-section" style={{ background: "var(--mist)" }}>
        <div className="phi-wrap">
          <p className="eyebrow" style={{ marginBottom: "var(--s-lg)" }}>The Team</p>
          <div className="bio-grid">
            <div className="bio-photo-wrap" style={{ background: "#d8dfe2" }}>
              <img className="bio-photo" src="/images/therapists/Jeffrey_Sellers.jpeg" alt="Jeffrey Sellers" onError={e => { e.target.style.background = "#d8dfe2"; e.target.style.minHeight = "23.54rem"; }} />
              <div className="bio-photo-bar" style={{ background: "var(--earth)" }} />
            </div>
            <div>
              <p className="eyebrow" style={{ color: "var(--earth)" }}>Founder & Business Manager</p>
              <h2 className="bio-name">Jeffrey Sellers</h2>
              <hr className="phi-rule" style={{ background: "var(--earth)" }} />
              <p className="bio-p">
                Jeffrey Sellers brings 17 years of experience in education to his role as Business Manager at NGU Wellness. As a former teacher, he understands firsthand how circumstance, support, and the right environment shape what people are able to become.
              </p>
              <p className="bio-p">
                Jeffrey manages client intake, insurance verification, provider matching, and the day-to-day administrative coordination that keeps NGU running smoothly across both locations. He also serves as a fierce advocate for clients navigating the insurance process.
              </p>
              <p className="bio-blockquote">
                "Circumstances and the support we receive in life shape who we become. The right support at the right time changes everything."
              </p>
              <div className="bio-details">
                <div className="bio-detail">
                  <span className="bio-detail-label">Role</span>
                  <span className="bio-detail-value">Business Manager, NGU Wellness</span>
                </div>
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
                <div className="bio-detail">
                  <span className="bio-detail-label">Community</span>
                  <span className="bio-detail-value">That Day in May · Oakwood suicide prevention & awareness</span>
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
              "Mental health doesn't stop at our door."
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
