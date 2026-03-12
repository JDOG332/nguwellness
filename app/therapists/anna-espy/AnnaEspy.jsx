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
  "status": "accepting",
  "badges": [
    "15+ Yrs",
    "Supervisor",
    "Faith-Friendly"
  ],
  "formats": [
    "In-Person",
    "Telehealth"
  ],
  "locationDetail": "453 Patterson Rd., Suite A, Dayton, OH 45419",
  "ages": "Adults 18+",
  "faith": true,
  "quote": "I became a therapist to help others realize their inherent worth, value, and potential through connection and guidance.",
  "calloutQuote": "Together, we'll explore who you are and who you want to become, building resilience and fostering self-awareness along the way.",
  "whoHelps": [
    {
      "s": "Young adults 18\u201330",
      "t": "navigating the transition to adulthood, identity, and purpose."
    },
    {
      "s": "People dealing with anxiety",
      "t": "stress, depression, and emotional overwhelm."
    },
    {
      "s": "People facing career uncertainty",
      "t": "relationship challenges, or major life transitions."
    },
    {
      "s": "Faith-oriented clients",
      "t": "who want therapy that respects their spiritual life."
    }
  ],
  "specialtiesFull": [
    "Anxiety",
    "Depression",
    "Stress",
    "Young Adults (18\u201330)",
    "Career Uncertainty",
    "Relationship Challenges",
    "Life Transitions",
    "Self-Awareness",
    "Resilience Building",
    "Faith & Spirituality"
  ],
  "approachText": "Anna draws from a diverse range of evidence-based therapies, tailoring her approach to each individual's needs. She empowers clients with skills to enhance self-awareness, self-reflection, and resilience.",
  "modalities": [
    {
      "abbr": "CBT",
      "name": "Cognitive Behavioral Therapy",
      "desc": "Restructures thought patterns driving anxiety, depression, and low mood."
    },
    {
      "abbr": "ACT",
      "name": "Acceptance & Commitment Therapy",
      "desc": "Builds psychological flexibility to move toward what matters."
    },
    {
      "abbr": "DBT",
      "name": "Dialectical Behavior Therapy",
      "desc": "Skills for emotional regulation and distress tolerance."
    },
    {
      "abbr": "MI",
      "name": "Motivational Interviewing",
      "desc": "Clarifies personal values and builds internal motivation."
    },
    {
      "abbr": "SFBT",
      "name": "Solution-Focused Brief Therapy",
      "desc": "Focuses on strengths and solutions rather than problems."
    }
  ],
  "expectations": [
    {
      "s": "First session:",
      "t": "A thorough assessment to understand you, your history, and your goals."
    },
    {
      "s": "Ongoing work:",
      "t": "Building resilience, self-awareness, and practical tools for growth."
    },
    {
      "s": "Anna's style:",
      "t": "Warm, professional with a touch of humor. She creates a safe and supportive environment."
    },
    {
      "s": "Session length:",
      "t": "Standard 50-minute individual sessions."
    }
  ],
  "faithText": "Anna is comfortable integrating faith and spirituality into therapy for clients who want it. This can include exploring how beliefs support healing. Faith is never pushed or assumed.",
  "schedule": {
    "available": [
      {
        "day": "Tuesday",
        "time": "Available"
      },
      {
        "day": "Wednesday",
        "time": "Available"
      },
      {
        "day": "Thursday",
        "time": "Available"
      }
    ],
    "unavailable": [
      "Monday",
      "Friday",
      "Weekends"
    ]
  }
};

export default function AnnaEspy() {
  return <TherapistProfile data={DATA} />;
}
