import React from "react";
import hawaMahal from "../assets/hawaMahal.png";
import textimage from "../assets/textimage.png";

const NewLandingPage = () => {
  return (
    <div className="bg-custom-gradient h-screen pt-[60px] flex flex-col justify-evenly">
      <h1 className="text-center text-4xl font-normal">ABOUT US</h1>
      <div className="h-[430px]  flex  justify-evenly items-center">
        <img
          src={hawaMahal}
          alt="Picture of HawaMahal"
          className="h-[90%] w-[20%]"
        />
        <div className="w-[30%] space-y-8 text-xl font-normal text-left">
          <p className="text-left">At LunarEdge, we transform <span className="italic">“ideas into reality”.</span></p>
          <p className="text-left">
            Founded with a vision to drive smart innovation, our mission is to
            bridge the gap between technology and human potential, empowering
            businesses to reach new heights.
          </p>
          <p className="text-left">
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
          className="h-[70%] w-[20%]"
        />
      </div>
      <span className="flex justify-center "><button className="text-white rounded-full py-4 px-6 text-lg bg-gradient-to-r from-[#ff5757] to-[#8c52ff]">Get in Touch</button></span>
    </div>
  );
};

export default NewLandingPage;
