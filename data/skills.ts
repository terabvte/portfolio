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
  SiDotnet,
  SiSelenium,
  SiGit,
  SiGithub,
  SiVercel,
  SiHeroku,
  SiPostgresql,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import {
  LucideIcon,
  Brain,
  Code,
  Cloud,
  GitFork,
  Rocket,
  Database,
} from "lucide-react";

export interface Skill {
  name: string;
  icon: IconType | LucideIcon;
  color?: string;
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
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    ],
  },
  {
    name: "Backend Development",
    icon: Brain,
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "C", icon: SiC, color: "#A8B9CC" },
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "C#", icon: TbBrandCSharp, color: "#239120" },
      { name: ".NET", icon: SiDotnet, color: "#c58af9" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Dapper", icon: Database, color: "#00AFF0" },
    ],
  },
  {
    name: "Automation & Testing",
    icon: SiSelenium,
    skills: [{ name: "Selenium", icon: SiSelenium, color: "#43B02A" }],
  },
  {
    name: "Version Control",
    icon: GitFork,
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
    ],
  },
  {
    name: "Deployment & Hosting",
    icon: Rocket,
    skills: [
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
      { name: "Heroku", icon: SiHeroku, color: "#c58af9" },
    ],
  },
  {
    name: "Cloud Platforms",
    icon: Cloud,
    skills: [{ name: "AWS", icon: FaAws, color: "#FF9900" }],
  },
];
