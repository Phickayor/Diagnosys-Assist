import React from "react";

function Hero() {
  return (
    <div className="flex justify-between gap-x-10 h-fit">
      <div className="w-3/5 flex px-5 flex-col space-y-4 justify-center">
        <h1 className="text-5xl leading-[4rem]">
          Empowering <span className="text-blue-500">Health</span>, One{" "}
          <span className="text-blue-500">Connection</span> at a{" "}
          <span className="text-blue-500">Time</span>.
        </h1>
        <p className="text-2xl">
          We provide seamless healthcare services at{" "}
          <span className="text-blue-500">Diagnosys Assist</span>.
        </p>
        <button className="rounded-xl hover:bg-blue-600 font-semibold text-lg bg-blue-500 text-white w-fit mx-5 py-2 px-10">Try Now</button>
      </div>
      <img
        className="rounded-3xl mx-auto w-2/5 h-[28rem]  object-cover"
        src="/images/heroimg.jpg"
      />
    </div>
  );
}

export default Hero;
