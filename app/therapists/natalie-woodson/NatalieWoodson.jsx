"use client";
import TherapistProfile from "../TherapistProfile";

const DATA = {
  "slug": "natalie-woodson",
  "name": "Natalie Woodson",
  "firstName": "Natalie",
  "credentials": "LSW",
  "pronouns": "she / her",
  "photo": "/images/therapists/Natalie_Woodson.jpeg",
  "color": "#2A3A5A",
  "colorDark": "#1A2A42",
  "colorLight": "#4A5A7A",
  "status": "accepting",
  "badges": [
    "6 Yrs",
    "Teens 12+"
  ],
  "formats": [
    "Telehealth"
  ],
  "locationDetail": "Telehealth \u2014 anywhere in Ohio",
  "ages": "Teens 12+ \u00b7 Adults",
  "faith": false,
  "quote": "I'll provide a safe and affirming environment that will allow you to make your own decisions.",
  "calloutQuote": "I will actively listen to your needs and concerns and provide guidance to address the root cause of your issue through healthy problem solving.",
  "whoHelps": [
    {
      "s": "Teens 12+",
      "t": "navigating anxiety, depression, stress, and life transitions."
    },
    {
      "s": "Young adults",
      "t": "dealing with relationship issues, identity, and overwhelm."
    },
    {
      "s": "Adults",
      "t": "experiencing anxiety, depression, and stress."
    },
    {
      "s": "Couples and families",
      "t": "working through communication and relationship challenges."
    }
  ],
  "specialtiesFull": [
    "Anxiety",
    "Depression",
    "Teens (12+)",
    "Life Transitions",
    "Stress",
    "Relationship Issues",
    "Identity",
    "Self-Esteem",
    "Couples",
    "Family Therapy",
    "Anger Management"
  ],
  "approachText": "Natalie uses cognitive restructuring to identify and challenge negative thought patterns, replacing them with more balanced, realistic, and positive ones. Her approach encompasses mind, body, and soul.",
  "modalities": [
    {
      "abbr": "CBT",
      "name": "Cognitive Behavioral Therapy",
      "desc": "Restructures thought patterns driving anxiety and low mood."
    },
    {
      "abbr": "MI",
      "name": "Motivational Interviewing",
      "desc": "Clarifies personal values and builds internal motivation."
    },
    {
      "abbr": "HUM",
      "name": "Humanistic Therapy",
      "desc": "Centers the whole person: values, potential, and drive toward growth."
    }
  ],
  "expectations": [
    {
      "s": "First session:",
      "t": "A safe, affirming space to share your concerns and set goals together."
    },
    {
      "s": "Ongoing work:",
      "t": "Addressing root causes through healthy problem-solving and cognitive tools."
    },
    {
      "s": "Natalie's style:",
      "t": "Affirming, non-judgmental, and empowering. She draws on personal experience to eliminate self-judgment."
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
        "day": "Tuesday",
        "time": "Available"
      },
      {
        "day": "Wednesday",
        "time": "Available"
      }
    ],
    "unavailable": [
      "Thursday",
      "Friday",
      "Weekends"
    ]
  }
};

export default function NatalieWoodson() {
  return <TherapistProfile data={DATA} />;
}
