/**
 * Flexon Sports Foundation - Official Data & Content Model
 * Authority: Flexon Complete Website Blueprint v2.0 (27 October 2026)
 * 
 * Strict Controls:
 * - Pure white/light aesthetic references
 * - Zero fictional data (no fake participant counters, no unverified directors)
 * - All 12 retained programs and all 17 Sustainable Development Goals
 * - Hyderabad 2026 completed archive, Kochi announced teaser, Veteran Sixes evergreen
 */

export const organization = {
  name: "Flexon Sports Foundation",
  shortName: "Flexon Sports",
  tagline: "United by Sport. Driven by Global Goals.",
  heroHeadline: "MOVE TOGETHER. GO FURTHER.",
  heroSubheadline: "We bring people together through sport to build active lives, shared learning and stronger communities.",
  legalStatus: "Section 8 not-for-profit company licensed under the Companies Act, 2013",
  cin: "Under MCA Verification", // Concrete dependency pending official MCA certificate
  registeredAddress: "Door No. 2024, Amepadath Lane, Kaloor, Ernakulam, Kerala, India 682017",
  contactAddress: "Door No. 2024, Amepadath Lane, Kaloor, Ernakulam, Kerala, India 682017",
  email: "flexonsport@gmail.com",
  phones: ["+91 96052 06461", "+91 90749 34014"],
  eventEmail: "info@flexathonrun.org",
  eventWebsite: "https://flexathonrun.org/",
  campPhone: "+91 79075 99510",
  grievanceContact: {
    role: "Foundation Secretariat / Grievance Officer",
    channel: "flexonsport@gmail.com"
  },
  established: 2026,
  sdgDisclaimer: "References to the Sustainable Development Goals describe thematic alignment and do not imply United Nations endorsement or affiliation."
};

/**
 * 7 Core Foundation Objectives (Blueprint Section 6)
 */
export const objectives = [
  {
    id: 1,
    title: "Encourage Active Lives",
    description: "Create opportunities to take part in regular physical activity and community sport.",
    sdgs: [3]
  },
  {
    id: 2,
    title: "Develop Talent & Life Skills",
    description: "Support structured training, teamwork, confidence, discipline and leadership.",
    sdgs: [4, 3]
  },
  {
    id: 3,
    title: "Widen Participation",
    description: "Identify barriers and work towards equitable access for different backgrounds and ages.",
    sdgs: [5, 10]
  },
  {
    id: 4,
    title: "Sustain Participation Across Life Stages",
    description: "Connect children, adults and experienced players with appropriate sporting formats.",
    sdgs: [3, 10]
  },
  {
    id: 5,
    title: "Strengthen Community Connections",
    description: "Bring institutions, clubs, families and local groups together responsibly.",
    sdgs: [11, 17]
  },
  {
    id: 6,
    title: "Improve Awareness & Accountability",
    description: "Use relevant Global Goals and explain what each initiative actually delivers.",
    sdgs: [4, 16, 17]
  },
  {
    id: 7,
    title: "Plan Responsible Events",
    description: "Reduce avoidable waste and consider shared spaces where adopted in actual operations.",
    sdgs: [12, 13]
  }
];

/**
 * Core Values (Blueprint Section 6)
 */
export const values = [
  { name: "Inclusion", desc: "Sport is welcoming to all ages, genders, and skill levels." },
  { name: "Respect", desc: "Fair play, sportsmanship, and consideration for participants, coaches, and local venues." },
  { name: "Learning", desc: "Developing athletic ability alongside teamwork, resilience, and personal character." },
  { name: "Responsibility", desc: "Transparent operations, truthful disclosures, participant safeguarding, and environmental care." },
  { name: "Collaboration", desc: "Building meaningful alliances with communities, schools, institutions, and civic partners." }
];

/**
 * All 12 Retained Program Areas (Blueprint Section 8)
 */
export const programs = [
  {
    id: "running-endurance",
    title: "Running & Endurance Events",
    slug: "running-endurance",
    shortDesc: "Community runs and sporting challenges that encourage active living and shared participation.",
    fullDesc: "Community runs and sporting challenges that encourage active living and shared participation. FLEXATHON is our flagship running initiative, linking athletic participation with Global Goals themes.",
    actionText: "Explore FLEXATHON",
    actionLink: "/flexathon",
    badge: "Flagship Initiative",
    category: "Running",
    image: "/assets/hero/flexathon-hyd-hero-1.jpg"
  },
  {
    id: "empower-youth-football",
    title: "Football Coaching Camp – Empower Youth Programme",
    slug: "empower-youth-football-camp",
    shortDesc: "Structured football training for children aged 10–15, focusing on football skills, physical fitness, teamwork, discipline and confidence.",
    fullDesc: "The Football Coaching Camp is an initiative of Flexon Sports Foundation under its Empower Youth Programme, inaugurated by MLA Manoj Moothedan (3 October 2026 to 27 February 2027). The camp provides structured football training for children aged 10–15, focusing on football skills, physical fitness, teamwork, discipline and confidence.",
    actionText: "View Camp & 33 Photos",
    actionLink: "/programs/empower-youth-football-camp",
    badge: "3 Oct 2026 – 27 Feb 2027",
    category: "Football",
    image: "/assets/gallery/football-coaching-camp/football-camp-01.jpg"
  },
  {
    id: "veteran-sixes",
    title: "Veteran Sixes Cricket",
    slug: "veteran-sixes",
    shortDesc: "A cricket initiative celebrating experienced players, friendship and continued participation in sport.",
    fullDesc: "Veteran Sixes celebrates seasoned players, lifelong camaraderie, and the enduring passion for cricket. Offers a structured six-a-side format celebrating team spirit and fair play.",
    actionText: "Explore Veteran Sixes",
    actionLink: "/veteran-sixes",
    badge: "Evergreen Initiative",
    category: "Cricket",
    image: "/assets/hero/veteran-cricket.jpg"
  },
  {
    id: "football-tournaments",
    title: "Football Tournaments",
    slug: "football-tournaments",
    shortDesc: "Team competitions built around fair play, sporting development and community participation.",
    fullDesc: "Competitive and recreational football tournaments designed for amateur clubs, corporate teams, and community groups, fostering competitive excellence and community cohesion.",
    actionText: "Enquire About Football",
    actionLink: "/contact?interest=football-tournaments",
    category: "Football",
    image: "/assets/hero/football-camp-hero-1.jpg"
  },
  {
    id: "cricket-tournaments",
    title: "Cricket Tournaments",
    slug: "cricket-tournaments",
    shortDesc: "Cricket opportunities for teams, institutions and communities, with format and eligibility defined for each event.",
    fullDesc: "Organized cricket tournaments across various formats (T20, limited overs, sixes) with impartial umpiring and standard playing conditions defined per tournament.",
    actionText: "Enquire About Cricket",
    actionLink: "/contact?interest=cricket-tournaments",
    category: "Cricket",
    image: "/assets/hero/veteran-cricket.jpg"
  },
  {
    id: "school-college-meets",
    title: "School & College Sports Meets",
    slug: "school-college-meets",
    shortDesc: "Sporting engagement that helps students build confidence, teamwork, discipline and leadership.",
    fullDesc: "Partnering with educational institutions to organize inclusive, structured inter-school and collegiate athletic meets and tournaments that inspire lifelong sporting habits.",
    actionText: "Connect Your Institution",
    actionLink: "/partnerships?type=school",
    category: "Education",
    image: "/assets/gallery/football-coaching-camp/football-camp-14.jpg"
  },
  {
    id: "community-sports",
    title: "Community Sports Events",
    slug: "community-sports-events",
    shortDesc: "Activities that bring local groups and families together through shared sporting experiences.",
    fullDesc: "Local sports days, neighborhood tournaments, and multi-sport carnivals tailored to engage residents, families, and grassroots civic groups in active recreation.",
    actionText: "Discuss a Community Event",
    actionLink: "/partnerships?type=community",
    category: "Community",
    image: "/assets/hero/support-impact-real.jpg"
  },
  {
    id: "fitness-challenges",
    title: "Fitness Challenges",
    slug: "fitness-challenges",
    shortDesc: "Activity-based formats that encourage motivation, consistency and personal progress.",
    fullDesc: "Structured physical challenges, step challenges, and group workout sessions designed to help participants establish consistent health and wellness routines.",
    actionText: "Discuss a Fitness Activity",
    actionLink: "/contact?interest=fitness-challenges",
    category: "Fitness",
    image: "/assets/hero/flexathon-hyd-hero-2.jpg"
  },
  {
    id: "special-campaigns",
    title: "Special Sports Campaigns",
    slug: "special-sports-campaigns",
    shortDesc: "Purpose-led engagement around a defined community issue or development goal.",
    fullDesc: "Thematic campaigns leveraging sports to raise awareness on health, disability inclusion, gender equality, environmental stewardship, and youth empowerment.",
    actionText: "Propose a Campaign",
    actionLink: "/partnerships?type=campaign",
    category: "Advocacy",
    image: "/assets/hero/support-impact-real.jpg"
  },
  {
    id: "basketball-events",
    title: "Basketball Events",
    slug: "basketball-events",
    shortDesc: "Team-based basketball opportunities that encourage skills, coordination and sporting participation.",
    fullDesc: "3x3 community tournaments, full-court leagues, and skill clinics offering young and adult players structured competition and skill refinement.",
    actionText: "Enquire About Basketball",
    actionLink: "/contact?interest=basketball",
    category: "Basketball",
    image: "/assets/gallery/flexathon-hyderabad/flexathon-hyd-18.jpg"
  },
  {
    id: "netball-events",
    title: "Netball Events",
    slug: "netball-events",
    shortDesc: "Netball activities focused on teamwork, agility and opportunities to participate.",
    fullDesc: "Promoting netball at schools, colleges, and community centers to widen athletic options and support team sports participation.",
    actionText: "Enquire About Netball",
    actionLink: "/contact?interest=netball",
    category: "Netball",
    image: "/assets/gallery/football-coaching-camp/football-camp-23.jpg"
  },
  {
    id: "sports-education",
    title: "Sports Education & Life Skills",
    slug: "sports-education",
    shortDesc: "Learning opportunities connected to sport, teamwork and responsible physical activity.",
    fullDesc: "Workshops and sessions for athletes, students, and coaches on sports psychology, injury prevention, nutrition awareness, sportsmanship, and grassroots coaching methodology.",
    actionText: "Discuss Sports Education",
    actionLink: "/partnerships?type=education",
    category: "Education",
    image: "/assets/gallery/football-coaching-camp/football-camp-22.jpg"
  }
];

/**
 * All 17 Sustainable Development Goals (Blueprint Section 10)
 * Deterministic links: https://sdgs.un.org/goals/goal{number}
 */
export const sdgs = [
  {
    number: 1,
    slug: "no-poverty",
    title: "No Poverty",
    shortName: "No Poverty",
    explanation: "Poverty limits access to resources, security and opportunity. This goal concerns reducing deprivation and strengthening support for people facing it.",
    sportConnection: "Participation costs can exclude people. Future opportunity: explore transparently funded fee assistance with an accountable partner; no existing free-place promise.",
    relevanceLabel: "Future Opportunity",
    color: "#E5243B"
  },
  {
    number: 2,
    slug: "zero-hunger",
    title: "Zero Hunger",
    shortName: "Zero Hunger",
    explanation: "Reliable access to nutritious food supports healthy lives, development and participation.",
    sportConnection: "Sport creates space for qualified nutrition awareness and responsible food provision. Future opportunity: a partner-led food/nutrition session; no claim to end hunger through a race.",
    relevanceLabel: "Future Opportunity",
    color: "#DDA63A"
  },
  {
    number: 3,
    slug: "good-health-and-well-being",
    title: "Good Health and Well-being",
    shortName: "Good Health & Well-being",
    explanation: "Health includes prevention, care and conditions that support physical and mental well-being.",
    sportConnection: "Core sporting purpose: regular activity and participation. Related: football, running, cricket; proposed measurable indicator: repeat participation, not asserted clinical health improvement.",
    relevanceLabel: "Core Sporting Purpose",
    color: "#4C9F38"
  },
  {
    number: 4,
    slug: "quality-education",
    title: "Quality Education",
    shortName: "Quality Education",
    explanation: "Learning should be inclusive, equitable and available throughout life.",
    sportConnection: "Evidenced theme: FLEXATHON Hyderabad 2026. Football coaching also offers intended life-skill learning. Distinguish awareness from scholarships or improved education access.",
    relevanceLabel: "Current Evidenced Theme",
    color: "#C5192D"
  },
  {
    number: 5,
    slug: "gender-equality",
    title: "Gender Equality",
    shortName: "Gender Equality",
    explanation: "People should have equal rights, safety and opportunities regardless of gender.",
    sportConnection: "Strategic priority: examine barriers for women and girls in participation and leadership. Proposed action: listen to participants and adapt confirmed arrangements; no blanket equality certification.",
    relevanceLabel: "Strategic Priority",
    color: "#FF3A21"
  },
  {
    number: 6,
    slug: "clean-water-and-sanitation",
    title: "Clean Water and Sanitation",
    shortName: "Clean Water & Sanitation",
    explanation: "Safe water, sanitation and responsible water management matter to daily health and dignity.",
    sportConnection: "Event operations opportunity: verified drinking water and sanitation planning. Record actual provision before making promises.",
    relevanceLabel: "Operating Opportunity",
    color: "#26BDE2"
  },
  {
    number: 7,
    slug: "affordable-and-clean-energy",
    title: "Affordable and Clean Energy",
    shortName: "Affordable & Clean Energy",
    explanation: "Reliable energy access should develop alongside cleaner and more efficient systems.",
    sportConnection: "Future operating opportunity: assess venue energy choices and efficient lighting. Do not claim solar-powered or clean-energy events without records.",
    relevanceLabel: "Future Opportunity",
    color: "#FCC30B"
  },
  {
    number: 8,
    slug: "decent-work-and-economic-growth",
    title: "Decent Work and Economic Growth",
    shortName: "Decent Work & Growth",
    explanation: "Economic opportunity should respect safe work, fair conditions and productive livelihoods.",
    sportConnection: "Future delivery practice: clear roles and fair arrangements with coaches, suppliers and event workers. Do not label volunteering as employment or promise jobs.",
    relevanceLabel: "Delivery Practice",
    color: "#A21942"
  },
  {
    number: 9,
    slug: "industry-innovation-and-infrastructure",
    title: "Industry, Innovation and Infrastructure",
    shortName: "Industry & Infrastructure",
    explanation: "Useful infrastructure and responsible innovation help communities participate in economic and social life.",
    sportConnection: "Opportunity: accessible information, reliable event systems and inclusive venue planning. No claim of owned sports infrastructure.",
    relevanceLabel: "Operating Opportunity",
    color: "#FD6925"
  },
  {
    number: 10,
    slug: "reduced-inequalities",
    title: "Reduced Inequalities",
    shortName: "Reduced Inequalities",
    explanation: "Social and economic barriers can prevent people from accessing opportunities and being heard.",
    sportConnection: "Strategic priority: identify cost, information and access barriers; seek workable support arrangements with partners. Publish only confirmed accommodations.",
    relevanceLabel: "Strategic Priority",
    color: "#DD1367"
  },
  {
    number: 11,
    slug: "sustainable-cities-and-communities",
    title: "Sustainable Cities and Communities",
    shortName: "Sustainable Cities",
    explanation: "Communities need safe, inclusive spaces and thoughtful planning that respects local needs.",
    sportConnection: "Strategic priority: community sport and responsible shared-space use. Future action: venue coordination and approved travel guidance; no assumed road permissions.",
    relevanceLabel: "Strategic Priority",
    color: "#FD9D24"
  },
  {
    number: 12,
    slug: "responsible-consumption-and-production",
    title: "Responsible Consumption and Production",
    shortName: "Responsible Consumption",
    explanation: "Resources should be used carefully, with attention to waste, sourcing and product life cycles.",
    sportConnection: "Operating opportunity: material inventory, refill feasibility, segregation and verified waste handling. No 'zero waste' claim without evidence.",
    relevanceLabel: "Operating Opportunity",
    color: "#BF8B2E"
  },
  {
    number: 13,
    slug: "climate-action",
    title: "Climate Action",
    shortName: "Climate Action",
    explanation: "Climate risks call for informed action, resilience and responsible choices.",
    sportConnection: "Future opportunity: weather preparedness, travel information and measured resource choices. Do not claim carbon neutrality from planting trees or holding a run.",
    relevanceLabel: "Future Opportunity",
    color: "#3F7E44"
  },
  {
    number: 14,
    slug: "life-below-water",
    title: "Life Below Water",
    shortName: "Life Below Water",
    explanation: "Healthy seas and coastal ecosystems require protection from pollution and damaging practices.",
    sportConnection: "Future opportunity: qualified coastal awareness partnership, relevant to a coastal city such as Kochi. It is not yet a confirmed event activity.",
    relevanceLabel: "Future Opportunity",
    color: "#0A97D9"
  },
  {
    number: 15,
    slug: "life-on-land",
    title: "Life on Land",
    shortName: "Life on Land",
    explanation: "Land ecosystems and biodiversity need care, restoration and responsible use.",
    sportConnection: "Future opportunity: route/venue planning that respects habitat and avoids litter. No restoration/hectare impact claim without an actual project.",
    relevanceLabel: "Future Opportunity",
    color: "#56C02B"
  },
  {
    number: 16,
    slug: "peace-justice-and-strong-institutions",
    title: "Peace, Justice and Strong Institutions",
    shortName: "Peace & Institutions",
    explanation: "Trust depends on inclusion, accountability, fair decisions and access to ways of raising concerns.",
    sportConnection: "Proposed governance practice: fair play, transparent policies, safeguarding and grievance channels. Do not imply official institutional certification.",
    relevanceLabel: "Governance Practice",
    color: "#00689D"
  },
  {
    number: 17,
    slug: "partnerships-for-the-goals",
    title: "Partnerships for the Goals",
    shortName: "Partnerships for Goals",
    explanation: "Shared goals need cooperation, resources and clear responsibilities across organisations and communities.",
    sportConnection: "Core delivery approach: institution, community and business collaboration. List actual partners by approved role and initiative only.",
    relevanceLabel: "Core Delivery Approach",
    color: "#19486A"
  }
];

/**
 * Event Records (Blueprint Section 9)
 * Distinction: Lifecycle status vs Registration status
 */
export const events = [
  {
    id: "flexathon-hyderabad-2026",
    title: "FLEXATHON Hyderabad 2026",
    slug: "flexathon-hyderabad-2026",
    initiative: "FLEXATHON",
    city: "Hyderabad",
    venue: "Engineering Staff College of India (ESCI) Campus, Gachibowli, Hyderabad",
    date: "18 October 2026",
    status: "Completed",
    registrationStatus: "Closed",
    lifecycle: "Past",
    categories: ["3K Community Run", "5K Run", "10K Challenge"],
    themeGoal: 4,
    themeTitle: "Quality Education",
    advertisedPrizePool: "₹60,000 Advertised Total",
    partners: [
      { name: "ESCI", role: "Venue Partner" },
      { name: "Tata Copper+", role: "Official Hydration Partner" },
      { name: "SMAAASH", role: "Official Entertainment Partner" },
      { name: "Akshayakalpa Organic", role: "Official Nutrition Partner" }
    ],
    summary: "The inaugural edition of FLEXATHON brought runners and families to ESCI Campus in Hyderabad under the banner of SDG 4: Quality Education.",
    image: "/assets/hero/flexathon-hyd-hero-1.jpg",
    galleryCount: 39,
    resultsLink: "https://flexathonrun.org/"
  },
  {
    id: "football-coaching-camp-2026",
    title: "Football Coaching Camp – Empower Youth Programme",
    slug: "empower-youth-football-camp",
    initiative: "Empower Youth",
    city: "Perumbavoor, Kerala",
    venue: "Perumbavoor Boys Higher Secondary School Ground, Kerala",
    date: "3 October 2026 to 27 February 2027",
    status: "Active Camp",
    registrationStatus: "Guardian Enquiries Open",
    lifecycle: "Ongoing",
    categories: ["Age Group: 10–15 Years", "Football Skills & Fitness", "Teamwork & Discipline"],
    themeGoal: 4,
    themeTitle: "Quality Education & Youth Development",
    summary: "Organised by Flexon Sports Foundation and inaugurated by MLA Manoj Moothedan under the Empower Youth Programme, providing structured football training for children aged 10–15.",
    image: "/assets/hero/football-camp-hero-1.jpg",
    galleryCount: 33,
    actionText: "View Camp & 33 Photos",
    actionLink: "/programs/empower-youth-football-camp"
  },
  {
    id: "flexathon-kochi",
    title: "FLEXATHON Kochi Edition",
    slug: "flexathon-kochi",
    initiative: "FLEXATHON",
    city: "Kochi",
    venue: "To be announced",
    date: "Date to be announced",
    status: "Announced",
    registrationStatus: "Not Open Yet",
    lifecycle: "Announced",
    categories: ["Details to follow"],
    themeGoal: null,
    themeTitle: "Theme to be announced",
    summary: "FLEXATHON is heading to the vibrant waterfront city of Kochi. Register your interest to receive confirmed details when venue, date, and race categories are released.",
    image: "/assets/animated/flexathon-kochi-animated.jpg",
    actionText: "Register Interest",
    actionLink: "/flexathon/kochi"
  },
  {
    id: "veteran-sixes-cricket",
    title: "Veteran Sixes Cricket",
    slug: "veteran-sixes",
    initiative: "Veteran Sixes",
    city: "Kerala / Regional",
    venue: "Edition venues announced per tournament",
    date: "Next edition announcement pending",
    status: "Evergreen Initiative",
    registrationStatus: "Enquiries Open",
    lifecycle: "Ongoing",
    categories: ["Six-a-side Cricket"],
    themeGoal: 3,
    themeTitle: "Good Health & Well-being",
    summary: "A celebration of seasoned cricket players, lifelong camaraderie, and sporting longevity. Enquire to register team interest or propose hosting an edition.",
    image: "/assets/hero/veteran-cricket.jpg",
    actionText: "Ask About Next Edition",
    actionLink: "/veteran-sixes"
  }
];

/**
 * Team & Governance Structure
 * Verified profiles with authentic portraits from Team folder
 */
export const teamMembers = [
  {
    id: "jibin-n",
    name: "Jibin N",
    group: "Founders",
    displayTitle: "Founder | Technology & Strategy",
    bio: "Jibin N is an entrepreneur, technology professional, and educator with more than 15 years of experience in technology, innovation, and organisational development. As a Founder of Flexon Sports Foundation, he contributes to the foundation's strategic direction, digital initiatives, institutional engagement, and long-term development. His focus is on building sustainable programmes that connect sport, education, technology, and community empowerment.",
    image: "/assets/team/jibin-n.png",
    linkedinUrl: "https://www.linkedin.com/in/jibintcr"
  },
  {
    id: "arun-francis",
    name: "Arun Francis",
    group: "Founders",
    displayTitle: "Founder | Sports Development & Coaching",
    bio: "Arun Francis is a sports professional and coach with experience in athlete development and competitive sport. As a Founder of Flexon Sports Foundation, he focuses on grassroots participation, structured coaching, sporting excellence, and accessible opportunities for young athletes. His practical understanding of sports training supports the foundation's goal of creating an inclusive sports development ecosystem.",
    image: "/assets/team/arun-francis.png",
    linkedinUrl: null
  },
  {
    id: "muneer-kh",
    name: "Muneer K H",
    group: "Leadership Team",
    displayTitle: "Leadership Team | Business Strategy & Partnerships",
    bio: "Muneer K H brings experience in entrepreneurship, business development, and organisational planning. He supports the foundation's growth through strategic planning, partnership development, and sustainable programme initiatives, helping create lasting value through collaboration and community-focused activities.",
    image: "/assets/team/muneer-kh.png",
    linkedinUrl: "https://www.linkedin.com/in/muneerply"
  },
  {
    id: "mohammed-raneef",
    name: "Mohammed Raneef",
    group: "Leadership Team",
    displayTitle: "Leadership Team | Sports Programmes & Community Engagement",
    bio: "Mohammed Raneef brings experience in competitive sport, teamwork, and athlete engagement. He contributes to sports programme coordination, grassroots participation, and community activities designed to encourage young people to take part in sport and develop their potential.",
    image: "/assets/team/mohammed-raneef.png",
    linkedinUrl: null
  }
];

export const teamStructure = {
  founders: teamMembers.filter(m => m.group === "Founders"),
  leadership: teamMembers.filter(m => m.group === "Leadership Team"),
  programmeDelivery: [
    {
      id: "prog-empower-youth",
      name: "Empower Youth Football Initiative",
      leadership: "Programme under the leadership of MLA Manoj Moothedan",
      organizer: "Flexon Sports Foundation",
      focus: "Grassroots sports training, discipline, and community development",
      contact: "+91 79075 99510"
    }
  ],
  governanceNote: "Flexon Sports Foundation is organised as a Section 8 not-for-profit company under the Companies Act, 2013. We are committed to responsible governance, transparency, and using our resources to advance our stated objectives."
};

/**
 * Frequently Asked Questions (Blueprint Section 14 & 19)
 */
export const faqs = [
  {
    q: "What does Flexon Sports Foundation do?",
    a: "We bring people and organisations together through sporting events, training programmes, institutional sports meets and community activities that connect athletic participation with active living and the Global Goals."
  },
  {
    q: "How is FLEXATHON connected to Flexon Sports Foundation?",
    a: "FLEXATHON is our flagship running initiative. It is conceived and organised by Flexon Sports Foundation, with dedicated event operations hosted at flexathonrun.org."
  },
  {
    q: "Does every Flexon initiative deliver all 17 SDGs?",
    a: "No. Each initiative focuses on a specific, relevant theme. Our All-Goals educational pages explain the broader framework and practical connections, rather than claiming active delivery across every goal."
  },
  {
    q: "Is Flexon Sports Foundation endorsed by or part of the United Nations?",
    a: "No. References to the Sustainable Development Goals describe thematic alignment and do not imply United Nations endorsement, sponsorship or institutional affiliation."
  },
  {
    q: "Did the Hyderabad FLEXATHON fund educational scholarships?",
    a: "The Hyderabad edition had SDG 4: Quality Education as its central theme, drawing public attention to inclusive learning and education. Any specific monetary grant or scholarship allocation is subject to approved operational records."
  },
  {
    q: "Can I still register for FLEXATHON Hyderabad 2026?",
    a: "No, the Hyderabad run took place on 18 October 2026 at ESCI Campus and is now a completed event. You can explore event highlights, photos, and updates on future editions."
  },
  {
    q: "When will registration open for the Kochi Edition?",
    a: "The Kochi Edition has been announced. Its exact date, race route, venue, and registration opening will be published once officially confirmed. You can register your interest to receive direct notifications."
  },
  {
    q: "Can my child join the Empower Youth football coaching camp?",
    a: "The camp is structured for youth aged 10–15, running from 3 October 2026 to 27 February 2027. A parent or legal guardian should submit an enquiry to confirm current session schedules and availability."
  },
  {
    q: "Who is eligible to participate in Veteran Sixes?",
    a: "Veteran Sixes is designed for experienced adult cricketers. Specific age thresholds, roster rules, and match formats are confirmed in each edition's official tournament circular."
  },
  {
    q: "Can our school, college, or company collaborate with Flexon?",
    a: "Yes. We welcome conversations regarding institutional athletic meets, corporate team entries, community tournaments, in-kind support, and purpose-led campaigns. Please submit a collaboration brief."
  },
  {
    q: "How can I volunteer with Flexon Sports Foundation?",
    a: "You can register your interest with your city, availability, and skills. Volunteer roles are allocated based on event schedules and required briefings."
  },
  {
    q: "How do I make an accessibility request for an event?",
    a: "Please contact our organizing team via email (flexonsport@gmail.com) prior to registering so we can verify venue accessibility, route conditions, and support arrangements."
  },
  {
    q: "Are online donations currently available?",
    a: "Direct online payment gateway integration is currently under configuration. To discuss supporting a specific sporting or community initiative, please contact the foundation through our donation enquiry form."
  },
  {
    q: "Can I claim income tax deductions on contributions?",
    a: "Tax deductibility depends on applicable statutory approvals and prevailing tax frameworks (such as the 2026–27 reporting guidelines). Please consult our finance office for the current verified status before making financial commitments."
  },
  {
    q: "Are my chat conversations and enquiry messages saved?",
    a: "When you choose to start a chat session with our automated assistant, messages are saved securely on our server to help address your enquiry in accordance with our Privacy Notice. You may also view FAQs without starting a conversation."
  },
  {
    q: "Does submitting an enquiry or registering interest guarantee an event slot?",
    a: "No. An enquiry or expression of interest is an initial query and does not constitute a confirmed registration or booking until formal entry is completed through an approved process."
  }
];

/**
 * Gallery Albums
 * Dedicated folder for FLEXATHON Hyderabad 2026: /assets/gallery/flexathon-hyderabad/
 */
export const galleryAlbums = [
  {
    id: "hyderabad-2026",
    title: "FLEXATHON Hyderabad 2026 — First Edition Archive",
    shortTitle: "FLEXATHON Hyderabad 2026",
    subtitle: "ESCI Campus, Gachibowli • 18 October 2026 • SDG 4: Quality Education",
    date: "18 Oct 2026",
    isoDate: "2026-10-18",
    year: "2026",
    city: "Hyderabad",
    venue: "ESCI Campus, Gachibowli",
    sport: "running",
    sportLabel: "Running & Athletics",
    sportIcon: "🏃",
    initiative: "FLEXATHON",
    sdg: "SDG 4: Quality Education",
    featured: true,
    folder: "/assets/gallery/flexathon-hyderabad",
    cover: "/assets/gallery/flexathon-hyderabad/flexathon-hyd-14.jpg",
    count: 39,
    categories: [
      { id: "all", label: "All Moments", icon: "📸" },
      { id: "flag-off", label: "Flag-Off & Start Line", icon: "🏁" },
      { id: "community-waves", label: "5K & 3K Waves", icon: "🏃" },
      { id: "warm-up", label: "Warm-Up & Assembly", icon: "🔥" },
      { id: "podium-awards", label: "Podium & Awards", icon: "🏆" }
    ],
    items: [
      {
        id: "hyd-14",
        src: "/assets/gallery/flexathon-hyderabad/flexathon-hyd-14.jpg",
        caption: "Official flag-off at the FLEXATHON starting arch inside ESCI Campus, Gachibowli, with foundation leadership and race marshals.",
        alt: "FLEXATHON Hyderabad 2026 official flag-off at the starting arch",
        category: "flag-off",
        categoryLabel: "Flag-Off & Start",
        orientation: "landscape",
        featured: true
      },
      {
        id: "hyd-05",
        src: "/assets/gallery/flexathon-hyderabad/flexathon-hyd-05.jpg",
        caption: "10K Challenge athletes surge across the electronic chip-timing mat as the inaugural Hyderabad race gets underway.",
        alt: "10K runners crossing the start line at FLEXATHON Hyderabad",
        category: "flag-off",
        categoryLabel: "Flag-Off & Start",
        orientation: "landscape",
        featured: true
      },
      {
        id: "hyd-21",
        src: "/assets/gallery/flexathon-hyderabad/flexathon-hyd-21.jpg",
        caption: "Multi-generational spirit on course: youth runners, families, and senior athletes striding together in the 3K Community Run.",
        alt: "Families and young runners in the 3K Community Run",
        category: "community-waves",
        categoryLabel: "5K & 3K Waves",
        orientation: "landscape",
        featured: true
      },
      {
        id: "hyd-01",
        src: "/assets/gallery/flexathon-hyderabad/flexathon-hyd-01.jpg",
        caption: "Young finisher honored on the FLEXATHON stage with an official achievement certificate championing SDG 4: Quality Education.",
        alt: "Young runner receiving certificate on the FLEXATHON stage",
        category: "podium-awards",
        categoryLabel: "Podium & Awards",
        orientation: "portrait",
        featured: true
      },
      {
        id: "hyd-38",
        src: "/assets/gallery/flexathon-hyderabad/flexathon-hyd-38.jpg",
        caption: "Pre-race warm-up and stretching session led by official 10K pacers and fitness instructors at dawn on ESCI Campus.",
        alt: "Runners and 10K pacer stretching during pre-race warm-up",
        category: "warm-up",
        categoryLabel: "Warm-Up & Assembly",
        orientation: "landscape",
        featured: true
      },
      {
        id: "hyd-24",
        src: "/assets/gallery/flexathon-hyderabad/flexathon-hyd-24.jpg",
        caption: "Women's 10K Fastest Runner 1st Prize presentation on the main stage with Flexon Sports Foundation leadership.",
        alt: "Women's 10K winner receiving prize cheque on stage",
        category: "podium-awards",
        categoryLabel: "Podium & Awards",
        orientation: "landscape",
        featured: true
      },
      {
        id: "hyd-02",
        src: "/assets/gallery/flexathon-hyderabad/flexathon-hyd-02.jpg",
        caption: "5K and 10K participants assembling at the ESCI Campus plaza for morning mobility drills prior to flag-off.",
        alt: "Runners warming up before the race at ESCI Campus Gachibowli",
        category: "warm-up",
        categoryLabel: "Warm-Up & Assembly",
        orientation: "landscape"
      },
      {
        id: "hyd-03",
        src: "/assets/gallery/flexathon-hyderabad/flexathon-hyd-03.jpg",
        caption: "Front-row 10K runners lined up under the FLEXATHON arch awaiting the official starter's flag.",
        alt: "10K runners at the starting line arch",
        category: "flag-off",
        categoryLabel: "Flag-Off & Start",
        orientation: "landscape"
      },
      {
        id: "hyd-04",
        src: "/assets/gallery/flexathon-hyderabad/flexathon-hyd-04.jpg",
        caption: "The white FLEXATHON flag drops as the lead pack of 10K endurance runners accelerates off the start line.",
        alt: "Starter waving the white FLEXATHON flag for the 10K start",
        category: "flag-off",
        categoryLabel: "Flag-Off & Start",
        orientation: "landscape"
      },
      {
        id: "hyd-06",
        src: "/assets/gallery/flexathon-hyderabad/flexathon-hyd-06.jpg",
        caption: "Runners in official maroon SDG 4 Quality Education race jerseys streaming through the start gantry.",
        alt: "Wave of runners crossing the start mat",
        category: "flag-off",
        categoryLabel: "Flag-Off & Start",
        orientation: "landscape"
      },
      {
        id: "hyd-07",
        src: "/assets/gallery/flexathon-hyderabad/flexathon-hyd-07.jpg",
        caption: "High energy and focused determination as the 10K field clears the Centenary Convention Centre stretch.",
        alt: "10K participants running past the start arch",
        category: "flag-off",
        categoryLabel: "Flag-Off & Start",
        orientation: "landscape"
      },
      {
        id: "hyd-08",
        src: "/assets/gallery/flexathon-hyderabad/flexathon-hyd-08.jpg",
        caption: "Pace runners and club athletes building momentum along the tree-lined ESCI Campus circuit.",
        alt: "Endurance runners crossing the timing mat",
        category: "flag-off",
        categoryLabel: "Flag-Off & Start",
        orientation: "landscape"
      },
      {
        id: "hyd-09",
        src: "/assets/gallery/flexathon-hyderabad/flexathon-hyd-09.jpg",
        caption: "Hundreds of runners uniting for Quality Education (SDG 4) during the morning flag-off wave.",
        alt: "Crowd of runners departing the FLEXATHON start arch",
        category: "flag-off",
        categoryLabel: "Flag-Off & Start",
        orientation: "landscape"
      },
      {
        id: "hyd-10",
        src: "/assets/gallery/flexathon-hyderabad/flexathon-hyd-10.jpg",
        caption: "Community runners and corporate squads cheering as they cross the starting threshold together.",
        alt: "Runners smiling and striding through the start line",
        category: "flag-off",
        categoryLabel: "Flag-Off & Start",
        orientation: "landscape"
      },
      {
        id: "hyd-11",
        src: "/assets/gallery/flexathon-hyderabad/flexathon-hyd-11.jpg",
        caption: "Final wave of 10K Challenge athletes setting out onto the Gachibowli campus course.",
        alt: "10K runners setting off from the starting arch",
        category: "flag-off",
        categoryLabel: "Flag-Off & Start",
        orientation: "landscape"
      },
      {
        id: "hyd-12",
        src: "/assets/gallery/flexathon-hyderabad/flexathon-hyd-12.jpg",
        caption: "Dignitaries and Flexon Sports Foundation founders raising the flag to launch the 5K Timed Run category.",
        alt: "5K category flag-off ceremony at FLEXATHON Hyderabad",
        category: "flag-off",
        categoryLabel: "Flag-Off & Start",
        orientation: "landscape"
      },
      {
        id: "hyd-13",
        src: "/assets/gallery/flexathon-hyderabad/flexathon-hyd-13.jpg",
        caption: "5K runners poised at the starting mat seconds before the horn sounds at ESCI Campus.",
        alt: "5K runners ready at the starting line",
        category: "flag-off",
        categoryLabel: "Flag-Off & Start",
        orientation: "landscape"
      },
      {
        id: "hyd-15",
        src: "/assets/gallery/flexathon-hyderabad/flexathon-hyd-15.jpg",
        caption: "Lead 5K runners sprinting off the line as applause echoes across the starting arena.",
        alt: "Lead 5K runners sprinting across the timing mat",
        category: "community-waves",
        categoryLabel: "5K & 3K Waves",
        orientation: "landscape"
      },
      {
        id: "hyd-16",
        src: "/assets/gallery/flexathon-hyderabad/flexathon-hyd-16.jpg",
        caption: "Youth and adult participants side by side in the 5K wave, embodying inclusive athletic participation.",
        alt: "5K wave of runners moving through the start gantry",
        category: "community-waves",
        categoryLabel: "5K & 3K Waves",
        orientation: "landscape"
      },
      {
        id: "hyd-17",
        src: "/assets/gallery/flexathon-hyderabad/flexathon-hyd-17.jpg",
        caption: "Steady stream of 5K fitness runners embarking on the scenic campus route.",
        alt: "5K runners passing beneath the FLEXATHON arch",
        category: "community-waves",
        categoryLabel: "5K & 3K Waves",
        orientation: "landscape"
      },
      {
        id: "hyd-18",
        src: "/assets/gallery/flexathon-hyderabad/flexathon-hyd-18.jpg",
        caption: "Runners checking their GPS watches and pacing rhythm as the 5K pack opens up.",
        alt: "5K participants checking watches as they cross the start",
        category: "community-waves",
        categoryLabel: "5K & 3K Waves",
        orientation: "landscape"
      },
      {
        id: "hyd-19",
        src: "/assets/gallery/flexathon-hyderabad/flexathon-hyd-19.jpg",
        caption: "Smiles and camaraderie among 5K participants representing local schools, colleges, and tech campuses.",
        alt: "Group of 5K runners smiling on the course",
        category: "community-waves",
        categoryLabel: "5K & 3K Waves",
        orientation: "landscape"
      },
      {
        id: "hyd-20",
        src: "/assets/gallery/flexathon-hyderabad/flexathon-hyd-20.jpg",
        caption: "3K Community Run flag-off bringing together first-time runners, students, and families.",
        alt: "3K Community Run start wave at ESCI Campus",
        category: "community-waves",
        categoryLabel: "5K & 3K Waves",
        orientation: "landscape"
      },
      {
        id: "hyd-22",
        src: "/assets/gallery/flexathon-hyderabad/flexathon-hyd-22.jpg",
        caption: "Stage address and guest felicitation honoring institutional partners at the post-run presentation ceremony.",
        alt: "Founders and guests of honor on the FLEXATHON stage",
        category: "podium-awards",
        categoryLabel: "Podium & Awards",
        orientation: "landscape"
      },
      {
        id: "hyd-23",
        src: "/assets/gallery/flexathon-hyderabad/flexathon-hyd-23.jpg",
        caption: "Men's 10K Fastest Runner 1st Prize winner awarded ₹10,000 cheque and championship certificate on stage.",
        alt: "Men's 10K first place winner receiving prize cheque",
        category: "podium-awards",
        categoryLabel: "Podium & Awards",
        orientation: "landscape"
      },
      {
        id: "hyd-25",
        src: "/assets/gallery/flexathon-hyderabad/flexathon-hyd-25.jpg",
        caption: "Men's 10K Runner-Up honored with cash award and framed merit certificate by foundation leaders.",
        alt: "Men's 10K second place podium presentation",
        category: "podium-awards",
        categoryLabel: "Podium & Awards",
        orientation: "landscape"
      },
      {
        id: "hyd-26",
        src: "/assets/gallery/flexathon-hyderabad/flexathon-hyd-26.jpg",
        caption: "Women's category podium finisher receiving official prize award and applause from the Hyderabad running community.",
        alt: "Women's podium winner receiving prize cheque on stage",
        category: "podium-awards",
        categoryLabel: "Podium & Awards",
        orientation: "landscape"
      },
      {
        id: "hyd-27",
        src: "/assets/gallery/flexathon-hyderabad/flexathon-hyd-27.jpg",
        caption: "Top-3 podium finisher celebrated on stage during the FLEXATHON Hyderabad prize distribution.",
        alt: "Podium finisher receiving framed certificate and cheque",
        category: "podium-awards",
        categoryLabel: "Podium & Awards",
        orientation: "landscape"
      },
      {
        id: "hyd-28",
        src: "/assets/gallery/flexathon-hyderabad/flexathon-hyd-28.jpg",
        caption: "Women's distance category winner recognized for outstanding pace and sportsmanship.",
        alt: "Female runner receiving award cheque on stage",
        category: "podium-awards",
        categoryLabel: "Podium & Awards",
        orientation: "landscape"
      },
      {
        id: "hyd-29",
        src: "/assets/gallery/flexathon-hyderabad/flexathon-hyd-29.jpg",
        caption: "Men's 5K Fastest Runner 1st Prize winner presented with official award cheque and certificate.",
        alt: "Men's 5K first place winner on stage with leadership team",
        category: "podium-awards",
        categoryLabel: "Podium & Awards",
        orientation: "landscape"
      },
      {
        id: "hyd-30",
        src: "/assets/gallery/flexathon-hyderabad/flexathon-hyd-30.jpg",
        caption: "5K category podium finisher receiving honors from the Flexon Sports Foundation leadership panel.",
        alt: "5K podium winner receiving prize award",
        category: "podium-awards",
        categoryLabel: "Podium & Awards",
        orientation: "landscape"
      },
      {
        id: "hyd-31",
        src: "/assets/gallery/flexathon-hyderabad/flexathon-hyd-31.jpg",
        caption: "Young brothers sharing a proud moment on stage as youth category achievement certificates are presented.",
        alt: "Young participants receiving achievement certificate on stage",
        category: "podium-awards",
        categoryLabel: "Podium & Awards",
        orientation: "landscape"
      },
      {
        id: "hyd-32",
        src: "/assets/gallery/flexathon-hyderabad/flexathon-hyd-32.jpg",
        caption: "Celebrating podium excellence and community spirit under the Global Goals emblem.",
        alt: "Athlete receiving merit certificate on the FLEXATHON stage",
        category: "podium-awards",
        categoryLabel: "Podium & Awards",
        orientation: "landscape"
      },
      {
        id: "hyd-33",
        src: "/assets/gallery/flexathon-hyderabad/flexathon-hyd-33.jpg",
        caption: "Finisher recognition ceremony highlighting dedication and athletic perseverance.",
        alt: "Runner honored with framed certificate by Flexon founders",
        category: "podium-awards",
        categoryLabel: "Podium & Awards",
        orientation: "landscape"
      },
      {
        id: "hyd-34",
        src: "/assets/gallery/flexathon-hyderabad/flexathon-hyd-34.jpg",
        caption: "3rd Place podium certificate presented to a 5K Women's category standout finisher.",
        alt: "Female runner receiving 3rd place certificate on stage",
        category: "podium-awards",
        categoryLabel: "Podium & Awards",
        orientation: "landscape"
      },
      {
        id: "hyd-35",
        src: "/assets/gallery/flexathon-hyderabad/flexathon-hyd-35.jpg",
        caption: "Honoring top category performers from across Hyderabad's running clubs and campuses.",
        alt: "Category winner receiving framed certificate on stage",
        category: "podium-awards",
        categoryLabel: "Podium & Awards",
        orientation: "landscape"
      },
      {
        id: "hyd-36",
        src: "/assets/gallery/flexathon-hyderabad/flexathon-hyd-36.jpg",
        caption: "1st Place Women's category medalist displaying her finisher medal and championship certificate.",
        alt: "Women's 1st place medalist holding certificate and medal",
        category: "podium-awards",
        categoryLabel: "Podium & Awards",
        orientation: "landscape"
      },
      {
        id: "hyd-37",
        src: "/assets/gallery/flexathon-hyderabad/flexathon-hyd-37.jpg",
        caption: "2nd Place Women's category runner celebrated on the FLEXATHON stage at ESCI Campus.",
        alt: "Women's 2nd place finisher receiving certificate on stage",
        category: "podium-awards",
        categoryLabel: "Podium & Awards",
        orientation: "landscape"
      },
      {
        id: "hyd-39",
        src: "/assets/gallery/flexathon-hyderabad/flexathon-hyd-39.jpg",
        caption: "Men's category podium winner receiving prize cheque during the closing ceremony.",
        alt: "Men's category podium finisher receiving cheque and certificate",
        category: "podium-awards",
        categoryLabel: "Podium & Awards",
        orientation: "landscape"
      }
    ]
  },
  {
    id: "football-training",
    title: "Football Coaching Camp – Empower Youth Programme",
    shortTitle: "Football Coaching Camp (Empower Youth)",
    subtitle: "Organised by Flexon Sports Foundation • Inaugurated by MLA Manoj Moothedan • Ages 10–15 • 3 Oct 2026 – 27 Feb 2027",
    organisedBy: "Flexon Sports Foundation",
    inauguratedBy: "MLA Manoj Moothedan",
    programme: "Empower Youth",
    ageGroup: "10–15 years",
    trainingPeriod: "3 October 2026 to 27 February 2027",
    description:
      "The Football Coaching Camp is an initiative of Flexon Sports Foundation under its Empower Youth Programme. The camp provides structured football training for children aged 10–15, focusing on football skills, physical fitness, teamwork, discipline and confidence. The programme aims to encourage young talent and promote sports participation among children.",
    date: "3 Oct 2026 – 27 Feb 2027",
    isoDate: "2026-10-03",
    year: "2026",
    city: "Perumbavoor, Kerala",
    venue: "Perumbavoor Boys HSS Ground, Kerala",
    sport: "football",
    sportLabel: "Football",
    sportIcon: "⚽",
    initiative: "Empower Youth",
    sdg: "SDG 3 & SDG 4",
    featured: true,
    folder: "/assets/gallery/football-coaching-camp",
    cover: "/assets/gallery/football-coaching-camp/football-camp-01.jpg",
    count: 33,
    categories: [
      { id: "all", label: "All Moments", icon: "📸" },
      { id: "pitch-kickoff", label: "Pitch Kick-Off & Drills", icon: "⚽" },
      { id: "camp-inauguration", label: "MLA Inauguration", icon: "🎙️" },
      { id: "youth-orientation", label: "Youth Squad & Orientation", icon: "👥" }
    ],
    items: [
      {
        id: "fc-01",
        src: "/assets/gallery/football-coaching-camp/football-camp-01.jpg",
        caption: "Ceremonial kick-off at the Football Coaching Camp (Empower Youth Programme) with MLA Manoj Moothedan, guests, and young trainees aged 10–15.",
        alt: "Ceremonial kick-off at Football Coaching Camp Empower Youth Programme",
        category: "pitch-kickoff",
        categoryLabel: "Pitch Kick-Off & Drills",
        orientation: "landscape",
        featured: true
      },
      {
        id: "fc-21",
        src: "/assets/gallery/football-coaching-camp/football-camp-21.jpg",
        caption: "MLA Manoj Moothedan inaugurating the Football Coaching Camp under the Empower Youth Programme organised by Flexon Sports Foundation.",
        alt: "MLA Manoj Moothedan addressing youth players at the Football Coaching Camp inauguration",
        category: "camp-inauguration",
        categoryLabel: "MLA Inauguration",
        orientation: "portrait",
        featured: true
      },
      {
        id: "fc-10",
        src: "/assets/gallery/football-coaching-camp/football-camp-10.jpg",
        caption: "MLA Manoj Moothedan preparing for the ceremonial first kick as young footballers in numbered blue training kits cheer from the touchlines.",
        alt: "MLA Manoj Moothedan at the ceremonial ball kick-off on the training ground",
        category: "pitch-kickoff",
        categoryLabel: "Pitch Kick-Off & Drills",
        orientation: "landscape",
        featured: true
      },
      {
        id: "fc-30",
        src: "/assets/gallery/football-coaching-camp/football-camp-30.jpg",
        caption: "Young footballers aged 10–15 in official numbered kits seated attentively during the Empower Youth camp orientation session.",
        alt: "Youth footballers seated in blue numbered jerseys during coaching orientation",
        category: "youth-orientation",
        categoryLabel: "Youth Squad & Orientation",
        orientation: "portrait",
        featured: true
      },
      {
        id: "fc-18",
        src: "/assets/gallery/football-coaching-camp/football-camp-18.jpg",
        caption: "Goalkeeper #1 ready between the cones as community leaders, coaches, and squad members gather under the banyan canopy.",
        alt: "Young goalkeeper facing ceremonial kick-off at Empower Youth Football Camp",
        category: "pitch-kickoff",
        categoryLabel: "Pitch Kick-Off & Drills",
        orientation: "landscape",
        featured: true
      },
      {
        id: "fc-02",
        src: "/assets/gallery/football-coaching-camp/football-camp-02.jpg",
        caption: "Ball in flight during the opening pitch drill as trainees applaud their fellow goalkeeper between the blue training cones.",
        alt: "Opening pitch drill at Football Coaching Camp",
        category: "pitch-kickoff",
        categoryLabel: "Pitch Kick-Off & Drills",
        orientation: "landscape"
      },
      {
        id: "fc-03",
        src: "/assets/gallery/football-coaching-camp/football-camp-03.jpg",
        caption: "Young goalkeeper making a clean catch during the inaugural ground session of the Empower Youth Football Coaching Camp.",
        alt: "Youth goalkeeper catching the football during ground ceremony",
        category: "pitch-kickoff",
        categoryLabel: "Pitch Kick-Off & Drills",
        orientation: "landscape"
      },
      {
        id: "fc-04",
        src: "/assets/gallery/football-coaching-camp/football-camp-04.jpg",
        caption: "Squad members aged 10–15 lined up in full kit, building team spirit and discipline from day one of the 5-month training period.",
        alt: "Youth squad lined up on the football ground",
        category: "pitch-kickoff",
        categoryLabel: "Pitch Kick-Off & Drills",
        orientation: "landscape"
      },
      {
        id: "fc-05",
        src: "/assets/gallery/football-coaching-camp/football-camp-05.jpg",
        caption: "Action moment from the opening pitch exercise encouraging reflex sharpness, confidence, and active participation.",
        alt: "Football in mid-air during opening pitch exercise",
        category: "pitch-kickoff",
        categoryLabel: "Pitch Kick-Off & Drills",
        orientation: "landscape"
      },
      {
        id: "fc-06",
        src: "/assets/gallery/football-coaching-camp/football-camp-06.jpg",
        caption: "Vertical perspective of the training pitch showing the young goalkeeper in stance before the assembled Empower Youth cohort.",
        alt: "Portrait view of goalkeeper stance at Football Coaching Camp",
        category: "pitch-kickoff",
        categoryLabel: "Pitch Kick-Off & Drills",
        orientation: "portrait"
      },
      {
        id: "fc-07",
        src: "/assets/gallery/football-coaching-camp/football-camp-07.jpg",
        caption: "Coaches, civic guests, and Flexon Sports Foundation representatives encouraging young players on the Perumbavoor ground.",
        alt: "Guests and coaches applauding young footballers",
        category: "pitch-kickoff",
        categoryLabel: "Pitch Kick-Off & Drills",
        orientation: "landscape"
      },
      {
        id: "fc-08",
        src: "/assets/gallery/football-coaching-camp/football-camp-08.jpg",
        caption: "Developing focus and footwork: goalkeeper positioning drills between the blue markers during the opening session.",
        alt: "Goalkeeper positioning drill between cones",
        category: "pitch-kickoff",
        categoryLabel: "Pitch Kick-Off & Drills",
        orientation: "landscape"
      },
      {
        id: "fc-09",
        src: "/assets/gallery/football-coaching-camp/football-camp-09.jpg",
        caption: "Two rows of young trainees aged 10–15 cheering on their teammates during the inaugural ground kick-off.",
        alt: "Two rows of young football trainees applauding on the field",
        category: "pitch-kickoff",
        categoryLabel: "Pitch Kick-Off & Drills",
        orientation: "landscape"
      },
      {
        id: "fc-11",
        src: "/assets/gallery/football-coaching-camp/football-camp-11.jpg",
        caption: "Ceremonial pass rolled across the pitch toward the goal markers, symbolizing the launch of the October 2026 – February 2027 camp.",
        alt: "Ceremonial pass across the training ground",
        category: "pitch-kickoff",
        categoryLabel: "Pitch Kick-Off & Drills",
        orientation: "landscape"
      },
      {
        id: "fc-12",
        src: "/assets/gallery/football-coaching-camp/football-camp-12.jpg",
        caption: "Shared joy and encouragement as dignitaries and coaches interact with the young football trainees on the field.",
        alt: "Dignitaries and coaches interacting with youth footballers",
        category: "pitch-kickoff",
        categoryLabel: "Pitch Kick-Off & Drills",
        orientation: "landscape"
      },
      {
        id: "fc-13",
        src: "/assets/gallery/football-coaching-camp/football-camp-13.jpg",
        caption: "Full-field view of the Empower Youth Football Coaching Camp assembly beneath the historic banyan trees.",
        alt: "Full-field view of Football Coaching Camp assembly",
        category: "pitch-kickoff",
        categoryLabel: "Pitch Kick-Off & Drills",
        orientation: "landscape"
      },
      {
        id: "fc-14",
        src: "/assets/gallery/football-coaching-camp/football-camp-14.jpg",
        caption: "Young athletes demonstrating readiness, agility, and sportsmanship during the opening ground drill.",
        alt: "Youth athletes during opening ground drill",
        category: "pitch-kickoff",
        categoryLabel: "Pitch Kick-Off & Drills",
        orientation: "landscape"
      },
      {
        id: "fc-15",
        src: "/assets/gallery/football-coaching-camp/football-camp-15.jpg",
        caption: "Applause across the pitch as the ceremonial kick-off concludes and structured group training begins.",
        alt: "Applause across the pitch at the football coaching camp",
        category: "pitch-kickoff",
        categoryLabel: "Pitch Kick-Off & Drills",
        orientation: "landscape"
      },
      {
        id: "fc-16",
        src: "/assets/gallery/football-coaching-camp/football-camp-16.jpg",
        caption: "Goalkeeper #1 crouched in ready position as MLA Manoj Moothedan and guests look on from the center circle.",
        alt: "Goalkeeper in ready stance facing the center circle",
        category: "pitch-kickoff",
        categoryLabel: "Pitch Kick-Off & Drills",
        orientation: "landscape"
      },
      {
        id: "fc-17",
        src: "/assets/gallery/football-coaching-camp/football-camp-17.jpg",
        caption: "Close-up of the pitch corridor formed by Empower Youth trainees celebrating community football.",
        alt: "Pitch corridor formed by youth football trainees",
        category: "pitch-kickoff",
        categoryLabel: "Pitch Kick-Off & Drills",
        orientation: "landscape"
      },
      {
        id: "fc-19",
        src: "/assets/gallery/football-coaching-camp/football-camp-19.jpg",
        caption: "MLA Manoj Moothedan addressing children and parents at the inaugural ceremony of the Empower Youth Football Coaching Camp.",
        alt: "MLA Manoj Moothedan speaking at the Football Coaching Camp inauguration",
        category: "camp-inauguration",
        categoryLabel: "MLA Inauguration",
        orientation: "portrait"
      },
      {
        id: "fc-20",
        src: "/assets/gallery/football-coaching-camp/football-camp-20.jpg",
        caption: "Inaugural address highlighting the importance of physical fitness, teamwork, discipline, and confidence for youth aged 10–15.",
        alt: "Inaugural address by MLA Manoj Moothedan under the Empower Youth banner",
        category: "camp-inauguration",
        categoryLabel: "MLA Inauguration",
        orientation: "portrait"
      },
      {
        id: "fc-22",
        src: "/assets/gallery/football-coaching-camp/football-camp-22.jpg",
        caption: "Trainees in numbered blue jerseys listening to the coaching roadmap and schedule for the Oct 2026 – Feb 2027 training season.",
        alt: "Trainees in blue jerseys listening to the coaching briefing",
        category: "youth-orientation",
        categoryLabel: "Youth Squad & Orientation",
        orientation: "portrait"
      },
      {
        id: "fc-23",
        src: "/assets/gallery/football-coaching-camp/football-camp-23.jpg",
        caption: "Camp coaches and coordinators overseeing the player orientation and batch registration session.",
        alt: "Camp coaches overseeing player orientation",
        category: "youth-orientation",
        categoryLabel: "Youth Squad & Orientation",
        orientation: "portrait"
      },
      {
        id: "fc-24",
        src: "/assets/gallery/football-coaching-camp/football-camp-24.jpg",
        caption: "Young footballers seated together in camaraderie before stepping onto the training pitch.",
        alt: "Young footballers seated together at the camp pavilion",
        category: "youth-orientation",
        categoryLabel: "Youth Squad & Orientation",
        orientation: "portrait"
      },
      {
        id: "fc-25",
        src: "/assets/gallery/football-coaching-camp/football-camp-25.jpg",
        caption: "Front-row view of the 10–15 age group cohort wearing their football boots, shin guards, and official camp kits.",
        alt: "Front-row view of youth footballers in camp kits and boots",
        category: "youth-orientation",
        categoryLabel: "Youth Squad & Orientation",
        orientation: "portrait"
      },
      {
        id: "fc-26",
        src: "/assets/gallery/football-coaching-camp/football-camp-26.jpg",
        caption: "Parents, guardians, and local supporters gathered alongside the trainees during the camp opening ceremony.",
        alt: "Parents and trainees gathered at the football camp opening",
        category: "youth-orientation",
        categoryLabel: "Youth Squad & Orientation",
        orientation: "portrait"
      },
      {
        id: "fc-27",
        src: "/assets/gallery/football-coaching-camp/football-camp-27.jpg",
        caption: "Focused young athletes listening to guidance on discipline, regular practice, and sportsmanship.",
        alt: "Focused young athletes during orientation",
        category: "youth-orientation",
        categoryLabel: "Youth Squad & Orientation",
        orientation: "portrait"
      },
      {
        id: "fc-28",
        src: "/assets/gallery/football-coaching-camp/football-camp-28.jpg",
        caption: "Pavilion view of the Empower Youth squad ready for five months of structured grassroots football coaching.",
        alt: "Pavilion view of the Empower Youth football squad",
        category: "youth-orientation",
        categoryLabel: "Youth Squad & Orientation",
        orientation: "portrait"
      },
      {
        id: "fc-29",
        src: "/assets/gallery/football-coaching-camp/football-camp-29.jpg",
        caption: "Coaches and mentors briefing the squad on ball control drills, fitness routines, and safety protocols.",
        alt: "Coaches briefing the youth football squad",
        category: "youth-orientation",
        categoryLabel: "Youth Squad & Orientation",
        orientation: "portrait"
      },
      {
        id: "fc-31",
        src: "/assets/gallery/football-coaching-camp/football-camp-31.jpg",
        caption: "Wide view of the inaugural gathering with MLA Manoj Moothedan, programme coordinators, and the entire youth squad.",
        alt: "Wide view of the Football Coaching Camp inauguration ceremony",
        category: "camp-inauguration",
        categoryLabel: "MLA Inauguration",
        orientation: "portrait"
      },
      {
        id: "fc-32",
        src: "/assets/gallery/football-coaching-camp/football-camp-32.jpg",
        caption: "Community representatives and coaching staff sharing encouraging words with the young players.",
        alt: "Community representatives and coaching staff at the camp",
        category: "camp-inauguration",
        categoryLabel: "MLA Inauguration",
        orientation: "portrait"
      },
      {
        id: "fc-33",
        src: "/assets/gallery/football-coaching-camp/football-camp-33.jpg",
        caption: "Full assembly at the Football Coaching Camp – Empower Youth Programme inauguration organised by Flexon Sports Foundation.",
        alt: "Full assembly at the Football Coaching Camp Empower Youth Programme",
        category: "camp-inauguration",
        categoryLabel: "MLA Inauguration",
        orientation: "portrait"
      }
    ]
  },
  {
    id: "veteran-cricket",
    title: "Veteran Sixes Cricket Camaraderie",
    shortTitle: "Veteran Sixes Cricket",
    subtitle: "Lifelong sport & team spirit for experienced players",
    date: "2026 Season",
    isoDate: "2026-09-15",
    year: "2026",
    city: "Kerala",
    venue: "Regional Turf Grounds",
    sport: "cricket",
    sportLabel: "Cricket",
    sportIcon: "🏏",
    initiative: "Veteran Sixes",
    sdg: "SDG 3: Good Health",
    featured: false,
    folder: "/assets/hero",
    cover: "/assets/hero/veteran-cricket.jpg",
    count: 1,
    categories: [
      { id: "all", label: "All Moments", icon: "📸" },
      { id: "cricket", label: "Veteran Cricket", icon: "🏏" }
    ],
    items: [
      {
        id: "cr-1",
        src: "/assets/hero/veteran-cricket.jpg",
        caption: "Veteran Sixes cricket celebrating sportsmanship and lifelong camaraderie on the field.",
        alt: "Veteran cricket players celebrating on the pitch",
        category: "cricket",
        categoryLabel: "Veteran Cricket",
        orientation: "landscape"
      }
    ]
  }
];

/**
 * Stories & Verified Updates
 */
export const stories = [
  {
    id: "hyderabad-edition-concludes",
    slug: "hyderabad-first-edition-completed",
    title: "FLEXATHON Concludes Successful First Edition in Hyderabad",
    date: "20 October 2026",
    category: "Event Report",
    initiative: "FLEXATHON",
    author: "Flexon Editorial Team",
    image: "/assets/hero/flexathon-hyd-hero-1.jpg",
    summary: "On 18 October 2026, the inaugural edition of FLEXATHON brought runners to ESCI Campus in Hyderabad, spotlighting SDG 4: Quality Education.",
    content: `On Sunday, 18 October 2026, the first edition of FLEXATHON took place at the Engineering Staff College of India (ESCI) Campus in Gachibowli, Hyderabad. Organised by Flexon Sports Foundation, the run gathered athletes, students, and community participants across 3K, 5K, and 10K categories.

The edition highlighted Sustainable Development Goal 4: Quality Education, emphasizing the role of active play, physical education, and teamwork in holistic youth development.

Flexon Sports Foundation expresses its gratitude to venue partner ESCI, official hydration partner Tata Copper+, entertainment partner SMAAASH, and nutrition partner Akshayakalpa Organic, along with all volunteers and participants who contributed to making the inaugural event an inspiring reality.`
  },
  {
    id: "kochi-edition-announced",
    slug: "kochi-edition-announced",
    title: "Kochi Announced as Next Destination for FLEXATHON",
    date: "24 October 2026",
    category: "Initiative Update",
    initiative: "FLEXATHON",
    author: "Flexon Communications",
    image: "/assets/animated/flexathon-kochi-animated.jpg",
    summary: "Flexon Sports Foundation has announced that the next edition of FLEXATHON will take place in the coastal city of Kochi. Pre-registration for updates is now open.",
    content: `Following the successful first run in Hyderabad, Flexon Sports Foundation is excited to bring FLEXATHON to Kochi, Kerala. Known for its rich sporting tradition and picturesque waterfronts, Kochi offers a fitting backdrop for the Global Goals Run.

The foundation is currently working with civic and venue partners to finalize the race date, scenic route, and developmental theme. Prospective participants and corporate teams can now register their interest to be notified the moment official registrations open.`
  },
  {
    id: "empower-youth-football-underway",
    slug: "empower-youth-football-coaching-underway",
    title: "Football Coaching Camp – Empower Youth Programme Inaugurated by MLA Manoj Moothedan",
    date: "12 October 2026",
    category: "Programme Update",
    initiative: "Empower Youth",
    author: "Grassroots Development Desk",
    image: "/assets/gallery/football-coaching-camp/football-camp-01.jpg",
    summary: "Organised by Flexon Sports Foundation and inaugurated by MLA Manoj Moothedan, the Football Coaching Camp provides structured training for children aged 10–15 from 3 October 2026 to 27 February 2027.",
    content: `The Football Coaching Camp is an initiative of Flexon Sports Foundation under its Empower Youth Programme, inaugurated by MLA Manoj Moothedan.

Running from 3 October 2026 to 27 February 2027, the camp provides structured football training for children aged 10–15, focusing on football skills, physical fitness, teamwork, discipline and confidence.

The programme aims to encourage young talent and promote sports participation among children. Parents and guardians interested in learning about session schedules and enrolment availability can submit an enquiry through the foundation's official portal.`
  }
];
