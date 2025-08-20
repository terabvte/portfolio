import React, { JSX } from "react";
import Image from "next/image";
import {
  Github,
  ExternalLink,
  Tag as DefaultTagIcon,
  Database,
  Layers,
} from "lucide-react";
import { Project } from "@/data/projects";

import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiJavascript,
  SiGo,
  SiHtml5,
  SiCss3,
  SiFirebase,
  SiStripe,
  SiPython,
  SiRust,
  SiDocker,
  SiGit,
  SiDotnet,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { VscJson } from "react-icons/vsc";

interface TagStyle {
  icon: JSX.Element;
  bgColorClass: string;
  textColorClass: string;
  borderColorClass: string;
}

const tagStyles: Record<string, TagStyle> = {
  React: {
    icon: <SiReact size={14} />,
    bgColorClass: "bg-sky-500/20",
    textColorClass: "text-sky-300",
    borderColorClass: "border-sky-500/30",
  },
  "Next.js": {
    icon: <SiNextdotjs size={14} />,
    bgColorClass: "bg-neutral-300/20",
    textColorClass: "text-neutral-200",
    borderColorClass: "border-neutral-300/30",
  },
  "Tailwind CSS": {
    icon: <SiTailwindcss size={14} />,
    bgColorClass: "bg-teal-400/20",
    textColorClass: "text-teal-300",
    borderColorClass: "border-teal-400/30",
  },
  JavaScript: {
    icon: <SiJavascript size={14} />,
    bgColorClass: "bg-yellow-400/20",
    textColorClass: "text-yellow-300",
    borderColorClass: "border-yellow-400/30",
  },
  TypeScript: {
    icon: <SiTypescript size={14} />,
    bgColorClass: "bg-blue-500/20",
    textColorClass: "text-blue-300",
    borderColorClass: "border-blue-500/30",
  },
  HTML: {
    icon: <SiHtml5 size={14} />,
    bgColorClass: "bg-orange-600/20",
    textColorClass: "text-orange-400",
    borderColorClass: "border-orange-600/30",
  },
  CSS: {
    icon: <SiCss3 size={14} />,
    bgColorClass: "bg-blue-600/20",
    textColorClass: "text-blue-400",
    borderColorClass: "border-blue-600/30",
  },
  "Node.js": {
    icon: <SiNodedotjs size={14} />,
    bgColorClass: "bg-green-500/20",
    textColorClass: "text-green-300",
    borderColorClass: "border-green-500/30",
  },
  Go: {
    icon: <SiGo size={14} />,
    bgColorClass: "bg-cyan-400/20",
    textColorClass: "text-cyan-300",
    borderColorClass: "border-cyan-400/30",
  },
  Python: {
    icon: <SiPython size={14} />,
    bgColorClass: "bg-yellow-600/20",
    textColorClass: "text-yellow-400",
    borderColorClass: "border-yellow-600/30",
  },
  Rust: {
    icon: <SiRust size={14} />,
    bgColorClass: "bg-orange-700/20",
    textColorClass: "text-orange-400",
    borderColorClass: "border-orange-700/30",
  },
  Firebase: {
    icon: <SiFirebase size={14} />,
    bgColorClass: "bg-amber-500/20",
    textColorClass: "text-amber-300",
    borderColorClass: "border-amber-500/30",
  },
  Stripe: {
    icon: <SiStripe size={14} />,
    bgColorClass: "bg-indigo-500/20",
    textColorClass: "text-indigo-300",
    borderColorClass: "border-indigo-500/30",
  },
  API: {
    icon: <VscJson size={14} />,
    bgColorClass: "bg-slate-500/20",
    textColorClass: "text-slate-300",
    borderColorClass: "border-slate-500/30",
  },
  Docker: {
    icon: <SiDocker size={14} />,
    bgColorClass: "bg-sky-600/20",
    textColorClass: "text-sky-400",
    borderColorClass: "border-sky-600/30",
  },
  Git: {
    icon: <SiGit size={14} />,
    bgColorClass: "bg-orange-600/20",
    textColorClass: "text-orange-400",
    borderColorClass: "border-orange-600/30",
  },
  "ASP.NET Core": {
    icon: <SiDotnet size={14} />,
    bgColorClass: "bg-purple-500/20",
    textColorClass: "text-purple-300",
    borderColorClass: "border-purple-500/30",
  },
  "C#": {
    icon: <TbBrandCSharp size={14} />,
    bgColorClass: "bg-green-600/20",
    textColorClass: "text-green-400",
    borderColorClass: "border-green-600/30",
  },
  PostgreSQL: {
    icon: <SiPostgresql size={14} />,
    bgColorClass: "bg-sky-700/20",
    textColorClass: "text-sky-400",
    borderColorClass: "border-sky-700/30",
  },
  Dapper: {
    icon: <Database size={14} />,
    bgColorClass: "bg-slate-500/20",
    textColorClass: "text-slate-300",
    borderColorClass: "border-slate-500/30",
  },
  "Full-Stack": {
    icon: <Layers size={14} />,
    bgColorClass: "bg-rose-500/20",
    textColorClass: "text-rose-300",
    borderColorClass: "border-rose-500/30",
  },
};

const defaultTagStyle: TagStyle = {
  icon: <DefaultTagIcon size={12} className="mr-1" />,
  bgColorClass: "bg-slate-600/30",
  textColorClass: "text-slate-300",
  borderColorClass: "border-slate-600/50",
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="flex flex-col overflow-hidden transition-all duration-300 ease-in-out bg-gray-800 shadow-xl group rounded-xl hover:shadow-2xl">
      <div className="relative w-full h-48 overflow-hidden sm:h-52 md:h-56">
        <Image
          src={project.imageUrl}
          alt={`Screenshot of ${project.title}`}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
      </div>

      <div className="flex flex-col flex-grow p-5 sm:p-6">
        <h3
          className="mb-2 text-xl font-semibold text-white truncate sm:text-2xl"
          title={project.title}
        >
          {project.title}
        </h3>
        <p className="flex-grow mb-4 text-sm text-gray-400">
          {project.description}
        </p>

        <div className="min-h-[3.5rem] mb-4 2xl:mb-0 flex flex-wrap gap-2 items-start">
          {project.tags &&
            project.tags.slice(0, 5).map((tag) => {
              const style = tagStyles[tag] || defaultTagStyle;
              return (
                <span
                  key={tag}
                  className={`inline-flex items-center space-x-1.5 rounded-full px-3 py-1 text-xs font-medium border ${style.bgColorClass} ${style.textColorClass} ${style.borderColorClass}`}
                  title={tag}
                >
                  {React.cloneElement(style.icon, {
                    className: "fill-current",
                  })}
                  <span className="pt-[1.5px]">{tag}</span>
                </span>
              );
            })}
        </div>

        <div className="flex flex-col mt-auto space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center space-x-2 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white px-4 py-2.5 rounded-lg transition-colors duration-200 text-sm font-medium"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
          )}
          {project.websiteUrl && (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-lg transition-colors duration-200 text-sm font-medium"
              aria-label={`Visit the live website for ${project.title}`}
            >
              <ExternalLink size={18} />
              <span>Website</span>
            </a>
          )}
        </div>
        {!project.githubUrl && !project.websiteUrl && (
          <div className="mt-auto text-center text-xs text-gray-500 py-2.5">
            No links available for this project.
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
