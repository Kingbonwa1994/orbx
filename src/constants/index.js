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
  notification2,
  notification3,
  notification4,
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
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Webapp with Chatbot",
  "Cloud Integration",
  "Mobile App Development",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];
export const roadmap = [
  {
    id: "0",
    title: "Website Redesigns",
    text: "Revamp existing websites with modern design practices to enhance user experience and boost engagement.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Custom Software Solutions",
    text: "Develop tailored software solutions to meet specific business needs, ensuring efficiency and scalability.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "E-commerce Platform Development",
    text: "Build robust e-commerce platforms with seamless payment integrations and user-friendly interfaces.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "API Integrations",
    text: "Implement and integrate third-party APIs to enhance functionality and data accessibility within client applications.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Elevate your team's efficiency with bespoke digital solutions and top-tier security designed for seamless collaboration.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Collaboration",
    text: collabText,
  },
  {
    id: "1",
    title: "Custom Automation",
    text: "Streamline your processes with tailored automation that meets your specific needs.",
  },
  {
    id: "2",
    title: "Uncompromised Security",
    text: "Protect your projects with industry-leading security, ensuring your data is always safe.",
  },
];


export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Essential web development services, foundational support",
    price: "0",
    features: [
      "Responsive website design and development",
      "Basic SEO optimization",
      "Email support for any inquiries or issues",
    ],
  },
  {
    id: "1",
    title: "Professional",
    description: "Advanced web development, branding, and strategy",
    price: "9.99",
    features: [
      "Custom website design tailored to your brand",
      "Comprehensive SEO and analytics integration",
      "Ongoing support and updates",
      "Branding consultation and strategy development",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Full-service digital solutions, dedicated account management",
    price: null,
    features: [
      "End-to-end web and software development",
      "Custom integrations with third-party services",
      "Dedicated account manager for personalized service",
      "Advanced analytics and reporting",
      "Ongoing digital marketing and SEO strategies",
    ],
  },
];



export const benefits = [
  {
    id: "0",
    title: "Innovative Solutions",
    text: "Deliver cutting-edge software solutions tailored to your business needs.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Continuous Improvement",
    text: "We focus on enhancing your software continually for optimal performance.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Global Connectivity",
    text: "Collaborate seamlessly with our team from anywhere, on any device.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Rapid Development",
    text: "Accelerate your project timeline with our fast and efficient development process.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Expert Guidance",
    text: "Receive expert advice and insights to navigate your software challenges.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Tailored Solutions",
    text: "Benefit from software solutions that are customized to your business.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];


export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "https://discord.com/channels/@me/1250129313056030793",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://x.com/BonwaMdluli",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/mdlulibonwayinkosi/",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://web.facebook.com/profile.php?id=61565218105317",
  },
];
