"use client";

import React, { useState } from "react";
import ContactDrawer from "./ContactDrawer";
import Copy from "./Copy";
import { HugeiconsIcon } from "@hugeicons/react";
import { Add01Icon } from "@hugeicons/core-free-icons/index";

const Nav = () => {
  const [isContactDrawerOpen, setIsContactDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsContactDrawerOpen(!isContactDrawerOpen);

  return (
    <nav className="select-none fixed top-0 w-full px-8 z-50">
      <div className="py-6 relative">
        <div className="flex justify-between relative mix-blend-difference">
          <Copy>
            <h4 className="text-xl text-foreground font-medium">
              mostofa nobi
            </h4>
          </Copy>

          <button onClick={toggleDrawer} className="group cursor-pointer">
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

      <ContactDrawer isOpen={isContactDrawerOpen} onClose={toggleDrawer} />
    </nav>
  );
};

export default Nav;
