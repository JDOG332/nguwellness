"use client";
import { useState } from "react";
import Link from "next/link";
import { INTAKE_FORM } from "../data/site";

const LINKS = [
  ["/about", "About"],
  ["/services", "Services"],
  ["/therapists", "Therapists"],
  ["/insurance", "Insurance & Fees"],
  ["/contact", "Contact"],
];

export default function Nav({ hideLogo = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <>
      <style>{`
        .nav-hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: var(--s-3xs);
          position: relative;
          width: 1.618rem;
          height: 1.618rem;
        }
        .nav-hamburger span {
          display: block;
          width: 100%;
          height: 0.125rem;
          background: var(--ink);
          position: absolute;
          left: 0;
          transition: all 0.382s var(--ease-phi);
        }
        .nav-hamburger span:nth-child(1) { top: 0.236rem; }
        .nav-hamburger span:nth-child(2) { top: 0.718rem; }
        .nav-hamburger span:nth-child(3) { top: 1.2rem; }
        .nav-hamburger.open span:nth-child(1) { top: 0.718rem; transform: rotate(45deg); }
        .nav-hamburger.open span:nth-child(2) { opacity: 0; }
        .nav-hamburger.open span:nth-child(3) { top: 0.718rem; transform: rotate(-45deg); }

        .nav-mobile-menu {
          display: none;
          flex-direction: column;
          align-items: center;
          gap: var(--s-md);
          padding: var(--s-md) var(--s-lg);
          background: var(--paper);
          border-bottom: 0.0618rem solid var(--divider);
        }
        .nav-mobile-menu.open { display: flex; }
        .nav-mobile-menu .nav-link {
          display: block !important;
          font-size: var(--t-base);
        }
        .nav-mobile-menu .nav-cta {
          font-size: var(--t-base);
          padding: var(--s-2xs) var(--s-md);
        }

        @media (max-width: 68rem) {
          .nav-hamburger { display: block; }
          .nav-links { display: none !important; }
        }
      `}</style>
      <nav className="nav" aria-label="Main">
        {!hideLogo && (
          <Link className="nav-logo" href="/" onClick={close}>
            <img src="/images/lotus-192.png" alt="" width="84" height="48" />
            <span className="nav-logo-text">NGU Wellness</span>
          </Link>
        )}
        {hideLogo && <div />}
        <div className="nav-links">
          {LINKS.map(([href, label]) => (
            <Link key={href} className="nav-link" href={href}>{label}</Link>
          ))}
          <a className="nav-cta" href={INTAKE_FORM} target="_blank" rel="noopener noreferrer">Get Started</a>
        </div>
        <button
          className={`nav-hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span /><span /><span />
        </button>
      </nav>
      <div id="mobile-menu" className={`nav-mobile-menu${menuOpen ? " open" : ""}`}>
        {LINKS.map(([href, label]) => (
          <Link key={href} className="nav-link" href={href} onClick={close}>{label}</Link>
        ))}
        <a className="nav-cta" href={INTAKE_FORM} target="_blank" rel="noopener noreferrer" onClick={close}>Get Started</a>
      </div>
    </>
  );
}
