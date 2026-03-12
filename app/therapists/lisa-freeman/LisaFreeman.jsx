"use client";
import TherapistProfile from "../TherapistProfile";

const DATA = {
  "slug": "lisa-freeman",
  "name": "Lisa Freeman",
  "firstName": "Lisa",
  "credentials": "LPC",
  "pronouns": "she / her",
  "photo": "/images/therapists/Lisa_Freeman.jpeg",
  "color": "#3A6868",
  "colorDark": "#2A4E4E",
  "colorLight": "#5A8888",
  "status": "accepting",
  "badges": [
    "14+ Yrs",
    "Play Therapy",
    "CBTi"
  ],
  "formats": [
    "Telehealth"
  ],
  "locationDetail": "Telehealth \u2014 Rocky River area & all of Ohio",
  "ages": "Children 5\u201311 \u00b7 Adults 18+",
  "faith": false,
  "quote": "Each person is on a unique journey shaped by their circumstances, dreams, goals, beliefs and emotions.",
  "calloutQuote": "True healing and growth occur when we embrace honesty and acceptance of ourselves and others. I'm honored to be part of that journey.",
  "whoHelps": [
    {
      "s": "Children ages 5\u201311",
      "t": "dealing with anxiety, ADHD, behavioral issues, and trauma."
    },
    {
      "s": "Adults 18+",
      "t": "experiencing anxiety, depression, relationship issues, and parenting challenges."
    },
    {
      "s": "People with OCD",
      "t": "seeking evidence-based treatment that works."
    },
    {
      "s": "People with insomnia",
      "t": "or other sleep disorders. Lisa has specialized CBTi training."
    }
  ],
  "specialtiesFull": [
    "Anxiety",
    "OCD",
    "Depression",
    "Children (5\u201311)",
    "ADHD",
    "Behavioral Issues",
    "Life Transitions",
    "Parenting",
    "Insomnia & Sleep Disorders",
    "Trauma",
    "Relationship Issues",
    "Family Therapy"
  ],
  "approachText": "Lisa has extensive training in play therapy, CBTi, and neurological and sensory-based interventions. She fosters open and honest discussion about challenges.",
  "modalities": [
    {
      "abbr": "CBT",
      "name": "Cognitive Behavioral Therapy",
      "desc": "Restructures thought patterns driving anxiety and low mood."
    },
    {
      "abbr": "CBTi",
      "name": "CBT for Insomnia",
      "desc": "Specialized treatment for insomnia and sleep disorders."
    },
    {
      "abbr": "PT",
      "name": "Play Therapy",
      "desc": "Evidence-based therapeutic approach for children using play."
    }
  ],
  "expectations": [
    {
      "s": "First session:",
      "t": "An honest, open assessment to understand your unique journey."
    },
    {
      "s": "Ongoing work:",
      "t": "Balanced sessions combining self-reflection with practical tools."
    },
    {
      "s": "Lisa's style:",
      "t": "Open, kind, safe, and honest. She believes in genuine therapeutic relationships."
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
        "day": "Friday",
        "time": "Available"
      }
    ],
    "unavailable": [
      "Wednesday",
      "Thursday",
      "Weekends"
    ]
  }
};

export default function LisaFreeman() {
  return <TherapistProfile data={DATA} />;
}
