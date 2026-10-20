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
  url: "https://coachdaru.belajaragile.com",
  email: "salam@hijrahcoach.co.id",
  phoneDisplay: "+62 811 1881 877",
  whatsapp: "628111881877",
  countries: ["Indonesia", "Hong Kong", "Qatar", "Australia"],
  // Site-wide photo treatment: "gold" (warm monochrome), "gray" (black & white) or "none".
  photoFilter: "gray" as "gold" | "gray" | "none",
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
  { href: "/programs", label: "Programs" },
  { href: "/contact", label: "Contact" },
];

// Detail pages live on the business-unit websites; this site links out to them.
const hade = "https://hade.belajaragile.com";
const mybrain = "https://darudewayanto.github.io/mybrain-profile";
export const links = {
  hade,
  hadeCorporate: `${hade}/solutions#corporate`,
  hadeTransformation: `${hade}/solutions#transformation`,
  hadeCertification: `${hade}/certification`,
  hadeAi: `${hade}/hade-ai`,
  mybrain: `${mybrain}/`,
  mybrainServices: `${mybrain}/layanan`,
};

export const stats = [
  { value: "30+", label: "Years as corporate leader & entrepreneur" },
  { value: "1,800+", label: "Coaches & practitioners trained and certified" },
  { value: "1,000+", label: "Companies, executives & business owners coached" },
  { value: "5,000+", label: "Training, coaching & mentoring hours" },
];

// The three master credentials shown as the "first & only" proof point.
export const masterBadges = [
  { logo: "mcc", name: "Master Certified Coach", by: "MCC by ICF", full: "Master Certified Coach (MCC) by ICF" },
  { logo: "ice-ac", name: "IC-Agile Expert in Agile Coaching", by: "ICE-AC by IC-Agile", full: "IC-Agile Expert in Agile Coaching (ICE-AC) by IC-Agile" },
  { logo: "mind-master", name: "MiND Master Practitioner", by: "by MyBrain", full: "MiND Master Practitioner by MyBrain" },
];

export const masterCredentials = [
  { logo: "mcc", name: "Master Certified Coach", by: "MCC by ICF" },
  { logo: "ice-ac", name: "IC-Agile Expert in Agile Coaching", by: "ICE-AC by IC-Agile" },
  { logo: "mind-master", name: "MiND Master Practitioner", by: "by MyBrain" },
  { logo: "ecpc", name: "Erickson Certified Professional Coach", by: "ECPC by Erickson Coaching International" },
  { logo: "cca-coach", name: "Certified Master Coach", by: "CMC by Corporate Coach Academy" },
  { logo: "marshall-goldsmith", name: "Stakeholder Centered Coaching", by: "by Marshall Goldsmith" },
];

export const accreditedMembers = [
  { logo: "icagile", name: "ICAgile", full: "International Consortium for Agile, USA" },
  { logo: "icf", name: "ICF", full: "International Coaching Federation" },
  { logo: "mybrain", name: "MyBrain International", full: "Applied neuroscience, UK" },
  { logo: "wabc", name: "WABC", full: "Worldwide Association of Business Coaches" },
  { logo: "emcc", name: "EMCC", full: "European Mentoring & Coaching Council" },
  { logo: "erickson", name: "Erickson", full: "Erickson Coaching International" },
];

export const instructorBadges = ["icp-acc", "icf-level1", "cce", "mind", "icagile-instructor", "accredited-course"];

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
    text: "1-on-1 coaching with an ICF Master Certified Coach for executives and senior leaders responsible for an agile transformation.",
    items: [
      "1-on-1 executive coaching",
      "Leader as agile coach",
      "Stakeholder Centered Coaching (Marshall Goldsmith)",
      "Succession, women leader & next-generation leader programs",
    ],
    wa: "coaching" as const,
    details: { label: "Details on HADE", href: links.hadeCorporate },
  },
  {
    id: "transformation",
    icon: "transform",
    title: "Agile Transformation & Advisory",
    short: "Business agility for organizations, from leadership alignment to scaled agility.",
    text: "Through HADE and Center of Agility, Coach Daru works with leadership teams on agile transformation: business agility assessment, leader and mindset alignment, and internal coaching culture.",
    items: [
      "Agile leader & mindset alignment",
      "Business Agility Assessment & Agile Health Check-up",
      "Team coaching & facilitation",
      "Coaching and learning culture advisory",
    ],
    wa: "transformation" as const,
    details: { label: "Details on HADE", href: links.hadeTransformation },
  },
  {
    id: "profiling",
    icon: "brain",
    title: "Leader & Team Profiling",
    short: "Applied-neuroscience profiling that shows how leaders and teams think.",
    text: "As a MIND Master Practitioner, Coach Daru uses the MyBrain Indicator of Neurological Dominance to profile how a leader or a team processes information and makes decisions.",
    items: [
      "1-on-1 leader profiling & debrief",
      "Team profiling & team dynamics",
      "Energy & motivation mapping",
      "Delivered with MyBrain Indonesia",
    ],
    wa: "coaching" as const,
    details: { label: "Details on MyBrain", href: links.mybrainServices },
  },
];

export const speakingTopics = [
  { title: "Agile Leadership", text: "Leading an agile transformation as a senior leader." },
  { title: "The Leader as Agile Coach", text: "Coaching skills for managers, from the ICP-ACC program Coach Daru designed and teaches." },
  { title: "Applied Neuroscience", text: "MIND neuro-dominance profiling for leaders and teams, with MyBrain International." },
  { title: "Building a Coaching Culture", text: "Experience from in-house programs with Telkom Group and Pertamina Group." },
  { title: "AI for Learning", text: "Building HADE AI, a Startup World Cup Top 10 finalist." },
  { title: "Entrepreneurship", text: "30+ years as a corporate leader and entrepreneur." },
]

export const speakingFormats: { title: string; text: string }[] = [];

export const programs = [
  {
    code: "ACHC",
    name: "Agile Certified Hijrah Coach",
    accreditation: "ICP-ACC, accredited by ICAgile",
    role: "Program Developer & Chief Instructor",
    text: "A professional agile coaching certification covering agile coaching foundations, advanced coaching techniques, team coaching & facilitation, and applied neuroscience for agility.",
    logos: ["icp-acc", "icagile"],
    href: links.hadeCertification,
    site: "HADE",
  },
  {
    code: "CBHC",
    name: "Certified Business Hijrah Coach",
    accreditation: "ICF Level 1 Accredited Coaching Education",
    role: "Program Developer & Chief Instructor",
    text: "Coaching education built on the ICF Core Competencies, for leaders, consultants and professionals who want to coach to an international standard.",
    logos: ["icf-level1", "icf"],
    href: links.hadeCertification,
    site: "HADE",
  },
  {
    code: "CHMP",
    name: "Certified Hijrah MIND Practitioner",
    accreditation: "MyBrain International Limited (UK) & ICF CCE",
    role: "Master Trainer, Master Practitioner & Chief Instructor",
    text: "Practitioner certification in the MyBrain Indicator of Neurological Dominance (MIND), applying neuroscience to coaching, leadership and team development.",
    logos: ["mind", "cce"],
    href: links.mybrainServices,
    site: "MyBrain",
  },
];

export const ventures = [
  {
    logo: "hijrah-coach",
    name: "Hijrah Coach Group",
    text: "The parent group: 28 coaching firms, 180 associate coaches and 1,800 graduate coaches, with subsidiaries and partners from Indonesia to the Gulf.",
    href: "",
  },
  {
    logo: "hade-navy",
    name: "HADE",
    text: "Internationally accredited agile coaching firm for corporate and enterprise agile transformation in Indonesia, Hong Kong, Qatar and Australia.",
    href: links.hade,
  },
  {
    logo: "hade-ai",
    name: "HADE AI",
    text: "A large-language-model platform for digital learning. Top 10 finalist at the Startup World Cup.",
    href: links.hadeAi,
  },
  {
    logo: "agile-hijrah-coaching",
    name: "Agile Hijrah Coaching (AHC)",
    text: "A movement serving the ummah: agile coaching certification for ustadz/ah and leaders in dakwah, education and humanitarian work. 250 graduates, 23 batches, 70 pondok & schools in 9 cities.",
    href: "",
  },
  {
    logo: "center-of-agility",
    name: "Center of Agility",
    text: "Agile capability for corporates and universities, from ITB and Telkom University to UPN, Trisakti and Udinus.",
    href: "",
  },
  {
    logo: "mybrain",
    name: "MyBrain Indonesia",
    text: "Applied-neuroscience profiling and practitioner certification, licensed from MyBrain International, UK.",
    href: links.mybrain,
  },
];

export const journey = [
  {
    period: "Before 2011",
    title: "Corporate leader & entrepreneur",
    text: "Years in corporate leadership and in building businesses, before starting a coaching practice in 2011.",
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
