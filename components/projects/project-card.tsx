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
    <div className="group mb-3 sm:mb-8 px-4">
      <section className="bg-gray-100 max-w-[50rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:min-h-[20rem] hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pt-10 sm:max-w-[50%] flex flex-col h-full">
          <h3 className="text-2xl font-semibold">{title}</h3>

          <p className="mt-2 mb-2 leading-6 text-gray-700 dark:text-white/70">
            {description}
          </p>

          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
                    transition
                    group-hover:scale-[1.04]
                    group-hover:-translate-x-3
                    group-hover:translate-y-3
                    group-hover:-rotate-2"
        />
      </section>
    </div>
  );
};

export default ProjectCard;
