"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Nav from "../Nav";
import Footer from "../Footer";

/* ── SHARED INSURANCE DATA ────────────────────────────────── */
const INS = {
  "Commercial & Marketplace": ["Aetna","Anthem/BCBS","Ambetter","CareSource","Cigna","ComPsych","Frontpath","Humana","Medical Mutual","Optum","SummaCare","UMR","United Healthcare","Wellfleet"],
  "Medicaid": ["AmeriHealth","Anthem Ohio Medicaid","Buckeye","CareSource Medicaid","Humana Medicaid","Molina","Ohio Medicaid","OhioRISE","UHC Community Plan","WellCare"],
  "EAP Programs": ["Lyra","Optum/UHC EAP","Spring Health","Carelon"],
};

/* ── ACCORDION ────────────────────────────────────────────── */
const Acc = ({ title, chip, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="tp-acc">
      <button className="tp-acc-btn" onClick={() => setOpen(!open)}>
        <span className="tp-acc-label">
          {title}
          {chip && <span className="tp-acc-chip">{chip}</span>}
        </span>
        <span className={`tp-acc-arrow${open ? " open" : ""}`}>⌄</span>
      </button>
      <div className={`tp-acc-body${open ? " open" : ""}`}>
        <div className="tp-acc-inner">{children}</div>
      </div>
    </div>
  );
};

/* ── STYLES ───────────────────────────────────────────────── */
const tpStyles = `
  /* ═══════════════════════════════════════════════════
     THERAPIST PROFILE — Φ DESIGN SYSTEM STRICT
     Per-therapist color via CSS custom properties.
     ═══════════════════════════════════════════════════ */

  .tp-breadcrumb {
    display: flex;
    gap: var(--s-3xs);
    align-items: center;
    max-width: var(--max-w);
    margin: 0 auto;
    padding: var(--s-sm) var(--s-lg) 0;
    font-size: var(--t-xs);
    color: var(--warm-gray);
  }
  .tp-breadcrumb a { color: var(--warm-gray); text-decoration: none; }
  .tp-breadcrumb a:hover { color: var(--tp-primary); }
  .tp-breadcrumb-sep { color: var(--divider); }
  .tp-breadcrumb-current { color: var(--ink); }

  .tp-layout {
    display: grid;
    grid-template-columns: 38.2% 1fr;
    gap: var(--s-xl);
    max-width: var(--max-w);
    margin: 0 auto;
    padding: var(--s-lg) var(--s-lg) var(--s-xl);
    align-items: start;
    animation: fadeIn 0.618s var(--ease-phi) both;
  }

  /* ── SIDEBAR ── */
  .tp-sidebar {
    position: sticky;
    top: var(--s-md);
    border-right: 1px solid var(--divider);
    padding-right: var(--s-lg);
  }

  .tp-photo-wrap {
    position: relative;
    overflow: hidden;
    background: var(--mist);
    margin-bottom: var(--s-sm);
  }

  .tp-photo {
    width: 100%;
    aspect-ratio: 1 / 1.618;
    object-fit: cover;
    object-position: top center;
    display: block;
  }

  .tp-photo-line {
    position: absolute;
    top: 0; left: 0; right: 0;
    height: var(--s-2xs);
    background: linear-gradient(90deg, var(--tp-dark), var(--tp-primary), var(--tp-light));
  }

  .tp-badges {
    display: flex;
    gap: var(--s-2xs);
    flex-wrap: wrap;
    margin-bottom: var(--s-sm);
  }

  .tp-badge {
    font-size: var(--t-xs);
    font-weight: 400;
    letter-spacing: 0.236em;
    text-transform: uppercase;
    padding: var(--s-3xs) var(--s-2xs);
    border: 1px solid var(--tp-primary);
    color: var(--tp-primary);
  }

  .tp-badge.primary {
    background: var(--tp-primary);
    color: var(--paper);
    border-color: var(--tp-primary);
  }

  .tp-name {
    font-family: var(--font-display);
    font-size: clamp(var(--t-xl), 3.82vw + 1rem, var(--t-2xl));
    font-weight: 900;
    line-height: 1.0;
    letter-spacing: -0.0382em;
    margin-bottom: var(--s-3xs);
  }

  .tp-creds {
    font-size: var(--t-base);
    font-weight: 300;
    color: var(--warm-gray);
    margin-bottom: var(--s-3xs);
  }

  .tp-pronouns {
    font-size: var(--t-xs);
    color: var(--warm-gray);
    margin-bottom: var(--s-sm);
  }

  .tp-quote {
    font-family: var(--font-accent);
    font-style: italic;
    font-size: var(--t-base);
    line-height: 1.618;
    color: var(--earth);
    border-left: var(--s-3xs) solid var(--tp-primary);
    padding-left: var(--s-md);
    margin-bottom: var(--s-md);
  }

  .tp-cta-col {
    display: flex;
    flex-direction: column;
    gap: var(--s-2xs);
    margin-bottom: var(--s-md);
  }

  .tp-btn-primary {
    display: block;
    width: 100%;
    text-align: center;
    font-family: var(--font-body);
    font-size: var(--t-xs);
    font-weight: 400;
    letter-spacing: 0.0618em;
    text-transform: uppercase;
    color: var(--paper);
    background: var(--tp-primary);
    border: none;
    padding: var(--s-sm) var(--s-lg);
    cursor: pointer;
    transition: all var(--duration) var(--ease-phi);
    text-decoration: none;
  }
  .tp-btn-primary:hover { opacity: var(--alpha-phi); }

  .tp-btn-outline {
    display: block;
    width: 100%;
    text-align: center;
    font-family: var(--font-body);
    font-size: var(--t-xs);
    font-weight: 400;
    letter-spacing: 0.0618em;
    text-transform: uppercase;
    color: var(--tp-primary);
    background: transparent;
    border: 1px solid var(--tp-primary);
    padding: var(--s-sm) var(--s-lg);
    cursor: pointer;
    transition: all var(--duration) var(--ease-phi);
    text-decoration: none;
  }
  .tp-btn-outline:hover { background: var(--tp-primary); color: var(--paper); }

  .tp-meta-row {
    display: flex;
    flex-direction: column;
    gap: var(--s-3xs);
    margin-bottom: var(--s-sm);
  }

  .tp-meta-label {
    font-size: var(--t-xs);
    font-weight: 400;
    letter-spacing: 0.236em;
    text-transform: uppercase;
    color: var(--tp-primary);
  }

  .tp-meta-value {
    font-size: var(--t-xs);
    font-weight: 300;
    color: var(--earth);
    line-height: 1.618;
  }

  .tp-meta-chips {
    display: flex;
    flex-wrap: wrap;
    gap: var(--s-3xs);
  }

  .tp-chip {
    font-size: var(--t-xs);
    font-weight: 400;
    padding: var(--s-3xs) var(--s-2xs);
    background: var(--tp-tint);
    color: var(--tp-primary);
    border: 1px solid var(--tp-border);
  }

  .tp-status-badge {
    font-size: var(--t-xs);
    font-weight: 400;
    letter-spacing: 0.236em;
    text-transform: uppercase;
    padding: var(--s-3xs) var(--s-2xs);
  }

  .tp-status-accepting { background: rgba(122,139,122,0.1); color: var(--sage); border: 1px solid var(--sage); }
  .tp-status-waitlisting { background: rgba(245,145,63,0.1); color: var(--gold); border: 1px solid var(--gold); }

  /* ── MAIN CONTENT ── */
  .tp-callout {
    background: var(--tp-tint);
    border: 1px solid var(--tp-border);
    padding: var(--s-md);
    margin-bottom: var(--s-lg);
  }

  .tp-callout-label {
    font-size: var(--t-xs);
    font-weight: 400;
    letter-spacing: 0.236em;
    text-transform: uppercase;
    color: var(--tp-primary);
    margin-bottom: var(--s-2xs);
  }

  .tp-callout-quote {
    font-family: var(--font-accent);
    font-style: italic;
    font-size: var(--t-md);
    line-height: 1.618;
    color: var(--earth);
  }

  /* ── ACCORDION ── */
  .tp-acc {
    border-bottom: 1px solid var(--divider);
  }

  .tp-acc-btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--s-md) 0;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
  }

  .tp-acc-label {
    font-family: var(--font-display);
    font-size: var(--t-md);
    font-weight: 900;
    color: var(--ink);
    line-height: 1.1;
    letter-spacing: -0.0382em;
    display: flex;
    align-items: center;
    gap: var(--s-xs);
  }

  .tp-acc-chip {
    font-family: var(--font-body);
    font-size: var(--t-xs);
    font-weight: 400;
    letter-spacing: 0.236em;
    text-transform: uppercase;
    background: var(--tp-tint);
    color: var(--tp-primary);
    padding: var(--s-3xs) var(--s-2xs);
  }

  .tp-acc-arrow {
    font-size: var(--t-md);
    color: var(--warm-gray);
    transition: transform 0.382s var(--ease-phi);
    display: inline-block;
    line-height: 1;
  }
  .tp-acc-arrow.open { transform: rotate(180deg); }

  .tp-acc-body {
    display: grid;
    grid-template-rows: 0fr;
    opacity: 0;
    transition: grid-template-rows 0.382s cubic-bezier(0.382,0,0.618,1), opacity 0.382s;
  }
  .tp-acc-body.open { grid-template-rows: 1fr; opacity: 1; }
  .tp-acc-inner { overflow: hidden; padding-bottom: var(--s-lg); }
  .tp-acc-body:not(.open) .tp-acc-inner { padding-bottom: 0; }

  /* Checklist items */
  .tp-check-item {
    display: flex;
    gap: var(--s-sm);
    align-items: flex-start;
    padding: var(--s-sm) 0;
    border-bottom: 1px solid var(--light);
  }
  .tp-check-item:last-child { border-bottom: none; }

  .tp-check-icon {
    width: var(--s-md);
    height: var(--s-md);
    border-radius: var(--s-2xl);
    border: 1px solid var(--tp-primary);
    color: var(--tp-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--t-xs);
    flex-shrink: 0;
    margin-top: var(--s-3xs);
  }

  .tp-check-text {
    font-size: var(--t-base);
    font-weight: 300;
    color: var(--earth);
    line-height: 1.618;
  }
  .tp-check-text strong { font-weight: 400; color: var(--ink); }

  /* Specialty pills */
  .tp-spec-grid {
    display: flex;
    flex-wrap: wrap;
    gap: var(--s-2xs);
    margin-top: var(--s-xs);
  }

  .tp-spec-pill {
    font-size: var(--t-xs);
    padding: var(--s-3xs) var(--s-xs);
    border: 1px solid var(--tp-border);
    color: var(--tp-primary);
    background: var(--tp-tint);
  }

  /* Modalities grid */
  .tp-mod-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--s-sm);
    margin-top: var(--s-sm);
  }

  .tp-mod-card {
    padding: var(--s-sm);
    border: 1px solid var(--divider);
    transition: all var(--duration) var(--ease-phi);
  }
  .tp-mod-card:hover { border-color: var(--tp-primary); }

  .tp-mod-abbr {
    font-size: var(--t-xs);
    font-weight: 400;
    letter-spacing: 0.236em;
    text-transform: uppercase;
    color: var(--tp-primary);
    margin-bottom: var(--s-3xs);
  }

  .tp-mod-name {
    font-family: var(--font-display);
    font-size: var(--t-base);
    font-weight: 900;
    margin-bottom: var(--s-3xs);
    line-height: 1.1;
    letter-spacing: -0.0382em;
  }

  .tp-mod-desc {
    font-size: var(--t-xs);
    font-weight: 300;
    color: var(--earth);
    line-height: 1.618;
  }

  /* Schedule */
  .tp-sched-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--s-2xs);
    margin: var(--s-sm) 0;
  }

  .tp-sched-card {
    background: var(--tp-primary);
    padding: var(--s-sm);
  }
  .tp-sched-day { font-size: var(--t-xs); font-weight: 400; letter-spacing: 0.236em; text-transform: uppercase; color: var(--paper); opacity: var(--alpha-phi); margin-bottom: var(--s-3xs); }
  .tp-sched-time { font-size: var(--t-xs); font-weight: 400; color: var(--paper); line-height: 1.618; }

  .tp-sched-na {
    background: var(--mist);
    padding: var(--s-sm);
  }
  .tp-sched-na-day { font-size: var(--t-xs); font-weight: 400; letter-spacing: 0.236em; text-transform: uppercase; color: var(--warm-gray); }
  .tp-sched-na-text { font-size: var(--t-xs); color: var(--divider); }

  /* Insurance */
  .tp-ins-category { margin-bottom: var(--s-md); }
  .tp-ins-cat-label { font-size: var(--t-xs); font-weight: 400; letter-spacing: 0.236em; text-transform: uppercase; color: var(--tp-primary); margin-bottom: var(--s-2xs); }
  .tp-ins-pills { display: flex; flex-wrap: wrap; gap: var(--s-3xs); }
  .tp-ins-pill { font-size: var(--t-xs); padding: var(--s-3xs) var(--s-2xs); background: var(--mist); border: 1px solid var(--divider); color: var(--earth); transition: all var(--duration) var(--ease-phi); }
  .tp-ins-pill:hover { background: var(--tp-tint); border-color: var(--tp-border); }

  /* Bio text */
  .tp-bio-text {
    font-size: var(--t-base);
    font-weight: 300;
    color: var(--earth);
    line-height: 1.618;
    margin-bottom: var(--s-sm);
  }

  /* Faith box */
  .tp-faith-box {
    padding: var(--s-md);
    border-left: var(--s-3xs) solid var(--gold);
    background: var(--mist);
  }

  /* Team Says */
  .tp-team-says {
    padding: var(--s-md);
    border-left: var(--s-3xs) solid var(--tp-primary);
    background: var(--tp-tint);
  }

  .tp-team-says-text {
    font-family: var(--font-accent);
    font-style: italic;
    font-size: var(--t-md);
    line-height: 1.618;
    color: var(--earth);
    margin-bottom: var(--s-sm);
  }

  .tp-team-says-author {
    font-size: var(--t-xs);
    font-weight: 400;
    letter-spacing: 0.236em;
    text-transform: uppercase;
    color: var(--tp-primary);
  }

  .tp-faith-title {
    font-family: var(--font-display);
    font-size: var(--t-base);
    font-weight: 900;
    color: var(--ink);
    margin-bottom: var(--s-sm);
    line-height: 1.1;
    letter-spacing: -0.0382em;
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 61.8rem) {
    .tp-layout { grid-template-columns: 1fr; }
    .tp-sidebar { position: static; border-right: none; padding-right: 0; border-bottom: 1px solid var(--divider); padding-bottom: var(--s-lg); }
    .tp-mod-grid { grid-template-columns: 1fr; }
    .tp-sched-grid { grid-template-columns: 1fr 1fr; }
  }
`;

export default function TherapistProfile({ data }) {
  const router = useRouter();
  const t = data;

  const paletteVars = {
    "--tp-primary": t.color,
    "--tp-dark": t.colorDark || t.color,
    "--tp-light": t.colorLight || t.color,
    "--tp-tint": t.colorTint || `${t.color}0F`,
    "--tp-border": t.colorBorder || `${t.color}3D`,
  };

  const isAccepting = t.status === "accepting";

  return (
    <div style={paletteVars}>
      <style>{tpStyles}</style>
      <Nav />

      <div className="tp-breadcrumb">
        <a href="/">Home</a><span className="tp-breadcrumb-sep">/</span>
        <a href="/therapists">Therapists</a><span className="tp-breadcrumb-sep">/</span>
        <span className="tp-breadcrumb-current">{t.name}</span>
      </div>

      <div className="tp-layout">
        {/* ── SIDEBAR ── */}
        <aside className="tp-sidebar">
          <div className="tp-photo-wrap">
            <img className="tp-photo" src={t.photo} alt={t.name} />
            <div className="tp-photo-line" />
          </div>
          <div className="tp-badges">
            {t.badges.map((b, i) => <span key={i} className={`tp-badge${i === 0 ? " primary" : ""}`}>{b}</span>)}
          </div>
          <h1 className="tp-name">{t.name}</h1>
          <p className="tp-creds">{t.credentials}</p>
          <p className="tp-pronouns">{t.pronouns}</p>
          <p className="tp-quote">"{t.quote}"</p>
          <div className="tp-cta-col">
            <button className="tp-btn-primary" onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLScRT05N8MswuXUXtYCaD-m6j4XUWKKDlTYuNSaLS6Pfy_8f6w/viewform?usp=header", "_blank")}>
              {isAccepting ? "Schedule with " + t.firstName : `Join ${t.firstName}'s Waitlist`}
            </button>
            <a className="tp-btn-outline" href="tel:+18886489355">Call or Text: 888-648-9355</a>
          </div>
          <div className="tp-meta-row">
            <span className="tp-meta-label">Availability</span>
            <span className={`tp-status-badge tp-status-${t.status}`}>
              {isAccepting ? "Accepting Clients" : "Currently Waitlisting"}
            </span>
          </div>
          <div className="tp-meta-row">
            <span className="tp-meta-label">Session Format</span>
            <div className="tp-meta-chips">
              {t.formats.map(f => <span key={f} className="tp-chip">{f}</span>)}
            </div>
          </div>
          <div className="tp-meta-row">
            <span className="tp-meta-label">Location</span>
            <span className="tp-meta-value">{t.locationDetail}</span>
          </div>
          <div className="tp-meta-row">
            <span className="tp-meta-label">Ages Served</span>
            <span className="tp-meta-value">{t.ages}</span>
          </div>
        </aside>

        {/* ── MAIN ── */}
        <main>
          <div className="tp-callout">
            <p className="tp-callout-label">About {t.firstName}</p>
            <p className="tp-callout-quote">"{t.calloutQuote}"</p>
          </div>

          <div>
            <Acc title={`Who ${t.firstName} Helps`} defaultOpen={true}>
              {t.whoHelps.map((item, i) => (
                <div key={i} className="tp-check-item"><span className="tp-check-icon">✓</span><p className="tp-check-text"><strong>{item.s}</strong> {item.t}</p></div>
              ))}
            </Acc>

            {t.teamSays && (
              <Acc title={`What Our Team Says`} chip="From NGU Leadership">
                <div className="tp-team-says">
                  <p className="tp-team-says-text">{t.teamSays.text}</p>
                  <p className="tp-team-says-author">– {t.teamSays.author}</p>
                </div>
              </Acc>
            )}

            <Acc title="Specialties" chip="What We Work On">
              <div className="tp-spec-grid">
                {t.specialtiesFull.map(s => <span key={s} className="tp-spec-pill">{s}</span>)}
              </div>
            </Acc>

            <Acc title={`How ${t.firstName} Works`} chip="Evidence-Based">
              <p className="tp-bio-text">{t.approachText}</p>
              <div className="tp-mod-grid">
                {t.modalities.map(m => (
                  <div key={m.abbr} className="tp-mod-card">
                    <p className="tp-mod-abbr">{m.abbr}</p>
                    <p className="tp-mod-name">{m.name}</p>
                    <p className="tp-mod-desc">{m.desc}</p>
                  </div>
                ))}
              </div>
            </Acc>

            <Acc title="What to Expect">
              {t.expectations.map((item, i) => (
                <div key={i} className="tp-check-item"><span className="tp-check-icon">→</span><p className="tp-check-text"><strong>{item.s}</strong> {item.t}</p></div>
              ))}
            </Acc>

            {t.faith && (
              <Acc title="Faith & Spirituality">
                <div className="tp-faith-box">
                  <p className="tp-faith-title">Faith-integrated therapy is available, never required.</p>
                  <p className="tp-bio-text">{t.faithText}</p>
                </div>
              </Acc>
            )}

            {t.credentialDetails && (
              <Acc title="Credentials & Education">
                {t.credentialDetails.map((item, i) => (
                  <div key={i} className="tp-check-item"><span className="tp-check-icon">◈</span><p className="tp-check-text"><strong>{item.s}</strong> {item.t}</p></div>
                ))}
              </Acc>
            )}

            <Acc title="Schedule & Availability">
              {t.schedule.available.length > 0 && (
                <div className="tp-sched-grid">
                  {t.schedule.available.map(s => (
                    <div key={s.day} className="tp-sched-card"><p className="tp-sched-day">{s.day}</p><p className="tp-sched-time">{s.time}</p></div>
                  ))}
                </div>
              )}
              {t.schedule.unavailable.length > 0 && (
                <div className="tp-sched-grid">
                  {t.schedule.unavailable.map(d => (
                    <div key={d} className="tp-sched-na"><p className="tp-sched-na-day">{d}</p><p className="tp-sched-na-text">Not available</p></div>
                  ))}
                </div>
              )}
            </Acc>

            <Acc title="Insurance & Fees">
              {Object.entries(INS).map(([cat, plans]) => (
                <div key={cat} className="tp-ins-category">
                  <p className="tp-ins-cat-label">{cat}</p>
                  <div className="tp-ins-pills">{plans.map(p => <span key={p} className="tp-ins-pill">{p}</span>)}</div>
                </div>
              ))}
            </Acc>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
