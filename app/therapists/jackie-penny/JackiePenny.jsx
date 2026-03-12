"use client";
import TherapistProfile from "../TherapistProfile";

const DATA = {
  "slug": "jackie-penny",
  "name": "Jackie Penny",
  "firstName": "Jackie",
  "credentials": "LPCC-S",
  "pronouns": "she / her",
  "photo": "/images/therapists/Jackie_Penny.jpeg",
  "color": "#9A4A7A",
  "colorDark": "#7A3A60",
  "colorLight": "#BA6A9A",
  "colorTint": "#F8EFF5",
  "colorBorder": "#D4B0C8",
  "status": "accepting",
  "badges": ["7 Yrs", "Supervisor", "DBT Trained", "LGBTQ+ Allied"],
  "formats": ["In-Person", "Telehealth"],
  "locationDetail": "In-person: 453 Patterson Rd., Suite A, Dayton, OH 45419 · Telehealth statewide",
  "ages": "Adults 18+",
  "faith": false,
  "quote": "We'll use proven strategies to shift unhelpful thoughts, manage intense emotions, and take change one step at a time. Some days you may leave with a new skill to practice, other days you may simply need space to talk.",
  "calloutQuote": "People don't ask for help when life feels easy. It's after months of stress, heartache, or habits that won't let go. If it's all starting to feel like too much to handle alone, I'd like to help. You won't need to pretend you're okay or worry about being judged.",
  "whoHelps": [
    {"s": "Adults 18+ weighed down by stress, anxiety, or depression", "t": "who are ready to build practical tools — not just vent."},
    {"s": "People navigating grief", "t": "relationship struggles, or major life changes who need a steady, non-judgmental space."},
    {"s": "People carrying the weight of past trauma", "t": "childhood abuse or neglect, or substance use challenges."},
    {"s": "Goal-oriented adults", "t": "who appreciate homework, skill-building, and someone who celebrates small wins along the way."},
    {"s": "Young adults navigating adulthood", "t": "and older adults adjusting to health changes — Jackie connects well across life stages."}
  ],
  "specialtiesFull": [
    "Anxiety & Panic", "Depression", "Grief & Loss", "Trauma & PTSD",
    "Emotional Regulation", "Substance Use & Dual Diagnosis", "Addiction",
    "Life Transitions", "Stress & Burnout", "Self-Esteem & Confidence",
    "Anger Management", "ADHD", "Bipolar Disorder", "Self-Harm",
    "Suicidal Ideation", "Sleep & Insomnia", "Women's Issues",
    "Childhood Abuse & Neglect", "Sexual Abuse", "Codependency",
    "Work-Life Balance", "Veterans", "LGBTQ+"
  ],
  "approachText": "Jackie is trained in DBT, advanced CBT, and CBT for Psychosis (CBTp), with specialized training in Assessing and Managing Suicide Risk (AMSR). She has 7+ years of experience in outpatient behavioral health including group facilitation, crisis intervention, and dual-diagnosis work. Your goals guide the work — she balances practical tools with lasting change, clarifying goals through Motivational Interviewing, breaking them into smaller steps with Behavioral Activation, and using CBT and DBT to shift unhelpful thoughts and steady strong emotions.",
  "modalities": [
    {"abbr": "CBT", "name": "Cognitive Behavioral Therapy", "desc": "Restructures thought patterns driving anxiety, depression, and low mood. Jackie has advanced CBT training including CBT for Psychosis."},
    {"abbr": "DBT", "name": "Dialectical Behavior Therapy", "desc": "Skills for emotional regulation, distress tolerance, mindfulness, and interpersonal effectiveness. Jackie co-created and co-facilitates a DBT group."},
    {"abbr": "MI", "name": "Motivational Interviewing", "desc": "Clarifies personal values and builds internal motivation for change."},
    {"abbr": "ACT", "name": "Acceptance & Commitment Therapy", "desc": "Builds psychological flexibility to move toward what matters most."},
    {"abbr": "BA", "name": "Behavioral Activation", "desc": "Breaks goals into smaller, achievable steps to build momentum and counter depression."},
    {"abbr": "TF-CBT", "name": "Trauma-Focused CBT", "desc": "Evidence-based treatment for trauma and PTSD."},
    {"abbr": "NAR", "name": "Narrative Therapy", "desc": "Separates the person from the problem. Reauthors personal stories."},
    {"abbr": "CFT", "name": "Compassion-Focused Therapy", "desc": "Develops self-compassion to counter shame, self-criticism, and emotional distress."}
  ],
  "expectations": [
    {"s": "First sessions:", "t": "Jackie builds rapport by learning your strengths, hobbies, and who matters in your life. She educates you about what therapy will look like at every step and welcomes your questions."},
    {"s": "Ongoing work:", "t": "Practical, skill-based sessions structured around your goals. Jackie revisits goals regularly and adjusts when something isn't working. Expect homework, reading, and real tools between sessions."},
    {"s": "Jackie's style:", "t": "Calm, warm, and genuine — with humor always welcome. She describes therapy like being in the passenger seat helping with navigation while you drive. She'll gently challenge you while celebrating every win."},
    {"s": "Session length:", "t": "Standard 50-minute individual sessions."},
    {"s": "Session format:", "t": "Individual therapy. In-person at the Dayton office or secure telehealth video across Ohio. Hybrid scheduling available."}
  ],
  "faithText": "",
  "credentialDetails": [
    {"s": "License:", "t": "LPCC-S (Licensed Professional Clinical Counselor – Supervisor), Ohio E.2102614-SUPV"},
    {"s": "Education:", "t": "Master's in Clinical Mental Health Counseling, University of Dayton (2016–2019). Chi Sigma Iota Counseling Honor Society."},
    {"s": "Specialized Training:", "t": "Dialectical Behavior Therapy (DBT). Advanced Cognitive Behavioral Therapy. CBT for Psychosis (CBTp). Assessing and Managing Suicide Risk (AMSR)."},
    {"s": "Current Role:", "t": "Contract Therapist at NGU Wellness (Sept 2025–present). Clinical Supervisor at Premier Outpatient Behavioral Health (Oct 2025–present)."},
    {"s": "Previous Experience:", "t": "Mental Health Therapist at Premier/Samaritan Behavioral Health (Jan 2019–Oct 2025). Case Manager (Oct 2017–Jan 2019). Co-created and co-facilitates a DBT group."},
    {"s": "Clinical Skills:", "t": "Group facilitation, crisis intervention, suicide risk assessment, dual diagnosis, treatment planning, DSM-5 diagnostic evaluation."}
  ],
  "schedule": {
    "available": [{"day": "Friday", "time": "1:00 PM – 5:00 PM"}],
    "unavailable": ["Monday", "Tuesday", "Wednesday", "Thursday", "Weekends"]
  }
};

export default function JackiePenny() {
  return <TherapistProfile data={DATA} />;
}
