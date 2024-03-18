"use client";

import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import Link from "next/link";
import { motion } from "framer-motion";
import { SproutIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const poppins = Roboto({
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
          "text-lg md:text-xl text-neutral-400 md:max-w-screen-md mb-3 md:mb-6",
          poppins.className
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        👋🏻 Hey, I&apos;m{" "}
        <span className="text-neutral-200 font-semibold">Tanay Vaswani</span> (
        <Link
          href={"https://twitter.com/iTanayVaswani"}
          className="text-blue-500 font-semibold hover:text-blue-500/90"
          target="_blank"
        >
          @iTanayVaswani
        </Link>
        ) a Full Stack Developer from India. Passionate about Software
        Development, Cloud Engineering, Backend Systems & Open-Source Softwares.
      </motion.p>

      <motion.p
        className={cn(
          "text-lg md:text-xl md:max-w-screen-md text-neutral-400",
          poppins.className
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        I&apos;m currently an undergraduate, pursuing Electronics &
        Communication Engineering majors from Maharaja Agrasen Institue of
        Technology, New Delhi, India.
      </motion.p>
    </div>
  );
};

export default HeroSection;
