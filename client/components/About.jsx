import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

function About() {
  const angle = <FontAwesomeIcon icon={faAngleDoubleRight} />;
  return (
    <div className="py-5">
      <div className="flex py-5 justify-around mx-auto md:w-11/12 px-5 md:px-10">
        <img
          src="/images/aboutimg.jpg"
          className="rounded-3xl mx-auto w-1/3 self-end hidden lg:block object-cover"
        />
        <div className="flex flex-col justify-center self-center space-y-6 lg:px-20">
          <div className="space-y-2">
            <span className="mini-header block mx-auto w-fit">About Us</span>
            <h1 className="header text-center">
              Who we <span className="text-deepGreen">Are</span>?
            </h1>
          </div>
          <p className="md:text-lg ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos aliquam a, beatae nesciunt animi mollitia et? Molestias
            quidem dolorem suscipit consequuntur praesentium molestiae, quam
            quas consectetur sapiente explicabo, atque delectus. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Dolorum, nemo ipsam
            asperiores, cum
          </p>
          <Link href="" className="text-deepGreen">
            Learn More {angle}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
