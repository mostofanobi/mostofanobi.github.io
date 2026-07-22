"use client";

import {
  ChatGptIcon,
  ClaudeIcon,
  McpServerIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const techLogos = [
  {
    type: "icon",
    icon: ClaudeIcon,
    className: "text-[#D97757]",
    alt: "Claude",
  },
  { type: "image", src: "/images/logos/claudecode.png", alt: "Claude Code" },
  { type: "empty" },
  { type: "image", src: "/images/logos/cursor.png", alt: "Cursor" },
  { type: "empty" },
  { type: "image", src: "/images/logos/antigravity.png", alt: "Antigravity" },
  {
    type: "image",
    src: "/images/logos/gemini.svg",
    alt: "Gemini",
  },
  { type: "icon", icon: ChatGptIcon, className: "text-black", alt: "ChatGPT" },
  { type: "empty" },
  { type: "icon", icon: McpServerIcon, className: "text-black", alt: "MCP" },
  { type: "empty" },
];

const TechLogo = ({ logo, keyPrefix }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Empty slot: keep the same box (outline, background, shadow) but no icon/image or hover tooltip.
  if (logo.type === "empty") {
    return (
      <div
        key={keyPrefix}
        className="relative mx-2 flex size-12 shrink-0 items-center justify-center outline-2 outline-white rounded-2xl bg-background shadow-lg"
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      key={keyPrefix}
      className="relative mx-2 flex size-12 shrink-0 items-center justify-center outline-2 outline-white rounded-2xl bg-background shadow-lg hover:-translate-y-1 transition-all"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {logo.type === "icon" ? (
        <HugeiconsIcon icon={logo.icon} className={logo.className} />
      ) : (
        <Image src={logo.src} alt={logo.alt} height={24} width={24} />
      )}

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute -top-9 left-1/2 -translate-x-1/2 z-30 whitespace-nowrap rounded-lg bg-black/85 px-2.5 py-1 text-xs font-medium text-white shadow-md"
          >
            {logo.alt}
            <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-black/85" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MarqueeRow = ({ items, direction = "left", duration = 25 }) => {
  const looped = [...items, ...items];

  return (
    <div className="relative w-full">
      <motion.div
        className="flex gap-0 w-max"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {looped.map((logo, i) => (
          <TechLogo
            logo={logo}
            keyPrefix={`${direction}-${i}`}
            key={`${direction}-${i}`}
          />
        ))}
      </motion.div>
    </div>
  );
};

const AIAssistedEngineering = () => {
  return (
    <div className="relative group h-auto w-full text-left flex flex-col rounded-4xl bg-background p-1.5 shadow-none transition-all duration-200 ease-out hover:-translate-y-1 hover:border-none hover:shadow-[0_8px_24px_rgba(0,0,0,0.10)] active:scale-[0.98] active:translate-y-0">
      <div className="relative bg-white overflow-hidden rounded-3xl w-full shadow-xl transition-all duration-200 ease-out">
        <div className="relative w-full">
          {/* Techs marquee */}
          <div className="relative flex flex-col overflow-hidden pt-15 pb-8 gap-8">
            {/* Left mask */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-linear-to-r from-white to-transparent z-10" />
            {/* Right mask */}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-linear-to-l from-white to-transparent z-10" />

            <MarqueeRow items={techLogos} direction="left" duration={22} />
            <MarqueeRow
              items={[...techLogos].reverse()}
              direction="right"
              duration={22}
            />
          </div>
          {/* Techs marquee */}

          <div className="px-6 pb-8">
            <h4 className="text-xl">AI-assisted Software Engineering</h4>
            <p className="mt-2 text-sm text-foreground/60">
              Exploring how AI can improve software development through
              developer tooling, agentic workflows, code generation, automated
              reviews, and MCP-based integrations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistedEngineering;
