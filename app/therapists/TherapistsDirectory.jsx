"use client";
import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Nav from "../Nav";
import Footer from "../Footer";

/* ── THERAPIST DATA (all 12) ─────────────────────────────── */
const THERAPISTS = [
  { slug:"anna-espy", name:"Anna Espy", credentials:"LISW-S", title:"Licensed Social Worker", photo:"/images/therapists/Anna_Espy.jpeg", color:"#D4688A", status:"accepting", yrs:22, specialties:["Anxiety","Depression","Young Adults","Life Transitions"], formats:["in-person","telehealth"], locations:["dayton"], days:["monday","tuesday","thursday","friday"], faith:false, ages:"Ages 16–65+", quote:"I became a therapist to help others realize their inherent worth, value, and potential.", tags:["anxiety","depression","stress","selfesteem","grief","transition","trauma","ptsd","career","identity","relationship","parenting","school","chronic","cancer","selfharm","monday","tuesday","thursday","friday","inperson","telehealth","dayton","ohio","adults","young adults","teens"] },
  { slug:"charlotte-wells", name:"Charlotte Wells", credentials:"LISW", title:"Licensed Social Worker", photo:"/images/therapists/Charlotte_Wells.jpeg", color:"#4A5568", status:"accepting", yrs:null, specialties:["Anxiety","Depression","Grief","Women's Issues"], formats:["in-person","telehealth"], locations:["dayton"], days:["friday"], faith:true, ages:"Adults 20–65", quote:"I approach therapy first as a person and second as a therapist.", tags:["anxiety","depression","grief","codependency","boundaries","selfesteem","divorce","transition","stress","trauma","ptsd","adhd","coping","relationship","womens","friday","inperson","telehealth","dayton","ohio","adults","faith","lgbtq"] },
  { slug:"danielle-washington", name:"Danielle Washington", credentials:"LISW-S", title:"Licensed Social Worker", photo:"/images/therapists/Danielle_Washington.jpeg", color:"#7A6878", status:"accepting", yrs:25, specialties:["Depression","Stress","Women's Issues","Addiction"], formats:["in-person","telehealth"], locations:["dayton"], days:["monday","tuesday","wednesday","thursday"], faith:false, ages:"Adults 18+", quote:"We're partners in the development and success of your well-being.", tags:["depression","stress","womens","anxiety","addiction","alcohol","substance","dual diagnosis","codependency","coping","family","grief","transition","mood","relationship","conflict","monday","tuesday","wednesday","thursday","inperson","telehealth","dayton","ohio","adults","bipoc"] },
  { slug:"jackie-penny", name:"Jackie Penny", credentials:"LPCC-S", title:"Licensed Professional Counselor", photo:"/images/therapists/Jackie_Penny.jpeg", color:"#9A4A7A", status:"accepting", yrs:7, specialties:["Anxiety","Depression","Grief","Emotional Regulation"], formats:["in-person","telehealth"], locations:["dayton"], days:["friday"], faith:false, ages:"Adults 18+", quote:"We'll figure things out together, even if you're not sure where to start.", tags:["anxiety","depression","grief","trauma","ptsd","stress","burnout","substance","addiction","selfesteem","anger","adhd","bipolar","sleep","insomnia","womens","veterans","lgbtq","friday","inperson","telehealth","dayton","ohio","adults","dbt","cbt","act"] },
  { slug:"katie-grier", name:"Katie Grier", credentials:"LSW", title:"Licensed Social Worker", photo:"/images/therapists/Katie_Grier.jpeg", color:"#C4967A", status:"accepting", yrs:null, specialties:["Children & Teens","Anxiety","LGBTQ+","Depression"], formats:["in-person","telehealth"], locations:["dayton"], days:["monday","tuesday","wednesday","thursday"], faith:false, ages:"Ages 5+ through Adults", quote:"I'll be an attentive listener and work hard to understand what you need the most.", tags:["anxiety","depression","grief","children","kids","teens","adolescents","preteens","young adults","selfesteem","selfharm","school","peer","family","behavioral","adhd","ocd","odd","body image","addiction","coping","trauma","ptsd","lgbtq","transgender","identity","transition","monday","tuesday","wednesday","thursday","inperson","telehealth","dayton","ohio","adults"] },
  { slug:"kelley-boole", name:"Kelley Boole", credentials:"LSW", title:"Licensed Social Worker", photo:"/images/therapists/Kelley_Boole.jpeg", color:"#B08A72", status:"accepting", yrs:11, specialties:["Anxiety","Depression","Relationships","Addiction"], formats:["in-person","telehealth"], locations:["rocky river"], days:["monday","tuesday","wednesday","thursday","friday","saturday"], faith:false, ages:"Teens 13+ & Adults", quote:"I believe in the inherent strength and goodness of people.", tags:["anxiety","depression","relationship","addiction","substance","alcohol","selfesteem","stress","grief","coping","transition","mood","bipolar","trauma","ptsd","adhd","ocd","anger","social anxiety","work stress","crisis","monday","tuesday","wednesday","thursday","friday","saturday","inperson","telehealth","rocky river","ohio","adults","teens"] },
  { slug:"kelly-salada", name:"Kelly Salada", credentials:"LISW", title:"Licensed Social Worker", photo:"/images/therapists/Kelly_Salada.jpeg", color:"#4A7A74", status:"accepting", yrs:null, specialties:["Anxiety","Depression","Trauma & PTSD","Relationships"], formats:["in-person","telehealth"], locations:["rocky river"], days:["tuesday","wednesday","thursday","friday","saturday"], faith:false, ages:"Teens through Adults 65+", quote:"You're the expert on your life. I won't judge where you've been or where you're headed.", tags:["anxiety","depression","trauma","ptsd","addiction","adhd","aspergers","neurodivergence","bipolar","codependency","coping","dual diagnosis","grief","impulse","lgbtq","transition","mood","relationship","selfesteem","stress","gender","identity","abuse","tuesday","wednesday","thursday","friday","saturday","inperson","telehealth","rocky river","ohio","adults","teens"] },
  { slug:"kim-brant", name:"Kim Brant", credentials:"LPCC · CCATP", title:"Licensed Counselor", photo:"/images/therapists/Kim_Brant.png", color:"#2A6BC6", status:"waitlisting", yrs:19, specialties:["Anxiety","Depression","Grief & Loss","Life Transitions"], formats:["in-person","telehealth"], locations:["dayton"], days:["monday","tuesday","thursday"], faith:true, ages:"Adults 18–75", quote:"Real, lasting relief from the things that keep you stuck.", tags:["anxiety","depression","grief","transition","relationship","stress","monday","tuesday","thursday","telehealth","inperson","dayton","ohio","faith","cbt","act","erp","adults","18"] },
  { slug:"lisa-freeman", name:"Lisa Freeman", credentials:"LPC", title:"Licensed Professional Counselor", photo:"/images/therapists/Lisa_Freeman.jpeg", color:"#3A6868", status:"accepting", yrs:12, specialties:["Children","Insomnia & CBTi","Relationships","Trauma"], formats:["in-person","telehealth"], locations:["dayton"], days:["monday","tuesday","wednesday","friday"], faith:true, ages:"Children 5+ & Adults", couples:true, quote:"True healing occurs when we embrace honesty and acceptance of ourselves and others.", tags:["anxiety","depression","insomnia","sleep","children","kids","adhd","behavioral","relationship","couples","premarital","trauma","ptsd","childhood trauma","sexual abuse","domestic violence","family","parenting","adoption","caregivers","ocd","odd","selfesteem","coping","transition","stress","divorce","education","learning","spirituality","monday","tuesday","wednesday","friday","inperson","telehealth","dayton","ohio","adults","play therapy","cbti","sensory"] },
  { slug:"natalie-woodson", name:"Natalie Woodson-Booska", credentials:"LISW", title:"Licensed Independent Social Worker", photo:"/images/therapists/Natalie_Woodson.jpeg", color:"#2A3A5A", status:"accepting", yrs:5, specialties:["Anxiety","Depression","Trauma & PTSD","EMDR"], formats:["in-person","telehealth"], locations:["dayton"], days:["monday","tuesday","wednesday","thursday","friday"], faith:false, ages:"Preteens · Teens · Adults · Elders 65+", couples:false, quote:"You're not broken. You're overwhelmed. There's a difference.", tags:["anxiety","depression","trauma","ptsd","emdr","stress","grief","relationship","substance","addiction","domestic violence","anger","disabilities","holistic","monday","tuesday","wednesday","thursday","friday","inperson","telehealth","dayton","ohio","preteens","teens","adults","elders","family","booska","woodson-booska"] },
  { slug:"nicole-walton", name:"Dr. Nicole Walton", credentials:"PhD · LISW-S · LPC", title:"Founder, Owner & Clinical Director", photo:"/images/therapists/Nicole_Walton.jpg", color:"#2A7A48", status:"accepting", yrs:20, specialties:["Depression","Anxiety","Couples","Trauma & PTSD"], formats:["in-person","telehealth"], locations:["dayton"], days:["monday","tuesday","wednesday","thursday","friday"], faith:false, ages:"Teens · Adults · Elders 65+", couples:true, quote:"Every person deserves care that meets them exactly where they are.", tags:["depression","anxiety","trauma","ptsd","grief","relationship","couples","family","addiction","substance","alcohol","gambling","dual diagnosis","bipolar","ocd","mood","divorce","infidelity","parenting","codependency","stress","self-esteem","transition","spirituality","monday","tuesday","wednesday","thursday","friday","telehealth","inperson","dayton","ohio","teens","adults","elders","evening"] },
  { slug:"pam-gibson", name:"Pam Gibson", credentials:"LSW", title:"Licensed Social Worker", photo:"/images/therapists/Pam_Gibson.jpeg", color:"#2A5A5A", status:"accepting", yrs:20, specialties:["Grief & Loss","Anxiety","Depression","Suicide Loss"], formats:["in-person","telehealth"], locations:["dayton"], days:["wednesday"], faith:true, ages:"Teens · Adults · Elders 65+", couples:true, quote:"Grief is not a problem to solve. It's a process to walk through.", tags:["grief","loss","suicide","anxiety","depression","stress","trauma","divorce","domestic violence","relationship","couples","family","parenting","single parent","anger","addiction","alcohol","career","transition","self-esteem","women","faith","christian","wednesday","inperson","telehealth","dayton","ohio","teens","adults","elders"] },
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
  /* ═══════════════════════════════════════════════════
     THERAPISTS DIRECTORY — Φ DESIGN SYSTEM STRICT
     Dynamic per-therapist colors stay inline.
     Everything else: CSS classes only.
     ═══════════════════════════════════════════════════ */

  /* ── HERO ── */
  .dir-hero {
    padding: var(--s-md) var(--s-lg) var(--s-md);
    max-width: var(--max-w);
    margin: 0 auto;
    animation: fadeIn 0.618s var(--ease-phi) both;
  }

  .dir-hero h1 {
    font-size: clamp(var(--t-2xl), 6.18vw + 1rem, var(--t-3xl));
    margin-bottom: 0;
    line-height: 1.0;
  }

  /* ── STICKY FILTER BAR ── */
  .dir-filter {
    position: sticky;
    top: 0;
    z-index: 8;
    background: var(--paper);
    border-bottom: 1px solid var(--divider);
    padding: var(--s-md) var(--s-lg);
    box-shadow: 0 var(--s-3xs) var(--s-md) rgba(26,23,20,0.0382);
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
    border: 1px solid var(--divider);
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
    border: 1px solid var(--divider);
    padding: var(--s-2xs) var(--s-xs);
    cursor: pointer;
    white-space: nowrap;
  }

  .dir-hints-wrap {
    max-width: var(--max-w);
    margin: 0 auto;
  }

  .dir-hints {
    display: flex;
    gap: var(--s-2xs);
    margin-top: var(--s-xs);
    overflow-x: auto;
    scrollbar-width: none;
    padding-bottom: var(--s-3xs);
  }

  .dir-hints::-webkit-scrollbar { display: none; }

  .dir-hint {
    flex-shrink: 0;
    font-family: var(--font-body);
    font-size: var(--t-xs);
    font-weight: 400;
    padding: var(--s-3xs) var(--s-xs);
    border: 1px solid var(--divider);
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

  /* ── PHILOSOPHY SECTION ── */
  .dir-phil {
    padding: var(--s-md) var(--s-lg);
    background: var(--mist);
    border-bottom: 1px solid var(--divider);
  }

  .dir-phil-inner {
    max-width: var(--max-w);
    margin: 0 auto;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: var(--s-xl);
    align-items: start;
  }

  .dir-phil-title {
    display: flex;
    flex-direction: column;
    gap: var(--s-3xs);
  }

  .dir-phil-heading {
    font-family: var(--font-display);
    font-size: var(--t-xl);
    font-weight: 900;
    line-height: 1.1;
    letter-spacing: -0.0382em;
    white-space: nowrap;
  }

  .dir-phil-cols {
    display: flex;
    gap: var(--s-md);
  }

  .dir-phil-col {
    flex: 1;
  }

  .dir-phil-icon {
    margin-right: var(--s-3xs);
    opacity: var(--alpha-phi);
  }

  .dir-phil-head {
    font-family: var(--font-display);
    font-size: var(--t-md);
    font-weight: 900;
    margin-bottom: var(--s-3xs);
    line-height: 1.1;
    letter-spacing: -0.0382em;
  }

  .dir-phil-body {
    font-size: var(--t-base);
    font-weight: 300;
    color: var(--earth);
    line-height: 1.618;
  }

  /* ── GRID ── */
  .dir-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--s-lg);
    max-width: var(--max-w);
    margin: 0 auto;
    padding: var(--s-md) var(--s-lg) var(--s-xl);
  }

  .dir-grid-label {
    grid-column: 1 / -1;
    font-size: var(--t-xs);
    font-weight: 400;
    letter-spacing: 0.236em;
    text-transform: uppercase;
    color: var(--warm-gray);
    margin-bottom: 0;
  }

  /* ── CARD ── */
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
      rgba(255,255,255,0.0618) 76.4%,
      rgba(255,255,255,0.146) 85%,
      rgba(255,255,255,0.236) 100%
    );
    pointer-events: none;
  }

  .th-photo-arrow {
    position: absolute;
    bottom: var(--s-xs);
    right: var(--s-xs);
    width: var(--s-lg);
    height: var(--s-lg);
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--t-sm);
    color: var(--ink);
    pointer-events: none;
    transition: all var(--duration) var(--ease-phi);
    box-shadow: 0 0.146rem 0.382rem rgba(0, 0, 0, 0.12);
  }

  .th-card:hover .th-photo-arrow {
    background: var(--ink);
    color: var(--paper);
    transform: translateX(var(--s-3xs));
  }

  .th-photo-line {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: var(--s-2xs);
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
    padding: var(--s-3xs) var(--s-2xs);
  }

  .th-chips {
    display: flex;
    gap: var(--s-3xs);
    flex-wrap: wrap;
  }

  .th-chip {
    font-size: var(--t-xs);
    font-weight: 400;
    padding: var(--s-3xs) var(--s-2xs);
    background: var(--mist);
    color: var(--warm-gray);
  }

  .th-chip.faith { background: rgba(245,145,63,0.1); color: var(--gold); }
  .th-chip.couples { background: rgba(245,10,84,0.0618); color: var(--rose); }

  /* ── EMPTY STATE ── */
  .dir-empty {
    grid-column: 1 / -1;
    text-align: center;
    padding: var(--s-xl);
  }

  .dir-empty-title {
    font-family: var(--font-display);
    font-size: var(--t-md);
    font-weight: 900;
    color: var(--warm-gray);
    margin-bottom: var(--s-xs);
  }

  .dir-empty-desc {
    font-size: var(--t-base);
    font-weight: 300;
    color: var(--earth);
  }

  .dir-empty-link {
    color: var(--rose);
    font-weight: 400;
  }

  /* ── CTA ── */
  .dir-cta {
    padding: var(--s-lg) var(--s-lg);
    background: var(--mist);
    border-top: 1px solid var(--divider);
    text-align: center;
  }

  .dir-cta-inner {
    max-width: var(--max-w-narrow);
    margin: 0 auto;
  }

  .dir-cta-title {
    font-size: clamp(var(--t-md), 3vw + 0.5rem, var(--t-xl));
    margin-bottom: var(--s-xs);
  }

  .dir-cta-desc {
    font-size: var(--t-base);
    font-weight: 300;
    color: var(--earth);
    margin-bottom: var(--s-md);
  }

  .dir-cta-actions {
    display: flex;
    gap: var(--s-sm);
    justify-content: center;
    flex-wrap: wrap;
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 61.8rem) {
    .dir-hero h1 { font-size: clamp(var(--t-xl), 8vw + 1rem, var(--t-2xl)); }
    .dir-phil-inner { grid-template-columns: 1fr; gap: var(--s-sm); }
    .dir-phil-heading { white-space: normal; }
    .dir-phil-cols { flex-direction: column; }
    .dir-grid { grid-template-columns: 1fr 1fr; gap: var(--s-md); }
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

      {/* ── PHILOSOPHY (compact band) ── */}
      <div className="dir-phil">
        <div className="dir-phil-inner">
          <div className="dir-phil-title">
            <p className="eyebrow">Our Philosophy</p>
            <h2 className="dir-phil-heading">Our therapists focus on you.</h2>
          </div>
          <div className="dir-phil-cols">
            {[
              { icon: "⟡", head: "Excellent therapists help people.", body: "Handpicked for their values, work ethic, and the way they think about care." },
              { icon: "◈", head: "Therapists' needs matter too.", body: "Well supported, fairly paid therapists can better meet the needs of their clients." },
              { icon: "◇", head: "Matched to your needs.", body: "Every match is intentional, based on specialty, schedule, personality and approach." },
            ].map(({ icon, head, body }) => (
              <div key={head} className="dir-phil-col">
                <p className="dir-phil-head"><span className="dir-phil-icon">{icon}</span>{head}</p>
                <p className="dir-phil-body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

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
          <div className="dir-hints-wrap">
            <div className="dir-hints">
              {HINTS.map(h => (
                <button key={h} className="dir-hint" onClick={() => setQuery(h)}>{h}</button>
              ))}
            </div>
          </div>
        )}
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
              <div className="th-photo-arrow">→</div>
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
              {t.couples && <span className="th-chip couples">Couples &amp; Family</span>}
            </div>
          </a>
        ))}

        {matchCount === 0 && tokens.length > 0 && (
          <div className="dir-empty">
            <p className="dir-empty-title">No exact match found.</p>
            <p className="dir-empty-desc">
              Try broader terms or{" "}
              <a href="tel:+18886489355" className="dir-empty-link">call us</a>
              {" "}, we will help you find the right fit.
            </p>
          </div>
        )}
      </div>

      {/* ── CTA ── */}
      <section className="dir-cta">
        <div className="dir-cta-inner">
          <h3 className="dir-cta-title">Not sure who to choose?</h3>
          <p className="dir-cta-desc">
            Call or text us. We will ask a few questions and match you to the right therapist ourselves.
          </p>
          <div className="dir-cta-actions">
            <a href="tel:+18886489355" className="btn-rose">Call or Text 888-648-9355</a>
            <a href="mailto:info@nguwellness.com" className="btn-outline">Email Us</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
