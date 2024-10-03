import React from "react";
import hawaMahal from "../assets/hawaMahal.png";
import hawaMahalPhone from "../assets/hawaMahalPhone.png";
import { useMediaQuery } from "react-responsive";


const HawaMahal = () => {
  const isExtraSmallDevice = useMediaQuery({ maxWidth: 699 });
  return (
    <div className="w-full h-[450px] md:h-[600px] my-7">
         <img
            src={`${isExtraSmallDevice ? hawaMahalPhone : hawaMahal}`}
            alt="Picture of tagline"
            className="w-[90%] h-[95%] md:h-[80%] mx-auto object-contain"
          />
    </div>
  );
};

export default HawaMahal;
