import React from "react";
import {
  Github,
  Briefcase,
  Code,
  Mail,
  Linkedin,
  FileDown,
  BookOpen,
  ArrowRight,
} from "lucide-react";

interface NavLinkProps {
  href: string;
  icon?: React.ReactNode;
  text: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, icon, text }) => (
  <a
    href={href}
    className="flex items-center px-4 py-2 space-x-2 text-sm text-gray-300 transition-colors duration-200 bg-gray-800 rounded-lg hover:bg-gray-700 hover:text-white sm:text-base"
  >
    {icon}
    <span>{text}</span>
  </a>
);

const PortfolioPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen lg:p-4 text-white bg-gradient-to-tl from-gray-800 via-gray-900 to-black">
      <main className="flex flex-col items-center justify-center flex-grow px-4 text-center">
        {/* Hero Section */}
        <h1 className="mb-3 text-3xl font-extrabold sm:text-5xl md:text-6xl">
          Hey{" "}
          <span className="inline-block hover:animate-pulse cursor-default">
            👋
          </span>{" "}
          I&apos;m Marco,
        </h1>
        <h1 className="mb-4 text-3xl font-extrabold sm:text-5xl md:text-6xl">
          a{" "}
          <span className="inline-block p-2 sm:p-4 sm:pt-2 text-white bg-red-600 rounded-lg">
            .NET backend developer.
          </span>
        </h1>

        <p className="mb-1 text-lg text-gray-300 sm:text-xl">Marco Fediuc</p>
        <p className="mb-8 text-sm text-gray-500 sm:text-base">
          Software Developer @ Edilvos · ASP.NET Core · Azure
        </p>

        <div className="flex flex-col items-center gap-3 mb-8 sm:flex-row">
          <a
            href="https://linkedin.com/in/marco-fediuc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 space-x-2 text-base text-white transition-colors duration-200 bg-gray-800 rounded-lg hover:bg-gray-600 sm:text-lg group"
          >
            <Linkedin className="w-5 h-5 sm:h-5 sm:w-5 group-hover:text-gray-300" />
            <span className="pt-[2.5px]">LinkedIn</span>
          </a>
          <a
            href="/cv.pdf"
            download="Marco_Fediuc_CV.pdf"
            className="flex items-center px-6 py-3 space-x-2 text-base text-white transition-colors duration-200 bg-red-600 rounded-lg hover:bg-red-700 sm:text-lg group"
          >
            <FileDown className="w-5 h-5 sm:h-5 sm:w-5" />
            <span className="pt-[2.5px]">Download CV</span>
          </a>
        </div>

        <a
          href="https://github.com/terabvte/quote-engine"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 mb-16 text-sm text-gray-400 transition-colors duration-200 hover:text-white sm:text-base group"
        >
          <BookOpen size={18} />
          <span>Read the AutoPreventivo case study</span>
          <ArrowRight
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </a>
      </main>

      <nav className="flex flex-wrap items-center justify-center gap-3 px-4 pb-8 sm:gap-4">
        <NavLink
          href="/projects"
          icon={<Briefcase size={18} />}
          text="Projects"
        />
        <NavLink href="/skills" icon={<Code size={18} />} text="Skills" />
        <NavLink
          href="https://github.com/terabvte"
          icon={<Github size={18} />}
          text="GitHub"
        />
        <NavLink href="/contact" icon={<Mail size={18} />} text="Contact" />
      </nav>
    </div>
  );
};

export default PortfolioPage;
