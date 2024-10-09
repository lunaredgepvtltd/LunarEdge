import React from "react";
import OurVisionVidio from "./OurVisionVidio.mp4";
const OurVision = () => {
  return (
    <div className="h-[600px]  w-[95%] mx-auto flex md:flex-row flex-col-reverse px-4 md:px-9 bg-white dark:bg-black">
      <div className="md:w-[50%] w-full  relative flex items-center justify-center">
        <video className=" h-full w-full object-cover opacity-75" loop muted autoPlay>
          <source src={OurVisionVidio} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute text-black dark:text-white md:text-5xl text-2xl font-semibold md:w-[80%] w-[80%] text-center rounded-lg">
          Customer Centric Approach
        </div>
      </div>

      <div className="md:w-[50%]  w-full  h-[23%] md:h-[90%]  xl:text-5xl lg:text-4xl dark:text-white md:text-3xl px-[3%] text-sm flex flex-col font-normal justify-evenly ">
        <span className="font-light md:text-4xl text-lg">OUR VISION</span>
        <p className="text-left w-[90%] leading-tight">
          {" "}
          To be a global leader in IT services, recognized for our innovation,
          customer-centric approach, and unwavering commitment to quality.
        </p>
        {/* <p className="text-left">
        To be a global leader in IT services, recognized for our innovation,
        customer-centric approach, and unwavering commitment to quality.
      </p> */}
      </div>
    </div>
  );
};

export default OurVision;
