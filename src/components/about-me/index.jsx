import Image from "next/image";
import ContactBtns from "./contact-btns";

const AboutMe = () => {
  return (
    <div
      data-card
      className="relative bg-neutral-200 shrink-0 max-w-115 w-full h-full overflow-hidden rounded-4xl"
    >
      <div className="absolute z-20 left-1/2 -translate-x-1/2 top-0">
        <p className="z-10 uppercase text-xs font-medium absolute font-mono left-1/2 top-1/2 -translate-1/2 flex items-center gap-2.5">
          ABOUT ME
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
      <div className="scrollbar-none bg-fg h-full w-full overflow-y-auto">
        <div>
          <div className="h-16" />

          <div className="px-5 mb-15">
            <div className="relative w-full aspect-[1/1.3] rounded-4xl overflow-hidden">
              <Image
                src="./images/me.jpeg"
                fill
                alt="Mostofa nobi"
                className="object-cover object-top"
              />

              <div className="absolute h-2/3 w-full bottom-0 left-0 bg-linear-to-t from-foreground to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-2">
                <div className="w-full rounded-4xl backdrop-blur bg-white/10 text-white border border-white/10 saturate-120 shadow-[inset_2px_2px_3px_-1px_#ffffff70,inset_-2px_-2px_3px_-1px_#ffffff70,inset_0_0_16px_#ffffff50,0_4px_12px_-2px_#ffffff40] pt-8 pb-4 px-6 flex flex-col justify-between gap-8">
                  <div className="">
                    <h4 className="text-3xl font-sans mb-3">Mostofa Nobi</h4>
                    <p className="text-sm opacity-70">
                      Over 4 years of experience as Frontend Developer building,
                      and deploying enterprise-grade web applications.
                    </p>
                  </div>

                  <ContactBtns />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-15 mb-15 px-5">
            <div className="flex flex-col justify-center gap-4">
              <p className="uppercase font-mono text-xs font-medium text-foreground/60 flex items-center gap-4">
                Role <span className="flex-1 h-px bg-black/10"></span>
              </p>

              <p className="">
                <span className="font-medium">Frontend Developer</span> -
                Crafting fast, scalable, and accessible web applications with
                React, Next.js, TypeScript, and modern UI technologies.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <p className="uppercase font-mono text-xs font-medium text-foreground/60 flex items-center gap-4">
                Focus <span className="flex-1 h-px bg-black/10"></span>
              </p>

              <p className="">
                Specializing in modern{" "}
                <span className="font-medium">Frontend Development</span> with
                practical experience across the Full-Stack.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <p className="uppercase font-mono text-xs font-medium text-foreground/60 flex items-center gap-4">
                Stack <span className="flex-1 h-px bg-black/10"></span>
              </p>

              <p className="">
                Cursor, Claude Code, React, Next.js, TypeScript, JavaScript,
                Tailwind CSS, MUI, Node.js, Express, Figma and more.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <p className="uppercase font-mono text-xs font-medium text-foreground/60 flex items-center gap-4">
                Experience <span className="flex-1 h-px bg-black/10"></span>
              </p>

              <p className="">
                <span className="font-medium">4+ years</span> building &
                shipping digital products for companies and my own ideas.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <p className="uppercase font-mono text-xs font-medium text-foreground/60 flex items-center gap-4">
                Based in <span className="flex-1 h-px bg-black/10"></span>
              </p>

              <p className="">
                From <span className="font-medium">Bangladesh</span>, to the
                world.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <p className="uppercase font-mono text-xs font-medium text-foreground/60 flex items-center gap-4">
                Age <span className="flex-1 h-px bg-black/10"></span>
              </p>

              <p className="">
                <span className="font-medium">
                  {new Date().getFullYear() - 1998}+
                </span>{" "}
                years old
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
