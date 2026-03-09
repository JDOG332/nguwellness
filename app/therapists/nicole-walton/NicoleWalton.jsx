"use client";
import { useRouter } from "next/navigation";
import Nav from "../../Nav";
import Footer from "../../Footer";

const profileStyles = `
  .profile-hero {
    display: grid;
    grid-template-columns: 38.2% 1fr;
    gap: var(--s-xl);
    max-width: var(--max-w);
    margin: 0 auto;
    padding: var(--s-xl) var(--s-lg) var(--s-2xl);
    align-items: start;
    animation: fadeIn 0.618s var(--ease-phi) both;
  }

  .profile-photo-wrap {
    position: relative;
    overflow: hidden;
    background: var(--mist);
  }

  .profile-photo {
    width: 100%;
    aspect-ratio: 3 / 4;
    object-fit: cover;
    object-position: top center;
    display: block;
  }

  .profile-photo-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: var(--s-3xs);
    background: var(--rose);
  }

  .profile-role {
    font-size: var(--t-xs);
    font-weight: 500;
    letter-spacing: 0.236em;
    text-transform: uppercase;
    color: var(--rose);
    margin-bottom: var(--s-2xs);
  }

  .profile-name {
    font-family: var(--font-display);
    font-size: clamp(var(--t-xl), 4vw, var(--t-2xl));
    font-weight: 900;
    line-height: 1.0;
    letter-spacing: -0.0382em;
    margin-bottom: var(--s-3xs);
  }

  .profile-creds {
    font-size: var(--t-sm);
    font-weight: 500;
    color: var(--warm-gray);
    letter-spacing: 0.0618em;
    margin-bottom: var(--s-md);
  }

  .profile-bio {
    font-size: var(--t-base);
    font-weight: 300;
    color: var(--earth);
    line-height: 1.618;
    margin-bottom: var(--s-md);
    max-width: 42.36rem;
  }

  .profile-details {
    display: flex;
    flex-direction: column;
    gap: var(--s-xs);
    margin-top: var(--s-lg);
    padding-top: var(--s-lg);
    border-top: 0.0618rem solid var(--divider);
  }

  .profile-detail {
    display: flex;
    gap: var(--s-md);
    align-items: baseline;
  }

  .detail-label {
    font-size: var(--t-xs);
    font-weight: 500;
    letter-spacing: 0.146em;
    text-transform: uppercase;
    color: var(--warm-gray);
    min-width: 6.18rem;
    flex-shrink: 0;
  }

  .detail-value {
    font-size: var(--t-sm);
    font-weight: 400;
    color: var(--earth);
  }

  .profile-ctas {
    display: flex;
    gap: var(--s-sm);
    margin-top: var(--s-lg);
  }

  @media (max-width: 61.8rem) {
    .profile-hero { grid-template-columns: 1fr; max-width: 42.36rem; }
  }
`;

export default function NicoleWalton() {
  const router = useRouter();

  return (
    <div>
      <style>{profileStyles}</style>
      <Nav />

      <section className="profile-hero">
        <div className="profile-photo-wrap">
          <img className="profile-photo" src="/images/therapists/Nicole_Walton_bio3.jpg" alt="Dr. Nicole Walton" />
          <div className="profile-photo-bar" />
        </div>
        <div>
          <p className="profile-role">Founder & Owner</p>
          <h1 className="profile-name">Dr. Nicole Walton</h1>
          <p className="profile-creds">PhD · LISW-S · LPC &nbsp;·&nbsp; she / her</p>
          <hr className="phi-rule" />

          <p className="profile-bio">
            Nicole built NGU Wellness on 20 years of clinical experience spanning community mental
            health crisis work, pediatric medical social work, and outpatient therapy with individuals,
            couples, and families.
          </p>
          <p className="profile-bio">
            She holds a Master of Social Work from The Ohio State University and a Doctorate in Counselor
            Education and Supervision from Regent University (2023). She has also taught, supervised
            clinicians, and participated in research throughout her career.
          </p>
          <p className="profile-bio">
            Nicole works with people from a wellness perspective. She provides a nonjudgmental,
            warm, and collaborative environment and specializes in depression, anxiety, and
            relationship concerns across all life stages.
          </p>

          <div className="profile-details">
            <div className="profile-detail">
              <span className="detail-label">License</span>
              <span className="detail-value">LISW-S, Ohio I.0700277-SUPV</span>
            </div>
            <div className="profile-detail">
              <span className="detail-label">Education</span>
              <span className="detail-value">MSW, Ohio State University, 2005 · PhD, Regent University, 2023</span>
            </div>
            <div className="profile-detail">
              <span className="detail-label">Experience</span>
              <span className="detail-value">20+ years clinical practice, teaching, research & supervision</span>
            </div>
            <div className="profile-detail">
              <span className="detail-label">Specialties</span>
              <span className="detail-value">Trauma, PTSD, Depression, Anxiety, Relationships, Life Transitions</span>
            </div>
            <div className="profile-detail">
              <span className="detail-label">Modalities</span>
              <span className="detail-value">CBT, EMDR, ACT, Humanistic Therapy, Narrative Therapy</span>
            </div>
            <div className="profile-detail">
              <span className="detail-label">Locations</span>
              <span className="detail-value">Dayton, Rocky River, Telehealth (Ohio)</span>
            </div>
          </div>

          <div className="profile-ctas">
            <button className="btn-rose" onClick={() => window.open("https://therapyportal.com/p/nguwellness", "_blank")}>
              Request Appointment
            </button>
            <button className="btn-outline" onClick={() => router.push("/therapists")}>
              All Therapists
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
