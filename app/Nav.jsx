"use client";
import { useRouter } from "next/navigation";

export default function Nav({ hideLogo = false }) {
  const router = useRouter();
  return (
    <nav className="nav">
      {!hideLogo && (
        <a className="nav-logo" onClick={() => router.push("/")}>
          <img src="/images/NGU Wellness -lotus only.png" alt="NGU Wellness" />
          <span className="nav-logo-text">NGU Wellness</span>
        </a>
      )}
      {hideLogo && <div />}
      <div className="nav-links">
        <button className="nav-link" onClick={() => router.push("/about")}>About</button>
        <button className="nav-link" onClick={() => router.push("/services")}>Services</button>
        <button className="nav-link" onClick={() => router.push("/therapists")}>Therapists</button>
        <button className="nav-link" onClick={() => router.push("/contact")}>Contact</button>
        <button className="nav-cta" onClick={() => window.open("https://therapyportal.com/p/nguwellness", "_blank")}>Get Started</button>
      </div>
    </nav>
  );
}
