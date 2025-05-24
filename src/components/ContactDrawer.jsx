"use client";

import React, { useEffect, useState } from "react";
import Copy from "./Copy";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowUpRight01Icon,
  Cancel01Icon,
} from "@hugeicons/core-free-icons/index";
import Link from "next/link";

const ContactDrawer = ({ isOpen, onClose }) => {
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);

      // Get current scroll position
      const scrollY = window.scrollY;
      const body = document.body;

      // Lock body scroll and preserve scroll position
      body.style.position = "fixed";
      body.style.top = `-${scrollY}px`;
      body.style.width = "100%";
      body.style.overflow = "hidden";

      return () => {
        // Restore body scroll and original scroll position
        body.style.position = "";
        body.style.top = "";
        body.style.width = "";
        body.style.overflow = "";
        window.scrollTo(0, scrollY);
      };
    } else {
      // Delay unmounting by 1 second when closing
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <div className="relative z-[999999]">
      <div
        className={`fixed inset-0 bg-foreground/70 transition-opacity ease-[cubic-bezier(.22,1,.36,1)] duration-1000 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <div className="fixed inset-0 flex justify-end max-w-full">
            <div
              className={`pointer-events-auto w-full max-w-xl p-2 duration-500 transition-transform sm:duration-1000 ${
                isOpen
                  ? "translate-x-0 ease-[cubic-bezier(.22,1,.36,1)]"
                  : "translate-x-full ease-[cubic-bezier(0.87,0,0.13,1)]"
              }`}
            >
              <div className="flex h-full flex-col overflow-y-scroll rounded-md bg-[#E4E4E4] py-4 shadow-xl">
                <div className="px-4">
                  <div className="flex justify-end">
                    <button onClick={onClose} className="group cursor-pointer">
                      <div className="flex items-center gap-3">
                        <p className="text-xs relative group overflow-hidden tracking-widest font-medium text-foreground">
                          <Copy>
                            <span className="block translate-y-0 group-hover:-translate-y-full transition-transform duration-500 text-xs">
                              CLOSE
                            </span>
                          </Copy>
                          <span className="block absolute left-0 top-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 text-xs">
                            CLOSE
                          </span>
                        </p>
                        <span className="h-10 w-10 rounded-md bg-[#eaffb0] relative overflow-hidden flex items-center justify-center">
                          <span className="absolute inset-0 scale-0 group-hover:scale-100 rounded-md transition-transform origin-top-right duration-500 group-hover:origin-bottom-left bg-[#333333]"></span>
                          <HugeiconsIcon
                            icon={Cancel01Icon}
                            size={14}
                            className="text-background mix-blend-difference group-hover:rotate-90 duration-300 rotate-0 transition-transform"
                          />
                        </span>
                      </div>
                    </button>
                  </div>
                </div>

                {shouldRender && (
                  <div className="px-6 flex flex-col gap-10 py-20 justify-between h-full divide-y divide-[hsla(0,0%,50%,.3)]">
                    <div className="pb-20">
                      <Copy>
                        <h1 className="text-5xl leading-none font-light mb-10">
                          Let&apos;s collaborate, <br /> Get in touch
                        </h1>
                      </Copy>
                      <Link
                        href="mailto:m.mostofanobi@gmail.com"
                        target="_blank"
                        className="group cursor-pointer w-fit inline-block"
                      >
                        <div className="flex items-center gap-3">
                          <span className="h-10 w-10 rounded-md bg-[#eaffb0] relative overflow-hidden flex items-center justify-center">
                            <span className="absolute inset-0 scale-0 group-hover:scale-100 rounded-md transition-transform origin-top-right duration-500 group-hover:origin-bottom-left bg-[#333333]"></span>
                            <HugeiconsIcon
                              icon={ArrowUpRight01Icon}
                              size={20}
                              className="text-background mix-blend-difference"
                            />
                          </span>
                          <p className="relative inline group overflow-hidden tracking-widest font-medium text-foreground">
                            <Copy>
                              <span className="block translate-y-0 rotate-0 group-hover:rotate-6 group-hover:-translate-y-full transition-transform duration-400 text-xs">
                                LET&apos;S TALK
                              </span>
                            </Copy>
                            <span className="block absolute left-0 top-0 rotate-6 group-hover:rotate-0 translate-y-full group-hover:translate-y-0 transition-transform duration-400 text-xs">
                              LET&apos;S TALK
                            </span>
                          </p>
                        </div>
                      </Link>
                    </div>

                    <div>
                      <div className="flex flex-col gap-3 justify-end">
                        <Copy start="top 95%">
                          <Link
                            href="#!"
                            className="text-3xl inline-block relative w-fit text-foreground/70 group"
                          >
                            <span className="absolute h-px w-full left-0 bottom-0.5 bg-foreground group-hover:scale-x-0 scale-x-100 origin-left group-hover:origin-right transition-transform duration-300"></span>
                            Github
                          </Link>
                        </Copy>
                        <Copy delay={0.2} start="top 95%">
                          <Link
                            href="#!"
                            className="text-3xl inline-block relative w-fit text-foreground/70 group"
                          >
                            <span className="absolute h-px w-full left-0 bottom-0.5 bg-foreground group-hover:scale-x-0 scale-x-100 origin-left group-hover:origin-right transition-transform duration-300"></span>
                            Linkedin
                          </Link>
                        </Copy>
                        <Copy delay={0.4} start="top 95%">
                          <Link
                            href="#!"
                            className="text-3xl inline-block relative w-fit text-foreground/70 group"
                          >
                            <span className="absolute h-px w-full left-0 bottom-0.5 bg-foreground group-hover:scale-x-0 scale-x-100 origin-left group-hover:origin-right transition-transform duration-300"></span>
                            Facebook
                          </Link>
                        </Copy>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDrawer;
