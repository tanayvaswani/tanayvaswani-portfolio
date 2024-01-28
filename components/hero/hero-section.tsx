"use client";

import { cn } from "@/lib/utils";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { motion } from "framer-motion";
import { Separator } from "../ui/separator";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const poppins = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

const HeroSection = () => {
  return (
    <div className="flex flex-col px-6 md:max-w-screen-lg md:mx-auto">
      <h1
        className={cn(
          "text-2xl md:text-4xl font-semibold md:max-w-screen-sm mb-6 md:mb-12",
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
          "text-lg text-neutral-400 md:max-w-screen-md mb-3 md:mb-6",
          poppins.className
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        👋🏻 Hey, I&apos;m Tanay Vaswani (
        <span className="text-blue-500 font-medium"> @iTanayVaswani </span>) a
        Full Stack Developer from India. Passionate about Software Development,
        Cloud Engineering, GenAI & LLMs.
      </motion.p>

      <motion.p
        className={cn(
          "text-lg text-neutral-400 md:max-w-screen-md mb-8 md:mb-16",
          poppins.className
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        I&apos;m currently an undergraduate, pursuing Electronics &
        Communication Engineering majors from New Delhi, India.
      </motion.p>

      <Separator className="my-4 bg-blue-500/20 " />
    </div>
  );
};

export default HeroSection;
