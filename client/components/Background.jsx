import React from "react";

function Background({ children }) {
  return (
    <div className="min-h-screen min-w-screen  flex flex-col justify-between">
      <div className="fixed mx-auto w-full h-20 lg:h-28 bg-gradient-to-r from-[#3F64E9]/20 via-[#E93F3F] lg:to-[#FFB800]/20 to-[#FFB800] backdrop-blur blur-md rounded-b-[50%]"></div>
      {children}
      <div className="mx-auto w-full h-20 lg:h-28 bg-gradient-to-r from-[#3F64E9]/20 via-[#E93F3F] lg:to-[#FFB800]/20 to-[#FFB800] backdrop-blur blur-md rounded-t-[50%]"></div>
    </div>
  );
}

export default Background;
