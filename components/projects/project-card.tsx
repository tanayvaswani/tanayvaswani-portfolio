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
    // <div className="group mb-3 sm:mb-8">
    //   <section className="bg-neutral-200 max-w-[48rem] overflow-hidden sm:pr-8 relative sm:min-h-[20rem] group-even:pl-8 hover:bg-neutral-100 transition rounded-lg">
    //     <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem] ">
    //       <h3 className="text-2xl font-semibold text-neutral-800">{title}</h3>

    //       <p className="mt-2 mb-2 text-sm leading-relaxed text-gray-700">
    //         {description}
    //       </p>

    //       <ul className="flex flex-wrap gap-2 mt-auto">
    //         {tags.map((tag, index) => (
    //           <li
    //             className="bg-black/[0.7] px-3 py-1 text-[0.6rem] uppercase tracking-wider text-neutral-200 rounded-full"
    //             key={index}
    //           >
    //             {tag}
    //           </li>
    //         ))}
    //       </ul>
    //     </div>

    //     <Image
    //       src={imageUrl}
    //       alt="project-card-image"
    //       quality={95}
    //       className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl hidden md:block
    //                 transition
    //                 group-hover:scale-[1.04]
    //                 group-hover:-translate-x-3
    //                 group-hover:translate-y-3
    //                 group-hover:-rotate-2

    //                 group-even:group-hover:translate-x-3
    //                 group-even:group-hover:-translate-y-3
    //                 group-even:group-hover:rotate-2

    //                 group-even:right-[initial]
    //                 group-even:-left-40"
    //     />
    //   </section>
    // </div>

    <div className="md:max-w-screen-lg md:mx-auto md:px-0 px-6 w-full my-6">
      <div className="flex items-center justify-between bg-neutral-200 w-full">
        <div className="w-full text-neutral-800">SOME TEXT</div>

        <div className="w-full">
          <Image
            src={imageUrl}
            alt="project-thumbnail"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
