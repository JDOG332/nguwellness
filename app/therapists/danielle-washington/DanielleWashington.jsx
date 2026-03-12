"use client";
import TherapistProfile from "../TherapistProfile";

const DATA = {
  "slug": "danielle-washington",
  "name": "Danielle Washington",
  "firstName": "Danielle",
  "credentials": "LISW-S",
  "pronouns": "she / her",
  "photo": "/images/therapists/Danielle_Washington.jpeg",
  "color": "#7A6878",
  "colorDark": "#5A4E58",
  "colorLight": "#9A889A",
  "status": "accepting",
  "badges": [
    "25+ Yrs",
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
  "quote": "I strive to assist my clients with achieving their goals through attentive listening, providing support, and empowerment.",
  "calloutQuote": "I provide a safe, supportive, and open setting to listen and to help you get on the path where you want to be.",
  "whoHelps": [
    {
      "s": "Adults 18+",
      "t": "experiencing anxiety, depression, stress, and relationship issues."
    },
    {
      "s": "People navigating identity",
      "t": "burnout, and major life changes."
    },
    {
      "s": "Individuals seeking empowerment",
      "t": "through strengths-based and solution-focused approaches."
    },
    {
      "s": "Faith-oriented clients",
      "t": "who value spiritual integration in their healing."
    }
  ],
  "specialtiesFull": [
    "Anxiety",
    "Depression",
    "Stress",
    "Burnout",
    "Identity",
    "Relationship Issues",
    "Life Transitions",
    "Family Conflict",
    "Empowerment",
    "Faith & Spirituality"
  ],
  "approachText": "Danielle uses Narrative, Motivational Interviewing, Solution-Focused, and strengths-based approaches. She partners with clients in their development and success.",
  "modalities": [
    {
      "abbr": "NAR",
      "name": "Narrative Therapy",
      "desc": "Separates the person from the problem. Reauthors personal stories."
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
      "t": "A thorough assessment where Danielle learns about your goals and history."
    },
    {
      "s": "Ongoing work:",
      "t": "Empowerment-focused sessions building on your existing strengths."
    },
    {
      "s": "Danielle's style:",
      "t": "Warm, supportive, and empowering. She meets you where you are."
    },
    {
      "s": "Session length:",
      "t": "Standard 50-minute individual sessions."
    }
  ],
  "faithText": "Danielle is comfortable integrating faith into therapy for clients who want it. This is always client-led and never assumed.",
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
        "day": "Friday",
        "time": "Available"
      }
    ],
    "unavailable": [
      "Tuesday",
      "Thursday",
      "Weekends"
    ]
  }
};

export default function DanielleWashington() {
  return <TherapistProfile data={DATA} />;
}
