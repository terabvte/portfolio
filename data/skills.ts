import { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiC,
  //   SiJava,
  //   SiCsharp,
  SiDotnet,
  SiSelenium,
  SiGit,
  SiGithub,
  SiVercel,
  SiHeroku,
  //   SiAmazonaws,
} from "react-icons/si"; // Main technology icons
// import { VscTerminalCmd } from "react-icons/vsc"; // Generic for C if needed
import { FaJava, FaAws } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { LucideIcon, Brain, Code, Cloud, GitFork, Rocket } from "lucide-react"; // Category icons

export interface Skill {
  name: string;
  icon: IconType | LucideIcon; // Allow both react-icons and lucide-react icons
  color?: string; // Optional: for specific icon coloring if needed beyond text color
}

export interface SkillCategory {
  name: string;
  icon: LucideIcon | IconType;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    name: "Frontend Development",
    icon: Code,
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" }, // Next.js icon is often white/black
    ],
  },
  {
    name: "Backend Development",
    icon: Brain, // Using Brain for backend logic
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "C", icon: SiC, color: "#A8B9CC" }, // Or VscTerminalCmd if SiC is not distinct enough
      { name: "Java", icon: FaJava, color: "#007396" }, // Often a mix of blue/red, using official blue
      { name: "C#", icon: TbBrandCSharp, color: "#239120" },
      { name: ".NET", icon: SiDotnet, color: "#c58af9" },
    ],
  },
  {
    name: "Automation & Testing",
    icon: SiSelenium, // Using Selenium icon for the category as it's the main skill here
    skills: [{ name: "Selenium", icon: SiSelenium, color: "#43B02A" }],
  },
  {
    name: "Version Control",
    icon: GitFork,
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" }, // GitHub icon is often white/black
    ],
  },
  {
    name: "Deployment & Hosting",
    icon: Rocket,
    skills: [
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF" }, // Vercel icon is often white/black
      { name: "Heroku", icon: SiHeroku, color: "#c58af9" },
    ],
  },
  {
    name: "Cloud Platforms",
    icon: Cloud,
    skills: [
      { name: "AWS", icon: FaAws, color: "#FF9900" }, // Amazon Web Services
    ],
  },
];
