import React from "react";
import servicesList from "../utils/services.json"
function Services() {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center my-8">Services</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-8 mx-auto gap-4 md:w-11/12">
        {servicesList.map((service, index) => (
          <div className="cursor-pointer">
            <img
              className="h-auto max-w-full rounded-3xl "
              src="/images/aboutimg.jpg"
              alt=""
            />
            <h1 className="text-center text-lg lg:text-2xl my-2 font-semibold ">
              {service.service} <br />
              {service.description}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
