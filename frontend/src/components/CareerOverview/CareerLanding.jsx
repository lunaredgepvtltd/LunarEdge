import React from "react";
import bgCareer3 from "./bgLandingPage.png";

const CareerLanding = () => {
  return (
    <div className="relative flex flex-col items-center justify-center  h-[600px] md:h-screen overflow-hidden bg-white dark:bg-black z-0">
    
      <img
        src={bgCareer3}
        alt="Half Moon"
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{
          zIndex: -1,
        }}
      />
      <div className="flex flex-col items-center justify-center gap-4 md:gap-6 lg:gap-8">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-base text-black mt-[28%] md:mt-[8%] ">
          Join Our Team
        </h1>

        <h2 className="text-2xl md:text-3xl lg:text-5xl font-normal mt-5 md:mt-10 text-black ">
          Why work with us?
        </h2>

        <p className="text-black dark:text-white text-md md:text-2xl lg:text-3xl font-normal text-center w-[88%]  md:w-[80%] mt-[24%] md:mt-16 lg:px-2 lg:mt-[12%]">
          At LunarEdge we believe in empowering creativity, fostering
          innovation, and driving success. Join a collaborative environment
          where your ideas matter
        </p>
      </div>
    </div>
  );
};

export default CareerLanding;
