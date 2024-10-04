import React from "react";
import bgLandingPage from "../assets/bgLandingPage.png";
import {Link} from 'react-router-dom'
const FirstPage = () => {
  return (
    <div className="h-screen w-full relative">
      <div
        className={`absolute  inset-0 bg-cover bg-center `}
        style={{ backgroundImage: `url(${bgLandingPage})` }}
      />
      <div className="relative z-10 h-[100%] items-center text-black   lg:w-[50%] md:w-[45%] w-[90%] text-center mx-auto flex flex-col justify-center md:pb-5 md:justify-evenly gap-[70px] ">
        <h1 className="xl:text-7xl lg:text-5xl md:text-4xl flex flex-col text-4xl font-semibold py-6 md:mt-28 whitespace-nowrap">
         <span> Smart Innovation</span>
          <span> Meets Infinity</span>
        </h1>
        <div className="h-[200px] flex flex-col gap-6 justify-evenly">
          <h3 className="md:text-3xl text-2xl ">
            We transform innovative ideas into reality.
          </h3>
          <span className="flex justify-center ">
            <Link to={'/contactus'}
              className="text-white rounded-full md:py-4 md:px-6 py-2 px-3 md:text-lg text-sm bg-gradient-to-r
         from-[#ff5757] to-[#8c52ff]"
            >
              Get in Touch
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
