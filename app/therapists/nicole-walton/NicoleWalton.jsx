"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Nav from "../../Nav";
import Footer from "../../Footer";

/* ── NICOLE MATCH ENGINE ──────────────────────────────────── */
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
  { terms:["person","office","inperson","face"], label:"In-person available (Dayton & Rocky River)", nic:true },
  { terms:["dayton","ohio","patterson","kettering","oakwood"], label:"Dayton office available", nic:true },
  { terms:["rocky","river","cleveland","lakewood","westlake"], label:"Rocky River office available", nic:true },
  { terms:["adults","adult","18"], label:"Works with adults 18+", nic:true },
  { terms:["child","children","kids","teen","teenager"], label:"Nicole works with adults 18+ only", nic:false },
  { terms:["faith","christian","spiritual","god","church"], label:"Faith: Nicole uses a wellness perspective (not faith-integrated)", nic:true },
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
    <div style={{ borderBottom: "0.0618rem solid var(--divider)" }}>
      <button onClick={() => setOpen(!open)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "var(--s-md) 0", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
        <span style={{ fontFamily: "var(--font-display)", fontSize: "var(--t-md)", fontWeight: 900, color: "var(--ink)", lineHeight: 1.1, letterSpacing: "-0.0382em", display: "flex", alignItems: "center", gap: "var(--s-xs)" }}>
          {title}
          {chip && <span style={{ fontSize: "var(--t-xs)", fontWeight: 400, letterSpacing: "0.236em", textTransform: "uppercase", background: "var(--mist)", color: "var(--rose)", padding: "0.236rem var(--s-2xs)" }}>{chip}</span>}
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
  const scoreColor = pct === null ? null : pct >= 75 ? "var(--sage)" : pct >= 50 ? "var(--gold)" : "var(--rose-deep)";
  return (
    <div style={{ marginBottom: "var(--s-lg)", border: "0.0618rem solid var(--divider)", overflow: "hidden", background: "var(--mist)" }}>
      <div style={{ padding: "var(--s-sm) var(--s-md)", borderBottom: "0.0618rem solid var(--divider)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <p style={{ fontSize: "var(--t-xs)", fontWeight: 400, letterSpacing: "0.236em", textTransform: "uppercase", color: "var(--rose)", marginBottom: "0.236rem" }}>Is Nicole a good fit?</p>
          <p style={{ fontSize: "var(--t-xs)", color: "var(--earth)", fontWeight: 300, lineHeight: 1.618 }}>Type what you need and we will let you know instantly.</p>
        </div>
        {pct !== null && <div style={{ width: "var(--s-xs)", height: "var(--s-xs)", borderRadius: "6.854rem", background: scoreColor, flexShrink: 0 }} />}
      </div>
      <div style={{ padding: "var(--s-sm) var(--s-md) var(--s-md)" }}>
        <textarea value={input} onChange={handleChange} rows={3}
          placeholder="e.g. I'm dealing with past trauma and need someone who does EMDR, preferably in-person at Dayton..."
          style={{ width: "100%", border: "0.0618rem solid var(--divider)", padding: "var(--s-xs) var(--s-sm)", fontFamily: "var(--font-body)", fontSize: "var(--t-base)", color: "var(--ink)", resize: "none", outline: "none", lineHeight: 1.618, background: "var(--paper)", boxSizing: "border-box" }} />
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
              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--s-3xs)" }}>
                {result.matches.map((m,i) => (
                  <span key={i} style={{ fontSize: "var(--t-xs)", padding: "0.236rem var(--s-xs)", border: "0.0618rem solid var(--sage)", color: "var(--sage)", fontWeight: 400 }}>✓ {m}</span>
                ))}
              </div>
            )}
            {result.blockers.length > 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--s-3xs)", marginTop: "var(--s-3xs)" }}>
                {result.blockers.map((b,i) => (
                  <span key={i} style={{ fontSize: "var(--t-xs)", padding: "0.236rem var(--s-xs)", border: "0.0618rem solid var(--rose-deep)", color: "var(--rose-deep)", fontWeight: 400 }}>✕ {b}</span>
                ))}
              </div>
            )}
            {result.needsMore && <p style={{ fontSize: "var(--t-xs)", color: "var(--warm-gray)", marginTop: "var(--s-2xs)", fontStyle: "italic" }}>Try mentioning what you are struggling with, your availability, or how you would like to meet.</p>}
            {result.matches.length > 0 && result.blockers.length === 0 && (
              <div style={{ marginTop: "var(--s-sm)", padding: "var(--s-xs) var(--s-sm)", background: "var(--paper)", border: "0.0618rem solid var(--sage)", fontSize: "var(--t-xs)", color: "var(--earth)", lineHeight: 1.618 }}>
                <strong style={{ color: "var(--sage)" }}>Looks like a fit.</strong> Based on what you shared, Nicole works with exactly what you described.
              </div>
            )}
            {result.blockers.length > 0 && (
              <div style={{ marginTop: "var(--s-sm)", padding: "var(--s-xs) var(--s-sm)", background: "var(--paper)", border: "0.0618rem solid var(--divider)", fontSize: "var(--t-xs)", color: "var(--earth)", lineHeight: 1.618 }}>
                Nicole may not be the right fit for everything you mentioned. <a href="/therapists" style={{ color: "var(--rose)", fontWeight: 400 }}>See all therapists →</a>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

/* ── PAGE STYLES (reuse Kim's architecture) ───────────────── */
const styles = `
  .nw-layout { display: grid; grid-template-columns: 38.2% 1fr; gap: var(--s-xl); max-width: var(--max-w); margin: 0 auto; padding: var(--s-xl) var(--s-lg) var(--s-2xl); align-items: start; }
  .nw-sidebar { position: sticky; top: var(--s-md); border-right: 0.0618rem solid var(--divider); padding-right: var(--s-xl); }
  .nw-photo-wrap { position: relative; overflow: hidden; background: var(--mist); margin-bottom: var(--s-sm); }
  .nw-photo { width: 100%; aspect-ratio: 1 / 1.618; object-fit: cover; object-position: top center; display: block; }
  .nw-photo-bar { position: absolute; bottom: 0; left: 0; right: 0; height: 0.236rem; background: var(--rose); }
  .nw-badges { display: flex; gap: var(--s-2xs); flex-wrap: wrap; margin-bottom: var(--s-sm); }
  .nw-badge { font-size: var(--t-xs); font-weight: 400; letter-spacing: 0.236em; text-transform: uppercase; padding: 0.236rem var(--s-2xs); border: 0.0618rem solid var(--rose); color: var(--rose); }
  .nw-badge.primary { background: var(--rose-deep); color: var(--paper); border-color: var(--rose-deep); }
  .nw-name { font-family: var(--font-display); font-size: clamp(var(--t-xl), 3.82vw, var(--t-2xl)); font-weight: 900; line-height: 1.0; letter-spacing: -0.0382em; margin-bottom: var(--s-3xs); }
  .nw-creds { font-size: var(--t-base); font-weight: 300; color: var(--warm-gray); margin-bottom: var(--s-3xs); }
  .nw-pronouns { font-size: var(--t-xs); color: var(--warm-gray); margin-bottom: var(--s-sm); }
  .nw-quote { font-family: var(--font-accent); font-style: italic; font-size: var(--t-base); line-height: 1.618; color: var(--earth); border-left: 0.236rem solid var(--rose); padding-left: var(--s-md); margin-bottom: var(--s-md); }
  .nw-cta-col { display: flex; flex-direction: column; gap: var(--s-2xs); margin-bottom: var(--s-md); }
  .nw-meta-row { display: flex; flex-direction: column; gap: 0.236rem; margin-bottom: var(--s-sm); }
  .nw-meta-label { font-size: var(--t-xs); font-weight: 400; letter-spacing: 0.236em; text-transform: uppercase; color: var(--rose); }
  .nw-meta-chips { display: flex; flex-wrap: wrap; gap: var(--s-3xs); margin-top: 0.236rem; }
  .nw-chip { font-size: var(--t-xs); font-weight: 400; padding: 0.236rem var(--s-2xs); background: rgba(181,112,107,0.0618); color: var(--rose); border: 0.0618rem solid rgba(181,112,107,0.236); }
  .breadcrumb { display: flex; gap: var(--s-3xs); align-items: center; max-width: var(--max-w); margin: 0 auto; padding: var(--s-sm) var(--s-lg) 0; font-size: var(--t-xs); color: var(--warm-gray); }
  .breadcrumb a { color: var(--warm-gray); text-decoration: none; }
  .breadcrumb a:hover { color: var(--rose); }
  .mod-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--s-sm); margin-top: var(--s-sm); }
  .mod-card { padding: var(--s-sm); border: 0.0618rem solid var(--divider); transition: all var(--duration) var(--ease-phi); }
  .mod-card:hover { border-color: var(--rose); }
  .sched-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--s-2xs); margin: var(--s-sm) 0; }
  .sched-card { background: var(--ink); padding: var(--s-sm); }
  .sched-day { font-size: var(--t-xs); font-weight: 400; letter-spacing: 0.236em; text-transform: uppercase; color: var(--paper); opacity: var(--alpha-phi); margin-bottom: 0.236rem; }
  .sched-time { font-size: var(--t-xs); font-weight: 400; color: var(--paper); line-height: 1.618; }
  .sched-na { background: var(--mist); padding: var(--s-sm); }
  .sched-na-day { font-size: var(--t-xs); font-weight: 400; letter-spacing: 0.236em; text-transform: uppercase; color: var(--warm-gray); }
  .sched-na-text { font-size: var(--t-xs); color: var(--divider); }
  .ins-category { margin-bottom: var(--s-md); }
  .ins-pills { display: flex; flex-wrap: wrap; gap: var(--s-3xs); }
  .ins-pill { font-size: var(--t-xs); padding: 0.236rem var(--s-2xs); background: var(--mist); border: 0.0618rem solid var(--divider); color: var(--earth); }
  .check-item { display: flex; gap: var(--s-sm); align-items: flex-start; padding: var(--s-sm) 0; border-bottom: 0.0618rem solid var(--light); }
  .check-item:last-child { border-bottom: none; }
  .check-icon { width: var(--s-md); height: var(--s-md); border-radius: 6.854rem; border: 0.0618rem solid var(--rose); color: var(--rose); display: flex; align-items: center; justify-content: center; font-size: var(--t-xs); flex-shrink: 0; margin-top: 0.236rem; }
  .check-text { font-size: var(--t-base); font-weight: 300; color: var(--earth); line-height: 1.618; }
  .check-text strong { font-weight: 400; color: var(--ink); }
  .fee-box { background: var(--ink); padding: var(--s-md); display: grid; grid-template-columns: auto 1fr; gap: var(--s-md); align-items: center; margin-bottom: var(--s-md); }
  @media (max-width: 61.8rem) { .nw-layout { grid-template-columns: 1fr; } .nw-sidebar { position: static; border-right: none; padding-right: 0; border-bottom: 0.0618rem solid var(--divider); padding-bottom: var(--s-xl); } .mod-grid { grid-template-columns: 1fr; } .sched-grid { grid-template-columns: 1fr 1fr; } }
`;

export default function NicoleWalton() {
  const router = useRouter();
  return (
    <div>
      <style>{styles}</style>
      <Nav />

      <div className="breadcrumb">
        <a href="/">Home</a><span style={{ color: "var(--divider)" }}>/</span>
        <a href="/therapists">Therapists</a><span style={{ color: "var(--divider)" }}>/</span>
        <span style={{ color: "var(--ink)" }}>Nicole Walton</span>
      </div>

      <div className="nw-layout">
        {/* SIDEBAR */}
        <aside className="nw-sidebar">
          <div className="nw-photo-wrap">
            <img className="nw-photo" src="/images/therapists/Nicole_Walton_bio3.jpg" alt="Dr. Nicole Walton" />
            <div className="nw-photo-bar" />
          </div>
          <div className="nw-badges">
            <span className="nw-badge primary">PhD</span>
            <span className="nw-badge">20+ Yrs</span>
            <span className="nw-badge">EMDR</span>
            <span className="nw-badge">Couples</span>
          </div>
          <h1 className="nw-name">Dr. Nicole Walton</h1>
          <p className="nw-creds">PhD, LISW-S, LPC</p>
          <p className="nw-pronouns">she / her</p>
          <p className="nw-quote">"We started NGU Wellness because we envision a world where all people can experience healing and transformation with the right help and support."</p>
          <div className="nw-cta-col">
            <button className="btn-rose" style={{ width: "100%", textAlign: "center" }} onClick={() => window.open("https://therapyportal.com/p/nguwellness","_blank")}>Request Appointment</button>
            <button className="btn-outline" style={{ width: "100%", textAlign: "center" }} onClick={() => window.open("tel:+18886489355")}>Call or Text: 888-648-9355</button>
          </div>
          <div className="nw-meta-row">
            <span className="nw-meta-label">Availability</span>
            <span style={{ display: "inline-block", fontSize: "var(--t-xs)", fontWeight: 400, letterSpacing: "0.236em", textTransform: "uppercase", padding: "0.236rem var(--s-2xs)", background: "rgba(122,139,122,0.1)", color: "var(--sage)", border: "0.0618rem solid var(--sage)", marginTop: "0.236rem" }}>Accepting Clients</span>
          </div>
          <div className="nw-meta-row">
            <span className="nw-meta-label">Session Format</span>
            <div className="nw-meta-chips"><span className="nw-chip">In-Person</span><span className="nw-chip">Telehealth</span></div>
          </div>
          <div className="nw-meta-row">
            <span className="nw-meta-label">Locations</span>
            <span style={{ fontSize: "var(--t-xs)", fontWeight: 300, color: "var(--earth)", lineHeight: 1.618, marginTop: "0.236rem" }}>Dayton · Rocky River · Telehealth (Ohio)</span>
          </div>
          <div className="nw-meta-row">
            <span className="nw-meta-label">Ages Served</span>
            <span style={{ fontSize: "var(--t-xs)", fontWeight: 300, color: "var(--earth)", marginTop: "0.236rem" }}>Adults 18+</span>
          </div>
        </aside>

        {/* MAIN */}
        <main>
          <MatchWidget />

          <div style={{ background: "var(--mist)", border: "0.0618rem solid var(--divider)", padding: "var(--s-md)", marginBottom: "var(--s-lg)" }}>
            <p style={{ fontSize: "var(--t-xs)", fontWeight: 400, letterSpacing: "0.236em", textTransform: "uppercase", color: "var(--rose)", marginBottom: "var(--s-2xs)" }}>About Nicole</p>
            <p style={{ fontFamily: "var(--font-accent)", fontStyle: "italic", fontSize: "var(--t-md)", lineHeight: 1.618, color: "var(--earth)" }}>
              "Nicole provides a nonjudgmental, warm, and collaborative environment. She works with people from a wellness perspective — meeting them exactly where they are."
            </p>
          </div>

          <div style={{ borderTop: "0.0618rem solid var(--divider)" }}>

            <Acc title="Who Nicole Helps" defaultOpen={true}>
              {[
                { strong: "Adults 18+", text: "individuals and couples dealing with a wide range of emotional and relational concerns." },
                { strong: "People processing trauma", text: "including PTSD, complex trauma, abuse, and unresolved painful experiences." },
                { strong: "People with depression", text: "emotional numbness, hopelessness, or persistent low mood." },
                { strong: "Couples", text: "working through relationship difficulties, communication breakdowns, or life transitions together." },
                { strong: "People in transition", text: "navigating career changes, divorce, loss, retirement, or identity shifts." },
              ].map((item, i) => (
                <div key={i} className="check-item">
                  <span className="check-icon">✓</span>
                  <p className="check-text"><strong>{item.strong}</strong> {item.text}</p>
                </div>
              ))}
            </Acc>

            <Acc title="What You'll Work On" chip="Specialties">
              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--s-2xs)", marginTop: "var(--s-xs)" }}>
                {["Trauma & PTSD","Depression","Anxiety","Relationship Issues","Life Transitions","Couples Therapy","Grief & Loss","Self-Esteem","Stress & Burnout","Identity"].map(s => (
                  <span key={s} style={{ fontSize: "var(--t-xs)", padding: "var(--s-3xs) var(--s-xs)", border: "0.0618rem solid var(--divider)", color: "var(--earth)" }}>{s}</span>
                ))}
              </div>
            </Acc>

            <Acc title="How Nicole Works" chip="Evidence-Based">
              <p style={{ fontSize: "var(--t-base)", fontWeight: 300, color: "var(--earth)", lineHeight: 1.618, marginBottom: "var(--s-sm)" }}>
                Nicole draws from multiple proven approaches, tailoring treatment to each individual. With 20+ years of experience, she integrates techniques fluidly based on what serves you best.
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

            <Acc title="What to Expect">
              {[
                { strong: "First session:", text: "A thorough assessment — Nicole takes time to understand your history, your goals, and what kind of support would help most." },
                { strong: "Ongoing work:", text: "Warm, collaborative sessions focused on building insight, skills, and real progress between sessions." },
                { strong: "Nicole's style:", text: "Nonjudgmental, warm, and wellness-oriented. She meets you where you are." },
                { strong: "Session length:", text: "Standard 50-minute individual sessions. Intake may be slightly longer." },
              ].map((item, i) => (
                <div key={i} className="check-item">
                  <span className="check-icon">→</span>
                  <p className="check-text"><strong>{item.strong}</strong> {item.text}</p>
                </div>
              ))}
            </Acc>

            <Acc title="Schedule & Availability">
              <div className="sched-grid">
                {["Monday","Tuesday","Wednesday","Thursday","Friday"].map(d => (
                  <div key={d} className="sched-card">
                    <p className="sched-day">{d}</p>
                    <p className="sched-time">Available</p>
                  </div>
                ))}
              </div>
              <div className="sched-grid" style={{ marginTop: "var(--s-2xs)" }}>
                {["Saturday","Sunday"].map(d => (
                  <div key={d} className="sched-na">
                    <p className="sched-na-day">{d}</p>
                    <p className="sched-na-text">Not available</p>
                  </div>
                ))}
              </div>
            </Acc>

            <Acc title="Credentials & Education">
              {[
                { strong: "License:", text: "LISW-S, Ohio I.0700277-SUPV" },
                { strong: "Education:", text: "MSW, The Ohio State University, 2005 · PhD in Counselor Education & Supervision, Regent University, 2023" },
                { strong: "Experience:", text: "20+ years spanning community mental health, pediatric social work, outpatient therapy, teaching, research, and clinical supervision." },
                { strong: "Founder:", text: "Opened NGU Wellness in 2021 (Dayton), expanded to Rocky River in 2023." },
              ].map((item, i) => (
                <div key={i} className="check-item">
                  <span className="check-icon">◈</span>
                  <p className="check-text"><strong>{item.strong}</strong> {item.text}</p>
                </div>
              ))}
            </Acc>

            <Acc title="Insurance & Fees">
              <div className="fee-box">
                <div>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "var(--t-2xl)", fontWeight: 900, color: "var(--paper)", lineHeight: 1 }}>$150</p>
                  <p style={{ fontSize: "var(--t-xs)", color: "var(--paper)", opacity: "var(--alpha-phi)", marginTop: "0.236rem" }}>per session (self-pay)</p>
                </div>
                <p style={{ fontSize: "var(--t-xs)", color: "var(--paper)", opacity: "var(--alpha-phi)", lineHeight: 1.618 }}>Most clients pay a copay through insurance. We verify your benefits before your first session at no charge.</p>
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
