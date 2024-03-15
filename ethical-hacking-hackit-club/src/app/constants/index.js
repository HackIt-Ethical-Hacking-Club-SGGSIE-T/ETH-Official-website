import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  hackingTool2,
  hackingTool3,
  hackingTool4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  sqlInjection,
  crossSite,
  dataleak,
  emailSpoofing,
  passwordManagement
} from '../_assets/index';


export const socials = [
  {
    id: "0",
    title: "Linkedin",
    iconUrl: '/imgs/linkedin.png',
    url: 'https://www.linkedin.com/company/hackit-ethical-hacking-cyber-security-club-sggsie-t-nanded/mycompany/'
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: '/imgs/twitter.png',
    url: "https://x.com/hackit_sggsiet?t=c97Ki6CW4D2x0awKqa5UBg&s=09",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: '/imgs/instagram.png',
    url: "https://www.threads.net/@hackit_sggsiet",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: '/imgs/facebook.png',
    url: "https://www.facebook.com/share/oCymb9tfrCrv6Z2o/?mibextid=qi2Omg",
  },
  {
    id: "4",
    title: "youtube",
    iconUrl: '/imgs/youtube.png',
    url: "https://youtube.com/@HACKITSGGSNanded?feature=shared",
  },
  {
    id: "5",
    title: "telegram",
    iconUrl: '/imgs/telegram.png',
    url: "https://t.me/hackitsggs",
  }
];


export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "/",
  },
  {
    id: "1",
    title: "Events",
    url: "/Events",
  },
  {
    id: "2",
    title: "About Us",
    url: "About",
  },
  {
    id: "3",
    title: "Contact Us",
    url: "/Contact"
  }
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare,];

export const hackImages = [hackingTool2, hackingTool3, hackingTool4];

export const companyLogos = [
  {
    title: 'Sql Injection',
    url: sqlInjection
  }, ,
  {
    title: 'Cross-site Scripting',
    url: crossSite
  },
  {
    title: 'Data Leakage',
    url: dataleak
  },
  {
    title: 'Email Spoofing',
    url: emailSpoofing
  },
  {
    title: 'Password Management',
    url: passwordManagement
  },
];

// export const brainwaveServices = [
//   "Photo generating",
//   "Photo enhance",
//   "Seamless Integration",
// ];

// export const brainwaveServicesIcons = [
//   recording03,
//   recording01,
//   disc02,
//   chromecast,
//   sliders04,
// ];
// Get the current date
const currentDate = new Date();

// Get the date 2 days before
const twoDaysBefore = new Date(currentDate);
twoDaysBefore.setDate(currentDate.getDate() - 2);

// Get the date 2 days after
const twoDaysAfter = new Date(currentDate);
twoDaysAfter.setDate(currentDate.getDate() + 2);

// Convert the dates to strings
const currentDateStr = currentDate.toDateString();
const twoDaysBeforeStr = twoDaysBefore.toDateString();
const twoDaysAfterStr = twoDaysAfter.toDateString();

export const roadmap = [
  {
    id: "0",
    title: "Wifi Hacking",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date:  currentDateStr,
    topTag:'Exploiting weak encryption, rogue access points, and vulnerabilities.',
    status: "done",
    imageUrl: '/imgs/first.jpg',
    colorful: true,
    link:'https://www.hackthebox.com/hacker'
  },
  {
    id: "1",
    title: "Web Security",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    topTag:'Strong encryption, regular updates, robust authentication, and user awareness.',
    status: "progress",
    date: twoDaysAfterStr,
    imageUrl: '/imgs/second.jpg',
    link:"https://www.hacksplaining.com/lessons"
  },
  {
    id: "2",
    title: "Networking",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date:  twoDaysBeforeStr,
    topTag:'Efficient routing, reliable connections, scalable infrastructure, and security protocols',
    status: "done",
    imageUrl: '/imgs/third.jpg',
    link:'https://tryhackme.com/'
  },
  {
    id: "3",
    title: "Cryptography",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date:  currentDateStr,
    status: "progress",
    topTag:'Secure encryption, cryptographic algorithms, key management, and digital signatures.',
    imageUrl: '/imgs/fourth.jpg',
    link:'https://cryptohack.org/',
    colorful:true
  },
];

export const highlights = [
  {
    imgUrl: '/imgs/abhishek.jpeg',
    title: 'Report on Web App Penetration testing',
    subtitle:
      'Speaker: Mr. Abhishek Parashar. Current position: Founder of Indian Cyber Club’, India’s leading cyber  community. Experience: 6 years in Cybersecurity, Mentored 10k+ Students and Professionals, Red Teamer, Bug Hunter: Reported 78+ bugs in companies like Netflix, TripAdvisor, TCS, VPNArea, etc., and faculty for Cyber-security in institutes.',
  },
  {
    imgUrl: '/imgs/wifihacking.jpeg',
    title: 'Learn about Wi-Fi hacking and Website Admin Panel Bypassing.',
    subtitle:
      ' CEO: Aryan Singh Thakur. Company: Hacks4u Venture Pvt Ltd. Recognized for contributions to Google’s security with inclusion in the Google Hall of Fame. Discovered and reported critical vulnerabilities within Google’s systems, enhancing the platform’s integrity and user safety. Speaker: Hashamat Khan Experience: 1yr experience of commissioner office as cyber volunteer. Cyber security consultant.• Teaching of cybersecurity 3yr.',
  }
];

// export const club_text =
//   "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

// export const club_content = [
//   {
//     id: "0",
//     title: "Seamless Integration",
//     text: club_text,
//   },
//   {
//     id: "1",
//     title: "Smart Automation",
//   },
//   {
//     id: "2",
//     title: "Top-notch Security",
//   },
// ];

// export const workStack = [
//   {
//     id: "0",
//     title: "Figma",
//     icon: figma,
//     width: 26,
//     height: 36,
//   },
//   {
//     id: "1",
//     title: "Notion",
//     icon: notion,
//     width: 34,
//     height: 36,
//   },
//   {
//     id: "2",
//     title: "Discord",
//     icon: discord,
//     width: 36,
//     height: 28,
//   },
//   {
//     id: "3",
//     title: "Slack",
//     icon: slack,
//     width: 34,
//     height: 35,
//   },
//   {
//     id: "4",
//     title: "Photoshop",
//     icon: photoshop,
//     width: 34,
//     height: 34,
//   },
//   {
//     id: "5",
//     title: "Protopie",
//     icon: protopie,
//     width: 34,
//     height: 34,
//   },
//   {
//     id: "6",
//     title: "Framer",
//     icon: framer,
//     width: 26,
//     height: 34,
//   },
//   {
//     id: "7",
//     title: "Raindrop",
//     icon: raindrop,
//     width: 38,
//     height: 32,
//   },
// ];

// export const pricing = [
//   {
//     id: "0",
//     title: "Basic",
//     description: "AI chatbot, personalized recommendations",
//     price: "0",
//     features: [
//       "An AI chatbot that can understand your queries",
//       "Personalized recommendations based on your preferences",
//       "Ability to explore the app and its features without any cost",
//     ],
//   },
//   {
//     id: "1",
//     title: "Premium",
//     description: "Advanced AI chatbot, priority support, analytics dashboard",
//     price: "9.99",
//     features: [
//       "An advanced AI chatbot that can understand complex queries",
//       "An analytics dashboard to track your conversations",
//       "Priority support to solve issues quickly",
//     ],
//   },
//   {
//     id: "2",
//     title: "Enterprise",
//     description: "Custom AI chatbot, advanced analytics, dedicated account",
//     price: null,
//     features: [
//       "An AI chatbot that can understand your queries",
//       "Personalized recommendations based on your preferences",
//       "Ability to explore the app and its features without any cost",
//     ],
//   },
// ];

export const teamHierarchy = [
  {
    id: "0",
    title: "President",
    text: "Lead and oversee all club activities and operations. Develop and execute the club's vision and strategic plan. Coordinate and empower team members to achieve goals.",
    // backgroundUrl: "./src/assets/benefits/card-1.svg",
    // iconUrl: benefitIcon1,
    // imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Vice President",
    text: "Support the President in club management and decision-making. Oversee team coordination and project execution. Assist in event planning and logistics.",
    // backgroundUrl: "./src/assets/benefits/card-2.svg",
     imageLink:'/icon.png',
    // iconUrl: benefitIcon2,
    // imageUrl: benefitImage2,
    // light: true,
  },
  {
    id: "2",
    title: "Secretary",
    text: "Manage and organize club documentation and records. Facilitate seamless communication within the club. Schedule and organize club meetings.",
    // backgroundUrl: "./src/assets/benefits/card-2.svg",
     imageLink:'',
    // iconUrl: benefitIcon2,
    // imageUrl: benefitImage2,
    // light: true,
  },
  {
    id: "3",
    title: "Student Main Coordinator",
    text: "Facilitate the onboarding of new members. Manage club membership records. Organize membership drives and engagement activities.",
    // backgroundUrl:"./src/assets/benefits/card-3.svg",
    imageLink:''
    // iconUrl: benefitIcon3,
    // imageUrl: benefitImage2,
  },
  {
    id: "4",
    title: "Website Main Coordinator",
    text: "Maintaining club's website and online presence. Oversee IT-related communications within the club. Ensure the security and functionality of online platforms.",
    // backgroundUrl: "./src/assets/benefits/card-5.svg",
    imageLink:''
    // iconUrl: benefitIcon1,
    // imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Finance Main Coordinator",
    text: "Manage the club's financial activities and budget. Plan and allocate finances for events and activities. Coordinate financial matters with the institute.",
    // backgroundUrl: "./src/assets/benefits/card-6.svg",
    imageLink:'',
    // iconUrl: benefitIcon2,
    // imageUrl: benefitImage2,
    // light:true
  },
  {
    id: "6",
    title: "Internship Main Coordinator",
    text: "Plan and execute club events, workshops, and seminars.Coordinate logistics, venues, and speakers. Develop educational programs and training initiatives.",
    // backgroundUrl: "./src/assets/benefits/card-6.svg",
    imageLink:'',
    // iconUrl: benefitIcon2,
    // imageUrl: benefitImage2,
    // light:true
  },
  {
    id: "7",
    title: "Media Main Coordinator",
    text: "Produce visual assets such as graphics, photos, and videos. Coordinate content schedules and campaigns. Manage social media accounts and engage with followers.",
    // backgroundUrl: "./src/assets/benefits/card-6.svg",
    imageLink:'',
    // iconUrl: benefitIcon2,
    // imageUrl: benefitImage2,
    // light:true
  },
  {
    id: "8",
    title: "Workshop Main Coordinator",
    text: "Recruit and coordinate expert speakers and presenters. Collect feedback and evaluate workshop effectiveness for improvement. Stay updated on industry trends and best practices for workshop development.",
    // backgroundUrl: "./src/assets/benefits/card-6.svg",
    imageLink:'',
    // iconUrl: benefitIcon2,
    // imageUrl: benefitImage2,
    // light:true
  },
  {
    id: "9",
    title: "Research & Content Main Coordinator",
    text: "Create and curate engaging multimedia content. Collaborate with other teams for content promotion. Analyze content performance and optimize strategies accordingly.",
    // backgroundUrl: "./src/assets/benefits/card-6.svg",
    imageLink:'',
    // iconUrl: benefitIcon2,
    // imageUrl: benefitImage2,
    // light:true
  },
];

