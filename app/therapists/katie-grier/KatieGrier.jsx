"use client";
import TherapistProfile from "../TherapistProfile";

const DATA = {
  "slug": "katie-grier",
  "name": "Katie Grier",
  "firstName": "Katie",
  "credentials": "LSW",
  "pronouns": "she / her",
  "photo": "/images/therapists/Katie_Grier.jpeg",
  "color": "#C4967A",
  "colorDark": "#A47A60",
  "colorLight": "#D8B09A",
  "colorTint": "#FBF5F0",
  "colorBorder": "#E0CCC0",
  "status": "accepting",
  "badges": ["Children & Teens", "Family Therapy", "LGBTQ+ Allied"],
  "formats": ["In-Person", "Telehealth"],
  "locationDetail": "In-person: 453 Patterson Rd., Suite A, Dayton, OH 45419 · Telehealth statewide",
  "ages": "Ages 5+ through Adults  ·  Specializing in children, teens & young adults (18–35)",
  "faith": false,
  "quote": "When you or your child works with me, I'll be an attentive listener and work hard to understand what you or your child needs the most and how I can best meet those needs. You will feel safe and supported.",
  "calloutQuote": "The most important thing to know about me is that I listen attentively and ask questions to fully understand each of my client's unique situations. Once I fully understand my client's needs, I tailor my approaches to meet their individual needs.",
  "whoHelps": [
    {"s": "Children ages 5+", "t": "dealing with anxiety, depression, behavioral issues, school stress, and peer relationships."},
    {"s": "Preteens and teens", "t": "navigating identity, self-esteem, family conflict, self-harm, and those exploring or struggling to accept their sexuality."},
    {"s": "Young adults 18–35", "t": "working through anxiety, depression, grief, life transitions, and relationship challenges."},
    {"s": "Families", "t": "seeking support for parent-child relationships, communication, and family dynamics."},
    {"s": "LGBTQ+ youth and adults", "t": "who need an open-minded, affirming, and accepting therapist."}
  ],
  "specialtiesFull": [
    "Anxiety", "Depression", "LGBTQ+ Identity & Support",
    "Children (5+)", "Preteens", "Teens & Adolescents",
    "Self-Esteem", "Self-Harm", "Grief & Loss",
    "Family Conflict", "Family Relationships", "School Issues",
    "Peer Relationships", "Life Transitions", "Behavioral Issues",
    "ADHD", "OCD", "ODD (Oppositional Defiance)",
    "Body Image", "Addiction", "Coping Skills",
    "Trauma & PTSD", "Sexual Identity", "Transgender Support"
  ],
  "approachText": "Katie understands that each individual is different and tailors her approach accordingly, even for clients with similar issues. She allows you to guide the therapeutic process and gives you a safe space to figure out and work through anything you might be struggling with. She believes having support early in life is critical to long-term well-being — addressing issues early helps individuals change patterns of thinking and develop healthy skills more easily.",
  "modalities": [
    {"abbr": "CBT", "name": "Cognitive Behavioral Therapy", "desc": "Identifying and changing unhelpful thought patterns and behaviors."},
    {"abbr": "DBT", "name": "Dialectical Behavior Therapy", "desc": "Skills for managing emotions, improving relationships, and coping with stress."},
    {"abbr": "PC", "name": "Person-Centered Therapy", "desc": "Creating a warm, empathetic environment where you guide the direction of your growth."},
    {"abbr": "SBT", "name": "Strengths-Based Therapy", "desc": "Identifying and building upon your inherent strengths."},
    {"abbr": "FS", "name": "Family Systems Therapy", "desc": "Understanding and improving dynamics within the family unit."},
    {"abbr": "PT", "name": "Play Therapy & Sandplay", "desc": "Evidence-based therapeutic approaches for children using play, sand, and creative expression."},
    {"abbr": "ART", "name": "Therapy with Art", "desc": "Using creative expression to process emotions and build insight — especially effective with children and teens."},
    {"abbr": "NAR", "name": "Narrative Therapy", "desc": "Separates the person from the problem. Helps reauthor personal stories."},
    {"abbr": "MI", "name": "Motivational Interviewing", "desc": "Finding your own internal motivation for meaningful change."},
    {"abbr": "EFT", "name": "Emotionally Focused Therapy", "desc": "Strengthening emotional bonds and attachment in relationships."},
    {"abbr": "TF", "name": "Trauma-Focused Therapy", "desc": "Evidence-based approaches for processing trauma and its lasting effects."},
    {"abbr": "CFT", "name": "Compassion-Focused Therapy", "desc": "Developing self-compassion to counter shame and self-criticism."}
  ],
  "expectations": [
    {"s": "First sessions:", "t": "Katie listens attentively and strives to understand your unique situation and life experiences. Together you'll set goals and she'll tailor her approach to meet them."},
    {"s": "Ongoing work:", "t": "Developing skills, overcoming negative patterns of thinking, and navigating issues like anxiety, depression, school stress, family relationships, or identity concerns."},
    {"s": "Katie's style:", "t": "Incredibly attentive listener. Empathetic, thoughtful, kind, open-minded, dependable, and helpful. She fully accepts you for who you are as a person."},
    {"s": "Session length:", "t": "Standard 50-minute sessions."},
    {"s": "Session format:", "t": "Individual and family therapy. In-person at the Dayton office or secure telehealth video across Ohio. Evening hours available."}
  ],
  "faithText": "",
  "teamSays": {
    "text": "Katie is one of the most genuinely empathetic people you will ever meet — not just as a therapist, but as a human being. She has this rare ability to make children, teens, and adults feel truly seen and accepted from the very first session. Kids open up to her in ways that surprise even their parents. If you're looking for someone who will listen with their whole heart and meet you exactly where you are, Katie is that person.",
    "author": "Nicole Walton, PhD & Jeffrey Sellers — NGU Wellness Leadership"
  },
  "credentialDetails": [
    {"s": "License:", "t": "LSW (Licensed Social Worker), Ohio S.2309936"},
    {"s": "Education:", "t": "Bachelor's in Human Development & Family Science, The Ohio State University. Master of Social Work, The Ohio State University."},
    {"s": "Background:", "t": "Residential and outpatient care, private practice individual and family therapy, patient care coordinator at several area hospitals."},
    {"s": "Verified:", "t": "Psychology Today Verified with 7 professional endorsements."}
  ],
  "schedule": {
    "available": [
      {"day": "Monday", "time": "11:00 AM – 8:30 PM"},
      {"day": "Tuesday", "time": "11:30 AM – 8:30 PM"},
      {"day": "Wednesday", "time": "11:30 AM – 8:30 PM"},
      {"day": "Thursday", "time": "11:00 AM – 8:00 PM"}
    ],
    "unavailable": ["Friday", "Weekends"]
  }
};

export default function KatieGrier() {
  return <TherapistProfile data={DATA} />;
}
