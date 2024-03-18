export type projectData = {
  title: string;
  description: string;
  tags: string[];
};

export const projectsContent: projectData[] = [
  {
    title: "Contacts Manager",
    description:
      "Developed a backend system for contact management, featuring RESTful APIs and custom token-based authentication for secure access control including the password hashing through bCrypt. Utilizing Node.js and Express.js, it facilitates operations on contact records, while Mongoose ORM streamlines interaction with MongoDB. Docker containerization ensures portability and scalability.",
    tags: [
      "Javascript",
      "Node.js",
      "Express.js",
      "Mongoose",
      "MongoDB",
      "JWT",
      "bCrypt",
    ],
  },
  {
    title: "Typewriter Playground",
    description:
      "A real-time typwriter speed test app for competing with your friends online and compare the typing speed.",
    tags: [
      "Typescript",
      "Node.js",
      "Next.js",
      "Prisma",
      "Socket.IO",
      "TailwindCSS",
      "Turborepo(Monorepo)",
      "Shadcn UI",
    ],
  },
  {
    title: "100xdevs Marketing Website",
    description:
      "The 100xdevs EdTech Marketing Website, built with Next.js and powered by TypeScript, showcases the platform’s educational offerings with a sleek and responsive design.",
    tags: [
      "Typescript",
      "Next.js",
      "TailwindCSS",
      "Shadcn UI",
      "Framer Motion",
    ],
  },
  {
    title: "Frello",
    description:
      "Crafted Task Manager Application that delivers a dynamic platform for streamlined task management. Combining the power of organisation team-up, it presents users with an elegant and intuitive interface, facilitating effortless task handling.",
    tags: [
      "Typescript",
      "Node.js",
      "Next.js",
      "Prisma",
      "MySQL",
      "ClerkAuth",
      "TailwindCSS",
      "Shadcn UI",
    ],
  },
];

// {
//     title: "",
//     description: "",
//     tags: [""],
//   },
