import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Hero() {
  const angle = <FontAwesomeIcon icon={faAngleDoubleRight} />;
  return (
    <div className="pt-10 h-screen flex flex-col justify-center mx-auto md:w-11/12">
      <div className="grid lg:grid-cols-2 gap-y-10 lg:gap-y-0">
        <div className="order-2 lg:order-1 self-center px-5 md:px-10 space-y-5">
          <h1 className="text-2xl md:text-4xl md:leading-[3rem] xl:text-5xl font-semibold xl:leading-[4rem]">
            Empowering <span className="text-deepGreen">Health</span> one
            Connection at a <span className="text-deepGreen">time</span>.
          </h1>
          <p className="text-lg lg:leading-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
            iste quos veritatis et.
          </p>
          <button className="hover:scale-105 duration-200 font-medium rounded-md bg-green-600 text-white px-4 py-2.5">
            Explore {angle}
          </button>
        </div>
        <div class="self-center order-1 lg:order-2 px-5 md:px-10">
          <img
            src="/images/hero.jpeg"
            className="object-cover max-h-56 md:max-h-72 xl:max-h-96 rounded-3xl w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
