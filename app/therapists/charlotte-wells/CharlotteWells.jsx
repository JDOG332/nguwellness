"use client";
import TherapistProfile from "../TherapistProfile";

const DATA = {
  "slug": "charlotte-wells",
  "name": "Charlotte Wells",
  "firstName": "Charlotte",
  "credentials": "LISW",
  "pronouns": "she / her",
  "photo": "/images/therapists/Charlotte_Wells.jpeg",
  "color": "#4A5568",
  "colorDark": "#2D3748",
  "colorLight": "#718096",
  "status": "accepting",
  "badges": [
    "8 Yrs",
    "LISW"
  ],
  "formats": [
    "Telehealth"
  ],
  "locationDetail": "Telehealth \u2014 anywhere in Ohio",
  "ages": "Adults 18\u201340",
  "faith": false,
  "quote": "I provide a safe and compassionate space and would be honored to sit with you and hear your story.",
  "calloutQuote": "Collaboration is key in the therapeutic process. We will work together to identify the goals and objectives appropriate for your individual needs.",
  "whoHelps": [
    {
      "s": "Adults 18\u201340",
      "t": "dealing with anxiety, mood issues, and relationship concerns."
    },
    {
      "s": "People navigating boundaries",
      "t": "codependency, and self-esteem challenges."
    },
    {
      "s": "Women",
      "t": "working through life transitions and finding their voice."
    },
    {
      "s": "People seeking a holistic approach",
      "t": "addressing mental, physical, and spiritual health."
    }
  ],
  "specialtiesFull": [
    "Anxiety",
    "Mood Disorders",
    "Trauma",
    "Relationship Issues",
    "Boundaries",
    "Codependency",
    "Self-Esteem",
    "Women's Issues",
    "Life Transitions"
  ],
  "approachText": "Charlotte's approach is holistic, addressing mental, physical, and spiritual health. She creates a safe, compassionate space for collaboration.",
  "modalities": [
    {
      "abbr": "CBT",
      "name": "Cognitive Behavioral Therapy",
      "desc": "Restructures thought patterns driving anxiety and low mood."
    },
    {
      "abbr": "HUM",
      "name": "Humanistic Therapy",
      "desc": "Centers the whole person: values, potential, and drive toward growth."
    },
    {
      "abbr": "NAR",
      "name": "Narrative Therapy",
      "desc": "Separates the person from the problem. Reauthors personal stories."
    }
  ],
  "expectations": [
    {
      "s": "First session:",
      "t": "Charlotte listens to your story and collaboratively identifies your goals."
    },
    {
      "s": "Ongoing work:",
      "t": "Holistic sessions addressing mental, physical, and spiritual wellness."
    },
    {
      "s": "Charlotte's style:",
      "t": "Compassionate, collaborative, and empowering."
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

export default function CharlotteWells() {
  return <TherapistProfile data={DATA} />;
}
