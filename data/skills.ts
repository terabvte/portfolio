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
  SiDotnet,
  SiGit,
  SiGithub,
  SiVercel,
  SiGithubactions,
  SiDocker,
  SiOpenai,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import {
  LucideIcon,
  Brain,
  Code,
  Cloud,
  GitFork,
  Rocket,
  Database,
  Layers,
  Server,
  Webhook,
  Workflow,
  Activity,
  FlaskConical,
  ScrollText,
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
    name: "Backend Development",
    icon: Brain,
    skills: [
      { name: "C#", icon: TbBrandCSharp, color: "#239120" },
      { name: ".NET", icon: SiDotnet, color: "#512BD4" },
      { name: "ASP.NET Core", icon: Server, color: "#512BD4" },
      { name: "EF Core", icon: Database, color: "#512BD4" },
      { name: "REST APIs", icon: Webhook, color: "#c58af9" },
      { name: "LINQ", icon: Layers, color: "#512BD4" },
      { name: "MediatR", icon: Workflow, color: "#c58af9" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
    ],
  },
  {
    name: "Data",
    icon: Database,
    skills: [
      { name: "SQL Server", icon: Database, color: "#CC2927" },
      { name: "Azure SQL", icon: Cloud, color: "#0078D4" },
    ],
  },
  {
    name: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "Azure", icon: Cloud, color: "#0078D4" },
      { name: "Azure App Service", icon: Server, color: "#0078D4" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "OpenAI API", icon: SiOpenai, color: "#412991" },
      { name: "Application Insights", icon: Activity, color: "#0078D4" },
      { name: "Serilog", icon: ScrollText, color: "#e8701a" },
    ],
  },
  {
    name: "Testing & Quality",
    icon: FlaskConical,
    skills: [
      { name: "xUnit", icon: FlaskConical, color: "#512BD4" },
      { name: "Moq", icon: FlaskConical, color: "#6DB33F" },
      { name: "WebApplicationFactory", icon: FlaskConical, color: "#c58af9" },
    ],
  },
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
    skills: [{ name: "Vercel", icon: SiVercel, color: "#FFFFFF" }],
  },
];
