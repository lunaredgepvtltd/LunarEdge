import React from "react";
import BottomImage from "./bgCareer3.png";
import { useOutletContext } from "react-router-dom";


const Careerbottom = () => {

    const { darkMode } = useOutletContext();
    
  return (
    <div className="relative flex flex-col h-auto bg-white dark:bg-black"
    >
       <img
        src={BottomImage}
        alt="bg"
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{
          zIndex: 0,
        }}
      />
  
    

    
      <div className="z-10 flex-col flex justify-center items-center  h-[450px] md:h-[700px] px-4">
       
        <p className="text-black dark:text-white text-md md:text-2xl max-w-5xl text-center mx-auto px-4">
          Don’t see a position that matches your skills? Send us your resume at{" "}
          <a
            href="mailto:careers@lunaredge.com"
            className="text-black dark:text-white underline"
          >
            careers@lunaredge.com
          </a>
          . We’d love to hear from you!
        </p>
      </div>

      
    </div>
  );
};

export default Careerbottom;
