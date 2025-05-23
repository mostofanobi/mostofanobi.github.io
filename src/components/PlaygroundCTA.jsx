"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Array of image paths
const images = [
  "mock.jpg",
  "mock.jpg",
  "mock.jpg",
  "mock.jpg",
  "mock.jpg",
  "mock.jpg",
  "mock.jpg",
  "mock.jpg",
  "mock.jpg",
  "mock.jpg",
  "mock.jpg",
  "mock.jpg",
];

export default function PlaygroundCTA() {
  const galleryRef = useRef(null);
  const column1Ref = useRef(null);
  const column2Ref = useRef(null);
  const column3Ref = useRef(null);
  const column4Ref = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // GSAP animations
  useGSAP(() => {
    const { height } = dimension;
    if (!height) return;

    // Create animations for each column with different speeds
    gsap.to(column1Ref.current, {
      y: height * 2,
      ease: "none",
      scrollTrigger: {
        trigger: galleryRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(column2Ref.current, {
      y: height * 3.3,
      ease: "none",
      scrollTrigger: {
        trigger: galleryRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(column3Ref.current, {
      y: height * 1.25,
      ease: "none",
      scrollTrigger: {
        trigger: galleryRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(column4Ref.current, {
      y: height * 3,
      ease: "none",
      scrollTrigger: {
        trigger: galleryRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, [dimension]);

  return (
    <main className="col-span-full w-full h-[175vh] relative">
      <div className="absolute top-0 -left-12.5 w-screen h-full">
        <div
          ref={galleryRef}
          className="h-full relative flex gap-8 overflow-hidden"
        >
          <Column
            ref={column1Ref}
            images={[images[0], images[1], images[2]]}
            initialOffset="-45%"
          />
          <Column
            ref={column2Ref}
            images={[images[3], images[4], images[5]]}
            initialOffset="-95%"
          />
          <Column
            ref={column3Ref}
            images={[images[6], images[7], images[8]]}
            initialOffset="-45%"
          />
          {/* <Column
            ref={column4Ref}
            images={[images[9], images[10], images[11]]}
            initialOffset="-75%"
          /> */}
        </div>
      </div>
    </main>
  );
}

// Column component with forwarded ref
const Column = ({ images, initialOffset, ref }) => {
  return (
    <div
      ref={ref}
      className="relative h-full w-1/3 min-w-[250px] flex flex-col gap-8"
      style={{ top: initialOffset }}
    >
      {images.map((src, i) => (
        <div
          key={i}
          className="h-full w-full relative rounded-lg overflow-hidden"
        >
          <Image
            src={`/images/${src}`}
            alt="Gallery image"
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
};
