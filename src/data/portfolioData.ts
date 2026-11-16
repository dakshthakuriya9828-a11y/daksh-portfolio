export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  score?: string;
  scoreLabel?: string;
  highlight?: string;
  badge?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  rank: string;
  organization: string;
  category: "academic" | "entrepreneurship" | "speaking" | "honor";
  description: string;
  metric?: string;
  tag: string;
}

export interface RollerSkatingLevel {
  level: "District" | "State" | "National";
  title: string;
  award: string;
  significance: string;
  color: string;
}

export interface SportItem {
  name: string;
  category: string;
  accomplishments: string[];
  keyHighlight: string;
  badge: string;
}

export interface LeadershipRole {
  title: string;
  organization: string;
  period?: string;
  roleType: "captaincy" | "governance" | "anchoring" | "curation";
  responsibilities: string[];
  vipGuests?: string[];
  impactBadge: string;
}

export interface BusinessExperience {
  role: string;
  company: string;
  period?: string;
  industry: string;
  nature: "Operational Management" | "Family Business Internship" | "Venture Incubation";
  highlights: string[];
  badge: string;
}

export interface VisionPillar {
  number: string;
  title: string;
  timelineStage: "Incubation" | "Strategic Horizon" | "Scale-Up" | "Global Frontier";
  description: string;
  strategicFocus: string;
  iconName: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "DAKSH THAKURIYA",
    shortName: "Daksh",
    role: "Aspiring Entrepreneur | Business & Leadership Enthusiast",
    location: "Jaipur, Rajasthan, India",
    statusBadge: "Open to Venture & Strategic Collaborations",
    headline: "Driven by ambition. Built through experience. Focused on creating what comes next.",
    supportingIntro:
      "An aspiring entrepreneur exploring business, leadership, innovation and opportunities across industries.",
    narrativeBio: [
      "I am an undergraduate student simultaneously pursuing a BBA in Digital Business and Entrepreneurship at IIM Bangalore and a BBA at IIM Udaipur. My journey sits at the intersection of rigorous academic learning, disciplined athletic performance, and hands-on commercial execution.",
      "Beyond academic distinctions and competitive podiums, I lead through active responsibility — having anchored 50+ high-profile institutional events, captained sports contingents, and spearheaded flagship inter-school sports festivals.",
      "Through real-world operational leadership at Triangle Events and Caterers, along with strategic exposure across finance, electronics, and wellness industries, I am systematically cultivating the operational discipline and strategic mindset required to build, manage, and scale transformative global ventures.",
    ],
    coreEthos:
      "Not just collecting qualifications — developing the innate capability to build, manage, and scale resilient businesses.",
    portraitUrl: "/images/daksh.jpg",
    linkedInUrl: "https://www.linkedin.com/in/daksh-thakuriya-265699306",
  },

  education: [
    {
      institution: "Indian Institute of Management Bangalore",
      degree: "BBA in Digital Business and Entrepreneurship",
      period: "2026 – Present",
      highlight:
        "Specialized undergraduate curriculum in digital strategy, business scaling, venture creation, and contemporary entrepreneurial frameworks.",
      badge: "Premier Management Institute",
    },
    {
      institution: "Indian Institute of Management Udaipur",
      degree: "BBA (Bachelor of Business Administration)",
      period: "2026 – Present",
      highlight:
        "Comprehensive foundations in business management, leadership analytics, enterprise strategy, and organizational behavior.",
      badge: "Premier Management Institute",
    },
    {
      institution: "Maheshwari Public School, Jaipur",
      degree: "Class XII – CBSE Senior Secondary",
      period: "Completed",
      score: "Percentage to be added",
      scoreLabel: "Academic Board Result",
      highlight:
        "Comprehensive academic engagement alongside student captaincy and all-round institutional leadership.",
      badge: "Senior Secondary",
    },
    {
      institution: "Maheshwari Public School, Jaipur",
      degree: "Class X – CBSE Secondary",
      period: "Completed",
      score: "94%",
      scoreLabel: "Board Distinction",
      highlight:
        "Exceptional academic record coupled with appointed student leadership as school Martinet.",
      badge: "Secondary Distinction",
    },
  ] as EducationItem[],

  achievements: [
    {
      id: "cuet",
      title: "CUET GAT 2026",
      rank: "99.79 Percentile",
      organization: "National Testing Agency (NTA)",
      category: "academic",
      metric: "Top 0.21% Nationwide",
      tag: "National Distinction",
      description:
        "Achieved a stellar 99.79 percentile in the Common University Entrance Test (General Aptitude Test), reflecting exceptional quantitative, logical, and analytical excellence across India.",
    },
    {
      id: "sbi-quiz",
      title: "National-Level SBI Quiz",
      rank: "National Runner-Up",
      organization: "State Bank of India (SBI)",
      category: "academic",
      metric: "National Podium",
      tag: "Financial & General Acumen",
      description:
        "Secured Runner-Up position in the prestigious nationwide quiz conducted by the State Bank of India, competing across rounds of banking, economics, and national affairs.",
    },
    {
      id: "ipl-auction",
      title: "IPL Auction Strategy Competition",
      rank: "Team Runner-Up",
      organization: "Atharv Ranbhoomi · IIM Indore",
      category: "entrepreneurship",
      metric: "IIM Indore National Fest",
      tag: "Strategic Valuation",
      description:
        "Secured Team Runner-Up at Central India's premier management festival, executing high-stakes budget allocation, valuation modelling, and dynamic auction bidding strategy under time pressure.",
    },
    {
      id: "jecrc-pitch",
      title: "Entrepreneurship Competition",
      rank: "Runner-Up — Startup Pitching",
      organization: "JECRC University, Jaipur",
      category: "entrepreneurship",
      metric: "Venture Pitching",
      tag: "Startup Validation",
      description:
        "Recognized as Runner-Up for designing and pitching a scalable business concept, defending unit economics, market viability, and growth projections before a jury of founders.",
    },
    {
      id: "xavier-pitch",
      title: "Startup Pitch Competition",
      rank: "Second Prize (Team)",
      organization: "St. Xavier's, Jaipur",
      category: "entrepreneurship",
      metric: "Regional Venture Forum",
      tag: "Venture Strategy",
      description:
        "Captured second prize in a highly competitive startup pitching arena with a collaborative commercial venture proposition.",
    },
    {
      id: "debates",
      title: "Inter-School Debate Competitions",
      rank: "Winner (Two Competitions)",
      organization: "Inter-School Forensic Forums",
      category: "speaking",
      metric: "2x Champion",
      tag: "Oratory & Rhetoric",
      description:
        "Won two separate inter-school debate tournaments, demonstrating sharp argumentation, impromptu articulation, and persuasive public communication.",
    },
    {
      id: "star-kid",
      title: "Star Kid Award",
      rank: "Class XII Highest Honor",
      organization: "Maheshwari Public School, Jaipur",
      category: "honor",
      metric: "All-Round Institutional Award",
      tag: "Excellence & Versatility",
      description:
        "Conferred the prestigious Star Kid Award in Class XII for unmatched all-round versatility and exemplary contributions across competitive sports, student captaincy, debate, and institutional leadership.",
    },
  ] as AchievementItem[],

  rollerSkatingProgression: [
    {
      level: "District",
      title: "District Championship",
      award: "Gold Medal",
      significance: "Established foundational speed, tactical cornering, and local track supremacy in Jaipur.",
      color: "from-amber-500/20 to-amber-500/5",
    },
    {
      level: "State",
      title: "Rajasthan State Championship",
      award: "Gold Medal",
      significance: "Dominated statewide contenders with heightened race stamina, split-second overtaking, and technical discipline.",
      color: "from-amber-500/30 to-amber-500/10",
    },
    {
      level: "National",
      title: "National Championship",
      award: "National Gold Medal",
      significance: "Reached the pinnacle of competitive roller skating across India, securing national gold through relentless training and peak athletic focus.",
      color: "from-amber-400/40 to-amber-500/20",
    },
  ] as RollerSkatingLevel[],

  sportsOverview: [
    {
      name: "Roller Skating",
      category: "Speed & Endurance",
      accomplishments: [
        "District-Level Gold Medal",
        "State-Level Gold Medal",
        "National-Level Gold Medal",
      ],
      keyHighlight: "Complete Triple-Gold progression across District, State, and National championships.",
      badge: "National Gold Champion",
    },
    {
      name: "Athletics",
      category: "Track & Sprint",
      accomplishments: [
        "Multiple Gold and Silver medals across track events",
        "Competitive sprinter in 100m, 200m, 400m sprint categories",
        "Anchor & runner in institutional relay race squads",
      ],
      keyHighlight: "Comprehensive sprint versatility spanning short bursts (100m) to sustained stamina (400m).",
      badge: "Multi-Medal Track Athlete",
    },
    {
      name: "Kabaddi",
      category: "Combat & Agility",
      accomplishments: [
        "Multiple Gold medals in competitive kabaddi matches",
        "Key raiding and defensive coordinator on the mat",
      ],
      keyHighlight: "High-intensity physical toughness, split-second tactical reflexes, and synchronized team coordination.",
      badge: "Multi-Gold Champion",
    },
    {
      name: "Cricket",
      category: "Team Athletics",
      accomplishments: [
        "Represented Maheshwari Public School cricket squads",
        "Active club player for Ashoka Club, Jaipur",
        "Competitive player for Jaipuria Club, Jaipur",
      ],
      keyHighlight: "Trained under rigorous club-level standards in Jaipur's competitive cricketing ecosystem.",
      badge: "Club & School Competitor",
    },
    {
      name: "Volleyball",
      category: "Court Athletics",
      accomplishments: [
        "District-Level competitive tournament participation",
        "State-Level competitive tournament representation",
      ],
      keyHighlight: "High court awareness, aerial spiking, and defensive block coordination under championship pressure.",
      badge: "District & State Representation",
    },
  ] as SportItem[],

  leadership: [
    {
      title: "Sports Captain",
      organization: "Maheshwari Public School, Jaipur",
      period: "2025 – 2026",
      roleType: "captaincy",
      impactBadge: "Apex Student Athletic Leader",
      responsibilities: [
        "Elected to direct and lead all school sports squads across inter-school and state-level athletic meets.",
        "Planned, scheduled, and supervised daily training camps, field drills, and equipment logistics for athletic teams.",
        "Represented the school delegation at official tournament openings, captain briefings, and sports convocations.",
      ],
    },
    {
      title: "Institutional Event Host & Master of Ceremonies",
      organization: "Institutional Convocations & High-Level Forums",
      period: "Ongoing Track Record",
      roleType: "anchoring",
      impactBadge: "50+ Events Anchored",
      vipGuests: [
        "Hon. Bhajan Lal Sharma (Chief Minister of Rajasthan)",
        "Hon. Gajendra Singh Shekhawat (Union Cabinet Minister, Government of India)",
      ],
      responsibilities: [
        "Anchored and hosted more than 50 major institutional and school gatherings with flawless stage delivery and audience engagement.",
        "Served as official master of ceremonies for landmark state-level institutional events attended by Rajasthan Chief Minister Bhajan Lal Sharma and Union Cabinet Minister Gajendra Singh Shekhawat.",
        "Maintained composure, protocol etiquette, and spontaneous stage command in presence of high-ranking state dignitaries and vast auditoriums.",
      ],
    },
    {
      title: "Main Event Coordinator",
      organization: "Flagship Festivals & Tournaments",
      roleType: "curation",
      impactBadge: "10-School Scale Coordination",
      responsibilities: [
        "Key coordinator for 'Razzell-Dazzle', driving backstage coordination, technical flows, and stage transitions.",
        "Hosted and managed 'Inter-School Harmony', a prestigious sports conclave uniting teams from 10 competitive schools.",
        "Coordinated refereeing schedules, scoring desks, crowd management, and awards ceremonies seamlessly.",
      ],
    },
    {
      title: "House Captain",
      organization: "Maheshwari Public School (Class XI)",
      period: "Class XI",
      roleType: "governance",
      impactBadge: "House Leadership",
      responsibilities: [
        "Led and motivated house members across cultural competitions, sports tournaments, and academic showcases.",
        "Organized tryouts, intra-house selections, and inter-house campaign strategies with sustained house camaraderie.",
      ],
    },
    {
      title: "Martinet",
      organization: "Maheshwari Public School (Class X)",
      period: "Class X",
      roleType: "governance",
      impactBadge: "Discipline & Governance",
      responsibilities: [
        "Entrusted with school discipline enforcement, student liaisoning, and morning assembly coordination.",
        "Acted as a dependable bridge between the student body and school administrators to maintain campus decorum.",
      ],
    },
  ] as LeadershipRole[],

  businessExperience: [
    {
      role: "Business Manager",
      company: "Triangle Events and Caterers",
      period: "Present",
      industry: "Hospitality & Event Management",
      nature: "Operational Management",
      badge: "Operational Leadership",
      highlights: [
        "Actively manage ground operations and logistics for a family-owned event management and catering enterprise.",
        "Coordinate multi-vendor workflows, workforce scheduling, venue setups, and client service delivery on-site.",
        "Supervise client relations, real-time crisis resolution during live events, and supply inventory management.",
      ],
    },
    {
      role: "Family Business Internship",
      company: "Upsurely",
      industry: "Finance & Financial Services",
      nature: "Family Business Internship",
      badge: "Financial Operations Exposure",
      highlights: [
        "Gained practical exposure to financial service workflows, operational compliance, and financial products.",
        "Observed client advisory dynamics, transaction processing, and foundational financial risk evaluation.",
      ],
    },
    {
      role: "Family Business Internship",
      company: "Nine Pointers",
      industry: "Consumer & Industrial Electronics",
      nature: "Family Business Internship",
      badge: "Industry Supply & Distribution",
      highlights: [
        "Gained immersive ground-level insights into the electronics trade, product distribution, and commercial practices.",
        "Analyzed supply chain logistics, vendor negotiations, and retail partner management.",
      ],
    },
    {
      role: "Business & Market Development Learner",
      company: "Nutrition & Wellness Incubation",
      industry: "Preventative Health & Nutrition",
      nature: "Venture Incubation",
      badge: "Market & Product Research",
      highlights: [
        "Building foundational domain expertise in Herbalife nutrition products and evidence-based wellness regimens.",
        "Studying direct-to-consumer wellness education, lifestyle consulting, and sustainable customer retention models.",
        "Exploring business development avenues and customer engagement strategies in preventative health.",
      ],
    },
  ] as BusinessExperience[],

  skills: {
    executive: [
      { name: "Leadership & Team Management", level: "Core Strength", desc: "Proven through athletic captaincy and student governance" },
      { name: "Public Speaking & Communication", level: "Elite", desc: "Anchored 50+ major events, inter-school debate champion" },
      { name: "Event Planning & Coordination", level: "Operational", desc: "Executed flagship festivals (Razzell-Dazzle, Harmony)" },
      { name: "Crowd & Crisis Management", level: "Applied", desc: "Managing live audiences and high-pressure event floors" },
      { name: "Team Collaboration & Morale", level: "Core Strength", desc: "Synthesizing cross-functional teams toward unified goals" },
      { name: "Hosting & Protocol Anchoring", level: "Executive", desc: "Direct stage experience with state CM and Union Ministers" },
    ],
    interests: [
      { name: "Reading (20+ Books Read)", tag: "Intellectual Growth", desc: "Devouring literature on business biographies, leadership, philosophy, and strategy." },
      { name: "Strategic Networking", tag: "Human Capital", desc: "Connecting with founders, industry leaders, mentors, and driven peers." },
      { name: "Travel & Cultural Exploration", tag: "Global Perspective", desc: "Exploring diverse regions, traditions, consumer behaviours, and local economies." },
      { name: "Competitive Sports & Games", tag: "Physical Discipline", desc: "Roller skating, athletics, kabaddi, cricket, and volleyball." },
      { name: "Entrepreneurship & Venture Creation", tag: "Venture Drive", desc: "Studying market frictions, business models, and scalable commercial opportunities." },
    ],
  },

  vision: {
    statement: "Building businesses through entrepreneurship, innovation, strategic thinking and leadership.",
    subtext:
      "A strategic roadmap mapping multi-stage aspirations into concrete business development phases — bridging local operational excellence with international scale.",
    pillars: [
      {
        number: "01",
        title: "Nutrition & Wellness Enterprise",
        timelineStage: "Incubation",
        strategicFocus: "Consumer Health & Wellness Ecosystems",
        description:
          "Build an end-to-end preventative health and nutrition business delivering certified dietary solutions, lifestyle education, and community-driven wellness coaching.",
        iconName: "HeartPulse",
      },
      {
        number: "02",
        title: "Startup Investment & Advisory Firm",
        timelineStage: "Strategic Horizon",
        strategicFocus: "Early-Stage Seed Capital & Strategic Growth",
        description:
          "Establish an investment vehicle committed to backing hungry, visionary founders — offering not just catalytic growth capital, but strategic mentorship and execution support.",
        iconName: "TrendingUp",
      },
      {
        number: "03",
        title: "High-Efficiency Manufacturing Unit",
        timelineStage: "Scale-Up",
        strategicFocus: "Industrial Production & Supply Sovereignty",
        description:
          "Set up an advanced, technology-integrated manufacturing enterprise in India, creating sustainable employment and producing world-class engineered consumer or industrial goods.",
        iconName: "Factory",
      },
      {
        number: "04",
        title: "Global Multi-Market Expansion",
        timelineStage: "Global Frontier",
        strategicFocus: "Cross-Border Commerce & Brand Equity",
        description:
          "Scale homegrown Indian ventures into international jurisdictions, establishing cross-border supply networks and internationally respected consumer brands.",
        iconName: "Globe2",
      },
    ] as VisionPillar[],
  },
};
