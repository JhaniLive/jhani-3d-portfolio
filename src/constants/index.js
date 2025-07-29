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
    name: "Audit Pro",
    category: "AI-Powered React Application",
    description: "Advanced AI-driven audit management system with smart analytics and automated reporting capabilities.",
    role: "Lead Developer",
    impact: "Streamlined audit processes by 60%",
    technologies: ["React", "React Bootstrap", "SCSS", "REST API", "AI/ML"],
    complexity: "high",
    type: "web-app"
  },
  {
    name: "Gift From Heaven",
    category: "E-Commerce Platform",
    description: "Beautiful gifting platform with seamless user experience and integrated payment solutions.",
    role: "Full Stack Developer", 
    impact: "Enhanced user engagement by 45%",
    technologies: ["React", "React Bootstrap", "SCSS", "REST API"],
    complexity: "high",
    type: "ecommerce"
  },
  {
    name: "Giglee",
    category: "Social Media Platform",
    description: "Interactive social platform connecting users through shared interests and community features.",
    role: "Frontend Lead",
    impact: "Built scalable user interface for 10k+ users",
    technologies: ["React", "React Bootstrap", "SCSS", "REST API"],
    complexity: "high",
    type: "social"
  },
  {
    name: "Travel Nurses Inc",
    category: "Healthcare Staffing Solution",
    description: "Comprehensive nurse staffing platform connecting healthcare professionals with opportunities nationwide.",
    role: "Senior Developer",
    impact: "Connected 1000+ nurses with opportunities",
    technologies: ["React", "React Bootstrap", "SCSS"],
    complexity: "medium",
    type: "healthcare"
  },
  {
    name: "Upshift by Unisolve",
    category: "Educational Technology",
    description: "Revolutionary learning platform empowering students and educators with personalized learning paths.",
    role: "Technical Lead",
    impact: "Improved learning outcomes by 40%",
    technologies: ["React", "React Bootstrap", "SCSS"],
    complexity: "high",
    type: "education"
  },
  {
    name: "TNI - Vendor Management System",
    category: "Enterprise Solution",
    description: "Sophisticated vendor management system with automated workflows and real-time analytics.",
    role: "Lead Developer",
    impact: "Reduced vendor onboarding time by 70%",
    technologies: ["React", "React Bootstrap", "SCSS"],
    complexity: "high",
    type: "enterprise"
  },
  {
    name: "Clear Bags",
    category: "E-Commerce Web Suite",
    description: "Complete e-commerce solution for transparent bag manufacturing with custom ordering system.",
    role: "Full Stack Developer",
    impact: "Increased online sales by 80%",
    technologies: ["React", "React Bootstrap", "SCSS", "REST API"],
    complexity: "medium",
    type: "ecommerce"
  },
  {
    name: "eBillingAmerica",
    category: "Healthcare Billing Platform",
    description: "Advanced medical billing solution with automated claim processing and compliance management.",
    role: "Senior Developer",
    impact: "Accelerated billing cycles by 50%",
    technologies: ["React", "React Bootstrap", "SCSS", "REST API"],
    complexity: "high",
    type: "healthcare"
  },
  {
    name: "Popular Avenue Clinic",
    category: "Medical Practice Management",
    description: "Comprehensive clinic management system with patient scheduling and medical records integration.",
    role: "Frontend Developer",
    impact: "Enhanced patient experience by 60%",
    technologies: ["React", "React Bootstrap", "SCSS", "REST API"],
    complexity: "medium",
    type: "healthcare"
  },
  {
    name: "Comcamps",
    category: ".NET Enterprise Application",
    description: "Robust communication and campaign management platform for enterprise-level operations.",
    role: "Frontend Developer",
    impact: "Improved campaign efficiency by 35%",
    technologies: ["HTML5", "CSS3", "JavaScript", ".NET"],
    complexity: "medium",
    type: "enterprise"
  },
  {
    name: "RockNSoul",
    category: "Entertainment Platform",
    description: "Dynamic music and entertainment platform with interactive features and content management.",
    role: "React Developer",
    impact: "Boosted user engagement by 55%",
    technologies: ["React", "React Bootstrap", "SCSS"],
    complexity: "medium",
    type: "entertainment"
  },
  {
    name: "MATA Transport",
    category: "SharePoint Solution",
    description: "Comprehensive transportation management system built on SharePoint with custom workflows.",
    role: "SharePoint Developer",
    impact: "Optimized transport operations by 40%",
    technologies: ["HTML5", "CSS3", "JavaScript", "SharePoint"],
    complexity: "medium",
    type: "transport"
  },
  {
    name: "MCR Safety",
    category: "Sitecore Enterprise Site",
    description: "Industrial safety equipment platform with advanced product catalogs and safety compliance features.",
    role: "Frontend Developer",
    impact: "Enhanced product discoverability by 45%",
    technologies: ["HTML5", "CSS3", "JavaScript", "Sitecore"],
    complexity: "medium",
    type: "industrial"
  },
  {
    name: "Varsity",
    category: "WordPress Solution",
    description: "Educational institution website with custom themes and integrated learning management features.",
    role: "WordPress Developer",
    impact: "Improved student engagement by 30%",
    technologies: ["HTML5", "CSS3", "JavaScript", "WordPress"],
    complexity: "low",
    type: "education"
  }
];

export { services, technologies, experiences, testimonials, projects };
