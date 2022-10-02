import React from "react";

const Fallback = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-8 aspect-square h-auto p-2 border-4 border-[#fc3986] border-t-[rgba(0,0,0,0.3)] border-l-[rgba(0,0,0,0.3)] rounded-full animate-spin"></div>
    </div>
  );
};

export default Fallback;
