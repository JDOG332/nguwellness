"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Nav from "../../Nav";
import Footer from "../../Footer";

/* ── KIM MATCH ENGINE ─────────────────────────────────────── */
const SYN = { anxious:"anxiety",worried:"anxiety",worry:"anxiety",panic:"anxiety",nervous:"anxiety",scared:"fear",afraid:"fear",ocd:"anxiety",depressed:"depression",hopeless:"depression",numb:"depression",sad:"sadness",grief:"grief",grieving:"grief",mourning:"grief",died:"loss",death:"loss",bereavement:"grief",bereaved:"grief",changing:"change",career:"transition",divorce:"transition",stressed:"stress",burnout:"stress",overwhelmed:"stress",exhausted:"stress",virtual:"telehealth",online:"telehealth",zoom:"telehealth",remote:"telehealth",spiritual:"faith",god:"faith",prayer:"faith",christian:"faith",church:"faith" };
const STOP_K = new Set(["a","an","the","is","are","was","i","me","my","we","you","it","and","or","but","in","on","to","for","of","with","that","this","have","do","not","so","just","very","really","some","also","still","there","when","what","how","they","would","could","will","can","need","want","feel","get","got","help","like","think","know"]);

function tokenizeK(text) {
  if (!text) return [];
  const raw = text.toLowerCase().replace(/[^a-z0-9\s]/g," ").split(/\s+/);
  return [...new Set(raw.filter(w=>w.length>=2).map(w=>SYN[w]||w).filter(w=>raw.length<=3||!STOP_K.has(w)))];
}

const WANT_GROUPS = [
  { terms:["anxiety","panic","ocd","worry","nervous","fear","scared"], label:"Anxiety specialist (CCATP certified)", kim:true },
  { terms:["depression","depressed","hopeless","numb","sad","sadness"], label:"Depression specialist", kim:true },
  { terms:["grief","grieving","loss","mourning","bereavement","died","death"], label:"Grief & loss specialist", kim:true },
  { terms:["transition","change","career","divorce","retirement","moving"], label:"Life transitions specialist", kim:true },
  { terms:["relationship","conflict","family","communication"], label:"Relationship issues", kim:true },
  { terms:["stress","burnout","overwhelmed","exhausted"], label:"Stress & burnout", kim:true },
  { terms:["trauma","ptsd","abuse","assault"], label:"Trauma-informed approach", kim:true },
  { terms:["cbt","cognitive"], label:"CBT (Cognitive Behavioral Therapy)", kim:true },
  { terms:["act","acceptance"], label:"ACT (Acceptance & Commitment)", kim:true },
  { terms:["dbt","dialectical"], label:"DBT (Dialectical Behavior Therapy)", kim:true },
  { terms:["faith","christian","spiritual","god","prayer","church","jesus"], label:"Faith-integrated therapy available", kim:true },
  { terms:["monday","mondays"], label:"Monday available (8am–1pm)", kim:true },
  { terms:["tuesday","tuesdays"], label:"Tuesday available (10am–6pm)", kim:true },
  { terms:["thursday","thursdays"], label:"Thursday available (8:30am–2:30pm)", kim:true },
  { terms:["friday","fridays"], label:"Friday: Kim is not available", kim:false },
  { terms:["wednesday"], label:"Wednesday: Kim is not available", kim:false },
  { terms:["saturday","sunday","weekend"], label:"Weekends: Kim is not available", kim:false },
  { terms:["telehealth","virtual","online","zoom","remote","video"], label:"Telehealth available", kim:true },
  { terms:["person","office","inperson","face"], label:"In-person available (Dayton)", kim:true },
  { terms:["dayton","ohio","patterson","kettering","oakwood","centerville","beavercreek","miamisburg"], label:"In-person at Dayton office", kim:true },
  { terms:["adults","adult","18","25","30","40","50","60","65","70"], label:"Works with adults 18–75", kim:true },
  { terms:["child","children","kids","teen","teenager","minor","youth"], label:"Kim works with adults 18+ only", kim:false },
];

function scoreAgainstKim(text) {
  const tokens = tokenizeK(text);
  const detected = WANT_GROUPS.filter(g => g.terms.some(t => tokens.some(tok => tok.includes(t) || t.includes(tok))));
  if (detected.length === 0) return { pct:0, matches:[], blockers:[], needsMore:true };
  const matched = [], blockers = [];
  for (const w of detected) { if (w.kim === false) blockers.push(w.label); else matched.push(w.label); }
  const pct = matched.length === 0 ? 0 : Math.round((matched.length / detected.length) * 100);
  return { pct, matches: matched.slice(0,5), blockers, needsMore: false };
}

/* ── INSURANCE DATA ───────────────────────────────────────── */
const INS = {
  "Commercial & Marketplace": ["Aetna","Anthem/BCBS","Ambetter","CareSource","Cigna","ComPsych","Frontpath","Humana","Medical Mutual","Optum","SummaCare","UMR","United Healthcare","Wellfleet"],
  "Medicaid": ["AmeriHealth","Anthem Ohio Medicaid","Buckeye","CareSource Medicaid","Humana Medicaid","Molina","Ohio Medicaid","OhioRISE","UHC Community Plan","WellCare"],
  "EAP Programs": ["Lyra","Optum/UHC EAP","Spring Health","Carelon","Synchrony Assist"],
};

/* ── MODALITIES ───────────────────────────────────────────── */
const MODS = [
  { abbr:"CBT", name:"Cognitive Behavioral Therapy", desc:"Restructures thought patterns driving anxiety, depression, and low mood." },
  { abbr:"ACT", name:"Acceptance & Commitment Therapy", desc:"Builds psychological flexibility to move toward what matters." },
  { abbr:"ERP", name:"Exposure & Response Prevention", desc:"Gold-standard treatment for OCD and avoidance-driven anxiety." },
  { abbr:"DBT", name:"Dialectical Behavior Therapy", desc:"Skills for emotional regulation and distress tolerance." },
  { abbr:"MI",  name:"Motivational Interviewing", desc:"Clarifies personal values and builds internal motivation." },
  { abbr:"SFBT",name:"Solution-Focused Brief Therapy", desc:"Focuses on strengths and solutions rather than problems." },
];

/* ── ACCORDION COMPONENT ──────────────────────────────────── */
const Acc = ({ title, chip, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ borderBottom: "0.0618rem solid var(--divider)" }}>
      <button onClick={() => setOpen(!open)} style={{
        width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "var(--s-md) 0", background: "none", border: "none", cursor: "pointer", textAlign: "left",
      }}>
        <span style={{ fontFamily: "var(--font-display)", fontSize: "var(--t-md)", fontWeight: 900, color: "var(--ink)", lineHeight: 1.1, letterSpacing: "-0.0382em", display: "flex", alignItems: "center", gap: "var(--s-xs)" }}>
          {title}
          {chip && <span style={{ fontSize: "var(--t-xs)", fontWeight: 400, letterSpacing: "0.236em", textTransform: "uppercase", background: "var(--mist)", color: "var(--rose)", padding: "0.236rem var(--s-2xs)" }}>{chip}</span>}
        </span>
        <span style={{ fontSize: "var(--t-md)", color: "var(--warm-gray)", transition: "transform 0.382s var(--ease-phi)", transform: open ? "rotate(180deg)" : "rotate(0)", display: "inline-block", lineHeight: 1 }}>⌄</span>
      </button>
      <div style={{ display: "grid", gridTemplateRows: open ? "1fr" : "0fr", opacity: open ? 1 : 0, transition: "grid-template-rows 0.382s cubic-bezier(0.382,0,0.618,1), opacity 0.382s" }}>
        <div style={{ overflow: "hidden" }}>
          <div style={{ paddingBottom: "var(--s-xl)" }}>{children}</div>
        </div>
      </div>
    </div>
  );
};

/* ── MATCH WIDGET ─────────────────────────────────────────── */
const MatchWidget = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const debRef = React.useRef(null);
  const handleChange = (e) => {
    const val = e.target.value; setInput(val);
    clearTimeout(debRef.current);
    if (val.trim().length < 3) { setResult(null); return; }
    debRef.current = setTimeout(() => setResult(scoreAgainstKim(val)), 236);
  };
  const pct = result?.pct ?? null;
  const scoreColor = pct === null ? null : pct >= 75 ? "var(--sage)" : pct >= 50 ? "var(--gold)" : "var(--rose-deep)";
  return (
    <div style={{ marginBottom: "var(--s-lg)", border: "0.0618rem solid var(--divider)", overflow: "hidden", background: "var(--mist)" }}>
      <div style={{ padding: "var(--s-sm) var(--s-md)", borderBottom: "0.0618rem solid var(--divider)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <p style={{ fontSize: "var(--t-xs)", fontWeight: 400, letterSpacing: "0.236em", textTransform: "uppercase", color: "var(--rose)", marginBottom: "0.236rem" }}>Is Kim a good fit?</p>
          <p style={{ fontSize: "var(--t-xs)", color: "var(--earth)", fontWeight: 300, lineHeight: 1.618 }}>Type what you need and we will let you know instantly.</p>
        </div>
        {pct !== null && <div style={{ width: "var(--s-xs)", height: "var(--s-xs)", borderRadius: "6.854rem", background: scoreColor, flexShrink: 0 }} />}
      </div>
      <div style={{ padding: "var(--s-sm) var(--s-md) var(--s-md)" }}>
        <textarea value={input} onChange={handleChange} rows={3}
          placeholder="e.g. I struggle with anxiety and I'm free Tuesday mornings, telehealth preferred..."
          style={{ width: "100%", border: "0.0618rem solid var(--divider)", padding: "var(--s-xs) var(--s-sm)", fontFamily: "var(--font-body)", fontSize: "var(--t-base)", color: "var(--ink)", resize: "none", outline: "none", lineHeight: 1.618, background: "var(--paper)", boxSizing: "border-box" }}
        />
        {!result && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--s-3xs)", marginTop: "var(--s-2xs)" }}>
            {["What you're struggling with","Days you're available","In-person or telehealth","Your city"].map(h => (
              <span key={h} style={{ fontSize: "var(--t-xs)", padding: "0.236rem var(--s-2xs)", border: "0.0618rem solid var(--divider)", color: "var(--warm-gray)", background: "var(--paper)" }}>+ {h}</span>
            ))}
          </div>
        )}
        {result && (
          <div style={{ marginTop: "var(--s-sm)" }}>
            {result.matches.length > 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--s-3xs)", marginBottom: result.blockers.length ? "var(--s-2xs)" : 0 }}>
                {result.matches.map((m,i) => (
                  <span key={i} style={{ fontSize: "var(--t-xs)", padding: "0.236rem var(--s-xs)", border: "0.0618rem solid var(--sage)", color: "var(--sage)", fontWeight: 400 }}>✓ {m}</span>
                ))}
              </div>
            )}
            {result.blockers.length > 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--s-3xs)", marginTop: result.matches.length ? "var(--s-3xs)" : 0 }}>
                {result.blockers.map((b,i) => (
                  <span key={i} style={{ fontSize: "var(--t-xs)", padding: "0.236rem var(--s-xs)", border: "0.0618rem solid var(--rose-deep)", color: "var(--rose-deep)", fontWeight: 400 }}>✕ {b}</span>
                ))}
              </div>
            )}
            {result.needsMore && <p style={{ fontSize: "var(--t-xs)", color: "var(--warm-gray)", marginTop: "var(--s-2xs)", fontStyle: "italic" }}>Try mentioning what you are struggling with, your availability, or how you would like to meet.</p>}
            {result.matches.length > 0 && result.blockers.length === 0 && (
              <div style={{ marginTop: "var(--s-sm)", padding: "var(--s-xs) var(--s-sm)", background: "var(--paper)", border: "0.0618rem solid var(--sage)", fontSize: "var(--t-xs)", color: "var(--earth)", lineHeight: 1.618 }}>
                <strong style={{ color: "var(--sage)" }}>Looks like a fit.</strong> Based on what you shared, Kim works with exactly what you described.
              </div>
            )}
            {result.blockers.length > 0 && (
              <div style={{ marginTop: "var(--s-sm)", padding: "var(--s-xs) var(--s-sm)", background: "var(--paper)", border: "0.0618rem solid var(--divider)", fontSize: "var(--t-xs)", color: "var(--earth)", lineHeight: 1.618 }}>
                Kim may not be the right fit for everything you mentioned. <a href="/therapists" style={{ color: "var(--rose)", fontWeight: 400 }}>See all therapists →</a>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

/* ── PAGE STYLES ──────────────────────────────────────────── */
const kimStyles = `
  .kim-layout {
    display: grid;
    grid-template-columns: 38.2% 1fr;
    gap: var(--s-xl);
    max-width: var(--max-w);
    margin: 0 auto;
    padding: var(--s-xl) var(--s-lg) var(--s-2xl);
    align-items: start;
  }

  .kim-sidebar {
    position: sticky;
    top: var(--s-md);
    border-right: 0.0618rem solid var(--divider);
    padding-right: var(--s-xl);
  }

  .kim-photo-wrap {
    position: relative;
    overflow: hidden;
    background: var(--mist);
    margin-bottom: var(--s-sm);
  }

  .kim-photo {
    width: 100%;
    aspect-ratio: 1 / 1.618;
    object-fit: cover;
    object-position: top center;
    display: block;
  }

  .kim-photo-bar {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 0.236rem;
    background: var(--rose);
  }

  .kim-badges {
    display: flex;
    gap: var(--s-2xs);
    flex-wrap: wrap;
    margin-bottom: var(--s-sm);
  }

  .kim-badge {
    font-size: var(--t-xs);
    font-weight: 400;
    letter-spacing: 0.236em;
    text-transform: uppercase;
    padding: 0.236rem var(--s-2xs);
    border: 0.0618rem solid var(--rose);
    color: var(--rose);
  }

  .kim-badge.primary {
    background: var(--rose-deep);
    color: var(--paper);
    border-color: var(--rose-deep);
  }

  .kim-name {
    font-family: var(--font-display);
    font-size: clamp(var(--t-xl), 3.82vw, var(--t-2xl));
    font-weight: 900;
    line-height: 1.0;
    letter-spacing: -0.0382em;
    margin-bottom: var(--s-3xs);
  }

  .kim-creds {
    font-size: var(--t-base);
    font-weight: 300;
    color: var(--warm-gray);
    margin-bottom: var(--s-3xs);
  }

  .kim-pronouns {
    font-size: var(--t-xs);
    color: var(--warm-gray);
    margin-bottom: var(--s-sm);
  }

  .kim-quote {
    font-family: var(--font-accent);
    font-style: italic;
    font-size: var(--t-base);
    line-height: 1.618;
    color: var(--earth);
    border-left: 0.236rem solid var(--rose);
    padding-left: var(--s-md);
    margin-bottom: var(--s-md);
  }

  .kim-cta-col {
    display: flex;
    flex-direction: column;
    gap: var(--s-2xs);
    margin-bottom: var(--s-md);
  }

  .kim-meta-row {
    display: flex;
    flex-direction: column;
    gap: 0.236rem;
    margin-bottom: var(--s-sm);
  }

  .kim-meta-label {
    font-size: var(--t-xs);
    font-weight: 400;
    letter-spacing: 0.236em;
    text-transform: uppercase;
    color: var(--rose);
  }

  .kim-meta-chips {
    display: flex;
    flex-wrap: wrap;
    gap: var(--s-3xs);
    margin-top: 0.236rem;
  }

  .kim-chip {
    font-size: var(--t-xs);
    font-weight: 400;
    padding: 0.236rem var(--s-2xs);
    background: var(--mist);
    color: var(--earth);
    border: 0.0618rem solid var(--divider);
  }

  .kim-chip.rose {
    background: rgba(181,112,107,0.0618);
    color: var(--rose);
    border-color: rgba(181,112,107,0.236);
  }

  /* MODALITY GRID */
  .mod-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--s-sm);
    margin-top: var(--s-sm);
  }

  .mod-card {
    padding: var(--s-sm);
    border: 0.0618rem solid var(--divider);
    transition: all var(--duration) var(--ease-phi);
  }

  .mod-card:hover { border-color: var(--rose); }

  /* SCHEDULE GRID */
  .sched-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--s-2xs);
    margin: var(--s-sm) 0;
  }

  .sched-card {
    background: var(--ink);
    padding: var(--s-sm);
  }

  .sched-day {
    font-size: var(--t-xs);
    font-weight: 400;
    letter-spacing: 0.236em;
    text-transform: uppercase;
    color: var(--paper);
    opacity: var(--alpha-phi);
    margin-bottom: 0.236rem;
  }

  .sched-time {
    font-size: var(--t-xs);
    font-weight: 400;
    color: var(--paper);
    line-height: 1.618;
  }

  .sched-na {
    background: var(--mist);
    padding: var(--s-sm);
  }

  .sched-na-day {
    font-size: var(--t-xs);
    font-weight: 400;
    letter-spacing: 0.236em;
    text-transform: uppercase;
    color: var(--warm-gray);
  }

  .sched-na-text {
    font-size: var(--t-xs);
    color: var(--divider);
  }

  /* INSURANCE PILLS */
  .ins-category {
    margin-bottom: var(--s-md);
  }

  .ins-pills {
    display: flex;
    flex-wrap: wrap;
    gap: var(--s-3xs);
  }

  .ins-pill {
    font-size: var(--t-xs);
    padding: 0.236rem var(--s-2xs);
    background: var(--mist);
    border: 0.0618rem solid var(--divider);
    color: var(--earth);
  }

  /* CHECKLIST */
  .check-item {
    display: flex;
    gap: var(--s-sm);
    align-items: flex-start;
    padding: var(--s-sm) 0;
    border-bottom: 0.0618rem solid var(--light);
  }

  .check-item:last-child { border-bottom: none; }

  .check-icon {
    width: var(--s-md);
    height: var(--s-md);
    border-radius: 6.854rem;
    border: 0.0618rem solid var(--rose);
    color: var(--rose);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--t-xs);
    font-weight: 400;
    flex-shrink: 0;
    margin-top: 0.236rem;
  }

  .check-text {
    font-size: var(--t-base);
    font-weight: 300;
    color: var(--earth);
    line-height: 1.618;
  }

  .check-text strong { font-weight: 400; color: var(--ink); }

  /* FAITH */
  .faith-box {
    padding: var(--s-md);
    border-left: 0.236rem solid var(--gold);
    background: var(--mist);
  }

  /* BREADCRUMB */
  .breadcrumb {
    display: flex;
    gap: var(--s-3xs);
    align-items: center;
    max-width: var(--max-w);
    margin: 0 auto;
    padding: var(--s-sm) var(--s-lg) 0;
    font-size: var(--t-xs);
    color: var(--warm-gray);
  }

  .breadcrumb a {
    color: var(--warm-gray);
    text-decoration: none;
  }

  .breadcrumb a:hover { color: var(--rose); }

  /* FEE BOX */
  .fee-box {
    background: var(--ink);
    padding: var(--s-md);
    display: grid;
    grid-template-columns: auto 1fr;
    gap: var(--s-md);
    align-items: center;
    margin-bottom: var(--s-md);
  }

  .fee-amt {
    font-family: var(--font-display);
    font-size: var(--t-2xl);
    font-weight: 900;
    color: var(--paper);
    line-height: 1;
  }

  .fee-info {
    font-size: var(--t-xs);
    color: var(--paper);
    opacity: var(--alpha-phi);
    line-height: 1.618;
  }

  @media (max-width: 61.8rem) {
    .kim-layout { grid-template-columns: 1fr; }
    .kim-sidebar { position: static; border-right: none; padding-right: 0; border-bottom: 0.0618rem solid var(--divider); padding-bottom: var(--s-xl); }
    .mod-grid { grid-template-columns: 1fr; }
    .sched-grid { grid-template-columns: 1fr 1fr; }
  }
`;

/* ── MAIN COMPONENT ───────────────────────────────────────── */
export default function KimBrant() {
  const router = useRouter();
  return (
    <div>
      <style>{kimStyles}</style>
      <Nav />

      <div className="breadcrumb">
        <a href="/">Home</a><span style={{ color: "var(--divider)" }}>/</span>
        <a href="/therapists">Therapists</a><span style={{ color: "var(--divider)" }}>/</span>
        <span style={{ color: "var(--ink)" }}>Kim Brant</span>
      </div>

      <div className="kim-layout">
        {/* ── SIDEBAR ── */}
        <aside className="kim-sidebar">
          <div className="kim-photo-wrap">
            <img className="kim-photo" src="/images/therapists/Kim_Brant_bio.png" alt="Kim Brant, LPCC" />
            <div className="kim-photo-bar" />
          </div>

          <div className="kim-badges">
            <span className="kim-badge primary">CCATP Certified</span>
            <span className="kim-badge">19 Yrs</span>
            <span className="kim-badge">Faith-Friendly</span>
          </div>

          <h1 className="kim-name">Kim Brant</h1>
          <p className="kim-creds">LPCC, CCATP</p>
          <p className="kim-pronouns">she / her</p>
          <p className="kim-quote">"I believe each person is valuable just as they are. We are all works in progress, and it takes courage just to come in the door."</p>

          <div className="kim-cta-col">
            <button className="btn-rose" style={{ width: "100%", textAlign: "center" }} onClick={() => router.push("/contact")}>Join Kim's Waitlist</button>
            <button className="btn-outline" style={{ width: "100%", textAlign: "center" }} onClick={() => window.open("tel:+18886489355")}>Call or Text: 888-648-9355</button>
          </div>

          <div className="kim-meta-row">
            <span className="kim-meta-label">Availability</span>
            <span style={{ display: "inline-block", fontSize: "var(--t-xs)", fontWeight: 400, letterSpacing: "0.236em", textTransform: "uppercase", padding: "0.236rem var(--s-2xs)", background: "rgba(184,150,90,0.1)", color: "var(--gold)", border: "0.0618rem solid var(--gold)", marginTop: "0.236rem" }}>Currently Waitlisting</span>
          </div>

          <div className="kim-meta-row">
            <span className="kim-meta-label">Session Format</span>
            <div className="kim-meta-chips">
              <span className="kim-chip rose">In-Person</span>
              <span className="kim-chip rose">Telehealth</span>
            </div>
          </div>

          <div className="kim-meta-row">
            <span className="kim-meta-label">Location</span>
            <span style={{ fontSize: "var(--t-xs)", fontWeight: 300, color: "var(--earth)", lineHeight: 1.618, marginTop: "0.236rem" }}>
              453 Patterson Rd., Suite A, Dayton, OH 45419
            </span>
          </div>

          <div className="kim-meta-row">
            <span className="kim-meta-label">Ages Served</span>
            <span style={{ fontSize: "var(--t-xs)", fontWeight: 300, color: "var(--earth)", marginTop: "0.236rem" }}>Adults 18–75</span>
          </div>
        </aside>

        {/* ── MAIN CONTENT ── */}
        <main>
          {/* MATCH WIDGET */}
          <MatchWidget />

          {/* CALLOUT */}
          <div style={{ background: "var(--mist)", border: "0.0618rem solid var(--divider)", padding: "var(--s-md)", marginBottom: "var(--s-lg)" }}>
            <p style={{ fontSize: "var(--t-xs)", fontWeight: 400, letterSpacing: "0.236em", textTransform: "uppercase", color: "var(--rose)", marginBottom: "var(--s-2xs)" }}>About Kim</p>
            <p style={{ fontFamily: "var(--font-accent)", fontStyle: "italic", fontSize: "var(--t-md)", lineHeight: 1.618, color: "var(--earth)" }}>
              "The right therapist doesn't just listen — they help you build real, lasting tools for the life you actually want to be living."
            </p>
          </div>

          {/* ── ACCORDIONS ── */}
          <div style={{ borderTop: "0.0618rem solid var(--divider)" }}>

            {/* WHO KIM HELPS */}
            <Acc title="Who Kim Helps" defaultOpen={true}>
              <div>
                {[
                  { strong: "Adults 18–75", text: "who are ready for real, practical tools — not just venting." },
                  { strong: "People with anxiety", text: "including panic, OCD, generalized worry, and avoidance patterns." },
                  { strong: "People dealing with depression", text: "low motivation, emotional numbness, or hopelessness." },
                  { strong: "People grieving a loss", text: "or navigating major life transitions (career, divorce, retirement)." },
                  { strong: "Faith-oriented clients", text: "who want therapy that respects and integrates their spiritual life." },
                ].map((item, i) => (
                  <div key={i} className="check-item">
                    <span className="check-icon">✓</span>
                    <p className="check-text"><strong>{item.strong}</strong> {item.text}</p>
                  </div>
                ))}
              </div>
            </Acc>

            {/* WHAT YOU'LL WORK ON */}
            <Acc title="What You'll Work On" chip={`${6} Specialties`}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--s-2xs)", marginTop: "var(--s-xs)" }}>
                {["Anxiety & Panic","Depression","Grief & Loss","Life Transitions","Stress & Burnout","Relationship Issues","Self-Esteem","Avoidance Patterns","OCD","Faith & Spirituality"].map(s => (
                  <span key={s} style={{ fontSize: "var(--t-xs)", padding: "var(--s-3xs) var(--s-xs)", border: "0.0618rem solid var(--divider)", color: "var(--earth)" }}>{s}</span>
                ))}
              </div>
            </Acc>

            {/* HOW KIM WORKS */}
            <Acc title="How Kim Works" chip="Evidence-Based">
              <p style={{ fontSize: "var(--t-base)", fontWeight: 300, color: "var(--earth)", lineHeight: 1.618, marginBottom: "var(--s-sm)" }}>
                Kim uses proven, research-backed approaches tailored to each client. She draws from multiple modalities depending on what fits you best.
              </p>
              <div className="mod-grid">
                {MODS.map(m => (
                  <div key={m.abbr} className="mod-card">
                    <p style={{ fontSize: "var(--t-xs)", fontWeight: 400, letterSpacing: "0.236em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.236rem" }}>{m.abbr}</p>
                    <p style={{ fontFamily: "var(--font-display)", fontSize: "var(--t-base)", fontWeight: 900, marginBottom: "var(--s-3xs)", lineHeight: 1.1, letterSpacing: "-0.0382em" }}>{m.name}</p>
                    <p style={{ fontSize: "var(--t-xs)", fontWeight: 300, color: "var(--earth)", lineHeight: 1.618 }}>{m.desc}</p>
                  </div>
                ))}
              </div>
            </Acc>

            {/* WHAT TO EXPECT */}
            <Acc title="What to Expect">
              <div>
                {[
                  { strong: "First session:", text: "A thorough assessment where Kim learns about you, your history, and what you want from therapy." },
                  { strong: "Ongoing work:", text: "Practical, skill-based sessions. You will leave with tools you can use between sessions." },
                  { strong: "Kim's style:", text: "Warm, direct, and practical. She meets you where you are and helps you move forward." },
                  { strong: "Session length:", text: "Standard 50-minute individual sessions." },
                ].map((item, i) => (
                  <div key={i} className="check-item">
                    <span className="check-icon">→</span>
                    <p className="check-text"><strong>{item.strong}</strong> {item.text}</p>
                  </div>
                ))}
              </div>
            </Acc>

            {/* FAITH & SPIRITUALITY */}
            <Acc title="Faith & Spirituality">
              <div className="faith-box">
                <p style={{ fontFamily: "var(--font-display)", fontSize: "var(--t-base)", fontWeight: 900, color: "var(--ink)", marginBottom: "var(--s-sm)", lineHeight: 1.1, letterSpacing: "-0.0382em" }}>
                  Faith-integrated therapy is available — never required.
                </p>
                <p style={{ fontSize: "var(--t-base)", fontWeight: 300, color: "var(--earth)", lineHeight: 1.618 }}>
                  Kim is comfortable integrating faith and spirituality into therapy for clients who want it. This can include exploring how your beliefs support your healing, working through spiritual struggles, or simply having a therapist who understands that dimension of your life. Faith is never pushed or assumed — it is simply available as part of the work if you want it there.
                </p>
              </div>
            </Acc>

            {/* SCHEDULE */}
            <Acc title="Schedule & Availability">
              <div className="sched-grid">
                <div className="sched-card">
                  <p className="sched-day">Monday</p>
                  <p className="sched-time">8:00 AM – 1:00 PM</p>
                </div>
                <div className="sched-card">
                  <p className="sched-day">Tuesday</p>
                  <p className="sched-time">10:00 AM – 6:00 PM</p>
                </div>
                <div className="sched-card">
                  <p className="sched-day">Thursday</p>
                  <p className="sched-time">8:30 AM – 2:30 PM</p>
                </div>
              </div>
              <div className="sched-grid">
                {["Wednesday","Friday","Weekends"].map(d => (
                  <div key={d} className="sched-na">
                    <p className="sched-na-day">{d}</p>
                    <p className="sched-na-text">Not available</p>
                  </div>
                ))}
              </div>
              <p style={{ marginTop: "var(--s-sm)", padding: "var(--s-xs) var(--s-sm)", background: "rgba(184,150,90,0.1)", border: "0.0618rem solid var(--gold)", fontSize: "var(--t-xs)", color: "var(--earth)", lineHeight: 1.618 }}>
                Kim is currently waitlisting. Join the waitlist and we will contact you when an opening is available.
              </p>
            </Acc>

            {/* INSURANCE & FEES */}
            <Acc title="Insurance & Fees">
              <div className="fee-box">
                <div>
                  <p className="fee-amt">$150</p>
                  <p style={{ fontSize: "var(--t-xs)", color: "var(--paper)", opacity: "var(--alpha-phi)", marginTop: "0.236rem" }}>per session (self-pay)</p>
                </div>
                <p className="fee-info">Most clients pay a copay through insurance. We verify your benefits before your first session at no charge.</p>
              </div>
              {Object.entries(INS).map(([cat, plans]) => (
                <div key={cat} className="ins-category">
                  <p style={{ fontSize: "var(--t-xs)", fontWeight: 400, letterSpacing: "0.236em", textTransform: "uppercase", color: "var(--rose)", marginBottom: "var(--s-2xs)" }}>{cat}</p>
                  <div className="ins-pills">
                    {plans.map(p => <span key={p} className="ins-pill">{p}</span>)}
                  </div>
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
