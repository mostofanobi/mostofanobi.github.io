"use client";

import Contact from "@/components/Contact";
import Copy from "@/components/Copy";
import FluidText from "@/components/FluidText";
import PageBottomBlur from "@/components/PageBottomBlur";
import PlaygroundCTA from "@/components/PlaygroundCTA";
import PlusSvg from "@/components/PlusSvg";
import SectionIntro from "@/components/SectionIntro";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { SearchIcon } from "@hugeicons/core-free-icons";
import {
  Add01Icon,
  ArrowUpRight01Icon,
} from "@hugeicons/core-free-icons/index";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      {/* <div className="fixed z-50 top-6 left-0 h-screen w-full px-6 mix-blend-difference">
        <div className="relative border border-white/50 rounded h-5 mask-[linear-gradient(#000_50%,transparent_0)]">
          <div className="absolute h-full top-0 left-1/4 w-px bg-white/50"></div>
        </div>

        <div className="relative flex -mt-1 justify-between">
          <p className="text-base font-light text-[#929292] tracking-widest">
            mostofa nobi
          </p>

          <div className="absolute left-1/4 -ml-0.5">
            <div className="flex gap-3 items-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#f00] border border-white/10"></div>

              <p className="text-xs font-light text-white/50 tracking-widest">
                ( about )
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xs font-light text-white/20 tracking-widest">
                ( works )
              </p>
              <p className="text-xs font-light text-white/20 tracking-widest">
                ( contact )
              </p>
            </div>
          </div>

          <p className="text-xs font-light text-[#929292] tracking-widest ml-4">
            + Contact
          </p>
        </div>
      </div>
      <section className="h-screen relative">
        <div className="w-full h-full relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background/70 to-background"></div>
        </div>
      </section>
      <section className="">
        <div className="w-full px-6">
          <SectionIntro index={1} title="about" suffix="( mostofa nobi )" />

          <div className="relative w-full sm:left-1/4 sm:w-3/4">
            <div className="w-full">
              <div className="bg-white/80 my-[10vh] relative rounded-md p-1 pb-10 w-full max-w-xs aspect-[.7/1]">
                <div className="w-full shadow h-full overflow-hidden grayscale-100 relative rounded-md bg-white/3">
                  <Image
                    src="/tanveer.webp"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="absolute font-light bottom-2 text-base left-2 text-black">
                  Mostofa Nobi
                </p>
              </div>

              <p className="text-white/50 leading-none text-[max(2.5rem,4vw)] font-light my-[10vh] text-pretty">
                With 10 years under our belt, we’re experts at crafting —
                memorable websites and brand visuals that reflect each client’s
                unique story.
              </p>

              <div className="max-w-2xl flex flex-col border-y border-white/10">
                <div className="py-4.5 pl-4 flex justify-between items-center border-b border-white/10">
                  <div className="flex gap-8 items-center">
                    <p className="font-light text-xl text-[#F00]">01.</p>
                    <p className="text-xl font-light text-white/50">
                      Fullstack Developer
                    </p>
                  </div>
                </div>
                <div className="py-4.5 pl-4 flex justify-between items-center border-b border-white/10">
                  <div className="flex gap-8 items-center">
                    <p className="font-light text-xl text-[#F00]">02.</p>
                    <p className="text-xl font-light text-white/50">
                      4+ Years of Experience
                    </p>
                  </div>
                </div>
                <div className="py-4.5 pl-4 flex justify-between items-center">
                  <div className="flex gap-8 items-center">
                    <p className="font-light text-xl text-[#F00]">03.</p>
                    <p className="text-xl font-light text-white/50">
                      From Bangladesh
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-white/50 leading-tight text-[max(1.5rem,2vw)] max-w-2xl font-light my-[10vh] text-pretty mb-40">
                <span className="text-xs font-light text-white/50 tracking-widest">
                  ( About )
                </span>{" "}
                With 10 years under our belt, we’re experts at crafting —
                memorable websites and brand visuals that reflect each client’s
                unique story.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="w-full px-6">
          <SectionIntro index={2} title="services" suffix="( development )" />

          <div className="relative w-full sm:left-1/4 sm:w-3/4">
            <div className="w-full">
              <p className="text-white/50 leading-none text-[max(2.5rem,4vw)] font-light my-[10vh] text-pretty">
                With 10 years under our belt, we’re experts at crafting —
                memorable websites and brand visuals that reflect each client’s
                unique story.
              </p>

              <div className="max-w-2xl flex flex-col border-y border-white/10">
                <div className="py-4.5 pl-4 flex justify-between items-center border-b border-white/10">
                  <div className="flex gap-8 items-center">
                    <p className="text-7xl text-[#F00]">01.</p>
                    <p className="text-7xl text-white/50">
                      Fullstack Developer
                    </p>
                  </div>
                </div>
                <div className="py-4.5 pl-4 flex justify-between items-center border-b border-white/10">
                  <div className="flex gap-8 items-center">
                    <p className="text-7xl text-[#F00]">02.</p>
                    <p className="text-7xl text-white/50">
                      4+ Years of Experience
                    </p>
                  </div>
                </div>
                <div className="py-4.5 pl-4 flex justify-between items-center">
                  <div className="flex gap-8 items-center">
                    <p className="text-7xl text-[#F00]">03.</p>
                    <p className="text-7xl text-white/50">From Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <nav className="fixed z-[999] top-0 left-0 border-b border-white/10 w-full h-16 bg-background mx-4 md:mx-12.5">
        <div className="max-w-[1520px] mx-auto h-full flex justify-between">
          <div className="border-x h-full border-white/10 px-8 flex items-center justify-center">
            <div className="flex items-center gap-1">
              <p className="leading-none text-xs uppercase font-light">
                Mostofa nobi
              </p>
            </div>
          </div>

          <p className="text-sm leading-none">
            + Fullstack developer <br />
            frontend focused
          </p>
        </div>
      </nav> */}

      <nav className="select-none fixed top-0 w-full px-8 z-50">
        <div className="py-6 relative">
          <div className="flex justify-between relative mix-blend-difference">
            <Copy>
              <h4 className="text-xl text-foreground font-medium">
                mostofa nobi
              </h4>
            </Copy>

            <button className="group cursor-pointer">
              <div className="flex items-center gap-3">
                <p className="text-xs relative group overflow-hidden tracking-widest font-medium text-foreground mix-blend-difference">
                  <Copy>
                    <span className="block translate-y-0 group-hover:-translate-y-full transition-transform duration-500 text-xs">
                      LETS TALK
                    </span>
                  </Copy>
                  <span className="block absolute left-0 top-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 text-xs">
                    LETS TALK
                  </span>
                </p>
                <span className="h-10 w-10 rounded-md bg-[#eaffb0] relative overflow-hidden flex items-center justify-center">
                  <span className="absolute inset-0 scale-0 group-hover:scale-100 rounded-md transition-transform origin-top-right duration-500 group-hover:origin-bottom-left bg-[#333333]"></span>
                  <HugeiconsIcon
                    icon={Add01Icon}
                    size={14}
                    className="text-background mix-blend-difference group-hover:rotate-90 duration-300 rotate-0 transition-transform"
                  />
                </span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      <main>
        <section>
          <div className="grid grid-cols-12 gap-x-6 mx-6 h-screen">
            <div className="col-span-full flex flex-col justify-end">
              <div className="flex-1 grid place-items-center">
                <Copy>
                  <p className="text-foreground w-2/3 leading-tight text-[max(2.5rem,4vw)] font-light text-pretty">
                    Creative Developer, <br /> Frontend Expert
                  </p>
                </Copy>
              </div>

              <FluidText
                text="mostofa nobi"
                color="#333333"
                animateOnScroll={false}
              />
            </div>
          </div>
        </section>

        <section className="">
          <div className="grid grid-cols-12 gap-x-6 mx-6">
            <div className="col-span-full">
              <div className="relative sm:left-3/12 sm:w-9/12 my-60">
                <Copy animateOnScroll>
                  <p className="text-foreground leading-tight text-[max(2.5rem,4vw)] font-light text-pretty">
                    With 10 years under our belt, we’re experts at crafting —
                    memorable websites and brand visuals that reflect each
                    client’s unique story.
                  </p>
                </Copy>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-foreground text-background">
          <div className="px-6 pt-10 pb-60">
            <div className="mb-40 border-t border-[hsla(0,0%,50%,.3)]">
              <div className="flex items-center gap-3 mt-5 mb-20">
                <div className="h-1.5 w-1.5 rounded-full bg-background/50"></div>
                <Copy>
                  <p className="uppercase text-xs text-background/50">
                    Projects
                  </p>
                </Copy>
              </div>

              <Copy>
                <h1 className="text-[max(2.5rem,5vw)] leading-none font-light">
                  Discover the projects <br /> of my expertise
                </h1>
              </Copy>
            </div>

            <div className="space-y-64">
              <div>
                <div className="w-2/4 aspect-[9/12] rounded-lg overflow-hidden relative">
                  <Image
                    src="/images/mock.jpg"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex justify-between mt-4">
                  <h3 className="text-2xl font-light text-background/70 max-w-sm">
                    Falcon — Top Bootstrap Admin Template and Dashboard
                  </h3>
                </div>
              </div>

              <div className="w-2/3 ml-auto aspect-video rounded-lg overflow-hidden relative">
                <Image
                  src="/images/mock3.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              <div className="w-full ml-auto aspect-video rounded-lg overflow-hidden relative">
                <Image
                  src="/images/mock2.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              <div className="w-3/4 aspect-video rounded-lg overflow-hidden relative">
                <Image
                  src="/images/mock4.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <div className="h-screen "></div>
      </main>

      <Footer />

      {/* <div className="my-40"></div>

      <div className="mt-20">
        <h1 className="text-7xl font-extralight">
          Creative fullstack <br /> developer{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 8"
            className="size-2 text-white h-2 w-2"
          >
            <path
              d="M4 0v8M8 4H0"
              stroke="currentColor"
              stroke-width="1"
            ></path>
          </svg>
        </h1>
      </div>

      <Contact />

      <div className="h-screen"></div> */}
    </div>
  );
}
