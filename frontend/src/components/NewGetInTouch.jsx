import React from "react";
import SideImage from "../assets/SideImageGetInTouch.png";

const GetInTouch = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse items-center w-[100%] h-full bg-white md:p-0 p-4">
      <div className="md:w-[60%] p-6 w-full">
        <div className="flex flex-col items-center w-full">
          <h2 className="xl:text-5xl md:text-3xl font-bold text-gray-800 mb-4">
            Have a <span className="text-pink-500">project</span> in mind?
          </h2>
          <h3 className="xl:text-4xl md:text-2xl font-semibold text-gray-800 mb-8">
            Send us an e-mail
          </h3>
          <p className="text-black mb-8 xl:text-lg text-sm font-light text-left md:w-[70%]">
            LunarEdge provides a wide range of IT services, from website
            development to software solutions, helping businesses grow with
            innovative strategies and support.
          </p>
          <div className="flex flex-row w-full justify-center">
            <input
              type="email"
              placeholder="Your Email"
              className="md:w-[35%] md:text-lg text-xs border border-gray-300 bg-gray-200 rounded-s-lg py-2 px-4 focus:outline-none focus:ring-1 focus:ring-pink-600"
            />
            <button className=" md:text-lg text-xs bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-2 px-6 rounded-e-lg hover:from-purple-500 hover:to-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500">
              Send
            </button>
          </div>
        </div>
      </div>
      <div className=" md:flex justify-end w-[40%]">
        <img
          src={SideImage} // Replace with your actual image path
          alt="Abstract Head"
          className=" object-cover opacity-45"
        />
      </div>
    </div>
  );
};

export default GetInTouch;
