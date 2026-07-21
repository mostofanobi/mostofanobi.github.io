import projects from "@/data/highlighted-projects";
import ProjectShowcase from "../project-showcase";

const HighlightedWork = () => {
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
                Highlighted Work
              </p>
            </div>
          </header>

          <div className="px-5 mb-15">
            <ProjectShowcase projects={projects} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightedWork;
