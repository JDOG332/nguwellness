"use client";
import TherapistProfile from "../TherapistProfile";

const DATA = {
  "slug": "kelley-boole",
  "name": "Kelley Boole",
  "firstName": "Kelley",
  "credentials": "LSW",
  "pronouns": "she / her / hers",
  "photo": "/images/therapists/Kelley_Boole.jpeg",
  "color": "#B08A72",
  "colorDark": "#8A6A58",
  "colorLight": "#C8A890",
  "colorTint": "#F8F3EF",
  "colorBorder": "#D8C8B8",
  "status": "accepting",
  "badges": ["11 Yrs", "Crisis Trained", "Certified Foster Care Assessor", "Rape Crisis Counselor"],
  "formats": ["In-Person", "Telehealth"],
  "locationDetail": "In-person: 20525 Center Ridge Rd., Suite 604, Rocky River, OH 44116 · Telehealth statewide",
  "ages": "Teens 13+ through Adults & Elders (65+)",
  "faith": false,
  "quote": "I believe in a collaborative approach where we work as a team. With empathy and honesty, I'll listen as you tap into your inner strengths so you can grow and make positive changes for a healthy and happy life.",
  "calloutQuote": "I take a strength-based approach and will help you uncover your inner resilience and tools to face challenges. With empathy and honesty, I'll listen to your story and work with you to create practical steps toward the meaningful change you deserve.",
  "whoHelps": [
    {"s": "Teens 13+ and adults feeling overwhelmed by anxiety or depression", "t": "who need practical tools and a safe, non-judgmental space to rebuild stability."},
    {"s": "People struggling with relationships", "t": "who want to understand patterns, set boundaries, and build more fulfilling connections."},
    {"s": "People coping with addiction or substance use", "t": "including dual diagnosis. Kelley has extensive experience with recovery and intensive outpatient work."},
    {"s": "People navigating grief, loss, or major life transitions", "t": "who need steady, empathetic support through difficult changes."},
    {"s": "People who feel emotionally stuck or disconnected", "t": "and want to rediscover their resilience and build confidence."},
    {"s": "Couples and families", "t": "working through communication challenges, conflict, or transitions together."}
  ],
  "specialtiesFull": [
    "Anxiety", "Depression", "Relationship Issues", "Addiction",
    "Substance Use & Dual Diagnosis", "Alcohol Use", "Self-Esteem",
    "Stress Management", "Grief & Loss", "Coping Skills",
    "Life Transitions", "Mood Disorders", "Bipolar Disorder",
    "Trauma & PTSD", "ADHD", "OCD", "Anger Management",
    "Social Anxiety", "Work Stress", "Academic Challenges",
    "Adjustment Disorders", "Crisis Intervention"
  ],
  "approachText": "Kelley's therapeutic style is warm, down-to-earth, and strengths-based. She integrates a trauma-informed, sex-positive, and body-positive perspective. Her diverse background includes facilitating intensive outpatient groups for substance use recovery, providing crisis intervention as part of a mobile response unit, and conducting psychosocial assessments. She helps clients identify patterns, develop coping strategies, and move toward clarity and growth.",
  "modalities": [
    {"abbr": "CBT", "name": "Cognitive Behavioral Therapy", "desc": "Identifying and changing unhelpful thought patterns and behaviors."},
    {"abbr": "DBT", "name": "Dialectical Behavior Therapy", "desc": "Skills for managing emotions, improving relationships, and coping with stress."},
    {"abbr": "ACT", "name": "Acceptance & Commitment Therapy", "desc": "Accepting difficult experiences and committing to actions aligned with your values."},
    {"abbr": "MI", "name": "Motivational Interviewing", "desc": "Finding your own internal motivation for meaningful change."},
    {"abbr": "SFBT", "name": "Solution-Focused Brief Therapy", "desc": "Focusing on solutions and building on your existing strengths."},
    {"abbr": "REBT", "name": "Rational Emotive Behavior Therapy", "desc": "Challenging irrational beliefs that drive emotional distress."},
    {"abbr": "NAR", "name": "Narrative Therapy", "desc": "Separates the person from the problem. Helps reauthor personal stories."},
    {"abbr": "FS", "name": "Family Systems", "desc": "Understanding and improving dynamics within the family unit."},
    {"abbr": "SBT", "name": "Strengths-Based Therapy", "desc": "Identifying and building upon your inherent strengths and resilience."},
    {"abbr": "PD", "name": "Psychodynamic Therapy", "desc": "Exploring deeper patterns and unconscious processes that shape current behavior."}
  ],
  "expectations": [
    {"s": "First sessions:", "t": "Kelley creates a space where you can show up exactly as you are. No need to have anything figured out. She listens, learns your story, and collaboratively sets goals."},
    {"s": "Ongoing work:", "t": "Discovering your inner resilience and developing practical coping skills. You'll explore feelings, build confidence, and make the changes you want in your life."},
    {"s": "Kelley's style:", "t": "Empathetic, relatable, kind, and down-to-earth. Clients feel seen and supported as they explore challenges and discover their inner strengths. She brings honest feedback with genuine warmth."},
    {"s": "Session length:", "t": "Standard 50-minute sessions. $125 self-pay rate; most insurance clients pay only a copay."},
    {"s": "Session format:", "t": "Individual, couples, and family therapy. In-person at Rocky River or secure telehealth across Ohio. Saturday hours available."}
  ],
  "faithText": "",
  "credentialDetails": [
    {"s": "License:", "t": "LSW (Licensed Social Worker), Ohio S.2411046"},
    {"s": "Education:", "t": "Master's Degree in Social Work, Cleveland State University (2024). Bachelor's Degree, Ohio University (2015)."},
    {"s": "Certifications:", "t": "Certified Adoption and Foster Care Assessor. Rape Crisis Counselor. Training in CBT, DBT, Motivational Interviewing, and trauma-informed care."},
    {"s": "Experience:", "t": "11 years. Intensive outpatient group facilitation for substance use recovery. Crisis intervention on a mobile response unit. Psychosocial assessments."},
    {"s": "Verified:", "t": "Psychology Today Verified with 1 endorsement. Listed on Zencare."}
  ],
  "schedule": {
    "available": [
      {"day": "Monday", "time": "1:00 PM – 4:00 PM, 6:00 PM – 8:00 PM"},
      {"day": "Tuesday", "time": "10:00 AM – 9:00 PM"},
      {"day": "Wednesday", "time": "10:00 AM – 8:00 PM"},
      {"day": "Thursday", "time": "10:00 AM – 3:00 PM"},
      {"day": "Friday", "time": "9:00 AM – 3:00 PM"},
      {"day": "Saturday", "time": "9:00 AM – 1:00 PM"}
    ],
    "unavailable": ["Sunday"]
  }
};

export default function KelleyBoole() {
  return <TherapistProfile data={DATA} />;
}
