import { nanoid } from "nanoid";

export const projects = [
  {
    id: nanoid(),
    img: "/ecommerce-img.jpg",
    url: "https://13-comfy-store.netlify.app/",
    github: "https://github.com/DiegoBottegoni/13-comfy-store",
    titleKey: "projects.ecommerce.title",
    textKey: "projects.ecommerce.text",
  },
  {
    id: nanoid(),
    img: "/color-generator.jpg",
    url: "https://009-color-generator.netlify.app/",
    github: "https://github.com/DiegoBottegoni/react-course-projects/tree/main/09-color-generator",
    titleKey: "projects.colorGenerator.title",
    textKey: "projects.colorGenerator.text",
  },
  {
    id: nanoid(),
    img: "/more-projects.jpg",
    url: "https://github.com/DiegoBottegoni/react-course-projects",
    github: "https://github.com/DiegoBottegoni/react-course-projects",
    titleKey: "projects.moreProjects.title",
    textKey: "projects.moreProjects.text",
  },
];

