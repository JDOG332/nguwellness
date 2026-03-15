"use client";
import TherapistProfile from "../TherapistProfile";

const DATA = {
  "slug": "nicole-walton",
  "name": "Dr. Nicole Walton",
  "firstName": "Nicole",
  "credentials": "PhD, LISW-S, LPC",
  "pronouns": "she / her",
  "photo": "/images/therapists/Nicole_Walton.jpg",
  "color": "#2A7A48",
  "colorDark": "#1A5A32",
  "colorLight": "#4A9A68",
  "colorTint": "#EFF8F2",
  "colorBorder": "#B0D4BE",
  "status": "accepting",
  "badges": ["Founder & Owner", "20+ Yrs", "PhD", "Clinical Supervisor"],
  "formats": ["In-Person", "Telehealth"],
  "locationDetail": "In-person: 453 Patterson Rd., Suite A, Dayton, OH 45419 · Telehealth statewide",
  "ages": "Teens · Adults · Elders 65+",
  "faith": false,
  "quote": "I believe therapy can be a beneficial tool to assist those who are hurting, dissatisfied, or filled with uncertainty. I envision a world where all people can experience healing and transformation.",
  "calloutQuote": "Sometimes we find ourselves struggling in our relationships. We may have persistent sadness or worries that get in the way of life. We may have losses that are too difficult to process on our own. Or we may feel our life has just gotten off track. There are many reasons to seek therapy. I can help.",
  "whoHelps": [
    {"s": "Adults dealing with depression, anxiety, or persistent worry", "t": "who want an experienced clinician with a warm, collaborative approach."},
    {"s": "People processing trauma and PTSD", "t": "including complex trauma, abuse, and unresolved painful experiences."},
    {"s": "Couples", "t": "working through communication breakdowns, infidelity, premarital concerns, or major life transitions together."},
    {"s": "Individuals navigating grief and loss", "t": "including divorce, death, career loss, and other life-altering changes."},
    {"s": "People struggling with addiction or substance use", "t": "including alcohol, drugs, gambling, and dual diagnosis concerns."},
    {"s": "Families in conflict", "t": "seeking to improve communication, resolve tension, and strengthen relationships."},
    {"s": "Teens and older adults", "t": "dealing with mood disorders, identity, stress, or life transitions at any stage."}
  ],
  "specialtiesFull": [
    "Depression", "Anxiety", "Relationship Issues", "Trauma & PTSD",
    "Grief & Loss", "Life Transitions", "Couples Therapy", "Marital & Premarital",
    "Infidelity", "Divorce", "Family Conflict", "Parenting",
    "Addiction", "Substance Use", "Alcohol Use", "Gambling",
    "Dual Diagnosis", "Bipolar Disorder", "Mood Disorders", "OCD",
    "Stress & Burnout", "Self-Esteem", "Codependency", "Coping Skills",
    "Peer Relationships", "Spirituality", "Women's Issues",
    "Weight Management", "Obesity", "Identity"
  ],
  "approachText": "Nicole draws from 20+ years of clinical experience spanning community mental health crisis work, pediatric medical social work, and outpatient therapy. Her work is informed by continued education, participation in research, and leadership in the field. She collaborates with each client to develop treatment goals and works from a wellness perspective, meeting people exactly where they are and tailoring her approach to what serves them best.",
  "modalities": [
    {"abbr": "CBT", "name": "Cognitive Behavioral Therapy", "desc": "Restructures thought patterns driving anxiety, depression, and low mood."},
    {"abbr": "FAM", "name": "Family Systems Therapy", "desc": "Examines relationship patterns and family dynamics to understand how they shape individual behavior."},
    {"abbr": "MI", "name": "Motivational Interviewing", "desc": "Clarifies personal values and builds internal motivation for lasting change."},
    {"abbr": "NAR", "name": "Narrative Therapy", "desc": "Separates the person from the problem and helps reauthor personal stories."},
    {"abbr": "PC", "name": "Person-Centered Therapy", "desc": "Creates a nonjudgmental, warm space where the client leads their own healing process."},
    {"abbr": "STR", "name": "Strength-Based Therapy", "desc": "Identifies and builds on existing strengths and resources for sustainable growth."},
    {"abbr": "ACT", "name": "Acceptance & Commitment Therapy", "desc": "Builds psychological flexibility to move toward what matters most."},
    {"abbr": "HUM", "name": "Humanistic Therapy", "desc": "Centers the whole person: values, potential, and the innate drive toward growth."},
    {"abbr": "SOM", "name": "Somatic Approaches", "desc": "Works with the body's role in storing and releasing stress and trauma."},
    {"abbr": "SUP", "name": "Clinical Supervision", "desc": "Licensed supervisor (LISW-S) providing clinical oversight, training, and mentorship to developing therapists."}
  ],
  "expectations": [
    {"s": "First session:", "t": "A thorough assessment. Nicole takes time to understand your history, your goals, and what kind of support would help most. Together you'll develop treatment goals to guide the process."},
    {"s": "Ongoing work:", "t": "Warm, collaborative sessions focused on building insight, learning new coping skills, improving relationships, and making real progress between sessions."},
    {"s": "Nicole's style:", "t": "Nonjudgmental, warm, and wellness-oriented. Twenty years of diverse clinical experience mean she adapts fluidly to what each client needs."},
    {"s": "Session length:", "t": "Standard 50-minute individual sessions. Intake may be slightly longer."},
    {"s": "Session format:", "t": "Individual, couples, and family therapy. In-person at the Dayton office or secure telehealth video across Ohio. Evening availability."}
  ],
  "faithText": "",
  "credentialDetails": [
    {"s": "License:", "t": "LISW-S (Licensed Independent Social Worker – Supervisor), Ohio I.0700277-SUPV · LPC (Licensed Professional Counselor)"},
    {"s": "Education:", "t": "Master of Social Work, The Ohio State University (2005). Doctor of Philosophy in Counselor Education & Supervision, Regent University (2023). Dissertation: Faculty Experiences with the CACREP Accreditation Process: A Qualitative Study."},
    {"s": "Clinical Experience:", "t": "20+ years spanning community mental health crisis work, pediatric medical social work, and outpatient therapy with individuals, couples, and families."},
    {"s": "Leadership:", "t": "Founder, Owner & Clinical Director of NGU Wellness (est. 2021). Clinical supervisor with over 1,000 hours of direct supervision, providing oversight and mentorship to developing therapists across both locations."},
    {"s": "Additional:", "t": "Continued education, participation in research, teaching experience, and recognized leader in the behavioral health field."}
  ],
  "schedule": {
    "available": [
      {"day": "Monday", "time": "1:00 PM – 7:15 PM · In-Person or Telehealth · Dayton"},
      {"day": "Tuesday", "time": "5:15 PM – 7:15 PM · Telehealth Only"},
      {"day": "Wednesday", "time": "12:00 PM – 3:00 PM · Telehealth Only"},
      {"day": "Thursday", "time": "9:00 AM – 3:00 PM · In-Person or Telehealth · Dayton"},
      {"day": "Friday", "time": "9:00 AM – 3:00 PM · In-Person or Telehealth · Dayton"}
    ],
    "unavailable": ["Weekends"]
  }
};

export default function NicoleWalton() {
  return <TherapistProfile data={DATA} />;
}
