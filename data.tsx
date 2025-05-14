import { nanoid } from "nanoid";
import { FaGithub, FaHtml5, FaJs, FaNode, FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import { TbApi } from "react-icons/tb";



export const links = [
  // { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
  { id: nanoid(), href: "#contact", text: "contact" },
];

export const skills = [
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-24 w-24 text-sky-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-20 w-20 text-sky-500 rounded-3xl" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "TypeScript",
    icon: <BiLogoTypescript className="h-32 w-32 text-sky-500" />,
    text: "Comfortable using TypeScript to enhance JavaScript projects with optional static typing for better code maintainability.",
  },
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-20 w-20 text-sky-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Tailwind CSS",
    icon: <SiTailwindcss className="h-32 w-32 text-sky-500" />,
    text: "Familiar with Tailwind CSS and its utility-first approach to building modern and responsive user interfaces.",
  },
  {
    id: nanoid(),
    title: "Node.js & Express.js",
    icon: <FaNode className="h-32 w-32 text-sky-500" />,
    text: "Capable of using Node.js and Express.js to build simple backend services and RESTful APIs that support front-end applications.",
  },
  {
    id: nanoid(),
    title: "MongoDB",
    icon: <SiMongodb className="h-24 w-24 text-sky-500" />,
    text: "Able to work with MongoDB for storing and retrieving data in NoSQL databases for web applications.",
  },
  {
    id: nanoid(),
    title: "Git & GitHub",
    icon: <FaGithub className="h-20 w-20 text-sky-500" />,
    text: "Proficient in Git and GitHub, managing version control efficiently for collaboration and project tracking.",
  },
  {
    id: nanoid(),
    title: "RESTful APIs",
    icon: <TbApi className="h-32 w-32 text-sky-500" />,
    text: "Capable of working with RESTful APIs to integrate front-end applications with backend services for smooth data exchange.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://011-mix-master.netlify.app/",
    github:
      "https://github.com/DiegoBottegoni/react-course-projects/tree/main/12-mix-master",
    title: "Mix Master",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://unsplash-img-react-vite.netlify.app/",
    github:
      "https://github.com/DiegoBottegoni/react-course-projects/tree/main/11-unsplash-images",
    title: "unsplash images",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://010-grocery-bud.netlify.app/",
    github:
      "https://github.com/DiegoBottegoni/react-course-projects/tree/main/10-grocery-bud",
    title: "grocery bud",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://009-color-generator.netlify.app/",
    github:
      "https://github.com/DiegoBottegoni/react-course-projects/tree/main/09-color-generator",
    title: "color generator",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  // {
  //   id: nanoid(),
  //   img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
  //   url: "https://008-lorem-ipsum.netlify.app/",
  //   github:
  //     "https://github.com/DiegoBottegoni/react-course-projects/tree/main/08-lorem-ipsum",
  //   title: "lorem ipsum generator",
  //   text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  // },
  // {
  //   id: nanoid(),
  //   img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
  //   url: "https://007-slider.netlify.app/",
  //   github:
  //     "https://github.com/DiegoBottegoni/react-course-projects/tree/main/07-slider",
  //   title: "slider",
  //   text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  // },
  // {
  //   id: nanoid(),
  //   img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
  //   url: "https://006-tabs.netlify.app/",
  //   github:
  //     "https://github.com/DiegoBottegoni/react-course-projects/tree/main/06-tabs",
  //   title: "tabs",
  //   text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  // },
  // {
  //   id: nanoid(),
  //   img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
  //   url: "https://005-menu.netlify.app/",
  //   github:
  //     "https://github.com/DiegoBottegoni/react-course-projects/tree/main/05-menu",
  //   title: "menu",
  //   text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  // },
  // {
  //   id: nanoid(),
  //   img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
  //   url: "https://004-accordion.netlify.app/",
  //   github:
  //     "https://github.com/DiegoBottegoni/react-course-projects/tree/main/04-accordion",
  //   title: "accordion",
  //   text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  // },
  // {
  //   id: nanoid(),
  //   img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
  //   url: "https://003-reviews.netlify.app/",
  //   github:
  //     "https://github.com/DiegoBottegoni/react-course-projects/tree/main/03-reviews",
  //   title: "reviews",
  //   text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  // },
  // {
  //   id: nanoid(),
  //   img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
  //   url: "https://002-tours-react.netlify.app/",
  //   github:
  //     "https://github.com/DiegoBottegoni/react-course-projects/tree/main/02-tours",
  //   title: "tours",
  //   text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  // },
  // {
  //   id: nanoid(),
  //   img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
  //   url: "https://001-birthday-buddy.netlify.app/",
  //   github:
  //     "https://github.com/DiegoBottegoni/react-course-projects/tree/main/01-birthday-buddy",
  //   title: "birthday buddy",
  //   text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  // },
];