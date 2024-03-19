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
      "The planning, design, and execution of website development projects to ensure they deliver exceptional user experiences. This involves coordinating with team members to prioritize features, optimize performance, and maintain consistency across the site.",
      "Taking the initiative to choose and deploy an open-source Content Management System (CMS) to simplify content management tasks for all team members. This decision aims to empower even those without coding backgrounds to contribute effectively to the website's upkeep and growth.",
      "Integrating webhooks into the website's backend to enable automatic, real-time updates of data from external sources. This feature ensures that information displayed on the website remains current and accurate without manual intervention, enhancing user engagement and trust.",
      "Actively participating in fostering an environment where creativity, collaboration, and personal growth are valued. Embracing continuous learning and growth within an exceptional team.",
    ],
  },
];
