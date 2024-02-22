import ProjectCard from "./project-card";
import { projectsContent } from "./project-content";

const ProjectSection = () => {
  return (
    <div className="my-24 w-full">
      <ul className="flex flex-col items-center justify-center w-full">
        {projectsContent.map((card, idx) => {
          return (
            <ProjectCard
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
              tags={card.tags}
              key={idx}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectSection;
