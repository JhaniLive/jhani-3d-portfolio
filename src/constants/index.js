import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  link,
  figma,
  docker,
  sass,
  bootstrap,
  sharepoint,
  storybook,
  meta,
  starbucks,
  tesla,
  shopify,
  me,
  carrent,
  jobit,
  tripguide,
  threejs,
  mcr,
  sky,
  tn,
  uni,
  up,
  myResume
} from "../assets";

export const navLinks = [
  
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI-Powered React Developer",
    icon: web,
  },
  {
    title: "Prompt Engineer & AI Specialist",
    icon: mobile,
  },
  {
    title: "3D Web Experience Creator",
    icon: backend,
  },
  {
    title: "Full-Stack Innovation Expert",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "SASS",
    icon: sass,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "storybook",
    icon: storybook,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "sharepoint",
    icon: sharepoint,
  },
];

const experiences = [
  {
    title: "AI-Powered React Developer & Prompt Engineer",
    company_name: "Current Focus • 2024-Present",
    icon: me,
    iconBg: "#915EFF",
    date: "2024 - Present",
    points: [
      "🚀 Architecting next-generation React applications with AI integration and cutting-edge performance optimizations",
      "🤖 Mastering Prompt Engineering for ChatGPT, Claude, and specialized AI models to boost development velocity by 300%",
      "⚡ Building lightning-fast React apps with advanced hooks, context patterns, and state management solutions",
      "🎨 Creating stunning 3D experiences using Three.js, React Three Fiber, and immersive WebGL technologies",
      "🧠 Leveraging AI for automated code generation, intelligent debugging, and smart architecture decisions",
      "📱 Developing responsive, mobile-first applications with exceptional UX/UI design principles",
      "🔧 Implementing advanced CI/CD pipelines and modern development workflows with AI-assisted testing"
    ],
  },
  {
    title: "Senior Front-End Developer & Tech Innovator",
    company_name: "Energetic Info Solutions (eBiz)",
    icon: me,
    iconBg: "#E6DEDD",
    date: "June 2018 - Present",
    points: [
      "🏆 Led development of 15+ enterprise-grade React applications serving 100K+ users globally",
      "🎯 Spearheaded React ecosystem adoption: Hooks, Context API, Redux Toolkit, and modern state management",
      "🔥 Achieved 40% performance improvements through code splitting, lazy loading, and advanced optimization techniques",
      "🚀 Built scalable component libraries using React Storybook with 200+ reusable, tested components",
      "⚙️ Architected robust SharePoint SPFx solutions integrating Microsoft Graph APIs and modern web standards",
      "👥 Mentored junior developers in React best practices, TypeScript adoption, and agile methodologies",
      "📊 Delivered data-driven dashboards with real-time analytics using React Query and advanced charting libraries",
      "🔗 Engineered seamless API integrations with RESTful services and GraphQL endpoints",
      "🎨 Crafted pixel-perfect, responsive UIs using Tailwind CSS, SCSS, and modern CSS-in-JS solutions",
      "⚡ Optimized web applications for Core Web Vitals, achieving 95+ Lighthouse scores consistently"
    ],
  },
  {
    title: "Full-Stack Web Architect",
    company_name: "E-Services Pvt. Ltd",
    icon: me,
    iconBg: "#383E56", 
    date: "March 2020 - April 2021",
    points: [
      "🎓 Revolutionized online education with a comprehensive examination portal serving 50K+ students",
      "🔧 Engineered scalable web architecture using modern HTML5, CSS3, and vanilla JavaScript optimization",
      "🎨 Redesigned entire UI/UX from ground up, improving user engagement by 60% and reducing bounce rate",
      "📱 Implemented responsive design principles ensuring seamless experience across all devices",
      "⚡ Optimized application performance achieving sub-2-second load times through advanced caching strategies",
      "🔒 Integrated secure authentication systems and role-based access control for educational platforms"
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Upshift by Unisolve",
    description:
      "Upshift by Unisolve is a learning platform for Students and Teacher duo. Here, a School can register a program/course and assigned it to multiple students which respected students should complete with diffrent paths to get the certificate.",
    member: "Team Member",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: uni,
    source_code_link: "/",
  },
  {
    name: "Travel Nurses",
    description:
      "Travel Nurses, Inc. is a leading travel nurse staffing agency providing nurses with opportunities to find work across the country. Established by nurses for nurses, TNI has been in business since 1988 and has over 30 years of experience.",
      member: "Team Member",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: tn,
    source_code_link: "https://travelnursesinc.com/",
  },
  {
    name: "UpSquad",
    description:
      "Robust Engagement Platform, built on this decade of experience, delivers powerful online communities and communications software designed to engage and connect users across every stage of their journey.",
      member: "Team Member",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: up,
    source_code_link: "https://upsquad.co/",
  },
  {
    name: "SkyCop",
    description:
      "SkyCop’s finely targeted system identifies disturbances, helps track perpetrators and identifies crime hot spots efficiently so law enforcement can intervene.",
      member: "Team Member",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: sky,
    source_code_link: "https://www.skycopinc.com/",
  },
  {
    name: "MCR Safety",
    description:
      "MCR Safety is a company and it  all had the goal of providing hard-working safety gear at competitive prices and with great service.",
      member: "Team Member",
    tags: [
      {
        name: "sitecore",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: mcr,
    source_code_link: "https://www.mcrsafety.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
