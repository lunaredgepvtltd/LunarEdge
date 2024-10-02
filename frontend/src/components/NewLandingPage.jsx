import React from "react";
// import hawaMahal from "../assets/hawaMahal.png";
import textimage from "../assets/textimage.png";

import aboutMoon from "../assets/aboutMoon.png";
import aboutHead from "../assets/aboutHead.png";

const NewLandingPage = () => {
  return (
    <div className="relative  w-full h-screen flex">
    <div className="w-[44%] relative  h-full">
    <img
  src={aboutMoon}
  alt="Picture of Moon"
  className="absolute -left-[53%] h-[95%] w-full  animate-spin-slow"
/>
    </div>

    <div className="absolute left-[20%] w-[80%] h-full p-8 flex items-center gap-4">
      <div className="w-[50%]  h-[60%] flex flex-col gap-5">
      <h1 className=" text-left text-3xl font-normal ">ABOUT US</h1>
          <p className="text-left font-light text-lg">
            Founded with a vision to drive smart innovation, our mission is to
            bridge the gap between technology and human potential, empowering
            businesses to reach new heights.
          </p>
          <p className=" text-left font-light  text-lg">
            Our tagline,{" "}
            <span className="italic">“Smart Innovation Meets Infinity”</span>,
            reflects our commitment to endless possibilities and our pursuit of
            excellence in every project we undertake. Whether it’s developing
            cutting-edge software solutions or providing strategic IT
            consulting, we are dedicated to delivering results that exceed
            expectations.
          </p>
        </div>
        <div className="w-[60%] h-[80%] text-right  flex justify-center items-center">
          <img
            src={aboutHead}
            alt="Picture of tagline"
            className="hidden lg:block w-[60%] h-[80%]"
          />
        </div>
              
      </div>
    </div>
  );
};

export default NewLandingPage;
