import { ChevronLeftIcon, ChevronRightIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

const WorkDetail = ({
  project,
  currentIndex,
  total,
  onPrev,
  onNext,
  handleClose,
}) => {
  const [direction, setDirection] = useState(0);
  const scrollContainerRef = useRef(null);

  if (!project) return null;

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === total - 1;

  const resetScroll = () => {
    let parent = scrollContainerRef.current?.parentElement;
    while (parent) {
      if (parent.scrollTop > 0) {
        parent.scrollTop = 0;
        break;
      }
      parent = parent.parentElement;
    }
  };

  const handlePrev = () => {
    if (isFirst) return;
    setDirection(-1);
    resetScroll();
    onPrev();
  };

  const handleNext = () => {
    if (isLast) return;
    setDirection(1);
    resetScroll();
    onNext();
  };

  return (
    <div ref={scrollContainerRef} className="pb-16 overflow-hidden">
      <AnimatePresence mode="popLayout" custom={direction} initial={false}>
        <motion.div
          key={project.id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30, mass: 0.8 },
            opacity: { duration: 0.2, ease: "easeOut" },
          }}
          className="flex flex-col gap-12"
        >
          <div>
            <div className="flex gap-4 items-center mb-6">
              <Image
                src={project.logo}
                alt=""
                width={36}
                height={36}
                className={
                  project.id === "aurora" ? "h-12 w-auto" : "w-10 h-auto"
                }
              />
              <h2 className="text-2xl">{project.name}</h2>
            </div>
            <p className="leading-relaxed text-pretty">{project.description}</p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex gap-3 justify-between items-center">
              <p className="text-xs font-mono font-semibold text-foreground/40">
                COMPANY
              </p>
              <span className="flex-1 h-px bg-black/10"></span>
              <p className="text-sm">{project.metadata.company}</p>
            </div>
            <div className="flex gap-3 justify-between items-center">
              <p className="text-xs font-mono font-semibold text-foreground/40">
                CONTEXT
              </p>
              <span className="flex-1 h-px bg-black/10"></span>
              <p className="text-sm">{project.metadata.context}</p>
            </div>
            <div className="flex gap-3 justify-between items-center">
              <p className="text-xs font-mono font-semibold text-foreground/40">
                YEAR
              </p>
              <span className="flex-1 h-px bg-black/10"></span>
              <p className="text-sm">{project.metadata.year}</p>
            </div>
            <div className="flex gap-3 justify-between items-center">
              <p className="text-xs font-mono font-semibold text-foreground/40">
                TOOLS
              </p>
              <span className="flex-1 h-px bg-black/10"></span>
              <p className="text-sm">{project.metadata.tools.join(", ")}</p>
            </div>
            <div className="flex gap-3 justify-between items-center">
              <p className="text-xs font-mono font-semibold text-foreground/40">
                LIVE PREVIEW
              </p>
              <span className="flex-1 h-px bg-black/10"></span>
              <a
                href={project.metadata.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline decoration-1 underline-offset-3 hover:opacity-60 transition-all"
              >
                {project.name}
              </a>
            </div>
          </div>

          <div className="flex flex-col h-full justify-center space-y-4">
            <p>Previews</p>

            <div className="space-y-6">
              {(project.previews ?? []).map((preview, idx) => (
                <div
                  key={`${project.id}-preview-${idx}`}
                  className="relative overflow-hidden bg-[#F2F2F2] rounded-2xl w-full aspect-video shadow-xl"
                >
                  {preview.type === "image" && (
                    <Image
                      fill
                      className="object-cover object-top"
                      src={preview.src}
                      alt=""
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8+e1bPQAJUQNyjPBq5gAAAABJRU5ErkJggg=="
                    />
                  )}

                  {preview.type === "video" && (
                    <video
                      autoPlay
                      loop
                      muted
                      className="w-full h-full object-cover"
                    >
                      <source src={preview.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Sticky prev/next nav */}
      <div className="fixed bottom-0 left-0 right-0 px-4 pb-5 pt-3 pointer-events-none flex justify-center">
        <div className="w-fit flex justify-center items-center gap-1 pointer-events-auto p-2 rounded-full bg-[#E6E6E6]/60 backdrop-blur-lg border border-white/20 shadow-2xl">
          <button
            onClick={handlePrev}
            disabled={isFirst}
            className="cursor-pointer flex items-center justify-center shrink-0 size-10 rounded-full bg-background shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:pointer-events-none"
          >
            <HugeiconsIcon icon={ChevronLeftIcon} />
          </button>

          <button
            onClick={handleClose}
            className="cursor-pointer h-full w-30 rounded-full text-xs font-medium bg-background shadow-xl hover:-translate-y-0.5 transition-all"
          >
            Close
          </button>

          <button
            onClick={handleNext}
            disabled={isLast}
            className="cursor-pointer flex items-center justify-center shrink-0 size-10 rounded-full bg-background shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:pointer-events-none"
          >
            <HugeiconsIcon icon={ChevronRightIcon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkDetail;
