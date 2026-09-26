/**
 * Single source of copy for the whole site.
 * Swap the values here once new content is provided — components read from this file only.
 */

export const site = {
  name: "Dhee Mentorship",
  tagline: "Your attitude determines your direction",
  email: "info.dmentorship@gmail.com",
  address:
    "DHEE Mentorship, Main Bazaar Road, Ramanathapuram, Tamil Nadu 623501, India",
  workingHours: "Mon – Sat, 9:30 AM – 6:30 PM",
  // TODO: add the real WhatsApp number, e.g. "https://wa.me/91XXXXXXXXXX" — every
  // "Chat on WhatsApp" link on the site reads from this one field.
  whatsapp: "",
};

export type NavItem =
  | { type: "link"; label: string; href: string }
  | {
      type: "dropdown";
      label: string;
      items: { title: string; href: string }[];
      viewAllLabel: string;
      viewAllHref: string;
    };

export const nav = {
  items: [
    { type: "link", label: "Home", href: "/" },
    { type: "link", label: "Study Abroad", href: "/study-abroad" },
    {
      type: "dropdown",
      label: "Services",
      items: [
        { title: "Visa Assistance", href: "/services/visa-assistance" },
        {
          title: "Apostille & Attestation",
          href: "/services/apostille-attestation",
        },
        {
          title: "Document Translation",
          href: "/services/document-translation",
        },
      ],
      viewAllLabel: "View All Services",
      viewAllHref: "/services",
    },
    { type: "link", label: "Jobs Abroad", href: "/jobs" },
    { type: "link", label: "Contact", href: "/contact" },
  ] satisfies NavItem[],
  cta: "Book Free Consultation",
};

export type FaqItem = { question: string; answer: string };

export const faq: FaqItem[] = [
  {
    question: "Is the initial consultation really free?",
    answer:
      "Yes. Every first consultation study abroad, visa, apostille, or translation is completely free with no obligation.",
  },
  {
    question: "What is an Apostille and do I need one?",
    answer:
      "A certificate authenticating a document for Hague Convention member countries; otherwise we handle full embassy attestation.",
  },
  {
    question: "How long does visa processing usually take?",
    answer:
      "Varies by country and visa type we give you a realistic timeline during your free consultation.",
  },
  {
    question: "Can you help with PCC (Police Clearance Certificate)?",
    answer: "Yes, part of our visa support service.",
  },
  {
    question: "Which countries do you support for study and jobs abroad?",
    answer:
      "Europe, China, UAE, Slovakia, Bulgaria, and Serbia, with jobs updated regularly.",
  },
  {
    question: "Do you offer certified document translation for all languages?",
    answer:
      "Yes legal, medical, academic, business, technical; reach out to confirm your specific language pair.",
  },
];

// ---------------------------------------------------------------------------
// Home
// ---------------------------------------------------------------------------

export const home = {
  hero: {
    badgeIcon: "Globe",
    badge: "Study, Work & Travel Abroad Simplified",
    headingLines: ["Turn Your Global Dreams", "Into Reality"],
    descriptionLines: [
      "Dhee Mentorship guides you through study abroad admissions,",
      "visa assistance and certified translation.",
    ],
    ctaPrimary: "Book Free Consultation",
    ctaSecondary: "Explore Our Services",
  },

  topDestinationsOrbit: {
    centerLabel: "Top Destinations",
    // ISO 3166-1 alpha-2 codes (flagcdn.com), placed clockwise starting at the top
    countries: [
      { name: "UK", code: "gb" },
      { name: "USA", code: "us" },
      { name: "Canada", code: "ca" },
      { name: "Europe", code: "eu" },
      { name: "Russia", code: "ru" },
      { name: "Australia", code: "au" },
    ],
  },

  travelMoment: {
    lineOne: "Simplifying travel, one visa at a time.",
    lineTwo: "We make your visa process effortless.",
  },

  offer: {
    eyebrow: "What We Offer",
    heading: "Everything you need, in one place",
    tabs: [
      {
        label: "Study Abroad",
        title: "Study Abroad Consultancy",
        description:
          "End-to-end guidance to choose the right country, course, and university for your goals.",
      },
      {
        label: "Visa",
        title: "Visa Assistance",
        description:
          "Complete visa support from documentation to interview preparation and tracking.",
      },
      {
        label: "Apostille",
        title: "Apostille & Attestation",
        description:
          "Fast, reliable attestation for personal, educational, legal, and commercial documents.",
      },
      {
        label: "Translation",
        title: "Document Translation",
        description:
          "Certified, globally accepted translations for legal, medical, academic, and business documents.",
      },
      {
        label: "Jobs Abroad",
        title: "Jobs Abroad",
        description:
          "Country-wise job openings we're actively helping candidates apply for, with guidance through the full application process.",
      },
    ],
    whyUs: [
      { title: "End-to-End Guidance", description: "We handle every step." },
      {
        title: "Trusted & Transparent",
        description: "Clear timelines, no hidden costs.",
      },
      { title: "Fast Turnaround", description: "Streamlined processes." },
      {
        title: "Local Roots, Global Reach",
        description:
          "Based in Ramanathapuram, connecting locally to opportunities worldwide.",
      },
    ],
  },

  stats: [
    { value: 2500, suffix: "+", label: "Students & Clients Guided" },
    { value: 95, suffix: "%", label: "Visa Success Rate" },
    { value: 15, suffix: "+", label: "Countries Covered" },
    { value: 8, suffix: "+", label: "Years of Experience" },
  ],

  destinations: {
    eyebrow: "Pick Your Destination",
    heading: "Where do you want to go?",
    viewAllLabel: "View All Destinations",
    viewAllHref: "/study-abroad",
    items: [
      {
        name: "Europe",
        code: "EU",
        tag: "Popular",
        description:
          "World-class universities, affordable tuition, strong post-study work options across the EU.",
      },
      {
        name: "China",
        code: "CN",
        tag: "Scholarships",
        description:
          "Government/university scholarships with globally recognized degrees at low cost.",
      },
      {
        name: "UAE",
        code: "AE",
        tag: "Jobs & Study",
        description:
          "Thriving hub for jobs and higher education, tax-free income, modern campuses.",
      },
    ],
  },

  testimonials: {
    eyebrow: "Success Stories",
    heading: "Real people, real progress",
    items: [
      {
        quote:
          "Dhee Mentorship made my study abroad process so simple. From university selection to visa interview prep, they were with me at every step.",
        tag: "Studying in Germany",
        name: "Arun K.",
        role: "Studying in Germany",
      },
      {
        quote:
          "My educational certificates were apostilled within days. Professional team and very responsive on WhatsApp.",
        tag: "Document Attestation",
        name: "Priya S.",
        role: "Document Attestation Client",
      },
      {
        quote:
          "Got my job offer and visa sorted quickly. The team explained everything clearly and kept me updated throughout.",
        tag: "Placed in UAE",
        name: "Mohamed I.",
        role: "Placed in UAE",
      },
    ],
  },

  finalCta: {
    heading: "Ready to Start Your Journey Abroad?",
    subtext: "Book a free consultation with our experts today no obligations.",
    ctaPrimary: "Book Free Consultation",
    ctaSecondary: "Chat on WhatsApp",
  },
};

// ---------------------------------------------------------------------------
// Study Abroad
// ---------------------------------------------------------------------------

export const studyAbroad = {
  hero: {
    breadcrumb: ["Services", "Study Abroad"],
    eyebrow: "Study Abroad Consultancy",
    headingLines: ["Study Abroad, With", "the Right Guidance"],
    description:
      "From choosing your country and course to securing admission and job opportunities we help you plan your study abroad journey with confidence.",
  },

  whyChoose: {
    headingLines: ["Why Choose", "Dhee Mentorship"],
    intro:
      "The advantages of planning your study abroad journey with a dedicated consultancy.",
    tiles: [
      {
        title: "Time Saving.",
        description: "Faster visa and document processing, start to finish.",
      },
      {
        title: "Cost Efficient.",
        description: "Transparent pricing, no hidden fees.",
      },
      {
        title: "Faster Workflows.",
        description: "Streamlined applications from day one.",
      },
      {
        title: "Better Insights.",
        description: "Clear guidance at every step of your journey.",
      },
      {
        title: "Higher Accuracy.",
        description: "Fewer errors, fewer avoidable rejections.",
      },
      {
        title: "Easy Scaling.",
        description: "Support across 15+ countries and counting.",
      },
    ],
  },

  featurePair: [
    {
      title: "Course Opportunities",
      description:
        "We help match your academic background and career goals to the right course from undergraduate and postgraduate programs to diplomas and language courses at universities across our partner destinations.",
    },
    {
      title: "Job Opportunities",
      description:
        "Many of our destinations offer strong post-study work rights and part-time job opportunities during studies, helping you gain international experience while you learn.",
    },
  ],

  finalCta: {
    heading: "Start Planning Your Study Abroad Journey",
    subtext:
      "Get personalized guidance on destinations, courses, and applications completely free.",
    ctaPrimary: "Book Free Consultation",
  },
};

// ---------------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------------

export type Service = {
  slug: string;
  title: string;
  description: string;
};

export const services = {
  hero: {
    eyebrow: "Our Services",
    headingLines: ["Everything You Need,", "Under One Roof"],
    description:
      "From choosing the right course abroad to getting your documents ready for global acceptance explore our complete range of services.",
  },

  grid: [
    {
      slug: "study-abroad-consultancy",
      title: "Study Abroad Consultancy",
      description:
        "End-to-end guidance to choose the right country, course, and university for your goals.",
    },
    {
      slug: "visa-assistance",
      title: "Visa Assistance",
      description:
        "Complete visa support — from documentation to interview preparation and tracking.",
    },
    {
      slug: "apostille-attestation",
      title: "Apostille & Attestation",
      description:
        "Fast, reliable attestation for personal, educational, legal, and commercial documents.",
    },
    {
      slug: "pcc-assistance",
      title: "PCC Assistance",
      description:
        "Hassle-free Police Clearance Certificate support for your visa and job applications.",
    },
    {
      slug: "document-translation",
      title: "Document Translation",
      description:
        "Certified, globally accepted translations for legal, medical, academic, and business documents.",
    },
  ] satisfies Service[],

  finalCta: {
    heading: "Not Sure Which Service You Need?",
    subtext:
      "Talk to our consultants — we'll guide you to the right solution, free of cost.",
    ctaPrimary: "Book Free Consultation",
  },
};

// ---------------------------------------------------------------------------
// Visa Assistance (service detail page)
// ---------------------------------------------------------------------------

export const visaAssistance = {
  hero: {
    breadcrumb: ["Services", "Visa Assistance"],
    eyebrow: "Visa Support",
    headingLines: ["Visa", "Assistance Services"],
    description:
      "Every visa type has its own paperwork, timeline and pitfalls. We walk you through each stage — documentation, interviews, and tracking — so nothing catches you off guard.",
  },

  process: {
    eyebrow: "Our Process",
    headingLines: ["Step-by-Step", "Visa Process"],
    steps: [
      {
        title: "Consultation",
        description:
          "A free session to understand your goals and map out the right visa pathway.",
      },
      {
        title: "Document Preparation",
        description: "We help you gather, verify, and organize everything your application needs.",
      },
      {
        title: "Application Submission",
        description: "Your file is filed accurately and on time with the relevant authority.",
      },
      {
        title: "Interview Preparation",
        description: "Mock interviews and coaching so you walk in ready for anything.",
      },
      {
        title: "Tracking & Updates",
        description: "Regular status updates so you always know exactly where things stand.",
      },
    ],
  },

  moreThan: {
    headingLines: ["More Than", "Just Visa Filing"],
    items: [
      {
        title: "Translation",
        description: "Certified translation of supporting documents wherever it's required.",
      },
      {
        title: "Embassy Coordination",
        description: "We liaise directly with embassies on legalization of key documents.",
      },
      {
        title: "Apostille Support",
        description: "Apostille of educational and personal documents for your visa file.",
      },
    ],
  },

  finalCta: {
    heading: "Ready to Start Your Visa Application?",
    subtext: "Book a free consultation and we'll map out your exact visa pathway.",
    ctaPrimary: "Book Free Consultation",
  },
};

// ---------------------------------------------------------------------------
// Apostille & Attestation (service detail page)
// ---------------------------------------------------------------------------

export const apostilleAttestation = {
  hero: {
    breadcrumb: ["Services", "Apostille & Attestation"],
    eyebrow: "Document Legalization",
    headingLines: ["Apostille &", "Attestation Services"],
    description:
      "Get your personal, educational, legal, and commercial documents apostilled or attested for hassle-free use anywhere in the world.",
  },

  whatIsApostille: {
    eyebrow: "What Is Apostille?",
    heading: "A Simple Certificate That Makes Your Documents Valid Worldwide",
    paragraphs: [
      "An apostille is a form of authentication issued for documents used in countries that are members of the Hague Apostille Convention. It confirms the origin of a public document — such as an official seal or signature — so it's recognized abroad without further legalization.",
      "For countries outside the convention, we handle full embassy attestation instead, coordinating directly with the relevant consulates on your behalf.",
    ],
    ctaLabel: "Book Free Consultation",
    stats: [
      {
        title: "Fast",
        description: "A streamlined process with clear timelines and regular status updates.",
      },
      {
        title: "Reliable",
        description: "Verified procedures that meet embassy and government standards.",
      },
      {
        title: "Globally Accepted",
        description: "Documents accepted across 120+ Hague Convention member countries.",
      },
    ],
  },

  finalCta: {
    heading: "Ready to Get Your Documents Apostilled?",
    subtext: "Book a free consultation and we'll map out the exact steps for your documents.",
    ctaPrimary: "Book Free Consultation",
  },
};

// ---------------------------------------------------------------------------
// Document Translation (service detail page)
// ---------------------------------------------------------------------------

export const documentTranslation = {
  hero: {
    breadcrumb: ["Services", "Document Translation"],
    eyebrow: "Certified Translation",
    headingLines: ["Document", "Translation Services"],
    description:
      "Accurate, certified translations for legal, medical, academic, business, and technical documents — accepted globally.",
  },

  certifiedFor: {
    headingLines: ["Certified Translations", "for Every Need"],
    description:
      "Our certified linguists translate documents across multiple languages, ensuring they retain full legal and professional validity in the destination country.",
    categories: [
      {
        title: "Legal & Immigration Documents",
        description: "Visa applications, court documents, contracts, and affidavits translated with legal precision.",
      },
      {
        title: "Business & Financial Documents",
        description: "Agreements, financial statements, and corporate records translated for international business.",
      },
      {
        title: "Medical Reports",
        description: "Prescriptions, diagnostic reports, and medical records translated accurately for treatment abroad.",
      },
      {
        title: "Technical Documents",
        description: "Manuals, specifications, and product documentation translated with subject-matter accuracy.",
      },
      {
        title: "Academic Records",
        description: "Degree certificates, mark sheets, and transcripts translated for university admissions.",
      },
    ],
  },

  documentsWeHandle: {
    headingLines: ["Documents", "We Handle"],
    categories: [
      {
        title: "Personal Documents",
        items: ["Birth Certificate", "Marriage Certificate", "PCC", "Affidavits"],
      },
      {
        title: "Educational Documents",
        items: ["Degree Certificate", "Mark Sheets", "Transfer Certificate", "Diplomas"],
      },
      {
        title: "Legal Documents",
        items: ["Power of Attorney", "Court Orders", "Notarized Agreements", "Adoption Papers"],
      },
      {
        title: "Commercial & Corporate Documents",
        items: ["Certificate of Incorporation", "Invoices", "MOA/AOA", "Board Resolutions"],
      },
    ],
  },

  howItWorks: {
    headingLines: ["How It", "Works"],
    steps: [
      {
        title: "Document Verification",
        description: "We review your documents for eligibility and completeness before starting the process.",
      },
      {
        title: "Notarization",
        description: "Your documents are notarized by authorized local notaries as the first layer of verification.",
      },
      {
        title: "State / Home Department Authentication",
        description: "Documents are authenticated at the relevant state or home department.",
      },
      {
        title: "MEA Apostille / Attestation",
        description:
          "Final apostille or attestation is obtained from the Ministry of External Affairs (MEA) or the destination country's embassy.",
      },
      {
        title: "Delivery",
        description: "Your apostilled or attested documents are securely delivered to you, ready for global use.",
      },
    ],
  },

  whyUs: {
    items: [
      { title: "Accuracy", description: "Every translation is reviewed for linguistic and contextual accuracy." },
      {
        title: "Global Acceptance",
        description: "Certified translations accepted by embassies, universities, and authorities worldwide.",
      },
      {
        title: "Quick Turnaround",
        description: "Most documents translated and certified within 24–48 hours.",
      },
    ],
  },

  finalCta: {
    heading: "Ready to Get Your Documents Translated?",
    subtext: "Book a free consultation and we'll guide you through certified translation for your documents.",
    ctaPrimary: "Book Free Consultation",
  },
};

// ---------------------------------------------------------------------------
// Jobs Abroad
// ---------------------------------------------------------------------------

export type JobListing = {
  title: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string;
  postedDaysAgo: number;
};

export const jobs = {
  hero: {
    breadcrumb: ["Jobs"],
    eyebrow: "Jobs Abroad",
    headingLines: ["Current", "Vacancies Abroad"],
    description:
      "Browse country-wise job openings we're currently helping candidates apply for, complete with guidance on the full application process.",
  },

  emptyState: "No openings currently listed for this country. Check back soon.",

  listings: [
    {
      title: "Warehouse Associate",
      location: "Dubai, UAE",
      type: "Full-time",
      salary: "AED 1,800–2,200/mo",
      description:
        "Handle stock movement, order picking, packing. Accommodation + transport provided.",
      requirements:
        "18–40 years, Basic English, warehouse experience preferred",
      postedDaysAgo: 2,
    },
    {
      title: "CNC Machine Operator",
      location: "Bratislava, Slovakia",
      type: "Full-time",
      salary: "€1,100–1,400/mo",
      description:
        "Operate/monitor CNC machines in automotive manufacturing. On-site training provided.",
      requirements:
        "ITI/Diploma Mechanical, 1+ yrs experience, willing to relocate",
      postedDaysAgo: 5,
    },
    {
      title: "Hotel Housekeeping Staff",
      location: "Abu Dhabi, UAE",
      type: "Full-time",
      salary: "AED 1,500–1,800/mo",
      description:
        "Maintain cleanliness of guest rooms/common areas in a 4-star hotel.",
      requirements:
        "Hospitality experience, good communication, physically fit",
      postedDaysAgo: 1,
    },
    {
      title: "Welder (MIG/TIG)",
      location: "Belgrade, Serbia",
      type: "Full-time",
      salary: "€1,000–1,300/mo",
      description:
        "Skilled welding in a growing metal fabrication company. Free accommodation.",
      requirements: "Welding certification, 2+ yrs experience, Basic English",
      postedDaysAgo: 6,
    },
    {
      title: "Nursing Assistant",
      location: "Sofia, Bulgaria",
      type: "Full-time",
      salary: "€900–1,200/mo",
      description: "Support patient care in a private healthcare facility.",
      requirements:
        "GNM/B.Sc Nursing, registered nurse preferred, Basic English",
      postedDaysAgo: 3,
    },
    {
      title: "Delivery Driver",
      location: "Sharjah, UAE",
      type: "Full-time",
      salary: "AED 2,000–2,500/mo",
      description: "Deliver parcels using a company vehicle.",
      requirements:
        "Valid driving license, GCC license eligibility, Basic English",
      postedDaysAgo: 4,
    },
  ] satisfies JobListing[],

  closing: {
    heading: "We Guide You Through Every Step",
    description:
      "From resume preparation and profile matching to work visa processing and travel formalities — our team supports you end-to-end so you can focus on starting your new role with confidence.",
    ctaPrimary: "Book Free Consultation",
    ctaSecondary: "Chat on WhatsApp",
  },
};

// ---------------------------------------------------------------------------
// Contact
// ---------------------------------------------------------------------------

export const contact = {
  hero: {
    breadcrumb: ["Contact"],
    eyebrow: "Get in Touch",
    headingLines: ["Book Your", "Free Consultation"],
    description:
      "Have a question about study abroad, visas, attestation, or translation? Reach out — our team responds within one business day.",
  },

  infoCards: [
    { label: "Office Address", value: site.address },
    { label: "Email", value: site.email },
    { label: "Working Hours", value: site.workingHours },
    { label: "Chat on WhatsApp", value: "Get a quick response from our team." },
  ],

  form: {
    heading: "Send Us a Message",
    subtext: "Fill out the form and we'll get back to you shortly.",
    serviceOptions: [
      "Study Abroad Consultancy",
      "Visa Assistance",
      "Apostille & Attestation",
      "PCC Assistance",
      "Document Translation",
      "Jobs Abroad",
      "Other",
    ],
    submitLabel: "Book Free Consultation",
    successMessage:
      "Thank you! Your inquiry has been received. Our team will contact you within one business day.",
  },
};

// slugs from services.grid that have their own detail page, mapped to its
// route — shared by the footer links and the services grid cards so both
// stay in sync as more detail pages get built.
export const serviceDetailHref: Partial<Record<string, string>> = {
  "visa-assistance": "/services/visa-assistance",
  "apostille-attestation": "/services/apostille-attestation",
  "document-translation": "/services/document-translation",
};

export const footer = {
  blurb:
    "Guiding you through study abroad, visas, attestation and translation end to end.",
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "Study Abroad", href: "/study-abroad" },
    { label: "Services", href: "/services" },
    { label: "Jobs Abroad", href: "/jobs" },
    { label: "Contact", href: "/contact" },
  ],
  services: services.grid.map((s) => ({
    label: s.title,
    href: serviceDetailHref[s.slug] ?? `/services#${s.slug}`,
  })),
  legal: `© ${new Date().getFullYear()} Dhee Mentorship. All rights reserved.`,
};
