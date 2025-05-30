import React from "react";
import Link from "next/link"; // For client-side navigation
import { ArrowLeft } from "lucide-react"; // Icon for the back button
import type { Metadata } from "next"; // For setting page metadata

import { projectsData } from "@/data/projects"; // Import your project data
import ProjectCard from "@/components/ProjectCard"; // Import the ProjectCard component

// Set metadata for this page (title and description for SEO and browser tab)
export const metadata: Metadata = {
  title: "Projects | Marco Fediuc",
  description:
    "Explore a collection of web development projects by Marco Fediuc, showcasing skills in React, Next.js, Go, and more.",
};

const ProjectsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen text-white bg-gradient-to-tl from-gray-800 via-gray-900 to-black">
      {/* Header Section */}
      <header className="sticky top-0 z-50 shadow-md bg-gray-900/50 backdrop-blur-md">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <h1 className="text-2xl font-extrabold text-white sm:text-3xl">
              My Projects
            </h1>
            <Link
              href="/"
              className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg transition-colors duration-200 text-xs sm:text-sm font-medium"
              aria-label="Back to Home page"
            >
              <ArrowLeft size={18} />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="container px-4 py-8 mx-auto sm:px-6 lg:px-8 sm:py-12">
        {projectsData.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 sm:gap-8">
            {/* Map through the projectsData and render a ProjectCard for each project */}
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          // Display a message if there are no projects to show
          <div className="flex flex-col items-center justify-center h-[50vh]">
            <p className="mb-4 text-xl text-gray-400">
              No projects to display at the moment.
            </p>
            <p className="text-gray-500">
              Please check back later or contact me for more information.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProjectsPage;
