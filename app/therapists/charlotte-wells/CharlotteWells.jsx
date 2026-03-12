"use client";
import TherapistProfile from "../TherapistProfile";

const DATA = {
  "slug": "charlotte-wells",
  "name": "Charlotte Wells",
  "firstName": "Charlotte",
  "credentials": "LISW",
  "pronouns": "she / her",
  "photo": "/images/therapists/Charlotte_Wells.jpeg",
  "color": "#4A5568",
  "colorDark": "#2D3748",
  "colorLight": "#718096",
  "colorTint": "#F0F1F3",
  "colorBorder": "#C0C4CC",
  "status": "accepting",
  "badges": ["LISW", "Holistic Approach", "LGBTQ+ Allied"],
  "formats": ["In-Person", "Telehealth"],
  "locationDetail": "In-person: 453 Patterson Rd., Suite A, Dayton, OH 45419 · Telehealth statewide",
  "ages": "Adults 20–65  ·  Primarily works with women (not exclusively)",
  "faith": true,
  "quote": "I provide a safe and compassionate space and would be honored to sit with you and hear your story. Collaboration is key in the therapeutic process.",
  "calloutQuote": "I approach therapy first as a person and second as a therapist. Through my own experience as a client I recognize the importance of a calm and relaxed space to address vulnerable topics.",
  "whoHelps": [
    {"s": "Adult women (primarily, not exclusively) ages 20–65", "t": "navigating life transitions, relationship dynamics, and self-care."},
    {"s": "People dealing with anxiety and depression", "t": "who need practical coping skills and a calm, non-judgmental space."},
    {"s": "People working through grief", "t": "divorce, loss, or major life changes."},
    {"s": "People struggling with codependency and boundaries", "t": "in relationships with parents, friends, and partners."},
    {"s": "Both experienced therapy clients and first-timers", "t": "— Charlotte has received positive feedback from both."}
  ],
  "specialtiesFull": [
    "Anxiety", "Depression", "Grief & Loss", "Women's Issues",
    "Codependency", "Boundaries", "Self-Esteem", "Divorce",
    "Life Transitions", "Stress", "Trauma & PTSD", "ADHD",
    "Coping Skills", "Relationship Issues", "Self-Care"
  ],
  "approachText": "Charlotte's approach is holistic, addressing mental, physical, and spiritual health. She is passionate about helping adults learn to navigate life transitions, teaching healthy coping skills, prioritizing effective self-care, and navigating changing relationship dynamics. She tailors her approach to each individual, drawing from attachment-based, compassion-focused, and culturally sensitive frameworks.",
  "modalities": [
    {"abbr": "CBT", "name": "Cognitive Behavioral Therapy", "desc": "Identifying and changing unhelpful thought patterns driving anxiety and depression."},
    {"abbr": "SFBT", "name": "Solution-Focused Brief Therapy", "desc": "Focusing on solutions and building on your existing strengths."},
    {"abbr": "MI", "name": "Motivational Interviewing", "desc": "Finding your own internal motivation for meaningful change."},
    {"abbr": "ATT", "name": "Attachment-Based Therapy", "desc": "Understanding how early relationships shape current patterns in connections and boundaries."},
    {"abbr": "CFT", "name": "Compassion-Focused Therapy", "desc": "Developing self-compassion to counter shame, self-criticism, and emotional distress."},
    {"abbr": "PC", "name": "Person-Centered Therapy", "desc": "Creating a warm, empathetic environment where you guide the direction of your growth."},
    {"abbr": "SBT", "name": "Strengths-Based Therapy", "desc": "Identifying and building upon your inherent strengths."},
    {"abbr": "TF", "name": "Trauma-Focused Therapy", "desc": "Evidence-based approaches for processing trauma and its lasting effects."}
  ],
  "expectations": [
    {"s": "First sessions:", "t": "Charlotte creates a calm, relaxed space from the start. She collaborates with you to identify goals and objectives appropriate for your individual needs."},
    {"s": "Ongoing work:", "t": "Holistic sessions addressing mental, physical, and spiritual wellness. You'll learn healthy coping skills, effective self-care, and how to navigate changing relationship dynamics."},
    {"s": "Charlotte's style:", "t": "Safe, compassionate, and collaborative. She approaches therapy first as a person and second as a therapist — honoring your story with genuine warmth."},
    {"s": "Session length:", "t": "Standard 50-minute individual sessions."},
    {"s": "Session format:", "t": "Individual therapy. In-person at the Dayton office or secure telehealth video across Ohio."}
  ],
  "faithText": "Charlotte's holistic approach addresses mental, physical, and spiritual health. She is comfortable exploring how faith, spirituality, and personal values support your healing process. This is always client-directed and never assumed.",
  "credentialDetails": [
    {"s": "License:", "t": "LISW (Licensed Independent Social Worker), Ohio"},
    {"s": "Education:", "t": "Master of Arts in Social Work, Greater Miami Valley Joint MASW Program (Miami University of Ohio & Wright State University)."},
    {"s": "Additional Training:", "t": "Certificate from Healing Our Core Issues Institute (2020)."},
    {"s": "Background:", "t": "Case management services, school-based counseling, and outpatient therapy across a variety of settings."}
  ],
  "schedule": {
    "available": [
      {"day": "Friday", "time": "11:00 AM – 6:00 PM"}
    ],
    "unavailable": ["Monday", "Tuesday", "Wednesday", "Thursday", "Weekends"]
  }
};

export default function CharlotteWells() {
  return <TherapistProfile data={DATA} />;
}
