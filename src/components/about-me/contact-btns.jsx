"use client";

import {
  ClipboardIcon,
  GithubIcon,
  Linkedin01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";

const ContactBtns = () => {
  const [copy, setCopy] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("m.mostofanobi@gmail.com");
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };

  return (
    <div className="flex gap-3">
      <button
        onClick={handleCopy}
        className="cursor-pointer h-16 flex-1 rounded-full backdrop-blur-none bg-neutral-200 hover:bg-background hover:-translate-y-1 transition-all text-foreground font-medium flex gap-2 justify-center items-center"
      >
        <HugeiconsIcon icon={ClipboardIcon} />{" "}
        {copy ? "Email Copied" : "Copy Email"}
      </button>
      <a
        href="https://linkedin.com/in/mostofanobi/"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer size-16 rounded-full shrink-0 bg-white/10 hover:bg-white/20 hover:-translate-y-1 transition-all text-white border border-white/10 saturate-120 flex items-center justify-center"
      >
        <HugeiconsIcon icon={Linkedin01Icon} />
      </a>
      <a
        href="https://github.com/mostofanobi/"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer size-16 rounded-full shrink-0 bg-white/10 hover:bg-white/20 hover:-translate-y-1 transition-all text-white border border-white/10 saturate-120 flex items-center justify-center"
      >
        <HugeiconsIcon icon={GithubIcon} />
      </a>
    </div>
  );
};

export default ContactBtns;
