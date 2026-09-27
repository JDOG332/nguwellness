// Frequently asked questions. Used by /faq (all) and /contact (the short list).
// Answers come from NGU's recorded policies; change a policy here and both pages follow.
import { SITE } from "./site";
import { LATE_CANCEL_FEE } from "./insurance";

export const FAQ = [
  {
    q: "How do I get started?",
    a: `Fill out our short Get Started form, or call or text ${SITE.phone}. We reply ${SITE.replyPromise} to talk through what you're looking for, check your insurance, and match you with a therapist.`,
    short: true,
  },
  {
    q: "Do you take my insurance?",
    a: "We accept most major commercial plans, all Ohio Medicaid managed care plans, several Medicare Advantage plans, and some Employee Assistance Programs. The full list is on our Insurance & Fees page. We check your benefits for free before your first session. We also suggest calling the number on the back of your card to confirm.",
    short: true,
  },
  {
    q: "What if I don't have insurance, or don't want to use it?",
    a: "You can self-pay. Our rates are listed on the Insurance & Fees page. If you are self-paying, you have the right to a Good Faith Estimate of your costs before your first session.",
  },
  {
    q: "Do you accept Medicare?",
    a: "We accept several Medicare Advantage plans (listed on Insurance & Fees). We are not in network with Original Medicare (Part B). If you have Original Medicare, you can see us as a self-pay client and file a claim with Medicare yourself using form CMS-1490S.",
  },
  {
    q: "Does insurance cover couples or family therapy?",
    a: "Couples and family sessions are self-pay only; we don't bill them to insurance. See Insurance & Fees for the rate.",
  },
  {
    q: "Can I do therapy by video?",
    a: "Yes. Every therapist offers secure telehealth to anyone located in Ohio. You'll need to be in Ohio during each session. Sessions run through our client portal and work on a phone, tablet, or computer.",
    short: true,
  },
  {
    q: "How long are sessions, and how often will I come?",
    a: `Sessions are ${SITE.sessionLength}. Your first appointment may run a little longer. Weekly sessions are usually recommended at first; over time many people move to every two or three weeks. You and your therapist will decide together.`,
    short: true,
  },
  {
    q: "What if I'm not sure which therapist is right for me?",
    a: "That's what we're here for. On the form, choose \"match me\" and we'll suggest therapists based on your concerns, schedule, location, and insurance.",
    short: true,
  },
  {
    q: "What if the therapist I want is full?",
    a: "Availability changes often. You can join that therapist's waiting list, or see the first available therapist who fits your needs. We'll tell you your options when we reply.",
  },
  {
    q: "What ages do you see?",
    a: "We see children from age 5, preteens, teens, adults, and older adults. Each therapist's profile lists the ages they work with.",
    short: true,
  },
  {
    q: "Do you prescribe medication?",
    a: "No. NGU Wellness provides therapy only and doesn't have a prescriber. If medication might help, we can share referral information for psychiatric care.",
    short: true,
  },
  {
    q: "What is your cancellation policy?",
    a: `Please give at least 24 hours' notice to cancel or reschedule. There is a $${LATE_CANCEL_FEE} fee for a late cancellation or a missed appointment.`,
  },
  {
    q: "How do I pay?",
    a: "Copays, deductibles, and self-pay fees are due on the day of your session. We accept HSA, FSA, and HRA cards. If you have out-of-network benefits, you may be able to file for reimbursement yourself.",
  },
  {
    q: "Will you text me?",
    a: `We only text clients who ask to be contacted by text. By calling or texting us at ${SITE.phone}, you agree to receive text messages. Reply STOP at any time to opt out. Appointment reminders come by email.`,
  },
  {
    q: "Is this an emergency service?",
    a: "No. Our phone line, email, and forms are not monitored around the clock. If you are in crisis, call or text 988 (Suicide & Crisis Lifeline) or call 911.",
    short: true,
  },
  {
    q: "How is my information protected?",
    a: "We follow HIPAA. Our Notice of Privacy Practices explains how your health information may be used and shared and what your rights are.",
  },
];
