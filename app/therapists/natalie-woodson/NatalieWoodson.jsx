"use client";
import TherapistProfile from "../TherapistProfile";

const DATA = {
  "slug": "natalie-woodson",
  "name": "Natalie Woodson",
  "firstName": "Natalie",
  "credentials": "LISW",
  "pronouns": "she / her",
  "photo": "/images/therapists/Natalie_Woodson.jpeg",
  "color": "#2A3A5A",
  "colorDark": "#1A2A42",
  "colorLight": "#4A5A7A",
  "colorTint": "#EFF2F7",
  "colorBorder": "#B0BCCF",
  "status": "accepting",
  "badges": ["EMDR Trained", "Holistic", "Culturally Sensitive"],
  "formats": ["In-Person", "Telehealth"],
  "locationDetail": "In-person: 453 Patterson Rd., Suite A, Dayton, OH 45419 · Telehealth statewide",
  "ages": "Preteens · Teens · Adults · Elders 65+",
  "faith": false,
  "quote": "I'll provide a safe and affirming environment that will allow you to make your own decisions. I will actively listen to your needs and concerns and provide guidance to address the root cause of your issue through healthy problem solving.",
  "calloutQuote": "Mental health has great meaning in my own life and from a young age I dreamed of helping people as a therapist. My passion for helping others has only grown stronger with time — I believe it's my calling.",
  "whoHelps": [
    {"s": "Preteens & teens", "t": "dealing with anxiety, depression, anger, school stress, and life transitions."},
    {"s": "Adults overwhelmed by stress, anxiety, or depression", "t": "who want practical tools and a holistic approach that goes beyond talk therapy."},
    {"s": "Survivors of trauma", "t": "including domestic violence, intimate partner violence, PTSD, and human trafficking — Natalie is EMDR-trained."},
    {"s": "People struggling with substance use or addiction", "t": "including alcohol, drugs, and behavioral addictions like video gaming."},
    {"s": "Individuals navigating grief, life transitions, or relationship conflict", "t": "who need a respectful, patient space to rebuild."},
    {"s": "People with chronic illness, chronic pain, or disabilities", "t": "seeking a disability-affirming therapist who honors the whole person."}
  ],
  "specialtiesFull": [
    "Anxiety & Panic Attacks", "Depression", "Stress", "Trauma & PTSD",
    "Grief & Loss", "Relationship Issues", "Life Transitions", "Self-Esteem",
    "Domestic Violence", "Intimate Partner Violence", "Human Trafficking",
    "Substance Use & Addiction", "Alcohol Use", "Anger Management",
    "Codependency", "Coping Skills", "Family Conflict", "Mood Disorders",
    "Women's Issues", "Chronic Illness & Pain", "Physical Disabilities",
    "Learning Disabilities", "Homelessness & Poverty", "School Issues",
    "Spirituality", "Video Game Addiction", "Weight Management",
    "Emotional Disturbance"
  ],
  "approachText": "Natalie uses cognitive restructuring to help clients identify and challenge negative thought patterns, replacing them with more balanced, realistic, and positive ones. Her approach encompasses mind, body, and soul — a holistic perspective that considers each client's unique background and experiences. She is EMDR-trained for clients who need deeper trauma processing, and draws on her own life experiences to help clients eliminate self-judgment and express themselves as their true selves.",
  "modalities": [
    {"abbr": "CBT", "name": "Cognitive Behavioral Therapy", "desc": "Restructures negative thought patterns into more balanced, realistic, and positive ones."},
    {"abbr": "EMDR", "name": "Eye Movement Desensitization & Reprocessing", "desc": "Evidence-based trauma processing for clients who need extra help overcoming past experiences."},
    {"abbr": "PC", "name": "Person-Centered Therapy", "desc": "Creates a safe, affirming environment where the client leads their own healing process."},
    {"abbr": "SFBT", "name": "Solution Focused Brief Therapy", "desc": "Targets practical solutions and builds on existing strengths to achieve goals quickly."},
    {"abbr": "MI", "name": "Motivational Interviewing", "desc": "Strengthens internal motivation and commitment to change."},
    {"abbr": "FAM", "name": "Family Systems Therapy", "desc": "Examines relationship patterns and family dynamics that shape individual behavior."},
    {"abbr": "STR", "name": "Strength-Based Therapy", "desc": "Identifies and builds on the client's existing strengths and resources."},
    {"abbr": "TF", "name": "Trauma-Focused Therapy", "desc": "Structured treatment addressing the root causes and effects of traumatic experiences."},
    {"abbr": "NAR", "name": "Narrative Therapy", "desc": "Separates the person from the problem and helps reauthor their personal story."},
    {"abbr": "CFT", "name": "Compassion-Focused Therapy", "desc": "Develops self-compassion and counters shame and self-criticism."},
    {"abbr": "MBCT", "name": "Mindfulness-Based Cognitive Therapy", "desc": "Combines mindfulness practices with cognitive techniques to prevent relapse and reduce reactivity."},
    {"abbr": "DAT", "name": "Disability Affirming Therapy", "desc": "Honors the whole person while addressing the intersection of disability and mental health."},
    {"abbr": "BM", "name": "Behavior Modification", "desc": "Targets specific behaviors through structured reinforcement and skill-building."},
    {"abbr": "CS", "name": "Culturally Sensitive Therapy", "desc": "Adapts treatment to honor each client's cultural background and lived experience."},
    {"abbr": "IP", "name": "Interpersonal Therapy", "desc": "Focuses on improving communication patterns and relationship functioning."},
    {"abbr": "REL", "name": "Relational Therapy", "desc": "Explores how past and present relationships shape thoughts, feelings, and behavior."}
  ],
  "expectations": [
    {"s": "First session:", "t": "A safe, non-judgmental space where Natalie actively listens to your needs and concerns. Together you'll identify the root cause of what's going on and map out a plan."},
    {"s": "Ongoing work:", "t": "Developing new skills and strategies to cope with challenges, reduce stress, make positive changes, enhance relationships, and improve overall well-being. Multiple routes to reach your goals."},
    {"s": "Natalie's style:", "t": "Respectful, patient, and serene. She listens with compassion and persistently advocates for your needs. You won't be defined by a diagnosis or label — the goal is expressing your true self."},
    {"s": "Session length:", "t": "Standard 50-minute individual sessions."},
    {"s": "Session format:", "t": "Individual and family therapy. In-person at the Dayton office or secure telehealth video across Ohio."}
  ],
  "faithText": "",
  "credentialDetails": [
    {"s": "License:", "t": "LISW (Licensed Independent Social Worker), Ohio S.2208489"},
    {"s": "Education:", "t": "Bachelor of Social Work, Defiance College (minor in Psychology). Master of Social Work, Wright State University (2021)."},
    {"s": "Specialized Training:", "t": "EMDR (Eye Movement Desensitization & Reprocessing). Disability Affirming Therapy. Culturally Sensitive Practice. Mindfulness-Based Cognitive Therapy (MBCT)."},
    {"s": "Clinical Experience:", "t": "Extensive work across diverse populations including individuals experiencing homelessness, poverty, physical and learning disabilities, human trafficking, and intimate partner violence."},
    {"s": "Current Role:", "t": "Therapist at NGU Wellness, Dayton office. In-person and telehealth."}
  ],
  "schedule": {
    "available": [
      {"day": "Monday", "time": "8:30 AM – 6:30 PM"},
      {"day": "Tuesday", "time": "8:30 AM – 7:30 PM"},
      {"day": "Wednesday", "time": "8:00 AM – 7:00 PM"},
      {"day": "Thursday", "time": "8:00 AM – 4:00 PM"}
    ],
    "unavailable": ["Friday", "Weekends"]
  }
};

export default function NatalieWoodson() {
  return <TherapistProfile data={DATA} />;
}
