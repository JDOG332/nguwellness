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
  "badges": ["Founder & Owner", "20+ Yrs", "PhD"],
  "formats": ["In-Person", "Telehealth"],
  "locationDetail": "Dayton & Rocky River offices · Telehealth statewide",
  "ages": "Adults 18+",
  "faith": false,
  "quote": "I provide a nonjudgmental, warm, and collaborative environment to hear and address client needs. I want to inspire individuals to live their best life.",
  "calloutQuote": "Nicole provides a nonjudgmental, warm, and collaborative environment. She works with people from a wellness perspective — meeting them exactly where they are.",
  "whoHelps": [
    {"s": "Adults 18+", "t": "individuals and couples dealing with a wide range of emotional and relational concerns."},
    {"s": "People processing trauma", "t": "including PTSD, complex trauma, abuse, and unresolved painful experiences."},
    {"s": "People with depression", "t": "emotional numbness, hopelessness, or persistent low mood."},
    {"s": "Couples", "t": "working through relationship difficulties, communication breakdowns, or life transitions together."},
    {"s": "People in transition", "t": "navigating career changes, divorce, loss, retirement, or identity shifts."}
  ],
  "specialtiesFull": ["Trauma & PTSD", "Depression", "Anxiety", "Relationship Issues", "Life Transitions", "Couples Therapy", "Grief & Loss", "Self-Esteem", "Stress & Burnout", "Identity"],
  "approachText": "Nicole draws from multiple proven approaches, tailoring treatment to each individual. With 20+ years of experience spanning community mental health, pediatric social work, and outpatient therapy, she integrates techniques fluidly based on what serves you best.",
  "modalities": [
    {"abbr": "CBT", "name": "Cognitive Behavioral Therapy", "desc": "Restructures thought patterns driving anxiety, depression, and low mood."},
    {"abbr": "EMDR", "name": "EMDR", "desc": "Processes traumatic memories through bilateral stimulation. Evidence-based trauma treatment."},
    {"abbr": "ACT", "name": "Acceptance & Commitment Therapy", "desc": "Builds psychological flexibility to move toward what matters."},
    {"abbr": "NAR", "name": "Narrative Therapy", "desc": "Separates the person from the problem. Reauthors personal stories."},
    {"abbr": "HUM", "name": "Humanistic Therapy", "desc": "Centers the whole person: values, potential, and the drive toward growth."},
    {"abbr": "SOM", "name": "Somatic Approaches", "desc": "Works with the body's role in storing and releasing stress and trauma."}
  ],
  "expectations": [
    {"s": "First session:", "t": "A thorough assessment — Nicole takes time to understand your history, your goals, and what kind of support would help most."},
    {"s": "Ongoing work:", "t": "Warm, collaborative sessions focused on building insight, skills, and real progress between sessions."},
    {"s": "Nicole's style:", "t": "Nonjudgmental, warm, and wellness-oriented. She meets you where you are."},
    {"s": "Session length:", "t": "Standard 50-minute individual sessions. Intake may be slightly longer."}
  ],
  "faithText": "",
  "schedule": {
    "available": [{"day": "Monday", "time": "Available"}, {"day": "Tuesday", "time": "Available"}, {"day": "Wednesday", "time": "Available"}, {"day": "Thursday", "time": "Available"}, {"day": "Friday", "time": "Available"}],
    "unavailable": ["Weekends"]
  }
};

export default function NicoleWalton() {
  return <TherapistProfile data={DATA} />;
}
