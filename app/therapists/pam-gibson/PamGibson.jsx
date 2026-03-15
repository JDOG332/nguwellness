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
  "colorTint": "#EFF5F5",
  "colorBorder": "#B0CDCD",
  "status": "accepting",
  "badges": ["20 Yrs", "Faith-Friendly", "Suicide Loss"],
  "formats": ["In-Person", "Telehealth"],
  "locationDetail": "In-person: 453 Patterson Rd., Suite A, Dayton, OH 45419 · Telehealth statewide",
  "ages": "Teens · Adults · Elders 65+",
  "faith": true,
  "quote": "I've always had a strong desire to be my best self, build healthy relationships, overcome personal and interpersonal issues, and help others do the same. Helping others become their best selves drives my passion for this work.",
  "calloutQuote": "I believe that everyone has the capacity for growth and positive change. I strive to empower my clients to reach their full potential.",
  "whoHelps": [
    {"s": "Adults dealing with stress, anxiety, or depression", "t": "who need a warm, non-judgmental space with someone easy to relate to."},
    {"s": "People processing grief and loss", "t": "including death, divorce, and loss of a loved one to suicide, one of Pam's deepest specialties."},
    {"s": "Survivors of domestic violence", "t": "seeking safety, healing, and empowerment to rebuild."},
    {"s": "Women navigating life transitions", "t": "including relationship changes, career shifts, parenting challenges, and identity."},
    {"s": "Couples and families in conflict", "t": "working through communication breakdowns, trust issues, and relational stress."},
    {"s": "Teens and older adults", "t": "dealing with mood concerns, self-esteem, anger, or adjustment to life changes."},
    {"s": "Faith-oriented clients", "t": "who value Christian spirituality as part of their healing process. Always client-directed."},
    {"s": "Single parents", "t": "managing the unique pressures of raising children while navigating personal challenges."}
  ],
  "specialtiesFull": [
    "Anxiety", "Depression", "Stress", "Grief & Loss",
    "Death & Dying", "Suicide Loss & Bereavement", "Divorce",
    "Relationship Issues", "Couples Therapy", "Family Conflict",
    "Domestic Violence", "Domestic Abuse", "Women's Issues",
    "Life Transitions", "Parenting", "Single Parents",
    "Self-Esteem", "Anger Management", "Coping Skills",
    "Trauma & PTSD", "Addiction", "Alcohol Use", "Substance Abuse",
    "Career Counseling", "Peer Relationships", "Sadness",
    "Faith & Spirituality"
  ],
  "approachText": "Pam has a client-centered approach, focusing on the individual needs and concerns of each person she works with. She uses evidence-based interventions to reduce symptoms, promote recovery, and develop optimal health and well-being. She prioritizes creating a warm, non-judgmental, and comfortable environment where clients feel heard and respected. Her genuine warmth and gentle sense of humor allow clients to feel at ease and engage in more open, honest communication.",
  "modalities": [
    {"abbr": "CBT", "name": "Cognitive Behavioral Therapy", "desc": "Restructures thought patterns driving anxiety, depression, and low mood."},
    {"abbr": "PC", "name": "Person-Centered Therapy", "desc": "Creates an atmosphere of dignity and respect where the client's individual needs guide every session."},
    {"abbr": "SFBT", "name": "Solution Focused Brief Therapy", "desc": "Targets practical solutions and builds on existing strengths to achieve goals."},
    {"abbr": "FAM", "name": "Family Systems Therapy", "desc": "Examines relationship patterns and family dynamics that shape individual behavior."},
    {"abbr": "EFT", "name": "Emotionally Focused Therapy", "desc": "Strengthens emotional bonds in couples and families by addressing attachment needs."},
    {"abbr": "TF", "name": "Trauma-Focused Therapy", "desc": "Structured treatment addressing the root causes and effects of traumatic experiences."},
    {"abbr": "ART", "name": "Art Therapy", "desc": "Uses creative expression as a therapeutic tool for processing emotions and experiences."},
    {"abbr": "MBCT", "name": "Mindfulness-Based Cognitive Therapy", "desc": "Combines mindfulness practices with cognitive techniques to reduce reactivity and prevent relapse."},
    {"abbr": "PP", "name": "Positive Psychology", "desc": "Focuses on strengths, resilience, and what makes life fulfilling rather than just treating symptoms."},
    {"abbr": "STR", "name": "Strength-Based Therapy", "desc": "Identifies and builds on the client's existing strengths and resources for sustainable growth."},
    {"abbr": "MAR", "name": "Family & Marital Therapy", "desc": "Works with couples and families to improve communication, resolve conflict, and strengthen bonds."}
  ],
  "expectations": [
    {"s": "First session:", "t": "A warm, comfortable conversation to understand your needs, concerns, and goals. Pam's priority is establishing trust so you feel heard and respected from the start."},
    {"s": "Ongoing work:", "t": "Discussing and processing relationships, anxiety, depression, trauma, grief, self-esteem, stress, substance abuse, anger, or other life struggles. Evidence-based tools to reduce symptoms and build wellness."},
    {"s": "Pam's style:", "t": "Easy to relate to, non-judgmental, trustworthy, and comfortable to talk with. Genuine warmth and a gentle sense of humor. Clients feel at ease and communicate more openly."},
    {"s": "Session length:", "t": "Standard 50-minute individual sessions."},
    {"s": "Session format:", "t": "Individual, family, and group therapy. In-person at the Dayton office or secure telehealth video across Ohio."}
  ],
  "faithText": "Pam identifies as Christian and welcomes faith-oriented clients who value spiritual integration in their healing process. This is always client-directed. Faith is woven into sessions only when the client finds it meaningful.",
  "credentialDetails": [
    {"s": "License:", "t": "LSW (Licensed Social Worker), Ohio S.0600436"},
    {"s": "Education:", "t": "Bachelor of Social Work, Capital University (2006)."},
    {"s": "Experience:", "t": "20 years in clinical practice. Extensive work with grief and loss, suicide bereavement, domestic violence, women's issues, life transitions, and relationship concerns."},
    {"s": "Populations Served:", "t": "Teens, adults, and elders 65+. Individuals, families, groups, and couples. Special experience with single parents."},
    {"s": "Current Role:", "t": "Therapist at NGU Wellness, Dayton office. In-person and telehealth."}
  ],
  "schedule": {
    "available": [
      {"day": "Wednesday", "time": "10:00 AM – 6:00 PM"}
    ],
    "unavailable": ["Monday", "Tuesday", "Thursday", "Friday", "Weekends"]
  }
};

export default function PamGibson() {
  return <TherapistProfile data={DATA} />;
}
