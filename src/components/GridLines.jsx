import React from "react";

const GridLines = () => {
  return (
    <div className="fixed z-10 inset-y-0 inset-x-6 pointer-events-none">
      <div className="bg-[hsla(0,0%,50%,.2)] w-px absolute top-0 bottom-0 left-0"></div>
      <div className="bg-[hsla(0,0%,50%,.2)] w-px absolute top-0 bottom-0 left-1/4"></div>
      <div className="bg-[hsla(0,0%,50%,.2)] w-px absolute top-0 bottom-0 left-2/4"></div>
      <div className="bg-[hsla(0,0%,50%,.2)] w-px absolute top-0 bottom-0 right-1/4"></div>
      <div className="bg-[hsla(0,0%,50%,.2)] w-px absolute top-0 bottom-0 right-0"></div>
    </div>
  );
};

export default GridLines;
