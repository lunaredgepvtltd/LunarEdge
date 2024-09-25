import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { BsGlobe2 } from "react-icons/bs";
import sideArrow from "../assets/sideArrow.png";


const Services = () => {
  const services = [
    {
      title: "Web Solutions",
      description:
        "Pride for our company and business. Consider all the drivers.",
    },
    {
      title: "Cloud Solutions",
      description: "Maximize your potential with our cloud offerings.",
    },
    {
      title: "Cybersecurity",
      description: "Protect your data with our advanced security solutions.",
    },
    {
      title: "Consulting Services",
      description: "Expert advice to drive your business forward.",
    },
  ];

  // useEffect(() => {
  //   AOS.init(); // Initialize AOS
  // }, []);

  return (
    <div className="bg-[#edeafa] py-16">
      <div className="w-[80%] mx-auto px-4 sm:px-6 lg:px-8 border">
        <div className="text-center flex justify-between h-[190px]">
          <div className="w-[40%]">
            <div className="flex gap-2">
              <span className="bg-[#58206d] flex items-center text-white rounded-full px-4 py-1 text-md font-semibold">
                OUR
              </span>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Services
              </h2>
            </div>
            <p className="mt-9 text-2xl font-semibold leading-8 w-[80%] text-left">
              WE OFFER A WIDE ARRAY OF SERVICES THAT HELP YOU TO MANAGE YOUR
              BUSINESS NEEDS
            </p>
          </div>

          <img src={sideArrow} alt="" />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 px-[10%] items-center justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="zoom-out-up" // Add AOS animation
              data-aos-duration="500" // Duration of the animation
              data-aos-delay={index * 100} // Staggered delay based on index
              className={`bg-white rounded-lg drop-shadow-2xl shadow-[#242659] overflow-hidden flex flex-col py-9 hover:shadow-2xl hover:shadow-[#a29cc9] transition-all duration-400 ${
                index % 2 === 0 ? "mb-16" : "mt-16"
              }`}
            >
         
              <div className={`flex flex-col px-6`}>
                <BsGlobe2 className="text-3xl text-[#320044]" />
                <h3 className="mt-4 text-xl font-semibold text-gray-900 ">
                  {service.title}
                </h3>
                <p className="mt-2 font-normal">{service.description}</p>
                <a
                  href="/common"
                  className="mt-6 inline-block rounded-md px-4 py-2 font-medium text-[#320044]"
                >
                  Read more{" "}
                  <svg
                    className="inline-block ml-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
