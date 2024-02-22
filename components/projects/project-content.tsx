import { StaticImageData } from "next/image";
import tanay from "@/public/tanay.jpeg";

export type projectData = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string | StaticImageData;
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
    imageUrl: tanay,
  },
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
    imageUrl: tanay,
  },
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
    imageUrl: tanay,
  },
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
    imageUrl: tanay,
  },
];

// {
//     title: "",
//     description: "",
//     tags: [""],
//     imageUrl: "",
//   },
