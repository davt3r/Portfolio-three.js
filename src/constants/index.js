import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs2,
  git,
  energy1,
  ai1,
  webdev1,
  brain,
  threejswp,
  reactandthreewp,
  threejs2,
  vuejs,
  firebase,
  typescript,
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
    title: "FullStack Developer",
    icon: web,
  },
  {
    title: "Software Architecture",
    icon: mobile,
  },
  {
    title: "Performance Optimization",
    icon: backend,
  },
  {
    title: "Code Maintenance and Refactoring",
    icon: brain,
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
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "nodejs2",
    icon: nodejs2,
  },
  {
    name: "git",
    icon: git,
  },

  {
    name: "threejs2",
    icon: threejs2,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "vuejs",
    icon: vuejs,
  },

  {
    name: "TypeScript",
    icon: typescript,
  
  }, 

];

const experiences = [
  {
    title: "Web Developer",
    icon: webdev1,
    iconBg: "#383E56",
    date: "Sep 2021 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Vue.js, Javascript, TypeScript, etc...",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Developed an interactive product configurator using Three.js to allow users to customize and visualize products in real-time.",
    ],
  },
  {
    title: " SPA (CRUD) & React/Redux 100% Tested  ",
    icon: ai1,
    iconBg: "#383E56",
    date: " Jan 2023 - Feb 2023",
    points: [
      "Built a React/Redux Single Page Application (SPA) with full CRUD capabilities, tightly integrated with a MongoDB database. ",
      " Implemented rigorous testing, achieving 100% coverage.",
      " Enabled efficient data filtering directly from the database, ensuring real-time updates and a responsive user experience.",
    ],
  },
  {
    title: "Founder of a Marketing Agency",
    icon: energy1,
    iconBg: "#383E56",
    date: "September 2023 - Present",
    points: [
      "Founded and spearheaded a specialized agency committed to crafting bespoke and tailored websites for local businesses within the region. ",
      " Leveraging expertise in web development, the agency focuses on delivering customized solutions to meet the unique needs and objectives of each enterprise. ",
      "This initiative arose from a passion for empowering local businesses with high-quality online presences, aimed at enhancing their digital footprint and overall success.",
    ],
  },
 
];

const testimonials = [
  {
    testimonial:
      "David demonstrated exceptional commitment to learning in the FullStack Web Coding course. He effectively applied his knowledge in practice and consistently made valuable contributions to team activities.",
      name: "Alejandro Cerezo",
    designation: "Former teacher",
    company: "ISDI Coders",
    image: "https://avatars.githubusercontent.com/u/14248054?v=4",
  },
  {
    testimonial:
      "Working alongside David for six months was a masterclass in quality coding and outstanding development practices.  I look forward to the chance of our professional paths crossing again.",
    name: "Gonzu Diéz",
    designation: "Developer",
    company: "LeadingDev",
    image: "https://ugc.trycircular.com/50239_1678367107.548477.JPEG",
  },
  {
    testimonial:
      "After David optimized our website and increased, our traffic increased by 50%. We can't thank him enough!",
    name: "Juan Diaz",
    designation: "CEO",
    company: "Nature Works",
    image: "https://media.licdn.com/dms/image/C4D0BAQE7OaDAY_fq8w/company-logo_200_200/0/1588004396262/nature_works_filtration_technologies_logo?e=2147483647&v=beta&t=nZki8tRacXeFVDCEhvflGyV6P9240HpaqficVZPX0gs",
  },
];

const projects = [
  {
    name: "Linkedin",
    description:
      "Feel free to connect with me on LinkedIn for a detailed overview of my career, educational background, and the opportunity to get in touch.",
    tags: [
    
      {
        name: "Linkedin",
        color: "blue-text-gradient",
      },
    ],
    image: "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/b7/ef/be/b7efbeca-b190-1be4-f818-8abe810e4ada/AppIcon-0-1x_U007emarketing-0-7-0-85-220.png/1200x630wa.png",
    source_code_link: "https://www.linkedin.com/in/david-ternavsky/",
  },
  {
    name: "Github",
    description:
      "Where you can find some of my projects and see in what i'm working on ",
    tags: [
      {
        name: "Github",
        color: "",
      },
    
    ],
    image: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
    source_code_link: "https://github.com/davt3r",
  },
];

export { services, technologies, experiences, testimonials, projects };
