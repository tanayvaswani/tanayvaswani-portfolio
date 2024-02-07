"use client";

import { cn } from "@/lib/utils";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { motion } from "framer-motion";
import tanay from "@/public/tanay.jpeg";
import Link from "next/link";
import Image from "next/image";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const poppins = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

const HeroSection = () => {
  return (
    <div className="grid  md:grid-cols-5 items-center md:max-w-screen-xl md:mx-auto px-4">
      <div className="w-full flex flex-col col-span-3 h-full">
        <motion.div
          className="w-full flex items-center justify-center col-span-2 md:hidden mb-8 -mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          <Image
            src={tanay}
            alt={"tanay"}
            className="rounded-xl"
            width={280}
            height={280}
          />
        </motion.div>

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
          👋🏻 Hey, I&apos;m{" "}
          <span className="text-neutral-200 font-medium">Tanay Vaswani</span> (
          <Link
            href={"https://twitter.com/iTanayVaswani"}
            className="text-blue-500 font-medium hover:text-blue-500/90"
            target="_blank"
          >
            @iTanayVaswani
          </Link>
          ) a Full Stack Developer from India. Passionate about Software
          Development, Cloud Engineering, GenAI, LLMs & Open-Source Softwares.
        </motion.p>

        <motion.p
          className={cn(
            "text-lg text-neutral-400 md:max-w-screen-md",
            poppins.className
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          I&apos;m currently an undergraduate, pursuing Electronics &
          Communication Engineering majors from New Delhi, India.
        </motion.p>
      </div>

      <motion.div
        className="w-full md:flex items-center justify-center col-span-2 hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <Image
          src={tanay}
          alt={"tanay"}
          className="rounded-xl"
          width={400}
          height={400}
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;
