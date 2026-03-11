"use client";
import { useRouter } from "next/navigation";
import Nav from "./Nav";

const homeStyles = `
  .hero-logo {
    display: flex;
    justify-content: center;
    padding: var(--s-lg) var(--s-lg) var(--s-md);
    max-width: var(--max-w);
    margin: 0 auto;
  }

  .hero-logo img {
    width: 100%;
    max-width: 68.54rem;
    height: auto;
  }

  .hero-content {
    text-align: center;
    padding: var(--s-sm) var(--s-lg) var(--s-sm);
    max-width: var(--max-w);
    margin: 0 auto;
    animation: fadeIn 0.618s var(--ease-phi) both;
  }

  .hero-eyebrow {
    font-family: var(--font-accent);
    font-size: var(--t-md);
    font-style: italic;
    color: var(--earth);
    margin-top: var(--s-sm);
    opacity: var(--alpha-phi);
  }

  .hero h1 {
    font-size: clamp(11.09rem, 20vw, 75.99rem);
    font-weight: 900;
    line-height: 1.0;
    letter-spacing: -0.0382em;
    color: var(--ink);
  }

  .hero h1 em {
    font-style: italic;
    color: var(--rose);
    font-weight: 400;
    font-family: var(--font-display);
  }

  .hero-change {
    background: linear-gradient(90deg, var(--ink) 0%, var(--earth) 10%, var(--rose) 38.2%, var(--pink) 61.8%, var(--gold) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-style: normal;
    font-weight: 900;
  }

  /* ── PROMISE STRIP ── */
  .promise {
    background: var(--ink);
    padding: var(--s-md) var(--s-lg);
    text-align: center;
    animation: fadeIn 0.618s 0.236s var(--ease-phi) both;
  }

  .promise-accent {
    font-family: var(--font-accent);
    font-size: var(--t-base);
    font-style: italic;
    color: var(--gold);
    opacity: var(--alpha-phi);
    margin-bottom: var(--s-xs);
  }

  .promise h2 {
    font-family: var(--font-display);
    font-size: clamp(var(--t-xl), 4.236vw, var(--t-3xl));
    font-weight: 900;
    background: var(--brand-grad);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -0.0382em;
    margin-bottom: var(--s-xs);
  }

  .promise-sub {
    font-family: var(--font-accent);
    font-size: var(--t-base);
    font-style: italic;
    color: var(--paper);
    opacity: var(--alpha-phi);
    max-width: var(--max-w-narrow);
    margin: 0 auto;
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 61.8rem) {
    .hero-logo img { max-width: 26.18rem; }
    .hero h1 { font-size: clamp(6.854rem, 20vw, 46.97rem); }
    .promise { padding: var(--s-sm) var(--s-md); }
    .promise h2 { margin-bottom: var(--s-3xs); }
  }
`;

export default function HomePage() {
  const router = useRouter();

  return (
    <div>
      <style>{homeStyles}</style>

      {/* ── NEVER GIVE UP — FIRST THING YOU SEE ── */}
      <section className="promise">
        <h2>Never Give Up.</h2>
        <p className="promise-sub">
          Never give up hope. Never give up on life. Never Give Up Wellness.
        </p>
      </section>

      {/* ── TAGLINE ── */}
      <div className="hero-content">
        <h1>Real help. <span className="hero-change">Real change.</span></h1>
      </div>

      {/* ── LOGO ── */}
      <div className="hero-logo">
        <img src="/images/NGU Wellness.png" alt="NGU Wellness" />
      </div>

      {/* ── NAV ── */}
      <Nav hideLogo />

    </div>
  );
}
