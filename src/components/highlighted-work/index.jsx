import projects from "@/data/highlighted-projects";
import ProjectShowcase from "../project-showcase";

const HighlightedWork = () => {
  return (
    <div
      data-card
      className="bg-[#E6E6E6] shrink-0 max-w-115 w-full h-full overflow-hidden rounded-4xl relative"
    >
      <div className="absolute z-20 left-1/2 -translate-x-1/2 top-0">
        <p className="z-10 uppercase text-xs font-medium text-foreground/60 absolute font-mono left-1/2 top-1/2 -translate-1/2 flex items-center gap-2.5">
          HIGHLIGHTED WORK
        </p>
        <svg
          viewBox="0 0 342 36"
          className="fill-background w-80 drop-shadow-2xl"
        >
          <g transform="translate(57 0)">
            <path d="M 3.558 0 C -35.362 0 258.714 0 219.367 0 C 180.02 0 203.91 36 165.422 36 C 126.935 36 70.485 36 58.318 36 C 17.791 36 42.477 0 3.558 0 Z"></path>
          </g>
        </svg>
      </div>
      <div className="scrollbar-none bg-fg h-full w-full overflow-y-auto">
        <div>
          <div className="h-16" />

          <div className="px-5 mb-15">
            <ProjectShowcase projects={projects} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightedWork;
