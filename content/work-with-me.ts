import {
  Blocks,
  CodeXml,
  Gauge,
  MessagesSquare,
  Network,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

export const workWithMeContent = {
  hero: {
    eyebrow: "Tech Lead · React Native Architect",
    title: "Work with me",
    lead: "I help product teams turn complex mobile challenges into scalable, maintainable, and shippable systems.",
    supporting: [
      "Architecture-first mindset.",
      "Hands-on delivery.",
      "Clear decisions. Predictable outcomes.",
    ],
    note: ["Build once.", "Scale with confidence.", "Ship with clarity."],
  },
  engagements: [
    {
      icon: Network,
      title: "Mobile architecture & audits",
      description: "Architecture reviews, codebase audits, and roadmap design that reduce risk, improve performance, and accelerate feature velocity.",
      points: ["Architecture assessment", "Scalability & performance review", "Migration & modernisation planning"],
    },
    {
      icon: CodeXml,
      title: "React Native delivery",
      description: "End-to-end React Native development with production-quality standards and a focus on reliability, UX, and maintainability.",
      points: ["New app development", "Performance & stability", "Integrations & native modules"],
    },
    {
      icon: UsersRound,
      title: "Technical leadership & mentoring",
      description: "An experienced extension of your team to set direction, unblock delivery, and raise the engineering bar.",
      points: ["Tech lead or interim leadership", "Process & engineering practices", "Mentoring & team enablement"],
    },
  ],
  principles: [
    { icon: Gauge, title: "Architecture first", text: "The right structure today avoids costly rewrites tomorrow." },
    { icon: Blocks, title: "Ship iteratively", text: "Small, valuable increments with tight feedback loops and clear milestones." },
    { icon: ShieldCheck, title: "Quality by design", text: "Performance, testability, privacy, and reliability built in—not bolted on." },
    { icon: MessagesSquare, title: "Clarity always", text: "Transparent communication, documentation, and decision-making." },
  ],
  process: [
    { title: "Discover", text: "Understand your product, users, constraints, and goals. I ask the right questions before suggesting solutions." },
    { title: "Define", text: "Set scope, success metrics, architecture direction, and an execution plan aligned with your roadmap." },
    { title: "Deliver", text: "Build, iterate, and integrate with your team. You get working software and visible progress." },
    { title: "Evolve", text: "Measure outcomes, refine the architecture, and continuously raise the bar as you scale." },
  ],
  fit: {
    good: [
      "You have a product problem that needs a strong technical foundation.",
      "You want to scale a React Native app without slowing down.",
      "You value clean architecture, performance, and maintainability.",
      "You prefer a partner who can lead and also get hands-on.",
      "You care about long-term outcomes over quick fixes.",
    ],
    notIdeal: [
      "You are looking only for the cheapest option available.",
      "You need someone to follow instructions without context.",
      "The problem, goals, or ownership cannot be clarified.",
      "You expect overnight transformation without collaboration.",
      "You prefer isolated work with no communication.",
    ],
  },
  proof: [
    { value: "10+", label: "Years experience" },
    { value: "40+", label: "Apps shipped" },
    { value: "4", label: "Privacy-first products" },
    { value: "Privacy", label: "& security by default" },
  ],
  faqs: [
    { question: "How do you typically work with teams?", answer: "I embed closely enough to understand the product and constraints, then adapt the engagement to what creates the most leverage: architecture guidance, hands-on delivery, technical leadership, or a blend of all three." },
    { question: "What does a typical engagement look like?", answer: "Most engagements begin with a focused discovery and technical assessment. From there, we agree on outcomes, scope, milestones, communication rhythm, and the right balance of advisory and implementation work." },
    { question: "Do you work on fixed-price or time-and-material engagements?", answer: "Both can work. A defined audit or architecture review can be fixed-scope. Product delivery and embedded leadership are usually better suited to a time-based engagement because priorities evolve as we learn." },
    { question: "Can you work with an existing product and team?", answer: "Yes. Much of my work involves joining an existing codebase, understanding its history, and helping the team improve it without disrupting active delivery." },
  ],
  contact: {
    email: "subraatakumar@gmail.com",
    subject: "Project enquiry from subraatakumar.com",
    promise: ["Clear plan.", "Strong architecture.", "Measurable results."],
  },
} as const;
