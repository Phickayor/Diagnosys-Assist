import React from "react";
import servicesList from "../utils/services.json";
function Services() {
  return (
    <div className="min-h-screen mx-auto md:w-11/12 px-5 md:px-10">
      <h1 className="text-4xl  font-semibold text-center py-10">
        What We <span className="text-green-500">Do</span>?
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 my-10 gap-10">
        {servicesList.map((service, index) => (
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            key={index}
            className="bg-green-700 shadow-white shadow-inner text-white rounded-3xl p-5 h-full self-center"
          >
            <img
              src="https://images.pexels.com/photos/2324837/pexels-photo-2324837.jpeg?auto=compress&cs=tinysrgb&w=4000"
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
      </div>
    </div>
  );
}

export default Services;
