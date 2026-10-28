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
    image: "/assets/animated/flexathon-runners-animated.jpg"
  },
  {
    id: "empower-youth-football",
    title: "Empower Youth Football Coaching",
    slug: "empower-youth-football-camp",
    shortDesc: "Structured football learning for children aged 10–15, with skills and life habits developed through consistent effort.",
    fullDesc: "Structured football learning for children aged 10–15 under the Empower Youth programme led by MLA Manoj Moothedan. Focuses on ball mastery, passing, teamwork, practice habits, and building confidence.",
    actionText: "View Camp Details",
    actionLink: "/programs/empower-youth-football-camp",
    badge: "Active Camp (Oct 2026 – Feb 2027)",
    category: "Football",
    image: "/assets/animated/football-camp-animated.jpg"
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
    image: "/assets/animated/cricket-animated.jpg"
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
    image: "/assets/animated/football-camp-animated.jpg"
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
    image: "/assets/animated/cricket-animated.jpg"
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
    image: "/assets/animated/hero-sports-animated.jpg"
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
    image: "/assets/animated/support-donate-animated.jpg"
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
    image: "/assets/animated/flexathon-runners-animated.jpg"
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
    image: "/assets/animated/support-donate-animated.jpg"
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
    image: "/assets/animated/hero-sports-animated.jpg"
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
    image: "/assets/animated/hero-sports-animated.jpg"
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
    image: "/assets/animated/hero-sports-animated.jpg"
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
    image: "/assets/animated/flexathon-hyderabad-animated.jpg",
    galleryCount: 6,
    resultsLink: "https://flexathonrun.org/"
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
    image: "/assets/animated/cricket-animated.jpg",
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
 */
export const galleryAlbums = [
  {
    id: "hyderabad-2026",
    title: "FLEXATHON Hyderabad 2026 - First Edition",
    subtitle: "ESCI Campus, Gachibowli • 18 October 2026",
    date: "18 Oct 2026",
    city: "Hyderabad",
    initiative: "FLEXATHON",
    cover: "/assets/animated/flexathon-hyderabad-animated.jpg",
    count: 4,
    items: [
      {
        id: "hyd-1",
        src: "/assets/animated/flexathon-hyderabad-animated.jpg",
        caption: "Runners gather at the starting arch in Hyderabad celebrating active living.",
        alt: "FLEXATHON Hyderabad start line runners"
      },
      {
        id: "hyd-2",
        src: "/assets/brand/flexathon-run.jpeg",
        caption: "FLEXATHON official event branding and running community participants.",
        alt: "FLEXATHON community runners"
      },
      {
        id: "hyd-3",
        src: "/assets/animated/flexathon-runners-animated.jpg",
        caption: "FLEXATHON visual theme: United by Sport, Driven by Global Goals.",
        alt: "Athletic runners in motion"
      },
      {
        id: "hyd-4",
        src: "/assets/brand/flexathon-logo.jpeg",
        caption: "Official FLEXATHON Run identity and Quality Education theme focus.",
        alt: "FLEXATHON Run official emblem"
      }
    ]
  },
  {
    id: "football-training",
    title: "Empower Youth Football Coaching",
    subtitle: "Youth training sessions for ages 10–15 • Kerala",
    date: "October 2026 – Ongoing",
    city: "Perumbavoor, Kerala",
    initiative: "Empower Youth",
    cover: "/assets/animated/football-camp-animated.jpg",
    count: 2,
    items: [
      {
        id: "fb-1",
        src: "/assets/animated/football-camp-animated.jpg",
        caption: "Youth football coaching camp focusing on ball control, teamwork, and active habits.",
        alt: "Youth football coaching camp"
      },
      {
        id: "fb-2",
        src: "/assets/animated/hero-sports-animated.jpg",
        caption: "Structured sports development connecting grassroots passion with discipline.",
        alt: "Sports training still life"
      }
    ]
  },
  {
    id: "veteran-cricket",
    title: "Veteran Sixes Cricket Camaraderie",
    subtitle: "Lifelong sport & team spirit for experienced players",
    date: "Evergreen",
    city: "Kerala / Regional",
    initiative: "Veteran Sixes",
    cover: "/assets/animated/cricket-animated.jpg",
    count: 2,
    items: [
      {
        id: "cr-1",
        src: "/assets/animated/cricket-animated.jpg",
        caption: "Veteran Sixes cricket celebrating sportsmanship and the joy of the game.",
        alt: "Cricket bats, ball, and wickets celebration"
      },
      {
        id: "cr-2",
        src: "/assets/animated/support-donate-animated.jpg",
        caption: "Community sports fostering lasting health and friendships.",
        alt: "Community sports and support"
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
    image: "/assets/animated/flexathon-hyderabad-animated.jpg",
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
    title: "Empower Youth Football Coaching Camp Commences in Kerala",
    date: "12 October 2026",
    category: "Programme Update",
    initiative: "Empower Youth",
    author: "Grassroots Development Desk",
    image: "/assets/animated/football-camp-animated.jpg",
    summary: "Structured football coaching for children aged 10–15 is now underway under the Empower Youth initiative led by MLA Manoj Moothedan.",
    content: `The Empower Youth football coaching camp, organized by Flexon Sports Foundation under the leadership of MLA Manoj Moothedan, is currently delivering training sessions for young players aged 10–15.

Running from 3 October 2026 through 27 February 2027, the camp provides structured coaching covering ball mastery, spatial awareness, passing drills, and fair play values. Parents and guardians interested in learning about session schedules and enrolment availability can submit an enquiry through the foundation's official portal.`
  }
];
