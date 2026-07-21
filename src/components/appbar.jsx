import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const EDGE_OFFSET = 32;

const Appbar = ({ scrollRef }) => {
  const scrollBy = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll("[data-card]"));
    const targets = cards.map((c) => Math.max(c.offsetLeft - EDGE_OFFSET, 0));
    const current = container.scrollLeft;
    const tolerance = 4;

    const left =
      direction === "right"
        ? targets.find((t) => t > current + tolerance)
        : (targets.filter((t) => t < current - tolerance).pop() ?? 0);

    if (left !== undefined) container.scrollTo({ left, behavior: "smooth" });
  };

  return (
    <header className="bg-background fixed right-0 bottom-0 left-0 z-80 px-5 md:top-0 md:bottom-auto">
      <div className="absolute left-1/2 -translate-x-1/2 md:top-0 md:bottom-[unset] -bottom-px">
        <p className="z-10 text-white uppercase text-xs absolute font-mono left-1/2 top-1/2 -translate-1/2 flex items-center gap-2.5">
          <span className="size-1.5 rounded-full bg-accent shrink-0 inline-block"></span>
          OPEN TO WORK
        </p>
        <svg
          viewBox="0 0 342 36"
          className="fill-black w-full scale-y-[-1] md:scale-none"
        >
          <g transform="translate(57 0)">
            <path d="M 3.558 0 C -35.362 0 258.714 0 219.367 0 C 180.02 0 203.91 36 165.422 36 C 126.935 36 70.485 36 58.318 36 C 17.791 36 42.477 0 3.558 0 Z"></path>
          </g>
        </svg>
      </div>
      <div className="mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <p className="font-medium">Mostofa Nobi</p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => scrollBy("left")}
            className="size-10 cursor-pointer rounded-full shrink-0 bg-neutral-200 hover:bg-neutral-300 transition-colors flex items-center justify-center"
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} size={16} />
          </button>
          <button
            onClick={() => scrollBy("right")}
            className="size-10 cursor-pointer rounded-full shrink-0 bg-neutral-200 hover:bg-neutral-300 transition-colors flex items-center justify-center"
          >
            <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Appbar;
