import Link from "next/link";
import React from "react";

function About() {
  return (
    <div className="flex gap-x-5">
      <img
        src="/images/aboutimg.jpg"
        className="rounded-3xl mx-auto w-1/3 object-cover"
      />
      <div className="p-5 px-10 flex flex-col justify-center space-y-4">
        <h1 className="text-3xl font-semibold">About Us</h1>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure natus
          sint ab velit dolores ipsum dolore, fugiat culpa obcaecati aliquam
          pariatur ipsa eum dolor cupiditate, magni eaque neque facilis nulla!
        </p>
        <Link
          href="about"
          className="m-2 rounded-xl hover:bg-blue-600 font-medium text-lg bg-blue-500 text-white w-fit  py-2 px-5"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default About;
