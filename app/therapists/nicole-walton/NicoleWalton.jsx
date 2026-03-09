"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Nav from "../../Nav";
import Footer from "../../Footer";

/* ═══════════════════════════════════════════════════════════
   NICOLE WALTON — EMERALD GREEN PALETTE
   Drawn from her blouse (#2A7A48) under dark blazer
   Burgundy glasses accent (#8A4A6A)
   Warm brown backdrop complements earth tones
   ═══════════════════════════════════════════════════════════ */

/* ── MATCH ENGINE ─────────────────────────────────────────── */
const SYN = { anxious:"anxiety",worried:"anxiety",worry:"anxiety",panic:"anxiety",nervous:"anxiety",depressed:"depression",hopeless:"depression",numb:"depression",sad:"sadness",grief:"grief",grieving:"grief",mourning:"grief",died:"loss",death:"loss",changing:"change",career:"transition",divorce:"transition",stressed:"stress",burnout:"stress",overwhelmed:"stress",exhausted:"stress",virtual:"telehealth",online:"telehealth",zoom:"telehealth",remote:"telehealth",spiritual:"faith",god:"faith",prayer:"faith",christian:"faith",marriage:"relationship",couples:"relationship" };
const STOP_N = new Set(["a","an","the","is","are","was","i","me","my","we","you","it","and","or","but","in","on","to","for","of","with","that","this","have","do","not","so","just","very","really","some","also","still","there","when","what","how","they","would","could","will","can","need","want","feel","get","got","help","like","think","know"]);

function tokenizeN(text) {
  if (!text) return [];
  const raw = text.toLowerCase().replace(/[^a-z0-9\s]/g," ").split(/\s+/);
  return [...new Set(raw.filter(w=>w.length>=2).map(w=>SYN[w]||w).filter(w=>raw.length<=3||!STOP_N.has(w)))];
}

const WANT_GROUPS = [
  { terms:["trauma","ptsd","abuse","assault","traumatic"], label:"Trauma & PTSD specialist", nic:true },
  { terms:["depression","depressed","hopeless","numb","sad","sadness"], label:"Depression specialist", nic:true },
  { terms:["anxiety","panic","worry","nervous","fear"], label:"Anxiety treatment", nic:true },
  { terms:["relationship","conflict","family","communication","marriage"], label:"Relationship & couples issues", nic:true },
  { terms:["transition","change","career","divorce","retirement"], label:"Life transitions", nic:true },
  { terms:["cbt","cognitive"], label:"CBT (Cognitive Behavioral Therapy)", nic:true },
  { terms:["emdr","bilateral"], label:"EMDR (trauma processing)", nic:true },
  { terms:["act","acceptance"], label:"ACT (Acceptance & Commitment)", nic:true },
  { terms:["narrative"], label:"Narrative Therapy", nic:true },
  { terms:["humanistic"], label:"Humanistic Therapy", nic:true },
  { terms:["monday","mondays"], label:"Monday available", nic:true },
  { terms:["tuesday","tuesdays"], label:"Tuesday available", nic:true },
  { terms:["wednesday","wednesdays"], label:"Wednesday available", nic:true },
  { terms:["thursday","thursdays"], label:"Thursday available", nic:true },
  { terms:["friday","fridays"], label:"Friday available", nic:true },
  { terms:["saturday","sunday","weekend"], label:"Weekends: Nicole is not available", nic:false },
  { terms:["telehealth","virtual","online","zoom","remote","video"], label:"Telehealth available", nic:true },
  { terms:["person","office","inperson","face"], label:"In-person (Dayton & Rocky River)", nic:true },
  { terms:["dayton","ohio","patterson","kettering","oakwood"], label:"Dayton office available", nic:true },
  { terms:["rocky","river","cleveland","lakewood","westlake"], label:"Rocky River office available", nic:true },
  { terms:["adults","adult","18"], label:"Works with adults 18+", nic:true },
  { terms:["child","children","kids","teen","teenager"], label:"Nicole works with adults 18+ only", nic:false },
  { terms:["couples","couple"], label:"Couples work available", nic:true },
];

function scoreAgainstNicole(text) {
  const tokens = tokenizeN(text);
  const detected = WANT_GROUPS.filter(g => g.terms.some(t => tokens.some(tok => tok.includes(t) || t.includes(tok))));
  if (detected.length === 0) return { pct:0, matches:[], blockers:[], needsMore:true };
  const matched = [], blockers = [];
  for (const w of detected) { if (w.nic === false) blockers.push(w.label); else matched.push(w.label); }
  const pct = matched.length === 0 ? 0 : Math.round((matched.length / detected.length) * 100);
  return { pct, matches: matched.slice(0,5), blockers, needsMore: false };
}

/* ── INSURANCE ────────────────────────────────────────────── */
const INS = {
  "Commercial & Marketplace": ["Aetna","Anthem/BCBS","Ambetter","CareSource","Cigna","ComPsych","Frontpath","Humana","Medical Mutual","Optum","SummaCare","UMR","United Healthcare","Wellfleet"],
  "Medicaid": ["AmeriHealth","Anthem Ohio Medicaid","Buckeye","CareSource Medicaid","Humana Medicaid","Molina","Ohio Medicaid","OhioRISE","UHC Community Plan","WellCare"],
  "EAP Programs": ["Lyra","Optum/UHC EAP","Spring Health","Carelon","Synchrony Assist"],
};

/* ── MODALITIES ───────────────────────────────────────────── */
const MODS = [
  { abbr:"CBT", name:"Cognitive Behavioral Therapy", desc:"Restructures thought patterns driving anxiety, depression, and low mood." },
  { abbr:"EMDR", name:"EMDR", desc:"Processes traumatic memories through bilateral stimulation. Evidence-based trauma treatment." },
  { abbr:"ACT", name:"Acceptance & Commitment Therapy", desc:"Builds psychological flexibility to move toward what matters." },
  { abbr:"NAR", name:"Narrative Therapy", desc:"Separates the person from the problem. Reauthors personal stories." },
  { abbr:"HUM", name:"Humanistic Therapy", desc:"Centers the whole person: values, potential, and the drive toward growth." },
  { abbr:"SOM", name:"Somatic Approaches", desc:"Works with the body's role in storing and releasing stress and trauma." },
];

/* ── ACCORDION ────────────────────────────────────────────── */
const Acc = ({ title, chip, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ borderBottom: "0.0618rem solid var(--n-border)" }}>
      <button onClick={() => setOpen(!open)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "var(--s-md) 0", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
        <span style={{ fontFamily: "var(--font-display)", fontSize: "var(--t-md)", fontWeight: 900, color: "var(--ink)", lineHeight: 1.1, letterSpacing: "-0.0382em", display: "flex", alignItems: "center", gap: "var(--s-xs)" }}>
          {title}
          {chip && <span style={{ fontSize: "var(--t-xs)", fontWeight: 400, letterSpacing: "0.236em", textTransform: "uppercase", background: "var(--n-tint)", color: "var(--n-primary)", padding: "0.236rem var(--s-2xs)" }}>{chip}</span>}
        </span>
        <span style={{ fontSize: "var(--t-md)", color: "var(--warm-gray)", transition: "transform 0.382s var(--ease-phi)", transform: open ? "rotate(180deg)" : "rotate(0)", display: "inline-block", lineHeight: 1 }}>⌄</span>
      </button>
      <div style={{ display: "grid", gridTemplateRows: open ? "1fr" : "0fr", opacity: open ? 1 : 0, transition: "grid-template-rows 0.382s cubic-bezier(0.382,0,0.618,1), opacity 0.382s" }}>
        <div style={{ overflow: "hidden" }}><div style={{ paddingBottom: "var(--s-xl)" }}>{children}</div></div>
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
    debRef.current = setTimeout(() => setResult(scoreAgainstNicole(val)), 236);
  };
  const pct = result?.pct ?? null;
  const scoreColor = pct === null ? null : pct >= 75 ? "var(--n-primary)" : pct >= 50 ? "var(--gold)" : "var(--rose-deep)";
  return (
    <div style={{ marginBottom: "var(--s-lg)", border: "0.0618rem solid var(--n-border)", overflow: "hidden", background: "var(--n-tint)" }}>
      <div style={{ padding: "var(--s-sm) var(--s-md)", borderBottom: "0.0618rem solid var(--n-border)", display: "flex", alignItems: "center", justifyContent: "space-between", background: "var(--n-wash)" }}>
        <div>
          <p style={{ fontSize: "var(--t-xs)", fontWeight: 400, letterSpacing: "0.236em", textTransform: "uppercase", color: "var(--n-primary)", marginBottom: "0.236rem" }}>Is Nicole a good fit?</p>
          <p style={{ fontSize: "var(--t-xs)", color: "var(--earth)", fontWeight: 300, lineHeight: 1.618 }}>Type what you need and we will let you know instantly.</p>
        </div>
        {pct !== null && <div style={{ width: "var(--s-xs)", height: "var(--s-xs)", borderRadius: "6.854rem", background: scoreColor, flexShrink: 0 }} />}
      </div>
      <div style={{ padding: "var(--s-sm) var(--s-md) var(--s-md)" }}>
        <textarea value={input} onChange={handleChange} rows={3}
          placeholder="e.g. I'm dealing with past trauma and need someone who does EMDR, preferably in-person at Dayton..."
          style={{ width: "100%", border: "0.0618rem solid var(--n-border)", padding: "var(--s-xs) var(--s-sm)", fontFamily: "var(--font-body)", fontSize: "var(--t-base)", color: "var(--ink)", resize: "none", outline: "none", lineHeight: 1.618, background: "var(--paper)", boxSizing: "border-box" }} />
        {!result && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--s-3xs)", marginTop: "var(--s-2xs)" }}>
            {["What you're struggling with","Days you're available","In-person or telehealth","Your city"].map(h => (
              <span key={h} style={{ fontSize: "var(--t-xs)", padding: "0.236rem var(--s-2xs)", border: "0.0618rem solid var(--n-border)", color: "var(--warm-gray)", background: "var(--paper)" }}>+ {h}</span>
            ))}
          </div>
        )}
        {result && (
          <div style={{ marginTop: "var(--s-sm)" }}>
            {result.matches.length > 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--s-3xs)" }}>
                {result.matches.map((m,i) => (
                  <span key={i} style={{ fontSize: "var(--t-xs)", padding: "0.236rem var(--s-xs)", border: "0.0618rem solid var(--n-primary)", color: "var(--n-primary)" }}>✓ {m}</span>
                ))}
              </div>
            )}
            {result.blockers.length > 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--s-3xs)", marginTop: "var(--s-3xs)" }}>
                {result.blockers.map((b,i) => (
                  <span key={i} style={{ fontSize: "var(--t-xs)", padding: "0.236rem var(--s-xs)", border: "0.0618rem solid var(--rose-deep)", color: "var(--rose-deep)" }}>✕ {b}</span>
                ))}
              </div>
            )}
            {result.needsMore && <p style={{ fontSize: "var(--t-xs)", color: "var(--warm-gray)", marginTop: "var(--s-2xs)", fontStyle: "italic" }}>Try mentioning what you are struggling with, your availability, or how you would like to meet.</p>}
            {result.matches.length > 0 && result.blockers.length === 0 && (
              <div style={{ marginTop: "var(--s-sm)", padding: "var(--s-xs) var(--s-sm)", background: "var(--paper)", border: "0.0618rem solid var(--n-primary)", fontSize: "var(--t-xs)", color: "var(--earth)", lineHeight: 1.618 }}>
                <strong style={{ color: "var(--n-primary)" }}>Looks like a fit.</strong> Based on what you shared, Nicole works with exactly what you described.
              </div>
            )}
            {result.blockers.length > 0 && (
              <div style={{ marginTop: "var(--s-sm)", padding: "var(--s-xs) var(--s-sm)", background: "var(--paper)", border: "0.0618rem solid var(--n-border)", fontSize: "var(--t-xs)", color: "var(--earth)", lineHeight: 1.618 }}>
                Nicole may not be the right fit for everything you mentioned. <a href="/therapists" style={{ color: "var(--n-primary)", fontWeight: 400 }}>See all therapists →</a>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

/* ── STYLES — NICOLE'S EMERALD GREEN WORLD ────────────────── */
const nStyles = `
  .nic-page {
    /* ── Nicole's palette: emerald blouse + burgundy glasses ── */
    --n-primary: #2A7A48;
    --n-dark:    #1A5E34;
    --n-light:   #3A9A5C;
    --n-tint:    #EFF8F2;
    --n-wash:    #DFF0E5;
    --n-border:  #B8D8C4;
    --n-accent:  #8A4A6A; /* burgundy from her glasses */
  }

  .nic-layout { display: grid; grid-template-columns: 38.2% 1fr; gap: var(--s-xl); max-width: var(--max-w); margin: 0 auto; padding: var(--s-xl) var(--s-lg) var(--s-2xl); align-items: start; }
  .nic-sidebar { position: sticky; top: var(--s-md); border-right: 0.0618rem solid var(--divider); padding-right: var(--s-xl); }
  .nic-photo-wrap { position: relative; overflow: hidden; background: var(--paper); margin-bottom: var(--s-sm); }
  .nic-photo { width: 100%; aspect-ratio: 1 / 1.618; object-fit: cover; object-position: top center; display: block; }
  .nic-photo-vignette {
    position: absolute;
    inset: 0;
    background: radial-gradient(
      ellipse 61.8% 61.8% at 50% 35%,
      transparent 0%,
      transparent 50%,
      rgba(250,248,245,0.0618) 61.8%,
      rgba(250,248,245,0.146) 76.4%,
      rgba(250,248,245,0.236) 85%,
      rgba(250,248,245,0.382) 100%
    );
    pointer-events: none;
  }
  .nic-photo-line {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 0.236rem;
    background: linear-gradient(90deg, var(--n-dark), var(--n-primary), var(--n-light));
  }
  .nic-badges { display: flex; gap: var(--s-2xs); flex-wrap: wrap; margin-bottom: var(--s-sm); }
  .nic-badge { font-size: var(--t-xs); font-weight: 400; letter-spacing: 0.236em; text-transform: uppercase; padding: 0.236rem var(--s-2xs); border: 0.0618rem solid var(--n-primary); color: var(--n-primary); }
  .nic-badge.primary { background: var(--n-primary); color: var(--paper); border-color: var(--n-primary); }
  .nic-name { font-family: var(--font-display); font-size: clamp(var(--t-xl), 3.82vw, var(--t-2xl)); font-weight: 900; line-height: 1.0; letter-spacing: -0.0382em; margin-bottom: var(--s-3xs); }
  .nic-creds { font-size: var(--t-base); font-weight: 300; color: var(--warm-gray); margin-bottom: var(--s-3xs); }
  .nic-pronouns { font-size: var(--t-xs); color: var(--warm-gray); margin-bottom: var(--s-sm); }
  .nic-quote { font-family: var(--font-accent); font-style: italic; font-size: var(--t-base); line-height: 1.618; color: var(--earth); border-left: 0.236rem solid var(--n-primary); padding-left: var(--s-md); margin-bottom: var(--s-md); }
  .nic-cta-col { display: flex; flex-direction: column; gap: var(--s-2xs); margin-bottom: var(--s-md); }
  .nic-btn-primary { display: block; width: 100%; text-align: center; font-family: var(--font-body); font-size: var(--t-xs); font-weight: 400; letter-spacing: 0.0618em; text-transform: uppercase; color: var(--paper); background: var(--n-primary); border: none; padding: var(--s-sm) var(--s-lg); cursor: pointer; transition: all var(--duration) var(--ease-phi); text-decoration: none; }
  .nic-btn-primary:hover { background: var(--n-dark); }
  .nic-btn-outline { display: block; width: 100%; text-align: center; font-family: var(--font-body); font-size: var(--t-xs); font-weight: 400; letter-spacing: 0.0618em; text-transform: uppercase; color: var(--n-primary); background: transparent; border: 0.0618rem solid var(--n-primary); padding: var(--s-sm) var(--s-lg); cursor: pointer; transition: all var(--duration) var(--ease-phi); text-decoration: none; }
  .nic-btn-outline:hover { background: var(--n-primary); color: var(--paper); }
  .nic-meta-row { display: flex; flex-direction: column; gap: 0.236rem; margin-bottom: var(--s-sm); }
  .nic-meta-label { font-size: var(--t-xs); font-weight: 400; letter-spacing: 0.236em; text-transform: uppercase; color: var(--n-primary); }
  .nic-meta-chips { display: flex; flex-wrap: wrap; gap: var(--s-3xs); margin-top: 0.236rem; }
  .nic-chip { font-size: var(--t-xs); font-weight: 400; padding: 0.236rem var(--s-2xs); background: var(--n-tint); color: var(--n-primary); border: 0.0618rem solid var(--n-border); }

  .n-mod-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--s-sm); margin-top: var(--s-sm); }
  .n-mod-card { padding: var(--s-sm); border: 0.0618rem solid var(--divider); transition: all var(--duration) var(--ease-phi); }
  .n-mod-card:hover { border-color: var(--n-primary); box-shadow: 0 0.236rem 1.618rem rgba(42,122,72,0.0618); }

  .n-sched-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--s-2xs); margin: var(--s-sm) 0; }
  .n-sched-card { background: var(--n-primary); padding: var(--s-sm); }
  .n-sched-day { font-size: var(--t-xs); font-weight: 400; letter-spacing: 0.236em; text-transform: uppercase; color: var(--paper); opacity: var(--alpha-phi); margin-bottom: 0.236rem; }
  .n-sched-time { font-size: var(--t-xs); font-weight: 400; color: var(--paper); line-height: 1.618; }
  .n-sched-na { background: var(--mist); padding: var(--s-sm); }

  .n-ins-category { margin-bottom: var(--s-md); }
  .n-ins-pills { display: flex; flex-wrap: wrap; gap: var(--s-3xs); }
  .n-ins-pill { font-size: var(--t-xs); padding: 0.236rem var(--s-2xs); background: var(--mist); border: 0.0618rem solid var(--divider); color: var(--earth); transition: all var(--duration) var(--ease-phi); }
  .n-ins-pill:hover { background: var(--n-tint); border-color: var(--n-border); }

  .n-check-item { display: flex; gap: var(--s-sm); align-items: flex-start; padding: var(--s-sm) 0; border-bottom: 0.0618rem solid var(--light); }
  .n-check-item:last-child { border-bottom: none; }
  .n-check-icon { width: var(--s-md); height: var(--s-md); border-radius: 6.854rem; border: 0.0618rem solid var(--n-primary); color: var(--n-primary); display: flex; align-items: center; justify-content: center; font-size: var(--t-xs); flex-shrink: 0; margin-top: 0.236rem; }
  .n-check-text { font-size: var(--t-base); font-weight: 300; color: var(--earth); line-height: 1.618; }
  .n-check-text strong { font-weight: 400; color: var(--ink); }

  .n-fee-box { background: var(--n-primary); padding: var(--s-md); display: grid; grid-template-columns: auto 1fr; gap: var(--s-md); align-items: center; margin-bottom: var(--s-md); }

  .n-breadcrumb { display: flex; gap: var(--s-3xs); align-items: center; max-width: var(--max-w); margin: 0 auto; padding: var(--s-sm) var(--s-lg) 0; font-size: var(--t-xs); color: var(--warm-gray); }
  .n-breadcrumb a { color: var(--warm-gray); text-decoration: none; }
  .n-breadcrumb a:hover { color: var(--n-primary); }

  .n-callout { background: var(--n-tint); border: 0.0618rem solid var(--n-border); padding: var(--s-md); margin-bottom: var(--s-lg); }

  @media (max-width: 61.8rem) {
    .nic-layout { grid-template-columns: 1fr; }
    .nic-sidebar { position: static; border-right: none; padding-right: 0; border-bottom: 0.0618rem solid var(--divider); padding-bottom: var(--s-xl); }
    .n-mod-grid { grid-template-columns: 1fr; }
    .n-sched-grid { grid-template-columns: 1fr 1fr; }
  }
`;

export default function NicoleWalton() {
  const router = useRouter();
  return (
    <div className="nic-page">
      <style>{nStyles}</style>
      <Nav />

      <div className="n-breadcrumb">
        <a href="/">Home</a><span style={{ color: "var(--divider)" }}>/</span>
        <a href="/therapists">Therapists</a><span style={{ color: "var(--divider)" }}>/</span>
        <span style={{ color: "var(--ink)" }}>Nicole Walton</span>
      </div>

      <div className="nic-layout">
        {/* SIDEBAR */}
        <aside className="nic-sidebar">
          <div className="nic-photo-wrap">
            <img className="nic-photo" src="/images/therapists/Nicole_Walton_bio3.jpg" alt="Dr. Nicole Walton" />
            <div className="nic-photo-vignette" />
            <div className="nic-photo-line" />
          </div>
          <div className="nic-badges">
            <span className="nic-badge primary">PhD</span>
            <span className="nic-badge">20+ Yrs</span>
            <span className="nic-badge">EMDR</span>
            <span className="nic-badge">Couples</span>
          </div>
          <h1 className="nic-name">Dr. Nicole Walton</h1>
          <p className="nic-creds">PhD, LISW-S, LPC</p>
          <p className="nic-pronouns">she / her</p>
          <p className="nic-quote">"We started NGU Wellness because we envision a world where all people can experience healing and transformation with the right help and support."</p>
          <div className="nic-cta-col">
            <button className="nic-btn-primary" onClick={() => window.open("https://therapyportal.com/p/nguwellness","_blank")}>Request Appointment</button>
            <button className="nic-btn-outline" onClick={() => window.open("tel:+18886489355")}>Call or Text: 888-648-9355</button>
          </div>
          <div className="nic-meta-row">
            <span className="nic-meta-label">Availability</span>
            <span style={{ display: "inline-block", fontSize: "var(--t-xs)", fontWeight: 400, letterSpacing: "0.236em", textTransform: "uppercase", padding: "0.236rem var(--s-2xs)", background: "var(--n-tint)", color: "var(--n-primary)", border: "0.0618rem solid var(--n-primary)", marginTop: "0.236rem" }}>Accepting Clients</span>
          </div>
          <div className="nic-meta-row">
            <span className="nic-meta-label">Session Format</span>
            <div className="nic-meta-chips"><span className="nic-chip">In-Person</span><span className="nic-chip">Telehealth</span></div>
          </div>
          <div className="nic-meta-row">
            <span className="nic-meta-label">Locations</span>
            <span style={{ fontSize: "var(--t-xs)", fontWeight: 300, color: "var(--earth)", lineHeight: 1.618, marginTop: "0.236rem" }}>Dayton · Rocky River · Telehealth (Ohio)</span>
          </div>
          <div className="nic-meta-row">
            <span className="nic-meta-label">Ages Served</span>
            <span style={{ fontSize: "var(--t-xs)", fontWeight: 300, color: "var(--earth)", marginTop: "0.236rem" }}>Adults 18+</span>
          </div>
        </aside>

        {/* MAIN */}
        <main>
          <MatchWidget />

          <div className="n-callout">
            <p style={{ fontSize: "var(--t-xs)", fontWeight: 400, letterSpacing: "0.236em", textTransform: "uppercase", color: "var(--n-primary)", marginBottom: "var(--s-2xs)" }}>About Nicole</p>
            <p style={{ fontFamily: "var(--font-accent)", fontStyle: "italic", fontSize: "var(--t-md)", lineHeight: 1.618, color: "var(--earth)" }}>
              "Nicole provides a nonjudgmental, warm, and collaborative environment. She works with people from a wellness perspective — meeting them exactly where they are."
            </p>
          </div>

          <div style={{ borderTop: "0.0618rem solid var(--n-border)" }}>
            <Acc title="Who Nicole Helps" defaultOpen={true}>
              {[
                { s: "Adults 18+", t: "individuals and couples dealing with a wide range of emotional and relational concerns." },
                { s: "People processing trauma", t: "including PTSD, complex trauma, abuse, and unresolved painful experiences." },
                { s: "People with depression", t: "emotional numbness, hopelessness, or persistent low mood." },
                { s: "Couples", t: "working through relationship difficulties, communication breakdowns, or life transitions together." },
                { s: "People in transition", t: "navigating career changes, divorce, loss, retirement, or identity shifts." },
              ].map((item, i) => (
                <div key={i} className="n-check-item"><span className="n-check-icon">✓</span><p className="n-check-text"><strong>{item.s}</strong> {item.t}</p></div>
              ))}
            </Acc>

            <Acc title="What You'll Work On" chip="Specialties">
              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--s-2xs)", marginTop: "var(--s-xs)" }}>
                {["Trauma & PTSD","Depression","Anxiety","Relationship Issues","Life Transitions","Couples Therapy","Grief & Loss","Self-Esteem","Stress & Burnout","Identity"].map(s => (
                  <span key={s} style={{ fontSize: "var(--t-xs)", padding: "var(--s-3xs) var(--s-xs)", border: "0.0618rem solid var(--n-border)", color: "var(--n-primary)", background: "var(--n-tint)" }}>{s}</span>
                ))}
              </div>
            </Acc>

            <Acc title="How Nicole Works" chip="Evidence-Based">
              <p style={{ fontSize: "var(--t-base)", fontWeight: 300, color: "var(--earth)", lineHeight: 1.618, marginBottom: "var(--s-sm)" }}>
                Nicole draws from multiple proven approaches, tailoring treatment to each individual. With 20+ years of experience, she integrates techniques fluidly based on what serves you best.
              </p>
              <div className="n-mod-grid">
                {MODS.map(m => (
                  <div key={m.abbr} className="n-mod-card">
                    <p style={{ fontSize: "var(--t-xs)", fontWeight: 400, letterSpacing: "0.236em", textTransform: "uppercase", color: "var(--n-primary)", marginBottom: "0.236rem" }}>{m.abbr}</p>
                    <p style={{ fontFamily: "var(--font-display)", fontSize: "var(--t-base)", fontWeight: 900, marginBottom: "var(--s-3xs)", lineHeight: 1.1, letterSpacing: "-0.0382em" }}>{m.name}</p>
                    <p style={{ fontSize: "var(--t-xs)", fontWeight: 300, color: "var(--earth)", lineHeight: 1.618 }}>{m.desc}</p>
                  </div>
                ))}
              </div>
            </Acc>

            <Acc title="What to Expect">
              {[
                { s: "First session:", t: "A thorough assessment — Nicole takes time to understand your history, your goals, and what kind of support would help most." },
                { s: "Ongoing work:", t: "Warm, collaborative sessions focused on building insight, skills, and real progress between sessions." },
                { s: "Nicole's style:", t: "Nonjudgmental, warm, and wellness-oriented. She meets you where you are." },
                { s: "Session length:", t: "Standard 50-minute individual sessions. Intake may be slightly longer." },
              ].map((item, i) => (
                <div key={i} className="n-check-item"><span className="n-check-icon">→</span><p className="n-check-text"><strong>{item.s}</strong> {item.t}</p></div>
              ))}
            </Acc>

            <Acc title="Credentials & Education">
              {[
                { s: "License:", t: "LISW-S, Ohio I.0700277-SUPV" },
                { s: "Education:", t: "MSW, Ohio State University, 2005 · PhD, Counselor Education & Supervision, Regent University, 2023" },
                { s: "Experience:", t: "20+ years — community mental health, pediatric social work, outpatient therapy, teaching, research, clinical supervision." },
                { s: "Founder:", t: "Opened NGU Wellness in 2021 (Dayton), expanded to Rocky River in 2023." },
              ].map((item, i) => (
                <div key={i} className="n-check-item"><span className="n-check-icon">◈</span><p className="n-check-text"><strong>{item.s}</strong> {item.t}</p></div>
              ))}
            </Acc>

            <Acc title="Schedule & Availability">
              <div className="n-sched-grid">
                {["Monday","Tuesday","Wednesday","Thursday","Friday"].map(d => (
                  <div key={d} className="n-sched-card"><p className="n-sched-day">{d}</p><p className="n-sched-time">Available</p></div>
                ))}
              </div>
              <div className="n-sched-grid" style={{ marginTop: "var(--s-2xs)" }}>
                {["Saturday","Sunday"].map(d => (
                  <div key={d} className="n-sched-na"><p style={{ fontSize: "var(--t-xs)", fontWeight: 400, letterSpacing: "0.236em", textTransform: "uppercase", color: "var(--warm-gray)" }}>{d}</p><p style={{ fontSize: "var(--t-xs)", color: "var(--divider)" }}>Not available</p></div>
                ))}
              </div>
            </Acc>

            <Acc title="Insurance & Fees">
              <div className="n-fee-box">
                <div>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "var(--t-2xl)", fontWeight: 900, color: "var(--paper)", lineHeight: 1 }}>$150</p>
                  <p style={{ fontSize: "var(--t-xs)", color: "var(--paper)", opacity: "var(--alpha-phi)", marginTop: "0.236rem" }}>per session (self-pay)</p>
                </div>
                <p style={{ fontSize: "var(--t-xs)", color: "var(--paper)", opacity: "var(--alpha-phi)", lineHeight: 1.618 }}>Most clients pay a copay through insurance. We verify your benefits before your first session at no charge.</p>
              </div>
              {Object.entries(INS).map(([cat, plans]) => (
                <div key={cat} className="n-ins-category">
                  <p style={{ fontSize: "var(--t-xs)", fontWeight: 400, letterSpacing: "0.236em", textTransform: "uppercase", color: "var(--n-primary)", marginBottom: "var(--s-2xs)" }}>{cat}</p>
                  <div className="n-ins-pills">{plans.map(p => <span key={p} className="n-ins-pill">{p}</span>)}</div>
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
