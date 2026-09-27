import Link from "next/link";
import Nav from "../Nav";
import Footer from "../Footer";
import { SITE, INTAKE_FORM } from "../../data/site";

// Shared layout for text pages (insurance, FAQ, offices, notices, concern pages).
// Keeps them in the same look as the rest of the site without copying styles into each page.
const styles = `
  .cp-hero { max-width: var(--max-w); margin: 0 auto; padding: var(--s-xl) var(--s-lg) var(--s-lg); }
  .cp-hero h1 { font-size: clamp(2.618rem, 5vw, 4.236rem); line-height: 1.05; letter-spacing: -0.0382em; margin-bottom: var(--s-sm); }
  .cp-lead { font-size: 1.25rem; line-height: 1.55; color: var(--earth); max-width: 44rem; }
  .cp-body { max-width: var(--max-w); margin: 0 auto; padding: 0 var(--s-lg) var(--s-xl); }
  .cp-section { padding: var(--s-lg) 0; border-top: 1px solid var(--divider); }
  .cp-section:first-child { border-top: none; }
  .cp-section h2 { font-family: var(--font-display); font-size: clamp(1.618rem, 3vw, 2.2rem); letter-spacing: -0.0382em; margin-bottom: var(--s-sm); }
  .cp-section h3 { font-family: var(--font-body); font-size: 1.125rem; font-weight: 700; margin: var(--s-md) 0 var(--s-2xs); }
  .cp-section p, .cp-section li { font-size: 1.0625rem; line-height: 1.65; color: var(--ink); max-width: 44rem; }
  .cp-section p + p { margin-top: var(--s-xs); }
  .cp-section ul { padding-left: 1.25rem; margin: var(--s-xs) 0; }
  .cp-section li { margin-bottom: 0.35rem; }
  .cp-pills { display: flex; flex-wrap: wrap; gap: 0.5rem; margin: var(--s-xs) 0 var(--s-sm); }
  .cp-pill { font-size: 0.9375rem; padding: 0.35rem 0.75rem; border: 1px solid var(--divider); background: var(--mist); color: var(--ink); }
  .cp-table { width: 100%; max-width: 44rem; border-collapse: collapse; margin: var(--s-xs) 0; font-size: 1rem; }
  .cp-table th, .cp-table td { text-align: left; padding: 0.7rem 0.5rem; border-bottom: 1px solid var(--divider); }
  .cp-table th { font-size: var(--t-xs); letter-spacing: 0.12em; text-transform: uppercase; color: var(--earth); font-weight: 400; }
  .cp-table td.num { text-align: right; font-weight: 700; white-space: nowrap; }
  .cp-note { font-size: 0.9375rem !important; color: var(--earth) !important; }
  .cp-callout { border-left: 3px solid var(--rose-deep); background: var(--mist); padding: var(--s-sm) var(--s-md); margin: var(--s-sm) 0; max-width: 44rem; }
  .cp-draft { border: 1px dashed var(--rose-deep); background: #FFF5F8; padding: var(--s-sm) var(--s-md); margin-bottom: var(--s-md); font-size: 0.9375rem; max-width: 44rem; }
  .cp-people { display: grid; grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr)); gap: var(--s-md); margin-top: var(--s-sm); }
  .cp-person { text-decoration: none; color: var(--ink); }
  .cp-person img { width: 100%; aspect-ratio: 4 / 5; object-fit: cover; display: block; margin-bottom: 0.5rem; }
  .cp-person-name { font-family: var(--font-display); font-size: 1.25rem; }
  .cp-person-meta { font-size: 0.875rem; color: var(--earth); }
  .cp-cta { background: var(--ink); color: var(--paper); text-align: center; padding: var(--s-xl) var(--s-lg); }
  .cp-cta h2 { font-family: var(--font-display); font-size: clamp(1.618rem, 3.5vw, 2.618rem); color: var(--paper); margin: 0 auto var(--s-sm); }
  .cp-cta p { color: var(--paper); opacity: 0.85; margin: 0 auto var(--s-md); }
  .cp-cta-actions { display: flex; gap: var(--s-sm); justify-content: center; flex-wrap: wrap; }
  .cp-cta .btn-outline { color: var(--paper); border-color: var(--paper); }
  .cp-faq dt { font-weight: 700; font-size: 1.125rem; margin-top: var(--s-md); max-width: 44rem; }
  .cp-faq dd { margin: 0.4rem 0 0; font-size: 1.0625rem; line-height: 1.65; max-width: 44rem; }
  @media (max-width: 42.36rem) {
    .cp-hero { padding: var(--s-lg) var(--s-md) var(--s-md); }
    .cp-body { padding: 0 var(--s-md) var(--s-lg); }
  }
`;

export default function ContentPage({ eyebrow, title, lead, children, cta = true }) {
  return (
    <div>
      <style>{styles}</style>
      <Nav />
      <main>
        <header className="cp-hero">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1>{title}</h1>
          {lead && <p className="cp-lead">{lead}</p>}
        </header>
        <div className="cp-body">{children}</div>
        {cta && (
          <section className="cp-cta">
            <h2>Ready when you are.</h2>
            <p>Tell us a little about what you&apos;re looking for. We reply {SITE.replyPromise}.</p>
            <div className="cp-cta-actions">
              <a className="btn-rose" href={INTAKE_FORM} target="_blank" rel="noopener noreferrer">Get Started</a>
              <Link className="btn-outline" href="/therapists">Browse Therapists</Link>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}

export function Section({ title, children, id }) {
  return (
    <section className="cp-section" id={id}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}

export function Pills({ items }) {
  return <div className="cp-pills">{items.map((i) => <span key={i} className="cp-pill">{i}</span>)}</div>;
}

export function People({ people }) {
  return (
    <div className="cp-people">
      {people.map((t) => (
        <Link key={t.slug} href={`/therapists/${t.slug}`} className="cp-person">
          <img src={t.photo} alt={`${t.name}, ${t.credentials}`} loading="lazy" />
          <p className="cp-person-name">{t.name}</p>
          <p className="cp-person-meta">{t.credentials} · {t.ages.split("·")[0].trim()}</p>
        </Link>
      ))}
    </div>
  );
}
