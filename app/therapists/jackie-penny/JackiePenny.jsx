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
  "status": "accepting",
  "badges": [
    "16+ Yrs",
    "Supervisor",
    "DBT Expert"
  ],
  "formats": [
    "In-Person",
    "Telehealth"
  ],
  "locationDetail": "Dayton & Rocky River offices",
  "ages": "Adults 18+",
  "faith": false,
  "quote": "We'll use proven strategies to shift unhelpful thoughts, manage intense emotions, and take change one step at a time.",
  "calloutQuote": "Some days you may leave with a new skill to practice, other days you may simply need space to talk. Together, we'll recognize your progress and keep building momentum.",
  "whoHelps": [
    {
      "s": "Adults 18+",
      "t": "experiencing anxiety, depression, grief, and emotional regulation challenges."
    },
    {
      "s": "People dealing with trauma and PTSD",
      "t": "seeking evidence-based treatment."
    },
    {
      "s": "People navigating burnout",
      "t": "relationship issues, and major life transitions."
    },
    {
      "s": "Couples",
      "t": "working through relationship challenges together."
    }
  ],
  "specialtiesFull": [
    "Anxiety",
    "Depression",
    "Grief",
    "Emotional Regulation",
    "Trauma",
    "PTSD",
    "Burnout",
    "Relationship Issues",
    "Life Transitions",
    "Couples"
  ],
  "approachText": "Jackie has extensive experience using Dialectical Behavior Therapy along with other evidence-based approaches to help clients build resilience and practical coping skills.",
  "modalities": [
    {
      "abbr": "DBT",
      "name": "Dialectical Behavior Therapy",
      "desc": "Skills for emotional regulation and distress tolerance."
    },
    {
      "abbr": "CBT",
      "name": "Cognitive Behavioral Therapy",
      "desc": "Restructures thought patterns driving anxiety and low mood."
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
      "t": "A thorough assessment to understand your concerns and goals."
    },
    {
      "s": "Ongoing work:",
      "t": "Practical, skill-based sessions with tools you can apply right away."
    },
    {
      "s": "Jackie's style:",
      "t": "Steady, approachable, and practical. She brings a calming presence to sessions."
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
      },
      {
        "day": "Friday",
        "time": "Available"
      }
    ],
    "unavailable": [
      "Monday",
      "Weekends"
    ]
  }
};

export default function JackiePenny() {
  return <TherapistProfile data={DATA} />;
}
