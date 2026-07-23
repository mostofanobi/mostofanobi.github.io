"use client";

import Image from "next/image";
import { useState } from "react";
import Drawer from "./drawer";
import WorkDetail from "./work-detail";

const ProjectShowcase = ({
  projects,
  category = "highlighted",
  height = "95%",
}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const activeProject = activeIndex !== null ? projects[activeIndex] : null;

  const handlePrev = () =>
    setActiveIndex((i) => (i - 1 + projects.length) % projects.length);

  const handleNext = () => setActiveIndex((i) => (i + 1) % projects.length);

  const isHighlighted = category === "highlighted";

  const handleCardClick = (project, index) => {
    if (isHighlighted) {
      setActiveIndex(index);
      return;
    }

    const link = project?.metadata?.link;
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <>
      <div className="flex flex-col gap-8">
        {projects.map((project, index) =>
          isHighlighted ? (
            <div
              key={project.id}
              onClick={() => handleCardClick(project, index)}
              className="relative group cursor-pointer h-auto w-full text-left group flex flex-col bg-background p-1.5 shadow-none rounded-4xl 
              transition-all duration-200 ease-out 
              hover:-translate-y-1 hover:border-none hover:shadow-[0_8px_24px_rgba(0,0,0,0.10)]
              active:scale-[0.98] active:translate-y-0"
            >
              <div className="relative overflow-hidden bg-background rounded-3xl w-full aspect-4.5/3 shadow-2xl">
                <Image
                  fill
                  className="object-cover group-hover:brightness-90 transition-all"
                  src={project.cover}
                  alt={project.name}
                  sizes="(max-width: 768px) 100vw, 450px"
                />
              </div>
              <div className="bg-background rounded-b-4xl w-full pt-5 pb-2 pl-4 flex flex-col justify-end">
                <div className="flex items-center gap-4">
                  {project.logo && (
                    <Image
                      src={project.logo}
                      alt=""
                      width={60}
                      height={60}
                      className={`${
                        project.id === "aurora" ? "h-7 w-auto" : "w-8 h-auto"
                      }`}
                    />
                  )}
                  <p className="">{project.name}</p>
                </div>
              </div>
            </div>
          ) : (
            <div
              key={project.id}
              onClick={() => handleCardClick(project, index)}
              className="relative group cursor-pointer h-auto w-full text-left flex flex-col rounded-4xl bg-background p-1.5 shadow-none transition-all duration-200 ease-out 
              hover:-translate-y-1 hover:border-none hover:shadow-[0_8px_24px_rgba(0,0,0,0.10)]
              active:scale-[0.98] active:translate-y-0"
            >
              <div className="relative overflow-hidden bg-background rounded-3xl w-full aspect-4.5/3 shadow-xl transition-all duration-200 ease-out">
                <Image
                  fill
                  className="object-cover group-hover:brightness-90 transition-all"
                  src={project.cover}
                  alt={project.name}
                  sizes="(max-width: 768px) 100vw, 450px"
                />

                <div className="absolute z-10 left-0 bottom-0 w-full p-5 flex flex-col justify-end bg-background translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="relative text-xs text-pretty">
                    <b>{project.name}</b> — {project.excerpt}
                  </p>
                </div>
              </div>
            </div>
          ),
        )}
      </div>

      {isHighlighted && (
        <Drawer
          open={!!activeProject}
          height={height}
          onClose={() => setActiveIndex(null)}
        >
          {activeProject && (
            <WorkDetail
              project={activeProject}
              currentIndex={activeIndex}
              total={projects.length}
              onPrev={handlePrev}
              onNext={handleNext}
              handleClose={() => setActiveIndex(null)}
            />
          )}
        </Drawer>
      )}
    </>
  );
};

export default ProjectShowcase;
