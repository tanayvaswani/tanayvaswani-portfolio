"use client";

import React from "react";
import type { projectData } from "./project-content";

type ProjectCardProps = projectData;

const ProjectCard = ({ title, description, tags }: ProjectCardProps) => {
  return (
    <div className="md:max-w-screen-md md:mx-auto w-full py-12 px-6 border-b">
      <section className="w-full flex flex-col items-start justify-center">
        <div className="flex flex-col items-start justify-center">
          <h3 className="text-xl md:text-2xl font-semibold text-neutral-300">
            {title}
          </h3>

          <p className="my-2 text-neutral-400 text-sm md:text-lg">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap items-start justify-start gap-2 text-xs md:text-sm">
          {tags.map((tag, index) => (
            <div
              className="bg-neutral-300/60 text-neutral-800 px-2 py-1 rounded-full shadow-md"
              key={index}
            >
              {tag}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectCard;
