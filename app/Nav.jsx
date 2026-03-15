"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Nav({ hideLogo = false }) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (path) => { setMenuOpen(false); router.push(path); };

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

        @media (max-width: 61.8rem) {
          .nav-hamburger { display: block; }
          .nav-links { display: none !important; }
        }
      `}</style>
      <nav className="nav">
        {!hideLogo && (
          <a className="nav-logo" onClick={() => go("/")}>
            <img src="/images/NGU Wellness -lotus only.png" alt="NGU Wellness" />
            <span className="nav-logo-text">NGU Wellness</span>
          </a>
        )}
        {hideLogo && <div />}
        <div className="nav-links">
          <button className="nav-link" onClick={() => go("/about")}>About</button>
          <button className="nav-link" onClick={() => go("/services")}>Services</button>
          <button className="nav-link" onClick={() => go("/therapists")}>Therapists</button>
          <button className="nav-link" onClick={() => go("/contact")}>Contact</button>
          <button className="nav-cta" onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLScRT05N8MswuXUXtYCaD-m6j4XUWKKDlTYuNSaLS6Pfy_8f6w/viewform?usp=header", "_blank")}>Get Started</button>
        </div>
        <button className={`nav-hamburger${menuOpen ? " open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </nav>
      <div className={`nav-mobile-menu${menuOpen ? " open" : ""}`}>
        <button className="nav-link" onClick={() => go("/about")}>About</button>
        <button className="nav-link" onClick={() => go("/services")}>Services</button>
        <button className="nav-link" onClick={() => go("/therapists")}>Therapists</button>
        <button className="nav-link" onClick={() => go("/contact")}>Contact</button>
        <button className="nav-cta" onClick={() => { setMenuOpen(false); window.open("https://docs.google.com/forms/d/e/1FAIpQLScRT05N8MswuXUXtYCaD-m6j4XUWKKDlTYuNSaLS6Pfy_8f6w/viewform?usp=header", "_blank"); }}>Get Started</button>
      </div>
    </>
  );
}
