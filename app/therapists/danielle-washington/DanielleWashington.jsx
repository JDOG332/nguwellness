"use client";
import TherapistProfile from "../TherapistProfile";

const DATA = {
  "slug": "danielle-washington",
  "name": "Danielle Washington",
  "firstName": "Danielle",
  "credentials": "LISW-S",
  "pronouns": "she / her",
  "photo": "/images/therapists/Danielle_Washington.jpeg",
  "color": "#7A6878",
  "colorDark": "#5A4E58",
  "colorLight": "#9A889A",
  "colorTint": "#F5F0F4",
  "colorBorder": "#C8B8C4",
  "status": "accepting",
  "badges": ["25 Yrs", "Supervisor", "Two Master's Degrees", "BIPOC Affirming"],
  "formats": ["In-Person", "Telehealth"],
  "locationDetail": "In-person: 453 Patterson Rd., Suite A, Dayton, OH 45419 · Telehealth statewide",
  "ages": "Adults 18+",
  "faith": false,
  "quote": "I provide a safe, supportive, and open setting to listen and to help you get on the path where you want to be. We're partners in the development and success of your well-being.",
  "calloutQuote": "I am very well-educated and rely on my education and training. But I also rely on my many life experiences and my diverse career experiences as a helping professional for 25+ years to problem solve and meet my clients where they're at.",
  "whoHelps": [
    {"s": "Adults 18+ with depression, anxiety, or persistent sadness", "t": "who want practical coping skills and stress management tools."},
    {"s": "People struggling with relationships", "t": "family conflict, codependency, or communication breakdowns."},
    {"s": "People navigating grief, loss, or major life transitions", "t": "who need steady, empathetic support."},
    {"s": "People dealing with addiction or substance use", "t": "including dual diagnosis and alcohol/drug concerns."},
    {"s": "People who want to make positive changes in their life", "t": "and believe all challenges can be overcome with the proper attitude and support."}
  ],
  "specialtiesFull": [
    "Depression", "Stress", "Women's Issues", "Anxiety",
    "Addiction", "Alcohol Use", "Drug Abuse", "Substance Use",
    "Dual Diagnosis", "Codependency", "Coping Skills",
    "Emotional Disturbance", "Family Conflict", "Grief & Loss",
    "Life Transitions", "Mood Disorders", "Relationship Issues",
    "Conflict Resolution"
  ],
  "approachText": "Danielle has worked as a helping professional for more than 25 years. Her diverse background includes skill development for persons with intellectual disabilities, community health care for underserved populations, hospital discharge planning, resource coordination for persons living with HIV/AIDS, and supporting individuals experiencing homelessness. She uses Narrative, Motivational Interviewing, Solution-Focused, and strengths-based approaches, and is committed to culturally sensitive, BIPOC-affirming care.",
  "modalities": [
    {"abbr": "MI", "name": "Motivational Interviewing", "desc": "Finding your own internal motivation for meaningful, lasting change."},
    {"abbr": "SFBT", "name": "Solution-Focused Brief Therapy", "desc": "Focusing on solutions and building on your existing strengths."},
    {"abbr": "PC", "name": "Person-Centered Therapy", "desc": "Creating a warm, empathetic environment where you guide the direction of your growth."},
    {"abbr": "SBT", "name": "Strengths-Based Therapy", "desc": "Identifying and building upon your inherent strengths and resilience."},
    {"abbr": "CS", "name": "Culturally Sensitive Therapy", "desc": "Honoring your cultural background, identity, and lived experience as part of the healing process."}
  ],
  "expectations": [
    {"s": "First sessions:", "t": "Danielle creates a safe, supportive, and open setting. She listens attentively and works with you to identify your goals."},
    {"s": "Ongoing work:", "t": "Partners with you to develop coping skills and stress management tools you can eventually use on your own. She helps you work through challenges while building toward your goals."},
    {"s": "Danielle's style:", "t": "Trustworthy, open-minded, and a good listener. She draws on 25+ years of diverse experience and education to meet you where you are."},
    {"s": "Session length:", "t": "Standard 50-minute individual sessions."},
    {"s": "Session format:", "t": "Individual therapy. In-person at the Dayton office (Mon/Wed/Thu) or secure telehealth video across Ohio (all days). Evening hours available."}
  ],
  "faithText": "",
  "credentialDetails": [
    {"s": "License:", "t": "LISW-S (Licensed Independent Social Worker – Supervisor), Ohio I.1450751-SUPV"},
    {"s": "Education:", "t": "Master of Social Work, The Ohio State University (2011). Master of Rehabilitation Counseling, Wright State University (2018)."},
    {"s": "Experience:", "t": "25+ years as a helping professional: clinical work, case management, supervision, community health, and hospital settings."},
    {"s": "Verified:", "t": "Psychology Today Verified with 5 professional endorsements."}
  ],
  "schedule": {
    "available": [
      {"day": "Monday", "time": "4:30 PM – 7:30 PM"},
      {"day": "Tuesday", "time": "5:00 PM – 7:00 PM (Telehealth)"},
      {"day": "Wednesday", "time": "4:30 PM – 6:30 PM"},
      {"day": "Thursday", "time": "4:30 PM – 6:30 PM"}
    ],
    "unavailable": ["Friday", "Weekends"]
  }
};

export default function DanielleWashington() {
  return <TherapistProfile data={DATA} />;
}
