export type ExperienceContentType = {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
};

export const experienceContent = [
  {
    title: "Software Engineering Intern",
    company: "Stealth Startup",
    duration: "November 2023 - Present",
    location: "San Francisco, CA (Remote)",
    description: [
      "The planning, design, and execution of website development project to ensure they deliver exceptional user experience. This involves coordinating with team members to prioritise features, optimise performance, and maintain consistency.",
      "Deployed an open-source Content Management System (CMS) to simplify content management tasks for all team members. This decision aims to empower even those without coding backgrounds to contribute effectively to the website's upkeep and growth.",
      "Using a range of libraries and frameworks to enhance different aspects of website functionality, including form handling, data processing, animation effects, scrolling behaviour, and UI design",
      "Integrating webhooks into the website's backend to enable automatic, real-time updates of data from external sources.",
      "Actively participating in fostering an environment where creativity, collaboration, and personal growth are valued. Embracing continuous learning and growth within an exceptional team.",
    ],
  },
];
