// Concern pages (/therapy/<slug>). `match` picks the therapists shown, from their tags.
export const TOPICS = [
  {
    slug: "anxiety",
    name: "Anxiety",
    title: "Therapy for anxiety.",
    lead: "Constant worry, racing thoughts, panic, or avoiding things that used to feel easy. Anxiety is one of the most common reasons people start therapy, and one of the most treatable.",
    body: [
      "Therapy helps you understand what drives your anxiety and gives you practical tools to calm your body, question anxious thoughts, and get back to the things you've been avoiding.",
      "Our therapists use research-backed approaches such as Cognitive Behavioral Therapy (CBT) and Acceptance and Commitment Therapy (ACT). For OCD and avoidance-driven anxiety, Exposure and Response Prevention (ERP) is available.",
    ],
    match: (t) => t.tags.includes("anxiety"),
  },
  {
    slug: "depression",
    name: "Depression",
    title: "Therapy for depression.",
    lead: "Low mood, losing interest in things you used to enjoy, trouble getting through the day, or just feeling numb. You don't have to push through it alone.",
    body: [
      "Therapy gives you a steady place to talk, understand what's weighing on you, and build small, doable steps back toward the life you want.",
      "If medication might help, we can share referral information for psychiatric care. NGU Wellness provides therapy only.",
    ],
    match: (t) => t.tags.includes("depression"),
  },
  {
    slug: "grief",
    name: "Grief & Loss",
    title: "Support through grief and loss.",
    lead: "The death of someone you love, the end of a relationship, or a life that changed overnight. Grief doesn't follow a schedule, and it can feel very lonely.",
    body: [
      "Grief counseling gives you room to feel what you feel, make sense of the loss, and find a way to carry it forward.",
    ],
    match: (t) => t.tags.includes("grief"),
  },
  {
    slug: "children-and-teens",
    name: "Children & Teens",
    title: "Therapy for children and teens.",
    lead: "Worry, big feelings, school stress, behavior changes, or a hard season at home. Our child and teen therapists help young people build skills, and help parents know how to support them.",
    body: [
      "We see children from age 5 and preteens and teens. Sessions can be in person or by telehealth, and parents or guardians are usually part of the process.",
    ],
    match: (t) => t.tags.includes("children") || t.tags.includes("teens"),
  },
  {
    slug: "couples",
    name: "Couples",
    title: "Couples and family therapy.",
    lead: "Communication that keeps breaking down, the same argument on repeat, trust that's been hurt, or a big change you're facing together.",
    body: [
      "Couples therapy gives you both a neutral space and a trained guide to understand each other, change the patterns, and decide what's next.",
      "Couples and family sessions are self-pay only; we don't bill them to insurance. See Insurance & Fees for the rate.",
    ],
    match: (t) => t.couples,
  },
];
