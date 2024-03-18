import localFont from "next/font/local";

import { cn } from "@/lib/utils";
import { GanttChart } from "lucide-react";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const ExperienceSection = () => {
  return (
    <div className="my-20 md:max-w-screen-lg md:mx-auto px-6 w-full">
      <div className="flex items-start justify-between w-full">
        <div className="flex flex-col items-start justify-between w-full">
          <div className={cn("flex flex-col", headingFont.className)}>
            <h1 className="flex items-center text-xl md:text-2xl text-neutral-300">
              <GanttChart className="mr-2" /> Software Engineering Intern,
              Stealth Startup
            </h1>
          </div>

          <div
            className={cn(
              "flex items-center justify-between w-full md:px-6 px-0",
              headingFont.className
            )}
          >
            <p className="text-neutral-400 italic text-base md:text-lg">
              November, 2023 - Present
            </p>

            <p className="text-neutral-400 italic text-base md:text-lg">
              San Francisco, CA (Remote)
            </p>
          </div>
        </div>
      </div>

      <div>
        <p>Description</p>
      </div>
    </div>
  );
};

export default ExperienceSection;
