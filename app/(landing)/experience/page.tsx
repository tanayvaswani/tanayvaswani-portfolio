import { experienceContent } from "@/components/experience/experience-content";
import ExperienceSection from "@/components/experience/experience-section";

const ExperiencePage = () => {
  return (
    <div className="flex flex-col items-center justify-center my-16">
      {experienceContent.map((cont, idx) => (
        <ExperienceSection
          key={idx}
          title={cont.title}
          company={cont.company}
          location={cont.location}
          duration={cont.duration}
          description={cont.description}
        />
      ))}
    </div>
  );
};

export default ExperiencePage;
