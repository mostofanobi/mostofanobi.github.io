import projects from "@/data/side-projects";
import ProjectShowcase from "../project-showcase";

const SideProjects = () => {
  return (
    <div
      data-card
      className="bg-[#E6E6E6] shrink-0 max-w-115 w-full h-full overflow-hidden rounded-4xl relative"
    >
      <div className="scrollbar-none bg-fg h-full w-full overflow-y-auto">
        <div>
          <header className="h-16">
            <div className="flex flex-col h-full justify-center px-10">
              <p className="uppercase font-mono text-xs font-medium text-foreground/60">
                Side Projects
              </p>
            </div>
          </header>

          <div className="px-5 mb-15">
            <ProjectShowcase category="side" projects={projects} />

            <h1 className="mt-12 text-center font-mono font-medium text-foreground/60 uppercase text-xs">
              More Uploading Soon!
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideProjects;
