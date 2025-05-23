import React from "react";

const PageBottomBlur = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-end fixed w-full top-0 left-0 overflow-hidden pointer-events-none z-[9999]">
      <div className="relative z-[9] h-48.5 w-full">
        <div className="relative h-full w-full">
          <div className="absolute z-[1] inset-0 pointer-events-none backdrop-blur-[0.5px] mask-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_12.5%,rgba(0,0,0,1)_25%,rgba(0,0,0,0)_37.5%)]"></div>
          <div className="absolute z-[2] inset-0 pointer-events-none backdrop-blur-[0.6px] mask-[linear-gradient(to_bottom,rgba(0,0,0,0)_12.5%,rgba(0,0,0,1)_25%,rgba(0,0,0,1)_37.5%,rgba(0,0,0,0)_50%)]"></div>
          <div className="absolute z-[3] inset-0 pointer-events-none backdrop-blur-[1.25px] mask-[linear-gradient(to_bottom,rgba(0,0,0,0)_25%,rgba(0,0,0,1)_37.5%,rgba(0,0,0,1)_50%,rgba(0,0,0,0)_62.5%)]"></div>
          <div className="absolute z-[4] inset-0 pointer-events-none backdrop-blur-[2.25px] mask-[linear-gradient(to_bottom,rgba(0,0,0,0)_37.5%,rgba(0,0,0,1)_50%,rgba(0,0,0,1)_62.5%,rgba(0,0,0,0)_75%)]"></div>
          <div className="absolute z-[5] inset-0 pointer-events-none backdrop-blur-[4.5px] mask-[linear-gradient(to_bottom,rgba(0,0,0,0)_50%,rgba(0,0,0,1)_62.5%,rgba(0,0,0,1)_75%,rgba(0,0,0,0)_87.5%)]"></div>
          <div className="absolute z-[6] inset-0 pointer-events-none backdrop-blur-[9px] mask-[linear-gradient(to_bottom,rgba(0,0,0,0)_62.5%,rgba(0,0,0,1)_75%,rgba(0,0,0,1)_87.5%,rgba(0,0,0,0)_100%)]"></div>
          <div className="absolute z-[7] inset-0 pointer-events-none backdrop-blur-[18px] mask-[linear-gradient(to_bottom,rgba(0,0,0,0)_75%,rgba(0,0,0,1)_87.5%,rgba(0,0,0,1)_100%)]"></div>
          <div className="absolute z-[8] inset-0 pointer-events-none backdrop-blur-[36px] mask-[linear-gradient(to_bottom,rgba(0,0,0,0)_87.5%,rgba(0,0,0,1)_100%)]"></div>
        </div>
      </div>
    </div>
  );
};

export default PageBottomBlur;
