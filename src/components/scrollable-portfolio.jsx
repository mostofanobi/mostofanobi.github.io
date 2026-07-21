"use client";

import { useRef } from "react";
import Appbar from "./appbar";

export default function ScrollablePortfolio({ children }) {
  const scrollRef = useRef(null);

  return (
    <div>
      <Appbar scrollRef={scrollRef} />

      <main className="bg-background mt-4 h-[calc(100dvh-4rem)] md:mt-16">
        <div
          ref={scrollRef}
          className="h-full snap-x snap-mandatory scroll-pl-4 overflow-x-auto overflow-y-hidden scrollbar-none md:snap-none md:scroll-pl-8 [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex h-full gap-4 p-4 pt-px md:gap-6 md:p-8 md:pt-px">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
