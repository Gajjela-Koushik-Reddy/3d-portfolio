import {
  pantrynode,
  snapnfix,
  microservices,
  resume,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  }
];

const experiences = [
  {
    title: "Web Development Intern",
    company_name: "NearXture",
    date: "2020 - 2021",
    details: [
      "Completed web development internship, demonstrating proficiency in <span style='color: white;'> HTML, CSS, JavaScript, Figma and React. </span>",
      "Assisted in developing an <span style='color: white;'>e-commerce</span> website using <span style='color: white;'>React</span> for the frontend and <span style='color: white;'>Node.js</span> for the backend, contributing to a team that <span style='color: white;'>optimized</span> website <span style='color: white;'>loading time</span> by <span style='color: white;'>20%.</span>",
    ],
  },
  {
    title: "AI/ML Team Member",
    company_name: "Logic Play Club - SRM",
    date: "2019 - 2021",
    details: [
      "<span style='color: white;'>Organized</span> engaging <span style='color: white;'>seminars and events</span>, <span style='color: white;'>boosting</span> student engagement by <span style='color: white;'>30%</span>.",
      "<span style='color: white;'>crafted</span> comprehensive <span style='color: white;'>training materials</span> to deepen understanding of <span style='color: white;'>AI</span> and its <span style='color: white;'>real-world applications</span>",
      "<span style='color: white;'>Collaborated with team</span> to make a successful student club",
    ],
  },
];

const portfolio = [
  {
    name: "Microservices",
    description:
      "Banking backend microservices built using Spring Boot and follows the MVC (Model-View-Controller) architecture. Each microservice is designed to scale independently and communicate via kafka",
    image: microservices,
  },
  {
    name: "SnapNfix",
    description:
      "SnapNfix is an Android app that is tailored to streamline the process of tracking and managing structural defects across diverse settings, including apartments, construction sites, extensive farms, and industrial areas.",
    image: snapnfix,
  },
  {
    name: "Pantry Manager",
    description:
      "Open Source food pantry management using a NodeJS-based web framework. This project allows the organizations to keep track of the food items available and utilized by community members. It ensures the control of pantry services for the staff and administration.",
    image: pantrynode,
  },
];

export { experiences, portfolio, resume };

