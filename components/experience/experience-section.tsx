const ExperienceSection = () => {
  return (
    <div className="my-20 md:max-w-screen-md md:mx-auto px-6 w-full">
      <div className="flex items-start justify-between w-full">
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-neutral-300 font-semibold text-xl md:text-3xl">
            Software Engineering Intern
          </h1>
          <h2 className="text-neutral-300 font-semibold text-lg md:text-xl">
            Company Name
          </h2>
        </div>

        <h2 className="text-neutral-300 font-semibold text-lg md:text-xl pt-6">
          November, 2023 - Present
        </h2>
      </div>

      <div>
        <p>Description</p>
      </div>
    </div>
  );
};

export default ExperienceSection;
