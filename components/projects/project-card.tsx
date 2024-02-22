"use client";

import React from "react";
import Image from "next/image";
import type { projectData } from "./project-content";

type ProjectCardProps = projectData;

const ProjectCard = ({
  title,
  description,
  tags,
  imageUrl,
}: ProjectCardProps) => {
  return (
    <div className="group mb-3 sm:mb-8">
      <section className="bg-slate-950 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:min-h-[20rem] group-even:pl-8 hover:bg-slate-900 transition rounded-lg">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem] ">
          <h3 className="text-2xl font-semibold">{title}</h3>

          <p className="mt-2 text-xs leading-relaxed text-gray-700">
            {description}
          </p>

          <ul className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="project-card-image"
          quality={95}
          className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl hidden md:block
                    transition
                    group-hover:scale-[1.04]
                    group-hover:-translate-x-3
                    group-hover:translate-y-3
                    group-hover:-rotate-2

                    group-even:group-hover:translate-x-3
                    group-even:group-hover:-translate-y-3
                    group-even:group-hover:rotate-2

                    group-even:right-[initial]
                    group-even:-left-40"
        />
      </section>
    </div>
  );
};

export default ProjectCard;
