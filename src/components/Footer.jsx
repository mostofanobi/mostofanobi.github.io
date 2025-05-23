import React from "react";
import Copy from "./Copy";
import Link from "next/link";
import FluidText from "./FluidText";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons/index";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="bg-[#E4E4E4]">
      <div className="pt-30 px-6 mb-10">
        <div className="mb-20">
          <Copy>
            <h1 className="text-[max(2.5rem,5vw)] leading-none font-light mb-10">
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

        <div className="flex justify-between items-center pt-4 border-t border-[hsla(0,0%,50%,.3)]">
          <Copy start="top 95%">
            <p className="text-foreground/70">Folio @{date.getFullYear()}</p>
          </Copy>
          <div className="flex gap-10 justify-end">
            <Copy start="top 95%">
              <Link
                href="#!"
                className="relative font-normal text-foreground/70 group"
              >
                <span className="absolute h-px w-full left-0 bottom-0.5 bg-foreground group-hover:scale-x-0 scale-x-100 origin-left group-hover:origin-right transition-transform duration-300"></span>
                Github
              </Link>
            </Copy>
            <Copy delay={0.2} start="top 95%">
              <Link
                href="#!"
                className="relative font-normal text-foreground/70 group"
              >
                <span className="absolute h-px w-full left-0 bottom-0.5 bg-foreground group-hover:scale-x-0 scale-x-100 origin-left group-hover:origin-right transition-transform duration-300"></span>
                Linkedin
              </Link>
            </Copy>
            <Copy delay={0.4} start="top 95%">
              <Link
                href="#!"
                className="relative font-normal text-foreground/70 group"
              >
                <span className="absolute h-px w-full left-0 bottom-0.5 bg-foreground group-hover:scale-x-0 scale-x-100 origin-left group-hover:origin-right transition-transform duration-300"></span>
                Facebook
              </Link>
            </Copy>
          </div>
        </div>
      </div>

      <FluidText text="mostofa" animateOnScroll />
    </footer>
  );
};

export default Footer;
