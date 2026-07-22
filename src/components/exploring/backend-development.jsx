"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Matter from "matter-js";

const techLogos = [
  { src: "/images/logos/vercel.svg", alt: "Vercel" },
  { src: "/images/logos/nest.svg", alt: "Nestjs" },
  { src: "/images/logos/postgresql.png", alt: "PostgreSQL" },
  { src: "/images/logos/redis.png", alt: "Redis" },
  { src: "/images/logos/docker.svg", alt: "Docker" },
  { src: "/images/logos/aws.svg", alt: "AWS" },
  { src: "/images/logos/graphql.svg", alt: "GraphQL" },
  { src: "/images/logos/rabbitmq.svg", alt: "RabbitMQ" },
  { src: "/images/logos/prisma.svg", alt: "Prisma" },
  { src: "/images/logos/jwt.svg", alt: "JWT" },
  { src: "/images/logos/nginx.svg", alt: "Nginx" },
];

const LOGO_SIZE = 56;
const RADIUS = LOGO_SIZE / 2;
const WALL_THICKNESS = 80;
const BOTTOM_OFFSET = 8;

const PhysicsLogos = () => {
  const containerRef = useRef(null);
  const tileRefs = useRef([]);
  const engineRef = useRef(null);
  const runnerRef = useRef(null);
  const bodiesRef = useRef([]);
  const wallsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const { width, height } = container.getBoundingClientRect();

    const engine = Matter.Engine.create();
    engine.gravity.y = 0.7;
    engineRef.current = engine;

    const world = engine.world;

    const ground = Matter.Bodies.rectangle(
      width / 2,
      height - BOTTOM_OFFSET + WALL_THICKNESS / 2,
      width + WALL_THICKNESS * 2,
      WALL_THICKNESS,
      { isStatic: true },
    );

    const topWall = Matter.Bodies.rectangle(
      width / 2,
      -WALL_THICKNESS / 2,
      width + WALL_THICKNESS * 2,
      WALL_THICKNESS,
      { isStatic: true },
    );
    const leftWall = Matter.Bodies.rectangle(
      -WALL_THICKNESS / 2,
      height / 2,
      WALL_THICKNESS,
      height + WALL_THICKNESS * 2,
      { isStatic: true },
    );
    const rightWall = Matter.Bodies.rectangle(
      width + WALL_THICKNESS / 2,
      height / 2,
      WALL_THICKNESS,
      height + WALL_THICKNESS * 2,
      { isStatic: true },
    );
    wallsRef.current = [ground, topWall, leftWall, rightWall];
    Matter.Composite.add(world, wallsRef.current);

    const bodies = techLogos.map((_, i) => {
      const startX = RADIUS + Math.random() * (width - RADIUS * 2);
      const startY = RADIUS + (i % 3) * (RADIUS * 0.6);
      const body = Matter.Bodies.circle(startX, startY, RADIUS, {
        restitution: 0.45,
        friction: 0.2,
        frictionAir: 0.015,
        density: 0.0025,
        angle: (Math.random() - 0.5) * 1.2,
      });
      Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.2);
      return body;
    });
    bodiesRef.current = bodies;

    bodies.forEach((body, i) => {
      setTimeout(() => {
        Matter.Composite.add(world, body);
      }, i * 90);
    });

    const mousePos = { x: null, y: null };
    const REPEL_RADIUS = 40;
    const REPEL_STRENGTH = 0.04;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mousePos.x = e.clientX - rect.left;
      mousePos.y = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      mousePos.x = null;
      mousePos.y = null;
    };
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    Matter.Events.on(engine, "beforeUpdate", () => {
      if (mousePos.x === null) return;
      bodies.forEach((body) => {
        const dx = body.position.x - mousePos.x;
        const dy = body.position.y - mousePos.y;
        const distSq = dx * dx + dy * dy;
        const dist = Math.sqrt(distSq) || 1;
        if (dist < REPEL_RADIUS) {
          const falloff = 1 - dist / REPEL_RADIUS;
          const force = falloff * REPEL_STRENGTH * body.mass;
          Matter.Body.applyForce(body, body.position, {
            x: (dx / dist) * force,
            y: (dy / dist) * force,
          });
        }
      });

      const MAX_SPEED = 25;
      bodies.forEach((body) => {
        const speed = Matter.Vector.magnitude(body.velocity);
        if (speed > MAX_SPEED) {
          const scale = MAX_SPEED / speed;
          Matter.Body.setVelocity(body, {
            x: body.velocity.x * scale,
            y: body.velocity.y * scale,
          });
        }
      });
    });

    const runner = Matter.Runner.create();
    runnerRef.current = runner;
    Matter.Runner.run(runner, engine);

    let rafId;
    const sync = () => {
      bodies.forEach((body, i) => {
        const el = tileRefs.current[i];
        if (!el) return;
        el.style.transform = `translate(${body.position.x - RADIUS}px, ${
          body.position.y - RADIUS
        }px) rotate(${body.angle}rad)`;
      });
      rafId = requestAnimationFrame(sync);
    };
    rafId = requestAnimationFrame(sync);

    const handleResize = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      Matter.Composite.remove(world, wallsRef.current);
      const newGround = Matter.Bodies.rectangle(
        rect.width / 2,
        rect.height - BOTTOM_OFFSET + WALL_THICKNESS / 2,
        rect.width + WALL_THICKNESS * 2,
        WALL_THICKNESS,
        { isStatic: true },
      );
      const newTop = Matter.Bodies.rectangle(
        rect.width / 2,
        -WALL_THICKNESS / 2,
        rect.width + WALL_THICKNESS * 2,
        WALL_THICKNESS,
        { isStatic: true },
      );
      const newLeft = Matter.Bodies.rectangle(
        -WALL_THICKNESS / 2,
        rect.height / 2,
        WALL_THICKNESS,
        rect.height + WALL_THICKNESS * 2,
        { isStatic: true },
      );
      const newRight = Matter.Bodies.rectangle(
        rect.width + WALL_THICKNESS / 2,
        rect.height / 2,
        WALL_THICKNESS,
        rect.height + WALL_THICKNESS * 2,
        { isStatic: true },
      );
      wallsRef.current = [newGround, newTop, newLeft, newRight];
      Matter.Composite.add(world, wallsRef.current);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafId);
      Matter.Runner.stop(runner);
      Matter.Composite.clear(world, false);
      Matter.Engine.clear(engine);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative aspect-video w-full overflow-hidden"
    >
      {/* Faint radial backdrop for depth */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(217,119,87,0.08),transparent_65%)]" />

      {/* Subtle repeating circle pattern */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="physics-circle-pattern"
            x="0"
            y="0"
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
            className="text-neutral-200/60"
          >
            <circle cx="4" cy="4" r="1" fill="currentcolor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#physics-circle-pattern)" />
      </svg>

      {techLogos.map((logo, i) => (
        <div
          key={logo.alt}
          ref={(el) => (tileRefs.current[i] = el)}
          className="absolute top-0 left-0 flex items-center justify-center rounded-2xl bg-background outline-2 outline-white shadow-lg select-none touch-none"
          style={{
            width: LOGO_SIZE,
            height: LOGO_SIZE,
            willChange: "transform",
          }}
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            height={28}
            width={28}
            draggable={false}
            className="pointer-events-none"
          />
        </div>
      ))}
    </div>
  );
};

const BackendDevelopment = () => {
  return (
    <div className="relative group h-auto w-full text-left flex flex-col rounded-4xl bg-background p-1.5 shadow-none transition-all duration-200 ease-out hover:-translate-y-1 hover:border-none hover:shadow-[0_8px_24px_rgba(0,0,0,0.10)] active:scale-[0.98] active:translate-y-0">
      <div className="relative bg-white overflow-hidden rounded-3xl w-full shadow-xl transition-all duration-200 ease-out">
        <div className="relative w-full">
          <PhysicsLogos />

          <div className="px-6 pb-8">
            <h4 className="text-xl">Backend Development</h4>
            <p className="mt-2 text-sm text-foreground/60">
              Learning to design scalable backend systems with NestJS,
              PostgreSQL, Redis, and modern engineering principles including
              authentication, caching, clean architecture, and event-driven
              design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackendDevelopment;
