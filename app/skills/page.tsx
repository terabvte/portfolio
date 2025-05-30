import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { skillsData, SkillCategory, Skill } from "@/data/skills"; // Adjust path if necessary

export const metadata: Metadata = {
  title: "Skills | Marco Fediuc",
  description:
    "A showcase of Marco Fediuc's technical skills in web development, cloud, and more.",
};

const SkillPill: React.FC<{ skill: Skill }> = ({ skill }) => {
  const IconComponent = skill.icon;
  return (
    <div className="flex items-center space-x-2 bg-gray-700/50 hover:bg-gray-600/70 border border-gray-600/80 rounded-lg px-4 py-2.5 transition-all duration-200 group">
      <IconComponent
        size={22}
        style={{ color: skill.color || "currentColor" }} // Use specific color or inherit
        className="opacity-80 group-hover:opacity-100 transition-opacity"
      />
      <span className="text-sm sm:text-base text-gray-200 group-hover:text-white pt-[4.5px]">
        {skill.name}
      </span>
    </div>
  );
};

const SkillsCategoryCard: React.FC<{ category: SkillCategory }> = ({
  category,
}) => {
  const CategoryIcon = category.icon;
  return (
    <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-xl p-6 transition-all duration-300 hover:shadow-2xl hover:bg-gray-800/90">
      <div className="flex items-center mb-5 text-red-600">
        <CategoryIcon size={28} className="mr-3 opacity-90" />
        <h2 className="text-2xl font-semibold text-white">{category.name}</h2>
      </div>
      <div className="flex flex-wrap gap-3">
        {category.skills.map((skill) => (
          <SkillPill key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const SkillsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-tl from-gray-800 via-gray-900 to-black text-white">
      {/* Header Section */}
      <header className="sticky top-0 z-50 bg-gray-900/60 backdrop-blur-lg shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              My Technical Skills
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
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillsData.map((category) => (
            <SkillsCategoryCard key={category.name} category={category} />
          ))}
        </div>
        {skillsData.length === 0 && (
          <div className="flex flex-col items-center justify-center h-[50vh]">
            <p className="text-xl text-gray-400 mb-4">
              Skills information is not available at the moment.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default SkillsPage;
