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
    aspect-ratio: 1 / 1.618;
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
    font-weight: 400;
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
    font-weight: 400;
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
    font-weight: 400;
    letter-spacing: 0.236em;
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

export default function KimBrant() {
  const router = useRouter();

  return (
    <div>
      <style>{profileStyles}</style>
      <Nav />

      <section className="profile-hero">
        <div className="profile-photo-wrap">
          <img className="profile-photo" src="/images/therapists/Kim_Brant_bio.png" alt="Kim Brant" />
          <div className="profile-photo-bar" />
        </div>
        <div>
          <p className="profile-role">Licensed Counselor</p>
          <h1 className="profile-name">Kim Brant</h1>
          <p className="profile-creds">LPCC · CCATP &nbsp;·&nbsp; she / her</p>
          <hr className="phi-rule" />

          <p className="profile-bio">
            Kim Brant brings 19 years of clinical experience to her work at NGU Wellness. She specializes
            in helping adults navigate anxiety, depression, grief, and life transitions using evidence-based,
            faith-sensitive approaches.
          </p>
          <p className="profile-bio">
            Kim holds the Certified Clinical Anxiety Treatment Professional (CCATP) credential, reflecting
            advanced training in the treatment of anxiety disorders including panic, OCD, and generalized
            anxiety. She uses CBT, ACT, and ERP to help clients build real, lasting skills.
          </p>
          <p className="profile-bio">
            Her approach is warm, direct, and practical — focused on helping people move through what
            keeps them stuck and toward the life they actually want to be living.
          </p>

          <div className="profile-details">
            <div className="profile-detail">
              <span className="detail-label">License</span>
              <span className="detail-value">LPCC, Ohio</span>
            </div>
            <div className="profile-detail">
              <span className="detail-label">Certification</span>
              <span className="detail-value">CCATP — Certified Clinical Anxiety Treatment Professional</span>
            </div>
            <div className="profile-detail">
              <span className="detail-label">Experience</span>
              <span className="detail-value">19 years clinical practice</span>
            </div>
            <div className="profile-detail">
              <span className="detail-label">Specialties</span>
              <span className="detail-value">Anxiety, Depression, Grief & Loss, Life Transitions, Stress, Relationships</span>
            </div>
            <div className="profile-detail">
              <span className="detail-label">Modalities</span>
              <span className="detail-value">CBT, ACT, ERP, Motivational Interviewing</span>
            </div>
            <div className="profile-detail">
              <span className="detail-label">Ages</span>
              <span className="detail-value">Adults 18–75</span>
            </div>
            <div className="profile-detail">
              <span className="detail-label">Location</span>
              <span className="detail-value">Dayton (In-Person) · Telehealth (Ohio)</span>
            </div>
            <div className="profile-detail">
              <span className="detail-label">Availability</span>
              <span className="detail-value">Monday, Tuesday, Thursday</span>
            </div>
            <div className="profile-detail">
              <span className="detail-label">Status</span>
              <span className="detail-value" style={{ color: "var(--gold)" }}>Waitlist open — accepting for future openings</span>
            </div>
          </div>

          <div className="profile-ctas">
            <button className="btn-rose" onClick={() => window.open("https://therapyportal.com/p/nguwellness", "_blank")}>
              Join Waitlist
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
