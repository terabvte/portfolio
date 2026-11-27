export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  imageUrl?: string;
  githubUrl?: string;
  githubLabel?: string;
  websiteUrl?: string;
  websiteLabel?: string;
  tags: string[];
  tier: "flagship" | "core" | "earlier";
  status?: string;
  statusTone?: "emerald" | "violet" | "sky" | "amber" | "slate";
}

export const featuredProjects: Project[] = [
  {
    id: "autopreventivo",
    title: "AutoPreventivo - Quote Engine",
    subtitle: "Neuro-symbolic production platform @ Edilvos",
    description:
      "Sole developer of a production .NET 10 quote engine that turns free-text Italian renovation requests into itemised quotes across six renovation types. OpenAI parses intent; deterministic C# recipes and a price catalogue compute every total; unmatched lines receive a labelled estimate.",
    githubUrl: "https://github.com/terabvte/quote-engine",
    githubLabel: "Case Study",
    websiteUrl: "https://www.edilvos.it",
    websiteLabel: "Live Product",
    tags: ["C#", ".NET 10", "ASP.NET Core", "EF Core", "Azure", "SQL Server"],
    tier: "flagship",
    status: "Production · Case Study",
    statusTone: "violet",
  },
  {
    id: "edilvos-website",
    title: "Edilvos Website",
    subtitle: "Public storefront, quote form & admin dashboard",
    description:
      "Production Next.js frontend for a construction cooperative (20+ workers), connecting visitors to the AutoPreventivo quote flow and operators to the CreaTivo manual quote builder.",
    imageUrl: "/edilvos.png",
    websiteUrl: "https://www.edilvos.it",
    websiteLabel: "Visit edilvos.it",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    tier: "core",
    status: "Live · Private Source",
    statusTone: "emerald",
  },
  {
    id: "portfolio-website",
    title: "Portfolio - marco.gl",
    subtitle: "Personal engineering site & interactive showcase",
    description:
      "This site: built with Next.js 15 App Router, React 19, TypeScript, Tailwind CSS 4, keyboard command palette, and Resend contact integration.",
    imageUrl: "/portfolio.png",
    githubUrl: "https://github.com/terabvte/portfolio",
    githubLabel: "Source Code",
    websiteUrl: "https://www.marco.gl",
    websiteLabel: "marco.gl",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    tier: "core",
    status: "Open Source",
    statusTone: "sky",
  },
];

export const earlierProjects: Project[] = [
  {
    id: "url-shortener",
    title: "URL Shortener",
    subtitle: "Full-stack ASP.NET Core + PostgreSQL + Dapper",
    description:
      "Full-stack link shortener with an ASP.NET Core Web API, PostgreSQL + Dapper persistence, and a Next.js UI. Note: its Azure App Service backend is currently offline pending maintenance.",
    imageUrl: "/shortener.png",
    githubUrl: "https://github.com/terabvte/portfolio",
    githubLabel: "Source",
    websiteUrl: "/shortener",
    websiteLabel: "Open UI",
    tags: ["ASP.NET Core", "C#", "PostgreSQL", "Dapper", "Next.js"],
    tier: "earlier",
    status: "Backend Offline",
    statusTone: "amber",
  },
  {
    id: "tetrafolio",
    title: "Tetrafolio Website",
    description: "Team project: a collaborative website built with three other developers.",
    imageUrl: "/tetrafolio.png",
    githubUrl: "https://github.com/terabvte/tetrafolio",
    websiteUrl: "https://tetrafolio.vercel.app/",
    tags: ["HTML", "Tailwind CSS", "JavaScript", "Python"],
    tier: "earlier",
    status: "Team Project",
    statusTone: "slate",
  },
  {
    id: "omnifood",
    title: "Omnifood Concept Website",
    description: "Responsive restaurant landing page built with semantic HTML, CSS, and vanilla JavaScript.",
    imageUrl: "/omnifood.png",
    githubUrl: "https://github.com/terabvte/omnifood",
    websiteUrl: "https://omnifood-tera.netlify.app/",
    tags: ["HTML", "CSS", "JavaScript"],
    tier: "earlier",
    status: "Learning",
    statusTone: "slate",
  },
  {
    id: "amazon-pokedex",
    title: "Amazon Pokédex Website",
    description: "Pokédex frontend built during the Amazon SDE bootcamp with Next.js and TypeScript.",
    imageUrl: "/pokedex.png",
    githubUrl: "https://github.com/terabvte/amazon-pokedex",
    websiteUrl: "https://amazon-pokedex.vercel.app",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    tier: "earlier",
    status: "Bootcamp",
    statusTone: "slate",
  },
  {
    id: "password-generator",
    title: "Simple Password Generator",
    description: "Client-side random password generator built with vanilla JavaScript and Tailwind CSS.",
    imageUrl: "/pw_gen.gif",
    githubUrl: "https://github.com/terabvte/web_learn?tab=readme-ov-file#password-generator",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
    tier: "earlier",
    status: "Learning",
    statusTone: "slate",
  },
  {
    id: "metric-imperial-converter",
    title: "Metric / Imperial Converter",
    description: "Two-way metric and imperial unit converter built while learning frontend fundamentals.",
    imageUrl: "/m-to-i_conv.gif",
    githubUrl: "https://github.com/terabvte/web_learn?tab=readme-ov-file#metric--imperial-converter",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
    tier: "earlier",
    status: "Learning",
    statusTone: "slate",
  },
];

export const projectsData: Project[] = [...featuredProjects, ...earlierProjects];
