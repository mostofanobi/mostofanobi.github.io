"use client";

import React, { useEffect, useRef } from "react";

const Contact = () => {
  const containerRef = useRef(null);
  const highlightRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const highlight = highlightRef.current;

    const gridItems = container.querySelectorAll(".grid-item");
    const firstItem = container.querySelector(".grid-item");

    const moveToElement = (element) => {
      if (element) {
        const rect = element.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        highlight.style.transform = `translate(${
          rect.left - containerRect.left
        }px, ${rect.top - containerRect.top}px)`;
        highlight.style.width = `${rect.width}px`;
        highlight.style.height = `${rect.height}px`;
        // highlight.style.backgroundColor = element.dataset.color;
      }
    };

    const moveHighlight = (e) => {
      const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);

      if (hoveredElement && hoveredElement.classList.contains("grid-item")) {
        moveToElement(hoveredElement);
      } else if (
        hoveredElement &&
        hoveredElement.parentElement &&
        hoveredElement.parentElement.classList.contains("grid-item")
      ) {
        moveToElement(hoveredElement.parentElement);
      }
    };

    moveToElement(firstItem);

    container.addEventListener("mousemove", moveHighlight);

    return () => {
      container.removeEventListener("mousemove", moveHighlight);
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 my-40">
      <div className="grid grid-cols-1">
        <h1 className="text-8xl font-extralight">Get in touch</h1>
        <div ref={containerRef} className="relative">
          <div className="grid grid-cols-4">
            <div className="grid-item col-span-1 aspect-[1/0.6] border-1 border-white/15"></div>
            <div className="grid-item col-span-1 aspect-[1/0.6] border-1 border-white/15"></div>
            <div className="grid-item col-span-1 aspect-[1/0.6] border-1 border-white/15"></div>
            <div className="grid-item col-span-1 aspect-[1/0.6] border-1 border-white/15"></div>
            <div className="grid-item col-span-1 aspect-[1/0.6] border-1 border-white/15"></div>
            <div className="grid-item col-span-1 aspect-[1/0.6] border-1 border-white/15"></div>
            <div className="grid-item col-span-1 aspect-[1/0.6] border-1 border-white/15"></div>
            <div className="grid-item col-span-1 aspect-[1/0.6] border-1 border-white/15"></div>
          </div>

          <div
            ref={highlightRef}
            className="absolute top-0 left-0 bg-white pointer-events-none transition-all duration-250"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
