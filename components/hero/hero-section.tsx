import { cn } from "@/lib/utils";
import { Poppins, Roboto } from "next/font/google";
import localFont from "next/font/local";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const poppins = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

const HeroSection = () => {
  return (
    <div className="flex flex-col mx-4 md:max-w-screen-lg md:mx-auto">
      <h1
        className={cn(
          "text-2xl md:text-4xl font-semibold md:max-w-screen-sm mb-6 md:mb-12",
          headingFont.className
        )}
      >
        Software Engineering Intern at Stealth Startup, San Francisco Bay Area.
      </h1>

      <p
        className={cn(
          "text-lg text-neutral-400 md:max-w-screen-md",
          poppins.className
        )}
      >
        👋🏻 Hey, I&apos;m Tanay Vaswani (
        <span className="text-blue-500 font-medium"> @iTanayVaswani </span>) a
        Full Stack Developer from New Delhi, India. Passionate about Software
        Development, Cloud Engineering, GenAI & LLMs.
      </p>
    </div>
  );
};

export default HeroSection;
