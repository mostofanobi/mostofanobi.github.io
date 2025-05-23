"use client";

import { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const previousMouse = useRef({ x: 0, y: 0 });
  const circle = useRef({ x: 0, y: 0 });
  const currentScale = useRef(0);
  const currentAngle = useRef(0);
  const speed = 0.17;

  useGSAP(() => {
    gsap.ticker.add(tick);
    return () => {
      gsap.ticker.remove(tick);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Make cursor visible on first mouse movement
      if (!isVisible) setIsVisible(true);

      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isVisible]);

  const tick = () => {
    if (!cursorRef.current) return;

    // MOVE
    circle.current.x += (mouse.current.x - circle.current.x) * speed;
    circle.current.y += (mouse.current.y - circle.current.y) * speed;
    const translateTransform = `translate(${circle.current.x}px, ${circle.current.y}px)`;

    // SQUEEZE
    const deltaMouseX = mouse.current.x - previousMouse.current.x;
    const deltaMouseY = mouse.current.y - previousMouse.current.y;
    previousMouse.current.x = mouse.current.x;
    previousMouse.current.y = mouse.current.y;
    const mouseVelocity = Math.min(
      Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 4,
      150
    );
    const scaleValue = (mouseVelocity / 150) * 0.3;
    currentScale.current += (scaleValue - currentScale.current) * speed;
    const scaleTransform = `scale(${1 + currentScale.current}, ${
      1 - currentScale.current
    })`;

    // ROTATE
    const angle = (Math.atan2(deltaMouseY, deltaMouseX) * 180) / Math.PI;
    if (mouseVelocity > 20) {
      currentAngle.current = angle;
    }
    const rotateTransform = `rotate(${currentAngle.current}deg)`;

    cursorRef.current.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;
  };

  return (
    <div
      ref={cursorRef}
      className={`fixed w-10 h-10 z-[99] bg-[#E4E4E4] mix-blend-difference rounded-full select-none pointer-events-none transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        top: "-16px",
        left: "-16px",
      }}
    />
  );
}
