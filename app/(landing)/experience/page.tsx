import { experienceContent } from "@/components/experience/experience-content";
import ExperienceSection from "@/components/experience/experience-section";

const ExperiencePage = () => {
  return (
    <div className="flex items-center justify-center">
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
