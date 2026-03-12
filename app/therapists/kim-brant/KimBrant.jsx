"use client";
import TherapistProfile from "../TherapistProfile";

const DATA = {
  "slug": "kim-brant",
  "name": "Kim Brant",
  "firstName": "Kim",
  "credentials": "LPCC, CCATP",
  "pronouns": "she / her",
  "photo": "/images/therapists/Kim_Brant.png",
  "color": "#2A6BC6",
  "colorDark": "#1B4A8A",
  "colorLight": "#4A8BE0",
  "colorTint": "#EFF4FB",
  "colorBorder": "#C0D4EC",
  "status": "waitlisting",
  "badges": ["CCATP Certified", "19 Yrs", "Faith-Friendly"],
  "formats": ["In-Person", "Telehealth"],
  "locationDetail": "453 Patterson Rd., Suite A, Dayton, OH 45419",
  "ages": "Adults 18–75",
  "faith": true,
  "quote": "I believe each person is valuable just as they are. We are all works in progress, and it takes courage just to come in the door.",
  "calloutQuote": "The right therapist doesn't just listen — they help you build real, lasting tools for the life you actually want to be living.",
  "whoHelps": [
    {"s": "Adults 18–75", "t": "who are ready for real, practical tools — not just venting."},
    {"s": "People with anxiety", "t": "including panic, OCD, generalized worry, and avoidance patterns."},
    {"s": "People dealing with depression", "t": "low motivation, emotional numbness, or hopelessness."},
    {"s": "People grieving a loss", "t": "or navigating major life transitions (career, divorce, retirement)."},
    {"s": "Faith-oriented clients", "t": "who want therapy that respects and integrates their spiritual life."}
  ],
  "specialtiesFull": ["Anxiety & Panic", "Depression", "Grief & Loss", "Life Transitions", "Stress & Burnout", "Relationship Issues", "Self-Esteem", "Avoidance Patterns", "OCD", "Faith & Spirituality"],
  "approachText": "Kim uses proven, research-backed approaches tailored to each client. As a Certified Clinical Anxiety Treatment Professional (CCATP), she brings specialized expertise to anxiety disorders. She draws from multiple modalities depending on what fits you best.",
  "modalities": [
    {"abbr": "CBT", "name": "Cognitive Behavioral Therapy", "desc": "Restructures thought patterns driving anxiety, depression, and low mood. Kim has advanced CBT training including CBT for Psychosis."},
    {"abbr": "DBT", "name": "Dialectical Behavior Therapy", "desc": "Skills for emotional regulation and distress tolerance."},
    {"abbr": "ACT", "name": "Acceptance & Commitment Therapy", "desc": "Builds psychological flexibility to move toward what matters."},
    {"abbr": "ERP", "name": "Exposure & Response Prevention", "desc": "Gold-standard treatment for OCD and avoidance-driven anxiety."},
    {"abbr": "MI", "name": "Motivational Interviewing", "desc": "Clarifies personal values and builds internal motivation."},
    {"abbr": "SFBT", "name": "Solution-Focused Brief Therapy", "desc": "Focuses on strengths and solutions rather than problems."},
    {"abbr": "TF-CBT", "name": "Trauma-Focused CBT", "desc": "Evidence-based treatment for processing trauma and PTSD."},
    {"abbr": "CFT", "name": "Compassion-Focused Therapy", "desc": "Develops self-compassion to counter shame, self-criticism, and emotional distress."},
    {"abbr": "PC", "name": "Person-Centered Therapy", "desc": "Creating a warm, empathetic environment where you guide the direction of your growth."},
    {"abbr": "NAR", "name": "Narrative Therapy", "desc": "Separates the person from the problem. Helps reauthor personal stories."},
    {"abbr": "MBCT", "name": "Mindfulness-Based Therapy", "desc": "Cultivating present-moment awareness to reduce stress and improve well-being."},
    {"abbr": "BA", "name": "Behavioral Activation", "desc": "Breaks goals into smaller, achievable steps to build momentum and counter depression."},
    {"abbr": "GES", "name": "Gestalt Therapy", "desc": "Focuses on present-moment awareness and personal responsibility to understand patterns."},
    {"abbr": "RT", "name": "Reality Therapy", "desc": "Empowers you to take control of your choices and actions to meet your needs."},
    {"abbr": "GT", "name": "Grief Therapy", "desc": "Specialized support for processing loss, bereavement, and life transitions."},
    {"abbr": "IPT", "name": "Interpersonal Psychotherapy", "desc": "Improves communication patterns and relationship functioning."}
  ],
  "expectations": [
    {"s": "First session:", "t": "A thorough assessment where Kim learns about you, your history, and what you want from therapy."},
    {"s": "Ongoing work:", "t": "Practical, skill-based sessions. You will leave with tools you can use between sessions."},
    {"s": "Kim's style:", "t": "Warm, direct, and practical. She meets you where you are and helps you move forward."},
    {"s": "Session length:", "t": "Standard 50-minute individual sessions."}
  ],
  "faithText": "Kim is comfortable integrating faith and spirituality into therapy for clients who want it. This can include exploring how your beliefs support your healing, working through spiritual struggles, or simply having a therapist who understands that dimension of your life. Faith is never pushed or assumed.",
  "credentialDetails": [
    {"s": "License:", "t": "LPCC (Licensed Professional Clinical Counselor), Ohio E.2002021"},
    {"s": "Certification:", "t": "CCATP (Certified Clinical Anxiety Treatment Professional)"},
    {"s": "Experience:", "t": "19 years in clinical practice. Specialized expertise in anxiety disorders, depression, grief, and life transitions."},
    {"s": "Current Role:", "t": "Therapist at NGU Wellness, Dayton office. In-person and telehealth."}
  ],
  "schedule": {
    "available": [{"day": "Monday", "time": "8:00 AM – 1:00 PM"}, {"day": "Tuesday", "time": "10:00 AM – 6:00 PM"}, {"day": "Thursday", "time": "8:30 AM – 2:30 PM"}],
    "unavailable": ["Wednesday", "Friday", "Weekends"]
  }
};

export default function KimBrant() {
  return <TherapistProfile data={DATA} />;
}
