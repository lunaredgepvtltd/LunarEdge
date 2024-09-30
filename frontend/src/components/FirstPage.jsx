import React from "react";
import bgLandingPage from "../assets/bgLandingPage.png";

const FirstPage = () => {
  return (
    <div className="h-screen w-full relative">
      <div
        className={`absolute inset-0 bg-cover bg-center`}
        style={{ backgroundImage: `url(${bgLandingPage})` }}
      />
      <div className="relative z-10 h-[100%] items-center   text-black w-[40%] text-center mx-auto flex flex-col justify-center gap-7 py-5 ">
        <h1 className="text-7xl font-bold">Smart Innovation Meets Infinity</h1>
        <h3 className="text-xl">We transform innovative ideas into reality.</h3>
        <span className="flex justify-center "><button className="text-white rounded-full md:py-4 md:px-6 py-2 px-3 md:text-lg text-sm bg-gradient-to-r from-[#ff5757] to-[#8c52ff]">Get in Touch</button></span>
      </div>
    </div>
  );
};

export default FirstPage;
