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
    title: "Front-End Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "UI Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    title: "Front-end Web Designer",
    company_name: "E-Services Pvt. Ltd",
    icon: me,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using HTML, CSS and other related technologies.",
      "Created and maintained an Online examination portal.",
      "After coming into the organization, completed the task of redesigning the entire examination portal UI to make it more user-friendly.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Energetic Info Solutions (eBiz)",
    icon: me,
    iconBg: "#E6DEDD",
    date: "June 2018 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Developed various web applications using HTML, CSS, JavaScript, jQuery, ReactJS, and Bootstrap 4.",
      "Proficient in integrating both front-end and back-end aspects of web applications.",
      "Experience with Agile methodologies in project development.",
      "Collaborated closely with designers to ensure efficient and technically sound designs.",
      "Created Student Learning Applications using ReactJS, React-Router, React-Hooks, Redux, React-Storybook, JavaScript, HTML5, CSS3, and Bootstrap 4.",
      "Successfully re-developed an E-commerce application.",
      "Ensured proper documentation and reports throughout all product life cycle stages.",
      "Utilized Freshdesk support system and Monitoring processes.",
      "Created modular, responsive templates using modern CSS and JavaScript libraries.",
      "Managed project source code history using GitHub as a version control tool.",
      "Provided continued maintenance and development of Effectively troubleshooting and resolved production issues promptly, leading to improved application performance.",
      "Provided ongoing maintenance and development, including bug fixes and patch sets, for existing applications.",
      "Working with Microsoft's SharePoint SPFx."
    ],
  },
 
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
