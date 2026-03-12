"use client";
import TherapistProfile from "../TherapistProfile";

const DATA = {
  "slug": "kelly-salada",
  "name": "Kelly Salada",
  "firstName": "Kelly",
  "credentials": "LISW",
  "pronouns": "she / her",
  "photo": "/images/therapists/Kelly_Salada.jpeg",
  "color": "#4A7A74",
  "colorDark": "#3A5E58",
  "colorLight": "#6A9A94",
  "status": "accepting",
  "badges": [
    "9 Yrs",
    "Trauma Specialist"
  ],
  "formats": [
    "Telehealth"
  ],
  "locationDetail": "Telehealth \u2014 Rocky River area & all of Ohio",
  "ages": "Adults 18+",
  "faith": false,
  "quote": "I will work to create a nurturing, psychologically safe space \u2014 actively listening and witnessing your story.",
  "calloutQuote": "I will meet you where you are at, with compassion, while honoring you as the expert of your own experiences.",
  "whoHelps": [
    {
      "s": "Adults 18+",
      "t": "who have experienced significant trauma, abuse, or neglect."
    },
    {
      "s": "People dealing with anxiety",
      "t": "depression, mood disorders, and adjustment issues."
    },
    {
      "s": "Postpartum individuals",
      "t": "navigating the challenges of new parenthood."
    },
    {
      "s": "People exploring identity",
      "t": "including gender identity and sexual identity concerns."
    }
  ],
  "specialtiesFull": [
    "Anxiety",
    "Trauma",
    "PTSD",
    "Postpartum",
    "Relationships",
    "Depression",
    "Mood Disorders",
    "Adjustment Issues",
    "Gender Identity",
    "Sexual Identity",
    "Abuse & Neglect"
  ],
  "approachText": "Kelly utilizes Trauma-Focused CBT, Cognitive Behavioral Therapy, Dialectical Behavioral Therapy, and Family Systems in her work, tailoring to each individual.",
  "modalities": [
    {
      "abbr": "TF-CBT",
      "name": "Trauma-Focused CBT",
      "desc": "Evidence-based treatment for trauma and PTSD."
    },
    {
      "abbr": "CBT",
      "name": "Cognitive Behavioral Therapy",
      "desc": "Restructures thought patterns driving anxiety and low mood."
    },
    {
      "abbr": "DBT",
      "name": "Dialectical Behavior Therapy",
      "desc": "Skills for emotional regulation and distress tolerance."
    }
  ],
  "expectations": [
    {
      "s": "First session:",
      "t": "Creating a safe, psychologically secure space to begin sharing your story."
    },
    {
      "s": "Ongoing work:",
      "t": "Empowering you with tools to confront barriers to your growth."
    },
    {
      "s": "Kelly's style:",
      "t": "Nurturing, compassionate, and empowering. She honors your expertise over your own life."
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
        "day": "Thursday",
        "time": "Available"
      },
      {
        "day": "Friday",
        "time": "Available"
      }
    ],
    "unavailable": [
      "Monday",
      "Wednesday",
      "Weekends"
    ]
  }
};

export default function KellySalada() {
  return <TherapistProfile data={DATA} />;
}
