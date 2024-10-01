import React from "react";
import OurVisionVidio from "../assets/OurVisionVidio.mp4";
const OurVision = () => {
  return (
    <div className="h-[600px] w-full flex px-9">
      <div className="w-[50%]  relative flex items-center justify-center">
        <video className=" h-full w-full object-cover" loop muted autoPlay>
          <source src={OurVisionVidio} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute text-white text-4xl font-bold w-[60%] text-center rounded-lg">
          Customer Centric Approach
        </div>
      </div>

      <div className="w-[50%] h-[80%] text-3xl flex flex-col font-light justify-evenly pl-6">
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
