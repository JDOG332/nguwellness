"use client";
import TherapistProfile from "../TherapistProfile";

const DATA = {
  "slug": "pam-gibson",
  "name": "Pam Gibson",
  "firstName": "Pam",
  "credentials": "LSW",
  "pronouns": "she / her",
  "photo": "/images/therapists/Pam_Gibson.jpeg",
  "color": "#2A5A5A",
  "colorDark": "#1A4242",
  "colorLight": "#4A7A7A",
  "status": "accepting",
  "badges": [
    "15+ Yrs",
    "Faith-Friendly"
  ],
  "formats": [
    "In-Person",
    "Telehealth"
  ],
  "locationDetail": "453 Patterson Rd., Suite A, Dayton, OH 45419",
  "ages": "Adults 30+",
  "faith": true,
  "quote": "I've always had a strong desire to be my best self, build healthy relationships, and help others do the same.",
  "calloutQuote": "I believe that everyone has the capacity for growth and positive change and I strive to empower my clients to reach their full potential.",
  "whoHelps": [
    {
      "s": "Adults 30+",
      "t": "experiencing grief, loss, and bereavement."
    },
    {
      "s": "Older adults",
      "t": "navigating life transitions, retirement, and aging."
    },
    {
      "s": "People dealing with anxiety",
      "t": "depression, stress, and relationship challenges."
    },
    {
      "s": "Faith-oriented clients",
      "t": "who value spiritual integration in therapy."
    }
  ],
  "specialtiesFull": [
    "Grief & Loss",
    "Anxiety",
    "Depression",
    "Older Adults",
    "Life Transitions",
    "Relationships",
    "Stress",
    "Divorce",
    "Domestic Violence",
    "Women's Issues",
    "Death & Dying",
    "Faith & Spirituality"
  ],
  "approachText": "Pam's approach is client-centered, using evidence-based interventions to reduce symptoms and promote recovery. She prioritizes creating a warm, non-judgmental, and comfortable environment.",
  "modalities": [
    {
      "abbr": "CBT",
      "name": "Cognitive Behavioral Therapy",
      "desc": "Restructures thought patterns driving anxiety and low mood."
    },
    {
      "abbr": "HUM",
      "name": "Person-Centered Therapy",
      "desc": "Centers the whole person: values, potential, and drive toward growth."
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
      "t": "A warm, comfortable conversation to understand your needs and goals."
    },
    {
      "s": "Ongoing work:",
      "t": "Client-centered sessions focused on reducing symptoms and promoting wellness."
    },
    {
      "s": "Pam's style:",
      "t": "Warm, gentle humor, non-judgmental. She makes clients feel at ease and encourages open communication."
    },
    {
      "s": "Session length:",
      "t": "Standard 50-minute individual sessions."
    }
  ],
  "faithText": "Pam respects and can integrate faith and spirituality into sessions for clients who find it meaningful. This is always client-directed.",
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
        "day": "Thursday",
        "time": "Available"
      }
    ],
    "unavailable": [
      "Wednesday",
      "Friday",
      "Weekends"
    ]
  }
};

export default function PamGibson() {
  return <TherapistProfile data={DATA} />;
}
