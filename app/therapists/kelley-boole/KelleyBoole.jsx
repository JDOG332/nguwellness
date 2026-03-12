"use client";
import TherapistProfile from "../TherapistProfile";

const DATA = {
  "slug": "kelley-boole",
  "name": "Kelley Boole",
  "firstName": "Kelley",
  "credentials": "LSW",
  "pronouns": "she / her",
  "photo": "/images/therapists/Kelley_Boole.jpeg",
  "color": "#B08A72",
  "colorDark": "#8A6A58",
  "colorLight": "#C8A890",
  "status": "accepting",
  "badges": [
    "7 Yrs",
    "Faith-Friendly"
  ],
  "formats": [
    "Telehealth"
  ],
  "locationDetail": "Telehealth \u2014 anywhere in Ohio",
  "ages": "Adults 18+",
  "faith": true,
  "quote": "I believe in the strength and inherent goodness of people and their desire to be the best they can be.",
  "calloutQuote": "It's my goal to build a strong, supportive therapeutic relationship so you feel comfortable, empowered and confident to explore feelings, share experiences and discover solutions.",
  "whoHelps": [
    {
      "s": "Adults 18+",
      "t": "navigating anxiety, depression, and self-esteem struggles."
    },
    {
      "s": "People dealing with addiction",
      "t": "burnout, and life transitions."
    },
    {
      "s": "Individuals in recovery",
      "t": "from substance use seeking ongoing support."
    },
    {
      "s": "Faith-oriented clients",
      "t": "who value a strength-based, collaborative approach."
    }
  ],
  "specialtiesFull": [
    "Anxiety",
    "Depression",
    "Self-Esteem",
    "Addiction",
    "Burnout",
    "Life Transitions",
    "Relationships",
    "Substance Use Recovery",
    "Codependency",
    "Faith & Spirituality"
  ],
  "approachText": "Kelley uses a strength-based and collaborative approach, helping clients uncover their inner resilience, build practical tools, and make meaningful changes.",
  "modalities": [
    {
      "abbr": "CBT",
      "name": "Cognitive Behavioral Therapy",
      "desc": "Restructures thought patterns driving anxiety and low mood."
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
    }
  ],
  "expectations": [
    {
      "s": "First session:",
      "t": "Getting to know you, your strengths, and what brought you to therapy."
    },
    {
      "s": "Ongoing work:",
      "t": "Building practical tools and uncovering your inner resilience."
    },
    {
      "s": "Kelley's style:",
      "t": "Warm, empathetic, and honest. She helps you tap into your strengths."
    },
    {
      "s": "Session length:",
      "t": "Standard 50-minute individual sessions."
    }
  ],
  "faithText": "Kelley is comfortable integrating faith and spirituality for clients who value it. This is always client-directed and never assumed.",
  "schedule": {
    "available": [
      {
        "day": "Monday",
        "time": "Available"
      },
      {
        "day": "Thursday",
        "time": "Available"
      },
      {
        "day": "Friday",
        "time": "Available"
      }
    ],
    "unavailable": [
      "Tuesday",
      "Wednesday",
      "Weekends"
    ]
  }
};

export default function KelleyBoole() {
  return <TherapistProfile data={DATA} />;
}
