// Define the structure for a project
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl?: string; // Optional: Link to the GitHub repository
  websiteUrl?: string; // Optional: Link to the live website/demo
  tags?: string[]; // Optional: Technologies or categories
}

export const projectsData: Project[] = [
  {
    id: "project-1",
    title: "My Portfolio Website",
    description: "The very website you are looking at!",
    imageUrl: "/portfolio.png",
    githubUrl: "https://github.com/terabvte/portfolio",
    websiteUrl: "https://marco.gl", // Example
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  },
  {
    id: "project-2",
    title: "Edilvos Website",
    description: "Company website for Edilvos.",
    imageUrl: "/edilvos.png",
    websiteUrl: "https://edilvos.it",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  },
  {
    id: "project-3",
    title: "Tetrafolio Website",
    description: "University project made with 3 of my friends.",
    imageUrl: "/tetrafolio.png",
    githubUrl: "https://github.com/terabvte/tetrafolio",
    websiteUrl: "https://tetrafolio.vercel.app/",
    tags: ["HTML", "Tailwind CSS", "JavaScript", "Python"],
  },
  {
    id: "project-4",
    title: "Omnifood Concept Website",
    description: "A static website created with HTML and CSS.",
    imageUrl: "/omnifood.png",
    githubUrl: "https://github.com/terabvte/omnifood",
    websiteUrl: "https://omnifood-tera.netlify.app/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "project-5",
    title: "Amazon Pokedex Website",
    description: "Capstone project for the SDE Amazon bootcamp.",
    imageUrl: "/pokedex.png",
    githubUrl: "https://github.com/terabvte/amazon-pokedex",
    websiteUrl: "https://amazon-pokedex.vercel.app",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  },
  {
    id: "project-6",
    title: "Simple Password Generator",
    description: "Simple password generator that utilizes simple Javascript.",
    imageUrl: "/pw_gen.gif",
    githubUrl:
      "https://github.com/terabvte/web_learn?tab=readme-ov-file#password-generator",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
  },
  {
    id: "project-7",
    title: "Metric / Imperial Converter",
    description: "A two-way metric / imperial unit converter.",
    imageUrl: "/m-to-i_conv.gif",
    githubUrl:
      "https://github.com/terabvte/web_learn?tab=readme-ov-file#password-generator",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
  },
];
