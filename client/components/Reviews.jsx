import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  faArrowLeft,
  faArrowRight,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import reviewsList from "../utils/reviews.json";
import { useState } from "react";
function Reviews() {
  const [slidesByScroll, setSlidesByScroll] = useState(null);
  const [numberOfSlides, setNumberOfSlides] = useState(null);
  const nextButton = useRef(null);
  const prevButton = useRef(null);
  function handleScreenSizeChange() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      setNumberOfSlides(1);
      setSlidesByScroll(1);
    } else {
      setNumberOfSlides(2);
      setSlidesByScroll(2);
    }
  }

  useEffect(() => {
    handleScreenSizeChange();
    window.addEventListener("resize", handleScreenSizeChange);
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: numberOfSlides,
    slidesToScroll: slidesByScroll,
    autoplay: true,
    speed: 500
    // nextArrow: nextButton.current
  };

  return (
    <div id="reviews" className="mx-auto md:w-11/12 py-5 md:py-10">
      <div className="font-rubik text-head px-5 md:px-10 my-5 space-y-5">
        <p className="inline-block mini-header">Testimonials</p>
        <div className="md:flex justify-between">
          <h1 className="header">What Our Customers Say</h1>
          <div className="flex lg:space-x-10 justify-between">
            <FontAwesomeIcon
              icon={faArrowLeft}
              ref={prevButton}
              className="hover:bg-green-500 hover:text-slate-100 cursor-pointer text-2xl p-2.5 rounded-full text-black bg-slate-300"
            />
            <FontAwesomeIcon
              icon={faArrowRight}
              ref={nextButton}
              className="hover:bg-green-500 hover:text-slate-100 cursor-pointer text-2xl p-2.5 rounded-full text-black bg-slate-300"
            />
          </div>
        </div>
      </div>
      <Slider {...settings}>
        {reviewsList.map((review, index) => {
          return index % 2 !== 0 ? (
            <div
              className="md:w-1/2 bg-gray-100 p-10 rounded-3xl md:rounded-l-none"
              key={index}
            >
              <div className="flex justify-between">
                <div className="flex space-x-2">
                  <div className="self-center">
                    <h3 className="font-semibold text-xl">{review.name}</h3>
                    <p className="text-sm">{review.service}</p>
                  </div>
                </div>
              </div>
              <p className="py-4 text-lg">{review.review}</p>
              <div className="flex pt-5 space-x-2">
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
              </div>
            </div>
          ) : (
            <div
              className="md:w-1/2 bg-green-900 text-white p-10 w-full rounded-3xl md:rounded-r-none"
              key={index}
            >
              <div className="flex justify-between">
                <div className="flex space-x-2">
                  <div className="self-center">
                    <h3 className="font-semibold text-xl">{review.name}</h3>
                    <p className="font-normal text-sm">{review.service}</p>
                  </div>
                </div>
              </div>
              <p className="py-4 text-lg">{review.review}</p>
              <div className="flex pt-5 space-x-2">
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
              </div>
            </div>
          );
        })}
      </Slider>
      <div className="md:flex md:pt-10 pt-5 md:pb-20 pb-10 w-11/12 md:w-10/12 lg:w-9/12 mx-auto"></div>
    </div>
  );
}

export default Reviews;
