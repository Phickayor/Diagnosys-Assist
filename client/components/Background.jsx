import React from 'react'

function Background() {
  return (
    <div className="fixed h-screen w-screen opacity-50 -z-10 flex flex-col justify-between">
      <div className="mx-auto w-full lg:w-3/5 h-24 lg:h-36 bg-gradient-to-r from-[#3F64E9]/20 from-[#3F64E9] via-[#E93F3F] lg:to-[#FFB800]/20 to-[#FFB800] backdrop-blur blur-md rounded-b-[50%]"></div>
      <div className="mx-auto w-full lg:w-3/5 h-24 lg:h-36 bg-gradient-to-r from-[#3F64E9]/20 from-[#3F64E9] via-[#E93F3F] lg:to-[#FFB800]/20 to-[#FFB800] backdrop-blur blur-md rounded-t-[50%]"></div>
    </div>
  );
}

export default Background