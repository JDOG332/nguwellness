"use client";
import TherapistProfile from "../TherapistProfile";

const DATA = {
  "slug": "anna-espy",
  "name": "Anna Espy",
  "firstName": "Anna",
  "credentials": "LISW-S",
  "pronouns": "she / her",
  "photo": "/images/therapists/Anna_Espy.jpeg",
  "color": "#D4688A",
  "colorDark": "#A84E6E",
  "colorLight": "#E88DA6",
  "colorTint": "#FBF0F3",
  "colorBorder": "#E8C0CC",
  "status": "accepting",
  "badges": ["22 Yrs", "Supervisor", "Young Adult Specialist"],
  "formats": ["In-Person", "Telehealth"],
  "locationDetail": "In-person: 453 Patterson Rd., Suite A, Dayton, OH 45419 · Telehealth statewide",
  "ages": "Ages 16–65+  ·  Specializing in Young Adults (18–30)",
  "faith": false,
  "quote": "I became a therapist to help others realize their inherent worth, value, and potential through connection and guidance. Together, we'll explore who you are and who you want to become.",
  "calloutQuote": "The first ten or fifteen years of adulthood can bring some unique and complex challenges. I'm dedicated to creating a safe and non-judgmental environment where you can feel comfortable being yourself. I try to balance seriousness with humor, when appropriate.",
  "whoHelps": [
    {"s": "Young adults 18–30", "t": "navigating self-discovery, identity, independence, career uncertainty, and finding their purpose."},
    {"s": "Teens 16+ and adults of all ages", "t": "dealing with anxiety, depression, stress, and emotional overwhelm."},
    {"s": "People navigating relationships", "t": "including friendships, romantic relationships, and family dynamics."},
    {"s": "People facing life transitions", "t": "career changes, grief, chronic illness, or periods of uncertainty."},
    {"s": "Goal-oriented clients", "t": "who are willing to practice skills outside of sessions and invest in self-awareness and self-reflection."}
  ],
  "specialtiesFull": [
    "Anxiety", "Stress", "Depression", "Identity & Self-Discovery",
    "Career Uncertainty", "Relationship Issues", "Life Transitions",
    "Grief & Loss", "Self-Esteem", "Self-Harm", "Suicidal Ideation",
    "Trauma & PTSD", "Parenting", "Family Conflict", "School Issues",
    "Peer Relationships", "Coping Skills", "Chronic Illness & Pain",
    "Cancer", "Weight & Body Image", "Sleep & Nutrition",
    "Finding Purpose", "Independence"
  ],
  "approachText": "Anna draws from a diverse range of evidence-based therapies, tailoring her approach to each individual's needs. With over 22 years of experience and a Master's from Ohio State, she empowers clients with skills to enhance self-awareness, self-reflection, and resilience. She may also explore how factors like sleep, nutrition, exercise, and self-care impact mental health to help clients find more balance and fulfillment.",
  "modalities": [
    {"abbr": "CBT", "name": "Cognitive Behavioral Therapy", "desc": "Identifying and changing unhelpful thought patterns and behaviors."},
    {"abbr": "SFBT", "name": "Solution-Focused Brief Therapy", "desc": "Focusing on solutions and building on your existing strengths."},
    {"abbr": "DBT", "name": "Dialectical Behavior Therapy", "desc": "Developing skills for managing emotions, improving relationships, and coping with stress."},
    {"abbr": "MI", "name": "Motivational Interviewing", "desc": "Finding your own motivation for change."},
    {"abbr": "ACT", "name": "Acceptance & Commitment Therapy", "desc": "Accepting difficult experiences and committing to actions aligned with your values."},
    {"abbr": "SBT", "name": "Strengths-Based Therapy", "desc": "Identifying and building upon your inherent strengths."},
    {"abbr": "TF", "name": "Trauma-Focused Therapy", "desc": "Evidence-based approaches for processing trauma and PTSD."},
    {"abbr": "MBCT", "name": "Mindfulness-Based Therapy", "desc": "Cultivating present-moment awareness to reduce stress and improve well-being."}
  ],
  "expectations": [
    {"s": "First sessions:", "t": "Anna takes time to understand your specific needs and challenges. She creates a safe, non-judgmental space where you can be yourself from the start."},
    {"s": "Ongoing work:", "t": "Sessions are tailored to your needs, equipping you with skills to boost resilience, self-awareness, and overall well-being. Anna will ask you to practice skills between sessions."},
    {"s": "Anna's style:", "t": "Friendly and laid-back, with a good sense of when to use humor. Clients say she's a great listener who balances seriousness with lightness. Professional yet approachable."},
    {"s": "Session length:", "t": "Standard 50-minute individual sessions."},
    {"s": "Session format:", "t": "Individual therapy. In-person at the Dayton office, secure telehealth video across Ohio, or a hybrid of both."}
  ],
  "faithText": "",
  "credentialDetails": [
    {"s": "License:", "t": "LISW-S (Licensed Independent Social Worker – Supervisor), Ohio I.0700003-SUPV"},
    {"s": "Education:", "t": "Master's Degree in Social Work, The Ohio State University, 2004."},
    {"s": "Experience:", "t": "22+ years in the mental health field spanning clinical work, supervision, and supporting young adults through emerging adulthood."},
    {"s": "Verified:", "t": "Psychology Today Verified with 5 professional endorsements."}
  ],
  "schedule": {
    "available": [
      {"day": "Monday", "time": "8:00 AM – 11:00 AM"},
      {"day": "Tuesday", "time": "11:00 AM – 7:00 PM"},
      {"day": "Thursday", "time": "10:00 AM – 6:00 PM"},
      {"day": "Friday", "time": "8:00 AM – 11:00 AM"}
    ],
    "unavailable": ["Wednesday", "Weekends"]
  }
};

export default function AnnaEspy() {
  return <TherapistProfile data={DATA} />;
}
