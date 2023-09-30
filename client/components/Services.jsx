import React, { useEffect, useState } from "react";
import servicesList from "../utils/services.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Services() {
  const [numberOfSlides, setNumberOfSlides] = useState(null);

  function handleScreenSizeChange() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
      setNumberOfSlides(1);
    } else if (screenWidth >= 768 && screenWidth < 1024) {
      setNumberOfSlides(2);
    } else {
      setNumberOfSlides(3);
    }
  }

  useEffect(() => {
    handleScreenSizeChange();
    window.addEventListener("resize", handleScreenSizeChange);
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: numberOfSlides,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500
  };

  return (
    <div className="mx-auto lg:w-11/12 px-5 py-4 lg:px-10">
      <div className="space-y-2">
        <span className="mini-header block mx-auto w-fit">Our Services</span>
        <h1 className="header text-center ">
          What we <span className="text-deepGreen">Do</span>?
        </h1>
      </div>
      <Slider {...settings} className="my-4">
        {servicesList.map((service, index) => (
          <div
            key={index}
            className="bg-green-700 text-white rounded-3xl p-5 h-[24rem]" // Add mr-4 for spacing between slides
          >
            <img
              src="/images/demo.jpeg"
              alt={service.name}
              className="h-36 rounded-2xl w-full object-cover"
            />
            <div className="space-y-4 my-5">
              <h1 className="text-xl font-semibold">{service.name}</h1>
              <p>{service.desc}</p>
              <div className="flex space-x-5">
                <button className="hover:scale-105 duration-200 font-medium rounded-md bg-white text-green-500 hover:bg-green-600 hover:text-white px-6 py-1">
                  Try it
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Services;
