// Single source of truth for contact details, navigation and shared content.
// Edit here; every page reads from this file. Content sourced from
// "Daru Dewayanto Profile HADE & COA 100626.pdf" and the HADE company profile.

export const site = {
  name: "Daru Dewayanto",
  short: "Coach Daru",
  postnominals: "MCM · MCC · ICE-AC",
  role: "Founder, CEO & Master Coach of HADE, HADE AI & Center of Agility",
  tagline: "Master Coach for Agile Leaders",
  description:
    "Daru Dewayanto (Coach Daru), MCC, ICE-AC, is an internationally accredited, award-winning master agile coach. Executive coaching, agile leadership transformation and keynote speaking across Indonesia, Hong Kong, Qatar and Australia.",
  // TODO: replace once the personal domain is registered.
  url: "https://darudewayanto.com",
  email: "salam@hijrahcoach.co.id",
  phoneDisplay: "+62 811 1881 877",
  whatsapp: "628111881877",
  countries: ["Indonesia", "Hong Kong", "Qatar", "Australia"],
  // Site-wide photo treatment: "gold" (warm monochrome), "gray" (black & white) or "none".
  photoFilter: "gold" as "gold" | "gray" | "none",
};

const waMessages = {
  general: "Hello Coach Daru, I'd like to schedule a conversation.",
  coaching: "Hello Coach Daru, I'd like to discuss executive / agile leadership coaching.",
  transformation: "Hello Coach Daru, I'd like to discuss an agile transformation program for my organization.",
  speaking: "Hello Coach Daru, I'd like to invite you as a keynote speaker. Event, date and audience: ",
  programs: "Hello Coach Daru, I'd like to know more about your coaching certification programs (ACHC / CBHC / CHMP).",
} as const;

export type WaTopic = keyof typeof waMessages;

export const wa = (topic: WaTopic = "general", extra = "") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(waMessages[topic] + extra)}`;

export const nav = [
  { href: "/about", label: "About" },
  { href: "/coaching", label: "Coaching" },
  { href: "/speaking", label: "Speaking" },
  { href: "/programs", label: "Programs" },
  { href: "/contact", label: "Contact" },
];

export const stats = [
  { value: "30+", label: "Years as corporate leader & entrepreneur" },
  { value: "1,800+", label: "Coaches & practitioners trained and certified" },
  { value: "1,000+", label: "Companies, executives & business owners coached" },
  { value: "5,000+", label: "Training, coaching & mentoring hours" },
];

// The three master credentials shown as the "first & only" proof point.
export const masterBadges = [
  { logo: "ice-ac", name: "ICE-AC", full: "ICAgile Certified Expert in Agile Coaching" },
  { logo: "mcc", name: "MCC", full: "Master Certified Coach, International Coaching Federation" },
  { logo: "mind-master", name: "MIND Master Practitioner", full: "MyBrain Indicator of Neurological Dominance" },
];

export const masterCredentials = [
  { logo: "ice-ac", name: "ICE-AC", full: "ICAgile Certified Expert in Agile Coaching" },
  { logo: "mcc", name: "MCC", full: "Master Certified Coach, from ICF (International Coaching Federation)" },
  { logo: "mind-master", name: "MIND Master Practitioner", full: "MyBrain Indicator of Neurological Dominance" },
  { logo: "ecpc", name: "ECPC", full: "Erickson Certified Professional Coach, Erickson Coaching International" },
  { logo: "cca-coach", name: "CMC", full: "Certified Master Coach, Corporate Coach Academy" },
  { logo: "", name: "Stakeholder Centered Coaching", full: "Marshall Goldsmith" },
];

export const accreditedMembers = [
  { logo: "icagile", name: "ICAgile", full: "International Consortium for Agile, USA" },
  { logo: "icf", name: "ICF", full: "International Coaching Federation" },
  { logo: "mybrain", name: "MyBrain International", full: "Applied neuroscience, UK" },
  { logo: "wabc", name: "WABC", full: "Worldwide Association of Business Coaches" },
  { logo: "emcc", name: "EMCC", full: "European Mentoring & Coaching Council" },
  { logo: "erickson", name: "Erickson", full: "Erickson Coaching International" },
];

export const instructorBadges = ["icf-level1", "cce", "mind", "icagile-instructor", "accredited-course"];

export const awards = [
  { year: "2017 · 2018 · 2019", title: "100 Best Global Coaching Leader", by: "World Coaching Congress (WCC)" },
  { year: "2016 · 2017", title: "Top Business Award", by: "International Business Federation (IBF)" },
  { year: "HADE AI", title: "Top 10 Finalist, Startup World Cup", by: "Pegasus Tech Ventures" },
  { year: "HADE AI", title: "World Top Finalist", by: "Startup Istanbul" },
];

export const services = [
  {
    id: "coaching",
    icon: "coach",
    title: "Executive & Agile Leadership Coaching",
    short: "1-on-1 coaching for executives, founders and senior leaders leading change.",
    text: "Private coaching with an ICF Master Certified Coach for leaders who carry the weight of transformation. We work on how you think, decide and lead, so your team follows the change instead of resisting it.",
    items: [
      "1-on-1 executive coaching",
      "Leader as agile coach",
      "Stakeholder Centered Coaching (Marshall Goldsmith)",
      "Succession, women leader & next-generation leader programs",
    ],
    wa: "coaching" as const,
  },
  {
    id: "transformation",
    icon: "transform",
    title: "Agile Transformation & Advisory",
    short: "Business agility for organizations, from leadership alignment to scaled agility.",
    text: "Through HADE and Center of Agility, Coach Daru guides boards and leadership teams through agile transformation: assessing where you are, aligning leaders and mindset, and building an internal coaching culture that lasts.",
    items: [
      "Agile leader & mindset alignment",
      "Business Agility Assessment & Agile Health Check-up",
      "Team coaching & facilitation",
      "Coaching and learning culture advisory",
    ],
    wa: "transformation" as const,
  },
  {
    id: "profiling",
    icon: "brain",
    title: "Leader & Team Profiling",
    short: "Applied-neuroscience profiling that shows how leaders and teams think.",
    text: "As a MIND Master Practitioner, Coach Daru uses the MyBrain Indicator of Neurological Dominance to reveal how a leader or a team processes information, makes decisions and finds energy, then turns it into a coaching plan.",
    items: [
      "1-on-1 leader profiling & debrief",
      "Team profiling & team dynamics",
      "Energy & motivation mapping",
      "Delivered with MyBrain Indonesia",
    ],
    wa: "coaching" as const,
  },
];

export const speakingTopics = [
  {
    title: "Agility Begins With the Leader",
    text: "Why transformations stall at the top, and the mindset shift leaders need before any framework works.",
  },
  {
    title: "The Leader as Agile Coach",
    text: "Practical coaching skills that let managers lead change by asking, not just telling.",
  },
  {
    title: "Your Brain at Work",
    text: "Applied neuroscience for decision-making, collaboration and energy in high-pressure teams.",
  },
  {
    title: "Building a Coaching Culture",
    text: "How organizations like Telkom and Pertamina grew internal coaches and faculty at scale.",
  },
  {
    title: "AI and the Future of Learning",
    text: "Lessons from building HADE AI: using large language models to keep people learning between sessions.",
  },
  {
    title: "Entrepreneurship With Purpose",
    text: "Three decades as corporate leader and entrepreneur: growing a regional firm from a single practice.",
  },
];

export const speakingFormats = [
  { title: "Keynote", text: "45 to 60 minutes for conferences, leadership summits and company gatherings." },
  { title: "Executive Workshop", text: "Half-day or full-day, interactive sessions for boards and leadership teams." },
  { title: "Panel & Fireside", text: "Moderated conversations on leadership, agility, coaching and AI." },
];

export const programs = [
  {
    code: "ACHC",
    name: "Agile Certified Hijrah Coach",
    accreditation: "ICP-ACC, accredited by ICAgile",
    role: "Program Developer & Chief Instructor",
    text: "A professional agile coaching certification covering agile coaching foundations, advanced coaching techniques, team coaching & facilitation, and applied neuroscience for agility.",
    logos: ["icp-acc", "icagile"],
    href: "https://hade.belajaragile.com/certification",
  },
  {
    code: "CBHC",
    name: "Certified Business Hijrah Coach",
    accreditation: "ICF Level 1 Accredited Coaching Education",
    role: "Program Developer & Chief Instructor",
    text: "Coaching education built on the ICF Core Competencies, for leaders, consultants and professionals who want to coach to an international standard.",
    logos: ["icf-level1", "icf"],
    href: "",
  },
  {
    code: "CHMP",
    name: "Certified Hijrah MIND Practitioner",
    accreditation: "MyBrain International Limited (UK) & ICF CCE",
    role: "Master Trainer, Master Practitioner & Chief Instructor",
    text: "Practitioner certification in the MyBrain Indicator of Neurological Dominance (MIND), applying neuroscience to coaching, leadership and team development.",
    logos: ["mind", "cce"],
    href: "https://darudewayanto.github.io/mybrain-profile/",
  },
];

export const ventures = [
  {
    logo: "hade-navy",
    name: "HADE",
    text: "Internationally accredited agile coaching firm: 28 firms and 180 associate coaches across Indonesia, Hong Kong, Qatar, Australia and the Middle East.",
    href: "https://hade.belajaragile.com",
  },
  {
    logo: "center-of-agility",
    name: "Center of Agility",
    text: "The home of HADE's agile transformation, assessment and advisory practice.",
    href: "",
  },
  {
    logo: "emblem-gold",
    name: "HADE AI",
    text: "A large-language-model platform for digital learning. Top 10 finalist at the Startup World Cup.",
    href: "https://hade.belajaragile.com/hade-ai",
  },
  {
    logo: "mybrain",
    name: "MyBrain Indonesia",
    text: "Applied-neuroscience profiling and practitioner certification, licensed from MyBrain International, UK.",
    href: "https://darudewayanto.github.io/mybrain-profile/",
  },
];

export const journey = [
  {
    period: "Before 2011",
    title: "Corporate leader & entrepreneur",
    text: "Two decades leading in corporations and building businesses, the experience every coaching conversation still draws on.",
  },
  {
    period: "2011 – 2016",
    title: "Business coach to 1,000+ companies",
    text: "3,000+ coaching hours and 2,000+ training hours for corporations and MSMEs; official business coach partner of KADIN, HIPMI, IWAPI and Telkom Indonesia. Top Business Award from IBF in 2016.",
  },
  {
    period: "2017 – 2019",
    title: "From practice to platform",
    text: "Founded HADE as a firm-based coaching company. Named among the 100 Best Global Coaching Leaders by the World Coaching Congress three years running; awarded MIND Master Practitioner and Certified Master Coach.",
  },
  {
    period: "2020 – Today",
    title: "Master coach at regional scale",
    text: "Awarded ICF Master Certified Coach and ICAgile Certified Expert in Agile Coaching, the first and only holder of all three master credentials in Asia & Australia. Launched HADE AI and expanded to Hong Kong, Qatar, Australia and the Middle East.",
  },
];

export const clients = [
  "Telkom Group", "Pertamina", "Shell Indonesia", "XL Axiata", "BPJS", "Ministry of Manpower",
  "Samsung", "Henkel", "Indosat", "PLN", "Bulog", "Lemhannas",
];

// Client testimonials: add entries here and they appear automatically.
export type Testimonial = { quote: string; name: string; role: string };
export const testimonials: Testimonial[] = [];
