import Link from "next/link";
import ContentPage, { Section, Pills } from "../components/ContentPage";
import { COMMERCIAL, MARKETPLACE, MEDICAID, MEDICARE_ADVANTAGE, EAP, SELF_PAY, LATE_CANCEL_FEE } from "../../data/insurance";

export const metadata = {
  title: "Insurance & Fees",
  description: "Insurance plans NGU Wellness accepts, including Ohio Medicaid, Medicare Advantage and EAPs, plus self-pay rates for therapy in Dayton, Rocky River and Ohio telehealth.",
  alternates: { canonical: "/insurance" },
};

export default function InsurancePage() {
  return (
    <ContentPage
      eyebrow="Insurance & Fees"
      title="What therapy will cost."
      lead="We accept most major insurance and every Ohio Medicaid plan, and we check your benefits for free before your first session. If you'd rather self-pay, our rates are below."
    >
      <Section title="Insurance we accept">
        <h3>Commercial plans</h3>
        <Pills items={COMMERCIAL} />
        <h3>Marketplace plans</h3>
        <Pills items={MARKETPLACE} />
        <h3>Ohio Medicaid</h3>
        <Pills items={MEDICAID} />
        <h3>Medicare Advantage</h3>
        <Pills items={MEDICARE_ADVANTAGE} />
        <h3>Employee Assistance Programs (EAPs)</h3>
        <Pills items={EAP} />
        <p className="cp-note">Coverage depends on your plan, and a few plans are only available with certain therapists; each therapist's profile shows what they take. We'll confirm your copay and deductible before you start. Don't see your plan? Ask us. We may still be able to help, or you can use out-of-network benefits.</p>
      </Section>

      <Section title="Medicare">
        <p>We accept the Medicare Advantage plans listed above. We are not in network with Original Medicare (Part B). If you have Original Medicare, you can see us as a self-pay client and file a claim with Medicare yourself using form CMS-1490S.</p>
      </Section>

      <Section title="Self-pay rates">
        <table className="cp-table">
          <thead><tr><th>Service</th><th>Code</th><th style={{ textAlign: "right" }}>Rate</th></tr></thead>
          <tbody>
            {SELF_PAY.map((r) => (
              <tr key={r.code}><td>{r.service}</td><td>{r.code}</td><td className="num">${r.price}</td></tr>
            ))}
            <tr><td>Late cancellation or missed appointment</td><td>–</td><td className="num">${LATE_CANCEL_FEE}</td></tr>
          </tbody>
        </table>
        <p className="cp-note">Couples and family sessions are self-pay only; we don't bill them to insurance.</p>
        <div className="cp-callout">
          <p>If you don't have insurance or choose not to use it, you have the right to a Good Faith Estimate of your costs. <Link href="/good-faith-estimate">Learn about your right to a Good Faith Estimate</Link>.</p>
        </div>
      </Section>

      <Section title="Paying for sessions">
        <ul>
          <li>Copays, deductibles, and self-pay fees are due on the day of your session.</li>
          <li>We accept HSA, FSA, and HRA cards.</li>
          <li>Out-of-network plans: you may be able to file for reimbursement yourself.</li>
          <li>Please give 24 hours' notice to cancel or reschedule; late cancellations and missed appointments are ${LATE_CANCEL_FEE}.</li>
        </ul>
      </Section>
    </ContentPage>
  );
}
