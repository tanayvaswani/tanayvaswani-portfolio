import localFont from "next/font/local";
import { Roboto } from "next/font/google";

import { cn } from "@/lib/utils";
import { GanttChart } from "lucide-react";
import { ExperienceContentType } from "./experience-content";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const rob = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

const ExperienceSection = ({
  title,
  company,
  duration,
  location,
  description,
}: ExperienceContentType) => {
  return (
    <div className="my-20 md:max-w-screen-lg md:mx-auto px-6 w-full">
      <div className="flex flex-col items-start justify-between w-full">
        <div className={cn("flex flex-col", headingFont.className)}>
          <h1 className="flex items-center text-xl md:text-2xl text-zinc-300">
            <GanttChart className="mr-1 hidden md:block" /> {title}, {company}
          </h1>
        </div>

        <div
          className={cn(
            "flex flex-col md:flex-row items-start md:items-center justify-between w-full md:px-8 px-0 py-1",
            headingFont.className
          )}
        >
          <p className="text-zinc-400 italic text-base md:text-lg">
            {duration}
          </p>

          <p className="text-zinc-400 italic text-base md:text-lg">
            {location}
          </p>
        </div>
      </div>

      <div className="md:px-8 px-0">
        <ul
          className={cn(
            "flex flex-col items-start justify-center py-4 px-0 md:px-4 text-zinc-400 text-base md:text-lg md:list-disc",
            rob.className
          )}
        >
          {description?.map((desc, idx) => (
            <li key={idx} className="py-2">
              {desc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceSection;
