import { GithubIcon, LinkedinIcon, Mail, Twitter } from "lucide-react";

export const navItems = [
  {
    name: "Home",
    hash: "/",
    target: "",
  },
  // {
  //   name: "Blogs",
  //   hash: "/blogs",
  //   target: "",
  // },
  {
    name: "Projects",
    hash: "/projects",
    target: "",
  },
  {
    name: "Experience",
    hash: "/experience",
    target: "",
  },
  {
    name: "Blogs",
    hash: "/blogs",
    target: "",
  },
  {
    name: <GithubIcon className="h-5 w-5" />,
    hash: "https://github.com/tanayvaswani",
    target: "_blank",
  },
  {
    name: <Mail className="h-5 w-5" />,
    hash: "mailto:vaswani.tanay9@gmail.com",
    target: "_blank",
  },
  {
    name: <Twitter className="h-5 w-5" />,
    hash: "https://twitter.com/iTanayVaswani",
    target: "_blank",
  },
  {
    name: <LinkedinIcon className="h-5 w-5" />,
    hash: "https://linkedin.com/in/tanayvaswani",
    target: "_blank",
  },
] as const;
