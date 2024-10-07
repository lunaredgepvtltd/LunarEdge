import React from "react";
import bgLandingPage from "../assets/bgLandingPage.png";

const NewCareer = () => {
  return (
    <div className="h-full w-full pt-[10%] relative">
      <div
        className={`absolute  inset-0 bg-cover bg-center `}
        style={{ backgroundImage: `url(${bgLandingPage})` }}
      />
      <div className="relative z-10 h-[100%] items-center text-black  xl:w-[100%] lg:w-[50%] md:w-[100%] w-[90%] text-center mx-auto flex flex-col justify-center md:pb-5 md:justify-center gap-[70px] ">
        <h1 className="xl:text-7xl lg:text-5xl md:text-4xl text-4xl font-semibold py-6">
          Join Our Team
        </h1>
        {/* <div className="h-[200px] flex flex-col gap-6 justify-evenly"> */}
        <h3 className="md:text-4xl text-2xl ">Why work with us ?</h3>
        <span className="flex justify-center text-3xl w-[80%] ">
          At LunarEdge we believe in empowering creativity, fostering
          innovation, and driving success. Join a collaborative environment
          where your ideas matter
        </span>
        {/* </div> */}
      </div>
      {/* <div
        style={{ backgroundImage: `url(${BgServices2})` }}
        className=" bg-cover bg-center h-full"
      > */}
      <div>
        <h1 className="text-4xl">
          Don’t see a position that matches your skills? Send us your resume at
          hr@lunaredge.com. We’d love to hear from you.
        </h1>
      </div>
      {/* </div> */}
    </div>
  );
};

export default NewCareer;
