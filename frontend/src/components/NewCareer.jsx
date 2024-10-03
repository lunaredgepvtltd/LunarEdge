import React from "react";
import bgLandingPage from "../assets/bgLandingPage.png";
import BgServices2 from "../assets/BgServices2.png";
const NewCareer = () => {
  return (
    <div className="h-screen w-full relative">
      <div
        className={`absolute  inset-0 bg-cover bg-center `}
        style={{ backgroundImage: `url(${bgLandingPage})` }}
      />
      <div className="relative z-10 h-[100%] items-center text-black  xl:w-[44%] lg:w-[50%] md:w-[45%] w-[90%] text-center mx-auto flex flex-col justify-center md:pb-5 md:justify-evenly gap-[70px] ">
        <h1 className="xl:text-7xl lg:text-5xl md:text-4xl text-4xl font-semibold py-6">
          JOIN OUR TEAM
        </h1>
        <div className="h-[200px] flex flex-col gap-6 justify-evenly">
          <h3 className="md:text-3xl text-2xl ">Why work with us ?</h3>
          <span className="flex justify-center ">
            At LunarEdge we believe in empowering creativity, fostering
            innovation, and driving success. Join a collaborative environment
            where your ideas matter
          </span>
        </div>
      </div>
      <div className="bg-[url('../assets/BgServices2.png')] bg-cover bg-center h-full">
        {/* Your content here */}
      </div>
    </div>
  );
};

export default NewCareer;
