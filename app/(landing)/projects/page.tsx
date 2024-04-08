import { projectsContent } from "@/components/projects/project-content";
import ProjectCard from "@/components/projects/project-card";

const ProjectsPage = () => {
  return (
    <div className="my-8 md:my-20 w-full md:max-w-screen-2xl md:mx-auto md:px-16">
      <ul className="flex flex-col items-center justify-center w-full">
        {projectsContent.map((card, idx) => {
          return (
            <ProjectCard
              title={card.title}
              description={card.description}
              tags={card.tags}
              key={idx}
              link={card.link}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectsPage;
