import React from "react";

const PlusSvg = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 8 8"
      className={`w-2 h-2 ${className}`}
    >
      <path d="M4 0v8M8 4H0" stroke="currentColor" strokeWidth="1"></path>
    </svg>
  );
};

export default PlusSvg;
