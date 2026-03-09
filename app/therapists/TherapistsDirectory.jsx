"use client";
import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Nav from "../Nav";
import Footer from "../Footer";

/* ── THERAPIST DATA (all 12) ─────────────────────────────── */
const THERAPISTS = [
  { slug:"anna-espy", name:"Anna Espy", credentials:"LISW-S", title:"Licensed Social Worker", photo:"/images/therapists/Anna_Espy.jpeg", color:"#D4688A", status:"accepting", yrs:11, specialties:["Trauma","Anxiety","Grief & Loss","Women's Issues"], formats:["in-person","telehealth"], locations:["dayton"], days:["tuesday","wednesday","thursday"], faith:true, ages:"Adults 18+", quote:"You've carried this long enough. Let's set some of it down.", tags:["trauma","anxiety","grief","womens","depression","transition","tuesday","wednesday","thursday","inperson","telehealth","dayton","ohio","faith","adults"] },
  { slug:"charlotte-wells", name:"Charlotte Wells", credentials:"LISW", title:"Licensed Social Worker", photo:"/images/therapists/Charlotte_Wells.jpeg", color:"#4A5568", status:"accepting", yrs:8, specialties:["Anxiety","Relationships","Young Adults","Self-Esteem"], formats:["telehealth"], locations:["ohio"], days:["tuesday","wednesday","thursday"], faith:false, ages:"Adults 18–40", quote:"You don't have to have it figured out to start.", tags:["anxiety","relationship","selfesteem","transition","tuesday","wednesday","thursday","telehealth","ohio","adults","young adults"] },
  { slug:"danielle-washington", name:"Danielle Washington", credentials:"LISW-S", title:"Licensed Social Worker", photo:"/images/therapists/Danielle_Washington.jpeg", color:"#7A6878", status:"accepting", yrs:12, specialties:["Trauma","Depression","Burnout","Identity"], formats:["in-person","telehealth"], locations:["dayton"], days:["monday","wednesday","friday"], faith:true, ages:"Adults 18+", quote:"Healing happens when you finally feel safe enough to tell the truth.", tags:["trauma","depression","burnout","identity","stress","monday","wednesday","friday","inperson","telehealth","dayton","ohio","faith","adults"] },
  { slug:"jackie-penny", name:"Jackie Penny", credentials:"LPCC-S", title:"Licensed Professional Counselor", photo:"/images/therapists/Jackie_Penny.jpeg", color:"#9A4A7A", status:"accepting", yrs:16, specialties:["Trauma","PTSD","Anxiety","Burnout"], formats:["in-person","telehealth"], locations:["dayton","rocky river"], days:["tuesday","wednesday","thursday","friday"], faith:false, ages:"Adults 18+", couples:true, quote:"Trauma lives in the body. Healing can too.", tags:["trauma","ptsd","anxiety","burnout","depression","tuesday","wednesday","thursday","friday","inperson","telehealth","dayton","rocky river","ohio","adults"] },
  { slug:"katie-grier", name:"Katie Grier", credentials:"LSW", title:"Licensed Social Worker", photo:"/images/therapists/Katie_Grier.jpeg", color:"#C4967A", status:"accepting", yrs:5, specialties:["Depression","Anxiety","Children & Teens","Self-Esteem"], formats:["telehealth"], locations:["ohio"], days:["monday","wednesday","thursday"], faith:false, ages:"All Ages 5+", quote:"Small, consistent steps change everything.", tags:["depression","anxiety","burnout","selfesteem","stress","children","teens","adolescents","kids","monday","wednesday","thursday","telehealth","ohio","adults","young adults"] },
  { slug:"kelley-boole", name:"Kelley Boole", credentials:"LSW", title:"Licensed Social Worker", photo:"/images/therapists/Kelley_Boole.jpeg", color:"#B08A72", status:"accepting", yrs:7, specialties:["Depression","Relationships","Burnout","Self-Esteem"], formats:["telehealth"], locations:["ohio"], days:["monday","thursday","friday"], faith:true, ages:"Adults 18+", quote:"You deserve more than just getting through the day.", tags:["depression","relationship","burnout","selfesteem","anxiety","monday","thursday","friday","telehealth","ohio","faith","adults"] },
  { slug:"kelly-salada", name:"Kelly Salada", credentials:"LISW", title:"Licensed Social Worker", photo:"/images/therapists/Kelly_Salada.jpeg", color:"#4A7A74", status:"accepting", yrs:9, specialties:["Anxiety","Trauma","Postpartum","Relationships"], formats:["telehealth"], locations:["rocky river","ohio"], days:["tuesday","thursday","friday"], faith:false, ages:"Adults 18+", quote:"Postpartum struggle is common. Getting support is brave.", tags:["anxiety","trauma","postpartum","relationship","depression","tuesday","thursday","friday","telehealth","rocky river","ohio","adults"] },
  { slug:"kim-brant", name:"Kim Brant", credentials:"LPCC · CCATP", title:"Licensed Counselor", photo:"/images/therapists/Kim_Brant.png", color:"#2A6BC6", status:"waitlisting", yrs:19, specialties:["Anxiety","Depression","Grief & Loss","Life Transitions"], formats:["in-person","telehealth"], locations:["dayton"], days:["monday","tuesday","thursday"], faith:true, ages:"Adults 18–75", quote:"Real, lasting relief from the things that keep you stuck.", tags:["anxiety","depression","grief","transition","relationship","stress","monday","tuesday","thursday","telehealth","inperson","dayton","ohio","faith","cbt","act","erp","adults","18"] },
  { slug:"lisa-freeman", name:"Lisa Freeman", credentials:"LPC", title:"Licensed Professional Counselor", photo:"/images/therapists/Lisa_Freeman.jpeg", color:"#3A6868", status:"accepting", yrs:14, specialties:["Anxiety","OCD","Children (5–11)","Life Transitions"], formats:["telehealth"], locations:["rocky river","ohio"], days:["monday","tuesday","friday"], faith:false, ages:"Children 5–11 · Adults 18+", couples:true, quote:"OCD is treatable. You don't have to white-knuckle through it.", tags:["anxiety","ocd","stress","transition","depression","children","kids","family","couples","monday","tuesday","friday","telehealth","rocky river","ohio","adults"] },
  { slug:"natalie-woodson", name:"Natalie Woodson", credentials:"LSW", title:"Licensed Social Worker", photo:"/images/therapists/Natalie_Woodson.jpeg", color:"#2A3A5A", status:"accepting", yrs:6, specialties:["Anxiety","Depression","Teens (12+)","Life Transitions"], formats:["telehealth"], locations:["ohio"], days:["monday","tuesday","wednesday"], faith:false, ages:"Teens 12+ · Adults", couples:true, quote:"You're not broken. You're overwhelmed. There's a difference.", tags:["anxiety","depression","transition","stress","relationship","teens","adolescents","couples","family","monday","tuesday","wednesday","telehealth","ohio","young adults","adults"] },
  { slug:"nicole-walton", name:"Nicole Walton", credentials:"PhD · LISW-S · LPC", title:"Owner & Founder", photo:"/images/therapists/Nicole_Walton.jpg", color:"#2A7A48", status:"accepting", yrs:20, specialties:["Trauma","PTSD","Depression","Life Transitions"], formats:["in-person","telehealth"], locations:["dayton","rocky river"], days:["monday","tuesday","wednesday","thursday","friday"], faith:false, ages:"Adults 18+", couples:true, quote:"Every person deserves care that meets them exactly where they are.", tags:["trauma","ptsd","depression","transition","anxiety","relationship","monday","tuesday","wednesday","thursday","friday","telehealth","inperson","dayton","rocky river","ohio","adults"] },
  { slug:"pam-gibson", name:"Pam Gibson", credentials:"LSW", title:"Licensed Social Worker", photo:"/images/therapists/Pam_Gibson.jpeg", color:"#2A5A5A", status:"accepting", yrs:15, specialties:["Grief & Loss","Older Adults","Life Transitions","Anxiety"], formats:["in-person","telehealth"], locations:["dayton"], days:["monday","tuesday","thursday"], faith:true, ages:"Adults 30+", quote:"Grief is not a problem to solve. It's a process to walk through.", tags:["grief","loss","transition","anxiety","depression","monday","tuesday","thursday","inperson","telehealth","dayton","ohio","faith","adults","older adults"] },
];

/* ── NLP FILTER ENGINE ───────────────────────────────────── */
const STOP = new Set(["i","my","am","is","are","a","an","the","and","or","but","for","with","to","in","on","at","do","need","want","looking","help","me","have","has","also","some","very","really","would","like","about","feel","feeling","been","get","can","see"]);

const SYNONYMS = {
  anxious:"anxiety", worried:"anxiety", worry:"anxiety", panic:"anxiety",
  depressed:"depression", sad:"depression", hopeless:"depression",
  bereaved:"grief", grieving:"grief", loss:"grief", mourning:"grief",
  ocd:"ocd", burnout:"burnout", exhausted:"burnout", overwhelmed:"burnout",
  trauma:"trauma", traumatic:"trauma", ptsd:"trauma", abuse:"trauma",
  mondays:"monday", tuesdays:"tuesday", wednesdays:"wednesday", thursdays:"thursday", fridays:"friday",
  virtual:"telehealth", online:"telehealth", video:"telehealth", remote:"telehealth",
  "in person":"inperson", "face to face":"inperson", office:"inperson",
  kettering:"dayton", centerville:"dayton", beavercreek:"dayton", oakwood:"dayton", miamisburg:"dayton", springboro:"dayton",
  cleveland:"rocky river", lakewood:"rocky river", westlake:"rocky river",
  columbus:"ohio", cincinnati:"ohio", akron:"ohio", toledo:"ohio",
  christian:"faith", spiritual:"faith", religion:"faith", religious:"faith",
  relationship:"relationship", marriage:"relationship", couples:"relationship",
  "self esteem":"selfesteem", confidence:"selfesteem",
  postpartum:"postpartum", newborn:"postpartum",
  women:"womens", woman:"womens",
  "young adult":"young adults", college:"young adults",
  senior:"older adults", elderly:"older adults",
};

function tokenize(text) {
  let lower = text.toLowerCase().replace(/['']/g, "");
  for (const [phrase, canon] of Object.entries(SYNONYMS)) {
    if (phrase.includes(" ")) lower = lower.replaceAll(phrase, canon.replace(" ","_"));
  }
  return lower.split(/[\s,.\-!?;:]+/).map(w => SYNONYMS[w] || w).filter(w => w.length > 1 && !STOP.has(w));
}

function therapistMatches(t, tokens) {
  if (tokens.length === 0) return true;
  return tokens.some(tok => t.tags.some(tag => tag.startsWith(tok) || tok.startsWith(tag)));
}

/* ── STATUS CONFIG ───────────────────────────────────────── */
const STATUS = {
  accepting:   { label:"Accepting Clients", color:"var(--sage)" },
  waitlisting: { label:"Waitlist Open",     color:"var(--gold)" },
  full:        { label:"Currently Full",    color:"var(--warm-gray)" },
};

/* ── STYLES ──────────────────────────────────────────────── */
const dirStyles = `
  .dir-hero {
    padding: var(--s-md) var(--s-lg) var(--s-md);
    max-width: var(--max-w);
    margin: 0 auto;
    animation: fadeIn 0.618s var(--ease-phi) both;
  }

  .dir-hero h1 {
    font-size: clamp(var(--t-2xl), 6.18vw, var(--t-3xl));
    margin-bottom: 0;
    line-height: 1.0;
  }

  /* STICKY FILTER BAR */
  .dir-filter {
    position: sticky;
    top: 0;
    z-index: 100;
    background: var(--paper);
    border-bottom: 0.0618rem solid var(--divider);
    padding: var(--s-md) var(--s-lg);
    box-shadow: 0 0.236rem 1.618rem rgba(26,23,20,0.0382);
  }

  .dir-filter-inner {
    max-width: var(--max-w);
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: var(--s-md);
    flex-wrap: wrap;
  }

  .dir-search-wrap {
    position: relative;
    flex: 1 1 var(--s-2xl);
    min-width: 16.18rem;
  }

  .dir-search-icon {
    position: absolute;
    left: var(--s-sm);
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    opacity: var(--alpha-ghost);
  }

  .dir-search {
    width: 100%;
    padding: var(--s-sm) var(--s-md) var(--s-sm) var(--s-lg);
    font-family: var(--font-body);
    font-size: var(--t-base);
    font-weight: 300;
    border: 0.0618rem solid var(--divider);
    background: var(--mist);
    color: var(--ink);
    outline: none;
    transition: border-color var(--duration) var(--ease-phi);
  }

  .dir-search:focus { border-color: var(--rose); }
  .dir-search::placeholder { color: var(--warm-gray); opacity: var(--alpha-phi); }

  .dir-match-count {
    font-size: var(--t-xs);
    font-weight: 400;
    white-space: nowrap;
    transition: color var(--duration) var(--ease-phi);
  }

  .dir-clear {
    font-family: var(--font-body);
    font-size: var(--t-xs);
    font-weight: 400;
    color: var(--warm-gray);
    background: none;
    border: 0.0618rem solid var(--divider);
    padding: var(--s-2xs) var(--s-xs);
    cursor: pointer;
    white-space: nowrap;
  }

  .dir-hints {
    display: flex;
    gap: var(--s-2xs);
    margin-top: var(--s-xs);
    overflow-x: auto;
    scrollbar-width: none;
    padding-bottom: 0.236rem;
  }

  .dir-hints::-webkit-scrollbar { display: none; }

  .dir-hint {
    flex-shrink: 0;
    font-family: var(--font-body);
    font-size: var(--t-xs);
    font-weight: 400;
    padding: var(--s-3xs) var(--s-xs);
    border: 0.0618rem solid var(--divider);
    color: var(--earth);
    background: var(--paper);
    cursor: pointer;
    white-space: nowrap;
    transition: all var(--duration) var(--ease-phi);
  }

  .dir-hint:hover {
    border-color: var(--rose);
    color: var(--rose);
  }

  /* PHILOSOPHY SECTION */
  .dir-phil {
    padding: var(--s-xl) var(--s-lg);
    background: var(--mist);
    border-bottom: 0.0618rem solid var(--divider);
  }

  .dir-phil-inner {
    max-width: var(--max-w);
    margin: 0 auto;
  }

  .dir-phil-cols {
    display: flex;
    gap: var(--s-lg);
    margin-top: var(--s-md);
  }

  .dir-phil-col {
    flex: 1;
  }

  .dir-phil-icon {
    font-size: var(--t-md);
    margin-bottom: var(--s-xs);
    opacity: var(--alpha-phi);
  }

  .dir-phil-head {
    font-family: var(--font-display);
    font-size: var(--t-base);
    font-weight: 900;
    margin-bottom: var(--s-2xs);
    line-height: 1.1;
  }

  .dir-phil-body {
    font-size: var(--t-xs);
    font-weight: 300;
    color: var(--earth);
    line-height: 1.618;
  }

  /* GRID */
  .dir-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--s-lg);
    max-width: var(--max-w);
    margin: 0 auto;
    padding: var(--s-xl) var(--s-lg) var(--s-2xl);
  }

  .dir-grid-label {
    grid-column: 1 / -1;
    font-size: var(--t-xs);
    font-weight: 400;
    letter-spacing: 0.236em;
    text-transform: uppercase;
    color: var(--warm-gray);
    margin-bottom: var(--s-xs);
  }

  /* CARD */
  .th-card {
    transition: opacity 0.382s var(--ease-phi), transform 0.382s var(--ease-phi), filter 0.382s var(--ease-phi);
    cursor: pointer;
    text-decoration: none;
    display: block;
    color: inherit;
  }

  .th-card.dimmed {
    opacity: var(--alpha-ghost);
    transform: scale(0.98);
    filter: grayscale(0.618);
    pointer-events: none;
  }

  .th-card:hover .th-photo img { transform: scale(1.0382); }

  .th-photo {
    width: 100%;
    aspect-ratio: 1 / 1.618;
    overflow: hidden;
    background: var(--light);
    position: relative;
    margin-bottom: var(--s-xs);
  }

  .th-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
    transition: transform 0.618s var(--ease-phi);
  }

  .th-avatar {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(var(--light), var(--divider));
  }

  .th-avatar svg { opacity: var(--alpha-phi); }

  .th-photo-vignette {
    position: absolute;
    inset: 0;
    background: radial-gradient(
      ellipse 61.8% 61.8% at 50% 38.2%,
      transparent 0%,
      transparent 61.8%,
      rgba(250,248,245,0.0618) 76.4%,
      rgba(250,248,245,0.146) 85%,
      rgba(250,248,245,0.236) 100%
    );
    pointer-events: none;
  }

  .th-photo-line {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 0.382rem;
  }

  .th-status {
    display: inline-block;
    font-size: var(--t-xs);
    font-weight: 400;
    letter-spacing: 0.236em;
    text-transform: uppercase;
    margin-bottom: var(--s-3xs);
  }

  .th-name {
    font-family: var(--font-display);
    font-size: var(--t-md);
    font-weight: 900;
    line-height: 1.1;
    letter-spacing: -0.0382em;
    margin-bottom: var(--s-3xs);
  }

  .th-creds {
    font-size: var(--t-xs);
    font-weight: 400;
    color: var(--warm-gray);
    letter-spacing: 0.236em;
    text-transform: uppercase;
    margin-bottom: var(--s-2xs);
  }

  .th-specs {
    display: flex;
    flex-wrap: wrap;
    gap: var(--s-3xs);
    margin-bottom: var(--s-2xs);
  }

  .th-spec {
    font-size: var(--t-xs);
    font-weight: 400;
    color: var(--rose);
    padding: 0.236rem var(--s-2xs);
    background: rgba(181,112,107,0.0618);
    border: 0.0618rem solid rgba(181,112,107,0.236);
  }

  .th-chips {
    display: flex;
    gap: var(--s-3xs);
    flex-wrap: wrap;
  }

  .th-chip {
    font-size: var(--t-xs);
    font-weight: 400;
    padding: 0.236rem var(--s-2xs);
    background: var(--mist);
    color: var(--warm-gray);
  }

  .th-chip.faith { background: rgba(184,150,90,0.1); color: var(--gold); }
  .th-chip.couples { background: rgba(181,112,107,0.0618); color: var(--rose); }

  .dir-empty {
    grid-column: 1 / -1;
    text-align: center;
    padding: var(--s-2xl);
  }

  .dir-empty-title {
    font-family: var(--font-display);
    font-size: var(--t-md);
    font-weight: 900;
    color: var(--warm-gray);
    margin-bottom: var(--s-xs);
  }

  @media (max-width: 61.8rem) {
    .dir-grid { grid-template-columns: 1fr 1fr; gap: var(--s-md); }
    .dir-phil-cols { flex-direction: column; }
  }

  @media (max-width: 42.36rem) {
    .dir-grid { grid-template-columns: 1fr; gap: var(--s-md); max-width: 26.18rem; }
    .dir-filter-inner { flex-direction: column; align-items: stretch; }
  }
`;

const HINTS = ["Anxiety","Depression","Trauma","Grief","Tuesday","Thursday","Telehealth","In-Person","Dayton","Rocky River","Faith","CBT"];

export default function TherapistsDirectory() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const tokens = useMemo(() => tokenize(query), [query]);

  const results = useMemo(() =>
    THERAPISTS.map(t => ({
      ...t,
      dimmed: tokens.length > 0 && !therapistMatches(t, tokens),
    })),
    [tokens]
  );

  const matchCount = results.filter(t => !t.dimmed).length;

  return (
    <div>
      <style>{dirStyles}</style>
      <Nav />

      {/* ── HERO ── */}
      <section className="dir-hero">
        <p className="eyebrow">Our Therapists</p>
        <h1>Find your therapist.</h1>
      </section>

      {/* ── STICKY FILTER ── */}
      <div className="dir-filter">
        <div className="dir-filter-inner">
          <div className="dir-search-wrap">
            <div className="dir-search-icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="7" cy="7" r="5" stroke="var(--ink)" strokeWidth="1.618"/>
                <path d="M11 11l3 3" stroke="var(--ink)" strokeWidth="1.618" strokeLinecap="round"/>
              </svg>
            </div>
            <input
              className="dir-search"
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Type what you need: anxiety, Tuesday, telehealth, CBT..."
            />
          </div>

          {tokens.length > 0 && (
            <span className="dir-match-count" style={{ color: matchCount > 0 ? "var(--sage)" : "var(--rose-deep)" }}>
              {matchCount === 0 ? "No matches. Try broader terms." : `${matchCount} therapist${matchCount !== 1 ? "s" : ""} match`}
            </span>
          )}

          {query && (
            <button className="dir-clear" onClick={() => setQuery("")}>Clear ×</button>
          )}
        </div>

        {!query && (
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
            <div className="dir-hints">
              {HINTS.map(h => (
                <button key={h} className="dir-hint" onClick={() => setQuery(h)}>{h}</button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ── PHILOSOPHY ── */}
      <div className="dir-phil">
        <div className="dir-phil-inner">
          <p className="eyebrow">Our Philosophy</p>
          <h2 style={{ fontSize: "clamp(var(--t-md), 3vw, var(--t-xl))", marginBottom: "var(--s-xs)" }}>
            Our therapists focus on you.
          </h2>
          <div className="dir-phil-cols">
            {[
              { icon: "⟡", head: "Therapists here just help people.", body: "Every therapist at NGU was handpicked. Not just for their resume — for their values, their work ethic, and the way they think about care. They show up and help people." },
              { icon: "◈", head: "Their needs matter as much as yours.", body: "A therapist who is supported, fairly paid, and not burned out is a fundamentally better therapist. NGU is built around that belief." },
              { icon: "◇", head: "Matched to your actual needs.", body: "Every match is intentional: specialty, schedule, personality, approach. If someone isn't the right fit, we'll tell you and help you find who is." },
            ].map(({ icon, head, body }) => (
              <div key={head} className="dir-phil-col">
                <p className="dir-phil-icon">{icon}</p>
                <p className="dir-phil-head">{head}</p>
                <p className="dir-phil-body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── GRID ── */}
      <div className="dir-grid">
        <p className="dir-grid-label">
          {tokens.length > 0 ? `${matchCount} of ${THERAPISTS.length} therapists match` : `All ${THERAPISTS.length} Therapists`}
        </p>

        {results.map(t => (
          <a
            key={t.slug}
            href={`/therapists/${t.slug}`}
            className={`th-card${t.dimmed ? " dimmed" : ""}`}
          >
            <div className="th-photo">
              {t.photo ? (
                <img src={t.photo} alt={t.name} />
              ) : (
                <div className="th-avatar">
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                    <circle cx="28" cy="22" r="12" fill={t.color} opacity="0.236"/>
                    <path d="M6 50c0-12.15 9.85-22 22-22s22 9.85 22 22" fill={t.color} opacity="0.236"/>
                  </svg>
                </div>
              )}
              <div className="th-photo-vignette" />
              <div className="th-photo-line" style={{ background: t.color }} />
            </div>

            <p className="th-status" style={{ color: STATUS[t.status].color }}>
              {STATUS[t.status].label}
            </p>
            <p className="th-name">{t.name}</p>
            <p className="th-creds">{t.credentials}</p>
            <div className="th-specs">
              {t.specialties.slice(0,3).map(s => <span key={s} className="th-spec" style={{ color: t.color, background: t.color + "0F", borderColor: t.color + "3D" }}>{s}</span>)}
            </div>
            <div className="th-chips">
              {t.formats.includes("in-person") && <span className="th-chip">In-Person</span>}
              {t.formats.includes("telehealth") && <span className="th-chip">Telehealth</span>}
              {t.faith && <span className="th-chip faith">Faith-Friendly</span>}
              {t.couples && <span className="th-chip couples">Couples & Family</span>}
            </div>
          </a>
        ))}

        {matchCount === 0 && tokens.length > 0 && (
          <div className="dir-empty">
            <p className="dir-empty-title">No exact match found.</p>
            <p style={{ fontSize: "var(--t-base)", fontWeight: 300, color: "var(--earth)" }}>
              Try broader terms or{" "}
              <a href="tel:+18886489355" style={{ color: "var(--rose)", fontWeight: 400 }}>call us</a>
              {" "}— we will help you find the right fit.
            </p>
          </div>
        )}
      </div>

      {/* ── CTA ── */}
      <section style={{ padding: "var(--s-xl) var(--s-lg)", background: "var(--mist)", borderTop: "0.0618rem solid var(--divider)", textAlign: "center" }}>
        <div style={{ maxWidth: "var(--max-w-narrow)", margin: "0 auto" }}>
          <h3 style={{ fontSize: "clamp(var(--t-md), 3vw, var(--t-xl))", marginBottom: "var(--s-xs)" }}>
            Not sure who to choose?
          </h3>
          <p style={{ fontSize: "var(--t-base)", fontWeight: 300, color: "var(--earth)", marginBottom: "var(--s-md)" }}>
            Call or text us. We will ask a few questions and match you to the right therapist ourselves.
          </p>
          <div style={{ display: "flex", gap: "var(--s-sm)", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+18886489355" className="btn-rose">Call or Text 888-648-9355</a>
            <a href="mailto:info@nguwellness.com" className="btn-outline">Email Us</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
