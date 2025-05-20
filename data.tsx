import { nanoid } from "nanoid";
import ecommerceImg from "./public/ecommerce-img.jpg"
import colorGeneratorImg from "./public/color-generator.jpg"
import moreProjectsImg from "./public/more-projects.jpg"

// export const skills = [
//   {
//     id: nanoid(),
//     title: "React",
//     icon: <FaReact className="h-24 w-24 text-inherit" />,
//     text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
//   },
//   {
//     id: nanoid(),
//     title: "Javascript",
//     icon: <FaJs className="h-20 w-20 text-black rounded-3xl" />,
//     text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
//   },
//   {
//     id: nanoid(),
//     title: "TypeScript",
//     icon: <BiLogoTypescript className="h-32 w-32 text-black" />,
//     text: "Comfortable using TypeScript to enhance JavaScript projects with optional static typing for better code maintainability.",
//   },
//   {
//     id: nanoid(),
//     title: "HTML&CSS",
//     icon: <FaHtml5 className="h-20 w-20 text-black" />,
//     text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
//   },
//   {
//     id: nanoid(),
//     title: "Tailwind CSS",
//     icon: <SiTailwindcss className="h-32 w-32 text-black" />,
//     text: "Familiar with Tailwind CSS and its utility-first approach to building modern and responsive user interfaces.",
//   },
//   {
//     id: nanoid(),
//     title: "Node.js & Express.js",
//     icon: <FaNode className="h-32 w-32 text-black" />,
//     text: "Capable of using Node.js and Express.js to build simple backend services and RESTful APIs that support front-end applications.",
//   },
//   {
//     id: nanoid(),
//     title: "MongoDB",
//     icon: <SiMongodb className="h-24 w-24 text-black" />,
//     text: "Able to work with MongoDB for storing and retrieving data in NoSQL databases for web applications.",
//   },
//   {
//     id: nanoid(),
//     title: "Git & GitHub",
//     icon: <FaGithub className="h-20 w-20 text-black" />,
//     text: "Proficient in Git and GitHub, managing version control efficiently for collaboration and project tracking.",
//   },
//   {
//     id: nanoid(),
//     title: "RESTful APIs",
//     icon: <TbApi className="h-32 w-32 text-black" />,
//     text: "Capable of working with RESTful APIs to integrate front-end applications with backend services for smooth data exchange.",
//   },
// ];

export const projects = [
  {
    id: nanoid(),
    img: ecommerceImg,
    url: "https://13-comfy-store.netlify.app/",
    github:
      "https://github.com/DiegoBottegoni/13-comfy-store",
    title: "E-commerce",
    text: "A responsive e-commerce site built with React, featuring a product catalog, shopping cart, and user authentication. It integrates with a third-party API to fetch product data dynamically. Users can browse items, filter by category, view product details, add them to their cart, and simulate a secure checkout experience.",
  },
  {
    id: nanoid(),
    img: colorGeneratorImg,
    url: "https://009-color-generator.netlify.app/",
    github:
      "https://github.com/DiegoBottegoni/react-course-projects/tree/main/09-color-generator",
    title: "color generator",
    text: "A color generator app built with React, allowing users to create and save color palettes. It features a user-friendly interface and integrates with a third-party API for color suggestions.",
  },
  {
    id: nanoid(),
    img: moreProjectsImg,
    url: "https://github.com/DiegoBottegoni/react-course-projects",
    github:
      "https://github.com/DiegoBottegoni/react-course-projects",
    title: "More Projects",
    text: "A collection of various projects built with React, showcasing different features and functionalities. Each project demonstrates a unique aspect of React development, from state management to API integration.",
  },
];