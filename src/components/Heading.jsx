import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import FluidText from "./FluidText";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Heading() {
  const logoRef = useRef(null);

  useEffect(() => {
    // Make sure elements are accessible
    if (!logoRef.current) return;

    // Create the ScrollTrigger animation
    gsap.fromTo(
      logoRef.current,
      {
        // y: "50vh",
        scale: 1,
        // yPercent: -50,
      },
      {
        y: 0,
        scale: 0.2,
        yPercent: -40,
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "+=500",
          scrub: true,
          markers: true,
        },
        immediateRender: true,
      }
    );

    // Clean up function
    return () => {
      // Kill all ScrollTriggers to prevent memory leaks
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <header className="w-full h-screen">
      <div className="grid grid-cols-12 gap-x-6 mx-6">
        <div className="col-span-full">
          <div
            ref={logoRef}
            className="fixed w-full top-0 z-[9999] left-0 px-6"
          >
            <FluidText text="mostofa nobi" color="#333333" />
          </div>
        </div>
      </div>
    </header>
  );
}
