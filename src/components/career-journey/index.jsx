"use client";

import { useState, useCallback } from "react";
import { Cancel01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { roles } from "@/data/career-journey";
import Image from "next/image";
import Drawer from "../drawer";
import RoleDetail from "./role-detail";

const now = new Date();
const TODAY = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
const TOP_YEAR = 2027;
const ROW_H = 150;
const PX_PER_MONTH = ROW_H / 12;
const CARD_GAP = 10;
const LANE_WIDTH = 28;
const LANE_TO_CARD_GAP = 14;
const YEARS = [2027, 2026, 2025, 2024, 2023, 2022, 2021];
const MONTH_NAMES = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

const offsetFor = (dateStr) => {
  const [y, m] = dateStr.split("-").map(Number);
  return (TOP_YEAR - y) * ROW_H + (1 - m) * PX_PER_MONTH;
};

const addMonth = (dateStr) => {
  let [y, m] = dateStr.split("-").map(Number);
  m += 1;
  if (m > 12) {
    m = 1;
    y += 1;
  }
  return `${y}-${String(m).padStart(2, "0")}`;
};

const endOffsetFor = (dateStr) => offsetFor(addMonth(dateStr));

const monthLabel = (dateStr) => {
  const [y, m] = dateStr.split("-").map(Number);
  return `${MONTH_NAMES[m - 1]} ${String(y).slice(2)}`;
};

const durationStr = (start, end, current) => {
  const [sy, sm] = start.split("-").map(Number);
  const [ey, em] = (current ? TODAY : end).split("-").map(Number);
  const total = (ey - sy) * 12 + (em - sm) + 1;
  const yrs = Math.floor(total / 12);
  const mos = total % 12;
  return [yrs > 0 ? `${yrs}y` : "", mos > 0 ? `${mos}m` : ""]
    .filter(Boolean)
    .join(" ");
};

const RoleCard = ({ role, onClick }) => {
  const top = endOffsetFor(role.end) + CARD_GAP;
  const height = Math.max(
    offsetFor(role.start) - endOffsetFor(role.end) - CARD_GAP * 2,
    64,
  );
  const left = LANE_WIDTH + LANE_TO_CARD_GAP;

  return (
    <div
      onClick={() => onClick(role)}
      className="absolute cursor-pointer right-0 rounded-3xl shadow-lg bg-white px-4 py-3 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:brightness-98 active:scale-[0.98] transition-all text-left"
      style={{ top, height, left }}
    >
      <div className="flex gap-2 items-center">
        <Image
          src="/images/logos/technext.png"
          height={100}
          width={100}
          alt="technext"
          className="h-6 w-auto"
        />
        <HugeiconsIcon icon={Cancel01Icon} size={18} />
        <Image
          src="/images/logos/themewagon.png"
          height={100}
          width={100}
          alt="themewagon"
          className="h-6 w-auto"
        />
      </div>
      <div>
        <p className="text-sm font-medium leading-snug">
          {role.title}
          <span className="text-foreground/50"> · </span>
          <span className="text-foreground/50">{role.company}</span>
        </p>
        <p className="mt-2 font-mono text-[0.625rem] font-medium uppercase tracking-wide text-zinc-500">
          {monthLabel(role.start)} —{" "}
          {role.current ? "PRESENT" : monthLabel(role.end)}
        </p>
      </div>
    </div>
  );
};

const CareerJourney = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const activeRole = activeIndex !== null ? roles[activeIndex] : null;
  const chartHeight = (TOP_YEAR - 2022) * ROW_H + ROW_H;

  const openDrawer = useCallback((role) => {
    const idx = roles.findIndex((r) => r.id === role.id);
    setActiveIndex(idx);
  }, []);

  const closeDrawer = useCallback(() => setActiveIndex(null), []);

  const handlePrev = useCallback(
    () => setActiveIndex((i) => Math.max(i - 1, 0)),
    [],
  );

  const handleNext = useCallback(
    () => setActiveIndex((i) => Math.min(i + 1, roles.length - 1)),
    [],
  );

  return (
    <div
      data-card
      className="relative bg-neutral-200 shadow-inset shrink-0 max-w-115 w-full h-full overflow-hidden rounded-4xl"
    >
      <div className="absolute z-20 left-1/2 -translate-x-1/2 top-0">
        <p className="z-10 uppercase text-xs font-medium absolute font-mono left-1/2 top-1/2 -translate-1/2 flex items-center gap-2.5">
          CAREER JOURNEY
        </p>
        <svg
          viewBox="0 0 342 36"
          className="fill-background w-80 drop-shadow-2xl"
        >
          <g transform="translate(57 0)">
            <path d="M 3.558 0 C -35.362 0 258.714 0 219.367 0 C 180.02 0 203.91 36 165.422 36 C 126.935 36 70.485 36 58.318 36 C 17.791 36 42.477 0 3.558 0 Z"></path>
          </g>
        </svg>
      </div>

      <div className="relative h-full w-full overflow-y-auto scrollbar-none rounded-4xl">
        <div className="h-16" />

        <div className="px-5 pt-6 pb-16">
          <div className="relative flex" style={{ height: chartHeight }}>
            <div className="relative w-10 shrink-0">
              {YEARS.map((y) => (
                <div
                  key={y}
                  className="absolute left-0 right-0 flex items-center"
                  style={{
                    top: offsetFor(`${y}-01`),
                    transform: "translateY(-50%)",
                  }}
                >
                  <span className="font-mono text-xs font-medium text-foreground/60 leading-none">
                    {y}
                  </span>
                </div>
              ))}
            </div>

            <div className="relative flex-1">
              <div
                className="absolute z-10 bottom-0 left-1.5 rounded-lg bg-accent flex items-center justify-center"
                style={{
                  width: LANE_WIDTH,
                  top: Math.max(offsetFor(TODAY), 0),
                }}
              >
                <span
                  className="font-mono text-[0.625rem] uppercase tracking-widest font-semibold whitespace-nowrap"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  Freelance &amp; Side Projects
                </span>
              </div>

              {YEARS.map((y) => (
                <div
                  key={`line-${y}`}
                  className="absolute left-0 right-0 border-t border-black/15"
                  style={{ top: offsetFor(`${y}-01`) }}
                />
              ))}

              {roles.map((r) => (
                <RoleCard key={r.id} role={r} onClick={openDrawer} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Drawer open={activeRole !== null} onClose={closeDrawer}>
        <RoleDetail
          role={activeRole}
          currentIndex={activeIndex}
          total={roles.length}
          onClose={closeDrawer}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </Drawer>
    </div>
  );
};

export default CareerJourney;
