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

      <div className="flex flex-wrap gap-3 p-4">
        <ServiceBox service="Web Development" content="We provide end-to-end custom software development, from initial concept to final deployment. Our solutions are scalable and tailored to meet your business needs, ensuring alignment with your strategic objectives for optimal performance.to meet your business needs, ensuring alignment with your strategic ob."/>
        <ServiceBox service="Web Development" content="We provide end-to-end custom software development, from initial concept to final deployment. Our solutions are scalable and tailored to meet your business needs, ensuring alignment with your strategic objectives for optimal performance.to meet your business needs, ensuring alignment with your strategic ob."/>
        <ServiceBox service="Web Development" content="We provide end-to-end custom software development, from initial concept to final deployment. Our solutions are scalable and tailored to meet your business needs, ensuring alignment with your strategic objectives for optimal performance.to meet your business needs, ensuring alignment with your strategic ob."/>
        <ServiceBox service="Web Development" content="We provide end-to-end custom software development, from initial concept to final deployment. Our solutions are scalable and tailored to meet your business needs, ensuring alignment with your strategic objectives for optimal performance.to meet your business needs, ensuring alignment with your strategic ob."/>
        <ServiceBox service="Web Development" content="We provide end-to-end custom software development, from initial concept to final deployment. Our solutions are scalable and tailored to meet your business needs, ensuring alignment with your strategic objectives for optimal performance.to meet your business needs, ensuring alignment with your strategic ob."/>
        <ServiceBox service="Web Development" content="We provide end-to-end custom software development, from initial concept to final deployment. Our solutions are scalable and tailored to meet your business needs, ensuring alignment with your strategic objectives for optimal performance.to meet your business needs, ensuring alignment with your strategic ob."/>
        <ServiceBox service="Web Development" content="We provide end-to-end custom software development, from initial concept to final deployment. Our solutions are scalable and tailored to meet your business needs, ensuring alignment with your strategic objectives for optimal performance.to meet your business needs, ensuring alignment with your strategic ob."/>
        <ServiceBox service="Web Development" content="We provide end-to-end custom software development, from initial concept to final deployment. Our solutions are scalable and tailored to meet your business needs, ensuring alignment with your strategic objectives for optimal performance.to meet your business needs, ensuring alignment with your strategic oe."/>
        <ServiceBox service="Web Development" content="We provide end-to-end custom software development, from initial concept to final deployment. Our solutions are scalable and tailored to meet your business needs, ensuring alignment with your strategic objectives for optimal performance.to meet your business needs, ensuring alignment with your strategic ob."/>
      </div>
    </>
  );
};

export default Services;
