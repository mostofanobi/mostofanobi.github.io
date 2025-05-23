// components/RevealImage.tsx
"use client"; // This must be a Client Component

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function RevealImage({
  children,
  className = "",
  duration = 1.5,
  ease = "power2.out",
}) {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const image = container.querySelector("img");

    if (!image) {
      console.warn("RevealImage component expects an img element as child");
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        toggleActions: "restart none none reset",
      },
    });

    tl.set(container, { autoAlpha: 1 });
    tl.from(container, {
      xPercent: -100,
      duration,
      ease,
    });
    tl.from(
      image,
      {
        xPercent: 100,
        scale: 1.3,
        duration,
        delay: -duration,
        ease,
      },
      0
    );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [duration, ease]);

  return (
    <div
      ref={containerRef}
      className={`reveal ${className}`}
      style={{ opacity: 0 }} // Initial state
    >
      {children}
    </div>
  );
}
