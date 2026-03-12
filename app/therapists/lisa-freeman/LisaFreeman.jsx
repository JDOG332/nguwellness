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
  "colorTint": "#EFF5F5",
  "colorBorder": "#B0CCCC",
  "status": "accepting",
  "badges": ["12 Yrs", "CBTi Specialist", "Play Therapy", "Children & Adults"],
  "formats": ["In-Person", "Telehealth"],
  "locationDetail": "In-person: 453 Patterson Rd., Suite A, Dayton, OH 45419 · Telehealth statewide",
  "ages": "Children 5+ through Adults & Elders (65+)",
  "faith": true,
  "quote": "Each person is on a unique journey shaped by their circumstances, dreams, goals, beliefs and emotions. I believe we all benefit from someone willing to sit with us, identify what we want and support us as we move forward toward those goals.",
  "calloutQuote": "My role is to understand your background, beliefs and aspirations and provide the tools and support needed to improve your well-being. I'll help you embrace honesty, acceptance and self-reflection to maintain mental, physical and emotional wellness.",
  "whoHelps": [
    {"s": "Children 5+ with anxiety, ADHD, or behavioral issues", "t": "— Lisa collaboratively works with kids and their parents, guardians, and families to identify triggers, understand emotions, and learn coping strategies."},
    {"s": "Adults dealing with anxiety, depression, or relationship issues", "t": "including spouses/partners, friends, coworkers, parent-child, siblings, and grandparent relationships."},
    {"s": "People struggling with insomnia or sleep disorders", "t": "— Lisa has specialized CBTi training to assess sleep patterns, challenge negative thoughts, and implement sleep restriction and relaxation strategies."},
    {"s": "Couples working through communication, conflict, or premarital concerns", "t": "practicing active listening, empathy, and conflict resolution to enhance understanding and connection."},
    {"s": "People who have experienced trauma or abuse", "t": "including childhood trauma, domestic violence, and sexual abuse — Lisa has extensive specialized training in sensory-based and trauma-focused interventions."},
    {"s": "Families navigating parenting challenges", "t": "family conflict, divorce, adoption, or caregiver stress."}
  ],
  "specialtiesFull": [
    "Anxiety", "Depression", "Insomnia & Sleep Disorders",
    "Children (5+)", "ADHD", "Behavioral Issues",
    "Relationship Issues", "Couples & Premarital",
    "Trauma & PTSD", "Childhood Trauma", "Sexual Abuse",
    "Domestic Abuse & Violence", "Family Conflict", "Parenting",
    "Adoption", "Caregivers", "OCD", "ODD",
    "Peer Relationships", "Self-Esteem", "Coping Skills",
    "Life Transitions", "Stress", "Divorce",
    "Education & Learning Disabilities", "Spirituality",
    "Parent-Child Relationships", "Abuse"
  ],
  "approachText": "Lisa has three deep areas of specialized expertise: 1) Working with children while collaboratively engaging parents, guardians, and families. 2) Working on relationship issues across all types — spouses, partners, friends, coworkers, parent-child, siblings, and grandparents. 3) Treating insomnia and sleep disorders with CBTi. Before becoming a counselor, Lisa worked in the medical field, where she became frustrated with the lack of honest communication between providers and patients — this drove her to pursue counseling with a focus on fostering open, authentic dialogue.",
  "modalities": [
    {"abbr": "CBT", "name": "Cognitive Behavioral Therapy", "desc": "Identifying and changing unhelpful thought patterns and behaviors."},
    {"abbr": "CBTi", "name": "CBT for Insomnia", "desc": "Specialized treatment assessing sleep patterns, challenging negative thoughts, and implementing sleep restriction and relaxation strategies."},
    {"abbr": "TF-CBT", "name": "Trauma-Focused CBT", "desc": "Evidence-based treatment specifically designed for processing trauma, especially childhood trauma."},
    {"abbr": "PT", "name": "Play Therapy & Sand Tray", "desc": "Evidence-based approaches for children using play, sand, and creative expression to identify triggers and learn coping strategies."},
    {"abbr": "ART", "name": "Art Therapy", "desc": "Using creative expression to process emotions and build insight."},
    {"abbr": "SMART", "name": "Sensory Motor Arousal Regulation", "desc": "Neurological and sensory-based interventions for regulating the body's stress response."},
    {"abbr": "CPRT", "name": "Child-Parent Relationship Therapy", "desc": "Strengthening the parent-child bond through structured therapeutic play."},
    {"abbr": "PCIT", "name": "Parent-Child Interaction Therapy", "desc": "Real-time coaching to improve parent-child interactions and reduce behavioral issues."},
    {"abbr": "ATT", "name": "Attachment-Based Therapy", "desc": "Understanding how early relationships shape current patterns in connections."},
    {"abbr": "FS", "name": "Family Systems Therapy", "desc": "Understanding and improving dynamics within the family unit."},
    {"abbr": "MI", "name": "Motivational Interviewing", "desc": "Finding your own internal motivation for meaningful change."},
    {"abbr": "NAR", "name": "Narrative Therapy", "desc": "Separates the person from the problem. Helps reauthor personal stories."},
    {"abbr": "PC", "name": "Person-Centered Therapy", "desc": "Creating a warm, empathetic environment where you guide your growth."},
    {"abbr": "SFBT", "name": "Solution-Focused Brief Therapy", "desc": "Focusing on solutions and building on your existing strengths."},
    {"abbr": "MBCBT", "name": "Mindfulness-Based CBT", "desc": "Integrating mindfulness with cognitive strategies for deeper awareness and change."}
  ],
  "expectations": [
    {"s": "First sessions:", "t": "Lisa sits with you, helps you identify what you want, and supports you as you work toward your goals. You can be unapologetically yourself, free from judgment."},
    {"s": "Ongoing work:", "t": "Developing a strong therapeutic relationship to improve communication, interpersonal skills, and self-awareness. Using insightful questioning to explore challenges, gain new perspectives, and identify practical strategies."},
    {"s": "Lisa's style:", "t": "Accepting and honest. Clients value the safe, judgment-free space she creates for open conversation and personal growth. She believes a good therapeutic relationship is built on openness, kindness, safety, and honesty."},
    {"s": "Session length:", "t": "Standard 50-minute sessions."},
    {"s": "Session format:", "t": "Individual, couples, and family therapy. In-person at the Dayton office or secure telehealth video across Ohio."}
  ],
  "faithText": "Lisa's expertise includes spirituality and spiritual trauma. She is comfortable exploring how faith, beliefs, and spiritual experiences — both positive and painful — connect to your overall well-being. This is always client-directed.",
  "credentialDetails": [
    {"s": "License:", "t": "LPC (Licensed Professional Counselor), Ohio C.1400530"},
    {"s": "Education:", "t": "Master's Degree in Professional Counseling, Liberty University (2014)."},
    {"s": "Specialized Training:", "t": "CBTi (insomnia treatment), Play Therapy, Sand Tray, Sensory Motor Arousal Regulation (SMART), TF-CBT, CPRT, PCIT, Art Therapy, BIPOC Affirming Therapy."},
    {"s": "Previous Career:", "t": "Medical field — Lisa's frustration with the lack of honest provider-patient communication drove her to pursue counseling."},
    {"s": "Verified:", "t": "Psychology Today Verified with 5 professional endorsements."}
  ],
  "schedule": {
    "available": [
      {"day": "Monday", "time": "9:00 AM – 8:00 PM"},
      {"day": "Tuesday", "time": "9:00 AM – 8:00 PM"},
      {"day": "Wednesday", "time": "9:30 AM – 7:30 PM"},
      {"day": "Friday", "time": "9:30 AM – 5:30 PM"}
    ],
    "unavailable": ["Thursday", "Weekends"]
  }
};

export default function LisaFreeman() {
  return <TherapistProfile data={DATA} />;
}
