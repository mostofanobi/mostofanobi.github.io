"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const TrailingLines = () => {
  const svgRef = useRef(null);
  const pointer = useRef({
    x: 0, // Changed from window.innerWidth / 2 to 0
    y: 0, // Changed from window.innerHeight / 2 to 0
  });
  const ease = 0.75;
  const total = 70;

  useEffect(() => {
    if (!svgRef.current) return;

    gsap.defaults({ ease: "none" });

    const handleMouseMove = (event) => {
      pointer.current.x = event.clientX;
      pointer.current.y = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let leader = pointer.current;
    const lines = [];

    for (let i = 0; i < total; i++) {
      leader = createLine(leader, i);
      lines.push(leader);
    }

    function createLine(leader, i) {
      const svgns = "http://www.w3.org/2000/svg";
      const line = document.createElementNS(svgns, "line");
      svgRef.current?.appendChild(line);

      // Set initial properties with a semi-transparent white color
      gsap.set(line, {
        x: -15,
        y: -15,
        alpha: (total - i) / total,
        attr: {
          stroke: "rgba(255, 255, 255, 0.7)",
          "stroke-width": 2,
        },
      });

      gsap.to(line, {
        duration: 1000,
        x: "+=1",
        y: "+=1",
        repeat: -1,
        modifiers: {
          x: function () {
            const posX = gsap.getProperty(line, "x");
            const leaderX = gsap.getProperty(leader, "x");

            const x = Number(posX) + (Number(leaderX) - Number(posX)) * ease;
            line.setAttribute("x2", Number(leaderX) - x + "");
            return x;
          },
          y: function () {
            const posY = gsap.getProperty(line, "y");
            const leaderY = gsap.getProperty(leader, "y");

            const y = Number(posY) + (Number(leaderY) - Number(posY)) * ease;
            line.setAttribute("y2", Number(leaderY) - y + "");
            return y;
          },
        },
      });

      return line;
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      lines.forEach((line) => {
        if (svgRef.current && line.parentNode === svgRef.current) {
          svgRef.current.removeChild(line);
        }
      });
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="fixed z-[9999] top-0 left-0 h-full w-full pointer-events-none mix-blend-difference"
    >
      <style>
        {`
          line {
            stroke: white;
            stroke-width: 2;
          }
        `}
      </style>
    </svg>
  );
};

export default TrailingLines;
