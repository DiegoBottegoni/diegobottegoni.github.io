import React from "react";
import { nanoid } from "nanoid";
import { FaGithub, FaHtml5, FaJs, FaNode, FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import type { Skill } from "../../../domain/skills/types";

export const skillsData: Skill[] = [
  {
    id: nanoid(),
    title: "React",
    icon: React.createElement(FaReact, { className: "text-sky-500 w-24 h-24" }),
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: React.createElement(FaJs, { className: "text-sky-500 w-20 h-20 rounded-3xl" }),
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "TypeScript",
    icon: React.createElement(BiLogoTypescript, { className: "text-sky-500 w-32 h-32" }),
    text: "Comfortable using TypeScript to enhance JavaScript projects with optional static typing for better code maintainability.",
  },
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: React.createElement(FaHtml5, { className: "text-sky-500 w-20 h-20" }),
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Tailwind CSS",
    icon: React.createElement(SiTailwindcss, { className: "text-sky-500 w-32 h-32" }),
    text: "Familiar with Tailwind CSS and its utility-first approach to building modern and responsive user interfaces.",
  },
  {
    id: nanoid(),
    title: "Node.js & Express.js",
    icon: React.createElement(FaNode, { className: "text-sky-500 w-32 h-32" }),
    text: "Capable of using Node.js and Express.js to build simple backend services and RESTful APIs that support front-end applications.",
  },
  {
    id: nanoid(),
    title: "MongoDB",
    icon: React.createElement(SiMongodb, { className: "text-sky-500 w-24 h-24" }),
    text: "Able to work with MongoDB for storing and retrieving data in NoSQL databases for web applications.",
  },
  {
    id: nanoid(),
    title: "Git & GitHub",
    icon: React.createElement(FaGithub, { className: "text-sky-500 w-20 h-20" }),
    text: "Proficient in Git and GitHub, managing version control efficiently for collaboration and project tracking.",
  },
  {
    id: nanoid(),
    title: "RESTful APIs",
    icon: React.createElement(TbApi, { className: "text-sky-500 w-32 h-32" }),
    text: "Capable of working with RESTful APIs to integrate front-end applications with backend services for smooth data exchange.",
  },
];
