import React from "react";
import bgHowWeDo from "./bgHowWeDo.png";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";

const HowWeDo = () => {
  return (
    <div className="relative h-[1600px] bg-white dark:bg-black ">
      {/* Background Image */}
      <img
        src={bgHowWeDo}
        alt="How We Do Background"
        className="absolute inset-0 z-0 mt-[10%] w-[90%] h-[90%] object-contain opacity-50 pointer-events-none"
      />

      <div className="h-full  z-10 flex flex-col items-center justify-center py-10 absolute inset-0">
        <h1 className="text-5xl font-normal mb-10 text-black dark:text-white">
          Process We follow
        </h1>
        <h4 className="text-3xl font-normal mb-10 text-black dark:text-white">
          How we do
        </h4>
        <div className=" max-w-md ">
          {/* Step 1 */}
          <div className="flex items-center ">
            <div className="w-28 h-28 bg-gradient-to-r from-[#5d5d5d] to-[#ffffff] dark:bg-gradient-to-r dark:from-[#5d5d5d] dark:to-[#ffffff] rounded-full"></div>
            <div className="flex-1 bg-gradient-to-r from-[#5d5d5d] to-[#dddbdb] dark:bg-gradient-to-r dark:from-[#000000] dark:to-[#737373] text-xl  rounded-full p-6 text-black dark:text-white text-center m-auto font-semibold">
              Initial Consultation and Requirement Gathering
            </div>
          </div>

          <div className="w-full flex flex-col justify-center ml-10 ">
            <div className="text-center border-2 border-black dark:border-white w-[90%] h-[2rem] border-dashed border-y-0 border-r-0 rounded-bl-lg"></div>
            <div className="text-center border-2 ml-2 border-black dark:border-white w-[80%] h-[3rem] border-l-0 border-b-0 border-dashed rounded-tr-lg "></div>
          </div>
          {/* Step 2 */}
          <div className="flex items-center ">
            <div className="flex-1 bg-gradient-to-r from-[#5d5d5d] to-[#dddbdb] text-xl dark:bg-gradient-to-r dark:from-[#000000] dark:to-[#737373]  rounded-full p-6 text-black dark:text-white text-center m-auto font-semibold">
              Proposal and Project Planning
            </div>
            <div className="w-28 h-28 bg-gradient-to-r from-[#5d5d5d] to-[#ffffff]  rounded-full"></div>
          </div>
          <div className="w-full flex flex-col justify-center ml-10 ">
            <div className="text-center border-2 ml-2 border-black dark:border-white w-[80%] h-[2rem] border-l-0 border-t-0 border-dashed rounded-br-lg"></div>
            <div className="text-center border-2 border-black dark:border-white w-[90%] h-[2rem] border-dashed border-y-0 border-r-0 rounded-tl-lg"></div>
          </div>

          {/* Step 3 */}
          <div className="flex items-center ">
            <div className="w-28 h-28 bg-gradient-to-r from-[#5d5d5d] to-[#ffffff]  rounded-full"></div>
            <div className="flex-1 bg-gradient-to-r from-[#5d5d5d] to-[#dddbdb] dark:bg-gradient-to-r dark:from-[#000000] dark:to-[#737373] text-xl  rounded-full p-6 text-black dark:text-white text-center m-auto font-semibold">
              Design and Prototyping
            </div>
          </div>
          <div className="w-full flex flex-col justify-center ml-10 ">
            <div className="text-center border-2 border-black  dark:border-white w-[90%] h-[2rem] border-dashed border-y-0 border-r-0 rounded-bl-lg"></div>
            <div className="text-center border-2 ml-2 border-black dark:border-white w-[80%] h-[3rem] border-l-0 border-b-0 border-dashed rounded-tr-lg "></div>
          </div>
          {/* Step 4 */}
          <div className="flex items-center ">
            <div className="flex-1 bg-gradient-to-r from-[#5d5d5d] to-[#dddbdb] dark:bg-gradient-to-r dark:from-[#000000] dark:to-[#737373] text-xl  rounded-full p-6 text-black dark:text-white text-center m-auto font-semibold">
              Quality Assurance and Testing
            </div>
            <div className="w-28 h-28 bg-gradient-to-r from-[#5d5d5d] to-[#ffffff]  rounded-full"></div>
          </div>
          <div className="w-full flex flex-col justify-center ml-10">
            <div className="text-center border-2 ml-2 border-black dark:border-white w-[80%] h-[2rem] border-l-0 border-t-0 border-dashed rounded-br-lg"></div>
            <div className="text-center border-2 border-black dark:border-white w-[90%] h-[2rem] border-dashed border-y-0 border-r-0 rounded-tl-lg"></div>
          </div>
          {/* Step 5 */}
          <div className="flex items-center ">
            <div className="w-28 h-28  bg-gradient-to-r from-[#5d5d5d] to-[#ffffff]  rounded-full"></div>
            <div className=" bg-gradient-to-r from-[#5d5d5d] to-[#dddbdb] dark:bg-gradient-to-r dark:from-[#000000] dark:to-[#737373] text-xl  rounded-full p-6 text-black dark:text-white text-center m-auto font-semibold">
              Deployment and Implementation
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full flex flex-col justify-center ml-10 ">
              <div className="text-center border-2 border-black dark:border-white w-[90%] h-[2rem] border-dashed border-y-0 border-r-0 rounded-bl-lg"></div>
              <div className="text-center border-2 ml-2 border-black dark:border-white w-[90%] h-[3rem] border-l-0 border-b-0 border-dashed rounded-tr-lg "></div>
            </div>
          </div>
          {/* Step 6 */}
          <div className="flex items-center ">
            <div className="flex-1 bg-gradient-to-r from-[#5d5d5d] to-[#dddbdb] dark:bg-gradient-to-r dark:from-[#000000] dark:to-[#737373] text-xl  rounded-full p-6 text-black dark:text-white text-center m-auto font-semibold">
              Post-Deployment Support
            </div>
            <div className="w-28 h-28 bg-gradient-to-r from-[#5d5d5d] to-[#ffffff]  rounded-full"></div>
          </div>
        </div>
        <div className=" items-center mt-12 ">
        <span className="flex justify-center ">
          <Link
            to={"/contactus"}
            className="text-white rounded-full md:py-4 md:px-6 py-2 px-3 md:text-lg text-sm bg-gradient-to-r
         from-[#ff5757] to-[#8c52ff] "
          >
            Get in Touch
          </Link>
        </span>
      </div>
      </div>
      
      
    </div>
  );
};

export default HowWeDo;
