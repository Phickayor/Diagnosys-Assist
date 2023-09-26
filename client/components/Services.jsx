import React from "react";
import servicesList from "../utils/services.json";
function Services() {
  return (
    <div className="min-h-screen mx-auto md:w-11/12 px-5 py-4 md:px-10">
      <div className="space-y-2">
        <h1 className="md:text-4xl text-3xl font-semibold text-center ">
          What we <span className="text-deepGreen">Do</span>?
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 my-10 gap-10">
        {servicesList.map((service, index) => (
          <div
            key={index}
            className="bg-green-700 shadow-white shadow-inner text-white rounded-3xl p-5 sm:h-full h-fit self-center"
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
