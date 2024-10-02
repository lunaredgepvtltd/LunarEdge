import React from "react";
import OurVisionVidio from "../assets/OurVisionVidio.mp4";
const OurVision = () => {
  return (
    <div className="h-[600px] w-full flex md:flex-row flex-col px-4 md:px-9">
      <div className="md:w-[50%] w-full  relative flex items-center justify-center">
        <video className=" h-full w-full object-cover" loop muted autoPlay>
          <source src={OurVisionVidio} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute text-white md:text-4xl text-2xl font-bold md:w-[60%] w-[80%] text-center rounded-lg">
          Customer Centric Approach
        </div>
      </div>

      <div className="md:w-[50%]  w-full h-[80%] md:text-3xl text-sm flex flex-col font-light justify-evenly md:pl-6">
        <span className="">OUR VISION</span>
        <p className="text-left ">
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
