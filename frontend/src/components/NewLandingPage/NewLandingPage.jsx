import React from "react";
// import hawaMahal from "../assets/hawaMahal.png";
import textimage from "./textimage.png";
import smallAboutMoon from "./smallAboutMoon.png";
import aboutMoon from "./aboutMoon.png";
import aboutHead from "./aboutHead.png";
import { useMediaQuery } from "react-responsive";

const NewLandingPage = () => {
  const isExtraSmallDevice = useMediaQuery({ maxWidth: 699 });

  return (
<>
<div id="aboutUs" className="h-[90px] w-full hidden lg:block"></div>
<div  className="relative w-full  dark:text-white  lg:h-screen h-[415px] flex">
      <div className=" md:w-[52%] xl:w-[44%] w-[100%] relative h-[375px]  md:h-full">
        <img
          src={`${isExtraSmallDevice ? smallAboutMoon : aboutMoon}`}
          alt="Picture of Moon"
          className="absolute -left-[78%] md:-left-[66%] lg:-left-[64%] xl:-left-[66%] md:h-[95%] lg:h-[85%] xl:h-[95%] h-full w-full  animate-spin-slow"
        />
      </div>

      <div className="z-10 absolute left-[23%] md:left-[19%] lg:left-[23%] top-[9%] w-[74%] md:w-[75%] h-auto lg:h-full lg:flex items-start gap-4">
        <div className="w-full lg:w-[50%] h-full md:h-[63%] flex flex-col gap-5 xl:mt-6">
          <h1 className=" text-left text-3xl font-medium ">ABOUT US</h1>
          <p className="text-left font-normal text-[14px] md:text-lg xl:text-2xl">
            Founded with a vision to drive smart innovation, our mission is to
            bridge the gap between technology and human potential, empowering
            businesses to reach new heights.
          </p>
          <p className=" text-left font-normal text-[14px] md:text-lg xl:text-2xl">
            Our tagline,{" "}
            <span className="italic">“Smart Innovation Meets Infinity”</span>,
            reflects our commitment to endless possibilities and our pursuit of
            excellence in every project we undertake. Whether it’s developing
            cutting-edge software solutions or providing strategic IT
            consulting, we are dedicated to delivering results that exceed
            expectations.
          </p>
        </div>
        <div className=" hidden w-[60%] h-[80%] text-right lg:flex justify-center  items-start mt-6">
          <img
            src={aboutHead}
            alt="Picture of tagline"
            className="hidden lg:block w-[60%] h-[65%]"
          />
        </div>
        
      </div>
    </div></>
  );
};

export default NewLandingPage;
