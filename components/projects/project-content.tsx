export type projectData = {
  title: string;
  description: string;
  tags: string[];
  link: {
    github: string;
    youtube?: string;
    live?: string;
  };
};

export const projectsContent: projectData[] = [
  {
    title: "Contacts Manager",
    description:
      "Developed a backend system for contact management, featuring RESTful APIs and custom token-based authentication for secure access control including the password encryption.",
    tags: [
      "Javascript",
      "Node.js",
      "Express.js",
      "Mongoose",
      "MongoDB",
      "JWT",
      "bCrypt",
      "Docker",
    ],
    link: {
      github: "",
      youtube: "",
      live: "",
    },
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
      "Turborepo",
      "Shadcn UI",
    ],
    link: {
      github: "https://github.com/tanayvaswani/typewriter-playground",
      youtube: "",
      live: "",
    },
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
    link: {
      github: "https://github.com/tanayvaswani/100xdevs-website",
      youtube: "",
      live: "https://100xdevs-tanay.vercel.app",
    },
  },
  {
    title: "CompanionAI",
    description:
      "Create, communicate, replicate your go-to AI companion according to your mood!",
    tags: [
      "Typescript",
      "Next.js",
      "Clerk Auth",
      "Redis",
      "Pincone",
      "Shadcn UI",
      "Cloudinary",
      "TailwindCSS",
      "React Hook Form",
      "OpenAI API",
      "ReplicateAI API",
      "Stripe Payments",
    ],
    link: {
      github: "https://github.com/tanayvaswani/companion-ai",
      youtube: "",
      live: "",
    },
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
    link: {
      github: "https://github.com/tanayvaswani/frello",
      youtube: "",
      live: "",
    },
  },
];

// {
//     title: "",
//     description: "",
//     tags: [""],
//   },
