"use client";

import { useEffect, useRef, useState } from "react";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const FluidText = ({
  text = "Projects",
  animateOnScroll = true,
  delay = 0,
  color = "#ffffff",
}) => {
  const svgRef = useRef(null);
  const containerRef = useRef(null);
  const hiddenTextRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [characterPositions, setCharacterPositions] = useState([]);
  const letterContainerRef = useRef(null);
  const letterRefs = useRef([]);

  // Split text into individual letters
  const letters = text.split("");

  // First pass: render a hidden text element to calculate dimensions
  useEffect(() => {
    if (hiddenTextRef.current) {
      const textElement = hiddenTextRef.current;
      const bbox = textElement.getBBox();

      // Use a more precise height calculation to reduce top spacing
      const fontSize = 120;
      const approximateHeight = fontSize * 0.8; // More accurate text height

      setDimensions({
        width: bbox.width,
        height: approximateHeight, // Use calculated height instead of bbox.height
      });
    }
  }, [text]);

  // Second pass: calculate individual character positions
  useEffect(() => {
    if (!hiddenTextRef.current || dimensions.width === 0) return;

    const textElement = hiddenTextRef.current;
    const positions = [];

    try {
      // Calculate positions for each character
      for (let i = 0; i < textElement.getNumberOfChars(); i++) {
        const charPosition = textElement.getStartPositionOfChar(i);
        positions.push({
          x: charPosition.x,
          char: text[i],
        });
      }

      setCharacterPositions(positions);
    } catch (error) {
      console.error("Error calculating text positions:", error);
    }
  }, [dimensions, text]);

  // Animation using GSAP
  useGSAP(
    () => {
      if (!letterRefs.current.length || letterRefs.current.some((ref) => !ref))
        return;

      // Initialize letterRefs array if needed
      if (letterRefs.current.length !== letters.length) {
        letterRefs.current = Array(letters.length).fill(null);
      }

      // Set initial state
      gsap.set(letterRefs.current, {
        y: 100,
        opacity: 0,
      });

      // Create the animation
      const animationProps = {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.05,
        ease: "power4.out",
        delay: delay,
      };

      if (animateOnScroll) {
        gsap.to(letterRefs.current, {
          ...animationProps,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 100%",
            once: true,
          },
        });
      } else {
        gsap.to(letterRefs.current, animationProps);
      }
    },
    {
      scope: containerRef,
      dependencies: [characterPositions.length, animateOnScroll, delay],
    }
  );

  return (
    <div
      ref={containerRef}
      className="w-full font-oldschool-grotesk select-none overflow-visible"
    >
      <svg
        ref={svgRef}
        className="h-auto w-full"
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Hidden text used for measurement */}
        <text
          ref={hiddenTextRef}
          x="0"
          y="98%"
          textAnchor="start"
          fontSize="120"
          fontWeight="900"
          fill="transparent"
          style={{ visibility: "hidden" }}
        >
          {text}
        </text>

        {/* Visible animated letters */}
        <g ref={letterContainerRef}>
          {characterPositions.map((pos, index) => (
            <text
              key={index}
              ref={(el) => (letterRefs.current[index] = el)}
              x={pos.x}
              y="98%"
              textAnchor="start"
              fontSize="120"
              fontWeight="900"
              fill={color}
            >
              {pos.char}
            </text>
          ))}
        </g>
      </svg>
    </div>
  );
};

export default FluidText;
