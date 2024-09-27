import React from "react";
import hawaMahal from "../assets/hawaMahal.png";
import textimage from "../assets/textimage.png";

const NewLandingPage = () => {
  return (
    <div className="bg-custom-gradient h-screen  pt-[4%] md:pt-[5%]  flex flex-col md:justify-evenly justify-center">
      <h1 className="md:block hidden text-center text-4xl font-normal">ABOUT US</h1>
      <div className="h-auto  flex md:flex-row flex-col md:gap-0 gap-3 justify-evenly items-center">
        <img
          src={hawaMahal}
          alt="Picture of HawaMahal"
          className=" lg:h-[90%] lg:w-[20%] md:h-[70%] md:w-[30%] h-[55%] w-[55%]"
        />
        <h1 className="block md:hidden text-center text-xl font-normal">ABOUT US</h1>
        <div className="md:w-[33%] w-[80%] xl:space-y-8 md:space-y-4 space-y-1 text-xl font-normal ">
          <p className="hidden md:block text-left xl:text-xl text-sm ">At LunarEdge, we transform <span className="italic">“ideas into reality”.</span></p>
          <p className="text-left xl:text-xl text-sm ">
            Founded with a vision to drive smart innovation, our mission is to
            bridge the gap between technology and human potential, empowering
            businesses to reach new heights.
          </p>
          <p className="hidden md:block text-left xl:text-xl text-sm">
            Our tagline, <span className="italic">“Smart Innovation Meets Infinity”</span>, reflects our
            commitment to endless possibilities and our pursuit of excellence in
            every project we undertake. Whether it’s developing cutting-edge
            software solutions or providing strategic IT consulting, we are
            dedicated to delivering results that exceed expectations.
          </p>
        </div>
        <img
          src={textimage}
          alt="Picture of tagline"
          className="hidden lg:block lg:h-[70%] lg:w-[24%] "
        />
      </div>
      <span className="flex justify-center "><button className="text-white rounded-full md:py-4 md:px-6 py-2 px-3 md:text-lg text-sm bg-gradient-to-r from-[#ff5757] to-[#8c52ff]">Get in Touch</button></span>
    </div>
  );
};

export default NewLandingPage;
