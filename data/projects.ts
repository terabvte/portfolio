export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  githubUrl?: string;
  websiteUrl?: string;
  tags?: string[];
}

export const projectsData: Project[] = [
  {
    id: "autopreventivo",
    title: "AutoPreventivo — Quote Engine",
    description:
      "Sanitized .NET case study of a production quote platform: the model parses intent, C# prices the work, PDFs are stored in Azure.",
    githubUrl: "https://github.com/terabvte/quote-engine",
    websiteUrl: "https://www.edilvos.it",
    tags: ["C#", "ASP.NET Core", "Azure", "SQL Server", "Full-Stack"],
  },
  {
    id: "project-1",
    title: "My Portfolio Website",
    description: "The site you are reading, built with Next.js and Tailwind CSS.",
    imageUrl: "/portfolio.png",
    githubUrl: "https://github.com/terabvte/portfolio",
    websiteUrl: "https://marco.gl",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  },
  {
    id: "project-2",
    title: "Edilvos Website",
    description:
      "Company website for a construction cooperative, including the public quote request flow.",
    imageUrl: "/edilvos.png",
    websiteUrl: "https://edilvos.it",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  },
  {
    id: "project-3",
    title: "URL Shortener",
    description:
      "Full-stack URL shortener with an ASP.NET Core backend and a Next.js frontend.",
    imageUrl: "/shortener.png",
    githubUrl: "https://github.com/terabvte/portfolio",
    websiteUrl: "/shortener",
    tags: ["ASP.NET Core", "C#", "Next.js", "PostgreSQL"],
  },
  {
    id: "project-4",
    title: "Tetrafolio Website",
    description: "Team project: a website built with three other developers.",
    imageUrl: "/tetrafolio.png",
    githubUrl: "https://github.com/terabvte/tetrafolio",
    websiteUrl: "https://tetrafolio.vercel.app/",
    tags: ["HTML", "Tailwind CSS", "JavaScript", "Python"],
  },
  {
    id: "project-5",
    title: "Omnifood Concept Website",
    description:
      "Static restaurant landing page built with HTML, CSS and JavaScript.",
    imageUrl: "/omnifood.png",
    githubUrl: "https://github.com/terabvte/omnifood",
    websiteUrl: "https://omnifood-tera.netlify.app/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "project-6",
    title: "Amazon Pokedex Website",
    description: "Pokédex front end built during the Amazon SDE bootcamp.",
    imageUrl: "/pokedex.png",
    githubUrl: "https://github.com/terabvte/amazon-pokedex",
    websiteUrl: "https://amazon-pokedex.vercel.app",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  },
  {
    id: "project-7",
    title: "Simple Password Generator",
    description: "Password generator built with vanilla JavaScript.",
    imageUrl: "/pw_gen.gif",
    githubUrl:
      "https://github.com/terabvte/web_learn?tab=readme-ov-file#password-generator",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
  },
  {
    id: "project-8",
    title: "Metric / Imperial Converter",
    description: "A two-way metric / imperial unit converter.",
    imageUrl: "/m-to-i_conv.gif",
    githubUrl:
      "https://github.com/terabvte/web_learn?tab=readme-ov-file#metric--imperial-converter",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
  },
];
