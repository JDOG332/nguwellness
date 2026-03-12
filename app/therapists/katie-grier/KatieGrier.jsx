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
  "status": "accepting",
  "badges": [
    "Children & Teens",
    "All Ages 5+"
  ],
  "formats": [
    "Telehealth"
  ],
  "locationDetail": "Telehealth \u2014 anywhere in Ohio",
  "ages": "All Ages 5+",
  "faith": false,
  "quote": "When you or your child works with me, I'll be an attentive listener and work hard to understand what you or your child needs the most.",
  "calloutQuote": "You will feel safe and supported and will feel confident that we are a team and that I have your best interest at heart.",
  "whoHelps": [
    {
      "s": "Children ages 5+",
      "t": "dealing with anxiety, depression, behavioral issues, and school stress."
    },
    {
      "s": "Teens and adolescents",
      "t": "navigating identity, self-esteem, family relationships, and life transitions."
    },
    {
      "s": "Young adults",
      "t": "working through anxiety, depression, and self-esteem challenges."
    },
    {
      "s": "Families",
      "t": "seeking support for parent-child relationships and communication."
    }
  ],
  "specialtiesFull": [
    "Anxiety",
    "Depression",
    "Children (5+)",
    "Teens & Adolescents",
    "Self-Esteem",
    "Family Relationships",
    "School Issues",
    "Life Transitions",
    "Behavioral Concerns",
    "Self-Harm",
    "LGBTQ+ Identity"
  ],
  "approachText": "Katie uses a number of approaches including Cognitive Behavioral Therapy, Dialectical Behavior Therapy, Person-Centered Therapy, Strengths-Based Therapy, Family Systems, and therapy with art.",
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
      "abbr": "HUM",
      "name": "Person-Centered Therapy",
      "desc": "Centers the whole person: values, potential, and drive toward growth."
    }
  ],
  "expectations": [
    {
      "s": "First session:",
      "t": "An attentive assessment to understand what you or your child needs most."
    },
    {
      "s": "Ongoing work:",
      "t": "Collaborative, strengths-based sessions tailored to age and needs."
    },
    {
      "s": "Katie's style:",
      "t": "Warm, attentive, and team-oriented. She has your best interest at heart."
    },
    {
      "s": "Session length:",
      "t": "Standard 50-minute individual sessions."
    }
  ],
  "faithText": "",
  "schedule": {
    "available": [
      {
        "day": "Monday",
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
      "Tuesday",
      "Friday",
      "Weekends"
    ]
  }
};

export default function KatieGrier() {
  return <TherapistProfile data={DATA} />;
}
