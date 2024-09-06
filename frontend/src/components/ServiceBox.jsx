import React, { useState } from "react";
import ServiceBoxPointer from "../assets/ServiceBoxPointer.svg";
import ServiceBoxArrow from "../assets/ServiceBoxArrow.svg";

export const ServiceBox = ({ service, content, bgimg, key }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative rounded-lg p-8 text-white 2xl:w-[31%] xl:w-[28%] lg:w-[30%] md:w-[40%] sm:w-[70%] mx-auto flex flex-col gap-4 backdrop-blur-xl  bg-gray-950/70 shadow-inner overflow-hidden border-2 border-[#EBB840] "
      key={key}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image Transition with Tailwind CSS and Inline Styles */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          isHovered ? "opacity-40" : "opacity-0"
        }`}
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="relative z-10 flex items-center justify-between">
        <img
          src={ServiceBoxPointer}
          alt="Pointer Icon"
          className={`transition-all duration-300 ${
            isHovered ? "grayscale" : "grayscale-0"
          }`}
        />
        <h2 className="2xl:text-lg 2xl:font-extrabold md:text-lg text-lg font-bold 2xl:px-5 xl:px-3 text-center">
          {service}
        </h2>
        <img
          src={ServiceBoxArrow}
          alt="Arrow Icon"
          className={`transition-all duration-300 ${
            isHovered ? "grayscale" : "grayscale-0"
          }`}
        />
      </div>
      <ul className="space-y-4 md:px-1 px-4 z-10 opacity-100 ">
        <li>
          <p className="xl:text-base text-pretty md:text-sm text-sm ">{content}</p>
        </li>
      </ul>
    </div>
  );
};
