import React, { useState } from "react";
import ServiceBoxPointer from "../assets/ServiceBoxPointer.svg";
import ServiceBoxArrow from "../assets/ServiceBoxArrow.svg";
import bgServiceBox from "../assets/bgServiceBox.png"; // Ensure this path is correct

export const ServiceBox = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative rounded-lg p-8 text-white w-[20%] mx-auto flex flex-col gap-4 bg-gray-800 shadow-inner"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundImage: isHovered ? `url(${bgServiceBox})` : 'none',
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 flex items-center justify-between">
        <img 
          src={ServiceBoxPointer} 
          alt="Pointer Icon" 
          // className={`transition-all duration-300 ${isHovered ? 'grayscale' : 'grayscale-0'}`} 
        />
        <img 
          src={ServiceBoxArrow} 
          alt="Arrow Icon" 
          // className={`transition-all duration-300 ${isHovered ? 'grayscale' : 'grayscale-0'}`} 
        />
      </div>
      <h2 className="text-2xl font-bold">
        Website Development
      </h2>
      <ul className="list-disc space-y-4 px-5">
        <li>WORDPRESS WEB DEVELOPMENT</li>
        <li>DYNAMIC CMS-BASED DEVELOPMENT</li>
        <li>MOBILE APP DEVELOPMENT</li>
        <li>E-COMMERCE</li>
        <li>DOMAIN</li>
      </ul>
      
    </div>
  );
};
