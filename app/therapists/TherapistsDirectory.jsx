"use client";
import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Nav from "../Nav";
import Footer from "../Footer";

const THERAPISTS = [
  {
    slug: "nicole-walton",
    name: "Nicole Walton",
    credentials: "PhD · LISW-S · LPC",
    title: "Owner & Founder",
    photo: "/images/therapists/Nicole_Walton_bio.jpg",
    status: "accepting",
    specialties: ["Trauma", "PTSD", "Depression", "Life Transitions"],
    formats: ["In-Person", "Telehealth"],
    locations: ["Dayton", "Rocky River"],
    ages: "Adults 18+",
    quote: "Every person deserves care that meets them exactly where they are.",
    tags: ["trauma","ptsd","depression","transition","anxiety","relationship","couples","adults"],
  },
  {
    slug: "kim-brant",
    name: "Kim Brant",
    credentials: "LPCC · CCATP",
    title: "Licensed Counselor",
    photo: "/images/therapists/Kim_Brant_bio.png",
    status: "waitlisting",
    specialties: ["Anxiety", "Depression", "Grief & Loss", "Life Transitions"],
    formats: ["In-Person", "Telehealth"],
    locations: ["Dayton"],
    ages: "Adults 18–75",
    quote: "Real, lasting relief from the things that keep you stuck.",
    tags: ["anxiety","depression","grief","transition","relationship","stress","faith","cbt","act","erp","adults"],
  },
  {
    slug: null,
    name: "Charlotte Wells",
    credentials: "LISW",
    title: "Licensed Social Worker",
    photo: null,
    status: "accepting",
    specialties: ["Anxiety", "Relationships", "Young Adults", "Self-Esteem"],
    formats: ["Telehealth"],
    locations: ["Ohio (Telehealth)"],
    ages: "Adults 18–40",
    quote: "You don't have to have it figured out to start.",
    tags: ["anxiety","relationship","selfesteem","transition","young adults","adults"],
  },
  {
    slug: null,
    name: "Danielle Washington",
    credentials: "LISW-S",
    title: "Licensed Social Worker",
    photo: null,
    status: "accepting",
    specialties: ["Trauma", "Depression", "Burnout", "Identity"],
    formats: ["In-Person", "Telehealth"],
    locations: ["Dayton"],
    ages: "Adults 18+",
    quote: "Healing happens when you finally feel safe enough to tell the truth.",
    tags: ["trauma","depression","burnout","identity","stress","faith","adults"],
  },
  {
    slug: null,
    name: "Pam Gibson",
    credentials: "LSW",
    title: "Licensed Social Worker",
    photo: null,
    status: "accepting",
    specialties: ["Grief & Loss", "Older Adults", "Life Transitions", "Anxiety"],
    formats: ["In-Person", "Telehealth"],
    locations: ["Dayton"],
    ages: "Adults 30+",
    quote: "Grief is not a problem to solve. It's a process to walk through.",
    tags: ["grief","loss","transition","anxiety","depression","faith","adults","older adults"],
  },
  {
    slug: null,
    name: "Natalie Woodson",
    credentials: "LSW",
    title: "Licensed Social Worker",
    photo: null,
    status: "accepting",
    specialties: ["Anxiety", "Depression", "Teens (12+)", "Life Transitions"],
    formats: ["Telehealth"],
    locations: ["Ohio (Telehealth)"],
    ages: "Teens 12+ · Adults",
    quote: "You're not broken. You're overwhelmed. There's a difference.",
    tags: ["anxiety","depression","transition","stress","teens","adolescents","couples","family","young adults","adults"],
  },
];

const dirStyles = `
  .dir-hero {
    padding: var(--s-2xl) var(--s-lg) var(--s-xl);
    max-width: var(--max-w);
    margin: 0 auto;
    animation: fadeIn 0.618s var(--ease-phi) both;
  }

  .dir-hero h1 {
    font-size: clamp(var(--t-xl), 5vw, var(--t-2xl));
    margin-bottom: var(--s-sm);
  }

  .dir-search-wrap {
    max-width: var(--max-w);
    margin: 0 auto;
    padding: 0 var(--s-lg) var(--s-xl);
  }

  .dir-search {
    width: 100%;
    font-family: var(--font-body);
    font-size: var(--t-base);
    font-weight: 300;
    padding: var(--s-sm) var(--s-md);
    border: 0.0618rem solid var(--divider);
    background: var(--paper);
    color: var(--ink);
    outline: none;
    transition: border-color var(--duration) var(--ease-phi);
  }

  .dir-search:focus {
    border-color: var(--rose);
  }

  .dir-search::placeholder {
    color: var(--warm-gray);
    opacity: var(--alpha-ghost);
  }

  .dir-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--s-md);
    max-width: var(--max-w);
    margin: 0 auto;
    padding: 0 var(--s-lg) var(--s-2xl);
  }

  .th-card {
    border: 0.0618rem solid var(--divider);
    transition: all var(--duration) var(--ease-phi);
    cursor: pointer;
    text-decoration: none;
    display: block;
    overflow: hidden;
  }

  .th-card:hover {
    border-color: var(--rose);
    transform: translateY(-0.236rem);
  }

  .th-card.dimmed {
    opacity: var(--alpha-ghost);
    transform: scale(0.98);
    filter: grayscale(0.382);
    pointer-events: none;
  }

  .th-photo {
    width: 100%;
    aspect-ratio: 1 / 1.618;
    background: var(--mist);
    overflow: hidden;
    position: relative;
  }

  .th-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    display: block;
    transition: transform 0.618s var(--ease-phi);
  }

  .th-card:hover .th-photo img {
    transform: scale(1.0382);
  }

  .th-initials {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    inset: 0;
    font-family: var(--font-display);
    font-size: var(--t-xl);
    font-weight: 900;
    color: var(--divider);
    letter-spacing: -0.0382em;
  }

  .th-body {
    padding: var(--s-md);
  }

  .th-status {
    font-size: var(--t-xs);
    font-weight: 400;
    letter-spacing: 0.236em;
    text-transform: uppercase;
    margin-bottom: var(--s-2xs);
  }

  .th-status.accepting { color: var(--sage); }
  .th-status.waitlisting { color: var(--gold); }

  .th-name {
    font-family: var(--font-display);
    font-size: var(--t-lg);
    font-weight: 900;
    line-height: 1.1;
    margin-bottom: var(--s-3xs);
    letter-spacing: -0.0382em;
  }

  .th-creds {
    font-size: var(--t-sm);
    font-weight: 400;
    color: var(--warm-gray);
    margin-bottom: var(--s-xs);
  }

  .th-specs {
    display: flex;
    flex-wrap: wrap;
    gap: var(--s-3xs);
    margin-bottom: var(--s-xs);
  }

  .th-spec {
    font-size: var(--t-xs);
    font-weight: 400;
    color: var(--earth);
    padding: var(--s-3xs) var(--s-2xs);
    background: var(--mist);
  }

  .th-quote {
    font-family: var(--font-accent);
    font-size: var(--t-sm);
    font-style: italic;
    color: var(--earth);
    line-height: 1.618;
    opacity: var(--alpha-phi);
  }

  .dir-empty {
    grid-column: 1 / -1;
    text-align: center;
    padding: var(--s-2xl);
    color: var(--warm-gray);
    font-family: var(--font-accent);
    font-size: var(--t-lg);
    font-style: italic;
  }

  @media (max-width: 61.8rem) {
    .dir-grid { grid-template-columns: 1fr 1fr; }
  }

  @media (max-width: 42.36rem) {
    .dir-grid { grid-template-columns: 1fr; max-width: 26.18rem; }
  }
`;

export default function TherapistsDirectory() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return THERAPISTS;
    const terms = query.toLowerCase().split(/\s+/);
    return THERAPISTS.filter(t => {
      const haystack = [t.name, t.credentials, t.title, t.ages, ...t.specialties, ...t.formats, ...t.locations, ...t.tags].join(" ").toLowerCase();
      return terms.every(term => haystack.includes(term));
    });
  }, [query]);

  const dimmed = query.trim() && filtered.length < THERAPISTS.length;

  return (
    <div>
      <style>{dirStyles}</style>
      <Nav />

      <section className="dir-hero">
        <p className="eyebrow">Our Therapists</p>
        <h1>Find your fit.</h1>
        <p style={{ fontSize: "var(--t-md)", fontWeight: 300, color: "var(--earth)", maxWidth: "var(--max-w-narrow)" }}>
          Every therapist at NGU Wellness is licensed, vetted, and committed to evidence-based care.
        </p>
      </section>

      <div className="dir-search-wrap">
        <input
          className="dir-search"
          type="text"
          placeholder="Search by name, specialty, location, or concern..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>

      <div className="dir-grid">
        {filtered.length === 0 && (
          <div className="dir-empty">No therapists match your search.</div>
        )}
        {(query.trim() ? filtered : THERAPISTS).map(t => {
          const isMatch = !query.trim() || filtered.includes(t);
          const initials = t.name.split(" ").map(w => w[0]).join("");
          return (
            <div
              key={t.name}
              className={`th-card${isMatch ? "" : " dimmed"}`}
              onClick={() => {
                if (t.slug) router.push(`/therapists/${t.slug}`);
                else router.push("/contact");
              }}
            >
              <div className="th-photo">
                {t.photo ? (
                  <img src={t.photo} alt={t.name} />
                ) : (
                  <span className="th-initials">{initials}</span>
                )}
              </div>
              <div className="th-body">
                <p className={`th-status ${t.status}`}>
                  {t.status === "accepting" ? "Accepting clients" : "Waitlist open"}
                </p>
                <p className="th-name">{t.name}</p>
                <p className="th-creds">{t.credentials}</p>
                <div className="th-specs">
                  {t.specialties.map(s => <span key={s} className="th-spec">{s}</span>)}
                </div>
                <p className="th-quote">"{t.quote}"</p>
              </div>
            </div>
          );
        })}
      </div>

      <section className="cta-band" style={{ background: "var(--mist)" }}>
        <div className="phi-wrap" style={{ textAlign: "center" }}>
          <p className="eyebrow">Not sure who to see?</p>
          <h2 style={{ fontSize: "clamp(var(--t-lg), 3vw, var(--t-xl))", marginBottom: "var(--s-md)" }}>We will help you find the right match.</h2>
          <p style={{ fontSize: "var(--t-md)", fontWeight: 300, color: "var(--earth)", maxWidth: "var(--max-w-narrow)", margin: "0 auto var(--s-lg)" }}>
            Call, text, or email us. We will match you with the therapist best suited to your needs.
          </p>
          <div style={{ display: "flex", gap: "var(--s-sm)", justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn-rose" onClick={() => window.open("https://therapyportal.com/p/nguwellness", "_blank")}>Begin Intake</button>
            <button className="btn-outline" onClick={() => window.open("tel:8886489355")}>Call 888-648-9355</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
