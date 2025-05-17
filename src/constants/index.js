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
  figma,
  angular,
  catalyst,
  hbl,
  appiskey,
  ekglobal,
  perfectday,
  spark,
  threejs,
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
    title: "Frontend Engineer",
    icon: web,
  },
  {
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
    name: "angular",
    icon: angular,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "HBL - Habib Bank Limited ",
    icon: hbl,
    iconBg: "rgb(255 255 255)",
    date: "Augusts 2023 - Present",
    points: [
      "Architected and implemented responsive account opening application using the MEAN stack, resulting in a 30% improvement in user experience across devices.",
      "Engineered RESTful APIs and back-end systems with comprehensive logging using Node.js, enhancing data processing efficiency by 25% and reducing server response time by 40%.",
      "Developed and integrated Material-UI components, streamlining the UI design process and reducing development time by 35%.",
      "Conducted code reviews and refactoring sessions, resulting in a 45% reduction in technical debt and a 30% increase in code maintainability.",
    ],
  },
  {
    title: "Front End Engineer",
    company_name: "Appiskey",
    icon: appiskey,
    iconBg: "rgb(85 67 203)",
    date: "June 2021 - July 2023",
    points: [
      "Fabricated a comprehensive dashboard for real-time monitoring of fuel pump transactions and fuel level reports, integrating IoT devices and card connect intent, resulting in a 40% increase in operational efficiency.",
      "Constructed a SaaS-based school management application with role-based authentication, encompassing features from daily check-in reports to live class streaming, enhancing administrative productivity by 35%.",
      "Utilized ViteJS for optimizing modern web applications and implemented comprehensive test coverage using React testing library (Jest) which improves application efficiency by 50%.",
      "Incorporated Google Firebase notifications, cloud messaging, and Beams push notifications into a chat application, boosting user engagement by 60%.",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "CATALYST IT Solutions (Pvt) Ltd",
    icon: catalyst,
    iconBg: "rgb(255 255 255)",
    date: "Oct 2022 - Jan 2023",
    points: [
      "Manufacture a comprehensive stock market dashboard, enabling clients to visualize gains and losses through interactive graphs, tables, and reports, resulting in a 35% increase in user engagement.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Produce a React Native mobile application for a car insurance company based in Dubai, focusing on user-friendly interfaces and seamless functionality, boosting user engagement by 60%.",
      "Assemble and maintained portfolio websites for brokerage houses, ensuring optimal performance and user experience.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Hasan proved me wrong.Hasan, made a great website for us. Thanks, Hasan.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Hasan does. Hasan is a fantastic web Developer.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Hasan optimized our website, our traffic increased by 50%. He is a great developer. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Ek Global",
    description:
      "Web-based stock market dashboard that enables users to visualize gains and losses through interactive graphs, detailed tables, and insightful reports.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: ".Net core",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: ekglobal,
    source_code_link: "https://github.com/Mak7991",
  },
  {
    name: "Perfect Day Live",
    description:
      "A comprehensive SaaS-based school management application with role-based authentication, encompassing features from daily check-in reports to live class streaming, enhancing administrative productivity.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: perfectday,
    source_code_link: "https://perfectdaylive.com/",
  },
  {
    name: "Spark",
    description:
      "Modernize Web-based account opening application using the MEAN stack, integrated Material-UI components, streamlining the UI design process and reducing development time by 35%.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: spark,
    source_code_link: "https://github.com/Mak7991",
  },
];

export { services, technologies, experiences, testimonials, projects };
