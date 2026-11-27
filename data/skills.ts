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
  SiHeroku,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import {
  LucideIcon,
  Code2,
  Cloud,
  Database,
  Layers,
  Server,
  Webhook,
  Workflow,
  Activity,
  FlaskConical,
  ScrollText,
  HardDrive,
  Cpu,
} from "lucide-react";

export interface Skill {
  name: string;
  icon: IconType | LucideIcon;
  color?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  accent: "violet" | "teal" | "blue" | "slate";
  icon: LucideIcon | IconType;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    id: "backend-testing",
    name: "Backend & Testing",
    description: "Core .NET APIs, deterministic domain logic, and automated in-process test suites.",
    accent: "violet",
    icon: Cpu,
    skills: [
      { name: "C#", icon: TbBrandCSharp, color: "#a78bfa" },
      { name: ".NET 10", icon: SiDotnet, color: "#8b5cf6" },
      { name: "ASP.NET Core", icon: Server, color: "#8b5cf6" },
      { name: "EF Core 10", icon: Database, color: "#8b5cf6" },
      { name: "MediatR", icon: Workflow, color: "#c084fc" },
      { name: "Dapper", icon: Database, color: "#38bdf8" },
      { name: "REST APIs", icon: Webhook, color: "#c084fc" },
      { name: "LINQ", icon: Layers, color: "#a78bfa" },
      { name: "xUnit", icon: FlaskConical, color: "#a78bfa" },
      { name: "Moq", icon: FlaskConical, color: "#4ade80" },
      { name: "WebApplicationFactory", icon: FlaskConical, color: "#c084fc" },
      { name: "Python", icon: SiPython, color: "#60a5fa" },
    ],
  },
  {
    id: "data",
    name: "Data",
    description: "Relational schema design, migrations, and production persistence across SQL engines.",
    accent: "teal",
    icon: Database,
    skills: [
      { name: "SQL Server", icon: Database, color: "#f87171" },
      { name: "Azure SQL", icon: Cloud, color: "#38bdf8" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#60a5fa" },
    ],
  },
  {
    id: "cloud-ops",
    name: "Cloud, Ops & Observability",
    description: "Azure hosting, CI/CD gates, structured telemetry, and LLM API integration.",
    accent: "blue",
    icon: Cloud,
    skills: [
      { name: "Azure", icon: Cloud, color: "#38bdf8" },
      { name: "Azure App Service", icon: Server, color: "#38bdf8" },
      { name: "Blob Storage", icon: HardDrive, color: "#38bdf8" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#60a5fa" },
      { name: "Docker Compose", icon: SiDocker, color: "#38bdf8" },
      { name: "OpenAI API", icon: SiOpenai, color: "#cbd5e1" },
      { name: "Serilog", icon: ScrollText, color: "#fb923c" },
      { name: "Application Insights", icon: Activity, color: "#38bdf8" },
      { name: "Vercel", icon: SiVercel, color: "#f8fafc" },
      { name: "Heroku", icon: SiHeroku, color: "#a78bfa" },
    ],
  },
  {
    id: "frontend-tooling",
    name: "Frontend & Tooling",
    description: "Modern React/Next.js product interfaces paired with clean Git workflows.",
    accent: "slate",
    icon: Code2,
    skills: [
      { name: "TypeScript", icon: SiTypescript, color: "#60a5fa" },
      { name: "JavaScript", icon: SiJavascript, color: "#facc15" },
      { name: "Next.js", icon: SiNextdotjs, color: "#f8fafc" },
      { name: "React", icon: SiReact, color: "#38bdf8" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#2dd4bf" },
      { name: "HTML5", icon: SiHtml5, color: "#fb923c" },
      { name: "CSS3", icon: SiCss3, color: "#38bdf8" },
      { name: "Git", icon: SiGit, color: "#f97316" },
      { name: "GitHub", icon: SiGithub, color: "#f8fafc" },
    ],
  },
];
