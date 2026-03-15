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
  "colorTint": "#EFF6F5",
  "colorBorder": "#B0D0CC",
  "status": "accepting",
  "badges": ["LISW", "Trauma Specialist", "Multi-State Experience", "LGBTQ+ Allied"],
  "formats": ["In-Person", "Telehealth"],
  "locationDetail": "In-person: 20525 Center Ridge Rd., Suite 604, Rocky River, OH 44116 · Telehealth statewide",
  "ages": "Teens through Adults & Elders (65+)",
  "faith": false,
  "quote": "I will work to create a nurturing, psychologically safe space, actively listening and witnessing your story. I will meet you where you are at, with compassion, while honoring you as the expert of your own experiences.",
  "calloutQuote": "You're the expert on your life. I won't judge where you've been or where you're headed. My role is to provide the support and tools to make the changes you're ready to make at a pace that's comfortable to you.",
  "whoHelps": [
    {"s": "People who have experienced significant trauma", "t": "abuse, or neglect. Kelly has dedicated her career to empowering people through recovery from adversity."},
    {"s": "People dealing with anxiety, depression, or overwhelming emotions", "t": "who need practical, evidence-based strategies and a safe space to feel heard."},
    {"s": "People navigating relationship difficulties", "t": "self-esteem struggles, or adjustment issues who are ready for positive change."},
    {"s": "People with concerns related to neurodivergence", "t": "including ADHD, Asperger's, and related challenges."},
    {"s": "People exploring gender identity or sexual identity", "t": "who need an affirming, non-judgmental therapist."},
    {"s": "Teens and adults of all ages", "t": "who want to develop healthier patterns and confront the barriers to their growth."}
  ],
  "specialtiesFull": [
    "Anxiety", "Depression", "Trauma & PTSD", "Addiction",
    "ADHD", "Asperger's & Neurodivergence", "Bipolar Disorder",
    "Codependency", "Coping Skills", "Dual Diagnosis",
    "Emotional Disturbance", "Grief & Loss", "Impulse Control",
    "LGBTQ+ Identity & Support", "Life Transitions",
    "Mood Disorders", "Peer Relationships", "Relationship Issues",
    "Self-Esteem", "Stress", "Gender & Sexual Identity",
    "Adjustment Issues", "Abuse & Neglect"
  ],
  "approachText": "Kelly decided to become a therapist after overcoming her own history of adversity and trauma. She has since dedicated her life to empowering others with the tools to confront the impact of their own experiences and positively grow. She has worked with diverse populations across several states, including as an outreach counselor in child welfare in Hawaii and a school-based therapist in Ohio. Her approach is rooted in empathy, practical evidence-based strategies, and meeting you exactly where you are.",
  "modalities": [
    {"abbr": "TF-CBT", "name": "Trauma-Focused CBT", "desc": "Evidence-based treatment specifically designed for processing trauma and PTSD."},
    {"abbr": "CBT", "name": "Cognitive Behavioral Therapy", "desc": "Identifying and changing unhelpful thought patterns and behaviors."},
    {"abbr": "DBT", "name": "Dialectical Behavior Therapy", "desc": "Skills for managing emotions, improving relationships, and coping with stress."},
    {"abbr": "FS", "name": "Family Systems", "desc": "Understanding and improving dynamics within the family unit."},
    {"abbr": "MI", "name": "Motivational Interviewing", "desc": "Finding your own internal motivation for meaningful change."},
    {"abbr": "SFBT", "name": "Solution-Focused Brief Therapy", "desc": "Focusing on solutions and building on your existing strengths."},
    {"abbr": "NAR", "name": "Narrative Therapy", "desc": "Separates the person from the problem. Helps reauthor personal stories."},
    {"abbr": "RCT", "name": "Relational Cultural Therapy", "desc": "Healing through authentic connection and understanding relational patterns."},
    {"abbr": "PD", "name": "Psychodynamic Therapy", "desc": "Exploring deeper patterns and unconscious processes that shape current behavior."},
    {"abbr": "MBCT", "name": "Mindfulness-Based Therapy", "desc": "Cultivating present-moment awareness to reduce stress and improve well-being."},
    {"abbr": "TF", "name": "Trauma-Focused Therapy", "desc": "Comprehensive trauma-informed approaches beyond TF-CBT."},
    {"abbr": "REL", "name": "Relational Therapy", "desc": "Strengthening the capacity for healthy, authentic relationships."}
  ],
  "expectations": [
    {"s": "First sessions:", "t": "Kelly creates a nurturing, psychologically safe space from the start. She actively listens and witnesses your story with compassion. You guide the therapeutic process."},
    {"s": "Ongoing work:", "t": "Developing new skills and strategies to cope with past trauma or current challenges, reducing stress, and making positive changes to improve your well-being and relationships."},
    {"s": "Kelly's style:", "t": "Understanding and supportive. Clients trust her because she's intentional about gently guiding them toward their goals. She honors you as the expert of your own experiences."},
    {"s": "Session length:", "t": "Standard 50-minute individual sessions. Evening and Saturday hours available."},
    {"s": "Session format:", "t": "Individual therapy. In-person at the Rocky River office or secure telehealth video across Ohio. Hybrid scheduling available."}
  ],
  "faithText": "",
  "credentialDetails": [
    {"s": "License:", "t": "LISW (Licensed Independent Social Worker), Ohio I.2506227"},
    {"s": "Education:", "t": "Bachelor of Arts in Psychology, Michigan State University (1995). Master's in Education, University of New Mexico. Master of Social Work, Case Western Reserve University."},
    {"s": "Background:", "t": "Outreach counselor in child welfare (Hawaii). School-based therapist (Ohio). Worked with diverse populations across multiple states. Specializes in trauma, abuse, and neglect."},
    {"s": "Verified:", "t": "Psychology Today Verified with 7 professional endorsements."}
  ],
  "schedule": {
    "available": [
      {"day": "Tuesday", "time": "11:00 AM – 8:00 PM"},
      {"day": "Wednesday", "time": "11:00 AM – 8:00 PM"},
      {"day": "Thursday", "time": "11:00 AM – 8:00 PM"},
      {"day": "Friday", "time": "11:00 AM – 5:00 PM"},
      {"day": "Saturday", "time": "10:00 AM – 3:00 PM"}
    ],
    "unavailable": ["Monday", "Sunday"]
  }
};

export default function KellySalada() {
  return <TherapistProfile data={DATA} />;
}
