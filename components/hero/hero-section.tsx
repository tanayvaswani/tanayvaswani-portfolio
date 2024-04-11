"use client";

import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import Link from "next/link";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const rob = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center h-full md:max-w-screen-xl md:mx-auto px-6 md:px-0">
      <h1
        className={cn(
          "text-3xl md:text-5xl font-semibold md:max-w-screen-md mb-6 md:mb-12",
          headingFont.className
        )}
      >
        <TextGenerateEffect
          delay={0.1}
          textColor={""}
          words="Software Engineering Intern at Stealth Startup, San Francisco Bay Area."
        />
      </h1>

      <motion.p
        className={cn(
          "text-lg md:text-xl text-zinc-400 md:max-w-screen-md mb-3 md:mb-6",
          rob.className
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        👋🏻 Hey, I&apos;m{" "}
        <span className="text-zinc-200 font-medium">Tanay Vaswani</span> (
        <Link
          href={"https://twitter.com/iTanayVaswani"}
          className="text-blue-500 font-medium hover:text-blue-500/90"
          target="_blank"
        >
          @iTanayVaswani
        </Link>
        ) a Software Engineer from India. Passionate about Backend Engineering,
        Infrastructure, Cloud & Open-Source Softwares.
      </motion.p>

      <motion.p
        className={cn(
          "text-lg md:text-xl md:max-w-screen-md text-zinc-400 mb-2 md:mb-4",
          rob.className
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        Currently an undergraduate, pursuing Electronics & Communication
        Engineering majors & Machine Learning minors from Maharaja Agrasen
        Institue of Technology, New Delhi, India.
      </motion.p>

      <motion.p
        className={cn(
          "text-lg md:text-xl md:max-w-screen-md text-zinc-400 mb-2 md:mb-4",
          rob.className
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        Building some stuff everyday, learning by doing!
        <br />
        As of April 2024, I&apos;m working on an awesome Machine Learning
        Platform using Next.js, Typescript, TailwindCSS, NextAuth, FastAPI and
        much more...
      </motion.p>

      <motion.p
        className={cn(
          "text-lg md:text-xl md:max-w-screen-md text-zinc-400",
          rob.className
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        Apart from that, I like spending my free time with building CLI tools
        using GO and some AI SDK stuff.
      </motion.p>
    </div>
  );
};

export default HeroSection;
