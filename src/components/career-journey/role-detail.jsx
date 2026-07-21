"use client";

import { useState } from "react";
import {
  Cancel01Icon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import ProjectShowcase from "../project-showcase";
import projects from "@/data/highlighted-projects";

const MONTH_NAMES = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

const monthLabel = (dateStr) => {
  const [y, m] = dateStr.split("-").map(Number);
  return `${MONTH_NAMES[m - 1]} ${String(y).slice(2)}`;
};

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

const RoleDetail = ({ role, currentIndex, total, onClose, onPrev, onNext }) => {
  const [direction, setDirection] = useState(0);

  if (!role) return null;

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === total - 1;

  const handleNext = () => {
    if (isLast) return;
    setDirection(1);
    onNext();
  };

  const handlePrev = () => {
    if (isFirst) return;
    setDirection(-1);
    onPrev();
  };

  return (
    <div className="pb-16">
      <AnimatePresence mode="popLayout" custom={direction} initial={false}>
        <motion.div
          key={role.title + role.company}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30, mass: 0.8 },
            opacity: { duration: 0.2, ease: "easeOut" },
            scale: { duration: 0.2, ease: "easeOut" },
          }}
        >
          <div className="mb-15">
            <div className="flex gap-2 items-center pt-2 mb-8">
              <Image
                src="./images/logos/technext.png"
                height={100}
                width={100}
                alt="technext"
                className="h-8 w-auto"
              />
              <HugeiconsIcon icon={Cancel01Icon} size={18} />
              <Image
                src="./images/logos/themewagon.png"
                height={100}
                width={100}
                alt="themewagon"
                className="h-8 w-auto"
              />
            </div>

            <h2 className="text-2xl text-foreground/90 leading-snug mb-4">
              {role.title} — {role.company}
            </h2>

            <p className="mt-1 font-mono text-xs uppercase text-foreground/60 font-medium">
              <span className="">Full-time</span> · {monthLabel(role.start)} —{" "}
              {role.current ? "PRESENT" : monthLabel(role.end)}
            </p>
          </div>

          <div className="flex flex-col space-y-5 mb-15">
            <p className="uppercase font-mono text-xs font-medium text-foreground/60 flex items-center gap-4">
              Key Contributions{" "}
              <span className="flex-1 h-px bg-black/15"></span>
            </p>

            <ul className="space-y-5 list-disc list-inside">
              {role.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col space-y-5">
            <p className="uppercase font-mono text-xs font-medium text-foreground/60 flex items-center gap-4">
              PROJECTS <span className="flex-1 h-px bg-black/15"></span>
            </p>

            <div>
              <ProjectShowcase
                height="100%"
                projects={role.projects.map((id) =>
                  projects.find((p) => p.id === id),
                )}
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-0 left-0 right-0 px-4 pb-5 pt-3 pointer-events-none flex justify-center">
        <div className="w-fit flex justify-center items-center gap-1 pointer-events-auto p-2 rounded-full bg-neutral-200/60 backdrop-blur-lg border border-white/20 shadow-2xl">
          <button
            onClick={handlePrev}
            disabled={isFirst}
            className="cursor-pointer flex items-center justify-center shrink-0 size-10 rounded-full bg-background shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:pointer-events-none"
          >
            <HugeiconsIcon icon={ChevronLeftIcon} />
          </button>

          <button
            onClick={onClose}
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

export default RoleDetail;
