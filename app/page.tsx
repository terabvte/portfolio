import React from "react";
import { Github, Briefcase, Code, Mail, Hand } from "lucide-react";

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
  // State for current page/section, defaults to 'home'
  // This would be used to conditionally render different sections
  // For this example, we'll just have the main hero content.
  // const [currentPage, setCurrentPage] = React.useState('home');

  // Placeholder functions for navigation clicks
  // In a real Next.js app, you'd use <Link> from 'next/link' and handle routing
  //   const handleNavClick = (page: string) => {
  //     // setCurrentPage(page);
  //     console.log(`Navigating to ${page}`);
  //     // For external links like GitHub, you might do:
  //     // if (page === 'GitHubProfile') window.open('https_your_github_link_here', '_blank');
  //  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-white bg-gradient-to-tl from-gray-800 via-gray-900 to-black">
      <main className="flex flex-col items-center justify-center flex-grow text-center">
        {/* Hero Section */}
        <h1 className="mb-3 text-4xl font-extrabold sm:text-5xl md:text-7xl">
          Hey{" "}
          <span className="inline-block origin-70 hover:animate-spin">
            👋
          </span>{" "}
          I&apos;m Marco,
        </h1>
        <h1 className="mb-6 text-4xl font-extrabold sm:text-5xl md:text-7xl">
          a{" "}
          <span className="inline-block p-4 pt-2 text-white bg-red-600 rounded-lg">
            developer
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="mb-8 text-lg text-gray-400 sm:text-xl">
          Full-Stack web developer | React, Next.js, Go
        </p>

        {/* GitHub Button */}
        <a
          href="https://github.com/terabvte" // Replace with your actual GitHub profile link
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-6 py-3 mb-16 space-x-2 text-base text-white transition-colors duration-200 bg-gray-800 rounded-lg hover:bg-gray-600 sm:text-lg group"
        >
          <Github className="w-5 h-5 sm:h-6 sm:w-6 group-hover:text-gray-300" />
          <span>Follow me on GitHub</span>
        </a>
      </main>

      {/* Navigation Links - Placed at the bottom as per the design */}
      <nav className="flex flex-wrap items-center justify-center gap-3 pb-8 sm:gap-4">
        <NavLink
          href="/projects"
          icon={<Briefcase size={18} />}
          text="Projects"
        />
        <NavLink
          href="https://github.com/terabvte"
          icon={<Github size={18} />}
          text="GitHub"
        />
        <NavLink href="#skills" icon={<Code size={18} />} text="Skills" />
        <NavLink href="#contact" icon={<Mail size={18} />} text="Contact" />
      </nav>
    </div>
  );
};

export default PortfolioPage;
