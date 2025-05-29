// Define the structure for a project
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl?: string; // Optional: Link to the GitHub repository
  websiteUrl?: string; // Optional: Link to the live website/demo
  tags?: string[]; // Optional: Technologies or categories
}

// Populate with placeholder project data
// export const projectsData: Project[] = Array.from({ length: 30 }, (_, i) => {
//   const projectNumber = i + 1;
//   return {
//     id: `project-${projectNumber}`,
//     title: `Awesome Project ${projectNumber}`,
//     description: `This is a short and engaging description for Project ${projectNumber}. It highlights the key features and the problems it solves. Built with modern technologies to achieve greatness.`,
//     // Using placehold.co for image placeholders
//     // Format: https://placehold.co/{width}x{height}/{background_color_hex}/{text_color_hex}?text={your_text}
//     imageUrl: `https://placehold.co/600x400/374151/E5E7EB?text=Project+${projectNumber}`,
//     // Placeholder GitHub URL - assuming a username 'your-username'
//     githubUrl: `https://github.com/your-username/project-${projectNumber}`,
//     // Make some projects have a website URL, and others not
//     websiteUrl:
//       projectNumber % 3 === 0
//         ? `https://project-${projectNumber}-demo.example.com`
//         : undefined,
//     tags: [
//       "React",
//       "Next.js",
//       projectNumber % 2 === 0 ? "Tailwind CSS" : "TypeScript",
//       projectNumber % 4 === 0 ? "Node.js" : "API",
//     ],
//   };
// });

// You can also add a few more specific examples if you like:
export const projectsData: Project[] = [
  {
    id: "custom-project-1",
    title: "My Portfolio Website",
    description:
      "The very website you are looking at! Built with Next.js and Tailwind CSS.",
    imageUrl: "https://placehold.co/600x400/1F2937/9CA3AF?text=Portfolio+Site",
    githubUrl: "https://github.com/terabvte/my-portfolio", // Example using your GitHub username
    websiteUrl: "https://www.marcofediuc.com", // Example
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Python",
      "HTML",
      "CSS",
    ],
  },
  {
    id: "custom-project-2",
    title: "Task Management App",
    description:
      "A collaborative task management application to boost team productivity.",
    imageUrl: "https://placehold.co/600x400/4B5563/D1D5DB?text=Task+App",
    githubUrl: "https://github.com/terabvte/task-app",
    tags: ["React", "Firebase", "Node.js", "Material UI"],
  },
  // ... then spread the generated ones or add more manually
  // ...Array.from({ length: 28 }, (_, i) => ({ ... }))
];
