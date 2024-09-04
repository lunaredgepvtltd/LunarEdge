import React from "react";
import bgServices from "../assets/bgServices.png";
import { ServiceBox } from "../components/ServiceBox";

const Services = () => {
  return (
    <>
      <div className="relative w-full  ">
        <img
          src={bgServices}
          alt="Services Background"
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-7xl font-semibold text-shadow-md-white">
            SERVICES
          </p>
        </div>
      </div>

      {/* <div className="flex">
        <ServiceBox />
        <ServiceBox />
        <ServiceBox />
      </div> */}
    </>
  );
};

export default Services;
