"use client";

import React from "react";
import {
  ExternalLink,
  GanttChartIcon,
  GithubIcon,
  YoutubeIcon,
} from "lucide-react";
import Link from "next/link";

import type { projectData } from "./project-content";

type ProjectCardProps = projectData;

const ProjectCard = ({ title, description, tags, link }: ProjectCardProps) => {
  return (
    <div className="md:max-w-screen-md md:mx-auto w-full py-12 px-6 border-b">
      <section className="w-full flex flex-col items-start justify-center">
        <div className="flex flex-col items-start justify-center">
          <h3 className="text-xl md:text-2xl font-semibold text-zinc-300 flex items-center justify-between w-full">
            <div className="flex items-center">
              <GanttChartIcon className="mr-2" /> {title}
            </div>

            <div className="flex items-center gap-4 ml-4">
              <Link
                href={link.github}
                className="text-emerald-600 hover:text-emerald-700 transition-all"
              >
                <GithubIcon className="h-5 w-5" />
              </Link>
              {link.youtube && (
                <Link
                  href={link.youtube}
                  className="text-red-600 hover:text-red-700 transition-all"
                >
                  <YoutubeIcon className="h-5 w-5" />
                </Link>
              )}
              {link.live && (
                <Link
                  href={link.live}
                  className="text-blue-500 hover:text-blue-700 transition-all"
                >
                  <ExternalLink className="h-5 w-5" />
                </Link>
              )}
            </div>
          </h3>

          <p className="my-2 text-zinc-400 text-base md:text-lg px-3">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap items-start justify-start gap-2 text-xs md:text-sm pt-4 px-2">
          {tags.map((tag, index) => (
            <div
              className="text-blue-300 px-2 md:px-4 py-1 rounded-full shadow-sm border"
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
